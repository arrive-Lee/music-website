import{an as t,d as e,am as n,ac as s,A as o,av as c,X as a,e as r,Z as i,g as u,b as f,n as p,f as l,z as h,_ as d,i as y}from"../@vue/@vue.69a1071d.js";
/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let v;const b=t=>v=t,_=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var O,$;function g(){const s=t(!0),o=s.run((()=>e({})));let c=[],a=[];const r=n({install(t){b(r),r._a=t,t.provide(_,r),t.config.globalProperties.$pinia=r,a.forEach((t=>c.push(t))),a=[]},use(t){return this._a?c.push(t):a.push(t),this},_p:c,_a:null,_e:s,_s:new Map,state:o});return r}($=O||(O={})).direct="direct",$.patchObject="patch object",$.patchFunction="patch function";const m=()=>{};function P(t,e,n,s=m){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&u()&&f(o),o}function S(t,...e){t.slice().forEach((t=>{t(...e)}))}function E(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],a=t[n];j(a)&&j(s)&&t.hasOwnProperty(n)&&!o(s)&&!c(s)?t[n]=E(a,s):t[n]=s}return t}const w=Symbol();const{assign:A}=Object;function I(a,u,f={},l,h,d){let y;const v=A({actions:{}},f),_={deep:!0};let $,g,I,M=n([]),x=n([]);const F=l.state.value[a];let k;function z(t){let e;$=g=!1,"function"==typeof t?(t(l.state.value[a]),e={type:O.patchFunction,storeId:a,events:I}):(E(l.state.value[a],t),e={type:O.patchObject,payload:t,storeId:a,events:I});const n=k=Symbol();p().then((()=>{k===n&&($=!0)})),g=!0,S(M,e,l.state.value[a])}d||F||(l.state.value[a]={}),e({});const J=d?function(){const{state:t}=f,e=t?t():{};this.$patch((t=>{A(t,e)}))}:m;function N(t,e){return function(){b(l);const n=Array.from(arguments),s=[],o=[];let c;S(x,{args:n,name:t,store:Z,after:function(t){s.push(t)},onError:function(t){o.push(t)}});try{c=e.apply(this&&this.$id===a?this:Z,n)}catch(r){throw S(o,r),r}return c instanceof Promise?c.then((t=>(S(s,t),t))).catch((t=>(S(o,t),Promise.reject(t)))):(S(s,c),c)}}const X={_p:l,$id:a,$onAction:P.bind(null,x),$patch:z,$reset:J,$subscribe(t,e={}){const n=P(M,t,e.detached,(()=>s())),s=y.run((()=>r((()=>l.state.value[a]),(n=>{("sync"===e.flush?g:$)&&t({storeId:a,type:O.direct,events:I},n)}),A({},_,e))));return n},$dispose:function(){y.stop(),M=[],x=[],l._s.delete(a)}},Z=i(X);l._s.set(a,Z);const q=l._e.run((()=>(y=t(),y.run((()=>u())))));for(const t in q){const e=q[t];if(o(e)&&(!o(C=e)||!C.effect)||c(e))d||(!F||j(B=e)&&B.hasOwnProperty(w)||(o(e)?e.value=F[t]:E(e,F[t])),l.state.value[a][t]=e);else if("function"==typeof e){const n=N(t,e);q[t]=n,v.actions[t]=e}}var B,C;return A(Z,q),A(s(Z),q),Object.defineProperty(Z,"$state",{get:()=>l.state.value[a],set:t=>{z((e=>{A(e,t)}))}}),l._p.forEach((t=>{A(Z,y.run((()=>t({store:Z,app:l._a,pinia:l,options:v}))))})),F&&d&&f.hydrate&&f.hydrate(Z.$state,F),$=!0,g=!0,Z}function M(t,e,s){let o,c;const a="function"==typeof e;function r(t,s){const r=l();(t=t||r&&h(_,null))&&b(t),(t=v)._s.has(o)||(a?I(o,e,c,t):function(t,e,s,o){const{state:c,actions:a,getters:r}=e,i=s.state.value[t];let u;u=I(t,(function(){i||(s.state.value[t]=c?c():{});const e=d(s.state.value[t]);return A(e,a,Object.keys(r||{}).reduce(((e,o)=>(e[o]=n(y((()=>{b(s);const e=s._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,s,0,!0)}(o,c,t));return t._s.get(o)}return"string"==typeof t?(o=t,c=a?s:e):(c=t,o=t.id),r.$id=o,r}function x(t){{t=s(t);const e={};for(const n in t){const s=t[n];(o(s)||c(s))&&(e[n]=a(t,n))}return e}}export{g as c,M as d,x as s};
