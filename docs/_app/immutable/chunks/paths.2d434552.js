import{H as l,s as m,a2 as k,U as w,a3 as z}from"./index.7dde39e2.js";const u=[];function A(e,i){return{subscribe:T(e,i).subscribe}}function T(e,i=l){let c;const n=new Set;function a(t){if(m(e,t)&&(e=t,c)){const r=!u.length;for(const s of n)s[1](),u.push(s,e);if(r){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(t){a(t(e))}function b(t,r=l){const s=[t,r];return n.add(s),n.size===1&&(c=i(a)||l),t(e),()=>{n.delete(s),n.size===0&&(c(),c=null)}}return{set:a,update:f,subscribe:b}}function S(e,i,c){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return A(c,b=>{let t=!1;const r=[];let s=0,_=l;const p=()=>{if(s)return;_();const o=i(n?r[0]:r,b);f?b(o):_=z(o)?o:l},q=a.map((o,d)=>k(o,y=>{r[d]=y,s&=~(1<<d),t&&p()},()=>{s|=1<<d}));return t=!0,p(),function(){w(q),_()}})}var g;const x=((g=globalThis.__sveltekit_15uq15l)==null?void 0:g.base)??"/gracarca";var h;const U=((h=globalThis.__sveltekit_15uq15l)==null?void 0:h.assets)??x;export{U as a,x as b,S as d,A as r,T as w};
