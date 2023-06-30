import{G as e,ax as a,u as s,i as l,Z as o,o as n,c as t,a as u,U as c,z as i,n as r,r as p,O as v,J as d,F as g,a7 as m,M as h,T as f,I as S,P as C,aq as w,ay as _,az as y,V as k}from"../@vue/@vue.59fec093.js";import{s as b}from"../pinia/pinia.81428a33.js";import{g as N,u as P,a as V,D as I,e as B,d as L,_ as U,t as j,P as z}from"../../assets/index-c28fd0ea.js";import{_ as M,P as R}from"../PlayButton/PlayButton.09e76a5a.js";import{S as D}from"../SearchButton/SearchButton.5f7c457f.js";import{b as E,c as G,d as x}from"../element-plus/element-plus.f4dce189.js";const F={class:"batch-container"},O={class:"operation-select"},T=U(e({__name:"UserBatch",props:{pageName:null},emits:["closeSelect"],setup(e,{emit:p}){const v=e;a((e=>({"0634ece7":s(d)})));const d=N().get("themeColor"),g=P(),{isPlay:m,songList:h,songListId:f,playProcess:S,playTime:C,current:w}=b(g),_=V(),{songRecord:y,musicDownload:k,loveSongs:U}=b(_),j=i("hideScroll"),z=l((()=>"LoveView"==v.pageName?U.value:"RecentPlayView"==v.pageName?y.value:k.value)),R=l((()=>new Map(z.value.map(((e,a)=>[e.id,a]))))),D=o([]),E=e=>{0!=D.length&&D.splice(0),D.push(...e)},G=async()=>{D.length>0?(m.value=!1,S.value=0,C.value=0,await r(),D.forEach((e=>{null==f.value.get(e.id)&&h.value.unshift(e)})),w.value=f.value.get(D[0].id),m.value=!0,B(L.SUCCESS,"已添加到播放列表！")):B(L.INFO,"请添加歌曲！")},x=()=>{D.forEach((e=>{_.addMuiscDownload(e)}))},T=()=>{if(D.length>0){const e=D.map((e=>e.id)),a=z.value.filter((a=>!e.includes(a.id)));z.value.splice(0),z.value.push(...a),B(L.SUCCESS,"已清除选中的歌曲！")}else B(L.INFO,"请添加歌曲！")},q=()=>{j(),p("closeSelect",!1)};return(e,a)=>(n(),t("div",F,[u("div",O,[c(I,{icon:"",name:"播放",class:"play",onClick:G}),c(I,{icon:"",onClick:T,name:"删除"}),c(I,{icon:"󰌄",onClick:x,name:"下载"}),c(I,{icon:"",name:"取消操作",onClick:q})]),c(M,{songs:s(z),"song-id-mapper":s(R),showSelect:!0,"show-header":!1,onGetSelectItems:E},null,8,["songs","song-id-mapper"])]))}}),[["__scopeId","data-v-855ad860"]]),q=e=>(_("data-v-d459fc75"),e=e(),y(),e),J={class:"sort-btn"},Z=[q((()=>u("span",{class:"iconfont"},"",-1))),q((()=>u("span",null," 排序",-1)))],$=U(e({__name:"SortButton",emits:["getSortChoice"],setup(e,{emit:i}){a((e=>({"667892a2":s(_),"3271bb94":s(b),"383c201f":s(k)})));const r=j(),_=N().get("fontColor"),y=N().get("background"),k=N().get("themeColor"),b=l((()=>{var e;return"color"==r.bgMode?null==(e=N().get("searchBg"))?void 0:e.value:"rgba(210,210,210,0.2)"})),P=l((()=>"color"==r.bgMode?"#ffffff"==_.value?"dropdown-dark":"dropdown-light":"dropdown-skin")),V=o(["歌曲排序","歌手排序","专辑排序","时长排序"]),I=o([!1,!1,!1,!1]),B=p(-1),L=l((()=>I.map(((e,a)=>a==B.value)))),U=e=>{"歌曲排序"==e?B.value=L.value[0]?-1:0:"歌手排序"==e?B.value=L.value[1]?-1:1:"专辑排序"==e?B.value=L.value[2]?-1:2:"时长排序"==e&&(B.value=L.value[3]?-1:3),-1==B.value?i("getSortChoice",L.value,!0):i("getSortChoice",L.value,!1)},z=()=>{-1==B.value&&(B.value=0,i("getSortChoice",L.value,!1))};return(e,a)=>{const l=E,o=G,i=x,r=w("prevent");return n(),t("div",J,[c(i,{trigger:"click",onCommand:U,"popper-class":`dropdown sort-drop ${s(P)}`},{dropdown:v((()=>[c(o,{style:d({color:s(_),background:s(y)})},{default:v((()=>[(n(!0),t(g,null,m(V,((e,a)=>(n(),h(l,{key:e,command:e},{default:v((()=>[u("span",{class:S({"is-choose":s(L)[a]})},f(e),3)])),_:2},1032,["command"])))),128))])),_:1},8,["style"])])),default:v((()=>[C((n(),t("div",{class:"sort",onClick:z},Z)),[[r]])])),_:1},8,["popper-class"])])}}}),[["__scopeId","data-v-d459fc75"]]),A={class:"user-container"},H={class:"top-operation"},K=U(e({__name:"UserSongTable",props:{pageName:null},emits:["openSelect"],setup(e,{emit:a}){const i=e,r=V(),{musicDownload:v,loveSongs:d,songRecord:g}=b(r),m=l((()=>{let e=o([]);return e="LoveView"==i.pageName?d.value:"RecentPlayView"==i.pageName?g.value:v.value,e})),h=l((()=>new Map(m.value.map(((e,a)=>[e.id,a]))))),f=p(1),S=p(40),w=l((()=>m.value.slice((f.value-1)*S.value,f.value*S.value).filter((e=>e.name.includes(P.value)||e.album.includes(P.value)||e.singer.includes(P.value))))),_=l((()=>m.value.length)),y=e=>{f.value=e},N=l((()=>"LoveView"==i.pageName?"清空全部收藏":"RecentPlayView"==i.pageName?"清空播放记录":"清空下载记录")),P=p(""),U=e=>{P.value=e},j=o([!1,!1,!1,!1]),E=p(!1),G=(e,a)=>{for(let s=0;s<j.length;s++)j[s]=e[s];a&&(E.value=a)},x=()=>{"LoveView"==i.pageName?d.value.splice(0):"RecentPlayView"==i.pageName?g.value.splice(0):v.value.splice(0),B(L.SUCCESS,"已清空全部下载记录！")};return(e,l)=>(n(),t("div",A,[u("div",H,[c(R,{songs:s(w)},null,8,["songs"]),c(I,{icon:"",name:s(N),onClick:x},null,8,["name"]),c(I,{icon:"",name:"批量操作",onClick:l[0]||(l[0]=e=>a("openSelect",!0))}),c(D,{onGetContent:U}),c($,{onGetSortChoice:G})]),c(M,{songs:s(w),"song-id-mapper":s(h),sort:j,"page-size":S.value,"is-cancel-sort":E.value},null,8,["songs","song-id-mapper","sort","page-size","is-cancel-sort"]),C(c(z,{"cur-page":f.value,"page-size":S.value,total:s(_),onPageChange:y},null,8,["cur-page","page-size","total"]),[[k,S.value<s(_)]])]))}}),[["__scopeId","data-v-b6c951f5"]]);export{T as U,K as a};
