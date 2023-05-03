import{u as a}from"../element-plus/element-plus.e3268319.js";import{G as s,d as e,Z as t,c as l,a as o,T as i,R as n,U as r,O as m,z as c,o as u,M as p,F as d,a7 as v,ay as h,az as g,ax as j,u as f}from"../@vue/@vue.69a1071d.js";import{b}from"../vue-router/vue-router.f91b6d5b.js";import{g as y,x as R,i as _,j as L,e as E,d as z,y as D,z as k,o as x,A,_ as T}from"../../assets/index-a744d8a6.js";import{M}from"../Mv/Mv.ba5c3b78.js";import{D as O}from"../DecoratedButton/DecoratedButton.63765d9c.js";import{A as w}from"../Albums/Albums.5703f660.js";import{T as B,_ as C}from"../Tab/Tab.63d65c8b.js";import{L as I}from"../Loading/Loading.2248165e.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.ea52d298.js";import"../@element-plus/@element-plus.a36f95b2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.294e9718.js";import"../lodash/lodash.57b1d944.js";import"../nprogress/nprogress.8c6d26c7.js";const U={class:"artist-detail-container scroll-container"},q={class:"header"},G=["src"],N={class:"right"},S={class:"name"},F={class:"info"},V={key:0},Z=(a=>(h("data-v-6939aba9"),a=a(),g(),a))((()=>o("p",{class:"job"},"职业：歌手、词曲创作者",-1))),H={class:"fans"},J={class:"content"},K={class:"detail"},P={class:"desc"},Q=T(s({__name:"ArtistDetailView",setup(s){j((a=>({"5bd1a6aa":f(h),"2125a614":f(g),"1a6a3813":f(T)})));const h=y().get("fontColor"),g=y().get("fontBlack"),T=y().get("shadow"),Q=b(),W=Q.query.id,X=Q.query.score,Y=e(!1),$=c("firstLoading");$.value=!0;const aa=c("hideScroll"),sa=t({name:W+"",id:"",avatar:"",score:Math.floor(Number.parseInt(X)/1e4)+"万",alias:[]}),ea=t([]),ta=t([]),la=t([]),oa=t([]),ia=a=>{aa(),"mv"==a&&0==la.length?(Y.value=!0,D(W+"").then((a=>{const{mvs:s}=a;s.forEach((a=>{const{id:s,name:e,artistName:t,imgurl16v9:l,playCount:o}=a;la.push({id:s,name:e,artist:t,image:l,playCount:o})})),Y.value=!1})).catch((a=>{E(z.ERROR,a.message)}))):"album"==a&&0==oa.length?(Y.value=!0,k(W+"").then((a=>{const{hotAlbums:s}=a;s.forEach((a=>{const{picUrl:s,name:e,publishTime:t}=a;oa.push({name:e,id:a.id,cover:s,publishTime:x(t),artistId:W+""})})),Y.value=!1})).catch((a=>{E(z.ERROR,a.message)}))):"detail"==a&&0==ea.length&&(Y.value=!0,A(W+"").then((a=>{const{introduction:s}=a;s.forEach((a=>{ea.push({title:a.ti,content:a.txt})})),Y.value=!1})).catch((a=>{E(z.ERROR,a.message)})))};return R(W+"").then((a=>{const{artist:s,hotSongs:e}=a,{name:t,alias:l,picUrl:o,briefDesc:i}=s;sa.name=t,sa.alias=l,sa.avatar=o,sa.briefDesc=i;const n=[];e.forEach((a=>{_(n,ta,a)})),L(n.join(","),ta),$.value=!1})).catch((a=>{E(z.ERROR,a.message)})),(s,e)=>{var t,c;const h=a;return u(),l("div",U,[o("div",q,[o("img",{src:sa.avatar,class:"left"},null,8,G),o("div",N,[o("h4",S,i(sa.name),1),o("div",F,[0!=(null==(t=sa.alias)?void 0:t.length)?(u(),l("p",V," 英文名："+i(null==(c=sa.alias)?void 0:c.join("、")),1)):n("",!0),Z]),o("span",H,"粉丝数："+i(sa.score),1),o("div",null,[r(O,{icon:"󰅵",name:"关注",class:"operate"}),r(O,{icon:"",name:"歌手电台",class:"operate"})])])]),o("div",J,[r(B,{active:"hot",onGetActive:ia},{content:m((()=>[r(h,{label:"精选",name:"hot"},{default:m((()=>[r(C,{songs:ta},null,8,["songs"])])),_:1}),r(h,{label:"专辑",name:"album"},{default:m((()=>[Y.value?(u(),p(I,{key:0,isLoading:Y.value},null,8,["isLoading"])):n("",!0),r(w,{albums:oa},null,8,["albums"])])),_:1}),r(h,{label:"视频",name:"mv"},{default:m((()=>[Y.value?(u(),p(I,{key:0,isLoading:Y.value},null,8,["isLoading"])):n("",!0),r(M,{mvs:la},null,8,["mvs"])])),_:1}),r(h,{label:"详情",name:"detail"},{default:m((()=>[Y.value?(u(),p(I,{key:0,isLoading:Y.value},null,8,["isLoading"])):n("",!0),o("div",K,[o("p",P,i(sa.briefDesc),1),ea.length>0?(u(!0),l(d,{key:0},v(ea,(a=>(u(),l(d,{key:a.title},[o("h4",null,i(a.title),1),o("p",null,i(a.content),1)],64)))),128)):n("",!0)])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-6939aba9"]]);export{Q as default};
