import{x as a}from"../element-plus/element-plus.5cae0800.js";import{G as e,ax as s,u as t,r as n,o,c as l,a as u,T as r,U as p,S as c,P as i,aj as g,z as m,i as d}from"../@vue/@vue.59fec093.js";import{g as v,_ as f,$ as _}from"../../assets/index-c885de52.js";const x={class:"pagination-container"},h={class:"total"},z={class:"go"},C=f(e({__name:"Pagination",props:{total:null,curPage:null,pageSize:null},emits:["pageChange"],setup(e,{emit:m}){s((a=>({"2f2b2d89":t(d),eb2f57f6:t(f)})));const d=v().get("themeColor"),f=v().get("fontColor"),_=n(""),C=()=>{/^[0-9]+$/.test(_.value)||(_.value="")},b=a=>{a&&m("pageChange",a)};return(s,t)=>{const n=a;return o(),l("div",x,[u("span",h,"一共"+r(e.total)+"首歌曲",1),p(n,{layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.curPage,onCurrentChange:b},null,8,["total","page-size","current-page"]),u("div",z,[u("p",null,[c(" 前往第"),i(u("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>_.value=a),onFocusout:t[1]||(t[1]=a=>b(+_.value)),onInput:C},null,544),[[g,_.value]]),c("页 ")])])])}}}),[["__scopeId","data-v-7d89ba6b"]]),b={class:"no-search"},P=["src"],j={class:"no-data"},S=f(e({__name:"NoSearch",props:{size:{default:420},text:{default:"暂无用户数据"}},setup(a){const e=a;s((a=>({"44778eb8":t(p),"787394ac":t(n)})));const n=m("fontGray"),p=d((()=>e.size+"px"));return(e,s)=>(o(),l("div",b,[u("img",{src:t(_),class:"image"},null,8,P),u("h4",j,r(a.text),1)]))}}),[["__scopeId","data-v-25787797"]]);export{C as P,S as _};
