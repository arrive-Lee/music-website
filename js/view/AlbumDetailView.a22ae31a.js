import{g as s,u as a}from"../element-plus/element-plus.f3996937.js";import{G as e,ax as t,Z as o,c as l,a as i,U as n,T as r,O as m,u as p,o as u,S as c,z as d}from"../@vue/@vue.7ad02ad1.js";import{b as j}from"../vue-router/vue-router.53ff932e.js";import{g as f,b as h,A as b,p as v,H as g,f as y,h as T,_}from"../../assets/index-80ac5bcd.js";import{A}from"../Albums/Albums.4d3343f4.js";import{T as z,_ as w}from"../Tab/Tab.2812a435.js";import{P as B}from"../PlayButton/PlayButton.6ed61330.js";import{D as x}from"../DecoratedButton/DecoratedButton.e6e05208.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.07d51cb2.js";import"../lodash/lodash.57b1d944.js";import"../nprogress/nprogress.8c6d26c7.js";const D={class:"album-detail-container scroll-container"},I={class:"header"},P={class:"right"},U={class:"artist"},k={class:"header-operation"},q={class:"content"},G={class:"info"},S={class:"desc"},C=_(e({__name:"AlbumDetailView",setup(e){t((s=>({"25dff111":p(_),"0e45b16e":p(C),"19ce5979":p(E)})));const _=f().get("fontColor"),C=f().get("fontBlack"),E=f().get("shadow"),H=j(),L=H.query.id+"",O=H.query.artistId+"",V=o({id:L,artistId:O,name:"",cover:"",artist:"",publishTime:""}),Z=o([]),F=o([]),J=d("firstLoading"),K=d("hideScroll"),M=()=>{K()};return h((async()=>{const s=await b(O),{hotAlbums:a}=s;for(let u of a){const{id:s}=u;if(s!=L&&Z.length<=5){const{picUrl:a,name:e,publishTime:t}=u;Z.push({name:e,id:s,cover:a,publishTime:v(t),artistId:O+""})}else if(Z.length>5)break}const e=await g(L),{album:{picUrl:t,artist:o,publishTime:l,name:i,company:n,description:r},songs:m}=e;V.name=i,V.cover=t,V.publishTime=v(l),V.artist=o.name,V.company=n,V.description=r;const p=[];m.forEach((s=>{y(p,F,s)})),T(p.join(","),F),J.value=!1}),J),(e,t)=>{const o=s,p=a;return u(),l("div",D,[i("div",I,[n(o,{src:V.cover,lazy:"",class:"left"},null,8,["src"]),i("div",P,[i("h4",null,r(V.name),1),i("p",U,r(V.artist),1),i("p",null,r(V.publishTime),1),i("div",k,[n(B,{songs:F},null,8,["songs"]),n(x,{name:"收藏",icon:""})])])]),i("div",q,[n(z,{active:"songs",onGetActive:M},{content:m((()=>[n(p,{label:"歌曲",name:"songs"},{default:m((()=>[n(w,{songs:F},null,8,["songs"]),n(A,{albums:Z,title:"该歌手的其它专辑"},null,8,["albums"])])),_:1}),n(p,{label:"详情",name:"album"},{default:m((()=>[i("div",G,[i("p",null,[c(" 专辑："),i("span",null,r(V.name),1)]),i("p",null,[c(" 歌手："),i("span",null,r(V.artist),1)]),i("p",null,[c(" 唱片公司："),i("span",null,r(V.company),1)]),i("p",null,[c(" 发布时间："),i("span",null,r(V.publishTime),1)]),i("p",null,[c(" 专辑简介："),i("span",S,r(V.description),1)])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-73532ca2"]]);export{C as default};
