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
## Vue 작성
   라우터 추가할 때 자동추가된 AboutView.vue를 수정해서 테스트해보도록 하겠습니다.
   <table>
   <tr><th>src > views > AboutView.vue</th></tr>
   <tr><td>
      
   ```vue
   <template>
   <div class="about">
    <h1>This is an about page</h1>
   </div>
   </template>
   <script>
   </script>

   ```
   </td></tr>
   </table>
