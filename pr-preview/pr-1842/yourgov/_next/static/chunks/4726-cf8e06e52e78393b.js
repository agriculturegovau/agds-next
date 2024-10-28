"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4726],{51036:function(e,r,n){var t=n(51502).___internalHook("/","../../../..","../..");e.exports=n(11475),t()},60954:function(e,r,n){n.d(r,{gN:function(){return g},i$:function(){return l},J1:function(){return f},Qy:function(){return s},nd:function(){return m},useScrollToField:function(){return k}});var t=n(10043),i=n(8447),o=n(7226),d=n(87800),l=function(e){var r=e.children,n=e.invalid,l=e.id;return(0,d.tZ)(o.Stack,{gap:.5,paddingLeft:n?1:void 0,borderLeft:n,borderLeftWidth:"xl",id:l,css:(0,t.iv)({borderLeftColor:n?i._X.systemError:void 0},"",""),children:r})},a=n(27378),c=n(84815),u=n(89205),s=function(e){var r=e.as,n=e.children,t=e.className,i=e.id,o=e.htmlFor,l=e.required,s=e.secondaryLabel,f=e.hideOptionalLabel,h=(0,a.useMemo)(function(){return[s,f||l?null:"(optional)"].filter(Boolean).join(" ")},[l,s,f]);return(0,d.BX)(c.Box,{as:void 0===r?"label":r,id:i,htmlFor:o,className:t,children:[(0,d.tZ)(u.Text,{as:"span",fontWeight:"bold",children:n}),h?(0,d.BX)(u.Text,{as:"span",color:"muted",children:[" ",h]}):null]})},f=function(e){var r=e.children,n=e.id;return(0,d.tZ)(u.Text,{display:"block",color:"muted",id:n,children:r})},h=n(84007),b=n(32084),p={name:"4zleql",styles:"display:block"},m=function(e){var r=e.children,n=e.id;return(0,d.BX)(h.Flex,{gap:.5,alignItems:"center",children:[(0,d.tZ)(c.Box,{flexShrink:0,children:(0,d.tZ)(b.AlertFilledIcon,{color:"error",size:"md","aria-label":"Error","aria-hidden":"false",css:p})}),(0,d.tZ)(u.Text,{display:"block",fontWeight:"bold",color:"error",id:n,children:r})]})},g=function(e){var r=e.children,n=e.hint,o=e.id,a=e.invalid,c=e.label,u=e.labelId,h=e.maxWidth,b=e.secondaryLabel,p=e.hideOptionalLabel,g=e.message,k=e.required,x=v(o),O=x.fieldId,I=x.hintId,_=x.messageId,L=y({required:k,fieldId:O,message:g,messageId:_,hint:n,hintId:I,invalid:a});return(0,d.BX)(l,{invalid:a,children:[(0,d.tZ)(s,{id:u,htmlFor:O,secondaryLabel:b,hideOptionalLabel:p,required:k,children:c}),n?(0,d.tZ)(f,{id:I,children:n}):null,g&&a?(0,d.tZ)(m,{id:_,children:g}):null,"function"==typeof r?r(L):r,h?(0,d.tZ)("div",{"aria-hidden":!0,css:(0,t.iv)({height:0,marginTop:"-".concat((0,i.mapSpacing)(.5)),maxWidth:i.tokens.maxWidth.field[h],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},v=function(e){var r=(0,i.Me)(e);return{fieldId:e||"field-".concat(r),hintId:"field-".concat(r,"-hint"),messageId:"field-".concat(r,"-message")}},y=function(e){var r=e.required,n=e.fieldId,t=e.message,i=e.messageId,o=e.hint,d=e.hintId,l=e.invalid,a=[t?i:null,o?d:null].filter(Boolean);return{"aria-required":!!r,"aria-invalid":!!l,"aria-describedby":a.length?a.join(" "):void 0,id:n}};function k(){return(0,a.useCallback)(function(e){var r=function(e){if("string"==typeof e)return e;var r=e.target;if(r instanceof HTMLAnchorElement)return r.hash.substring(1)}(e);if(r){var n,t,i,o=document.getElementById(r)||document.getElementsByName(r)[0];o&&(i=null==(t=document.querySelector("label[for='"+r+"']"))?void 0:t.parentElement,"div"===o.tagName.toLowerCase()?null===(n=o.querySelector("input"))||void 0===n||n.focus():o.focus(),i?i.scrollIntoView():o.scrollIntoView(),"string"!=typeof e&&e.preventDefault())}},[])}},11725:function(e,r,n){n.d(r,{TextInput:function(){return f},c:function(){return h}});var t=n(90849),i=n(90089),o=n(27378),d=n(60954),l=n(8447),a=n(87800),c=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach(function(r){(0,t.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var f=(0,o.forwardRef)(function(e,r){var n=e.label,t=e.hideOptionalLabel,o=e.required,l=e.hint,u=e.message,f=e.invalid,b=e.block,p=e.maxWidth,m=void 0===p?"md":p,g=e.id,v=e.type,y=void 0===v?"text":v,k=(0,i.Z)(e,c),x=h({block:b,maxWidth:m});return(0,a.tZ)(d.gN,{label:n,hideOptionalLabel:t,required:!!o,hint:l,maxWidth:m,message:u,invalid:f,id:g,children:function(e){return(0,a.tZ)("input",s(s({ref:r,css:x},e),{},{type:y},k))}})}),h=function(e){var r=e.block,n=e.maxWidth,t=e.multiline;return s(s(s(s(s({appearance:"none",boxSizing:"border-box",paddingLeft:(0,l.mapSpacing)(1),paddingRight:(0,l.mapSpacing)(1),margin:0,background:l._X.backgroundBody,borderWidth:l.tokens.borderWidth.lg,borderStyle:"solid",borderColor:l._X.border,borderRadius:l.tokens.borderRadius,color:l._X.foregroundText,fontFamily:l.tokens.font.body},l.lB.input.md),n&&{maxWidth:l.tokens.maxWidth.field[n]}),r&&{maxWidth:"none",display:"block",width:"100%"}),t&&{paddingTop:(0,l.mapSpacing)(.5),paddingBottom:(0,l.mapSpacing)(.5),height:"auto",minHeight:"6rem"}),{},{'&[aria-invalid="true"]':{backgroundColor:l._X.systemErrorMuted,borderColor:l._X.systemError},"&:disabled":{cursor:"not-allowed",borderColor:l._X.borderMuted,backgroundColor:l._X.backgroundShade,color:l._X.foregroundMuted},"&:focus":l.lB.outline})}},79706:function(e,r,n){var t=n(51502).___internalHook("/","../../../..","../..");e.exports=n(7971),t()}}]);