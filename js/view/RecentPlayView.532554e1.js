import{u as s}from"../element-plus/element-plus.f3996937.js";import{G as a,ax as e,Z as t,d as o,c as n,U as i,O as r,u as l,o as m,a as c,z as p,ay as u,az as d}from"../@vue/@vue.7ad02ad1.js";import{g as j,a as v,s as f,b as g,F as h,j as y,k as b,e as _,f as B,G as x,_ as z}from"../../assets/index-b4489aa2.js";import{T as R,_ as S}from"../Tab/Tab.3f3f2f9e.js";import{P as w}from"../PlayButton/PlayButton.a8bd4b12.js";import{D}from"../DecoratedButton/DecoratedButton.67f63e82.js";import{S as E}from"../SearchButton/SearchButton.566febff.js";import{M as G}from"../Mv/Mv.81910c67.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.07d51cb2.js";import"../lodash/lodash.57b1d944.js";import"../vue-router/vue-router.53ff932e.js";import"../nprogress/nprogress.8c6d26c7.js";const P={class:"recent-container scroll-container"},O={class:"operation"},C=(s=>(u("data-v-00f6a5ec"),s=s(),d(),s))((()=>c("p",{class:"tip"},"自动同步该账号下最近一周播放的歌曲",-1))),I=z(a({__name:"RecentPlayView",setup(a){var u;e((s=>({c9addb6a:l(d)})));const d=j().get("fontColor"),z=null==(u=v(f.SESSION,"userInfo"))?void 0:u.uid,I=t([]),M=t([]);let T;const k=o(""),A=p("firstLoading"),U=p("hideScroll"),$=s=>{T=t([]),k.value=s;const a=I.filter((s=>s.name.includes(k.value)||s.album.includes(k.value)||s.singer.includes(k.value)));T.push(...a)},F=()=>{U()};return g((async()=>{try{const s=await h(z),{weekData:a}=s;if(a){const s=[];a.forEach((a=>{y(s,I,a.song)})),b(s.join(","),I)}}catch(s){_(B.ERROR,s.message)}try{const s=await x(),{data:{videos:a}}=s;a&&a.forEach((s=>{const{id:a,text:e,coverUrl:t}=s.mlogBaseData;M.push({id:a,name:e,image:t,artist:"",playCount:""})}))}catch(s){_(B.ERROR,s.message)}A.value=!1}),A),(a,e)=>{const t=s;return m(),n("div",P,[i(R,{active:"song",onGetActive:F},{content:r((()=>[i(t,{label:`歌曲 ${I.length}`,name:"song"},{default:r((()=>[c("div",O,[i(w,{songs:I},null,8,["songs"]),i(D,{icon:"󰌄",name:"下载"}),i(D,{icon:"",name:"批量操作"}),i(E,{onGetContent:$})]),i(S,{songs:k.value?l(T):I,isPlaylist:!0,height:"420px"},null,8,["songs"]),C])),_:1},8,["label"]),i(t,{label:`视频 ${M.length}`,name:"video "},{default:r((()=>[i(G,{mvs:M},null,8,["mvs"])])),_:1},8,["label"])])),_:1})])}}}),[["__scopeId","data-v-00f6a5ec"]]);export{I as default};
