import{y as e,z as a}from"../element-plus/element-plus.372e8740.js";import{G as o,ax as s,d as l,i as t,e as n,M as r,O as i,I as d,u as c,z as u,n as p,o as v,R as m,U as g,a as h,a2 as w,T as b,c as f,P as y,S as C,V as I,aq as S}from"../@vue/@vue.7ad02ad1.js";import{s as k}from"../pinia/pinia.07d51cb2.js";import{o as M}from"../vue-router/vue-router.47595bf3.js";import{g as x,u as j,a as L,p as _,e as R,d as B,j as H,T as N,U as O,V as P}from"../../assets/index-4f6f95e1.js";const T=["onMousedown","textContent"],q={key:0,class:"iconfont vip"},z=["onClick"],D=["onClick"],F=["onClick"],G=o({__name:"SongList",props:{songs:null,songIdMapper:null,height:null,showSelect:{type:Boolean},sort:{default:void 0},isCancelSort:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0}},emits:["getSelectItems"],setup(o,{emit:G}){const U=o;s((e=>({"6c8e000c":c(V),"6cd499e5":c(A),"1983b788":c(E),"480d63ee":c(J)})));const V=x().get("fontColor"),A=x().get("tableHover"),E=u("bg"),J=u("fontGray"),K=u("hideScroll"),Q=j(),{songList:W,current:X,isPlay:Y,playProcess:Z,playTime:$,songListId:ee}=k(Q),ae=L(),oe=_(),{bgMode:se}=k(oe),le=l(),te=l("operation-area operation"+Number.parseInt(1e12*Math.random()+"")),ne=t((()=>U.showSelect)),re=t((()=>U.showSelect?55:0)),ie=e=>{G("getSelectItems",e)};n(ne,(e=>{e||le.value.clearSelection()}));const de=t((()=>U.sort?U.sort:[!1,!1,!1,!1])),ce=t((()=>U.isCancelSort)),ue=(e,a)=>e.name.localeCompare(a.name),pe=(e,a)=>e.singer.localeCompare(a.singer),ve=(e,a)=>e.album.localeCompare(a.album),me=(e,a)=>+e.time-+a.name;n(ce,(e=>{e&&le.value.clearSort()}));const ge=()=>document.querySelectorAll("."+te.value.split(" ")[1]),he=e=>{ge()[U.songIdMapper.get(e.id)].style.opacity="1"},we=e=>{ge()[U.songIdMapper.get(e.id)].style.opacity="0"},be=async e=>{if("0"==e.available||"8"==e.available){const a=ee.value.get(e.id);null==a?(ae.addRecord(e,ae.songRecord,ae.songRecordId,"songRecord"),0==X.value?(Y&&(Y.value=!1),Z.value=0,$.value=0,W.value.unshift(e),await p(),Y.value=!0):(W.value.unshift(e),X.value=0)):X.value!=a?X.value=a:Y.value=!0}else(e.available="1")?R(B.INFO,"此歌曲为vip专属"):(e.available="10")&&R(B.INFO,"此歌曲尚未拥有版权，请切换其它歌曲")};let fe=0;return fe=setInterval((()=>{const e=U.songs.map((e=>e.id)),a=U.songs.findIndex((e=>e.id==W.value[X.value].id));e.length>0&&H(e.join(","),U.songs,"",a)}),3e5),M((()=>{clearInterval(fe)})),(s,l)=>{const t=a,n=S("prevent");return v(),r(c(e),{onCellDblclick:be,onCellMouseEnter:he,onCellMouseLeave:we,onSelectionChange:ie,data:o.songs,"max-height":o.height,"show-header":o.showHeader,ref_key:"tableContainer",ref:le,style:{width:"80vw"},class:d(["songs-table",{"skin-table":"skin"==c(se)}])},{default:i((()=>[c(ne)?(v(),r(t,{key:0,type:"selection",width:c(re)},null,8,["width"])):m("",!0),g(t,{sortable:c(de)[0],"sort-method":ue,label:"歌曲",width:500-c(re)},{default:i((e=>[h("div",null,[h("span",{onMousedown:w((a=>c(ae).addLove(e.row,c(ae).loveSongs,c(ae).loveMusicId,"loveSongs")),["prevent"]),class:d(["iconfont love",{"is-love":e.row.isLove}]),textContent:b(e.row.isLove?"󰅅":"")},null,42,T),h("span",null,b(e.row.name),1),"1"==e.row.available||"10"==e.row.available?(v(),f("span",q,"")):m("",!0),y((v(),f("span",{class:"iconfont playmv",onClick:a=>{return o=e.row,void P(o,(()=>{K()}));var o}},[C("")],8,z)),[[n]]),h("div",{class:d(te.value)},[y((v(),f("span",{onClick:a=>be(e.row),class:"iconfont"},[C("")],8,D)),[[I,!c(Y)||c(X)!=c(W).findIndex((a=>a.id==e.row.id))],[n]]),y((v(),f("span",{onClick:l[0]||(l[0]=e=>Y.value=!1),class:"iconfont"},[C(" ")])),[[I,c(Y)&&c(X)==c(W).findIndex((a=>a.id==e.row.id))],[n]]),y((v(),f("span",{class:"iconfont",onClick:a=>c(ae).addMuiscDownload(e.row)},[C("󰌄")],8,F)),[[n]]),g(N,{song:e.row,play:be},null,8,["song"])],2)])])),_:1},8,["sortable","width"]),g(t,{sortable:c(de)[1],"sort-method":pe,prop:"singer",label:"歌手",width:"320"},null,8,["sortable"]),g(t,{sortable:c(de)[2],"sort-method":ve,prop:"album",label:"专辑",width:"320"},null,8,["sortable"]),g(t,{sortable:c(de)[3],"sort-method":me,label:"时长"},{default:i((e=>[h("span",null,b(c(O)(e.row.time)),1)])),_:1},8,["sortable"])])),_:1},8,["data","max-height","show-header","class"])}}});export{G as _};
