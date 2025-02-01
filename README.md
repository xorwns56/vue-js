<img src="/images/vue-js.png" width="50%"/><br/>
## 개발 환경 설정
1. **node.js 설치 및 확인**
    * [node.js 설치](https://nodejs.org/ko)
    * **`node -v`** node.js 설치 확인<br/>
      **`npm -v`** npm 설치 확인(node package manager, node.js 설치 시 자동 설치됨)
2. **vue.js 설치**
    * **`npm install -g @vue/cli`** npm으로 vue의 command line interface 패키지를 전역으로 설치<br/>
    * **`vue --version`** vue 설치 확인
3. **프로젝트 생성**
    * cd를 통해 프로젝트를 생성할 경로로 이동
    * **`vue create project`** 해당 경로에서 project라는 이름을 가진 프로젝트 생성
4. **라우터 설정**
    * cd project를 통해 project라는 이름의 프로젝트 내부로 이동
    * **`vue add router`** 해당 경로에서 라우터 추가
    * 라우터 설정을 통해서 접근할 vue들의 경로를 매핑
      <table>
      <tr><th>src > router > index.js</th></tr>
      <tr><td>
         
      ```js
      import { createRouter, createWebHistory } from 'vue-router'
      
      const routes = [
        { path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue') },
        { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') }
      ]
      
      const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
      })
   
      export default router
      ```
      </td></tr>
      </table>
5. **axios 설치**
    * cd project를 통해 project라는 이름의 프로젝트 내부로 이동
    * **`npm install axios`** 해당 경로에서 axios 추가
    * main.js에서 axios import 후 instance를 전역으로 추가
      <table>
      <tr><th>src > main.js</th></tr>
      <tr><td>
         
      ```js
      import { createApp } from 'vue'
      import App from './App.vue'
      import router from './router'
      import axios from 'axios';
      
      const app = createApp(App);
      
      const developmentPath = 'http://localhost:3000/api'; //개발 시 경로
      const productionPath = 'http://localhost:8080'; //빌드 후 경로
      
      const axiosInstance = axios.create({
        baseURL: process.env.NODE_ENV === 'development' ? developmentPath : productionPath,
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      app.config.globalProperties.$axios = axiosInstance;
      
      app.use(router).mount('#app')
      ```
      </td></tr>
      </table>
6. **vue.config.js 수정**
    * 개발환경에서의 CORS 문제를 해결하기 위해 프록시 설정
    * 프론트엔드 개발 서버의 포트를 3000으로 고정
      <table>
      <tr><th>vue.config.js</th></tr>
      <tr><td>
         
      ```js
      const { defineConfig } = require('@vue/cli-service')
      module.exports = defineConfig({
        transpileDependencies: true,
        devServer: {
      	port: 3000,
      	proxy: {
      		"/api": {
      			target: "http://localhost:8080",
      			changeOrigin: true,
      			pathRewrite: {
      				"^/api": ""
      			}
      		}
      	}
        }
      })
      ```
      </td></tr>
      </table>
## Vue 작성
   라우터 추가할 때 자동추가된 AboutView.vue를 수정해서 테스트
   <table>
   <tr><th>src > views > AboutView.vue</th></tr>
   <tr><td>
      
   ```vue
   <style>
      .row{
      width:80%;
      margin:0 auto;
      display:flex;
      flex-direction:row;
      flex-wrap:nowrap;
      }
      .row div{
      border:1px solid black;
      }
      .title{
      flex:3;
      }
      .author{
      flex:1;
      }
      .created-at{
      flex:1;
      }
      .updated-at{
      flex:1;
      }
      .form{
      margin:50px auto;
      width:300px;
      height:150px;
      padding:5px;
      display:flex;
      flex-direction:column;
      border:1px solid black;
      }
      .form textarea{
      flex:1;
      }
      .pagination{
      display:inline-block;
      }
      .pagination div{
      float:left;
      padding:8px 16px;
      }
      .pagination div:hover{
      cursor: pointer;
      background-color:#ccc;
      }
   </style>
   <template>
      <div class="row">
      <div class="title">제목</div>
      <div class="author">작성자</div>
      <div class="created-at">작성일</div>
      <div class="updated-at">수정일</div>
      </div>
   
      <div class="row" v-for="post in posts" v-bind:key="post.id">
      <div class="title">{{post.title}}</div>
      <div class="author">{{post.author}}</div>
      <div class="created-at">{{post.createdAt}}</div>
      <div class="updated-at">{{post.updatedAt}}</div>
      </div>
   
      <div class="pagination">
      <div v-if="paginationInfo.firstPageNoOnPageList != 1" v-on:click="getPosts(paginationInfo.firstPageNoOnPageList - 1)">&#x2770;</div>
      <div v-for="page in paginationArray" v-bind:key="page" v-on:click="page !== paginationInfo.currentPageNo && getPosts(page)" v-bind:style="page === paginationInfo.currentPageNo ? { pointerEvents:'none', backgroundColor:'#ccc' } : {}">
      	{{page}}
      </div>
      <div v-if="paginationInfo.lastPageNoOnPageList != paginationInfo.totalPageCount" v-on:click="getPosts(paginationInfo.lastPageNoOnPageList + 1)">&#x2771;</div>
      </div>
   
      <div class="form">
      <input type="text" v-model="formData.title" placeholder="제목"/>
      <input type="text" v-model="formData.author" placeholder="작성자"/>
      <textarea v-model="formData.content" placeholder="내용"></textarea>
      <input type="button" v-on:click="addPost" value="데이터 추가"/>
      </div>
   </template>
   
   <script>
   export default{
      data(){
      	return {
      		posts : [],
      		formData : {},
      		paginationInfo : {}
      	}
      },
      computed:{
      	paginationArray(){
      		return Array.from({length: this.paginationInfo.lastPageNoOnPageList - this.paginationInfo.firstPageNoOnPageList + 1}, (v, i) => i + this.paginationInfo.firstPageNoOnPageList);
      	}
      },
      methods:{
         async getPosts(pageNo){
         	try{
         		const response = await this.$axios.get("/post", {
         			params :  {
         				pageNo : pageNo
         			}
         		});
         		this.posts = response.data.posts;
         		this.paginationInfo = response.data.paginationInfo;
         	}catch(error){
         		console.log(error);
         	}
         },
         async addPost(){
         	try{
         		await this.$axios.post("/post", this.formData);
         		await this.getPosts(this.paginationInfo.currentPageNo);
         	}catch(error){
         		console.log(error);
         	}
         }
      },
      created(){
         this.getPosts(1);
   }
   }
   </script>

   ```
   </td></tr>
   </table>
