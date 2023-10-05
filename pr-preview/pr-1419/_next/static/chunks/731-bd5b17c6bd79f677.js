"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{741:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(9685),n()},9685:function(e,t,r){r.d(t,{InpageNav:function(){return InpageNav},InpageNavContainer:function(){return InpageNavContainer},InpageNavItem:function(){return InpageNavItem},InpageNavItemContainer:function(){return InpageNavItemContainer},InpageNavTitle:function(){return InpageNavTitle}});var n=r(849),o=r(89),i=r(43),c=r(7601),a=r(294),s=r(7800),InpageNavContainer=function(e){var t=e.children,r=e["aria-label"];return(0,s.tZ)(c.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,i.iv)({borderLeftColor:a.boxPalette.foregroundAction},"",""),"aria-label":r,children:t})},InpageNavItemContainer=function(e){var t=e.children;return(0,s.tZ)(c.Stack,{as:"ul",gap:.5,children:t})},l=r(4339),p=r(2231);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var InpageNavItem=function(e){return(0,s.tZ)(l.Box,{as:"li",children:(0,s.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))})},u=r(8979),InpageNavTitle=function(e){var t=e.children;return(0,s.tZ)(u.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},b=["label"];function InpageNav_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function InpageNav_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?InpageNav_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):InpageNav_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var InpageNav=function(e){var t=e["aria-label"],r=e.links,n=e.title;return(0,s.BX)(InpageNavContainer,{"aria-label":void 0===t?"in page":t,children:[n?(0,s.tZ)(InpageNavTitle,{children:n}):null,(0,s.tZ)(InpageNavItemContainer,{children:r.map(function(e,t){var r=e.label,n=(0,o.Z)(e,b);return(0,s.tZ)(InpageNavItem,InpageNav_objectSpread(InpageNav_objectSpread({},n),{},{children:r}),t)})})]})}},7248:function(e,t,r){r.d(t,{Switch:function(){return Switch}});var n=r(849),o=r(43),i=r(7137),c=r(8979),a=r(6573),s=r(294),l=r(4339),p=r(2526),u={sm:{borderWidth:s.packs.control.sm.borderWidth,height:s.packs.control.sm.height,thumbCheckedPos:"1.25rem",width:"2.75rem"},md:{borderWidth:s.packs.control.md.borderWidth,height:s.packs.control.md.height,thumbCheckedPos:"1.5rem",width:"3.5rem"}},b=r(7800);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var d={name:"sfltnx",styles:"position:relative;flex-shrink:0"},SwitchContainer=function(e){var t=e.children,r=u[e.size],n=r.width,o=r.height;return(0,b.tZ)(l.Box,{as:"span",width:n,height:o,css:d,children:t})},SwitchTrack=function(e){var t=e.checked,r=u[e.size],i=r.borderWidth,c=r.height;return(0,b.tZ)(l.Box,{as:"span",css:(0,o.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({borderWidth:i,borderStyle:"solid",borderRadius:c,position:"absolute",inset:0},t?{backgroundColor:s.boxPalette.selected,borderColor:s.boxPalette.selected}:{borderColor:s.boxPalette.border,backgroundColor:s.boxPalette.backgroundShade}),"","")})},h={sm:{prop:"sm",actual:"0.875rem"},md:{prop:"md",actual:"1.375rem"}},SwitchThumb=function(e){var t=e.checked,r=e.size,n=u[r],i=n.thumbCheckedPos,c=n.borderWidth,l=n.height,d=h[r];return(0,b.tZ)(a.Flex,{as:"span",alignItems:"center",justifyContent:"center",height:l,width:l,background:"body",css:(0,o.iv)({borderRadius:l,borderWidth:c,borderStyle:"solid",borderColor:t?s.boxPalette.selected:s.boxPalette.foregroundAction,position:"absolute",transition:"left ".concat(s.tokens.transition.duration,"ms ").concat(s.tokens.transition.timingFunction),left:t?i:"0rem"},"",""),children:t&&(0,b.tZ)(p.CheckIcon,{weight:"bold",color:"selected",size:d.prop,css:(0,o.iv)({width:d.actual,height:d.actual},"","")})})};function Switch_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Switch_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Switch_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Switch_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Switch=function(e){var t=e.size,r=void 0===t?"md":t,n=e.label,l=e.onChange,p=e.checked;return(0,b.BX)(a.Flex,{as:"label",gap:.75,alignItems:"center",css:(0,o.iv)({width:"fit-content",cursor:"pointer","&:hover":{"& input:not(:focus) ~ span:first-of-type":{borderColor:s.boxPalette.foregroundText,backgroundColor:p?s.boxPalette.foregroundText:s.boxPalette.backgroundShadeAlt},"& input:not(:focus) ~ span:last-of-type":{borderColor:s.boxPalette.foregroundText,"& svg":{stroke:p?s.boxPalette.foregroundText:void 0}}}},"",""),children:[(0,b.BX)(SwitchContainer,{size:r,children:[(0,b.tZ)("input",{type:"checkbox",role:"switch",checked:p,onChange:function(){return l(!p)},css:(0,o.iv)(Switch_objectSpread(Switch_objectSpread({},i.J),{},{"&:focus-visible ~ span:first-of-type":s.packs.outline}),"","")}),(0,b.tZ)(SwitchTrack,{size:r,checked:p}),(0,b.tZ)(SwitchThumb,{size:r,checked:p})]}),(0,b.tZ)(c.Text,{children:n})]})}},813:function(e,t,r){var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(7248),n()}}]);