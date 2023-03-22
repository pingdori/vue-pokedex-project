import{a as n}from"./AddToCart-61a80802.js";import{_,r as u,o as c,c as r,a as s,t as e,b as p,F as d,q as h}from"./index-ed8b4226.js";const{VITE_APP_URL:m,VITE_APP_PATH:v}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"pokebox",BASE_URL:"/vue-pokedex-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},b={data(){return{product:[]}},components:{addToCart:n},methods:{getProduct(){const{id:i}=this.$route.params;this.$http.get(`${m}v2/api/${v}/product/${i}`).then(o=>{this.product=o.data.product}).catch(o=>{alert(o.response.data.message)})}},mounted(){this.getProduct()}},g=s("div",{class:"underNav"},null,-1),x={class:"container"},f=s("div",{class:"underNav d-sm-block d-md-none"},null,-1),w={class:"row align-items-center"},P={class:"col-md-7"},y={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},E={class:"carousel-inner"},V={class:"carousel-item active"},T=["src"],k=s("a",{class:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},[s("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),s("span",{class:"sr-only"},"Previous")],-1),A=s("a",{class:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},[s("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),s("span",{class:"sr-only"},"Next")],-1),C={class:"col-md-5"},U={"aria-label":"breadcrumb"},L={class:"breadcrumb bg-white px-0 mb-0 py-3"},N=s("li",{class:"breadcrumb-item"},[s("a",{class:"text-muted",href:"../FrontLayout.vue"},"首頁")],-1),R=s("li",{class:"breadcrumb-item"},[s("a",{class:"text-muted",href:"./ProductsView.vue"},"周邊")],-1),B={class:"breadcrumb-item active","aria-current":"page"},D={class:"fw-bold h1 mb-1"},I={class:"mb-0 text-muted text-end"},S={class:"h4 fw-bold text-end"},F={class:"row align-items-center"},j=s("div",{class:"col-6"},null,-1),H={class:"row my-5"},O={class:"col-md-6"},q=s("h3",{class:"fw-bold"},"產品細節",-1),M={class:"swiper-container mt-4 mb-5"},z={class:"swiper-wrapper"},G={class:"swiper-slide"},J=["src"],K=["src"],Q={class:"bg-light py-4"},W={class:"container"},X={class:"d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"},Y={class:"mb-0 fw-bold"};function Z(i,o,$,ss,t,ts){const a=u("addToCart");return c(),r(d,null,[g,s("div",x,[f,s("div",w,[s("div",P,[s("div",y,[s("div",E,[s("div",V,[s("img",{src:t.product.imageUrl,class:"d-block w-100",alt:"..."},null,8,T)])]),k,A])]),s("div",C,[s("nav",U,[s("ol",L,[N,R,s("li",B,e(t.product.category),1)])]),s("h2",D,e(t.product.title),1),s("p",I,[s("del",null,e(t.product.origin_price)+"元",1)]),s("p",S,e(t.product.price)+"元",1),s("div",F,[j,p(a,{class:"col",id:t.product.id},null,8,["id"])])])]),s("div",H,[s("div",O,[s("p",null,e(t.product.description),1)])]),q,s("div",M,[s("div",z,[s("div",G,[s("img",{src:t.product.imageUrl,class:"card-img-top rounded-0",alt:"..."},null,8,J),(c(!0),r(d,null,h(t.product.imagesUrl,(l,es)=>(c(),r("div",{class:"card border-0 mb-4 position-relative position-relative",key:l.id},[s("img",{src:l,class:"card-img-top rounded-0",alt:"..."},null,8,K)]))),128))])])])]),s("div",Q,[s("div",W,[s("div",X,[s("p",Y,e(t.product.content),1)])])])],64)}const rs=_(b,[["render",Z]]);export{rs as default};
