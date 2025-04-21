(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function dc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},Yr=[],ln=()=>{},gy=()=>!1,aa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fc=t=>t.startsWith("onUpdate:"),vt=Object.assign,pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_y=Object.prototype.hasOwnProperty,ke=(t,e)=>_y.call(t,e),ae=Array.isArray,Xr=t=>ki(t)==="[object Map]",Ts=t=>ki(t)==="[object Set]",Eh=t=>ki(t)==="[object Date]",fe=t=>typeof t=="function",Je=t=>typeof t=="string",fn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",zf=t=>(Le(t)||fe(t))&&fe(t.then)&&fe(t.catch),Kf=Object.prototype.toString,ki=t=>Kf.call(t),yy=t=>ki(t).slice(8,-1),Gf=t=>ki(t)==="[object Object]",mc=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vy=/-(\w)/g,Wt=la(t=>t.replace(vy,(e,n)=>n?n.toUpperCase():"")),Ey=/\B([A-Z])/g,Or=la(t=>t.replace(Ey,"-$1").toLowerCase()),ca=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),tl=la(t=>t?`on${ca(t)}`:""),Yn=(t,e)=>!Object.is(t,e),yo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},No=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Th;const ua=()=>Th||(Th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?Ay(r):gc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Le(t))return t}const Ty=/;(?![^(]*\))/g,wy=/:([^]+)/,Iy=/\/\*[^]*?\*\//g;function Ay(t){const e={};return t.replace(Iy,"").split(Ty).forEach(n=>{if(n){const r=n.split(wy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ha(t){let e="";if(Je(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=ha(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const by="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ry=dc(by);function Jf(t){return!!t||t===""}function Sy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Di(t[r],e[r]);return n}function Di(t,e){if(t===e)return!0;let n=Eh(t),r=Eh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?Sy(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Di(t[o],e[o]))return!1}}return String(t)===String(e)}function _c(t,e){return t.findIndex(n=>Di(n,e))}const Yf=t=>!!(t&&t.__v_isRef===!0),Ee=t=>Je(t)?t:t==null?"":ae(t)||Le(t)&&(t.toString===Kf||!fe(t.toString))?Yf(t)?Ee(t.value):JSON.stringify(t,Xf,2):String(t),Xf=(t,e)=>Yf(e)?Xf(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nl(r,i)+" =>"]=s,n),{})}:Ts(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nl(n))}:fn(e)?nl(e):Le(e)&&!ae(e)&&!Gf(e)?String(e):e,nl=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Py{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Cy(){return Ot}let Me;const rl=new WeakSet;class Zf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rl.has(this)&&(rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wh(this),np(this);const e=Me,n=Yt;Me=this,Yt=!0;try{return this.fn()}finally{rp(this),Me=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,wh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let ep=0,ti,ni;function tp(t,e=!1){if(t.flags|=8,e){t.next=ni,ni=t;return}t.next=ti,ti=t}function yc(){ep++}function vc(){if(--ep>0)return;if(ni){let e=ni;for(ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ti;){let e=ti;for(ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function np(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ec(r),ky(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function sp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===fi))return;t.globalVersion=fi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!bl(t)){t.flags&=-3;return}const n=Me,r=Yt;Me=t,Yt=!0;try{np(t);const s=t.fn(t._value);(e.version===0||Yn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Yt=r,rp(t),t.flags&=-3}}function Ec(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ec(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ky(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const ip=[];function cr(){ip.push(Yt),Yt=!1}function ur(){const t=ip.pop();Yt=t===void 0?!0:t}function wh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let fi=0;class Dy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!Yt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Dy(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,op(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,fi++,this.notify(e)}notify(e){yc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vc()}}}function op(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)op(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Rl=new WeakMap,Ar=Symbol(""),Sl=Symbol(""),pi=Symbol("");function ft(t,e,n){if(Yt&&Me){let r=Rl.get(t);r||Rl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Tc),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const o=Rl.get(t);if(!o){fi++;return}const l=c=>{c&&c.trigger()};if(yc(),e==="clear")o.forEach(l);else{const c=ae(t),h=c&&mc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===pi||!fn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(pi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Ar)),Xr(t)&&l(o.get(Sl)));break;case"delete":c||(l(o.get(Ar)),Xr(t)&&l(o.get(Sl)));break;case"set":Xr(t)&&l(o.get(Ar));break}}vc()}function Hr(t){const e=Ce(t);return e===t?e:(ft(e,"iterate",pi),Ht(t)?e:e.map(pt))}function da(t){return ft(t=Ce(t),"iterate",pi),t}const Vy={__proto__:null,[Symbol.iterator](){return sl(this,Symbol.iterator,pt)},concat(...t){return Hr(this).concat(...t.map(e=>ae(e)?Hr(e):e))},entries(){return sl(this,"entries",t=>(t[1]=pt(t[1]),t))},every(t,e){return yn(this,"every",t,e,void 0,arguments)},filter(t,e){return yn(this,"filter",t,e,n=>n.map(pt),arguments)},find(t,e){return yn(this,"find",t,e,pt,arguments)},findIndex(t,e){return yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return yn(this,"findLast",t,e,pt,arguments)},findLastIndex(t,e){return yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return il(this,"includes",t)},indexOf(...t){return il(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return il(this,"lastIndexOf",t)},map(t,e){return yn(this,"map",t,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...t){return Hs(this,"push",t)},reduce(t,...e){return Ih(this,"reduce",t,e)},reduceRight(t,...e){return Ih(this,"reduceRight",t,e)},shift(){return Hs(this,"shift")},some(t,e){return yn(this,"some",t,e,void 0,arguments)},splice(...t){return Hs(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return Hs(this,"unshift",t)},values(){return sl(this,"values",pt)}};function sl(t,e,n){const r=da(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ny=Array.prototype;function yn(t,e,n,r,s,i){const o=da(t),l=o!==t&&!Ht(t),c=o[e];if(c!==Ny[e]){const p=c.apply(t,i);return l?pt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,pt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Ih(t,e,n,r){const s=da(t);let i=n;return s!==t&&(Ht(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,pt(l),c,t)}),s[e](i,...r)}function il(t,e,n){const r=Ce(t);ft(r,"iterate",pi);const s=r[e](...n);return(s===-1||s===!1)&&Ac(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Hs(t,e,n=[]){cr(),yc();const r=Ce(t)[e].apply(t,n);return vc(),ur(),r}const Oy=dc("__proto__,__v_isRef,__isVue"),ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function xy(t){fn(t)||(t=String(t));const e=Ce(this);return ft(e,"has",t),e.hasOwnProperty(t)}class lp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Wy:dp:i?hp:up).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let c;if(o&&(c=Vy[n]))return c;if(n==="hasOwnProperty")return xy}const l=Reflect.get(e,n,yt(e)?e:r);return(fn(n)?ap.has(n):Oy(n))||(s||ft(e,"get",n),i)?l:yt(l)?o&&mc(n)?l:l.value:Le(l)?s?pp(l):fa(l):l}}class cp extends lp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=br(i);if(!Ht(r)&&!br(r)&&(i=Ce(i),r=Ce(r)),!ae(e)&&yt(i)&&!yt(r))return c?!1:(i.value=r,!0)}const o=ae(e)&&mc(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,yt(e)?e:s);return e===Ce(s)&&(o?Yn(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!ap.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",ae(e)?"length":Ar),Reflect.ownKeys(e)}}class My extends lp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ly=new cp,Uy=new My,Fy=new cp(!0);const Pl=t=>t,lo=t=>Reflect.getPrototypeOf(t);function By(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=Xr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Pl:e?Cl:pt;return!e&&ft(i,"iterate",c?Sl:Ar),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function co(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jy(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);t||(Yn(s,l)&&ft(o,"get",s),ft(o,"get",l));const{has:c}=lo(o),h=e?Pl:t?Cl:pt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(Ce(s),"iterate",Ar),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);return t||(Yn(s,l)&&ft(o,"has",s),ft(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ce(l),h=e?Pl:t?Cl:pt;return!t&&ft(c,"iterate",Ar),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return vt(n,t?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){!e&&!Ht(s)&&!br(s)&&(s=Ce(s));const i=Ce(this);return lo(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!Ht(i)&&!br(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=lo(o);let h=l.call(o,s);h||(s=Ce(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?Yn(i,d)&&Tn(o,"set",s,i):Tn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:l}=lo(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Tn(i,"delete",s,void 0),h},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Tn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=By(s,t,e)}),n}function wc(t,e){const n=jy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const $y={get:wc(!1,!1)},qy={get:wc(!1,!0)},Hy={get:wc(!0,!1)};const up=new WeakMap,hp=new WeakMap,dp=new WeakMap,Wy=new WeakMap;function zy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ky(t){return t.__v_skip||!Object.isExtensible(t)?0:zy(yy(t))}function fa(t){return br(t)?t:Ic(t,!1,Ly,$y,up)}function fp(t){return Ic(t,!1,Fy,qy,hp)}function pp(t){return Ic(t,!0,Uy,Hy,dp)}function Ic(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ky(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Zr(t){return br(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function Ac(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Gy(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Qf(t,"__v_skip",!0),t}const pt=t=>Le(t)?fa(t):t,Cl=t=>Le(t)?pp(t):t;function yt(t){return t?t.__v_isRef===!0:!1}function Se(t){return mp(t,!1)}function Qy(t){return mp(t,!0)}function mp(t,e){return yt(t)?t:new Jy(t,e)}class Jy{constructor(e,n){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||br(e);e=r?e:Ce(e),Yn(e,n)&&(this._rawValue=e,this._value=r?e:pt(e),this.dep.trigger())}}function es(t){return yt(t)?t.value:t}const Yy={get:(t,e,n)=>e==="__v_raw"?t:es(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gp(t){return Zr(t)?t:new Proxy(t,Yy)}class Xy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return tp(this,!0),!0}get value(){const e=this.dep.track();return sp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Xy(r,s,n)}const uo={},Oo=new WeakMap;let Er;function ev(t,e=!1,n=Er){if(n){let r=Oo.get(n);r||Oo.set(n,r=[]),r.push(t)}}function tv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=K=>s?K:Ht(K)||s===!1||s===0?wn(K,1):wn(K);let d,p,g,_,k=!1,V=!1;if(yt(t)?(p=()=>t.value,k=Ht(t)):Zr(t)?(p=()=>h(t),k=!0):ae(t)?(V=!0,k=t.some(K=>Zr(K)||Ht(K)),p=()=>t.map(K=>{if(yt(K))return K.value;if(Zr(K))return h(K);if(fe(K))return c?c(K,2):K()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){cr();try{g()}finally{ur()}}const K=Er;Er=d;try{return c?c(t,3,[_]):t(_)}finally{Er=K}}:p=ln,e&&s){const K=p,me=s===!0?1/0:s;p=()=>wn(K(),me)}const x=Cy(),H=()=>{d.stop(),x&&x.active&&pc(x.effects,d)};if(i&&e){const K=e;e=(...me)=>{K(...me),H()}}let j=V?new Array(t.length).fill(uo):uo;const q=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(e){const me=d.run();if(s||k||(V?me.some((ge,I)=>Yn(ge,j[I])):Yn(me,j))){g&&g();const ge=Er;Er=d;try{const I=[me,j===uo?void 0:V&&j[0]===uo?[]:j,_];c?c(e,3,I):e(...I),j=me}finally{Er=ge}}}else d.run()};return l&&l(q),d=new Zf(p),d.scheduler=o?()=>o(q,!1):q,_=K=>ev(K,!1,d),g=d.onStop=()=>{const K=Oo.get(d);if(K){if(c)c(K,4);else for(const me of K)me();Oo.delete(d)}},e?r?q(!0):j=d.run():o?o(q.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function wn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))wn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)wn(t[r],e,n);else if(Ts(t)||Xr(t))t.forEach(r=>{wn(r,e,n)});else if(Gf(t)){for(const r in t)wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&wn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vi(t,e,n,r){try{return r?t(...r):t()}catch(s){pa(s,e,n)}}function pn(t,e,n,r){if(fe(t)){const s=Vi(t,e,n,r);return s&&zf(s)&&s.catch(i=>{pa(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function pa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){cr(),Vi(i,null,10,[t,c,h]),ur();return}}nv(t,n,s,r,o)}function nv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let sn=-1;const ts=[];let qn=null,Wr=0;const _p=Promise.resolve();let xo=null;function bc(t){const e=xo||_p;return t?e.then(this?t.bind(this):t):e}function rv(t){let e=sn+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Rc(t){if(!(t.flags&1)){const e=mi(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=mi(n)?At.push(t):At.splice(rv(e),0,t),t.flags|=1,yp()}}function yp(){xo||(xo=_p.then(Ep))}function sv(t){ae(t)?ts.push(...t):qn&&t.id===-1?qn.splice(Wr+1,0,t):t.flags&1||(ts.push(t),t.flags|=1),yp()}function Ah(t,e,n=sn+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vp(t){if(ts.length){const e=[...new Set(ts)].sort((n,r)=>mi(n)-mi(r));if(ts.length=0,qn){qn.push(...e);return}for(qn=e,Wr=0;Wr<qn.length;Wr++){const n=qn[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qn=null,Wr=0}}const mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ep(t){try{for(sn=0;sn<At.length;sn++){const e=At[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<At.length;sn++){const e=At[sn];e&&(e.flags&=-2)}sn=-1,At.length=0,vp(),xo=null,(At.length||ts.length)&&Ep()}}let Mt=null,Tp=null;function Mo(t){const e=Mt;return Mt=t,Tp=t&&t.type.__scopeId||null,e}function xr(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oh(-1);const i=Mo(e);let o;try{o=t(...s)}finally{Mo(i),r._d&&Oh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Be(t,e){if(Mt===null)return t;const n=ya(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function yr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(cr(),pn(c,n,8,[t.el,l,t,e]),ur())}}const iv=Symbol("_vte"),ov=t=>t.__isTeleport;function Sc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Sc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Pc(t,e){return fe(t)?vt({name:t.name},e,{setup:t}):t}function wp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Lo(t,e,n,r,s=!1){if(ae(t)){t.forEach((k,V)=>Lo(k,e&&(ae(e)?e[V]:e),n,r,s));return}if(ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Lo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ya(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,g=Ce(p),_=p===xe?()=>!1:k=>ke(g,k);if(h!=null&&h!==c&&(Je(h)?(d[h]=null,_(h)&&(p[h]=null)):yt(h)&&(h.value=null)),fe(c))Vi(c,l,12,[o,d]);else{const k=Je(c),V=yt(c);if(k||V){const x=()=>{if(t.f){const H=k?_(c)?p[c]:d[c]:c.value;s?ae(H)&&pc(H,i):ae(H)?H.includes(i)||H.push(i):k?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=o,_(c)&&(p[c]=o)):V&&(c.value=o,t.k&&(d[t.k]=o))};o?(x.id=-1,Nt(x,n)):x()}}}ua().requestIdleCallback;ua().cancelIdleCallback;const ri=t=>!!t.type.__asyncLoader,Ip=t=>t.type.__isKeepAlive;function av(t,e){Ap(t,"a",e)}function lv(t,e){Ap(t,"da",e)}function Ap(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ip(s.parent.vnode)&&cv(r,e,n,s),s=s.parent}}function cv(t,e,n,r){const s=ma(e,t,r,!0);bp(()=>{pc(r[e],s)},n)}function ma(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{cr();const l=Ni(n),c=pn(e,n,t,o);return l(),ur(),c});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=_t)=>{(!_i||t==="sp")&&ma(t,(...r)=>e(...r),n)},uv=On("bm"),ws=On("m"),hv=On("bu"),dv=On("u"),fv=On("bum"),bp=On("um"),pv=On("sp"),mv=On("rtg"),gv=On("rtc");function _v(t,e=_t){ma("ec",t,e)}const yv="components";function Ye(t,e){return Ev(yv,t,!0,e)||t}const vv=Symbol.for("v-ndc");function Ev(t,e,n=!0,r=!1){const s=Mt||_t;if(s){const i=s.type;{const l=oE(i,!1);if(l&&(l===e||l===Wt(e)||l===ca(Wt(e))))return i}const o=bh(s[t]||i[t],e)||bh(s.appContext[t],e);return!o&&r?i:o}}function bh(t,e){return t&&(t[e]||t[Wt(e)]||t[ca(Wt(e))])}function Rr(t,e,n,r){let s;const i=n,o=ae(t);if(o||Je(t)){const l=o&&Zr(t);let c=!1;l&&(c=!Ht(t),t=da(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?pt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const kl=t=>t?zp(t)?ya(t):kl(t.parent):null,si=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kl(t.parent),$root:t=>kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sp(t),$forceUpdate:t=>t.f||(t.f=()=>{Rc(t.update)}),$nextTick:t=>t.n||(t.n=bc.bind(t.proxy)),$watch:t=>jv.bind(t)}),ol=(t,e)=>t!==xe&&!t.__isScriptSetup&&ke(t,e),Tv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ol(r,e))return o[e]=1,r[e];if(s!==xe&&ke(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&ke(h,e))return o[e]=3,i[e];if(n!==xe&&ke(n,e))return o[e]=4,n[e];Dl&&(o[e]=0)}}const d=si[e];let p,g;if(d)return e==="$attrs"&&ft(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&ke(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,ke(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ol(s,e)?(s[e]=n,!0):r!==xe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==xe&&ke(t,o)||ol(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(si,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rh(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Dl=!0;function wv(t){const e=Sp(t),n=t.proxy,r=t.ctx;Dl=!1,e.beforeCreate&&Sh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:k,activated:V,deactivated:x,beforeDestroy:H,beforeUnmount:j,destroyed:q,unmounted:K,render:me,renderTracked:ge,renderTriggered:I,errorCaptured:y,serverPrefetch:w,expose:b,inheritAttrs:R,components:P,directives:T,filters:Tt}=e;if(h&&Iv(h,r,null),o)for(const we in o){const ye=o[we];fe(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);Le(we)&&(t.data=fa(we))}if(Dl=!0,i)for(const we in i){const ye=i[we],Dt=fe(ye)?ye.bind(n,n):fe(ye.get)?ye.get.bind(n,n):ln,Kt=!fe(ye)&&fe(ye.set)?ye.set.bind(n):ln,Ft=$t({get:Dt,set:Kt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:je=>Ft.value=je})}if(l)for(const we in l)Rp(l[we],r,n,we);if(c){const we=fe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ye=>{vo(ye,we[ye])})}d&&Sh(d,t,"c");function Ke(we,ye){ae(ye)?ye.forEach(Dt=>we(Dt.bind(n))):ye&&we(ye.bind(n))}if(Ke(uv,p),Ke(ws,g),Ke(hv,_),Ke(dv,k),Ke(av,V),Ke(lv,x),Ke(_v,y),Ke(gv,ge),Ke(mv,I),Ke(fv,j),Ke(bp,K),Ke(pv,w),ae(b))if(b.length){const we=t.exposed||(t.exposed={});b.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:Dt=>n[ye]=Dt})})}else t.exposed||(t.exposed={});me&&t.render===ln&&(t.render=me),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),T&&(t.directives=T),w&&wp(t)}function Iv(t,e,n=ln){ae(t)&&(t=Vl(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=cn(s.from||r,s.default,!0):i=cn(s.from||r):i=cn(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Sh(t,e,n){pn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,r){let s=r.includes(".")?jp(n,r):()=>n[r];if(Je(t)){const i=e[t];fe(i)&&Eo(s,i)}else if(fe(t))Eo(s,t.bind(n));else if(Le(t))if(ae(t))t.forEach(i=>Rp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Eo(s,i,t)}}function Sp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Uo(c,h,o,!0)),Uo(c,e,o)),Le(e)&&i.set(e,c),c}function Uo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Uo(t,i,n,!0),s&&s.forEach(o=>Uo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Av[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Av={data:Ph,props:Ch,emits:Ch,methods:Ks,computed:Ks,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Ks,directives:Ks,watch:Rv,provide:Ph,inject:bv};function Ph(t,e){return e?t?function(){return vt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function bv(t,e){return Ks(Vl(t),Vl(e))}function Vl(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Ks(t,e){return t?vt(Object.create(null),t,e):e}function Ch(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:vt(Object.create(null),Rh(t),Rh(e??{})):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function Pp(){return{app:null,config:{isNativeTag:gy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sv=0;function Pv(t,e){return function(r,s=null){fe(r)||(r=vt({},r)),s!=null&&!Le(s)&&(s=null);const i=Pp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Sv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(h,...p)):fe(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const _=h._ceVNode||De(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,d,g),c=!0,h._container=d,d.__vue_app__=h,ya(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(pn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ns;ns=h;try{return d()}finally{ns=p}}};return h}}let ns=null;function vo(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=_t||Mt;if(r||ns){const s=ns?ns._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const Cp={},kp=()=>Object.create(Cp),Dp=t=>Object.getPrototypeOf(t)===Cp;function Cv(t,e,n,r=!1){const s={},i=kp();t.propsDefaults=Object.create(null),Vp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:fp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ga(t.emitsOptions,g))continue;const _=e[g];if(c)if(ke(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const k=Wt(g);s[k]=Nl(c,l,k,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Vp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!ke(e,p)&&((d=Or(p))===p||!ke(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Nl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],h=!0)}h&&Tn(t.attrs,"set","")}function Vp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ei(c))continue;const h=e[c];let d;s&&ke(s,d=Wt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ga(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ce(n),h=l||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Nl(s,c,p,h[p],t,!ke(h,p))}}return o}function Nl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ni(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const Dv=new WeakMap;function Np(t,e,n=!1){const r=n?Dv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const d=p=>{c=!0;const[g,_]=Np(p,e,!0);vt(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Le(t)&&r.set(t,Yr),Yr;if(ae(i))for(let d=0;d<i.length;d++){const p=Wt(i[d]);kh(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=Wt(d);if(kh(p)){const g=i[d],_=o[p]=ae(g)||fe(g)?{type:g}:vt({},g),k=_.type;let V=!1,x=!0;if(ae(k))for(let H=0;H<k.length;++H){const j=k[H],q=fe(j)&&j.name;if(q==="Boolean"){V=!0;break}else q==="String"&&(x=!1)}else V=fe(k)&&k.name==="Boolean";_[0]=V,_[1]=x,(V||ke(_,"default"))&&l.push(p)}}const h=[o,l];return Le(t)&&r.set(t,h),h}function kh(t){return t[0]!=="$"&&!ei(t)}const Op=t=>t[0]==="_"||t==="$stable",Cc=t=>ae(t)?t.map(an):[an(t)],Vv=(t,e,n)=>{if(e._n)return e;const r=xr((...s)=>Cc(e(...s)),n);return r._c=!1,r},xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Op(s))continue;const i=t[s];if(fe(i))e[s]=Vv(s,i,r);else if(i!=null){const o=Cc(i);e[s]=()=>o}}},Mp=(t,e)=>{const n=Cc(e);t.slots.default=()=>n},Lp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Nv=(t,e,n)=>{const r=t.slots=kp();if(t.vnode.shapeFlag&32){const s=e._;s?(Lp(r,e,n),n&&Qf(r,"_",s,!0)):xp(e,r)}else e&&Mp(t,e)},Ov=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Lp(s,e,n):(i=!e.$stable,xp(e,s)),o=e}else e&&(Mp(t,e),o={default:1});if(i)for(const l in s)!Op(l)&&o[l]==null&&delete s[l]},Nt=Gv;function xv(t){return Mv(t)}function Mv(t,e){const n=ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=ln,insertStaticContent:k}=t,V=(v,E,S,O=null,F=null,M=null,G=void 0,W=null,$=!!E.dynamicChildren)=>{if(v===E)return;v&&!Ws(v,E)&&(O=N(v),je(v,F,M,!0),v=null),E.patchFlag===-2&&($=!1,E.dynamicChildren=null);const{type:B,ref:ie,shapeFlag:J}=E;switch(B){case _a:x(v,E,S,O);break;case Sr:H(v,E,S,O);break;case ll:v==null&&j(E,S,O,G);break;case mt:P(v,E,S,O,F,M,G,W,$);break;default:J&1?me(v,E,S,O,F,M,G,W,$):J&6?T(v,E,S,O,F,M,G,W,$):(J&64||J&128)&&B.process(v,E,S,O,F,M,G,W,$,ee)}ie!=null&&F&&Lo(ie,v&&v.ref,M,E||v,!E)},x=(v,E,S,O)=>{if(v==null)r(E.el=l(E.children),S,O);else{const F=E.el=v.el;E.children!==v.children&&h(F,E.children)}},H=(v,E,S,O)=>{v==null?r(E.el=c(E.children||""),S,O):E.el=v.el},j=(v,E,S,O)=>{[v.el,v.anchor]=k(v.children,E,S,O,v.el,v.anchor)},q=({el:v,anchor:E},S,O)=>{let F;for(;v&&v!==E;)F=g(v),r(v,S,O),v=F;r(E,S,O)},K=({el:v,anchor:E})=>{let S;for(;v&&v!==E;)S=g(v),s(v),v=S;s(E)},me=(v,E,S,O,F,M,G,W,$)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),v==null?ge(E,S,O,F,M,G,W,$):w(v,E,F,M,G,W,$)},ge=(v,E,S,O,F,M,G,W)=>{let $,B;const{props:ie,shapeFlag:J,transition:re,dirs:ce}=v;if($=v.el=o(v.type,M,ie&&ie.is,ie),J&8?d($,v.children):J&16&&y(v.children,$,null,O,F,al(v,M),G,W),ce&&yr(v,null,O,"created"),I($,v,v.scopeId,G,O),ie){for(const pe in ie)pe!=="value"&&!ei(pe)&&i($,pe,null,ie[pe],M,O);"value"in ie&&i($,"value",null,ie.value,M),(B=ie.onVnodeBeforeMount)&&rn(B,O,v)}ce&&yr(v,null,O,"beforeMount");const oe=Lv(F,re);oe&&re.beforeEnter($),r($,E,S),((B=ie&&ie.onVnodeMounted)||oe||ce)&&Nt(()=>{B&&rn(B,O,v),oe&&re.enter($),ce&&yr(v,null,O,"mounted")},F)},I=(v,E,S,O,F)=>{if(S&&_(v,S),O)for(let M=0;M<O.length;M++)_(v,O[M]);if(F){let M=F.subTree;if(E===M||qp(M.type)&&(M.ssContent===E||M.ssFallback===E)){const G=F.vnode;I(v,G,G.scopeId,G.slotScopeIds,F.parent)}}},y=(v,E,S,O,F,M,G,W,$=0)=>{for(let B=$;B<v.length;B++){const ie=v[B]=W?Hn(v[B]):an(v[B]);V(null,ie,E,S,O,F,M,G,W)}},w=(v,E,S,O,F,M,G)=>{const W=E.el=v.el;let{patchFlag:$,dynamicChildren:B,dirs:ie}=E;$|=v.patchFlag&16;const J=v.props||xe,re=E.props||xe;let ce;if(S&&vr(S,!1),(ce=re.onVnodeBeforeUpdate)&&rn(ce,S,E,v),ie&&yr(E,v,S,"beforeUpdate"),S&&vr(S,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&d(W,""),B?b(v.dynamicChildren,B,W,S,O,al(E,F),M):G||ye(v,E,W,null,S,O,al(E,F),M,!1),$>0){if($&16)R(W,J,re,S,F);else if($&2&&J.class!==re.class&&i(W,"class",null,re.class,F),$&4&&i(W,"style",J.style,re.style,F),$&8){const oe=E.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Ie=oe[pe],at=J[Ie],tt=re[Ie];(tt!==at||Ie==="value")&&i(W,Ie,at,tt,F,S)}}$&1&&v.children!==E.children&&d(W,E.children)}else!G&&B==null&&R(W,J,re,S,F);((ce=re.onVnodeUpdated)||ie)&&Nt(()=>{ce&&rn(ce,S,E,v),ie&&yr(E,v,S,"updated")},O)},b=(v,E,S,O,F,M,G)=>{for(let W=0;W<E.length;W++){const $=v[W],B=E[W],ie=$.el&&($.type===mt||!Ws($,B)||$.shapeFlag&70)?p($.el):S;V($,B,ie,null,O,F,M,G,!0)}},R=(v,E,S,O,F)=>{if(E!==S){if(E!==xe)for(const M in E)!ei(M)&&!(M in S)&&i(v,M,E[M],null,F,O);for(const M in S){if(ei(M))continue;const G=S[M],W=E[M];G!==W&&M!=="value"&&i(v,M,W,G,F,O)}"value"in S&&i(v,"value",E.value,S.value,F)}},P=(v,E,S,O,F,M,G,W,$)=>{const B=E.el=v?v.el:l(""),ie=E.anchor=v?v.anchor:l("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:ce}=E;ce&&(W=W?W.concat(ce):ce),v==null?(r(B,S,O),r(ie,S,O),y(E.children||[],S,ie,F,M,G,W,$)):J>0&&J&64&&re&&v.dynamicChildren?(b(v.dynamicChildren,re,S,F,M,G,W),(E.key!=null||F&&E===F.subTree)&&Up(v,E,!0)):ye(v,E,S,ie,F,M,G,W,$)},T=(v,E,S,O,F,M,G,W,$)=>{E.slotScopeIds=W,v==null?E.shapeFlag&512?F.ctx.activate(E,S,O,G,$):Tt(E,S,O,F,M,G,$):Ut(v,E,$)},Tt=(v,E,S,O,F,M,G)=>{const W=v.component=tE(v,O,F);if(Ip(v)&&(W.ctx.renderer=ee),nE(W,!1,G),W.asyncDep){if(F&&F.registerDep(W,Ke,G),!v.el){const $=W.subTree=De(Sr);H(null,$,E,S)}}else Ke(W,v,E,S,F,M,G)},Ut=(v,E,S)=>{const O=E.component=v.component;if(zv(v,E,S))if(O.asyncDep&&!O.asyncResolved){we(O,E,S);return}else O.next=E,O.update();else E.el=v.el,O.vnode=E},Ke=(v,E,S,O,F,M,G)=>{const W=()=>{if(v.isMounted){let{next:J,bu:re,u:ce,parent:oe,vnode:pe}=v;{const lt=Fp(v);if(lt){J&&(J.el=pe.el,we(v,J,G)),lt.asyncDep.then(()=>{v.isUnmounted||W()});return}}let Ie=J,at;vr(v,!1),J?(J.el=pe.el,we(v,J,G)):J=pe,re&&yo(re),(at=J.props&&J.props.onVnodeBeforeUpdate)&&rn(at,oe,J,pe),vr(v,!0);const tt=Vh(v),Bt=v.subTree;v.subTree=tt,V(Bt,tt,p(Bt.el),N(Bt),v,F,M),J.el=tt.el,Ie===null&&Kv(v,tt.el),ce&&Nt(ce,F),(at=J.props&&J.props.onVnodeUpdated)&&Nt(()=>rn(at,oe,J,pe),F)}else{let J;const{el:re,props:ce}=E,{bm:oe,m:pe,parent:Ie,root:at,type:tt}=v,Bt=ri(E);vr(v,!1),oe&&yo(oe),!Bt&&(J=ce&&ce.onVnodeBeforeMount)&&rn(J,Ie,E),vr(v,!0);{at.ce&&at.ce._injectChildStyle(tt);const lt=v.subTree=Vh(v);V(null,lt,S,O,v,F,M),E.el=lt.el}if(pe&&Nt(pe,F),!Bt&&(J=ce&&ce.onVnodeMounted)){const lt=E;Nt(()=>rn(J,Ie,lt),F)}(E.shapeFlag&256||Ie&&ri(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&v.a&&Nt(v.a,F),v.isMounted=!0,E=S=O=null}};v.scope.on();const $=v.effect=new Zf(W);v.scope.off();const B=v.update=$.run.bind($),ie=v.job=$.runIfDirty.bind($);ie.i=v,ie.id=v.uid,$.scheduler=()=>Rc(ie),vr(v,!0),B()},we=(v,E,S)=>{E.component=v;const O=v.vnode.props;v.vnode=E,v.next=null,kv(v,E.props,O,S),Ov(v,E.children,S),cr(),Ah(v),ur()},ye=(v,E,S,O,F,M,G,W,$=!1)=>{const B=v&&v.children,ie=v?v.shapeFlag:0,J=E.children,{patchFlag:re,shapeFlag:ce}=E;if(re>0){if(re&128){Kt(B,J,S,O,F,M,G,W,$);return}else if(re&256){Dt(B,J,S,O,F,M,G,W,$);return}}ce&8?(ie&16&&St(B,F,M),J!==B&&d(S,J)):ie&16?ce&16?Kt(B,J,S,O,F,M,G,W,$):St(B,F,M,!0):(ie&8&&d(S,""),ce&16&&y(J,S,O,F,M,G,W,$))},Dt=(v,E,S,O,F,M,G,W,$)=>{v=v||Yr,E=E||Yr;const B=v.length,ie=E.length,J=Math.min(B,ie);let re;for(re=0;re<J;re++){const ce=E[re]=$?Hn(E[re]):an(E[re]);V(v[re],ce,S,null,F,M,G,W,$)}B>ie?St(v,F,M,!0,!1,J):y(E,S,O,F,M,G,W,$,J)},Kt=(v,E,S,O,F,M,G,W,$)=>{let B=0;const ie=E.length;let J=v.length-1,re=ie-1;for(;B<=J&&B<=re;){const ce=v[B],oe=E[B]=$?Hn(E[B]):an(E[B]);if(Ws(ce,oe))V(ce,oe,S,null,F,M,G,W,$);else break;B++}for(;B<=J&&B<=re;){const ce=v[J],oe=E[re]=$?Hn(E[re]):an(E[re]);if(Ws(ce,oe))V(ce,oe,S,null,F,M,G,W,$);else break;J--,re--}if(B>J){if(B<=re){const ce=re+1,oe=ce<ie?E[ce].el:O;for(;B<=re;)V(null,E[B]=$?Hn(E[B]):an(E[B]),S,oe,F,M,G,W,$),B++}}else if(B>re)for(;B<=J;)je(v[B],F,M,!0),B++;else{const ce=B,oe=B,pe=new Map;for(B=oe;B<=re;B++){const nt=E[B]=$?Hn(E[B]):an(E[B]);nt.key!=null&&pe.set(nt.key,B)}let Ie,at=0;const tt=re-oe+1;let Bt=!1,lt=0;const Ln=new Array(tt);for(B=0;B<tt;B++)Ln[B]=0;for(B=ce;B<=J;B++){const nt=v[B];if(at>=tt){je(nt,F,M,!0);continue}let jt;if(nt.key!=null)jt=pe.get(nt.key);else for(Ie=oe;Ie<=re;Ie++)if(Ln[Ie-oe]===0&&Ws(nt,E[Ie])){jt=Ie;break}jt===void 0?je(nt,F,M,!0):(Ln[jt-oe]=B+1,jt>=lt?lt=jt:Bt=!0,V(nt,E[jt],S,null,F,M,G,W,$),at++)}const Ds=Bt?Uv(Ln):Yr;for(Ie=Ds.length-1,B=tt-1;B>=0;B--){const nt=oe+B,jt=E[nt],zi=nt+1<ie?E[nt+1].el:O;Ln[B]===0?V(null,jt,S,zi,F,M,G,W,$):Bt&&(Ie<0||B!==Ds[Ie]?Ft(jt,S,zi,2):Ie--)}}},Ft=(v,E,S,O,F=null)=>{const{el:M,type:G,transition:W,children:$,shapeFlag:B}=v;if(B&6){Ft(v.component.subTree,E,S,O);return}if(B&128){v.suspense.move(E,S,O);return}if(B&64){G.move(v,E,S,ee);return}if(G===mt){r(M,E,S);for(let J=0;J<$.length;J++)Ft($[J],E,S,O);r(v.anchor,E,S);return}if(G===ll){q(v,E,S);return}if(O!==2&&B&1&&W)if(O===0)W.beforeEnter(M),r(M,E,S),Nt(()=>W.enter(M),F);else{const{leave:J,delayLeave:re,afterLeave:ce}=W,oe=()=>r(M,E,S),pe=()=>{J(M,()=>{oe(),ce&&ce()})};re?re(M,oe,pe):pe()}else r(M,E,S)},je=(v,E,S,O=!1,F=!1)=>{const{type:M,props:G,ref:W,children:$,dynamicChildren:B,shapeFlag:ie,patchFlag:J,dirs:re,cacheIndex:ce}=v;if(J===-2&&(F=!1),W!=null&&Lo(W,null,S,v,!0),ce!=null&&(E.renderCache[ce]=void 0),ie&256){E.ctx.deactivate(v);return}const oe=ie&1&&re,pe=!ri(v);let Ie;if(pe&&(Ie=G&&G.onVnodeBeforeUnmount)&&rn(Ie,E,v),ie&6)nn(v.component,S,O);else{if(ie&128){v.suspense.unmount(S,O);return}oe&&yr(v,null,E,"beforeUnmount"),ie&64?v.type.remove(v,E,S,ee,O):B&&!B.hasOnce&&(M!==mt||J>0&&J&64)?St(B,E,S,!1,!0):(M===mt&&J&384||!F&&ie&16)&&St($,E,S),O&&$e(v)}(pe&&(Ie=G&&G.onVnodeUnmounted)||oe)&&Nt(()=>{Ie&&rn(Ie,E,v),oe&&yr(v,null,E,"unmounted")},S)},$e=v=>{const{type:E,el:S,anchor:O,transition:F}=v;if(E===mt){Mn(S,O);return}if(E===ll){K(v);return}const M=()=>{s(S),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(v.shapeFlag&1&&F&&!F.persisted){const{leave:G,delayLeave:W}=F,$=()=>G(S,M);W?W(v.el,M,$):$()}else M()},Mn=(v,E)=>{let S;for(;v!==E;)S=g(v),s(v),v=S;s(E)},nn=(v,E,S)=>{const{bum:O,scope:F,job:M,subTree:G,um:W,m:$,a:B}=v;Dh($),Dh(B),O&&yo(O),F.stop(),M&&(M.flags|=8,je(G,v,E,S)),W&&Nt(W,E),Nt(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},St=(v,E,S,O=!1,F=!1,M=0)=>{for(let G=M;G<v.length;G++)je(v[G],E,S,O,F)},N=v=>{if(v.shapeFlag&6)return N(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const E=g(v.anchor||v.el),S=E&&E[iv];return S?g(S):E};let Y=!1;const Q=(v,E,S)=>{v==null?E._vnode&&je(E._vnode,null,null,!0):V(E._vnode||null,v,E,null,null,null,S),E._vnode=v,Y||(Y=!0,Ah(),vp(),Y=!1)},ee={p:V,um:je,m:Ft,r:$e,mt:Tt,mc:y,pc:ye,pbc:b,n:N,o:t};return{render:Q,hydrate:void 0,createApp:Pv(Q)}}function al({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Lv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Up(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Hn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Up(o,l)),l.type===_a&&(l.el=o.el)}}function Uv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Fp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fp(e)}function Dh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Fv=Symbol.for("v-scx"),Bv=()=>cn(Fv);function Eo(t,e,n){return Bp(t,e,n)}function Bp(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=vt({},n),c=e&&r||!e&&i!=="post";let h;if(_i){if(i==="sync"){const _=Bv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=ln,_.resume=ln,_.pause=ln,_}}const d=_t;l.call=(_,k,V)=>pn(_,d,k,V);let p=!1;i==="post"?l.scheduler=_=>{Nt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,k)=>{k?_():Rc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=tv(t,e,l);return _i&&(h?h.push(g):c&&g()),g}function jv(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?jp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ni(this),l=Bp(s,i.bind(r),n);return o(),l}function jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $v=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&$v(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Je(d)?d.trim():d)),o.number&&(s=n.map(No)));let l,c=r[l=tl(e)]||r[l=tl(Wt(e))];!c&&i&&(c=r[l=tl(Or(e))]),c&&pn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,pn(h,t,6,s)}}function $p(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=h=>{const d=$p(h,e,!0);d&&(l=!0,vt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&r.set(t,null),null):(ae(i)?i.forEach(c=>o[c]=null):vt(o,i),Le(t)&&r.set(t,o),o)}function ga(t,e){return!t||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Or(e))||ke(t,e))}function Vh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:_,ctx:k,inheritAttrs:V}=t,x=Mo(t);let H,j;try{if(n.shapeFlag&4){const K=s||r,me=K;H=an(h.call(me,K,d,p,_,g,k)),j=l}else{const K=e;H=an(K.length>1?K(p,{attrs:l,slots:o,emit:c}):K(p,null)),j=e.props?l:Hv(l)}}catch(K){ii.length=0,pa(K,t,1),H=De(Sr)}let q=H;if(j&&V!==!1){const K=Object.keys(j),{shapeFlag:me}=q;K.length&&me&7&&(i&&K.some(fc)&&(j=Wv(j,i)),q=as(q,j,!1,!0))}return n.dirs&&(q=as(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Sc(q,n.transition),H=q,Mo(x),H}const Hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||aa(n))&&((e||(e={}))[n]=t[n]);return e},Wv=(t,e)=>{const n={};for(const r in t)(!fc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Nh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!ga(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Nh(r,o,h):!0:!!o;return!1}function Nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ga(n,i))return!0}return!1}function Kv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qp=t=>t.__isSuspense;function Gv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):sv(t)}const mt=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),ll=Symbol.for("v-stc"),ii=[];let Lt=null;function te(t=!1){ii.push(Lt=t?null:[])}function Qv(){ii.pop(),Lt=ii[ii.length-1]||null}let gi=1;function Oh(t,e=!1){gi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Hp(t){return t.dynamicChildren=gi>0?Lt||Yr:null,Qv(),gi>0&&Lt&&Lt.push(t),t}function ne(t,e,n,r,s,i){return Hp(A(t,e,n,r,s,i,!0))}function Ol(t,e,n,r,s){return Hp(De(t,e,n,r,s,!0))}function Fo(t){return t?t.__v_isVNode===!0:!1}function Ws(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,To=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||yt(t)||fe(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,r=0,s=null,i=t===mt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&To(e),scopeId:Tp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return l?(kc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),gi>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const De=Jv;function Jv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vv)&&(t=Sr),Fo(t)){const l=as(t,e,!0);return n&&kc(l,n),gi>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag=-2,l}if(aE(t)&&(t=t.__vccOpts),e){e=Yv(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=ha(l)),Le(c)&&(Ac(c)&&!ae(c)&&(c=vt({},c)),e.style=gc(c))}const o=Je(t)?1:qp(t)?128:ov(t)?64:Le(t)?4:fe(t)?2:0;return A(t,e,n,r,s,o,i,!0)}function Yv(t){return t?Ac(t)||Dp(t)?vt({},t):t:null}function as(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Xv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Wp(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(To(e)):[i,To(e)]:To(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&as(t.ssContent),ssFallback:t.ssFallback&&as(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Sc(d,c.clone(d)),d}function bt(t=" ",e=0){return De(_a,null,t,e)}function Ve(t="",e=!1){return e?(te(),Ol(Sr,null,t)):De(Sr,null,t)}function an(t){return t==null||typeof t=="boolean"?De(Sr):ae(t)?De(mt,null,t.slice()):Fo(t)?Hn(t):De(_a,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:as(t)}function kc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),kc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dp(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[bt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ha([e.class,r.class]));else if(s==="style")e.style=gc([e.style,r.style]);else if(aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){pn(t,e,7,[n,r])}const Zv=Pp();let eE=0;function tE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Zv,i={uid:eE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Py(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(r,s),emitsOptions:$p(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qv.bind(null,i),t.ce&&t.ce(i),i}let _t=null,Bo,xl;{const t=ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Bo=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),xl=e("__VUE_SSR_SETTERS__",n=>_i=n)}const Ni=t=>{const e=_t;return Bo(t),t.scope.on(),()=>{t.scope.off(),Bo(e)}},xh=()=>{_t&&_t.scope.off(),Bo(null)};function zp(t){return t.vnode.shapeFlag&4}let _i=!1;function nE(t,e=!1,n=!1){e&&xl(e);const{props:r,children:s}=t.vnode,i=zp(t);Cv(t,r,i,e),Nv(t,s,n);const o=i?rE(t,e):void 0;return e&&xl(!1),o}function rE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tv);const{setup:r}=n;if(r){cr();const s=t.setupContext=r.length>1?iE(t):null,i=Ni(t),o=Vi(r,t,0,[t.props,s]),l=zf(o);if(ur(),i(),(l||t.sp)&&!ri(t)&&wp(t),l){if(o.then(xh,xh),e)return o.then(c=>{Mh(t,c)}).catch(c=>{pa(c,t,0)});t.asyncDep=o}else Mh(t,o)}else Kp(t)}function Mh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=gp(e)),Kp(t)}function Kp(t,e,n){const r=t.type;t.render||(t.render=r.render||ln);{const s=Ni(t);cr();try{wv(t)}finally{ur(),s()}}}const sE={get(t,e){return ft(t,"get",""),t[e]}};function iE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sE),slots:t.slots,emit:t.emit,expose:e}}function ya(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gp(Gy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}})):t.proxy}function oE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function aE(t){return fe(t)&&"__vccOpts"in t}const $t=(t,e)=>Zy(t,e,_i);function Gp(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ae(e)?Fo(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fo(n)&&(n=[n]),De(t,e,n))}const lE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ml;const Lh=typeof window<"u"&&window.trustedTypes;if(Lh)try{Ml=Lh.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=Ml?t=>Ml.createHTML(t):t=>t,cE="http://www.w3.org/2000/svg",uE="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Uh=En&&En.createElement("template"),hE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(cE,t):e==="mathml"?En.createElementNS(uE,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uh.innerHTML=Qp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Uh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dE=Symbol("_vtc");function fE(t,e,n){const r=t[dE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fh=Symbol("_vod"),pE=Symbol("_vsh"),mE=Symbol(""),gE=/(^|;)\s*display\s*:/;function _E(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&wo(r,l,"")}else for(const o in e)n[o]==null&&wo(r,o,"");for(const o in n)o==="display"&&(i=!0),wo(r,o,n[o])}else if(s){if(e!==n){const o=r[mE];o&&(n+=";"+o),r.cssText=n,i=gE.test(n)}}else e&&t.removeAttribute("style");Fh in t&&(t[Fh]=i?r.display:"",t[pE]&&(r.display="none"))}const Bh=/\s*!important$/;function wo(t,e,n){if(ae(n))n.forEach(r=>wo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yE(t,e);Bh.test(n)?t.setProperty(Or(r),n.replace(Bh,""),"important"):t[r]=n}}const jh=["Webkit","Moz","ms"],cl={};function yE(t,e){const n=cl[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return cl[e]=r;r=ca(r);for(let s=0;s<jh.length;s++){const i=jh[s]+r;if(i in t)return cl[e]=i}return e}const $h="http://www.w3.org/1999/xlink";function qh(t,e,n,r,s,i=Ry(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($h,e.slice(6,e.length)):t.setAttributeNS($h,e,n):n==null||i&&!Jf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function Hh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Jf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function zn(t,e,n,r){t.addEventListener(e,n,r)}function vE(t,e,n,r){t.removeEventListener(e,n,r)}const Wh=Symbol("_vei");function EE(t,e,n,r,s=null){const i=t[Wh]||(t[Wh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=TE(e);if(r){const h=i[e]=AE(r,s);zn(t,l,h,c)}else o&&(vE(t,l,o,c),i[e]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function TE(t){let e;if(zh.test(t)){e={};let r;for(;r=t.match(zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let ul=0;const wE=Promise.resolve(),IE=()=>ul||(wE.then(()=>ul=0),ul=Date.now());function AE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(bE(r,n.value),e,5,[r])};return n.value=t,n.attached=IE(),n}function bE(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,RE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?fE(t,r,o):e==="style"?_E(t,n,r):aa(e)?fc(e)||EE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SE(t,e,r,o))?(Hh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Hh(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qh(t,e,r,o))};function SE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kh(e)&&Je(n)?!1:e in t}const ls=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>yo(e,n):e};function PE(t){t.target.composing=!0}function Gh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rn=Symbol("_assign"),ze={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Rn]=ls(s);const i=r||s.props&&s.props.type==="number";zn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=No(l)),t[Rn](l)}),n&&zn(t,"change",()=>{t.value=t.value.trim()}),e||(zn(t,"compositionstart",PE),zn(t,"compositionend",Gh),zn(t,"change",Gh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Rn]=ls(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?No(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Jp={deep:!0,created(t,e,n){t[Rn]=ls(n),zn(t,"change",()=>{const r=t._modelValue,s=yi(t),i=t.checked,o=t[Rn];if(ae(r)){const l=_c(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(Ts(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Yp(t,i))})},mounted:Qh,beforeUpdate(t,e,n){t[Rn]=ls(n),Qh(t,e,n)}};function Qh(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ae(e))s=_c(e,r.props.value)>-1;else if(Ts(e))s=e.has(r.props.value);else{if(e===n)return;s=Di(e,Yp(t,!0))}t.checked!==s&&(t.checked=s)}const CE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ts(e);zn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?No(yi(o)):yi(o));t[Rn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,bc(()=>{t._assigning=!1})}),t[Rn]=ls(r)},mounted(t,{value:e}){Jh(t,e)},beforeUpdate(t,e,n){t[Rn]=ls(n)},updated(t,{value:e}){t._assigning||Jh(t,e)}};function Jh(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!Ts(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=yi(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=_c(e,l)>-1}else o.selected=e.has(l);else if(Di(yi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yi(t){return"_value"in t?t._value:t.value}function Yp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const kE=["ctrl","shift","alt","meta"],DE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kE.some(n=>t[`${n}Key`]&&!e.includes(n))},Dc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=DE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},VE=vt({patchProp:RE},hE);let Yh;function NE(){return Yh||(Yh=xv(VE))}const OE=(...t)=>{const e=NE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ME(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ME(t){return Je(t)?document.querySelector(t):t}const kt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LE={name:"App"};function UE(t,e,n,r,s,i){const o=Ye("router-view");return te(),ne("div",null,[De(o)])}const FE=kt(LE,[["render",UE]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof document<"u";function Xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function BE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xp(t.default)}const Pe=Object.assign;function hl(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const oi=()=>{},en=Array.isArray,Zp=/#/g,jE=/&/g,$E=/\//g,qE=/=/g,HE=/\?/g,em=/\+/g,WE=/%5B/g,zE=/%5D/g,tm=/%5E/g,KE=/%60/g,nm=/%7B/g,GE=/%7C/g,rm=/%7D/g,QE=/%20/g;function Vc(t){return encodeURI(""+t).replace(GE,"|").replace(WE,"[").replace(zE,"]")}function JE(t){return Vc(t).replace(nm,"{").replace(rm,"}").replace(tm,"^")}function Ll(t){return Vc(t).replace(em,"%2B").replace(QE,"+").replace(Zp,"%23").replace(jE,"%26").replace(KE,"`").replace(nm,"{").replace(rm,"}").replace(tm,"^")}function YE(t){return Ll(t).replace(qE,"%3D")}function XE(t){return Vc(t).replace(Zp,"%23").replace(HE,"%3F")}function ZE(t){return t==null?"":XE(t).replace($E,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eT=/\/$/,tT=t=>t.replace(eT,"");function dl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=iT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:vi(o)}}function nT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cs(e.matched[r],n.matched[s])&&sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sT(t[n],e[n]))return!1;return!0}function sT(t,e){return en(t)?Zh(t,e):en(e)?Zh(e,t):t===e}function Zh(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ei;(function(t){t.pop="pop",t.push="push"})(Ei||(Ei={}));var ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ai||(ai={}));function oT(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tT(t)}const aT=/^[^#]+#/;function lT(t,e){return t.replace(aT,"#")+e}function cT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const va=()=>({left:window.scrollX,top:window.scrollY});function uT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ed(t,e){return(history.state?history.state.position-e:-1)+t}const Ul=new Map;function hT(t,e){Ul.set(t,e)}function dT(t){const e=Ul.get(t);return Ul.delete(t),e}let fT=()=>location.protocol+"//"+location.host;function im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Xh(c,"")}return Xh(n,t)+r+s}function pT(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=im(t,location),k=n.value,V=e.value;let x=0;if(g){if(n.value=_,e.value=g,o&&o===k){o=null;return}x=V?g.position-V.position:0}else r(_);s.forEach(H=>{H(n.value,k,{delta:x,type:Ei.pop,direction:x?x>0?ai.forward:ai.back:ai.unknown})})};function c(){o=n.value}function h(g){s.push(g);const _=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(Pe({},g.state,{scroll:va()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function td(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?va():null}}function mT(t){const{history:e,location:n}=window,r={value:im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:fT()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(c,h){const d=Pe({},e.state,td(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Pe({},s.value,e.state,{forward:c,scroll:va()});i(d.current,d,!0);const p=Pe({},td(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function gT(t){t=oT(t);const e=mT(t),n=pT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:lT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _T(t){return typeof t=="string"||t&&typeof t=="object"}function om(t){return typeof t=="string"||typeof t=="symbol"}const am=Symbol("");var nd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nd||(nd={}));function us(t,e){return Pe(new Error,{type:t,[am]:!0},e)}function vn(t,e){return t instanceof Error&&am in t&&(e==null||!!(t.type&e))}const rd="[^/]+?",yT={sensitive:!1,strict:!1,start:!0,end:!0},vT=/[.+*?^${}()[\]/\\]/g;function ET(t,e){const n=Pe({},yT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(vT,"\\$&"),_+=40;else if(g.type===1){const{value:k,repeatable:V,optional:x,regexp:H}=g;i.push({name:k,repeatable:V,optional:x});const j=H||rd;if(j!==rd){_+=10;try{new RegExp(`(${j})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+K.message)}}let q=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(q=x&&h.length<2?`(?:/${q})`:"/"+q),x&&(q+="?"),s+=q,_+=20,x&&(_+=-8),V&&(_+=-20),j===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",k=i[g-1];p[k.name]=_&&k.repeatable?_.split("/"):_}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:k,repeatable:V,optional:x}=_,H=k in h?h[k]:"";if(en(H)&&!V)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=en(H)?H.join("/"):H;if(!j)if(x)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function TT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=TT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sd(r))return 1;if(sd(s))return-1}return s.length-r.length}function sd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wT={type:0,value:""},IT=/[a-zA-Z0-9_]/;function AT(t){if(!t)return[[]];if(t==="/")return[[wT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:IT.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function bT(t,e,n){const r=ET(AT(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function RT(t,e){const n=[],r=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const k=!_,V=od(p);V.aliasOf=_&&_.record;const x=ld(e,p),H=[V];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const me of K)H.push(od(Pe({},V,{components:_?_.record.components:V.components,path:me,aliasOf:_?_.record:V})))}let j,q;for(const K of H){const{path:me}=K;if(g&&me[0]!=="/"){const ge=g.record.path,I=ge[ge.length-1]==="/"?"":"/";K.path=g.record.path+(me&&I+me)}if(j=bT(K,g,x),_?_.alias.push(j):(q=q||j,q!==j&&q.alias.push(j),k&&p.name&&!ad(j)&&o(p.name)),cm(j)&&c(j),V.children){const ge=V.children;for(let I=0;I<ge.length;I++)i(ge[I],j,_&&_.children[I])}_=_||j}return q?()=>{o(q)}:oi}function o(p){if(om(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=CT(p,n);n.splice(g,0,p),p.record.name&&!ad(p)&&r.set(p.record.name,p)}function h(p,g){let _,k={},V,x;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw us(1,{location:p});x=_.record.name,k=Pe(id(g.params,_.keys.filter(q=>!q.optional).concat(_.parent?_.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&id(p.params,_.keys.map(q=>q.name))),V=_.stringify(k)}else if(p.path!=null)V=p.path,_=n.find(q=>q.re.test(V)),_&&(k=_.parse(V),x=_.record.name);else{if(_=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!_)throw us(1,{location:p,currentLocation:g});x=_.record.name,k=Pe({},g.params,p.params),V=_.stringify(k)}const H=[];let j=_;for(;j;)H.unshift(j.record),j=j.parent;return{name:x,path:V,params:k,matched:H,meta:PT(H)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function id(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function od(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ST(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ST(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PT(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function ld(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function CT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;lm(t,e[i])<0?r=i:n=i+1}const s=kT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function kT(t){let e=t;for(;e=e.parent;)if(cm(e)&&lm(t,e)===0)return e}function cm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function DT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(em," "),o=i.indexOf("="),l=vi(o<0?i:i.slice(0,o)),c=o<0?null:vi(i.slice(o+1));if(l in e){let h=e[l];en(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function cd(t){let e="";for(let n in t){const r=t[n];if(n=YE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&Ll(i)):[r&&Ll(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function VT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const NT=Symbol(""),ud=Symbol(""),Ea=Symbol(""),um=Symbol(""),Fl=Symbol("");function zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(us(4,{from:n,to:e})):g instanceof Error?c(g):_T(g)?c(us(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function fl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Xp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Wn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=BE(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Wn(_,n,r,o,l,s)()}))}}return i}function hd(t){const e=cn(Ea),n=cn(um),r=$t(()=>{const c=es(t.to);return e.resolve(c)}),s=$t(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(cs.bind(null,d));if(g>-1)return g;const _=dd(c[h-2]);return h>1&&dd(d)===_&&p[p.length-1].path!==_?p.findIndex(cs.bind(null,c[h-2])):g}),i=$t(()=>s.value>-1&&UT(n.params,r.value.params)),o=$t(()=>s.value>-1&&s.value===n.matched.length-1&&sm(n.params,r.value.params));function l(c={}){if(LT(c)){const h=e[es(t.replace)?"replace":"push"](es(t.to)).catch(oi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:$t(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function OT(t){return t.length===1?t[0]:t}const xT=Pc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hd,setup(t,{slots:e}){const n=fa(hd(t)),{options:r}=cn(Ea),s=$t(()=>({[fd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&OT(e.default(n));return t.custom?i:Gp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),MT=xT;function LT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fd=(t,e,n)=>t??e??n,FT=Pc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(Fl),s=$t(()=>t.route||r.value),i=cn(ud,0),o=$t(()=>{let h=es(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=$t(()=>s.value.matched[o.value]);vo(ud,$t(()=>o.value+1)),vo(NT,l),vo(Fl,s);const c=Se();return Eo(()=>[c.value,l.value,t.name],([h,d,p],[g,_,k])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!cs(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return pd(n.default,{Component:g,route:h});const _=p.props[d],k=_?_===!0?h.params:typeof _=="function"?_(h):_:null,x=Gp(g,Pe({},k,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return pd(n.default,{Component:x,route:h})||x}}});function pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BT=FT;function jT(t){const e=RT(t.routes,t),n=t.parseQuery||DT,r=t.stringifyQuery||cd,s=t.history,i=zs(),o=zs(),l=zs(),c=Qy(jn);let h=jn;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=hl.bind(null,N=>""+N),p=hl.bind(null,ZE),g=hl.bind(null,vi);function _(N,Y){let Q,ee;return om(N)?(Q=e.getRecordMatcher(N),ee=Y):ee=N,e.addRoute(ee,Q)}function k(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(N=>N.record)}function x(N){return!!e.getRecordMatcher(N)}function H(N,Y){if(Y=Pe({},Y||c.value),typeof N=="string"){const S=dl(n,N,Y.path),O=e.resolve({path:S.path},Y),F=s.createHref(S.fullPath);return Pe(S,O,{params:g(O.params),hash:vi(S.hash),redirectedFrom:void 0,href:F})}let Q;if(N.path!=null)Q=Pe({},N,{path:dl(n,N.path,Y.path).path});else{const S=Pe({},N.params);for(const O in S)S[O]==null&&delete S[O];Q=Pe({},N,{params:p(S)}),Y.params=p(Y.params)}const ee=e.resolve(Q,Y),be=N.hash||"";ee.params=d(g(ee.params));const v=nT(r,Pe({},N,{hash:JE(be),path:ee.path})),E=s.createHref(v);return Pe({fullPath:v,hash:be,query:r===cd?VT(N.query):N.query||{}},ee,{redirectedFrom:void 0,href:E})}function j(N){return typeof N=="string"?dl(n,N,c.value.path):Pe({},N)}function q(N,Y){if(h!==N)return us(8,{from:Y,to:N})}function K(N){return I(N)}function me(N){return K(Pe(j(N),{replace:!0}))}function ge(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let ee=typeof Q=="function"?Q(N):Q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),Pe({query:N.query,hash:N.hash,params:ee.path!=null?{}:N.params},ee)}}function I(N,Y){const Q=h=H(N),ee=c.value,be=N.state,v=N.force,E=N.replace===!0,S=ge(Q);if(S)return I(Pe(j(S),{state:typeof S=="object"?Pe({},be,S.state):be,force:v,replace:E}),Y||Q);const O=Q;O.redirectedFrom=Y;let F;return!v&&rT(r,ee,Q)&&(F=us(16,{to:O,from:ee}),Ft(ee,ee,!0,!1)),(F?Promise.resolve(F):b(O,ee)).catch(M=>vn(M)?vn(M,2)?M:Kt(M):ye(M,O,ee)).then(M=>{if(M){if(vn(M,2))return I(Pe({replace:E},j(M.to),{state:typeof M.to=="object"?Pe({},be,M.to.state):be,force:v}),Y||O)}else M=P(O,ee,!0,E,be);return R(O,ee,M),M})}function y(N,Y){const Q=q(N,Y);return Q?Promise.reject(Q):Promise.resolve()}function w(N){const Y=Mn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function b(N,Y){let Q;const[ee,be,v]=$T(N,Y);Q=fl(ee.reverse(),"beforeRouteLeave",N,Y);for(const S of ee)S.leaveGuards.forEach(O=>{Q.push(Wn(O,N,Y))});const E=y.bind(null,N,Y);return Q.push(E),St(Q).then(()=>{Q=[];for(const S of i.list())Q.push(Wn(S,N,Y));return Q.push(E),St(Q)}).then(()=>{Q=fl(be,"beforeRouteUpdate",N,Y);for(const S of be)S.updateGuards.forEach(O=>{Q.push(Wn(O,N,Y))});return Q.push(E),St(Q)}).then(()=>{Q=[];for(const S of v)if(S.beforeEnter)if(en(S.beforeEnter))for(const O of S.beforeEnter)Q.push(Wn(O,N,Y));else Q.push(Wn(S.beforeEnter,N,Y));return Q.push(E),St(Q)}).then(()=>(N.matched.forEach(S=>S.enterCallbacks={}),Q=fl(v,"beforeRouteEnter",N,Y,w),Q.push(E),St(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(Wn(S,N,Y));return Q.push(E),St(Q)}).catch(S=>vn(S,8)?S:Promise.reject(S))}function R(N,Y,Q){l.list().forEach(ee=>w(()=>ee(N,Y,Q)))}function P(N,Y,Q,ee,be){const v=q(N,Y);if(v)return v;const E=Y===jn,S=zr?history.state:{};Q&&(ee||E?s.replace(N.fullPath,Pe({scroll:E&&S&&S.scroll},be)):s.push(N.fullPath,be)),c.value=N,Ft(N,Y,Q,E),Kt()}let T;function Tt(){T||(T=s.listen((N,Y,Q)=>{if(!nn.listening)return;const ee=H(N),be=ge(ee);if(be){I(Pe(be,{replace:!0,force:!0}),ee).catch(oi);return}h=ee;const v=c.value;zr&&hT(ed(v.fullPath,Q.delta),va()),b(ee,v).catch(E=>vn(E,12)?E:vn(E,2)?(I(Pe(j(E.to),{force:!0}),ee).then(S=>{vn(S,20)&&!Q.delta&&Q.type===Ei.pop&&s.go(-1,!1)}).catch(oi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(E,ee,v))).then(E=>{E=E||P(ee,v,!1),E&&(Q.delta&&!vn(E,8)?s.go(-Q.delta,!1):Q.type===Ei.pop&&vn(E,20)&&s.go(-1,!1)),R(ee,v,E)}).catch(oi)}))}let Ut=zs(),Ke=zs(),we;function ye(N,Y,Q){Kt(N);const ee=Ke.list();return ee.length?ee.forEach(be=>be(N,Y,Q)):console.error(N),Promise.reject(N)}function Dt(){return we&&c.value!==jn?Promise.resolve():new Promise((N,Y)=>{Ut.add([N,Y])})}function Kt(N){return we||(we=!N,Tt(),Ut.list().forEach(([Y,Q])=>N?Q(N):Y()),Ut.reset()),N}function Ft(N,Y,Q,ee){const{scrollBehavior:be}=t;if(!zr||!be)return Promise.resolve();const v=!Q&&dT(ed(N.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return bc().then(()=>be(N,Y,v)).then(E=>E&&uT(E)).catch(E=>ye(E,N,Y))}const je=N=>s.go(N);let $e;const Mn=new Set,nn={currentRoute:c,listening:!0,addRoute:_,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:V,resolve:H,options:t,push:K,replace:me,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ke.add,isReady:Dt,install(N){const Y=this;N.component("RouterLink",MT),N.component("RouterView",BT),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>es(c)}),zr&&!$e&&c.value===jn&&($e=!0,K(s.location).catch(be=>{}));const Q={};for(const be in jn)Object.defineProperty(Q,be,{get:()=>c.value[be],enumerable:!0});N.provide(Ea,Y),N.provide(um,fp(Q)),N.provide(Fl,c);const ee=N.unmount;Mn.add(N),N.unmount=function(){Mn.delete(N),Mn.size<1&&(h=jn,T&&T(),T=null,c.value=jn,$e=!1,we=!1),ee()}}};function St(N){return N.reduce((Y,Q)=>Y.then(()=>w(Q)),Promise.resolve())}return nn}function $T(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>cs(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>cs(h,c))||s.push(c))}return[n,r,s]}function Ta(){return cn(Ea)}const qT="/icons/icon-192x192.png",HT={name:"Home",setup(){const t=Ta();return{goToLogin:()=>{t.push("/login")},goToRegister:()=>{t.push("/register")},goToInfo:()=>{t.push("/info")}}}},WT={class:"home-page d-flex flex-column justify-content-center align-items-center min-vh-100"},zT={class:"auth-buttons"},KT={class:"info-button"};function GT(t,e,n,r,s,i){return te(),ne("div",WT,[e[3]||(e[3]=A("div",{class:"logo-container text-center mb-4"},[A("img",{src:qT,alt:"TripMaster Logo",class:"app-logo"})],-1)),e[4]||(e[4]=A("div",{class:"welcome-text text-center my-2"},[A("h1",null,"TripMaster"),A("p",{class:"slogan"},"Start your adventure today and make every journey unforgettable!")],-1)),A("div",zT,[A("button",{onClick:e[0]||(e[0]=(...o)=>r.goToLogin&&r.goToLogin(...o))},"Login"),A("button",{onClick:e[1]||(e[1]=(...o)=>r.goToRegister&&r.goToRegister(...o))},"Register")]),A("div",KT,[A("button",{onClick:e[2]||(e[2]=(...o)=>r.goToInfo&&r.goToInfo(...o))},"Find out more about the app and authors")])])}const QT=kt(HT,[["render",GT],["__scopeId","data-v-901e26bc"]]),JT=()=>{};var md={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new XT;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZT=function(t){const e=hm(t);return dm.encodeByteArray(e,!0)},jo=function(t){return ZT(t).replace(/\./g,"")},fm=function(t){try{return dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=()=>ew().__FIREBASE_DEFAULTS__,nw=()=>{if(typeof process>"u"||typeof md>"u")return;const t=md.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fm(t[1]);return e&&JSON.parse(e)},wa=()=>{try{return JT()||tw()||nw()||rw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pm=t=>{var e,n;return(n=(e=wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sw=t=>{const e=pm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mm=()=>{var t;return(t=wa())===null||t===void 0?void 0:t.config},gm=t=>{var e;return(e=wa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function lw(){var t;const e=(t=wa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dw(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fw(){return!lw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pw(){try{return typeof indexedDB=="object"}catch{return!1}}function mw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gw,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_w(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xn(s,l,r)}}function _w(t,e){return t.replace(yw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yw=/\{\$([^}]+)}/g;function vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gd(i)&&gd(o)){if(!Pr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ew(t,e){const n=new Tw(t,e);return n.subscribe.bind(n)}class Tw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ww(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pl),s.error===void 0&&(s.error=pl),s.complete===void 0&&(s.complete=pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ww(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bw(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(t){return t===Tr?void 0:t}function bw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const Sw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Pw=ve.INFO,Cw={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},kw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Cw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=Pw,this._logHandler=kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Dw=(t,e)=>e.some(n=>t instanceof n);let _d,yd;function Vw(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nw(){return yd||(yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _m=new WeakMap,Bl=new WeakMap,ym=new WeakMap,ml=new WeakMap,Oc=new WeakMap;function Ow(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_m.set(n,t)}).catch(()=>{}),Oc.set(e,t),e}function xw(t){if(Bl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bl.set(t,e)}let jl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mw(t){jl=t(jl)}function Lw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gl(this),e,...n);return ym.set(r,e.sort?e.sort():[e]),Xn(r)}:Nw().includes(t)?function(...e){return t.apply(gl(this),e),Xn(_m.get(this))}:function(...e){return Xn(t.apply(gl(this),e))}}function Uw(t){return typeof t=="function"?Lw(t):(t instanceof IDBTransaction&&xw(t),Dw(t,Vw())?new Proxy(t,jl):t)}function Xn(t){if(t instanceof IDBRequest)return Ow(t);if(ml.has(t))return ml.get(t);const e=Uw(t);return e!==t&&(ml.set(t,e),Oc.set(e,t)),e}const gl=t=>Oc.get(t);function Fw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Xn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xn(o.result),c.oldVersion,c.newVersion,Xn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Bw=["get","getKey","getAll","getAllKeys","count"],jw=["put","add","delete","clear"],_l=new Map;function vd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_l.get(e))return _l.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return _l.set(e,i),i}Mw(t=>({...t,get:(e,n,r)=>vd(e,n)||t.get(e,n,r),has:(e,n)=>!!vd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $l="@firebase/app",Ed="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Nc("@firebase/app"),Hw="@firebase/app-compat",Ww="@firebase/analytics-compat",zw="@firebase/analytics",Kw="@firebase/app-check-compat",Gw="@firebase/app-check",Qw="@firebase/auth",Jw="@firebase/auth-compat",Yw="@firebase/database",Xw="@firebase/data-connect",Zw="@firebase/database-compat",eI="@firebase/functions",tI="@firebase/functions-compat",nI="@firebase/installations",rI="@firebase/installations-compat",sI="@firebase/messaging",iI="@firebase/messaging-compat",oI="@firebase/performance",aI="@firebase/performance-compat",lI="@firebase/remote-config",cI="@firebase/remote-config-compat",uI="@firebase/storage",hI="@firebase/storage-compat",dI="@firebase/firestore",fI="@firebase/vertexai",pI="@firebase/firestore-compat",mI="firebase",gI="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="[DEFAULT]",_I={[$l]:"fire-core",[Hw]:"fire-core-compat",[zw]:"fire-analytics",[Ww]:"fire-analytics-compat",[Gw]:"fire-app-check",[Kw]:"fire-app-check-compat",[Qw]:"fire-auth",[Jw]:"fire-auth-compat",[Yw]:"fire-rtdb",[Xw]:"fire-data-connect",[Zw]:"fire-rtdb-compat",[eI]:"fire-fn",[tI]:"fire-fn-compat",[nI]:"fire-iid",[rI]:"fire-iid-compat",[sI]:"fire-fcm",[iI]:"fire-fcm-compat",[oI]:"fire-perf",[aI]:"fire-perf-compat",[lI]:"fire-rc",[cI]:"fire-rc-compat",[uI]:"fire-gcs",[hI]:"fire-gcs-compat",[dI]:"fire-fst",[pI]:"fire-fst-compat",[fI]:"fire-vertex","fire-js":"fire-js",[mI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Map,yI=new Map,Hl=new Map;function Td(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(Hl.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Hl.set(e,t);for(const n of $o.values())Td(n,t);for(const n of yI.values())Td(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Oi("app","Firebase",vI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=gI;function vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ql,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(n||(n=mm()),!n)throw Zn.create("no-options");const i=$o.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const o=new Rw(s);for(const c of Hl.values())o.addComponent(c);const l=new EI(n,r,o);return $o.set(s,l),l}function Em(t=ql){const e=$o.get(t);if(!e&&t===ql&&mm())return vm();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){var r;let s=(r=_I[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}hs(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="firebase-heartbeat-database",wI=1,Ti="firebase-heartbeat-store";let yl=null;function Tm(){return yl||(yl=Fw(TI,wI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),yl}async function II(t){try{const n=(await Tm()).transaction(Ti),r=await n.objectStore(Ti).get(wm(t));return await n.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function wd(t,e){try{const r=(await Tm()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,wm(t)),await r.done}catch(n){if(n instanceof xn)Cn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function wm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=1024,bI=30;class RI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Id();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>bI){const o=CI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Id(),{heartbeatsToSend:r,unsentEntries:s}=SI(this._heartbeatsCache.heartbeats),i=jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function Id(){return new Date().toISOString().substring(0,10)}function SI(t,e=AI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ad(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ad(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pw()?mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await II(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ad(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}function CI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){hs(new Cr("platform-logger",e=>new $w(e),"PRIVATE")),hs(new Cr("heartbeat",e=>new RI(e),"PRIVATE")),er($l,Ed,t),er($l,Ed,"esm2017"),er("fire-js","")}kI("");var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,Im;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(b,R,P){for(var T=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)T[Tt-2]=arguments[Tt];return y.prototype[R].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,w){w||(w=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;16>R;++R)b[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],R=I.g[2];var P=I.g[3],T=y+(P^w&(R^P))+b[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=P+(R^y&(w^R))+b[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(w^P&(y^w))+b[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(y^R&(P^y))+b[3]+3250441966&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(P^w&(R^P))+b[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=P+(R^y&(w^R))+b[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(w^P&(y^w))+b[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(y^R&(P^y))+b[7]+4249261313&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(P^w&(R^P))+b[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=P+(R^y&(w^R))+b[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(w^P&(y^w))+b[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(y^R&(P^y))+b[11]+2304563134&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(P^w&(R^P))+b[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=P+(R^y&(w^R))+b[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(w^P&(y^w))+b[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=w+(y^R&(P^y))+b[15]+1236535329&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(R^P&(w^R))+b[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(y^w))+b[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(P^y))+b[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(R^P))+b[0]+3921069994&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(w^R))+b[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(y^w))+b[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(P^y))+b[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(R^P))+b[4]+3889429448&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(w^R))+b[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(y^w))+b[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(P^y))+b[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(R^P))+b[8]+1163531501&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(w^R))+b[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^R&(y^w))+b[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(P^y))+b[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(R^P))+b[12]+2368359562&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(w^R^P)+b[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^R)+b[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^w)+b[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^y)+b[14]+4259657740&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(w^R^P)+b[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^R)+b[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^w)+b[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^y)+b[10]+3200236656&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(w^R^P)+b[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^R)+b[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^w)+b[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^y)+b[6]+76029189&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(w^R^P)+b[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^R)+b[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^w)+b[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=w+(R^P^y)+b[2]+3299628645&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(R^(w|~P))+b[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~R))+b[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~w))+b[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~y))+b[5]+4237533241&4294967295,w=R+(T<<21&4294967295|T>>>11),T=y+(R^(w|~P))+b[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~R))+b[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~w))+b[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~y))+b[1]+2240044497&4294967295,w=R+(T<<21&4294967295|T>>>11),T=y+(R^(w|~P))+b[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~R))+b[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~w))+b[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~y))+b[13]+1309151649&4294967295,w=R+(T<<21&4294967295|T>>>11),T=y+(R^(w|~P))+b[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~R))+b[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~w))+b[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=w+(P^(R|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,b=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=w;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<y;)if(b[R++]=I.charCodeAt(P++),R==this.blockSize){s(this,b),R=0;break}}else for(;P<y;)if(b[R++]=I[P++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var b=0;32>b;b+=8)I[w++]=this.g[y]>>>b&255;return I};function i(I,y){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],b=!0,R=I.length-1;0<=R;R--){var P=I[R]|0;b&&P==y||(w[R]=P,b=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return x(h(-I));for(var y=[],w=1,b=0;I>=w;b++)y[b]=I/w|0,w*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return x(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),b=p,R=0;R<I.length;R+=8){var P=Math.min(8,I.length-R),T=parseInt(I.substring(R,R+P),y);8>P?(P=h(Math.pow(y,P)),b=b.j(P).add(h(T))):(b=b.j(w),b=b.add(h(T)))}return b}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(V(this))return-x(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var b=this.i(w);I+=(0<=b?b:4294967296+b)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(V(this))return"-"+x(this).toString(I);for(var y=h(Math.pow(I,6)),w=this,b="";;){var R=K(w,y).g;w=H(w,R.j(y));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=R,k(w))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function V(I){return I.h==-1}t.l=function(I){return I=H(this,I),V(I)?-1:k(I)?0:1};function x(I){for(var y=I.g.length,w=[],b=0;b<y;b++)w[b]=~I.g[b];return new o(w,~I.h).add(g)}t.abs=function(){return V(this)?x(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0,R=0;R<=y;R++){var P=b+(this.i(R)&65535)+(I.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);b=T>>>16,P&=65535,T&=65535,w[R]=T<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function H(I,y){return I.add(x(y))}t.j=function(I){if(k(this)||k(I))return p;if(V(this))return V(I)?x(this).j(x(I)):x(x(this).j(I));if(V(I))return x(this.j(x(I)));if(0>this.l(_)&&0>I.l(_))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],b=0;b<2*y;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<I.g.length;R++){var P=this.i(b)>>>16,T=this.i(b)&65535,Tt=I.i(R)>>>16,Ut=I.i(R)&65535;w[2*b+2*R]+=T*Ut,j(w,2*b+2*R),w[2*b+2*R+1]+=P*Ut,j(w,2*b+2*R+1),w[2*b+2*R+1]+=T*Tt,j(w,2*b+2*R+1),w[2*b+2*R+2]+=P*Tt,j(w,2*b+2*R+2)}for(b=0;b<y;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=y;b<2*y;b++)w[b]=0;return new o(w,0)};function j(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function q(I,y){this.g=I,this.h=y}function K(I,y){if(k(y))throw Error("division by zero");if(k(I))return new q(p,p);if(V(I))return y=K(x(I),y),new q(x(y.g),x(y.h));if(V(y))return y=K(I,x(y)),new q(x(y.g),y.h);if(30<I.g.length){if(V(I)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,b=y;0>=b.l(I);)w=me(w),b=me(b);var R=ge(w,1),P=ge(b,1);for(b=ge(b,2),w=ge(w,2);!k(b);){var T=P.add(b);0>=T.l(I)&&(R=R.add(w),P=T),b=ge(b,1),w=ge(w,1)}return y=H(I,R.j(y)),new q(R,y)}for(R=p;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=h(w),T=P.j(y);V(T)||0<T.l(I);)w-=b,P=h(w),T=P.j(y);k(P)&&(P=g),R=R.add(P),I=H(I,T)}return new q(R,I)}t.A=function(I){return K(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0;b<y;b++)w[b]=this.i(b)&I.i(b);return new o(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0;b<y;b++)w[b]=this.i(b)|I.i(b);return new o(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],b=0;b<y;b++)w[b]=this.i(b)^I.i(b);return new o(w,this.h^I.h)};function me(I){for(var y=I.g.length+1,w=[],b=0;b<y;b++)w[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(w,I.h)}function ge(I,y){var w=y>>5;y%=32;for(var b=I.g.length-w,R=[],P=0;P<b;P++)R[P]=0<y?I.i(P+w)>>>y|I.i(P+w+1)<<32-y:I.i(P+w);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Im=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,tr=o}).apply(typeof bd<"u"?bd:typeof self<"u"?self:typeof window<"u"?window:{});var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Am,Js,bm,Io,Wl,Rm,Sm,Pm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ho=="object"&&ho];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var D=f++;return{value:u(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,D){for(var z=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)z[Oe-2]=arguments[Oe];return u.prototype[C].apply(m,z)}}function V(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function x(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,D=m.length||0;a.length=C+D;for(let z=0;z<D;z++)a[C+z]=m[z]}else a.push(m)}}class H{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var me=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ge(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Dt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Tt{constructor(){this.h=this.g=null}add(u,f){const m=Ut.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ut=new H(()=>new Ke,a=>a.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ye=!1,Dt=new Tt,Kt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(Ft)}};var Ft=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){P(f)}var u=Ut;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ye=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function nn(a,u){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(me){e:{try{K(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}k(nn,$e);var St={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,u,f,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,u,f,m,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=E(a,u,m,C);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new Q(u,this.src,D,!!m,C),u.fa=f,a.push(u)),u};function v(a,u){var f=u.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,u,void 0),D;(D=0<=C)&&Array.prototype.splice.call(m,C,1),D&&(ee(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function E(a,u,f,m){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==u&&D.capture==!!f&&D.ha==m)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),O={};function F(a,u,f,m,C){if(Array.isArray(u)){for(var D=0;D<u.length;D++)F(a,u[D],f,m,C);return null}return f=ce(f),a&&a[N]?a.K(u,f,h(m)?!!m.capture:!1,C):M(a,u,f,!1,m,C)}function M(a,u,f,m,C,D){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,Oe=J(a);if(Oe||(a[S]=Oe=new be(a)),f=Oe.add(u,f,m,z,D),f.proxy)return f;if(m=G(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Mn||(C=z),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(B(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return u.call(a.src,a.listener,f)}const u=ie;return a}function W(a,u,f,m,C){if(Array.isArray(u))for(var D=0;D<u.length;D++)W(a,u[D],f,m,C);else m=h(m)?!!m.capture:!!m,f=ce(f),a&&a[N]?(a=a.i,u=String(u).toString(),u in a.g&&(D=a.g[u],f=E(D,f,m,C),-1<f&&(ee(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,f,m,C)),(f=-1<a?u[a]:null)&&$(f))}function $(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[N])v(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(B(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(v(f,a),f.h==0&&(f.src=null,u[S]=null)):ee(a)}}}function B(a){return a in O?O[a]:O[a]="on"+a}function ie(a,u){if(a.da)a=!0;else{u=new nn(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&$(a),a=f.call(m,u)}return a}function J(a){return a=a[S],a instanceof be?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[re]||(a[re]=function(u){return a.handleEvent(u)}),a[re])}function oe(){je.call(this),this.i=new be(this),this.M=this,this.F=null}k(oe,je),oe.prototype[N]=!0,oe.prototype.removeEventListener=function(a,u,f,m){W(this,a,u,f,m)};function pe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new $e(u,a);else if(u instanceof $e)u.target=u.target||a;else{var C=u;u=new $e(m,a),b(u,C)}if(C=!0,f)for(var D=f.length-1;0<=D;D--){var z=u.g=f[D];C=Ie(z,m,!0,u)&&C}if(z=u.g=a,C=Ie(z,m,!0,u)&&C,C=Ie(z,m,!1,u)&&C,f)for(D=0;D<f.length;D++)z=u.g=f[D],C=Ie(z,m,!1,u)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)ee(f[m]);delete a.g[u],a.h--}}this.F=null},oe.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},oe.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Ie(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,D=0;D<u.length;++D){var z=u[D];if(z&&!z.da&&z.capture==f){var Oe=z.listener,rt=z.ha||z.src;z.fa&&v(a.i,z),C=Oe.call(rt,m)!==!1&&C}}return C&&!m.defaultPrevented}function at(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function tt(a){a.g=at(()=>{a.g=null,a.i&&(a.i=!1,tt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Bt extends je{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(a){je.call(this),this.h=a,this.g={}}k(lt,je);var Ln=[];function Ds(a){ge(a.g,function(u,f){this.g.hasOwnProperty(f)&&$(u)},a),a.g={}}lt.prototype.N=function(){lt.aa.N.call(this),Ds(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nt=l.JSON.stringify,jt=l.JSON.parse,zi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ba(){}Ba.prototype.h=null;function Cu(a){return a.h||(a.h=a.i())}function ku(){}var Vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ja(){$e.call(this,"d")}k(ja,$e);function $a(){$e.call(this,"c")}k($a,$e);var pr={},Du=null;function Ki(){return Du=Du||new oe}pr.La="serverreachability";function Vu(a){$e.call(this,pr.La,a)}k(Vu,$e);function Ns(a){const u=Ki();pe(u,new Vu(u))}pr.STAT_EVENT="statevent";function Nu(a,u){$e.call(this,pr.STAT_EVENT,a),this.stat=u}k(Nu,$e);function wt(a){const u=Ki();pe(u,new Nu(u,a))}pr.Ma="timingevent";function Ou(a,u){$e.call(this,pr.Ma,a),this.size=u}k(Ou,$e);function Os(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function xs(){this.g=!0}xs.prototype.xa=function(){this.g=!1};function K_(a,u,f,m,C,D){a.info(function(){if(a.g)if(D)for(var z="",Oe=D.split("&"),rt=0;rt<Oe.length;rt++){var Re=Oe[rt].split("=");if(1<Re.length){var ct=Re[0];Re=Re[1];var ut=ct.split("_");z=2<=ut.length&&ut[1]=="type"?z+(ct+"="+Re+"&"):z+(ct+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+z})}function G_(a,u,f,m,C,D,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+D+" "+z})}function Br(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+J_(a,f)+(m?" "+m:"")})}function Q_(a,u){a.info(function(){return"TIMEOUT: "+u})}xs.prototype.info=function(){};function J_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return nt(f)}catch{return u}}var Gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qa;function Qi(){}k(Qi,Ba),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},qa=new Qi;function Un(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mu}function Mu(){this.i=null,this.g="",this.h=!1}var Lu={},Ha={};function Wa(a,u,f){a.L=1,a.v=Zi(gn(u)),a.m=f,a.P=!0,Uu(a,null)}function Uu(a,u){a.F=Date.now(),Ji(a),a.A=gn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Xu(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Mu,a.g=gh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Bt(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ln[0]=C.toString()),C=Ln);for(var D=0;D<C.length;D++){var z=F(f,C[D],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ns(),K_(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const u=this.M;u&&_n(a)==3?u.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const ut=_n(this.g);var u=this.g.Ba();const qr=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||ih(this.g)))){this.J||ut!=4||u==7||(u==8||0>=qr?Ns(3):Ns(2)),za(this);var f=this.g.Z();this.X=f;t:if(Fu(this)){var m=ih(this.g);a="";var C=m.length,D=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Ms(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(D&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,G_(this.i,this.u,this.A,this.l,this.R,ut,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,rt=this.g;if((Oe=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Oe)){var Re=Oe;break t}}Re=null}if(f=Re)Br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ka(this,f);else{this.o=!1,this.s=3,wt(12),mr(this),Ms(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<z.length;)if(Gt=Y_(this,z),Gt==Ha){ut==4&&(this.s=4,wt(14),f=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Lu){this.s=4,wt(15),Br(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Br(this.i,this.l,Gt,null),Ka(this,Gt);if(Fu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||z.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)Br(this.i,this.l,z,"[Invalid Chunked Response]"),mr(this),Ms(this);else if(0<z.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Za(ct),ct.M=!0,wt(11))}}else Br(this.i,this.l,z,null),Ka(this,z);ut==4&&mr(this),this.o&&!this.J&&(ut==4?dh(this.j,this):(this.o=!1,Ji(this)))}else py(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),mr(this),Ms(this)}}}catch{}finally{}};function Fu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Y_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Ha:(f=Number(u.substring(f,m)),isNaN(f)?Lu:(m+=1,m+f>u.length?Ha:(u=u.slice(m,m+f),a.C=m+f,u)))}Un.prototype.cancel=function(){this.J=!0,mr(this)};function Ji(a){a.S=Date.now()+a.I,Bu(a,a.I)}function Bu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Os(g(a.ba,a),u)}function za(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Q_(this.i,this.A),this.L!=2&&(Ns(),wt(17)),mr(this),this.s=2,Ms(this)):Bu(this,this.S-a)};function Ms(a){a.j.G==0||a.J||dh(a.j,a)}function mr(a){za(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ds(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ka(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ga(f.h,a))){if(!a.K&&Ga(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)io(f),ro(f);else break e;Xa(f),wt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Os(g(f.Za,f),6e3));if(1>=qu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else _r(f,11)}else if((a.K||f.g==a)&&io(f),!j(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Re=C[u];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const ct=Re[3];ct!=null&&(f.la=ct,f.j.info("VER="+f.la));const ut=Re[4];ut!=null&&(f.Aa=ut,f.j.info("SVER="+f.Aa));const qr=Re[5];qr!=null&&typeof qr=="number"&&0<qr&&(m=1.5*qr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Gt=a.g;if(Gt){const ao=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ao){var D=m.h;D.g||ao.indexOf("spdy")==-1&&ao.indexOf("quic")==-1&&ao.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Qa(D,D.h),D.h=null))}if(m.D){const el=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;el&&(m.ya=el,Ue(m.I,m.D,el))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var z=a;if(m.qa=mh(m,m.J?m.ia:null,m.W),z.K){Hu(m.h,z);var Oe=z,rt=m.L;rt&&(Oe.I=rt),Oe.B&&(za(Oe),Ji(Oe)),m.g=z}else uh(m);0<f.i.length&&so(f)}else Re[0]!="stop"&&Re[0]!="close"||_r(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?_r(f,7):Ya(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}Ns(4)}catch{}}var X_=class{constructor(a,u){this.g=a,this.map=u}};function ju(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $u(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qu(a){return a.h?1:a.g?a.g.size:0}function Ga(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Qa(a,u){a.g?a.g.add(u):a.h=u}function Hu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ju.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return V(a.i)}function Z_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function ey(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function zu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=ey(a),m=Z_(a),C=m.length,D=0;D<C;D++)u.call(void 0,m[D],f&&f[D],a)}var Ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ty(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var D=a[f].substring(0,m);C=a[f].substring(m+1)}else D=a[f];u(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Yi(this,a.j),this.o=a.o,this.g=a.g,Xi(this,a.s),this.l=a.l;var u=a.i,f=new Fs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Gu(this,f),this.m=a.m}else a&&(u=String(a).match(Ku))?(this.h=!1,Yi(this,u[1]||"",!0),this.o=Ls(u[2]||""),this.g=Ls(u[3]||"",!0),Xi(this,u[4]),this.l=Ls(u[5]||"",!0),Gu(this,u[6]||"",!0),this.m=Ls(u[7]||"")):(this.h=!1,this.i=new Fs(null,this.h))}gr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Us(u,Qu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Us(u,Qu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Us(f,f.charAt(0)=="/"?sy:ry,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Us(f,oy)),a.join("")};function gn(a){return new gr(a)}function Yi(a,u,f){a.j=f?Ls(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Xi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Gu(a,u,f){u instanceof Fs?(a.i=u,ay(a.i,a.h)):(f||(u=Us(u,iy)),a.i=new Fs(u,a.h))}function Ue(a,u,f){a.i.set(u,f)}function Zi(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ls(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,ny),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ny(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qu=/[#\/\?@]/g,ry=/[#\?:]/g,sy=/[#\?]/g,iy=/[#\?@]/g,oy=/#/g;function Fs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&ty(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Fs.prototype,t.add=function(a,u){Fn(this),this.i=null,a=jr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Ju(a,u){Fn(a),u=jr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Yu(a,u){return Fn(a),u=jr(a,u),a.g.has(u)}t.forEach=function(a,u){Fn(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const C=a[m];for(let D=0;D<C.length;D++)f.push(u[m])}return f},t.V=function(a){Fn(this);let u=[];if(typeof a=="string")Yu(this,a)&&(u=u.concat(this.g.get(jr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Fn(this),this.i=null,a=jr(this,a),Yu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Xu(a,u,f){Ju(a,u),0<f.length&&(a.i=null,a.g.set(jr(a,u),V(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const D=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var C=D;z[m]!==""&&(C+="="+encodeURIComponent(String(z[m]))),a.push(C)}}return this.i=a.join("&")};function jr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ay(a,u){u&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(Ju(this,m),Xu(this,C,f))},a)),a.j=u}function ly(a,u){const f=new xs;if(l.Image){const m=new Image;m.onload=_(Bn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Bn,f,"TestLoadImage: error",!1,u,m),m.onabort=_(Bn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Bn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function cy(a,u){const f=new xs,m=new AbortController,C=setTimeout(()=>{m.abort(),Bn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(C),D.ok?Bn(f,"TestPingServer: ok",!0,u):Bn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Bn(f,"TestPingServer: error",!1,u)})}function Bn(a,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function uy(){this.g=new zi}function hy(a,u,f){const m=f||"";try{zu(a,function(C,D){let z=C;h(C)&&(z=nt(C)),u.push(m+D+"="+encodeURIComponent(z))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function eo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(eo,Ba),eo.prototype.g=function(){return new to(this.l,this.j)},eo.prototype.i=function(a){return function(){return a}}({});function to(a,u){oe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(to,oe),t=to.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Bs(this):js(this),this.readyState==3&&Zu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Qa=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,js(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(to.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function eh(a){let u="";return ge(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ja(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=eh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,u,f))}function He(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(He,oe);var dy=/^https?$/i,fy=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qa.g(),this.v=this.o?Cu(this.o):Cu(qa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(D){th(this,D);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())f.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fy,u,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){th(this,D)}};function th(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,nh(a),no(a)}function nh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),no(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),no(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rh(this):this.bb())},t.bb=function(){rh(this)};function rh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)at(a.Ea,0,a);else if(pe(a,"readystatechange"),_n(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=z===0){var C=String(a.D).match(Ku)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!dy.test(C?C.toLowerCase():"")}f=m}if(f)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var D=2<_n(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",nh(a)}}finally{no(a)}}}}function no(a,u){if(a.g){sh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||pe(a,"ready");try{f.onreadystatechange=m}catch{}}}function sh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),jt(u)}};function ih(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function py(a){const u={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var f=R(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=u[C]||[];u[C]=D,D.push(f)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function oh(a){this.Aa=0,this.i=[],this.j=new xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$s("baseRetryDelayMs",5e3,a),this.cb=$s("retryDelaySeedMs",1e4,a),this.Wa=$s("forwardChannelMaxRetries",2,a),this.wa=$s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ju(a&&a.concurrentRequestLimit),this.Da=new uy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=oh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){wt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=mh(this,null,this.W),so(this)};function Ya(a){if(ah(a),a.G==3){var u=a.U++,f=gn(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",u),Ue(f,"TYPE","terminate"),qs(a,f),u=new Un(a,a.j,u),u.L=2,u.v=Zi(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=gh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ji(u)}ph(a)}function ro(a){a.g&&(Za(a),a.g.cancel(),a.g=null)}function ah(a){ro(a),a.u&&(l.clearTimeout(a.u),a.u=null),io(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function so(a){if(!$u(a.h)&&!a.s){a.s=!0;var u=a.Ga;we||Kt(),ye||(we(),ye=!0),Dt.add(u,a),a.B=0}}function my(a,u){return qu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Os(g(a.Ga,a,u),fh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Un(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=ch(this,C,u),f=gn(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),qs(this,f),D&&(this.O?u="headers="+encodeURIComponent(String(eh(D)))+"&"+u:this.m&&Ja(f,this.m,D)),Qa(this.h,C),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",u),Ue(f,"SID","null"),C.T=!0,Wa(C,f,null)):Wa(C,f,u),this.G=2}}else this.G==3&&(a?lh(this,a):this.i.length==0||$u(this.h)||lh(this))};function lh(a,u){var f;u?f=u.l:f=a.U++;const m=gn(a.I);Ue(m,"SID",a.K),Ue(m,"RID",f),Ue(m,"AID",a.T),qs(a,m),a.m&&a.o&&Ja(m,a.m,a.o),f=new Un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ch(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qa(a.h,f),Wa(f,m,u)}function qs(a,u){a.H&&ge(a.H,function(f,m){Ue(u,m,f)}),a.l&&zu({},function(f,m){Ue(u,m,f)})}function ch(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=C[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Oe=!0;for(let rt=0;rt<f;rt++){let Re=C[rt].g;const ct=C[rt].map;if(Re-=D,0>Re)D=Math.max(0,C[rt].g-100),Oe=!1;else try{hy(ct,z,"req"+Re+"_")}catch{m&&m(ct)}}if(Oe){m=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function uh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;we||Kt(),ye||(we(),ye=!0),Dt.add(u,a),a.v=0}}function Xa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Os(g(a.Fa,a),fh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,hh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Os(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),ro(this),hh(this))};function Za(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function hh(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=gn(a.qa);Ue(u,"RID","rpc"),Ue(u,"SID",a.K),Ue(u,"AID",a.T),Ue(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(u,"TO",a.ja),Ue(u,"TYPE","xmlhttp"),qs(a,u),a.m&&a.o&&Ja(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zi(gn(u)),f.m=null,f.P=!0,Uu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ro(this),Xa(this),wt(19))};function io(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function dh(a,u){var f=null;if(a.g==u){io(a),Za(a),a.g=null;var m=2}else if(Ga(a.h,u))f=u.D,Hu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=Ki(),pe(m,new Ou(m,f)),so(a)}else uh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&my(a,u)||m==2&&Xa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),C){case 1:_r(a,5);break;case 4:_r(a,10);break;case 3:_r(a,6);break;default:_r(a,2)}}}function fh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function _r(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const C=!m;m=new gr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yi(m,"https"),Zi(m),C?ly(m.toString(),f):cy(m.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(u),ph(a),ah(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function ph(a){if(a.G=0,a.ka=[],a.l){const u=Wu(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function mh(a,u,f){var m=f instanceof gr?gn(f):new gr(f);if(m.g!="")u&&(m.g=u+"."+m.g),Xi(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var D=new gr(null);m&&Yi(D,m),u&&(D.g=u),C&&Xi(D,C),f&&(D.l=f),m=D}return f=a.D,u=a.ya,f&&u&&Ue(m,f,u),Ue(m,"VER",a.la),qs(a,m),m}function gh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new He(new eo({eb:f})):new He(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _h(){}t=_h.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oo(){}oo.prototype.g=function(a,u){return new Vt(a,u)};function Vt(a,u){oe.call(this),this.g=new oh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new $r(this)}k(Vt,oe),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Ya(this.g)},Vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=nt(a),a=f);u.i.push(new X_(u.Ya++,a)),u.G==3&&so(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Ya(this.g),delete this.g,Vt.aa.N.call(this)};function yh(a){ja.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(yh,ja);function vh(){$a.call(this),this.status=1}k(vh,$a);function $r(a){this.g=a}k($r,_h),$r.prototype.ua=function(){pe(this.g,"a")},$r.prototype.ta=function(a){pe(this.g,new yh(a))},$r.prototype.sa=function(a){pe(this.g,new vh)},$r.prototype.ra=function(){pe(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Pm=function(){return new oo},Sm=function(){return Ki()},Rm=pr,Wl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,Io=Gi,xu.COMPLETE="complete",bm=xu,ku.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Js=ku,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,Am=He}).apply(typeof ho<"u"?ho:typeof self<"u"?self:typeof window<"u"?window:{});const Rd="@firebase/firestore",Sd="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Nc("@firebase/firestore");function Kr(){return kr.logLevel}function X(t,...e){if(kr.logLevel<=ve.DEBUG){const n=e.map(Mc);kr.debug(`Firestore (${As}): ${t}`,...n)}}function kn(t,...e){if(kr.logLevel<=ve.ERROR){const n=e.map(Mc);kr.error(`Firestore (${As}): ${t}`,...n)}}function ds(t,...e){if(kr.logLevel<=ve.WARN){const n=e.map(Mc);kr.warn(`Firestore (${As}): ${t}`,...n)}}function Mc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function Ne(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class VI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NI{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new Cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new dt(e)}}class OI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class xI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new OI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MI{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,xt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Pd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new Pd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=LI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function zl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=km(),o=UI(i.encode(Cd(t,n)),i.encode(Cd(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function Cd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function UI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function fs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=-62135596800,Dd=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Dd);return new Xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<kd)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dd}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-kd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Xe(0,0))}static max(){return new he(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):zl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tr.fromString(e.substring(4,e.length-2))}}class Fe extends on{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const FI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends on{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return FI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vd}static keyField(){return new it([Vd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Fe.fromString(e))}static fromName(e){return new se(Fe.fromString(e).popFirst(5))}static empty(){return new se(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=-1;function BI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new rr(s,se.empty(),e)}function jI(t){return new rr(t.readTime,t.key,wi)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(he.min(),se.empty(),wi)}static max(){return new rr(he.max(),se.empty(),wi)}}function $I(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==qI)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function WI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ia.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=-1;function Aa(t){return t==null}function qo(t){return t===0&&1/t==-1/0}function zI(t){return typeof t=="number"&&Number.isInteger(t)&&!qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="";function KI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Nd(e)),e=GI(t.get(n),e);return Nd(e)}function GI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Vm:n+="";break;default:n+=i}}return n}function Nd(t){return t+Vm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new Ze(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Om("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const QI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=QI.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="server_timestamp",Mm="__type__",Lm="__previous_value__",Um="__local_write_time__";function Uc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mm])===null||n===void 0?void 0:n.stringValue)===xm}function ba(t){const e=t.mapValue.fields[Lm];return Uc(e)?ba(e):e}function Ii(t){const e=sr(t.mapValue.fields[Um].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const Ho="(default)";class Ai{constructor(e,n){this.projectId=e,this.database=n||Ho}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database===Ho}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="__type__",YI="__max__",po={mapValue:{}},Bm="__vector__",Wo="value";function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uc(t)?4:ZI(t)?9007199254740991:XI(t)?10:11:ue()}function mn(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ii(t).isEqual(Ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),l=sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ir(s.bytesValue).isEqual(ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),l=We(i.doubleValue);return o===l?qo(o)===qo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Od(o)!==Od(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!mn(o[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function bi(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=We(i.integerValue||i.doubleValue),c=We(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Md(t.timestampValue,e.timestampValue);case 4:return Md(Ii(t),Ii(e));case 5:return zl(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ir(i),c=ir(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=_e(l[h],c[h]);if(d!==0)return d}return _e(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=_e(We(i.latitude),We(o.latitude));return l!==0?l:_e(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ld(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},g=o.fields||{},_=(l=p[Wo])===null||l===void 0?void 0:l.arrayValue,k=(c=g[Wo])===null||c===void 0?void 0:c.arrayValue,V=_e(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:Ld(_,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===po.mapValue&&o===po.mapValue)return 0;if(i===po.mapValue)return 1;if(o===po.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=zl(c[p],d[p]);if(g!==0)return g;const _=ps(l[c[p]],h[d[p]]);if(_!==0)return _}return _e(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=sr(t),r=sr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Ld(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ps(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function ms(t){return Kl(t)}function Kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kl(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Ao(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ba(t);return e?16+Ao(e):16;case 5:return 2*t.stringValue.length;case 6:return ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ao(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Mr(r.fields,(i,o)=>{s+=i.length+Ao(o)}),s}(t.mapValue);default:throw ue()}}function Ud(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gl(t){return!!t&&"integerValue"in t}function Fc(t){return!!t&&"arrayValue"in t}function Fd(t){return!!t&&"nullValue"in t}function Bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bo(t){return!!t&&"mapValue"in t}function XI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fm])===null||n===void 0?void 0:n.stringValue)===Bm}function li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=li(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===YI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=li(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=li(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(li(this.value))}}function jm(t){const e=[];return Mr(t.fields,(n,r)=>{const s=new it([n]);if(bo(r)){const i=jm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,he.min(),he.min(),he.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,he.min(),he.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,he.min(),he.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.position=e,this.inclusive=n}}function jd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function eA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{}class Qe extends $m{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nA(e,n,r):n==="array-contains"?new iA(e,r):n==="in"?new oA(e,r):n==="not-in"?new aA(e,r):n==="array-contains-any"?new lA(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rA(e,r):new sA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ps(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends $m{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new tn(e,n)}matches(e){return qm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function qm(t){return t.op==="and"}function Hm(t){return tA(t)&&qm(t)}function tA(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Ql(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(Hm(t))return t.filters.map(e=>Ql(e)).join(",");{const e=t.filters.map(n=>Ql(n)).join(",");return`${t.op}(${e})`}}function Wm(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Wm(o,s.filters[l]),!0):!1}(t,e):void ue()}function zm(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(zm).join(" ,")+"}"}(t):"Filter"}class nA extends Qe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class rA extends Qe{constructor(e,n){super(e,"in",n),this.keys=Km("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sA extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Km("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Km(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class iA extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fc(n)&&bi(n.arrayValue,this.value)}}class oA extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bi(this.value.arrayValue,n)}}class aA extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bi(this.value.arrayValue,n)}}class lA extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new cA(t,e,n,r,s,i,o)}function Bc(t){const e=de(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ql(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.le=n}return e.le}function jc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$d(t.startAt,e.startAt)&&$d(t.endAt,e.endAt)}function Jl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function uA(t,e,n,r,s,i,o,l){return new Mi(t,e,n,r,s,i,o,l)}function $c(t){return new Mi(t)}function Hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Gm(t){return t.collectionGroup!==null}function ci(t){const e=de(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(it.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Ko(i,r))}),n.has(it.keyField().canonicalString())||e.he.push(new Ko(it.keyField(),r))}return e.he}function un(t){const e=de(t);return e.Pe||(e.Pe=hA(e,ci(t))),e.Pe}function hA(t,e){if(t.limitType==="F")return qd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ko(s.field,i)});const n=t.endAt?new zo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zo(t.startAt.position,t.startAt.inclusive):null;return qd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yl(t,e){const n=t.filters.concat([e]);return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xl(t,e,n){return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ra(t,e){return jc(un(t),un(e))&&t.limitType===e.limitType}function Qm(t){return`${Bc(un(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>zm(s)).join(", ")}]`),Aa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ms(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=jd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ci(r),s)||r.endAt&&!function(o,l,c){const h=jd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ci(r),s))}(t,e)}function dA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jm(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=fA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function fA(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ps(c,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Nm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new qe(se.comparator);function Dn(){return pA}const Ym=new qe(se.comparator);function Ys(...t){let e=Ym;for(const n of t)e=e.insert(n.key,n);return e}function Xm(t){let e=Ym;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return ui()}function Zm(){return ui()}function ui(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const mA=new qe(se.comparator),gA=new Ze(se.comparator);function Te(...t){let e=gA;for(const n of t)e=e.add(n);return e}const _A=new Ze(_e);function yA(){return _A}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(e)?"-0":e}}function eg(t){return{integerValue:""+t}}function vA(t,e){return zI(e)?eg(e):qc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this._=void 0}}function EA(t,e,n){return t instanceof Go?function(s,i){const o={fields:{[Mm]:{stringValue:xm},[Um]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uc(i)&&(i=ba(i)),i&&(o.fields[Lm]=i),{mapValue:o}}(n,e):t instanceof Ri?ng(t,e):t instanceof Si?rg(t,e):function(s,i){const o=tg(s,i),l=Wd(o)+Wd(s.Ie);return Gl(o)&&Gl(s.Ie)?eg(l):qc(s.serializer,l)}(t,e)}function TA(t,e,n){return t instanceof Ri?ng(t,e):t instanceof Si?rg(t,e):n}function tg(t,e){return t instanceof Qo?function(r){return Gl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Go extends Pa{}class Ri extends Pa{constructor(e){super(),this.elements=e}}function ng(t,e){const n=sg(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Si extends Pa{constructor(e){super(),this.elements=e}}function rg(t,e){let n=sg(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class Qo extends Pa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Wd(t){return We(t.integerValue||t.doubleValue)}function sg(t){return Fc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Si&&s instanceof Si?fs(r.elements,s.elements,mn):r instanceof Qo&&s instanceof Qo?mn(r.Ie,s.Ie):r instanceof Go&&s instanceof Go}(t.transform,e.transform)}class IA{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hc(t.key,Xt.none()):new Li(t.key,t.data,Xt.none());{const n=t.data,r=qt.empty();let s=new Ze(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ur(t.key,r,new Qt(s.toArray()),Xt.none())}}function AA(t,e,n){t instanceof Li?function(s,i,o){const l=s.value.clone(),c=Kd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(s,i,o){if(!Ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Kd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(og(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hi(t,e,n,r){return t instanceof Li?function(i,o,l,c){if(!Ro(i.precondition,o))return l;const h=i.value.clone(),d=Gd(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(i,o,l,c){if(!Ro(i.precondition,o))return l;const h=Gd(i.fieldTransforms,c,o),d=o.data;return d.setAll(og(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=tg(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function zd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fs(r,s,(i,o)=>wA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Li extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ur extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function og(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kd(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,TA(o,l,n[s]))}return r}function Gd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,EA(i,o,e))}return r}class Hc extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RA extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=ig(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>zd(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>zd(n,r))}}class Wc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return mA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Ae;function kA(t){switch(t){case U.OK:return ue();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ue()}}function ag(t){if(t===void 0)return kn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ge.OK:return U.OK;case Ge.CANCELLED:return U.CANCELLED;case Ge.UNKNOWN:return U.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return U.INTERNAL;case Ge.UNAVAILABLE:return U.UNAVAILABLE;case Ge.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ge.NOT_FOUND:return U.NOT_FOUND;case Ge.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ge.ABORTED:return U.ABORTED;case Ge.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ge.DATA_LOSS:return U.DATA_LOSS;default:return ue()}}(Ae=Ge||(Ge={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new tr([4294967295,4294967295],0);function Qd(t){const e=km().encode(t),n=new Im;return n.update(e),new Uint8Array(n.digest())}function Jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tr([n,r],0),new tr([s,i],0)]}class zc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=tr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(tr.fromNumber(r)));return s.compare(DA)===1&&(s=new tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Qd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Qd(e),[r,s]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ka(he.min(),s,new qe(_e),Dn(),Te())}}class Ui{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ui(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class lg{constructor(e,n){this.targetId=e,this.ge=n}}class cg{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Yd{constructor(){this.pe=0,this.ye=Xd(),this.we=ot.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Te(),n=Te(),r=Te();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Ui(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Xd()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ne(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class VA{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Dn(),this.$e=mo(),this.Ue=mo(),this.Ke=new qe(_e)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Jl(i))if(r===0){const o=new se(i.path);this.ze(n,o,gt.newNoDocument(o,he.min()))}else Ne(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ir(r).toUint8Array()}catch(c){if(c instanceof Om)return ds("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zc(o,s,i)}catch(c){return ds(c instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&Jl(l.target)){const c=new se(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,gt.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Te();this.Ue.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new ka(e,n,this.Ke,this.Qe,r);return this.Qe=Dn(),this.$e=mo(),this.Ue=mo(),this.Ke=new qe(_e),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Yd,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Ze(_e),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ze(_e),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Yd),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function mo(){return new qe(se.comparator)}function Xd(){return new qe(se.comparator)}const NA={asc:"ASCENDING",desc:"DESCENDING"},OA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xA={and:"AND",or:"OR"};class MA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zl(t,e){return t.useProto3Json||Aa(e)?e:{value:e}}function Jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ug(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LA(t,e){return Jo(t,e.toTimestamp())}function hn(t){return Ne(!!t),he.fromTimestamp(function(n){const r=sr(n);return new Xe(r.seconds,r.nanos)}(t))}function Kc(t,e){return ec(t,e).canonicalString()}function ec(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hg(t){const e=Fe.fromString(t);return Ne(gg(e)),e}function tc(t,e){return Kc(t.databaseId,e.path)}function vl(t,e){const n=hg(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(fg(n))}function dg(t,e){return Kc(t.databaseId,e)}function UA(t){const e=hg(t);return e.length===4?Fe.emptyPath():fg(e)}function nc(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fg(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zd(t,e,n){return{name:tc(t,e),fields:n.value.mapValue.fields}}function FA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ne(d===void 0||typeof d=="string"),ot.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ot.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?U.UNKNOWN:ag(h.code);return new Z(d,h.message||"")}(o);n=new cg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vl(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):he.min(),l=new qt({mapValue:{fields:r.document.fields}}),c=gt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new So(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vl(t,r.document),i=r.readTime?hn(r.readTime):he.min(),o=gt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new So([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vl(t,r.document),i=r.removedTargetIds||[];n=new So([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new CA(s,i),l=r.targetId;n=new lg(l,o)}}return n}function BA(t,e){let n;if(e instanceof Li)n={update:Zd(t,e.key,e.value)};else if(e instanceof Hc)n={delete:tc(t,e.key)};else if(e instanceof Ur)n={update:Zd(t,e.key,e.data),updateMask:QA(e.fieldMask)};else{if(!(e instanceof RA))return ue();n={verify:tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:LA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function jA(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(he.min())&&(o=hn(i)),new IA(o,s.transformResults||[])}(n,e))):[]}function $A(t,e){return{documents:[dg(t,e.path)]}}function qA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dg(t,s);const i=function(h){if(h.length!==0)return mg(tn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Qr(g.field),direction:zA(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function HA(t){let e=UA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=pg(p);return g instanceof tn&&Hm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new Ko(Jr(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Aa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new zo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new zo(_,g)}(n.endAt)),uA(e,s,o,i,l,"F",c,h)}function WA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>pg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function zA(t){return NA[t]}function KA(t){return OA[t]}function GA(t){return xA[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return it.fromServerFormat(t.fieldPath)}function mg(t){return t instanceof Qe?function(n){if(n.op==="=="){if(Bd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(Fd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(Fd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:KA(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>mg(s));return r.length===1?r[0]:{compositeFilter:{op:GA(n.op),filters:r}}}(t):ue()}function QA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,s,i=he.min(),o=he.min(),l=ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.Tt=e}}function YA(t){const e=HA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.Tn=new ZA}addToCollectionParentIndex(e,n){return this.Tn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(rr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class ZA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_g=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(_g,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new gs(0)}static Kn(){return new gs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="LruGarbageCollector",eb=1048576;function nf([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class tb{constructor(e){this.Hn=e,this.buffer=new Ze(nf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(tf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Rs(n)?X(tf,"Ignoring IndexedDB error during garbage collection: ",n):await bs(n)}await this.er(3e5)})}}class rb{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ia.ae);const r=new tb(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ef)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ef):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Kr()<=ve.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function sb(t,e){return new rb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&hi(r.mutation,s,Qt.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ys();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Dn();const o=ui(),l=function(){return ui()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Ur)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),hi(d.mutation,h,d.mutation.getFieldMask(),Xe.now())):o.set(h.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new ob(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ui();let s=new qe((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Qt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Zm();d.forEach(g=>{if(!i.has(g)){const _=ig(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(wr());let l=wi,c=i;return o.next(h=>L.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Te())).next(d=>({batchId:l,changes:Xm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(p,g){return new Mi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let l=Ys();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&hi(d.mutation,h,Qt.empty(),Xe.now()),Sa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return L.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:YA(s.bundledQuery),readTime:hn(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(){this.overlays=new qe(se.comparator),this.Rr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=wr(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=wr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PA(n,r));let i=this.Rr.get(n);i===void 0&&(i=Te(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.Vr=new Ze(et.mr),this.gr=new Ze(et.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new et(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new se(new Fe([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new se(new Fe([])),r=new et(n,e),s=new et(n,e+1);let i=Te();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return se.comparator(e.key,n.key)||_e(e.Cr,n.Cr)}static pr(e,n){return _e(e.Cr,n.Cr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ze(et.mr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new et(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Lc:this.Fr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(_e);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),L.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new et(new se(i),0);let l=new Ze(_e);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},o),L.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return L.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new et(n,0),s=this.Mr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.kr=e,this.docs=function(){return new qe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||$I(jI(d),r)<=0||(s.has(d.key)||Sa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}qr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fb(this)}getSize(e){return L.resolve(this.size)}}class fb extends ib{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.persistence=e,this.Qr=new Lr(n=>Bc(n),jc),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Gc,this.targetCount=0,this.Kr=gs.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),L.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.zn(n),L.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ia(0),this.zr=!1,this.zr=!0,this.jr=new ub,this.referenceDelegate=e(this),this.Hr=new pb(this),this.indexManager=new XA,this.remoteDocumentCache=function(s){return new db(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new JA(n),this.Yr=new lb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new hb(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new mb(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return L.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class mb extends HI{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.ti=new Gc,this.ni=null}static ri(e){return new Qc(e)}get ii(){if(this.ni)return this.ni;throw ue()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),L.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ii,r=>{const s=se.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return L.or([()=>L.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Yo{constructor(e,n){this.persistence=e,this.oi=new Lr(r=>KI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=sb(this,n)}static ri(e,n){return new Yo(e,n)}Zr(){}Xr(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return L.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ao(e.data.value)),n}ar(e,n,r){return L.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return fw()?8:WI(Et())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new gb;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Kr()<=ve.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),L.resolve()):(Kr()<=ve.DEBUG&&X("QueryEngine","Query:",Gr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Kr()<=ve.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):L.resolve())}rs(e,n){if(Hd(n))return L.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xl(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,o,c.readTime)?this.rs(e,Xl(n,null,"F")):this.hs(e,h,n,c)}))})))}ss(e,n,r,s){return Hd(n)||s.isEqual(he.min())?L.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?L.resolve(null):(Kr()<=ve.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gr(n)),this.hs(e,o,n,BI(s,wi)).next(l=>l))})}cs(e,n){let r=new Ze(Jm(e));return n.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Kr()<=ve.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.ns.getDocumentsMatchingQuery(e,n,rr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="LocalStore",yb=3e8;class vb{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new qe(_e),this.Is=new Lr(i=>Bc(i),jc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ab(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function Eb(t,e,n,r){return new vb(t,e,n,r)}async function vg(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Te();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Tb(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let _=L.resolve();return g.forEach(k=>{_=_.next(()=>d.getEntry(c,k)).next(V=>{const x=h.docVersions.get(k);Ne(x!==null),V.version.compareTo(x)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Eg(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function wb(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(V,x,H){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=yb?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(g,_,d)&&l.push(n.Hr.updateTargetData(i,_))});let c=Dn(),h=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Ib(i,o,e.documentUpdates).next(d=>{c=d.Vs,h=d.fs})),!r.isEqual(he.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ts=s,i))}function Ib(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(Yc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function Ab(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Lc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bb(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function rc(t,e,n){const r=de(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Rs(o))throw o;X(Yc,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function rf(t,e,n){const r=de(t);let s=he.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=de(c),g=p.Is.get(d);return g!==void 0?L.resolve(p.Ts.get(g)):p.Hr.getTargetData(h,d)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Te())).next(l=>(Rb(r,dA(e),l),{documents:l,gs:i})))}function Rb(t,e,n){let r=t.Es.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class sf{constructor(){this.activeTargetIds=yA()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sb{constructor(){this.ho=new sf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new sf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="ConnectivityMonitor";class af{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(of,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(of,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go=null;function sc(){return go===null?go=function(){return 268435456+Math.round(2147483648*Math.random())}():go++,"0x"+go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="RestConnection",Cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kb{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ho?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=sc(),l=this.bo(e,n.toUriEncodedString());X(El,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(h=>(X(El,`Received RPC '${e}' ${o}: `,h),h),h=>{throw ds(El,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=Cb[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Vb extends kb{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=sc();return new Promise((o,l)=>{const c=new Am;c.setWithCredentials(!0),c.listenOnce(bm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Io.NO_ERROR:const d=c.getResponseJson();X(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Io.TIMEOUT:X(ht,`RPC '${e}' ${i} timed out`),l(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const p=c.getStatus();if(X(ht,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const k=function(x){const H=x.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(H)>=0?H:U.UNKNOWN}(_.status);l(new Z(k,_.message))}else l(new Z(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(U.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{X(ht,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(ht,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=sc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Pm(),l=Sm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(ht,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,_=!1;const k=new Db({Fo:x=>{_?X(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(X(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(ht,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Mo:()=>p.close()}),V=(x,H,j)=>{x.listen(H,q=>{try{j(q)}catch(K){setTimeout(()=>{throw K},0)}})};return V(p,Js.EventType.OPEN,()=>{_||(X(ht,`RPC '${e}' stream ${s} transport opened.`),k.Qo())}),V(p,Js.EventType.CLOSE,()=>{_||(_=!0,X(ht,`RPC '${e}' stream ${s} transport closed`),k.Uo())}),V(p,Js.EventType.ERROR,x=>{_||(_=!0,ds(ht,`RPC '${e}' stream ${s} transport errored:`,x),k.Uo(new Z(U.UNAVAILABLE,"The operation could not be completed")))}),V(p,Js.EventType.MESSAGE,x=>{var H;if(!_){const j=x.data[0];Ne(!!j);const q=j,K=(q==null?void 0:q.error)||((H=q[0])===null||H===void 0?void 0:H.error);if(K){X(ht,`RPC '${e}' stream ${s} received error:`,K);const me=K.status;let ge=function(w){const b=Ge[w];if(b!==void 0)return ag(b)}(me),I=K.message;ge===void 0&&(ge=U.INTERNAL,I="Unknown error status: "+me+" with message "+K.message),_=!0,k.Uo(new Z(ge,I)),p.close()}else X(ht,`RPC '${e}' stream ${s} received:`,j),k.Ko(j)}}),V(l,Rm.STAT_EVENT,x=>{x.stat===Wl.PROXY?X(ht,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Wl.NOPROXY&&X(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Tl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){return new MA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="PersistentStream";class wg{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Tg(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new Z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(lf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(lf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nb extends wg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=FA(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?hn(o.readTime):he.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=nc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Jl(c)?{documents:$A(i,c)}:{query:qA(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ug(i,o.resumeToken);const h=Zl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Jo(i,o.snapshotVersion.toTimestamp());const h=Zl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=WA(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=nc(this.serializer),n.removeTarget=e,this.I_(n)}}class Ob extends wg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=jA(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=nc(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BA(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{}class Mb extends xb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,ec(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(U.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,ec(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(U.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Lb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(kn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="RemoteStore";class Ub{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(X(Dr,"Restarting streams for network reachability change."),await async function(c){const h=de(c);h.W_.add(4),await Fi(h),h.j_.set("Unknown"),h.W_.delete(4),await Va(h)}(this))})}),this.j_=new Lb(r,s)}}async function Va(t){if(Fr(t))for(const e of t.G_)await e(!0)}async function Fi(t){for(const e of t.G_)await e(!1)}function Ig(t,e){const n=de(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),tu(n)?eu(n):Ss(n).c_()&&Zc(n,e))}function Xc(t,e){const n=de(t),r=Ss(n);n.K_.delete(e),r.c_()&&Ag(n,e),n.K_.size===0&&(r.c_()?r.P_():Fr(n)&&n.j_.set("Unknown"))}function Zc(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).y_(e)}function Ag(t,e){t.H_.Ne(e),Ss(t).w_(e)}function eu(t){t.H_=new VA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.j_.B_()}function tu(t){return Fr(t)&&!Ss(t).u_()&&t.K_.size>0}function Fr(t){return de(t).W_.size===0}function bg(t){t.H_=void 0}async function Fb(t){t.j_.set("Online")}async function Bb(t){t.K_.forEach((e,n)=>{Zc(t,e)})}async function jb(t,e){bg(t),tu(t)?(t.j_.q_(e),eu(t)):t.j_.set("Unknown")}async function $b(t,e,n){if(t.j_.set("Online"),e instanceof cg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.K_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){X(Dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xo(t,r)}else if(e instanceof So?t.H_.We(e):e instanceof lg?t.H_.Ze(e):t.H_.je(e),!n.isEqual(he.min()))try{const r=await Eg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(h);d&&i.K_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(ot.EMPTY_BYTE_STRING,d.snapshotVersion)),Ag(i,c);const p=new Jn(d.target,c,h,d.sequenceNumber);Zc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(Dr,"Failed to raise snapshot:",r),await Xo(t,r)}}async function Xo(t,e,n){if(!Rs(e))throw e;t.W_.add(1),await Fi(t),t.j_.set("Offline"),n||(n=()=>Eg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Dr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Va(t)})}function Rg(t,e){return e().catch(n=>Xo(t,n,e))}async function Na(t){const e=de(t),n=ar(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Lc;for(;qb(e);)try{const s=await Ab(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,Hb(e,s)}catch(s){await Xo(e,s)}Sg(e)&&Pg(e)}function qb(t){return Fr(t)&&t.U_.length<10}function Hb(t,e){t.U_.push(e);const n=ar(t);n.c_()&&n.S_&&n.b_(e.mutations)}function Sg(t){return Fr(t)&&!ar(t).u_()&&t.U_.length>0}function Pg(t){ar(t).start()}async function Wb(t){ar(t).C_()}async function zb(t){const e=ar(t);for(const n of t.U_)e.b_(n.mutations)}async function Kb(t,e,n){const r=t.U_.shift(),s=Wc.from(r,e,n);await Rg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Na(t)}async function Gb(t,e){e&&ar(t).S_&&await async function(r,s){if(function(o){return kA(o)&&o!==U.ABORTED}(s.code)){const i=r.U_.shift();ar(r).h_(),await Rg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Na(r)}}(t,e),Sg(t)&&Pg(t)}async function cf(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X(Dr,"RemoteStore received new credentials");const r=Fr(n);n.W_.add(3),await Fi(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Va(n)}async function Qb(t,e){const n=de(t);e?(n.W_.delete(2),await Va(n)):e||(n.W_.add(2),await Fi(n),n.j_.set("Unknown"))}function Ss(t){return t.J_||(t.J_=function(n,r,s){const i=de(n);return i.M_(),new Nb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:Fb.bind(null,t),No:Bb.bind(null,t),Lo:jb.bind(null,t),p_:$b.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),tu(t)?eu(t):t.j_.set("Unknown")):(await t.J_.stop(),bg(t))})),t.J_}function ar(t){return t.Y_||(t.Y_=function(n,r,s){const i=de(n);return i.M_(),new Ob(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:Wb.bind(null,t),Lo:Gb.bind(null,t),D_:zb.bind(null,t),v_:Kb.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Na(t)):(await t.Y_.stop(),t.U_.length>0&&(X(Dr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new nu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Rs(t))return new Z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{static emptySet(e){return new rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.Z_=new qe(se.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):ue():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _s(e,n,rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Yb{constructor(){this.queries=hf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=hf(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function hf(){return new Lr(t=>Qm(t),Ra)}async function Cg(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new Jb,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ru(o,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&su(n)}async function kg(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Xb(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&su(n)}function Zb(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function su(t){t.ia.forEach(e=>{e.next()})}var ic,df;(df=ic||(ic={}))._a="default",df.Cache="cache";class Dg{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==ic.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.key=e}}class Ng{constructor(e){this.key=e}}class eR{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Te(),this.mutatedKeys=Te(),this.ya=Jm(e),this.wa=new rs(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new uf,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=Sa(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;g&&_?g.data.isEqual(_.data)?k!==V&&(r.track({type:3,doc:_}),x=!0):this.va(g,_)||(r.track({type:2,doc:_}),x=!0,(c&&this.ya(_,c)>0||h&&this.ya(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),x=!0):g&&!_&&(r.track({type:1,doc:g}),x=!0,(c||h)&&(l=!0)),x&&(_?(o=o.add(_),i=V?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(_,k){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return V(_)-V(k)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,o.length!==0||h?{snapshot:new _s(this.query,e.wa,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new uf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Te(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new Ng(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new Vg(r))}),n}Oa(e){this.fa=e.gs,this.pa=Te();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return _s.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const iu="SyncEngine";class tR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nR{constructor(e){this.key=e,this.Ba=!1}}class rR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Lr(l=>Qm(l),Ra),this.qa=new Map,this.Qa=new Set,this.$a=new qe(se.comparator),this.Ua=new Map,this.Ka=new Gc,this.Wa={},this.Ga=new Map,this.za=gs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function sR(t,e,n=!0){const r=Fg(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Og(r,e,n,!0),s}async function iR(t,e){const n=Fg(t);await Og(n,e,!0,!1)}async function Og(t,e,n,r){const s=await bb(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await oR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ig(t.remoteStore,s),l}async function oR(t,e,n,r,s){t.Ha=(p,g,_)=>async function(V,x,H,j){let q=x.view.ba(H);q.ls&&(q=await rf(V.localStore,x.query,!1).then(({documents:I})=>x.view.ba(I,q)));const K=j&&j.targetChanges.get(x.targetId),me=j&&j.targetMismatches.get(x.targetId)!=null,ge=x.view.applyChanges(q,V.isPrimaryClient,K,me);return pf(V,x.targetId,ge.Ma),ge.snapshot}(t,p,g,_);const i=await rf(t.localStore,e,!0),o=new eR(e,i.gs),l=o.ba(i.documents),c=Ui.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);pf(t,n,h.Ma);const d=new tR(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function aR(t,e,n){const r=de(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Ra(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xc(r.remoteStore,s.targetId),oc(r,s.targetId)}).catch(bs)):(oc(r,s.targetId),await rc(r.localStore,s.targetId,!0))}async function lR(t,e){const n=de(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xc(n.remoteStore,r.targetId))}async function cR(t,e,n){const r=gR(t);try{const s=await function(o,l){const c=de(o),h=Xe.now(),d=l.reduce((_,k)=>_.add(k.key),Te());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let k=Dn(),V=Te();return c.ds.getEntries(_,d).next(x=>{k=x,k.forEach((H,j)=>{j.isValidDocument()||(V=V.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,k)).next(x=>{p=x;const H=[];for(const j of l){const q=bA(j,p.get(j.key).overlayedDocument);q!=null&&H.push(new Ur(j.key,q,jm(q.value.mapValue),Xt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,H,l)}).next(x=>{g=x;const H=x.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(_,x.batchId,H)})}).then(()=>({batchId:g.batchId,changes:Xm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Wa[o.currentUser.toKey()];h||(h=new qe(_e)),h=h.insert(l,c),o.Wa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Bi(r,s.changes),await Na(r.remoteStore)}catch(s){const i=ru(s,"Failed to persist write");n.reject(i)}}async function xg(t,e){const n=de(t);try{const r=await wb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Ne(o.Ba):s.removedDocuments.size>0&&(Ne(o.Ba),o.Ba=!1))}),await Bi(n,r,e)}catch(r){await bs(r)}}function ff(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.ta)g.sa(l)&&(h=!0)}),h&&su(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uR(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new qe(se.comparator);o=o.insert(i,gt.newNoDocument(i,he.min()));const l=Te().add(i),c=new ka(he.min(),new Map,new qe(_e),o,l);await xg(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),ou(r)}else await rc(r.localStore,e,!1).then(()=>oc(r,e,n)).catch(bs)}async function hR(t,e){const n=de(t),r=e.batch.batchId;try{const s=await Tb(n.localStore,e);Lg(n,r,null),Mg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bi(n,s)}catch(s){await bs(s)}}async function dR(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Lg(r,e,n),Mg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bi(r,s)}catch(s){await bs(s)}}function Mg(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Lg(t,e,n){const r=de(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function oc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||Ug(t,r)})}function Ug(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Xc(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),ou(t))}function pf(t,e,n){for(const r of n)r instanceof Vg?(t.Ka.addReference(r.key,e),fR(t,r)):r instanceof Ng?(X(iu,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||Ug(t,r.key)):ue()}function fR(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(iu,"New document in limbo: "+n),t.Qa.add(r),ou(t))}function ou(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new se(Fe.fromString(e)),r=t.za.next();t.Ua.set(r,new nR(n)),t.$a=t.$a.insert(n,r),Ig(t.remoteStore,new Jn(un($c(n.path)),r,"TargetPurposeLimboResolution",Ia.ae))}}async function Bi(t,e,n){const r=de(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Jc.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,h){const d=de(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.Hi,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>L.forEach(g.Ji,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Rs(p))throw p;X(Yc,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=d.Ts.get(g),k=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(k);d.Ts=d.Ts.insert(g,V)}}}(r.localStore,i))}async function pR(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X(iu,"User change. New user:",e.toKey());const r=await vg(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new Z(U.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bi(n,r.Rs)}}function mR(t,e){const n=de(t),r=n.Ua.get(e);if(r&&r.Ba)return Te().add(r.key);{let s=Te();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.Sa)}return s}}function Fg(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uR.bind(null,e),e.La.p_=Xb.bind(null,e.eventManager),e.La.Ja=Zb.bind(null,e.eventManager),e}function gR(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dR.bind(null,e),e}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return Eb(this.persistence,new _b,e.initialUser,this.serializer)}Xa(e){return new yg(Qc.ri,this.serializer)}Za(e){return new Sb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class _R extends Zo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ne(this.persistence.referenceDelegate instanceof Yo);const r=this.persistence.referenceDelegate.garbageCollector;return new nb(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new yg(r=>Yo.ri(r,n),this.serializer)}}class ac{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pR.bind(null,this.syncEngine),await Qb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Yb}()}createDatastore(e){const n=Da(e.databaseInfo.databaseId),r=function(i){return new Vb(i)}(e.databaseInfo);return function(i,o,l,c){return new Mb(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Ub(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ff(this.syncEngine,n,0),function(){return af.D()?new af:new Pb}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new rR(s,i,o,l,c,h);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);X(Dr,"RemoteStore shutting down."),i.W_.add(5),await Fi(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ac.provider={build:()=>new ac};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="FirestoreClient";class yR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ru(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wl(t,e){t.asyncQueue.verifyOperationInProgress(),X(lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vR(t);X(lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>cf(e.remoteStore,s)),t._onlineComponents=e}async function vR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(lr,"Using user provided OfflineComponentProvider");try{await wl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await wl(t,new Zo)}}else X(lr,"Using default OfflineComponentProvider"),await wl(t,new _R(void 0));return t._offlineComponents}async function jg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(lr,"Using user provided OnlineComponentProvider"),await mf(t,t._uninitializedComponentsProvider._online)):(X(lr,"Using default OnlineComponentProvider"),await mf(t,new ac))),t._onlineComponents}function ER(t){return jg(t).then(e=>e.syncEngine)}async function $g(t){const e=await jg(t),n=e.eventManager;return n.onListen=sR.bind(null,e.syncEngine),n.onUnlisten=aR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lR.bind(null,e.syncEngine),n}function TR(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Bg({next:g=>{d.su(),o.enqueueAndForget(()=>kg(i,p));const _=g.docs.has(l);!_&&g.fromCache?h.reject(new Z(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?h.reject(new Z(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Dg($c(l.path),d,{includeMetadataChanges:!0,Ta:!0});return Cg(i,p)}(await $g(t),t.asyncQueue,e,n,r)),r.promise}function wR(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Bg({next:g=>{d.su(),o.enqueueAndForget(()=>kg(i,p)),g.fromCache&&c.source==="server"?h.reject(new Z(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Dg(l,d,{includeMetadataChanges:!0,Ta:!0});return Cg(i,p)}(await $g(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IR(t,e,n,r){if(e===!0&&r===!0)throw new Z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _f(t){if(!se.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yf(t){if(se.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oa(t);throw new Z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="firestore.googleapis.com",vf=!0;class Ef{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wg,this.ssl=vf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:vf;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_g;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eb)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ef({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ef(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DI;switch(r.type){case"firstParty":return new xI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gf.get(n);r&&(X("ComponentProvider","Removing Datastore"),gf.delete(n),r.terminate())}(this),Promise.resolve()}}function AR(t,e,n,r={}){var s;const i=(t=Vn(t,xa))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==Wg&&i.host!==l&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Pr(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=dt.MOCK_USER;else{h=ow(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new dt(p)}t._authCredentials=new VI(new Cm(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class nr extends Ps{constructor(e,n,r){super(e,n,$c(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new se(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function zg(t,e,...n){if(t=Rt(t),Hg("collection","path",e),t instanceof xa){const r=Fe.fromString(e,...n);return yf(r),new nr(t,null,r)}{if(!(t instanceof Ct||t instanceof nr))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return yf(r),new nr(t.firestore,null,r)}}function ji(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=Dm.newId()),Hg("doc","path",e),t instanceof xa){const r=Fe.fromString(e,...n);return _f(r),new Ct(t,null,new se(r))}{if(!(t instanceof Ct||t instanceof nr))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return _f(r),new Ct(t.firestore,t instanceof nr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="AsyncQueue";class wf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Tg(this,"async_queue_retry"),this.Su=()=>{const r=Tl();r&&X(Tf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Tl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Tl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Sn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Rs(e))throw e;X(Tf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=nu.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ue()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Cs extends xa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wf(e),this._firestoreClient=void 0,await e}}}function bR(t,e){const n=typeof t=="object"?t:Em(),r=typeof t=="string"?t:Ho,s=xc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sw("firestore");i&&AR(s,...i)}return s}function au(t){if(t._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RR(t),t._firestoreClient}function RR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new JI(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,qg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new yR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(ot.fromBase64String(e))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=/^__.*__$/;class PR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Li(e,this.data,n,this.fieldTransforms)}}function Gg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class hu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new hu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ea(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Gg(this.Lu)&&SR.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class CR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Da(e)}ju(e,n,r,s=!1){return new hu({Lu:e,methodName:n,zu:r,path:it.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function du(t){const e=t._freezeSettings(),n=Da(t._databaseId);return new CR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qg(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Xg("Data must be an object, but it was:",o,r);const l=Jg(r,o);let c,h;if(i.merge)c=new Qt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=DR(e,p,n);if(!o.contains(g))throw new Z(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);NR(d,g)||d.push(g)}c=new Qt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new PR(new qt(l),c,h)}function kR(t,e,n,r=!1){return fu(n,t.ju(r?4:3,e))}function fu(t,e){if(Yg(t=Rt(t)))return Xg("Unsupported field value:",e,t),Jg(t,e);if(t instanceof Kg)return function(r,s){if(!Gg(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=fu(l,s.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:Jo(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jo(s.serializer,i)}}if(r instanceof cu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ys)return{bytesValue:ug(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof uu)return function(o,l){return{mapValue:{fields:{[Fm]:{stringValue:Bm},[Wo]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return qc(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Oa(r)}`)}(t,e)}function Jg(t,e){const n={};return Nm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,s)=>{const i=fu(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Yg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof cu||t instanceof ys||t instanceof Ct||t instanceof Kg||t instanceof uu)}function Xg(t,e,n){if(!Yg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Oa(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function DR(t,e,n){if((e=Rt(e))instanceof lu)return e._internalPath;if(typeof e=="string")return Zg(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const VR=new RegExp("[~\\*/\\[\\]]");function Zg(t,e,n){if(e.search(VR)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lu(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(U.INVALID_ARGUMENT,l+t+c)}function NR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OR extends e_{data(){return super.data()}}function pu(t,e){return typeof e=="string"?Zg(t,e):e instanceof lu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mu{}class MR extends mu{}function LR(t,e,...n){let r=[];e instanceof mu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof gu).length,l=i.filter(c=>c instanceof Ma).length;if(o>1||o>0&&l>0)throw new Z(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ma extends MR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ma(e,n,r)}_apply(e){const n=this._parse(e);return t_(e._query,n),new Ps(e.firestore,e.converter,Yl(e._query,n))}_parse(e){const n=du(e.firestore);return function(i,o,l,c,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Af(p,d);const k=[];for(const V of p)k.push(If(c,i,V));g={arrayValue:{values:k}}}else g=If(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Af(p,d),g=kR(l,o,p,d==="in"||d==="not-in");return Qe.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function UR(t,e,n){const r=e,s=pu("where",t);return Ma._create(s,r,n)}class gu extends mu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)t_(o,c),o=Yl(o,c)}(e._query,n),new Ps(e.firestore,e.converter,Yl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function If(t,e,n){if(typeof(n=Rt(n))=="string"){if(n==="")throw new Z(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gm(e)&&n.indexOf("/")!==-1)throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!se.isDocumentKey(r))throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ud(t,new se(r))}if(n instanceof Ct)return Ud(t,n._key);throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oa(n)}.`)}function Af(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function t_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class FR{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Wo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>We(o.doubleValue));return new uu(i)}convertGeoPoint(e){return new cu(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ba(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const n=sr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Ne(gg(r));const s=new Ai(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class r_ extends e_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Po extends r_{data(e={}){return super.data(e)}}class BR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Po(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:jR(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){t=Vn(t,Ct);const e=Vn(t.firestore,Cs);return TR(au(e),t._key).then(n=>zR(e,t,n))}class i_ extends FR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function $R(t){t=Vn(t,Ps);const e=Vn(t.firestore,Cs),n=au(e),r=new i_(e);return xR(t._query),wR(n,t._query).then(s=>new BR(e,r,t,s))}function qR(t,e,n){t=Vn(t,Ct);const r=Vn(t.firestore,Cs),s=n_(t.converter,e);return _u(r,[Qg(du(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xt.none())])}function HR(t){return _u(Vn(t.firestore,Cs),[new Hc(t._key,Xt.none())])}function WR(t,e){const n=Vn(t.firestore,Cs),r=ji(t),s=n_(t.converter,e);return _u(n,[Qg(du(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function _u(t,e){return function(r,s){const i=new Sn;return r.asyncQueue.enqueueAndForget(async()=>cR(await ER(r),s,i)),i.promise}(au(t),e)}function zR(t,e,n){const r=n.docs.get(e._key),s=new i_(t);return new r_(t,s,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){As=s})(Is),hs(new Cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Cs(new NI(r.getProvider("auth-internal")),new MI(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),er(Rd,Sd,e),er(Rd,Sd,"esm2017")})();var KR="firebase",GR="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(KR,GR,"app");function yu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function o_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QR=o_,a_=new Oi("auth","Firebase",o_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Nc("@firebase/auth");function JR(t,...e){ta.logLevel<=ve.WARN&&ta.warn(`Auth (${Is}): ${t}`,...e)}function Co(t,...e){ta.logLevel<=ve.ERROR&&ta.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Eu(t,...e)}function Zt(t,...e){return Eu(t,...e)}function vu(t,e,n){const r=Object.assign(Object.assign({},QR()),{[e]:n});return new Oi("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return vu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function YR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zt(t,"argument-error"),vu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return a_.create(t,...e)}function le(t,e,...n){if(!t)throw Eu(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function Nn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XR(){return bf()==="http:"||bf()==="https:"}function bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XR()||uw()||"connection"in navigator)?navigator.onLine:!0}function e0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=aw()||hw()}get(){return ZR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],r0=new $i(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dr(t,e,n,r,s={}){return c_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return cw()||(h.referrerPolicy="no-referrer"),l_.fetch()(await u_(t,t.config.apiHost,n,l),h)})}async function c_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},t0),e);try{const s=new i0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _o(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vu(t,d,h);zt(t,d)}}catch(s){if(s instanceof xn)throw s;zt(t,"network-request-failed",{message:String(s)})}}async function qi(t,e,n,r,s={}){const i=await dr(t,e,n,r,s);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function u_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Tu(t.config,s):`${t.config.apiScheme}://${s}`;return n0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function s0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),r0.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}function Rf(t){return t!==void 0&&t.enterprise!==void 0}class o0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return s0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function a0(t,e){return dr(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function na(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c0(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),s=wu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:di(Il(s.auth_time)),issuedAtTime:di(Il(s.iat)),expirationTime:di(Il(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Il(t){return Number(t)*1e3}function wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const s=fm(n);return s?JSON.parse(s):(Co("Failed to decode base64 JWT payload"),null)}catch(s){return Co("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sf(t){const e=wu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&u0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function u0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pi(t,na(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?h_(i.providerUserInfo):[],l=f0(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new cc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function d0(t){const e=Rt(t);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function h_(t){return t.map(e=>{var{providerId:n}=e,r=yu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e){const n=await c_(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await u_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",l_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m0(t,e){return dr(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Sf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await p0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ss;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c0(this,e)}reload(){return d0(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Pi(this,l0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,H=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:K,isAnonymous:me,providerData:ge,stsTokenManager:I}=n;le(q&&I,e,"internal-error");const y=ss.fromJSON(this.name,I);le(typeof q=="string",e,"internal-error"),$n(p,e.name),$n(g,e.name),le(typeof K=="boolean",e,"internal-error"),le(typeof me=="boolean",e,"internal-error"),$n(_,e.name),$n(k,e.name),$n(V,e.name),$n(x,e.name),$n(H,e.name),$n(j,e.name);const w=new Jt({uid:q,auth:e,email:g,emailVerified:K,displayName:p,isAnonymous:me,photoURL:k,phoneNumber:_,tenantId:V,stsTokenManager:y,createdAt:H,lastLoginAt:j});return ge&&Array.isArray(ge)&&(w.providerData=ge.map(b=>Object.assign({},b))),x&&(w._redirectEventId=x),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new ss;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ra(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?h_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ss;l.updateFromIdToken(r);const c=new Jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function bn(t){Nn(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const Cf=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await na(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(bn(Cf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(Cf);const o=ko(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const g=await na(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Jt._fromGetAccountInfoResponse(e,g,d)}else p=Jt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new is(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new is(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(y_(e))return"Blackberry";if(v_(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(__(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f_(t=Et()){return/firefox\//i.test(t)}function p_(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(t=Et()){return/crios\//i.test(t)}function g_(t=Et()){return/iemobile/i.test(t)}function __(t=Et()){return/android/i.test(t)}function y_(t=Et()){return/blackberry/i.test(t)}function v_(t=Et()){return/webos/i.test(t)}function Iu(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g0(t=Et()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _0(){return dw()&&document.documentMode===10}function E_(t=Et()){return Iu(t)||__(t)||v_(t)||y_(t)||/windows phone/i.test(t)||g_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e=[]){let n;switch(t){case"Browser":n=kf(Et());break;case"Worker":n=`${kf(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t,e={}){return dr(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=6;class T0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:E0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Df(this),this.idTokenSubscription=new Df(this),this.beforeStateQueue=new y0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await na(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=e0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Pn(this));const n=e?Rt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v0(this),n=new T0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await m0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fr(t){return Rt(t)}class Df{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ew(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I0(t){La=t}function w_(t){return La.loadJS(t)}function A0(){return La.recaptchaEnterpriseScript}function b0(){return La.gapiScript}function R0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class S0{constructor(){this.enterprise=new P0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class P0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const C0="recaptcha-enterprise",I_="NO_RECAPTCHA";class k0{constructor(e){this.type=C0,this.auth=fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{a0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new o0(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Rf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(I_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Rf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=A0();c.length!==0&&(c+=l),w_(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Vf(t,e,n,r=!1,s=!1){const i=new k0(t);let o;if(s)o=I_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function uc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Vf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Vf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e){const n=xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,e??{}))return s;zt(s,"already-initialized")}return n.initialize({options:e})}function V0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function N0(t,e,n){const r=fr(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=A_(e),{host:o,port:l}=O0(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Pr(h,r.config.emulator)&&Pr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,x0()}function A_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function O0(t){const e=A_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Nf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Nf(o)}}}function Nf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function x0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function M0(t,e){return dr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t,e){return qi(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function F0(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,n,"signInWithPassword",L0);case"emailLink":return U0(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(e,r,"signUpPassword",M0);case"emailLink":return F0(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e){return qi(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="http://localhost";class Vr extends Au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:B0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $0(t){const e=Gs(Qs(t)).link,n=e?Gs(Qs(e)).deep_link_id:null,r=Gs(Qs(t)).deep_link_id;return(r?Gs(Qs(r)).link:null)||r||n||e||t}class bu{constructor(e){var n,r,s,i,o,l;const c=Gs(Qs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=j0((s=c.mode)!==null&&s!==void 0?s:null);le(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=$0(e);try{return new bu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bu.parseLink(n);return le(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Ru{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Hi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Hi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e){return qi(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=Of(r);return new Nr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Of(r);return new Nr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Of(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new sa(e,n,r,s)}}function b_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sa._fromErrorAndOperation(t,i,e,r):i})}async function H0(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(Pn(r));const s="reauthenticate";try{const i=await Pi(t,b_(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=wu(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),Nr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e,n=!1){if(xt(t.app))return Promise.reject(Pn(t));const r="signIn",s=await b_(t,r,e),i=await Nr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function z0(t,e){return R_(fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t){const e=fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function K0(t,e,n){if(xt(t.app))return Promise.reject(Pn(t));const r=fr(t),o=await uc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",q0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&S_(t),c}),l=await Nr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function G0(t,e,n){return xt(t.app)?Promise.reject(Pn(t)):z0(Rt(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&S_(t),r})}function Q0(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function J0(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function Y0(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function X0(t){return Rt(t).signOut()}const ia="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ia,"1"),this.storage.removeItem(ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=1e3,eS=10;class C_ extends P_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=E_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Z0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C_.type="LOCAL";const tS=C_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends P_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const D_=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await nS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Su("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function sS(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function iS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aS(){return V_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firebaseLocalStorageDb",lS=1,oa="firebaseLocalStorage",O_="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fa(t,e){return t.transaction([oa],e?"readwrite":"readonly").objectStore(oa)}function cS(){const t=indexedDB.deleteDatabase(N_);return new Wi(t).toPromise()}function hc(){const t=indexedDB.open(N_,lS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(oa,{keyPath:O_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(oa)?e(r):(r.close(),await cS(),e(await hc()))})})}async function xf(t,e,n){const r=Fa(t,!0).put({[O_]:e,value:n});return new Wi(r).toPromise()}async function uS(t,e){const n=Fa(t,!1).get(e),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function Mf(t,e){const n=Fa(t,!0).delete(e);return new Wi(n).toPromise()}const hS=800,dS=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(aS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iS(),!this.activeServiceWorker)return;this.sender=new rS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await xf(e,ia,"1"),await Mf(e,ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fa(s,!1).getAll();return new Wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const fS=x_;new $i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t,e){return e?bn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pS(t){return R_(t.auth,new Pu(t),t.bypassAuthState)}function mS(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),W0(n,new Pu(t),t.bypassAuthState)}async function gS(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),H0(n,new Pu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pS;case"linkViaPopup":case"linkViaRedirect":return gS;case"reauthViaPopup":case"reauthViaRedirect":return mS;default:zt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new $i(2e3,1e4);async function yS(t,e,n){if(xt(t.app))return Promise.reject(Zt(t,"operation-not-supported-in-this-environment"));const r=fr(t);YR(t,e,Ru);const s=M_(r,n);return new Ir(r,"signInViaPopup",e,s).executeNotNull()}class Ir extends L_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_S.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="pendingRedirect",Do=new Map;class ES extends L_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await TS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TS(t,e){const n=AS(e),r=IS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wS(t,e){Do.set(t._key(),e)}function IS(t){return bn(t._redirectPersistence)}function AS(t){return ko(vS,t.config.apiKey,t.name)}async function bS(t,e,n=!1){if(xt(t.app))return Promise.reject(Pn(t));const r=fr(t),s=M_(r,e),o=await new ES(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=10*60*1e3;class SS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lf(e))}saveEventToCache(e){this.cachedEventUids.add(Lf(e)),this.lastProcessedEventTime=Date.now()}}function Lf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DS=/^https?/;async function VS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CS(t);for(const n of e)try{if(NS(n))return}catch{}zt(t,"unauthorized-domain")}function NS(t){const e=lc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DS.test(n))return!1;if(kS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=new $i(3e4,6e4);function Uf(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xS(t){return new Promise((e,n)=>{var r,s,i;function o(){Uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uf(),n(Zt(t,"network-request-failed"))},timeout:OS.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=R0("iframefcb");return dn()[l]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},w_(`${b0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function MS(t){return Vo=Vo||xS(t),Vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=new $i(5e3,15e3),US="__/auth/iframe",FS="emulator/auth/iframe",BS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $S(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tu(e,FS):`https://${t.config.authDomain}/${US}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=jS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xi(r).slice(1)}`}async function qS(t){const e=await MS(t),n=dn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:$S(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},LS.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WS=500,zS=600,KS="_blank",GS="http://localhost";class Ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QS(t,e,n,r=WS,s=zS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},HS),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Et().toLowerCase();n&&(l=m_(h)?KS:n),f_(h)&&(e=e||GS,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,k])=>`${g}${_}=${k},`,"");if(g0(h)&&l!=="_self")return JS(e||"",l),new Ff(null);const p=window.open(e||"",l,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Ff(p)}function JS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="__/auth/handler",XS="emulator/auth/handler",ZS=encodeURIComponent("fac");async function Bf(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof Ru){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Hi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${ZS}=${encodeURIComponent(c)}`:"";return`${eP(t)}?${xi(l).slice(1)}${h}`}function eP({config:t}){return t.emulator?Tu(t,XS):`https://${t.authDomain}/${YS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="webStorageSupport";class tP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D_,this._completeRedirectFn=bS,this._overrideRedirectResult=wS}async _openPopup(e,n,r,s){var i;Nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bf(e,n,r,lc(),s);return QS(e,o,Su())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bf(e,n,r,lc(),s);return sS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qS(e),r=new SS(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Al,{type:Al},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Al];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E_()||p_()||Iu()}}const nP=tP;var jf="@firebase/auth",$f="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iP(t){hs(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T_(t)},h=new w0(r,s,i,c);return V0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new Cr("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(r=>new rP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(jf,$f,sP(t)),er(jf,$f,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=5*60,aP=gm("authIdTokenMaxAge")||oP;let qf=null;const lP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aP)return;const s=n==null?void 0:n.token;qf!==s&&(qf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function F_(t=Em()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D0(t,{popupRedirectResolver:nP,persistence:[fS,tS,D_]}),r=gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lP(i.toString());J0(n,o,()=>o(n.currentUser)),Q0(n,l=>o(l))}}const s=pm("auth");return s&&N0(n,`http://${s}`),n}function cP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}I0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iP("Browser");const uP={apiKey:"AIzaSyDx3EgoNVGjwsjvugK7-YwfwxRX2aPSB6k",authDomain:"tripmaster-64cb7.firebaseapp.com",projectId:"tripmaster-64cb7",storageBucket:"tripmaster-64cb7.firebasestorage.app",messagingSenderId:"1015671912746",appId:"1:1015671912746:web:9379e6f43ed18c9fe38653",measurementId:"G-MD5JGE52F8"},B_=vm(uP),vs=bR(B_),Es=F_(B_),hP={name:"TripCard",props:{trip:{type:Object,required:!0}},emits:["delete-trip"],methods:{deleteTrip(){this.$emit("delete-trip",this.trip.id)}}},dP={class:"col-md-4 mb-4"},fP={class:"card shadow-sm h-100"},pP={class:"card-body"},mP={class:"card-title"},gP={class:"card-text"};function _P(t,e,n,r,s,i){const o=Ye("router-link");return te(),ne("div",dP,[A("div",fP,[A("div",pP,[A("h5",mP,Ee(n.trip.name),1),A("p",gP,Ee(n.trip.country),1),De(o,{to:`/trip/${n.trip.id}`,class:"btn btn-green"},{default:xr(()=>e[1]||(e[1]=[bt("View Trip")])),_:1},8,["to"]),A("button",{class:"btn btn-danger mt-3",onClick:e[0]||(e[0]=(...l)=>i.deleteTrip&&i.deleteTrip(...l))},"Delete Trip")])])])}const yP=kt(hP,[["render",_P],["__scopeId","data-v-369e50f7"]]),vP={name:"AddTripModal",setup(t,{emit:e}){const n=Se({country:"",name:"",departureDate:"",arrivalDate:""}),r=Se(""),s=Se([]),i=Se(null);Y0(Es,h=>{h?(i.value=h.uid,console.log("Zalogowano użytkownika:",h.uid)):(r.value="Musisz być zalogowany, aby dodać podróż.",console.log("Brak zalogowanego użytkownika!"))});const o=async()=>{try{const d=await(await fetch("https://restcountries.com/v3.1/all")).json();s.value=d.map(p=>p.name.common).sort()}catch(h){console.error("Błąd ładowania krajów:",h)}},l=async()=>{if(!i.value){r.value="Musisz być zalogowany, aby dodać podróż.";return}console.log("Dane podróży:",n.value),console.log("ID użytkownika:",i.value);try{const h=await WR(zg(vs,"trips"),{...n.value,userId:i.value,createdAt:new Date});await qR(ji(vs,"trips",h.id,"points","samplePoint"),{name:"",lat:0,lng:0}),e("add-trip",{id:h.id,...n.value,userId:i.value,createdAt:new Date}),c()}catch(h){console.error("Błąd zapisu do bazy:",h),r.value=`Błąd zapisu do bazy: ${h.message}`}},c=()=>{e("close")};return ws(o),{newTrip:n,countries:s,submitForm:l,closeModal:c,errorMessage:r}}},EP={class:"modal fade show d-block",tabindex:"-1",style:{background:"rgba(0,0,0,0.5)"}},TP={class:"modal-dialog"},wP={class:"modal-content"},IP={class:"modal-header"},AP={class:"modal-body"},bP={class:"mb-3"},RP=["value"],SP={class:"mb-3"},PP={class:"mb-3"},CP={class:"mb-3"},kP={key:0,class:"error"};function DP(t,e,n,r,s,i){return te(),ne("div",EP,[A("div",TP,[A("div",wP,[A("div",IP,[e[6]||(e[6]=A("h5",{class:"modal-title"},"Dodaj podróż",-1)),A("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...o)=>r.closeModal&&r.closeModal(...o))})]),A("div",AP,[A("form",{onSubmit:e[5]||(e[5]=Dc((...o)=>r.submitForm&&r.submitForm(...o),["prevent"]))},[A("div",bP,[e[7]||(e[7]=A("label",{for:"country",class:"form-label"},"Kraj",-1)),Be(A("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.newTrip.country=o),id:"country",class:"form-select",required:""},[(te(!0),ne(mt,null,Rr(r.countries,o=>(te(),ne("option",{key:o,value:o},Ee(o),9,RP))),128))],512),[[CE,r.newTrip.country]])]),A("div",SP,[e[8]||(e[8]=A("label",{for:"name",class:"form-label"},"Nazwa podróży",-1)),Be(A("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.newTrip.name=o),type:"text",id:"name",class:"form-control",required:""},null,512),[[ze,r.newTrip.name]])]),A("div",PP,[e[9]||(e[9]=A("label",{for:"departureDate",class:"form-label"},"Data wyjazdu (opcjonalnie)",-1)),Be(A("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.newTrip.departureDate=o),type:"date",id:"departureDate",class:"form-control"},null,512),[[ze,r.newTrip.departureDate]])]),A("div",CP,[e[10]||(e[10]=A("label",{for:"arrivalDate",class:"form-label"},"Data przyjazdu (opcjonalnie)",-1)),Be(A("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.newTrip.arrivalDate=o),type:"date",id:"arrivalDate",class:"form-control"},null,512),[[ze,r.newTrip.arrivalDate]])]),e[11]||(e[11]=A("button",{type:"submit",class:"btn btn-primary"},"Dodaj podróż",-1))],32),r.errorMessage?(te(),ne("p",kP,Ee(r.errorMessage),1)):Ve("",!0)])])])])}const VP=kt(vP,[["render",DP],["__scopeId","data-v-d813ca23"]]),NP={name:"HomeView",components:{TripCard:yP,AddTripModal:VP},setup(){const t=Se([]),e=Se(!1),n=Se(null),r=Ta(),s=async()=>{if(n.value)try{const d=LR(zg(vs,"trips"),UR("userId","==",n.value)),p=await $R(d);t.value=p.docs.map(g=>({id:g.id,...g.data()}))}catch(d){console.error("Error loading trips:",d)}},i=async d=>{try{const p=ji(vs,"trips",d);await HR(p),t.value=t.value.filter(g=>g.id!==d)}catch(p){console.error("Error deleting trip:",p)}},o=d=>{t.value.push(d),h()},l=async()=>{try{await X0(Es),console.log("User logged out"),r.push("/")}catch(d){console.error("Error logging out:",d)}},c=()=>{e.value=!0},h=()=>{e.value=!1};return Es.onAuthStateChanged(d=>{d?(n.value=d.uid,s()):(n.value=null,t.value=[])}),ws(s),{trips:t,isModalVisible:e,showAddTripModal:c,closeModal:h,addTrip:o,deleteTrip:i,logout:l}}},OP={class:"container py-5"},xP={key:0,class:"text-center text-muted mt-5"},MP={key:1,class:"row"},LP={key:2,class:"d-flex justify-content-center mt-4"};function UP(t,e,n,r,s,i){const o=Ye("TripCard"),l=Ye("AddTripModal");return te(),ne("div",OP,[A("button",{class:"btn btn-danger",onClick:e[0]||(e[0]=(...c)=>r.logout&&r.logout(...c))}," Log out "),e[4]||(e[4]=A("h1",{class:"text-center mb-4 display-4 fw-bold text-green"},"Trip Master",-1)),r.trips.length===0?(te(),ne("div",xP,[e[3]||(e[3]=A("p",{class:"fs-5"},"You don't have any trips yet 😢",-1)),A("button",{class:"btn btn-green",onClick:e[1]||(e[1]=(...c)=>r.showAddTripModal&&r.showAddTripModal(...c))},"Add your first trip")])):(te(),ne("div",MP,[(te(!0),ne(mt,null,Rr(r.trips,c=>(te(),Ol(o,{key:c.id,trip:c,onDeleteTrip:r.deleteTrip},null,8,["trip","onDeleteTrip"]))),128))])),r.trips.length>0?(te(),ne("div",LP,[A("button",{class:"btn btn-green",onClick:e[2]||(e[2]=(...c)=>r.showAddTripModal&&r.showAddTripModal(...c))},"Add new trip")])):Ve("",!0),r.isModalVisible?(te(),Ol(l,{key:3,onClose:r.closeModal,onAddTrip:r.addTrip},null,8,["onClose","onAddTrip"])):Ve("",!0)])}const Hf=kt(NP,[["render",UP],["__scopeId","data-v-a7805922"]]),FP={name:"BudgetPlanner",props:["trip"],data(){return{totalBudget:0,expenses:[],newExpense:{name:"",amount:"",persons:"",description:"",date:"",file:null,paid:!1}}},computed:{totalSpent(){return this.expenses.reduce((t,e)=>t+Number(e.amount),0)},remainingBudget(){return(this.totalBudget-this.totalSpent).toFixed(2)}},methods:{handleFileUpload(t){const e=t.target.files[0];e&&(this.newExpense.file=URL.createObjectURL(e))},addExpense(){this.newExpense.name.trim()&&this.newExpense.amount>0?(this.expenses.push({...this.newExpense}),this.newExpense={name:"",amount:0,persons:0,description:"",date:"",file:null,paid:!1}):alert("Please enter the expense name and an amount greater than 0!")}}},BP={class:"container py-4"},jP={class:"row mb-4"},$P={class:"col-md-4"},qP={class:"card text-white bg-success mb-3"},HP={class:"card-body"},WP={class:"card-text"},zP={class:"col-md-4"},KP={class:"card text-white bg-danger mb-3"},GP={class:"card-body"},QP={class:"card-text"},JP={class:"col-md-4"},YP={class:"card text-white bg-info mb-3"},XP={class:"card-body"},ZP={class:"mb-4"},eC={class:"mb-2"},tC={class:"mb-2"},nC={class:"mb-2"},rC={key:0,class:"text-muted"},sC={class:"mb-2"},iC={class:"mb-2"},oC={class:"mb-2"},aC={key:0},lC={class:"list-group"},cC={class:"d-flex justify-content-between align-items-center flex-wrap"},uC={class:"text-muted"},hC={key:0},dC={key:1},fC={key:2},pC={key:0},mC=["href"],gC={class:"form-check"},_C=["onUpdate:modelValue","id"],yC=["for"];function vC(t,e,n,r,s,i){return te(),ne("div",BP,[A("h3",null,"Travel Budget - "+Ee(n.trip.name),1),A("div",jP,[A("div",$P,[A("div",qP,[A("div",HP,[e[8]||(e[8]=A("h5",{class:"card-title"},"Remaining",-1)),A("p",WP,Ee(i.remainingBudget)+" PLN ",1)])])]),A("div",zP,[A("div",KP,[A("div",GP,[e[9]||(e[9]=A("h5",{class:"card-title"},"Spent",-1)),A("p",QP,Ee(i.totalSpent)+" PLN ",1)])])]),A("div",JP,[A("div",YP,[A("div",XP,[e[10]||(e[10]=A("h5",{class:"card-title"},"Total Budget",-1)),Be(A("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.totalBudget=o),type:"number",class:"form-control"},null,512),[[ze,s.totalBudget,void 0,{number:!0}]]),e[11]||(e[11]=bt(" PLN "))])])])]),A("div",ZP,[e[13]||(e[13]=A("h4",null,"Add New Expense",-1)),A("div",eC,[Be(A("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.newExpense.name=o),placeholder:"Expense Name (required)",class:"form-control"},null,512),[[ze,s.newExpense.name]])]),A("div",tC,[Be(A("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.newExpense.amount=o),placeholder:"Expense Amount (PLN, required)",type:"number",class:"form-control"},null,512),[[ze,s.newExpense.amount,void 0,{number:!0}]])]),A("div",nC,[Be(A("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>s.newExpense.persons=o),placeholder:"Number of persons to split (optional)",type:"number",class:"form-control"},null,512),[[ze,s.newExpense.persons,void 0,{number:!0}]]),s.newExpense.persons>0?(te(),ne("small",rC," Even split: "+Ee((s.newExpense.amount/s.newExpense.persons).toFixed(2))+" PLN per person ",1)):Ve("",!0)]),A("div",sC,[Be(A("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s.newExpense.description=o),placeholder:"Expense Description (optional)",class:"form-control"},null,512),[[ze,s.newExpense.description]])]),A("div",iC,[Be(A("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>s.newExpense.date=o),type:"date",class:"form-control",placeholder:"Expense Date (optional)"},null,512),[[ze,s.newExpense.date]])]),A("div",oC,[A("input",{type:"file",onChange:e[6]||(e[6]=(...o)=>i.handleFileUpload&&i.handleFileUpload(...o)),class:"form-control"},null,32),e[12]||(e[12]=A("small",{class:"text-muted"},"Attach photo/file (optional)",-1))]),A("button",{class:"btn btn-primary",onClick:e[7]||(e[7]=(...o)=>i.addExpense&&i.addExpense(...o))},"Add Expense")]),s.expenses.length?(te(),ne("div",aC,[e[14]||(e[14]=A("h4",null,"Expenses",-1)),A("ul",lC,[(te(!0),ne(mt,null,Rr(s.expenses,(o,l)=>(te(),ne("li",{key:l,class:"list-group-item"},[A("div",cC,[A("div",null,[A("strong",null,Ee(o.name),1),bt(" - "+Ee(o.amount)+" PLN ",1),A("div",uC,[o.date?(te(),ne("span",hC,"Date: "+Ee(o.date)+" | ",1)):Ve("",!0),o.description?(te(),ne("span",dC,"Description: "+Ee(o.description)+" | ",1)):Ve("",!0),o.persons?(te(),ne("span",fC," Split between: "+Ee(o.persons)+" ("+Ee((o.amount/o.persons).toFixed(2))+" PLN/person) | ",1)):Ve("",!0)]),o.file?(te(),ne("div",pC,[A("a",{href:o.file,target:"_blank"},"View Attachment",8,mC)])):Ve("",!0)]),A("div",gC,[Be(A("input",{type:"checkbox","onUpdate:modelValue":c=>o.paid=c,class:"form-check-input",id:"paid-"+l},null,8,_C),[[Jp,o.paid]]),A("label",{for:"paid-"+l,class:"form-check-label"},"Paid",8,yC)])])]))),128))])])):Ve("",!0)])}const j_=kt(FP,[["render",vC],["__scopeId","data-v-d5a6ba30"]]),EC={name:"PackingList",props:["trip"],data(){return{categories:[{name:"Clothing",items:[]},{name:"Essentials",items:[]},{name:"Toiletries",items:[]},{name:"Other",items:[]}],selectedCategory:null,showAddCategory:!1,showAddItem:!1,newCategory:"",newItem:""}},methods:{selectCategory(t){this.selectedCategory=t,this.showAddItem=!1},addCategory(){this.newCategory.trim()&&(this.categories.push({name:this.newCategory.trim(),items:[]}),this.newCategory="",this.showAddCategory=!1)},addItem(){const t=this.categories.find(e=>e.name===this.selectedCategory);t&&this.newItem.trim()&&(t.items.push({name:this.newItem.trim(),checked:!1}),this.newItem="",this.showAddItem=!1)},getItemsForCategory(t){const e=this.categories.find(n=>n.name===t);return e?e.items:[]},countRemaining(t){const e=this.categories.find(n=>n.name===t);return e?e.items.filter(n=>!n.checked).length:0}}},TC={class:"container py-4"},wC={class:"row mb-4"},IC=["onClick"],AC={class:"card-body text-center"},bC={class:"card-title"},RC={class:"card-text"},SC={class:"mb-4 d-flex gap-3"},PC=["disabled"],CC={key:0,class:"mb-3"},kC={key:1,class:"mb-3"},DC={key:2},VC={class:"list-group w-75"},NC=["onUpdate:modelValue"];function OC(t,e,n,r,s,i){return te(),ne("div",TC,[A("h3",null,"Packing List - "+Ee(n.trip.name),1),A("div",wC,[(te(!0),ne(mt,null,Rr(s.categories,(o,l)=>(te(),ne("div",{key:l,class:"col-md-3 mb-3"},[A("div",{class:"card h-100",onClick:c=>i.selectCategory(o.name),style:{cursor:"pointer"}},[A("div",AC,[A("h5",bC,Ee(o.name),1),A("p",RC," checked off: "+Ee(i.countRemaining(o.name))+" / "+Ee(o.items.length),1)])],8,IC)]))),128))]),A("div",SC,[A("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=o=>s.showAddCategory=!0)},"Add Category"),A("button",{class:"btn btn-success",onClick:e[1]||(e[1]=o=>s.showAddItem=!0),disabled:!s.selectedCategory},"Add Item "+Ee(s.selectedCategory),9,PC)]),s.showAddCategory?(te(),ne("div",CC,[Be(A("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.newCategory=o),placeholder:"Category Name",class:"form-control w-50 d-inline"},null,512),[[ze,s.newCategory]]),A("button",{class:"btn btn-secondary ms-2",onClick:e[3]||(e[3]=(...o)=>i.addCategory&&i.addCategory(...o))},"Add")])):Ve("",!0),s.showAddItem&&s.selectedCategory?(te(),ne("div",kC,[Be(A("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s.newItem=o),placeholder:"Item Name",class:"form-control w-50 d-inline"},null,512),[[ze,s.newItem]]),A("button",{class:"btn btn-secondary ms-2",onClick:e[5]||(e[5]=(...o)=>i.addItem&&i.addItem(...o))},"Add")])):Ve("",!0),s.selectedCategory?(te(),ne("div",DC,[A("h4",null,"Items in Category: "+Ee(s.selectedCategory),1),A("ul",VC,[(te(!0),ne(mt,null,Rr(i.getItemsForCategory(s.selectedCategory),(o,l)=>(te(),ne("li",{key:l,class:"list-group-item d-flex justify-content-between align-items-center"},[A("div",null,[Be(A("input",{type:"checkbox","onUpdate:modelValue":c=>o.checked=c,class:"form-check-input me-2"},null,8,NC),[[Jp,o.checked]]),A("span",{class:ha({"text-decoration-line-through":o.checked})},Ee(o.name),3)])]))),128))])])):Ve("",!0)])}const $_=kt(EC,[["render",OC],["__scopeId","data-v-2717f22f"]]),xC={name:"Reservations",props:["trip"],data(){return{newReservation:{name:"",link:"",file:null},reservations:[]}},methods:{handleFileUpload(t){const e=t.target.files[0];e&&(this.newReservation.file=URL.createObjectURL(e))},addReservation(){this.newReservation.name.trim()&&(this.reservations.push({name:this.newReservation.name.trim(),link:this.newReservation.link.trim(),file:this.newReservation.file}),this.newReservation={name:"",link:"",file:null})}}},MC={class:"container py-4"},LC={class:"mb-3"},UC={key:0},FC={class:"list-group"},BC={key:0},jC=["href"],$C={key:1},qC=["href"];function HC(t,e,n,r,s,i){return te(),ne("div",MC,[A("h3",null,"Reservations - "+Ee(n.trip.name),1),A("div",LC,[Be(A("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.newReservation.name=o),placeholder:"Reservation name (e.g. Flight to Paris)",class:"form-control mb-2"},null,512),[[ze,s.newReservation.name]]),Be(A("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.newReservation.link=o),placeholder:"Reservation link (optional)",class:"form-control mb-2"},null,512),[[ze,s.newReservation.link]]),A("input",{type:"file",onChange:e[2]||(e[2]=(...o)=>i.handleFileUpload&&i.handleFileUpload(...o)),class:"form-control mb-2"},null,32),A("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=(...o)=>i.addReservation&&i.addReservation(...o))},"Add Reservation")]),s.reservations.length?(te(),ne("div",UC,[e[4]||(e[4]=A("h4",null,"Reservations List",-1)),A("ul",FC,[(te(!0),ne(mt,null,Rr(s.reservations,(o,l)=>(te(),ne("li",{key:l,class:"list-group-item"},[A("strong",null,Ee(o.name),1),o.link?(te(),ne("div",BC,[A("a",{href:o.link,target:"_blank"},"Open Link",8,jC)])):Ve("",!0),o.file?(te(),ne("div",$C,[A("a",{href:o.file,target:"_blank"},"View Attachment",8,qC)])):Ve("",!0)]))),128))])])):Ve("",!0)])}const q_=kt(xC,[["render",HC],["__scopeId","data-v-a4343335"]]),WC=Pc({name:"TravelDiary",props:{trip:{type:Object,required:!0}},setup(t){const e=Se(""),n=Se(""),r=Se([]),s=Se(null),i=Se(""),o=()=>{const p=localStorage.getItem(`diaryEntries-${t.trip.id}`);p&&(r.value=JSON.parse(p))},l=()=>{if(e.value.trim()&&n.value.trim()){const p={title:e.value,content:n.value,image:s.value||null};r.value.push(p),localStorage.setItem(`diaryEntries-${t.trip.id}`,JSON.stringify(r.value)),e.value="",n.value="",s.value=null}},c=p=>{const g=p.target.files[0];if(g){const _=new FileReader;_.onload=k=>{s.value=k.target.result},_.readAsDataURL(g)}},h=()=>{e.value="",n.value="",s.value=null,r.value=[],t.$emit("close")};ws(()=>{o()});const d=$t(()=>r.value.filter(p=>p.title.toLowerCase().includes(i.value.toLowerCase())));return{diaryTitle:e,diaryContent:n,diaryEntries:r,imagePreview:s,searchQuery:i,saveDiaryEntry:l,close:h,handleImageUpload:c,filteredDiaryEntries:d}}}),zC={class:"travel-diary"},KC={class:"mb-4"},GC={class:"mb-4"},QC={class:"mb-4"},JC={key:0,class:"mb-4"},YC=["src"],XC={class:"d-flex gap-3"},ZC={class:"my-4"},ek={key:1,class:"mt-5"},tk={class:"list-group"},nk={key:0,class:"mb-2"},rk=["src"];function sk(t,e,n,r,s,i){return te(),ne("div",zC,[e[11]||(e[11]=A("h3",null,"Travel Diary",-1)),A("div",KC,[e[6]||(e[6]=A("label",{for:"diaryTitle",class:"form-label"},"Title",-1)),Be(A("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.diaryTitle=o),type:"text",id:"diaryTitle",class:"form-control",placeholder:"Enter the title"},null,512),[[ze,t.diaryTitle]])]),A("div",GC,[e[7]||(e[7]=A("label",{for:"diaryContent",class:"form-label"},"Content",-1)),Be(A("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.diaryContent=o),id:"diaryContent",class:"form-control",rows:"4",placeholder:"Write your thoughts..."},null,512),[[ze,t.diaryContent]])]),A("div",QC,[e[8]||(e[8]=A("label",{for:"diaryImage",class:"form-label"},"Attach an Image",-1)),A("input",{type:"file",onChange:e[2]||(e[2]=(...o)=>t.handleImageUpload&&t.handleImageUpload(...o)),class:"form-control"},null,32)]),t.imagePreview?(te(),ne("div",JC,[e[9]||(e[9]=A("h5",null,"Image Preview:",-1)),A("img",{src:t.imagePreview,alt:"Diary Image Preview",class:"img-fluid",style:{"max-height":"200px","object-fit":"cover"}},null,8,YC)])):Ve("",!0),A("div",XC,[A("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=(...o)=>t.saveDiaryEntry&&t.saveDiaryEntry(...o))},"Save"),A("button",{class:"btn btn-secondary",onClick:e[4]||(e[4]=(...o)=>t.close&&t.close(...o))},"Close")]),A("div",ZC,[Be(A("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.searchQuery=o),type:"text",class:"form-control",placeholder:"Search entries by title..."},null,512),[[ze,t.searchQuery]])]),t.filteredDiaryEntries.length?(te(),ne("div",ek,[e[10]||(e[10]=A("h4",null,"Diary Entries",-1)),A("ul",tk,[(te(!0),ne(mt,null,Rr(t.filteredDiaryEntries,(o,l)=>(te(),ne("li",{key:l,class:"list-group-item"},[A("h5",null,Ee(o.title),1),A("p",null,Ee(o.content),1),o.image?(te(),ne("div",nk,[A("img",{src:o.image,alt:"Entry Image",class:"img-fluid",style:{"max-height":"100px","object-fit":"cover"}},null,8,rk)])):Ve("",!0)]))),128))])])):Ve("",!0)])}const H_=kt(WC,[["render",sk],["__scopeId","data-v-d9248566"]]),ik={name:"TripDetails",components:{TravelPoints:W_,Budget:j_,PackingList:$_,Reservations:q_,TravelDiary:H_},props:["id"],setup(t){const e=Se(null),n=Se(!1),r=Se(!1),s=Se(!1),i=Se(!1),o=Se(!1),l=async()=>{try{const k=ji(vs,"trips",t.id),V=await s_(k);V.exists()?e.value=V.data():console.log("No trip found with this ID")}catch(k){console.error("Error loading trip:",k)}};return ws(()=>{l()}),{trip:e,isTravelPointsVisible:n,isBudgetVisible:r,isPackingListVisible:s,isReservationsVisible:i,isTravelDiaryVisible:o,addTravelPoints:()=>{n.value=!0,r.value=!1,s.value=!1,i.value=!1,o.value=!1},planBudget:()=>{n.value=!1,r.value=!0,s.value=!1,i.value=!1,o.value=!1},addPackingList:()=>{n.value=!1,r.value=!1,s.value=!0,i.value=!1,o.value=!1},addReservations:()=>{n.value=!1,r.value=!1,s.value=!1,i.value=!0,o.value=!1},addTravelDiary:()=>{n.value=!1,r.value=!1,s.value=!1,i.value=!1,o.value=!0},closeSection:()=>{n.value=!1,r.value=!1,s.value=!1,i.value=!1,o.value=!1}}}},ok={class:"container py-5"},ak={class:"d-flex gap-3 my-4"},lk={key:0},ck={key:1},uk={key:2},hk={key:3},dk={key:4};function fk(t,e,n,r,s,i){const o=Ye("router-link"),l=Ye("TravelPoints",!0),c=Ye("Budget"),h=Ye("PackingList"),d=Ye("Reservations"),p=Ye("TravelDiary");return te(),ne("div",ok,[De(o,{to:"/home",class:"btn btn-outline-secondary mb-3"},{default:xr(()=>e[5]||(e[5]=[bt("Back")])),_:1}),A("h2",null,Ee(r.trip?r.trip.name:"Loading...")+" - Details",1),A("p",null,[e[6]||(e[6]=A("strong",null,"Country:",-1)),bt(" "+Ee(r.trip?r.trip.country:"No data"),1)]),A("p",null,[e[7]||(e[7]=A("strong",null,"Departure Date:",-1)),bt(" "+Ee(r.trip?r.trip.departureDate:"No data"),1)]),A("p",null,[e[8]||(e[8]=A("strong",null,"Arrival Date:",-1)),bt(" "+Ee(r.trip?r.trip.arrivalDate:"No data"),1)]),A("div",ak,[A("button",{class:"btn btn-green",onClick:e[0]||(e[0]=(...g)=>r.addTravelPoints&&r.addTravelPoints(...g))},"Add Travel Points"),A("button",{class:"btn btn-green",onClick:e[1]||(e[1]=(...g)=>r.planBudget&&r.planBudget(...g))},"Budget Planning"),A("button",{class:"btn btn-green",onClick:e[2]||(e[2]=(...g)=>r.addPackingList&&r.addPackingList(...g))},"Add to Packing List"),A("button",{class:"btn btn-green",onClick:e[3]||(e[3]=(...g)=>r.addReservations&&r.addReservations(...g))},"Reservations"),A("button",{class:"btn btn-green",onClick:e[4]||(e[4]=(...g)=>r.addTravelDiary&&r.addTravelDiary(...g))},"Travel Diary")]),r.isTravelPointsVisible?(te(),ne("div",lk,[De(l,{tripId:r.trip.id,onClose:r.closeSection},null,8,["tripId","onClose"])])):Ve("",!0),r.isBudgetVisible?(te(),ne("div",ck,[De(c,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0),r.isPackingListVisible?(te(),ne("div",uk,[De(h,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0),r.isReservationsVisible?(te(),ne("div",hk,[De(d,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0),r.isTravelDiaryVisible?(te(),ne("div",dk,[De(p,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0)])}const W_=kt(ik,[["render",fk],["__scopeId","data-v-e2de9413"]]),pk={name:"TripDetails",components:{TravelPoints:W_,Budget:j_,PackingList:$_,Reservations:q_,TravelDiary:H_},props:["id"],setup(t){const e=Se(null),n=Se(!1),r=Se(!1),s=Se(!1),i=Se(!1),o=Se(!1),l=async()=>{try{const k=ji(vs,"trips",t.id),V=await s_(k);V.exists()?(e.value=V.data(),console.log("Załadowano trip:",e.value)):console.log("No trip found with this ID")}catch(k){console.error("Error loading trip:",k)}};return ws(()=>{l()}),{trip:e,isTravelPointsVisible:n,isBudgetVisible:r,isPackingListVisible:s,isReservationsVisible:i,isTravelDiaryVisible:o,addTravelPoints:()=>{n.value=!0,r.value=!1,s.value=!1,i.value=!1,o.value=!1},planBudget:()=>{n.value=!1,r.value=!0,s.value=!1,i.value=!1,o.value=!1},addPackingList:()=>{n.value=!1,r.value=!1,s.value=!0,i.value=!1,o.value=!1},addReservations:()=>{n.value=!1,r.value=!1,s.value=!1,i.value=!0,o.value=!1},addTravelDiary:()=>{n.value=!1,r.value=!1,s.value=!1,i.value=!1,o.value=!0},closeSection:()=>{n.value=!1,r.value=!1,s.value=!1,i.value=!1,o.value=!1}}}},mk={class:"container py-5"},gk={class:"d-flex gap-3 my-4"},_k={key:0},yk={key:1},vk={key:2},Ek={key:3},Tk={key:4};function wk(t,e,n,r,s,i){var g;const o=Ye("router-link"),l=Ye("TravelPoints"),c=Ye("Budget"),h=Ye("PackingList"),d=Ye("Reservations"),p=Ye("TravelDiary");return te(),ne("div",mk,[De(o,{to:"/home",class:"btn btn-outline-secondary mb-3"},{default:xr(()=>e[5]||(e[5]=[bt("Back")])),_:1}),A("h2",null,Ee(r.trip?r.trip.name:"Loading...")+" - Details",1),A("p",null,[e[6]||(e[6]=A("strong",null,"Country:",-1)),bt(" "+Ee(r.trip?r.trip.country:"No data"),1)]),A("p",null,[e[7]||(e[7]=A("strong",null,"Departure Date:",-1)),bt(" "+Ee(r.trip?r.trip.departureDate:"No data"),1)]),A("p",null,[e[8]||(e[8]=A("strong",null,"Arrival Date:",-1)),bt(" "+Ee(r.trip?r.trip.arrivalDate:"No data"),1)]),A("div",gk,[A("button",{class:"btn btn-green",onClick:e[0]||(e[0]=(..._)=>r.addTravelPoints&&r.addTravelPoints(..._))},"Add Travel Points"),A("button",{class:"btn btn-green",onClick:e[1]||(e[1]=(..._)=>r.planBudget&&r.planBudget(..._))},"Budget Planning"),A("button",{class:"btn btn-green",onClick:e[2]||(e[2]=(..._)=>r.addPackingList&&r.addPackingList(..._))},"Add to Packing List"),A("button",{class:"btn btn-green",onClick:e[3]||(e[3]=(..._)=>r.addReservations&&r.addReservations(..._))},"Reservations"),A("button",{class:"btn btn-green",onClick:e[4]||(e[4]=(..._)=>r.addTravelDiary&&r.addTravelDiary(..._))},"Travel Diary")]),r.isTravelPointsVisible?(te(),ne("div",_k,[De(l,{tripId:(g=r.trip)==null?void 0:g.id,onClose:r.closeSection},null,8,["tripId","onClose"])])):Ve("",!0),r.isBudgetVisible?(te(),ne("div",yk,[De(c,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0),r.isPackingListVisible?(te(),ne("div",vk,[De(h,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0),r.isReservationsVisible?(te(),ne("div",Ek,[De(d,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0),r.isTravelDiaryVisible?(te(),ne("div",Tk,[De(p,{trip:r.trip,onClose:r.closeSection},null,8,["trip","onClose"])])):Ve("",!0)])}const Ik=kt(pk,[["render",wk],["__scopeId","data-v-53a27752"]]),Ak={name:"Login",setup(){const t=Se(""),e=Se(""),n=Se(""),r=Ta();return{email:t,password:e,loginWithEmail:async()=>{try{const l=await G0(Es,t.value,e.value);console.log("User logged in:",l.user),r.push("/home")}catch(l){n.value="Login failed: "+l.message,console.error("Error during login",l)}},loginWithGoogle:async()=>{try{const l=new In,c=await yS(Es,l);console.log("User logged in with Google:",c.user),r.push("/home")}catch(l){n.value="Google login failed: "+l.message,console.error("Error during Google login",l)}},errorMessage:n,cancelLogin:()=>{r.push("/")}}}},bk={class:"login-page"},Rk={key:0,class:"error"},Sk={class:"input-group"},Pk={class:"input-group"},Ck={class:"action-buttons"};function kk(t,e,n,r,s,i){const o=Ye("router-link");return te(),ne("div",bk,[De(o,{to:"/",class:"btn btn-outline-secondary mb-3"},{default:xr(()=>e[5]||(e[5]=[bt("Back")])),_:1}),e[9]||(e[9]=A("h1",null,"Welcome to Trip Master!",-1)),r.errorMessage?(te(),ne("div",Rk,Ee(r.errorMessage),1)):Ve("",!0),A("form",{onSubmit:e[2]||(e[2]=Dc((...l)=>r.loginWithEmail&&r.loginWithEmail(...l),["prevent"]))},[A("div",Sk,[e[6]||(e[6]=A("label",{for:"email"},"Email:",-1)),Be(A("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),id:"email",required:""},null,512),[[ze,r.email]])]),A("div",Pk,[e[7]||(e[7]=A("label",{for:"password"},"Password:",-1)),Be(A("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=l=>r.password=l),id:"password",required:""},null,512),[[ze,r.password]])]),e[8]||(e[8]=A("button",{type:"submit"},"Login",-1))],32),A("div",Ck,[A("button",{class:"google-login",onClick:e[3]||(e[3]=(...l)=>r.loginWithGoogle&&r.loginWithGoogle(...l))},"Login with Google"),A("button",{class:"cancel",onClick:e[4]||(e[4]=(...l)=>r.cancelLogin&&r.cancelLogin(...l))},"Cancel")])])}const Dk=kt(Ak,[["render",kk],["__scopeId","data-v-635a906c"]]),Vk={setup(){const t=Se(""),e=Se(""),n=Se(""),r=Se(""),s=Ta();return{email:t,password:e,confirmPassword:n,errorMessage:r,registerUser:async()=>{if(e.value!==n.value){r.value="Passwords do not match.";return}try{await K0(Es,t.value,e.value),s.push("/login")}catch(l){r.value=l.message}},cancelRegistration:()=>{s.push("/")}}}},Nk={class:"register"},Ok={class:"input-group"},xk={class:"input-group"},Mk={class:"input-group"},Lk={key:0,class:"error"};function Uk(t,e,n,r,s,i){const o=Ye("router-link");return te(),ne("div",Nk,[De(o,{to:"/",class:"btn btn-outline-secondary mb-3"},{default:xr(()=>e[5]||(e[5]=[bt("Back")])),_:1}),e[10]||(e[10]=A("h2",null,"Create an Account",-1)),A("form",{onSubmit:e[3]||(e[3]=Dc((...l)=>r.registerUser&&r.registerUser(...l),["prevent"]))},[A("div",Ok,[e[6]||(e[6]=A("label",{for:"email"},"Email:",-1)),Be(A("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),id:"email",required:""},null,512),[[ze,r.email]])]),A("div",xk,[e[7]||(e[7]=A("label",{for:"password"},"Password:",-1)),Be(A("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=l=>r.password=l),id:"password",required:""},null,512),[[ze,r.password]])]),A("div",Mk,[e[8]||(e[8]=A("label",{for:"confirmPassword"},"Confirm Password:",-1)),Be(A("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=l=>r.confirmPassword=l),id:"confirmPassword",required:""},null,512),[[ze,r.confirmPassword]])]),e[9]||(e[9]=A("button",{type:"submit"},"Register",-1))],32),r.errorMessage?(te(),ne("p",Lk,Ee(r.errorMessage),1)):Ve("",!0),A("button",{class:"cancel",onClick:e[4]||(e[4]=(...l)=>r.cancelRegistration&&r.cancelRegistration(...l))},"Cancel")])}const Fk=kt(Vk,[["render",Uk],["__scopeId","data-v-3f081e27"]]),Bk={},jk={class:"info-page"};function $k(t,e){const n=Ye("router-link");return te(),ne("div",jk,[De(n,{to:"/",class:"btn btn-outline-secondary mb-3"},{default:xr(()=>e[0]||(e[0]=[bt("Back")])),_:1}),e[1]||(e[1]=A("div",{class:"about-app"},[A("h2",null,"About App"),A("p",null," Planning a trip can be overwhelming, but with TripMaster, organizing your adventures has never been easier. TripMaster is a comprehensive travel planning app designed to simplify every step of your journey—from choosing a destination to packing your bags. Whether you’re a spontaneous explorer or a meticulous planner, this app ensures that you can focus on the excitement of travel rather than the hassle of logistics. ")],-1)),e[2]||(e[2]=A("div",{class:"authors"},[A("h2",null,"Authors"),A("ul",null,[A("li",null,"Amanda Miśkiewicz"),A("li",null,"Julia Mieszaniec"),A("li",null,"Jan Paluch")])],-1))])}const qk=kt(Bk,[["render",$k],["__scopeId","data-v-fa494dfa"]]),Hk=[{path:"/",name:"Home",component:QT},{path:"/info",name:"Info",component:qk},{path:"/login",name:"Login",component:Dk},{path:"/register",name:"Register",component:Fk},{path:"/home",name:"HomeView",component:Hf,meta:{requiresAuth:!0}},{path:"/trips",name:"Trips",component:Hf,meta:{requiresAuth:!0}},{path:"/trip/:id",name:"TripDetails",component:Ik,props:!0,meta:{requiresAuth:!0}}],z_=jT({history:gT(),routes:Hk});z_.beforeEach((t,e,n)=>{const r=F_(),s=t.matched.some(o=>o.meta.requiresAuth),i=r.currentUser;s&&!i?n("/login"):n()});const Wk="modulepreload",zk=function(t){return"/"+t},Wf={},Kk=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=zk(c),c in Wf)return;Wf[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Wk,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function Gk(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=t;let l,c;const h=async(p=!0)=>{await c};async function d(){if("serviceWorker"in navigator){if(l=await Kk(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/sw.js",{scope:"/",type:"classic"})).catch(p=>{o==null||o(p)}),!l)return;l.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),l.addEventListener("installed",p=>{p.isUpdate||r==null||r()}),l.register({immediate:e}).then(p=>{i?i("/sw.js",p):s==null||s(p)}).catch(p=>{o==null||o(p)})}}return c=d(),h}OE(FE).use(z_).mount("#app");Gk({onNeedRefresh(){console.log("Nowa wersja dostępna. Odśwież stronę!")},onOfflineReady(){console.log("Aplikacja jest teraz dostępna offline!")}});
