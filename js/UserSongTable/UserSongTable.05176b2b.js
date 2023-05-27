import{s as e}from"../pinia/pinia.07d51cb2.js";import{u as a,a as s,e as l,d as o,v as n,w as t,_ as i,g as c,p as u}from"../../assets/index-9d9b6d07.js";import{D as r}from"../DecoratedButton/DecoratedButton.c547bf52.js";import{_ as p}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.14c3bc29.js";import{G as v,i as m,Z as d,o as g,c as S,a as h,U as _,u as f,z as C,n as w,ax as y,d as N,O as P,J as k,F as V,a7 as b,M as L,T as x,I as B,P as j,aq as D,ay as I,az as R}from"../@vue/@vue.7ad02ad1.js";import{P as U}from"../PlayButton/PlayButton.8981b456.js";import{S as E}from"../SearchButton/SearchButton.8b3c8adf.js";import{b as O,c as F,d as G}from"../element-plus/element-plus.372e8740.js";const M={class:"batch-container"},A={class:"operation-select"},T=i(v({__name:"UserBatch",props:{pageName:null},emits:["closeSelect"],setup(i,{emit:c}){const u=i,v=a(),{isPlay:y,songList:N,songListId:P,playProcess:k,playTime:V,current:b}=e(v),L=s(),{songRecord:x,musicDownload:B,loveSongs:j}=e(L),D=C("hideScroll"),I=m((()=>"LoveView"==u.pageName?j.value:"RecentPlayView"==u.pageName?x.value:B.value)),R=m((()=>new Map(I.value.map(((e,a)=>[e.id,a]))))),U=d([]),E=e=>{0!=U.length&&U.splice(0),U.push(...e)},O=async()=>{U.length>0?(y.value=!1,k.value=0,V.value=0,await w(),U.forEach((e=>{null==P.value.get(e.id)&&N.value.unshift(e)})),b.value=P.value.get(U[0].id),y.value=!0,l(o.SUCCESS,"已添加到播放列表！")):l(o.INFO,"请添加歌曲！")},F=()=>{U.forEach((e=>{L.addMuiscDownload(e)}))},G=()=>{if(U.length>0){const e=U.map((e=>e.id)),a=I.value.filter((a=>!e.includes(a.id)));I.value.splice(0),I.value.push(...a),n(t.LOCAL,"songRecord",I.value),l(o.SUCCESS,"已清除选中的歌曲！")}else l(o.INFO,"请添加歌曲！")},T=()=>{D(),c("closeSelect",!1)};return(e,a)=>(g(),S("div",M,[h("div",A,[_(r,{icon:"",name:"播放",class:"play",onClick:O}),_(r,{icon:"",onClick:G,name:"删除"}),_(r,{icon:"󰌄",onClick:F,name:"下载"}),_(r,{icon:"",name:"取消操作",onClick:T})]),_(p,{songs:f(I),"song-id-mapper":f(R),showSelect:!0,"show-header":!1,onGetSelectItems:E},null,8,["songs","song-id-mapper"])]))}}),[["__scopeId","data-v-9365483f"]]),z=e=>(I("data-v-568d2043"),e=e(),R(),e),q={class:"sort-btn"},J=[z((()=>h("span",{class:"iconfont"},"",-1))),z((()=>h("span",null," 排序",-1)))],K=i(v({__name:"SortButton",emits:["getSortChoice"],setup(e,{emit:a}){y((e=>({"37e7ddba":f(l),"6873b45b":f(s)})));const s=c().get("searchBg"),l=c().get("fontColor"),o=c().get("background"),n=m((()=>"#ffffff"==o.value?"more-light":"more-dark")),t=d(["歌曲排序","歌手排序","专辑排序","时长排序"]),i=d([!1,!1,!1,!1]),u=N(-1),r=m((()=>i.map(((e,a)=>a==u.value)))),p=e=>{"歌曲排序"==e?u.value=r.value[0]?-1:0:"歌手排序"==e?u.value=r.value[1]?-1:1:"专辑排序"==e?u.value=r.value[2]?-1:2:"时长排序"==e&&(u.value=r.value[3]?-1:3),-1==u.value?a("getSortChoice",r.value,!0):a("getSortChoice",r.value,!1)},v=()=>{-1==u.value&&(u.value=0,a("getSortChoice",r.value,!1))};return(e,a)=>{const s=O,i=F,c=G,u=D("prevent");return g(),S("div",q,[_(c,{trigger:"click",onCommand:p,"popper-class":`more ${f(n)} sort-drop`},{dropdown:P((()=>[_(i,{style:k({background:f(o),color:f(l)})},{default:P((()=>[(g(!0),S(V,null,b(t,((e,a)=>(g(),L(s,{key:e,command:e},{default:P((()=>[h("span",{class:B({"is-choose":f(r)[a]})},x(e),3)])),_:2},1032,["command"])))),128))])),_:1},8,["style"])])),default:P((()=>[j((g(),S("div",{class:"sort",onClick:v},J)),[[u]])])),_:1},8,["popper-class"])])}}}),[["__scopeId","data-v-568d2043"]]),Z={class:"user-container"},$={class:"top-operation"},H=i(v({__name:"UserSongTable",props:{pageName:null},emits:["openSelect"],setup(a,{emit:i}){const c=a,v=s(),{musicDownload:C,loveSongs:w,songRecord:y}=e(v),P=u(),{isFullScreen:k}=e(P),V=m((()=>{let e=d([]);return e="LoveView"==c.pageName?w.value:"RecentPlayView"==c.pageName?y.value:C.value,e.filter((e=>e.name.includes(j.value)||e.album.includes(j.value)||e.singer.includes(j.value)))})),b=m((()=>new Map(V.value.map(((e,a)=>[e.id,a]))))),L=m((()=>"loveView"==c.pageName?"清空全部收藏":"recentPlayView"==c.pageName?"清空播放记录":"清空下载记录")),x=m((()=>"loveView"==c.pageName?"loveSongs":"recentPlayView"==c.pageName?"songRecord":"musicDownload")),B=m((()=>k.value?"RecentPlayView"==c.pageName?"560px":"580px":"RecentPlayView"==c.pageName?"420px":"440px")),j=N(""),D=e=>{j.value=e},I=d([!1,!1,!1,!1]),R=N(!1),O=(e,a)=>{for(let s=0;s<I.length;s++)I[s]=e[s];a&&(R.value=a)},F=()=>{let e=d([]);e="loveView"==c.pageName?w.value:"recentPlayView"==c.pageName?y.value:C.value,e.splice(0),n(t.LOCAL,x.value,e),l(o.SUCCESS,"已清空全部下载记录！")};return(e,a)=>(g(),S("div",Z,[h("div",$,[_(U,{songs:f(V)},null,8,["songs"]),_(r,{icon:"",name:f(L),onClick:F},null,8,["name"]),_(r,{icon:"",name:"批量操作",onClick:a[0]||(a[0]=e=>i("openSelect",!0))}),_(E,{onGetContent:D}),_(K,{onGetSortChoice:O})]),_(p,{songs:f(V),"song-id-mapper":f(b),sort:I,"is-cancel-sort":R.value,height:f(B)},null,8,["songs","song-id-mapper","sort","is-cancel-sort","height"])]))}}),[["__scopeId","data-v-62385c11"]]);export{T as U,H as a};
