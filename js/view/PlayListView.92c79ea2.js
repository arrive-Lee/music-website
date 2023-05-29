import{g as a,u as s}from"../element-plus/element-plus.372e8740.js";import{G as e,ax as t,d as o,Z as l,i as n,c as i,P as r,V as m,U as c,u as p,a as u,T as d,F as g,a7 as v,M as y,R as j,O as h,z as f,o as _}from"../@vue/@vue.7ad02ad1.js";import{b}from"../vue-router/vue-router.47595bf3.js";import{g as k,a as w,b as B,l as L,e as P,d as R,m as C,i as O,j as S,n as x,o as z,C as M,s as U,_ as E}from"../../assets/index-502e0095.js";import{O as D}from"../OnlineBatch/OnlineBatch.3b341433.js";import{_ as I}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.c44a051d.js";import{T}from"../Tab/Tab.376473d4.js";import{P as G}from"../PlayButton/PlayButton.4f8abb66.js";import{D as N}from"../DecoratedButton/DecoratedButton.0fe1f3e8.js";import{M as A}from"../MoreButton/MoreButton.4a3174f7.js";import{N as F}from"../NoSearch/NoSearch.14a4f741.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";const V={class:"playlist-container scroll-container"},$={class:"header"},q=["src"],Z={class:"right"},H={class:"title"},J={class:"creator"},K={class:"creator-name"},Q={class:"tag"},W={class:"description"},X={class:"header-operation"},Y=E(e({__name:"PlayListView",setup(e){t((a=>({"56d9f072":p(E),"5a3926ad":p(Y),"3507c05a":p(aa),"3715bbe3":p(sa)})));const E=k().get("fontColor"),Y=k().get("fontBlack"),aa=k().get("shadow"),sa=f("fontGray"),ea=o(!1),ta=w(),oa=b(),la=oa.query.id+"",na=l({id:la,name:"",image:"",playCount:"",tag:[],description:"",creator:{nickname:"",avatarUrl:""}}),ia=l([]),ra=l([]),ma=n((()=>new Map(ia.map(((a,s)=>[a.id,s]))))),ca=f("firstLoading"),pa=f("hideScroll"),ua=o(!1),da=a=>{ua.value=a},ga=a=>{pa(),ua.value=a},va=()=>{U("我有一个精品歌单分享给你："+na.name+"，地址：https://www.liyinchao.cloud/#"+oa.fullPath)},ya=()=>{pa()};return B((async()=>{try{const a=await L(la),{playlist:{name:s,coverImgUrl:e,description:t,tags:o,creator:l,playCount:n}}=a;na.name=s,na.image=e,na.description=t,na.tag=o,na.creator.avatarUrl=l.avatarUrl,na.creator.nickname=l.nickname,na.playCount=n,ta.initLoveStatus(na,ta.lovePlaylistId)}catch(a){P(R.ERROR,a.message)}try{const a=await C(la),{songs:s}=a,e=[];s.forEach((a=>{O(e,ia,a)})),ta.initLoveMusic(ia),S(e.join(","),ia)}catch(a){P(R.ERROR,a.message)}try{const a=await x(la,100),{comments:s,hotComments:e}=a;z(e,ra),z(s,ra),ea.value=0==ra.length,ca.value=!1}catch(a){P(R.ERROR,a.message)}}),ca),(e,t)=>{const o=a,l=s;return _(),i("div",V,[r(c(D,{"song-id-mapper":p(ma),songs:ia,onCloseSelect:da},null,8,["song-id-mapper","songs"]),[[m,ua.value]]),r(u("div",$,[u("img",{src:na.image,class:"left-image"},null,8,q),u("div",Z,[u("p",H,d(na.name),1),u("div",J,[c(o,{src:na.creator.avatarUrl},null,8,["src"]),u("span",K,d(na.creator.nickname),1),u("div",Q,[(_(!0),i(g,null,v(na.tag,(a=>(_(),i("span",{key:a},"#"+d(a),1)))),128))])]),u("p",W,d(na.description),1),u("div",X,[c(G,{songs:ia},null,8,["songs"]),c(N,{name:na.isLove?"取消收藏":"收藏",icon:na.isLove?"":"","icon-style":na.isLove?"color:#ff6a6a;":"",onClick:t[0]||(t[0]=a=>p(ta).addLove(na,p(ta).lovePlaylist,p(ta).lovePlaylistId,"lovePlaylist"))},null,8,["name","icon","icon-style"]),ua.value?j("",!0):(_(),y(A,{key:0,"share-to":va,onOpenSelect:ga}))])])],512),[[m,!ua.value]]),r(c(T,{active:"song",class:"playlist-tab",onGetActive:ya},{content:h((()=>[c(l,{label:`歌曲 ${ia.length}`,name:"song"},{default:h((()=>[c(I,{songs:ia,"song-id-mapper":p(ma)},null,8,["songs","song-id-mapper"])])),_:1},8,["label"]),c(l,{label:`评论 ${ra.length}`,name:"comment"},{default:h((()=>[ea.value?(_(),y(F,{key:1})):(_(),y(M,{key:0,comments:ra},null,8,["comments"]))])),_:1},8,["label"])])),_:1},512),[[m,!ua.value]])])}}}),[["__scopeId","data-v-70555524"]]);export{Y as default};
