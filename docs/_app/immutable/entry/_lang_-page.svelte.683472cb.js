import{S as J,i as O,s as R,k as v,q,a as H,l as b,m as E,r as A,c as M,h,n as S,b as G,G as g,u as C,H as V,y as T,z as B,A as D,g as I,f as F,d as k,B as N,J as K,I as L,o as Q,v as U}from"../chunks/index.857e1085.js";import{H as W,G as X,d}from"../chunks/Index.svelte_svelte_type_style_lang.7999f450.js";import"../chunks/paths.3f63f888.js";/* empty css                                                            */import{p as Y}from"../chunks/stores.2501f55d.js";function Z(l){let a,o,t,i=l[0].slug+"",c,p,u=l[0].title+"",_,m,s,$,e=l[0].description+"",n;return{c(){a=v("div"),o=v("h6"),t=v("a"),c=q(i),p=H(),_=q(u),s=H(),$=v("p"),n=q(e),this.h()},l(r){a=b(r,"DIV",{});var f=E(a);o=b(f,"H6",{});var w=E(o);t=b(w,"A",{href:!0});var y=E(t);c=A(y,i),p=M(y),_=A(y,u),y.forEach(h),w.forEach(h),s=M(f),$=b(f,"P",{});var P=E($);n=A(P,e),P.forEach(h),f.forEach(h),this.h()},h(){S(t,"href",m=l[0].slug)},m(r,f){G(r,a,f),g(a,o),g(o,t),g(t,c),g(t,p),g(t,_),g(a,s),g(a,$),g($,n)},p(r,[f]){f&1&&i!==(i=r[0].slug+"")&&C(c,i),f&1&&u!==(u=r[0].title+"")&&C(_,u),f&1&&m!==(m=r[0].slug)&&S(t,"href",m),f&1&&e!==(e=r[0].description+"")&&C(n,e)},i:V,o:V,d(r){r&&h(a)}}}function x(l,a,o){let{article:t}=a;return console.log(t),l.$$set=i=>{"article"in i&&o(0,t=i.article)},[t]}class ee extends J{constructor(a){super(),O(this,a,x,Z,R,{article:0})}}function j(l,a,o){const t=l.slice();return t[4]=a[o],t}function z(l){let a,o;return a=new ee({props:{article:l[4]}}),{c(){T(a.$$.fragment)},l(t){B(a.$$.fragment,t)},m(t,i){D(a,t,i),o=!0},p(t,i){const c={};i&1&&(c.article=t[4]),a.$set(c)},i(t){o||(I(a.$$.fragment,t),o=!0)},o(t){k(a.$$.fragment,t),o=!1},d(t){N(a,t)}}}function te(l){let a,o,t,i,c,p,u,_;a=new W({props:{lang:l[2]}}),t=new X({props:{cameraSettings:l[1].base}});let m=l[0],s=[];for(let e=0;e<m.length;e+=1)s[e]=z(j(l,m,e));const $=e=>k(s[e],1,1,()=>{s[e]=null});return{c(){T(a.$$.fragment),o=H(),T(t.$$.fragment),i=H(),c=v("main"),p=v("div"),u=v("section");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){B(a.$$.fragment,e),o=M(e),B(t.$$.fragment,e),i=M(e),c=b(e,"MAIN",{id:!0});var n=E(c);p=b(n,"DIV",{id:!0,class:!0});var r=E(p);u=b(r,"SECTION",{class:!0});var f=E(u);for(let w=0;w<s.length;w+=1)s[w].l(f);f.forEach(h),r.forEach(h),n.forEach(h),this.h()},h(){S(u,"class","content-section"),S(p,"id","gracarca"),S(p,"class","svelte-1mrw5qh"),S(c,"id","content")},m(e,n){D(a,e,n),G(e,o,n),D(t,e,n),G(e,i,n),G(e,c,n),g(c,p),g(p,u);for(let r=0;r<s.length;r+=1)s[r].m(u,null);_=!0},p(e,[n]){if(n&1){m=e[0];let r;for(r=0;r<m.length;r+=1){const f=j(e,m,r);s[r]?(s[r].p(f,n),I(s[r],1)):(s[r]=z(f),s[r].c(),I(s[r],1),s[r].m(u,null))}for(U(),r=m.length;r<s.length;r+=1)$(r);F()}},i(e){if(!_){I(a.$$.fragment,e),I(t.$$.fragment,e);for(let n=0;n<m.length;n+=1)I(s[n]);_=!0}},o(e){k(a.$$.fragment,e),k(t.$$.fragment,e),s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)k(s[n]);_=!1},d(e){N(a,e),e&&h(o),N(t,e),e&&h(i),e&&h(c),K(s,e)}}}const ae="/api/posts";function re(l,a,o){let t;L(l,Y,u=>o(3,t=u));let i={base:{pos:[-113.6,1500,-37.7],rot:[d(-90),d(0),d(0)],orbitcontrols:!0},Gräberfeld:{pos:[-238,755,694],rot:[d(-51.61),d(.1),d(.12)],orbitcontrols:!1},Test:{pos:[-288,879,-493],rot:[d(-155),d(.3),d(180)],orbitcontrols:!1}},c=t.params.lang,p=[];return Q(async function(){var _=await(await fetch(ae)).json();o(0,p=_.filter(function(m){return m.lang==c}))}),[p,i,c]}class ce extends J{constructor(a){super(),O(this,a,re,te,R,{})}}export{ce as default};