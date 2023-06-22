"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{9745:function(e,t,r){r.d(t,{w:function(){return n}});function n(e){if(e)return/^(https?:\/\/|\/\/)/i.test(e)?e:["/pr-preview/pr-1212",e].filter(Boolean).join("")}},4627:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(446),n()},446:function(e,t,r){r.d(t,{InpageNav:function(){return j},InpageNavContainer:function(){return l},InpageNavItem:function(){return f},InpageNavItemContainer:function(){return u},InpageNavTitle:function(){return g}});var n=r(849),o=r(89),i=r(43),c=r(2951),a=r(5885),s=r(7800),l=function(e){var t=e.children,r=e["aria-label"];return(0,s.tZ)(c.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,i.iv)({borderLeftColor:a.boxPalette.foregroundAction},"",""),"aria-label":r,children:t})},u=function(e){var t=e.children;return(0,s.tZ)(c.Stack,{as:"ul",gap:.5,children:t})},d=r(4241),b=r(711);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=function(e){return(0,s.tZ)(d.Box,{as:"li",children:(0,s.tZ)(b.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))})},p=r(3555),g=function(e){var t=e.children;return(0,s.tZ)(p.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},O=["label"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var j=function(e){var t=e["aria-label"],r=e.links,n=e.title;return(0,s.BX)(l,{"aria-label":void 0===t?"in page":t,children:[n?(0,s.tZ)(g,{children:n}):null,(0,s.tZ)(u,{children:r.map(function(e,t){var r=e.label,n=(0,o.Z)(e,O);return(0,s.tZ)(f,y(y({},n),{},{children:r}),t)})})]})}},9734:function(e,t,r){r.d(t,{Switch:function(){return P}});var n=r(849),o=r(43),i=r(9011),c=r(3555),a=r(9138),s=r(5885),l=r(4241),u={sm:{borderWidth:s.packs.control.sm.borderWidth,height:s.packs.control.sm.height,thumbCheckedPos:"1.25rem",width:"2.75rem"},md:{borderWidth:s.packs.control.md.borderWidth,height:s.packs.control.md.height,thumbCheckedPos:"1.5rem",width:"3.5rem"}},d=r(7800);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h={name:"sfltnx",styles:"position:relative;flex-shrink:0"},f=function(e){var t=e.children,r=u[e.size],n=r.width,o=r.height;return(0,d.tZ)(l.Box,{as:"span",width:n,height:o,css:h,children:t})},p=function(e){var t=e.checked,r=u[e.size],i=r.borderWidth,c=r.height;return(0,d.tZ)(l.Box,{as:"span",css:(0,o.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({borderWidth:i,borderStyle:"solid",borderRadius:c,position:"absolute",inset:0},t?{backgroundColor:s.boxPalette.foregroundAction,borderColor:s.boxPalette.foregroundAction}:{borderColor:s.boxPalette.border,backgroundColor:s.boxPalette.backgroundShade}),"","")})},g=function(e){var t=e.checked,r=e.size,n=u[r],i=n.thumbCheckedPos,c=n.borderWidth,l=n.height;return(0,d.tZ)(a.Flex,{as:"span",alignItems:"center",justifyContent:"center",height:l,width:l,background:"body",css:(0,o.iv)({borderRadius:l,borderWidth:c,borderStyle:"solid",borderColor:s.boxPalette.foregroundAction,position:"absolute",transition:"left ".concat(s.tokens.transition.duration,"ms ").concat(s.tokens.transition.timingFunction),left:t?i:"0rem"},"",""),children:t&&(0,d.tZ)(v,{size:r})})},O={md:{width:18,height:14,stroke:3},sm:{width:10,height:7,stroke:4}},v=function(e){var t=O[e.size],r=t.height,n=t.width,i=t.stroke;return(0,d.tZ)("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",css:(0,o.iv)({width:n,height:r},"",""),stroke:s.boxPalette.foregroundAction,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",xmlns:"http://www.w3.org/2000/svg",children:(0,d.tZ)("path",{d:"M2 7.71429L6.15385 12L15.8462 2"})})};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var P=function(e){var t=e.size,r=void 0===t?"md":t,n=e.label,l=e.onChange,u=e.checked;return(0,d.BX)(a.Flex,{as:"label",gap:.75,alignItems:"center",css:(0,o.iv)({cursor:"pointer","&:hover":{"& input:not(:focus) ~ span:first-of-type":{borderColor:s.boxPalette.foregroundText,backgroundColor:u?s.boxPalette.foregroundText:s.boxPalette.backgroundShadeAlt},"& input:not(:focus) ~ span:last-of-type":{borderColor:s.boxPalette.foregroundText,"& svg":{stroke:u?s.boxPalette.foregroundText:void 0}}}},"",""),children:[(0,d.BX)(f,{size:r,children:[(0,d.tZ)("input",{type:"checkbox",role:"switch",checked:u,onChange:function(){return l(!u)},css:(0,o.iv)(j(j({},i.J),{},{"&:focus ~ span:first-of-type":s.packs.outline}),"","")}),(0,d.tZ)(p,{size:r,checked:u}),(0,d.tZ)(g,{size:r,checked:u})]}),(0,d.tZ)(c.Text,{children:n})]})}},9568:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(9734),n()}}]);