function y(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(P)}function j(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ot(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function W(t){return Object.keys(t).length===0}function q(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t){let e;return q(t,n=>e=n)(),e}function at(t,e,n){t.$$.on_destroy.push(q(e,n))}function ft(t,e,n,r){if(t){const i=B(t,e,n,r);return t[0](i)}}function B(t,e,n,r){return t[1]&&r?R(n.ctx.slice(),t[1](r(e))):n.ctx}function _t(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|i[l];return o}return e.dirty|i}return e.dirty}function dt(t,e,n,r,i,o){if(i){const c=B(e,n,r,o);t.p(c,i)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function pt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function yt(t,e,n){return t.set(n),e}function gt(t){return t&&j(t.destroy)?t.destroy:y}let w=!1;function G(){w=!0}function I(){w=!1}function J(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:J(1,i,$=>e[n[$]].claim_order,u))-1;r[s]=n[f]+1;const a=f+1;n[a]=s,i=Math.max(a,i)}const o=[],c=[];let l=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(c[s],f)}}function Q(t,e){if(w){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function xt(t,e,n){w&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function bt(){return k(" ")}function vt(){return k("")}function Et(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,r,i=!1){Y(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,e,n,r){return H(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const l=i.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function Nt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return H(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>k(e),!0)}function At(t){return tt(t," ")}function Ct(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function St(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function jt(t,e,n){t.classList[n?"add":"remove"](e)}function et(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function kt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Tt(t,e){return new t(e)}let g;function p(t){g=t}function m(){if(!g)throw new Error("Function called outside component initialization");return g}function Dt(t){m().$$.on_mount.push(t)}function Mt(t){m().$$.after_update.push(t)}function Lt(t){m().$$.on_destroy.push(t)}function Pt(){const t=m();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=et(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function qt(t,e){return m().$$.context.set(t,e),e}function Bt(t){return m().$$.context.get(t)}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const h=[],L=[],v=[],A=[],O=Promise.resolve();let C=!1;function z(){C||(C=!0,O.then(F))}function Ot(){return z(),O}function S(t){v.push(t)}function zt(t){A.push(t)}const N=new Set;let d=0;function F(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,p(e),nt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;L.length;)L.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];N.has(n)||(N.add(n),n())}v.length=0}while(h.length);for(;A.length;)A.pop()();C=!1,N.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const E=new Set;let _;function Ft(){_={r:0,c:[],p:_}}function Rt(){_.r||x(_.c),_=_.p}function rt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Wt(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Gt(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function It(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function it(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||S(()=>{const c=t.$$.on_mount.map(P).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(S)}function ct(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,r,i,o,c,l=[-1]){const s=g;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};c&&c(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,$,...T)=>{const D=T.length?T[0]:$;return u.ctx&&i(u.ctx[a],u.ctx[a]=D)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](D),f&&st(t,a)),$}):[],u.update(),f=!0,x(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){G();const a=X(e.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&rt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),I(),F()}p(s)}class Qt{$destroy(){ct(this,1),this.$destroy=y}$on(e,n){if(!j(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{pt as $,it as A,ct as B,ft as C,dt as D,ht as E,_t as F,Q as G,y as H,at as I,kt as J,$t as K,ot as L,Bt as M,qt as N,jt as O,lt as P,Lt as Q,gt as R,Qt as S,Et as T,x as U,yt as V,Pt as W,Gt as X,zt as Y,Ht as Z,m as _,bt as a,R as a0,mt as a1,q as a2,j as a3,xt as b,At as c,Wt as d,vt as e,Rt as f,rt as g,U as h,Kt as i,Mt as j,V as k,Nt as l,X as m,wt as n,Dt as o,St as p,k as q,tt as r,ut as s,Ot as t,Ct as u,Ft as v,L as w,Tt as x,It as y,Jt as z};
