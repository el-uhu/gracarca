import{S as K,i as j,s as D,k as p,J as oe,l as _,h as d,n as s,G as h,H as O,K as le,b as N,y as F,a as I,z as C,c as S,m as T,A as x,g as B,d as P,B as q,q as z,r as J,L as ce,M as ee,N as te}from"../chunks/index.39954609.js";import{G as ie,d as M,H as ue}from"../chunks/Footer.svelte_svelte_type_style_lang.f84417d6.js";import{b as R}from"../chunks/paths.a90841ec.js";function ne(o,e,r){const t=o.slice();return t[6]=e[r],t}function re(o){let e,r;return{c(){e=p("link"),this.h()},l(t){e=_(t,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){s(e,"rel","preload"),s(e,"href",r=o[6]),s(e,"as","font"),s(e,"type","font/woff2"),s(e,"crossorigin","")},m(t,a){N(t,e,a)},p(t,a){a&32&&r!==(r=t[6])&&s(e,"href",r)},d(t){t&&d(e)}}}function fe(o){let e,r,t,a,n,f,i,l,c,k,$,E,G,A;document.title=e=o[0];let y=o[5],v=[];for(let g=0;g<y.length;g+=1)v[g]=re(ne(o,y,g));return{c(){r=p("meta"),t=p("meta"),a=p("meta"),n=p("meta"),f=p("meta"),i=p("meta"),l=p("meta"),c=p("meta"),k=p("meta"),$=p("meta"),E=p("link");for(let g=0;g<v.length;g+=1)v[g].c();A=p("base"),this.h()},l(g){const u=oe("svelte-alavqd",document.head);r=_(u,"META",{name:!0,content:!0}),t=_(u,"META",{name:!0,content:!0}),a=_(u,"META",{name:!0,content:!0}),n=_(u,"META",{property:!0,content:!0}),f=_(u,"META",{property:!0,content:!0}),i=_(u,"META",{property:!0,content:!0}),l=_(u,"META",{property:!0,content:!0}),c=_(u,"META",{property:!0,content:!0}),k=_(u,"META",{property:!0,content:!0}),$=_(u,"META",{name:!0,content:!0}),E=_(u,"LINK",{rel:!0,href:!0});for(let m=0;m<v.length;m+=1)v[m].l(u);A=_(u,"BASE",{href:!0,target:!0}),u.forEach(d),this.h()},h(){s(r,"name","description"),s(r,"content",o[1]),s(t,"name","author"),s(t,"content","Biotop Wissenschaftskollektiv"),s(a,"name","news_keywords"),s(a,"content",o[3]),s(n,"property","og:title"),s(n,"content",o[0]),s(f,"property","og:site_name"),s(f,"content","Gracarca"),s(i,"property","og:url"),s(i,"content",o[2]),s(l,"property","og:description"),s(l,"content",o[1]),s(c,"property","og:type"),s(c,"content","article"),s(k,"property","og:locale"),s(k,"content",o[4]),s($,"name","robots"),s($,"content","max-image-preview:large"),s(E,"rel","canonical"),s(E,"href",G=o[2]+"/"),s(A,"href",R),s(A,"target","_blank")},m(g,u){h(document.head,r),h(document.head,t),h(document.head,a),h(document.head,n),h(document.head,f),h(document.head,i),h(document.head,l),h(document.head,c),h(document.head,k),h(document.head,$),h(document.head,E);for(let m=0;m<v.length;m+=1)v[m].m(document.head,null);h(document.head,A)},p(g,[u]){if(u&1&&e!==(e=g[0])&&(document.title=e),u&2&&s(r,"content",g[1]),u&8&&s(a,"content",g[3]),u&1&&s(n,"content",g[0]),u&4&&s(i,"content",g[2]),u&2&&s(l,"content",g[1]),u&16&&s(k,"content",g[4]),u&4&&G!==(G=g[2]+"/")&&s(E,"href",G),u&32){y=g[5];let m;for(m=0;m<y.length;m+=1){const w=ne(g,y,m);v[m]?v[m].p(w,u):(v[m]=re(w),v[m].c(),v[m].m(A.parentNode,A))}for(;m<v.length;m+=1)v[m].d(1);v.length=y.length}},i:O,o:O,d(g){d(r),d(t),d(a),d(n),d(f),d(i),d(l),d(c),d(k),d($),d(E),le(v,g),d(A)}}}function me(o,e,r){let{title:t="Gracarca"}=e,{description:a=""}=e,{url:n=R}=e,{keywords:f=""}=e,{lang:i=""}=e,{preloadFont:l=[]}=e;return o.$$set=c=>{"title"in c&&r(0,t=c.title),"description"in c&&r(1,a=c.description),"url"in c&&r(2,n=c.url),"keywords"in c&&r(3,f=c.keywords),"lang"in c&&r(4,i=c.lang),"preloadFont"in c&&r(5,l=c.preloadFont)},[t,a,n,f,i,l]}class de extends K{constructor(e){super(),j(this,e,me,fe,D,{title:0,description:1,url:2,keywords:3,lang:4,preloadFont:5})}}function he(o){let e,r,t,a,n,f;return e=new ie({props:{cameraSettings:o[1].base}}),n=new o[0]({}),{c(){F(e.$$.fragment),r=I(),t=p("div"),a=p("section"),F(n.$$.fragment),this.h()},l(i){C(e.$$.fragment,i),r=S(i),t=_(i,"DIV",{id:!0,class:!0});var l=T(t);a=_(l,"SECTION",{class:!0});var c=T(a);C(n.$$.fragment,c),c.forEach(d),l.forEach(d),this.h()},h(){s(a,"class","content-section"),s(t,"id","gracarca"),s(t,"class","svelte-1mrw5qh")},m(i,l){x(e,i,l),N(i,r,l),N(i,t,l),h(t,a),x(n,a,null),f=!0},p:O,i(i){f||(B(e.$$.fragment,i),B(n.$$.fragment,i),f=!0)},o(i){P(e.$$.fragment,i),P(n.$$.fragment,i),f=!1},d(i){q(e,i),i&&d(r),i&&d(t),q(n)}}}function ge(o,e,r){let{Texts:t}=e,a={base:{pos:[-113.6,1500,-37.7],rot:[M(-90),M(0),M(0)],orbitcontrols:!0},Gräberfeld:{pos:[-238,755,694],rot:[M(-51.61),M(.1),M(.12)],orbitcontrols:!1},Test:{pos:[-288,879,-493],rot:[M(-155),M(.3),M(180)],orbitcontrols:!1}};return o.$$set=n=>{"Texts"in n&&r(0,t=n.Texts)},[t,a]}class pe extends K{constructor(e){super(),j(this,e,ge,he,D,{Texts:0})}}function ae(o,e,r){const t=o.slice();return t[1]=e[r],t}function se(o){let e,r,t,a,n=o[1].name.toUpperCase()+"",f,i;return{c(){e=p("li"),r=p("a"),t=p("span"),a=p("b"),f=z(n),i=I(),this.h()},l(l){e=_(l,"LI",{class:!0});var c=T(e);r=_(c,"A",{href:!0,class:!0});var k=T(r);t=_(k,"SPAN",{class:!0});var $=T(t);a=_($,"B",{});var E=T(a);f=J(E,n),E.forEach(d),$.forEach(d),k.forEach(d),i=S(c),c.forEach(d),this.h()},h(){s(t,"class","svelte-16kinrb"),s(r,"href",o[1].url),s(r,"class","svelte-16kinrb"),s(e,"class","svelte-16kinrb")},m(l,c){N(l,e,c),h(e,r),h(r,t),h(t,a),h(a,f),h(e,i)},p:O,d(l){l&&d(e)}}}function _e(o){let e,r,t,a,n,f,i,l,c,k,$,E,G,A,y,v,g=o[0],u=[];for(let m=0;m<g.length;m+=1)u[m]=se(ae(o,g,m));return{c(){e=p("footer"),r=p("section"),t=p("div"),a=p("a"),n=p("p"),f=p("span"),i=z("Grabelsdorf"),l=I(),c=p("img"),$=I(),E=p("span"),G=z("Grabalja vas"),A=I(),y=p("section"),v=p("ul");for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){e=_(m,"FOOTER",{class:!0});var w=T(e);r=_(w,"SECTION",{class:!0});var b=T(r);t=_(b,"DIV",{class:!0});var H=T(t);a=_(H,"A",{href:!0,"aria-label":!0,class:!0});var W=T(a);n=_(W,"P",{});var L=T(n);f=_(L,"SPAN",{class:!0});var Q=T(f);i=J(Q,"Grabelsdorf"),Q.forEach(d),l=S(L),c=_(L,"IMG",{src:!0,alt:!0,class:!0,display:!0}),$=S(L),E=_(L,"SPAN",{class:!0});var X=T(E);G=J(X,"Grabalja vas"),X.forEach(d),L.forEach(d),W.forEach(d),H.forEach(d),b.forEach(d),A=S(w),y=_(w,"SECTION",{class:!0});var Y=T(y);v=_(Y,"UL",{class:!0});var Z=T(v);for(let U=0;U<u.length;U+=1)u[U].l(Z);Z.forEach(d),Y.forEach(d),w.forEach(d),this.h()},h(){s(f,"class","header-text1"),ce(c.src,k=R+"/img/gracarca-logo.png")||s(c,"src",k),s(c,"alt","gracarca logo"),s(c,"class","header-logo"),s(c,"display","inline"),s(E,"class","header-text2"),s(a,"href",R),s(a,"aria-label","The Pudding"),s(a,"class","svelte-16kinrb"),s(t,"class","header-mark"),s(r,"class","about svelte-16kinrb"),s(v,"class","svelte-16kinrb"),s(y,"class","links svelte-16kinrb"),s(e,"class","svelte-16kinrb")},m(m,w){N(m,e,w),h(e,r),h(r,t),h(t,a),h(a,n),h(n,f),h(f,i),h(n,l),h(n,c),h(n,$),h(n,E),h(E,G),h(e,A),h(e,y),h(y,v);for(let b=0;b<u.length;b+=1)u[b].m(v,null)},p(m,[w]){if(w&1){g=m[0];let b;for(b=0;b<g.length;b+=1){const H=ae(m,g,b);u[b]?u[b].p(H,w):(u[b]=se(H),u[b].c(),u[b].m(v,null))}for(;b<u.length;b+=1)u[b].d(1);u.length=g.length}},i:O,o:O,d(m){m&&d(e),le(u,m)}}}function ve(o){return[[{name:"Biotop*",url:"https://biotop.co"}]]}class be extends K{constructor(e){super(),j(this,e,ve,_e,D,{})}}function ke(o){let e,r,t,a;return e=new pe({props:{Texts:o[0]}}),t=new be({}),{c(){F(e.$$.fragment),r=I(),F(t.$$.fragment)},l(n){C(e.$$.fragment,n),r=S(n),C(t.$$.fragment,n)},m(n,f){x(e,n,f),N(n,r,f),x(t,n,f),a=!0},p(n,[f]){const i={};f&1&&(i.Texts=n[0]),e.$set(i)},i(n){a||(B(e.$$.fragment,n),B(t.$$.fragment,n),a=!0)},o(n){P(e.$$.fragment,n),P(t.$$.fragment,n),a=!1},d(n){q(e,n),n&&d(r),q(t,n)}}}function Ee(o,e,r){let{Texts:t}=e;return ee("copy"),ee("data"),o.$$set=a=>{"Texts"in a&&r(0,t=a.Texts)},[t]}class $e extends K{constructor(e){super(),j(this,e,Ee,ke,D,{Texts:0})}}const Te="Gracarca",ye="",V={title:Te,description:ye};function Ae(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 5.6.1"),console.log("build: 2023-10-06-11:21"),console.log("--- --- --- --- --- ---")}function we(o){let e,r,t,a,n,f,i;return e=new ue({props:{lang:o[2]}}),a=new de({props:{title:o[4],description:o[5],url:o[6],preloadFont:o[3],keywords:o[7],lang:o[1].lang}}),f=new $e({props:{Texts:o[0].content}}),{c(){F(e.$$.fragment),r=I(),t=p("main"),F(a.$$.fragment),n=I(),F(f.$$.fragment),this.h()},l(l){C(e.$$.fragment,l),r=S(l),t=_(l,"MAIN",{id:!0});var c=T(t);C(a.$$.fragment,c),n=S(c),C(f.$$.fragment,c),c.forEach(d),this.h()},h(){s(t,"id","content")},m(l,c){x(e,l,c),N(l,r,c),N(l,t,c),x(a,t,null),h(t,n),x(f,t,null),i=!0},p(l,[c]){const k={};c&1&&(k.Texts=l[0].content),f.$set(k)},i(l){i||(B(e.$$.fragment,l),B(a.$$.fragment,l),B(f.$$.fragment,l),i=!0)},o(l){P(e.$$.fragment,l),P(a.$$.fragment,l),P(f.$$.fragment,l),i=!1},d(l){q(e,l),l&&d(r),l&&d(t),q(a),q(f)}}}function Me(o,e,r){let t={si:"sl_SI",de:"de_AT",en:"en_GB"},{data:a}=e,n=a.meta.lang;console.log(n),Ae();const f=[],{title:i,description:l,url:c,keywords:k}=V;return console.log(V),te("copy",V),te("data",a.data),o.$$set=$=>{"data"in $&&r(0,a=$.data)},[a,t,n,f,i,l,c,k]}class Ne extends K{constructor(e){super(),j(this,e,Me,we,D,{data:0})}}export{Ne as default};
