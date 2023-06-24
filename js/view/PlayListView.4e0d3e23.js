import{g as a,u as e}from"../element-plus/element-plus.5cae0800.js";import{P as s,_ as t}from"../NoSearch/NoSearch.36c5e9e0.js";import{G as o,ax as l,r as n,Z as i,i as r,c,P as m,V as p,U as u,u as d,a as g,T as v,F as h,a7 as y,M as j,R as f,O as R,z as k,o as b}from"../@vue/@vue.59fec093.js";import{b as w}from"../vue-router/vue-router.2f940de9.js";import{g as C,a as L,b as P,l as O,e as U,d as _,m as B,i as z,j as E,n as S,o as I,p as M,q as x,r as D,C as G,s as T,_ as q}from"../../assets/index-c885de52.js";import{O as F}from"../OnlineBatch/OnlineBatch.043664a2.js";import{P as N,_ as V}from"../PlayButton/PlayButton.80a62826.js";import{T as $}from"../Tab/Tab.5e4df894.js";import{D as A}from"../DecoratedButton/DecoratedButton.86ecbdbc.js";import{M as H}from"../MoreButton/MoreButton.0020d2f1.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.81428a33.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const Z={class:"playlist-container scroll-container"},J={class:"header"},K=["src"],Q={class:"right"},W={class:"title"},X={class:"creator"},Y={class:"creator-name"},aa={class:"tag"},ea={class:"description"},sa={class:"header-operation"},ta=q(o({__name:"PlayListView",setup(o){l((a=>({"5c161dc5":d(q),"5c067e61":d(ta),"34949f88":d(oa),"7ed947c1":d(la)})));const q=C().get("fontColor"),ta=C().get("fontBlack"),oa=C().get("shadow"),la=k("fontGray"),na=n(!1),ia=L(),ra=w(),ca=ra.query.id+"",ma=ra.query.type+"",pa=n(1),ua=n(50),da=i({id:ca,name:"",image:"",playCount:"",tag:[],description:"",creator:{nickname:"",avatarUrl:""}}),ga=i([]),va=r((()=>ga.slice(pa.value-1,pa.value*ua.value))),ha=i([]),ya=r((()=>new Map(ga.map(((a,e)=>[a.id,e]))))),ja=k("firstLoading"),fa=k("hideScroll"),Ra=r((()=>ga.length)),ka=a=>{pa.value=a},ba=n(!1),wa=a=>{fa(),ba.value=a},Ca=a=>{fa(),ba.value=a},La=()=>{T("我有一个精品歌单分享给你："+da.name+"，地址：https://www.liyinchao.cloud/#"+ra.fullPath)},Pa=()=>{"playlist"==ma?ia.addLove(da,ia.lovePlaylist,ia.lovePlaylistId):ia.addLove(da,ia.loveRadio,ia.loveRadioId)},Oa=()=>{fa()};return P((async()=>{if("playlist"==ma){try{const a=await O(ca),{playlist:{name:e,coverImgUrl:s,description:t,tags:o,creator:l,playCount:n}}=a;da.name=e,da.image=s,da.description=t,da.tag=o,da.creator.avatarUrl=l.avatarUrl,da.creator.nickname=l.nickname,da.playCount=n,ia.initLoveStatus(da,ia.lovePlaylistId)}catch(a){U(_.ERROR,a.message)}try{const a=await B(ca),{songs:e}=a,s=[];e.forEach((a=>{z(s,ga,a)})),ia.initLoveMusic(ga),E(s.join(","),ga)}catch(a){U(_.ERROR,a.message)}try{const a=await S(ca,100),{comments:e,hotComments:s}=a;I(s,ha),I(e,ha),na.value=0==ha.length}catch(a){U(_.ERROR,a.message)}}else{try{const a=await M(ca),{data:{name:e,dj:{avatarUrl:s,nickname:t},picUrl:o,desc:l,subCount:n}}=a;da.name=e,da.id=ca,da.description=l,da.image=o,da.playCount=n,da.creator.nickname=t,da.creator.avatarUrl=s,ia.initLoveStatus(da,ia.loveRadioId)}catch(a){U(_.ERROR,a.message)}try{const a=await x(ca,100),{programs:e}=a,s=[];e.forEach((a=>{const{mainSong:{name:e,id:t,fee:o,artists:l,album:{name:n,picUrl:i},duration:r}}=a;s.push(t),ga.push({id:t,name:e,singer:l[0].name,songImage:i,album:n,available:o,time:r})})),ia.initLoveMusic(ga),E(s.join(","),ga)}catch(a){U(_.ERROR,a.message)}D(ca,"7",ha,(()=>{na.value=0==ha.length}))}ja.value=!1}),ja),(o,l)=>{const n=a,i=s,r=e;return b(),c("div",Z,[m(u(F,{"song-id-mapper":d(ya),songs:d(va),onCloseSelect:wa},null,8,["song-id-mapper","songs"]),[[p,ba.value]]),m(g("div",J,[g("img",{src:da.image,class:"left-image"},null,8,K),g("div",Q,[g("p",W,v(da.name),1),g("div",X,[u(n,{src:da.creator.avatarUrl},null,8,["src"]),g("span",Y,v(da.creator.nickname),1),g("div",aa,[(b(!0),c(h,null,y(da.tag,(a=>(b(),c("span",{key:a},"#"+v(a),1)))),128))])]),g("p",ea,v(da.description),1),g("div",sa,[u(N,{songs:d(va)},null,8,["songs"]),u(A,{name:da.isLove?"取消收藏":"收藏",icon:da.isLove?"":"","icon-style":da.isLove?"color:#ff6a6a;":"",onClick:Pa},null,8,["name","icon","icon-style"]),ba.value?f("",!0):(b(),j(H,{key:0,"share-to":La,onOpenSelect:Ca}))])])],512),[[p,!ba.value]]),m(u($,{active:"song",class:"playlist-tab",onGetActive:Oa},{content:R((()=>[u(r,{label:`歌曲 ${ga.length}`,name:"song"},{default:R((()=>[u(V,{songs:d(va),"song-id-mapper":d(ya)},null,8,["songs","song-id-mapper"]),m(u(i,{"cur-page":pa.value,"page-size":ua.value,total:d(Ra),onPageChange:ka},null,8,["cur-page","page-size","total"]),[[p,ua.value<d(Ra)]])])),_:1},8,["label"]),u(r,{label:`评论 ${ha.length<10?ha.length+10:ha.length}`,name:"comment"},{default:R((()=>[na.value?(b(),j(t,{key:1,size:280,text:"暂无评论数据"})):(b(),j(G,{key:0,comments:ha},null,8,["comments"]))])),_:1},8,["label"])])),_:1},512),[[p,!ba.value]])])}}}),[["__scopeId","data-v-470e5699"]]);export{ta as default};
