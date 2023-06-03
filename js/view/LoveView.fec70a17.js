import{u as e}from"../element-plus/element-plus.372e8740.js";import{G as s,ax as t,d as l,c as a,P as o,V as n,U as i,O as r,u as m,z as u,o as p,a as v}from"../@vue/@vue.7ad02ad1.js";import{s as j}from"../pinia/pinia.07d51cb2.js";import{a as c,b as d,j as g,_ as h}from"../../assets/index-438c1617.js";import{T as f}from"../Tab/Tab.0d3939b0.js";import{M as _}from"../Mv/Mv.e949dab7.js";import{S as y}from"../Singer/Singer.cd0c701d.js";import{A as b}from"../Albums/Albums.dd40c46a.js";import{P as S}from"../PlayList/PlayList.e51dd986.js";import{U as x,a as D}from"../UserSongTable/UserSongTable.97ed2cf6.js";import{_ as w}from"../NoSearch/NoSearch.b239afe6.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.47595bf3.js";import"../nprogress/nprogress.8c6d26c7.js";import"../DecoratedButton/DecoratedButton.30bbc797.js";import"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.fa6db42a.js";import"../PlayButton/PlayButton.17ba5948.js";import"../SearchButton/SearchButton.bbcb3085.js";const L={class:"love-container scroll-container"},G={class:"singers"},B=h(s({__name:"LoveView",setup(s){t((e=>({e77fd8c0:m(h)})));const h=u("fontGray"),B=c(),{loveSongs:P,loveVideo:z,loveSinger:I,lovePlaylist:N,loveAlbum:A}=j(B),T=u("firstLoading"),V=u("hideScroll"),M=()=>{V()},U=l(!1),k=e=>{U.value=e},C=e=>{U.value=e},O=e=>{z.value.splice(e,1)},E=e=>{A.value.splice(e,1)},H=e=>{I.value.splice(e,1)},q=e=>{N.value.splice(e,1)};return d((async()=>{const e=P.value.map((e=>e.id)).join(",");g(e,P.value),T.value=!1}),T),(s,t)=>{const l=e;return p(),a("div",L,[o(i(x,{"page-name":"LoveView",onCloseSelect:C},null,512),[[n,U.value]]),o(i(f,{active:"song",onGetActive:M},{content:r((()=>[i(l,{label:"歌曲",name:"song"},{default:r((()=>[i(D,{"page-name":"LoveView",onOpenSelect:k})])),_:1}),i(l,{label:"视频",name:"video"},{default:r((()=>[o(i(w,{text:"暂无收藏视频"},null,512),[[n,0==m(z).length]]),o(i(_,{mvs:m(z),transitionName:"list",showDelete:!0,onGetDeleteIndex:O},null,8,["mvs"]),[[n,m(z).length>0]])])),_:1}),i(l,{label:"歌单",name:"playlist"},{default:r((()=>[o(i(w,{text:"暂无收藏歌单"},null,512),[[n,0==m(N).length]]),o(i(S,{playlists:m(N),transitionName:"list",showDelete:!0,onGetDeleteIndex:q},null,8,["playlists"]),[[n,m(N).length>0]])])),_:1}),i(l,{label:"歌手",name:"singer"},{default:r((()=>[o(i(w,{text:"暂无收藏歌手"},null,512),[[n,0==m(I).length]]),v("div",G,[o(i(y,{"singer-list":m(I),transitionName:"list",showDelete:!0,"show-all-avatar":!1,onGetDeleteIndex:H},null,8,["singer-list"]),[[n,m(I).length>0]])])])),_:1}),i(l,{label:"专辑",name:"album"},{default:r((()=>[o(i(w,{text:"暂无收藏专辑"},null,512),[[n,0==m(A).length]]),o(i(b,{albums:m(A),transitionName:"list",showDelete:!0,onGetDeleteIndex:E},null,8,["albums"]),[[n,m(A).length>=0]])])),_:1})])),_:1},512),[[n,!U.value]])])}}}),[["__scopeId","data-v-81c58cdf"]]);export{B as default};
