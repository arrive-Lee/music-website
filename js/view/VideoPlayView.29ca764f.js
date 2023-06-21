import{g as a}from"../element-plus/element-plus.f7914039.js";import{G as e,ax as s,i as t,d as o,Z as i,y as l,c as n,a as r,U as c,O as m,W as d,T as u,P as p,V as v,u as y,S as h,z as g,o as j,F as f,a7 as R,ay as w,az as k,n as C,aq as b}from"../@vue/@vue.7ad02ad1.js";import{b as x,u as E}from"../vue-router/vue-router.47595bf3.js";import{t as O,g as V,a as T,b as z,y as S,w as q,e as D,d as I,z as L,A as _,B as F,o as B,D as N,E as A,F as G,G as M,C as P,s as U,_ as Z}from"../../assets/index-6776fa06.js";import{D as W}from"../dplayer/dplayer.6b26f8aa.js";import{D as $}from"../DecoratedButton/DecoratedButton.f5ca20be.js";import{M as H}from"../Mv/Mv.b701d005.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const J=a=>(w("data-v-da3e8a5a"),a=a(),k(),a),K={class:"video-container scroll-container"},Q={class:"players-container"},X={class:"recommend-container"},Y={class:"content"},aa={class:"mask"},ea=["onClick"],sa=J((()=>r("div",{class:"players"},null,-1))),ta={class:"detail"},oa={class:"title"},ia={class:"artist-info"},la={class:"operation"},na={class:"comment-area"},ra={class:"title"},ca=J((()=>r("span",{class:"iconfont_1"}," ",-1))),ma=Z(e({__name:"VideoPlayView",setup(e){s((a=>({"79b71f9a":y(k),"79a78036":y(Z),be539168:y(ma),"70c1e348":y(da),"0356b211":y(J)})));const w=O(),k=V().get("fontColor"),Z=V().get("fontBlack"),J=V().get("shadow"),ma=g("fontGray"),da=t((()=>w.isFullScreen?"695px":"555px")),ua=T(),pa=o(),va=x(),ya=E(),ha=va.query.id+"",ga=i({id:ha,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),ja=i([]),fa=t((()=>[ga,...ja])),Ra=g("firstLoading"),wa=o(!1),ka=i([]),Ca=o(!1),ba=()=>{U("我在https://www.liyinchao.cloud/#"+va.fullPath+"观看"+ga.name+",快来和我一起观看把！")};return z((async()=>{if(/.*[A-Z]+.*/.test(ha)){try{const a=await N(ha),{data:{title:e,coverUrl:s,publishTime:t,playTime:o,creator:i}}=a;ga.name=e,ga.image=s,ga.playCount=o,ga.publishTime=q(t),ga.artist=i.nickname}catch(a){D(I.ERROR,a.message)}try{const a=await A(ha),{urls:e}=a;e?ga.url=e[0].url:D(I.INFO,"此视频暂无播放资源，请切换下一个。")}catch(a){D(I.ERROR,a.message)}try{const a=await G(ha),{data:e}=a;e.forEach((a=>{const{title:e,coverUrl:s,vid:t,playTime:o,creator:i}=a;ja.push({id:t,name:e,image:s,playCount:o,artist:i[0].userName})}))}catch(a){D(I.ERROR,a.message)}try{const a=await M(ha,100),{comments:e,hotComments:s}=a;B(s,ka),B(e,ka)}catch(a){D(I.ERROR,a.message)}}else{try{const a=await S(ha),{data:{name:e,artistName:s,cover:t,playCount:o,duration:i,publishTime:l}}=a;ga.name=e,ga.playCount=o,ga.image=t,ga.artist=s,ga.time=i,ga.publishTime=q(l)}catch(a){D(I.ERROR,a.message)}try{const a=await L(ha),{data:{url:e,fee:s}}=a;e?(ga.url=e,ga.available=s):D(I.INFO,"此视频暂无播放资源，请切换下一个。")}catch(a){D(I.ERROR,a.message)}try{const a=await _(ha),{mvs:e}=a;e&&e.forEach((a=>{const{id:e,cover:s,name:t,artistName:o,playCount:i}=a;ja.push({id:e,image:s,name:t,artist:o,playCount:i})}))}catch(a){D(I.ERROR,a.message)}try{const a=await F(ha,1e4),{comments:e,hotComments:s}=a;B(s,ka),B(e,ka)}catch(a){D(I.ERROR,a.message)}}ua.addRecord(ga,ua.videoRecord,ua.videoRecordId),ua.initLoveStatus(ga,ua.loveVideoId),(async()=>{await C(),pa.value=new W({container:document.querySelector(".players"),video:{url:ga.url,thumbnails:ga.image,type:"video/mp4",pic:ga.image},autoplay:!1,loop:!1,hotkey:!0,theme:"#1ed2a9",chromecast:!0,lang:"zh-cn",screenshot:!0,preload:"auto",volume:.9,playbackSpeed:[.75,1,1.25,1.5,1.75,2],contextmenu:[{text:"下载",click:()=>{ua.addVideoDownload(ga)}},{text:"收藏",click:()=>{ua.addLove(ga,ua.loveVideo,ua.loveVideoId)}},{text:"分享",click:()=>{ba()}}]}),document.querySelector(".dplayer-video").onended=()=>{wa.value=!0}})(),Ra.value=!1}),Ra),l((()=>{var a;document.querySelector(".dplayer-video").onended=null,null==(a=pa.value)||a.destroy()})),(e,s)=>{const t=a,o=b("prevent");return j(),n("div",K,[r("div",Q,[c(d,{name:"show"},{default:m((()=>[p(r("div",X,[p(r("h4",null,"精彩视频",512),[[v,y(fa).length>1]]),r("div",Y,[(j(!0),n(f,null,R(y(fa),((a,e)=>(j(),n("div",{class:"recommend-video",key:a.id},[c(t,{src:a.image,class:"image"},null,8,["src"]),r("div",aa,[p((j(),n("span",{class:"iconfont play",onClick:s=>((a,e)=>{0==a?(wa.value=!1,document.querySelector(".dplayer-video").play()):ya.push({name:"video",query:{id:e}})})(e,a.id)},[h("")],8,ea)),[[o]])])])))),128))])],512),[[v,wa.value]])])),_:1}),sa]),r("div",ta,[r("p",oa,u(ga.name),1),r("div",ia,[r("span",null,u(/.*[A-Z]+.*/.test(ha)?"创作者："+ga.artist:"演唱："+ga.artist),1),r("span",null,u(ga.playCount)+"次观看",1),r("span",null,"发布时间："+u(ga.publishTime),1)]),p(r("div",la,[c($,{name:ga.isLove?"取消收藏":"收藏",icon:ga.isLove?"":"","icon-style":ga.isLove?"color:#ff6a6a;":"",onClick:s[0]||(s[0]=a=>y(ua).addLove(ga,y(ua).loveVideo,y(ua).loveVideoId)),class:"operate"},null,8,["name","icon","icon-style"]),c($,{name:"下载",onClick:s[1]||(s[1]=a=>y(ua).addVideoDownload(ga)),icon:"",class:"operate"}),c($,{name:"分享",icon:"",onClick:ba,class:"operate"}),c($,{name:"评论",icon:"",onClick:s[2]||(s[2]=a=>Ca.value=!0),class:"operate"})],512),[[v,!Ca.value]])]),p(c(H,{mvs:ja,title:"相关推荐"},null,8,["mvs"]),[[v,!Ca.value&&ja.length>0]]),p(r("div",na,[r("h4",ra,"全部评论"+u(`(${ka.length})`),1),r("button",{class:"exit",onClick:s[3]||(s[3]=a=>Ca.value=!1)},[ca,h(" 退出 ")]),c(P,{comments:ka},null,8,["comments"])],512),[[v,Ca.value]])])}}}),[["__scopeId","data-v-da3e8a5a"]]);export{ma as default};
