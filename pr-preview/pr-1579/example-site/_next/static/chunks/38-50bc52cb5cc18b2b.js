"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{3403:function(e,t,n){var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(463),r()},4953:function(e,t,n){var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(8192),r()},792:function(e,t,n){n.d(t,{a:function(){return W},G:function(){return S}});var r=n(43),o=n(4285),i=n(89),a=n(7043),d=n(7378),l=n(8542),u=n(3790),c=n(701),s=n(7811),f=n(2345),p=n(343),b=n(3914),y=n(6035),g=n(4815),v=n(4007),h=n(4388);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M="3rem",w={".rdp-vhidden":h.JM,".rdp-button_reset":{appearance:"none",background:"none",border:"none",margin:0,padding:0,cursor:"pointer",color:"inherit",font:"inherit"},".rdp-caption":{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:(0,b.mapSpacing)(.5)},".rdp-caption_label":O({zIndex:b.tokens.zIndex.elevated,whiteSpace:"nowrap",margin:0,color:b._X.foregroundText,fontWeight:b.tokens.fontWeight.bold},(0,b.vY)("lg","nospace")),".rdp-nav_button":O({position:"absolute",top:0,display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:b.tokens.borderRadius,color:b._X.foregroundAction,"&:hover":{color:b._X.foregroundText}},g.j4),".rdp-nav_button_previous":{left:0},".rdp-nav_button_next":{right:0},".rdp-head_cell":O({verticalAlign:"middle",textAlign:"center",margin:0,padding:0,width:M,height:M,fontWeight:b.tokens.fontWeight.normal,color:b._X.foregroundMuted},(0,b.vY)("sm","default")),".rdp-day":O(O({display:"flex",justifyContent:"center",alignItems:"center",width:M,height:M,borderRadius:b.tokens.borderRadius,color:b._X.foregroundAction,"&[disabled]":{color:b._X.foregroundText,opacity:.3,cursor:"not-allowed"},"&:not([disabled]):hover":{backgroundColor:b._X.backgroundShade,color:b._X.foregroundText,textDecoration:"underline"}},g.j4),{},{"&.rdp-day_today":{position:"relative",fontWeight:b.tokens.fontWeight.bold,"&:after":{content:'""',position:"absolute",bottom:"0.3rem",height:"0.5rem",width:"0.5rem",borderRadius:"0.25rem",backgroundColor:"currentColor"}}}),".rdp-months":{display:"flex",height:"23.5rem"},".rdp-month":{margin:"0 ".concat((0,b.mapSpacing)(1)),"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}},".rdp-table":{margin:0,maxWidth:"calc(".concat(M," * 7)"),borderCollapse:"collapse"},".rdp-tbody":{border:0},".rdp-cell":{width:M,height:M,padding:0,textAlign:"center"},".rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])":{"&:not(:focus)":g.ZZ,backgroundColor:b._X.selected,color:b._X.backgroundBody,fontWeight:b.tokens.fontWeight.bold}},Z=function(e){var t=null!=e?e:{},n=t.from,r=t.to,o={borderRadius:0,borderBottomLeftRadius:"50%",borderTopLeftRadius:"50%"},i={borderRadius:0,borderBottomRightRadius:"50%",borderTopRightRadius:"50%"};return{".rdp-day_selected:not([disabled]).rdp-day_range_middle":{backgroundColor:b._X.selectedMuted,color:b._X.foregroundText,borderRadius:0},".rdp-day_range_start:not(.rdp-day_range_end)":o,".rdp-day_range_end:not(.rdp-day_range_start)":i,".rdp-day_range_start.rdp-day_range_end":O(O({},n&&o),r&&i)}},j=n(7800);function R(e){var t=e.children;return(0,j.tZ)(g.Box,{display:"inline-block",paddingY:1,paddingX:[.25,1],css:w,children:t})}function k(e){var t=e.children,n=e.dateRange;return(0,j.tZ)(g.Box,{display:"inline-block",paddingY:1,paddingX:[.25,1],css:[w,Z(n),"","","",""],children:t})}var _=n(8947),C=n(200),P=["returnFocusRef"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function S(e){return(0,j.tZ)(l.ZP,{autoFocus:!1,returnFocus:!0,children:(0,j.tZ)(R,{children:(0,j.tZ)(u._W,x(x({mode:"single"},B),e))})})}function W(e){var t=e.returnFocusRef,n=(0,i.Z)(e,P);return(0,j.tZ)(l.ZP,{autoFocus:!1,onDeactivation:function(){t&&window.setTimeout(function(){var e;return null===(e=t.current)||void 0===e?void 0:e.focus()},0)},children:(0,j.tZ)(k,{dateRange:n.selected,children:(0,j.tZ)(u._W,x(x({mode:"range"},B),n))})})}var E=(0,c.Z)(new Date),F={name:"bjn8wh",styles:"position:relative"};function L(e){var t=e.label,n=e.options,o=e.value,i=e.onChange,a=(0,b.Me)(),d="calendar-".concat(a,"-select");return(0,j.BX)("div",{css:F,children:[(0,j.tZ)("label",{htmlFor:d,css:h.JM,children:t}),(0,j.tZ)(g.Box,{as:"select",id:d,value:o,onChange:i,rounded:!0,focus:!0,paddingRight:1.5,color:"text",fontSize:"md",fontWeight:"bold",css:(0,r.iv)({height:"2rem",borderWidth:b.tokens.borderWidth.sm,borderStyle:"solid",borderColor:b._X.border,appearance:"none",background:"none",paddingLeft:(0,b.mapSpacing)(.5),paddingRight:(0,b.mapSpacing)(2)},"",""),children:n.map(function(e){return(0,j.tZ)("option",{value:e.value,children:e.label},e.value)})}),(0,j.tZ)(y.ChevronDownIcon,{weight:"bold",css:(0,r.iv)({position:"absolute",top:"50%",right:(0,b.mapSpacing)(.5),transform:"translateY(-50%)",pointerEvents:"none",color:b._X.foregroundAction},"","")})]})}var B={components:{IconLeft:function(){return(0,j.tZ)(y.wy,{color:"inherit",weight:"bold"})},IconRight:function(){return(0,j.tZ)(y.XC,{color:"inherit",weight:"bold"})},CaptionLabel:function(e){var t=e.displayMonth,n=e.id,r=(0,u.HJ)().goToMonth,i=(0,s.Z)(t),a=(0,c.Z)(t),l=(0,d.useCallback)(function(e){r(new Date(parseInt(e.target.value),(0,s.Z)(t),1))},[r,t]),p=(0,d.useCallback)(function(e){r(new Date(a,parseInt(e.target.value),1))},[r,a]),b=(0,_.G)(),y=b.yearRange,m=b.yearsVisitedRef,O=(0,d.useMemo)(function(){m.current.set(a,!0);var e,t,n=null!==(e=null==y?void 0:y.from)&&void 0!==e?e:E-10,r=Array.from({length:(null!==(t=null==y?void 0:y.to)&&void 0!==t?t:E+10)-n+1},function(e,t){return t+n});return r.length>1&&m.current.forEach(function(e,t){r.includes(t)||(r=[].concat((0,o.Z)(r),[t]).sort())}),r.map(function(e){return{value:e,label:e}})},[a,y,m]),M=(0,d.useMemo)(function(){return[{label:"January",value:0},{label:"February",value:1},{label:"March",value:2},{label:"April",value:3},{label:"May",value:4},{label:"June",value:5},{label:"July",value:6},{label:"August",value:7},{label:"September",value:8},{label:"October",value:9},{label:"November",value:10},{label:"December",value:11}]},[]),w=(0,f.Z)(t,"MMMM yyyy");return O.length>1?(0,j.BX)(d.Fragment,{children:[(0,j.tZ)("h2",{id:n,"aria-live":"polite","aria-atomic":"true",css:h.JM,children:w}),(0,j.BX)(v.Flex,{justifyContent:"center",gap:.5,width:"100%",children:[(0,j.tZ)(L,{label:"Month",options:M,value:i,onChange:p}),(0,j.tZ)(L,{label:"Year",options:O,value:a,onChange:l})]})]}):(0,j.tZ)(g.Box,{as:"h2",id:n,"aria-live":"polite","aria-atomic":"true",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children:w})},Row:function(e){var t=(0,u.kD)(),n=t.styles,r=t.classNames,o=t.components,i=null==o?void 0:o.Day;return i?(0,j.tZ)("tr",{className:r.row,style:n.row,children:e.dates.map(function(t){return(0,j.tZ)(i,{displayMonth:e.displayMonth,date:t},(0,p.Z)(t))})}):null},Day:function(e){var t=(0,d.useRef)(null),n=(0,u.kD)(),r=n.classNames,o=n.styles,i=(0,u.c$)(e.date,e.displayMonth,t),a=i.activeModifiers,l=i.buttonProps,c=i.divProps,s=i.isButton,f=i.isHidden;return(0,j.tZ)("td",{"aria-selected":a.range_middle?void 0:a.selected,className:r.cell,role:"gridcell",style:o.cell,children:f?(0,j.tZ)(h.TX,{children:"Blank"}):s?(0,j.tZ)(u.zx,x(x({name:"day",ref:t},l),{},{"aria-label":"".concat(a.selected&&!a.range_middle?"Selected. ":"").concat((0,C.G2)(e.date)).concat(a.range_middle?". Between selected dates":""),"aria-selected":void 0,role:void 0})):(0,j.tZ)("div",x(x({},c),{},{role:void 0}))})}}}},8947:function(e,t,n){n.d(t,{G:function(){return d},g:function(){return a}});var r=n(7378),o=n(7800),i=(0,r.createContext)(void 0);function a(e){var t=e.children,n=e.yearRange,a=(0,r.useRef)(new Map);return(0,o.tZ)(i.Provider,{value:{yearsVisitedRef:a,yearRange:n},children:t})}function d(){var e=(0,r.useContext)(i);if(!e)throw Error("Context not found.");return e}},3940:function(e,t,n){n.d(t,{W:function(){return M}});var r=n(43),o=n(7043),i=n(89),a=n(7378),d=n(2345),l=n(4007),u=n(6035),c=n(1725),s=n(3914),f=n(1475),p=n(954),b=n(200),y=n(7800),g=["label","hideOptionalLabel","required","hint","message","invalid","block","id","buttonRef","maxWidth","buttonOnClick","buttonAriaLabel","disabled","value","dateFormat"],v=["maxWidth"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O={name:"4zleql",styles:"display:block"},M=(0,a.forwardRef)(function(e,t){var n=e.label,o=e.hideOptionalLabel,h=e.required,M=e.hint,w=e.message,Z=e.invalid,j=e.block,R=e.id,k=e.buttonRef,_=e.maxWidth,C=void 0===_?"md":_,P=e.buttonOnClick,D=e.buttonAriaLabel,x=e.disabled,S=e.value,W=e.dateFormat,E=(0,i.Z)(e,g),F=m(m({},(0,c.c)({block:j,maxWidth:C})),{},{width:"100%",borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}),L=F.maxWidth,B=(0,i.Z)(F,v),X=(0,a.useMemo)(function(){var e=b.lL.includes(W)?W:"dd/MM/yyyy";return"(e.g. "+(0,d.Z)(new Date,e)+")"},[W]);return(0,y.tZ)(p.gN,{label:n,maxWidth:C,secondaryLabel:X,hideOptionalLabel:o,required:!!h,hint:M,message:w,invalid:Z.field,id:R,children:function(e){return(0,y.BX)(l.Flex,{alignItems:"flex-end",css:(0,r.iv)({maxWidth:L},"",""),children:[(0,y.tZ)("input",m(m(m({ref:t,type:"text",css:(0,r.iv)(m(m({},B),{},{maxWidth:"unset"}),"",""),autoComplete:"off"},e),{},{"aria-invalid":!!(Z.field||Z.input)},E),{},{value:S,disabled:x})),(0,y.tZ)(f.Button,{type:"button",ref:k,onClick:P,disabled:x,variant:"secondary","aria-label":D,css:(0,r.iv)({borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:(0,s.mapSpacing)(1),paddingRight:(0,s.mapSpacing)(1)},"",""),children:(0,y.tZ)(u.Qu,{size:"md",css:O})})]})}})})},8192:function(e,t,n){n.d(t,{DatePicker:function(){return v}});var r=n(7043),o=n(1246),i=n(89),a=n(7378),d=n(3914),l=n(3223),u=n(792),c=n(8947),s=n(3940),f=n(200),p=n(7800),b=["value","onChange","onInputChange","minDate","maxDate","initialMonth","yearRange","inputRef","invalid","maxWidth","dateFormat"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=function(e){var t=e.value,n=e.onChange,r=e.onInputChange,y=e.minDate,v=e.maxDate,h=e.initialMonth,m=e.yearRange,O=e.inputRef,M=e.invalid,w=void 0!==M&&M,Z=e.maxWidth,j=e.dateFormat,R=void 0===j?"dd/MM/yyyy":j,k=(0,i.Z)(e,b),_=(0,a.useRef)(null),C=(0,d.useTernaryState)(!1),P=(0,o.Z)(C,3),D=P[0],x=P[1],S=P[2],W=D?S:x,E=(0,l.S)(),F=(0,a.useCallback)(function(e,t,r){r.disabled||(X((0,f.p6)(t,R)),n(t),S())},[n,S,R]),L=(0,a.useState)((0,f.JF)(t,R)),B=L[0],X=L[1];(0,a.useEffect)(function(){X((0,f.JF)(t,R))},[t,R]);var I=(0,a.useCallback)(function(){D&&S()},[D,S]);(0,d.O8)([E.popoverRef,_],I),(0,a.useEffect)(function(){var e=function(e){D&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),S())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[D,S]);var J=(0,a.useMemo)(function(){if(y||v)return[y?{before:y}:void 0,v?{after:v}:void 0].filter(function(e){return!!e})},[y,v]),T="string"==typeof t?void 0:t,A=(0,f.OH)(T,h,m);return(0,p.BX)("div",g(g({},E.getReferenceProps()),{},{children:[(0,p.tZ)(s.W,g(g({},k),{},{dateFormat:R,maxWidth:void 0===Z?"md":Z,invalid:{field:w,input:w},ref:O,value:B,onBlur:function(e){var t=e.target.value,o=(0,f.sG)(t),i=(0,f.cD)(o,y,v);!t||i?n(i):null==r||r(t)},onChange:function(e){X(e.target.value)},buttonRef:_,buttonOnClick:W,buttonAriaLabel:(0,f.hY)(B)})),(0,p.tZ)(c.g,{yearRange:m,children:D&&(0,p.tZ)(l.J,g(g({},E.getPopoverProps()),{},{children:(0,p.tZ)(u.G,{initialFocus:!0,selected:T,onSelect:F,defaultMonth:A,numberOfMonths:1,disabled:J})}))})]}))};n(1836)},200:function(e,t,n){n.d(t,{G2:function(){return p},JF:function(){return v},OH:function(){return h},cD:function(){return g},hY:function(){return m},lL:function(){return s},p6:function(){return f},sG:function(){return b}});var r=n(2345),o=n(4128),i=n(2993),a=n(3730),d=n(4720),l=n(4762),u=n(6992),c=n(1153),s=["dd/MM/yyyy","dd-MM-yyyy","dd MM yyyy","MM/dd/yyyy","MM-dd-yyyy","MM dd yyyy","do MMMM yyyy","do MMM yyyy","MMMM do yyyy","MMM do yyyy","d MMMM yyyy","d MMM yyyy","MMMM d yyyy","MMM d yyyy","dd MMMM yyyy","dd MMM yyyy","MMMM dd yyyy","MMM dd yyyy"],f=function(e,t){return(0,r.Z)(e,t)},p=function(e){return(0,r.Z)(e,"do MMMM yyyy (EEEE)")},b=function(e){for(var t=new Date,n=0;n<s.length;n++){var r=s[n];if(4!==(e.split(/ |\/|-/g)[2]||"").length)break;if((0,o.Z)(e,r)){var a=(0,i.Z)(e,r,t);if(y(a))return a}}};function y(e){return(0,a.Z)(e)&&(0,d.Z)(e)}function g(e,t,n){return e?t&&(0,l.Z)(e,t)?t:n&&(0,u.Z)(e,n)?n:e:e}function v(e,t){return"string"==typeof e?e:void 0===e?"":y(e)?f(e,t):""}function h(e,t,n){if(e)return e;if(t)return t;if(n){var r=new Date(n.from,0,1),o=new Date(n.to,11,31);return(0,c.Z)(new Date,[r,o])}}function m(e){if("string"!=typeof e)return"Choose date";var t=b(e);return t?"Change date, ".concat(p(t)):"Choose date"}},1836:function(e,t,n){n.d(t,{DateRangePicker:function(){return k}});var r=n(7043),o=n(43),i=n(1246),a=n(7378),d=n(4815),l=n(4007),u=n(7226),c=n(3914),s=n(954),f=n(4388),p=n(3223),b=n(200),y=n(792),g=n(8947),v=n(3940),h=n(4762),m=n(1153),O=n(7095),M=n(399);function w(e){var t=e.to,n=e.from;return n&&t&&(0,h.Z)(t,n)?{from:t,to:n}:e}var Z=n(7800);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k=function(e){var t,n,r=e.legend,h=e.hint,j=e.id,k=e.fromInvalid,_=void 0!==k&&k,C=e.toInvalid,P=void 0!==C&&C,D=e.message,x=e.hideOptionalLabel,S=e.value,W=e.onChange,E=e.onFromInputChange,F=e.onToInputChange,L=e.disabled,B=e.fromLabel,X=e.toLabel,I=e.required,J=void 0!==I&&I,T=e.minDate,A=e.maxDate,G=e.fromInputRef,q=e.toInputRef,z=e.yearRange,N=e.dateFormat,Y=void 0===N?"dd/MM/yyyy":N,H=(0,c.useTernaryState)(!1),Q=(0,i.Z)(H,3),V=Q[0],$=Q[1],K=Q[2],U=V?K:$,ee=(0,a.useState)(),et=ee[0],en=ee[1],er=(0,a.useRef)(null),eo=(0,a.useRef)(null),ei=(0,p.S)(),ea=(0,a.useMemo)(function(){return{from:"string"==typeof S.from?void 0:S.from,to:"string"==typeof S.to?void 0:S.to}},[S]),ed=(0,a.useCallback)(function(e,t,n){if(et&&!n.disabled){var r=w("from"===et?{from:t,to:ea.to}:{from:ea.from,to:t});if(W(r),ec(r.from?(0,b.p6)(r.from,Y):""),ep(r.to?(0,b.p6)(r.to,Y):""),r.from&&r.to){K(),en(void 0);return}if("from"===et){en("to");return}if("to"===et&&!r.from){en("from");return}}},[K,et,W,ea,Y]),el=(0,a.useState)((0,b.JF)(S.from,Y)),eu=el[0],ec=el[1],es=(0,a.useState)((0,b.JF)(S.to,Y)),ef=es[0],ep=es[1];(0,a.useEffect)(function(){ec((0,b.JF)(S.from,Y)),ep((0,b.JF)(S.to,Y))},[S,Y]);var eb=(0,a.useCallback)(function(){V&&K()},[V,K]);(0,c.O8)([ei.popoverRef,er,eo],eb),(0,a.useEffect)(function(){var e=function(e){V&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),K(),en(void 0))};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[V,K]);var ey=(0,a.useMemo)(function(){if(T||A)return[T?{before:T}:void 0,A?{after:A}:void 0].filter(function(e){return!!e})},[T,A]),eg=(0,c.useWindowSize)().windowWidth,ev=(void 0===eg?0:eg)>c.tokens.breakpoint.md?2:1,eh=_||P,em=(t=(0,c.Me)(j),{fieldsetId:j||"date-range-picker-".concat(t),hintId:"date-range-picker-".concat(t,"-hint"),messageId:"date-range-picker-".concat(t,"-message")}),eO=em.fieldsetId,eM=em.hintId,ew=em.messageId,eZ=[_&&D?ew:null,h?eM:null].filter(Boolean).join(" "),ej=[P&&D?ew:null,h?eM:null].filter(Boolean).join(" "),eR=(n=function(){if("from"===et&&ea.from)return ea.from;if("to"===et&&ea.to)return ea.to;if(z){var e=new Date(z.from,0,1),t=new Date(z.to,11,31);return(0,m.Z)(new Date,[e,t])}}())&&"to"===et&&2===ev?0===(null!=ea&&ea.from&&null!=ea&&ea.to?(0,O.Z)(ea.to,ea.from):-1)?n:(0,M.Z)(n,1):n;return(0,Z.tZ)(s.i$,{invalid:eh,id:eO,children:(0,Z.BX)(d.Box,{as:"fieldset",children:[(0,Z.tZ)(s.Qy,{as:"legend",required:J,hideOptionalLabel:x,css:r?void 0:f.JM,children:null!=r?r:"Date range"}),(0,Z.BX)(u.Stack,{gap:.5,css:(0,o.iv)({marginTop:r?(0,c.mapSpacing)(.5):void 0},"",""),children:[h?(0,Z.tZ)(s.J1,{id:eM,children:h}):null,D&&eh?(0,Z.tZ)(s.nd,{id:ew,children:D}):null,(0,Z.BX)(l.Flex,R(R({},ei.getReferenceProps()),{},{flexWrap:"wrap",inline:!0,gap:1,children:[(0,Z.tZ)(v.W,{"aria-describedby":eZ.length>0?eZ:null,ref:G,label:void 0===B?"Start date":B,hideOptionalLabel:x||!!r,value:eu,onBlur:function(e){var t=e.target.value,n=(0,b.sG)(t),r=(0,b.cD)(n,T,A),o=w({from:r,to:ea.to});!t||r?W(o):null==E||E(t)},onChange:function(e){ec(e.target.value)},buttonRef:er,buttonOnClick:function(){en("from"),U()},buttonAriaLabel:function(e){if("string"!=typeof e)return"Choose start date";var t=(0,b.sG)(e);return t?"Change start date, ".concat((0,b.G2)(t)):"Choose start date"}(eu),disabled:L,required:J,invalid:{field:!1,input:_},dateFormat:Y}),(0,Z.tZ)(v.W,{"aria-describedby":ej.length>0?ej:null,ref:q,label:void 0===X?"End date":X,hideOptionalLabel:x||!!r,value:ef,onBlur:function(e){var t=e.target.value,n=(0,b.sG)(t),r=(0,b.cD)(n,T,A),o=w({from:ea.from,to:r});!t||r?W(o):null==F||F(t)},onChange:function(e){ep(e.target.value)},buttonRef:eo,buttonOnClick:function(){en("to"),U()},buttonAriaLabel:function(e){if("string"!=typeof e)return"Choose end date";var t=(0,b.sG)(e);return t?"Change end date, ".concat((0,b.G2)(t)):"Choose end date"}(ef),disabled:L,required:J,invalid:{field:!1,input:P},dateFormat:Y})]}))]}),(0,Z.tZ)(g.g,{yearRange:z,children:V&&(0,Z.tZ)(p.J,R(R({},ei.getPopoverProps()),{},{children:(0,Z.tZ)(y.a,{initialFocus:!0,defaultMonth:eR,selected:ea,onSelect:ed,numberOfMonths:ev,disabled:ey,returnFocusRef:"from"===et?er:eo})}))})]})})}}}]);