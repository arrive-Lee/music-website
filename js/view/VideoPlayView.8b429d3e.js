import{G as a,Z as s,c as e,a as t,T as o,U as i,z as r,o as l,ax as n,u as m}from"../@vue/@vue.69a1071d.js";import{b as p}from"../vue-router/vue-router.f91b6d5b.js";import{g as c,p as u,e as d,d as v,q as j,r as h,_ as f}from"../../assets/index-dfd51332.js";import{D as g}from"../DecoratedButton/DecoratedButton.8342126a.js";import{M as y}from"../Mv/Mv.f89065ee.js";import"../element-plus/element-plus.e3268319.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.ea52d298.js";import"../@element-plus/@element-plus.a36f95b2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.294e9718.js";import"../lodash/lodash.57b1d944.js";import"../nprogress/nprogress.8c6d26c7.js";const R={class:"video-container common-container"},b=["src"],C={class:"detail"},x={class:"title"},z={class:"artist-info"},T={class:"operation"},_=f(a({__name:"VideoPlayView",setup(a){n((a=>({"47d39376":m(f),"49a0c629":m(_),"0a9f7d44":m(w)})));const f=c().get("fontColor"),_=c().get("fontBlack"),w=c().get("shadow"),B=p().query.id,E=s({id:""+B,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),D=s([]),M=r("firstLoading");return M.value=!0,u(E.id).then((a=>{const{data:{name:s,artistName:e,cover:t,playCount:o,duration:i,publishTime:r}}=a;E.name=s,E.image=t,E.artist=e,E.playCount=o,E.time=i,E.publishTime=r})).catch((a=>{d(v.ERROR,a.message)})),j(E.id).then((a=>{const{data:{url:s,fee:e}}=a;E.url=s,E.available=e})).catch((a=>{d(v.ERROR,a.message)})),h(E.id).then((a=>{const{mvs:s}=a;s.forEach((a=>{D.push({id:a.id,image:a.cover,name:a.name,artist:a.artistName,playCount:a.playCount})})),M.value=!1})).catch((a=>{d(v.ERROR,a.message)})),(a,s)=>(l(),e("div",R,[t("video",{src:E.url,controls:"",ref:"video",class:"video-player"},null,8,b),t("div",C,[t("p",x,o(E.name),1),t("div",z,[t("span",null,"演唱："+o(E.artist),1),t("span",null,o(E.playCount)+"次观看",1),t("span",null,"发布时间："+o(E.publishTime),1)]),t("div",T,[i(g,{name:"收藏",icon:"",class:"operate"}),i(g,{name:"下载",icon:"",class:"operate"}),i(g,{name:"分享",icon:"",class:"operate"}),i(g,{name:"评论",icon:"",class:"operate"})])]),i(y,{mvs:D,title:"相关推荐"},null,8,["mvs"])]))}}),[["__scopeId","data-v-e1a5a602"]]);export{_ as default};
