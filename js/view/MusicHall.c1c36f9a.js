import{v as e,g as s,w as a}from"../element-plus/element-plus.1b7b143d.js";import{G as l,d as o,Z as t,P as i,c as n,F as r,a7 as c,a as u,u as m,V as d,z as p,o as v,T as g,a2 as j,U as h,ay as f,az as y,aA as b}from"../@vue/@vue.8ad7c23d.js";import{u as w}from"../vue-router/vue-router.b970196e.js";import{g as z,t as R,e as k,d as x,v as _,S as E,_ as I}from"../../assets/index-26ab7b85.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.975449d5.js";import"../@element-plus/@element-plus.6a4138c6.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.5e0359dc.js";import"../lodash/lodash.57b1d944.js";import"../nprogress/nprogress.8c6d26c7.js";const M=["infinite-scroll-disabled"],O={class:"title"},F={class:"content"},N=["onMousedown"],S=(e=>(y("data-v-2649b7b3"),e=e(),b(),e))((()=>u("span",{class:"iconfont play"},"",-1))),T=["element-loading-background","element-loading-spinner"],q=I(l({__name:"MusicHall",setup(l){f((e=>({"3c143b44":m(b),"0bc0dc46":m(I)})));const y=w(),b=z().get("fontColor"),I=z().get("shadow"),q=z().get("background"),A=o(1),C=o(!1),G=o(!1),H=t([]),L=t([]),P=p("firstLoading");P.value=!0;const U=p("hideScroll"),V=()=>{A.value<H.length?(G.value=!0,C.value=!0,setTimeout((async()=>{await Z(H[A.value].id),G.value=!1,C.value=!1,A.value++}),1e3)):(C.value=!0,k(x.INFO,"已达到底部"))};R().then((e=>{const{data:s}=e;s.forEach(((e,s)=>{const{tagId:a,tagName:l}=e;H.push({id:a,name:l}),s<A.value&&Z(a)})),P.value=!1})).catch((e=>{k(x.ERROR,e.message)}));const Z=e=>{_(e).then((e=>{const{data:{playlist:s}}=e,a=t([]);s.forEach((e=>{const{id:s,name:l,cover:o}=e;a.push({id:s,name:l,cover:o})})),L.push(a)})).catch((e=>{k(x.ERROR,e.message)}))};return(l,o)=>{const t=s,p=e,f=a;return i((v(),n("div",{class:"music-hall-container scroll-container","infinite-scroll-distance":"2","infinite-scroll-immediate":!1,"infinite-scroll-disabled":C.value,style:{overflow:"auto"}},[(v(!0),n(r,null,c(H.slice(0,A.value),((e,s)=>(v(),n("div",{key:e.id,class:"style-container"},[u("h4",O,g(e.name),1),u("div",F,[(v(!0),n(r,null,c(L[s],(e=>(v(),n("div",{onMousedown:j((s=>{return a=e.id,U(),void y.push({name:"playlist",query:{id:a+""}});var a}),["prevent"]),key:e.id,class:"style"},[S,h(t,{src:e.cover,lazy:""},null,8,["src"]),u("span",null,g(e.name),1)],40,N)))),128))])])))),128)),i(u("div",{"element-loading-background":m(q),"element-loading-text":"加载中，请勿继续滚动！","element-loading-spinner":m(E),class:"tip"},null,8,T),[[d,G.value],[p,G.value]])],8,M)),[[f,V]])}}}),[["__scopeId","data-v-2649b7b3"]]);export{q as default};
