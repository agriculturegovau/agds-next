"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{1230:function(e,t,r){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{ZP:function(){return eS}});var i,a,u=r(7378),o="data-focus-lock",s="data-focus-lock-disabled",l={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},c=function(e){var t=e.children;return u.createElement(u.Fragment,null,u.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:l}),t,t&&u.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:l}))};c.propTypes={},c.defaultProps={children:null};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function d(e){return e}function m(e,t){void 0===t&&(t=d);var r=[],n=!1;return{read:function(){if(n)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(e){var i=t(e,n);return r.push(i),function(){r=r.filter(function(e){return e!==i})}},assignSyncMedium:function(e){for(n=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){n=!0;var t=[];if(r.length){var i=r;r=[],i.forEach(e),t=r}var a=function(){var r=t;t=[],r.forEach(e)},u=function(){return Promise.resolve().then(a)};u(),r={push:function(e){t.push(e),u()},filter:function(e){return t=t.filter(e),r}}}}}function v(e,t){return void 0===t&&(t=d),m(e,t)}var y=v({},function(e){return{target:e.target,currentTarget:e.currentTarget}}),g=v(),h=v(),b=((i=m(null)).options=f({async:!0,ssr:!1},{async:!0}),i),p=[],O=u.forwardRef(function(e,t){var r,i,a,c,f,d=u.useState(),m=d[0],v=d[1],h=u.useRef(),O=u.useRef(!1),_=u.useRef(null),w=e.children,x=e.disabled,j=e.noFocusGuards,A=e.persistentFocus,S=e.crossFrame,F=e.autoFocus,E=(e.allowTextSelection,e.group),k=e.className,V=e.whiteList,N=e.hasPositiveIndices,C=e.shards,D=e.as,T=e.lockProps,M=e.sideCar,I=e.returnFocus,U=e.focusOptions,B=e.onActivation,L=e.onDeactivation,P=u.useState({})[0],R=u.useCallback(function(){_.current=_.current||document&&document.activeElement,h.current&&B&&B(h.current),O.current=!0},[B]),q=u.useCallback(function(){O.current=!1,L&&L(h.current)},[L]);(0,u.useEffect)(function(){x||(_.current=null)},[]);var Z=u.useCallback(function(e){var t=_.current;if(t&&t.focus){var r="function"==typeof I?I(t):I;if(r){var n="object"==typeof r?r:void 0;_.current=null,e?Promise.resolve().then(function(){return t.focus(n)}):t.focus(n)}}},[I]),G=u.useCallback(function(e){O.current&&y.useMedium(e)},[]),W=g.useMedium,H=u.useCallback(function(e){h.current!==e&&(h.current=e,v(e))},[]),$=n(((f={})[s]=x&&"disabled",f[o]=E,f),void 0===T?{}:T),z=!0!==j,K=(r=[t,H],i=void 0,a=function(e){return r.forEach(function(t){var r;return"function"==typeof(r=t)?r(e):r&&(r.current=e),r})},(c=(0,u.useState)(function(){return{value:i,callback:a,facade:{get current(){return c.value},set current(value){var e=c.value;e!==value&&(c.value=value,c.callback(value,e))}}}})[0]).callback=a,c.facade);return u.createElement(u.Fragment,null,z&&[u.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:x?-1:0,style:l}),N?u.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:x?-1:1,style:l}):null],!x&&u.createElement(M,{id:P,sideCar:b,observed:m,disabled:x,persistentFocus:A,crossFrame:S,autoFocus:F,whiteList:V,shards:void 0===C?p:C,onActivation:R,onDeactivation:q,returnFocus:Z,focusOptions:U}),u.createElement(void 0===D?"div":D,n({ref:K},$,{className:k,onBlur:W,onFocus:G}),w),z&&"tail"!==j&&u.createElement("div",{"data-focus-guard":!0,tabIndex:x?-1:0,style:l}))});function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}O.propTypes={},O.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var w=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},x=function(e){return Array.isArray(e)?e:[e]},j=function(){return document.activeElement?document.activeElement.shadowRoot?document.activeElement.shadowRoot.activeElement:document.activeElement:void 0},A=function(){var e=document&&j();return!!e&&w(document.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(t){return t.contains(e)})},S=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var i=n+1;i<r;i+=1){var a=e[n].compareDocumentPosition(e[i]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(i),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(e,r){return!t.has(r)})},F=function(e){return e.parentNode?F(e.parentNode):e},E=function(e){return x(e).filter(Boolean).reduce(function(e,t){var r=t.getAttribute(o);return e.push.apply(e,r?S(w(F(t).querySelectorAll("[".concat(o,'="').concat(r,'"]:not([').concat(s,'="disabled"])')))):[t]),e},[])},k=function(e){var t=document&&j();return!!t&&(!t.dataset||!t.dataset.focusGuard)&&E(e).reduce(function(e,r){return e||r.contains(t)||Boolean(w(r.querySelectorAll("iframe")).some(function(e){return e===document.activeElement}))},!1)},V=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!!t&&!!t.getPropertyValue&&("none"===t.getPropertyValue("display")||"hidden"===t.getPropertyValue("visibility"))},N=function(e,t){var r,n=e.get(t);if(void 0!==n)return n;var i=(r=N.bind(void 0,e),!t||t===document||t&&t.nodeType===Node.DOCUMENT_NODE||!V(t)&&r(t.parentNode&&t.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.parentNode.host:t.parentNode));return e.set(t,i),i},C=function(e){return e.dataset},D=function(e){return"INPUT"===e.tagName},T=function(e){return D(e)&&"radio"===e.type},M=function(e){var t;return Boolean(e&&(null===(t=C(e))||void 0===t?void 0:t.focusGuard))},I=function(e){return!M(e)},U=function(e){return Boolean(e)},B=function(e,t){return T(e)&&e.name&&t.filter(T).filter(function(t){return t.name===e.name}).filter(function(e){return e.checked})[0]||e},L=function(e){var t=new Set;return e.forEach(function(r){return t.add(B(r,e))}),e.filter(function(e){return t.has(e)})},P=function(e){return e[0]&&e.length>1?B(e[0],e):e[0]},R=function(e,t){return e.length>1?e.indexOf(B(e[t],e)):t},q="NEW_FOCUS",Z=function(e,t,r,n){var i=e.length,a=e[0],u=e[i-1],o=M(r);if(!(r&&e.indexOf(r)>=0)){var s=void 0!==r?t.indexOf(r):-1,l=n?t.indexOf(n):s,c=n?e.indexOf(n):-1,f=s-l,d=t.indexOf(a),m=t.indexOf(u),v=L(t),y=(void 0!==r?v.indexOf(r):-1)-(n?v.indexOf(n):s),g=R(e,0),h=R(e,i-1);if(-1===s||-1===c)return q;if(!f&&c>=0)return c;if(s<=d&&o&&Math.abs(f)>1)return h;if(s>=m&&o&&Math.abs(f)>1)return g;if(f&&Math.abs(y)>1)return c;if(s<=d)return h;if(s>m)return g;if(f)return Math.abs(f)>1?c:(i+c+f)%i}},G=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return -1}return r||n},W=function(e,t,r){return w(e).map(function(e,t){return{node:e,index:t,tabIndex:r&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}}).filter(function(e){return!t||e.tabIndex>=0}).sort(G)},H="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",$="".concat(H,", [data-focus-guard]"),z=function(e,t){return e.reduce(function(e,r){return e.concat(w(r.querySelectorAll(t?$:H)),r.parentNode?w(r.parentNode.querySelectorAll(H)).filter(function(e){return e===r}):[])},[])},K=function(e,t){return w(e).filter(function(e){return N(t,e)}).filter(function(e){return!((D(e)||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))&&!e.ariaDisabled})},Q=function(e,t,r){return W(K(z(e,r),t),!0,r)},Y=function(e,t){return W(K(z(e),t),!1)},J=function(e,t){return void 0===t&&(t=[]),t.push(e),e.parentNode&&J(e.parentNode,t),t},X=function(e,t){for(var r=J(e),n=J(t),i=0;i<r.length;i+=1){var a=r[i];if(n.indexOf(a)>=0)return a}return!1},ee=function(e,t,r){var n=x(e),i=x(t),a=n[0],u=!1;return i.filter(Boolean).forEach(function(e){u=X(u||e,e)||u,r.filter(Boolean).forEach(function(e){var t=X(a,e);t&&(u=!u||t.contains(u)?t:X(t,u))})}),u},et=function(e,t){var r=new Map;return t.forEach(function(e){return r.set(e.node,e)}),e.map(function(e){return r.get(e)}).filter(U)},er=function(e,t){var r=document&&j(),n=E(e).filter(I),i=ee(r||e,e,n),a=new Map,u=Y(n,a),o=Q(n,a).filter(function(e){return I(e.node)});if(o[0]||(o=u)[0]){var s=Y([i],a).map(function(e){return e.node}),l=et(s,o),c=l.map(function(e){return e.node}),f=Z(c,s,r,t);if(f===q){var d,m=u.map(function(e){return e.node}).filter((d=n.reduce(function(e,t){return e.concat(K(w(t.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(e){return z([e])}).reduce(function(e,t){return e.concat(t)},[]),a))},[]),function(e){var t;return e.autofocus||!!(null===(t=C(e))||void 0===t?void 0:t.autofocus)||d.indexOf(e)>=0}));return{node:m&&m.length?P(m):P(c)}}return void 0===f?f:l[f]}},en=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ei=0,ea=!1,eu=function(e,t,r){void 0===r&&(r={});var n=er(e,t);if(!ea&&n){if(ei>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ea=!0,setTimeout(function(){ea=!1},1);return}ei++,en(n.node,r.focusOptions),ei--}},eo=function(e){var t=E(e).filter(I),r=ee(e,e,t),n=new Map,i=Q([r],n,!0),a=Q(t,n).filter(function(e){return I(e.node)}).map(function(e){return e.node});return i.map(function(e){var t=e.node;return{node:t,index:e.index,lockItem:a.indexOf(t)>=0,guard:M(t)}})};function es(e){var t=window.setImmediate;void 0!==t?t(e):setTimeout(e,1)}var el=null,ec=null,ef=null,ed=!1,em=function(){return!0},ev=function(e,t){ef={observerNode:e,portaledElement:t}};function ey(e,t,r,n){var i=null,a=e;do{var u=n[a];if(u.guard)u.node.dataset.focusAutoGuard&&(i=u);else if(u.lockItem){if(a!==e)return;i=null}else break}while((a+=r)!==t);i&&(i.node.tabIndex=0)}var eg=function(e){return e&&"current"in e?e.current:e},eh=function(){var e=!1;if(el){var t=el,r=t.observed,n=t.persistentFocus,i=t.autoFocus,a=t.shards,u=t.crossFrame,o=t.focusOptions,s=r||ef&&ef.portaledElement,l=document&&document.activeElement;if(s){var c=[s].concat(a.map(eg).filter(Boolean));if((!l||(el.whiteList||em)(l))&&(n||(u?Boolean(ed):"meanwhile"===ed)||!(document&&document.activeElement===document.body||A())||!ec&&i)&&(s&&!(k(c)||l&&c.some(function(e){return function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))}(l,e,e)})||ef&&ef.portaledElement===l)&&(document&&!ec&&l&&!i?(l.blur&&l.blur(),document.body.focus()):(e=eu(c,ec,{focusOptions:o}),ef={})),ed=!1,ec=document&&document.activeElement),document){var f=document&&document.activeElement,d=eo(c),m=d.map(function(e){return e.node}).indexOf(f);m>-1&&(d.filter(function(e){var t=e.guard,r=e.node;return t&&r.dataset.focusAutoGuard}).forEach(function(e){return e.node.removeAttribute("tabIndex")}),ey(m,d.length,1,d),ey(m,-1,-1,d))}}}return e},eb=function(e){eh()&&e&&(e.stopPropagation(),e.preventDefault())},ep=function(){return es(eh)},eO=function(){ed="just",setTimeout(function(){ed="meanwhile"},0)},e_=function(){document.addEventListener("focusin",eb),document.addEventListener("focusout",ep),window.addEventListener("blur",eO)},ew=function(){document.removeEventListener("focusin",eb),document.removeEventListener("focusout",ep),window.removeEventListener("blur",eO)};y.assignSyncMedium(function(e){var t=e.target,r=e.currentTarget;r.contains(t)||ev(r,t)}),g.assignMedium(ep),h.assignMedium(function(e){return e({moveFocusInside:eu,focusInside:k})});var ex=(a=function(e){var t=e.slice(-1)[0];t&&!el&&e_();var r=el,n=r&&t&&t.id===r.id;el=t,!r||n||(r.onDeactivation(),e.filter(function(e){return e.id===r.id}).length||r.returnFocus(!t)),t?(ec=null,n&&r.observed===t.observed||t.onActivation(),eh(!0),es(eh)):(ew(),ec=null)},function(e){var t,r,n,i,o=[];function s(){a(i=o.map(function(e){return e.props}).filter(function(e){return!e.disabled}))}var l=function(t){function r(){return t.apply(this,arguments)||this}(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,_(n,t),r.peek=function(){return i};var n,a=r.prototype;return a.componentDidMount=function(){o.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=o.indexOf(this);o.splice(e,1),s()},a.render=function(){return u.createElement(e,this.props)},r}(u.PureComponent);return t=l,r="displayName",n="SideEffect("+(e.displayName||e.name||"Component")+")",r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,l})(function(){return null}),ej=u.forwardRef(function(e,t){return u.createElement(O,n({sideCar:ex,ref:t},e))}),eA=O.propTypes||{};eA.sideCar,function(e,t){if(null!=e){var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r])}}(eA,["sideCar"]),ej.propTypes={};var eS=ej},5242:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}},1752:function(e,t,r){r.d(t,{Z:function(){return n}});function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},9466:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7523),i=r(5242),a=r(2279),u=r(9047);function o(e){return(0,n.Z)(e)||(0,i.Z)(e)||(0,a.Z)(e)||(0,u.Z)()}},4285:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7452),i=r(5242),a=r(2279);function u(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,i.Z)(e)||(0,a.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},8039:function(e,t,r){r.d(t,{KN:function(){return C},Qr:function(){return N},U2:function(){return v},cI:function(){return ep},t8:function(){return M}});var n=r(7378),i=e=>"checkbox"===e.type,a=e=>e instanceof Date,u=e=>null==e;let o=e=>"object"==typeof e;var s=e=>!u(e)&&!Array.isArray(e)&&o(e)&&!a(e),l=e=>s(e)&&e.target?i(e.target)?e.target.checked:e.target.value:e,c=e=>e.substring(0,e.search(/.\d/))||e,f=(e,t)=>[...e].some(e=>c(t)===e),d=e=>e.filter(Boolean),m=e=>void 0===e,v=(e,t,r)=>{if(!t||!s(e))return r;let n=d(t.split(/[,[\].]+?/)).reduce((e,t)=>u(e)?e:e[t],e);return m(n)||n===e?m(e[t])?r:e[t]:n};let y={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},g={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},h={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var b=(e,t)=>{let r=Object.assign({},e);return delete r[t],r};let p=n.createContext(null),O=()=>n.useContext(p);var _=(e,t,r,n=!0)=>{let i={};for(let a in e)Object.defineProperty(i,a,{get:()=>{let i=a;return t[i]!==g.all&&(t[i]=!n||g.all),r&&(r[i]=!0),e[i]}});return i},w=e=>s(e)&&!Object.keys(e).length,x=(e,t,r)=>{let n=b(e,"name");return w(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find(e=>t[e]===(!r||g.all))},j=e=>Array.isArray(e)?e:[e],A=(e,t,r)=>r&&t?e===t:!e||!t||e===t||j(e).some(e=>e&&(e.startsWith(t)||t.startsWith(e)));function S(e){let t=n.useRef(e);t.current=e,n.useEffect(()=>{let r=e=>{e&&e.unsubscribe()},n=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>r(n)},[e.disabled])}var F=e=>"string"==typeof e,E=(e,t,r,n)=>{let i=Array.isArray(e);return F(e)?(n&&t.watch.add(e),v(r,e)):i?e.map(e=>(n&&t.watch.add(e),v(r,e))):(n&&(t.watchAll=!0),r)},k=e=>"function"==typeof e,V=e=>{for(let t in e)if(k(e[t]))return!0;return!1};let N=e=>e.render(function(e){let t=O(),{name:r,control:i=t.control,shouldUnregister:a}=e,u=f(i._names.array,r),o=function(e){let t=O(),{control:r=t.control,name:i,defaultValue:a,disabled:u,exact:o}=e||{},l=n.useRef(i);l.current=i;let c=n.useCallback(e=>{if(A(l.current,e.name,o)){let t=E(l.current,r._names,e.values||r._formValues);d(m(l.current)||s(t)&&!V(t)?Object.assign({},t):Array.isArray(t)?[...t]:m(t)?a:t)}},[r,o,a]);S({disabled:u,subject:r._subjects.watch,callback:c});let[f,d]=n.useState(m(a)?r._getWatch(i):a);return n.useEffect(()=>{r._removeUnmounted()}),f}({control:i,name:r,defaultValue:v(i._formValues,r,v(i._defaultValues,r,e.defaultValue)),exact:!0}),c=function(e){let t=O(),{control:r=t.control,disabled:i,name:a,exact:u}=e||{},[o,s]=n.useState(r._formState),l=n.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=n.useRef(a),f=n.useRef(!0);c.current=a;let d=n.useCallback(e=>f.current&&A(c.current,e.name,u)&&x(e,l.current)&&s(Object.assign(Object.assign({},r._formState),e)),[r,u]);return S({disabled:i,callback:d,subject:r._subjects.state}),n.useEffect(()=>()=>{f.current=!1},[]),_(o,r._proxyFormState,l.current,!1)}({control:i,name:r}),d=n.useRef(i.register(r,Object.assign(Object.assign({},e.rules),{value:o})));return n.useEffect(()=>{let e=(e,t)=>{let r=v(i._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{let t=i._options.shouldUnregister||a;(u?t&&!i._stateFlags.action:t)?i.unregister(r):e(r,!1)}},[r,i,u,a]),{field:{name:r,value:o,onChange:n.useCallback(e=>{d.current.onChange({target:{value:l(e),name:r},type:y.CHANGE})},[r]),onBlur:n.useCallback(()=>{d.current.onBlur({target:{value:v(i._formValues,r),name:r},type:y.BLUR})},[r,i]),ref:n.useCallback(e=>{let t=v(i._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})},[r,i._fields])},formState:c,fieldState:i.getFieldState(r,c)}}(e));var C=(e,t,r,n,i)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[n]:i||!0})}):{},D=e=>/^\w*$/.test(e),T=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function M(e,t,r){let n=-1,i=D(t)?[t]:T(t),a=i.length,u=a-1;for(;++n<a;){let o=i[n],l=r;if(n!==u){let c=e[o];l=s(c)||Array.isArray(c)?c:isNaN(+i[n+1])?{}:[]}e[o]=l,e=e[o]}return e}let I=(e,t,r)=>{for(let n of r||Object.keys(e)){let i=v(e,n);if(i){let a=i._f,u=b(i,"_f");if(a&&t(a.name)){if(a.ref.focus&&m(a.ref.focus()))break;if(a.refs){a.refs[0].focus();break}}else s(u)&&I(u,t)}}};var U=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));function B(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(r||s(e)))return e;else for(let n in t=r?[]:{},e){if(k(e[n])){t=e;break}t[n]=B(e[n])}return t}function L(){let e=[],t=t=>{for(let r of e)r.next(t)},r=t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),n=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:n}}var P=e=>u(e)||!o(e);function R(e,t){if(P(e)||P(t))return e===t;if(a(e)&&a(t))return e.getTime()===t.getTime();let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let i of r){let u=e[i];if(!n.includes(i))return!1;if("ref"!==i){let o=t[i];if(a(u)&&a(o)||s(u)&&s(o)||Array.isArray(u)&&Array.isArray(o)?!R(u,o):u!==o)return!1}}return!0}var q=e=>({isOnSubmit:!e||e===g.onSubmit,isOnBlur:e===g.onBlur,isOnChange:e===g.onChange,isOnAll:e===g.all,isOnTouch:e===g.onTouched}),Z=e=>"boolean"==typeof e,G=e=>"file"===e.type,W=e=>e instanceof HTMLElement,H=e=>"select-multiple"===e.type,$=e=>"radio"===e.type,z=e=>$(e)||i(e),K="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document,Q=e=>W(e)&&e.isConnected;function Y(e,t){let r;let n=D(t)?[t]:T(t),i=1==n.length?e:function(e,t){let r=t.slice(0,-1).length,n=0;for(;n<r;)e=m(e)?n++:e[t[n++]];return e}(e,n),a=n[n.length-1];i&&delete i[a];for(let u=0;u<n.slice(0,-1).length;u++){let o,l=-1,c=n.slice(0,-(u+1)),f=c.length-1;for(u>0&&(r=e);++l<c.length;){let d=c[l];o=o?o[d]:e[d],f===l&&(s(o)&&w(o)||Array.isArray(o)&&!o.filter(e=>s(e)&&!w(e)||Z(e)||Array.isArray(e)&&e.length).length)&&(r?delete r[d]:delete e[d]),r=o}}return e}function J(e,t={}){let r=Array.isArray(e);if(s(e)||r)for(let n in e)Array.isArray(e[n])||s(e[n])&&!V(e[n])?(t[n]=Array.isArray(e[n])?[]:{},J(e[n],t[n])):u(e[n])||(t[n]=!0);return t}var X=(e,t)=>(function e(t,r,n){let i=Array.isArray(t);if(s(t)||i)for(let a in t)Array.isArray(t[a])||s(t[a])&&!V(t[a])?m(r)||P(n[a])?n[a]=Array.isArray(t[a])?J(t[a],[]):Object.assign({},J(t[a])):e(t[a],u(r)?{}:r[a],n[a]):n[a]=!R(t[a],r[a]);return n})(e,t,J(t));let ee={value:!1,isValid:!1},et={value:!0,isValid:!0};var er=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!m(e[0].attributes.value)?m(e[0].value)||""===e[0].value?et:{value:e[0].value,isValid:!0}:et:ee}return ee},en=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>m(e)?e:t?""===e?NaN:+e:r&&F(e)?new Date(e):n?n(e):e;let ei={isValid:!1,value:null};var ea=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,ei):ei;function eu(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:G(t)?t.files:$(t)?ea(e.refs).value:H(t)?[...t.selectedOptions].map(({value:e})=>e):i(t)?er(e.refs).value:en(m(t.value)?e.ref.value:t.value,e)}var eo=(e,t,r,n)=>{let i={};for(let a of e){let u=v(t,a);u&&M(i,a,u._f)}return{criteriaMode:r,names:[...e],fields:i,shouldUseNativeValidation:n}},es=e=>e instanceof RegExp,el=e=>m(e)?void 0:es(e)?e.source:s(e)?es(e.value)?e.value.source:e.value:e,ec=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ef(e,t,r){let n=v(e,r);if(n||D(r))return{error:n,name:r};let i=r.split(".");for(;i.length;){let a=i.join("."),u=v(t,a),o=v(e,a);if(u&&!Array.isArray(u)&&r!==a)break;if(o&&o.type)return{name:a,error:o};i.pop()}return{name:r}}var ed=(e,t,r,n,i)=>!i.isOnAll&&(!r&&i.isOnTouch?!(t||e):(r?n.isOnBlur:i.isOnBlur)?!e:(r?!n.isOnChange:!i.isOnChange)||e),em=(e,t)=>!d(v(e,t)).length&&Y(e,t),ev=e=>F(e)||n.isValidElement(e);function ey(e,t,r="validate"){if(ev(e)||Array.isArray(e)&&e.every(ev)||Z(e)&&!e)return{type:r,message:ev(e)?e:"",ref:t}}var eg=e=>s(e)&&!es(e)?e:{value:e,message:""},eh=async(e,t,r,n)=>{let{ref:a,refs:o,required:l,maxLength:c,minLength:f,min:d,max:m,pattern:v,validate:y,name:g,valueAsNumber:b,mount:p,disabled:O}=e._f;if(!p||O)return{};let _=o?o[0]:a,x=e=>{n&&_.reportValidity&&(_.setCustomValidity(Z(e)?"":e||" "),_.reportValidity())},j={},A=$(a),S=i(a),E=(b||G(a))&&!a.value||""===t||Array.isArray(t)&&!t.length,V=C.bind(null,g,r,j),N=(e,t,r,n=h.maxLength,i=h.minLength)=>{let u=e?t:r;j[g]=Object.assign({type:e?n:i,message:u,ref:a},V(e?n:i,u))};if(l&&(!(A||S)&&(E||u(t))||Z(t)&&!t||S&&!er(o).isValid||A&&!ea(o).isValid)){let{value:D,message:T}=ev(l)?{value:!!l,message:l}:eg(l);if(D&&(j[g]=Object.assign({type:h.required,message:T,ref:_},V(h.required,T)),!r))return x(T),j}if(!E&&(!u(d)||!u(m))){let M,I;let U=eg(m),B=eg(d);if(isNaN(t)){let L=a.valueAsDate||new Date(t);F(U.value)&&(M=L>new Date(U.value)),F(B.value)&&(I=L<new Date(B.value))}else{let P=a.valueAsNumber||+t;u(U.value)||(M=P>U.value),u(B.value)||(I=P<B.value)}if((M||I)&&(N(!!M,U.message,B.message,h.max,h.min),!r))return x(j[g].message),j}if((c||f)&&!E&&F(t)){let R=eg(c),q=eg(f),W=!u(R.value)&&t.length>R.value,H=!u(q.value)&&t.length<q.value;if((W||H)&&(N(W,R.message,q.message),!r))return x(j[g].message),j}if(v&&!E&&F(t)){let{value:z,message:K}=eg(v);if(es(z)&&!t.match(z)&&(j[g]=Object.assign({type:h.pattern,message:K,ref:a},V(h.pattern,K)),!r))return x(K),j}if(y){if(k(y)){let Q=await y(t),Y=ey(Q,_);if(Y&&(j[g]=Object.assign(Object.assign({},Y),V(h.validate,Y.message)),!r))return x(Y.message),j}else if(s(y)){let J={};for(let X in y){if(!w(J)&&!r)break;let ee=ey(await y[X](t),_,X);ee&&(J=Object.assign(Object.assign({},ee),V(X,ee.message)),x(ee.message),r&&(j[g]=J))}if(!w(J)&&(j[g]=Object.assign({ref:_},J),!r))return j}}return x(!0),j};let eb={mode:g.onSubmit,reValidateMode:g.onChange,shouldFocusError:!0};function ep(e={}){let t=n.useRef(),[r,o]=n.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},function(e={}){let t,r=Object.assign(Object.assign({},eb),e),n={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},s=r.defaultValues||{},c=r.shouldUnregister?{}:B(s),h={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},O=0,_={},x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},A={watch:L(),array:L(),state:L()},S=q(r.mode),V=q(r.reValidateMode),N=r.criteriaMode===g.all,C=(e,t)=>(...r)=>{clearTimeout(O),O=window.setTimeout(()=>e(...r),t)},D=async e=>{let t=!1;return x.isValid&&(t=r.resolver?w((await er()).errors):await ea(o,!0),e||t===n.isValid||(n.isValid=t,A.state.next({isValid:t}))),t},T=(e,t=[],r,i,a=!0,u=!0)=>{if(i&&r){if(h.action=!0,u&&Array.isArray(v(o,e))){let l=r(v(o,e),i.argA,i.argB);a&&M(o,e,l)}if(x.errors&&u&&Array.isArray(v(n.errors,e))){let f=r(v(n.errors,e),i.argA,i.argB);a&&M(n.errors,e,f),em(n.errors,e)}if(x.touchedFields&&Array.isArray(v(n.touchedFields,e))){let d=r(v(n.touchedFields,e),i.argA,i.argB);a&&M(n.touchedFields,e,d)}x.dirtyFields&&(n.dirtyFields=X(s,c)),A.state.next({isDirty:ev(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else M(c,e,t)},$=(e,t)=>(M(n.errors,e,t),A.state.next({errors:n.errors})),J=(e,t,r,n)=>{let i=v(o,e);if(i){let a=v(c,e,m(r)?v(s,e):r);m(a)||n&&n.defaultChecked||t?M(c,e,t?a:eu(i._f)):ep(e,a),h.mount&&D()}},ee=(e,t,r,i,a)=>{let u=!1,o={name:e},l=v(n.touchedFields,e);if(x.isDirty){let c=n.isDirty;n.isDirty=o.isDirty=ev(),u=c!==o.isDirty}if(x.dirtyFields&&(!r||i)){let f=v(n.dirtyFields,e),d=R(v(s,e),t);d?Y(n.dirtyFields,e):M(n.dirtyFields,e,!0),o.dirtyFields=n.dirtyFields,u=u||f!==v(n.dirtyFields,e)}return r&&!l&&(M(n.touchedFields,e,r),o.touchedFields=n.touchedFields,u=u||x.touchedFields&&l!==r),u&&a&&A.state.next(o),u?o:{}},et=async(r,i,a,u,o)=>{let s=v(n.errors,i),l=x.isValid&&n.isValid!==a;if(e.delayError&&u?(t=t||C($,e.delayError))(i,u):(clearTimeout(O),u?M(n.errors,i,u):Y(n.errors,i)),((u?!R(s,u):s)||!w(o)||l)&&!r){let c=Object.assign(Object.assign(Object.assign({},o),l?{isValid:a}:{}),{errors:n.errors,name:i});n=Object.assign(Object.assign({},n),c),A.state.next(c)}_[i]--,x.isValidating&&!Object.values(_).some(e=>e)&&(A.state.next({isValidating:!1}),_={})},er=async e=>r.resolver?await r.resolver(Object.assign({},c),r.context,eo(e||p.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},ei=async e=>{let{errors:t}=await er();if(e)for(let r of e){let i=v(t,r);i?M(n.errors,r,i):Y(n.errors,r)}else n.errors=t;return t},ea=async(e,t,i={valid:!0})=>{for(let a in e){let u=e[a];if(u){let o=u._f,s=b(u,"_f");if(o){let l=await eh(u,v(c,o.name),N,r.shouldUseNativeValidation);if(l[o.name]&&(i.valid=!1,t))break;t||(l[o.name]?M(n.errors,o.name,l[o.name]):Y(n.errors,o.name))}s&&await ea(s,t,i)}}return i.valid},es=()=>{for(let e of p.unMount){let t=v(o,e);t&&(t._f.refs?t._f.refs.every(e=>!Q(e)):!Q(t._f.ref))&&ek(e)}p.unMount=new Set},ev=(e,t)=>(e&&t&&M(c,e,t),!R(ej(),s)),ey=(e,t,r)=>{let n=Object.assign({},h.mount?c:m(t)?s:F(e)?{[e]:t}:t);return E(e,p,n,r)},eg=t=>d(v(h.mount?c:s,t,e.shouldUnregister?v(s,t,[]):[])),ep=(e,t,r={})=>{let n=v(o,e),a=t;if(n){let s=n._f;s&&(s.disabled||M(c,e,en(t,s)),a=K&&W(s.ref)&&u(t)?"":t,H(s.ref)?[...s.ref.options].forEach(e=>e.selected=a.includes(e.value)):s.refs?i(s.ref)?s.refs.length>1?s.refs.forEach(e=>e.checked=Array.isArray(a)?!!a.find(t=>t===e.value):a===e.value):s.refs[0]&&(s.refs[0].checked=!!a):s.refs.forEach(e=>e.checked=e.value===a):G(s.ref)?s.ref.value="":(s.ref.value=a,s.ref.type||A.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&ee(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ex(e)},eO=(e,t,r)=>{for(let n in t){let i=t[n],u=`${e}.${n}`,s=v(o,u);!p.array.has(e)&&P(i)&&(!s||s._f)||a(i)?ep(u,i,r):eO(u,i,r)}},e_=(e,t,r={})=>{let i=v(o,e),a=p.array.has(e),l=B(t);M(c,e,l),a?(A.array.next({name:e,values:c}),(x.isDirty||x.dirtyFields)&&r.shouldDirty&&(n.dirtyFields=X(s,c),A.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:ev(e,l)}))):!i||i._f||u(l)?ep(e,l,r):eO(e,l,r),U(e,p)&&A.state.next({}),A.watch.next({name:e})},ew=async e=>{let t=e.target,i=t.name,a=v(o,i);if(a){let u,s;let f=t.type?eu(a._f):l(e),d=e.type===y.BLUR||e.type===y.FOCUS_OUT,m=!ec(a._f)&&!r.resolver&&!v(n.errors,i)&&!a._f.deps||ed(d,v(n.touchedFields,i),n.isSubmitted,V,S),g=U(i,p,d);M(c,i,f),d?a._f.onBlur&&a._f.onBlur(e):a._f.onChange&&a._f.onChange(e);let h=ee(i,f,d,!1),b=!w(h)||g;if(d||A.watch.next({name:i,type:e.type}),m)return b&&A.state.next(Object.assign({name:i},g?{}:h));if(!d&&g&&A.state.next({}),_[i]=(_[i],1),A.state.next({isValidating:!0}),r.resolver){let{errors:O}=await er([i]),x=ef(n.errors,o,i),j=ef(O,o,x.name||i);u=j.error,i=j.name,s=w(O)}else u=(await eh(a,v(c,i),N,r.shouldUseNativeValidation))[i],s=await D(!0);a._f.deps&&ex(a._f.deps),et(!1,i,s,u,h)}},ex=async(e,t={})=>{let i,a;let u=j(e);if(A.state.next({isValidating:!0}),r.resolver){let s=await ei(m(e)?e:u);i=w(s),a=e?!u.some(e=>v(s,e)):i}else e?((a=(await Promise.all(u.map(async e=>{let t=v(o,e);return await ea(t&&t._f?{[e]:t}:t)}))).every(Boolean))||n.isValid)&&D():a=i=await ea(o);return A.state.next(Object.assign(Object.assign(Object.assign({},!F(e)||x.isValid&&i!==n.isValid?{}:{name:e}),r.resolver?{isValid:i}:{}),{errors:n.errors,isValidating:!1})),t.shouldFocus&&!a&&I(o,e=>v(n.errors,e),e?u:p.mount),a},ej=e=>{let t=Object.assign(Object.assign({},s),h.mount?c:{});return m(e)?t:F(e)?v(t,e):e.map(e=>v(t,e))},eA=(e,t)=>({invalid:!!v((t||n).errors,e),isDirty:!!v((t||n).dirtyFields,e),isTouched:!!v((t||n).touchedFields,e),error:v((t||n).errors,e)}),eS=e=>{e?j(e).forEach(e=>Y(n.errors,e)):n.errors={},A.state.next({errors:n.errors})},eF=(e,t,r)=>{let i=(v(o,e,{_f:{}})._f||{}).ref;M(n.errors,e,Object.assign(Object.assign({},t),{ref:i})),A.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&i&&i.focus&&i.focus()},eE=(e,t)=>k(e)?A.watch.subscribe({next:r=>e(ey(void 0,t),r)}):ey(e,t,!0),ek=(e,t={})=>{for(let i of e?j(e):p.mount)p.mount.delete(i),p.array.delete(i),v(o,i)&&(t.keepValue||(Y(o,i),Y(c,i)),t.keepError||Y(n.errors,i),t.keepDirty||Y(n.dirtyFields,i),t.keepTouched||Y(n.touchedFields,i),r.shouldUnregister||t.keepDefaultValue||Y(s,i));A.watch.next({}),A.state.next(Object.assign(Object.assign({},n),t.keepDirty?{isDirty:ev()}:{})),t.keepIsValid||D()},eV=(e,t={})=>{let n=v(o,e),i=Z(t.disabled);return M(o,e,{_f:Object.assign(Object.assign(Object.assign({},n&&n._f?n._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),p.mount.add(e),n?i&&M(c,e,t.disabled?void 0:v(c,e,eu(n._f))):J(e,!0,t.value),Object.assign(Object.assign(Object.assign({},i?{disabled:t.disabled}:{}),r.shouldUseNativeValidation?{required:!!t.required,min:el(t.min),max:el(t.max),minLength:el(t.minLength),maxLength:el(t.maxLength),pattern:el(t.pattern)}:{}),{name:e,onChange:ew,onBlur:ew,ref:i=>{if(i){eV(e,t),n=v(o,e);let a=m(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,u=z(a),s=n._f.refs||[];(u?s.find(e=>e===a):a===n._f.ref)||(M(o,e,{_f:Object.assign(Object.assign({},n._f),u?{refs:s.concat(a).filter(Q),ref:{type:a.type,name:e}}:{ref:a})}),J(e,!1,void 0,a))}else(n=v(o,e,{}))._f&&(n._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(f(p.array,e)&&h.action)&&p.unMount.add(e)}})},eN=(e,t)=>async i=>{i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist());let a=!0,u=B(c);A.state.next({isSubmitting:!0});try{if(r.resolver){let{errors:s,values:l}=await er();n.errors=s,u=l}else await ea(o);w(n.errors)&&Object.keys(n.errors).every(e=>v(u,e))?(A.state.next({errors:{},isSubmitting:!0}),await e(u,i)):(t&&await t(Object.assign({},n.errors),i),r.shouldFocusError&&I(o,e=>v(n.errors,e),p.mount))}catch(f){throw a=!1,f}finally{n.isSubmitted=!0,A.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:w(n.errors)&&a,submitCount:n.submitCount+1,errors:n.errors})}},eC=(e,t={})=>{v(o,e)&&(m(t.defaultValue)?e_(e,v(s,e)):(e_(e,t.defaultValue),M(s,e,t.defaultValue)),t.keepTouched||Y(n.touchedFields,e),t.keepDirty||(Y(n.dirtyFields,e),n.isDirty=t.defaultValue?ev(e,v(s,e)):ev()),!t.keepError&&(Y(n.errors,e),x.isValid&&D()),A.state.next(Object.assign({},n)))},eD=(t,r={})=>{let i=t||s,a=B(i),u=t&&!w(t)?a:s;if(r.keepDefaultValues||(s=i),!r.keepValues){if(K&&m(t))for(let l of p.mount){let f=v(o,l);if(f&&f._f){let d=Array.isArray(f._f.refs)?f._f.refs[0]:f._f.ref;try{W(d)&&d.closest("form").reset();break}catch(y){}}}c=e.shouldUnregister?r.keepDefaultValues?B(s):{}:a,o={},A.array.next({values:u}),A.watch.next({values:u})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!x.isValid||!!r.keepIsValid,h.watch=!!e.shouldUnregister,A.state.next({submitCount:r.keepSubmitCount?n.submitCount:0,isDirty:r.keepDirty?n.isDirty:!!r.keepDefaultValues&&!R(t,s),isSubmitted:!!r.keepIsSubmitted&&n.isSubmitted,dirtyFields:r.keepDirty?n.dirtyFields:r.keepDefaultValues&&t?Object.entries(t).reduce((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==v(s,t)}),{}):{},touchedFields:r.keepTouched?n.touchedFields:{},errors:r.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eT=(e,t={})=>{let r=v(o,e)._f,n=r.refs?r.refs[0]:r.ref;t.shouldSelect?n.select():n.focus()};return{control:{register:eV,unregister:ek,getFieldState:eA,_executeSchema:er,_getWatch:ey,_getDirty:ev,_updateValid:D,_removeUnmounted:es,_updateFieldArray:T,_getFieldArray:eg,_subjects:A,_proxyFormState:x,get _fields(){return o},get _formValues(){return c},get _stateFlags(){return h},set _stateFlags(value){h=value},get _defaultValues(){return s},get _names(){return p},set _names(value){p=value},get _formState(){return n},set _formState(value){n=value},get _options(){return r},set _options(value){r=Object.assign(Object.assign({},r),value)}},trigger:ex,register:eV,handleSubmit:eN,watch:eE,setValue:e_,getValues:ej,reset:eD,resetField:eC,clearErrors:eS,unregister:ek,setError:eF,setFocus:eT,getFieldState:eA}}(e)),{formState:r});let s=t.current.control,c=n.useCallback(e=>{x(e,s._proxyFormState,!0)&&(s._formState=Object.assign(Object.assign({},s._formState),e),o(Object.assign({},s._formState)))},[s]);return S({subject:s._subjects.state,callback:c}),n.useEffect(()=>{s._stateFlags.mount||(s._proxyFormState.isValid&&s._updateValid(),s._stateFlags.mount=!0),s._stateFlags.watch&&(s._stateFlags.watch=!1,s._subjects.state.next({})),s._removeUnmounted()}),t.current.formState=_(r,s._proxyFormState),t.current}}}]);