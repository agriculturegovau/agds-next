(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{66674:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(26409),n()},88338:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(44310),n()},54389:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(98028),n()},2951:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(49718),n()},47586:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(45569),n()},8890:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(89733),n()},88235:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(12293),n()},26409:function(e,t,r){"use strict";r.d(t,{Accordion:function(){return o},AccordionItem:function(){return k},AccordionItemContent:function(){return j}});var n=r(84815),i=r(87800),o=function(e){var t=e.children;return(0,i.tZ)(n.Box,{width:"100%",borderTop:!0,children:t})},a=r(11246),l=r(27378),c=r(23914),s=r(10043),d=r(84007),u=r(32084),f=r(11475),p={body:c._X.backgroundShade,bodyAlt:c._X.backgroundShadeAlt},h=function(e){var t=e.ariaControls,r=e.background,o=void 0===r?"body":r,a=e.children,l=e.id,h=e.isOpen,b=e.onClick,g=e.tag;return(0,i.tZ)(n.Box,{as:g,children:(0,i.BX)(d.Flex,{as:f.Yd,id:l,"aria-controls":t,"aria-expanded":h,onClick:b,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",background:o,paddingY:1,justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focusRingFor:"keyboard",css:(0,s.iv)({"&:hover":{backgroundColor:p[o]}},"",""),children:[a,(0,i.tZ)(u.v4,{weight:"bold",css:(0,s.iv)({transition:"transform ".concat(c.tokens.transition.duration,"ms ").concat(c.tokens.transition.timingFunction),transform:"rotate(".concat(h?180:0,"deg)")},"","")})]})})},b=r(90849),g=r(55732),v=r(57135),m=r.n(v),y=r(39998);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var Z=function(e){var t,r=e.children,n=e.ariaLabelledBy,o=e.id,a=e.isOpen,d=(0,l.useRef)(null),u=(0,c.Tb)(),f=(0,y.useSpring)({from:{display:"none",height:0},to:(t=(0,g.Z)(m().mark(function e(t){var r;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return e.next=3,t({display:"block"});case 3:return e.next=5,t({height:a?null===(r=d.current)||void 0===r?void 0:r.offsetHeight:0,immediate:u});case 5:return e.next=7,t(a?{height:"auto"}:{display:"none"});case 7:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})});return(0,i.tZ)(y.animated.div,{id:o,"aria-labelledby":n,role:"region",style:f,css:(0,s.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,b.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({overflow:"hidden"},c.lB.print.visible),"",""),children:(0,i.tZ)("div",{ref:d,children:r})})},P=function(){var e=(0,c.Me)();return{titleId:"accordion-".concat(e,"-title"),bodyId:"accordion-".concat(e,"-body")}},k=function(e){var t=e.background,r=e.children,o=e.title,s=e.titleHeadingTag,d=e.isInitiallyOpen,u=void 0!==d&&d,f=e.isOpen,p=e.onToggle,b=P(),g=b.titleId,v=b.bodyId,m=(0,c.useToggleState)(u,!u),y=(0,a.Z)(m,2),O=y[0],k=y[1],j="boolean"==typeof f?f:O,w=(0,l.useCallback)(function(){"function"==typeof p&&p(),k()},[p,k]);return(0,i.BX)(n.Box,{borderBottom:!0,children:[(0,i.tZ)(h,{background:t,tag:void 0===s?"h3":s,id:g,ariaControls:v,isOpen:j,onClick:w,children:o}),(0,i.tZ)(Z,{isOpen:j,id:v,ariaLabelledBy:g,children:r})]})},j=function(e){var t=e.children;return(0,i.tZ)(n.Box,{paddingBottom:1.5,paddingTop:.5,children:t})}},44310:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return x}});var n=r(90849),i=r(90089),o=r(27378),a=r(64388),l=r(10043),c=r(84007),s=r(23914),d=r(87800);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,d.tZ)("nav",{"aria-label":i,children:(0,d.tZ)(c.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,n.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:r})})},p=r(7971),h=r(32084),b={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},g=function(){return(0,d.tZ)(h.XC,{color:"border",size:"sm",css:b})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var m=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,d.BX)(c.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,d.tZ)(g,{}),i?(0,d.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),y=r(11475);function O(e){var t=e.onClick;return(0,d.tZ)(m,{children:(0,d.tZ)(c.Flex,{as:y.Yd,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focusRingFor:"keyboard",link:!0,children:"…"})})}var Z=["label"],P=["label"],k=["label"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),l=r[0],c=l.label,s=(0,i.Z)(l,Z),u=r[r.length-1],p=u.label,h=(0,i.Z)(u,P),b=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),g=(0,o.useState)(!b.length),v=g[0],y=g[1];return(0,d.BX)(f,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:v,children:[(0,d.tZ)(m,w(w({ref:n},s),{},{children:c})),!v&&b.length?(0,d.tZ)(O,{onClick:function(){var e;y(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,b.map(function(e,t){var r=e.label,n=(0,i.Z)(e,k);return(0,d.tZ)(m,w(w({},n),{},{children:r}),t)}),(0,d.BX)(m,w(w({},h),{},{children:[p,(0,d.tZ)(a.TX,{children:" (current page)"})]}))]})}},98028:function(e,t,r){"use strict";r.d(t,{Callout:function(){return u}});var n=r(10043),i=r(84007),o=r(7226),a=r(89205),l=r(32084),c=r(87800),s={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},d=function(e){var t=e.as,r=e.children,n=e.variant;return(0,c.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:s[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:r})},u=function(e){var t=e.as,r=e.background,a=e.children,u=e.icon,f=e.onBodyAlt,p=e.title,h=e.tone,b=void 0===h?"neutral":h,g=e.variant,v=void 0===g?"regular":g,m=s[v],y=m.textGap,O=m.iconGap,Z=m.padding,P=m.flexDirection,k=m.titlePaddingTop,j={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,c.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:s[v].iconSize})}}[b],w=j.background,x=j.border,S=j.icon;return(0,c.BX)(i.Flex,{as:t,flexDirection:P,rounded:!0,gap:O,background:"neutral"===b&&(null!=f?f:"shadeAlt"===r)?"shadeAlt":w,borderColor:x,padding:Z,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u||S?(0,c.tZ)(i.Flex,{flexShrink:0,children:u||S}):null,(0,c.BX)(o.Stack,{gap:y,css:(0,n.iv)({paddingTop:k},"",""),children:[p?(0,c.tZ)(d,{variant:v,children:p}):null,a]})]})}},89733:function(e,t,r){"use strict";r.d(t,{InpageNav:function(){return O}});var n=r(90849),i=r(90089),o=r(10043),a=r(7226),l=r(23914),c=r(87800),s=function(e){var t=e.children,r=e["aria-label"];return(0,c.tZ)(a.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,o.iv)({borderLeftColor:l._X.foregroundAction},"",""),"aria-label":r,children:t})},d=function(e){var t=e.children;return(0,c.tZ)(a.Stack,{as:"ul",gap:.5,children:t})},u=r(84815),f=r(7971);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=function(e){return(0,c.tZ)(u.Box,{as:"li",children:(0,c.tZ)(f.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))})},b=r(89205),g=function(e){var t=e.children;return(0,c.tZ)(b.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},v=["label"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O=function(e){var t=e["aria-label"],r=e.links,n=e.title;return(0,c.BX)(s,{"aria-label":void 0===t?"In page":t,children:[n?(0,c.tZ)(g,{children:n}):null,(0,c.tZ)(d,{children:r.map(function(e,t){var r=e.label,n=(0,i.Z)(e,v);return(0,c.tZ)(h,y(y({},n),{},{children:r}),t)})})]})}},12293:function(e,t,r){"use strict";r.d(t,{SideNav:function(){return L}});var n=r(90849),i=r(10043),o=r(84815),a=r(23914),l=r(64388),c=r(66924),s=r(87800);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){var t=e.as,r=e.children,n=e.className,i=e.display,l=e.href,d=e.id,f=e.isCurrentPage,p=(0,a.yF)(),h=l?{"aria-current":f?"page":void 0,as:p,href:l,css:{textDecoration:"none","&:hover":u(u({},a.lB.underline),{},{backgroundColor:c.iH})}}:void 0;return(0,s.tZ)(o.Box,{as:t,borderBottom:!0,borderBottomWidth:"xl",className:n,display:i,id:d,children:(0,s.tZ)(o.Box,u(u({as:"span",color:"text",display:"block",focusRingFor:"keyboard",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",padding:1},h),{},{children:r}))})}var p=r(44285),h=r(90089),b=["items"];function g(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return null!=e&&!!e.length&&!!t&&e.some(function(e){var r;return e.href===t||(null===(r=e.items)||void 0===r?void 0:r.length)&&m(e.items,t)})}var y=r(27378),O=(0,y.createContext)(0),Z=function(){return(0,y.useContext)(O)};function P(e){var t=e.children,r=e.isOpen,n=Z();return r?(0,s.tZ)(O.Provider,{value:n+1,children:(0,s.tZ)(o.Box,{as:"ul",children:t})}):null}function k(e){var t=e.children,r=e.isActive,n=Z();return(0,s.tZ)("li",{css:1===n&&r?{position:"relative","::before":{borderLeftColor:a._X.borderMuted,borderLeftStyle:"solid",borderLeftWidth:a.tokens.borderWidth.xl,bottom:0,content:'""',left:0,pointerEvents:"none",position:"absolute",top:0}}:void 0,children:t})}var j=r(84007),w=r(32084),x=["hasSubLevelItemsIndicator","isCurrentPage","isOpen","label","numberOfItems"];function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var T={name:"1ff36h2",styles:"flex-grow:1"},C=function(e){var t=e.hasSubLevelItemsIndicator,r=e.isCurrentPage,n=e.isOpen,o=e.label,l=e.numberOfItems,d=(0,h.Z)(e,x),u=(0,a.yF)(),f=Z();return(0,s.BX)(j.Flex,B(B({as:u,"aria-current":r?"page":void 0,gap:.75,color:"muted",fontSize:"xs",paddingTop:1,paddingBottom:f>1?1:.75,paddingRight:1,borderBottom:!0,borderBottomWidth:"sm",borderColor:"muted",focusRingFor:"keyboard"},d),{},{css:(0,i.iv)(B({textDecoration:"none",paddingLeft:"".concat(f,"rem"),"&:hover":{color:a._X.foregroundText,backgroundColor:c.iH,"& span:last-of-type":a.lB.underline}},r&&{position:"relative",color:a._X.foregroundText,backgroundColor:c.iH,fontWeight:a.tokens.fontWeight.bold,"::before":{content:'""',position:"absolute",top:0,left:0,bottom:0,borderLeftWidth:a.tokens.borderWidth.xl,borderLeftStyle:"solid",borderLeftColor:a._X.selected,pointerEvents:"none"}}),"",""),children:[(0,s.tZ)(I,{depth:f}),(0,s.tZ)("span",{css:T,children:o}),t&&(n?(0,s.tZ)(w.v4,{"aria-hidden":!1,"aria-label":". Sub-level ".concat(1===l?"link":"links"," below."),css:f>1?{marginRight:(0,a.mapSpacing)(.25)}:void 0,size:f>1?"sm":"md"}):(0,s.tZ)(w.XC,{"aria-hidden":!1,"aria-label":". Has ".concat(l," sub-level ").concat(1===l?"link":"links","."),css:f>1?{marginRight:(0,a.mapSpacing)(.25)}:void 0,size:f>1?"sm":"md"}))]}))},I=function(e){var t=e.depth;return t>2?(0,s.tZ)("span",{"aria-hidden":!0,children:"—"}):t>1?(0,s.tZ)("span",{"aria-hidden":!0,children:"–"}):null},D=["isActive","items"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var A=function(e){var t,r=e.activePath,n=e.items,i=e.subLevelVisible,o=(0,y.useMemo)(function(){return n.map(function e(t){return function(r){var n,i,o=r.href===t||m(r.items,t);return X(X({},r),{},{isActive:o,items:o||null!==(n=r.items)&&void 0!==n&&n.length?null===(i=r.items)||void 0===i?void 0:i.map(e(t)):r.items})}}(r))},[r,n]),a=(null===(t=o.find(function(e){return e.isActive}))||void 0===t?void 0:t.href)===r;return(0,s.tZ)(E,{activePath:r,isListOpen:a,items:o,subLevelVisible:i})},E=function e(t){var r=t.activePath,n=t.isListOpen,i=t.items,o=t.subLevelVisible,a=(0,y.useCallback)(function(e,t){return t||"always"===o||m(e,r)},[r,o]);return(0,s.tZ)(P,{isOpen:a(i,n),children:i.map(function(t){var n=t.isActive,i=t.items,l=(0,h.Z)(t,D),c=(null==i?void 0:i.length)||0;return(0,s.BX)(k,{isActive:n||m(i,r),children:[(0,s.tZ)(C,X({hasSubLevelItemsIndicator:c>0&&"whenActive"===o,isCurrentPage:l.href===r,isOpen:a(i,n),numberOfItems:c},l),l.href),null!=i&&i.length?(0,s.tZ)(e,{activePath:r,isListOpen:a(i,l.href===r),items:i,subLevelVisible:o}):null]},l.href)})})};function L(e){var t,r=e.activePath,d=e.background,u=(e.collapseTitle,e.items),v=e.subLevelVisible,m=e.title,y=e.titleLink,O=(t=(0,a.Me)(),{titleId:"sideNav-".concat(t,"-title")}).titleId,Z=function(e,t){if(!t)return"";var r,n="",i=g(function e(t){var r,n=[],i=g(t);try{for(i.s();!(r=i.n()).done;){var o=r.value,a=o.items,l=(0,h.Z)(o,b);n.push(l),null!=a&&a.length&&n.push.apply(n,(0,p.Z)(e(a)))}}catch(e){i.e(e)}finally{i.f()}return n}(e));try{for(i.s();!(r=i.n()).done;){var o=r.value;if(!o.href||o.href===t)return o.href;null!=t&&t.startsWith(o.href)&&o.href.length>n.length&&(n=o.href)}}catch(e){i.e(e)}finally{i.f()}return n}(u,r);return(0,s.tZ)(c.ie,{background:void 0===d?"body":d,customTitleElement:(0,s.tZ)(f,{as:"h2",css:(0,i.iv)((0,n.Z)({},a.tokens.mediaQuery.min.md,l.JM),"",""),id:O,children:m}),gap:0,title:m,children:(0,s.BX)(o.Box,{"aria-labelledby":O,as:"nav",fontFamily:"body",fontSize:"sm",lineHeight:"default",children:[(0,s.tZ)(f,{as:"span",display:{xs:y?"block":"none",md:"block"},href:y,isCurrentPage:r===y,children:m}),(0,s.tZ)(A,{activePath:Z,items:u,subLevelVisible:void 0===v?"whenActive":v})]})})}},911:function(e,t,r){"use strict";r.d(t,{O:function(){return l}});var n=r(54389),i=r(68944),o=r(79706),a=r(87800);function l(){return(0,a.tZ)(n.Callout,{title:"Need help?",children:(0,a.BX)(i.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email ",(0,a.tZ)(o.TextLink,{href:"/not-found",children:"emailaccount@yourgov.gov.au"})]})})}},55817:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(86677),i=r(79894),o=r.n(i),a=r(41380),l=r(74578),c=r(2951),s=r(88338),d=r(50456),u=r(94303),f=r(8890),p=r(68944),h=r(51036),b=r(88235),g=r(47586),v=r(66674),m=r(7787),y=r(40670),O=r(911),Z=r(87800),P={name:"1nob2mz",styles:"&:focus{outline:none;}"};function k(){var e=(0,n.useRouter)();return(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(y.$,{title:"Content page example"}),(0,Z.tZ)(m.I,{applyMainElement:!1,children:(0,Z.tZ)(l.PageContent,{children:(0,Z.BX)(c.Columns,{children:[(0,Z.tZ)(c.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,Z.tZ)(l.ContentBleed,{visible:{md:!1},children:(0,Z.tZ)(b.SideNav,{activePath:e.asPath,title:"Services",titleLink:"/services",items:[{href:"/not-found",label:"Agriculture and farming "},{href:"/not-found",label:"Arts, culture and entertainment"},{href:"/not-found",label:"Building and construction"},{href:"/not-found",label:"Cleaning"},{href:"/not-found",label:"Food, drink and hospitality",items:[{href:"/not-found",label:"Food safety certificates"},{href:"/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas",label:"Operate a food truck, van or stall on public areas"},{href:"/not-found",label:"Serve alcohol on premises"},{href:"/not-found",label:"Outdoor dining approval"},{href:"/not-found",label:"Development applications"},{href:"/not-found",label:"Approval to host musical performances"}]},{href:"/not-found",label:"Motor vehicle and road transport"},{href:"/not-found",label:"Private healthcare"},{href:"/not-found",label:"Real estate and property"}]})})}),(0,Z.tZ)(c.Column,{as:"main",id:"main-content",tabIndex:-1,css:P,columnSpan:{xs:12,md:8},columnStart:{lg:5},children:(0,Z.BX)(d.Stack,{gap:3,children:[(0,Z.tZ)(s.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/services/food-drink-hospitality",label:"Food, drink and hospitality"},{label:"Operate a food truck, van or stall on public areas"}]}),(0,Z.BX)(d.Stack,{gap:1.5,children:[(0,Z.tZ)(u.H1,{children:"Operate a food truck, van or stall on public areas"}),(0,Z.tZ)(p.Text,{as:"p",fontSize:"md",color:"muted",children:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas."})]}),(0,Z.tZ)(f.InpageNav,{title:"On this page",links:[{href:"#who-needs-to-do-this",label:"Who needs to do this"},{href:"#what-you-will-need",label:"What you will need"},{href:"#how-to-apply",label:"How to apply"},{href:"#more-information",label:"More information"}]}),(0,Z.BX)(d.Stack,{alignItems:"flex-start",gap:1.5,children:[(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"who-needs-to-do-this",children:"Who needs to do this"}),(0,Z.tZ)("p",{children:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must obtain one of the following permits to operate in this area:"})]}),(0,Z.BX)(v.Accordion,{children:[(0,Z.tZ)(v.AccordionItem,{title:"Food van permit",children:(0,Z.tZ)(v.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})}),(0,Z.tZ)(v.AccordionItem,{title:"Food truck permit",children:(0,Z.tZ)(v.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})}),(0,Z.tZ)(v.AccordionItem,{title:"Ice-cream van permit",children:(0,Z.tZ)(v.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})}),(0,Z.tZ)(v.AccordionItem,{title:"Market stall permit",children:(0,Z.tZ)(v.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})})]})]}),(0,Z.tZ)(d.Stack,{alignItems:"flex-start",gap:1.5,children:(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"what-you-will-need",children:"What you will need"}),(0,Z.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:"vehicle registration details and vehicle plans"}),(0,Z.tZ)("li",{children:"operational plan of management"}),(0,Z.tZ)("li",{children:"food safety supervisor certificate"}),(0,Z.tZ)("li",{children:"names of any employees who will be handling food."})]})]})}),(0,Z.BX)(d.Stack,{alignItems:"flex-start",gap:1.5,children:[(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"how-to-apply",children:"How to apply"}),(0,Z.tZ)("p",{children:"You’ll be asked to sign in or create an account to apply online."})]}),(0,Z.BX)(h.ButtonGroup,{children:[(0,Z.tZ)(h.ButtonLink,{href:"/sign-in?redirectTo=/app/licences-and-permits/apply/mobile-food-vendor-permit",variant:"primary",children:"Sign in to apply"}),(0,Z.tZ)(h.ButtonLink,{href:"/not-found",variant:"secondary",children:"Create account"})]})]}),(0,Z.tZ)(g.Divider,{}),(0,Z.tZ)(d.Stack,{alignItems:"flex-start",gap:1.5,children:(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"more-information",children:"More information"}),(0,Z.tZ)("h3",{children:"Links"}),(0,Z.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Understand food safety requirements"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"New laws for food businesses"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Restricted areas and exclusion zones"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Hours of operation"})})]}),(0,Z.tZ)("h3",{children:"Related approvals"}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Serve alcohol on premises"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Outdoor dining approval"})})]})]})}),(0,Z.tZ)(O.O,{})]})})]})})})]})}},88198:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas",function(){return r(55817)}])},55732:function(e,t,r){"use strict";function n(e,t,r,n,i,o,a){try{var l=e[o](a),c=l.value}catch(e){r(e);return}l.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(i,o){var a=e.apply(t,r);function l(e){n(a,i,o,l,c,"next",e)}function c(e){n(a,i,o,l,c,"throw",e)}l(void 0)})}}r.d(t,{Z:function(){return i}})}},function(e){e.O(0,[8629,9998,8486,2244,6924,9774,2888,179],function(){return e(e.s=88198)}),_N_E=e.O()}]);