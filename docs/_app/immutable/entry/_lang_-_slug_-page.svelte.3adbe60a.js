import{S as D,i as R,s as U,k as p,K as se,l as _,h as f,n as a,G as h,H,J as oe,b as I,q as J,a as S,m as y,r as W,c as N,L as ce,y as C,z as B,A as P,g as q,d as L,B as O,M as ee,N as te}from"../chunks/index.857e1085.js";import{G as ie,d as M,H as ue}from"../chunks/Index.svelte_svelte_type_style_lang.49a3520a.js";import{b as j}from"../chunks/paths.766f6593.js";function ne(s,e,r){const n=s.slice();return n[6]=e[r],n}function ae(s){let e,r;return{c(){e=p("link"),this.h()},l(n){e=_(n,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){a(e,"rel","preload"),a(e,"href",r=s[6]),a(e,"as","font"),a(e,"type","font/woff2"),a(e,"crossorigin","")},m(n,l){I(n,e,l)},p(n,l){l&32&&r!==(r=n[6])&&a(e,"href",r)},d(n){n&&f(e)}}}function fe(s){let e,r,n,l,i,m,d,o,t,v,k,T,G,A;document.title=e=s[0];let $=s[5],b=[];for(let g=0;g<$.length;g+=1)b[g]=ae(ne(s,$,g));return{c(){r=p("meta"),n=p("meta"),l=p("meta"),i=p("meta"),m=p("meta"),d=p("meta"),o=p("meta"),t=p("meta"),v=p("meta"),k=p("meta"),T=p("link");for(let g=0;g<b.length;g+=1)b[g].c();A=p("base"),this.h()},l(g){const c=se("svelte-alavqd",document.head);r=_(c,"META",{name:!0,content:!0}),n=_(c,"META",{name:!0,content:!0}),l=_(c,"META",{name:!0,content:!0}),i=_(c,"META",{property:!0,content:!0}),m=_(c,"META",{property:!0,content:!0}),d=_(c,"META",{property:!0,content:!0}),o=_(c,"META",{property:!0,content:!0}),t=_(c,"META",{property:!0,content:!0}),v=_(c,"META",{property:!0,content:!0}),k=_(c,"META",{name:!0,content:!0}),T=_(c,"LINK",{rel:!0,href:!0});for(let u=0;u<b.length;u+=1)b[u].l(c);A=_(c,"BASE",{href:!0,target:!0}),c.forEach(f),this.h()},h(){a(r,"name","description"),a(r,"content",s[1]),a(n,"name","author"),a(n,"content","Biotop Wissenschaftskollektiv"),a(l,"name","news_keywords"),a(l,"content",s[3]),a(i,"property","og:title"),a(i,"content",s[0]),a(m,"property","og:site_name"),a(m,"content","Gracarca"),a(d,"property","og:url"),a(d,"content",s[2]),a(o,"property","og:description"),a(o,"content",s[1]),a(t,"property","og:type"),a(t,"content","article"),a(v,"property","og:locale"),a(v,"content",s[4]),a(k,"name","robots"),a(k,"content","max-image-preview:large"),a(T,"rel","canonical"),a(T,"href",G=s[2]+"/"),a(A,"href",j),a(A,"target","_blank")},m(g,c){h(document.head,r),h(document.head,n),h(document.head,l),h(document.head,i),h(document.head,m),h(document.head,d),h(document.head,o),h(document.head,t),h(document.head,v),h(document.head,k),h(document.head,T);for(let u=0;u<b.length;u+=1)b[u].m(document.head,null);h(document.head,A)},p(g,[c]){if(c&1&&e!==(e=g[0])&&(document.title=e),c&2&&a(r,"content",g[1]),c&8&&a(l,"content",g[3]),c&1&&a(i,"content",g[0]),c&4&&a(d,"content",g[2]),c&2&&a(o,"content",g[1]),c&16&&a(v,"content",g[4]),c&4&&G!==(G=g[2]+"/")&&a(T,"href",G),c&32){$=g[5];let u;for(u=0;u<$.length;u+=1){const w=ne(g,$,u);b[u]?b[u].p(w,c):(b[u]=ae(w),b[u].c(),b[u].m(A.parentNode,A))}for(;u<b.length;u+=1)b[u].d(1);b.length=$.length}},i:H,o:H,d(g){f(r),f(n),f(l),f(i),f(m),f(d),f(o),f(t),f(v),f(k),f(T),oe(b,g),f(A)}}}function me(s,e,r){let{title:n="Gracarca"}=e,{description:l=""}=e,{url:i=j}=e,{keywords:m=""}=e,{lang:d=""}=e,{preloadFont:o=[]}=e;return s.$$set=t=>{"title"in t&&r(0,n=t.title),"description"in t&&r(1,l=t.description),"url"in t&&r(2,i=t.url),"keywords"in t&&r(3,m=t.keywords),"lang"in t&&r(4,d=t.lang),"preloadFont"in t&&r(5,o=t.preloadFont)},[n,l,i,m,d,o]}class de extends D{constructor(e){super(),R(this,e,me,fe,U,{title:0,description:1,url:2,keywords:3,lang:4,preloadFont:5})}}function re(s,e,r){const n=s.slice();return n[1]=e[r],n}function le(s){let e,r,n,l,i=s[1].name.toUpperCase()+"",m,d;return{c(){e=p("li"),r=p("a"),n=p("span"),l=p("b"),m=J(i),d=S(),this.h()},l(o){e=_(o,"LI",{class:!0});var t=y(e);r=_(t,"A",{href:!0,class:!0});var v=y(r);n=_(v,"SPAN",{class:!0});var k=y(n);l=_(k,"B",{});var T=y(l);m=W(T,i),T.forEach(f),k.forEach(f),v.forEach(f),d=N(t),t.forEach(f),this.h()},h(){a(n,"class","svelte-16kinrb"),a(r,"href",s[1].url),a(r,"class","svelte-16kinrb"),a(e,"class","svelte-16kinrb")},m(o,t){I(o,e,t),h(e,r),h(r,n),h(n,l),h(l,m),h(e,d)},p:H,d(o){o&&f(e)}}}function he(s){let e,r,n,l,i,m,d,o,t,v,k,T,G,A,$,b,g=s[0],c=[];for(let u=0;u<g.length;u+=1)c[u]=le(re(s,g,u));return{c(){e=p("footer"),r=p("section"),n=p("div"),l=p("a"),i=p("p"),m=p("span"),d=J("Grabelsdorf"),o=S(),t=p("img"),k=S(),T=p("span"),G=J("Grabalja vas"),A=S(),$=p("section"),b=p("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=_(u,"FOOTER",{class:!0});var w=y(e);r=_(w,"SECTION",{class:!0});var E=y(r);n=_(E,"DIV",{class:!0});var K=y(n);l=_(K,"A",{href:!0,"aria-label":!0,class:!0});var Q=y(l);i=_(Q,"P",{});var F=y(i);m=_(F,"SPAN",{class:!0});var X=y(m);d=W(X,"Grabelsdorf"),X.forEach(f),o=N(F),t=_(F,"IMG",{src:!0,alt:!0,class:!0,display:!0}),k=N(F),T=_(F,"SPAN",{class:!0});var Y=y(T);G=W(Y,"Grabalja vas"),Y.forEach(f),F.forEach(f),Q.forEach(f),K.forEach(f),E.forEach(f),A=N(w),$=_(w,"SECTION",{class:!0});var Z=y($);b=_(Z,"UL",{class:!0});var x=y(b);for(let V=0;V<c.length;V+=1)c[V].l(x);x.forEach(f),Z.forEach(f),w.forEach(f),this.h()},h(){a(m,"class","header-text1"),ce(t.src,v=j+"/img/gracarca-logo.png")||a(t,"src",v),a(t,"alt","gracarca logo"),a(t,"class","header-logo"),a(t,"display","inline"),a(T,"class","header-text2"),a(l,"href",j),a(l,"aria-label","The Pudding"),a(l,"class","svelte-16kinrb"),a(n,"class","header-mark"),a(r,"class","about svelte-16kinrb"),a(b,"class","svelte-16kinrb"),a($,"class","links svelte-16kinrb"),a(e,"class","svelte-16kinrb")},m(u,w){I(u,e,w),h(e,r),h(r,n),h(n,l),h(l,i),h(i,m),h(m,d),h(i,o),h(i,t),h(i,k),h(i,T),h(T,G),h(e,A),h(e,$),h($,b);for(let E=0;E<c.length;E+=1)c[E].m(b,null)},p(u,[w]){if(w&1){g=u[0];let E;for(E=0;E<g.length;E+=1){const K=re(u,g,E);c[E]?c[E].p(K,w):(c[E]=le(K),c[E].c(),c[E].m(b,null))}for(;E<c.length;E+=1)c[E].d(1);c.length=g.length}},i:H,o:H,d(u){u&&f(e),oe(c,u)}}}function ge(s){return[[{name:"Biotop*",url:"https://biotop.co"}]]}class pe extends D{constructor(e){super(),R(this,e,ge,he,U,{})}}function _e(s){let e,r,n,l,i,m,d,o;return e=new ie({props:{cameraSettings:s[1].base}}),i=new s[0]({}),d=new pe({}),{c(){C(e.$$.fragment),r=S(),n=p("div"),l=p("section"),C(i.$$.fragment),m=S(),C(d.$$.fragment),this.h()},l(t){B(e.$$.fragment,t),r=N(t),n=_(t,"DIV",{id:!0,class:!0});var v=y(n);l=_(v,"SECTION",{class:!0});var k=y(l);B(i.$$.fragment,k),k.forEach(f),v.forEach(f),m=N(t),B(d.$$.fragment,t),this.h()},h(){a(l,"class","content-section"),a(n,"id","gracarca"),a(n,"class","svelte-1mrw5qh")},m(t,v){P(e,t,v),I(t,r,v),I(t,n,v),h(n,l),P(i,l,null),I(t,m,v),P(d,t,v),o=!0},p:H,i(t){o||(q(e.$$.fragment,t),q(i.$$.fragment,t),q(d.$$.fragment,t),o=!0)},o(t){L(e.$$.fragment,t),L(i.$$.fragment,t),L(d.$$.fragment,t),o=!1},d(t){O(e,t),t&&f(r),t&&f(n),O(i),t&&f(m),O(d,t)}}}function ve(s,e,r){let{Texts:n}=e;ee("copy"),ee("data");let l={base:{pos:[-113.6,1500,-37.7],rot:[M(-90),M(0),M(0)],orbitcontrols:!0},Gräberfeld:{pos:[-238,755,694],rot:[M(-51.61),M(.1),M(.12)],orbitcontrols:!1},Test:{pos:[-288,879,-493],rot:[M(-155),M(.3),M(180)],orbitcontrols:!1}};return s.$$set=i=>{"Texts"in i&&r(0,n=i.Texts)},[n,l]}class be extends D{constructor(e){super(),R(this,e,ve,_e,U,{Texts:0})}}const ke="Gracarca",Ee="",z={title:ke,description:Ee};function Te(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 5.6.1"),console.log("build: 2023-10-08-16:31"),console.log("--- --- --- --- --- ---")}function ye(s){let e,r,n,l,i,m,d;return e=new ue({props:{lang:s[2]}}),l=new de({props:{title:s[4],description:s[5],url:s[6],preloadFont:s[3],keywords:s[7],lang:s[1].lang}}),m=new be({props:{Texts:s[0].content}}),{c(){C(e.$$.fragment),r=S(),n=p("main"),C(l.$$.fragment),i=S(),C(m.$$.fragment),this.h()},l(o){B(e.$$.fragment,o),r=N(o),n=_(o,"MAIN",{id:!0});var t=y(n);B(l.$$.fragment,t),i=N(t),B(m.$$.fragment,t),t.forEach(f),this.h()},h(){a(n,"id","content")},m(o,t){P(e,o,t),I(o,r,t),I(o,n,t),P(l,n,null),h(n,i),P(m,n,null),d=!0},p(o,[t]){const v={};t&1&&(v.Texts=o[0].content),m.$set(v)},i(o){d||(q(e.$$.fragment,o),q(l.$$.fragment,o),q(m.$$.fragment,o),d=!0)},o(o){L(e.$$.fragment,o),L(l.$$.fragment,o),L(m.$$.fragment,o),d=!1},d(o){O(e,o),o&&f(r),o&&f(n),O(l),O(m)}}}function $e(s,e,r){let n={si:"sl_SI",de:"de_AT",en:"en_GB"},{data:l}=e,i=l.meta.lang;Te();const m=[],{title:d,description:o,url:t,keywords:v}=z;return console.log(z),te("copy",z),te("data",l.data),s.$$set=k=>{"data"in k&&r(0,l=k.data)},[l,n,i,m,d,o,t,v]}class Ge extends D{constructor(e){super(),R(this,e,$e,ye,U,{data:0})}}export{Ge as default};
