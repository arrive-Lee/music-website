import{g as s,u as e}from"../element-plus/element-plus.372e8740.js";import{G as a,ax as o,Z as t,c as l,a as i,U as n,T as r,u as m,O as p,o as u,S as c,z as d}from"../@vue/@vue.7ad02ad1.js";import{b as v}from"../vue-router/vue-router.53ff932e.js";import{g as b,a as j,c as f,G as h,q as g,f as y,h as _,J as A,k as T,l as L,_ as x}from"../../assets/index-0cefdbff.js";import{A as w}from"../Albums/Albums.54f8036d.js";import{T as z}from"../Tab/Tab.8cc6d4ba.js";import{_ as B}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.bea6b4d1.js";import{P as I}from"../PlayButton/PlayButton.63362df6.js";import{D as R}from"../DecoratedButton/DecoratedButton.f452dc7a.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.07d51cb2.js";import"../nprogress/nprogress.8c6d26c7.js";import"../lodash/lodash.57b1d944.js";const S={class:"album-detail-container scroll-container"},k={class:"header"},D={class:"right"},E={class:"artist"},q={class:"header-operation"},C={class:"content"},G={class:"info"},O={class:"desc"},P=x(a({__name:"AlbumDetailView",setup(a){o((s=>({"4a4503b4":m(x),a2e3ed0e:m(P),"673557e4":m(U)})));const x=b().get("fontColor"),P=b().get("fontBlack"),U=b().get("shadow"),F=j(),J=v(),M=J.query.id+"",V=J.query.artistId+"",Z=t({id:M,artistId:V,name:"",cover:"",artist:"",publishTime:""}),H=t([]),K=t([]),N=d("firstLoading"),Q=d("hideScroll"),W=()=>{Q()};return f((async()=>{try{const s=await h(V),{hotAlbums:e}=s;for(let a of e){const{id:s}=a;if(s!=M&&H.length<=5){const{picUrl:e,name:o,publishTime:t}=a;H.push({name:o,id:s,cover:e,publishTime:g(t),artistId:V+""})}else if(H.length>5)break}}catch(s){y(_.ERROR,s.message)}try{const s=await A(M),{album:{picUrl:e,artist:a,publishTime:o,name:t,company:l,description:i},songs:n}=s;Z.name=t,Z.cover=e,Z.publishTime=g(o),Z.artist=a.name,Z.company=l,Z.description=i,F.initLoveStatus(Z,F.loveAlbumId);const r=[];n.forEach((s=>{T(r,K,s)})),F.initLoveMusic(K),L(r.join(","),K)}catch(s){y(_.ERROR,s.message)}N.value=!1}),N),(a,o)=>{const t=s,d=e;return u(),l("div",S,[i("div",k,[n(t,{src:Z.cover,loading:"lazy",class:"left"},null,8,["src"]),i("div",D,[i("h4",null,r(Z.name),1),i("p",E,r(Z.artist),1),i("p",null,r(Z.publishTime),1),i("div",q,[n(I,{songs:K},null,8,["songs"]),n(R,{name:Z.isLove?"取消收藏":"收藏",icon:Z.isLove?"":"","icon-style":Z.isLove?"color:#ff6a6a;":"",onClick:o[0]||(o[0]=s=>m(F).addLove(Z,m(F).loveAlbum,m(F).loveAlbumId,"loveAlbum")),class:"operate"},null,8,["name","icon","icon-style"])])])]),i("div",C,[n(z,{active:"songs",onGetActive:W},{content:p((()=>[n(d,{label:"歌曲",name:"songs"},{default:p((()=>[n(B,{songs:K},null,8,["songs"]),n(w,{albums:H,title:"该歌手的其它专辑"},null,8,["albums"])])),_:1}),n(d,{label:"详情",name:"album"},{default:p((()=>[i("div",G,[i("p",null,[c(" 专辑："),i("span",null,r(Z.name),1)]),i("p",null,[c(" 歌手："),i("span",null,r(Z.artist),1)]),i("p",null,[c(" 唱片公司："),i("span",null,r(Z.company),1)]),i("p",null,[c(" 发布时间："),i("span",null,r(Z.publishTime),1)]),i("p",null,[c(" 专辑简介："),i("span",O,r(Z.description),1)])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-d6cfa3bb"]]);export{P as default};
