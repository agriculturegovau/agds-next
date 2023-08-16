"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{1262:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(3540),o=r(7800);function i(e){var t=e.path,r=void 0===t?"":t;return(0,o.tZ)(n.TextLink,{href:"https://github.com/".concat("steelthreads","/").concat("agds-next","/edit/").concat("main").concat(r),children:"Edit this page"})}},2673:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(578),n()},9007:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(4630),n()},1966:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(1017),n()},874:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2341),n()},3294:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(9699),n()},8245:function(e,t,r){r.d(t,{ie:function(){return S},vE:function(){return O}});var n=r(849),o=r(43),i=r(5732),c=r(1246),a=r(4707),l=r.n(a),s=r(7378),u=r(9998),d=r(3022),f=r(29),p=r(9007),b=r(6268),h=r(6783),v=r(874),g=r(3255),y={hover:"--collapsing-side-bar-hover"},O={hover:"var(".concat(y.hover,")")},m={body:"shade",bodyAlt:"shadeAlt"},j=r(2557),P=r(2474),x=r(7800);function w(e){var t=e.title,r=e.subtitle;return(0,x.BX)(j.Flex,{display:{xs:"none",md:"flex"},flexDirection:"column",gap:.5,children:[(0,x.tZ)(P.Text,{as:"h2",color:"text",fontSize:"md",fontWeight:"bold",lineHeight:"heading",children:t}),r&&(0,x.tZ)(P.Text,{color:"muted",fontSize:"xs",children:r})]})}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function S(e){var t,r,a=e.as,p=e.background,b=e.children,h=e.collapseButtonLabel,v=e.title,y=e.subTitle,O=(t=(0,g.useId)(),{buttonId:"collapsing-side-bar-".concat(t,"-button"),bodyId:"collapsing-side-bar-".concat(t,"-body")}),m=O.bodyId,j=O.buttonId,P=(0,s.useRef)(null),k=(0,d.useToggleState)(!1,!0),S=(0,c.Z)(k,2),C=S[0],E=S[1],I=(0,d.usePrefersReducedMotion)(),_=(0,u.useSpring)({from:{display:"none",height:0},to:(r=(0,i.Z)(l().mark(function e(t){var r;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=3;break}return e.next=3,t({display:"block",overflow:"hidden"});case 3:return e.next=5,t({overflow:"hidden",height:C?null===(r=P.current)||void 0===r?void 0:r.offsetHeight:0,immediate:I});case 5:return e.next=7,t(C?{height:"auto",overflow:"initial"}:{display:"none",overflow:"initial"});case 7:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)})}),A=((0,d.useWindowSize)().windowWidth||0)<=d.tokens.breakpoint.lg-1;return(0,x.BX)(D,{as:void 0===a?"div":a,background:void 0===p?"body":p,children:[v&&(0,x.tZ)(w,{title:v,subtitle:y}),(0,x.tZ)(B,{isOpen:C,onClick:E,ariaControls:m,id:j,children:h}),(0,x.tZ)(u.animated.div,Z(Z({id:m},A&&{role:"region","aria-labelledby":j}),{},{style:_,css:(0,o.iv)((0,n.Z)({},d.tokens.mediaQuery.min.md,{overflow:"unset",display:"block !important",height:"auto !important"}),"",""),children:(0,x.tZ)(f.Box,{ref:P,children:b})}))]})}var D=function(e){var t=e.as,r=e.background,o=e.children,i=m[r];return(0,x.tZ)(h.Stack,{as:t,background:r,gap:{xs:0,md:1},css:(0,d.mq)((0,n.Z)({},y.hover,(0,d.mapResponsiveProp)(i,function(e){return f.backgroundColorMap[e]}))),children:o})},B=function(e){var t=e.ariaControls,r=e.children,i=e.id,c=e.isOpen,a=e.onClick;return(0,x.BX)(b.Flex,{as:p.BaseButton,"aria-controls":t,"aria-expanded":c,onClick:a,id:i,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",paddingY:1,paddingX:{xs:.75,md:0},justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,borderBottom:!0,css:(0,o.iv)((0,n.Z)({"&:hover":{background:O.hover}},d.tokens.mediaQuery.min.md,{display:"none"}),"",""),children:[r,(0,x.tZ)(v.ChevronDownIcon,{size:"sm",weight:"bold",css:(0,o.iv)({transition:"transform ".concat(d.tokens.transition.duration,"ms ").concat(d.tokens.transition.timingFunction),transform:"rotate(".concat(c?180:0,"deg)")},"","")})]})}},578:function(e,t,r){r.d(t,{Breadcrumbs:function(){return Z},BreadcrumbsContainer:function(){return f},BreadcrumbsDivider:function(){return v},BreadcrumbsItem:function(){return y}});var n=r(849),o=r(89),i=r(7378),c=r(6811),a=r(43),l=r(2557),s=r(3255),u=r(7800);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=function(e){var t,r=e.children,o=e["aria-label"],i=e.isExpandable,c=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":o,children:(0,u.tZ)(l.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,a.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},i&&!c&&(t={},(0,n.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:c?void 0:"none"}}),t)),"",""),children:r})})},p=r(2377),b=r(2341),h={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"},v=function(){return(0,u.tZ)(b.ChevronRightIcon,{color:"border",weight:"bold",css:h})};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var y=(0,i.forwardRef)(function(e,t){var r=e.children,o=e.href;return(0,u.BX)(l.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(v,{}),o?(0,u.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),O=r(4630);function m(e){var t=e.onClick;return(0,u.tZ)(y,{children:(0,u.tZ)(l.Flex,{as:O.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var j=["label"],P=["label"],x=["label"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Z=function(e){var t=e["aria-label"],r=e.links,n=(0,i.useRef)(null),a=r[0],l=a.label,s=(0,o.Z)(a,j),d=r[r.length-1],p=d.label,b=(0,o.Z)(d,P),h=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),v=(0,i.useState)(!h.length),g=v[0],O=v[1];return(0,u.BX)(f,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:g,children:[(0,u.tZ)(y,k(k({ref:n},s),{},{children:l})),!g&&h.length?(0,u.tZ)(m,{onClick:function(){var e;O(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,h.map(function(e,t){var r=e.label,n=(0,o.Z)(e,x);return(0,u.tZ)(y,k(k({},n),{},{children:r}),t)}),(0,u.BX)(y,k(k({},b),{},{children:[p,(0,u.tZ)(c.VisuallyHidden,{children:" (current page)"})]}))]})}},9699:function(e,t,r){r.d(t,{SideNav:function(){return _}});var n=r(7994),o=r(8245),i=r(849),c=r(43),a=r(3255),l=r(7800);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){var t=e.children,r=e.id,i=e.href,s=e.isCurrentPage,d=(0,a.yF)();return i?(0,l.tZ)(n.Box,{as:"h2",id:r,borderBottom:!0,borderBottomWidth:"xl",children:(0,l.tZ)(n.Box,{as:d,padding:1,color:"text",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",display:"block",focus:!0,href:i,"aria-current":s?"page":void 0,css:(0,c.iv)({textDecoration:"none","&:hover":u(u({},a.packs.underline),{},{backgroundColor:o.vE.hover})},"",""),children:t})}):(0,l.tZ)(n.Box,{as:"h2",id:r,borderBottom:!0,borderBottomWidth:"xl",display:"block",padding:1,color:"text",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:t})}var f=r(4285),p=r(89),b=["items"];function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var g=r(7378),y=(0,g.createContext)(0),O=function(){return(0,g.useContext)(y)};function m(e){var t=e.children,r=O();return(0,l.tZ)(y.Provider,{value:r+1,children:(0,l.tZ)(n.Box,{as:"ul",children:t})})}var j=r(2557),P=["isActive","isCurrentPage","children","label"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function k(e){var t=e.isActive,r=e.isCurrentPage,n=e.children,i=e.label,s=(0,p.Z)(e,P),u=O(),d=(0,a.yF)();return(0,l.BX)(Z,{isActive:t,depth:u,children:[(0,l.BX)(j.Flex,w(w({as:d,"aria-current":r?"page":void 0,gap:.75,color:"muted",fontSize:"xs",paddingY:1,paddingRight:1,borderBottom:!0,borderBottomWidth:"sm",borderColor:"muted",focus:!0},s),{},{css:(0,c.iv)(w({textDecoration:"none",paddingLeft:"".concat(u,"rem"),"&:hover":{color:a.boxPalette.foregroundText,backgroundColor:o.vE.hover,"& span:last-of-type":a.packs.underline}},r&&{position:"relative",color:a.boxPalette.foregroundText,backgroundColor:o.vE.hover,fontWeight:a.tokens.fontWeight.bold,":before":{content:'""',position:"absolute",top:0,left:0,bottom:0,borderLeftWidth:a.tokens.borderWidth.xl,borderLeftStyle:"solid",borderLeftColor:a.boxPalette.foregroundAction,pointerEvents:"none"}}),"",""),children:[(0,l.tZ)(S,{depth:u}),(0,l.tZ)("span",{children:i})]})),n]})}function Z(e){var t=e.children,r=e.depth,n=e.isActive;return(0,l.tZ)("li",{css:1===r&&n?{position:"relative",":before":{content:'""',position:"absolute",top:0,left:0,bottom:0,borderLeftWidth:a.tokens.borderWidth.xl,borderLeftStyle:"solid",borderLeftColor:a.boxPalette.borderMuted,pointerEvents:"none"}}:void 0,children:t})}function S(e){var t=e.depth;return t>2?(0,l.tZ)("span",{"aria-hidden":!0,children:"—"}):t>1?(0,l.tZ)("span",{"aria-hidden":!0,children:"–"}):null}var D=["isActive","items"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function E(e){var t=e.activePath,r=e.items,n=(0,g.useMemo)(function(){return r.map(function(e){return C(C({},e),{},{isActive:e.href===t||function e(t,r){return null!=t&&!!t.length&&!!r&&t.some(function(t){var n;if(t.href===r||null!==(n=t.items)&&void 0!==n&&n.length&&e(t.items,r))return!0})}(e.items,t)})})},[t,r]);return(0,l.tZ)(I,{activePath:t,items:n})}function I(e){var t=e.activePath,r=e.items;return(0,l.tZ)(m,{children:r.map(function(e,r){var n=e.isActive,o=e.items,i=(0,p.Z)(e,D);return(0,l.tZ)(k,C(C({isActive:n,isCurrentPage:i.href===t},i),{},{children:null!=o&&o.length?(0,l.tZ)(I,{items:o,activePath:t}):null}),r)})})}function _(e){var t,r=e.activePath,i=e.collapseTitle,c=e.items,s=e.background,u=e.title,v=e.titleLink,g=(t=(0,a.useId)(),{navId:"sideNav-".concat(t,"-nav"),titleId:"sideNav-".concat(t,"-title")}),y=g.navId,O=g.titleId,m=function(e,t){if(!t)return"";var r,n="",o=h(function e(t){var r,n=[],o=h(t);try{for(o.s();!(r=o.n()).done;){var i=r.value,c=i.items,a=(0,p.Z)(i,b);n.push(a),null!=c&&c.length&&n.push.apply(n,(0,f.Z)(e(c)))}}catch(e){o.e(e)}finally{o.f()}return n}(e));try{for(o.s();!(r=o.n()).done;){var i=r.value;if(!i.href||i.href===t)return i.href;null!=t&&t.startsWith(i.href)&&i.href.length>n.length&&(n=i.href)}}catch(e){o.e(e)}finally{o.f()}return n}(c,r);return(0,l.tZ)(o.ie,{as:"aside",collapseButtonLabel:i,background:void 0===s?"body":s,children:(0,l.BX)(n.Box,{as:"nav","aria-labelledby":O,id:y,fontFamily:"body",fontSize:"sm",lineHeight:"default",children:[(0,l.tZ)(d,{id:O,href:v,isCurrentPage:r===v,children:u}),(0,l.tZ)(E,{activePath:m,items:c})]})})}}}]);