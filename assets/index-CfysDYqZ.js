(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ql(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const je={},fs=[],hn=()=>{},dv=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hl=t=>t.startsWith("onUpdate:"),St=Object.assign,Wl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fv=Object.prototype.hasOwnProperty,Le=(t,e)=>fv.call(t,e),ve=Array.isArray,ps=t=>ba(t)==="[object Map]",Fp=t=>ba(t)==="[object Set]",Ie=t=>typeof t=="function",it=t=>typeof t=="string",wr=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Up=t=>(ze(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),$p=Object.prototype.toString,ba=t=>$p.call(t),pv=t=>ba(t).slice(8,-1),jp=t=>ba(t)==="[object Object]",zl=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hi=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gv=/-(\w)/g,Xt=Aa(t=>t.replace(gv,(e,n)=>n?n.toUpperCase():"")),mv=/\B([A-Z])/g,Kr=Aa(t=>t.replace(mv,"-$1").toLowerCase()),Ra=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sc=Aa(t=>t?`on${Ra(t)}`:""),ar=(t,e)=>!Object.is(t,e),Co=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let td;const Sa=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(t){if(ve(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=it(r)?Ev(r):Kl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(it(t)||ze(t))return t}const _v=/;(?![^(]*\))/g,yv=/:([^]+)/,vv=/\/\*[^]*?\*\//g;function Ev(t){const e={};return t.replace(vv,"").split(_v).forEach(n=>{if(n){const r=n.split(yv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gs(t){let e="";if(it(t))e=t;else if(ve(t))for(let n=0;n<t.length;n++){const r=gs(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tv=ql(wv);function qp(t){return!!t||t===""}const Hp=t=>!!(t&&t.__v_isRef===!0),Oe=t=>it(t)?t:t==null?"":ve(t)||ze(t)&&(t.toString===$p||!Ie(t.toString))?Hp(t)?Oe(t.value):JSON.stringify(t,Wp,2):String(t),Wp=(t,e)=>Hp(e)?Wp(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pc(r,i)+" =>"]=s,n),{})}:Fp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pc(n))}:wr(e)?Pc(e):ze(e)&&!ve(e)&&!jp(e)?String(e):e,Pc=(t,e="")=>{var n;return wr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class zp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Kp(t){return new zp(t)}function Gp(){return xt}function Iv(t,e=!1){xt&&xt.cleanups.push(t)}let Be;const Cc=new WeakSet;class Qp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cc.has(this)&&(Cc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nd(this),Xp(this);const e=Be,n=nn;Be=this,nn=!0;try{return this.fn()}finally{Zp(this),Be=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,nd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){nl(this)&&this.run()}get dirty(){return nl(this)}}let Yp=0,di,fi;function Jp(t,e=!1){if(t.flags|=8,e){t.next=fi,fi=t;return}t.next=di,di=t}function Gl(){Yp++}function Ql(){if(--Yp>0)return;if(fi){let e=fi;for(fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Yl(r),bv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function nl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function eg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai))return;t.globalVersion=Ai;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!nl(t)){t.flags&=-3;return}const n=Be,r=nn;Be=t,nn=!0;try{Xp(t);const s=t.fn(t._value);(e.version===0||ar(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,nn=r,Zp(t),t.flags&=-3}}function Yl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Yl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const tg=[];function Tr(){tg.push(nn),nn=!1}function Ir(){const t=tg.pop();nn=t===void 0?!0:t}function nd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let Ai=0;class Av{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!nn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new Av(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,ng(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){Gl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ql()}}}function ng(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ng(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ho=new WeakMap,Lr=Symbol(""),rl=Symbol(""),Ri=Symbol("");function Tt(t,e,n){if(nn&&Be){let r=Ho.get(t);r||Ho.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Jl),s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=Ho.get(t);if(!o){Ai++;return}const c=l=>{l&&l.trigger()};if(Gl(),e==="clear")o.forEach(c);else{const l=ve(t),u=l&&zl(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ri||!wr(g)&&g>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ri)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Lr)),ps(t)&&c(o.get(rl)));break;case"delete":l||(c(o.get(Lr)),ps(t)&&c(o.get(rl)));break;case"set":ps(t)&&c(o.get(Lr));break}}Ql()}function Rv(t,e){const n=Ho.get(t);return n&&n.get(e)}function ns(t){const e=Ne(t);return e===t?e:(Tt(e,"iterate",Ri),Qt(t)?e:e.map(It))}function Pa(t){return Tt(t=Ne(t),"iterate",Ri),t}const Sv={__proto__:null,[Symbol.iterator](){return kc(this,Symbol.iterator,It)},concat(...t){return ns(this).concat(...t.map(e=>ve(e)?ns(e):e))},entries(){return kc(this,"entries",t=>(t[1]=It(t[1]),t))},every(t,e){return An(this,"every",t,e,void 0,arguments)},filter(t,e){return An(this,"filter",t,e,n=>n.map(It),arguments)},find(t,e){return An(this,"find",t,e,It,arguments)},findIndex(t,e){return An(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return An(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return An(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return An(this,"forEach",t,e,void 0,arguments)},includes(...t){return xc(this,"includes",t)},indexOf(...t){return xc(this,"indexOf",t)},join(t){return ns(this).join(t)},lastIndexOf(...t){return xc(this,"lastIndexOf",t)},map(t,e){return An(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return rd(this,"reduce",t,e)},reduceRight(t,...e){return rd(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return An(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return ns(this).toReversed()},toSorted(t){return ns(this).toSorted(t)},toSpliced(...t){return ns(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return kc(this,"values",It)}};function kc(t,e,n){const r=Pa(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Pv=Array.prototype;function An(t,e,n,r,s,i){const o=Pa(t),c=o!==t&&!Qt(t),l=o[e];if(l!==Pv[e]){const p=l.apply(t,i);return c?It(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,It(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=l.call(o,u,r);return c&&s?s(d):d}function rd(t,e,n,r){const s=Pa(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,It(c),l,t)}),s[e](i,...r)}function xc(t,e,n){const r=Ne(t);Tt(r,"iterate",Ri);const s=r[e](...n);return(s===-1||s===!1)&&eu(n[0])?(n[0]=Ne(n[0]),r[e](...n)):s}function ti(t,e,n=[]){Tr(),Gl();const r=Ne(t)[e].apply(t,n);return Ql(),Ir(),r}const Cv=ql("__proto__,__v_isRef,__isVue"),rg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wr));function kv(t){wr(t)||(t=String(t));const e=Ne(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class sg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?$v:cg:i?ag:og).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ve(e);if(!s){let l;if(o&&(l=Sv[n]))return l;if(n==="hasOwnProperty")return kv}const c=Reflect.get(e,n,et(e)?e:r);return(wr(n)?rg.has(n):Cv(n))||(s||Tt(e,"get",n),i)?c:et(c)?o&&zl(n)?c:c.value:ze(c)?s?ug(c):Ui(c):c}}class ig extends sg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ur(i);if(!Qt(r)&&!Ur(r)&&(i=Ne(i),r=Ne(r)),!ve(e)&&et(i)&&!et(r))return l?!1:(i.value=r,!0)}const o=ve(e)&&zl(n)?Number(n)<e.length:Le(e,n),c=Reflect.set(e,n,r,et(e)?e:s);return e===Ne(s)&&(o?ar(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),c}deleteProperty(e,n){const r=Le(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wr(n)||!rg.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",ve(e)?"length":Lr),Reflect.ownKeys(e)}}class xv extends sg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dv=new ig,Ov=new xv,Vv=new ig(!0);const sl=t=>t,_o=t=>Reflect.getPrototypeOf(t);function Nv(t,e,n){return function(...r){const s=this.__v_raw,i=Ne(s),o=ps(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?sl:e?il:It;return!e&&Tt(i,"iterate",l?rl:Lr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mv(t,e){const n={get(s){const i=this.__v_raw,o=Ne(i),c=Ne(s);t||(ar(s,c)&&Tt(o,"get",s),Tt(o,"get",c));const{has:l}=_o(o),u=e?sl:t?il:It;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Ne(s),"iterate",Lr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ne(i),c=Ne(s);return t||(ar(s,c)&&Tt(o,"has",s),Tt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ne(c),u=e?sl:t?il:It;return!t&&Tt(l,"iterate",Lr),c.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return St(n,t?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(s){!e&&!Qt(s)&&!Ur(s)&&(s=Ne(s));const i=Ne(this);return _o(i).has.call(i,s)||(i.add(s),Cn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Ur(i)&&(i=Ne(i));const o=Ne(this),{has:c,get:l}=_o(o);let u=c.call(o,s);u||(s=Ne(s),u=c.call(o,s));const d=l.call(o,s);return o.set(s,i),u?ar(i,d)&&Cn(o,"set",s,i):Cn(o,"add",s,i),this},delete(s){const i=Ne(this),{has:o,get:c}=_o(i);let l=o.call(i,s);l||(s=Ne(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Cn(i,"delete",s,void 0),u},clear(){const s=Ne(this),i=s.size!==0,o=s.clear();return i&&Cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Nv(s,t,e)}),n}function Xl(t,e){const n=Mv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Le(n,s)&&s in r?n:r,s,i)}const Lv={get:Xl(!1,!1)},Fv={get:Xl(!1,!0)},Uv={get:Xl(!0,!1)};const og=new WeakMap,ag=new WeakMap,cg=new WeakMap,$v=new WeakMap;function jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bv(t){return t.__v_skip||!Object.isExtensible(t)?0:jv(pv(t))}function Ui(t){return Ur(t)?t:Zl(t,!1,Dv,Lv,og)}function lg(t){return Zl(t,!1,Vv,Fv,ag)}function ug(t){return Zl(t,!0,Ov,Uv,cg)}function Zl(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Bv(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function cr(t){return Ur(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ur(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function eu(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function tu(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&Bp(t,"__v_skip",!0),t}const It=t=>ze(t)?Ui(t):t,il=t=>ze(t)?ug(t):t;function et(t){return t?t.__v_isRef===!0:!1}function Je(t){return hg(t,!1)}function qv(t){return hg(t,!0)}function hg(t,e){return et(t)?t:new Hv(t,e)}class Hv{constructor(e,n){this.dep=new Jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:It(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Ur(e);e=r?e:Ne(e),ar(e,n)&&(this._rawValue=e,this._value=r?e:It(e),this.dep.trigger())}}function On(t){return et(t)?t.value:t}const Wv={get:(t,e,n)=>e==="__v_raw"?t:On(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return et(s)&&!et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dg(t){return cr(t)?t:new Proxy(t,Wv)}function zv(t){const e=ve(t)?new Array(t.length):{};for(const n in t)e[n]=Gv(t,n);return e}class Kv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Rv(Ne(this._object),this._key)}}function Gv(t,e,n){const r=t[e];return et(r)?r:new Kv(t,e,n)}class Qv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return Jp(this,!0),!0}get value(){const e=this.dep.track();return eg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yv(t,e,n=!1){let r,s;return Ie(t)?r=t:(r=t.get,s=t.set),new Qv(r,s,n)}const vo={},Wo=new WeakMap;let Vr;function Jv(t,e=!1,n=Vr){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function Xv(t,e,n=je){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:Qt(H)||s===!1||s===0?kn(H,1):kn(H);let d,p,g,v,P=!1,D=!1;if(et(t)?(p=()=>t.value,P=Qt(t)):cr(t)?(p=()=>u(t),P=!0):ve(t)?(D=!0,P=t.some(H=>cr(H)||Qt(H)),p=()=>t.map(H=>{if(et(H))return H.value;if(cr(H))return u(H);if(Ie(H))return l?l(H,2):H()})):Ie(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Tr();try{g()}finally{Ir()}}const H=Vr;Vr=d;try{return l?l(t,3,[v]):t(v)}finally{Vr=H}}:p=hn,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>kn(H(),oe)}const x=Gp(),z=()=>{d.stop(),x&&x.active&&Wl(x.effects,d)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),z()}}let W=D?new Array(t.length).fill(vo):vo;const q=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||P||(D?oe.some((le,A)=>ar(le,W[A])):ar(oe,W))){g&&g();const le=Vr;Vr=d;try{const A=[oe,W===vo?void 0:D&&W[0]===vo?[]:W,v];l?l(e,3,A):e(...A),W=oe}finally{Vr=le}}}else d.run()};return c&&c(q),d=new Qp(p),d.scheduler=o?()=>o(q,!1):q,v=H=>Jv(H,!1,d),g=d.onStop=()=>{const H=Wo.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();Wo.delete(d)}},e?r?q(!0):W=d.run():o?o(q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function kn(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,et(t))kn(t.value,e,n);else if(ve(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Fp(t)||ps(t))t.forEach(r=>{kn(r,e,n)});else if(jp(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $i(t,e,n,r){try{return r?t(...r):t()}catch(s){Ca(s,e,n)}}function _n(t,e,n,r){if(Ie(t)){const s=$i(t,e,n,r);return s&&Up(s)&&s.catch(i=>{Ca(i,e,n)}),s}if(ve(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function Ca(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||je;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,u)===!1)return}c=c.parent}if(i){Tr(),$i(i,null,10,[t,l,u]),Ir();return}}Zv(t,n,s,r,o)}function Zv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let cn=-1;const ms=[];let Jn=null,ss=0;const fg=Promise.resolve();let zo=null;function nu(t){const e=zo||fg;return t?e.then(this?t.bind(this):t):e}function eE(t){let e=cn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=Si(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ru(t){if(!(t.flags&1)){const e=Si(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=Si(n)?Dt.push(t):Dt.splice(eE(e),0,t),t.flags|=1,pg()}}function pg(){zo||(zo=fg.then(mg))}function tE(t){ve(t)?ms.push(...t):Jn&&t.id===-1?Jn.splice(ss+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),pg()}function sd(t,e,n=cn+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function gg(t){if(ms.length){const e=[...new Set(ms)].sort((n,r)=>Si(n)-Si(r));if(ms.length=0,Jn){Jn.push(...e);return}for(Jn=e,ss=0;ss<Jn.length;ss++){const n=Jn[ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,ss=0}}const Si=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mg(t){try{for(cn=0;cn<Dt.length;cn++){const e=Dt[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<Dt.length;cn++){const e=Dt[cn];e&&(e.flags&=-2)}cn=-1,Dt.length=0,gg(),zo=null,(Dt.length||ms.length)&&mg()}}let Lt=null,_g=null;function Ko(t){const e=Lt;return Lt=t,_g=t&&t.type.__scopeId||null,e}function Bt(t,e=Lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&pd(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&pd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Kt(t,e){if(Lt===null)return t;const n=Va(Lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=je]=e[s];i&&(Ie(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Tr(),_n(l,n,8,[t.el,c,t,e]),Ir())}}const nE=Symbol("_vte"),rE=t=>t.__isTeleport;function su(t,e){t.shapeFlag&6&&t.component?(t.transition=e,su(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function yg(t,e){return Ie(t)?St({name:t.name},e,{setup:t}):t}function vg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Go(t,e,n,r,s=!1){if(ve(t)){t.forEach((P,D)=>Go(P,e&&(ve(e)?e[D]:e),n,r,s));return}if(pi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Go(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Va(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===je?c.refs={}:c.refs,p=c.setupState,g=Ne(p),v=p===je?()=>!1:P=>Le(g,P);if(u!=null&&u!==l&&(it(u)?(d[u]=null,v(u)&&(p[u]=null)):et(u)&&(u.value=null)),Ie(l))$i(l,c,12,[o,d]);else{const P=it(l),D=et(l);if(P||D){const x=()=>{if(t.f){const z=P?v(l)?p[l]:d[l]:l.value;s?ve(z)&&Wl(z,i):ve(z)?z.includes(i)||z.push(i):P?(d[l]=[i],v(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else P?(d[l]=o,v(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(d[t.k]=o))};o?(x.id=-1,$t(x,n)):x()}}}Sa().requestIdleCallback;Sa().cancelIdleCallback;const pi=t=>!!t.type.__asyncLoader,Eg=t=>t.type.__isKeepAlive;function sE(t,e){wg(t,"a",e)}function iE(t,e){wg(t,"da",e)}function wg(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Eg(s.parent.vnode)&&oE(r,e,n,s),s=s.parent}}function oE(t,e,n,r){const s=ka(e,t,r,!0);Tg(()=>{Wl(r[e],s)},n)}function ka(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tr();const c=Bi(n),l=_n(e,n,t,o);return c(),Ir(),l});return r?s.unshift(i):s.push(i),i}}const jn=t=>(e,n=ft)=>{(!Ci||t==="sp")&&ka(t,(...r)=>e(...r),n)},aE=jn("bm"),ji=jn("m"),cE=jn("bu"),lE=jn("u"),uE=jn("bum"),Tg=jn("um"),hE=jn("sp"),dE=jn("rtg"),fE=jn("rtc");function pE(t,e=ft){ka("ec",t,e)}const gE="components";function Vs(t,e){return _E(gE,t,!0,e)||t}const mE=Symbol.for("v-ndc");function _E(t,e,n=!0,r=!1){const s=Lt||ft;if(s){const i=s.type;{const c=sw(i,!1);if(c&&(c===e||c===Xt(e)||c===Ra(Xt(e))))return i}const o=id(s[t]||i[t],e)||id(s.appContext[t],e);return!o&&r?i:o}}function id(t,e){return t&&(t[e]||t[Xt(e)]||t[Ra(Xt(e))])}function $r(t,e,n,r){let s;const i=n,o=ve(t);if(o||it(t)){const c=o&&cr(t);let l=!1;c&&(l=!Qt(t),t=Pa(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?It(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const ol=t=>t?qg(t)?Va(t):ol(t.parent):null,gi=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ol(t.parent),$root:t=>ol(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bg(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=nu.bind(t.proxy)),$watch:t=>UE.bind(t)}),Dc=(t,e)=>t!==je&&!t.__isScriptSetup&&Le(t,e),yE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Dc(r,e))return o[e]=1,r[e];if(s!==je&&Le(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,i[e];if(n!==je&&Le(n,e))return o[e]=4,n[e];al&&(o[e]=0)}}const d=gi[e];let p,g;if(d)return e==="$attrs"&&Tt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==je&&Le(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Le(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Dc(s,e)?(s[e]=n,!0):r!==je&&Le(r,e)?(r[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==je&&Le(t,o)||Dc(e,o)||(c=i[0])&&Le(c,o)||Le(r,o)||Le(gi,o)||Le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function od(t){return ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let al=!0;function vE(t){const e=bg(t),n=t.proxy,r=t.ctx;al=!1,e.beforeCreate&&ad(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:P,activated:D,deactivated:x,beforeDestroy:z,beforeUnmount:W,destroyed:q,unmounted:H,render:oe,renderTracked:le,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:I,inheritAttrs:b,components:R,directives:_,filters:re}=e;if(u&&EE(u,r,null),o)for(const j in o){const B=o[j];Ie(B)&&(r[j]=B.bind(n))}if(s){const j=s.call(n,n);ze(j)&&(t.data=Ui(j))}if(al=!0,i)for(const j in i){const B=i[j],ce=Ie(B)?B.bind(n,n):Ie(B.get)?B.get.bind(n,n):hn,de=!Ie(B)&&Ie(B.set)?B.set.bind(n):hn,Se=rt({get:ce,set:de});Object.defineProperty(r,j,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ee=>Se.value=Ee})}if(c)for(const j in c)Ig(c[j],r,n,j);if(l){const j=Ie(l)?l.call(n):l;Reflect.ownKeys(j).forEach(B=>{ko(B,j[B])})}d&&ad(d,t,"c");function N(j,B){ve(B)?B.forEach(ce=>j(ce.bind(n))):B&&j(B.bind(n))}if(N(aE,p),N(ji,g),N(cE,v),N(lE,P),N(sE,D),N(iE,x),N(pE,y),N(fE,le),N(dE,A),N(uE,W),N(Tg,H),N(hE,E),ve(I))if(I.length){const j=t.exposed||(t.exposed={});I.forEach(B=>{Object.defineProperty(j,B,{get:()=>n[B],set:ce=>n[B]=ce})})}else t.exposed||(t.exposed={});oe&&t.render===hn&&(t.render=oe),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),_&&(t.directives=_),E&&vg(t)}function EE(t,e,n=hn){ve(t)&&(t=cl(t));for(const r in t){const s=t[r];let i;ze(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ad(t,e,n){_n(ve(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ig(t,e,n,r){let s=r.includes(".")?Fg(n,r):()=>n[r];if(it(t)){const i=e[t];Ie(i)&&_s(s,i)}else if(Ie(t))_s(s,t.bind(n));else if(ze(t))if(ve(t))t.forEach(i=>Ig(i,e,n,r));else{const i=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(i)&&_s(s,i,t)}}function bg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Qo(l,u,o,!0)),Qo(l,e,o)),ze(e)&&i.set(e,l),l}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=wE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const wE={data:cd,props:ld,emits:ld,methods:si,computed:si,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:si,directives:si,watch:IE,provide:cd,inject:TE};function cd(t,e){return e?t?function(){return St(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function TE(t,e){return si(cl(t),cl(e))}function cl(t){if(ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function si(t,e){return t?St(Object.create(null),t,e):e}function ld(t,e){return t?ve(t)&&ve(e)?[...new Set([...t,...e])]:St(Object.create(null),od(t),od(e??{})):e}function IE(t,e){if(!t)return e;if(!e)return t;const n=St(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Ag(){return{app:null,config:{isNativeTag:dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bE=0;function AE(t,e){return function(r,s=null){Ie(r)||(r=St({},r)),s!=null&&!ze(s)&&(s=null);const i=Ag(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:bE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ow,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&Ie(d.install)?(o.add(d),d.install(u,...p)):Ie(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!l){const v=u._ceVNode||Fe(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,d,g),l=!0,u._container=d,d.__vue_app__=u,Va(v.component)}},onUnmount(d){c.push(d)},unmount(){l&&(_n(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Fr;Fr=u;try{return d()}finally{Fr=p}}};return u}}let Fr=null;function ko(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=ft||Lt;if(r||Fr){const s=Fr?Fr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ie(e)?e.call(r&&r.proxy):e}}function RE(){return!!(ft||Lt||Fr)}const Rg={},Sg=()=>Object.create(Rg),Pg=t=>Object.getPrototypeOf(t)===Rg;function SE(t,e,n,r=!1){const s={},i=Sg();t.propsDefaults=Object.create(null),Cg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function PE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ne(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(xa(t.emitsOptions,g))continue;const v=e[g];if(l)if(Le(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const P=Xt(g);s[P]=ll(l,c,P,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{Cg(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!Le(e,p)&&((d=Kr(p))===p||!Le(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ll(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Le(e,p))&&(delete i[p],u=!0)}u&&Cn(t.attrs,"set","")}function Cg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(hi(l))continue;const u=e[l];let d;s&&Le(s,d=Xt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ne(n),u=c||je;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ll(s,l,p,u[p],t,!Le(u,p))}}return o}function ll(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Le(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Bi(s);r=u[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const CE=new WeakMap;function kg(t,e,n=!1){const r=n?CE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!Ie(t)){const d=p=>{l=!0;const[g,v]=kg(p,e,!0);St(o,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return ze(t)&&r.set(t,fs),fs;if(ve(i))for(let d=0;d<i.length;d++){const p=Xt(i[d]);ud(p)&&(o[p]=je)}else if(i)for(const d in i){const p=Xt(d);if(ud(p)){const g=i[d],v=o[p]=ve(g)||Ie(g)?{type:g}:St({},g),P=v.type;let D=!1,x=!0;if(ve(P))for(let z=0;z<P.length;++z){const W=P[z],q=Ie(W)&&W.name;if(q==="Boolean"){D=!0;break}else q==="String"&&(x=!1)}else D=Ie(P)&&P.name==="Boolean";v[0]=D,v[1]=x,(D||Le(v,"default"))&&c.push(p)}}const u=[o,c];return ze(t)&&r.set(t,u),u}function ud(t){return t[0]!=="$"&&!hi(t)}const xg=t=>t[0]==="_"||t==="$stable",iu=t=>ve(t)?t.map(un):[un(t)],kE=(t,e,n)=>{if(e._n)return e;const r=Bt((...s)=>iu(e(...s)),n);return r._c=!1,r},Dg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xg(s))continue;const i=t[s];if(Ie(i))e[s]=kE(s,i,r);else if(i!=null){const o=iu(i);e[s]=()=>o}}},Og=(t,e)=>{const n=iu(e);t.slots.default=()=>n},Vg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},xE=(t,e,n)=>{const r=t.slots=Sg();if(t.vnode.shapeFlag&32){const s=e._;s?(Vg(r,e,n),n&&Bp(r,"_",s,!0)):Dg(e,r)}else e&&Og(t,e)},DE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=je;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Vg(s,e,n):(i=!e.$stable,Dg(e,s)),o=e}else e&&(Og(t,e),o={default:1});if(i)for(const c in s)!xg(c)&&o[c]==null&&delete s[c]},$t=zE;function OE(t){return VE(t)}function VE(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=hn,insertStaticContent:P}=t,D=(w,T,S,M=null,$=null,L=null,ee=void 0,J=null,Q=!!T.dynamicChildren)=>{if(w===T)return;w&&!ni(w,T)&&(M=V(w),Ee(w,$,L,!0),w=null),T.patchFlag===-2&&(Q=!1,T.dynamicChildren=null);const{type:K,ref:fe,shapeFlag:ne}=T;switch(K){case Da:x(w,T,S,M);break;case jr:z(w,T,S,M);break;case Vc:w==null&&W(T,S,M,ee);break;case bt:R(w,T,S,M,$,L,ee,J,Q);break;default:ne&1?oe(w,T,S,M,$,L,ee,J,Q):ne&6?_(w,T,S,M,$,L,ee,J,Q):(ne&64||ne&128)&&K.process(w,T,S,M,$,L,ee,J,Q,Z)}fe!=null&&$&&Go(fe,w&&w.ref,L,T||w,!T)},x=(w,T,S,M)=>{if(w==null)r(T.el=c(T.children),S,M);else{const $=T.el=w.el;T.children!==w.children&&u($,T.children)}},z=(w,T,S,M)=>{w==null?r(T.el=l(T.children||""),S,M):T.el=w.el},W=(w,T,S,M)=>{[w.el,w.anchor]=P(w.children,T,S,M,w.el,w.anchor)},q=({el:w,anchor:T},S,M)=>{let $;for(;w&&w!==T;)$=g(w),r(w,S,M),w=$;r(T,S,M)},H=({el:w,anchor:T})=>{let S;for(;w&&w!==T;)S=g(w),s(w),w=S;s(T)},oe=(w,T,S,M,$,L,ee,J,Q)=>{T.type==="svg"?ee="svg":T.type==="math"&&(ee="mathml"),w==null?le(T,S,M,$,L,ee,J,Q):E(w,T,$,L,ee,J,Q)},le=(w,T,S,M,$,L,ee,J)=>{let Q,K;const{props:fe,shapeFlag:ne,transition:ae,dirs:ye}=w;if(Q=w.el=o(w.type,L,fe&&fe.is,fe),ne&8?d(Q,w.children):ne&16&&y(w.children,Q,null,M,$,Oc(w,L),ee,J),ye&&Dr(w,null,M,"created"),A(Q,w,w.scopeId,ee,M),fe){for(const Ae in fe)Ae!=="value"&&!hi(Ae)&&i(Q,Ae,null,fe[Ae],L,M);"value"in fe&&i(Q,"value",null,fe.value,L),(K=fe.onVnodeBeforeMount)&&an(K,M,w)}ye&&Dr(w,null,M,"beforeMount");const pe=NE($,ae);pe&&ae.beforeEnter(Q),r(Q,T,S),((K=fe&&fe.onVnodeMounted)||pe||ye)&&$t(()=>{K&&an(K,M,w),pe&&ae.enter(Q),ye&&Dr(w,null,M,"mounted")},$)},A=(w,T,S,M,$)=>{if(S&&v(w,S),M)for(let L=0;L<M.length;L++)v(w,M[L]);if($){let L=$.subTree;if(T===L||$g(L.type)&&(L.ssContent===T||L.ssFallback===T)){const ee=$.vnode;A(w,ee,ee.scopeId,ee.slotScopeIds,$.parent)}}},y=(w,T,S,M,$,L,ee,J,Q=0)=>{for(let K=Q;K<w.length;K++){const fe=w[K]=J?Xn(w[K]):un(w[K]);D(null,fe,T,S,M,$,L,ee,J)}},E=(w,T,S,M,$,L,ee)=>{const J=T.el=w.el;let{patchFlag:Q,dynamicChildren:K,dirs:fe}=T;Q|=w.patchFlag&16;const ne=w.props||je,ae=T.props||je;let ye;if(S&&Or(S,!1),(ye=ae.onVnodeBeforeUpdate)&&an(ye,S,T,w),fe&&Dr(T,w,S,"beforeUpdate"),S&&Or(S,!0),(ne.innerHTML&&ae.innerHTML==null||ne.textContent&&ae.textContent==null)&&d(J,""),K?I(w.dynamicChildren,K,J,S,M,Oc(T,$),L):ee||B(w,T,J,null,S,M,Oc(T,$),L,!1),Q>0){if(Q&16)b(J,ne,ae,S,$);else if(Q&2&&ne.class!==ae.class&&i(J,"class",null,ae.class,$),Q&4&&i(J,"style",ne.style,ae.style,$),Q&8){const pe=T.dynamicProps;for(let Ae=0;Ae<pe.length;Ae++){const xe=pe[Ae],mt=ne[xe],lt=ae[xe];(lt!==mt||xe==="value")&&i(J,xe,mt,lt,$,S)}}Q&1&&w.children!==T.children&&d(J,T.children)}else!ee&&K==null&&b(J,ne,ae,S,$);((ye=ae.onVnodeUpdated)||fe)&&$t(()=>{ye&&an(ye,S,T,w),fe&&Dr(T,w,S,"updated")},M)},I=(w,T,S,M,$,L,ee)=>{for(let J=0;J<T.length;J++){const Q=w[J],K=T[J],fe=Q.el&&(Q.type===bt||!ni(Q,K)||Q.shapeFlag&70)?p(Q.el):S;D(Q,K,fe,null,M,$,L,ee,!0)}},b=(w,T,S,M,$)=>{if(T!==S){if(T!==je)for(const L in T)!hi(L)&&!(L in S)&&i(w,L,T[L],null,$,M);for(const L in S){if(hi(L))continue;const ee=S[L],J=T[L];ee!==J&&L!=="value"&&i(w,L,J,ee,$,M)}"value"in S&&i(w,"value",T.value,S.value,$)}},R=(w,T,S,M,$,L,ee,J,Q)=>{const K=T.el=w?w.el:c(""),fe=T.anchor=w?w.anchor:c("");let{patchFlag:ne,dynamicChildren:ae,slotScopeIds:ye}=T;ye&&(J=J?J.concat(ye):ye),w==null?(r(K,S,M),r(fe,S,M),y(T.children||[],S,fe,$,L,ee,J,Q)):ne>0&&ne&64&&ae&&w.dynamicChildren?(I(w.dynamicChildren,ae,S,$,L,ee,J),(T.key!=null||$&&T===$.subTree)&&Ng(w,T,!0)):B(w,T,S,fe,$,L,ee,J,Q)},_=(w,T,S,M,$,L,ee,J,Q)=>{T.slotScopeIds=J,w==null?T.shapeFlag&512?$.ctx.activate(T,S,M,ee,Q):re(T,S,M,$,L,ee,Q):G(w,T,Q)},re=(w,T,S,M,$,L,ee)=>{const J=w.component=ZE(w,M,$);if(Eg(w)&&(J.ctx.renderer=Z),ew(J,!1,ee),J.asyncDep){if($&&$.registerDep(J,N,ee),!w.el){const Q=J.subTree=Fe(jr);z(null,Q,T,S)}}else N(J,w,T,S,$,L,ee)},G=(w,T,S)=>{const M=T.component=w.component;if(HE(w,T,S))if(M.asyncDep&&!M.asyncResolved){j(M,T,S);return}else M.next=T,M.update();else T.el=w.el,M.vnode=T},N=(w,T,S,M,$,L,ee)=>{const J=()=>{if(w.isMounted){let{next:ne,bu:ae,u:ye,parent:pe,vnode:Ae}=w;{const _t=Mg(w);if(_t){ne&&(ne.el=Ae.el,j(w,ne,ee)),_t.asyncDep.then(()=>{w.isUnmounted||J()});return}}let xe=ne,mt;Or(w,!1),ne?(ne.el=Ae.el,j(w,ne,ee)):ne=Ae,ae&&Co(ae),(mt=ne.props&&ne.props.onVnodeBeforeUpdate)&&an(mt,pe,ne,Ae),Or(w,!0);const lt=dd(w),Wt=w.subTree;w.subTree=lt,D(Wt,lt,p(Wt.el),V(Wt),w,$,L),ne.el=lt.el,xe===null&&WE(w,lt.el),ye&&$t(ye,$),(mt=ne.props&&ne.props.onVnodeUpdated)&&$t(()=>an(mt,pe,ne,Ae),$)}else{let ne;const{el:ae,props:ye}=T,{bm:pe,m:Ae,parent:xe,root:mt,type:lt}=w,Wt=pi(T);Or(w,!1),pe&&Co(pe),!Wt&&(ne=ye&&ye.onVnodeBeforeMount)&&an(ne,xe,T),Or(w,!0);{mt.ce&&mt.ce._injectChildStyle(lt);const _t=w.subTree=dd(w);D(null,_t,S,M,w,$,L),T.el=_t.el}if(Ae&&$t(Ae,$),!Wt&&(ne=ye&&ye.onVnodeMounted)){const _t=T;$t(()=>an(ne,xe,_t),$)}(T.shapeFlag&256||xe&&pi(xe.vnode)&&xe.vnode.shapeFlag&256)&&w.a&&$t(w.a,$),w.isMounted=!0,T=S=M=null}};w.scope.on();const Q=w.effect=new Qp(J);w.scope.off();const K=w.update=Q.run.bind(Q),fe=w.job=Q.runIfDirty.bind(Q);fe.i=w,fe.id=w.uid,Q.scheduler=()=>ru(fe),Or(w,!0),K()},j=(w,T,S)=>{T.component=w;const M=w.vnode.props;w.vnode=T,w.next=null,PE(w,T.props,M,S),DE(w,T.children,S),Tr(),sd(w),Ir()},B=(w,T,S,M,$,L,ee,J,Q=!1)=>{const K=w&&w.children,fe=w?w.shapeFlag:0,ne=T.children,{patchFlag:ae,shapeFlag:ye}=T;if(ae>0){if(ae&128){de(K,ne,S,M,$,L,ee,J,Q);return}else if(ae&256){ce(K,ne,S,M,$,L,ee,J,Q);return}}ye&8?(fe&16&&Xe(K,$,L),ne!==K&&d(S,ne)):fe&16?ye&16?de(K,ne,S,M,$,L,ee,J,Q):Xe(K,$,L,!0):(fe&8&&d(S,""),ye&16&&y(ne,S,M,$,L,ee,J,Q))},ce=(w,T,S,M,$,L,ee,J,Q)=>{w=w||fs,T=T||fs;const K=w.length,fe=T.length,ne=Math.min(K,fe);let ae;for(ae=0;ae<ne;ae++){const ye=T[ae]=Q?Xn(T[ae]):un(T[ae]);D(w[ae],ye,S,null,$,L,ee,J,Q)}K>fe?Xe(w,$,L,!0,!1,ne):y(T,S,M,$,L,ee,J,Q,ne)},de=(w,T,S,M,$,L,ee,J,Q)=>{let K=0;const fe=T.length;let ne=w.length-1,ae=fe-1;for(;K<=ne&&K<=ae;){const ye=w[K],pe=T[K]=Q?Xn(T[K]):un(T[K]);if(ni(ye,pe))D(ye,pe,S,null,$,L,ee,J,Q);else break;K++}for(;K<=ne&&K<=ae;){const ye=w[ne],pe=T[ae]=Q?Xn(T[ae]):un(T[ae]);if(ni(ye,pe))D(ye,pe,S,null,$,L,ee,J,Q);else break;ne--,ae--}if(K>ne){if(K<=ae){const ye=ae+1,pe=ye<fe?T[ye].el:M;for(;K<=ae;)D(null,T[K]=Q?Xn(T[K]):un(T[K]),S,pe,$,L,ee,J,Q),K++}}else if(K>ae)for(;K<=ne;)Ee(w[K],$,L,!0),K++;else{const ye=K,pe=K,Ae=new Map;for(K=pe;K<=ae;K++){const ut=T[K]=Q?Xn(T[K]):un(T[K]);ut.key!=null&&Ae.set(ut.key,K)}let xe,mt=0;const lt=ae-pe+1;let Wt=!1,_t=0;const qn=new Array(lt);for(K=0;K<lt;K++)qn[K]=0;for(K=ye;K<=ne;K++){const ut=w[K];if(mt>=lt){Ee(ut,$,L,!0);continue}let zt;if(ut.key!=null)zt=Ae.get(ut.key);else for(xe=pe;xe<=ae;xe++)if(qn[xe-pe]===0&&ni(ut,T[xe])){zt=xe;break}zt===void 0?Ee(ut,$,L,!0):(qn[zt-pe]=K+1,zt>=_t?_t=zt:Wt=!0,D(ut,T[zt],S,null,$,L,ee,J,Q),mt++)}const Bs=Wt?ME(qn):fs;for(xe=Bs.length-1,K=lt-1;K>=0;K--){const ut=pe+K,zt=T[ut],eo=ut+1<fe?T[ut+1].el:M;qn[K]===0?D(null,zt,S,eo,$,L,ee,J,Q):Wt&&(xe<0||K!==Bs[xe]?Se(zt,S,eo,2):xe--)}}},Se=(w,T,S,M,$=null)=>{const{el:L,type:ee,transition:J,children:Q,shapeFlag:K}=w;if(K&6){Se(w.component.subTree,T,S,M);return}if(K&128){w.suspense.move(T,S,M);return}if(K&64){ee.move(w,T,S,Z);return}if(ee===bt){r(L,T,S);for(let ne=0;ne<Q.length;ne++)Se(Q[ne],T,S,M);r(w.anchor,T,S);return}if(ee===Vc){q(w,T,S);return}if(M!==2&&K&1&&J)if(M===0)J.beforeEnter(L),r(L,T,S),$t(()=>J.enter(L),$);else{const{leave:ne,delayLeave:ae,afterLeave:ye}=J,pe=()=>r(L,T,S),Ae=()=>{ne(L,()=>{pe(),ye&&ye()})};ae?ae(L,pe,Ae):Ae()}else r(L,T,S)},Ee=(w,T,S,M=!1,$=!1)=>{const{type:L,props:ee,ref:J,children:Q,dynamicChildren:K,shapeFlag:fe,patchFlag:ne,dirs:ae,cacheIndex:ye}=w;if(ne===-2&&($=!1),J!=null&&Go(J,null,S,w,!0),ye!=null&&(T.renderCache[ye]=void 0),fe&256){T.ctx.deactivate(w);return}const pe=fe&1&&ae,Ae=!pi(w);let xe;if(Ae&&(xe=ee&&ee.onVnodeBeforeUnmount)&&an(xe,T,w),fe&6)Ke(w.component,S,M);else{if(fe&128){w.suspense.unmount(S,M);return}pe&&Dr(w,null,T,"beforeUnmount"),fe&64?w.type.remove(w,T,S,Z,M):K&&!K.hasOnce&&(L!==bt||ne>0&&ne&64)?Xe(K,T,S,!1,!0):(L===bt&&ne&384||!$&&fe&16)&&Xe(Q,T,S),M&&be(w)}(Ae&&(xe=ee&&ee.onVnodeUnmounted)||pe)&&$t(()=>{xe&&an(xe,T,w),pe&&Dr(w,null,T,"unmounted")},S)},be=w=>{const{type:T,el:S,anchor:M,transition:$}=w;if(T===bt){qe(S,M);return}if(T===Vc){H(w);return}const L=()=>{s(S),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:ee,delayLeave:J}=$,Q=()=>ee(S,L);J?J(w.el,L,Q):Q()}else L()},qe=(w,T)=>{let S;for(;w!==T;)S=g(w),s(w),w=S;s(T)},Ke=(w,T,S)=>{const{bum:M,scope:$,job:L,subTree:ee,um:J,m:Q,a:K}=w;hd(Q),hd(K),M&&Co(M),$.stop(),L&&(L.flags|=8,Ee(ee,w,T,S)),J&&$t(J,T),$t(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Xe=(w,T,S,M=!1,$=!1,L=0)=>{for(let ee=L;ee<w.length;ee++)Ee(w[ee],T,S,M,$)},V=w=>{if(w.shapeFlag&6)return V(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=g(w.anchor||w.el),S=T&&T[nE];return S?g(S):T};let te=!1;const Y=(w,T,S)=>{w==null?T._vnode&&Ee(T._vnode,null,null,!0):D(T._vnode||null,w,T,null,null,null,S),T._vnode=w,te||(te=!0,sd(),gg(),te=!1)},Z={p:D,um:Ee,m:Se,r:be,mt:re,mc:y,pc:B,pbc:I,n:V,o:t};return{render:Y,hydrate:void 0,createApp:AE(Y)}}function Oc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function NE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ng(t,e,n=!1){const r=t.children,s=e.children;if(ve(r)&&ve(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Xn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ng(o,c)),c.type===Da&&(c.el=o.el)}}function ME(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Mg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mg(e)}function hd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const LE=Symbol.for("v-scx"),FE=()=>Yt(LE);function _s(t,e,n){return Lg(t,e,n)}function Lg(t,e,n=je){const{immediate:r,deep:s,flush:i,once:o}=n,c=St({},n),l=e&&r||!e&&i!=="post";let u;if(Ci){if(i==="sync"){const v=FE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=hn,v.resume=hn,v.pause=hn,v}}const d=ft;c.call=(v,P,D)=>_n(v,d,P,D);let p=!1;i==="post"?c.scheduler=v=>{$t(v,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,P)=>{P?v():ru(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const g=Xv(t,e,c);return Ci&&(u?u.push(g):l&&g()),g}function UE(t,e,n){const r=this.proxy,s=it(t)?t.includes(".")?Fg(r,t):()=>r[t]:t.bind(r,r);let i;Ie(e)?i=e:(i=e.handler,n=e);const o=Bi(this),c=Lg(s,i.bind(r),n);return o(),c}function Fg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $E=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xt(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function jE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||je;let s=n;const i=e.startsWith("update:"),o=i&&$E(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>it(d)?d.trim():d)),o.number&&(s=n.map(tl)));let c,l=r[c=Sc(e)]||r[c=Sc(Xt(e))];!l&&i&&(l=r[c=Sc(Kr(e))]),l&&_n(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,_n(u,t,6,s)}}function Ug(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!Ie(t)){const l=u=>{const d=Ug(u,e,!0);d&&(c=!0,St(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ze(t)&&r.set(t,null),null):(ve(i)?i.forEach(l=>o[l]=null):St(o,i),ze(t)&&r.set(t,o),o)}function xa(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,Kr(e))||Le(t,e))}function dd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:g,setupState:v,ctx:P,inheritAttrs:D}=t,x=Ko(t);let z,W;try{if(n.shapeFlag&4){const H=s||r,oe=H;z=un(u.call(oe,H,d,p,v,g,P)),W=c}else{const H=e;z=un(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),W=e.props?c:BE(c)}}catch(H){mi.length=0,Ca(H,t,1),z=Fe(jr)}let q=z;if(W&&D!==!1){const H=Object.keys(W),{shapeFlag:oe}=q;H.length&&oe&7&&(i&&H.some(Hl)&&(W=qE(W,i)),q=Ts(q,W,!1,!0))}return n.dirs&&(q=Ts(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&su(q,n.transition),z=q,Ko(x),z}const BE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},qE=(t,e)=>{const n={};for(const r in t)(!Hl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function HE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fd(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!xa(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?fd(r,o,u):!0:!!o;return!1}function fd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xa(n,i))return!0}return!1}function WE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $g=t=>t.__isSuspense;function zE(t,e){e&&e.pendingBranch?ve(t)?e.effects.push(...t):e.effects.push(t):tE(t)}const bt=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),jr=Symbol.for("v-cmt"),Vc=Symbol.for("v-stc"),mi=[];let qt=null;function ue(t=!1){mi.push(qt=t?null:[])}function KE(){mi.pop(),qt=mi[mi.length-1]||null}let Pi=1;function pd(t,e=!1){Pi+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function jg(t){return t.dynamicChildren=Pi>0?qt||fs:null,KE(),Pi>0&&qt&&qt.push(t),t}function ge(t,e,n,r,s,i){return jg(k(t,e,n,r,s,i,!0))}function Oa(t,e,n,r,s){return jg(Fe(t,e,n,r,s,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function ni(t,e){return t.type===e.type&&t.key===e.key}const Bg=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||et(t)||Ie(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bg(e),ref:e&&xo(e),scopeId:_g,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return c?(ou(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),Pi>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const Fe=GE;function GE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mE)&&(t=jr),Yo(t)){const c=Ts(t,e,!0);return n&&ou(c,n),Pi>0&&!i&&qt&&(c.shapeFlag&6?qt[qt.indexOf(t)]=c:qt.push(c)),c.patchFlag=-2,c}if(iw(t)&&(t=t.__vccOpts),e){e=QE(e);let{class:c,style:l}=e;c&&!it(c)&&(e.class=gs(c)),ze(l)&&(eu(l)&&!ve(l)&&(l=St({},l)),e.style=Kl(l))}const o=it(t)?1:$g(t)?128:rE(t)?64:ze(t)?4:Ie(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function QE(t){return t?eu(t)||Pg(t)?St({},t):t:null}function Ts(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?YE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Bg(u),ref:e&&e.ref?n&&i?ve(i)?i.concat(xo(e)):[i,xo(e)]:xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ts(t.ssContent),ssFallback:t.ssFallback&&Ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&su(d,l.clone(d)),d}function Ot(t=" ",e=0){return Fe(Da,null,t,e)}function Pn(t="",e=!1){return e?(ue(),Oa(jr,null,t)):Fe(jr,null,t)}function un(t){return t==null||typeof t=="boolean"?Fe(jr):ve(t)?Fe(bt,null,t.slice()):Yo(t)?Xn(t):Fe(Da,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ts(t)}function ou(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ve(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ou(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pg(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),r&64?(n=16,e=[Ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function YE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gs([e.class,r.class]));else if(s==="style")e.style=Kl([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(ve(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function an(t,e,n,r=null){_n(t,e,7,[n,r])}const JE=Ag();let XE=0;function ZE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||JE,i={uid:XE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kg(r,s),emitsOptions:Ug(r,s),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jE.bind(null,i),t.ce&&t.ce(i),i}let ft=null,Jo,ul;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),ul=e("__VUE_SSR_SETTERS__",n=>Ci=n)}const Bi=t=>{const e=ft;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},gd=()=>{ft&&ft.scope.off(),Jo(null)};function qg(t){return t.vnode.shapeFlag&4}let Ci=!1;function ew(t,e=!1,n=!1){e&&ul(e);const{props:r,children:s}=t.vnode,i=qg(t);SE(t,r,i,e),xE(t,s,n);const o=i?tw(t,e):void 0;return e&&ul(!1),o}function tw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yE);const{setup:r}=n;if(r){Tr();const s=t.setupContext=r.length>1?rw(t):null,i=Bi(t),o=$i(r,t,0,[t.props,s]),c=Up(o);if(Ir(),i(),(c||t.sp)&&!pi(t)&&vg(t),c){if(o.then(gd,gd),e)return o.then(l=>{md(t,l)}).catch(l=>{Ca(l,t,0)});t.asyncDep=o}else md(t,o)}else Hg(t)}function md(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=dg(e)),Hg(t)}function Hg(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=Bi(t);Tr();try{vE(t)}finally{Ir(),s()}}}const nw={get(t,e){return Tt(t,"get",""),t[e]}};function rw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nw),slots:t.slots,emit:t.emit,expose:e}}function Va(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dg(tu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gi)return gi[n](t)},has(e,n){return n in e||n in gi}})):t.proxy}function sw(t,e=!0){return Ie(t)?t.displayName||t.name:t.name||e&&t.__name}function iw(t){return Ie(t)&&"__vccOpts"in t}const rt=(t,e)=>Yv(t,e,Ci);function Wg(t,e,n){const r=arguments.length;return r===2?ze(e)&&!ve(e)?Yo(e)?Fe(t,null,[e]):Fe(t,e):Fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yo(n)&&(n=[n]),Fe(t,e,n))}const ow="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hl;const _d=typeof window<"u"&&window.trustedTypes;if(_d)try{hl=_d.createPolicy("vue",{createHTML:t=>t})}catch{}const zg=hl?t=>hl.createHTML(t):t=>t,aw="http://www.w3.org/2000/svg",cw="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,yd=Sn&&Sn.createElement("template"),lw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(aw,t):e==="mathml"?Sn.createElementNS(cw,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yd.innerHTML=zg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=yd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},uw=Symbol("_vtc");function hw(t,e,n){const r=t[uw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vd=Symbol("_vod"),dw=Symbol("_vsh"),fw=Symbol(""),pw=/(^|;)\s*display\s*:/;function gw(t,e,n){const r=t.style,s=it(n);let i=!1;if(n&&!s){if(e)if(it(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Do(r,c,"")}else for(const o in e)n[o]==null&&Do(r,o,"");for(const o in n)o==="display"&&(i=!0),Do(r,o,n[o])}else if(s){if(e!==n){const o=r[fw];o&&(n+=";"+o),r.cssText=n,i=pw.test(n)}}else e&&t.removeAttribute("style");vd in t&&(t[vd]=i?r.display:"",t[dw]&&(r.display="none"))}const Ed=/\s*!important$/;function Do(t,e,n){if(ve(n))n.forEach(r=>Do(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mw(t,e);Ed.test(n)?t.setProperty(Kr(r),n.replace(Ed,""),"important"):t[r]=n}}const wd=["Webkit","Moz","ms"],Nc={};function mw(t,e){const n=Nc[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return Nc[e]=r;r=Ra(r);for(let s=0;s<wd.length;s++){const i=wd[s]+r;if(i in t)return Nc[e]=i}return e}const Td="http://www.w3.org/1999/xlink";function Id(t,e,n,r,s,i=Tv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Td,e.slice(6,e.length)):t.setAttributeNS(Td,e,n):n==null||i&&!qp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wr(n)?String(n):n)}function bd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?zg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function is(t,e,n,r){t.addEventListener(e,n,r)}function _w(t,e,n,r){t.removeEventListener(e,n,r)}const Ad=Symbol("_vei");function yw(t,e,n,r,s=null){const i=t[Ad]||(t[Ad]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=vw(e);if(r){const u=i[e]=Tw(r,s);is(t,c,u,l)}else o&&(_w(t,c,o,l),i[e]=void 0)}}const Rd=/(?:Once|Passive|Capture)$/;function vw(t){let e;if(Rd.test(t)){e={};let r;for(;r=t.match(Rd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let Mc=0;const Ew=Promise.resolve(),ww=()=>Mc||(Ew.then(()=>Mc=0),Mc=Date.now());function Tw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(Iw(r,n.value),e,5,[r])};return n.value=t,n.attached=ww(),n}function Iw(t,e){if(ve(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?hw(t,r,o):e==="style"?gw(t,n,r):Ia(e)?Hl(e)||yw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Aw(t,e,r,o))?(bd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Id(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!it(r))?bd(t,Xt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Id(t,e,r,o))};function Aw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sd(e)&&Ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sd(e)&&it(n)?!1:e in t}const Pd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ve(e)?n=>Co(e,n):e};function Rw(t){t.target.composing=!0}function Cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lc=Symbol("_assign"),Gt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Lc]=Pd(s);const i=r||s.props&&s.props.type==="number";is(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=tl(c)),t[Lc](c)}),n&&is(t,"change",()=>{t.value=t.value.trim()}),e||(is(t,"compositionstart",Rw),is(t,"compositionend",Cd),is(t,"change",Cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Lc]=Pd(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?tl(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Sw=["ctrl","shift","alt","meta"],Pw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sw.some(n=>t[`${n}Key`]&&!e.includes(n))},au=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Pw[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Cw=St({patchProp:bw},lw);let kd;function kw(){return kd||(kd=OE(Cw))}const xw=(...t)=>{const e=kw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ow(r);if(!s)return;const i=e._component;!Ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Dw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Dw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ow(t){return it(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Kg;const Na=t=>Kg=t,Gg=Symbol();function dl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_i||(_i={}));function Vw(){const t=Kp(!0),e=t.run(()=>Je({}));let n=[],r=[];const s=tu({install(i){Na(s),s._a=i,i.provide(Gg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Qg=()=>{};function xd(t,e,n,r=Qg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Gp()&&Iv(s),s}function rs(t,...e){t.slice().forEach(n=>{n(...e)})}const Nw=t=>t(),Dd=Symbol(),Fc=Symbol();function fl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];dl(s)&&dl(r)&&t.hasOwnProperty(n)&&!et(r)&&!cr(r)?t[n]=fl(s,r):t[n]=r}return t}const Mw=Symbol();function Lw(t){return!dl(t)||!Object.prototype.hasOwnProperty.call(t,Mw)}const{assign:Yn}=Object;function Fw(t){return!!(et(t)&&t.effect)}function Uw(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const d=zv(n.state.value[t]);return Yn(d,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=tu(rt(()=>{Na(n);const v=n._s.get(t);return o[g].call(v,v)})),p),{}))}return l=Yg(t,u,e,n,r,!0),l}function Yg(t,e,n={},r,s,i){let o;const c=Yn({actions:{}},n),l={deep:!0};let u,d,p=[],g=[],v;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Je({});let D;function x(y){let E;u=d=!1,typeof y=="function"?(y(r.state.value[t]),E={type:_i.patchFunction,storeId:t,events:v}):(fl(r.state.value[t],y),E={type:_i.patchObject,payload:y,storeId:t,events:v});const I=D=Symbol();nu().then(()=>{D===I&&(u=!0)}),d=!0,rs(p,E,r.state.value[t])}const z=i?function(){const{state:E}=n,I=E?E():{};this.$patch(b=>{Yn(b,I)})}:Qg;function W(){o.stop(),p=[],g=[],r._s.delete(t)}const q=(y,E="")=>{if(Dd in y)return y[Fc]=E,y;const I=function(){Na(r);const b=Array.from(arguments),R=[],_=[];function re(j){R.push(j)}function G(j){_.push(j)}rs(g,{args:b,name:I[Fc],store:oe,after:re,onError:G});let N;try{N=y.apply(this&&this.$id===t?this:oe,b)}catch(j){throw rs(_,j),j}return N instanceof Promise?N.then(j=>(rs(R,j),j)).catch(j=>(rs(_,j),Promise.reject(j))):(rs(R,N),N)};return I[Dd]=!0,I[Fc]=E,I},H={_p:r,$id:t,$onAction:xd.bind(null,g),$patch:x,$reset:z,$subscribe(y,E={}){const I=xd(p,y,E.detached,()=>b()),b=o.run(()=>_s(()=>r.state.value[t],R=>{(E.flush==="sync"?d:u)&&y({storeId:t,type:_i.direct,events:v},R)},Yn({},l,E)));return I},$dispose:W},oe=Ui(H);r._s.set(t,oe);const A=(r._a&&r._a.runWithContext||Nw)(()=>r._e.run(()=>(o=Kp()).run(()=>e({action:q}))));for(const y in A){const E=A[y];if(et(E)&&!Fw(E)||cr(E))i||(P&&Lw(E)&&(et(E)?E.value=P[y]:fl(E,P[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const I=q(E,y);A[y]=I,c.actions[y]=E}}return Yn(oe,A),Yn(Ne(oe),A),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:y=>{x(E=>{Yn(E,y)})}}),r._p.forEach(y=>{Yn(oe,o.run(()=>y({store:oe,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(oe.$state,P),u=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function Ns(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=RE();return o=o||(l?Yt(Gg,null):null),o&&Na(o),o=Kg,o._s.has(t)||(s?Yg(t,e,r,o):Uw(t,r,o)),o._s.get(t)}return i.$id=t,i}const $w=()=>{};var Od={};/**
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
 */const Jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,v=u&63;l||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Bw;const g=i<<2|c>>4;if(r.push(g),u!==64){const v=c<<4&240|u>>2;if(r.push(v),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qw=function(t){const e=Jg(t);return Xg.encodeByteArray(e,!0)},Xo=function(t){return qw(t).replace(/\./g,"")},Zg=function(t){try{return Xg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ww=()=>Hw().__FIREBASE_DEFAULTS__,zw=()=>{if(typeof process>"u"||typeof Od>"u")return;const t=Od.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zg(t[1]);return e&&JSON.parse(e)},Ma=()=>{try{return $w()||Ww()||zw()||Kw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},em=t=>{var e,n;return(n=(e=Ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tm=t=>{const e=em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nm=()=>{var t;return(t=Ma())===null||t===void 0?void 0:t.config},rm=t=>{var e;return(e=Ma())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function Yw(){var t;const e=(t=Ma())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eT(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tT(){return!Yw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nT(){try{return typeof indexedDB=="object"}catch{return!1}}function rT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const sT="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sT,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?iT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new En(s,c,r)}}function iT(t,e){return t.replace(oT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const oT=/\{\$([^}]+)}/g;function aT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vd(i)&&Vd(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vd(t){return t!==null&&typeof t=="object"}/**
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
 */function Hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ii(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cT(t,e){const n=new lT(t,e);return n.subscribe.bind(n)}class lT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Uc),s.error===void 0&&(s.error=Uc),s.complete===void 0&&(s.complete=Uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class hT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fT(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dT(t){return t===Nr?void 0:t}function fT(t){return t.instantiationMode==="EAGER"}/**
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
 */class pT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const gT={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},mT=Ce.INFO,_T={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},yT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_T[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=mT,this._logHandler=yT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const vT=(t,e)=>e.some(n=>t instanceof n);let Nd,Md;function ET(){return Nd||(Nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wT(){return Md||(Md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const im=new WeakMap,pl=new WeakMap,om=new WeakMap,$c=new WeakMap,lu=new WeakMap;function TT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&im.set(n,t)}).catch(()=>{}),lu.set(e,t),e}function IT(t){if(pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pl.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||om.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bT(t){gl=t(gl)}function AT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return om.set(r,e.sort?e.sort():[e]),lr(r)}:wT().includes(t)?function(...e){return t.apply(jc(this),e),lr(im.get(this))}:function(...e){return lr(t.apply(jc(this),e))}}function RT(t){return typeof t=="function"?AT(t):(t instanceof IDBTransaction&&IT(t),vT(t,ET())?new Proxy(t,gl):t)}function lr(t){if(t instanceof IDBRequest)return TT(t);if($c.has(t))return $c.get(t);const e=RT(t);return e!==t&&($c.set(t,e),lu.set(e,t)),e}const jc=t=>lu.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const PT=["get","getKey","getAll","getAllKeys","count"],CT=["put","add","delete","clear"],Bc=new Map;function Ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=CT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||PT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Bc.set(e,i),i}bT(t=>({...t,get:(e,n,r)=>Ld(e,n)||t.get(e,n,r),has:(e,n)=>!!Ld(e,n)||t.has(e,n)}));/**
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
 */class kT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ml="@firebase/app",Fd="0.11.5";/**
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
 */const Mn=new cu("@firebase/app"),DT="@firebase/app-compat",OT="@firebase/analytics-compat",VT="@firebase/analytics",NT="@firebase/app-check-compat",MT="@firebase/app-check",LT="@firebase/auth",FT="@firebase/auth-compat",UT="@firebase/database",$T="@firebase/data-connect",jT="@firebase/database-compat",BT="@firebase/functions",qT="@firebase/functions-compat",HT="@firebase/installations",WT="@firebase/installations-compat",zT="@firebase/messaging",KT="@firebase/messaging-compat",GT="@firebase/performance",QT="@firebase/performance-compat",YT="@firebase/remote-config",JT="@firebase/remote-config-compat",XT="@firebase/storage",ZT="@firebase/storage-compat",eI="@firebase/firestore",tI="@firebase/vertexai",nI="@firebase/firestore-compat",rI="firebase",sI="11.6.1";/**
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
 */const _l="[DEFAULT]",iI={[ml]:"fire-core",[DT]:"fire-core-compat",[VT]:"fire-analytics",[OT]:"fire-analytics-compat",[MT]:"fire-app-check",[NT]:"fire-app-check-compat",[LT]:"fire-auth",[FT]:"fire-auth-compat",[UT]:"fire-rtdb",[$T]:"fire-data-connect",[jT]:"fire-rtdb-compat",[BT]:"fire-fn",[qT]:"fire-fn-compat",[HT]:"fire-iid",[WT]:"fire-iid-compat",[zT]:"fire-fcm",[KT]:"fire-fcm-compat",[GT]:"fire-perf",[QT]:"fire-perf-compat",[YT]:"fire-rc",[JT]:"fire-rc-compat",[XT]:"fire-gcs",[ZT]:"fire-gcs-compat",[eI]:"fire-fst",[nI]:"fire-fst-compat",[tI]:"fire-vertex","fire-js":"fire-js",[rI]:"fire-js-all"};/**
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
 */const Zo=new Map,oI=new Map,yl=new Map;function Ud(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(yl.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of Zo.values())Ud(n,t);for(const n of oI.values())Ud(n,t);return!0}function La(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const aI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new qi("app","Firebase",aI);/**
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
 */class cI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=sI;function am(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_l,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=nm()),!n)throw ur.create("no-options");const i=Zo.get(s);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new pT(s);for(const l of yl.values())o.addComponent(l);const c=new cI(n,r,o);return Zo.set(s,c),c}function uu(t=_l){const e=Zo.get(t);if(!e&&t===_l&&nm())return am();if(!e)throw ur.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=(r=iI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(c.join(" "));return}Br(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const lI="firebase-heartbeat-database",uI=1,ki="firebase-heartbeat-store";let qc=null;function cm(){return qc||(qc=ST(lI,uI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),qc}async function hI(t){try{const n=(await cm()).transaction(ki),r=await n.objectStore(ki).get(lm(t));return await n.done,r}catch(e){if(e instanceof En)Mn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function $d(t,e){try{const r=(await cm()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,lm(t)),await r.done}catch(n){if(n instanceof En)Mn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function lm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dI=1024,fI=30;class pI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>fI){const o=_I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jd(),{heartbeatsToSend:r,unsentEntries:s}=gI(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function jd(){return new Date().toISOString().substring(0,10)}function gI(t,e=dI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nT()?rT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bd(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}function _I(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function yI(t){Br(new pr("platform-logger",e=>new kT(e),"PRIVATE")),Br(new pr("heartbeat",e=>new pI(e),"PRIVATE")),dn(ml,Fd,t),dn(ml,Fd,"esm2017"),dn("fire-js","")}yI("");function hu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function um(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vI=um,hm=new qi("auth","Firebase",um());/**
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
 */const ea=new cu("@firebase/auth");function EI(t,...e){ea.logLevel<=Ce.WARN&&ea.warn(`Auth (${Gr}): ${t}`,...e)}function Oo(t,...e){ea.logLevel<=Ce.ERROR&&ea.error(`Auth (${Gr}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw du(t,...e)}function fn(t,...e){return du(t,...e)}function dm(t,e,n){const r=Object.assign(Object.assign({},vI()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Vn(t){return dm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function du(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hm.create(t,...e)}function me(t,e,...n){if(!t)throw du(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function Ln(t,e){t||xn(e)}/**
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
 */function vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wI(){return qd()==="http:"||qd()==="https:"}function qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wI()||Xw()||"connection"in navigator)?navigator.onLine:!0}function II(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Qw()||Zw()}get(){return TI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fu(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RI=new Wi(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wn(t,e,n,r,s={}){return pm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return Jw()||(u.referrerPolicy="no-referrer"),fm.fetch()(await gm(t,t.config.apiHost,n,c),u)})}async function pm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bI),e);try{const s=new PI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dm(t,d,u);rn(t,d)}}catch(s){if(s instanceof En)throw s;rn(t,"network-request-failed",{message:String(s)})}}async function zi(t,e,n,r,s={}){const i=await wn(t,e,n,r,s);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function gm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?fu(t.config,s):`${t.config.apiScheme}://${s}`;return AI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function SI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),RI.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function Hd(t){return t!==void 0&&t.enterprise!==void 0}class CI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kI(t,e){return wn(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
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
 */async function xI(t,e){return wn(t,"POST","/v1/accounts:delete",e)}async function ta(t,e){return wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DI(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=pu(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:yi(Hc(s.auth_time)),issuedAtTime:yi(Hc(s.iat)),expirationTime:yi(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function pu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zg(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wd(t){const e=pu(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&OI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Is(t,ta(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mm(i.providerUserInfo):[],c=MI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new El(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function NI(t){const e=tt(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mm(t){return t.map(e=>{var{providerId:n}=e,r=hu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function LI(t,e){const n=await pm(t,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await gm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",fm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FI(t,e){return wn(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Wd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await LI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function Kn(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new El(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DI(this,e)}reload(){return NI(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Is(this,xI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(u=n.createdAt)!==null&&u!==void 0?u:void 0,W=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:H,isAnonymous:oe,providerData:le,stsTokenManager:A}=n;me(q&&A,e,"internal-error");const y=ys.fromJSON(this.name,A);me(typeof q=="string",e,"internal-error"),Kn(p,e.name),Kn(g,e.name),me(typeof H=="boolean",e,"internal-error"),me(typeof oe=="boolean",e,"internal-error"),Kn(v,e.name),Kn(P,e.name),Kn(D,e.name),Kn(x,e.name),Kn(z,e.name),Kn(W,e.name);const E=new en({uid:q,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:oe,photoURL:P,phoneNumber:v,tenantId:D,stsTokenManager:y,createdAt:z,lastLoginAt:W});return le&&Array.isArray(le)&&(E.providerData=le.map(I=>Object.assign({},I))),x&&(E._redirectEventId=x),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ys;c.updateFromIdToken(r);const l=new en({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new El(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const zd=new Map;function Dn(t){Ln(t instanceof Function,"Expected a class definition");let e=zd.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zd.set(t,e),e)}/**
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
 */class _m{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_m.type="NONE";const Kd=_m;/**
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
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ta(this.auth,{idToken:e}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,e):null}return en._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Dn(Kd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Dn(Kd);const o=Vo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await ta(e,{idToken:d}).catch(()=>{});if(!g)break;p=await en._fromGetAccountInfoResponse(e,g,d)}else p=en._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new vs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new vs(i,e,r))}}/**
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
 */function Gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ym(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Im(e))return"Blackberry";if(bm(e))return"Webos";if(vm(e))return"Safari";if((e.includes("chrome/")||Em(e))&&!e.includes("edge/"))return"Chrome";if(Tm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ym(t=Pt()){return/firefox\//i.test(t)}function vm(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Em(t=Pt()){return/crios\//i.test(t)}function wm(t=Pt()){return/iemobile/i.test(t)}function Tm(t=Pt()){return/android/i.test(t)}function Im(t=Pt()){return/blackberry/i.test(t)}function bm(t=Pt()){return/webos/i.test(t)}function gu(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UI(t=Pt()){var e;return gu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $I(){return eT()&&document.documentMode===10}function Am(t=Pt()){return gu(t)||Tm(t)||bm(t)||Im(t)||/windows phone/i.test(t)||wm(t)}/**
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
 */function Rm(t,e=[]){let n;switch(t){case"Browser":n=Gd(Pt());break;case"Worker":n=`${Gd(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
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
 */class jI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BI(t,e={}){return wn(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
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
 */const qI=6;class HI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class WI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qd(this),this.idTokenSubscription=new Qd(this),this.beforeStateQueue=new jI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ta(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=II()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(Vn(this));const n=e?tt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BI(this),n=new HI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function br(t){return tt(t)}class Qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=cT(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zI(t){Fa=t}function Sm(t){return Fa.loadJS(t)}function KI(){return Fa.recaptchaEnterpriseScript}function GI(){return Fa.gapiScript}function QI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class YI{constructor(){this.enterprise=new JI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class JI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const XI="recaptcha-enterprise",Pm="NO_RECAPTCHA";class ZI{constructor(e){this.type=XI,this.auth=br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{kI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new CI(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Hd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Pm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Hd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=KI();l.length!==0&&(l+=c),Sm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Yd(t,e,n,r=!1,s=!1){const i=new ZI(t);let o;if(s)o=Pm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ra(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Yd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Yd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function e0(t,e){const n=La(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e??{}))return s;rn(s,"already-initialized")}return n.initialize({options:e})}function t0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function n0(t,e,n){const r=br(t);me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cm(e),{host:o,port:c}=r0(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),me(fr(u,r.config.emulator)&&fr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,s0()}function Cm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function r0(t){const e=Cm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jd(o)}}}function Jd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function s0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function i0(t,e){return wn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function o0(t,e){return zi(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}async function a0(t,e){return wn(t,"POST","/v1/accounts:sendOobCode",Bn(t,e))}async function c0(t,e){return a0(t,e)}/**
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
 */async function l0(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function u0(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
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
 */class xi extends mu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,n,"signInWithPassword",o0);case"emailLink":return l0(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,r,"signUpPassword",i0);case"emailLink":return u0(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Es(t,e){return zi(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
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
 */const h0="http://localhost";class qr extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:h0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
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
 */function d0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f0(t){const e=ii(oi(t)).link,n=e?ii(oi(e)).deep_link_id:null,r=ii(oi(t)).deep_link_id;return(r?ii(oi(r)).link:null)||r||n||e||t}class _u{constructor(e){var n,r,s,i,o,c;const l=ii(oi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=d0((s=l.mode)!==null&&s!==void 0?s:null);me(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=f0(e);try{return new _u(n)}catch{return null}}}/**
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
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_u.parseLink(n);return me(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class km{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends km{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends Ki{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class nr extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
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
 */class rr extends Ki{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
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
 */class sr extends Ki{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function p0(t,e){return zi(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await en._fromIdTokenResponse(e,r,s),o=Xd(r);return new Hr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xd(r);return new Hr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sa extends En{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new sa(e,n,r,s)}}function xm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sa._fromErrorAndOperation(t,i,e,r):i})}async function g0(t,e,n=!1){const r=await Is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
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
 */async function m0(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(Vn(r));const s="reauthenticate";try{const i=await Is(t,xm(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=pu(i.idToken);me(o,r,"internal-error");const{sub:c}=o;return me(t.uid===c,r,"user-mismatch"),Hr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
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
 */async function Dm(t,e,n=!1){if(jt(t.app))return Promise.reject(Vn(t));const r="signIn",s=await xm(t,r,e),i=await Hr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _0(t,e){return Dm(br(t),e)}/**
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
 */async function Om(t){const e=br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function y0(t,e,n){const r=br(t);await ra(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",c0)}async function Zd(t,e,n){if(jt(t.app))return Promise.reject(Vn(t));const r=br(t),o=await ra(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Om(t),l}),c=await Hr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function ef(t,e,n){return jt(t.app)?Promise.reject(Vn(t)):_0(tt(t),Ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Om(t),r})}/**
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
 */async function v0(t,e){return wn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function tf(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=tt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Is(r,v0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function E0(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function w0(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function T0(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function I0(t){return tt(t).signOut()}const ia="__sak";/**
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
 */class Vm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ia,"1"),this.storage.removeItem(ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const b0=1e3,A0=10;class Nm extends Vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$I()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,A0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nm.type="LOCAL";const R0=Nm;/**
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
 */class Mm extends Vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mm.type="SESSION";const Lm=Mm;/**
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
 */function S0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await S0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ua.receivers=[];/**
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
 */function yu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class P0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=yu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function C0(t){pn().location.href=t}/**
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
 */function Fm(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function k0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function D0(){return Fm()?self:null}/**
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
 */const Um="firebaseLocalStorageDb",O0=1,oa="firebaseLocalStorage",$m="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([oa],e?"readwrite":"readonly").objectStore(oa)}function V0(){const t=indexedDB.deleteDatabase(Um);return new Gi(t).toPromise()}function wl(){const t=indexedDB.open(Um,O0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(oa,{keyPath:$m})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(oa)?e(r):(r.close(),await V0(),e(await wl()))})})}async function nf(t,e,n){const r=$a(t,!0).put({[$m]:e,value:n});return new Gi(r).toPromise()}async function N0(t,e){const n=$a(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function rf(t,e){const n=$a(t,!0).delete(e);return new Gi(n).toPromise()}const M0=800,L0=3;class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>L0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ua._getInstance(D0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await k0(),!this.activeServiceWorker)return;this.sender=new P0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||x0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await nf(e,ia,"1"),await rf(e,ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jm.type="LOCAL";const F0=jm;new Wi(3e4,6e4);/**
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
 */function U0(t,e){return e?Dn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vu extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $0(t){return Dm(t.auth,new vu(t),t.bypassAuthState)}function j0(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),m0(n,new vu(t),t.bypassAuthState)}async function B0(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),g0(n,new vu(t),t.bypassAuthState)}/**
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
 */class Bm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $0;case"linkViaPopup":case"linkViaRedirect":return B0;case"reauthViaPopup":case"reauthViaRedirect":return j0;default:rn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const q0=new Wi(2e3,1e4);class ds extends Bm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q0.get())};e()}}ds.currentPopupAction=null;/**
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
 */const H0="pendingRedirect",No=new Map;class W0 extends Bm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const r=await z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z0(t,e){const n=Q0(e),r=G0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function K0(t,e){No.set(t._key(),e)}function G0(t){return Dn(t._redirectPersistence)}function Q0(t){return Vo(H0,t.config.apiKey,t.name)}async function Y0(t,e,n=!1){if(jt(t.app))return Promise.reject(Vn(t));const r=br(t),s=U0(r,e),o=await new W0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const J0=10*60*1e3;class X0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J0&&this.cachedEventUids.clear(),this.cachedEventUids.has(sf(e))}saveEventToCache(e){this.cachedEventUids.add(sf(e)),this.lastProcessedEventTime=Date.now()}}function sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qm(t);default:return!1}}/**
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
 */async function eb(t,e={}){return wn(t,"GET","/v1/projects",e)}/**
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
 */const tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nb=/^https?/;async function rb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eb(t);for(const n of e)try{if(sb(n))return}catch{}rn(t,"unauthorized-domain")}function sb(t){const e=vl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nb.test(n))return!1;if(tb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ib=new Wi(3e4,6e4);function of(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ob(t){return new Promise((e,n)=>{var r,s,i;function o(){of(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{of(),n(fn(t,"network-request-failed"))},timeout:ib.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const c=QI("iframefcb");return pn()[c]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Sm(`${GI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Mo=null,e})}let Mo=null;function ab(t){return Mo=Mo||ob(t),Mo}/**
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
 */const cb=new Wi(5e3,15e3),lb="__/auth/iframe",ub="emulator/auth/iframe",hb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},db=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fb(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fu(e,ub):`https://${t.config.authDomain}/${lb}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=db.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hi(r).slice(1)}`}async function pb(t){const e=await ab(t),n=pn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},cb.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mb=500,_b=600,yb="_blank",vb="http://localhost";class af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eb(t,e,n,r=mb,s=_b){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},gb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Pt().toLowerCase();n&&(c=Em(u)?yb:n),ym(u)&&(e=e||vb,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[v,P])=>`${g}${v}=${P},`,"");if(UI(u)&&c!=="_self")return wb(e||"",c),new af(null);const p=window.open(e||"",c,d);me(p,t,"popup-blocked");try{p.focus()}catch{}return new af(p)}function wb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tb="__/auth/handler",Ib="emulator/auth/handler",bb=encodeURIComponent("fac");async function cf(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof km){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ki){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${bb}=${encodeURIComponent(l)}`:"";return`${Ab(t)}?${Hi(c).slice(1)}${u}`}function Ab({config:t}){return t.emulator?fu(t,Ib):`https://${t.authDomain}/${Tb}`}/**
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
 */const Wc="webStorageSupport";class Rb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lm,this._completeRedirectFn=Y0,this._overrideRedirectResult=K0}async _openPopup(e,n,r,s){var i;Ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cf(e,n,r,vl(),s);return Eb(e,o,yu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cf(e,n,r,vl(),s);return C0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pb(e),r=new X0(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Am()||vm()||gu()}}const Sb=Rb;var lf="@firebase/auth",uf="1.10.1";/**
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
 */class Pb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kb(t){Br(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rm(t)},u=new WI(r,s,i,l);return t0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new pr("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new Pb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(lf,uf,Cb(t)),dn(lf,uf,"esm2017")}/**
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
 */const xb=5*60,Db=rm("authIdTokenMaxAge")||xb;let hf=null;const Ob=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Db)return;const s=n==null?void 0:n.token;hf!==s&&(hf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vb(t=uu()){const e=La(t,"auth");if(e.isInitialized())return e.getImmediate();const n=e0(t,{popupRedirectResolver:Sb,persistence:[F0,R0,Lm]}),r=rm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ob(i.toString());w0(n,o,()=>o(n.currentUser)),E0(n,c=>o(c))}}const s=em("auth");return s&&n0(n,`http://${s}`),n}function Nb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Nb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kb("Browser");var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,Hm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function E(){}E.prototype=y.prototype,A.D=y.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(I,b,R){for(var _=Array(arguments.length-2),re=2;re<arguments.length;re++)_[re-2]=arguments[re];return y.prototype[b].apply(I,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)I[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)I[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=A.g[0],E=A.g[1],b=A.g[2];var R=A.g[3],_=y+(R^E&(b^R))+I[0]+3614090360&4294967295;y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+I[1]+3905402710&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+I[2]+606105819&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+I[3]+3250441966&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(R^E&(b^R))+I[4]+4118548399&4294967295,y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+I[5]+1200080426&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+I[6]+2821735955&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+I[7]+4249261313&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(R^E&(b^R))+I[8]+1770035416&4294967295,y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+I[9]+2336552879&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+I[10]+4294925233&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+I[11]+2304563134&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(R^E&(b^R))+I[12]+1804603682&4294967295,y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+I[13]+4254626195&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+I[14]+2792965006&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+I[15]+1236535329&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(b^R&(E^b))+I[1]+4129170786&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+I[6]+3225465664&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+I[11]+643717713&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+I[0]+3921069994&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(b^R&(E^b))+I[5]+3593408605&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+I[10]+38016083&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+I[15]+3634488961&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+I[4]+3889429448&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(b^R&(E^b))+I[9]+568446438&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+I[14]+3275163606&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+I[3]+4107603335&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+I[8]+1163531501&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(b^R&(E^b))+I[13]+2850285829&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+I[2]+4243563512&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+I[7]+1735328473&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+I[12]+2368359562&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(E^b^R)+I[5]+4294588738&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+I[8]+2272392833&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+I[11]+1839030562&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+I[14]+4259657740&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(E^b^R)+I[1]+2763975236&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+I[4]+1272893353&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+I[7]+4139469664&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+I[10]+3200236656&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(E^b^R)+I[13]+681279174&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+I[0]+3936430074&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+I[3]+3572445317&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+I[6]+76029189&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(E^b^R)+I[9]+3654602809&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+I[12]+3873151461&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+I[15]+530742520&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+I[2]+3299628645&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(b^(E|~R))+I[0]+4096336452&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+I[7]+1126891415&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+I[14]+2878612391&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+I[5]+4237533241&4294967295,E=b+(_<<21&4294967295|_>>>11),_=y+(b^(E|~R))+I[12]+1700485571&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+I[3]+2399980690&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+I[10]+4293915773&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+I[1]+2240044497&4294967295,E=b+(_<<21&4294967295|_>>>11),_=y+(b^(E|~R))+I[8]+1873313359&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+I[15]+4264355552&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+I[6]+2734768916&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+I[13]+1309151649&4294967295,E=b+(_<<21&4294967295|_>>>11),_=y+(b^(E|~R))+I[4]+4149444226&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+I[11]+3174756917&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+I[2]+718787259&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var E=y-this.blockSize,I=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=E;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<y;)if(I[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,I),b=0;break}}else for(;R<y;)if(I[b++]=A[R++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var E=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.u(A),A=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)A[E++]=this.g[y]>>>I&255;return A};function i(A,y){var E=c;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=y(A)}function o(A,y){this.h=y;for(var E=[],I=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;I&&R==y||(E[b]=R,I=!1)}this.g=E}var c={};function l(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return x(u(-A));for(var y=[],E=1,I=0;A>=E;I++)y[I]=A/E|0,E*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return x(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),I=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),_=parseInt(A.substring(b,b+R),y);8>R?(R=u(Math.pow(y,R)),I=I.j(R).add(u(_))):(I=I.j(E),I=I.add(u(_)))}return I}var p=l(0),g=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-x(this).m();for(var A=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);A+=(0<=I?I:4294967296+I)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(D(this))return"-"+x(this).toString(A);for(var y=u(Math.pow(A,6)),E=this,I="";;){var b=H(E,y).g;E=z(E,b.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,P(E))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function D(A){return A.h==-1}t.l=function(A){return A=z(this,A),D(A)?-1:P(A)?0:1};function x(A){for(var y=A.g.length,E=[],I=0;I<y;I++)E[I]=~A.g[I];return new o(E,~A.h).add(g)}t.abs=function(){return D(this)?x(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],I=0,b=0;b<=y;b++){var R=I+(this.i(b)&65535)+(A.i(b)&65535),_=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);I=_>>>16,R&=65535,_&=65535,E[b]=_<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function z(A,y){return A.add(x(y))}t.j=function(A){if(P(this)||P(A))return p;if(D(this))return D(A)?x(this).j(x(A)):x(x(this).j(A));if(D(A))return x(this.j(x(A)));if(0>this.l(v)&&0>A.l(v))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<A.g.length;b++){var R=this.i(I)>>>16,_=this.i(I)&65535,re=A.i(b)>>>16,G=A.i(b)&65535;E[2*I+2*b]+=_*G,W(E,2*I+2*b),E[2*I+2*b+1]+=R*G,W(E,2*I+2*b+1),E[2*I+2*b+1]+=_*re,W(E,2*I+2*b+1),E[2*I+2*b+2]+=R*re,W(E,2*I+2*b+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function W(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function q(A,y){this.g=A,this.h=y}function H(A,y){if(P(y))throw Error("division by zero");if(P(A))return new q(p,p);if(D(A))return y=H(x(A),y),new q(x(y.g),x(y.h));if(D(y))return y=H(A,x(y)),new q(x(y.g),y.h);if(30<A.g.length){if(D(A)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=y;0>=I.l(A);)E=oe(E),I=oe(I);var b=le(E,1),R=le(I,1);for(I=le(I,2),E=le(E,2);!P(I);){var _=R.add(I);0>=_.l(A)&&(b=b.add(E),R=_),I=le(I,1),E=le(E,1)}return y=z(A,b.j(y)),new q(b,y)}for(b=p;0<=A.l(y);){for(E=Math.max(1,Math.floor(A.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=u(E),_=R.j(y);D(_)||0<_.l(A);)E-=I,R=u(E),_=R.j(y);P(R)&&(R=g),b=b.add(R),A=z(A,_)}return new q(b,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&A.i(I);return new o(E,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|A.i(I);return new o(E,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^A.i(I);return new o(E,this.h^A.h)};function oe(A){for(var y=A.g.length+1,E=[],I=0;I<y;I++)E[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(E,A.h)}function le(A,y){var E=y>>5;y%=32;for(var I=A.g.length-E,b=[],R=0;R<I;R++)b[R]=0<y?A.i(R+E)>>>y|A.i(R+E+1)<<32-y:A.i(R+E);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,hr=o}).apply(typeof df<"u"?df:typeof self<"u"?self:typeof window<"u"?window:{});var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wm,ai,zm,Lo,Tl,Km,Gm,Qm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof wo=="object"&&wo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,O){for(var X=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)X[$e-2]=arguments[$e];return h.prototype[C].apply(m,X)}}function D(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(l(m)){const C=a.length||0,O=m.length||0;a.length=C+O;for(let X=0;X<O;X++)a[C+X]=m[X]}else a.push(m)}}class z{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function W(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var oe=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function le(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let O=0;O<E.length;O++)f=E[O],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function _(){var a=ce;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class re{constructor(){this.h=this.g=null}add(h,f){const m=G.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var G=new z(()=>new N,a=>a.reset());class N{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,B=!1,ce=new re,de=()=>{const a=c.Promise.resolve(void 0);j=()=>{a.then(Se)}};var Se=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){R(f)}var h=G;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function Ke(a,h){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(oe){e:{try{H(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Xe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ke.aa.h.call(this)}}P(Ke,be);var Xe={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),te=0;function Y(a,h,f,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=C,this.key=++te,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,m,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var X=T(a,h,m,C);return-1<X?(h=a[X],f||(h.fa=!1)):(h=new Y(h,this.src,O,!!m,C),h.fa=f,a.push(h)),h};function w(a,h){var f=h.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,h,void 0),O;(O=0<=C)&&Array.prototype.splice.call(m,C,1),O&&(Z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,h,f,m){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==m)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),M={};function $(a,h,f,m,C){if(Array.isArray(h)){for(var O=0;O<h.length;O++)$(a,h[O],f,m,C);return null}return f=ye(f),a&&a[V]?a.K(h,f,u(m)?!!m.capture:!1,C):L(a,h,f,!1,m,C)}function L(a,h,f,m,C,O){if(!h)throw Error("Invalid event type");var X=u(C)?!!C.capture:!!C,$e=ne(a);if($e||(a[S]=$e=new Re(a)),f=$e.add(h,f,m,X,O),f.proxy)return f;if(m=ee(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)qe||(C=X),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(K(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ee(){function a(f){return h.call(a.src,a.listener,f)}const h=fe;return a}function J(a,h,f,m,C){if(Array.isArray(h))for(var O=0;O<h.length;O++)J(a,h[O],f,m,C);else m=u(m)?!!m.capture:!!m,f=ye(f),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=T(O,f,m,C),-1<f&&(Z(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=ne(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,f,m,C)),(f=-1<a?h[a]:null)&&Q(f))}function Q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])w(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(K(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=ne(h))?(w(f,a),f.h==0&&(f.src=null,h[S]=null)):Z(a)}}}function K(a){return a in M?M[a]:M[a]="on"+a}function fe(a,h){if(a.da)a=!0;else{h=new Ke(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&Q(a),a=f.call(m,h)}return a}function ne(a){return a=a[S],a instanceof Re?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function pe(){Ee.call(this),this.i=new Re(this),this.M=this,this.F=null}P(pe,Ee),pe.prototype[V]=!0,pe.prototype.removeEventListener=function(a,h,f,m){J(this,a,h,f,m)};function Ae(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new be(h,a);else if(h instanceof be)h.target=h.target||a;else{var C=h;h=new be(m,a),I(h,C)}if(C=!0,f)for(var O=f.length-1;0<=O;O--){var X=h.g=f[O];C=xe(X,m,!0,h)&&C}if(X=h.g=a,C=xe(X,m,!0,h)&&C,C=xe(X,m,!1,h)&&C,f)for(O=0;O<f.length;O++)X=h.g=f[O],C=xe(X,m,!1,h)&&C}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)Z(f[m]);delete a.g[h],a.h--}}this.F=null},pe.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},pe.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function xe(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,O=0;O<h.length;++O){var X=h[O];if(X&&!X.da&&X.capture==f){var $e=X.listener,ht=X.ha||X.src;X.fa&&w(a.i,X),C=$e.call(ht,m)!==!1&&C}}return C&&!m.defaultPrevented}function mt(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function lt(a){a.g=mt(()=>{a.g=null,a.i&&(a.i=!1,lt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Wt extends Ee{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:lt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){Ee.call(this),this.h=a,this.g={}}P(_t,Ee);var qn=[];function Bs(a){le(a.g,function(h,f){this.g.hasOwnProperty(f)&&Q(h)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),Bs(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=c.JSON.stringify,zt=c.JSON.parse,eo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function dc(){}dc.prototype.h=null;function uh(a){return a.h||(a.h=a.i())}function hh(){}var qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fc(){be.call(this,"d")}P(fc,be);function pc(){be.call(this,"c")}P(pc,be);var Pr={},dh=null;function to(){return dh=dh||new pe}Pr.La="serverreachability";function fh(a){be.call(this,Pr.La,a)}P(fh,be);function Hs(a){const h=to();Ae(h,new fh(h))}Pr.STAT_EVENT="statevent";function ph(a,h){be.call(this,Pr.STAT_EVENT,a),this.stat=h}P(ph,be);function Ct(a){const h=to();Ae(h,new ph(h,a))}Pr.Ma="timingevent";function gh(a,h){be.call(this,Pr.Ma,a),this.size=h}P(gh,be);function Ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function zs(){this.g=!0}zs.prototype.xa=function(){this.g=!1};function qy(a,h,f,m,C,O){a.info(function(){if(a.g)if(O)for(var X="",$e=O.split("&"),ht=0;ht<$e.length;ht++){var Ve=$e[ht].split("=");if(1<Ve.length){var yt=Ve[0];Ve=Ve[1];var vt=yt.split("_");X=2<=vt.length&&vt[1]=="type"?X+(yt+"="+Ve+"&"):X+(yt+"=redacted&")}}else X=null;else X=O;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+f+`
`+X})}function Hy(a,h,f,m,C,O,X){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+f+`
`+O+" "+X})}function Xr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+zy(a,f)+(m?" "+m:"")})}function Wy(a,h){a.info(function(){return"TIMEOUT: "+h})}zs.prototype.info=function(){};function zy(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var X=1;X<C.length;X++)C[X]=""}}}}return ut(f)}catch{return h}}var no={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gc;function ro(){}P(ro,dc),ro.prototype.g=function(){return new XMLHttpRequest},ro.prototype.i=function(){return{}},gc=new ro;function Hn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _h}function _h(){this.i=null,this.g="",this.h=!1}var yh={},mc={};function _c(a,h,f){a.L=1,a.v=ao(In(h)),a.m=f,a.P=!0,vh(a,null)}function vh(a,h){a.F=Date.now(),so(a),a.A=In(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Oh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new _h,a.g=Jh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Wt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(qn[0]=C.toString()),C=qn);for(var O=0;O<C.length;O++){var X=$(f,C[O],m||h.handleEvent,!1,h.h||h);if(!X)break;h.g[X.key]=X}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Hs(),qy(a.i,a.u,a.A,a.l,a.R,a.m)}Hn.prototype.ca=function(a){a=a.target;const h=this.M;h&&bn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const vt=bn(this.g);var h=this.g.Ba();const ts=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||$h(this.g)))){this.J||vt!=4||h==7||(h==8||0>=ts?Hs(3):Hs(2)),yc(this);var f=this.g.Z();this.X=f;t:if(Eh(this)){var m=$h(this.g);a="";var C=m.length,O=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ks(this);var X="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(O&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=f==200,Hy(this.i,this.u,this.A,this.l,this.R,vt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,ht=this.g;if(($e=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W($e)){var Ve=$e;break t}}Ve=null}if(f=Ve)Xr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vc(this,f);else{this.o=!1,this.s=3,Ct(12),Cr(this),Ks(this);break e}}if(this.P){f=!0;let Zt;for(;!this.J&&this.C<X.length;)if(Zt=Ky(this,X),Zt==mc){vt==4&&(this.s=4,Ct(14),f=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==yh){this.s=4,Ct(15),Xr(this.i,this.l,X,"[Invalid Chunk]"),f=!1;break}else Xr(this.i,this.l,Zt,null),vc(this,Zt);if(Eh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||X.length!=0||this.h.h||(this.s=1,Ct(16),f=!1),this.o=this.o&&f,!f)Xr(this.i,this.l,X,"[Invalid Chunked Response]"),Cr(this),Ks(this);else if(0<X.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Ac(yt),yt.M=!0,Ct(11))}}else Xr(this.i,this.l,X,null),vc(this,X);vt==4&&Cr(this),this.o&&!this.J&&(vt==4?Kh(this.j,this):(this.o=!1,so(this)))}else uv(this.g),f==400&&0<X.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Cr(this),Ks(this)}}}catch{}finally{}};function Eh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ky(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?mc:(f=Number(h.substring(f,m)),isNaN(f)?yh:(m+=1,m+f>h.length?mc:(h=h.slice(m,m+f),a.C=m+f,h)))}Hn.prototype.cancel=function(){this.J=!0,Cr(this)};function so(a){a.S=Date.now()+a.I,wh(a,a.I)}function wh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ws(g(a.ba,a),h)}function yc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Wy(this.i,this.A),this.L!=2&&(Hs(),Ct(17)),Cr(this),this.s=2,Ks(this)):wh(this,this.S-a)};function Ks(a){a.j.G==0||a.J||Kh(a.j,a)}function Cr(a){yc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Bs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function vc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ec(f.h,a))){if(!a.K&&Ec(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)po(f),ho(f);else break e;bc(f),Ct(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ws(g(f.Za,f),6e3));if(1>=bh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else xr(f,11)}else if((a.K||f.g==a)&&po(f),!W(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let Ve=C[h];if(f.T=Ve[0],Ve=Ve[1],f.G==2)if(Ve[0]=="c"){f.K=Ve[1],f.ia=Ve[2];const yt=Ve[3];yt!=null&&(f.la=yt,f.j.info("VER="+f.la));const vt=Ve[4];vt!=null&&(f.Aa=vt,f.j.info("SVER="+f.Aa));const ts=Ve[5];ts!=null&&typeof ts=="number"&&0<ts&&(m=1.5*ts,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Zt=a.g;if(Zt){const mo=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var O=m.h;O.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(wc(O,O.h),O.h=null))}if(m.D){const Rc=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(m.ya=Rc,He(m.I,m.D,Rc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var X=a;if(m.qa=Yh(m,m.J?m.ia:null,m.W),X.K){Ah(m.h,X);var $e=X,ht=m.L;ht&&($e.I=ht),$e.B&&(yc($e),so($e)),m.g=X}else Wh(m);0<f.i.length&&fo(f)}else Ve[0]!="stop"&&Ve[0]!="close"||xr(f,7);else f.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?xr(f,7):Ic(f):Ve[0]!="noop"&&f.l&&f.l.ta(Ve),f.v=0)}}Hs(4)}catch{}}var Gy=class{constructor(a,h){this.g=a,this.map=h}};function Th(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ih(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bh(a){return a.h?1:a.g?a.g.size:0}function Ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wc(a,h){a.g?a.g.add(h):a.h=h}function Ah(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Th.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return D(a.i)}function Qy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function Yy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Sh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Yy(a),m=Qy(a),C=m.length,O=0;O<C;O++)h.call(void 0,m[O],f&&f[O],a)}var Ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jy(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var O=a[f].substring(0,m);C=a[f].substring(m+1)}else O=a[f];h(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,io(this,a.j),this.o=a.o,this.g=a.g,oo(this,a.s),this.l=a.l;var h=a.i,f=new Ys;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ch(this,f),this.m=a.m}else a&&(h=String(a).match(Ph))?(this.h=!1,io(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),oo(this,h[4]),this.l=Gs(h[5]||"",!0),Ch(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.h=!1,this.i=new Ys(null,this.h))}kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Qs(h,kh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,kh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Qs(f,f.charAt(0)=="/"?ev:Zy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Qs(f,nv)),a.join("")};function In(a){return new kr(a)}function io(a,h,f){a.j=f?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function oo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ch(a,h,f){h instanceof Ys?(a.i=h,rv(a.i,a.h)):(f||(h=Qs(h,tv)),a.i=new Ys(h,a.h))}function He(a,h,f){a.i.set(h,f)}function ao(a){return He(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Xy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var kh=/[#\/\?@]/g,Zy=/[#\?:]/g,ev=/[#\?]/g,tv=/[#\?@]/g,nv=/#/g;function Ys(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&Jy(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ys.prototype,t.add=function(a,h){Wn(this),this.i=null,a=Zr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function xh(a,h){Wn(a),h=Zr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Dh(a,h){return Wn(a),h=Zr(a,h),a.g.has(h)}t.forEach=function(a,h){Wn(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const C=a[m];for(let O=0;O<C.length;O++)f.push(h[m])}return f},t.V=function(a){Wn(this);let h=[];if(typeof a=="string")Dh(this,a)&&(h=h.concat(this.g.get(Zr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Wn(this),this.i=null,a=Zr(this,a),Dh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Oh(a,h,f){xh(a,h),0<f.length&&(a.i=null,a.g.set(Zr(a,h),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const O=encodeURIComponent(String(m)),X=this.V(m);for(m=0;m<X.length;m++){var C=O;X[m]!==""&&(C+="="+encodeURIComponent(String(X[m]))),a.push(C)}}return this.i=a.join("&")};function Zr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function rv(a,h){h&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(xh(this,m),Oh(this,C,f))},a)),a.j=h}function sv(a,h){const f=new zs;if(c.Image){const m=new Image;m.onload=v(zn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=v(zn,f,"TestLoadImage: error",!1,h,m),m.onabort=v(zn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=v(zn,f,"TestLoadImage: timeout",!1,h,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function iv(a,h){const f=new zs,m=new AbortController,C=setTimeout(()=>{m.abort(),zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(C),O.ok?zn(f,"TestPingServer: ok",!0,h):zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),zn(f,"TestPingServer: error",!1,h)})}function zn(a,h,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function ov(){this.g=new eo}function av(a,h,f){const m=f||"";try{Sh(a,function(C,O){let X=C;u(C)&&(X=ut(C)),h.push(m+O+"="+encodeURIComponent(X))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function co(a){this.l=a.Ub||null,this.j=a.eb||!1}P(co,dc),co.prototype.g=function(){return new lo(this.l,this.j)},co.prototype.i=function(a){return function(){return a}}({});function lo(a,h){pe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(lo,pe),t=lo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Js(this):Xs(this),this.readyState==3&&Vh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Js(this))},t.Qa=function(a){this.g&&(this.response=a,Js(this))},t.ga=function(){this.g&&Js(this)};function Js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nh(a){let h="";return le(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Tc(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Nh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):He(a,h,f))}function Qe(a){pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Qe,pe);var cv=/^https?$/i,lv=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gc.g(),this.v=this.o?uh(this.o):uh(gc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Mh(this,O);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(lv,h,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,X]of f)this.g.setRequestHeader(O,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Mh(this,O)}};function Mh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Lh(a),uo(a)}function Lh(a){a.A||(a.A=!0,Ae(a,"complete"),Ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ae(this,"complete"),Ae(this,"abort"),uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uo(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fh(this):this.bb())},t.bb=function(){Fh(this)};function Fh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)mt(a.Ea,0,a);else if(Ae(a,"readystatechange"),bn(a)==4){a.h=!1;try{const X=a.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=X===0){var C=String(a.D).match(Ph)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),m=!cv.test(C?C.toLowerCase():"")}f=m}if(f)Ae(a,"complete"),Ae(a,"success");else{a.m=6;try{var O=2<bn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Lh(a)}}finally{uo(a)}}}}function uo(a,h){if(a.g){Uh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ae(a,"ready");try{f.onreadystatechange=m}catch{}}}function Uh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),zt(h)}};function $h(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uv(a){const h={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(W(a[m]))continue;var f=b(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[C]||[];h[C]=O,O.push(f)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function jh(a){this.Aa=0,this.i=[],this.j=new zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zs("baseRetryDelayMs",5e3,a),this.cb=Zs("retryDelaySeedMs",1e4,a),this.Wa=Zs("forwardChannelMaxRetries",2,a),this.wa=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Th(a&&a.concurrentRequestLimit),this.Da=new ov,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){Ct(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Yh(this,null,this.W),fo(this)};function Ic(a){if(Bh(a),a.G==3){var h=a.U++,f=In(a.I);if(He(f,"SID",a.K),He(f,"RID",h),He(f,"TYPE","terminate"),ei(a,f),h=new Hn(a,a.j,h),h.L=2,h.v=ao(In(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Jh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),so(h)}Qh(a)}function ho(a){a.g&&(Ac(a),a.g.cancel(),a.g=null)}function Bh(a){ho(a),a.u&&(c.clearTimeout(a.u),a.u=null),po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function fo(a){if(!Ih(a.h)&&!a.s){a.s=!0;var h=a.Ga;j||de(),B||(j(),B=!0),ce.add(h,a),a.B=0}}function hv(a,h){return bh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ws(g(a.Ga,a,h),Gh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Hn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Hh(this,C,h),f=In(this.I),He(f,"RID",a),He(f,"CVER",22),this.D&&He(f,"X-HTTP-Session-Id",this.D),ei(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Nh(O)))+"&"+h:this.m&&Tc(f,this.m,O)),wc(this.h,C),this.Ua&&He(f,"TYPE","init"),this.P?(He(f,"$req",h),He(f,"SID","null"),C.T=!0,_c(C,f,null)):_c(C,f,h),this.G=2}}else this.G==3&&(a?qh(this,a):this.i.length==0||Ih(this.h)||qh(this))};function qh(a,h){var f;h?f=h.l:f=a.U++;const m=In(a.I);He(m,"SID",a.K),He(m,"RID",f),He(m,"AID",a.T),ei(a,m),a.m&&a.o&&Tc(m,a.m,a.o),f=new Hn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Hh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),wc(a.h,f),_c(f,m,h)}function ei(a,h){a.H&&le(a.H,function(f,m){He(h,m,f)}),a.l&&Sh({},function(f,m){He(h,m,f)})}function Hh(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const X=["count="+f];O==-1?0<f?(O=C[0].g,X.push("ofs="+O)):O=0:X.push("ofs="+O);let $e=!0;for(let ht=0;ht<f;ht++){let Ve=C[ht].g;const yt=C[ht].map;if(Ve-=O,0>Ve)O=Math.max(0,C[ht].g-100),$e=!1;else try{av(yt,X,"req"+Ve+"_")}catch{m&&m(yt)}}if($e){m=X.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Wh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;j||de(),B||(j(),B=!0),ce.add(h,a),a.v=0}}function bc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ws(g(a.Fa,a),Gh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,zh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ws(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),ho(this),zh(this))};function Ac(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function zh(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);He(h,"RID","rpc"),He(h,"SID",a.K),He(h,"AID",a.T),He(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&He(h,"TO",a.ja),He(h,"TYPE","xmlhttp"),ei(a,h),a.m&&a.o&&Tc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ao(In(h)),f.m=null,f.P=!0,vh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ho(this),bc(this),Ct(19))};function po(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Kh(a,h){var f=null;if(a.g==h){po(a),Ac(a),a.g=null;var m=2}else if(Ec(a.h,h))f=h.D,Ah(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=to(),Ae(m,new gh(m,f)),fo(a)}else Wh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&hv(a,h)||m==2&&bc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:xr(a,5);break;case 4:xr(a,10);break;case 3:xr(a,6);break;default:xr(a,2)}}}function Gh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function xr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const C=!m;m=new kr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||io(m,"https"),ao(m),C?sv(m.toString(),f):iv(m.toString(),f)}else Ct(2);a.G=0,a.l&&a.l.sa(h),Qh(a),Bh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Qh(a){if(a.G=0,a.ka=[],a.l){const h=Rh(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Yh(a,h,f){var m=f instanceof kr?In(f):new kr(f);if(m.g!="")h&&(m.g=h+"."+m.g),oo(m,m.s);else{var C=c.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var O=new kr(null);m&&io(O,m),h&&(O.g=h),C&&oo(O,C),f&&(O.l=f),m=O}return f=a.D,h=a.ya,f&&h&&He(m,f,h),He(m,"VER",a.la),ei(a,m),m}function Jh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new co({eb:f})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xh(){}t=Xh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function go(){}go.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){pe.call(this),this.g=new jh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!W(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!W(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new es(this)}P(Ut,pe),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Ic(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ut(a),a=f);h.i.push(new Gy(h.Ya++,a)),h.G==3&&fo(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,Ut.aa.N.call(this)};function Zh(a){fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Zh,fc);function ed(){pc.call(this),this.status=1}P(ed,pc);function es(a){this.g=a}P(es,Xh),es.prototype.ua=function(){Ae(this.g,"a")},es.prototype.ta=function(a){Ae(this.g,new Zh(a))},es.prototype.sa=function(a){Ae(this.g,new ed)},es.prototype.ra=function(){Ae(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Qm=function(){return new go},Gm=function(){return to()},Km=Pr,Tl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},no.NO_ERROR=0,no.TIMEOUT=8,no.HTTP_ERROR=6,Lo=no,mh.COMPLETE="complete",zm=mh,hh.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",pe.prototype.listen=pe.prototype.K,ai=hh,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Wm=Qe}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});const ff="@firebase/firestore",pf="4.7.11";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let Ls="11.6.1";/**
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
 */const Wr=new cu("@firebase/firestore");function os(){return Wr.logLevel}function se(t,...e){if(Wr.logLevel<=Ce.DEBUG){const n=e.map(Eu);Wr.debug(`Firestore (${Ls}): ${t}`,...n)}}function Fn(t,...e){if(Wr.logLevel<=Ce.ERROR){const n=e.map(Eu);Wr.error(`Firestore (${Ls}): ${t}`,...n)}}function bs(t,...e){if(Wr.logLevel<=Ce.WARN){const n=e.map(Eu);Wr.warn(`Firestore (${Ls}): ${t}`,...n)}}function Eu(t){if(typeof t=="string")return t;try{/**
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
 */function _e(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ym(t,r,n)}function Ym(t,e,n){let r=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Fn(r),new Error(r)}function Ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ym(e,s,r)}function Te(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class Lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fb{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string",31837,{l:r}),new Jm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class Ub{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $b{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Ub(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ue(this.o===void 0,3512);const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Bb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Xm(){return new TextEncoder}/**
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
 */class Zm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Bb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function Il(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Pe(r,s);{const i=Xm(),o=qb(i.encode(mf(t,n)),i.encode(mf(e,n)));return o!==0?o:Pe(r,s)}}n+=r>65535?2:1}return Pe(t.length,e.length)}function mf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function qb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Pe(t[n],e[n]);return Pe(t.length,e.length)}function As(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const _f=-62135596800,yf=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*yf);return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_f)throw new ie(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yf}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-_f;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new ot(0,0))}static max(){return new we(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vf="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&_e(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ln.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Pe(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),s=ln.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Il(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class We extends ln{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const Hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends ln{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return Hb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vf}static keyField(){return new pt([vf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ie(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ie(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(We.fromString(e))}static fromName(e){return new he(We.fromString(e).popFirst(5))}static empty(){return new he(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new We(e.slice()))}}/**
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
 */const Di=-1;function Wb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=we.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new gr(s,he.empty(),e)}function zb(t){return new gr(t.readTime,t.key,Di)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(we.min(),he.empty(),Di)}static max(){return new gr(we.max(),he.empty(),Di)}}function Kb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fs(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Gb)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Yb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ja{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ja.le=-1;/**
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
 */const wu=-1;function Ba(t){return t==null}function aa(t){return t===0&&1/t==-1/0}function Jb(t){return typeof t=="number"&&Number.isInteger(t)&&!aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const e_="";function Xb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ef(e)),e=Zb(t.get(n),e);return Ef(e)}function Zb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case e_:n+="";break;default:n+=i}}return n}function Ef(t){return t+e_+""}/**
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
 */function wf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tf(this.data.getIterator())}getIteratorFrom(e){return new Tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new at(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class n_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n_("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const eA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(Ue(!!t,39018),typeof t=="string"){let e=0;const n=eA.exec(t);if(Ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */const r_="server_timestamp",s_="__type__",i_="__previous_value__",o_="__local_write_time__";function Tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[s_])===null||n===void 0?void 0:n.stringValue)===r_}function qa(t){const e=t.mapValue.fields[i_];return Tu(e)?qa(e):e}function Oi(t){const e=mr(t.mapValue.fields[o_].timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class tA{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}const ca="(default)";class Vi{constructor(e,n){this.projectId=e,this.database=n||ca}static empty(){return new Vi("","")}get isDefaultDatabase(){return this.database===ca}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const a_="__type__",nA="__max__",Io={mapValue:{}},c_="__vector__",la="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:sA(t)?9007199254740991:rA(t)?10:11:_e(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mr(s.timestampValue),c=mr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),c=Ze(i.doubleValue);return o===c?aa(o)===aa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(wf(o)!==wf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0}(t,e);default:return _e(52216,{left:t})}}function Ni(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ze(i.integerValue||i.doubleValue),l=Ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return If(t.timestampValue,e.timestampValue);case 4:return If(Oi(t),Oi(e));case 5:return Il(t.stringValue,e.stringValue);case 6:return function(i,o){const c=_r(i),l=_r(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Pe(c[u],l[u]);if(d!==0)return d}return Pe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Pe(Ze(i.latitude),Ze(o.latitude));return c!==0?c:Pe(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return bf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const p=i.fields||{},g=o.fields||{},v=(c=p[la])===null||c===void 0?void 0:c.arrayValue,P=(l=g[la])===null||l===void 0?void 0:l.arrayValue,D=Pe(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:bf(v,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Io.mapValue&&o===Io.mapValue)return 0;if(i===Io.mapValue)return 1;if(o===Io.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Il(l[p],d[p]);if(g!==0)return g;const v=Rs(c[l[p]],u[d[p]]);if(v!==0)return v}return Pe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw _e(23264,{Pe:n})}}function If(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=mr(t),r=mr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function bf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function Ss(t){return bl(t)}function bl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bl(n.fields[o])}`;return s+"}"}(t.mapValue):_e(61005,{value:t})}function Fo(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qa(t);return e?16+Fo(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Fo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ar(r.fields,(i,o)=>{s+=i.length+Fo(o)}),s}(t.mapValue);default:throw _e(13486,{value:t})}}function Af(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Al(t){return!!t&&"integerValue"in t}function Iu(t){return!!t&&"arrayValue"in t}function Rf(t){return!!t&&"nullValue"in t}function Sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function rA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[a_])===null||n===void 0?void 0:n.stringValue)===c_}function vi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nA}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vi(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=vi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(vi(this.value))}}function l_(t){const e=[];return Ar(t.fields,(n,r)=>{const s=new pt([n]);if(Uo(r)){const i=l_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */class At{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new At(e,0,we.min(),we.min(),we.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,we.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,we.min(),we.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,we.min(),we.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ua{constructor(e,n){this.position=e,this.inclusive=n}}function Pf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ha{constructor(e,n="asc"){this.field=e,this.dir=n}}function iA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class u_{}class st extends u_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aA(e,n,r):n==="array-contains"?new uA(e,r):n==="in"?new hA(e,r):n==="not-in"?new dA(e,r):n==="array-contains-any"?new fA(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cA(e,r):new lA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Rs(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends u_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new sn(e,n)}matches(e){return h_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function h_(t){return t.op==="and"}function d_(t){return oA(t)&&h_(t)}function oA(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function Rl(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(d_(t))return t.filters.map(e=>Rl(e)).join(",");{const e=t.filters.map(n=>Rl(n)).join(",");return`${t.op}(${e})`}}function f_(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&f_(o,s.filters[c]),!0):!1}(t,e):void _e(19439)}function p_(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(p_).join(" ,")+"}"}(t):"Filter"}class aA extends st{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class cA extends st{constructor(e,n){super(e,"in",n),this.keys=g_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lA extends st{constructor(e,n){super(e,"not-in",n),this.keys=g_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class uA extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Iu(n)&&Ni(n.arrayValue,this.value)}}class hA extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class dA extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ni(this.value.arrayValue,n)}}class fA extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
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
 */class pA{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function kf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pA(t,e,n,r,s,i,o)}function bu(t){const e=Te(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.Ie=n}return e.Ie}function Au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!f_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cf(t.startAt,e.startAt)&&Cf(t.endAt,e.endAt)}function Sl(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function gA(t,e,n,r,s,i,o,c){return new Qi(t,e,n,r,s,i,o,c)}function Ha(t){return new Qi(t)}function xf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function m_(t){return t.collectionGroup!==null}function Ei(t){const e=Te(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ha(i,r))}),n.has(pt.keyField().canonicalString())||e.Ee.push(new ha(pt.keyField(),r))}return e.Ee}function gn(t){const e=Te(t);return e.de||(e.de=mA(e,Ei(t))),e.de}function mA(t,e){if(t.limitType==="F")return kf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ha(s.field,i)});const n=t.endAt?new ua(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ua(t.startAt.position,t.startAt.inclusive):null;return kf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pl(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function da(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return Au(gn(t),gn(e))&&t.limitType===e.limitType}function __(t){return`${bu(gn(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>p_(s)).join(", ")}]`),Ba(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Pf(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ei(r),s)||r.endAt&&!function(o,c,l){const u=Pf(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ei(r),s))}(t,e)}function _A(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function y_(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=yA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yA(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Rs(l,u):_e(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return _e(19790,{direction:t.dir})}}/**
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
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
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
 */const vA=new Ge(he.comparator);function Un(){return vA}const v_=new Ge(he.comparator);function ci(...t){let e=v_;for(const n of t)e=e.insert(n.key,n);return e}function E_(t){let e=v_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return wi()}function w_(){return wi()}function wi(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const EA=new Ge(he.comparator),wA=new at(he.comparator);function ke(...t){let e=wA;for(const n of t)e=e.add(n);return e}const TA=new at(Pe);function IA(){return TA}/**
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
 */function Ru(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aa(e)?"-0":e}}function T_(t){return{integerValue:""+t}}function bA(t,e){return Jb(e)?T_(e):Ru(t,e)}/**
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
 */class Ka{constructor(){this._=void 0}}function AA(t,e,n){return t instanceof fa?function(s,i){const o={fields:{[s_]:{stringValue:r_},[o_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tu(i)&&(i=qa(i)),i&&(o.fields[i_]=i),{mapValue:o}}(n,e):t instanceof Ps?b_(t,e):t instanceof Mi?A_(t,e):function(s,i){const o=I_(s,i),c=Df(o)+Df(s.Re);return Al(o)&&Al(s.Re)?T_(c):Ru(s.serializer,c)}(t,e)}function RA(t,e,n){return t instanceof Ps?b_(t,e):t instanceof Mi?A_(t,e):n}function I_(t,e){return t instanceof pa?function(r){return Al(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fa extends Ka{}class Ps extends Ka{constructor(e){super(),this.elements=e}}function b_(t,e){const n=R_(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mi extends Ka{constructor(e){super(),this.elements=e}}function A_(t,e){let n=R_(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class pa extends Ka{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Df(t){return Ze(t.integerValue||t.doubleValue)}function R_(t){return Iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class SA{constructor(e,n){this.field=e,this.transform=n}}function PA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ps&&s instanceof Ps||r instanceof Mi&&s instanceof Mi?As(r.elements,s.elements,yn):r instanceof pa&&s instanceof pa?yn(r.Re,s.Re):r instanceof fa&&s instanceof fa}(t.transform,e.transform)}class CA{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ga{}function S_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Su(t.key,Jt.none()):new Yi(t.key,t.data,Jt.none());{const n=t.data,r=Mt.empty();let s=new at(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new Ht(s.toArray()),Jt.none())}}function kA(t,e,n){t instanceof Yi?function(s,i,o){const c=s.value.clone(),l=Vf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!$o(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Vf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(P_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ti(t,e,n,r){return t instanceof Yi?function(i,o,c,l){if(!$o(i.precondition,o))return c;const u=i.value.clone(),d=Nf(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,c,l){if(!$o(i.precondition,o))return c;const u=Nf(i.fieldTransforms,l,o),d=o.data;return d.setAll(P_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return $o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function xA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=I_(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function Of(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,(i,o)=>PA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends Ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends Ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function P_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vf(t,e,n){const r=new Map;Ue(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,RA(o,c,n[s]))}return r}function Nf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AA(i,o,e))}return r}class Su extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DA extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=w_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=S_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>Of(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>Of(n,r))}}class Pu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ue(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return EA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pu(e,n,r,s)}}/**
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
 */class VA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class NA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,De;function MA(t){switch(t){case F.OK:return _e(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return _e(15467,{code:t})}}function C_(t){if(t===void 0)return Fn("GRPC error has no .code"),F.UNKNOWN;switch(t){case nt.OK:return F.OK;case nt.CANCELLED:return F.CANCELLED;case nt.UNKNOWN:return F.UNKNOWN;case nt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case nt.INTERNAL:return F.INTERNAL;case nt.UNAVAILABLE:return F.UNAVAILABLE;case nt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case nt.NOT_FOUND:return F.NOT_FOUND;case nt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case nt.ABORTED:return F.ABORTED;case nt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case nt.DATA_LOSS:return F.DATA_LOSS;default:return _e(39323,{code:t})}}(De=nt||(nt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const LA=new hr([4294967295,4294967295],0);function Mf(t){const e=Xm().encode(t),n=new Hm;return n.update(e),new Uint8Array(n.digest())}function Lf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class Cu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new li(`Invalid padding: ${n}`);if(r<0)throw new li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new li(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new li(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=hr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(LA)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Mf(e),[r,s]=Lf(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const n=Mf(e),[r,s]=Lf(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qa(we.min(),s,new Ge(Pe),Un(),ke())}}class Ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ji(r,n,ke(),ke(),ke())}}/**
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
 */class jo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class k_{constructor(e,n){this.targetId=e,this.Ce=n}}class x_{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ff{constructor(){this.Fe=0,this.Me=Uf(),this.xe=gt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ke(),n=ke(),r=ke();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:_e(38017,{changeType:i})}}),new Ji(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Uf()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ue(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class FA{constructor(e){this.ze=e,this.je=new Map,this.He=Un(),this.Je=bo(),this.Ye=bo(),this.Ze=new Ge(Pe)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:_e(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Sl(i))if(r===0){const o=new he(i.path);this.tt(n,o,At.newNoDocument(o,we.min()))}else Ue(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=_r(r).toUint8Array()}catch(l){if(l instanceof n_)return bs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Cu(o,s,i)}catch(l){return bs(l instanceof li?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&Sl(c.target)){const l=new he(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,At.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=ke();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this._t(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Qa(e,n,this.Ze,this.He,r);return this.He=Un(),this.Je=bo(),this.Ye=bo(),this.Ze=new Ge(Pe),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Ff,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new at(Pe),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new at(Pe),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ff),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function bo(){return new Ge(he.comparator)}function Uf(){return new Ge(he.comparator)}const UA={asc:"ASCENDING",desc:"DESCENDING"},$A={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jA={and:"AND",or:"OR"};class BA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cl(t,e){return t.useProto3Json||Ba(e)?e:{value:e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function D_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qA(t,e){return ga(t,e.toTimestamp())}function mn(t){return Ue(!!t,49232),we.fromTimestamp(function(n){const r=mr(n);return new ot(r.seconds,r.nanos)}(t))}function ku(t,e){return kl(t,e).canonicalString()}function kl(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function O_(t){const e=We.fromString(t);return Ue(F_(e),10190,{key:e.toString()}),e}function xl(t,e){return ku(t.databaseId,e.path)}function zc(t,e){const n=O_(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(N_(n))}function V_(t,e){return ku(t.databaseId,e)}function HA(t){const e=O_(t);return e.length===4?We.emptyPath():N_(e)}function Dl(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function N_(t){return Ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $f(t,e,n){return{name:xl(t,e),fields:n.value.mapValue.fields}}function WA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ue(d===void 0||typeof d=="string",58123),gt.fromBase64String(d||"")):(Ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?F.UNKNOWN:C_(u.code);return new ie(d,u.message||"")}(o);n=new x_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zc(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):we.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=At.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new jo(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zc(t,r.document),i=r.readTime?mn(r.readTime):we.min(),o=At.newNoDocument(s,i),c=r.removedTargetIds||[];n=new jo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zc(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new NA(s,i),c=r.targetId;n=new k_(c,o)}}return n}function zA(t,e){let n;if(e instanceof Yi)n={update:$f(t,e.key,e.value)};else if(e instanceof Su)n={delete:xl(t,e.key)};else if(e instanceof Rr)n={update:$f(t,e.key,e.data),updateMask:tR(e.fieldMask)};else{if(!(e instanceof DA))return _e(16599,{ft:e.type});n={verify:xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ps)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pa)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw _e(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e(27497)}(t,e.precondition)),n}function KA(t,e){return t&&t.length>0?(Ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(we.min())&&(o=mn(i)),new CA(o,s.transformResults||[])}(n,e))):[]}function GA(t,e){return{documents:[V_(t,e.path)]}}function QA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=V_(t,s);const i=function(u){if(u.length!==0)return L_(sn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:cs(g.field),direction:XA(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Cl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function YA(t){let e=HA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ue(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=M_(p);return g instanceof sn&&d_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new ha(ls(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ba(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new ua(v,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,v=p.values||[];return new ua(v,g)}(n.endAt)),gA(e,s,o,i,c,"F",l,u)}function JA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ls(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ls(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}}(t):t.fieldFilter!==void 0?function(n){return st.create(ls(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>M_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return _e(1026)}}(n.compositeFilter.op))}(t):_e(30097,{filter:t})}function XA(t){return UA[t]}function ZA(t){return $A[t]}function eR(t){return jA[t]}function cs(t){return{fieldPath:t.canonicalString()}}function ls(t){return pt.fromServerFormat(t.fieldPath)}function L_(t){return t instanceof st?function(n){if(n.op==="=="){if(Sf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(Rf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(Rf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:ZA(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(s=>L_(s));return r.length===1?r[0]:{compositeFilter:{op:eR(n.op),filters:r}}}(t):_e(54877,{filter:t})}function tR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ir{constructor(e,n,r,s,i=we.min(),o=we.min(),c=gt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nR{constructor(e){this.wt=e}}function rR(t){const e=YA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?da(e,e.limit,"L"):e}/**
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
 */class sR{constructor(){this.yn=new iR}addToCollectionParentIndex(e,n){return this.yn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(gr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class iR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(We.comparator)).toArray()}}/**
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
 */const jf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},U_=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(U_,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class Cs{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Cs(0)}static ir(){return new Cs(-1)}}/**
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
 */const Bf="LruGarbageCollector",oR=1048576;function qf([t,e],[n,r]){const s=Pe(t,n);return s===0?Pe(e,r):s}class aR{constructor(e){this.cr=e,this.buffer=new at(qf),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){se(Bf,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Us(n)?se(Bf,"Ignoring IndexedDB error during garbage collection: ",n):await Fs(n)}await this.Ir(3e5)})}}class lR{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(ja.le);const r=new aR(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(jf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jf):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),os()<=Ce.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function uR(t,e){return new lR(t,e)}/**
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
 */class hR{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ti(r.mutation,s,Ht.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ke()){const s=Mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ci();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ke()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Un();const o=wi(),c=function(){return wi()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Rr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ti(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new dR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=wi();let s=new Ge((o,c)=>o-c),i=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Ht.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ke()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=w_();d.forEach(g=>{if(!i.has(g)){const v=S_(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):m_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Mr());let c=Di,l=i;return o.next(u=>U.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ke())).next(d=>({batchId:c,changes:E_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=ci();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ci();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const u=function(p,g){return new Qi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let c=ci();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Ti(d.mutation,u,Ht.empty(),ot.now()),za(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class pR{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return U.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:rR(s.bundledQuery),readTime:mn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class gR{constructor(){this.overlays=new Ge(he.comparator),this.Or=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Mr(),i=n.length+1,o=new he(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Mr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return U.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VA(n,r));let i=this.Or.get(n);i===void 0&&(i=ke(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
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
 */class mR{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class xu{constructor(){this.Nr=new at(ct.Br),this.Lr=new at(ct.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new ct(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new he(new We([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new he(new We([])),r=new ct(n,e),s=new ct(n,e+1);let i=ke();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return he.comparator(e.key,n.key)||Pe(e.Gr,n.Gr)}static kr(e,n){return Pe(e.Gr,n.Gr)||he.comparator(e.key,n.key)}}/**
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
 */class _R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new at(ct.Br)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OA(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.zr=this.zr.add(new ct(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?wu:this.Jn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const c=this.jr(o.Gr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Pe);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],c=>{r=r.add(c.Gr)})}),U.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ct(new he(i),0);let c=new at(Pe);return this.zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Gr)),!0)},o),U.resolve(this.Jr(c))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return U.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new ct(n,0),s=this.zr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yR{constructor(e){this.Zr=e,this.docs=function(){return new Ge(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,c=new he(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Kb(zb(d),r)<=0||(s.has(d.key)||za(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){_e(9500)}Xr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vR(this)}getSize(e){return U.resolve(this.size)}}class vR extends hR{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class ER{constructor(e){this.persistence=e,this.ei=new Qr(n=>bu(n),Au),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ti=0,this.ni=new xu,this.targetCount=0,this.ri=Cs.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),U.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.ar(n),U.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.ni.containsKey(n))}}/**
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
 */class $_{constructor(e,n){this.ii={},this.overlays={},this.si=new ja(0),this.oi=!1,this.oi=!0,this._i=new mR,this.referenceDelegate=e(this),this.ai=new ER(this),this.indexManager=new sR,this.remoteDocumentCache=function(s){return new yR(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new nR(n),this.ci=new pR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new _R(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new wR(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return U.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class wR extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class Du{constructor(e){this.persistence=e,this.Ti=new xu,this.Ii=null}static Ei(e){return new Du(e)}get di(){if(this.Ii)return this.Ii;throw _e(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,r=>{const s=he.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,we.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return U.or([()=>U.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class ma{constructor(e,n){this.persistence=e,this.Ri=new Qr(r=>Xb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uR(this,n)}static Ei(e,n){return new ma(e,n)}li(){}hi(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return U.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,we.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),U.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fo(e.data.value)),n}gr(e,n,r){return U.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ou{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=ke(),s=ke();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ou(e,n.fromCache,r,s)}}/**
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
 */class TR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IR{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return tT()?8:Yb(Pt())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TR;return this.fs(e,n,o).next(c=>{if(i.result=c,this.Is)return this.gs(e,n,o,c.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(os()<=Ce.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),U.resolve()):(os()<=Ce.DEBUG&&se("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(os()<=Ce.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):U.resolve())}Rs(e,n){if(xf(n))return U.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=da(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ke(...i);return this.As.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ps(n,c);return this.ys(n,u,o,l.readTime)?this.Rs(e,da(n,null,"F")):this.ws(e,u,n,l)}))})))}Vs(e,n,r,s){return xf(n)||s.isEqual(we.min())?U.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?U.resolve(null):(os()<=Ce.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.ws(e,o,n,Wb(s,Di)).next(c=>c))})}ps(e,n){let r=new at(y_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return os()<=Ce.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",as(n)),this.As.getDocumentsMatchingQuery(e,n,gr.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Vu="LocalStore",bR=3e8;class AR{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new Ge(Pe),this.Ds=new Qr(i=>bu(i),Au),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fR(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function RR(t,e,n,r){return new AR(t,e,n,r)}async function j_(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ke();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ms:u,removedBatchIds:o,addedBatchIds:c}))})})}function SR(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,g=p.keys();let v=U.resolve();return g.forEach(P=>{v=v.next(()=>d.getEntry(l,P)).next(D=>{const x=u.docVersions.get(P);Ue(x!==null,48541),D.version.compareTo(x)<0&&(p.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),d.addEntry(D)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ke();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function B_(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function PR(t,e){const n=Te(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.ai.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.ai.addMatchingKeys(i,d.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(gt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(D,x,z){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=bR?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(g,v,d)&&c.push(n.ai.updateTargetData(i,v))});let l=Un(),u=ke();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(CR(i,o,e.documentUpdates).next(d=>{l=d.xs,u=d.Os})),!r.isEqual(we.min())){const d=n.ai.getLastRemoteSnapshotVersion(i).next(p=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ss=s,i))}function CR(t,e,n){let r=ke(),s=ke();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Un();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(we.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):se(Vu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{xs:o,Os:s}})}function kR(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xR(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function Ol(t,e,n){const r=Te(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Us(o))throw o;se(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function Hf(t,e,n){const r=Te(t);let s=we.min(),i=ke();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=Te(l),g=p.Ds.get(d);return g!==void 0?U.resolve(p.Ss.get(g)):p.ai.getTargetData(u,d)}(r,o,gn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:we.min(),n?i:ke())).next(c=>(DR(r,_A(e),c),{documents:c,Ns:i})))}function DR(t,e,n){let r=t.vs.get(e)||we.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class Wf{constructor(){this.activeTargetIds=IA()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OR{constructor(){this.So=new Wf,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Wf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VR{vo(e){}shutdown(){}}/**
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
 */const zf="ConnectivityMonitor";class Kf{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){se(zf,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){se(zf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ao=null;function Vl(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
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
 */const Kc="RestConnection",NR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MR{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=Vl(),c=this.$o(e,n.toUriEncodedString());se(Kc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(l,s,i),this.Ko(e,c,l,r).then(u=>(se(Kc,`Received RPC '${e}' ${o}: `,u),u),u=>{throw bs(Kc,`RPC '${e}' ${o} failed with error: `,u,"url: ",c,"request:",r),u})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ls}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=NR[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class LR{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Et="WebChannelConnection";class FR extends MR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s){const i=Vl();return new Promise((o,c)=>{const l=new Wm;l.setWithCredentials(!0),l.listenOnce(zm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Lo.NO_ERROR:const d=l.getResponseJson();se(Et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Lo.TIMEOUT:se(Et,`RPC '${e}' ${i} timed out`),c(new ie(F.DEADLINE_EXCEEDED,"Request time out"));break;case Lo.HTTP_ERROR:const p=l.getStatus();if(se(Et,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const P=function(x){const z=x.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(z)>=0?z:F.UNKNOWN}(v.status);c(new ie(P,v.message))}else c(new ie(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ie(F.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{s_:e,streamId:i,o_:l.getLastErrorCode(),__:l.getLastError()})}}finally{se(Et,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);se(Et,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}a_(e,n,r){const s=Vl(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qm(),c=Gm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");se(Et,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,v=!1;const P=new LR({Go:x=>{v?se(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(se(Et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),se(Et,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},zo:()=>p.close()}),D=(x,z,W)=>{x.listen(z,q=>{try{W(q)}catch(H){setTimeout(()=>{throw H},0)}})};return D(p,ai.EventType.OPEN,()=>{v||(se(Et,`RPC '${e}' stream ${s} transport opened.`),P.t_())}),D(p,ai.EventType.CLOSE,()=>{v||(v=!0,se(Et,`RPC '${e}' stream ${s} transport closed`),P.r_())}),D(p,ai.EventType.ERROR,x=>{v||(v=!0,bs(Et,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),P.r_(new ie(F.UNAVAILABLE,"The operation could not be completed")))}),D(p,ai.EventType.MESSAGE,x=>{var z;if(!v){const W=x.data[0];Ue(!!W,16349);const q=W,H=(q==null?void 0:q.error)||((z=q[0])===null||z===void 0?void 0:z.error);if(H){se(Et,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let le=function(E){const I=nt[E];if(I!==void 0)return C_(I)}(oe),A=H.message;le===void 0&&(le=F.INTERNAL,A="Unknown error status: "+oe+" with message "+H.message),v=!0,P.r_(new ie(le,A)),p.close()}else se(Et,`RPC '${e}' stream ${s} received:`,W),P.i_(W)}}),D(c,Km.STAT_EVENT,x=>{x.stat===Tl.PROXY?se(Et,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Tl.NOPROXY&&se(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.n_()},0),P}}function Gc(){return typeof document<"u"?document:null}/**
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
 */function Ya(t){return new BA(t,!0)}/**
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
 */class q_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Gf="PersistentStream";class H_{constructor(e,n,r,s,i,o,c,l){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new q_(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new ie(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return se(Gf,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(se(Gf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UR extends H_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=WA(this.serializer,e),r=function(i){if(!("targetChange"in i))return we.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?mn(o.readTime):we.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=Dl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Sl(l)?{documents:GA(i,l)}:{query:QA(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=D_(i,o.resumeToken);const u=Cl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(we.min())>0){c.readTime=ga(i,o.snapshotVersion.toTimestamp());const u=Cl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=JA(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=Dl(this.serializer),n.removeTarget=e,this.F_(n)}}class $R extends H_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=KA(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=Dl(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zA(this.serializer,r))};this.F_(n)}}/**
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
 */class jR{}class BR extends jR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new ie(F.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,kl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(F.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(e,kl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(F.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class qR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Fn(n),this.ea=!1):se("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const zr="RemoteStore";class HR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(se(zr,"Restarting streams for network reachability change."),await async function(l){const u=Te(l);u.aa.add(4),await Xi(u),u.la.set("Unknown"),u.aa.delete(4),await Ja(u)}(this))})}),this.la=new qR(r,s)}}async function Ja(t){if(Yr(t))for(const e of t.ua)await e(!0)}async function Xi(t){for(const e of t.ua)await e(!1)}function W_(t,e){const n=Te(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),Fu(n)?Lu(n):$s(n).b_()&&Mu(n,e))}function Nu(t,e){const n=Te(t),r=$s(n);n._a.delete(e),r.b_()&&z_(n,e),n._a.size===0&&(r.b_()?r.v_():Yr(n)&&n.la.set("Unknown"))}function Mu(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).U_(e)}function z_(t,e){t.ha.Ke(e),$s(t).K_(e)}function Lu(t){t.ha=new FA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.la.ta()}function Fu(t){return Yr(t)&&!$s(t).w_()&&t._a.size>0}function Yr(t){return Te(t).aa.size===0}function K_(t){t.ha=void 0}async function WR(t){t.la.set("Online")}async function zR(t){t._a.forEach((e,n)=>{Mu(t,e)})}async function KR(t,e){K_(t),Fu(t)?(t.la.ia(e),Lu(t)):t.la.set("Unknown")}async function GR(t,e,n){if(t.la.set("Online"),e instanceof x_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s._a.delete(c),s.ha.removeTarget(c))}(t,e)}catch(r){se(zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _a(t,r)}else if(e instanceof jo?t.ha.Xe(e):e instanceof k_?t.ha.ot(e):t.ha.nt(e),!n.isEqual(we.min()))try{const r=await B_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.ha.It(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i._a.get(u);d&&i._a.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i._a.get(l);if(!d)return;i._a.set(l,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),z_(i,l);const p=new ir(d.target,l,u,d.sequenceNumber);Mu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){se(zr,"Failed to raise snapshot:",r),await _a(t,r)}}async function _a(t,e,n){if(!Us(e))throw e;t.aa.add(1),await Xi(t),t.la.set("Offline"),n||(n=()=>B_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se(zr,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Ja(t)})}function G_(t,e){return e().catch(n=>_a(t,n,e))}async function Xa(t){const e=Te(t),n=vr(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:wu;for(;QR(e);)try{const s=await kR(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,YR(e,s)}catch(s){await _a(e,s)}Q_(e)&&Y_(e)}function QR(t){return Yr(t)&&t.oa.length<10}function YR(t,e){t.oa.push(e);const n=vr(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Q_(t){return Yr(t)&&!vr(t).w_()&&t.oa.length>0}function Y_(t){vr(t).start()}async function JR(t){vr(t).H_()}async function XR(t){const e=vr(t);for(const n of t.oa)e.G_(n.mutations)}async function ZR(t,e,n){const r=t.oa.shift(),s=Pu.from(r,e,n);await G_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xa(t)}async function eS(t,e){e&&vr(t).W_&&await async function(r,s){if(function(o){return MA(o)&&o!==F.ABORTED}(s.code)){const i=r.oa.shift();vr(r).D_(),await G_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xa(r)}}(t,e),Q_(t)&&Y_(t)}async function Qf(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),se(zr,"RemoteStore received new credentials");const r=Yr(n);n.aa.add(3),await Xi(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Ja(n)}async function tS(t,e){const n=Te(t);e?(n.aa.delete(2),await Ja(n)):e||(n.aa.add(2),await Xi(n),n.la.set("Unknown"))}function $s(t){return t.Pa||(t.Pa=function(n,r,s){const i=Te(n);return i.Y_(),new UR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:WR.bind(null,t),Jo:zR.bind(null,t),Zo:KR.bind(null,t),Q_:GR.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),Fu(t)?Lu(t):t.la.set("Unknown")):(await t.Pa.stop(),K_(t))})),t.Pa}function vr(t){return t.Ta||(t.Ta=function(n,r,s){const i=Te(n);return i.Y_(),new $R(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:JR.bind(null,t),Zo:eS.bind(null,t),z_:XR.bind(null,t),j_:ZR.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Xa(t)):(await t.Ta.stop(),t.oa.length>0&&(se(zr,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class Uu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Uu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Us(t))return new ie(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=ci(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Yf{constructor(){this.Ia=new Ge(he.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):_e(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ks(e,n,ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class nS{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class rS{constructor(){this.queries=Jf(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=Te(n),i=s.queries;s.queries=Jf(),i.forEach((o,c)=>{for(const l of c.Ra)l.onError(r)})})(this,new ie(F.ABORTED,"Firestore shutting down"))}}function Jf(){return new Qr(t=>__(t),Wa)}async function ju(t,e){const n=Te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new nS,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=$u(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&qu(n)}async function Bu(t,e){const n=Te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sS(t,e){const n=Te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Ra)c.pa(s)&&(r=!0);o.Aa=s}}r&&qu(n)}function iS(t,e,n){const r=Te(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function qu(t){t.fa.forEach(e=>{e.next()})}var Nl,Xf;(Xf=Nl||(Nl={})).ya="default",Xf.Cache="cache";class Hu{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Nl.Cache}}/**
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
 */class J_{constructor(e){this.key=e}}class X_{constructor(e){this.key=e}}class oS{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=ke(),this.mutatedKeys=ke(),this.Ua=y_(e),this.Ka=new ws(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Yf,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),v=za(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;g&&v?g.data.isEqual(v.data)?P!==D&&(r.track({type:3,doc:v}),x=!0):this.ja(g,v)||(r.track({type:2,doc:v}),x=!0,(l&&this.Ua(v,l)>0||u&&this.Ua(v,u)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),x=!0):g&&!v&&(r.track({type:1,doc:g}),x=!0,(l||u)&&(c=!0)),x&&(v?(o=o.add(v),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ka:o,za:r,ys:c,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((d,p)=>function(v,P){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:x})}};return D(v)-D(P)}(d.type,p.type)||this.Ua(d.doc,p.doc)),this.Ha(r),s=s!=null&&s;const c=n&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,u=l!==this.Qa;return this.Qa=l,o.length!==0||u?{snapshot:new ks(this.query,e.Ka,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Yf,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=ke(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new X_(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new J_(r))}),n}Xa(e){this.qa=e.Ns,this.$a=ke();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return ks.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Wu="SyncEngine";class aS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cS{constructor(e){this.key=e,this.tu=!1}}class lS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Qr(c=>__(c),Wa),this.iu=new Map,this.su=new Set,this.ou=new Ge(he.comparator),this._u=new Map,this.au=new xu,this.uu={},this.cu=new Map,this.lu=Cs.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function uS(t,e,n=!0){const r=sy(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Z_(r,e,n,!0),s}async function hS(t,e){const n=sy(t);await Z_(n,e,!0,!1)}async function Z_(t,e,n,r){const s=await xR(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await dS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&W_(t.remoteStore,s),c}async function dS(t,e,n,r,s){t.Pu=(p,g,v)=>async function(D,x,z,W){let q=x.view.Ga(z);q.ys&&(q=await Hf(D.localStore,x.query,!1).then(({documents:A})=>x.view.Ga(A,q)));const H=W&&W.targetChanges.get(x.targetId),oe=W&&W.targetMismatches.get(x.targetId)!=null,le=x.view.applyChanges(q,D.isPrimaryClient,H,oe);return ep(D,x.targetId,le.Ya),le.snapshot}(t,p,g,v);const i=await Hf(t.localStore,e,!0),o=new oS(e,i.Ns),c=o.Ga(i.documents),l=Ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ep(t,n,u.Ya);const d=new aS(e,n,o);return t.ru.set(e,d),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),u.snapshot}async function fS(t,e,n){const r=Te(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!Wa(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ol(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nu(r.remoteStore,s.targetId),Ml(r,s.targetId)}).catch(Fs)):(Ml(r,s.targetId),await Ol(r.localStore,s.targetId,!0))}async function pS(t,e){const n=Te(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nu(n.remoteStore,r.targetId))}async function gS(t,e,n){const r=TS(t);try{const s=await function(o,c){const l=Te(o),u=ot.now(),d=c.reduce((v,P)=>v.add(P.key),ke());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=Un(),D=ke();return l.Cs.getEntries(v,d).next(x=>{P=x,P.forEach((z,W)=>{W.isValidDocument()||(D=D.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,P)).next(x=>{p=x;const z=[];for(const W of c){const q=xA(W,p.get(W.key).overlayedDocument);q!=null&&z.push(new Rr(W.key,q,l_(q.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,u,z,c)}).next(x=>{g=x;const z=x.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(v,x.batchId,z)})}).then(()=>({batchId:g.batchId,changes:E_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.uu[o.currentUser.toKey()];u||(u=new Ge(Pe)),u=u.insert(c,l),o.uu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Zi(r,s.changes),await Xa(r.remoteStore)}catch(s){const i=$u(s,"Failed to persist write");n.reject(i)}}async function ey(t,e){const n=Te(t);try{const r=await PR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?Ue(o.tu,14607):s.removedDocuments.size>0&&(Ue(o.tu,42227),o.tu=!1))}),await Zi(n,r,e)}catch(r){await Fs(r)}}function Zf(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const c=o.view.ga(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Te(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const g of p.Ra)g.ga(c)&&(u=!0)}),u&&qu(l)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mS(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new Ge(he.comparator);o=o.insert(i,At.newNoDocument(i,we.min()));const c=ke().add(i),l=new Qa(we.min(),new Map,new Ge(Pe),o,c);await ey(r,l),r.ou=r.ou.remove(i),r._u.delete(e),zu(r)}else await Ol(r.localStore,e,!1).then(()=>Ml(r,e,n)).catch(Fs)}async function _S(t,e){const n=Te(t),r=e.batch.batchId;try{const s=await SR(n.localStore,e);ny(n,r,null),ty(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zi(n,s)}catch(s){await Fs(s)}}async function yS(t,e,n){const r=Te(t);try{const s=await function(o,c){const l=Te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ue(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);ny(r,e,n),ty(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zi(r,s)}catch(s){await Fs(s)}}function ty(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function ny(t,e,n){const r=Te(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function Ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||ry(t,r)})}function ry(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(Nu(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),zu(t))}function ep(t,e,n){for(const r of n)r instanceof J_?(t.au.addReference(r.key,e),vS(t,r)):r instanceof X_?(se(Wu,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||ry(t,r.key)):_e(19791,{Iu:r})}function vS(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(se(Wu,"New document in limbo: "+n),t.su.add(r),zu(t))}function zu(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new he(We.fromString(e)),r=t.lu.next();t._u.set(r,new cS(n)),t.ou=t.ou.insert(n,r),W_(t.remoteStore,new ir(gn(Ha(n.path)),r,"TargetPurposeLimboResolution",ja.le))}}async function Zi(t,e,n){const r=Te(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((c,l)=>{o.push(r.Pu(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ou.Ps(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(l,u){const d=Te(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,g=>U.forEach(g.ls,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>U.forEach(g.hs,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Us(p))throw p;se(Vu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=d.Ss.get(g),P=v.snapshotVersion,D=v.withLastLimboFreeSnapshotVersion(P);d.Ss=d.Ss.insert(g,D)}}}(r.localStore,i))}async function ES(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){se(Wu,"User change. New user:",e.toKey());const r=await j_(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(c=>{c.forEach(l=>{l.reject(new ie(F.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zi(n,r.Ms)}}function wS(t,e){const n=Te(t),r=n._u.get(e);if(r&&r.tu)return ke().add(r.key);{let s=ke();const i=n.iu.get(e);if(!i)return s;for(const o of i){const c=n.ru.get(o);s=s.unionWith(c.view.Wa)}return s}}function sy(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ey.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mS.bind(null,e),e.nu.Q_=sS.bind(null,e.eventManager),e.nu.Tu=iS.bind(null,e.eventManager),e}function TS(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_S.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yS.bind(null,e),e}class ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return RR(this.persistence,new IR,e.initialUser,this.serializer)}Ru(e){return new $_(Du.Ei,this.serializer)}Au(e){return new OR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ya.provider={build:()=>new ya};class IS extends ya{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Ue(this.persistence.referenceDelegate instanceof ma,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cR(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new $_(r=>ma.Ei(r,n),this.serializer)}}class Ll{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ES.bind(null,this.syncEngine),await tS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rS}()}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=function(i){return new FR(i)}(e.databaseInfo);return function(i,o,c,l){return new BR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new HR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Zf(this.syncEngine,n,0),function(){return Kf.C()?new Kf:new VR}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new lS(s,i,o,c,l,u);return d&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Te(s);se(zr,"RemoteStore shutting down."),i.aa.add(5),await Xi(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ll.provider={build:()=>new Ll};/**
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
 */class Ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Er="FirestoreClient";class bS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Zm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{se(Er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(se(Er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$u(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qc(t,e){t.asyncQueue.verifyOperationInProgress(),se(Er,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await j_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AS(t);se(Er,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qf(e.remoteStore,s)),t._onlineComponents=e}async function AS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se(Er,"Using user provided OfflineComponentProvider");try{await Qc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;bs("Error using user provided cache. Falling back to memory cache: "+n),await Qc(t,new ya)}}else se(Er,"Using default OfflineComponentProvider"),await Qc(t,new IS(void 0));return t._offlineComponents}async function iy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se(Er,"Using user provided OnlineComponentProvider"),await tp(t,t._uninitializedComponentsProvider._online)):(se(Er,"Using default OnlineComponentProvider"),await tp(t,new Ll))),t._onlineComponents}function RS(t){return iy(t).then(e=>e.syncEngine)}async function va(t){const e=await iy(t),n=e.eventManager;return n.onListen=uS.bind(null,e.syncEngine),n.onUnlisten=fS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pS.bind(null,e.syncEngine),n}function SS(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Ku({next:g=>{d.yu(),o.enqueueAndForget(()=>Bu(i,p));const v=g.docs.has(c);!v&&g.fromCache?u.reject(new ie(F.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?u.reject(new ie(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Hu(Ha(c.path),d,{includeMetadataChanges:!0,Fa:!0});return ju(i,p)}(await va(t),t.asyncQueue,e,n,r)),r.promise}function PS(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Ku({next:g=>{d.yu(),o.enqueueAndForget(()=>Bu(i,p)),g.fromCache&&l.source==="server"?u.reject(new ie(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Hu(c,d,{includeMetadataChanges:!0,Fa:!0});return ju(i,p)}(await va(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function oy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const np=new Map;/**
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
 */function ay(t,e,n){if(!n)throw new ie(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CS(t,e,n,r){if(e===!0&&r===!0)throw new ie(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(!he.isDocumentKey(t))throw new ie(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sp(t){if(he.isDocumentKey(t))throw new ie(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Za(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e(12329,{type:typeof t})}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Za(t);throw new ie(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function kS(t,e){if(e<=0)throw new ie(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const cy="firestore.googleapis.com",ip=!0;class op{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cy,this.ssl=ip}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ip;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=U_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oR)throw new ie(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new op({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new op(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Mb;switch(r.type){case"firstParty":return new $b(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=np.get(n);r&&(se("ComponentProvider","Removing Datastore"),np.delete(n),r.terminate())}(this),Promise.resolve()}}function xS(t,e,n,r={}){var s;const i=(t=Ft(t,ec))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==cy&&i.host!==c&&bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!fr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=wt.MOCK_USER;else{u=sm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ie(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new wt(p)}t._authCredentials=new Lb(new Jm(u,d))}}/**
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
 */class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class dr extends Sr{constructor(e,n,r){super(e,n,Ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new he(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function Zn(t,e,...n){if(t=tt(t),ay("collection","path",e),t instanceof ec){const r=We.fromString(e,...n);return sp(r),new dr(t,null,r)}{if(!(t instanceof Rt||t instanceof dr))throw new ie(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return sp(r),new dr(t.firestore,null,r)}}function Vt(t,e,...n){if(t=tt(t),arguments.length===1&&(e=Zm.newId()),ay("doc","path",e),t instanceof ec){const r=We.fromString(e,...n);return rp(r),new Rt(t,null,new he(r))}{if(!(t instanceof Rt||t instanceof dr))throw new ie(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return rp(r),new Rt(t.firestore,t instanceof dr?t.converter:null,new he(r))}}/**
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
 */const ap="AsyncQueue";class cp{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new q_(this,"async_queue_retry"),this.ju=()=>{const r=Gc();r&&se(ap,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Nn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Us(e))throw e;se(ap,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Fn("INTERNAL UNHANDLED ERROR: ",lp(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=Uu.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&_e(47125,{ec:lp(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function lp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function up(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $n extends ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cp(e),this._firestoreClient=void 0,await e}}}function DS(t,e){const n=typeof t=="object"?t:uu(),r=typeof t=="string"?t:ca,s=La(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tm("firestore");i&&xS(s,...i)}return s}function tc(t){if(t._terminated)throw new ie(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||OS(t),t._firestoreClient}function OS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new tA(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,oy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new bS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xs(gt.fromBase64String(e))}catch(n){throw new ie(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xs(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rc{constructor(e){this._methodName=e}}/**
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
 */class Gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */class Qu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const VS=/^__.*__$/;class NS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class ly{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{oc:t})}}class sc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new sc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Ea(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(uy(this.oc)&&VS.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class MS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ya(e)}dc(e,n,r,s=!1){return new sc({oc:e,methodName:n,Ec:r,path:pt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ic(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new MS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hy(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);Ju("Data must be an object, but it was:",o,r);const c=dy(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Fl(e,p,n);if(!o.contains(g))throw new ie(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);py(d,g)||d.push(g)}l=new Ht(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new NS(new Mt(c),l,u)}class oc extends rc{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}function LS(t,e,n){return new sc({oc:3,Ec:e.settings.Ec,methodName:t._methodName,cc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Yu extends rc{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=LS(this,e,!0),r=this.Ac.map(i=>js(i,n)),s=new Ps(r);return new SA(e.path,s)}isEqual(e){return e instanceof Yu&&fr(this.Ac,e.Ac)}}function FS(t,e,n,r){const s=t.dc(1,e,n);Ju("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();Ar(r,(l,u)=>{const d=Xu(e,l,n);u=tt(u);const p=s.hc(d);if(u instanceof oc)i.push(d);else{const g=js(u,p);g!=null&&(i.push(d),o.set(d,g))}});const c=new Ht(i);return new ly(o,c,s.fieldTransforms)}function US(t,e,n,r,s,i){const o=t.dc(1,e,n),c=[Fl(e,r,n)],l=[s];if(i.length%2!=0)throw new ie(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Fl(e,i[g])),l.push(i[g+1]);const u=[],d=Mt.empty();for(let g=c.length-1;g>=0;--g)if(!py(u,c[g])){const v=c[g];let P=l[g];P=tt(P);const D=o.hc(v);if(P instanceof oc)u.push(v);else{const x=js(P,D);x!=null&&(u.push(v),d.set(v,x))}}const p=new Ht(u);return new ly(d,p,o.fieldTransforms)}function $S(t,e,n,r=!1){return js(n,t.dc(r?4:3,e))}function js(t,e){if(fy(t=tt(t)))return Ju("Unsupported field value:",e,t),dy(t,e);if(t instanceof rc)return function(r,s){if(!uy(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=js(c,s.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:ga(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ga(s.serializer,i)}}if(r instanceof Gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xs)return{bytesValue:D_(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ku(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qu)return function(o,c){return{mapValue:{fields:{[a_]:{stringValue:c_},[la]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Tc("VectorValues must only contain numeric values.");return Ru(c.serializer,u)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${Za(r)}`)}(t,e)}function dy(t,e){const n={};return t_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,(r,s)=>{const i=js(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Gu||t instanceof xs||t instanceof Rt||t instanceof rc||t instanceof Qu)}function Ju(t,e,n){if(!fy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Za(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Fl(t,e,n){if((e=tt(e))instanceof nc)return e._internalPath;if(typeof e=="string")return Xu(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function Xu(t,e,n){if(e.search(jS)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie(F.INVALID_ARGUMENT,c+t+l)}function py(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class gy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BS extends gy{data(){return super.data()}}function Zu(t,e){return typeof e=="string"?Xu(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function my(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eh{}class _y extends eh{}function Ro(t,e,...n){let r=[];e instanceof eh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof th).length,c=i.filter(l=>l instanceof ac).length;if(o>1||o>0&&c>0)throw new ie(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ac extends _y{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ac(e,n,r)}_apply(e){const n=this._parse(e);return yy(e._query,n),new Sr(e.firestore,e.converter,Pl(e._query,n))}_parse(e){const n=ic(e.firestore);return function(i,o,c,l,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ie(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){dp(p,d);const P=[];for(const D of p)P.push(hp(l,i,D));g={arrayValue:{values:P}}}else g=hp(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||dp(p,d),g=$S(c,o,p,d==="in"||d==="not-in");return st.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function So(t,e,n){const r=e,s=Zu("where",t);return ac._create(s,r,n)}class th extends eh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new th(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)yy(o,l),o=Pl(o,l)}(e._query,n),new Sr(e.firestore,e.converter,Pl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nh extends _y{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new nh(e,n,r)}_apply(e){return new Sr(e.firestore,e.converter,da(e._query,this._limit,this._limitType))}}function Yc(t){return kS("limit",t),nh._create("limit",t,"F")}function hp(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new ie(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!m_(e)&&n.indexOf("/")!==-1)throw new ie(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!he.isDocumentKey(r))throw new ie(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Af(t,new he(r))}if(n instanceof Rt)return Af(t,n._key);throw new ie(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Za(n)}.`)}function dp(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qS{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[la].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new Qu(i)}convertGeoPoint(e){return new Gu(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=mr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Ue(F_(r),9688,{name:e});const s=new Vi(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vy(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ey extends gy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bo extends Ey{data(e={}){return super.data(e)}}class wy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ui(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bo(this._firestore,this._userDataWriter,r.key,r,new ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:HS(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:t})}}/**
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
 */function or(t){t=Ft(t,Rt);const e=Ft(t.firestore,$n);return SS(tc(e),t._key).then(n=>by(e,t,n))}class rh extends qS{constructor(e){super(),this.firestore=e}convertBytes(e){return new xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function us(t){t=Ft(t,Sr);const e=Ft(t.firestore,$n),n=tc(e),r=new rh(e);return my(t._query),PS(n,t._query).then(s=>new wy(e,r,t,s))}function fp(t,e,n){t=Ft(t,Rt);const r=Ft(t.firestore,$n),s=vy(t.converter,e);return cc(r,[hy(ic(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Jt.none())])}function Ul(t,e,n,...r){t=Ft(t,Rt);const s=Ft(t.firestore,$n),i=ic(s);let o;return o=typeof(e=tt(e))=="string"||e instanceof nc?US(i,"updateDoc",t._key,e,n,r):FS(i,"updateDoc",t._key,e),cc(s,[o.toMutation(t._key,Jt.exists(!0))])}function WS(t){return cc(Ft(t.firestore,$n),[new Su(t._key,Jt.none())])}function Ty(t,e){const n=Ft(t.firestore,$n),r=Vt(t),s=vy(t.converter,e);return cc(n,[hy(ic(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function Iy(t,...e){var n,r,s;t=tt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||up(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(up(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,d;if(t instanceof Rt)u=Ft(t.firestore,$n),d=Ha(t._key.path),l={next:p=>{e[o]&&e[o](by(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Ft(t,Sr);u=Ft(p.firestore,$n),d=p._query;const g=new rh(u);l={next:v=>{e[o]&&e[o](new wy(u,g,p,v))},error:e[o+1],complete:e[o+2]},my(t._query)}return function(g,v,P,D){const x=new Ku(D),z=new Hu(v,x,P);return g.asyncQueue.enqueueAndForget(async()=>ju(await va(g),z)),()=>{x.yu(),g.asyncQueue.enqueueAndForget(async()=>Bu(await va(g),z))}}(tc(u),d,c,l)}function cc(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>gS(await RS(r),s,i)),i.promise}(tc(t),e)}function by(t,e,n){const r=n.docs.get(e._key),s=new rh(t);return new Ey(t,s,e._key,r,new ui(n.hasPendingWrites,n.fromCache),e.converter)}function zS(...t){return new Yu("arrayUnion",t)}(function(e,n=!0){(function(s){Ls=s})(Gr),Br(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new $n(new Fb(r.getProvider("auth-internal")),new jb(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),dn(ff,pf,e),dn(ff,pf,"esm2017")})();var KS="firebase",GS="11.6.1";/**
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
 */dn(KS,GS,"app");/**
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
 */const Ay="firebasestorage.googleapis.com",QS="storageBucket",YS=2*60*1e3,JS=10*60*1e3;/**
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
 */class Tn extends En{constructor(e,n,r=0){super(Jc(e),`Firebase Storage: ${n} (${Jc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vn||(vn={}));function Jc(t){return"storage/"+t}function XS(){const t="An unknown error occurred, please check the error payload for server response.";return new Tn(vn.UNKNOWN,t)}function ZS(){return new Tn(vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eP(){return new Tn(vn.CANCELED,"User canceled the upload/download.")}function tP(t){return new Tn(vn.INVALID_URL,"Invalid URL '"+t+"'.")}function nP(t){return new Tn(vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pp(t){return new Tn(vn.INVALID_ARGUMENT,t)}function Ry(){return new Tn(vn.APP_DELETED,"The Firebase app was deleted.")}function rP(t){return new Tn(vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(r.path==="")return r;throw nP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},D=n===Ay?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",z=new RegExp(`^https?://${D}/${s}/${x}`,"i"),q=[{regex:c,indices:l,postModify:i},{regex:v,indices:P,postModify:u},{regex:z,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<q.length;H++){const oe=q[H],le=oe.regex.exec(e);if(le){const A=le[oe.indices.bucket];let y=le[oe.indices.path];y||(y=""),r=new tn(A,y),oe.postModify(r);break}}if(r==null)throw tP(e);return r}}class sP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...x){u||(u=!0,e.apply(null,x))}function p(x){s=setTimeout(()=>{s=null,t(v,l())},x)}function g(){i&&clearTimeout(i)}function v(x,...z){if(u){g();return}if(x){g(),d.call(null,x,...z);return}if(l()||o){g(),d.call(null,x,...z);return}r<64&&(r*=2);let q;c===1?(c=2,q=0):q=(r+Math.random())*1e3,p(q)}let P=!1;function D(x){P||(P=!0,g(),!u&&(s!==null?(x||(c=2),clearTimeout(s),p(0)):x||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function oP(t){t(!1)}/**
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
 */function aP(t){return t!==void 0}function gp(t,e,n,r){if(r<e)throw pp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pp(`Invalid value for '${t}'. Expected ${n} or less.`)}function cP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var wa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wa||(wa={}));/**
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
 */function lP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class uP{constructor(e,n,r,s,i,o,c,l,u,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,P)=>{this.resolve_=v,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Po(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===wa.NO_ERROR,l=i.getStatus();if(!c||lP(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===wa.ABORT;r(!1,new Po(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Po(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());aP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=XS();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ry():eP();o(l)}else{const l=ZS();o(l)}};this.canceled_?n(!1,new Po(!1,null,!0)):this.backoffId_=iP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Po{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gP(t,e,n,r,s,i,o=!0){const c=cP(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return fP(u,e),hP(u,n),dP(u,i),pP(u,r),new uP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function mP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _P(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ta{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ta(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _P(this._location.path)}get storage(){return this._service}get parent(){const e=mP(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new Ta(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rP(e)}}function mp(t,e){const n=e==null?void 0:e[QS];return n==null?null:tn.makeFromBucketSpec(n,t)}function yP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:sm(s,t.app.options.projectId))}class vP{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ay,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YS,this._maxUploadRetryTime=JS,this._requests=new Set,s!=null?this._bucket=tn.makeFromBucketSpec(s,this._host):this._bucket=mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ta(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new sP(Ry());{const o=gP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _p="@firebase/storage",yp="0.13.7";/**
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
 */const Sy="storage";function EP(t=uu(),e){t=tt(t);const r=La(t,Sy).getImmediate({identifier:e}),s=tm("storage");return s&&wP(r,...s),r}function wP(t,e,n,r={}){yP(t,e,n,r)}function TP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new vP(n,r,s,e,Gr)}function IP(){Br(new pr(Sy,TP,"PUBLIC").setMultipleInstances(!0)),dn(_p,yp,""),dn(_p,yp,"esm2017")}IP();const bP={apiKey:"AIzaSyCZReJwEBh5D_NDiDlK2tk5Yg2N0hVTeww",authDomain:"js-2-45ee7.firebaseapp.com",projectId:"js-2-45ee7",storageBucket:"js-2-45ee7.firebasestorage.app",messagingSenderId:"1015618527112",appId:"1:1015618527112:web:5ab74418f08e7b0588a43d",measurementId:"G-EQSKLN8BEJ"},sh=am(bP),Gn=Vb(sh),Ye=DS(sh);EP(sh);const Jr=Ns("auth",{state:()=>({user:null,userProfile:null,loading:!1,error:null}),getters:{isAuthenticated:t=>!!t.user,isVendor:t=>{var e;return((e=t.userProfile)==null?void 0:e.role)==="vendor"},isAdmin:t=>{var e;return((e=t.userProfile)==null?void 0:e.role)==="admin"},isCustomer:t=>{var e;return((e=t.userProfile)==null?void 0:e.role)==="customer"},currentUserId:t=>{var e;return(e=t.user)==null?void 0:e.uid}},actions:{async registerUser({email:t,password:e,name:n,roles:r}){this.loading=!0,this.error=null;try{const s=await Zd(Gn,t,e);await tf(s.user,{displayName:n});const i={name:n,email:t,roles:r,createdAt:new Date().toISOString()};return await fp(Vt(Ye,"userProfiles",s.user.uid),i),this.user=s.user,this.userProfile=i,s.user}catch(s){throw this.error=s.message,s}finally{this.loading=!1}},async registerVendor({name:t,contact:e,location:n,password:r}){this.loading=!0,this.error=null;try{const s=await Zd(Gn,e,r);await tf(s.user,{displayName:t});const i={name:t,contact:e,location:n,products:[]};return await fp(Vt(Ye,"vendors",s.user.uid),i),this.user=s.user,this.userProfile=i,s.user}catch(s){if(console.error("Error during vendor registration:",s.message),s.code==="permission-denied"||s.code==="unavailable"){console.warn("Cleaning up partially created account...");const i=Gn.currentUser;i&&await i.delete()}throw this.error=s.message,s}finally{this.loading=!1}},async loginUser({email:t,password:e}){this.loading=!0,this.error=null;try{const n=await ef(Gn,t,e);return this.user=n.user,await this.fetchUserProfile(n.user.uid),n.user}catch(n){throw this.error=n.message,n}finally{this.loading=!1}},async loginVendor({email:t,password:e}){this.loading=!0,this.error=null;try{const n=await ef(Gn,t,e);this.user=n.user;const r=await or(Vt(Ye,"vendors",n.user.uid));if(!r.exists())throw new Error("This account is not registered as a vendor.");return this.userProfile=r.data(),n.user}catch(n){throw this.error=n.message,n}finally{this.loading=!1}},async logoutUser(){this.loading=!0;try{await I0(Gn),this.user=null,this.userProfile=null}catch(t){throw console.error("Error logging out:",t),this.error=t.message,t}finally{this.loading=!1}},async fetchUserProfile(t){try{const e=await or(Vt(Ye,"userProfiles",t));e.exists()?this.userProfile=e.data():console.warn("User profile not found")}catch(e){console.error("Error fetching user profile:",e),this.error=e.message}},async resetPassword(t){this.loading=!0,this.error=null;try{await y0(Gn,t)}catch(e){throw this.error=e.message,e}finally{this.loading=!1}},initAuthListener(){T0(Gn,async t=>{if(this.user=t,t)try{const e=await or(Vt(Ye,"vendors",t.uid));e.exists()?this.userProfile=e.data():(console.warn("Vendor profile not found."),this.userProfile=null)}catch(e){console.error("Error fetching vendor profile:",e),this.error=e.message}else this.userProfile=null})}}}),ih=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},AP={class:"app-header bg-success text-white py-3 fixed-top"},RP={class:"container d-flex justify-content-between align-items-center"},SP={class:"h3 mb-0"},PP={class:"nav"},CP={class:"nav-item"},kP={class:"nav-item"},xP={key:0,class:"nav-item"},DP={class:"nav-link text-white"},OP={__name:"AppHeader",setup(t){const e=Jr(),n=rt(()=>e.isAuthenticated),r=rt(()=>{var s;return((s=e.user)==null?void 0:s.displayName)||"User"});return(s,i)=>{const o=Vs("router-link");return ue(),ge("header",AP,[k("div",RP,[k("h1",SP,[Fe(o,{to:"/",class:"text-white text-decoration-none"},{default:Bt(()=>i[0]||(i[0]=[Ot("Farmers Market")])),_:1})]),k("nav",null,[k("ul",PP,[k("li",CP,[Fe(o,{to:"/vendors",class:"nav-link text-white"},{default:Bt(()=>i[1]||(i[1]=[Ot("Vendors")])),_:1})]),k("li",kP,[Fe(o,{to:"/account",class:"nav-link text-white"},{default:Bt(()=>i[2]||(i[2]=[Ot("My Account")])),_:1})]),n.value?(ue(),ge("li",xP,[k("span",DP,"Logged in as "+Oe(r.value),1)])):Pn("",!0)])])])])}}},VP=ih(OP,[["__scopeId","data-v-376f1a51"]]),NP={},MP={class:"app-footer bg-gray-800 py-4"},LP={class:"container mx-auto text-center"};function FP(t,e){return ue(),ge("footer",MP,[k("div",LP,[k("p",null,"© "+Oe(new Date().getFullYear())+" Farmers Market. All rights reserved.",1)])])}const UP=ih(NP,[["render",FP],["__scopeId","data-v-9ba7da80"]]),$P={class:"default-layout bg-eggshell"},jP={class:"container mx-auto py-6"},BP={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=Vs("router-view");return ue(),ge("div",$P,[Fe(VP),k("main",jP,[Fe(r)]),Fe(UP)])}}},qP={class:"flex justify-between items-center bg-green-600 text-white py-4 px-6"},HP={class:"text-xl font-bold"},WP={class:"flex space-x-6"},zP={__name:"App",setup(t){return(e,n)=>{const r=Vs("router-link");return ue(),Oa(BP,null,{header:Bt(()=>[k("div",qP,[k("h1",HP,[Fe(r,{to:"/",class:"text-white hover:underline"},{default:Bt(()=>n[0]||(n[0]=[Ot("Farmers Market")])),_:1})]),k("div",WP,[Fe(r,{to:"/vendors",class:"hover:underline"},{default:Bt(()=>n[1]||(n[1]=[Ot(" Vendors ")])),_:1}),Fe(r,{to:"/account",class:"hover:underline"},{default:Bt(()=>n[2]||(n[2]=[Ot(" My Account ")])),_:1})])])]),_:1})}}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function Py(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function KP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Py(t.default)}const Me=Object.assign;function Xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const Ii=()=>{},on=Array.isArray,Cy=/#/g,GP=/&/g,QP=/\//g,YP=/=/g,JP=/\?/g,ky=/\+/g,XP=/%5B/g,ZP=/%5D/g,xy=/%5E/g,eC=/%60/g,Dy=/%7B/g,tC=/%7C/g,Oy=/%7D/g,nC=/%20/g;function oh(t){return encodeURI(""+t).replace(tC,"|").replace(XP,"[").replace(ZP,"]")}function rC(t){return oh(t).replace(Dy,"{").replace(Oy,"}").replace(xy,"^")}function $l(t){return oh(t).replace(ky,"%2B").replace(nC,"+").replace(Cy,"%23").replace(GP,"%26").replace(eC,"`").replace(Dy,"{").replace(Oy,"}").replace(xy,"^")}function sC(t){return $l(t).replace(YP,"%3D")}function iC(t){return oh(t).replace(Cy,"%23").replace(JP,"%3F")}function oC(t){return t==null?"":iC(t).replace(QP,"%2F")}function Li(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const aC=/\/$/,cC=t=>t.replace(aC,"");function Zc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=dC(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Li(o)}}function lC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(e.matched[r],n.matched[s])&&Vy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hC(t[n],e[n]))return!1;return!0}function hC(t,e){return on(t)?Ep(t,e):on(e)?Ep(e,t):t===e}function Ep(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var bi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bi||(bi={}));function fC(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cC(t)}const pC=/^[^#]+#/;function gC(t,e){return t.replace(pC,"#")+e}function mC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const lc=()=>({left:window.scrollX,top:window.scrollY});function _C(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wp(t,e){return(history.state?history.state.position-e:-1)+t}const jl=new Map;function yC(t,e){jl.set(t,e)}function vC(t){const e=jl.get(t);return jl.delete(t),e}let EC=()=>location.protocol+"//"+location.host;function Ny(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),vp(l,"")}return vp(n,t)+r+s}function wC(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const v=Ny(t,location),P=n.value,D=e.value;let x=0;if(g){if(n.value=v,e.value=g,o&&o===P){o=null;return}x=D?g.position-D.position:0}else r(v);s.forEach(z=>{z(n.value,P,{delta:x,type:Fi.pop,direction:x?x>0?bi.forward:bi.back:bi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const v=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(v),v}function d(){const{history:g}=window;g.state&&g.replaceState(Me({},g.state,{scroll:lc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Tp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?lc():null}}function TC(t){const{history:e,location:n}=window,r={value:Ny(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:EC()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(v){console.error(v),n[d?"replace":"assign"](g)}}function o(l,u){const d=Me({},e.state,Tp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=Me({},s.value,e.state,{forward:l,scroll:lc()});i(d.current,d,!0);const p=Me({},Tp(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function IC(t){t=fC(t);const e=TC(t),n=wC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Me({location:"",base:t,go:r,createHref:gC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function bC(t){return typeof t=="string"||t&&typeof t=="object"}function My(t){return typeof t=="string"||typeof t=="symbol"}const Ly=Symbol("");var Ip;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ip||(Ip={}));function Os(t,e){return Me(new Error,{type:t,[Ly]:!0},e)}function Rn(t,e){return t instanceof Error&&Ly in t&&(e==null||!!(t.type&e))}const bp="[^/]+?",AC={sensitive:!1,strict:!1,start:!0,end:!0},RC=/[.+*?^${}()[\]/\\]/g;function SC(t,e){const n=Me({},AC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(RC,"\\$&"),v+=40;else if(g.type===1){const{value:P,repeatable:D,optional:x,regexp:z}=g;i.push({name:P,repeatable:D,optional:x});const W=z||bp;if(W!==bp){v+=10;try{new RegExp(`(${W})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${P}" (${W}): `+H.message)}}let q=D?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;p||(q=x&&u.length<2?`(?:/${q})`:"/"+q),x&&(q+="?"),s+=q,v+=20,x&&(v+=-8),D&&(v+=-20),W===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const v=d[g]||"",P=i[g-1];p[P.name]=v&&P.repeatable?v.split("/"):v}return p}function l(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of g)if(v.type===0)d+=v.value;else if(v.type===1){const{value:P,repeatable:D,optional:x}=v,z=P in u?u[P]:"";if(on(z)&&!D)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const W=on(z)?z.join("/"):z;if(!W)if(x)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=W}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function PC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=PC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ap(r))return 1;if(Ap(s))return-1}return s.length-r.length}function Ap(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CC={type:0,value:""},kC=/[a-zA-Z0-9_]/;function xC(t){if(!t)return[[]];if(t==="/")return[[CC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:kC.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function DC(t,e,n){const r=SC(xC(t.path),n),s=Me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function OC(t,e){const n=[],r=new Map;e=Cp({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,v){const P=!v,D=Sp(p);D.aliasOf=v&&v.record;const x=Cp(e,p),z=[D];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of H)z.push(Sp(Me({},D,{components:v?v.record.components:D.components,path:oe,aliasOf:v?v.record:D})))}let W,q;for(const H of z){const{path:oe}=H;if(g&&oe[0]!=="/"){const le=g.record.path,A=le[le.length-1]==="/"?"":"/";H.path=g.record.path+(oe&&A+oe)}if(W=DC(H,g,x),v?v.alias.push(W):(q=q||W,q!==W&&q.alias.push(W),P&&p.name&&!Pp(W)&&o(p.name)),Uy(W)&&l(W),D.children){const le=D.children;for(let A=0;A<le.length;A++)i(le[A],W,v&&v.children[A])}v=v||W}return q?()=>{o(q)}:Ii}function o(p){if(My(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=MC(p,n);n.splice(g,0,p),p.record.name&&!Pp(p)&&r.set(p.record.name,p)}function u(p,g){let v,P={},D,x;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Os(1,{location:p});x=v.record.name,P=Me(Rp(g.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Rp(p.params,v.keys.map(q=>q.name))),D=v.stringify(P)}else if(p.path!=null)D=p.path,v=n.find(q=>q.re.test(D)),v&&(P=v.parse(D),x=v.record.name);else{if(v=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!v)throw Os(1,{location:p,currentLocation:g});x=v.record.name,P=Me({},g.params,p.params),D=v.stringify(P)}const z=[];let W=v;for(;W;)z.unshift(W.record),W=W.parent;return{name:x,path:D,params:P,matched:z,meta:NC(z)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Rp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:VC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function VC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NC(t){return t.reduce((e,n)=>Me(e,n.meta),{})}function Cp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function MC(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fy(t,e[i])<0?r=i:n=i+1}const s=LC(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function LC(t){let e=t;for(;e=e.parent;)if(Uy(e)&&Fy(t,e)===0)return e}function Uy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function FC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ky," "),o=i.indexOf("="),c=Li(o<0?i:i.slice(0,o)),l=o<0?null:Li(i.slice(o+1));if(c in e){let u=e[c];on(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function kp(t){let e="";for(let n in t){const r=t[n];if(n=sC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&$l(i)):[r&&$l(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function UC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $C=Symbol(""),xp=Symbol(""),uc=Symbol(""),ah=Symbol(""),Bl=Symbol("");function ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Os(4,{from:n,to:e})):g instanceof Error?l(g):bC(g)?l(Os(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function el(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Py(l)){const d=(l.__vccOpts||l)[e];d&&i.push(er(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=KP(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const v=(p.__vccOpts||p)[e];return v&&er(v,n,r,o,c,s)()}))}}return i}function Dp(t){const e=Yt(uc),n=Yt(ah),r=rt(()=>{const l=On(t.to);return e.resolve(l)}),s=rt(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ds.bind(null,d));if(g>-1)return g;const v=Op(l[u-2]);return u>1&&Op(d)===v&&p[p.length-1].path!==v?p.findIndex(Ds.bind(null,l[u-2])):g}),i=rt(()=>s.value>-1&&WC(n.params,r.value.params)),o=rt(()=>s.value>-1&&s.value===n.matched.length-1&&Vy(n.params,r.value.params));function c(l={}){if(HC(l)){const u=e[On(t.replace)?"replace":"push"](On(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:rt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function jC(t){return t.length===1?t[0]:t}const BC=yg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Dp,setup(t,{slots:e}){const n=Ui(Dp(t)),{options:r}=Yt(uc),s=rt(()=>({[Vp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&jC(e.default(n));return t.custom?i:Wg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qC=BC;function HC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Op(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vp=(t,e,n)=>t??e??n,zC=yg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(Bl),s=rt(()=>t.route||r.value),i=Yt(xp,0),o=rt(()=>{let u=On(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=rt(()=>s.value.matched[o.value]);ko(xp,rt(()=>o.value+1)),ko($C,c),ko(Bl,s);const l=Je();return _s(()=>[l.value,c.value,t.name],([u,d,p],[g,v,P])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Ds(d,v)||!g)&&(d.enterCallbacks[p]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return Np(n.default,{Component:g,route:u});const v=p.props[d],P=v?v===!0?u.params:typeof v=="function"?v(u):v:null,x=Wg(g,Me({},P,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Np(n.default,{Component:x,route:u})||x}}});function Np(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KC=zC;function GC(t){const e=OC(t.routes,t),n=t.parseQuery||FC,r=t.stringifyQuery||kp,s=t.history,i=ri(),o=ri(),c=ri(),l=qv(Qn);let u=Qn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xc.bind(null,V=>""+V),p=Xc.bind(null,oC),g=Xc.bind(null,Li);function v(V,te){let Y,Z;return My(V)?(Y=e.getRecordMatcher(V),Z=te):Z=V,e.addRoute(Z,Y)}function P(V){const te=e.getRecordMatcher(V);te&&e.removeRoute(te)}function D(){return e.getRoutes().map(V=>V.record)}function x(V){return!!e.getRecordMatcher(V)}function z(V,te){if(te=Me({},te||l.value),typeof V=="string"){const S=Zc(n,V,te.path),M=e.resolve({path:S.path},te),$=s.createHref(S.fullPath);return Me(S,M,{params:g(M.params),hash:Li(S.hash),redirectedFrom:void 0,href:$})}let Y;if(V.path!=null)Y=Me({},V,{path:Zc(n,V.path,te.path).path});else{const S=Me({},V.params);for(const M in S)S[M]==null&&delete S[M];Y=Me({},V,{params:p(S)}),te.params=p(te.params)}const Z=e.resolve(Y,te),Re=V.hash||"";Z.params=d(g(Z.params));const w=lC(r,Me({},V,{hash:rC(Re),path:Z.path})),T=s.createHref(w);return Me({fullPath:w,hash:Re,query:r===kp?UC(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:T})}function W(V){return typeof V=="string"?Zc(n,V,l.value.path):Me({},V)}function q(V,te){if(u!==V)return Os(8,{from:te,to:V})}function H(V){return A(V)}function oe(V){return H(Me(W(V),{replace:!0}))}function le(V){const te=V.matched[V.matched.length-1];if(te&&te.redirect){const{redirect:Y}=te;let Z=typeof Y=="function"?Y(V):Y;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=W(Z):{path:Z},Z.params={}),Me({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function A(V,te){const Y=u=z(V),Z=l.value,Re=V.state,w=V.force,T=V.replace===!0,S=le(Y);if(S)return A(Me(W(S),{state:typeof S=="object"?Me({},Re,S.state):Re,force:w,replace:T}),te||Y);const M=Y;M.redirectedFrom=te;let $;return!w&&uC(r,Z,Y)&&($=Os(16,{to:M,from:Z}),Se(Z,Z,!0,!1)),($?Promise.resolve($):I(M,Z)).catch(L=>Rn(L)?Rn(L,2)?L:de(L):B(L,M,Z)).then(L=>{if(L){if(Rn(L,2))return A(Me({replace:T},W(L.to),{state:typeof L.to=="object"?Me({},Re,L.to.state):Re,force:w}),te||M)}else L=R(M,Z,!0,T,Re);return b(M,Z,L),L})}function y(V,te){const Y=q(V,te);return Y?Promise.reject(Y):Promise.resolve()}function E(V){const te=qe.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(V):V()}function I(V,te){let Y;const[Z,Re,w]=QC(V,te);Y=el(Z.reverse(),"beforeRouteLeave",V,te);for(const S of Z)S.leaveGuards.forEach(M=>{Y.push(er(M,V,te))});const T=y.bind(null,V,te);return Y.push(T),Xe(Y).then(()=>{Y=[];for(const S of i.list())Y.push(er(S,V,te));return Y.push(T),Xe(Y)}).then(()=>{Y=el(Re,"beforeRouteUpdate",V,te);for(const S of Re)S.updateGuards.forEach(M=>{Y.push(er(M,V,te))});return Y.push(T),Xe(Y)}).then(()=>{Y=[];for(const S of w)if(S.beforeEnter)if(on(S.beforeEnter))for(const M of S.beforeEnter)Y.push(er(M,V,te));else Y.push(er(S.beforeEnter,V,te));return Y.push(T),Xe(Y)}).then(()=>(V.matched.forEach(S=>S.enterCallbacks={}),Y=el(w,"beforeRouteEnter",V,te,E),Y.push(T),Xe(Y))).then(()=>{Y=[];for(const S of o.list())Y.push(er(S,V,te));return Y.push(T),Xe(Y)}).catch(S=>Rn(S,8)?S:Promise.reject(S))}function b(V,te,Y){c.list().forEach(Z=>E(()=>Z(V,te,Y)))}function R(V,te,Y,Z,Re){const w=q(V,te);if(w)return w;const T=te===Qn,S=hs?history.state:{};Y&&(Z||T?s.replace(V.fullPath,Me({scroll:T&&S&&S.scroll},Re)):s.push(V.fullPath,Re)),l.value=V,Se(V,te,Y,T),de()}let _;function re(){_||(_=s.listen((V,te,Y)=>{if(!Ke.listening)return;const Z=z(V),Re=le(Z);if(Re){A(Me(Re,{replace:!0,force:!0}),Z).catch(Ii);return}u=Z;const w=l.value;hs&&yC(wp(w.fullPath,Y.delta),lc()),I(Z,w).catch(T=>Rn(T,12)?T:Rn(T,2)?(A(Me(W(T.to),{force:!0}),Z).then(S=>{Rn(S,20)&&!Y.delta&&Y.type===Fi.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),B(T,Z,w))).then(T=>{T=T||R(Z,w,!1),T&&(Y.delta&&!Rn(T,8)?s.go(-Y.delta,!1):Y.type===Fi.pop&&Rn(T,20)&&s.go(-1,!1)),b(Z,w,T)}).catch(Ii)}))}let G=ri(),N=ri(),j;function B(V,te,Y){de(V);const Z=N.list();return Z.length?Z.forEach(Re=>Re(V,te,Y)):console.error(V),Promise.reject(V)}function ce(){return j&&l.value!==Qn?Promise.resolve():new Promise((V,te)=>{G.add([V,te])})}function de(V){return j||(j=!V,re(),G.list().forEach(([te,Y])=>V?Y(V):te()),G.reset()),V}function Se(V,te,Y,Z){const{scrollBehavior:Re}=t;if(!hs||!Re)return Promise.resolve();const w=!Y&&vC(wp(V.fullPath,0))||(Z||!Y)&&history.state&&history.state.scroll||null;return nu().then(()=>Re(V,te,w)).then(T=>T&&_C(T)).catch(T=>B(T,V,te))}const Ee=V=>s.go(V);let be;const qe=new Set,Ke={currentRoute:l,listening:!0,addRoute:v,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:D,resolve:z,options:t,push:H,replace:oe,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:N.add,isReady:ce,install(V){const te=this;V.component("RouterLink",qC),V.component("RouterView",KC),V.config.globalProperties.$router=te,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>On(l)}),hs&&!be&&l.value===Qn&&(be=!0,H(s.location).catch(Re=>{}));const Y={};for(const Re in Qn)Object.defineProperty(Y,Re,{get:()=>l.value[Re],enumerable:!0});V.provide(uc,te),V.provide(ah,lg(Y)),V.provide(Bl,l);const Z=V.unmount;qe.add(V),V.unmount=function(){qe.delete(V),qe.size<1&&(u=Qn,_&&_(),_=null,l.value=Qn,be=!1,j=!1),Z()}}};function Xe(V){return V.reduce((te,Y)=>te.then(()=>E(Y)),Promise.resolve())}return Ke}function QC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ds(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ds(u,l))||s.push(l))}return[n,r,s]}function ch(){return Yt(uc)}function $y(t){return Yt(ah)}const YC={},JC={class:"home-view container mx-auto py-6 text-center"};function XC(t,e){const n=Vs("router-link");return ue(),ge("div",JC,[e[1]||(e[1]=k("h1",{class:"text-4xl font-bold mb-6"},"Welcome to Farmers Market",-1)),e[2]||(e[2]=k("p",{class:"text-lg text-gray-600 mb-6"}," Discover fresh produce, browse vendors, and explore delicious recipes. ",-1)),Fe(n,{to:"/vendors",class:"bg-green-500 hover:bg-green-600 text-black py-3 px-6 rounded-lg text-lg font-medium"},{default:Bt(()=>e[0]||(e[0]=[Ot(" Browse Vendors ")])),_:1})])}const ZC=ih(YC,[["render",XC]]),hc=Ns("vendors",{state:()=>({vendors:[],currentVendor:null,loading:!1,error:null,favoriteVendors:[]}),getters:{getVendorById:t=>e=>t.vendors.find(n=>n.id===e),getFavoriteVendors:t=>t.vendors.filter(e=>t.favoriteVendors.includes(e.id))},actions:{async fetchVendors(){this.loading=!0;try{const t=Zn(Ye,"vendors"),n=(await us(t)).docs.map(async r=>{const s=r.data();Array.isArray(s.products)||(console.warn(`Vendor ${r.id} has an invalid products field.`),s.products=[]);const i=s.products.map(async c=>{const l=Vt(Ye,"products",c),u=await or(l);return u.exists()?{id:u.id,...u.data()}:null}),o=(await Promise.all(i)).filter(c=>c!==null);return{id:r.id,...s,products:o}});this.vendors=await Promise.all(n)}catch(t){console.error("Error fetching vendors:",t.message),this.error=t.message}finally{this.loading=!1}},async fetchVendorById(t){this.loading=!0;try{const e=Vt(Ye,"vendors",t),n=await or(e);if(n.exists()){const r=n.data(),s=r.products.map(async o=>{const c=Vt(Ye,"products",o),l=await or(c);return l.exists()?{id:l.id,...l.data()}:null}),i=(await Promise.all(s)).filter(o=>o!==null);this.currentVendor={id:n.id,...r,products:i}}else throw new Error("Vendor not found")}catch(e){this.error=e.message,console.error("Error fetching vendor:",e)}finally{this.loading=!1}},subscribeToVendorUpdates(t){const e=Vt(Ye,"vendors",t);return Iy(e,n=>{n.exists()&&(this.currentVendor={id:n.id,...n.data()})})},toggleFavoriteVendor(t){const e=this.favoriteVendors.indexOf(t);e===-1?this.favoriteVendors.push(t):this.favoriteVendors.splice(e,1),localStorage.setItem("favoriteVendors",JSON.stringify(this.favoriteVendors))},loadFavoriteVendors(){const t=localStorage.getItem("favoriteVendors");t&&(this.favoriteVendors=JSON.parse(t))},async addProductToVendor(t,e){try{const n=Vt(Ye,"vendors",t),r=await or(n);r.exists()&&!Array.isArray(r.data().products)&&await Ul(n,{products:[]}),await Ul(n,{products:zS(e)})}catch(n){console.error("Error adding product to vendor:",n)}}}}),ek={class:"vendor-card bg-white rounded-lg shadow-md p-4"},tk={class:"text-lg font-semibold text-gray-800"},nk={class:"text-sm text-gray-600"},rk={class:"text-sm text-gray-600"},sk={key:0,class:"mt-4"},ik={class:"list-disc list-inside"},ok={key:0},ak={key:1},ck={key:1,class:"mt-4 text-sm text-gray-500"},lk={__name:"VendorCard",props:{vendor:{type:Object,required:!0}},setup(t){return(e,n)=>(ue(),ge("div",ek,[k("h3",tk,Oe(t.vendor.name),1),k("p",nk,Oe(t.vendor.location),1),k("p",rk,Oe(t.vendor.contact),1),t.vendor.products&&t.vendor.products.length>0?(ue(),ge("div",sk,[n[0]||(n[0]=k("h4",{class:"text-sm font-medium text-gray-700"},"Products:",-1)),k("ul",ik,[(ue(!0),ge(bt,null,$r(t.vendor.products,r=>(ue(),ge("li",{key:r.id},[Ot(Oe(r.name||"Unnamed Product")+" - ",1),r.price!==void 0&&!isNaN(r.price)?(ue(),ge("span",ok,"$"+Oe(r.price.toFixed(2)),1)):(ue(),ge("span",ak,"Price not available"))]))),128))])])):(ue(),ge("div",ck," No products available. "))]))}},uk={class:"vendor-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},hk={__name:"VendorList",setup(t){const e=hc(),n=rt(()=>e.vendors);return(r,s)=>(ue(),ge("div",uk,[(ue(!0),ge(bt,null,$r(n.value,i=>(ue(),ge("div",{key:i.id,class:"border-b border-gray-300 pb-4"},[Fe(lk,{vendor:i},null,8,["vendor"])]))),128))]))}},dk={class:"browse-vendors-view container mx-auto py-6"},fk={__name:"BrowseVendorsView",setup(t){const e=hc();return ji(()=>{e.fetchVendors()}),(n,r)=>(ue(),ge("div",dk,[r[0]||(r[0]=k("h1",{class:"text-2xl font-bold mb-4"},"Browse Vendors",-1)),Fe(hk)]))}},pk={class:"product-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 border-b border-gray-300"},gk={class:"text-base font-semibold text-gray-800"},mk={class:"text-sm text-gray-600 mt-2"},jy={__name:"ProductCard",props:{product:{type:Object,required:!0}},setup(t){return(e,n)=>{const r=Vs("router-link");return ue(),ge("div",pk,[k("h3",gk,Oe(t.product.name),1),k("p",mk,"$"+Oe(t.product.price.toFixed(2)),1),Fe(r,{to:`/products/${t.product.id}`,class:"mt-3 inline-block text-sm font-medium text-green-600 hover:text-green-700"},{default:Bt(()=>n[0]||(n[0]=[Ot(" View Details ")])),_:1},8,["to"])])}}},_k={class:"vendor-dashboard-view container mx-auto py-6"},yk={key:0},vk={class:"text-2xl font-bold mb-4"},Ek={class:"text-gray-600 mb-6"},wk={key:0,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},Tk={key:1,class:"text-gray-500"},Ik={key:1,class:"text-gray-500"},Mp={__name:"VendorDashboardView",setup(t){const e=$y(),n=hc(),r=rt(()=>n.currentVendor);return ji(async()=>{const s=e.params.id;await n.fetchVendorById(s)}),(s,i)=>(ue(),ge("div",_k,[r.value?(ue(),ge("div",yk,[k("h1",vk,Oe(r.value.name),1),k("p",Ek,Oe(r.value.contact),1),i[0]||(i[0]=k("h2",{class:"text-xl font-semibold mb-4"},"Products",-1)),r.value.products.length>0?(ue(),ge("div",wk,[(ue(!0),ge(bt,null,$r(r.value.products,o=>(ue(),Oa(jy,{key:o.id,product:o},null,8,["product"]))),128))])):(ue(),ge("p",Tk,"No products available."))])):(ue(),ge("p",Ik,"Loading vendor details..."))]))}},By=Ns("products",{state:()=>({products:[],currentProduct:null,relatedProducts:[],loading:!1,error:null,recentlyViewed:[]}),getters:{getProductById:t=>e=>t.products.find(n=>n.id===e),getProductsByVendorId:t=>e=>t.products.filter(n=>n.vendorId===e),getProductsByCategory:t=>e=>t.products.filter(n=>n.category===e),getFeaturedProducts:t=>t.products.filter(e=>e.featured),getRecentlyViewed:t=>t.recentlyViewed.map(e=>t.products.find(n=>n.id===e)).filter(e=>e!==void 0)},actions:{async fetchProducts(){this.loading=!0;try{const t=Zn(Ye,"products"),e=await us(t);this.products=e.docs.map(n=>({id:n.id,...n.data()}))}catch(t){this.error=t.message,console.error("Error fetching products:",t)}finally{this.loading=!1}},async fetchProductById(t){this.loading=!0;try{const e=Vt(Ye,"products",t),n=await or(e);if(n.exists())this.currentProduct={id:n.id,...n.data()},this.addToRecentlyViewed(t),await this.fetchRelatedProducts(this.currentProduct.category,this.currentProduct.vendorId);else throw new Error("Product not found")}catch(e){this.error=e.message,console.error("Error fetching product:",e)}finally{this.loading=!1}},async fetchRelatedProducts(t,e){try{const n=Ro(Zn(Ye,"products"),So("category","==",t),Yc(4)),r=Ro(Zn(Ye,"products"),So("vendorId","==",e),Yc(4)),[s,i]=await Promise.all([us(n),us(r)]);this.relatedProducts=[...s.docs.map(o=>({id:o.id,...o.data()})),...i.docs.map(o=>({id:o.id,...o.data()}))].filter(o=>{var c;return o.id!==((c=this.currentProduct)==null?void 0:c.id)})}catch(n){console.error("Error fetching related products:",n)}},async fetchWeatherPromotions(t){try{const e=Ro(Zn(Ye,"products"),So("promotions.weatherCondition","==",t),Yc(5));return(await us(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){return console.error("Error fetching weather promotions:",e),[]}},subscribeToProductUpdates(t){const e=Vt(Ye,"products",t);return Iy(e,n=>{n.exists()&&(this.currentProduct={id:n.id,...n.data()})})},addToRecentlyViewed(t){const e=this.recentlyViewed.indexOf(t);e>-1&&this.recentlyViewed.splice(e,1),this.recentlyViewed.unshift(t),this.recentlyViewed.length>10&&this.recentlyViewed.pop(),localStorage.setItem("recentlyViewed",JSON.stringify(this.recentlyViewed))},loadRecentlyViewed(){const t=localStorage.getItem("recentlyViewed");t&&(this.recentlyViewed=JSON.parse(t))},async fetchProductsByVendor(t){this.loading=!0;try{const e=Ro(Zn(Ye,"products"),So("vendorID","==",t)),n=await us(e);this.products=n.docs.map(r=>({id:r.id,...r.data()}))}catch(e){console.error("Error fetching products:",e),this.error=e.message}finally{this.loading=!1}},async addProduct(t){this.loading=!0;try{const e=await Ty(Zn(Ye,"products"),{name:t.name,price:t.price,category:t.category,vendorId:t.vendorId});return alert("Product added successfully!"),e.id}catch(e){throw console.error("Error adding product:",e),this.error=e.message,e}finally{this.loading=!1}},async updateProduct(t,e){this.loading=!0;try{const n=Vt(Ye,"products",t);await Ul(n,e),alert("Product updated successfully!")}catch(n){console.error("Error updating product:",n),this.error=n.message}finally{this.loading=!1}},async removeProduct(t){this.loading=!0;try{const e=Vt(Ye,"products",t);await WS(e),alert("Product removed successfully!")}catch(e){console.error("Error removing product:",e),this.error=e.message}finally{this.loading=!1}}}}),bk={key:0,class:"product-detail p-4 border-b border-gray-300"},Ak={class:"text-xl font-bold text-gray-800"},Rk={class:"text-sm text-gray-600 mt-2"},Sk={class:"mt-4"},Pk={class:"text-lg font-semibold text-green-600"},Ck={class:"text-sm text-gray-500 ml-2"},kk={key:0,class:"mt-6"},xk={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},Dk={key:1,class:"text-center text-gray-500 py-8"},Ok={__name:"ProductDetailView",setup(t){const e=$y(),n=By(),r=Je(null),s=Je([]),i=async()=>{const o=e.params.id;await n.fetchProductById(o),r.value=n.currentProduct,s.value=n.relatedProducts};return ji(i),_s(()=>e.params.id,i),(o,c)=>r.value?(ue(),ge("div",bk,[k("h1",Ak,Oe(r.value.name),1),k("p",Rk,Oe(r.value.description),1),k("div",Sk,[k("span",Pk,"$"+Oe(r.value.price.toFixed(2)),1),k("span",Ck,"/ "+Oe(r.value.unit),1)]),s.value.length>0?(ue(),ge("div",kk,[c[0]||(c[0]=k("h2",{class:"text-lg font-semibold text-gray-800 mb-4"},"Related Products",-1)),k("div",xk,[(ue(!0),ge(bt,null,$r(s.value,l=>(ue(),Oa(jy,{key:l.id,product:l},null,8,["product"]))),128))])])):Pn("",!0)])):(ue(),ge("div",Dk,c[1]||(c[1]=[k("p",null,"Loading product details...",-1)])))}},Vk={class:"account-view container mx-auto py-6"},Nk={key:0},Mk={key:1},Lk={class:"flex space-x-4"},Fk={__name:"AccountView",setup(t){const e=Jr(),n=ch(),{user:r}=e,s=async()=>{try{await e.logoutUser(),alert("You have been logged out."),n.push("/")}catch(i){console.error("Error logging out:",i),alert("Failed to log out. Please try again.")}};return(i,o)=>{const c=Vs("router-link");return ue(),ge("div",Vk,[o[6]||(o[6]=k("h1",{class:"text-2xl font-bold mb-4"},"My Account",-1)),On(r)?(ue(),ge("div",Nk,[k("p",null,[o[0]||(o[0]=k("strong",null,"Name:",-1)),Ot(" "+Oe(On(r).displayName),1)]),k("p",null,[o[1]||(o[1]=k("strong",null,"Email:",-1)),Ot(" "+Oe(On(r).email),1)]),Fe(c,{to:"/manage-products",class:"mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-block"},{default:Bt(()=>o[2]||(o[2]=[Ot(" Manage Products ")])),_:1}),k("button",{onClick:s,class:"mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"}," Logout ")])):(ue(),ge("div",Mk,[o[5]||(o[5]=k("p",{class:"mb-4"},"You are not logged in.",-1)),k("div",Lk,[Fe(c,{to:"/create-account",class:"bg-green-500 hover:bg-green-600 py-2 px-4 rounded"},{default:Bt(()=>o[3]||(o[3]=[Ot(" Create Account ")])),_:1}),Fe(c,{to:"/login",class:"bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"},{default:Bt(()=>o[4]||(o[4]=[Ot(" Login ")])),_:1})])]))])}}},Uk=Ns("cart",{state:()=>({items:[]}),actions:{addItem(t){this.items.push(t)},removeItem(t){this.items=this.items.filter(e=>e.id!==t)}}}),$k=Ns("pickup",{state:()=>({pickups:[],loading:!1,error:null}),actions:{async schedulePickup(t){this.loading=!0,this.error=null;try{const e=await Ty(Zn(Ye,"pickups"),t);this.pickups.push({id:e.id,...t})}catch(e){this.error=e.message,console.error("Error scheduling pickup:",e)}finally{this.loading=!1}}}}),jk=Ns("weather",{state:()=>({currentWeather:null,forecast:[]}),actions:{async fetchCurrentWeather(t){try{const n=await(await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${t}`)).json();this.currentWeather=n}catch(e){console.error("Error fetching current weather:",e)}},async fetchForecast(t){try{const n=await(await fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${t}&days=7`)).json();this.forecast=n.forecast.forecastday}catch(e){console.error("Error fetching weather forecast:",e)}}}});function Bk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qo={exports:{}},qk=qo.exports,Lp;function Hk(){return Lp||(Lp=1,function(t,e){(function(n,r){t.exports=r()})(qk,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",o="second",c="minute",l="hour",u="day",d="week",p="month",g="quarter",v="year",P="date",D="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,W={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(re){var G=["th","st","nd","rd"],N=re%100;return"["+re+(G[(N-20)%10]||G[N]||G[0])+"]"}},q=function(re,G,N){var j=String(re);return!j||j.length>=G?re:""+Array(G+1-j.length).join(N)+re},H={s:q,z:function(re){var G=-re.utcOffset(),N=Math.abs(G),j=Math.floor(N/60),B=N%60;return(G<=0?"+":"-")+q(j,2,"0")+":"+q(B,2,"0")},m:function re(G,N){if(G.date()<N.date())return-re(N,G);var j=12*(N.year()-G.year())+(N.month()-G.month()),B=G.clone().add(j,p),ce=N-B<0,de=G.clone().add(j+(ce?-1:1),p);return+(-(j+(N-B)/(ce?B-de:de-B))||0)},a:function(re){return re<0?Math.ceil(re)||0:Math.floor(re)},p:function(re){return{M:p,y:v,w:d,d:u,D:P,h:l,m:c,s:o,ms:i,Q:g}[re]||String(re||"").toLowerCase().replace(/s$/,"")},u:function(re){return re===void 0}},oe="en",le={};le[oe]=W;var A="$isDayjsObject",y=function(re){return re instanceof R||!(!re||!re[A])},E=function re(G,N,j){var B;if(!G)return oe;if(typeof G=="string"){var ce=G.toLowerCase();le[ce]&&(B=ce),N&&(le[ce]=N,B=ce);var de=G.split("-");if(!B&&de.length>1)return re(de[0])}else{var Se=G.name;le[Se]=G,B=Se}return!j&&B&&(oe=B),B||!j&&oe},I=function(re,G){if(y(re))return re.clone();var N=typeof G=="object"?G:{};return N.date=re,N.args=arguments,new R(N)},b=H;b.l=E,b.i=y,b.w=function(re,G){return I(re,{locale:G.$L,utc:G.$u,x:G.$x,$offset:G.$offset})};var R=function(){function re(N){this.$L=E(N.locale,null,!0),this.parse(N),this.$x=this.$x||N.x||{},this[A]=!0}var G=re.prototype;return G.parse=function(N){this.$d=function(j){var B=j.date,ce=j.utc;if(B===null)return new Date(NaN);if(b.u(B))return new Date;if(B instanceof Date)return new Date(B);if(typeof B=="string"&&!/Z$/i.test(B)){var de=B.match(x);if(de){var Se=de[2]-1||0,Ee=(de[7]||"0").substring(0,3);return ce?new Date(Date.UTC(de[1],Se,de[3]||1,de[4]||0,de[5]||0,de[6]||0,Ee)):new Date(de[1],Se,de[3]||1,de[4]||0,de[5]||0,de[6]||0,Ee)}}return new Date(B)}(N),this.init()},G.init=function(){var N=this.$d;this.$y=N.getFullYear(),this.$M=N.getMonth(),this.$D=N.getDate(),this.$W=N.getDay(),this.$H=N.getHours(),this.$m=N.getMinutes(),this.$s=N.getSeconds(),this.$ms=N.getMilliseconds()},G.$utils=function(){return b},G.isValid=function(){return this.$d.toString()!==D},G.isSame=function(N,j){var B=I(N);return this.startOf(j)<=B&&B<=this.endOf(j)},G.isAfter=function(N,j){return I(N)<this.startOf(j)},G.isBefore=function(N,j){return this.endOf(j)<I(N)},G.$g=function(N,j,B){return b.u(N)?this[j]:this.set(B,N)},G.unix=function(){return Math.floor(this.valueOf()/1e3)},G.valueOf=function(){return this.$d.getTime()},G.startOf=function(N,j){var B=this,ce=!!b.u(j)||j,de=b.p(N),Se=function(Y,Z){var Re=b.w(B.$u?Date.UTC(B.$y,Z,Y):new Date(B.$y,Z,Y),B);return ce?Re:Re.endOf(u)},Ee=function(Y,Z){return b.w(B.toDate()[Y].apply(B.toDate("s"),(ce?[0,0,0,0]:[23,59,59,999]).slice(Z)),B)},be=this.$W,qe=this.$M,Ke=this.$D,Xe="set"+(this.$u?"UTC":"");switch(de){case v:return ce?Se(1,0):Se(31,11);case p:return ce?Se(1,qe):Se(0,qe+1);case d:var V=this.$locale().weekStart||0,te=(be<V?be+7:be)-V;return Se(ce?Ke-te:Ke+(6-te),qe);case u:case P:return Ee(Xe+"Hours",0);case l:return Ee(Xe+"Minutes",1);case c:return Ee(Xe+"Seconds",2);case o:return Ee(Xe+"Milliseconds",3);default:return this.clone()}},G.endOf=function(N){return this.startOf(N,!1)},G.$set=function(N,j){var B,ce=b.p(N),de="set"+(this.$u?"UTC":""),Se=(B={},B[u]=de+"Date",B[P]=de+"Date",B[p]=de+"Month",B[v]=de+"FullYear",B[l]=de+"Hours",B[c]=de+"Minutes",B[o]=de+"Seconds",B[i]=de+"Milliseconds",B)[ce],Ee=ce===u?this.$D+(j-this.$W):j;if(ce===p||ce===v){var be=this.clone().set(P,1);be.$d[Se](Ee),be.init(),this.$d=be.set(P,Math.min(this.$D,be.daysInMonth())).$d}else Se&&this.$d[Se](Ee);return this.init(),this},G.set=function(N,j){return this.clone().$set(N,j)},G.get=function(N){return this[b.p(N)]()},G.add=function(N,j){var B,ce=this;N=Number(N);var de=b.p(j),Se=function(qe){var Ke=I(ce);return b.w(Ke.date(Ke.date()+Math.round(qe*N)),ce)};if(de===p)return this.set(p,this.$M+N);if(de===v)return this.set(v,this.$y+N);if(de===u)return Se(1);if(de===d)return Se(7);var Ee=(B={},B[c]=r,B[l]=s,B[o]=n,B)[de]||1,be=this.$d.getTime()+N*Ee;return b.w(be,this)},G.subtract=function(N,j){return this.add(-1*N,j)},G.format=function(N){var j=this,B=this.$locale();if(!this.isValid())return B.invalidDate||D;var ce=N||"YYYY-MM-DDTHH:mm:ssZ",de=b.z(this),Se=this.$H,Ee=this.$m,be=this.$M,qe=B.weekdays,Ke=B.months,Xe=B.meridiem,V=function(Z,Re,w,T){return Z&&(Z[Re]||Z(j,ce))||w[Re].slice(0,T)},te=function(Z){return b.s(Se%12||12,Z,"0")},Y=Xe||function(Z,Re,w){var T=Z<12?"AM":"PM";return w?T.toLowerCase():T};return ce.replace(z,function(Z,Re){return Re||function(w){switch(w){case"YY":return String(j.$y).slice(-2);case"YYYY":return b.s(j.$y,4,"0");case"M":return be+1;case"MM":return b.s(be+1,2,"0");case"MMM":return V(B.monthsShort,be,Ke,3);case"MMMM":return V(Ke,be);case"D":return j.$D;case"DD":return b.s(j.$D,2,"0");case"d":return String(j.$W);case"dd":return V(B.weekdaysMin,j.$W,qe,2);case"ddd":return V(B.weekdaysShort,j.$W,qe,3);case"dddd":return qe[j.$W];case"H":return String(Se);case"HH":return b.s(Se,2,"0");case"h":return te(1);case"hh":return te(2);case"a":return Y(Se,Ee,!0);case"A":return Y(Se,Ee,!1);case"m":return String(Ee);case"mm":return b.s(Ee,2,"0");case"s":return String(j.$s);case"ss":return b.s(j.$s,2,"0");case"SSS":return b.s(j.$ms,3,"0");case"Z":return de}return null}(Z)||de.replace(":","")})},G.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},G.diff=function(N,j,B){var ce,de=this,Se=b.p(j),Ee=I(N),be=(Ee.utcOffset()-this.utcOffset())*r,qe=this-Ee,Ke=function(){return b.m(de,Ee)};switch(Se){case v:ce=Ke()/12;break;case p:ce=Ke();break;case g:ce=Ke()/3;break;case d:ce=(qe-be)/6048e5;break;case u:ce=(qe-be)/864e5;break;case l:ce=qe/s;break;case c:ce=qe/r;break;case o:ce=qe/n;break;default:ce=qe}return B?ce:b.a(ce)},G.daysInMonth=function(){return this.endOf(p).$D},G.$locale=function(){return le[this.$L]},G.locale=function(N,j){if(!N)return this.$L;var B=this.clone(),ce=E(N,j,!0);return ce&&(B.$L=ce),B},G.clone=function(){return b.w(this.$d,this)},G.toDate=function(){return new Date(this.valueOf())},G.toJSON=function(){return this.isValid()?this.toISOString():null},G.toISOString=function(){return this.$d.toISOString()},G.toString=function(){return this.$d.toUTCString()},re}(),_=R.prototype;return I.prototype=_,[["$ms",i],["$s",o],["$m",c],["$H",l],["$W",u],["$M",p],["$y",v],["$D",P]].forEach(function(re){_[re[1]]=function(G){return this.$g(G,re[0],re[1])}}),I.extend=function(re,G){return re.$i||(re(G,R,I),re.$i=!0),I},I.locale=E,I.isDayjs=y,I.unix=function(re){return I(1e3*re)},I.en=le[oe],I.Ls=le,I.p={},I})}(qo)),qo.exports}var Wk=Hk();const zk=Bk(Wk),Kk={class:"pickup-scheduler"},Gk={class:"mb-8"},Qk={class:"grid grid-cols-7 gap-2"},Yk=["onClick","disabled"],Jk={class:"text-xs mb-1"},Xk={class:"font-semibold"},Zk={key:0,class:"mb-8"},e1={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"},t1=["onClick","disabled"],n1={key:1,class:"mb-8"},r1={key:2,class:"mb-8"},s1={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},i1={key:3,class:"bg-gray-50 p-4 rounded-lg mb-6"},o1={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},a1={class:"font-medium"},c1={class:"font-medium"},l1={class:"font-medium"},u1={class:"font-medium"},h1={key:0,class:"mt-2 p-2 bg-blue-50 rounded-md"},d1={class:"flex items-center"},f1={class:"text-sm"},p1={class:"flex justify-end"},g1=["disabled"],m1={key:4,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},_1={class:"bg-white rounded-lg p-6 max-w-md w-full"},y1={class:"text-center"},v1={class:"text-gray-600 mb-4"},E1={__name:"PickupScheduler",setup(t){const e=ch(),n=Uk(),r=$k(),s=Jr(),i=jk(),o=Je([]),c=Je([]),l=Je(null),u=Je(null),d=Je(""),p=Je(""),g=Je(""),v=Je(!1),P=()=>{const R=[],_=zk();for(let re=0;re<7;re++){const G=_.add(re,"day");R.push({date:G,dateString:G.format("YYYY-MM-DD"),day:G.format("D"),dayName:G.format("ddd"),available:!0})}o.value=R},D=R=>{const _=[{id:1,time:"9:00 AM - 10:00 AM",available:!0,spotsLeft:8},{id:2,time:"10:00 AM - 11:00 AM",available:!0,spotsLeft:5},{id:3,time:"11:00 AM - 12:00 PM",available:!0,spotsLeft:3},{id:4,time:"12:00 PM - 1:00 PM",available:!0,spotsLeft:7},{id:5,time:"1:00 PM - 2:00 PM",available:!0,spotsLeft:10},{id:6,time:"2:00 PM - 3:00 PM",available:!1,spotsLeft:0}];(R.day()===0||R.day()===6)&&_.push({id:7,time:"3:00 PM - 4:00 PM",available:!0,spotsLeft:12},{id:8,time:"4:00 PM - 5:00 PM",available:!0,spotsLeft:15}),c.value=_},x=R=>{l.value=R,u.value=null,D(R.date),i.getWeatherForecast(R.dateString)},z=R=>{R.available&&(u.value=R)},W=R=>l.value&&l.value.dateString===R.dateString,q=R=>u.value&&u.value.id===R.id,H=R=>R?R.format("dddd, MMMM D, YYYY"):"",oe=()=>{l.value=null,u.value=null,d.value=""},le=async()=>{var R;if(I.value)try{await r.schedulePickup({userId:s.currentUserId,date:l.value.dateString,timeSlot:u.value.id,items:n.items,notes:d.value,contactPhone:p.value,contactEmail:g.value||((R=s.user)==null?void 0:R.email)}),v.value=!0,n.clearCart()}catch(_){console.error("Error scheduling pickup:",_)}},A=()=>{v.value=!1,e.push("/account/pickups")},y=rt(()=>n.items.reduce((R,_)=>R+_.quantity,0)),E=rt(()=>new Set(n.items.map(_=>_.vendorId)).size),I=rt(()=>l.value&&u.value&&n.items.length>0&&(p.value||s.user&&s.user.email)),b=rt(()=>i.forecast);return ji(()=>{var R;P(),s.user&&(g.value=s.user.email,p.value=((R=s.userProfile)==null?void 0:R.phone)||"")}),(R,_)=>{var re,G;return ue(),ge("div",Kk,[_[18]||(_[18]=k("h2",{class:"text-2xl font-bold text-gray-800 mb-6"},"Schedule Your Pickup",-1)),k("div",Gk,[_[3]||(_[3]=k("h3",{class:"text-lg font-semibold text-gray-700 mb-3"},"1. Select a Date",-1)),k("div",Qk,[(ue(!0),ge(bt,null,$r(o.value,N=>(ue(),ge("button",{key:N.dateString,onClick:j=>x(N),class:gs(["p-3 rounded-lg text-center transition-colors",{"bg-gray-100 hover:bg-gray-200":!W(N),"bg-green-500 text-white":W(N)}]),disabled:!N.available},[k("div",Jk,Oe(N.dayName),1),k("div",Xk,Oe(N.day),1)],10,Yk))),128))])]),l.value?(ue(),ge("div",Zk,[_[4]||(_[4]=k("h3",{class:"text-lg font-semibold text-gray-700 mb-3"},"2. Select a Time Slot",-1)),k("div",e1,[(ue(!0),ge(bt,null,$r(c.value,N=>(ue(),ge("button",{key:N.id,onClick:j=>z(N),class:gs(["p-3 rounded-lg text-center transition-colors",{"bg-gray-100 hover:bg-gray-200":!q(N),"bg-green-500 text-white":q(N),"opacity-50 cursor-not-allowed":!N.available}]),disabled:!N.available},[k("div",null,Oe(N.time),1),k("div",{class:gs(["text-xs mt-1",q(N)?"text-green-100":"text-gray-500"])},Oe(N.available?`${N.spotsLeft} spots left`:"Full"),3)],10,t1))),128))])])):Pn("",!0),u.value?(ue(),ge("div",n1,[_[5]||(_[5]=k("h3",{class:"text-lg font-semibold text-gray-700 mb-3"},"3. Add Notes (Optional)",-1)),Kt(k("textarea",{"onUpdate:modelValue":_[0]||(_[0]=N=>d.value=N),placeholder:"Special instructions for pickup (e.g., I'll be in a red car)",class:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",rows:"3"},null,512),[[Gt,d.value]])])):Pn("",!0),u.value?(ue(),ge("div",r1,[_[8]||(_[8]=k("h3",{class:"text-lg font-semibold text-gray-700 mb-3"},"4. Contact Information",-1)),k("div",s1,[k("div",null,[_[6]||(_[6]=k("label",{for:"phone",class:"block text-sm font-medium text-gray-700 mb-1"},"Phone Number",-1)),Kt(k("input",{id:"phone","onUpdate:modelValue":_[1]||(_[1]=N=>p.value=N),type:"tel",placeholder:"(123) 456-7890",class:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"},null,512),[[Gt,p.value]])]),k("div",null,[_[7]||(_[7]=k("label",{for:"email",class:"block text-sm font-medium text-gray-700 mb-1"},"Email",-1)),Kt(k("input",{id:"email","onUpdate:modelValue":_[2]||(_[2]=N=>g.value=N),type:"email",placeholder:"you@example.com",class:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"},null,512),[[Gt,g.value]])])])])):Pn("",!0),u.value?(ue(),ge("div",i1,[_[14]||(_[14]=k("h3",{class:"text-lg font-semibold text-gray-700 mb-2"},"Pickup Summary",-1)),k("div",o1,[k("div",null,[_[9]||(_[9]=k("div",{class:"text-sm text-gray-600"},"Date",-1)),k("div",a1,Oe(H(l.value.date)),1)]),k("div",null,[_[10]||(_[10]=k("div",{class:"text-sm text-gray-600"},"Time",-1)),k("div",c1,Oe(u.value.time),1)]),k("div",null,[_[11]||(_[11]=k("div",{class:"text-sm text-gray-600"},"Items",-1)),k("div",l1,Oe(y.value)+" items",1)]),k("div",null,[_[12]||(_[12]=k("div",{class:"text-sm text-gray-600"},"Vendors",-1)),k("div",u1,Oe(E.value)+" vendors",1)])]),b.value?(ue(),ge("div",h1,[k("div",d1,[_[13]||(_[13]=k("span",{class:"text-blue-600 mr-2"},[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[k("path",{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"})])],-1)),k("span",f1," Weather forecast: "+Oe(b.value.condition)+", "+Oe(b.value.temperature)+"°F ",1)])])):Pn("",!0)])):Pn("",!0),k("div",p1,[k("button",{onClick:oe,class:"mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"}," Cancel "),k("button",{onClick:le,class:"px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors",disabled:!I.value}," Confirm Pickup ",8,g1)]),v.value?(ue(),ge("div",m1,[k("div",_1,[k("div",y1,[_[15]||(_[15]=k("div",{class:"text-green-500 flex justify-center mb-4"},[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-16 w-16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)),_[16]||(_[16]=k("h3",{class:"text-xl font-bold text-gray-900 mb-2"},"Pickup Scheduled!",-1)),k("p",v1," Your pickup has been scheduled for "+Oe(H((re=l.value)==null?void 0:re.date))+" at "+Oe((G=u.value)==null?void 0:G.time)+". ",1),_[17]||(_[17]=k("p",{class:"text-sm text-gray-500 mb-6"}," You'll receive a confirmation email shortly with details. Please be on time! ",-1)),k("button",{onClick:A,class:"w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"}," Got it ")])])])):Pn("",!0)])}}},w1={class:"pickup-schedule-view container mx-auto py-6"},T1={__name:"PickupScheduleView",setup(t){return(e,n)=>(ue(),ge("div",w1,[n[0]||(n[0]=k("h1",{class:"text-2xl font-bold mb-4"},"Pickup Schedule",-1)),Fe(E1)]))}},I1={class:"account-creation-view container mx-auto py-6"},b1={class:"mb-4"},A1={class:"mb-4"},R1={class:"mb-4"},S1={class:"mb-4"},P1={key:0,class:"text-red-500 mt-4"},C1={__name:"AccountCreationView",setup(t){const e=Jr(),n=Je(""),r=Je(""),s=Je(""),i=Je(""),o=Je(""),c=async()=>{try{await e.registerVendor({name:n.value,contact:r.value,location:s.value,password:i.value}),alert("Vendor account created successfully!")}catch{o.value=e.error||"Failed to create account. Please try again."}};return(l,u)=>(ue(),ge("div",I1,[u[9]||(u[9]=k("h1",{class:"text-2xl font-bold mb-4"},"Create a Vendor Account",-1)),k("form",{onSubmit:au(c,["prevent"])},[k("div",b1,[u[4]||(u[4]=k("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Vendor Name",-1)),Kt(k("input",{id:"name","onUpdate:modelValue":u[0]||(u[0]=d=>n.value=d),type:"text",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,n.value]])]),k("div",A1,[u[5]||(u[5]=k("label",{for:"contact",class:"block text-sm font-medium text-gray-700"},"Contact",-1)),Kt(k("input",{id:"contact","onUpdate:modelValue":u[1]||(u[1]=d=>r.value=d),type:"email",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,r.value]])]),k("div",R1,[u[6]||(u[6]=k("label",{for:"location",class:"block text-sm font-medium text-gray-700"},"Location",-1)),Kt(k("input",{id:"location","onUpdate:modelValue":u[2]||(u[2]=d=>s.value=d),type:"text",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,s.value]])]),k("div",S1,[u[7]||(u[7]=k("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1)),Kt(k("input",{id:"password","onUpdate:modelValue":u[3]||(u[3]=d=>i.value=d),type:"password",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,i.value]])]),u[8]||(u[8]=k("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"}," Create Account ",-1)),o.value?(ue(),ge("p",P1,Oe(o.value),1)):Pn("",!0)],32)]))}},k1={class:"login-view container mx-auto py-6"},x1={class:"mb-4"},D1={class:"mb-4"},O1={__name:"LoginView",setup(t){const e=Jr(),n=ch(),r=Je(""),s=Je(""),i=async()=>{try{await e.loginVendor({email:r.value,password:s.value}),alert("Login successful!"),n.push("/")}catch(o){console.error("Error logging in:",o),alert("Failed to login. Please ensure you are a registered vendor.")}};return(o,c)=>(ue(),ge("div",k1,[c[5]||(c[5]=k("h1",{class:"text-2xl font-bold mb-4"},"Vendor Login",-1)),k("form",{onSubmit:au(i,["prevent"])},[k("div",x1,[c[2]||(c[2]=k("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1)),Kt(k("input",{id:"email","onUpdate:modelValue":c[0]||(c[0]=l=>r.value=l),type:"email",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,r.value]])]),k("div",D1,[c[3]||(c[3]=k("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1)),Kt(k("input",{id:"password","onUpdate:modelValue":c[1]||(c[1]=l=>s.value=l),type:"password",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,s.value]])]),c[4]||(c[4]=k("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"}," Login ",-1))],32)]))}},V1={class:"manage-products-view container mx-auto py-6"},N1={key:0},M1={class:"space-y-4"},L1={class:"text-lg font-semibold"},F1={class:"text-sm text-gray-600"},U1={class:"text-sm text-gray-500"},$1=["onClick"],j1={key:1},B1={class:"mb-4"},q1={class:"mb-4"},H1={class:"mb-4"},W1={__name:"ManageProductsView",setup(t){const e=By(),n=hc(),r=Jr(),s=Je(e.products),i=Je({name:"",price:0,category:""}),o=async()=>{var l;try{const u=(l=r.user)==null?void 0:l.uid;i.value.vendorId=u;const d=await e.addProduct(i.value);await n.addProductToVendor(u,d),i.value={name:"",price:0,category:""}}catch(u){console.error("Error adding product:",u)}},c=async l=>{await e.removeProduct(l)};return(l,u)=>(ue(),ge("div",V1,[u[9]||(u[9]=k("h1",{class:"text-2xl font-bold mb-4"},"Manage Products",-1)),s.value.length>0?(ue(),ge("div",N1,[k("ul",M1,[(ue(!0),ge(bt,null,$r(s.value,d=>(ue(),ge("li",{key:d.id,class:"p-4 border rounded-lg shadow-sm flex justify-between items-center"},[k("div",null,[k("h2",L1,Oe(d.name),1),k("p",F1,"$"+Oe(d.price.toFixed(2)),1),k("p",U1,"Category: "+Oe(d.category),1)]),k("button",{onClick:p=>c(d.id),class:"bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"}," Delete ",8,$1)]))),128))])])):(ue(),ge("div",j1,u[3]||(u[3]=[k("p",{class:"text-gray-500"},"No products found. Add your first product below.",-1)]))),k("form",{onSubmit:au(o,["prevent"]),class:"mt-6"},[u[7]||(u[7]=k("h2",{class:"text-xl font-bold mb-4"},"Add New Product",-1)),k("div",B1,[u[4]||(u[4]=k("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Product Name",-1)),Kt(k("input",{id:"name","onUpdate:modelValue":u[0]||(u[0]=d=>i.value.name=d),type:"text",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,i.value.name]])]),k("div",q1,[u[5]||(u[5]=k("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"Price",-1)),Kt(k("input",{id:"price","onUpdate:modelValue":u[1]||(u[1]=d=>i.value.price=d),type:"number",step:"0.01",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,i.value.price]])]),k("div",H1,[u[6]||(u[6]=k("label",{for:"category",class:"block text-sm font-medium text-gray-700"},"Category",-1)),Kt(k("input",{id:"category","onUpdate:modelValue":u[2]||(u[2]=d=>i.value.category=d),type:"text",class:"w-full p-3 border border-gray-300 rounded-lg",required:""},null,512),[[Gt,i.value.category]])]),u[8]||(u[8]=k("button",{type:"submit",class:"bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"}," Add Product ",-1))],32)]))}},z1=[{path:"/",children:[{path:"",name:"Home",component:ZC},{path:"vendors",name:"BrowseVendors",component:fk},{path:"vendors/:id",name:"VendorDashboard",component:Mp},{path:"products/:id",name:"ProductDetail",component:Ok},{path:"account",name:"Account",component:Fk},{path:"pickup-schedule",name:"PickupSchedule",component:T1},{path:"/create-account",name:"AccountCreation",component:C1},{path:"/login",name:"Login",component:O1},{path:"/vendor-dashboard",name:"VendorDashboard",component:Mp},{path:"/manage-products",name:"ManageProducts",component:W1}]}],K1=GC({history:IC(),routes:z1}),lh=xw(zP),G1=Vw();lh.use(K1);lh.use(G1);const Q1=Jr();Q1.initAuthListener();lh.mount("#app");
