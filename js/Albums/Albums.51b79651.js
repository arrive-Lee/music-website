import{g as a}from"../element-plus/element-plus.a3a17194.js";import{G as e,ax as s,u as t,z as l,r as n,i as o,ah as i,o as u,c as r,T as m,R as c,a as d,U as p,O as g,F as v,a7 as f,P as b,S as h,a0 as y,M as k,aq as C}from"../@vue/@vue.59fec093.js";import{u as P}from"../vue-router/vue-router.2f940de9.js";import{g as _,_ as j}from"../../assets/index-2c02ac3d.js";import{P as w}from"../Pagination/Pagination.2864d965.js";const I={class:"album-container"},x={key:0,class:"title"},z={class:"content"},D=["onClick"],B={class:"album-name"},q=["onClick"],A=j(e({__name:"Albums",props:{albums:null,title:{default:""},showDelete:{type:Boolean,default:!1},transitionName:{default:""},showPagination:{type:Boolean,default:!1}},emits:["getDeleteId"],setup(e,{emit:j}){const A=e;s((a=>({"54a32253":t(G),"549382ef":t(N),"437a966c":t(S),"4d1b0d1a":t(F),a76bae0a:t(T)})));const G=_().get("fontColor"),N=_().get("fontBlack"),S=_().get("shadow"),T=_().get("themeColor"),F=l("fontGray"),M=P(),O=l("hideScroll"),R=n(1),U=n(24),E=o((()=>A.albums.length)),H=o((()=>A.albums.slice((R.value-1)*U.value,R.value*U.value))),J=a=>{R.value=a};return i((()=>{O()})),(s,l)=>{const n=a,o=C("prevent");return u(),r("div",I,[e.title?(u(),r("h4",x,m(e.title),1)):c("",!0),d("div",z,[p(y,{name:e.transitionName},{default:g((()=>[(u(!0),r(v,null,f(t(H),(a=>(u(),r("div",{key:a.id,class:"album"},[p(n,{src:a.cover,loading:"lazy",class:"image"},null,8,["src"]),d("span",{class:"iconfont play",onClick:e=>{return s=a.id,t=a.artistId,O(),void M.push({name:"album",query:{id:s,artistId:t}});var s,t}},"",8,D),d("span",B,m(a.name),1),d("span",null,m(a.publishTime),1),e.showDelete?b((u(),r("span",{key:0,onClick:e=>j("getDeleteId",a.id),class:"delete iconfont"},[h("")],8,q)),[[o]]):c("",!0)])))),128))])),_:1},8,["name"]),e.showPagination&&e.albums.length>U.value?(u(),k(w,{key:0,"cur-page":R.value,"page-size":U.value,onPageChange:J,text:"个专辑",total:t(E)},null,8,["cur-page","page-size","total"])):c("",!0)])])}}}),[["__scopeId","data-v-ebe6fbef"]]);export{A};
