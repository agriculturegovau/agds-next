"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4373],{74373:function(e,r,o){var t=o(51502).___internalHook("/","../../../..","../..");e.exports=o(67098),t()},67098:function(e,r,o){o.d(r,{Select:function(){return h}});var t=o(10043),n=o(90849),i=o(90089),l=o(27378),a=o(60954),d=o(23914),c=o(22001),s=o(87800),u=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function b(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?b(Object(o),!0).forEach(function(r){(0,n.Z)(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}var h=(0,l.forwardRef)(function(e,r){var o=e.label,t=e.hideOptionalLabel,n=e.required,l=e.hint,d=e.message,c=e.invalid,b=e.block,h=e.maxWidth,k=void 0===h?"md":h,y=e.options,O=e.placeholder,_=e.id,x=(0,i.Z)(e,u),w=m({block:b,invalid:c});return(0,s.tZ)(a.gN,{label:o,hideOptionalLabel:t,required:!!n,hint:l,maxWidth:k,message:d,invalid:c,id:_,children:function(e){return(0,s.BX)(f,{block:b,maxWidth:k,children:[(0,s.tZ)("select",p(p(p({ref:r,css:w},e),x),{},{children:(0,s.tZ)(g,{options:y,placeholder:O})})),(0,s.tZ)(v,{disabled:x.disabled})]})}})}),f=function(e){var r=e.children,o=e.block,n=e.maxWidth;return(0,s.tZ)("div",{css:(0,t.iv)(p({position:"relative"},!o&&{maxWidth:d.tokens.maxWidth.field[n]}),"",""),children:r})},g=function(e){var r=e.options,o=e.placeholder;return(0,s.BX)(l.Fragment,{children:[o?(0,s.tZ)("option",{value:"",children:o}):null,r.map(function(e){return"options"in e?(0,s.tZ)("optgroup",{label:e.label,disabled:e.disabled,children:e.options.map(function(e){var r=e.value,o=e.label,t=e.disabled;return(0,s.tZ)("option",{value:r,disabled:t,children:o},r)})},e.label):(0,s.tZ)("option",{value:e.value,disabled:e.disabled,children:e.label},e.value)})]})},v=function(e){var r=e.disabled;return(0,s.tZ)(c.ChevronDownIcon,{css:(0,t.iv)({position:"absolute",top:"50%",right:(0,d.mapSpacing)(.75),transform:"translateY(-50%)",opacity:r?.3:void 0,pointerEvents:"none",color:d._X.foregroundAction},"","")})},m=function(e){var r=e.block,o=e.invalid;return p(p(p(p(p({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,d.mapSpacing)(1),paddingRight:"calc(".concat(d.tokens.borderWidth.lg,"px + 2.5rem)"),margin:0,background:d._X.backgroundBody,borderWidth:d.tokens.borderWidth.lg,borderStyle:"solid",borderColor:d._X.border,borderRadius:d.tokens.borderRadius,color:d._X.foregroundText,width:"100%",fontFamily:d.tokens.font.body},d.lB.input.md),{},{lineHeight:d.tokens.lineHeight.default},d.lB.truncate),r&&{maxWidth:"none",display:"block"}),o&&{backgroundColor:d._X.systemErrorMuted,borderColor:d._X.systemError}),{},{"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:d._X.borderMuted,backgroundColor:d._X.backgroundShade,color:d._X.foregroundMuted},"&:focus":d.lB.outline})}}}]);