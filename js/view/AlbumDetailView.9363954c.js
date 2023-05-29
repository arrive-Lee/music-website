import{g as s,u as a}from"../element-plus/element-plus.372e8740.js";import{G as e,ax as o,Z as t,i as l,d as i,c as n,P as r,V as m,U as p,u,a as c,T as d,M as v,R as g,O as h,z as f,o as j,S as b}from"../@vue/@vue.7ad02ad1.js";import{b as y}from"../vue-router/vue-router.47595bf3.js";import{g as _,a as A,b as T,N as w,r as B,e as L,d as R,R as x,i as z,j as O,s as S,_ as I}from"../../assets/index-502e0095.js";import{P as M}from"../PlayButton/PlayButton.4f8abb66.js";import{D as k}from"../DecoratedButton/DecoratedButton.0fe1f3e8.js";import{M as D}from"../MoreButton/MoreButton.4a3174f7.js";import{T as P}from"../Tab/Tab.376473d4.js";import{_ as C}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.c44a051d.js";import{O as E}from"../OnlineBatch/OnlineBatch.3b341433.js";import{A as G}from"../Albums/Albums.9d99ea8d.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";const U={class:"album-detail-container scroll-container"},q={class:"header"},V={class:"right"},N={class:"artist"},Z={class:"header-operation"},F={class:"content"},H={class:"info"},J={class:"desc"},K=I(e({__name:"AlbumDetailView",setup(e){o((s=>({d465317e:u(I),"383a993e":u(K),"4cb537a9":u(Q),"3576c298":u(W)})));const I=_().get("fontColor"),K=_().get("fontBlack"),Q=_().get("shadow"),W=f("fontGray"),X=A(),Y=y(),$=Y.query.id+"",ss=Y.query.artistId+"",as=t({id:$,artistId:ss,name:"",cover:"",artist:"",publishTime:""}),es=t([]),os=t([]),ts=l((()=>new Map(os.map(((s,a)=>[s.id,a]))))),ls=f("firstLoading"),is=f("hideScroll"),ns=i(!1),rs=s=>{ns.value=s},ms=s=>{is(),ns.value=s},ps=()=>{S("我有一个精品专辑分享给你："+as.name+"，地址：https://www.liyinchao.cloud/#"+Y.fullPath)},us=()=>{is()};return T((async()=>{try{const s=await w(ss),{hotAlbums:a}=s;for(let e of a){const{id:s}=e;if(s!=$&&es.length<=5){const{picUrl:a,name:o,publishTime:t}=e;es.push({name:o,id:s,cover:a,publishTime:B(t),artistId:ss+""})}else if(es.length>5)break}}catch(s){L(R.ERROR,s.message)}try{const s=await x($),{album:{picUrl:a,artist:e,publishTime:o,name:t,company:l,description:i},songs:n}=s;as.name=t,as.cover=a,as.publishTime=B(o),as.artist=e.name,as.company=l,as.description=i,X.initLoveStatus(as,X.loveAlbumId);const r=[];n.forEach((s=>{z(r,os,s)})),X.initLoveMusic(os),O(r.join(","),os)}catch(s){L(R.ERROR,s.message)}ls.value=!1}),ls),(e,o)=>{const t=s,l=a;return j(),n("div",U,[r(p(E,{songs:os,"song-id-mapper":u(ts),onCloseSelect:rs},null,8,["songs","song-id-mapper"]),[[m,ns.value]]),r(c("div",q,[p(t,{src:as.cover,loading:"lazy",class:"left"},null,8,["src"]),c("div",V,[c("h4",null,d(as.name),1),c("p",N,d(as.artist),1),c("p",null,d(as.publishTime),1),c("div",Z,[p(M,{songs:os},null,8,["songs"]),p(k,{name:as.isLove?"取消收藏":"收藏",icon:as.isLove?"":"","icon-style":as.isLove?"color:#ff6a6a;":"",onClick:o[0]||(o[0]=s=>u(X).addLove(as,u(X).loveAlbum,u(X).loveAlbumId,"loveAlbum"))},null,8,["name","icon","icon-style"]),ns.value?g("",!0):(j(),v(D,{key:0,"share-to":ps,onOpenSelect:ms}))])])],512),[[m,!ns.value]]),r(c("div",F,[p(P,{active:"songs",onGetActive:us},{content:h((()=>[p(l,{label:"歌曲",name:"songs"},{default:h((()=>[p(C,{songs:os,"song-id-mapper":u(ts)},null,8,["songs","song-id-mapper"]),p(G,{albums:es,title:"该歌手的其它专辑"},null,8,["albums"])])),_:1}),p(l,{label:"详情",name:"album"},{default:h((()=>[c("div",H,[c("p",null,[b(" 专辑："),c("span",null,d(as.name),1)]),c("p",null,[b(" 歌手："),c("span",null,d(as.artist),1)]),c("p",null,[b(" 唱片公司："),c("span",null,d(as.company),1)]),c("p",null,[b(" 发布时间："),c("span",null,d(as.publishTime),1)]),c("p",null,[b(" 专辑简介："),c("span",J,d(as.description),1)])])])),_:1})])),_:1})],512),[[m,!ns.value]])])}}}),[["__scopeId","data-v-869830c5"]]);export{K as default};
