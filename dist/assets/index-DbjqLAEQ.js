(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var zs,Z,uu,Tt,Ac,hu,du,Fi,ss,ir,fu,Po,eo,to,ys={},vs=[],Pf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ws=Array.isArray;function et(n,e){for(var t in e)n[t]=e[t];return n}function ko(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function kf(n,e,t){var r,s,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?zs.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)a[i]===void 0&&(a[i]=n.defaultProps[i]);return is(n,a,r,s,null)}function is(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++uu,__i:-1,__u:0};return s==null&&Z.vnode!=null&&Z.vnode(i),i}function Hs(n){return n.children}function os(n,e){this.props=n,this.context=e}function wn(n,e){if(e==null)return n.__?wn(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?wn(n):null}function Nf(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,r=[],s=[],i=et({},e);i.__v=e.__v+1,Z.vnode&&Z.vnode(i),No(n.__P,i,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,r,t??wn(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,_u(r,i,s),e.__e=e.__=null,i.__e!=t&&pu(i)}}function pu(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),pu(n)}function bc(n){(!n.__d&&(n.__d=!0)&&Tt.push(n)&&!Es.__r++||Ac!=Z.debounceRendering)&&((Ac=Z.debounceRendering)||hu)(Es)}function Es(){try{for(var n,e=1;Tt.length;)Tt.length>e&&Tt.sort(du),n=Tt.shift(),e=Tt.length,Nf(n)}finally{Tt.length=Es.__r=0}}function mu(n,e,t,r,s,i,a,c,u,d,m){var f,w,A,C,D,N,O,L=r&&r.__k||vs,q=e.length;for(u=Vf(t,e,L,u,q),f=0;f<q;f++)(A=t.__k[f])!=null&&(w=A.__i!=-1&&L[A.__i]||ys,A.__i=f,N=No(n,A,w,s,i,a,c,u,d,m),C=A.__e,A.ref&&w.ref!=A.ref&&(w.ref&&Vo(w.ref,null,A),m.push(A.ref,A.__c||C,A)),D==null&&C!=null&&(D=C),(O=!!(4&A.__u))||w.__k===A.__k?(u=gu(A,u,n,O),O&&w.__e&&(w.__e=null)):typeof A.type=="function"&&N!==void 0?u=N:C&&(u=C.nextSibling),A.__u&=-7);return t.__e=D,u}function Vf(n,e,t,r,s){var i,a,c,u,d,m=t.length,f=m,w=0;for(n.__k=new Array(s),i=0;i<s;i++)(a=e[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=n.__k[i]=is(null,a,null,null,null):Ws(a)?a=n.__k[i]=is(Hs,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=n.__k[i]=is(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):n.__k[i]=a,u=i+w,a.__=n,a.__b=n.__b+1,c=null,(d=a.__i=Df(a,t,u,f))!=-1&&(f--,(c=t[d])&&(c.__u|=2)),c==null||c.__v==null?(d==-1&&(s>m?w--:s<m&&w++),typeof a.type!="function"&&(a.__u|=4)):d!=u&&(d==u-1?w--:d==u+1?w++:(d>u?w--:w++,a.__u|=4))):n.__k[i]=null;if(f)for(i=0;i<m;i++)(c=t[i])!=null&&!(2&c.__u)&&(c.__e==r&&(r=wn(c)),vu(c,c));return r}function gu(n,e,t,r){var s,i;if(typeof n.type=="function"){for(s=n.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=n,e=gu(s[i],e,t,r));return e}n.__e!=e&&(r&&(e&&n.type&&!e.parentNode&&(e=wn(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Df(n,e,t,r){var s,i,a,c=n.key,u=n.type,d=e[t],m=d!=null&&(2&d.__u)==0;if(d===null&&c==null||m&&c==d.key&&u==d.type)return t;if(r>(m?1:0)){for(s=t-1,i=t+1;s>=0||i<e.length;)if((d=e[a=s>=0?s--:i++])!=null&&!(2&d.__u)&&c==d.key&&u==d.type)return a}return-1}function Rc(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Pf.test(e)?t:t+"px"}function Xr(n,e,t,r,s){var i,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Rc(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||Rc(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(fu,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t[ir]=r[ir]:(t[ir]=Po,n.addEventListener(e,i?to:eo,i)):n.removeEventListener(e,i?to:eo,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Sc(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[ss]==null)e[ss]=Po++;else if(e[ss]<t[ir])return;return t(Z.event?Z.event(e):e)}}}function No(n,e,t,r,s,i,a,c,u,d){var m,f,w,A,C,D,N,O,L,q,te,ee,oe,T,g,_=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),i=[c=e.__e=t.__e]),(m=Z.__b)&&m(e);e:if(typeof _=="function")try{if(O=e.props,L=_.prototype&&_.prototype.render,q=(m=_.contextType)&&r[m.__c],te=m?q?q.props.value:m.__:r,t.__c?N=(f=e.__c=t.__c).__=f.__E:(L?e.__c=f=new _(O,te):(e.__c=f=new os(O,te),f.constructor=_,f.render=Of),q&&q.sub(f),f.state||(f.state={}),f.__n=r,w=f.__d=!0,f.__h=[],f._sb=[]),L&&f.__s==null&&(f.__s=f.state),L&&_.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=et({},f.__s)),et(f.__s,_.getDerivedStateFromProps(O,f.__s))),A=f.props,C=f.state,f.__v=e,w)L&&_.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),L&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(L&&_.getDerivedStateFromProps==null&&O!==A&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(O,te),e.__v==t.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(O,f.__s,te)===!1){e.__v!=t.__v&&(f.props=O,f.state=f.__s,f.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(v){v&&(v.__=e)}),vs.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&a.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(O,f.__s,te),L&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(A,C,D)})}if(f.context=te,f.props=O,f.__P=n,f.__e=!1,ee=Z.__r,oe=0,L)f.state=f.__s,f.__d=!1,ee&&ee(e),m=f.render(f.props,f.state,f.context),vs.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,ee&&ee(e),m=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++oe<25);f.state=f.__s,f.getChildContext!=null&&(r=et(et({},r),f.getChildContext())),L&&!w&&f.getSnapshotBeforeUpdate!=null&&(D=f.getSnapshotBeforeUpdate(A,C)),T=m!=null&&m.type===Hs&&m.key==null?yu(m.props.children):m,c=mu(n,Ws(T)?T:[T],e,t,r,s,i,a,c,u,d),f.base=e.__e,e.__u&=-161,f.__h.length&&a.push(f),N&&(f.__E=f.__=null)}catch(v){if(e.__v=null,u||i!=null)if(v.then){for(e.__u|=u?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,e.__e=c}else{for(g=i.length;g--;)ko(i[g]);no(e)}else e.__e=t.__e,e.__k=t.__k,v.then||no(e);Z.__e(v,e,t)}else i==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):c=e.__e=xf(t.__e,e,t,r,s,i,a,u,d);return(m=Z.diffed)&&m(e),128&e.__u?void 0:c}function no(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(no))}function _u(n,e,t){for(var r=0;r<t.length;r++)Vo(t[r],t[++r],t[++r]);Z.__c&&Z.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){Z.__e(i,s.__v)}})}function yu(n){return typeof n!="object"||n==null||n.__b>0?n:Ws(n)?n.map(yu):et({},n)}function xf(n,e,t,r,s,i,a,c,u){var d,m,f,w,A,C,D,N=t.props||ys,O=e.props,L=e.type;if(L=="svg"?s="http://www.w3.org/2000/svg":L=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((A=i[d])&&"setAttribute"in A==!!L&&(L?A.localName==L:A.nodeType==3)){n=A,i[d]=null;break}}if(n==null){if(L==null)return document.createTextNode(O);n=document.createElementNS(s,L,O.is&&O),c&&(Z.__m&&Z.__m(e,i),c=!1),i=null}if(L==null)N===O||c&&n.data==O||(n.data=O);else{if(i=i&&zs.call(n.childNodes),!c&&i!=null)for(N={},d=0;d<n.attributes.length;d++)N[(A=n.attributes[d]).name]=A.value;for(d in N)A=N[d],d=="dangerouslySetInnerHTML"?f=A:d=="children"||d in O||d=="value"&&"defaultValue"in O||d=="checked"&&"defaultChecked"in O||Xr(n,d,null,A,s);for(d in O)A=O[d],d=="children"?w=A:d=="dangerouslySetInnerHTML"?m=A:d=="value"?C=A:d=="checked"?D=A:c&&typeof A!="function"||N[d]===A||Xr(n,d,A,N[d],s);if(m)c||f&&(m.__html==f.__html||m.__html==n.innerHTML)||(n.innerHTML=m.__html),e.__k=[];else if(f&&(n.innerHTML=""),mu(e.type=="template"?n.content:n,Ws(w)?w:[w],e,t,r,L=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,a,i?i[0]:t.__k&&wn(t,0),c,u),i!=null)for(d=i.length;d--;)ko(i[d]);c||(d="value",L=="progress"&&C==null?n.removeAttribute("value"):C!=null&&(C!==n[d]||L=="progress"&&!C||L=="option"&&C!=N[d])&&Xr(n,d,C,N[d],s),d="checked",D!=null&&D!=n[d]&&Xr(n,d,D,N[d],s))}return n}function Vo(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){Z.__e(s,t)}}function vu(n,e,t){var r,s;if(Z.unmount&&Z.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||Vo(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){Z.__e(i,e)}r.base=r.__P=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&vu(r[s],e,t||typeof n.type!="function");t||ko(n.__e),n.__c=n.__=n.__e=void 0}function Of(n,e,t){return this.constructor(n,t)}function Lf(n,e,t){var r,s,i,a;e==document&&(e=document.documentElement),Z.__&&Z.__(n,e),s=(r=!1)?null:e.__k,i=[],a=[],No(e,n=e.__k=kf(Hs,null,[n]),s||ys,ys,e.namespaceURI,s?null:e.firstChild?zs.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,a),_u(i,n,a)}zs=vs.slice,Z={__e:function(n,e,t,r){for(var s,i,a;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),a=s.__d),a)return s.__E=s}catch(c){n=c}throw n}},uu=0,os.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=et({},this.state),typeof n=="function"&&(n=n(et({},t),this.props)),n&&et(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),bc(this))},os.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),bc(this))},os.prototype.render=Hs,Tt=[],hu=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,du=function(n,e){return n.__v.__b-e.__v.__b},Es.__r=0,Fi=Math.random().toString(8),ss="__d"+Fi,ir="__a"+Fi,fu=/(PointerCapture)$|Capture$/i,Po=0,eo=Sc(!1),to=Sc(!0);var Mf=0;function I(n,e,t,r,s,i){e||(e={});var a,c,u=e;if("ref"in u)for(c in u={},e)c=="ref"?a=e[c]:u[c]=e[c];var d={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Mf,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(a=n.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return Z.vnode&&Z.vnode(d),d}var hr,le,Ui,Cc,Ts=0,Eu=[],de=Z,Pc=de.__b,kc=de.__r,Nc=de.diffed,Vc=de.__c,Dc=de.unmount,xc=de.__;function Do(n,e){de.__h&&de.__h(le,n,Ts||e),Ts=0;var t=le.__H||(le.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function J(n){return Ts=1,Ff(wu,n)}function Ff(n,e,t){var r=Do(hr++,2);if(r.t=n,!r.__c&&(r.__=[wu(void 0,e),function(c){var u=r.__N?r.__N[0]:r.__[0],d=r.t(u,c);u!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=le,!le.__f)){var s=function(c,u,d){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(w){return w.__c});if(m.every(function(w){return!w.__N}))return!i||i.call(this,c,u,d);var f=r.__c.props!==c;return m.some(function(w){if(w.__N){var A=w.__[0];w.__=w.__N,w.__N=void 0,A!==w.__[0]&&(f=!0)}}),i&&i.call(this,c,u,d)||f};le.__f=!0;var i=le.shouldComponentUpdate,a=le.componentWillUpdate;le.componentWillUpdate=function(c,u,d){if(this.__e){var m=i;i=void 0,s(c,u,d),i=m}a&&a.call(this,c,u,d)},le.shouldComponentUpdate=s}return r.__N||r.__}function st(n,e){var t=Do(hr++,3);!de.__s&&Tu(t.__H,e)&&(t.__=n,t.u=e,le.__H.__h.push(t))}function xo(n){return Ts=5,pn(function(){return{current:n}},[])}function pn(n,e){var t=Do(hr++,7);return Tu(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Uf(){for(var n;n=Eu.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(as),e.__h.some(ro),e.__h=[]}catch(t){e.__h=[],de.__e(t,n.__v)}}}de.__b=function(n){le=null,Pc&&Pc(n)},de.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),xc&&xc(n,e)},de.__r=function(n){kc&&kc(n),hr=0;var e=(le=n.__c).__H;e&&(Ui===le?(e.__h=[],le.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(as),e.__h.some(ro),e.__h=[],hr=0)),Ui=le},de.diffed=function(n){Nc&&Nc(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Eu.push(e)!==1&&Cc===de.requestAnimationFrame||((Cc=de.requestAnimationFrame)||Bf)(Uf)),e.__H.__.some(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Ui=le=null},de.__c=function(n,e){e.some(function(t){try{t.__h.some(as),t.__h=t.__h.filter(function(r){return!r.__||ro(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],de.__e(r,t.__v)}}),Vc&&Vc(n,e)},de.unmount=function(n){Dc&&Dc(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(r){try{as(r)}catch(s){e=s}}),t.__H=void 0,e&&de.__e(e,t.__v))};var Oc=typeof requestAnimationFrame=="function";function Bf(n){var e,t=function(){clearTimeout(r),Oc&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Oc&&(e=requestAnimationFrame(t))}function as(n){var e=le,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),le=e}function ro(n){var e=le;n.__c=n.__(),le=e}function Tu(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function wu(n,e){return typeof e=="function"?e(n):e}const jf=()=>{};var Lc={};/**
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
 */const Iu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$f=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,f=(i&3)<<4|c>>4;let w=(c&15)<<2|d>>6,A=d&63;u||(A=64,a||(w=64)),r.push(t[m],t[f],t[w],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Iu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$f(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||f==null)throw new qf;const w=i<<2|c>>4;if(r.push(w),d!==64){const A=c<<4&240|d>>2;if(r.push(A),f!==64){const C=d<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zf=function(n){const e=Iu(n);return Au.encodeByteArray(e,!0)},ws=function(n){return zf(n).replace(/\./g,"")},bu=function(n){try{return Au.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hf=()=>Wf().__FIREBASE_DEFAULTS__,Kf=()=>{if(typeof process>"u"||typeof Lc>"u")return;const n=Lc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bu(n[1]);return e&&JSON.parse(e)},Ks=()=>{try{return jf()||Hf()||Kf()||Gf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ru=n=>{var e,t;return(t=(e=Ks())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Qf=n=>{const e=Ru(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Su=()=>{var n;return(n=Ks())==null?void 0:n.config},Cu=n=>{var e;return(e=Ks())==null?void 0:e[`_${n}`]};/**
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
 */class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Xf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ws(JSON.stringify(t)),ws(JSON.stringify(a)),""].join(".")}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Zf(){var e;const n=(e=Ks())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ep(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rp(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sp(){return!Zf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ip(){try{return typeof indexedDB=="object"}catch{return!1}}function op(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const ap="FirebaseError";class dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ap,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?cp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new dt(s,c,r)}}function cp(n,e){return n.replace(lp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lp=/\{\$([^}]+)}/g;function up(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Mc(i)&&Mc(a)){if(!Gt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Mc(n){return n!==null&&typeof n=="object"}/**
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
 */function Ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function er(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function hp(n,e){const t=new dp(n,e);return t.subscribe.bind(t)}class dp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");fp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Bi),s.error===void 0&&(s.error=Bi),s.complete===void 0&&(s.complete=Bi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bi(){}/**
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
 */function ke(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pu(n){return(await fetch(n,{credentials:"include"})).ok}class Qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class pp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Jf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gp(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mp(n){return n===Wt?void 0:n}function gp(n){return n.instantiationMode==="EAGER"}/**
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
 */class _p{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const yp={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},vp=K.INFO,Ep={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Tp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ep[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oo{constructor(e){this.name=e,this._logLevel=vp,this._logHandler=Tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const wp=(n,e)=>e.some(t=>n instanceof t);let Fc,Uc;function Ip(){return Fc||(Fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ap(){return Uc||(Uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ku=new WeakMap,so=new WeakMap,Nu=new WeakMap,ji=new WeakMap,Lo=new WeakMap;function bp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Rt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ku.set(t,n)}).catch(()=>{}),Lo.set(e,n),e}function Rp(n){if(so.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});so.set(n,e)}let io={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return so.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sp(n){io=n(io)}function Cp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($i(this),e,...t);return Nu.set(r,e.sort?e.sort():[e]),Rt(r)}:Ap().includes(n)?function(...e){return n.apply($i(this),e),Rt(ku.get(this))}:function(...e){return Rt(n.apply($i(this),e))}}function Pp(n){return typeof n=="function"?Cp(n):(n instanceof IDBTransaction&&Rp(n),wp(n,Ip())?new Proxy(n,io):n)}function Rt(n){if(n instanceof IDBRequest)return bp(n);if(ji.has(n))return ji.get(n);const e=Pp(n);return e!==n&&(ji.set(n,e),Lo.set(e,n)),e}const $i=n=>Lo.get(n);function kp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Rt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Rt(a.result),u.oldVersion,u.newVersion,Rt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Np=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],qi=new Map;function Bc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qi.get(e))return qi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Vp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Np.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return qi.set(e,i),i}Sp(n=>({...n,get:(e,t,r)=>Bc(e,t)||n.get(e,t,r),has:(e,t)=>!!Bc(e,t)||n.has(e,t)}));/**
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
 */class Dp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function xp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oo="@firebase/app",jc="0.14.13";/**
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
 */const ct=new Oo("@firebase/app"),Op="@firebase/app-compat",Lp="@firebase/analytics-compat",Mp="@firebase/analytics",Fp="@firebase/app-check-compat",Up="@firebase/app-check",Bp="@firebase/auth",jp="@firebase/auth-compat",$p="@firebase/database",qp="@firebase/data-connect",zp="@firebase/database-compat",Wp="@firebase/functions",Hp="@firebase/functions-compat",Kp="@firebase/installations",Gp="@firebase/installations-compat",Qp="@firebase/messaging",Jp="@firebase/messaging-compat",Xp="@firebase/performance",Yp="@firebase/performance-compat",Zp="@firebase/remote-config",em="@firebase/remote-config-compat",tm="@firebase/storage",nm="@firebase/storage-compat",rm="@firebase/firestore",sm="@firebase/ai",im="@firebase/firestore-compat",om="firebase",am="12.14.0";/**
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
 */const ao="[DEFAULT]",cm={[oo]:"fire-core",[Op]:"fire-core-compat",[Mp]:"fire-analytics",[Lp]:"fire-analytics-compat",[Up]:"fire-app-check",[Fp]:"fire-app-check-compat",[Bp]:"fire-auth",[jp]:"fire-auth-compat",[$p]:"fire-rtdb",[qp]:"fire-data-connect",[zp]:"fire-rtdb-compat",[Wp]:"fire-fn",[Hp]:"fire-fn-compat",[Kp]:"fire-iid",[Gp]:"fire-iid-compat",[Qp]:"fire-fcm",[Jp]:"fire-fcm-compat",[Xp]:"fire-perf",[Yp]:"fire-perf-compat",[Zp]:"fire-rc",[em]:"fire-rc-compat",[tm]:"fire-gcs",[nm]:"fire-gcs-compat",[rm]:"fire-fst",[im]:"fire-fst-compat",[sm]:"fire-vertex","fire-js":"fire-js",[om]:"fire-js-all"};/**
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
 */const Is=new Map,lm=new Map,co=new Map;function $c(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){const e=n.name;if(co.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;co.set(e,n);for(const t of Is.values())$c(t,n);for(const t of lm.values())$c(t,n);return!0}function Mo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const um={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new wr("app","Firebase",um);/**
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
 */class hm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const Pn=am;function Vu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ao,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(t||(t=Su()),!t)throw St.create("no-options");const i=Is.get(s);if(i){if(Gt(t,i.options)&&Gt(r,i.config))return i;throw St.create("duplicate-app",{appName:s})}const a=new _p(s);for(const u of co.values())a.addComponent(u);const c=new hm(t,r,a);return Is.set(s,c),c}function Du(n=ao){const e=Is.get(n);if(!e&&n===ao&&Su())return Vu();if(!e)throw St.create("no-app",{appName:n});return e}function Ct(n,e,t){let r=cm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}In(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const dm="firebase-heartbeat-database",fm=1,dr="firebase-heartbeat-store";let zi=null;function xu(){return zi||(zi=kp(dm,fm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dr)}catch(t){console.warn(t)}}}}).catch(n=>{throw St.create("idb-open",{originalErrorMessage:n.message})})),zi}async function pm(n){try{const t=(await xu()).transaction(dr),r=await t.objectStore(dr).get(Ou(n));return await t.done,r}catch(e){if(e instanceof dt)ct.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(t.message)}}}async function qc(n,e){try{const r=(await xu()).transaction(dr,"readwrite");await r.objectStore(dr).put(e,Ou(n)),await r.done}catch(t){if(t instanceof dt)ct.warn(t.message);else{const r=St.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ct.warn(r.message)}}}function Ou(n){return`${n.name}!${n.options.appId}`}/**
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
 */const mm=1024,gm=30;class _m{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>gm){const a=Em(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zc(),{heartbeatsToSend:r,unsentEntries:s}=ym(this._heartbeatsCache.heartbeats),i=ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ct.warn(t),""}}}function zc(){return new Date().toISOString().substring(0,10)}function ym(n,e=mm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Wc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Wc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class vm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ip()?op().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wc(n){return ws(JSON.stringify({version:2,heartbeats:n})).length}function Em(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Tm(n){In(new Qt("platform-logger",e=>new Dp(e),"PRIVATE")),In(new Qt("heartbeat",e=>new _m(e),"PRIVATE")),Ct(oo,jc,n),Ct(oo,jc,"esm2020"),Ct("fire-js","")}Tm("");function Lu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wm=Lu,Mu=new wr("auth","Firebase",Lu());/**
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
 */const As=new Oo("@firebase/auth");function Im(n,...e){As.logLevel<=K.WARN&&As.warn(`Auth (${Pn}): ${n}`,...e)}function cs(n,...e){As.logLevel<=K.ERROR&&As.error(`Auth (${Pn}): ${n}`,...e)}/**
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
 */function je(n,...e){throw Fo(n,...e)}function We(n,...e){return Fo(n,...e)}function Fu(n,e,t){const r={...wm(),[e]:t};return new wr("auth","Firebase",r).create(e,{appName:n.name})}function it(n){return Fu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Mu.create(n,...e)}function U(n,e,...t){if(!n)throw Fo(e,...t)}function tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cs(e),new Error(e)}function lt(n,e){n||tt(e)}/**
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
 */function lo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Am(){return Hc()==="http:"||Hc()==="https:"}function Hc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function bm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Am()||tp()||"connection"in navigator)?navigator.onLine:!0}function Rm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class br{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=Yf()||np()}get(){return bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uo(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Uu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Cm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pm=new br(3e4,6e4);function Ut(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ft(n,e,t,r,s={}){return Bu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ir({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return ep()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Ar(n.emulatorConfig.host)&&(d.credentials="include"),Uu.fetch()(await ju(n,n.config.apiHost,t,c),d)})}async function Bu(n,e,t){n._canInitEmulator=!1;const r={...Sm,...e};try{const s=new Nm(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Yr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Yr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Yr(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Fu(n,m,d);je(n,m)}}catch(s){if(s instanceof dt)throw s;je(n,"network-request-failed",{message:String(s)})}}async function Rr(n,e,t,r,s={}){const i=await ft(n,e,t,r,s);return"mfaPendingCredential"in i&&je(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ju(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Uo(n.config,s):`${n.config.apiScheme}://${s}`;return Cm.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function km(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Pm.get())})}}function Yr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=We(n,e,r);return s.customData._tokenResponse=t,s}function Kc(n){return n!==void 0&&n.enterprise!==void 0}class Vm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return km(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dm(n,e){return ft(n,"GET","/v2/recaptchaConfig",Ut(n,e))}/**
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
 */async function xm(n,e){return ft(n,"POST","/v1/accounts:delete",e)}async function bs(n,e){return ft(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function or(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Om(n,e=!1){const t=ke(n),r=await t.getIdToken(e),s=Bo(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:or(Wi(s.auth_time)),issuedAtTime:or(Wi(s.iat)),expirationTime:or(Wi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wi(n){return Number(n)*1e3}function Bo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const s=bu(t);return s?JSON.parse(s):(cs("Failed to decode base64 JWT payload"),null)}catch(s){return cs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gc(n){const e=Bo(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function An(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dt&&Lm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Lm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Mm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rs(n){var f;const e=n.auth,t=await n.getIdToken(),r=await An(n,bs(e,{idToken:t}));U(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?$u(s.providerUserInfo):[],a=Um(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new uo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Fm(n){const e=ke(n);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Um(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $u(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Bm(n,e){const t=await Bu(n,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ju(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Ar(n.emulatorConfig.host)&&(u.credentials="include"),Uu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jm(n,e){return ft(n,"POST","/v2/accounts:revokeToken",Ut(n,e))}/**
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
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=Gc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bm(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new gn;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function Et(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Fe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Mm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await An(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Om(this,e)}reload(){return Fm(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Rs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await An(this,xm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:f,emailVerified:w,isAnonymous:A,providerData:C,stsTokenManager:D}=t;U(f&&D,e,"internal-error");const N=gn.fromJSON(this.name,D);U(typeof f=="string",e,"internal-error"),Et(r,e.name),Et(s,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof A=="boolean",e,"internal-error"),Et(i,e.name),Et(a,e.name),Et(c,e.name),Et(u,e.name),Et(d,e.name),Et(m,e.name);const O=new Fe({uid:f,auth:e,email:s,emailVerified:w,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:d,lastLoginAt:m});return C&&Array.isArray(C)&&(O.providerData=C.map(L=>({...L}))),u&&(O._redirectEventId=u),O}static async _fromIdTokenResponse(e,t,r=!1){const s=new gn;s.updateFromServerResponse(t);const i=new Fe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Rs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$u(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new gn;c.updateFromIdToken(r);const u=new Fe({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new uo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Qc=new Map;function nt(n){lt(n instanceof Function,"Expected a class definition");let e=Qc.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qc.set(n,e),e)}/**
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
 */class qu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qu.type="NONE";const Jc=qu;/**
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
 */function ls(n,e,t){return`firebase:${n}:${e}:${t}`}class _n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=ls("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bs(this.auth,{idToken:e}).catch(()=>{});return t?Fe._fromGetAccountInfoResponse(this.auth,t,e):null}return Fe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _n(nt(Jc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||nt(Jc);const a=ls(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let f;if(typeof m=="string"){const w=await bs(e,{idToken:m}).catch(()=>{});if(!w)break;f=await Fe._fromGetAccountInfoResponse(e,w,m)}else f=Fe._fromJSON(e,m);d!==i&&(c=f),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new _n(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new _n(i,e,r))}}/**
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
 */function Xc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ku(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qu(e))return"Blackberry";if(Ju(e))return"Webos";if(Wu(e))return"Safari";if((e.includes("chrome/")||Hu(e))&&!e.includes("edge/"))return"Chrome";if(Gu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zu(n=Se()){return/firefox\//i.test(n)}function Wu(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hu(n=Se()){return/crios\//i.test(n)}function Ku(n=Se()){return/iemobile/i.test(n)}function Gu(n=Se()){return/android/i.test(n)}function Qu(n=Se()){return/blackberry/i.test(n)}function Ju(n=Se()){return/webos/i.test(n)}function jo(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $m(n=Se()){var e;return jo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function qm(){return rp()&&document.documentMode===10}function Xu(n=Se()){return jo(n)||Gu(n)||Ju(n)||Qu(n)||/windows phone/i.test(n)||Ku(n)}/**
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
 */function Yu(n,e=[]){let t;switch(n){case"Browser":t=Xc(Se());break;case"Worker":t=`${Xc(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${r}`}/**
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
 */class zm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Wm(n,e={}){return ft(n,"GET","/v2/passwordPolicy",Ut(n,e))}/**
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
 */const Hm=6;class Km{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Hm,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Gm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yc(this),this.idTokenSubscription=new Yc(this),this.beforeStateQueue=new zm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bs(this,{idToken:e}),r=await Fe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(it(this));const t=e?ke(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wm(this),t=new Km(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Im(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function en(n){return ke(n)}class Yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=hp(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qm(n){Gs=n}function Zu(n){return Gs.loadJS(n)}function Jm(){return Gs.recaptchaEnterpriseScript}function Xm(){return Gs.gapiScript}function Ym(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Zm{constructor(){this.enterprise=new eg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const tg="recaptcha-enterprise",eh="NO_RECAPTCHA";class ng{constructor(e){this.type=tg,this.auth=en(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Dm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Vm(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Kc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(eh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Kc(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Jm();u.length!==0&&(u+=c),Zu(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Zc(n,e,t,r=!1,s=!1){const i=new ng(n);let a;if(s)a=eh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ho(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Zc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function rg(n,e){const t=Mo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Gt(i,e??{}))return s;je(s,"already-initialized")}return t.initialize({options:e})}function sg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ig(n,e,t){const r=en(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=th(e),{host:a,port:c}=og(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(Gt(d,r.config.emulator)&&Gt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Ar(a)?Pu(`${i}//${a}${u}`):ag()}function th(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function og(n){const e=th(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:el(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:el(a)}}}function el(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ag(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class $o{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,t){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function cg(n,e){return ft(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lg(n,e){return Rr(n,"POST","/v1/accounts:signInWithPassword",Ut(n,e))}/**
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
 */async function ug(n,e){return Rr(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}async function hg(n,e){return Rr(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}/**
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
 */class fr extends $o{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new fr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,t,"signInWithPassword",lg);case"emailLink":return ug(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,r,"signUpPassword",cg);case"emailLink":return hg(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function yn(n,e){return Rr(n,"POST","/v1/accounts:signInWithIdp",Ut(n,e))}/**
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
 */const dg="http://localhost";class Jt extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Jt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return yn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yn(e,t)}buildRequest(){const e={requestUri:dg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ir(t)}return e}}/**
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
 */function fg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pg(n){const e=Zn(er(n)).link,t=e?Zn(er(e)).deep_link_id:null,r=Zn(er(n)).deep_link_id;return(r?Zn(er(r)).link:null)||r||t||e||n}class qo{constructor(e){const t=Zn(er(e)),r=t.apiKey??null,s=t.oobCode??null,i=fg(t.mode??null);U(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=pg(e);try{return new qo(t)}catch{return null}}}/**
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
 */class kn{constructor(){this.providerId=kn.PROVIDER_ID}static credential(e,t){return fr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=qo.parseLink(t);return U(r,"argument-error"),fr._fromEmailAndCode(e,r.code,r.tenantId)}}kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sr extends nh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends Sr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class It extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return It.credential(t,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class At extends Sr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
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
 */class bt extends Sr{constructor(){super("twitter.com")}static credential(e,t){return Jt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bt.credential(t,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
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
 */async function mg(n,e){return Rr(n,"POST","/v1/accounts:signUp",Ut(n,e))}/**
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
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Fe._fromIdTokenResponse(e,r,s),a=tl(r);return new Xt({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=tl(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function tl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ss extends dt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ss.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ss(e,t,r,s)}}function rh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ss._fromErrorAndOperation(n,i,e,r):i})}async function gg(n,e,t=!1){const r=await An(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xt._forOperation(n,"link",r)}/**
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
 */async function _g(n,e,t=!1){const{auth:r}=n;if(xe(r.app))return Promise.reject(it(r));const s="reauthenticate";try{const i=await An(n,rh(r,s,e,n),t);U(i.idToken,r,"internal-error");const a=Bo(i.idToken);U(a,r,"internal-error");const{sub:c}=a;return U(n.uid===c,r,"user-mismatch"),Xt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
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
 */async function sh(n,e,t=!1){if(xe(n.app))return Promise.reject(it(n));const r="signIn",s=await rh(n,r,e),i=await Xt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function yg(n,e){return sh(en(n),e)}/**
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
 */async function ih(n){const e=en(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vg(n,e,t){if(xe(n.app))return Promise.reject(it(n));const r=en(n),a=await ho(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ih(n),u}),c=await Xt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Eg(n,e,t){return xe(n.app)?Promise.reject(it(n)):yg(ke(n),kn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ih(n),r})}/**
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
 */async function Tg(n,e){return ft(n,"POST","/v1/accounts:update",e)}/**
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
 */async function wg(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ke(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await An(r,Tg(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Ig(n,e,t,r){return ke(n).onIdTokenChanged(e,t,r)}function Ag(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}function bg(n,e,t,r){return ke(n).onAuthStateChanged(e,t,r)}function Rg(n){return ke(n).signOut()}const Cs="__sak";/**
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
 */class oh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Sg=1e3,Cg=10;class ah extends oh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);qm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ah.type="LOCAL";const Pg=ah;/**
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
 */class ch extends oh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ch.type="SESSION";const lh=ch;/**
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
 */function kg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Qs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await kg(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
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
 */function zo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ng{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=zo("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(f){const w=f;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function He(){return window}function Vg(n){He().location.href=n}/**
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
 */function uh(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Dg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Og(){return uh()?self:null}/**
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
 */const hh="firebaseLocalStorageDb",Lg=1,Ps="firebaseLocalStorage",dh="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Js(n,e){return n.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function Mg(){const n=indexedDB.deleteDatabase(hh);return new Cr(n).toPromise()}function fh(){const n=indexedDB.open(hh,Lg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ps,{keyPath:dh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ps)?e(r):(r.close(),await Mg(),e(await fh()))})})}async function nl(n,e,t){const r=Js(n,!0).put({[dh]:e,value:t});return new Cr(r).toPromise()}async function Fg(n,e){const t=Js(n,!1).get(e),r=await new Cr(t).toPromise();return r===void 0?null:r.value}function rl(n,e){const t=Js(n,!0).delete(e);return new Cr(t).toPromise()}const Ug=800,Bg=3;class ph{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=fh(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Bg)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(Og()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Dg(),!this.activeServiceWorker)return;this.sender=new Ng(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await nl(e,Cs,"1"),await rl(e,Cs)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Js(s,!1).getAll();return new Cr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ph.type="LOCAL";const jg=ph;new br(3e4,6e4);/**
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
 */function $g(n,e){return e?nt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Wo extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qg(n){return sh(n.auth,new Wo(n),n.bypassAuthState)}function zg(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),_g(t,new Wo(n),n.bypassAuthState)}async function Wg(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),gg(t,new Wo(n),n.bypassAuthState)}/**
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
 */class mh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qg;case"linkViaPopup":case"linkViaRedirect":return Wg;case"reauthViaPopup":case"reauthViaRedirect":return zg;default:je(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hg=new br(2e3,1e4);class mn extends mh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hg.get())};e()}}mn.currentPopupAction=null;/**
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
 */const Kg="pendingRedirect",us=new Map;class Gg extends mh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const r=await Qg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qg(n,e){const t=Yg(e),r=Xg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Jg(n,e){us.set(n._key(),e)}function Xg(n){return nt(n._redirectPersistence)}function Yg(n){return ls(Kg,n.config.apiKey,n.name)}async function Zg(n,e,t=!1){if(xe(n.app))return Promise.reject(it(n));const r=en(n),s=$g(r,e),a=await new Gg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const e_=10*60*1e3;class t_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gh(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(We(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e_&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(e))}saveEventToCache(e){this.cachedEventUids.add(sl(e)),this.lastProcessedEventTime=Date.now()}}function sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gh(n);default:return!1}}/**
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
 */async function r_(n,e={}){return ft(n,"GET","/v1/projects",e)}/**
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
 */const s_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i_=/^https?/;async function o_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await r_(n);for(const t of e)try{if(a_(t))return}catch{}je(n,"unauthorized-domain")}function a_(n){const e=lo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!i_.test(t))return!1;if(s_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const c_=new br(3e4,6e4);function il(){const n=He().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function l_(n){return new Promise((e,t)=>{var s,i,a;function r(){il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{il(),t(We(n,"network-request-failed"))},timeout:c_.get()})}if((i=(s=He().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=He().gapi)!=null&&a.load)r();else{const c=Ym("iframefcb");return He()[c]=()=>{gapi.load?r():t(We(n,"network-request-failed"))},Zu(`${Xm()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw hs=null,e})}let hs=null;function u_(n){return hs=hs||l_(n),hs}/**
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
 */const h_=new br(5e3,15e3),d_="__/auth/iframe",f_="emulator/auth/iframe",p_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},m_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g_(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Uo(e,f_):`https://${n.config.authDomain}/${d_}`,r={apiKey:e.apiKey,appName:n.name,v:Pn},s=m_.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ir(r).slice(1)}`}async function __(n){const e=await u_(n),t=He().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:g_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=We(n,"network-request-failed"),c=He().setTimeout(()=>{i(a)},h_.get());function u(){He().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const y_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},v_=500,E_=600,T_="_blank",w_="http://localhost";class ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I_(n,e,t,r=v_,s=E_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...y_,width:r.toString(),height:s.toString(),top:i,left:a},d=Se().toLowerCase();t&&(c=Hu(d)?T_:t),zu(d)&&(e=e||w_,u.scrollbars="yes");const m=Object.entries(u).reduce((w,[A,C])=>`${w}${A}=${C},`,"");if($m(d)&&c!=="_self")return A_(e||"",c),new ol(null);const f=window.open(e||"",c,m);U(f,n,"popup-blocked");try{f.focus()}catch{}return new ol(f)}function A_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const b_="__/auth/handler",R_="emulator/auth/handler",S_=encodeURIComponent("fac");async function al(n,e,t,r,s,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pn,eventId:s};if(e instanceof nh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",up(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,f]of Object.entries({}))a[m]=f}if(e instanceof Sr){const m=e.getScopes().filter(f=>f!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${S_}=${encodeURIComponent(u)}`:"";return`${C_(n)}?${Ir(c).slice(1)}${d}`}function C_({config:n}){return n.emulator?Uo(n,R_):`https://${n.authDomain}/${b_}`}/**
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
 */const Hi="webStorageSupport";class P_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lh,this._completeRedirectFn=Zg,this._overrideRedirectResult=Jg}async _openPopup(e,t,r,s){var a;lt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await al(e,t,r,lo(),s);return I_(e,i,zo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await al(e,t,r,lo(),s);return Vg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await __(e),r=new t_(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hi,{type:Hi},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Hi];i!==void 0&&t(!!i),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=o_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xu()||Wu()||jo()}}const k_=P_;var cl="@firebase/auth",ll="1.13.2";/**
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
 */class N_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function D_(n){In(new Qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yu(n)},d=new Gm(r,s,i,u);return sg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),In(new Qt("auth-internal",e=>{const t=en(e.getProvider("auth").getImmediate());return(r=>new N_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(cl,ll,V_(n)),Ct(cl,ll,"esm2020")}/**
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
 */const x_=5*60,O_=Cu("authIdTokenMaxAge")||x_;let ul=null;const L_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>O_)return;const s=t==null?void 0:t.token;ul!==s&&(ul=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function M_(n=Du()){const e=Mo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rg(n,{popupRedirectResolver:k_,persistence:[jg,Pg,lh]}),r=Cu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=L_(i.toString());Ag(t,a,()=>a(t.currentUser)),Ig(t,c=>a(c))}}const s=Ru("auth");return s&&ig(t,`http://${s}`),t}function F_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Qm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",F_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});D_("Browser");var U_="firebase",B_="12.14.0";/**
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
 */Ct(U_,B_,"app");var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pt,_h;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function _(){}_.prototype=g.prototype,T.F=g.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(v,E,b){for(var y=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)y[ue-2]=arguments[ue];return g.prototype[E].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,_){_||(_=0);const v=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)v[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)v[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=T.g[0],_=T.g[1],E=T.g[2];let b=T.g[3],y;y=g+(b^_&(E^b))+v[0]+3614090360&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+v[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+v[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+v[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+v[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+v[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+v[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+v[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+v[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+v[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+v[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+v[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+v[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+v[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+v[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+v[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^b&(_^E))+v[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+v[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+v[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+v[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+v[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+v[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+v[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+v[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+v[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+v[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+v[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+v[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+v[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+v[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+v[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+v[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^b)+v[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+v[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+v[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+v[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+v[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+v[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+v[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+v[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+v[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+v[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+v[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+v[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+v[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+v[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+v[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+v[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~b))+v[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+v[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+v[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+v[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+v[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+v[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+v[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+v[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+v[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+v[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+v[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+v[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+v[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+v[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+v[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.v=function(T,g){g===void 0&&(g=T.length);const _=g-this.blockSize,v=this.C;let E=this.h,b=0;for(;b<g;){if(E==0)for(;b<=_;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<g;)if(v[E++]=T.charCodeAt(b++),E==this.blockSize){s(this,v),E=0;break}}else for(;b<g;)if(v[E++]=T[b++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,_=0;_<4;++_)for(let v=0;v<32;v+=8)T[g++]=this.g[_]>>>v&255;return T};function i(T,g){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=g(T)}function a(T,g){this.h=g;const _=[];let v=!0;for(let E=T.length-1;E>=0;E--){const b=T[E]|0;v&&b==g||(_[E]=b,v=!1)}this.g=_}var c={};function u(T){return-128<=T&&T<128?i(T,function(g){return new a([g|0],g<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return N(d(-T));const g=[];let _=1;for(let v=0;T>=_;v++)g[v]=T/_|0,_*=4294967296;return new a(g,0)}function m(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return N(m(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let v=f;for(let b=0;b<T.length;b+=8){var E=Math.min(8,T.length-b);const y=parseInt(T.substring(b,b+E),g);E<8?(E=d(Math.pow(g,E)),v=v.j(E).add(d(y))):(v=v.j(_),v=v.add(d(y)))}return v}var f=u(0),w=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();let T=0,g=1;for(let _=0;_<this.g.length;_++){const v=this.i(_);T+=(v>=0?v:4294967296+v)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(D(this))return"-"+N(this).toString(T);const g=d(Math.pow(T,6));var _=this;let v="";for(;;){const E=te(_,g).g;_=O(_,E.j(g));let b=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=E,C(_))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=O(this,T),D(T)?-1:C(T)?0:1};function N(T){const g=T.g.length,_=[];for(let v=0;v<g;v++)_[v]=~T.g[v];return new a(_,~T.h).add(w)}n.abs=function(){return D(this)?N(this):this},n.add=function(T){const g=Math.max(this.g.length,T.g.length),_=[];let v=0;for(let E=0;E<=g;E++){let b=v+(this.i(E)&65535)+(T.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=y>>>16,b&=65535,y&=65535,_[E]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(T,g){return T.add(N(g))}n.j=function(T){if(C(this)||C(T))return f;if(D(this))return D(T)?N(this).j(N(T)):N(N(this).j(T));if(D(T))return N(this.j(N(T)));if(this.l(A)<0&&T.l(A)<0)return d(this.m()*T.m());const g=this.g.length+T.g.length,_=[];for(var v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<T.g.length;E++){const b=this.i(v)>>>16,y=this.i(v)&65535,ue=T.i(E)>>>16,G=T.i(E)&65535;_[2*v+2*E]+=y*G,L(_,2*v+2*E),_[2*v+2*E+1]+=b*G,L(_,2*v+2*E+1),_[2*v+2*E+1]+=y*ue,L(_,2*v+2*E+1),_[2*v+2*E+2]+=b*ue,L(_,2*v+2*E+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new a(_,0)};function L(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function q(T,g){this.g=T,this.h=g}function te(T,g){if(C(g))throw Error("division by zero");if(C(T))return new q(f,f);if(D(T))return g=te(N(T),g),new q(N(g.g),N(g.h));if(D(g))return g=te(T,N(g)),new q(N(g.g),g.h);if(T.g.length>30){if(D(T)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var _=w,v=g;v.l(T)<=0;)_=ee(_),v=ee(v);var E=oe(_,1),b=oe(v,1);for(v=oe(v,2),_=oe(_,2);!C(v);){var y=b.add(v);y.l(T)<=0&&(E=E.add(_),b=y),v=oe(v,1),_=oe(_,1)}return g=O(T,E.j(g)),new q(E,g)}for(E=f;T.l(g)>=0;){for(_=Math.max(1,Math.floor(T.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=d(_),y=b.j(g);D(y)||y.l(T)>0;)_-=v,b=d(_),y=b.j(g);C(b)&&(b=w),E=E.add(b),T=O(T,y)}return new q(E,T)}n.B=function(T){return te(this,T).h},n.and=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)&T.i(v);return new a(_,this.h&T.h)},n.or=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)|T.i(v);return new a(_,this.h|T.h)},n.xor=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)^T.i(v);return new a(_,this.h^T.h)};function ee(T){const g=T.g.length+1,_=[];for(let v=0;v<g;v++)_[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(_,T.h)}function oe(T,g){const _=g>>5;g%=32;const v=T.g.length-_,E=[];for(let b=0;b<v;b++)E[b]=g>0?T.i(b+_)>>>g|T.i(b+_+1)<<32-g:T.i(b+_);return new a(E,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,_h=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Pt=a}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yh,tr,vh,ds,fo,Eh,Th,wh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zr=="object"&&Zr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break e;h=h[R]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function m(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function f(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,R,S){for(var V=Array(arguments.length-2),z=2;z<arguments.length;z++)V[z-2]=arguments[z];return l.prototype[R].apply(p,V)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function C(o,l){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=o.length||0;const S=R.length||0;o.length=h+S;for(let V=0;V<S;V++)o[h+V]=R[V]}else o.push(R)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function N(o){a.setTimeout(()=>{throw o},0)}function O(){var o=T;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class L{constructor(){this.h=this.g=null}add(l,h){const p=q.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var q=new D(()=>new te,o=>o.reset());class te{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,oe=!1,T=new L,g=()=>{const o=Promise.resolve(void 0);ee=()=>{o.then(_)}};function _(){for(var o;o=O();){try{o.h.call(o.g)}catch(h){N(h)}var l=q;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}oe=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function ue(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}f(ue,E),ue.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var G="closure_listenable_"+(Math.random()*1e6|0),Ne=0;function Mr(o,l,h,p,R){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++Ne,this.da=this.fa=!1}function Me(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function on(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function fi(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Ia(o){const l={};for(const h in o)l[h]=o[h];return l}const Aa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ba(o,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let S=0;S<Aa.length;S++)h=Aa[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Fr(o){this.src=o,this.g={},this.h=0}Fr.prototype.add=function(o,l,h,p,R){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const V=mi(o,l,p,R);return V>-1?(l=o[V],h||(l.fa=!1)):(l=new Mr(l,this.src,S,!!p,R),l.fa=h,o.push(l)),l};function pi(o,l){const h=l.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,l,void 0),S;(S=R>=0)&&Array.prototype.splice.call(p,R,1),S&&(Me(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function mi(o,l,h,p){for(let R=0;R<o.length;++R){const S=o[R];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return R}return-1}var gi="closure_lm_"+(Math.random()*1e6|0),_i={};function Ra(o,l,h,p,R){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Ra(o,l[S],h,p,R);return null}return h=Pa(h),o&&o[G]?o.J(l,h,c(p)?!!p.capture:!1,R):Zd(o,l,h,!1,p,R)}function Zd(o,l,h,p,R,S){if(!l)throw Error("Invalid event type");const V=c(R)?!!R.capture:!!R;let z=vi(o);if(z||(o[gi]=z=new Fr(o)),h=z.add(l,h,p,V,S),h.proxy)return h;if(p=ef(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)b||(R=V),R===void 0&&(R=!1),o.addEventListener(l.toString(),p,R);else if(o.attachEvent)o.attachEvent(Ca(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ef(){function o(h){return l.call(o.src,o.listener,h)}const l=tf;return o}function Sa(o,l,h,p,R){if(Array.isArray(l))for(var S=0;S<l.length;S++)Sa(o,l[S],h,p,R);else p=c(p)?!!p.capture:!!p,h=Pa(h),o&&o[G]?(o=o.i,S=String(l).toString(),S in o.g&&(l=o.g[S],h=mi(l,h,p,R),h>-1&&(Me(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[S],o.h--)))):o&&(o=vi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=mi(l,h,p,R)),(h=o>-1?l[o]:null)&&yi(h))}function yi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[G])pi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Ca(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=vi(l))?(pi(h,o),h.h==0&&(h.src=null,l[gi]=null)):Me(o)}}}function Ca(o){return o in _i?_i[o]:_i[o]="on"+o}function tf(o,l){if(o.da)o=!0;else{l=new ue(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&yi(o),o=h.call(p,l)}return o}function vi(o){return o=o[gi],o instanceof Fr?o:null}var Ei="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pa(o){return typeof o=="function"?o:(o[Ei]||(o[Ei]=function(l){return o.handleEvent(l)}),o[Ei])}function Ie(){v.call(this),this.i=new Fr(this),this.M=this,this.G=null}f(Ie,v),Ie.prototype[G]=!0,Ie.prototype.removeEventListener=function(o,l,h,p){Sa(this,o,l,h,p)};function Ce(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var R=l;l=new E(p,o),ba(l,R)}R=!0;let S,V;if(h)for(V=h.length-1;V>=0;V--)S=l.g=h[V],R=Ur(S,p,!0,l)&&R;if(S=l.g=o,R=Ur(S,p,!0,l)&&R,R=Ur(S,p,!1,l)&&R,h)for(V=0;V<h.length;V++)S=l.g=h[V],R=Ur(S,p,!1,l)&&R}Ie.prototype.N=function(){if(Ie.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)Me(h[p]);delete o.g[l],o.h--}}this.G=null},Ie.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Ie.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function Ur(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let R=!0;for(let S=0;S<l.length;++S){const V=l[S];if(V&&!V.da&&V.capture==h){const z=V.listener,pe=V.ha||V.src;V.fa&&pi(o.i,V),R=z.call(pe,p)!==!1&&R}}return R&&!p.defaultPrevented}function nf(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function ka(o){o.g=nf(()=>{o.g=null,o.i&&(o.i=!1,ka(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class rf extends v{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ka(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function On(o){v.call(this),this.h=o,this.g={}}f(On,v);var Na=[];function Va(o){on(o.g,function(l,h){this.g.hasOwnProperty(h)&&yi(l)},o),o.g={}}On.prototype.N=function(){On.Z.N.call(this),Va(this)},On.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ti=a.JSON.stringify,sf=a.JSON.parse,of=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Da(){}function xa(){}var Ln={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wi(){E.call(this,"d")}f(wi,E);function Ii(){E.call(this,"c")}f(Ii,E);var Bt={},Oa=null;function Br(){return Oa=Oa||new Ie}Bt.Ia="serverreachability";function La(o){E.call(this,Bt.Ia,o)}f(La,E);function Mn(o){const l=Br();Ce(l,new La(l))}Bt.STAT_EVENT="statevent";function Ma(o,l){E.call(this,Bt.STAT_EVENT,o),this.stat=l}f(Ma,E);function Pe(o){const l=Br();Ce(l,new Ma(l,o))}Bt.Ja="timingevent";function Fa(o,l){E.call(this,Bt.Ja,o),this.size=l}f(Fa,E);function Fn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Un(){this.g=!0}Un.prototype.ua=function(){this.g=!1};function af(o,l,h,p,R,S){o.info(function(){if(o.g)if(S){var V="",z=S.split("&");for(let Y=0;Y<z.length;Y++){var pe=z[Y].split("=");if(pe.length>1){const ye=pe[0];pe=pe[1];const qe=ye.split("_");V=qe.length>=2&&qe[1]=="type"?V+(ye+"="+pe+"&"):V+(ye+"=redacted&")}}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+V})}function cf(o,l,h,p,R,S,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+S+" "+V})}function an(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+uf(o,h)+(p?" "+p:"")})}function lf(o,l){o.info(function(){return"TIMEOUT: "+l})}Un.prototype.info=function(){};function uf(o,l){if(!o.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return Ti(S)}catch{return l}}var jr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ua={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ba;function Ai(){}f(Ai,Da),Ai.prototype.g=function(){return new XMLHttpRequest},Ba=new Ai;function Bn(o){return encodeURIComponent(String(o))}function hf(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function pt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new On(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ja}function ja(){this.i=null,this.g="",this.h=!1}var $a={},bi={};function Ri(o,l,h){o.M=1,o.A=qr($e(l)),o.u=h,o.R=!0,qa(o,null)}function qa(o,l){o.F=Date.now(),$r(o),o.B=$e(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),nc(h.i,"t",p),o.C=0,h=o.j.L,o.h=new ja,o.g=Ec(o.j,h?l:null,!o.u),o.P>0&&(o.O=new rf(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(Na[0]=R.toString()),R=Na);for(let S=0;S<R.length;S++){const V=Ra(h,R[S],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.J?Ia(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Mn(),af(o.i,o.v,o.B,o.l,o.S,o.u)}pt.prototype.ba=function(o){o=o.target;const l=this.O;l&&_t(o)==3?l.j():this.Y(o)},pt.prototype.Y=function(o){try{if(o==this.g)e:{const z=_t(this.g),pe=this.g.ya(),Y=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||lc(this.g)))){this.K||z!=4||pe==7||(pe==8||Y<=0?Mn(3):Mn(2)),Si(this);var l=this.g.ca();this.X=l;var h=df(this);if(this.o=l==200,cf(this.i,this.v,this.B,this.l,this.S,z,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var S=p;break t}}S=null}if(o=S)an(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ci(this,o);else{this.o=!1,this.m=3,Pe(12),jt(this),jn(this);break e}}if(this.R){o=!0;let ye;for(;!this.K&&this.C<h.length;)if(ye=ff(this,h),ye==bi){z==4&&(this.m=4,Pe(14),o=!1),an(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==$a){this.m=4,Pe(15),an(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else an(this.i,this.l,ye,null),Ci(this,ye);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||h.length!=0||this.h.h||(this.m=1,Pe(16),o=!1),this.o=this.o&&o,!o)an(this.i,this.l,h,"[Invalid Chunked Response]"),jt(this),jn(this);else if(h.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Li(V),V.P=!0,Pe(11))}}else an(this.i,this.l,h,null),Ci(this,h);z==4&&jt(this),this.o&&!this.K&&(z==4?gc(this.j,this):(this.o=!1,$r(this)))}else Sf(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Pe(12)):(this.m=0,Pe(13)),jt(this),jn(this)}}}catch{}finally{}};function df(o){if(!za(o))return o.g.la();const l=lc(o.g);if(l==="")return"";let h="";const p=l.length,R=_t(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return jt(o),jn(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,h+=o.h.i.decode(l[S],{stream:!(R&&S==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function za(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ff(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?bi:(h=Number(l.substring(h,p)),isNaN(h)?$a:(p+=1,p+h>l.length?bi:(l=l.slice(p,p+h),o.C=p+h,l)))}pt.prototype.cancel=function(){this.K=!0,jt(this)};function $r(o){o.T=Date.now()+o.H,Wa(o,o.H)}function Wa(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Fn(d(o.aa,o),l)}function Si(o){o.D&&(a.clearTimeout(o.D),o.D=null)}pt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(lf(this.i,this.B),this.M!=2&&(Mn(),Pe(17)),jt(this),this.m=2,jn(this)):Wa(this,this.T-o)};function jn(o){o.j.I==0||o.K||gc(o.j,o)}function jt(o){Si(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Va(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Ci(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Pi(h.h,o))){if(!o.L&&Pi(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Gr(h),Hr(h);else break e;Oi(h),Pe(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Fn(d(h.Va,h),6e3));Ga(h.h)<=1&&h.ta&&(h.ta=void 0)}else qt(h,11)}else if((o.L||h.g==o)&&Gr(h),!y(l))for(R=h.Ba.g.parse(l),l=0;l<R.length;l++){let Y=R[l];const ye=Y[0];if(!(ye<=h.K))if(h.K=ye,Y=Y[1],h.I==2)if(Y[0]=="c"){h.M=Y[1],h.ba=Y[2];const qe=Y[3];qe!=null&&(h.ka=qe,h.j.info("VER="+h.ka));const zt=Y[4];zt!=null&&(h.za=zt,h.j.info("SVER="+h.za));const yt=Y[5];yt!=null&&typeof yt=="number"&&yt>0&&(p=1.5*yt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const vt=o.g;if(vt){const Jr=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var S=p.h;S.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ki(S,S.h),S.h=null))}if(p.G){const Mi=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Mi&&(p.wa=Mi,ne(p.J,p.G,Mi))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var V=o;if(p.na=vc(p,p.L?p.ba:null,p.W),V.L){Qa(p.h,V);var z=V,pe=p.O;pe&&(z.H=pe),z.D&&(Si(z),$r(z)),p.g=V}else pc(p);h.i.length>0&&Kr(h)}else Y[0]!="stop"&&Y[0]!="close"||qt(h,7);else h.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?qt(h,7):xi(h):Y[0]!="noop"&&h.l&&h.l.qa(Y),h.A=0)}}Mn(4)}catch{}}var pf=class{constructor(o,l){this.g=o,this.map=l}};function Ha(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ka(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ga(o){return o.h?1:o.g?o.g.size:0}function Pi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ki(o,l){o.g?o.g.add(l):o.h=l}function Qa(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ha.prototype.cancel=function(){if(this.i=Ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ja(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return A(o.i)}var Xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mf(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let R,S=null;p>=0?(R=o[h].substring(0,p),S=o[h].substring(p+1)):R=o[h],l(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function mt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof mt?(this.l=o.l,$n(this,o.j),this.o=o.o,this.g=o.g,qn(this,o.u),this.h=o.h,Ni(this,rc(o.i)),this.m=o.m):o&&(l=String(o).match(Xa))?(this.l=!1,$n(this,l[1]||"",!0),this.o=zn(l[2]||""),this.g=zn(l[3]||"",!0),qn(this,l[4]),this.h=zn(l[5]||"",!0),Ni(this,l[6]||"",!0),this.m=zn(l[7]||"")):(this.l=!1,this.i=new Hn(null,this.l))}mt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Wn(l,Ya,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Wn(l,Ya,!0),"@"),o.push(Bn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Wn(h,h.charAt(0)=="/"?yf:_f,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Wn(h,Ef)),o.join("")},mt.prototype.resolve=function(o){const l=$e(this);let h=!!o.j;h?$n(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)qn(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=l.h.lastIndexOf("/");R!=-1&&(p=l.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const S=[];for(let V=0;V<R.length;){const z=R[V++];z=="."?p&&V==R.length&&S.push(""):z==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&V==R.length&&S.push("")):(S.push(z),p=!0)}p=S.join("/")}else p=R}return h?l.h=p:h=o.i.toString()!=="",h?Ni(l,rc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function $e(o){return new mt(o)}function $n(o,l,h){o.j=h?zn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function qn(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Ni(o,l,h){l instanceof Hn?(o.i=l,Tf(o.i,o.l)):(h||(l=Wn(l,vf)),o.i=new Hn(l,o.l))}function ne(o,l,h){o.i.set(l,h)}function qr(o){return ne(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function zn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,gf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ya=/[#\/\?@]/g,_f=/[#\?:]/g,yf=/[#\?]/g,vf=/[#\?@]/g,Ef=/#/g;function Hn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function $t(o){o.g||(o.g=new Map,o.h=0,o.i&&mf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Hn.prototype,n.add=function(o,l){$t(this),this.i=null,o=cn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Za(o,l){$t(o),l=cn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ec(o,l){return $t(o),l=cn(o,l),o.g.has(l)}n.forEach=function(o,l){$t(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(l,R,p,this)},this)},this)};function tc(o,l){$t(o);let h=[];if(typeof l=="string")ec(o,l)&&(h=h.concat(o.g.get(cn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return $t(this),this.i=null,o=cn(this,o),ec(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=tc(this,o),o.length>0?String(o[0]):l):l};function nc(o,l,h){Za(o,l),h.length>0&&(o.i=null,o.g.set(cn(o,l),A(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const R=Bn(h);h=tc(this,h);for(let S=0;S<h.length;S++){let V=R;h[S]!==""&&(V+="="+Bn(h[S])),o.push(V)}}return this.i=o.join("&")};function rc(o){const l=new Hn;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function cn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Tf(o,l){l&&!o.j&&($t(o),o.i=null,o.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(Za(this,p),nc(this,R,h))},o)),o.j=l}function wf(o,l){const h=new Un;if(a.Image){const p=new Image;p.onload=m(gt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=m(gt,h,"TestLoadImage: error",!1,l,p),p.onabort=m(gt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(gt,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function If(o,l){const h=new Un,p=new AbortController,R=setTimeout(()=>{p.abort(),gt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(R),S.ok?gt(h,"TestPingServer: ok",!0,l):gt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),gt(h,"TestPingServer: error",!1,l)})}function gt(o,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function Af(){this.g=new of}function Vi(o){this.i=o.Sb||null,this.h=o.ab||!1}f(Vi,Da),Vi.prototype.g=function(){return new zr(this.i,this.h)};function zr(o,l){Ie.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(zr,Ie),n=zr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Gn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function sc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Kn(this):Gn(this),this.readyState==3&&sc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Kn(this))},n.Na=function(o){this.g&&(this.response=o,Kn(this))},n.ga=function(){this.g&&Kn(this)};function Kn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Gn(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Gn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ic(o){let l="";return on(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Di(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ic(h),typeof o=="string"?h!=null&&Bn(h):ne(o,l,h))}function ae(o){Ie.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(ae,Ie);var bf=/^https?$/i,Rf=["POST","PUT"];n=ae.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ba.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){oc(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Rf,l,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of h)this.g.setRequestHeader(S,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){oc(this,S)}};function oc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,ac(o),Wr(o)}function ac(o){o.A||(o.A=!0,Ce(o,"complete"),Ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ce(this,"complete"),Ce(this,"abort"),Wr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wr(this,!0)),ae.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?cc(this):this.Xa())},n.Xa=function(){cc(this)};function cc(o){if(o.h&&typeof i<"u"){if(o.v&&_t(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ce(o,"readystatechange"),_t(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=S===0){let V=String(o.D).match(Xa)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!bf.test(V?V.toLowerCase():"")}h=p}if(h)Ce(o,"complete"),Ce(o,"success");else{o.o=6;try{var R=_t(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",ac(o)}}finally{Wr(o)}}}}function Wr(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||Ce(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function _t(o){return o.g?o.g.readyState:0}n.ca=function(){try{return _t(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),sf(l)}};function lc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sf(o){const l={};o=(o.g&&_t(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=hf(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[R]||[];l[R]=S,S.push(h)}fi(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function uc(o){this.za=0,this.i=[],this.j=new Un,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qn("baseRetryDelayMs",5e3,o),this.Za=Qn("retryDelaySeedMs",1e4,o),this.Ta=Qn("forwardChannelMaxRetries",2,o),this.va=Qn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ha(o&&o.concurrentRequestLimit),this.Ba=new Af,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=uc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Pe(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=vc(this,null,this.W),Kr(this)};function xi(o){if(hc(o),o.I==3){var l=o.V++,h=$e(o.J);if(ne(h,"SID",o.M),ne(h,"RID",l),ne(h,"TYPE","terminate"),Jn(o,h),l=new pt(o,o.j,l),l.M=2,l.A=qr($e(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=Ec(l.j,null),l.g.ea(l.A)),l.F=Date.now(),$r(l)}yc(o)}function Hr(o){o.g&&(Li(o),o.g.cancel(),o.g=null)}function hc(o){Hr(o),o.v&&(a.clearTimeout(o.v),o.v=null),Gr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Kr(o){if(!Ka(o.h)&&!o.m){o.m=!0;var l=o.Ea;ee||g(),oe||(ee(),oe=!0),T.add(l,o),o.D=0}}function Cf(o,l){return Ga(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Fn(d(o.Ea,o,l),_c(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new pt(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Ia(S),ba(S,this.U)):S=this.U),this.u!==null||this.R||(R.J=S,S=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=fc(this,R,l),h=$e(this.J),ne(h,"RID",o),ne(h,"CVER",22),this.G&&ne(h,"X-HTTP-Session-Id",this.G),Jn(this,h),S&&(this.R?l="headers="+Bn(ic(S))+"&"+l:this.u&&Di(h,this.u,S)),ki(this.h,R),this.Ra&&ne(h,"TYPE","init"),this.S?(ne(h,"$req",l),ne(h,"SID","null"),R.U=!0,Ri(R,h,null)):Ri(R,h,l),this.I=2}}else this.I==3&&(o?dc(this,o):this.i.length==0||Ka(this.h)||dc(this))};function dc(o,l){var h;l?h=l.l:h=o.V++;const p=$e(o.J);ne(p,"SID",o.M),ne(p,"RID",h),ne(p,"AID",o.K),Jn(o,p),o.u&&o.o&&Di(p,o.u,o.o),h=new pt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=fc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ki(o.h,h),Ri(h,p,l)}function Jn(o,l){o.H&&on(o.H,function(h,p){ne(l,p,h)}),o.l&&on({},function(h,p){ne(l,p,h)})}function fc(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var R=o.i;let z=-1;for(;;){const pe=["count="+h];z==-1?h>0?(z=R[0].g,pe.push("ofs="+z)):z=0:pe.push("ofs="+z);let Y=!0;for(let ye=0;ye<h;ye++){var S=R[ye].g;const qe=R[ye].map;if(S-=z,S<0)z=Math.max(0,R[ye].g-100),Y=!1;else try{S="req"+S+"_"||"";try{var V=qe instanceof Map?qe:Object.entries(qe);for(const[zt,yt]of V){let vt=yt;c(yt)&&(vt=Ti(yt)),pe.push(S+zt+"="+encodeURIComponent(vt))}}catch(zt){throw pe.push(S+"type="+encodeURIComponent("_badmap")),zt}}catch{p&&p(qe)}}if(Y){V=pe.join("&");break e}}V=void 0}return o=o.i.splice(0,h),l.G=o,V}function pc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ee||g(),oe||(ee(),oe=!0),T.add(l,o),o.A=0}}function Oi(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Fn(d(o.Da,o),_c(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,mc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Fn(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pe(10),Hr(this),mc(this))};function Li(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function mc(o){o.g=new pt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=$e(o.na);ne(l,"RID","rpc"),ne(l,"SID",o.M),ne(l,"AID",o.K),ne(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ne(l,"TO",o.ia),ne(l,"TYPE","xmlhttp"),Jn(o,l),o.u&&o.o&&Di(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=qr($e(l)),h.u=null,h.R=!0,qa(h,o)}n.Va=function(){this.C!=null&&(this.C=null,Hr(this),Oi(this),Pe(19))};function Gr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function gc(o,l){var h=null;if(o.g==l){Gr(o),Li(o),o.g=null;var p=2}else if(Pi(o.h,l))h=l.G,Qa(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var R=o.D;p=Br(),Ce(p,new Fa(p,h)),Kr(o)}else pc(o);else if(R=l.m,R==3||R==0&&l.X>0||!(p==1&&Cf(o,l)||p==2&&Oi(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),R){case 1:qt(o,5);break;case 4:qt(o,10);break;case 3:qt(o,6);break;default:qt(o,2)}}}function _c(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function qt(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const R=!p;p=new mt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$n(p,"https"),qr(p),R?wf(p.toString(),h):If(p.toString(),h)}else Pe(2);o.I=0,o.l&&o.l.pa(l),yc(o),hc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function yc(o){if(o.I=0,o.ja=[],o.l){const l=Ja(o.h);(l.length!=0||o.i.length!=0)&&(C(o.ja,l),C(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function vc(o,l,h){var p=h instanceof mt?$e(h):new mt(h);if(p.g!="")l&&(p.g=l+"."+p.g),qn(p,p.u);else{var R=a.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;const S=new mt(null);p&&$n(S,p),l&&(S.g=l),R&&qn(S,R),h&&(S.h=h),p=S}return h=o.G,l=o.wa,h&&l&&ne(p,h,l),ne(p,"VER",o.ka),Jn(o,p),p}function Ec(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ae(new Vi({ab:h})):new ae(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tc(){}n=Tc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qr(){}Qr.prototype.g=function(o,l){return new De(o,l)};function De(o,l){Ie.call(this),this.g=new uc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new ln(this)}f(De,Ie),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){xi(this.g)},De.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Ti(o),o=h);l.i.push(new pf(l.Ya++,o)),l.I==3&&Kr(l)},De.prototype.N=function(){this.g.l=null,delete this.j,xi(this.g),delete this.g,De.Z.N.call(this)};function wc(o){wi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}f(wc,wi);function Ic(){Ii.call(this),this.status=1}f(Ic,Ii);function ln(o){this.g=o}f(ln,Tc),ln.prototype.ra=function(){Ce(this.g,"a")},ln.prototype.qa=function(o){Ce(this.g,new wc(o))},ln.prototype.pa=function(o){Ce(this.g,new Ic)},ln.prototype.oa=function(){Ce(this.g,"b")},Qr.prototype.createWebChannel=Qr.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,wh=function(){return new Qr},Th=function(){return Br()},Eh=Bt,fo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jr.NO_ERROR=0,jr.TIMEOUT=8,jr.HTTP_ERROR=6,ds=jr,Ua.COMPLETE="complete",vh=Ua,xa.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",Ie.prototype.listen=Ie.prototype.J,tr=xa,ae.prototype.listenOnce=ae.prototype.K,ae.prototype.getLastError=ae.prototype.Ha,ae.prototype.getLastErrorCode=ae.prototype.ya,ae.prototype.getStatus=ae.prototype.ca,ae.prototype.getResponseJson=ae.prototype.La,ae.prototype.getResponseText=ae.prototype.la,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Fa,yh=ae}).apply(typeof Zr<"u"?Zr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let Nn="12.14.0";function j_(n){Nn=n}/**
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
 */const Yt=new Oo("@firebase/firestore");function un(){return Yt.logLevel}function x(n,...e){if(Yt.logLevel<=K.DEBUG){const t=e.map(Ho);Yt.debug(`Firestore (${Nn}): ${n}`,...t)}}function ut(n,...e){if(Yt.logLevel<=K.ERROR){const t=e.map(Ho);Yt.error(`Firestore (${Nn}): ${n}`,...t)}}function Zt(n,...e){if(Yt.logLevel<=K.WARN){const t=e.map(Ho);Yt.warn(`Firestore (${Nn}): ${n}`,...t)}}function Ho(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ih(n,r,t)}function Ih(n,e,t){let r=`FIRESTORE (${Nn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ut(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ih(e,s,r)}function $(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ah{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class q_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class z_{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ot,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Ah(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class W_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class H_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new W_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new dl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function G_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ko{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=G_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function W(n,e){return n<e?-1:n>e?1:0}function po(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Ki(s)===Ki(i)?W(s,i):Ki(s)?1:-1}return W(n.length,e.length)}const Q_=55296,J_=57343;function Ki(n){const e=n.charCodeAt(0);return e>=Q_&&e<=J_}function bn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const fl="__name__";class ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ze.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return W(e.length,t.length)}static compareSegments(e,t){const r=ze.isNumericId(e),s=ze.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ze.extractNumericId(e).compare(ze.extractNumericId(t)):po(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pt.fromString(e.substring(4,e.length-2))}}class re extends ze{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new re(t)}static emptyPath(){return new re([])}}const X_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends ze{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return X_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fl}static keyField(){return new Te([fl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(re.fromString(e))}static fromName(e){return new F(re.fromString(e).popFirst(5))}static empty(){return new F(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new re(e.slice()))}}/**
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
 */function bh(n,e,t){if(!t)throw new M(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Y_(n,e,t,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pl(n){if(!F.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ml(n){if(F.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Rh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Go(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function Nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Go(n);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Pr(n,e){if(!Rh(n))throw new M(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new M(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const gl=-62135596800,_l=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_l);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gl)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_l}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pr(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:fe("string",se._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new se(0,0))}static max(){return new j(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pr=-1;function Z_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new Vt(s,F.empty(),e)}function ey(n){return new Vt(n.readTime,n.key,pr)}class Vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vt(j.min(),F.empty(),pr)}static max(){return new Vt(j.max(),F.empty(),pr)}}function ty(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
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
 */const ny="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ry{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==ny)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++c,c===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function sy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xs.ce=-1;/**
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
 */const Qo=-1;function Ys(n){return n==null}function ks(n){return n===0&&1/n==-1/0}function iy(n){return typeof n=="number"&&Number.isInteger(n)&&!ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Sh="";function oy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=yl(e)),e=ay(n.get(t),e);return yl(e)}function ay(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Sh:t+="";break;default:t+=i}}return t}function yl(n){return n+Sh+""}/**
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
 */function vl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ch(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ie{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=s??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ee(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(e){return new El(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class El{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new _e(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ph extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ph("Invalid base64 string: "+i):i}}(e);return new we(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const cy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=cy.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
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
 */const kh="server_timestamp",Nh="__type__",Vh="__previous_value__",Dh="__local_write_time__";function Jo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Nh])==null?void 0:r.stringValue)===kh}function Zs(n){const e=n.mapValue.fields[Vh];return Jo(e)?Zs(e):e}function mr(n){const e=Dt(n.mapValue.fields[Dh].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class ly{constructor(e,t,r,s,i,a,c,u,d,m,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=f}}const Ns="(default)";class gr{constructor(e,t){this.projectId=e,this.database=t||Ns}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database===Ns}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}function uy(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(n.options.projectId,e)}/**
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
 */const xh="__type__",hy="__max__",ts={mapValue:{}},Oh="__vector__",Vs="value";function Ot(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jo(n)?4:fy(n)?9007199254740991:dy(n)?10:11:B(28295,{value:n})}function Xe(n,e){if(n===e)return!0;const t=Ot(n);if(t!==Ot(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mr(n).isEqual(mr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Dt(s.timestampValue),c=Dt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return xt(s.bytesValue).isEqual(xt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ce(s.doubleValue),c=ce(i.doubleValue);return a===c?ks(a)===ks(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return bn(n.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(vl(a)!==vl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Xe(a[u],c[u])))return!1;return!0}(n,e);default:return B(52216,{left:n})}}function _r(n,e){return(n.values||[]).find(t=>Xe(t,e))!==void 0}function Rn(n,e){if(n===e)return 0;const t=Ot(n),r=Ot(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ce(i.integerValue||i.doubleValue),u=ce(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Tl(n.timestampValue,e.timestampValue);case 4:return Tl(mr(n),mr(e));case 5:return po(n.stringValue,e.stringValue);case 6:return function(i,a){const c=xt(i),u=xt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=W(c[d],u[d]);if(m!==0)return m}return W(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=W(ce(i.latitude),ce(a.latitude));return c!==0?c:W(ce(i.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var w,A,C,D;const c=i.fields||{},u=a.fields||{},d=(w=c[Vs])==null?void 0:w.arrayValue,m=(A=u[Vs])==null?void 0:A.arrayValue,f=W(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((D=m==null?void 0:m.values)==null?void 0:D.length)||0);return f!==0?f:wl(d,m)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ts.mapValue&&a===ts.mapValue)return 0;if(i===ts.mapValue)return 1;if(a===ts.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let f=0;f<u.length&&f<m.length;++f){const w=po(u[f],m[f]);if(w!==0)return w;const A=Rn(c[u[f]],d[m[f]]);if(A!==0)return A}return W(u.length,m.length)}(n.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function Tl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=Dt(n),r=Dt(e),s=W(t.seconds,r.seconds);return s!==0?s:W(t.nanos,r.nanos)}function wl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Rn(t[s],r[s]);if(i)return i}return W(t.length,r.length)}function Sn(n){return mo(n)}function mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Dt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=mo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${mo(t.fields[a])}`;return s+"}"}(n.mapValue):B(61005,{value:n})}function fs(n){switch(Ot(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zs(n);return e?16+fs(e):16;case 5:return 2*n.stringValue.length;case 6:return xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return tn(r.fields,(i,a)=>{s+=i.length+fs(a)}),s}(n.mapValue);default:throw B(13486,{value:n})}}function yr(n){return!!n&&"integerValue"in n}function Lh(n){return yr(n)||function(t){return!!t&&"doubleValue"in t}(n)}function Xo(n){return!!n&&"arrayValue"in n}function Il(n){return!!n&&"nullValue"in n}function Al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ps(n){return!!n&&"mapValue"in n}function dy(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[xh])==null?void 0:r.stringValue)===Oh}function ar(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ar(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ar(n.arrayValue.values[t]);return e}return{...n}}function fy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===hy}/**
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
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ar(t)}setAll(e){let t=Te.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ar(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Oe(ar(this.value))}}function Mh(n){const e=[];return tn(n.fields,(t,r)=>{const s=new Te([t]);if(ps(r)){const i=Mh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
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
 */class Re{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,j.min(),j.min(),j.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,j.min(),j.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,j.min(),j.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ds{constructor(e,t){this.position=e,this.inclusive=t}}function bl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=Rn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function py(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Fh{}class me extends Fh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gy(e,t,r):t==="array-contains"?new vy(e,r):t==="in"?new Ey(e,r):t==="not-in"?new Ty(e,r):t==="array-contains-any"?new wy(e,r):new me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _y(e,r):new yy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Rn(t,this.value)):t!==null&&Ot(this.value)===Ot(t)&&this.matchesComparison(Rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends Fh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ye(e,t)}matches(e){return Uh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Uh(n){return n.op==="and"}function Bh(n){return my(n)&&Uh(n)}function my(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function go(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+Sn(n.value);if(Bh(n))return n.filters.map(e=>go(e)).join(",");{const e=n.filters.map(t=>go(t)).join(",");return`${n.op}(${e})`}}function jh(n,e){return n instanceof me?function(r,s){return s instanceof me&&r.op===s.op&&r.field.isEqual(s.field)&&Xe(r.value,s.value)}(n,e):n instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&jh(a,s.filters[c]),!0):!1}(n,e):void B(19439)}function $h(n){return n instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${Sn(t.value)}`}(n):n instanceof Ye?function(t){return t.op.toString()+" {"+t.getFilters().map($h).join(" ,")+"}"}(n):"Filter"}class gy extends me{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class _y extends me{constructor(e,t){super(e,"in",t),this.keys=qh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yy extends me{constructor(e,t){super(e,"not-in",t),this.keys=qh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class vy extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xo(t)&&_r(t.arrayValue,this.value)}}class Ey extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_r(this.value.arrayValue,t)}}class Ty extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_r(this.value.arrayValue,t)}}class wy extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
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
 */class Iy{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Sl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Iy(n,e,t,r,s,i,a)}function Yo(n){const e=$(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>go(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ys(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Sn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Sn(r)).join(",")),e.Te=t}return e.Te}function Zo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!py(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rl(n.startAt,e.startAt)&&Rl(n.endAt,e.endAt)}function _o(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ei{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Ay(n,e,t,r,s,i,a,c){return new ei(n,e,t,r,s,i,a,c)}function ea(n){return new ei(n)}function Cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function by(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ry(n){return n.collectionGroup!==null}function cr(n){const e=$(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new _e(Te.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new xs(i,r))}),t.has(Te.keyField().canonicalString())||e.Ie.push(new xs(Te.keyField(),r))}return e.Ie}function Ke(n){const e=$(n);return e.Ee||(e.Ee=Sy(e,cr(n))),e.Ee}function Sy(n,e){if(n.limitType==="F")return Sl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xs(s.field,i)});const t=n.endAt?new Ds(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ds(n.startAt.position,n.startAt.inclusive):null;return Sl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function yo(n,e,t){return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ti(n,e){return Zo(Ke(n),Ke(e))&&n.limitType===e.limitType}function zh(n){return`${Yo(Ke(n))}|lt:${n.limitType}`}function hn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>$h(s)).join(", ")}]`),Ys(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Sn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Sn(s)).join(",")),`Target(${r})`}(Ke(n))}; limitType=${n.limitType})`}function ni(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of cr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=bl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,cr(r),s)||r.endAt&&!function(a,c,u){const d=bl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,cr(r),s))}(n,e)}function Cy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wh(n){return(e,t)=>{let r=!1;for(const s of cr(n)){const i=Py(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Py(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Rn(u,d):B(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class nn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ch(this.inner)}size(){return this.innerSize}}/**
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
 */const ky=new ie(F.comparator);function ht(){return ky}const Hh=new ie(F.comparator);function nr(...n){let e=Hh;for(const t of n)e=e.insert(t.key,t);return e}function Kh(n){let e=Hh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ht(){return lr()}function Gh(){return lr()}function lr(){return new nn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ny=new ie(F.comparator),Vy=new _e(F.comparator);function H(...n){let e=Vy;for(const t of n)e=e.add(t);return e}const Dy=new _e(W);function xy(){return Dy}/**
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
 */function ri(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(e)?"-0":e}}function ta(n){return{integerValue:""+n}}function Oy(n,e){return iy(e)?ta(e):ri(n,e)}/**
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
 */class si{constructor(){this._=void 0}}function Ly(n,e,t){return n instanceof Os?function(s,i){const a={fields:{[Nh]:{stringValue:kh},[Dh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jo(i)&&(i=Zs(i)),i&&(a.fields[Vh]=i),{mapValue:a}}(t,e):n instanceof vr?Jh(n,e):n instanceof Er?Xh(n,e):n instanceof Tr?function(s,i){const a=Qh(s,i),c=Fs(a)+Fs(s.Ae);return yr(a)&&yr(s.Ae)?ta(c):ri(s.serializer,c)}(n,e):n instanceof Ls?function(s,i){return Pl(s,i,Math.min)}(n,e):n instanceof Ms?function(s,i){return Pl(s,i,Math.max)}(n,e):void 0}function My(n,e,t){return n instanceof vr?Jh(n,e):n instanceof Er?Xh(n,e):t}function Qh(n,e){return n instanceof Tr?Lh(e)?e:{integerValue:0}:null}class Os extends si{}class vr extends si{constructor(e){super(),this.elements=e}}function Jh(n,e){const t=Yh(e);for(const r of n.elements)t.some(s=>Xe(s,r))||t.push(r);return{arrayValue:{values:t}}}class Er extends si{constructor(e){super(),this.elements=e}}function Xh(n,e){let t=Yh(e);for(const r of n.elements)t=t.filter(s=>!Xe(s,r));return{arrayValue:{values:t}}}class na extends si{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class Tr extends na{}class Ls extends na{}class Ms extends na{}function Pl(n,e,t){if(!Lh(e))return n.Ae;const r=t(Fs(e),Fs(n.Ae));return yr(e)&&yr(n.Ae)?ta(r):ri(n.serializer,r)}function Fs(n){return ce(n.integerValue||n.doubleValue)}function Yh(n){return Xo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Fy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof vr&&s instanceof vr||r instanceof Er&&s instanceof Er?bn(r.elements,s.elements,Xe):r instanceof Tr&&s instanceof Tr||r instanceof Ls&&s instanceof Ls||r instanceof Ms&&s instanceof Ms?Xe(r.Ae,s.Ae):r instanceof Os&&s instanceof Os}(n.transform,e.transform)}class Uy{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ii{}function Zh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ra(n.key,Ge.none()):new kr(n.key,n.data,Ge.none());{const t=n.data,r=Oe.empty();let s=new _e(Te.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new rn(n.key,r,new Ue(s.toArray()),Ge.none())}}function By(n,e,t){n instanceof kr?function(s,i,a){const c=s.value.clone(),u=Nl(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof rn?function(s,i,a){if(!ms(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Nl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ed(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ur(n,e,t,r){return n instanceof kr?function(i,a,c,u){if(!ms(i.precondition,a))return c;const d=i.value.clone(),m=Vl(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof rn?function(i,a,c,u){if(!ms(i.precondition,a))return c;const d=Vl(i.fieldTransforms,u,a),m=a.data;return m.setAll(ed(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,a,c){return ms(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function jy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Qh(r.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,i))}return t||null}function kl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bn(r,s,(i,a)=>Fy(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class kr extends ii{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rn extends ii{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ed(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Nl(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,My(a,c,t[s]))}return r}function Vl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Ly(i,a,e))}return r}class ra extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $y extends ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&By(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Gh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Zh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&bn(this.mutations,e.mutations,(t,r)=>kl(t,r))&&bn(this.baseMutations,e.baseMutations,(t,r)=>kl(t,r))}}class sa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Ny}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new sa(e,t,r,s)}}/**
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
 */class zy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,Q;function Hy(n){switch(n){case k.OK:return B(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function td(n){if(n===void 0)return ut("GRPC error has no .code"),k.UNKNOWN;switch(n){case he.OK:return k.OK;case he.CANCELLED:return k.CANCELLED;case he.UNKNOWN:return k.UNKNOWN;case he.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case he.INTERNAL:return k.INTERNAL;case he.UNAVAILABLE:return k.UNAVAILABLE;case he.UNAUTHENTICATED:return k.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case he.NOT_FOUND:return k.NOT_FOUND;case he.ALREADY_EXISTS:return k.ALREADY_EXISTS;case he.PERMISSION_DENIED:return k.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case he.ABORTED:return k.ABORTED;case he.OUT_OF_RANGE:return k.OUT_OF_RANGE;case he.UNIMPLEMENTED:return k.UNIMPLEMENTED;case he.DATA_LOSS:return k.DATA_LOSS;default:return B(39323,{code:n})}}(Q=he||(he={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ky(){return new TextEncoder}/**
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
 */const Gy=new Pt([4294967295,4294967295],0);function Dl(n){const e=Ky().encode(n),t=new _h;return t.update(e),new Uint8Array(t.digest())}function xl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pt([t,r],0),new Pt([s,i],0)]}class ia{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new rr(`Invalid padding: ${t}`);if(r<0)throw new rr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new rr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new rr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Pt.fromNumber(r)));return s.compare(Gy)===1&&(s=new Pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Dl(e),[r,s]=xl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ia(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Dl(e),[r,s]=xl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Nr{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Nr(j.min(),s,new ie(W),ht(),H())}}class Vr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vr(r,t,H(),H(),H())}}/**
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
 */class gs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class nd{constructor(e,t){this.targetId=e,this.Ce=t}}class rd{constructor(e,t,r=we.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ol{constructor(e){this.targetId=e,this.ve=0,this.Fe=Ll(),this.Me=we.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=H(),t=H(),r=H();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}}),new Vr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ll()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Xn="WatchChangeAggregator";class Qy{constructor(e){this.Ge=e,this.ze=new Map,this.je=ht(),this.Je=ns(),this.He=ns(),this.Ze=new ie(W)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.ze.get(t);if(r)switch(e.state){case 0:this.nt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Le(e.resumeToken));break;default:B(56790,{state:e.state})}else x(Xn,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.Ce.count,s=this.st(t);if(s){const i=s.target;if(_o(i))if(r===0){const a=new F(i.path);this.et(t,a,Re.newNoDocument(a,j.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=xt(r).toUint8Array()}catch(u){if(u instanceof Ph)return Zt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ia(a,s,i)}catch(u){return Zt(u instanceof rr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ut(e,t,r){return t.Ce.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Pt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.st(a);if(c){if(i.current&&_o(c.target)){const u=new F(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.et(a,u,Re.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=H();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Nr(e,t,this.Ze,this.je,r);return this.je=ht(),this.Je=ns(),this.He=ns(),this.Ze=new ie(W),s}Ye(e,t){const r=this.ze.get(e);if(!r||!this.nt(e))return void x(Xn,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,t.key)?2:0;r.Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,r){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),r&&(this.je=this.je.insert(t,r))):x(Xn,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const r=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(x(Xn,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ol(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new _e(W),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new _e(W),this.Je=this.Je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||x(Xn,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Ol(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ns(){return new ie(F.comparator)}function Ll(){return new ie(F.comparator)}const Jy={asc:"ASCENDING",desc:"DESCENDING"},Xy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yy={and:"AND",or:"OR"};class Zy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vo(n,e){return n.useProto3Json||Ys(e)?e:{value:e}}function Us(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ev(n,e){return Us(n,e.toTimestamp())}function Qe(n){return X(!!n,49232),j.fromTimestamp(function(t){const r=Dt(t);return new se(r.seconds,r.nanos)}(n))}function oa(n,e){return Eo(n,e).canonicalString()}function Eo(n,e){const t=function(s){return new re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function id(n){const e=re.fromString(n);return X(ud(e),10190,{key:e.toString()}),e}function To(n,e){return oa(n.databaseId,e.path)}function Gi(n,e){const t=id(e);if(t.get(1)!==n.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(ad(t))}function od(n,e){return oa(n.databaseId,e)}function tv(n){const e=id(n);return e.length===4?re.emptyPath():ad(e)}function wo(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ad(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ml(n,e,t){return{name:To(n,e),fields:t.value.mapValue.fields}}function nv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(X(m===void 0||typeof m=="string",58123),we.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),we.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?k.UNKNOWN:td(d.code);return new M(m,d.message||"")}(a);t=new rd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gi(n,r.document.name),i=Qe(r.document.updateTime),a=r.document.createTime?Qe(r.document.createTime):j.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new gs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gi(n,r.document),i=r.readTime?Qe(r.readTime):j.min(),a=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new gs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gi(n,r.document),i=r.removedTargetIds||[];t=new gs([],i,s,null)}else{if(!("filter"in e))return B(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Wy(s,i),c=r.targetId;t=new nd(c,a)}}return t}function rv(n,e){let t;if(e instanceof kr)t={update:Ml(n,e.key,e.value)};else if(e instanceof ra)t={delete:To(n,e.key)};else if(e instanceof rn)t={update:Ml(n,e.key,e.data),updateMask:dv(e.fieldMask)};else{if(!(e instanceof $y))return B(16599,{Vt:e.type});t={verify:To(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Os)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Tr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};if(c instanceof Ls)return{fieldPath:a.field.canonicalString(),minimum:c.Ae};if(c instanceof Ms)return{fieldPath:a.field.canonicalString(),maximum:c.Ae};throw B(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ev(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)}(n,e.precondition)),t}function sv(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Qe(s.updateTime):Qe(i);return a.isEqual(j.min())&&(a=Qe(i)),new Uy(a,s.transformResults||[])}(t,e))):[]}function iv(n,e){return{documents:[od(n,e.path)]}}function ov(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=od(n,s);const i=function(d){if(d.length!==0)return ld(Ye.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:dn(w.field),direction:lv(w.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=vo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{dt:t,parent:s}}function av(n){let e=tv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(f){const w=cd(f);return w instanceof Ye&&Bh(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(f){return f.map(w=>function(C){return new xs(fn(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(f){let w;return w=typeof f=="object"?f.value:f,Ys(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(f){const w=!!f.before,A=f.values||[];return new Ds(A,w)}(t.startAt));let d=null;return t.endAt&&(d=function(f){const w=!f.before,A=f.values||[];return new Ds(A,w)}(t.endAt)),Ay(e,s,a,i,c,"F",u,d)}function cv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=fn(t.unaryFilter.field);return me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fn(t.unaryFilter.field);return me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fn(t.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fn(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(n):n.fieldFilter!==void 0?function(t){return me.create(fn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ye.create(t.compositeFilter.filters.map(r=>cd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(t.compositeFilter.op))}(n):B(30097,{filter:n})}function lv(n){return Jy[n]}function uv(n){return Xy[n]}function hv(n){return Yy[n]}function dn(n){return{fieldPath:n.canonicalString()}}function fn(n){return Te.fromServerFormat(n.fieldPath)}function ld(n){return n instanceof me?function(t){if(t.op==="=="){if(Al(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NAN"}};if(Il(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Al(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NOT_NAN"}};if(Il(t.value))return{unaryFilter:{field:dn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(t.field),op:uv(t.op),value:t.value}}}(n):n instanceof Ye?function(t){const r=t.getFilters().map(s=>ld(s));return r.length===1?r[0]:{compositeFilter:{op:hv(t.op),filters:r}}}(n):B(54877,{filter:n})}function dv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ud(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function hd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class rt{constructor(e,t,r,s,i=j.min(),a=j.min(),c=we.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fv{constructor(e){this.gt=e}}function pv(n){const e=av({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
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
 */class mv{constructor(){this.Sn=new gv}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Vt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class gv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(re.comparator)).toArray()}}/**
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
 */const Fl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dd=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(dd,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
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
 */class Lt{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Lt(0)}static _r(){return new Lt(-1)}}/**
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
 */const Ul="LruGarbageCollector",_v=1048576;function Bl([n,e],[t,r]){const s=W(n,t);return s===0?W(e,r):s}class yv{constructor(e){this.hr=e,this.buffer=new _e(Bl),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){x(Ul,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dn(t)?x(Ul,"Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Rr(3e5)})}}class Ev{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Xs.ce);const r=new yv(t);return this.Ar.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Ar.dr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Ar.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Fl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fl):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let r,s,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,a=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,c=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(d=Date.now(),un()<=K.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${f} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function Tv(n,e){return new Ev(n,e)}/**
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
 */class wv{constructor(){this.changes=new nn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Iv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Av{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ur(r.mutation,s,Ue.empty(),se.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){const s=Ht();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=nr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ht();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=ht();const a=lr(),c=function(){return lr()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof rn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),ur(m.mutation,d,m.mutation.getFieldMask(),se.now())):a.set(d.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>c.set(d,new Iv(m,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const r=lr();let s=new ie((a,c)=>a-c),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ue.empty();m=c.applyToLocalView(d,m),r.set(u,m);const f=(s.get(c.batchId)||H()).add(u);s=s.insert(c.batchId,f)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,f=Gh();m.forEach(w=>{if(!i.has(w)){const A=Zh(t.get(w),r.get(w));A!==null&&f.set(w,A),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,f))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return by(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ry(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(Ht());let c=pr,u=i;return a.next(d=>P.forEach(d,(m,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{u=u.insert(m,w)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,H())).next(m=>({batchId:c,changes:Kh(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let s=nr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=nr();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,u=>{const d=function(f,w){return new ei(w,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((f,w)=>{a=a.insert(f,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Re.newInvalidDocument(m)))});let c=nr();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&ur(m.mutation,d,Ue.empty(),se.now()),ni(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class bv{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return P.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,function(s){return{name:s.name,query:pv(s.bundledQuery),readTime:Qe(s.readTime)}}(t)),P.resolve()}}/**
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
 */class Rv{constructor(){this.overlays=new ie(F.comparator),this.Br=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ht();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Br.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Br.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Ht(),i=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Ht(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Ht(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return P.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Br.get(s.largestBatchId).delete(r.key);this.Br.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zy(t,r));let i=this.Br.get(t);i===void 0&&(i=H(),this.Br.set(t,i)),this.Br.set(t,i.add(r.key))}}/**
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
 */class Sv{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class aa{constructor(){this.Lr=new _e(ve.kr),this.qr=new _e(ve.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const r=new ve(e,t);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.$r(new ve(e,t))}Wr(e,t){e.forEach(r=>this.removeReference(r,t))}Qr(e){const t=new F(new re([])),r=new ve(t,e),s=new ve(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.$r(a),i.push(a.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new F(new re([])),r=new ve(t,e),s=new ve(t,e+1);let i=H();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ve(e,0),r=this.Lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return F.comparator(e.key,t.key)||W(e.jr,t.jr)}static Kr(e,t){return W(e.jr,t.jr)||F.comparator(e.key,t.key)}}/**
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
 */class Cv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new _e(ve.kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qy(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Jr=this.Jr.add(new ve(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Zr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Qo:this.Xn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],a=>{const c=this.Hr(a.jr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(W);return t.forEach(s=>{const i=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],c=>{r=r.add(c.jr)})}),P.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new ve(new F(i),0);let c=new _e(W);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.jr)),!0)},a),P.resolve(this.Xr(c))}Xr(e){const t=[];return e.forEach(r=>{const s=this.Hr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){X(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return P.forEach(t.mutations,s=>{const i=new ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,t){const r=new ve(t,0),s=this.Jr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Pv{constructor(e){this.ei=e,this.docs=function(){return new ie(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ei(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=ht();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ht();const a=t.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ty(ey(m),r)<=0||(s.has(m.key)||ni(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ti(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new kv(this)}getSize(e){return P.resolve(this.size)}}class kv extends wv{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
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
 */class Nv{constructor(e){this.persistence=e,this.ni=new nn(t=>Yo(t),Zo),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.ri=0,this.ii=new aa,this.targetCount=0,this.si=Lt.sr()}forEachTarget(e,t){return this.ni.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ri&&(this.ri=t),P.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new Lt(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.cr(t),P.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ni.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ni.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ni.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.ii.Ur(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.ii.Wr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ii.zr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.ii.containsKey(t))}}/**
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
 */class fd{constructor(e,t){this.oi={},this.overlays={},this._i=new Xs(0),this.ai=!1,this.ai=!0,this.ui=new Sv,this.referenceDelegate=e(this),this.ci=new Nv(this),this.indexManager=new mv,this.remoteDocumentCache=function(s){return new Pv(s)}(r=>this.referenceDelegate.li(r)),this.serializer=new fv(t),this.hi=new bv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.oi[e.toKey()];return r||(r=new Cv(t,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new Vv(this._i.next());return this.referenceDelegate.Pi(),r(s).next(i=>this.referenceDelegate.Ti(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return P.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,t)))}}class Vv extends ry{constructor(e){super(),this.currentSequenceNumber=e}}class ca{constructor(e){this.persistence=e,this.Ei=new aa,this.Ri=null}static Ai(e){return new ca(e)}get Vi(){if(this.Ri)return this.Ri;throw B(60996)}addReference(e,t,r){return this.Ei.addReference(r,t),this.Vi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ei.removeReference(r,t),this.Vi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(s=>this.Vi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Vi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Vi,r=>{const s=F.fromPath(r);return this.di(e,s).next(i=>{i||t.removeEntry(s,j.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(r=>{r?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return P.or([()=>P.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Bs{constructor(e,t){this.persistence=e,this.mi=new nn(r=>oy(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Tv(this,t)}static Ai(e,t){return new Bs(e,t)}Pi(){}Ti(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}gr(e){let t=0;return this.dr(e,r=>{t++}).next(()=>t)}dr(e,t){return P.forEach(this.mi,(r,s)=>this.yr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ti(e,a=>this.yr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,j.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.mi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),P.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fs(e.data.value)),t}yr(e,t,r){return P.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.mi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class la{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ps=r,this.Ts=s}static Is(e,t){let r=H(),s=H();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new la(e,t.fromCache,r,s)}}/**
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
 */class Dv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xv{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return sp()?8:sy(Se())>0?6:4}()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.fs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.gs(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Dv;return this.ps(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.ys(e,t,a,c.size)})}).next(()=>i.result)}ys(e,t,r,s){return r.documentReadCount<this.As?(un()<=K.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",hn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),P.resolve()):(un()<=K.DEBUG&&x("QueryEngine","Query:",hn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Vs*s?(un()<=K.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",hn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):P.resolve())}fs(e,t){if(Cl(t))return P.resolve(null);let r=Ke(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=yo(t,null,"F"),r=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=H(...i);return this.ds.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ws(t,c);return this.Ss(t,d,a,u.readTime)?this.fs(e,yo(t,null,"F")):this.bs(e,d,t,u)}))})))}gs(e,t,r,s){return Cl(t)||s.isEqual(j.min())?P.resolve(null):this.ds.getDocuments(e,r).next(i=>{const a=this.ws(t,i);return this.Ss(t,a,r,s)?P.resolve(null):(un()<=K.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hn(t)),this.bs(e,a,t,Z_(s,pr)).next(c=>c))})}ws(e,t){let r=new _e(Wh(e));return t.forEach((s,i)=>{ni(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ps(e,t,r){return un()<=K.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",hn(t)),this.ds.getDocumentsMatchingQuery(e,t,Vt.min(),r)}bs(e,t,r,s){return this.ds.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ua="LocalStore",Ov=3e8;class Lv{constructor(e,t,r,s){this.persistence=e,this.Ds=t,this.serializer=s,this.Cs=new ie(W),this.vs=new nn(i=>Yo(i),Zo),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Av(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}function Mv(n,e,t,r){return new Lv(n,e,t,r)}async function pd(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.xs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=H();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Os:d,removedBatchIds:a,addedBatchIds:c}))})})}function Fv(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ms.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const f=d.batch,w=f.keys();let A=P.resolve();return w.forEach(C=>{A=A.next(()=>m.getEntry(u,C)).next(D=>{const N=d.docVersions.get(C);X(N!==null,48541),D.version.compareTo(N)<0&&(f.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=H();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function md(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ci.getLastRemoteSnapshotVersion(t))}function Uv(n,e){const t=$(n),r=e.snapshotVersion;let s=t.Cs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ms.newChangeBuffer({trackRemovals:!0});s=t.Cs;const c=[];e.targetChanges.forEach((m,f)=>{const w=s.get(f);if(!w)return;c.push(t.ci.removeMatchingKeys(i,m.removedDocuments,f).next(()=>t.ci.addMatchingKeys(i,m.addedDocuments,f)));let A=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?A=A.withResumeToken(we.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),s=s.insert(f,A),function(D,N,O){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Ov?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(w,A,m)&&c.push(t.ci.updateTargetData(i,A))});let u=ht(),d=H();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(Bv(i,a,e.documentUpdates).next(m=>{u=m.Ns,d=m.Bs})),!r.isEqual(j.min())){const m=t.ci.getLastRemoteSnapshotVersion(i).next(f=>t.ci.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return P.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Cs=s,i))}function Bv(n,e,t){let r=H(),s=H();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ht();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):x(ua,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ns:a,Bs:s}})}function jv(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $v(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ci.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.ci.allocateTargetId(r).next(a=>(s=new rt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.ci.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Cs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Cs=t.Cs.insert(r.targetId,r),t.vs.set(e,r.targetId)),r})}async function Io(n,e,t){const r=$(n),s=r.Cs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Dn(a))throw a;x(ua,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Cs=r.Cs.remove(e),r.vs.delete(s.target)}function jl(n,e,t){const r=$(n);let s=j.min(),i=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const f=$(u),w=f.vs.get(m);return w!==void 0?P.resolve(f.Cs.get(w)):f.ci.getTargetData(d,m)}(r,a,Ke(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Ds.getDocumentsMatchingQuery(a,e,t?s:j.min(),t?i:H())).next(c=>(qv(r,Cy(e),c),{documents:c,Ls:i})))}function qv(n,e,t){let r=n.Fs.get(e)||j.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Fs.set(e,r)}class $l{constructor(){this.activeTargetIds=xy()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zv{constructor(){this.Co=new $l,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,r){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new $l,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Wv{Fo(e){}shutdown(){}}/**
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
 */const ql="ConnectivityMonitor";class zl{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){x(ql,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){x(ql,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rs=null;function Ao(){return rs===null?rs=function(){return 268435456+Math.round(2147483648*Math.random())}():rs++,"0x"+rs.toString(16)}/**
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
 */const Qi="RestConnection",Hv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Kv{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Uo=this.databaseId.database===Ns?`project_id=${r}`:`project_id=${r}&database_id=${s}`}$o(e,t,r,s,i){const a=Ao(),c=this.Wo(e,t.toUriEncodedString());x(Qi,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(u,s,i);const{host:d}=new URL(c),m=Ar(d);return this.Go(e,c,u,r,m).then(f=>(x(Qi,`Received RPC '${e}' ${a}: `,f),f),f=>{throw Zt(Qi,`RPC '${e}' ${a} failed with error: `,f,"url: ",c,"request:",r),f})}zo(e,t,r,s,i,a){return this.$o(e,t,r,s,i)}Qo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Wo(e,t){const r=Hv[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Gv{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */const Ae="WebChannelConnection",Yn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class vn extends Kv{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!vn.u_){const e=Th();Yn(e,Eh.STAT_EVENT,t=>{t.stat===fo.PROXY?x(Ae,"STAT_EVENT: detected buffering proxy"):t.stat===fo.NOPROXY&&x(Ae,"STAT_EVENT: detected no buffering proxy")}),vn.u_=!0}}Go(e,t,r,s,i){const a=Ao();return new Promise((c,u)=>{const d=new yh;d.setWithCredentials(!0),d.listenOnce(vh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ds.NO_ERROR:const f=d.getResponseJson();x(Ae,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(f)),c(f);break;case ds.TIMEOUT:x(Ae,`RPC '${e}' ${a} timed out`),u(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const w=d.getStatus();if(x(Ae,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const D=function(O){const L=O.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(L)>=0?L:k.UNKNOWN}(C.status);u(new M(D,C.message))}else u(new M(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new M(k.UNAVAILABLE,"Connection failed."));break;default:B(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{x(Ae,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);x(Ae,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)})}P_(e,t,r){const s=Ao(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Qo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");x(Ae,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=a.createWebChannel(d,c);this.T_(m);let f=!1,w=!1;const A=new Gv({jo:C=>{w?x(Ae,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(f||(x(Ae,`Opening RPC '${e}' stream ${s} transport.`),m.open(),f=!0),x(Ae,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Jo:()=>m.close()});return Yn(m,tr.EventType.OPEN,()=>{w||(x(Ae,`RPC '${e}' stream ${s} transport opened.`),A.r_())}),Yn(m,tr.EventType.CLOSE,()=>{w||(w=!0,x(Ae,`RPC '${e}' stream ${s} transport closed`),A.s_(),this.I_(m))}),Yn(m,tr.EventType.ERROR,C=>{w||(w=!0,Zt(Ae,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),A.s_(new M(k.UNAVAILABLE,"The operation could not be completed")))}),Yn(m,tr.EventType.MESSAGE,C=>{var D;if(!w){const N=C.data[0];X(!!N,16349);const O=N,L=(O==null?void 0:O.error)||((D=O[0])==null?void 0:D.error);if(L){x(Ae,`RPC '${e}' stream ${s} received error:`,L);const q=L.status;let te=function(T){const g=he[T];if(g!==void 0)return td(g)}(q),ee=L.message;q==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&Zt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),te===void 0&&(te=k.INTERNAL,ee="Unknown error status: "+q+" with message "+L.message),w=!0,A.s_(new M(te,ee)),m.close()}else x(Ae,`RPC '${e}' stream ${s} received:`,N),A.o_(N)}}),vn.a_(),setTimeout(()=>{A.i_()},0),A}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,r){super.Qo(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wh()}}/**
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
 */function Qv(n){return new vn(n)}function Ji(){return typeof document<"u"?document:null}/**
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
 */function oi(n){return new Zy(n,!0)}/**
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
 */vn.u_=!1;class gd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=r,this.R_=s,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wl="PersistentStream";class _d{constructor(e,t,r,s,i,a,c,u){this.Di=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new gd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.Q_(r,s)},r=>{e(()=>{const s=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}Q_(e,t){const r=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return x(Wl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(x(Wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jv extends _d{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=nv(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?Qe(a.readTime):j.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=wo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=_o(u)?{documents:iv(i,u)}:{query:ov(i,u).dt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=sd(i,a.resumeToken);const d=vo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=Us(i,a.snapshotVersion.toTimestamp());const d=vo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=cv(this.serializer,e);r&&(t.labels=r),this.k_(t)}Z_(e){const t={};t.database=wo(this.serializer),t.removeTarget=e,this.k_(t)}}class Xv extends _d{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=sv(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=wo(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>rv(this.serializer,r))};this.k_(t)}}/**
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
 */class Yv{}class Zv extends Yv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.$o(e,Eo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(k.UNKNOWN,i.toString())})}zo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.zo(e,Eo(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(k.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function eE(n,e,t,r){return new Zv(n,e,t,r)}class tE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ut(t),this._a=!1):x("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ze="RemoteStore";class nE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Lt(1e3),this.Aa=new Lt(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(a=>{r.enqueueAndForget(async()=>{sn(this)&&(x(Ze,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.Va.add(4),await Dr(d),d.fa.set("Unknown"),d.Va.delete(4),await ai(d)}(this))})}),this.fa=new tE(r,s)}}async function ai(n){if(sn(n))for(const e of n.da)await e(!0)}async function Dr(n){for(const e of n.da)await e(!1)}function bo(n,e){return n.Ia.get(e)||void 0}function yd(n,e){const t=$(n),r=bo(t,e.targetId);if(r!==void 0&&t.Ta.has(r))return;const s=function(c,u){const d=bo(c,u);d!==void 0&&c.Ea.delete(d);const m=function(w,A){return A%2!=0?w.Aa.next():w.Ra.next()}(c,u);return c.Ia.set(u,m),c.Ea.set(m,u),m}(t,e.targetId);x(Ze,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new rt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ta.set(s,i),pa(t)?fa(t):xn(t).x_()&&da(t,i)}function ha(n,e){const t=$(n),r=xn(t),s=bo(t,e);x(Ze,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ta.delete(s),t.Ia.delete(e),t.Ea.delete(s),r.x_()&&vd(t,s),t.Ta.size===0&&(r.x_()?r.B_():sn(t)&&t.fa.set("Unknown"))}function da(n,e){if(n.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.Ea.get(e.targetId);if(t===void 0)return void x(Ze,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}xn(n).H_(e)}function vd(n,e){n.ga.$e(e),xn(n).Z_(e)}function fa(n){n.ga=new Qy({getRemoteKeysForTarget:e=>{const t=n.Ea.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):H()},Rt:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),xn(n).start(),n.fa.aa()}function pa(n){return sn(n)&&!xn(n).M_()&&n.Ta.size>0}function sn(n){return $(n).Va.size===0}function Ed(n){n.ga=void 0}async function rE(n){n.fa.set("Online")}async function sE(n){n.Ta.forEach((e,t)=>{da(n,e)})}async function iE(n,e){Ed(n),pa(n)?(n.fa.la(e),fa(n)):n.fa.set("Unknown")}async function oE(n,e,t){if(n.fa.set("Online"),e instanceof rd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s.Ta.has(c)){const u=s.Ea.get(c);u!==void 0&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.Ea.delete(c)),s.Ta.delete(c)}s.ga.removeTarget(c)}}(n,e)}catch(r){x(Ze,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await js(n,r)}else if(e instanceof gs?n.ga.Xe(e):e instanceof nd?n.ga.it(e):n.ga.tt(e),!t.isEqual(j.min()))try{const r=await md(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.ga.Pt(a);c.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const f=i.Ta.get(m);f&&i.Ta.set(m,f.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,m)=>{const f=i.Ta.get(d);if(!f)return;i.Ta.set(d,f.withResumeToken(we.EMPTY_BYTE_STRING,f.snapshotVersion)),vd(i,d);const w=new rt(f.target,d,m,f.sequenceNumber);da(i,w)});const u=function(m,f){const w=new Map;f.targetChanges.forEach((C,D)=>{const N=m.Ea.get(D);N!==void 0&&w.set(N,C)});let A=new ie(W);return f.targetMismatches.forEach((C,D)=>{const N=m.Ea.get(C);N!==void 0&&(A=A.insert(N,D))}),new Nr(f.snapshotVersion,w,A,f.documentUpdates,f.resolvedLimboDocuments)}(i,c);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){x(Ze,"Failed to raise snapshot:",r),await js(n,r)}}async function js(n,e,t){if(!Dn(e))throw e;n.Va.add(1),await Dr(n),n.fa.set("Offline"),t||(t=()=>md(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(Ze,"Retrying IndexedDB access"),await t(),n.Va.delete(1),await ai(n)})}function Td(n,e){return e().catch(t=>js(n,t,e))}async function ci(n){const e=$(n),t=Mt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Qo;for(;aE(e);)try{const s=await jv(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,cE(e,s)}catch(s){await js(e,s)}wd(e)&&Id(e)}function aE(n){return sn(n)&&n.Pa.length<10}function cE(n,e){n.Pa.push(e);const t=Mt(n);t.x_()&&t.X_&&t.Y_(e.mutations)}function wd(n){return sn(n)&&!Mt(n).M_()&&n.Pa.length>0}function Id(n){Mt(n).start()}async function lE(n){Mt(n).na()}async function uE(n){const e=Mt(n);for(const t of n.Pa)e.Y_(t.mutations)}async function hE(n,e,t){const r=n.Pa.shift(),s=sa.from(r,e,t);await Td(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ci(n)}async function dE(n,e){e&&Mt(n).X_&&await async function(r,s){if(function(a){return Hy(a)&&a!==k.ABORTED}(s.code)){const i=r.Pa.shift();Mt(r).N_(),await Td(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ci(r)}}(n,e),wd(n)&&Id(n)}async function Hl(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),x(Ze,"RemoteStore received new credentials");const r=sn(t);t.Va.add(3),await Dr(t),r&&t.fa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Va.delete(3),await ai(t)}async function fE(n,e){const t=$(n);e?(t.Va.delete(2),await ai(t)):e||(t.Va.add(2),await Dr(t),t.fa.set("Unknown"))}function xn(n){return n.pa||(n.pa=function(t,r,s){const i=$(t);return i.ia(),new Jv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ho:rE.bind(null,n),Xo:sE.bind(null,n),e_:iE.bind(null,n),J_:oE.bind(null,n)}),n.da.push(async e=>{e?(n.pa.N_(),pa(n)?fa(n):n.fa.set("Unknown")):(await n.pa.stop(),Ed(n))})),n.pa}function Mt(n){return n.ya||(n.ya=function(t,r,s){const i=$(t);return i.ia(),new Xv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ho:()=>Promise.resolve(),Xo:lE.bind(null,n),e_:dE.bind(null,n),ea:uE.bind(null,n),ta:hE.bind(null,n)}),n.da.push(async e=>{e?(n.ya.N_(),await ci(n)):(await n.ya.stop(),n.Pa.length>0&&(x(Ze,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ya}/**
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
 */class ma{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ma(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,e){if(ut("AsyncQueue",`${e}: ${n}`),Dn(n))return new M(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class En{static emptySet(e){return new En(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=nr(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof En)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new En;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Kl{constructor(){this.wa=new ie(F.comparator)}track(e){const t=e.doc.key,r=this.wa.get(t);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(t,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(t):e.type===1&&r.type===2?this.wa=this.wa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):B(63341,{At:e,Sa:r}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Cn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Cn(e,t,En.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pE{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class mE{constructor(){this.queries=Gl(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=Gl(),i.forEach((a,c)=>{for(const u of c.Ca)u.onError(r)})})(this,new M(k.ABORTED,"Firestore shutting down"))}}function Gl(){return new nn(n=>zh(n),ti)}async function Ad(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.va()&&e.Fa()&&(r=2):(i=new pE,r=e.Fa()?0:1);try{switch(r){case 0:i.Da=await t.onListen(s,!0);break;case 1:i.Da=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ga(a,`Initialization of query '${hn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Ca.push(e),e.xa(t.onlineState),i.Da&&e.Oa(i.Da)&&_a(t)}async function bd(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Ca.indexOf(e);a>=0&&(i.Ca.splice(a,1),i.Ca.length===0?s=e.Fa()?0:1:!i.va()&&e.Fa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function gE(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Ca)c.Oa(s)&&(r=!0);a.Da=s}}r&&_a(t)}function _E(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.Ca)i.onError(t);r.queries.delete(e)}function _a(n){n.Ma.forEach(e=>{e.next()})}var Ro,Ql;(Ql=Ro||(Ro={})).Na="default",Ql.Cache="cache";class Rd{constructor(e,t,r){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Cn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;const r=t!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ua(e){e=Cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Ro.Cache}}/**
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
 */class Sd{constructor(e){this.key=e}}class Cd{constructor(e){this.key=e}}class yE{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=H(),this.mutatedKeys=H(),this.ru=Wh(e),this.iu=new En(this.ru)}get su(){return this.eu}ou(e,t){const r=t?t._u:new Kl,s=t?t.iu:this.iu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,f)=>{const w=s.get(m),A=ni(this.query,f)?f:null,C=!!w&&this.mutatedKeys.has(w.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;w&&A?w.data.isEqual(A.data)?C!==D&&(r.track({type:3,doc:A}),N=!0):this.au(w,A)||(r.track({type:2,doc:A}),N=!0,(u&&this.ru(A,u)>0||d&&this.ru(A,d)<0)&&(c=!0)):!w&&A?(r.track({type:0,doc:A}),N=!0):w&&!A&&(r.track({type:1,doc:w}),N=!0,(u||d)&&(c=!0)),N&&(A?(a=a.add(A),i=D?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{iu:a,_u:r,Ss:c,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const a=e._u.ba();a.sort((m,f)=>function(A,C){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{At:N})}};return D(A)-D(C)}(m.type,f.type)||this.ru(m.doc,f.doc)),this.uu(r),s=s??!1;const c=t&&!s?this.cu():[],u=this.nu.size===0&&this.current&&!s?1:0,d=u!==this.tu;return this.tu=u,a.length!==0||d?{snapshot:new Cn(this.query,e.iu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:c}:{lu:c}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new Kl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(t=>this.eu=this.eu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.eu=this.eu.delete(t)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=H(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const t=[];return e.forEach(r=>{this.nu.has(r)||t.push(new Cd(r))}),this.nu.forEach(r=>{e.has(r)||t.push(new Sd(r))}),t}Pu(e){this.eu=e.Ls,this.nu=H();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return Cn.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const ya="SyncEngine";class vE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class EE{constructor(e){this.key=e,this.Iu=!1}}class TE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Eu={},this.Ru=new nn(c=>zh(c),ti),this.Au=new Map,this.Vu=new Set,this.du=new ie(F.comparator),this.mu=new Map,this.fu=new aa,this.gu={},this.pu=new Map,this.yu=Lt._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function wE(n,e,t=!0){const r=xd(n);let s;const i=r.Ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await Pd(r,e,t,!0),s}async function IE(n,e){const t=xd(n);await Pd(t,e,!0,!1)}async function Pd(n,e,t,r){const s=await $v(n.localStore,Ke(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await AE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&yd(n.remoteStore,s),c}async function AE(n,e,t,r,s){n.Su=(f,w,A)=>async function(D,N,O,L){let q=N.view.ou(O);q.Ss&&(q=await jl(D.localStore,N.query,!1).then(({documents:T})=>N.view.ou(T,q)));const te=L&&L.targetChanges.get(N.targetId),ee=L&&L.targetMismatches.get(N.targetId)!=null,oe=N.view.applyChanges(q,D.isPrimaryClient,te,ee);return Xl(D,N.targetId,oe.lu),oe.snapshot}(n,f,w,A);const i=await jl(n.localStore,e,!0),a=new yE(e,i.Ls),c=a.ou(i.documents),u=Vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Xl(n,t,d.lu);const m=new vE(e,t,a);return n.Ru.set(e,m),n.Au.has(t)?n.Au.get(t).push(e):n.Au.set(t,[e]),d.snapshot}async function bE(n,e,t){const r=$(n),s=r.Ru.get(e),i=r.Au.get(s.targetId);if(i.length>1)return r.Au.set(s.targetId,i.filter(a=>!ti(a,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Io(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ha(r.remoteStore,s.targetId),So(r,s.targetId)}).catch(Vn)):(So(r,s.targetId),await Io(r.localStore,s.targetId,!0))}async function RE(n,e){const t=$(n),r=t.Ru.get(e),s=t.Au.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ha(t.remoteStore,r.targetId))}async function SE(n,e,t){const r=xE(n);try{const s=await function(a,c){const u=$(a),d=se.now(),m=c.reduce((A,C)=>A.add(C.key),H());let f,w;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=ht(),D=H();return u.Ms.getEntries(A,m).next(N=>{C=N,C.forEach((O,L)=>{L.isValidDocument()||(D=D.add(O))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(N=>{f=N;const O=[];for(const L of c){const q=jy(L,f.get(L.key).overlayedDocument);q!=null&&O.push(new rn(L.key,q,Mh(q.value.mapValue),Ge.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,O,c)}).next(N=>{w=N;const O=N.applyToLocalDocumentSet(f,D);return u.documentOverlayCache.saveOverlays(A,N.batchId,O)})}).then(()=>({batchId:w.batchId,changes:Kh(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.gu[a.currentUser.toKey()];d||(d=new ie(W)),d=d.insert(c,u),a.gu[a.currentUser.toKey()]=d}(r,s.batchId,t),await xr(r,s.changes),await ci(r.remoteStore)}catch(s){const i=ga(s,"Failed to persist write");t.reject(i)}}async function kd(n,e){const t=$(n);try{const r=await Uv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.mu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Iu=!0:s.modifiedDocuments.size>0?X(a.Iu,14607):s.removedDocuments.size>0&&(X(a.Iu,42227),a.Iu=!1))}),await xr(t,r,e)}catch(r){await Vn(r)}}function Jl(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Ru.forEach((i,a)=>{const c=a.view.xa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=$(a);u.onlineState=c;let d=!1;u.queries.forEach((m,f)=>{for(const w of f.Ca)w.xa(c)&&(d=!0)}),d&&_a(u)}(r.eventManager,e),s.length&&r.Eu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CE(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.mu.get(e),i=s&&s.key;if(i){let a=new ie(F.comparator);a=a.insert(i,Re.newNoDocument(i,j.min()));const c=H().add(i),u=new Nr(j.min(),new Map,new ie(W),a,c);await kd(r,u),r.du=r.du.remove(i),r.mu.delete(e),va(r)}else await Io(r.localStore,e,!1).then(()=>So(r,e,t)).catch(Vn)}async function PE(n,e){const t=$(n),r=e.batch.batchId;try{const s=await Fv(t.localStore,e);Vd(t,r,null),Nd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await xr(t,s)}catch(s){await Vn(s)}}async function kE(n,e,t){const r=$(n);try{const s=await function(a,c){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(f=>(X(f!==null,37113),m=f.keys(),u.mutationQueue.removeMutationBatch(d,f))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);Vd(r,e,t),Nd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await xr(r,s)}catch(s){await Vn(s)}}function Nd(n,e){(n.pu.get(e)||[]).forEach(t=>{t.resolve()}),n.pu.delete(e)}function Vd(n,e,t){const r=$(n);let s=r.gu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.gu[r.currentUser.toKey()]=s}}function So(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Au.get(e))n.Ru.delete(r),t&&n.Eu.bu(r,t);n.Au.delete(e),n.isPrimaryClient&&n.fu.Qr(e).forEach(r=>{n.fu.containsKey(r)||Dd(n,r)})}function Dd(n,e){n.Vu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ha(n.remoteStore,t),n.du=n.du.remove(e),n.mu.delete(t),va(n))}function Xl(n,e,t){for(const r of t)r instanceof Sd?(n.fu.addReference(r.key,e),NE(n,r)):r instanceof Cd?(x(ya,"Document no longer in limbo: "+r.key),n.fu.removeReference(r.key,e),n.fu.containsKey(r.key)||Dd(n,r.key)):B(19791,{Du:r})}function NE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Vu.has(r)||(x(ya,"New document in limbo: "+t),n.Vu.add(r),va(n))}function va(n){for(;n.Vu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Vu.values().next().value;n.Vu.delete(e);const t=new F(re.fromString(e)),r=n.yu.next();n.mu.set(r,new EE(t)),n.du=n.du.insert(t,r),yd(n.remoteStore,new rt(Ke(ea(t.path)),r,"TargetPurposeLimboResolution",Xs.ce))}}async function xr(n,e,t){const r=$(n),s=[],i=[],a=[];r.Ru.isEmpty()||(r.Ru.forEach((c,u)=>{a.push(r.Su(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const f=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=la.Is(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Eu.J_(s),await async function(u,d){const m=$(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>P.forEach(d,w=>P.forEach(w.Ps,A=>m.persistence.referenceDelegate.addReference(f,w.targetId,A)).next(()=>P.forEach(w.Ts,A=>m.persistence.referenceDelegate.removeReference(f,w.targetId,A)))))}catch(f){if(!Dn(f))throw f;x(ua,"Failed to update sequence numbers: "+f)}for(const f of d){const w=f.targetId;if(!f.fromCache){const A=m.Cs.get(w),C=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(C);m.Cs=m.Cs.insert(w,D)}}}(r.localStore,i))}async function VE(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){x(ya,"User change. New user:",e.toKey());const r=await pd(t.localStore,e);t.currentUser=e,function(i,a){i.pu.forEach(c=>{c.forEach(u=>{u.reject(new M(k.CANCELLED,a))})}),i.pu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xr(t,r.Os)}}function DE(n,e){const t=$(n),r=t.mu.get(e);if(r&&r.Iu)return H().add(r.key);{let s=H();const i=t.Au.get(e);if(!i)return s;for(const a of i){const c=t.Ru.get(a);s=s.unionWith(c.view.su)}return s}}function xd(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=kd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CE.bind(null,e),e.Eu.J_=gE.bind(null,e.eventManager),e.Eu.bu=_E.bind(null,e.eventManager),e}function xE(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kE.bind(null,e),e}class $s{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oi(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return Mv(this.persistence,new xv,e.initialUser,this.serializer)}Mu(e){return new fd(ca.Ai,this.serializer)}Fu(e){return new zv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$s.provider={build:()=>new $s};class OE extends $s{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){X(this.persistence.referenceDelegate instanceof Bs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vv(r,e.asyncQueue,t)}Mu(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new fd(r=>Bs.Ai(r,t),this.serializer)}}class Co{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VE.bind(null,this.syncEngine),await fE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mE}()}createDatastore(e){const t=oi(e.databaseInfo.databaseId),r=Qv(e.databaseInfo);return eE(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new nE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Jl(this.syncEngine,t,0),function(){return zl.v()?new zl:new Wv}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,m){const f=new TE(s,i,a,c,u,d);return m&&(f.wu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=$(s);x(Ze,"RemoteStore shutting down."),i.Va.add(5),await Dr(i),i.ma.shutdown(),i.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Co.provider={build:()=>new Co};/**
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
 */class Od{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ft="FirestoreClient";class LE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=Ko.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{x(Ft,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x(Ft,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ga(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xi(n,e){n.asyncQueue.verifyOperationInProgress(),x(Ft,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Yl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ME(n);x(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Hl(e.remoteStore,s)),n._onlineComponents=e}async function ME(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Ft,"Using user provided OfflineComponentProvider");try{await Xi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Zt("Error using user provided cache. Falling back to memory cache: "+t),await Xi(n,new $s)}}else x(Ft,"Using default OfflineComponentProvider"),await Xi(n,new OE(void 0));return n._offlineComponents}async function Ld(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Ft,"Using user provided OnlineComponentProvider"),await Yl(n,n._uninitializedComponentsProvider._online)):(x(Ft,"Using default OnlineComponentProvider"),await Yl(n,new Co))),n._onlineComponents}function FE(n){return Ld(n).then(e=>e.syncEngine)}async function Md(n){const e=await Ld(n),t=e.eventManager;return t.onListen=wE.bind(null,e.syncEngine),t.onUnlisten=bE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=RE.bind(null,e.syncEngine),t}function UE(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new Od({next:w=>{m.ku(),a.enqueueAndForget(()=>bd(i,f));const A=w.docs.has(c);!A&&w.fromCache?d.reject(new M(k.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&w.fromCache&&u&&u.source==="server"?d.reject(new M(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),f=new Rd(ea(c.path),m,{includeMetadataChanges:!0,$a:!0});return Ad(i,f)}(await Md(n),n.asyncQueue,e,t,r)),r.promise}function BE(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const m=new Od({next:w=>{m.ku(),a.enqueueAndForget(()=>bd(i,f)),w.fromCache&&u.source==="server"?d.reject(new M(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),f=new Rd(c,m,{includeMetadataChanges:!0,$a:!0});return Ad(i,f)}(await Md(n),n.asyncQueue,e,t,r)),r.promise}function jE(n,e){const t=new ot;return n.asyncQueue.enqueueAndForget(async()=>SE(await FE(n),e,t)),t.promise}/**
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
 */function Fd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const $E="ComponentProvider",Zl=new Map;function qE(n,e,t,r,s){return new ly(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Fd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Ud="firestore.googleapis.com",eu=!0;class tu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ud,this.ssl=eu}else this.host=e.host,this.ssl=e.ssl??eu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_v)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Y_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class li{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $_;switch(r.type){case"firstParty":return new H_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zl.get(t);r&&(x($E,"Removing Datastore"),Zl.delete(t),r.terminate())}(this),Promise.resolve()}}function zE(n,e,t,r={}){var d;n=Nt(n,li);const s=Ar(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Pu(`https://${c}`),i.host!==Ud&&i.host!==c&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Gt(u,a)&&(n._setSettings(u),r.mockUserToken)){let m,f;if(typeof r.mockUserToken=="string")m=r.mockUserToken,f=be.MOCK_USER;else{m=Xf(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new be(w)}n._authCredentials=new q_(new Ah(m,f))}}/**
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
 */class ui{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ui(this.firestore,e,this._query)}}class ge{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Pr(t,ge._jsonSchema))return new ge(e,r||null,new F(re.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:fe("string",ge._jsonSchemaVersion),referencePath:fe("string")};class kt extends ui{constructor(e,t,r){super(e,t,ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new F(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function WE(n,e,...t){if(n=ke(n),bh("collection","path",e),n instanceof li){const r=re.fromString(e,...t);return ml(r),new kt(n,null,r)}{if(!(n instanceof ge||n instanceof kt))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return ml(r),new kt(n.firestore,null,r)}}function hi(n,e,...t){if(n=ke(n),arguments.length===1&&(e=Ko.newId()),bh("doc","path",e),n instanceof li){const r=re.fromString(e,...t);return pl(r),new ge(n,null,new F(r))}{if(!(n instanceof ge||n instanceof kt))throw new M(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return pl(r),new ge(n.firestore,n instanceof kt?n.converter:null,new F(r))}}/**
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
 */const nu="AsyncQueue";class ru{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new gd(this,"async_queue_retry"),this.cc=()=>{const r=Ji();r&&x(nu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const t=Ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=Ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const t=new ot;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Dn(e))throw e;x(nu,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const t=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,ut("INTERNAL UNHANDLED ERROR: ",su(r)),r}).then(r=>(this._c=!1,r))));return this.lc=t,t}enqueueAfterDelay(e,t,r){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const s=ma.createAndSchedule(this,e,t,r,i=>this.Ic(i));return this.sc.push(s),s}hc(){this.oc&&B(47125,{Ec:su(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.sc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function su(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Or extends li{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ru,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ru(e),this._firestoreClient=void 0,await e}}}function HE(n,e){const t=typeof n=="object"?n:Du(),r=typeof n=="string"?n:Ns,s=Mo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Qf("firestore");i&&zE(s,...i)}return s}function Ea(n){if(n._terminated)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KE(n),n._firestoreClient}function KE(n){var r,s,i,a;const e=n._freezeSettings(),t=qE(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new LE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(we.fromBase64String(e))}catch(t){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pr(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:fe("string",Le._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Bd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jd{constructor(e){this._methodName=e}}/**
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
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(Pr(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:fe("string",Je._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class Be{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Be._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pr(e,Be._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Be(e.vectorValues);throw new M(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Be._jsonSchemaVersion="firestore/vectorValue/1.0",Be._jsonSchema={type:fe("string",Be._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const GE=/^__.*__$/;class QE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,t,this.fieldTransforms):new kr(e,this.data,t,this.fieldTransforms)}}function $d(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:n})}}class Ta{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ta({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.yc(e),r}wc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return qs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if($d(this.dataSource)&&GE.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class JE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oi(e)}V(e,t,r,s=!1){return new Ta({dataSource:e,methodName:t,targetDoc:r,path:Te.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XE(n){const e=n._freezeSettings(),t=oi(n._databaseId);return new JE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function YE(n,e,t,r,s,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,s);Hd("Data must be an object, but it was:",a,r);const c=zd(r,a);let u,d;if(i.merge)u=new Ue(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const f of i.mergeFields){const w=wa(e,f,t);if(!a.contains(w))throw new M(k.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);tT(m,w)||m.push(w)}u=new Ue(m),d=a.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,d=a.fieldTransforms;return new QE(new Oe(c),u,d)}function qd(n,e){if(Wd(n=ke(n)))return Hd("Unsupported field value:",e,n),zd(n,e);if(n instanceof jd)return function(r,s){if(!$d(s.dataSource))throw s.bc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=qd(c,s.Sc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Oy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=se.fromDate(r);return{timestampValue:Us(s.serializer,i)}}if(r instanceof se){const i=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Us(s.serializer,i)}}if(r instanceof Je)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Le)return{bytesValue:sd(s.serializer,r._byteString)};if(r instanceof ge){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.bc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Be)return function(a,c){const u=a instanceof Be?a.toArray():a;return{mapValue:{fields:{[xh]:{stringValue:Oh},[Vs]:{arrayValue:{values:u.map(m=>{if(typeof m!="number")throw c.bc("VectorValues must only contain numeric values.");return ri(c.serializer,m)})}}}}}}(r,s);if(hd(r))return r._toProto(s.serializer);throw s.bc(`Unsupported field value: ${Go(r)}`)}(n,e)}function zd(n,e){const t={};return Ch(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,s)=>{const i=qd(s,e.gc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Wd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Je||n instanceof Le||n instanceof ge||n instanceof jd||n instanceof Be||hd(n))}function Hd(n,e,t){if(!Wd(t)||!Rh(t)){const r=Go(t);throw r==="an object"?e.bc(n+" a custom object"):e.bc(n+" "+r)}}function wa(n,e,t){if((e=ke(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return eT(n,e);throw qs("Field path arguments must be of type string or ",n,!1,void 0,t)}const ZE=new RegExp("[~\\*/\\[\\]]");function eT(n,e,t){if(e.search(ZE)>=0)throw qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bd(...e.split("."))._internalPath}catch{throw qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new M(k.INVALID_ARGUMENT,c+n+u)}function tT(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class nT{convertValue(e,t="none"){switch(Ot(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Vs].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ce(a.doubleValue));return new Be(t)}convertGeoPoint(e){return new Je(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Zs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mr(e));default:return null}}convertTimestamp(e){const t=Dt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);X(ud(r),9688,{name:e});const s=new gr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Kd extends nT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}const iu="@firebase/firestore",ou="4.15.0";/**
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
 */class Gd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(wa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rT extends Gd{data(){return super.data()}}/**
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
 */function sT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function iT(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class sr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kt extends Gd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Kt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Kt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kt._jsonSchema={type:fe("string",Kt._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class _s extends Kt{data(e={}){return super.data(e)}}class Tn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new sr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _s(this._firestore,this._userDataWriter,r.key,r,new sr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new _s(s._firestore,s._userDataWriter,c.doc.key,c.doc,new sr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new _s(s._firestore,s._userDataWriter,c.doc.key,c.doc,new sr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:oT(c.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Tn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ko.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}/**
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
 */Tn._jsonSchemaVersion="firestore/querySnapshot/1.0",Tn._jsonSchema={type:fe("string",Tn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};/**
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
 */function aT(n){n=Nt(n,ge);const e=Nt(n.firestore,Or),t=Ea(e);return UE(t,n._key).then(r=>uT(e,n,r))}function cT(n){n=Nt(n,ui);const e=Nt(n.firestore,Or),t=Ea(e),r=new Kd(e);return sT(n._query),BE(t,n._query).then(s=>new Tn(e,r,n,s))}function Qd(n,e,t){n=Nt(n,ge);const r=Nt(n.firestore,Or),s=iT(n.converter,e),i=XE(r);return Jd(r,[YE(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ge.none())])}function lT(n){return Jd(Nt(n.firestore,Or),[new ra(n._key,Ge.none())])}function Jd(n,e){const t=Ea(n);return jE(t,e)}function uT(n,e,t){const r=t.docs.get(e._key),s=new Kd(n);return new Kt(n,s,e._key,r,new sr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){j_(Pn),In(new Qt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Or(new z_(r.getProvider("auth-internal")),new K_(a,r.getProvider("app-check-internal")),uy(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ct(iu,ou,e),Ct(iu,ou,"esm2020")})();const hT={apiKey:"AIzaSyD32T4fsfsHwZF4tnikA-1z_QqqFMZ74k8",authDomain:"movie-tracker-6ed51.firebaseapp.com",projectId:"movie-tracker-6ed51",storageBucket:"movie-tracker-6ed51.firebasestorage.app",messagingSenderId:"68333228381",appId:"1:68333228381:web:a4af878745df02600998b4"},Xd=Vu(hT),di=M_(Xd),Lr=HE(Xd);async function dT(n,e,t){const r=await vg(di,n,e);return await wg(r.user,{displayName:t}),r}function fT(n,e){return Eg(di,n,e)}function pT(){return Rg(di)}function mT(n){return bg(di,n)}const at={mode:"dark",accentColor:"#386641",buttonColor:"#6a994e",outlineColor:"#a7c957"};async function gT(n){const e=hi(Lr,"users",n,"settings","theme"),t=await aT(e);return t.exists()?t.data():at}async function _T(n,e){const t=hi(Lr,"users",n,"settings","theme");await Qd(t,e)}function yT(){const[n,e]=J(""),[t,r]=J(""),[s,i]=J(""),[a,c]=J(""),[u,d]=J(!1),m=xo(null);async function f(){if(!t.trim()||!s.trim()){c("Please fill in both fields.");return}try{await fT(t.trim(),s)}catch{c("Wrong email or password.")}}async function w(){if(!n.trim()||!t.trim()||!s.trim()){c("Please fill in every field.");return}try{await dT(t.trim(),s,n.trim())}catch{c("Could not create account. Maybe this email is already used.")}}return I("main",{className:"grid min-h-screen place-items-center px-5 py-10",children:I("section",{className:"w-full max-w-[460px] rounded-[32px] border border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_92%,transparent)] p-8 text-[var(--text-color)] shadow-2xl backdrop-blur-md",children:[I("p",{className:"m-0 text-sm font-black uppercase tracking-[0.18em] text-[var(--accent-color)]",children:"Movie Journal"}),I("h1",{className:"mt-3 text-4xl font-black leading-tight sm:text-5xl",children:"Track what you watch"}),I("p",{className:"mt-4 leading-7 text-[var(--muted-color)]",children:"Save movies and series, write reviews, rate them, and know where you left off exactly."}),I("div",{className:"mt-7 grid gap-4",children:[u&&I("input",{className:"rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-4 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]",type:"text",placeholder:"Display Name",value:n,onInput:A=>e(A.target.value)}),I("input",{className:"rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-4 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]",type:"email",placeholder:"Email",value:t,onInput:A=>r(A.target.value),onKeyDown:A=>{var C;A.key==="Enter"&&((C=m.current)==null||C.focus())}}),I("input",{ref:m,className:"rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-4 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]",type:"password",placeholder:"Password",value:s,onInput:A=>i(A.target.value),onKeyDown:A=>{A.key==="Enter"&&f()}}),a&&I("p",{className:"m-0 text-center font-bold text-[red]",children:a}),u?null:I("button",{className:"rounded-full border border-[var(--outline-color)] bg-[var(--button-color)] px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110",onClick:f,children:"Login"}),u&&I("button",{className:"rounded-full border border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:w,children:"Create account"}),u?I("p",{className:"m-0 mt-4 text-center text-sm text-[var(--muted-color)]",children:["Already have an account?"," ",I("button",{className:"font-bold text-[var(--accent-color)] underline",onClick:()=>d(!1),children:"Login here."})]}):I("p",{className:"m-0 mt-4 text-center text-sm text-[var(--muted-color)]",children:["Don't have an account?"," ",I("button",{className:"font-bold text-[var(--accent-color)] underline",onClick:()=>d(!0),children:"Create one here."})]})]})]})})}function vT(n){return WE(Lr,"users",n,"entries")}async function ET(n){return(await cT(vT(n))).docs.map(t=>t.data())}async function TT(n,e){const t=hi(Lr,"users",n,"entries",e.id);await Qd(t,e)}async function wT(n,e){const t=hi(Lr,"users",n,"entries",e);await lT(t)}function IT({entryName:n,onCancel:e,onConfirm:t}){return st(()=>{const r=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=r}},[]),I("div",{className:"fixed inset-0 z-[150] grid place-items-center bg-black/75 p-4",children:I("div",{className:"w-full max-w-[420px] rounded-[28px] border border-[var(--outline-color)] bg-[var(--card-color)] p-6 text-[var(--text-color)] shadow-2xl",children:[I("h2",{className:"m-0 text-2xl font-black",children:"Delete entry?"}),I("p",{className:"mt-4 leading-7 text-[var(--muted-color)]",children:["Are you sure you want to delete"," ",I("strong",{className:"text-[var(--text-color)]",children:n}),"?"]}),I("p",{className:"font-bold text-[red]",children:"This action cannot be undone."}),I("div",{className:"mt-6 flex justify-end gap-3",children:[I("button",{className:"rounded-full border border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5",onClick:e,children:"Cancel"}),I("button",{className:"rounded-full bg-red-700 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-110",onClick:t,children:"Delete"})]})]})})}function AT(){return I("span",{className:"relative block h-5 w-5",children:[I("span",{className:"absolute left-1/2 top-[4px] h-2 w-2 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-current"}),I("span",{className:"absolute bottom-[2px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-current"})]})}function au({label:n,value:e,options:t,allLabel:r,onChange:s}){const[i,a]=J(!1),[c,u]=J(""),d=xo(null),m=e==="all"?r:e,f=pn(()=>{const C=c.trim().toLowerCase();return C?t.filter(D=>D.toLowerCase().startsWith(C)):t},[t,c]);st(()=>{function C(D){d.current&&!d.current.contains(D.target)&&(a(!1),u(""))}return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]);function w(C){s(C),u(""),a(!1)}function A(C){u(C),a(!0)}return I("div",{ref:d,className:`relative grid gap-2 text-sm font-bold text-[var(--muted-color)] ${i?"z-50":"z-10"}`,children:[I("span",{children:n}),I("div",{className:"relative",children:[I("input",{className:"h-14 w-full rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] px-5 pr-16 font-semibold text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]",type:"text",value:i?c:m,placeholder:r,onFocus:()=>{a(!0),u("")},onInput:C=>A(C.target.value),onKeyDown:C=>{C.key==="Enter"&&f.length>0&&w(f[0]),C.key==="Escape"&&(a(!1),u(""))}}),I("span",{className:"pointer-events-none absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-[var(--muted-color)]",children:I(AT,{})})]}),i&&I("div",{className:"absolute left-0 right-0 top-full z-[100] mt-2 max-h-56 overflow-y-auto rounded-2xl border border-[var(--outline-color)] bg-[var(--card-color)] p-2 shadow-2xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent-color)]",children:[I("button",{type:"button",className:e==="all"?"flex w-full items-center justify-between rounded-xl bg-[color-mix(in_srgb,var(--accent-color)_22%,transparent)] px-4 py-3 text-left font-semibold text-[var(--accent-color)]":"flex w-full items-center justify-between rounded-xl bg-transparent px-4 py-3 text-left font-semibold text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:()=>w("all"),children:[I("span",{children:r}),e==="all"&&I("span",{children:"✓"})]}),f.length===0?I("p",{className:"m-0 px-4 py-3 text-[var(--muted-color)]",children:"No matches"}):f.map(C=>I("button",{type:"button",className:e===C?"flex w-full items-center justify-between rounded-xl bg-[color-mix(in_srgb,var(--accent-color)_22%,transparent)] px-4 py-3 text-left font-semibold text-[var(--outline-color)]":"flex w-full items-center justify-between rounded-xl bg-transparent px-4 py-3 text-left font-semibold text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:()=>w(C),children:[I("span",{children:C}),e===C&&I("span",{children:"✓"})]},C))]})]})}const Yi=[{value:"all",label:"All statuses"},{value:"want-to-watch",label:"Want to watch"},{value:"watching",label:"Watching"},{value:"watched",label:"Watched"}];function bT(){return I("span",{className:"relative block h-5 w-5",children:[I("span",{className:"absolute left-1/2 top-[4px] h-2 w-2 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-current"}),I("span",{className:"absolute bottom-[2px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-current"})]})}function RT({value:n,onChange:e}){const[t,r]=J(!1),s=xo(null),i=Yi.find(c=>c.value===n)??Yi[0];st(()=>{function c(u){s.current&&!s.current.contains(u.target)&&r(!1)}return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);function a(c){e(c),r(!1)}return I("div",{ref:s,className:`relative grid gap-2 text-sm font-bold text-[var(--muted-color)] ${t?"z-50":"z-10"}`,children:[I("span",{children:"Status"}),I("button",{type:"button",className:"relative h-14 w-full rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] px-5 pr-16 text-left font-semibold text-[var(--text-color)] outline-none transition hover:bg-[color-mix(in_srgb,var(--outline-color)_12%,transparent)] focus:ring-2 focus:ring-[var(--accent-color)]",onClick:()=>r(!t),children:[I("span",{children:i.label}),I("span",{className:"pointer-events-none absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-[var(--muted-color)]",children:I(bT,{})})]}),t&&I("div",{className:"absolute left-0 right-0 top-full z-[100] mt-2 grid gap-1 rounded-2xl border border-[var(--outline-color)] bg-[var(--card-color)] p-2 shadow-2xl",children:Yi.map(c=>{const u=c.value===n;return I("button",{type:"button",className:u?"flex w-full items-center justify-between rounded-xl bg-[color-mix(in_srgb,var(--accent-color)_22%,transparent)] px-4 py-3 text-left font-semibold text-[var(--accent-color)]":"flex w-full items-center justify-between rounded-xl bg-transparent px-4 py-3 text-left font-semibold text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:()=>a(c.value),children:[I("span",{children:c.label}),u&&I("span",{children:"✓"})]},c.value)})})]})}function ST({searchText:n,selectedCategory:e,selectedStatus:t,selectedWhereToWatch:r,categoryOptions:s,whereToWatchOptions:i,onSearchTextChange:a,onCategoryChange:c,onStatusChange:u,onWhereToWatchChange:d,onClearFilters:m}){return I("section",{className:"relative z-30 mb-6 grid gap-4 rounded-[28px] border border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_88%,transparent)] p-5 shadow-xl backdrop-blur md:grid-cols-2 lg:grid-cols-5",children:[I("label",{className:"grid gap-2 text-sm font-bold text-[var(--muted-color)]",children:["Search by title",I("input",{className:"h-14 w-full rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] px-5 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]",type:"text",placeholder:"Start typing...",value:n,onInput:f=>a(f.target.value)})]}),I(au,{label:"Category",value:e,options:s,allLabel:"All categories",onChange:c}),I(RT,{value:t,onChange:u}),I(au,{label:"Where to watch",value:r,options:i,allLabel:"All platforms",onChange:d}),I("div",{className:"grid gap-2 text-sm font-bold text-[var(--muted-color)]",children:[I("span",{className:"invisible",children:"Actions"}),I("button",{className:"h-14 w-full rounded-full border border-[var(--outline-color)] bg-transparent px-5 font-bold text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:m,children:"Clear filters"})]})]})}function CT(n){return n==="watched"?"Watched":n==="watching"?"Watching":"Want to watch"}function PT(n){return n>=8?"text-green-400":n>=5?"text-yellow-400":"text-red-400"}function kT({entry:n,onEdit:e,onDelete:t}){return I("article",{className:"flex h-full flex-col overflow-hidden rounded-[28px] drop-shadow-lg border-[0px] border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_92%,transparent)] shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgb(0,0,0,0.3),0_4px_6px_-2px_rgb(0,0,0,0.2)] hover:border-x-[1px]",children:[I("div",{className:"h-[250px] bg-white/5",children:n.picture?I("img",{className:"h-full w-full object-cover",src:n.picture,alt:n.name}):I("div",{className:"grid h-full place-items-center text-[var(--muted-color)]",children:"No image"})}),I("div",{className:"flex flex-1 flex-col p-5",children:[I("div",{className:"flex items-start justify-between gap-4",children:[I("h2",{className:"m-0 text-2xl font-black leading-tight",children:n.name}),I("span",{className:`whitespace-nowrap font-black ${PT(n.rating)}`,children:["★ ",n.rating,"/10"]})]}),I("div",{className:"my-4 flex flex-wrap gap-2",children:[n.category&&I("span",{className:"rounded-full border-[2px] border-[var(--outline-color)] px-3 py-1 text-xs font-bold text-[var(--muted-color)]",children:n.category}),I("span",{className:"rounded-full border-[2px] border-[var(--outline-color)] px-3 py-1 text-xs font-bold text-[var(--muted-color)]",children:CT(n.status)})]}),I("p",{className:"m-0 mt-1 leading-6 text-[var(--muted-color)]",children:[I("strong",{className:"text-[var(--text-color)]",children:"Progress:"})," ",n.progress||"Not added"]}),I("p",{className:"m-0 mt-2 leading-6 text-[var(--muted-color)]",children:[I("strong",{className:"text-[var(--text-color)]",children:"Where:"})," ",n.whereToWatch||"Not added"]}),n.review&&I("p",{className:"mt-4 max-h-[7.5em] overflow-y-auto border-l-4 border-[var(--accent-color)] pl-3 pr-2 leading-6 text-[var(--muted-color)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:my-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent-color)]",children:n.review}),I("div",{className:"mt-auto flex gap-3 pt-5",children:[I("button",{className:"flex-1 rounded-full bg-[var(--button-color)] px-4 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-110",onClick:()=>e(n),children:"Edit"}),I("button",{className:"flex-1 rounded-full bg-red-700 px-4 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-110",onClick:()=>t(n),children:"Delete"})]})]})]})}function NT({entries:n,onEdit:e,onDelete:t}){return n.length===0?I("section",{className:"rounded-[28px] border border-dashed border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_85%,transparent)] px-5 py-16 text-center shadow-xl backdrop-blur",children:[I("h2",{className:"m-0 text-2xl font-black text-[var(--text-color)]",children:"No entries yet"}),I("p",{className:"mx-auto mt-3 max-w-md text-[var(--muted-color)]",children:"Add your first movie or series to start your journal."})]}):I("section",{className:"grid items-stretch gap-5 [grid-template-columns:repeat(auto-fill,minmax(310px,1fr))]",children:n.map(r=>I(kT,{entry:r,onEdit:e,onDelete:t},r.id))})}function VT({defaultType:n,existingEntry:e,onClose:t,onSave:r}){st(()=>{const v=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=v}},[]);const[s,i]=J((e==null?void 0:e.type)??n),[a,c]=J((e==null?void 0:e.picture)??""),[u,d]=J((e==null?void 0:e.name)??""),[m,f]=J((e==null?void 0:e.rating)??0),[w,A]=J((e==null?void 0:e.review)??""),[C,D]=J((e==null?void 0:e.category)??""),[N,O]=J((e==null?void 0:e.status)??"want-to-watch"),[L,q]=J((e==null?void 0:e.progress)??""),[te,ee]=J((e==null?void 0:e.whereToWatch)??"");function oe(v){var ue;const b=(ue=v.target.files)==null?void 0:ue[0];if(!b)return;const y=new FileReader;y.onload=()=>{typeof y.result=="string"&&c(y.result)},y.readAsDataURL(b)}function T(v){if(v.preventDefault(),!u.trim()){alert("Please add a name.");return}const E=new Date().toISOString(),b={id:(e==null?void 0:e.id)??crypto.randomUUID(),type:s,picture:a,name:u,rating:m,review:w,category:C,status:N,progress:L,whereToWatch:te,createdAt:(e==null?void 0:e.createdAt)??E,updatedAt:E};r(b)}const g="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]",_="grid gap-2 text-sm font-medium text-[var(--muted-color)]";return I("div",{className:"fixed inset-0 z-[100] grid place-items-center bg-black/75 p-4",children:I("div",{className:"max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-[30px] border border-[var(--outline-color)] bg-[var(--card-color)] p-5 text-[var(--text-color)] shadow-2xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent-color)]",children:[I("div",{className:"mb-5 flex items-center justify-between gap-4",children:[I("h2",{className:"m-0 text-2xl font-black",children:e?"Edit entry":"Add new entry"}),I("button",{className:"grid h-11 w-11 place-items-center rounded-full border border-[var(--outline-color)] bg-transparent text-2xl font-bold text-[var(--text-color)] transition hover:-translate-y-0.5",onClick:t,children:"×"})]}),I("form",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",onSubmit:T,children:[I("label",{className:_,children:["Type",I("select",{className:g,value:s,onInput:v=>i(v.target.value),children:[I("option",{value:"movie",children:"Movie"}),I("option",{value:"series",children:"Series"})]})]}),I("label",{className:_,children:["Name",I("input",{className:g,type:"text",placeholder:"Movie or series title",value:u,onInput:v=>d(v.target.value)})]}),I("label",{className:`${_} md:col-span-2`,children:["Picture URL",I("input",{className:g,type:"text",placeholder:"https://...",value:a,onInput:v=>c(v.target.value)})]}),I("label",{className:`${_} md:col-span-2`,children:["Or upload picture",I("input",{className:g,type:"file",accept:"image/*",onInput:oe})]}),a&&I("img",{className:"max-h-60 w-full rounded-2xl border border-[var(--outline-color)] object-cover md:col-span-2",src:a,alt:"Preview"}),I("label",{className:_,children:["Rating: ",m,"/10",I("input",{className:g,type:"range",min:"0",max:"10",value:m,onInput:v=>f(Number(v.target.value))})]}),I("label",{className:_,children:["Category",I("input",{className:g,type:"text",placeholder:"Action, comedy, fantasy...",value:C,onInput:v=>D(v.target.value)})]}),I("label",{className:_,children:["Status",I("select",{className:g,value:N,onInput:v=>O(v.target.value),children:[I("option",{value:"want-to-watch",children:"Want to watch"}),I("option",{value:"watching",children:"Watching"}),I("option",{value:"watched",children:"Watched"})]})]}),I("label",{className:_,children:["Progress",I("input",{className:g,type:"text",placeholder:s==="series"?"Example: Season 2 Episode 5":"Example: 47 minutes / 120 minutes",value:L,onInput:v=>q(v.target.value)})]}),I("label",{className:`${_} md:col-span-2`,children:["Where can you watch it?",I("input",{className:g,type:"text",placeholder:"Netflix, HBO Max, Disney+, cinema...",value:te,onInput:v=>ee(v.target.value)})]}),I("label",{className:`${_} md:col-span-2`,children:["Review",I("textarea",{className:`${g} min-h-28 resize-y`,placeholder:"Write your thoughts...",value:w,onInput:v=>A(v.target.value)})]}),I("div",{className:"flex justify-end gap-3 pt-2 md:col-span-2",children:[I("button",{type:"button",className:"rounded-full border border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5",onClick:t,children:"Cancel"}),I("button",{type:"submit",className:"rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110",children:e?"Save changes":"Add entry"})]})]})]})})}function DT({activeTab:n,onTabChange:e,movieCount:t,seriesCount:r}){return I("div",{className:"flex rounded-full border border-[var(--outline-color)] bg-[var(--card-color)] p-1 shadow-lg",children:[I("button",{className:n==="movie"?"rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white transition":"rounded-full bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:()=>e("movie"),children:["Movies"," "]}),I("button",{className:n==="series"?"rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white transition":"rounded-full bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:()=>e("series"),children:["Series"," "]})]})}function xT({user:n}){var ue;const[e,t]=J("movie"),[r,s]=J([]),[i,a]=J(!1),[c,u]=J(null),[d,m]=J(null),[f,w]=J(""),[A,C]=J("all"),[D,N]=J("all"),[O,L]=J("all");st(()=>{async function G(){const Ne=await ET(n.uid);s(Ne)}G()},[n.uid]),st(()=>{b()},[e]);const q=pn(()=>r.filter(G=>G.type===e),[r,e]),te=pn(()=>Array.from(new Set(q.map(G=>G.category.trim()).filter(Boolean))).sort(),[q]),ee=pn(()=>Array.from(new Set(q.map(G=>G.whereToWatch.trim()).filter(Boolean))).sort(),[q]),oe=pn(()=>{const G=f.trim().toLowerCase();return q.filter(Ne=>{const Mr=G===""||Ne.name.toLowerCase().startsWith(G),Me=A==="all"||Ne.category===A,on=D==="all"||Ne.status===D,fi=O==="all"||Ne.whereToWatch===O;return Mr&&Me&&on&&fi})},[q,f,A,D,O]),T=r.filter(G=>G.type==="movie").length,g=r.filter(G=>G.type==="series").length;async function _(G){await TT(n.uid,G),s(Ne=>Ne.some(Me=>Me.id===G.id)?Ne.map(Me=>Me.id===G.id?G:Me):[G,...Ne]),u(null),a(!1)}async function v(){d&&(await wT(n.uid,d.id),s(G=>G.filter(Ne=>Ne.id!==d.id)),m(null))}function E(G){u(G),a(!0)}function b(){w(""),C("all"),N("all"),L("all")}async function y(){await pT()}return I("main",{className:"mx-auto w-full max-w-6xl px-5 pb-12 pt-24 text-[var(--text-color)]",children:[I("header",{className:"mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center",children:[I("div",{children:[I("p",{className:"m-0 font-black text-[var(--text-color)] opacity-80",children:["Welcome back, ",n.displayName??((ue=n.email)==null?void 0:ue.split("@")[0])??"user"]}),I("h1",{className:"m-0 mt-1 text-4xl font-black leading-tight sm:text-6xl",children:"Your watch journal"})]}),I("button",{className:"w-fit rounded-full border-[3px] border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--button-color)_25%,transparent)] px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_30%,transparent)]",onClick:y,children:"Logout"})]}),I("section",{className:"mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center",children:[I(DT,{activeTab:e,onTabChange:t,movieCount:T,seriesCount:g}),I("button",{className:"rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110",onClick:()=>{u(null),a(!0)},children:["+ Add ",e==="movie"?"movie":"series"]})]}),I(ST,{searchText:f,selectedCategory:A,selectedStatus:D,selectedWhereToWatch:O,categoryOptions:te,whereToWatchOptions:ee,onSearchTextChange:w,onCategoryChange:C,onStatusChange:N,onWhereToWatchChange:L,onClearFilters:b}),I(NT,{entries:oe,onEdit:E,onDelete:G=>m(G)}),i&&I(VT,{defaultType:e,existingEntry:c,onClose:()=>{u(null),a(!1)},onSave:_}),d&&I(IT,{entryName:d.name,onCancel:()=>m(null),onConfirm:v})]})}function OT({theme:n,onThemeChange:e}){const[t,r]=J(!1);function s(c){e({...n,mode:c})}function i(c,u){e({...n,[c]:u})}function a(){e({...n,accentColor:at.accentColor,buttonColor:at.buttonColor,outlineColor:at.outlineColor})}return I("div",{className:"fixed right-4 top-4 z-50",children:[I("button",{className:"grid h-11 w-11 place-items-center rounded-full border border-[var(--outline-color)] bg-[var(--button-color)] text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110",onClick:()=>r(!t),children:"☰"}),t&&I("div",{className:"absolute right-0 top-14 grid w-64 gap-4 rounded-[22px] border border-[var(--outline-color)] bg-[var(--card-color)] p-4 text-[var(--text-color)] shadow-2xl pt-6 pb-7",children:[I("h3",{className:"m-0 text-lg font-bold",children:"Customize"}),I("label",{className:"grid gap-2 text-sm text-[var(--muted-color)]",children:["Theme",I("select",{className:"rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none",value:n.mode,onInput:c=>s(c.target.value),children:[I("option",{value:"light",children:"Light"}),I("option",{value:"dark",children:"Dark"}),I("option",{value:"cinema",children:"Cinema"})]})]}),I("label",{className:"grid gap-2 text-sm text-[var(--muted-color)]",children:["Accent color",I("button",{className:"relative h-10 w-full bg-[var(--accent-color)] rounded-full",children:I("input",{className:"absolute inset-0 h-11 w-full cursor-pointer opacity-0",type:"color",value:n.accentColor,onInput:c=>i("accentColor",c.target.value)})})]}),I("label",{className:"grid gap-2 text-sm text-[var(--muted-color)]",children:["Button color",I("button",{className:"relative h-10 w-full bg-[var(--button-color)] rounded-full",children:I("input",{className:"absolute inset-0 h-11 w-full cursor-pointer opacity-0",type:"color",value:n.buttonColor,onInput:c=>i("buttonColor",c.target.value)})})]}),I("label",{className:"grid gap-2 text-sm text-[var(--muted-color)]",children:["Outline color",I("button",{className:"relative h-10 w-full bg-[var(--outline-color)] rounded-full",children:I("input",{className:"absolute inset-0 h-[100%] w-full cursor-pointer opacity-0",type:"color",value:n.outlineColor,onInput:c=>i("outlineColor",c.target.value)})})]}),I("button",{className:"rounded-full border border-[var(--outline-color)] bg-transparent px-4 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]",onClick:a,children:"Reset colors"})]})]})}function cu(){return I("div",{className:"pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-color)]","aria-hidden":"true",children:[I("div",{className:"absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[var(--accent-color)] opacity-40 blur-3xl [animation:floatBlob_18s_ease-in-out_infinite_alternate]"}),I("div",{className:"absolute -right-36 top-[22%] h-[420px] w-[420px] rounded-full bg-[var(--button-color)] opacity-40 blur-3xl [animation:floatBlob_18s_ease-in-out_infinite_alternate] [animation-delay:-6s]"}),I("div",{className:"absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full bg-[var(--outline-color)] opacity-40 blur-3xl [animation:floatBlob_18s_ease-in-out_infinite_alternate] [animation-delay:-11s]"}),I("div",{className:"absolute inset-0 opacity-[0.08] [background-image:linear-gradient(var(--outline-color)_1px,transparent_1px),linear-gradient(90deg,var(--outline-color)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"}),I("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.42)_100%)]"})]})}const Yd="movie_journal_last_theme";function lu(){try{const n=localStorage.getItem(Yd);return n?JSON.parse(n):at}catch{return at}}function LT(n){localStorage.setItem(Yd,JSON.stringify(n))}function Zi(n){document.documentElement.setAttribute("data-theme",n.mode),document.documentElement.style.setProperty("--accent-color",n.accentColor),document.documentElement.style.setProperty("--button-color",n.buttonColor),document.documentElement.style.setProperty("--outline-color",n.outlineColor)}function MT(){const[n,e]=J(null),[t,r]=J(!0),[s,i]=J(()=>lu()),[a,c]=J(!1);return st(()=>{Zi(s),n&&LT(s)},[s,n]),st(()=>mT(async d=>{r(!0),c(!1);try{if(d){const m=await gT(d.uid);Zi(m),i(m),e(d),c(!0)}else e(null),i(at),c(!1),Zi(at)}catch(m){console.error("Auth/theme loading error:",m),e(d),d?(i(lu()),c(!0)):(i(at),c(!1))}finally{r(!1)}}),[]),st(()=>{!n||!a||_T(n.uid,s).catch(u=>{console.error("Theme save error:",u)})},[s,n,a]),t?I("div",{className:"relative flex h-screen w-screen items-center justify-center",children:[I(cu,{}),I("svg",{"aria-hidden":"true",className:"h-12 w-12 animate-spin text-[var(--muted-color)] fill-[var(--outline-color)]",viewBox:"0 0 100 101",xmlns:"http://www.w3.org/2000/svg",children:[I("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),I("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),I("span",{className:"sr-only",children:"Loading..."})]}):I("div",{className:"app",children:[I(cu,{}),n&&I(OT,{theme:s,onThemeChange:i}),n?I(xT,{user:n}):I(yT,{})]})}Lf(I(MT,{}),document.getElementById("app"));
