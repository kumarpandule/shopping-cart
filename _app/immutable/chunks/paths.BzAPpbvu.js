import{n as l,a as m,r as q,s as k,i as v}from"./scheduler.bP4N0Hkb.js";const u=[];function x(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(k(e,t)&&(e=t,r)){const i=!u.length;for(const s of n)s[1](),u.push(s,e);if(i){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function E(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return x(r,(f,t)=>{let i=!1;const s=[];let p=0,d=l;const g=()=>{if(p)return;d();const c=o(n?s[0]:s,f,t);b?f(c):d=v(c)?c:l},w=a.map((c,_)=>m(c,z=>{s[_]=z,p&=~(1<<_),i&&g()},()=>{p|=1<<_}));return i=!0,g(),function(){q(w),d(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_pb3zcn)==null?void 0:h.base)??"/shopping-cart";var y;const S=((y=globalThis.__sveltekit_pb3zcn)==null?void 0:y.assets)??T;export{S as a,T as b,E as d,A as w};
