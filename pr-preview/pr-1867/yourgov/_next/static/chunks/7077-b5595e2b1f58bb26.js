"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7077],{92100:function(e,r,t){var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(44608),n()},20034:function(e,r,t){var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(50280),n()},81715:function(e,r,t){var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(12215),n()},60893:function(e,r,t){t.d(r,{U:function(){return c},j:function(){return d}});var n=t(27378),o=t(8447),i=t(87800),a=(0,n.createContext)(void 0),d=function(){return(0,n.useContext)(a)};function c(e){var r=e.children,t=e.invalid,n=e.messageId,d=e.name,c=e.required,l=(0,o.Me)();return(0,i.tZ)(a.Provider,{value:{invalid:t,name:d||l,messageId:n,required:c},children:r})}},44608:function(e,r,t){t.d(r,{ControlGroup:function(){return u}});var n=t(10043),o=t(84815),i=t(84007),a=t(7226),d=t(8447),c=t(60954),l=t(60893),s=t(87800),u=function(e){var r=e.block,t=void 0!==r&&r,u=e.children,f=e.hint,p=e.id,h=e.invalid,g=void 0!==h&&h,v=e.label,m=e.hideOptionalLabel,y=e.message,O=e.name,j=e.required,w=void 0!==j&&j,k=b(p),x=k.groupId,P=k.hintId,Z=k.messageId,_=[g&&y?Z:null,f?P:null].filter(Boolean),C=_.length?_.join(" "):void 0;return(0,s.tZ)(l.U,{invalid:g,messageId:g&&y?Z:void 0,name:O,required:w,children:(0,s.tZ)(c.i$,{invalid:g,id:x,children:(0,s.BX)(o.Box,{as:"fieldset","aria-describedby":C,children:[v?(0,s.tZ)(c.Qy,{as:"legend",required:w,hideOptionalLabel:m,children:v}):null,(0,s.BX)(a.Stack,{gap:.5,css:(0,n.iv)({marginTop:v?(0,d.mapSpacing)(.5):void 0},"",""),children:[f?(0,s.tZ)(c.J1,{id:P,children:f}):null,y&&g?(0,s.tZ)(c.nd,{id:Z,children:y}):null,(0,s.tZ)(i.Flex,{gap:1,flexDirection:t?"column":"row",flexWrap:t?void 0:"wrap",width:"100%",paddingTop:.5,children:u})]})]})})})},b=function(e){var r=(0,d.Me)(e);return{groupId:e||"control-group-".concat(r),hintId:"control-group-".concat(r,"-hint"),messageId:"control-group-".concat(r,"-message")}}},50280:function(e,r,t){t.d(r,{Details:function(){return b}});var n=t(10043),o=t(27378),i=t(84815),a=t(8447),d=t(84007),c=t(32084),l=t(87800),s={name:"17m7bq9",styles:"&[open] summary svg:last-of-type{transform:rotate(180deg);}summary::marker, summary::-webkit-details-marker{display:none;}"},u={name:"1tjylrs",styles:"width:fit-content"},b=(0,o.forwardRef)(function(e,r){var t=e.children,o=e.onBodyAlt,b=e.iconBefore,f=e.label;return(0,l.BX)("details",{ref:r,css:s,children:[(0,l.BX)(d.Flex,{as:"summary",css:u,link:!0,focusRingFor:"keyboard",alignItems:"center",fontWeight:"bold",paddingY:.5,rounded:!0,children:[void 0!==b&&b&&(0,l.tZ)(c.sz,{"aria-hidden":!1,"aria-label":"Information.",css:(0,n.iv)({marginRight:(0,a.mapSpacing)(.5)},"",""),size:"md",weight:"regular"}),void 0===f?"Details":f,(0,l.tZ)(c.v4,{weight:"bold",css:(0,n.iv)({marginLeft:(0,a.mapSpacing)(.25)},"","")})]}),(0,l.tZ)(i.Box,{background:void 0!==o&&o?"shadeAlt":"shade",padding:1.5,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:t})]})})},12215:function(e,r,t){t.d(r,{Radio:function(){return P}});var n=t(90849),o=t(90089),i=t(27378),a=t(8447),d=t(60893),c=t(10043),l=t(84815),s=t(84007),u=t(87800);function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function p(e){var r=e.disabled,t=e.invalid,n=e.size,o=a.lB.control[n],i=o.width,d=o.height,b=o.borderWidth;return(0,u.tZ)(s.Flex,{as:"span",justifyContent:"center",alignItems:"center",width:i,height:d,flexShrink:0,css:(0,c.iv)(f(f({borderWidth:b,borderRadius:"100%",borderStyle:"solid",borderColor:a._X.border,backgroundColor:a._X.backgroundBody},r&&{color:a._X.borderMuted,borderColor:a._X.borderMuted,backgroundColor:a._X.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),t&&{borderColor:a._X.systemError,backgroundColor:a._X.systemErrorMuted}),"",""),rounded:!0,children:(0,u.tZ)(l.Box,{as:"span",width:"calc(100% - 0.5rem)",height:"calc(100% - 0.5rem)",highContrastOutline:!0,css:(0,c.iv)(f({borderRadius:"100%",backgroundColor:a._X.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},r&&{backgroundColor:a._X.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"","")})})}var h=t(64388);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m=(0,i.forwardRef)(function(e,r){return(0,u.tZ)("input",v({ref:r,css:(0,c.iv)(v(v({},h.visuallyHiddenStyles),{},{"&:focus ~ span:first-of-type":a.lB.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}}),"","")},e))}),y=function(e){var r=e.children,t=e.disabled,n=e.htmlFor;return(0,u.tZ)(s.Flex,{as:"label",alignItems:"flex-start",color:"text",gap:.5,htmlFor:n,inline:!0,css:(0,c.iv)({cursor:t?"not-allowed":"pointer"},"",""),children:r})},O=t(89205),j={sm:0,md:"0.2rem"};function w(e){var r=e.children,t=e.disabled,n=j[e.size];return(0,u.tZ)(O.Text,{flexGrow:1,color:t?"muted":"text",css:(0,c.iv)({paddingTop:n},"",""),children:r})}var k=["children","disabled","invalid","name","required","size"];function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var P=(0,i.forwardRef)(function(e,r){var t,i,c=e.children,l=e.disabled,s=e.invalid,b=e.name,f=e.required,h=e.size,g=void 0===h?"md":h,v=(0,o.Z)(e,k),O=(t=v.id,i=(0,a.Me)(t),t||"radio-".concat(i)),j=(0,d.j)(),P="boolean"==typeof s?s:null==j?void 0:j.invalid,Z="boolean"==typeof f?f:null==j?void 0:j.required,_=b||(null==j?void 0:j.name);return(0,u.BX)(y,{disabled:l,htmlFor:O,children:[(0,u.tZ)(m,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({"aria-describedby":P?null==j?void 0:j.messageId:void 0,"aria-invalid":P||void 0,"aria-required":Z,disabled:l,id:O,name:_,ref:r,type:"radio"},v)),(0,u.tZ)(p,{disabled:l,invalid:P,size:g}),(0,u.tZ)(w,{disabled:l,size:g,children:c})]})})}}]);