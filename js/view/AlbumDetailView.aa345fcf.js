import{g as s,u as a}from"../element-plus/element-plus.e3268319.js";import{G as e,Z as t,c as o,a as l,U as i,T as n,O as r,z as m,o as p,u,S as c,ax as d}from"../@vue/@vue.69a1071d.js";import{b as h}from"../vue-router/vue-router.f91b6d5b.js";import{g as j,F as f,o as b,i as g,j as v,e as y,d as T,z as _,_ as z}from"../../assets/index-a744d8a6.js";import{A}from"../Albums/Albums.5703f660.js";import{T as B,_ as R}from"../Tab/Tab.63d65c8b.js";import{P as x}from"../PlayButton/PlayButton.9757576b.js";import{D}from"../DecoratedButton/DecoratedButton.63765d9c.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.ea52d298.js";import"../@element-plus/@element-plus.a36f95b2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.294e9718.js";import"../lodash/lodash.57b1d944.js";import"../nprogress/nprogress.8c6d26c7.js";const w={class:"album-detail-container scroll-container"},I={class:"header"},E={class:"right"},O={class:"artist"},P={class:"header-operation"},U={class:"content"},k={class:"info"},q={class:"desc"},G=z(e({__name:"AlbumDetailView",setup(e){d((s=>({"1d743785":u(z),"2741590c":u(G),"083245ed":u(S)})));const z=j().get("fontColor"),G=j().get("fontBlack"),S=j().get("shadow"),C=h(),F=C.query.id,L=C.query.artistId,V=t({name:"",cover:"",id:F+"",artist:"",publishTime:""}),Z=t([]),H=t([]),J=m("firstLoading");J.value=!0;const K=m("hideScroll"),M=()=>{K()};return f(F+"").then((s=>{const{album:{picUrl:a,artist:e,publishTime:t,name:o,company:l,description:i},songs:n}=s;V.name=o,V.cover=a,V.publishTime=b(t),V.artist=e.name,V.company=l,V.description=i;const r=[];n.forEach((s=>{g(r,H,s)})),v(r.join(","),H),J.value=!1})).catch((s=>{y(T.ERROR,s.message)})),_(L+"").then((s=>{const{hotAlbums:a}=s;for(const e of a){const{id:s}=e;if(s!=F+""&&Z.length<=5){const{picUrl:a,name:t,publishTime:o}=e;Z.push({name:t,id:s,cover:a,publishTime:b(o)})}else if(Z.length>5)break}})).catch((s=>{y(T.ERROR,s.message)})),(e,t)=>{const m=s,d=a;return p(),o("div",w,[l("div",I,[i(m,{src:V.cover,lazy:"",class:"left"},null,8,["src"]),l("div",E,[l("h4",null,n(V.name),1),l("p",O,n(V.artist),1),l("p",null,n(V.publishTime),1),l("div",P,[i(x,{songs:H},null,8,["songs"]),i(D,{name:"收藏",icon:""})])])]),l("div",U,[i(B,{active:"songs",onGetActive:M},{content:r((()=>[i(d,{label:"歌曲",name:"songs"},{default:r((()=>[i(R,{songs:H},null,8,["songs"]),i(A,{albums:Z,artistId:u(L)+"",title:"该歌手的其它专辑"},null,8,["albums","artistId"])])),_:1}),i(d,{label:"详情",name:"album"},{default:r((()=>[l("div",k,[l("p",null,[c(" 专辑："),l("span",null,n(V.name),1)]),l("p",null,[c(" 歌手："),l("span",null,n(V.artist),1)]),l("p",null,[c(" 唱片公司："),l("span",null,n(V.company),1)]),l("p",null,[c(" 发布时间："),l("span",null,n(V.publishTime),1)]),l("p",null,[c(" 专辑简介："),l("span",q,n(V.description),1)])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-73c7eea9"]]);export{G as default};
