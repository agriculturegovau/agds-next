"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7846],{24953:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(98192),n()},10957:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(99129),n()},37654:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(60954),n()},57449:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(88090),n()},16096:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(51190),n()},63846:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(48298),n()},74373:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(67098),n()},98192:function(e,t,r){r.d(t,{DatePicker:function(){return y}});var n=r(90849),o=r(11246),i=r(44285),c=r(90089),a=r(27378),l=r(8447),s=r(53223),u=r(200),d=r(30792),f=r(48947),p=r(13940),b=r(87800),m=["allowedDateFormats","dateFormat","initialMonth","inputRef","invalid","maxDate","maxWidth","minDate","onBlur","onChange","onInputChange","value","yearRange"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={name:"1coh6b9",styles:"min-height:200px"},y=function(e){var t=e.allowedDateFormats,r=void 0===t?u.lL:t,n=e.dateFormat,h=void 0===n?"dd/MM/yyyy":n,y=e.initialMonth,O=e.inputRef,Z=e.invalid,j=void 0!==Z&&Z,w=e.maxDate,x=e.maxWidth,P=e.minDate,S=e.onBlur,k=e.onChange,D=e.onInputChange,L=e.value,B=e.yearRange,_=(0,c.Z)(e,m),C=(0,a.useMemo)(function(){return Array.from(new Set([h].concat((0,i.Z)(r.filter(function(e){return u.lL.includes(e)})))))},[h,r]),I=(0,a.useRef)(null),T=(0,a.useState)(!1),F=T[0],E=T[1],X=(0,l.useTernaryState)(!1),A=(0,o.Z)(X,3),W=A[0],H=A[1],M=A[2],R=W?M:H,z=(0,s.S)(),Y=(0,a.useCallback)(function(e,t,r){r.disabled||(J((0,u.p6)(t,h)),k(t),M())},[k,M,h]),N=(0,a.useState)((0,u.JF)(L,h)),G=N[0],J=N[1];(0,a.useEffect)(function(){J((0,u.JF)(L,h))},[h,L]);var V=(0,a.useCallback)(function(){W&&M()},[W,M]);(0,l.O8)([z.popoverRef,I],V),(0,a.useEffect)(function(){var e=function(e){W&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),M())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[W,M]);var Q=(0,a.useMemo)(function(){if(P||w)return[P?{before:P}:void 0,w?{after:w}:void 0].filter(function(e){return!!e})},[P,w]),q="string"==typeof L?(0,u.Zy)(L):L,U=(0,u.OH)(q,y,B),K=(0,a.useMemo)(function(){return z.getPopoverProps()},[z]),$=(0,a.useMemo)(function(){return{defaultMonth:U,disabled:Q,initialFocus:!0,numberOfMonths:1,onSelect:Y,selected:q}},[U,Q,Y,q]);return(0,b.BX)("div",v(v({},z.getReferenceProps()),{},{children:[(0,b.tZ)(p.W,v(v({},_),{},{dateFormat:h,maxWidth:void 0===x?"md":x,invalid:{field:j,input:j},ref:O,value:G,onBlur:function(e){var t=e.target.value,r=(0,u.sG)(t,C),n=(0,u.cD)(r,P,w);!t||n?k(n):null==D||D(t),null==S||S(e)},onChange:function(e){J(e.target.value)},buttonRef:I,buttonOnClick:function(){R(),E(!0)},buttonAriaLabel:(0,u.hY)({allowedDateFormats:C,value:G})})),(0,b.tZ)(f.g,{yearRange:B,children:F?W&&(0,b.tZ)(s.J,v(v({},K),{},{children:(0,b.tZ)(d.Gv,v({},$))})):(0,b.tZ)(s.J,v(v({},K),{},{visibility:W?"visible":"hidden",css:g,children:W&&(0,b.tZ)(d.Gv,v({},$))}))})]}))};r(61836)},99129:function(e,t,r){r.d(t,{DirectionButton:function(){return h},DirectionLink:function(){return m}});var n=r(90849),o=r(90089),i=r(84007),c=r(11475),a=r(32084),l=r(7971),s=r(87800),u=["children"],d=["children"],f=["as","children","direction","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m=function(e){var t=e.children,r=(0,o.Z)(e,u);return(0,s.tZ)(g,b(b({as:l.TextLink},r),{},{children:t}))},h=function(e){var t=e.children,r=(0,o.Z)(e,d);return(0,s.tZ)(g,b(b({as:c.Yd},r),{},{children:t}))},v={name:"xyzkeb",styles:"align-self:flex-start"},g=function(e){var t=e.as,r=e.children,n=e.direction,c=e.className,a=(0,o.Z)(e,f),l=y[n],u="left"===n;return(0,s.BX)(i.Flex,b(b({as:t,className:c,inline:!0,gap:.5,alignItems:"center",fontFamily:"body",fontWeight:"normal",link:!0,focusRingFor:"keyboard",css:v},a),{},{children:[u?(0,s.tZ)(l,{size:"sm"}):null,r,u?null:(0,s.tZ)(l,{size:"sm"})]}))},y={up:a.Hf,right:a.LZ,down:a.ve,left:a.Y4}},51190:function(e,t,r){r.d(t,{ListItem:function(){return m},UnorderedList:function(){return l}});var n=r(10043),o=r(8447),i=r(27378),c=(0,i.createContext)(0),a=r(87800);function l(e){var t=e.children,r=(0,i.useContext)(c)+1;return(0,a.tZ)(c.Provider,{value:r,children:(0,a.tZ)("ul",{css:(0,n.iv)({marginTop:r>1?(0,o.mapSpacing)(.5):0,marginBottom:0},"",""),children:t})})}var s=r(90849),u=r(90089),d=r(89205),f=["children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function m(e){var t=e.children,r=(0,u.Z)(e,f);return(0,a.tZ)(d.Text,b(b({as:"li",css:(0,n.iv)({listStyle:"unset","&:not(:first-of-type)":{marginTop:(0,o.mapSpacing)(.5)}},"","")},r),{},{children:t}))}},48298:function(e,t,r){r.d(t,{ProgressIndicator:function(){return R}});var n=r(90089),o=r(90849),i=r(8447),c=r(66924),a=r(7971),l=r(10043),s=r(84815),u=r(84007),d=r(7226),f=r(89205),p=r(32084),b={body:i._X.backgroundShade,bodyAlt:i._X.backgroundShadeAlt},m="data-agds-progress-indicator-item-timeline-action",h="data-agds-progress-indicator-item-ring",v="data-agds-progress-indicator-item-text-container";[].concat(["blocked","doing","started"],["done","error","saved","todo"]);var g={blocked:{label:"Cannot start yet",icon:p.Zs,iconColor:"border"},doing:{label:"In progress",icon:p.NB,iconColor:"border"},started:{label:"In progress",icon:p.NB,iconColor:"border"},todo:{label:"Not started",icon:p.Q2,iconColor:"border"},done:{label:"Completed",icon:p.SuccessFilledIcon,iconColor:"success"},saved:{label:"Saved",icon:p.tm,iconColor:"success"},error:{label:"Error",icon:p.zM,iconColor:"error"}},y=r(87800),O=["as","background","children","isActive","items","status"],Z=["label","isActive"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x={isActive:!1,label:""},P={name:"bjn8wh",styles:"position:relative"},S=function(e){var t,r=e.as,c=e.background,a=void 0===c?"body":c,j=e.children,S=e.isActive,L=e.items,B=e.status,_=(0,n.Z)(e,O),C=g[B].label,I=S&&(null==L?void 0:L.find(function(e){return e.isActive}))||x,T=I.label,F=(I.isActive,(0,n.Z)(I,Z));return(0,y.tZ)(s.Box,{as:"li",background:a,css:(0,l.iv)({"&:first-of-type":(0,o.Z)({},"[".concat(m,"]:first-of-type"),{opacity:0}),"&:last-of-type":(t={},(0,o.Z)(t,"[".concat(m,"]:last-of-type"),{opacity:0}),(0,o.Z)(t,"[".concat(v,"]"),{borderBottomWidth:0}),t)},"",""),children:(0,y.BX)(s.Box,{as:"span",columnGap:.5,css:(0,l.iv)((0,o.Z)({display:"grid",gridTemplateColumns:"min-content 1fr",textDecoration:"none",width:"100%"},"[".concat(h,"]::before"),{backgroundColor:s.Vu[a]}),"",""),focusRingFor:"keyboard",children:[(0,y.tZ)(D,{status:B,isActive:S}),(0,y.BX)(d.Stack,w(w(w(w({},(0,o.Z)({},v,"")),{},{"aria-current":S||void 0,as:r,css:(0,l.iv)({textDecoration:"none","&:hover":{backgroundColor:b[a]},"&:hover span:not(:last-of-type)":w({},i.lB.underline)},"",""),flexGrow:1,fontFamily:"body",gap:.25,justifyContent:"center",paddingX:.5,paddingY:1},!L&&{borderBottom:!0,borderColor:"muted"}),_),{},{children:[(0,y.tZ)(f.Text,w(w({fontWeight:S?"bold":"normal"},(0,o.Z)({},"data-agds-progress-indicator-item-text","")),{},{children:j})),(0,y.tZ)(f.Text,{color:"muted",fontSize:"xs",lineHeight:"nospace",children:C})]})),T&&(0,y.BX)(y.HY,{children:[(0,y.tZ)(k,{}),(0,y.tZ)(s.Box,{as:"ul",children:(0,y.tZ)(s.Box,{as:"li",css:P,children:(0,y.BX)(u.Flex,w(w({},F),{},{alignItems:"center","aria-current":!0,as:r,borderBottom:!0,borderColor:"muted",color:"text",css:(0,l.iv)({textDecoration:"none","&:hover":w(w({backgroundColor:b[a]},i.lB.underline),{},{":not(:focus-visible)::before":{backgroundColor:b[a],content:'""',height:(0,i.mapSpacing)(.5),left:0,position:"absolute",top:"-".concat((0,i.mapSpacing)(.5)),width:"100%"}})},"",""),gap:.5,padding:.5,paddingBottom:1,children:[(0,y.tZ)(p.ti,{color:"selected"}),(0,y.tZ)(f.Text,{color:"inherit",fontSize:"xs",fontWeight:"bold",children:T})]}))})})]})]})})},k=function(){return(0,y.tZ)("span",w({css:(0,l.iv)({backgroundColor:i._X.border,flex:1,justifySelf:"center",width:i.tokens.borderWidth.md,"@media (forced-colors: active)":{backgroundColor:"GrayText"}},"","")},(0,o.Z)({},m,"")))},D=function(e){var t=e.status,r=e.isActive,n=g[t],c=n.icon,a=n.iconColor,s=i.tokens.borderWidth.md,d=s+3,f=r&&"border"===a?"selected":a;return(0,y.BX)(u.Flex,{alignItems:"center",as:"span",flexDirection:"column",children:[(0,y.tZ)(k,{}),(0,y.tZ)("span",w(w({},(0,o.Z)({},h,"")),{},{css:(0,l.iv)(w({position:"relative",paddingLeft:d,paddingRight:d},r&&{"::before":{position:"absolute",top:-d,bottom:-d,left:0,right:0,borderRadius:"100%",content:'""',border:"".concat(s,"px solid ").concat(i._X.selected)}}),"",""),children:(0,y.tZ)(c,{size:"md",color:f,css:(0,l.iv)({position:"relative",display:"block",margin:-1},"","")})})),(0,y.tZ)(k,{})]})},L=["children","isActive","status"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var C=function(e){var t=e.children,r=e.isActive,o=e.status,i=(0,n.Z)(e,L);return(0,y.tZ)(S,_(_({as:a.TextLink,isActive:!!r,status:o},i),{},{children:t}))},I=r(11475),T=["children"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var X=function(e){var t=e.children,r=(0,n.Z)(e,T);return(0,y.tZ)(S,E(E({as:I.Yd},r),{},{children:t}))};function A(e){var t=e.children;return(0,y.tZ)(s.Box,{as:"ul",borderTop:!0,borderBottom:!0,css:(0,l.iv)((0,o.Z)({},i.tokens.mediaQuery.max.sm,{borderTopWidth:0}),"",""),children:t})}var W=["label"];function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var R=function(e){var t=e.activePath,r=e.background,o=e.items,i=e.hideSubtitle,a=void 0!==i&&i?void 0:"".concat(o.filter(function(e){return"done"===e.status}).length," of ").concat(o.length," steps completed"),l=o.some(function(e){return e.isActive})?o:o.map(function(e){var r,n="doing"===e.status,o="href"in e?e.href:e.label,i=!!o&&(null==t?void 0:t.startsWith(o)),c="items"in e?null===(r=e.items)||void 0===r?void 0:r.map(function(e){return M(M({},e),{},{isActive:"href"in e&&e.href===t})}):void 0;return M(M({},e),{},{isActive:n||i||!1,items:c})});return(0,y.tZ)(c.ie,{background:r,subTitle:a,title:"Progress",children:(0,y.tZ)(A,{children:l.map(function(e){var t=e.label,o=(0,n.Z)(e,W);return z(o)?(0,y.tZ)(C,M(M({background:r},o),{},{children:t}),t):(0,y.tZ)(X,M(M({background:r},o),{},{children:t}),t)})})})},z=function(e){return"href"in e}},87312:function(e,t,r){r.d(t,{SummaryList:function(){return a},SummaryListItem:function(){return l},SummaryListItemDescription:function(){return c},SummaryListItemTerm:function(){return i}});var n=r(84007),o=r(87800);function i(e){var t=e.children;return(0,o.tZ)(n.Flex,{as:"dt",fontWeight:"bold",width:["100%","30%"],flexShrink:0,minWidth:"200px",fontSize:"sm",color:"text",children:t})}function c(e){var t=e.children;return(0,o.tZ)(n.Flex,{as:"dd",flexGrow:1,fontSize:"sm",color:"text",children:t})}function a(e){var t=e.children;return(0,o.tZ)(n.Flex,{as:"dl",width:"100%",borderTop:!0,borderColor:"muted",flexDirection:"column",children:t})}function l(e){var t=e.children;return(0,o.tZ)(n.Flex,{borderBottom:!0,borderColor:"muted",flexDirection:["column","row"],gap:.5,paddingY:.75,children:t})}},20329:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(87312),n()},61444:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(11725),n()},11410:function(e,t,r){r.d(t,{i:function(){return a}});var n=r(10043),o=r(53169),i=r(56273),c=r(87800);function a(e){var t=e.children;return(0,c.tZ)(o.Box,{borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,n.iv)({marginLeft:"calc(".concat((0,i.mapSpacing)(1)," - ").concat(i.tokens.borderWidth.xl/2,"px)")},"",""),children:t})}},39774:function(e,t,r){r.d(t,{VY:function(){return l},Zu:function(){return s},_c:function(){return f},ge:function(){return d},xL:function(){return a}});var n=r(27378),o=r(2345),i=r(20329),c=r(87800);function a(e){return(0,c.tZ)(i.SummaryList,{children:e.children})}function l(e){var t=e.label,r=e.value;return(0,c.BX)(i.SummaryListItem,{children:[(0,c.tZ)(i.SummaryListItemTerm,{children:t}),(0,c.tZ)(i.SummaryListItemDescription,{children:r})]})}function s(e){var t=e.label,r=e.address,o=e.suburb,a=e.state,l=e.postcode;return(0,c.BX)(i.SummaryListItem,{children:[(0,c.tZ)(i.SummaryListItemTerm,{children:t}),(0,c.tZ)(i.SummaryListItemDescription,{children:r&&o&&a&&l?(0,c.BX)(n.Fragment,{children:[r,",",(0,c.tZ)("br",{}),o," ",a," ",l]}):null})]})}var u="d MMMM yyyy";function d(e){var t=e.label,r=e.value;return(0,c.BX)(i.SummaryListItem,{children:[(0,c.tZ)(i.SummaryListItemTerm,{children:t}),(0,c.tZ)(i.SummaryListItemDescription,{children:r&&(0,c.tZ)(n.Fragment,{children:(0,o.Z)(new Date(r),u)})})]})}function f(e){var t=e.fromLabel,r=e.fromValue,n=e.toLabel,a=e.toValue;return(0,c.BX)(c.HY,{children:[(0,c.BX)(i.SummaryListItem,{children:[(0,c.tZ)(i.SummaryListItemTerm,{children:t}),(0,c.tZ)(i.SummaryListItemDescription,{children:r&&(0,o.Z)(new Date(r),u)})]}),(0,c.BX)(i.SummaryListItem,{children:[(0,c.tZ)(i.SummaryListItemTerm,{children:n}),(0,c.tZ)(i.SummaryListItemDescription,{children:a&&(0,o.Z)(new Date(a),u)})]})]})}},4041:function(e,t,r){r.d(t,{D:function(){return l}});var n=r(50456),o=r(94303),i=r(68944),c=r(39402),a=r(87800);function l(e){var t=e.titleRef,r=e.formTitle,l=e.stepTitle,s=e.introduction,u=e.callToAction,d=e.hideRequiredFieldsMessage;return(0,a.BX)(n.Stack,{gap:1.5,children:[(0,a.BX)(o.H1,{ref:t,tabIndex:-1,focusRingFor:"keyboard","aria-label":"".concat(r," form, ").concat(l),children:[(0,a.tZ)(i.Text,{display:"block",fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:r}),l]}),s?(0,a.tZ)(i.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,!d&&(0,a.tZ)(c.z,{}),u]})}}}]);