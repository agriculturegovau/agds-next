"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1338],{37164:function(e,n,r){var i=r(51502).___internalHook("/","../../../..","../..");e.exports=r(58229),i()},47753:function(e,n,r){var i=r(51502).___internalHook("/","../../../..","../..");e.exports=r(72320),i()},69395:function(e,n,r){r.d(n,{U:function(){return a},j:function(){return d}});var i=r(27378),t=r(8464),l=r(87800),o=(0,i.createContext)(void 0),d=function(){return(0,i.useContext)(o)};function a(e){var n=e.children,r=e.invalid,i=e.messageId,d=e.name,a=e.required,c=(0,t.Me)();return(0,l.tZ)(o.Provider,{value:{invalid:r,name:d||c,messageId:i,required:a},children:n})}},13306:function(e,n,r){r.d(n,{gN:function(){return b},i$:function(){return d},J1:function(){return f},Qy:function(){return s},nd:function(){return p},useScrollToField:function(){return y}});var i=r(10043),t=r(8464),l=r(96778),o=r(87800),d=function(e){var n=e.children,r=e.invalid,d=e.id;return(0,o.tZ)(l.Stack,{gap:.5,paddingLeft:r?1:void 0,borderLeft:r,borderLeftWidth:"xl",id:d,css:(0,i.iv)({borderLeftColor:r?t._X.systemError:void 0},"",""),children:n})},a=r(48050),c=r(92288),u=r(81195),s=function(e){var n=e.as,r=e.children,i=e.className,t=e.id,l=e.htmlFor,d=e.required,s=e.secondaryLabel,f=e.hideOptionalLabel,h=(0,u.C)({hideOptionalLabel:f,required:d,secondaryLabel:s});return(0,o.BX)(a.Box,{as:void 0===n?"label":n,id:t,htmlFor:l,className:i,children:[(0,o.tZ)(c.Text,{as:"span",fontWeight:"bold",children:r}),h?(0,o.BX)(c.Text,{as:"span",color:"muted",children:[" ",h]}):null]})},f=function(e){var n=e.children,r=e.id;return(0,o.tZ)(c.Text,{display:"block",color:"muted",id:r,children:n})},h=r(19631),v=r(14441),m={name:"4zleql",styles:"display:block"},p=function(e){var n=e.children,r=e.id;return(0,o.BX)(h.Flex,{gap:.5,alignItems:"center",children:[(0,o.tZ)(a.Box,{flexShrink:0,children:(0,o.tZ)(v.AlertFilledIcon,{color:"error",size:"md","aria-label":"Error","aria-hidden":"false",css:m})}),(0,o.tZ)(c.Text,{display:"block",fontWeight:"bold",color:"error",id:r,children:n})]})},b=function(e){var n=e.children,r=e.hint,l=e.id,a=e.invalid,c=e.label,u=e.labelId,h=e.maxWidth,v=e.secondaryLabel,m=e.hideOptionalLabel,b=e.message,x=e.required,y=g(l),L=y.fieldId,k=y.hintId,q=y.messageId,_=I({required:x,fieldId:L,message:b,messageId:q,hint:r,hintId:k,invalid:a});return(0,o.BX)(d,{invalid:a,children:[(0,o.tZ)(s,{id:u,htmlFor:L,secondaryLabel:v,hideOptionalLabel:m,required:x,children:c}),r?(0,o.tZ)(f,{id:k,children:r}):null,b&&a?(0,o.tZ)(p,{id:q,children:b}):null,"function"==typeof n?n(_):n,h?(0,o.tZ)("div",{"aria-hidden":!0,css:(0,i.iv)({height:0,marginTop:"-".concat((0,t.mapSpacing)(.5)),maxWidth:t.tokens.maxWidth.field[h],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},g=function(e){var n=(0,t.Me)(e);return{fieldId:e||"field-".concat(n),hintId:"field-".concat(n,"-hint"),messageId:"field-".concat(n,"-message")}},I=function(e){var n=e.required,r=e.fieldId,i=e.message,t=e.messageId,l=e.hint,o=e.hintId,d=e.invalid,a=[i?t:null,l?o:null].filter(Boolean);return{"aria-required":!!n,"aria-invalid":!!d,"aria-describedby":a.length?a.join(" "):void 0,id:r}},x=r(27378);function y(){return(0,x.useCallback)(function(e){var n=function(e){if("string"==typeof e)return e;var n=e.target;if(n instanceof HTMLAnchorElement)return n.hash.substring(1)}(e);if(n){var r,i,t,l=document.getElementById(n)||document.getElementsByName(n)[0];l&&(t=null==(i=document.querySelector("label[for='"+n+"']"))?void 0:i.parentElement,"div"===l.tagName.toLowerCase()?null===(r=l.querySelector("input"))||void 0===r||r.focus():l.focus(),t?t.scrollIntoView():l.scrollIntoView(),"string"!=typeof e&&e.preventDefault())}},[])}},81195:function(e,n,r){r.d(n,{C:function(){return t}});var i=r(27378),t=function(e){var n=e.hideOptionalLabel,r=e.required,t=e.secondaryLabel;return(0,i.useMemo)(function(){return[t,n||r?null:"(optional)"].filter(Boolean).join(" ")},[r,t,n])}},94609:function(e,n,r){var i=r(51502).___internalHook("/","../../../..","../..");e.exports=r(77797),i()},82973:function(e,n,r){r.d(n,{z:function(){return l}});var i=r(79628),t=r(87800),l=function(){return(0,t.tZ)(i.Text,{as:"p",fontSize:"xs",color:"muted",children:"All fields are required unless marked optional."})}}}]);