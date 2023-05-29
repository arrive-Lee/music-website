import{u as a}from"../element-plus/element-plus.372e8740.js";import{G as s,ax as e,i as l,d as t,Z as n,c as o,P as i,V as r,U as u,u as m,O as c,z as p,o as g,a as d}from"../@vue/@vue.7ad02ad1.js";import{b as v}from"../vue-router/vue-router.47595bf3.js";import{s as h}from"../pinia/pinia.07d51cb2.js";import{p as y,a as f,b as j,q as _,e as b,d as R,r as L,t as w,i as E,j as S,v as O,w as x,_ as C}from"../../assets/index-502e0095.js";import{_ as B}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.c44a051d.js";import{T as M}from"../Tab/Tab.376473d4.js";import{O as P}from"../OnlineBatch/OnlineBatch.3b341433.js";import{P as z}from"../PlayButton/PlayButton.4f8abb66.js";import{D as A}from"../DecoratedButton/DecoratedButton.0fe1f3e8.js";import{M as I}from"../Mv/Mv.b972acaa.js";import{A as T}from"../Albums/Albums.9d99ea8d.js";import{P as U}from"../PlayList/PlayList.547269b3.js";import{S as k}from"../Singer/Singer.6e630488.js";import{L as N}from"../Loading/Loading.41e861c6.js";import{N as D}from"../NoSearch/NoSearch.14a4f741.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";const G={class:"search-container scroll-container"},V={class:"song"},q={class:"header-operation"},F={class:"singers"},H=C(s({__name:"SearchView",setup(s){e((a=>({"7f9bc0d0":m(Z)})));const C=y(),{isFullScreen:H}=h(C),W=l((()=>H.value?"580px":"440px")),Z=p("fontGray"),J=f(),{loveMusicId:K,loveSongs:Q}=h(J),X=t(!1),Y=a=>{X.value=a},$=()=>{sa.forEach((a=>{a.isLove=!0;null==K.value.get(a.id)&&Q.value.push(a)})),O(x.LOCAL,"loveSongs",Q.value)},aa=v().query.keyWord+"",sa=n([]),ea=l((()=>new Map(sa.map(((a,s)=>[a.id,s]))))),la=n([]),ta=n([]),na=n([]),oa=n([]),ia=n([]),ra=t(!1),ua=p("firstLoading"),ma=p("hideScroll"),ca=n([!1,!1,!1,!1,!1]),pa=a=>{ma(),"video"==a&&0==la.length?j((async()=>{try{const a=await _(1014,60,aa),{result:{videos:s}}=a;s&&s.length>0&&s.forEach((a=>{const{vid:s,title:e,coverUrl:l,creator:t,playTime:n}=a;la.push({id:s,name:e,image:l,artist:t[0].userName,playCount:n})}))}catch(a){b(R.ERROR,a.message)}ra.value=!1,ca[0]=0==la.length}),ra):"mv"==a&&0==ta.length?j((async()=>{try{const a=await _(1004,60,aa),{result:{mvs:s}}=a;s&&0!=s.length&&s.forEach((a=>{const{id:s,name:e,cover:l,artistName:t,playCount:n}=a;ta.push({id:s,name:e,image:l,artist:t,playCount:n})}))}catch(a){b(R.ERROR,a.message)}ra.value=!1,ca[1]=0==ta.length}),ra):"album"==a&&0==na.length?j((async()=>{try{const a=await _(10,60,aa),{result:{albums:s}}=a;s&&s.length>0&&s.forEach((a=>{const{id:s,name:e,picUrl:l,publishTime:t,artist:n}=a;na.push({id:s,name:e,cover:l,publishTime:L(t),artistId:n.id})}))}catch(a){b(R.ERROR,a.message)}ra.value=!1,ca[2]=0==ta.length}),ra):"playList"==a&&0==oa.length?j((async()=>{try{const a=await _(1e3,60,aa),{result:{playlists:s}}=a;s&&s.length>0&&s.forEach((a=>{const{id:s,name:e,coverImgUrl:l,playCount:t}=a;oa.push({id:s,name:e,image:l,playCount:t,description:"",tag:[],creator:{nickname:"",avatarUrl:""}})}))}catch(a){b(R.ERROR,a.message)}ra.value=!1,ca[3]=0==ta.length}),ra):"singer"==a&&0==ia.length&&j((async()=>{try{const a=await _(100,60,aa),{result:{artists:s}}=a;s&&s.length>0&&s.forEach((a=>{const{id:s,name:e,picUrl:l,accountId:t}=a;ia.push({id:s,name:e,avatar:l,score:t})}))}catch(a){b(R.ERROR,a.message)}ra.value=!1,ca[4]=0==ta.length}),ra)};return j((async()=>{try{const a=await _(1,100,aa),{result:{songs:s}}=a;if(s&&s.length>0){const a=s.map((a=>a.id)).join(","),e=await w(a),{songs:l}=e;l.forEach((a=>{E([],sa,a)})),S(a,sa),J.initLoveMusic(sa)}}catch(a){b(R.ERROR,a.message)}ua.value=!1}),ua),(s,e)=>{const l=a;return g(),o("div",G,[i(u(P,{songs:sa,"song-id-mapper":m(ea),onCloseSelect:Y},null,8,["songs","song-id-mapper"]),[[r,X.value]]),i(u(M,{onGetActive:pa,active:"song",class:"search-tab"},{content:c((()=>[u(l,{label:"歌曲",name:"song"},{default:c((()=>[d("div",V,[d("div",q,[u(z,{songs:sa},null,8,["songs"]),u(A,{icon:"",onClick:$,name:"全部收藏"}),u(A,{icon:"",name:"批量操作",onClick:e[0]||(e[0]=a=>X.value=!X.value)})]),u(B,{songs:sa,"song-id-mapper":m(ea),height:m(W)},null,8,["songs","song-id-mapper","height"])])])),_:1}),u(l,{label:"视频",name:"video"},{default:c((()=>[u(N,{"is-loading":ra.value},null,8,["is-loading"]),i(u(D,null,null,512),[[r,ca[0]]]),i(u(I,{mvs:la},null,8,["mvs"]),[[r,!ca[0]]])])),_:1}),u(l,{label:"MV",name:"mv"},{default:c((()=>[u(N,{"is-loading":ra.value},null,8,["is-loading"]),i(u(D,null,null,512),[[r,ca[1]]]),i(u(I,{mvs:ta},null,8,["mvs"]),[[r,!ca[1]]])])),_:1}),u(l,{label:"专辑",name:"album"},{default:c((()=>[u(N,{"is-loading":ra.value},null,8,["is-loading"]),i(u(D,null,null,512),[[r,ca[2]]]),i(u(T,{albums:na},null,8,["albums"]),[[r,!ca[2]]])])),_:1}),u(l,{label:"歌单",name:"playList"},{default:c((()=>[u(N,{"is-loading":ra.value},null,8,["is-loading"]),i(u(D,null,null,512),[[r,ca[3]]]),i(u(U,{playlists:oa},null,8,["playlists"]),[[r,!ca[3]]])])),_:1}),u(l,{label:"歌手",name:"singer"},{default:c((()=>[u(N,{"is-loading":ra.value},null,8,["is-loading"]),i(u(D,null,null,512),[[r,ca[4]]]),i(d("div",F,[u(k,{"singer-list":ia,"show-all-avatar":!1},null,8,["singer-list"])],512),[[r,!ca[4]]])])),_:1})])),_:1},512),[[r,!X.value]])])}}}),[["__scopeId","data-v-cc33f3be"]]);export{H as default};
