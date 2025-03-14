"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{7164:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(8229),n()},3600:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(2320),n()},2059:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(3306),n()},3434:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(5136),n()},9460:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(8613),n()},8010:function(e,r,t){t.d(r,{Checkbox:function(){return k}});var n=t(7043),o=t(89),i=t(7378),c=t(8464),a=t(9395),d=t(43),l=t(9631),u=t(1607),s=t(7800);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b=function(e){var r=e.disabled,t=e.indeterminate,n=e.invalid,o=e.size,i=c.lB.control[o],a=i.width,f=i.height,b=i.borderWidth;return(0,s.tZ)(l.Flex,{alignItems:"center",as:"span",css:(0,d.iv)(p(p({borderWidth:b,borderStyle:"solid",borderColor:c._X.border,backgroundColor:c._X.backgroundBody,color:c._X.foregroundText},r&&{color:c._X.borderMuted,borderColor:c._X.borderMuted,backgroundColor:c._X.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),n&&{borderColor:c._X.systemError,backgroundColor:c._X.systemErrorMuted}),"",""),flexShrink:0,height:f,justifyContent:"center",rounded:!0,width:a,children:t?(0,s.tZ)(u.V_,{size:o,weight:"bold"}):(0,s.tZ)(u.nQ,{size:o,weight:"bold"})})},v=t(4456);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var y=(0,i.forwardRef)(function(e,r){return(0,s.tZ)("input",h({css:(0,d.iv)(h(h({},v.JM),{},{"&:focus ~ span:first-of-type":c.lB.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}}),"",""),ref:r},e))});function g(e){var r=e.children,t=e.htmlFor,n=e.disabled;return(0,s.tZ)(l.Flex,{alignItems:"flex-start",as:"label",color:"text",css:(0,d.iv)({cursor:n?"not-allowed":"pointer"},"",""),gap:.5,htmlFor:t,inline:!0,children:r})}var m=t(2288),j={sm:0,md:"0.2rem"};function w(e){var r=e.children,t=e.disabled,n=j[e.size];return(0,s.tZ)(m.Text,{color:t?"muted":"text",css:(0,d.iv)({paddingTop:n},"",""),flexGrow:1,children:r})}var P=["checked","children","disabled","indeterminate","invalid","name","required","size"];function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var k=(0,i.forwardRef)(function(e,r){var t,d,l=e.checked,u=e.children,f=e.disabled,p=e.indeterminate,v=e.invalid,O=e.name,h=e.required,m=e.size,j=void 0===m?"md":m,k=(0,o.Z)(e,P),x=(t=k.id,d=(0,c.Me)(t),t||"checkbox-".concat(d)),Z=(0,i.useRef)(null),D=(0,a.j)(),C="boolean"==typeof v?v:null==D?void 0:D.invalid,S="boolean"==typeof h?h:null==D?void 0:D.required,E=O||(null==D?void 0:D.name);(0,i.useEffect)(function(){Z.current&&(Z.current.indeterminate=!!p)},[p]);var X=!p&&l;return(0,s.BX)(g,{disabled:f,htmlFor:x,children:[(0,s.tZ)(y,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({"aria-checked":p?"mixed":void 0,"aria-describedby":C?null==D?void 0:D.messageId:void 0,"aria-invalid":C||void 0,"aria-required":S,checked:X,disabled:f,id:x,name:E,ref:(0,c.lq)([r,Z]),type:"checkbox"},k)),(0,s.tZ)(b,{disabled:f,indeterminate:p,invalid:C,size:j}),(0,s.tZ)(w,{disabled:f,size:j,children:u})]})})},9395:function(e,r,t){t.d(r,{U:function(){return d},j:function(){return a}});var n=t(7378),o=t(8464),i=t(7800),c=(0,n.createContext)(void 0),a=function(){return(0,n.useContext)(c)};function d(e){var r=e.children,t=e.invalid,n=e.messageId,a=e.name,d=e.required,l=(0,o.Me)();return(0,i.tZ)(c.Provider,{value:{invalid:t,name:a||l,messageId:n,required:d},children:r})}},5136:function(e,r,t){t.d(r,{FormStack:function(){return i}});var n=t(9631),o=t(7800);function i(e){var r=e.children;return(0,o.tZ)(n.Flex,{flexDirection:"column",gap:2,children:r})}},8613:function(e,r,t){t.d(r,{ListItem:function(){return v},UnorderedList:function(){return d}});var n=t(43),o=t(8464),i=t(7378),c=(0,i.createContext)(0),a=t(7800);function d(e){var r=e.children,t=(0,i.useContext)(c)+1;return(0,a.tZ)(c.Provider,{value:t,children:(0,a.tZ)("ul",{css:(0,n.iv)({marginTop:t>1?(0,o.mapSpacing)(.5):0,marginBottom:0},"",""),children:r})})}var l=t(7043),u=t(89),s=t(2288),f=["children"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach(function(r){(0,l.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function v(e){var r=e.children,t=(0,u.Z)(e,f);return(0,a.tZ)(s.Text,b(b({as:"li",css:(0,n.iv)({listStyle:"unset","&:not(:first-of-type)":{marginTop:(0,o.mapSpacing)(.5)}},"","")},t),{},{children:r}))}},460:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(6338),n()},7625:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(7797),n()}}]);