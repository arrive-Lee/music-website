import{u as s}from"../element-plus/element-plus.e3268319.js";import{G as e,Z as a,d as o,c as t,U as n,O as i,z as l,o as r,a as m,u as p,ax as u,ay as c,az as d}from"../@vue/@vue.69a1071d.js";import{g as j,a as v,s as f,D as g,i as h,j as b,e as y,d as _,E as B,_ as x}from"../../assets/index-a744d8a6.js";import{T as z,_ as R}from"../Tab/Tab.63d65c8b.js";import{P as S}from"../PlayButton/PlayButton.9757576b.js";import{D}from"../DecoratedButton/DecoratedButton.63765d9c.js";import{S as E}from"../SearchButton/SearchButton.cb98dbed.js";import{M as P}from"../Mv/Mv.ba5c3b78.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.ea52d298.js";import"../@element-plus/@element-plus.a36f95b2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.294e9718.js";import"../lodash/lodash.57b1d944.js";import"../vue-router/vue-router.f91b6d5b.js";import"../nprogress/nprogress.8c6d26c7.js";const w={class:"recent-container scroll-container"},G={class:"operation"},O=(s=>(c("data-v-58be71f0"),s=s(),d(),s))((()=>m("p",{class:"tip"},"自动同步该账号下最近一周播放的歌曲",-1))),C=x(e({__name:"RecentPlayView",setup(e){var c;u((s=>({"1b62fd3a":p(d)})));const d=j().get("fontColor"),x=null==(c=v(f.SESSION,"userInfo"))?void 0:c.uid,C=a([]),I=a([]);let M;const T=o(""),A=l("firstLoading");A.value=!0;const U=l("hideScroll"),$=s=>{M=a([]),T.value=s;const e=C.filter((s=>s.name.includes(T.value)||s.album.includes(T.value)||s.singer.includes(T.value)));M.push(...e)},k=()=>{U()};return g(x).then((s=>{const{weekData:e}=s;if(e){const s=[];e.forEach((e=>{h(s,C,e.song)})),b(s.join(","),C)}A.value=!1})).catch((s=>{y(_.ERROR,s.message)})),B().then((s=>{const{data:{videos:e}}=s;e&&e.forEach((s=>{const{id:e,text:a,coverUrl:o}=s.mlogBaseData;I.push({id:e,name:a,image:o,artist:"",playCount:""})}))})).catch((s=>{y(_.ERROR,s.message)})),(e,a)=>{const o=s;return r(),t("div",w,[n(z,{active:"song",onGetActive:k},{content:i((()=>[n(o,{label:`歌曲 ${C.length}`,name:"song"},{default:i((()=>[m("div",G,[n(S,{songs:C},null,8,["songs"]),n(D,{icon:"󰌄",name:"下载"}),n(D,{icon:"",name:"批量操作"}),n(E,{onGetContent:$})]),n(R,{songs:T.value?p(M):C,isPlaylist:!0,height:"420px"},null,8,["songs"]),O])),_:1},8,["label"]),n(o,{label:`视频 ${I.length}`,name:"video "},{default:i((()=>[n(P,{mvs:I},null,8,["mvs"])])),_:1},8,["label"])])),_:1})])}}}),[["__scopeId","data-v-58be71f0"]]);export{C as default};
