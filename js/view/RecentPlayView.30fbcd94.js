import{u as e}from"../element-plus/element-plus.1ffadbb7.js";import{G as s,ax as a,r as o,c as t,P as r,V as n,U as l,O as i,u as m,z as p,o as u,ay as c,az as j,a as d}from"../@vue/@vue.59fec093.js";import{s as v}from"../pinia/pinia.81428a33.js";import{g as f,a as g,b as h,j as y,_ as S}from"../../assets/index-933c3f88.js";import{T as _}from"../Tab/Tab.e5726de1.js";import{M as b}from"../Mv/Mv.f8f9a7b3.js";import{U as x,a as B}from"../UserSongTable/UserSongTable.9b432603.js";import{_ as w}from"../NoSearch/NoSearch.2874fadd.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.2f940de9.js";import"../nprogress/nprogress.9249ff62.js";import"../DecoratedButton/DecoratedButton.d972464c.js";import"../PlayButton/PlayButton.fd3f050e.js";import"../SearchButton/SearchButton.6d2e7bb4.js";const z={class:"recent-container scroll-container"},P=(e=>(c("data-v-77c05df6"),e=e(),j(),e))((()=>d("p",{class:"tip"},"自动同步该账号下最近一周播放的歌曲",-1))),M=S(s({__name:"RecentPlayView",setup(s){a((e=>({"2321f472":m(c),"925d3118":m(j)})));const c=f().get("fontColor"),j=p("fontGray"),d=g(),{videoRecord:S,songRecord:M}=v(d),R=p("firstLoading"),T=p("hideScroll"),D=()=>{T()},G=o(!1),N=e=>{G.value=e},U=e=>{T(),G.value=e},V=e=>{S.value.splice(e,1)};return h((async()=>{const e=M.value.map((e=>e.id)).join(",");y(e,M.value),d.initLoveMusic(M.value),R.value=!1}),R),(s,a)=>{const o=e;return u(),t("div",z,[r(l(x,{"page-name":"RecentPlayView",onCloseSelect:U},null,512),[[n,G.value]]),r(l(_,{active:"song",onGetActive:D},{content:i((()=>[l(o,{label:"歌曲",name:"song"},{default:i((()=>[l(B,{onOpenSelect:N,"page-name":"RecentPlayView"}),P])),_:1}),l(o,{label:"视频",name:"video "},{default:i((()=>[r(l(w,{text:"暂无视频播放记录"},null,512),[[n,0==m(S).length]]),r(l(b,{mvs:m(S),"show-delete":!0,transitionName:"list",onGetDeleteIndex:V},null,8,["mvs"]),[[n,m(S).length>0]])])),_:1})])),_:1},512),[[n,!G.value]])])}}}),[["__scopeId","data-v-77c05df6"]]);export{M as default};
