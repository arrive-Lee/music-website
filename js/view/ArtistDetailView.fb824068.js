import{u as a}from"../element-plus/element-plus.ec47f34a.js";import{G as s,ax as e,d as t,Z as o,i,c as l,P as n,V as r,U as m,u as c,a as u,T as p,R as d,M as v,O as g,z as h,o as f,F as j,a7 as y,ay as _,az as b}from"../@vue/@vue.7ad02ad1.js";import{b as L}from"../vue-router/vue-router.47595bf3.js";import{g as R,a as w,b as M,K as O,r as S,e as x,d as E,L as T,M as k,N as z,O as A,t as B,i as D,j as I,s as C,_ as N}from"../../assets/index-c145966f.js";import{M as G}from"../Mv/Mv.82e7a11d.js";import{A as P}from"../Albums/Albums.76b9e9b9.js";import{D as U}from"../DecoratedButton/DecoratedButton.f278dc44.js";import{M as V}from"../MoreButton/MoreButton.2e86418e.js";import{T as q}from"../Tab/Tab.1f81391c.js";import{_ as F}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.f26b4a9e.js";import{O as K}from"../OnlineBatch/OnlineBatch.80afdb55.js";import{L as H}from"../Loading/Loading.cfab3e7a.js";import{_ as Z}from"../NoSearch/NoSearch.b33ea10b.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const J={class:"artist-detail-container scroll-container"},Q={class:"header"},W=["src"],X={class:"right"},Y={class:"name"},$={class:"info"},aa={key:0},sa=(a=>(_("data-v-cd461d6d"),a=a(),b(),a))((()=>u("p",{class:"job"},"职业：歌手、词曲创作者",-1))),ea={class:"fans"},ta={class:"header-operation"},oa={class:"content"},ia={class:"detail"},la={class:"desc"},na=N(s({__name:"ArtistDetailView",setup(s){e((a=>({"99b1ec0c":c(_),"99d12ad4":c(b),"1e8f80ec":c(na),"3cc69c71":c(N)})));const _=R().get("fontColor"),b=R().get("fontBlack"),N=R().get("shadow"),na=h("fontGray"),ra=w(),ma=L(),ca=ma.query.id+"",ua=ma.query.score,pa=t(!1),da=h("firstLoading"),va=h("hideScroll"),ga=o([!1,!1]),ha=o({name:"",score:Math.floor(Number.parseInt(ua)/1e4)+"万",id:ca,avatar:"",alias:[]}),fa=o([]),ja=o([]),ya=i((()=>new Map(ja.map(((a,s)=>[a.id,s]))))),_a=o([]),ba=o([]),La=t(!1),Ra=a=>{La.value=a},wa=a=>{va(),La.value=a},Ma=()=>{C("我有一个宝藏歌手推荐给你："+ha.name+"，地址："+{}.VITE_APP_URL+ma.fullPath)},Oa=a=>{va(),"album"==a&&0==ba.length?M((async()=>{try{const a=await O(ca),{hotAlbums:s}=a;s.forEach((a=>{const{picUrl:s,name:e,publishTime:t}=a;ba.push({name:e,id:a.id,cover:s,publishTime:S(t),artistId:ca+""})}))}catch(a){x(E.ERROR,a.message)}setTimeout((()=>{ga[0]=0==ba.length,pa.value=!1}),500)}),pa):"mv"==a&&0==_a.length?M((async()=>{try{const a=await T(ca),{mvs:s}=a;s.forEach((a=>{const{id:s,name:e,artistName:t,imgurl16v9:o,playCount:i}=a;_a.push({id:s,name:e,artist:t,image:o,playCount:i})}))}catch(a){x(E.ERROR,a.message)}setTimeout((()=>{ga[1]=0==_a.length,pa.value=!1}),500)}),pa):"detail"==a&&0==fa.length&&M((async()=>{try{const a=await k(ca),{introduction:s}=a;s.forEach((a=>{fa.push({title:a.ti,content:a.txt})}))}catch(a){x(E.ERROR,a.message)}setTimeout((()=>{pa.value=!1}),500)}),pa)};return M((async()=>{try{const a=await z(ca),{artist:s}=a,{name:e,alias:t,picUrl:o,briefDesc:i}=s;ha.name=e,ha.alias=t,ha.avatar=o,ha.briefDesc=i,ra.initLoveStatus(ha,ra.loveSingerId)}catch(a){x(E.ERROR,a.message)}try{const a=await A(ca,1e3),{songs:s}=a,e=s.map((a=>a.id)).join(","),t=await B(e),{songs:o}=t;o.forEach((a=>{D([],ja,a)})),ra.initLoveMusic(ja),I(e,ja)}catch(a){x(E.ERROR,a.message)}da.value=!1}),da),(s,e)=>{var t,o;const i=a;return f(),l("div",J,[n(m(K,{songs:ja,"song-id-mapper":c(ya),onCloseSelect:Ra},null,8,["songs","song-id-mapper"]),[[r,La.value]]),n(u("div",Q,[u("img",{src:ha.avatar,class:"left"},null,8,W),u("div",X,[u("h4",Y,p(ha.name),1),u("div",$,[0!=(null==(t=ha.alias)?void 0:t.length)?(f(),l("p",aa," 英文名："+p(null==(o=ha.alias)?void 0:o.join("、")),1)):d("",!0),sa]),u("span",ea,"粉丝数："+p(ha.score),1),u("div",ta,[m(U,{name:ha.isLove?"取消关注":"关注",icon:ha.isLove?"":"","icon-style":ha.isLove?"color:#ff6a6a;":"",onClick:e[0]||(e[0]=a=>c(ra).addLove(ha,c(ra).loveSinger,c(ra).loveSingerId))},null,8,["name","icon","icon-style"]),m(U,{icon:"",name:"歌手电台"}),La.value?d("",!0):(f(),v(V,{key:0,"share-to":Ma,onOpenSelect:wa}))])])],512),[[r,!La.value]]),n(u("div",oa,[m(q,{active:"hot",onGetActive:Oa},{content:g((()=>[m(i,{label:"精选",name:"hot"},{default:g((()=>[m(F,{songs:ja,"song-id-mapper":c(ya)},null,8,["songs","song-id-mapper"])])),_:1}),m(i,{label:"专辑",name:"album"},{default:g((()=>[n(m(Z,{text:"歌手暂无专辑",size:280},null,512),[[r,ga[0]]]),m(H,{isLoading:pa.value},null,8,["isLoading"]),n(m(P,{albums:ba},null,8,["albums"]),[[r,!ga[0]]])])),_:1}),m(i,{label:"视频",name:"mv"},{default:g((()=>[n(m(Z,{text:"歌手暂无视频",size:280},null,512),[[r,ga[1]]]),m(H,{isLoading:pa.value},null,8,["isLoading"]),n(m(G,{mvs:_a},null,8,["mvs"]),[[r,!ga[1]]])])),_:1}),m(i,{label:"详情",name:"detail"},{default:g((()=>[m(H,{isLoading:pa.value},null,8,["isLoading"]),u("div",ia,[u("p",la,p(ha.briefDesc),1),fa.length>0?(f(!0),l(j,{key:0},y(fa,(a=>(f(),l(j,{key:a.title},[u("h4",null,p(a.title),1),u("p",null,p(a.content),1)],64)))),128)):d("",!0)])])),_:1})])),_:1})],512),[[r,!La.value]])])}}}),[["__scopeId","data-v-cd461d6d"]]);export{na as default};
