(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8837],{37914:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{Kb:function(){return er},M$:function(){return ep}});var o=n(23615),u=n.n(o),c=n(27378);n(85353);let l=e=>"object"==typeof e&&null!=e&&1===e.nodeType,a=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,s=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return a(n.overflowY,t)||a(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},d=(e,t,n,r,i,o,u,c)=>o<e&&u>t||o>e&&u<t?0:o<=e&&c<=n||u>=t&&c>=n?o-e-r:u>t&&c<n||o<e&&c>n?u-t+i:0,f=e=>{let t=e.parentElement;return null==t?e.getRootNode().host||null:t},p=(e,t)=>{var n,r,i,o;if("undefined"==typeof document)return[];let{scrollMode:u,block:c,inline:a,boundary:p,skipOverflowHiddenElements:h}=t,g="function"==typeof p?p:e=>e!==p;if(!l(e))throw TypeError("Invalid target");let m=document.scrollingElement||document.documentElement,I=[],v=e;for(;l(v)&&g(v);){if((v=f(v))===m){I.push(v);break}null!=v&&v===document.body&&s(v)&&!s(document.documentElement)||null!=v&&s(v,h)&&I.push(v)}let y=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,b=null!=(o=null==(i=window.visualViewport)?void 0:i.height)?o:innerHeight,{scrollX:x,scrollY:w}=window,{height:k,width:O,top:D,right:C,bottom:E,left:T}=e.getBoundingClientRect(),{top:K,right:S,bottom:M,left:R}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),P="start"===c||"nearest"===c?D-K:"end"===c?E+M:D+k/2-K+M,V="center"===a?T+O/2-R+S:"end"===a?C+S:T-R,B=[];for(let e=0;e<I.length;e++){let t=I[e],{height:n,width:r,top:i,right:o,bottom:l,left:s}=t.getBoundingClientRect();if("if-needed"===u&&D>=0&&T>=0&&E<=b&&C<=y&&D>=i&&E<=l&&T>=s&&C<=o)break;let f=getComputedStyle(t),p=parseInt(f.borderLeftWidth,10),h=parseInt(f.borderTopWidth,10),g=parseInt(f.borderRightWidth,10),v=parseInt(f.borderBottomWidth,10),K=0,S=0,M="offsetWidth"in t?t.offsetWidth-t.clientWidth-p-g:0,R="offsetHeight"in t?t.offsetHeight-t.clientHeight-h-v:0,_="offsetWidth"in t?0===t.offsetWidth?0:r/t.offsetWidth:0,F="offsetHeight"in t?0===t.offsetHeight?0:n/t.offsetHeight:0;if(m===t)K="start"===c?P:"end"===c?P-b:"nearest"===c?d(w,w+b,b,h,v,w+P,w+P+k,k):P-b/2,S="start"===a?V:"center"===a?V-y/2:"end"===a?V-y:d(x,x+y,y,p,g,x+V,x+V+O,O),K=Math.max(0,K+w),S=Math.max(0,S+x);else{K="start"===c?P-i-h:"end"===c?P-l+v+R:"nearest"===c?d(i,l,n,h,v+R,P,P+k,k):P-(i+n/2)+R/2,S="start"===a?V-s-p:"center"===a?V-(s+r/2)+M/2:"end"===a?V-o+g+M:d(s,o,r,p,g+M,V,V+O,O);let{scrollLeft:e,scrollTop:u}=t;K=0===F?0:Math.max(0,Math.min(u+K/F,t.scrollHeight-n/F+R)),S=0===_?0:Math.max(0,Math.min(e+S/_,t.scrollWidth-r/_+M)),P+=u-K,V+=e-S}B.push({el:t,top:K,left:S})}return B};var h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function g(){}function m(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function I(e,t){var n;function r(){n&&clearTimeout(n)}function i(){for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];r(),n=setTimeout(function(){n=null,e.apply(void 0,o)},t)}return i.cancel=r,i}function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some(function(t){return t&&t.apply(void 0,[e].concat(r)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault})}}function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach(function(t){"function"==typeof t?t(e):t&&(t.current=e)})}}function b(e,t){return e&&t?Object.keys(e).reduce(function(n,r){return n[r]=void 0!==t[r]?t[r]:e[r],n},{}):e}function x(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function w(e,t,n,r,i){void 0===i&&(i=!1);var o=n.length;if(0===o)return -1;var u=o-1;("number"!=typeof e||e<0||e>u)&&(e=t>0?-1:u+1);var c=e+t;c<0?c=i?u:0:c>u&&(c=i?0:u);var l=k(c,t<0,n,r,i);return -1===l?e>=o?-1:e:l}function k(e,t,n,r,i){void 0===i&&(i=!1);var o=n.length;if(t){for(var u=e;u>=0;u--)if(!r(n[u],u))return u}else for(var c=e;c<o;c++)if(!r(n[c],c))return c;return i?k(t?o-1:0,t,n,r):-1}function O(e,t,n,r){return void 0===r&&(r=!0),n&&t.some(function(t){return t&&(m(t,e,n)||r&&m(t,n.document.activeElement,n))})}"function"==typeof SuppressedError&&SuppressedError;var D=I(function(e){C(e).textContent=""},500);function C(e){var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t)),t}var E={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""},T=I(function(e,t){e&&t&&(C(t).textContent=e,D(t))},200),K="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?c.useLayoutEffect:c.useEffect,S=function(e){var t=e.id,n=e.labelId,r=e.menuId,i=e.getItemId,o=e.toggleButtonId,u=e.inputId,l="downshift-"+c.useId();return t||(t=l),(0,c.useRef)({labelId:n||t+"-label",menuId:r||t+"-menu",getItemId:i||function(e){return t+"-item-"+e},toggleButtonId:o||t+"-toggle-button",inputId:u||t+"-input"}).current};function M(e,t,n,r){var i,o;if(void 0===e){if(void 0===t)throw Error(r);i=n[t],o=t}else o=void 0===t?n.indexOf(e):t,i=e;return[i,o]}function R(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function P(e){var t=(0,c.useRef)(e);return t.current=e,t}function V(e,t,n,r){var o=(0,c.useRef)(),u=(0,c.useRef)(),l=(0,c.useCallback)(function(t,n){u.current=n;var r=e(t=b(t,n.props),n);return n.props.stateReducer(t,i({},n,{changes:r}))},[e]),a=(0,c.useReducer)(l,t,n),s=a[0],d=a[1],f=P(t),p=(0,c.useCallback)(function(e){return d(i({props:f.current},e))},[f]),h=u.current;return(0,c.useEffect)(function(){var e,t,n,u=b(o.current,null==h?void 0:h.props);h&&o.current&&!r(u,s)&&(e=h.props,t=h.type,n={},Object.keys(u).forEach(function(e){var t,r,o;t=h.props,r=h.type,t[o="on"+R(e)+"Change"]&&void 0!==s[e]&&s[e]!==u[e]&&t[o](i({type:r},s)),s[e]!==u[e]&&(n[e]=s[e])}),e.onStateChange&&Object.keys(n).length&&e.onStateChange(i({type:t},n))),o.current=s},[s,h,r]),[s,p]}var B={itemToString:function(e){return e?String(e):""},itemToKey:function(e){return e},stateReducer:function(e,t){return t.changes},scrollIntoView:function(e,t){e&&p(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach(function(e){var t=e.el,n=e.top,r=e.left;t.scrollTop=n,t.scrollLeft=r})},environment:"undefined"==typeof window?void 0:window};function _(e,t,n){void 0===n&&(n=E);var r=e["default"+R(t)];return void 0!==r?r:n[t]}function F(e,t,n){void 0===n&&(n=E);var r=e[t];if(void 0!==r)return r;var i=e["initial"+R(t)];return void 0!==i?i:_(e,t,n)}function L(e,t,n){var r=e.items,i=e.initialHighlightedIndex,o=e.defaultHighlightedIndex,u=e.isItemDisabled,c=e.itemToKey,l=t.selectedItem,a=t.highlightedIndex;return 0===r.length?-1:void 0===i||a!==i||u(r[i],i)?void 0===o||u(r[o],o)?l?r.findIndex(function(e){return c(l)===c(e)}):n<0&&!u(r[r.length-1],r.length-1)?r.length-1:n>0&&!u(r[0],0)?0:-1:o:i}var A=function(){return g};function H(e,t,n,r){void 0===r&&(r={});var i=r.document,o=N();(0,c.useEffect)(function(){e&&!o&&i&&T(e(t),i)},n),(0,c.useEffect)(function(){return function(){var e;T.cancel(),(e=null==i?void 0:i.getElementById("a11y-status-message"))&&e.remove()}},[i])}function j(e,t,n){void 0===n&&(n=!0);var r,o=(null==(r=e.items)?void 0:r.length)&&t>=0;return i({isOpen:!1,highlightedIndex:-1},o&&i({selectedItem:e.items[t],isOpen:_(e,"isOpen"),highlightedIndex:_(e,"highlightedIndex")},n&&{inputValue:e.itemToString(e.items[t])}))}function W(e,t){return e.isOpen===t.isOpen&&e.inputValue===t.inputValue&&e.highlightedIndex===t.highlightedIndex&&e.selectedItem===t.selectedItem}function N(){var e=c.useRef(!0);return c.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e.current}function q(e){var t=_(e,"highlightedIndex");return t>-1&&e.isItemDisabled(e.items[t],t)?-1:t}var U={environment:u().shape({addEventListener:u().func.isRequired,removeEventListener:u().func.isRequired,document:u().shape({createElement:u().func.isRequired,getElementById:u().func.isRequired,activeElement:u().any.isRequired,body:u().any.isRequired}).isRequired,Node:u().func.isRequired}),itemToString:u().func,itemToKey:u().func,stateReducer:u().func},Z=i({},U,{getA11yStatusMessage:u().func,highlightedIndex:u().number,defaultHighlightedIndex:u().number,initialHighlightedIndex:u().number,isOpen:u().bool,defaultIsOpen:u().bool,initialIsOpen:u().bool,selectedItem:u().any,initialSelectedItem:u().any,defaultSelectedItem:u().any,id:u().string,labelId:u().string,menuId:u().string,getItemId:u().func,toggleButtonId:u().string,onSelectedItemChange:u().func,onHighlightedIndexChange:u().func,onStateChange:u().func,onIsOpenChange:u().func,scrollIntoView:u().func});function z(e,t,n){var r,o=t.type,u=t.props;switch(o){case n.ItemMouseMove:r={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:r={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:r={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:L(u,e,0)};break;case n.FunctionOpenMenu:r={isOpen:!0,highlightedIndex:L(u,e,0)};break;case n.FunctionCloseMenu:r={isOpen:!1};break;case n.FunctionSetHighlightedIndex:r={highlightedIndex:u.isItemDisabled(u.items[t.highlightedIndex],t.highlightedIndex)?-1:t.highlightedIndex};break;case n.FunctionSetInputValue:r={inputValue:t.inputValue};break;case n.FunctionReset:r={highlightedIndex:q(u),isOpen:_(u,"isOpen"),selectedItem:_(u,"selectedItem"),inputValue:_(u,"inputValue")};break;default:throw Error("Reducer called without proper action type.")}return i({},e,r)}h(h({},Z),{items:u().array.isRequired,isItemDisabled:u().func}),h(h({},B),{isItemDisabled:function(){return!1}});var Y=Object.freeze({__proto__:null,FunctionCloseMenu:17,FunctionOpenMenu:16,FunctionReset:21,FunctionSelectItem:19,FunctionSetHighlightedIndex:18,FunctionSetInputValue:20,FunctionToggleMenu:15,ItemClick:14,ItemMouseMove:13,MenuMouseLeave:12,ToggleButtonBlur:11,ToggleButtonClick:0,ToggleButtonKeyDownArrowDown:1,ToggleButtonKeyDownArrowUp:2,ToggleButtonKeyDownCharacter:3,ToggleButtonKeyDownEnd:6,ToggleButtonKeyDownEnter:7,ToggleButtonKeyDownEscape:4,ToggleButtonKeyDownHome:5,ToggleButtonKeyDownPageDown:10,ToggleButtonKeyDownPageUp:9,ToggleButtonKeyDownSpaceButton:8}),X=Object.freeze({__proto__:null,ControlledPropUpdatedSelectedItem:22,FunctionCloseMenu:17,FunctionOpenMenu:16,FunctionReset:21,FunctionSelectItem:19,FunctionSetHighlightedIndex:18,FunctionSetInputValue:20,FunctionToggleMenu:15,InputBlur:9,InputChange:8,InputClick:10,InputKeyDownArrowDown:0,InputKeyDownArrowUp:1,InputKeyDownEnd:4,InputKeyDownEnter:7,InputKeyDownEscape:2,InputKeyDownHome:3,InputKeyDownPageDown:6,InputKeyDownPageUp:5,ItemClick:13,ItemMouseMove:12,MenuMouseLeave:11,ToggleButtonClick:14});function $(e){var t,n,r,o,u,c,l=(r=F(t=e,"selectedItem"),o=F(t,"isOpen"),u=(n=F(t,"highlightedIndex"))>-1&&t.isItemDisabled(t.items[n],n)?-1:n,c=F(t,"inputValue"),{highlightedIndex:u<0&&r&&o?t.items.findIndex(function(e){return t.itemToKey(e)===t.itemToKey(r)}):u,isOpen:o,selectedItem:r,inputValue:c}),a=l.selectedItem,s=l.inputValue;return""===s&&a&&void 0===e.defaultInputValue&&void 0===e.initialInputValue&&void 0===e.inputValue&&(s=e.itemToString(a)),i({},l,{inputValue:s})}i({},Z,{items:u().array.isRequired,isItemDisabled:u().func,inputValue:u().string,defaultInputValue:u().string,initialInputValue:u().string,inputId:u().string,onInputValueChange:u().func});var G=i({},B,{isItemDisabled:function(){return!1}});function J(e,t){var n,r,o=t.type,u=t.props,c=t.altKey;switch(o){case 13:r={isOpen:_(u,"isOpen"),highlightedIndex:q(u),selectedItem:u.items[t.index],inputValue:u.itemToString(u.items[t.index])};break;case 0:r=e.isOpen?{highlightedIndex:w(e.highlightedIndex,1,u.items,u.isItemDisabled,!0)}:{highlightedIndex:c&&null==e.selectedItem?-1:L(u,e,1),isOpen:u.items.length>=0};break;case 1:r=e.isOpen?c?j(u,e.highlightedIndex):{highlightedIndex:w(e.highlightedIndex,-1,u.items,u.isItemDisabled,!0)}:{highlightedIndex:L(u,e,-1),isOpen:u.items.length>=0};break;case 7:r=j(u,e.highlightedIndex);break;case 2:r=i({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case 5:r={highlightedIndex:w(e.highlightedIndex,-10,u.items,u.isItemDisabled,!0)};break;case 6:r={highlightedIndex:w(e.highlightedIndex,10,u.items,u.isItemDisabled,!0)};break;case 3:r={highlightedIndex:k(0,!1,u.items,u.isItemDisabled)};break;case 4:r={highlightedIndex:k(u.items.length-1,!0,u.items,u.isItemDisabled)};break;case 9:r=i({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&(null==(n=u.items)?void 0:n.length)&&t.selectItem&&{selectedItem:u.items[e.highlightedIndex],inputValue:u.itemToString(u.items[e.highlightedIndex])});break;case 8:r={isOpen:!0,highlightedIndex:q(u),inputValue:t.inputValue};break;case 10:r={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:L(u,e,0)};break;case 19:r={selectedItem:t.selectedItem,inputValue:u.itemToString(t.selectedItem)};break;case 22:r={inputValue:t.inputValue};break;default:return z(e,t,X)}return i({},e,r)}var Q=["onMouseLeave","refKey","ref"],ee=["item","index","refKey","ref","onMouseMove","onMouseDown","onClick","onPress","disabled"],et=["onClick","onPress","refKey","ref"],en=["onKeyDown","onChange","onInput","onBlur","onChangeText","onClick","refKey","ref"];function er(e){void 0===e&&(e={});var t,n,o,u,l,a,s,d,f,p,h,m,I,w,k,D,C,E=i({},G,e),T=E.items,R=E.scrollIntoView,B=E.environment,_=E.getA11yStatusMessage,L=(I=(0,c.useRef)(),k=(w=V(J,E,$,W))[0],D=w[1],C=N(),(0,c.useEffect)(function(){void 0!==E.selectedItem&&(C||E.itemToKey(E.selectedItem)===E.itemToKey(I.current)||D({type:22,inputValue:E.itemToString(E.selectedItem)}),I.current=k.selectedItem===I.current?E.selectedItem:k.selectedItem)},[k.selectedItem,E.selectedItem]),[b(k,E),D]),j=L[0],q=L[1],U=j.isOpen,Z=j.highlightedIndex,z=j.selectedItem,Y=j.inputValue,X=(0,c.useRef)(null),er=(0,c.useRef)({}),ei=(0,c.useRef)(null),eo=(0,c.useRef)(null),eu=N(),ec=S(E),el=(0,c.useRef)(),ea=P({state:j,props:E}),es=(0,c.useCallback)(function(e){return er.current[ec.getItemId(e)]},[ec]);H(_,j,[U,Z,z,Y],B);var ed=(n=(t={menuElement:X.current,highlightedIndex:Z,isOpen:U,itemRefs:er,scrollIntoView:R,getItemNodeFromIndex:es}).highlightedIndex,o=t.isOpen,u=t.itemRefs,l=t.getItemNodeFromIndex,a=t.menuElement,s=t.scrollIntoView,d=(0,c.useRef)(!0),K(function(){!(n<0)&&o&&Object.keys(u.current).length&&(!1===d.current?d.current=!0:s(l(n),a))},[n]),d);(0,c.useEffect)(function(){F(E,"isOpen")&&ei.current&&ei.current.focus()},[]),(0,c.useEffect)(function(){eu||(el.current=T.length)});var ef=(f=B,p=(0,c.useCallback)(function(){ea.current.state.isOpen&&q({type:9,selectItem:!1})},[q,ea]),h=(0,c.useMemo)(function(){return[X,eo,ei]},[X.current,eo.current,ei.current]),m=(0,c.useRef)({isMouseDown:!1,isTouchMove:!1,isTouchEnd:!1}),(0,c.useEffect)(function(){if(!f)return g;var e=h.map(function(e){return e.current});function t(){m.current.isTouchEnd=!1,m.current.isMouseDown=!0}function n(t){m.current.isMouseDown=!1,O(t.target,e,f)||p()}function r(){m.current.isTouchEnd=!1,m.current.isTouchMove=!1}function i(){m.current.isTouchMove=!0}function o(t){m.current.isTouchEnd=!0,m.current.isTouchMove||O(t.target,e,f,!1)||p()}return f.addEventListener("mousedown",t),f.addEventListener("mouseup",n),f.addEventListener("touchstart",r),f.addEventListener("touchmove",i),f.addEventListener("touchend",o),function(){f.removeEventListener("mousedown",t),f.removeEventListener("mouseup",n),f.removeEventListener("touchstart",r),f.removeEventListener("touchmove",i),f.removeEventListener("touchend",o)}},[h,f,p]),m.current),ep=A("getInputProps","getMenuProps");(0,c.useEffect)(function(){U||(er.current={})},[U]),(0,c.useEffect)(function(){var e;U&&null!=B&&B.document&&null!=ei&&null!=(e=ei.current)&&e.focus&&B.document.activeElement!==ei.current&&ei.current.focus()},[U,B]);var eh=(0,c.useMemo)(function(){return{ArrowDown:function(e){e.preventDefault(),q({type:0,altKey:e.altKey})},ArrowUp:function(e){e.preventDefault(),q({type:1,altKey:e.altKey})},Home:function(e){ea.current.state.isOpen&&(e.preventDefault(),q({type:3}))},End:function(e){ea.current.state.isOpen&&(e.preventDefault(),q({type:4}))},Escape:function(e){var t=ea.current.state;(t.isOpen||t.inputValue||t.selectedItem||t.highlightedIndex>-1)&&(e.preventDefault(),q({type:2}))},Enter:function(e){ea.current.state.isOpen&&229!==e.which&&(e.preventDefault(),q({type:7}))},PageUp:function(e){ea.current.state.isOpen&&(e.preventDefault(),q({type:5}))},PageDown:function(e){ea.current.state.isOpen&&(e.preventDefault(),q({type:6}))}}},[q,ea]),eg=(0,c.useCallback)(function(e){return i({id:ec.labelId,htmlFor:ec.inputId},e)},[ec]),em=(0,c.useCallback)(function(e,t){var n,o=void 0===e?{}:e,u=o.onMouseLeave,c=o.refKey,l=void 0===c?"ref":c,a=o.ref,s=r(o,Q),d=(void 0===t?{}:t).suppressRefError;return ep("getMenuProps",void 0!==d&&d,l,X),i(((n={})[l]=y(a,function(e){X.current=e}),n.id=ec.menuId,n.role="listbox",n["aria-labelledby"]=s&&s["aria-label"]?void 0:""+ec.labelId,n.onMouseLeave=v(u,function(){q({type:11})}),n),s)},[q,ep,ec]),eI=(0,c.useCallback)(function(e){var t,n,o=void 0===e?{}:e,u=o.item,c=o.index,l=o.refKey,a=o.ref,s=o.onMouseMove,d=o.onMouseDown,f=o.onClick;o.onPress;var p=o.disabled,h=r(o,ee);void 0!==p&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');var g=ea.current,m=g.props,I=g.state,b=M(u,c,m.items,"Pass either item or index to getItemProps!"),x=b[0],w=b[1],k=m.isItemDisabled(x,w);return i(((t={})[void 0===l?"ref":l]=y(a,function(e){e&&(er.current[ec.getItemId(w)]=e)}),t["aria-disabled"]=k,t["aria-selected"]=w===I.highlightedIndex,t.id=ec.getItemId(w),t.role="option",t),!k&&((n={}).onClick=v(f,function(){q({type:13,index:w})}),n),{onMouseMove:v(s,function(){ef.isTouchEnd||w===I.highlightedIndex||(ed.current=!1,q({type:12,index:w,disabled:k}))}),onMouseDown:v(d,function(e){return e.preventDefault()})},h)},[q,ec,ea,ef,ed]),ev=(0,c.useCallback)(function(e){var t,n=void 0===e?{}:e,o=n.onClick;n.onPress;var u=n.refKey,c=n.ref,l=r(n,et),a=ea.current.state;return i(((t={})[void 0===u?"ref":u]=y(c,function(e){eo.current=e}),t["aria-controls"]=ec.menuId,t["aria-expanded"]=a.isOpen,t.id=ec.toggleButtonId,t.tabIndex=-1,t),!l.disabled&&i({},{onClick:v(o,function(){q({type:14})})}),l)},[q,ea,ec]),ey=(0,c.useCallback)(function(e,t){var n,o,u=void 0===e?{}:e,c=u.onKeyDown,l=u.onChange,a=u.onInput,s=u.onBlur;u.onChangeText;var d=u.onClick,f=u.refKey,p=void 0===f?"ref":f,h=u.ref,g=r(u,en),m=(void 0===t?{}:t).suppressRefError;ep("getInputProps",void 0!==m&&m,p,ei);var I=ea.current.state,b={};return g.disabled||((o={}).onChange=v(l,a,function(e){q({type:8,inputValue:e.target.value})}),o.onKeyDown=v(c,function(e){var t=x(e);t&&eh[t]&&eh[t](e)}),o.onBlur=v(s,function(e){null!=B&&B.document&&I.isOpen&&!ef.isMouseDown&&q({type:9,selectItem:!(null===e.relatedTarget&&B.document.activeElement!==B.document.body)})}),o.onClick=v(d,function(){q({type:10})}),b=o),i(((n={})[p]=y(h,function(e){ei.current=e}),n["aria-activedescendant"]=I.isOpen&&I.highlightedIndex>-1?ec.getItemId(I.highlightedIndex):"",n["aria-autocomplete"]="list",n["aria-controls"]=ec.menuId,n["aria-expanded"]=I.isOpen,n["aria-labelledby"]=g&&g["aria-label"]?void 0:ec.labelId,n.autoComplete="off",n.id=ec.inputId,n.role="combobox",n.value=I.inputValue,n),b,g)},[q,ec,B,eh,ea,ef,ep]),eb=(0,c.useCallback)(function(){q({type:15})},[q]),ex=(0,c.useCallback)(function(){q({type:17})},[q]),ew=(0,c.useCallback)(function(){q({type:16})},[q]),ek=(0,c.useCallback)(function(e){q({type:18,highlightedIndex:e})},[q]),eO=(0,c.useCallback)(function(e){q({type:19,selectedItem:e})},[q]);return{getItemProps:eI,getLabelProps:eg,getMenuProps:em,getInputProps:ey,getToggleButtonProps:ev,toggleMenu:eb,openMenu:ew,closeMenu:ex,setHighlightedIndex:ek,setInputValue:(0,c.useCallback)(function(e){q({type:20,inputValue:e})},[q]),selectItem:eO,reset:(0,c.useCallback)(function(){q({type:21})},[q]),highlightedIndex:Z,isOpen:U,selectedItem:z,inputValue:Y}}er.stateChangeTypes=X;var ei={activeIndex:-1,selectedItems:[]};function eo(e){return{activeIndex:F(e,"activeIndex",ei),selectedItems:F(e,"selectedItems",ei)}}function eu(e){if(e.shiftKey||e.metaKey||e.ctrlKey||e.altKey)return!1;var t=e.target;return!(t instanceof HTMLInputElement)||""===t.value||0===t.selectionStart&&0===t.selectionEnd}function ec(e,t){return e.selectedItems===t.selectedItems&&e.activeIndex===t.activeIndex}U.stateReducer,U.itemToKey,U.environment,u().array,u().array,u().array,u().func,u().number,u().number,u().number,u().func,u().func,u().string,u().string;var el={itemToKey:B.itemToKey,stateReducer:B.stateReducer,environment:B.environment,keyNavigationNext:"ArrowRight",keyNavigationPrevious:"ArrowLeft"},ea=Object.freeze({__proto__:null,DropdownClick:7,DropdownKeyDownBackspace:6,DropdownKeyDownNavigationPrevious:5,FunctionAddSelectedItem:8,FunctionRemoveSelectedItem:9,FunctionReset:12,FunctionSetActiveIndex:11,FunctionSetSelectedItems:10,SelectedItemClick:0,SelectedItemKeyDownBackspace:2,SelectedItemKeyDownDelete:1,SelectedItemKeyDownNavigationNext:3,SelectedItemKeyDownNavigationPrevious:4});function es(e,t){var n,r=t.type,o=t.index,u=t.props,c=t.selectedItem,l=e.activeIndex,a=e.selectedItems;switch(r){case 0:n={activeIndex:o};break;case 4:n={activeIndex:l-1<0?0:l-1};break;case 3:n={activeIndex:l+1>=a.length?-1:l+1};break;case 2:case 1:if(l<0)break;var s=l;1===a.length?s=-1:l===a.length-1&&(s=a.length-2),n=i({selectedItems:[].concat(a.slice(0,l),a.slice(l+1))},{activeIndex:s});break;case 5:n={activeIndex:a.length-1};break;case 6:n={selectedItems:a.slice(0,a.length-1)};break;case 8:n={selectedItems:[].concat(a,[c])};break;case 7:n={activeIndex:-1};break;case 9:var d=l,f=a.findIndex(function(e){return u.itemToKey(e)===u.itemToKey(c)});if(f<0)break;1===a.length?d=-1:f===a.length-1&&(d=a.length-2),n={selectedItems:[].concat(a.slice(0,f),a.slice(f+1)),activeIndex:d};break;case 10:n={selectedItems:t.selectedItems};break;case 11:n={activeIndex:t.activeIndex};break;case 12:n={activeIndex:_(u,"activeIndex",ei),selectedItems:_(u,"selectedItems",ei)};break;default:throw Error("Reducer called without proper action type.")}return i({},e,n)}var ed=["refKey","ref","onClick","onKeyDown","selectedItem","index"],ef=["refKey","ref","onKeyDown","onClick","preventKeyAction"];function ep(e){void 0===e&&(e={});var t,n,o,u,l=i({},el,e),a=l.getA11yStatusMessage,s=l.environment,d=l.keyNavigationNext,f=l.keyNavigationPrevious,p=(o=(n=V(es,t=l,eo,ec))[0],u=n[1],[b(o,t),u]),h=p[0],g=p[1],m=h.activeIndex,I=h.selectedItems,w=N(),k=(0,c.useRef)(null),O=(0,c.useRef)();O.current=[];var D=P({state:h,props:l});H(a,h,[m,I],s),(0,c.useEffect)(function(){!w&&(-1===m&&k.current?k.current.focus():O.current[m]&&O.current[m].focus())},[m]);var C=A("getDropdownProps"),E=(0,c.useMemo)(function(){var e;return(e={})[f]=function(){g({type:4})},e[d]=function(){g({type:3})},e.Delete=function(){g({type:1})},e.Backspace=function(){g({type:2})},e},[g,d,f]),T=(0,c.useMemo)(function(){var e;return(e={})[f]=function(e){eu(e)&&g({type:5})},e.Backspace=function(e){eu(e)&&g({type:6})},e},[g,f]);return{getSelectedItemProps:(0,c.useCallback)(function(e){var t,n=void 0===e?{}:e,o=n.refKey,u=n.ref,c=n.onClick,l=n.onKeyDown,a=n.selectedItem,s=n.index,d=r(n,ed),f=D.current.state,p=M(a,s,f.selectedItems,"Pass either item or index to getSelectedItemProps!")[1],h=p>-1&&p===f.activeIndex;return i(((t={})[void 0===o?"ref":o]=y(u,function(e){e&&O.current.push(e)}),t.tabIndex=h?0:-1,t.onClick=v(c,function(){g({type:0,index:p})}),t.onKeyDown=v(l,function(e){var t=x(e);t&&E[t]&&E[t](e)}),t),d)},[g,D,E]),getDropdownProps:(0,c.useCallback)(function(e,t){var n,o=void 0===e?{}:e,u=o.refKey,c=void 0===u?"ref":u,l=o.ref,a=o.onKeyDown,s=o.onClick,d=o.preventKeyAction,f=r(o,ef),p=(void 0===t?{}:t).suppressRefError;return C("getDropdownProps",void 0!==p&&p,c,k),i(((n={})[c]=y(l,function(e){e&&(k.current=e)}),n),!(void 0!==d&&d)&&{onKeyDown:v(a,function(e){var t=x(e);t&&T[t]&&T[t](e)}),onClick:v(s,function(){g({type:7})})},f)},[g,T,C]),addSelectedItem:(0,c.useCallback)(function(e){g({type:8,selectedItem:e})},[g]),removeSelectedItem:(0,c.useCallback)(function(e){g({type:9,selectedItem:e})},[g]),setSelectedItems:(0,c.useCallback)(function(e){g({type:10,selectedItems:e})},[g]),setActiveIndex:(0,c.useCallback)(function(e){g({type:11,activeIndex:e})},[g]),reset:(0,c.useCallback)(function(){g({type:12})},[g]),selectedItems:I,activeIndex:m}}ep.stateChangeTypes=ea},16081:function(e,t){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},85353:function(e,t,n){"use strict";n(16081)},58772:function(e,t,n){"use strict";var r=n(90331);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,u){if(u!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},23615:function(e,t,n){e.exports=n(58772)()},90331:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43350:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},80040:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(34217);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(0,r.Z)(i.key),i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},3117:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},48415:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}n.d(t,{Z:function(){return i}})},94182:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(23448);function i(e,t){if(t&&("object"===(0,r.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}}}]);