"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{89745:function(e,t,r){r.d(t,{w:function(){return n}});function n(e){if(e)return/^(https?:\/\/|\/\/)/i.test(e)?e:["/pr-preview/pr-1145",e].filter(Boolean).join("")}},64627:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(90446),n()},90446:function(e,t,r){r.d(t,{InpageNav:function(){return y},InpageNavContainer:function(){return l},InpageNavItem:function(){return h},InpageNavItemContainer:function(){return u},InpageNavTitle:function(){return p}});var n=r(90849),o=r(90089),i=r(10043),c=r(7686),a=r(85885),s=r(87800),l=function(e){var t=e.children,r=e["aria-label"];return(0,s.tZ)(c.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,i.iv)({borderLeftColor:a.boxPalette.foregroundAction},"",""),"aria-label":r,children:t})},u=function(e){var t=e.children;return(0,s.tZ)(c.Stack,{as:"ul",gap:.5,children:t})},d=r(70711);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=function(e){return(0,s.tZ)(c.Box,{as:"li",children:(0,s.tZ)(d.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))})},f=r(93555),p=function(e){var t=e.children;return(0,s.tZ)(f.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},g=["label"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=function(e){var t=e["aria-label"],r=e.links,n=e.title;return(0,s.BX)(l,{"aria-label":void 0===t?"in page":t,children:[n?(0,s.tZ)(p,{children:n}):null,(0,s.tZ)(u,{children:r.map(function(e,t){var r=e.label,n=(0,o.Z)(e,g);return(0,s.tZ)(h,v(v({},n),{},{children:r}),t)})})]})}},39734:function(e,t,r){r.d(t,{Switch:function(){return j}});var n=r(90849),o=r(10043),i=r(29011),c=r(93555),a=r(7686),s=r(85885),l={sm:{borderWidth:s.packs.control.sm.borderWidth,height:s.packs.control.sm.height,thumbCheckedPos:"1.25rem",width:"2.75rem"},md:{borderWidth:s.packs.control.md.borderWidth,height:s.packs.control.md.height,thumbCheckedPos:"1.5rem",width:"3.5rem"}},u=r(87800);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var b={name:"sfltnx",styles:"position:relative;flex-shrink:0"},h=function(e){var t=e.children,r=l[e.size],n=r.width,o=r.height;return(0,u.tZ)(a.Box,{as:"span",width:n,height:o,css:b,children:t})},f=function(e){var t=e.checked,r=l[e.size],i=r.borderWidth,c=r.height;return(0,u.tZ)(a.Box,{as:"span",css:(0,o.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({borderWidth:i,borderStyle:"solid",borderRadius:c,position:"absolute",inset:0},t?{backgroundColor:s.boxPalette.foregroundAction,borderColor:s.boxPalette.foregroundAction}:{borderColor:s.boxPalette.border,backgroundColor:s.boxPalette.backgroundShade}),"","")})},p=function(e){var t=e.checked,r=e.size,n=l[r],i=n.thumbCheckedPos,c=n.borderWidth,d=n.height;return(0,u.tZ)(a.Flex,{as:"span",alignItems:"center",justifyContent:"center",height:d,width:d,background:"body",css:(0,o.iv)({borderRadius:d,borderWidth:c,borderStyle:"solid",borderColor:s.boxPalette.foregroundAction,position:"absolute",transition:"left ".concat(s.tokens.transition.duration,"ms ").concat(s.tokens.transition.timingFunction),left:t?i:"0rem"},"",""),children:t&&(0,u.tZ)(O,{size:r})})},g={md:{width:18,height:14,stroke:3},sm:{width:10,height:7,stroke:4}},O=function(e){var t=g[e.size],r=t.height,n=t.width,i=t.stroke;return(0,u.tZ)("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",css:(0,o.iv)({width:n,height:r},"",""),stroke:s.boxPalette.foregroundAction,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round",xmlns:"http://www.w3.org/2000/svg",children:(0,u.tZ)("path",{d:"M2 7.71429L6.15385 12L15.8462 2"})})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var j=function(e){var t=e.size,r=void 0===t?"md":t,n=e.label,l=e.onChange,d=e.checked;return(0,u.BX)(a.Flex,{as:"label",gap:.75,alignItems:"center",css:(0,o.iv)({cursor:"pointer","&:hover":{"& input:not(:focus) ~ span:first-of-type":{borderColor:s.boxPalette.foregroundText,backgroundColor:d?s.boxPalette.foregroundText:s.boxPalette.backgroundShadeAlt},"& input:not(:focus) ~ span:last-of-type":{borderColor:s.boxPalette.foregroundText,"& svg":{stroke:d?s.boxPalette.foregroundText:void 0}}}},"",""),children:[(0,u.BX)(h,{size:r,children:[(0,u.tZ)("input",{type:"checkbox",role:"switch",checked:d,onChange:function(){return l(!d)},css:(0,o.iv)(y(y({},i.J),{},{"&:focus ~ span:first-of-type":s.packs.outline}),"","")}),(0,u.tZ)(f,{size:r,checked:d}),(0,u.tZ)(p,{size:r,checked:d})]}),(0,u.tZ)(c.Text,{children:n})]})}},69568:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(39734),n()}}]);