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
    * **`vue create frontend`** 해당 경로에서 frontend 프로젝트 생성
    * cd frontend를 통해 frontend 프로젝트 내부로 이동
    * **`vue add router`** 해당 경로에서 라우터 추가
## 라우터 설정
   * 라우터 설정을 통해 views에 있는 vue들의 경로를 매핑해주어야 한다.
   <table>
   <tr><th>src > router > index.js</th></tr>
   <tr><td>
      
   ```js
   import { createRouter, createWebHistory } from 'vue-router'
   import HomeView from '../views/HomeView.vue'
   
   const routes = [
     {
       path: '/',
       name: 'home',
       component: HomeView
     },
     {
       path: '/about',
       name: 'about',
       // route level code-splitting
       // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
     }
   ]
   
   const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes
   })
   
   export default router
   ```
   </td></tr>
   </table>
   
## Vue 문법
