"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[594],{1819:function(t,a,o){o.r(a),o.d(a,{default:function(){return h}});var n=o(6768),i=o(4232),e=o(5130);const s={class:"title"},r={class:"author"},l={class:"created-at"},d={class:"updated-at"},c={class:"pagination"},p=["onClick"],g={class:"form"};function u(t,a,o,u,f,v){return(0,n.uX)(),(0,n.CE)(n.FK,null,[a[6]||(a[6]=(0,n.Fv)('<div class="row"><div class="title">제목</div><div class="author">작성자</div><div class="created-at">작성일</div><div class="updated-at">수정일</div></div>',1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(f.posts,(t=>((0,n.uX)(),(0,n.CE)("div",{class:"row",key:t.id},[(0,n.Lk)("div",s,(0,i.v_)(t.title),1),(0,n.Lk)("div",r,(0,i.v_)(t.author),1),(0,n.Lk)("div",l,(0,i.v_)(t.createdAt),1),(0,n.Lk)("div",d,(0,i.v_)(t.updatedAt),1)])))),128)),(0,n.Lk)("div",c,[1!=f.paginationInfo.firstPageNoOnPageList?((0,n.uX)(),(0,n.CE)("div",{key:0,onClick:a[0]||(a[0]=t=>v.getPosts(f.paginationInfo.firstPageNoOnPageList-1))},"❰")):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(v.paginationArray,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t,onClick:a=>t!==f.paginationInfo.currentPageNo&&v.getPosts(t),style:(0,i.Tr)(t===f.paginationInfo.currentPageNo?{pointerEvents:"none",backgroundColor:"#ccc"}:{})},(0,i.v_)(t),13,p)))),128)),f.paginationInfo.lastPageNoOnPageList!=f.paginationInfo.totalPageCount?((0,n.uX)(),(0,n.CE)("div",{key:1,onClick:a[1]||(a[1]=t=>v.getPosts(f.paginationInfo.lastPageNoOnPageList+1))},"❱")):(0,n.Q3)("",!0)]),(0,n.Lk)("div",g,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=t=>f.formData.title=t),placeholder:"제목"},null,512),[[e.Jo,f.formData.title]]),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=t=>f.formData.author=t),placeholder:"작성자"},null,512),[[e.Jo,f.formData.author]]),(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":a[4]||(a[4]=t=>f.formData.content=t),placeholder:"내용"},null,512),[[e.Jo,f.formData.content]]),(0,n.Lk)("input",{type:"button",onClick:a[5]||(a[5]=(...t)=>v.addPost&&v.addPost(...t)),value:"데이터 추가"})])],64)}var f={data(){return{posts:[],formData:{},paginationInfo:{}}},computed:{paginationArray(){return Array.from({length:this.paginationInfo.lastPageNoOnPageList-this.paginationInfo.firstPageNoOnPageList+1},((t,a)=>a+this.paginationInfo.firstPageNoOnPageList))}},methods:{async getPosts(t){try{const a=await this.$axios.get("/post",{params:{pageNo:t}});this.posts=a.data.posts,this.paginationInfo=a.data.paginationInfo}catch(a){console.log(a)}},async addPost(){try{await this.$axios.post("/post",this.formData),await this.getPosts(this.paginationInfo.currentPageNo)}catch(t){console.log(t)}}},created(){this.getPosts(1)}},v=o(1241);const P=(0,v.A)(f,[["render",u]]);var h=P}}]);
//# sourceMappingURL=about.be09160d.js.map