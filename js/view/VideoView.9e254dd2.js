import{y as e}from"../element-plus/element-plus.f4dce189.js";import{G as a,ax as s,Z as t,r as l,i as o,P as i,c as u,U as n,u as r,a as v,S as c,V as p,z as m,o as d,ay as h,az as j,n as g}from"../@vue/@vue.59fec093.js";import{g as f,b as y,k as w,e as C,d as G,_ as S}from"../../assets/index-c28fd0ea.js";import{M as b}from"../Mv/Mv.773a1cc9.js";import{B}from"../ButtonGroup/ButtonGroup.bd3b4365.js";import{S as k}from"../SearchButton/SearchButton.5f7c457f.js";import{L as z}from"../Loading/Loading.4d2462d7.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.81428a33.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.2f940de9.js";import"../nprogress/nprogress.9249ff62.js";const R=e=>(h("data-v-2180fd25"),e=e(),j(),e),V=["infinite-scroll-disabled"],x=R((()=>v("h4",{class:"title video-choice"},"视频类型",-1))),E=R((()=>v("h4",{class:"title all"},"全部视频",-1))),L=R((()=>v("span",{class:"iconfont"},"",-1))),M=S(a({__name:"VideoView",setup(a){s((e=>({ba3ddeb4:r(h),ba5d1d7c:r(S),ed381680:r(M),"2c80a31d":r(j),"25ca0508":r(R)})));const h=f().get("fontColor"),j=f().get("shadow"),S=f().get("fontBlack"),R=f().get("themeColor"),M=m("fontGray"),_=t(["全部","韩国","日本","欧美","港台","内地"]),A=t(["全部","官方版","现场版","网易出品"]),N=t(["上升最快","最新","最热"]),O=l(0),U=l(0),I=l(0),J=t(new Map),K=t(new Map);let P=t([]),T=t([]);const Z=l(1500),q=l(30),D=l(!1),F=l(!1),H=m("firstLoading"),Q=m("hideScroll"),W=l(!1),X=o((()=>T.filter((e=>e.name.includes(Y.value)||e.artist.includes(Y.value))))),Y=l(""),$=e=>{Y.value=e},ee=async(e,a)=>{K.set(O.value+""+U.value+I.value,Z.value),Q(),P.splice(0),T.splice(0),"视频地区"==a?O.value=e:"视频来源"==a?U.value=e:I.value=e,q.value=40;const s=K.get(O.value+""+U.value+I.value);Z.value=s||1500,await g();const t=J.get(O.value+""+U.value+I.value);t?(P.push(...t),T.push(...t.slice(0,q.value))):te()},ae=()=>{Y.value||(D.value=!0,q.value+=10,q.value<P.length?setTimeout((()=>{T.push(...P.slice(T.length,q.value)),D.value=!1}),100):Z.value==P.length?(Z.value*=2,W.value=!0):(T.push(...P.slice(T.length)),C(G.SUCCESS,"已经到达底部！")))},se=()=>{W.value=!1,y((async()=>{try{const e=await w(Z.value,_[O.value],A[U.value],N[I.value]),{data:a}=e;a.slice(P.length).forEach((e=>{const{id:a,name:s,cover:t,playCount:l,artistName:o}=e;P.push({id:a,name:s,image:t,playCount:l,artist:o})})),J.set(O.value+""+U.value+I.value,[...P]),T.push(...P.slice(T.length,q.value))}catch(e){C(G.ERROR,e.message)}F.value=!1,D.value=!1}),F)},te=()=>{y((async()=>{try{const e=await w(Z.value,_[O.value],A[U.value],N[I.value]),{data:a}=e;a.forEach((e=>{const{id:a,name:s,cover:t,playCount:l,artistName:o}=e;P.push({id:a,name:s,image:t,playCount:l,artist:o})})),J.set(O.value+""+U.value+I.value,[...P]),T.push(...P.slice(0,q.value))}catch(e){C(G.ERROR,e.message)}H.value=!1}),H)};return te(),(a,s)=>{const t=e;return i((d(),u("div",{class:"rvideo-container scroll-container","infinite-scroll-distance":"2","infinite-scroll-immediate":!1,"infinite-scroll-disabled":D.value,style:{overflow:"auto"}},[n(k,{onGetContent:$}),x,n(B,{onGetActive:ee,title:"视频地区",activeValue:0,"show-title":!1,type:_,class:"area"},null,8,["type"]),n(B,{onGetActive:ee,title:"视频来源",activeValue:0,"show-title":!1,type:A},null,8,["type"]),n(B,{onGetActive:ee,title:"视频排序","show-title":!1,activeValue:0,type:N},null,8,["type"]),E,n(b,{mvs:r(X)},null,8,["mvs"]),n(z,{"is-loading":F.value},null,8,["is-loading"]),i(v("button",{class:"more-video",onClick:se},[c(" 更多精彩视频"),L],512),[[p,W.value]])],8,V)),[[t,ae]])}}}),[["__scopeId","data-v-2180fd25"]]);export{M as default};
