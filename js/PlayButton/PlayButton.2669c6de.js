import{x as s}from"../element-plus/element-plus.ec47f34a.js";import{G as a,ax as e,u as n,o,M as t,O as l,S as u,T as i,ay as r,az as c,a as f}from"../@vue/@vue.7ad02ad1.js";import{s as p}from"../pinia/pinia.07d51cb2.js";import{g as m,u as d,e as g,d as v,_}from"../../assets/index-c145966f.js";const b=(s=>(r("data-v-dbff7fc1"),s=s(),c(),s))((()=>f("span",{class:"iconfont"},"",-1))),h=_(a({__name:"PlayButton",props:{songs:null,name:{default:"播放全部"}},setup(a){const r=a;e((s=>({"4e76bc8c":n(c)})));const c=m().get("shadow"),f=d(),{songList:_,current:h,songNum:j,songListId:x}=p(f),S=()=>{if(r.songs.length>0){const s=j.value;r.songs.forEach((s=>{null!=x.value.get(s.id)||"0"!=s.available&&"8"!=s.available||_.value.push(s)})),h.value=s,g(v.SUCCESS,"已经添加到播放列表")}else g(v.INFO,"请添加歌曲")};return(e,n)=>{const r=s;return o(),t(r,{onClick:S},{default:l((()=>[b,u(i(a.name),1)])),_:1})}}}),[["__scopeId","data-v-dbff7fc1"]]);export{h as P};
