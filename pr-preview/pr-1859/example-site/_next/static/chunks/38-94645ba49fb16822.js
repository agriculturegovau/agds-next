"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{73403:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(50463),r()},24953:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(98192),r()},30792:function(e,t,n){n.d(t,{a2:function(){return E},Gv:function(){return L}});var r=n(10043),o=n(44285),a=n(90089),i=n(17043),l=n(27378),d=n(48542),u=n(73790),c=n(60701),s=n(37811),f=n(2345),p=n(40343),b=n(23914),y=n(32084),v=n(84815),h=n(84007),g=n(64388);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O="3rem",w="2.75rem",Z={".rdp-vhidden":g.JM,".rdp-button_reset":{appearance:"none",background:"none",border:"none",margin:0,padding:0,cursor:"pointer",color:"inherit",font:"inherit"},".rdp-caption":{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:(0,b.mapSpacing)(.5)},".rdp-caption_label":M({zIndex:b.tokens.zIndex.elevated,whiteSpace:"nowrap",margin:0,color:b._X.foregroundText,fontWeight:b.tokens.fontWeight.bold},(0,b.vY)("lg","nospace")),".rdp-nav_button":M({position:"absolute",top:0,display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:b.tokens.borderRadius,color:b._X.foregroundAction,"&:hover":{color:b._X.foregroundText}},v.j4),".rdp-nav_button_previous":{left:0},".rdp-nav_button_next":{right:0},".rdp-head_cell":M({color:b._X.foregroundMuted,fontWeight:b.tokens.fontWeight.normal,height:w,margin:0,padding:0,width:w,"@media(min-width: 375px)":{height:O,width:O}},(0,b.vY)("sm","default")),".rdp-day":M(M({borderRadius:b.tokens.borderRadius,boxSizing:"border-box",color:b._X.foregroundAction,cursor:"pointer",height:w,position:"relative",textAlign:"center",verticalAlign:"middle",width:w,"&[disabled]":{color:b._X.foregroundText,opacity:.3,cursor:"not-allowed"},"&:not([disabled], :focus):hover":M({backgroundColor:b._X.backgroundShade,color:b._X.foregroundText,textDecoration:"underline",zIndex:b.tokens.zIndex.elevated},v.ZZ),"&:focus":{zIndex:b.tokens.zIndex.elevated},"@media(min-width: 375px)":{height:O,width:O}},v.j4),{},{"&.rdp-day_today":{fontWeight:b.tokens.fontWeight.bold,"&::after":M({backgroundColor:"currentColor",borderRadius:"0.25rem",bottom:"0.3rem",content:'""',left:"50%",height:"0.5rem",marginLeft:"-0.25rem",position:"absolute",width:"0.5rem"},v.ZZ)}}),".rdp-day_outside":{cursor:"default"},".rdp-months":{display:"flex",height:"21.5rem","@media(min-width: 375px)":{height:"23.5rem"}},".rdp-month":{margin:"0 ".concat((0,b.mapSpacing)(1)),"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}},".rdp-table":{margin:0,width:"calc(".concat(w," * 7)"),borderCollapse:"collapse",tableLayout:"fixed","@media(min-width: 375px)":{width:"calc(".concat(O," * 7)")}},".rdp-tbody":{border:0},".rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])":{backgroundColor:b._X.selected,color:b._X.backgroundBody,fontWeight:b.tokens.fontWeight.bold,"&::before":M({content:'""',inset:0,pointerEvents:"none",position:"absolute"},v.ZZ)}},_=function(e){var t=null!=e?e:{},n=t.from,r=t.to,o={borderRadius:0,borderBottomLeftRadius:"50%",borderTopLeftRadius:"50%"},a={borderRadius:0,borderBottomRightRadius:"50%",borderTopRightRadius:"50%"};return{".rdp-day_selected:not([disabled]).rdp-day_range_middle":{backgroundColor:b._X.selectedMuted,color:b._X.foregroundText,borderRadius:0},".rdp-day_range_start:not(.rdp-day_range_end)":o,".rdp-day_range_start:not(.rdp-day_range_end)::before":o,".rdp-day_range_end:not(.rdp-day_range_start)":a,".rdp-day_range_end:not(.rdp-day_range_start)::before":a,".rdp-day_range_start.rdp-day_range_end":M(M({},n&&o),r&&a)}},k=n(87800);function j(e){var t=e.children;return(0,k.tZ)(v.Box,{"aria-label":"Choose date","aria-modal":"true",css:Z,display:"inline-block",paddingX:[.25,1],paddingY:1,role:"dialog",children:t})}function x(e){var t=e.children,n=e.dateRange;return(0,k.tZ)(v.Box,{"aria-label":"Choose date range","aria-modal":"true",css:[Z,_(n),"","","",""],display:"inline-block",paddingX:[.25,1],paddingY:1,role:"dialog",children:t})}var D=n(48947),R=n(200),C=["returnFocusRef"],P=["children","onClick","onKeyDown","role"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e){return(0,k.tZ)(d.ZP,{autoFocus:!1,returnFocus:!0,children:(0,k.tZ)(j,{children:(0,k.tZ)(u._W,F(F({mode:"single"},X),e))})})}function E(e){var t=e.returnFocusRef,n=(0,a.Z)(e,C);return(0,k.tZ)(d.ZP,{autoFocus:!1,onDeactivation:function(){t&&window.setTimeout(function(){var e;return null===(e=t.current)||void 0===e?void 0:e.focus()},0)},children:(0,k.tZ)(x,{dateRange:n.selected,children:(0,k.tZ)(u._W,F(F({mode:"range"},X),n))})})}var I=(0,c.Z)(new Date),W={name:"bjn8wh",styles:"position:relative"};function B(e){var t=e.label,n=e.options,o=e.value,a=e.onChange,i=(0,b.Me)(),l="calendar-".concat(i,"-select");return(0,k.BX)("div",{css:W,children:[(0,k.tZ)("label",{htmlFor:l,css:g.JM,children:t}),(0,k.tZ)(v.Box,{as:"select",autoComplete:"off",id:l,value:o,onChange:a,rounded:!0,focusRingFor:"keyboard",paddingRight:1.5,color:"text",fontWeight:"bold",css:(0,r.iv)({appearance:"none",background:"none",borderColor:b._X.border,borderStyle:"solid",borderWidth:b.tokens.borderWidth.sm,fontSize:"".concat(b.tokens.fontSize.xs.sm,"rem"),height:"2rem",paddingLeft:(0,b.mapSpacing)(.5),paddingRight:(0,b.mapSpacing)(2),"@media(min-width: 375px)":{fontSize:"".concat(b.tokens.fontSize.xs.md,"rem")}},"",""),children:n.map(function(e){return(0,k.tZ)("option",{value:e.value,children:e.label},e.value)})}),(0,k.tZ)(y.v4,{weight:"bold",css:(0,r.iv)({position:"absolute",top:"50%",right:(0,b.mapSpacing)(.5),transform:"translateY(-50%)",pointerEvents:"none",color:b._X.foregroundAction},"","")})]})}var X={components:{Caption:function(e){var t=(0,u.kD)(),n=t.classNames,r=t.styles,o=t.components,a=t.labels,i=a.labelPrevious,l=a.labelNext,d=t.locale,c=(0,u.HJ)(),s=c.displayMonths,f=c.previousMonth,p=c.nextMonth,b=c.goToMonth,v=null==o?void 0:o.CaptionLabel,h=i(f,{locale:d}),g=[n.button_reset,n.button,n.nav_button,n.nav_button_previous].join(" "),m=l(p,{locale:d}),M=[n.button_reset,n.button,n.nav_button,n.nav_button_next].join(" "),O=0===e.displayIndex,w=e.displayIndex===s.length-1;return(0,k.BX)("div",{className:n.caption,style:r.caption,children:[O&&(0,k.tZ)("button",{"aria-label":h,className:g,disabled:!f,onClick:function(){f&&b(f)},type:"button",children:(0,k.tZ)(y.wy,{color:"inherit",weight:"bold"})}),v&&(0,k.tZ)(v,{id:e.id,displayMonth:e.displayMonth}),w&&(0,k.tZ)("button",{"aria-label":m,className:M,disabled:!p,onClick:function(){p&&b(p)},type:"button",children:(0,k.tZ)(y.XC,{color:"inherit",weight:"bold"})})]})},CaptionLabel:function(e){var t=e.displayMonth,n=e.id,r=(0,u.HJ)().goToMonth,a=(0,s.Z)(t),i=(0,c.Z)(t),d=(0,l.useCallback)(function(e){r(new Date(parseInt(e.target.value),(0,s.Z)(t),1))},[r,t]),p=(0,l.useCallback)(function(e){r(new Date(i,parseInt(e.target.value),1))},[r,i]),b=(0,D.G)(),y=b.yearRange,m=b.yearsVisitedRef,M=(0,l.useMemo)(function(){m.current.set(i,!0);var e,t,n=null!==(e=null==y?void 0:y.from)&&void 0!==e?e:I-10,r=Array.from({length:(null!==(t=null==y?void 0:y.to)&&void 0!==t?t:I+10)-n+1},function(e,t){return t+n});return r.length>1&&m.current.forEach(function(e,t){r.includes(t)||(r=[].concat((0,o.Z)(r),[t]).sort())}),r.map(function(e){return{value:e,label:e}})},[i,y,m]),O=(0,l.useMemo)(function(){return[{label:"January",value:0},{label:"February",value:1},{label:"March",value:2},{label:"April",value:3},{label:"May",value:4},{label:"June",value:5},{label:"July",value:6},{label:"August",value:7},{label:"September",value:8},{label:"October",value:9},{label:"November",value:10},{label:"December",value:11}]},[]),w=(0,f.Z)(t,"MMMM yyyy");return M.length>1?(0,k.BX)(l.Fragment,{children:[(0,k.tZ)("h2",{id:n,"aria-live":"polite","aria-atomic":"true",css:g.JM,children:w}),(0,k.BX)(h.Flex,{justifyContent:"center",gap:.5,width:"100%",children:[(0,k.tZ)(B,{label:"Month",options:O,value:a,onChange:p}),(0,k.tZ)(B,{label:"Year",options:M,value:i,onChange:d})]})]}):(0,k.tZ)(v.Box,{as:"h2",id:n,"aria-live":"polite","aria-atomic":"true",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children:w})},Row:function(e){var t=(0,u.kD)(),n=t.styles,r=t.classNames,o=t.components,a=null==o?void 0:o.Day;return a?(0,k.tZ)("tr",{className:r.row,style:n.row,children:e.dates.map(function(t){return(0,k.tZ)(a,{displayMonth:e.displayMonth,date:t},(0,p.Z)(t))})}):null},Day:function(e){var t=(0,l.useRef)(null),n=(0,u.c$)(e.date,e.displayMonth,t),r=n.activeModifiers,o=n.buttonProps,i=n.isHidden,d=o.children,c=o.onClick,s=o.onKeyDown,f=(o.role,(0,a.Z)(o,P)),p=F({"aria-current":r.today?"date":void 0,"aria-label":"".concat(r.selected&&!r.range_middle?"Selected. ":"").concat((0,R.G2)(e.date)).concat(r.range_middle?". Between selected dates":""),"aria-selected":r.range_middle?void 0:r.selected,onClick:c},f);return(0,k.tZ)("td",F(F({onKeyDown:function(e){i||"Enter"!==e.key&&"Space"!==e.key?null==s||s(e):(e.preventDefault(),e.stopPropagation(),null==c||c(e))},ref:t,tabIndex:-1},i?void 0:p),{},{children:(0,k.tZ)("span",{tabIndex:-1,children:i?void 0:d})}))}}}},48947:function(e,t,n){n.d(t,{G:function(){return l},g:function(){return i}});var r=n(27378),o=n(87800),a=(0,r.createContext)(void 0);function i(e){var t=e.children,n=e.yearRange,i=(0,r.useRef)(new Map);return(0,o.tZ)(a.Provider,{value:{yearsVisitedRef:i,yearRange:n},children:t})}function l(){var e=(0,r.useContext)(a);if(!e)throw Error("Context not found.");return e}},13940:function(e,t,n){n.d(t,{W:function(){return O}});var r=n(10043),o=n(17043),a=n(90089),i=n(27378),l=n(2345),d=n(84007),u=n(32084),c=n(11725),s=n(23914),f=n(11475),p=n(60954),b=n(200),y=n(87800),v=["label","hideOptionalLabel","required","hint","message","invalid","block","id","buttonRef","maxWidth","buttonOnClick","buttonAriaLabel","disabled","value","dateFormat"],h=["maxWidth"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M={name:"4zleql",styles:"display:block"},O=(0,i.forwardRef)(function(e,t){var n=e.label,o=e.hideOptionalLabel,g=e.required,O=e.hint,w=e.message,Z=e.invalid,_=e.block,k=e.id,j=e.buttonRef,x=e.maxWidth,D=void 0===x?"md":x,R=e.buttonOnClick,C=e.buttonAriaLabel,P=e.disabled,S=e.value,F=e.dateFormat,L=(0,a.Z)(e,v),E=m(m({},(0,c.c)({block:_,maxWidth:D})),{},{width:"100%",borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}),I=E.maxWidth,W=(0,a.Z)(E,h),B=(0,i.useMemo)(function(){var e=b.lL.includes(F)?F:"dd/MM/yyyy";return"(e.g. "+(0,l.Z)(new Date,e)+")"},[F]);return(0,y.tZ)(p.gN,{label:n,maxWidth:D,secondaryLabel:B,hideOptionalLabel:o,required:!!g,hint:O,message:w,invalid:Z.field,id:k,children:function(e){return(0,y.BX)(d.Flex,{alignItems:"flex-end",css:(0,r.iv)({maxWidth:I},"",""),children:[(0,y.tZ)("input",m(m(m({ref:t,type:"text",css:(0,r.iv)(m(m({},W),{},{maxWidth:"unset"}),"",""),autoComplete:"off"},e),{},{"aria-invalid":!!(Z.field||Z.input)},L),{},{value:S,disabled:P})),(0,y.tZ)(f.Button,{type:"button",ref:j,onClick:R,disabled:P,variant:"secondary","aria-label":C,css:(0,r.iv)({borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:(0,s.mapSpacing)(1),paddingRight:(0,s.mapSpacing)(1)},"",""),children:(0,y.tZ)(u.Qu,{size:"md",css:M})})]})}})})},98192:function(e,t,n){n.d(t,{DatePicker:function(){return m}});var r=n(17043),o=n(11246),a=n(44285),i=n(90089),l=n(27378),d=n(23914),u=n(53223),c=n(200),s=n(30792),f=n(48947),p=n(13940),b=n(87800),y=["allowedDateFormats","dateFormat","initialMonth","inputRef","invalid","maxDate","maxWidth","minDate","onBlur","onChange","onInputChange","value","yearRange"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={name:"1coh6b9",styles:"min-height:200px"},m=function(e){var t=e.allowedDateFormats,n=void 0===t?c.lL:t,r=e.dateFormat,v=void 0===r?"dd/MM/yyyy":r,m=e.initialMonth,M=e.inputRef,O=e.invalid,w=void 0!==O&&O,Z=e.maxDate,_=e.maxWidth,k=e.minDate,j=e.onBlur,x=e.onChange,D=e.onInputChange,R=e.value,C=e.yearRange,P=(0,i.Z)(e,y),S=(0,l.useMemo)(function(){return Array.from(new Set([v].concat((0,a.Z)(n.filter(function(e){return c.lL.includes(e)})))))},[v,n]),F=(0,l.useRef)(null),L=(0,l.useState)(!1),E=L[0],I=L[1],W=(0,d.useTernaryState)(!1),B=(0,o.Z)(W,3),X=B[0],A=B[1],J=B[2],T=X?J:A,z=(0,u.S)(),N=(0,l.useCallback)(function(e,t,n){n.disabled||(q((0,c.p6)(t,v)),x(t),J())},[x,J,v]),G=(0,l.useState)((0,c.JF)(R,v)),Y=G[0],q=G[1];(0,l.useEffect)(function(){q((0,c.JF)(R,v))},[v,R]);var H=(0,l.useCallback)(function(){X&&J()},[X,J]);(0,d.O8)([z.popoverRef,F],H),(0,l.useEffect)(function(){var e=function(e){X&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),J())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[X,J]);var K=(0,l.useMemo)(function(){if(k||Z)return[k?{before:k}:void 0,Z?{after:Z}:void 0].filter(function(e){return!!e})},[k,Z]),$="string"==typeof R?(0,c.Zy)(R):R,Q=(0,c.OH)($,m,C),V=(0,l.useMemo)(function(){return z.getPopoverProps()},[z]),U=(0,l.useMemo)(function(){return{defaultMonth:Q,disabled:K,initialFocus:!0,numberOfMonths:1,onSelect:N,selected:$}},[Q,K,N,$]);return(0,b.BX)("div",h(h({},z.getReferenceProps()),{},{children:[(0,b.tZ)(p.W,h(h({},P),{},{dateFormat:v,maxWidth:void 0===_?"md":_,invalid:{field:w,input:w},ref:M,value:Y,onBlur:function(e){var t=e.target.value,n=(0,c.sG)(t,S),r=(0,c.cD)(n,k,Z);!t||r?x(r):null==D||D(t),null==j||j(e)},onChange:function(e){q(e.target.value)},buttonRef:F,buttonOnClick:function(){T(),I(!0)},buttonAriaLabel:(0,c.hY)({allowedDateFormats:S,value:Y})})),(0,b.tZ)(f.g,{yearRange:C,children:E?X&&(0,b.tZ)(u.J,h(h({},V),{},{children:(0,b.tZ)(s.Gv,h({},U))})):(0,b.tZ)(u.J,h(h({},V),{},{visibility:X?"visible":"hidden",css:g,children:X&&(0,b.tZ)(s.Gv,h({},U))}))})]}))};n(61836)},200:function(e,t,n){n.d(t,{G2:function(){return y},JF:function(){return m},OH:function(){return M},Zy:function(){return w},cD:function(){return g},hY:function(){return O},lL:function(){return p},p6:function(){return b},sG:function(){return v}});var r=n(2345),o=n(84128),a=n(52993),i=n(53730),l=n(44720),d=n(94762),u=n(26992),c=n(31153),s=n(73809);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p=["dd/MM/yyyy","dd-MM-yyyy","dd MM yyyy","MM/dd/yyyy","MM-dd-yyyy","MM dd yyyy","do MMMM yyyy","do MMM yyyy","MMMM do yyyy","MMM do yyyy","d MMMM yyyy","d MMM yyyy","MMMM d yyyy","MMM d yyyy","dd MMMM yyyy","dd MMM yyyy","MMMM dd yyyy","MMM dd yyyy"],b=function(e,t){return(0,r.Z)(e,t)},y=function(e){return(0,r.Z)(e,"do MMMM yyyy EEEE")},v=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,r=new Date,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(n);try{for(i.s();!(t=i.n()).done;){var l=t.value,d=e.split(/ |\/|-/g)[2]||"";if(4!==d.length)return;if((0,o.Z)(e,l)){var u=(0,a.Z)(e,l,r);if(h(u))return u}}}catch(e){i.e(e)}finally{i.f()}};function h(e){return(0,i.Z)(e)&&(0,l.Z)(e)}function g(e,t,n){return e?t&&(0,d.Z)(e,t)?t:n&&(0,u.Z)(e,n)?n:e:e}function m(e,t){if(void 0===e)return"";var n="string"==typeof e?w(e):e;return void 0===n?e.toString():h(n)?b(n,t):""}function M(e,t,n){if(e)return e;if(t)return t;if(n){var r=new Date(n.from,0,1),o=new Date(n.to,11,31);return(0,c.Z)(new Date,[r,o])}}function O(e){var t=e.allowedDateFormats,n=e.rangeName,r=e.value,o=n?"".concat(n," date"):"date";if("string"!=typeof r)return"Choose ".concat(o);var a=v(r,t);return a?"Change ".concat(o,", ").concat(y(a)):"Choose ".concat(o)}var w=function(e){var t=(0,s.Z)(e);return"Invalid Date"===t.toString()?void 0:t}},61836:function(e,t,n){n.d(t,{DateRangePicker:function(){return D}});var r=n(17043),o=n(10043),a=n(11246),i=n(44285),l=n(27378),d=n(84815),u=n(84007),c=n(7226),s=n(23914),f=n(60954),p=n(64388),b=n(53223),y=n(200),v=n(30792),h=n(48947),g=n(13940),m=n(94762),M=n(31153),O=n(7095),w=n(90399);function Z(e){var t=e.to,n=e.from;return n&&t&&(0,m.Z)(t,n)?{from:t,to:n}:e}var _=n(87800);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x={name:"1coh6b9",styles:"min-height:200px"},D=function(e){var t,n,r=e.allowedDateFormats,m=void 0===r?y.lL:r,k=e.legend,D=e.hint,R=e.id,C=e.fromInvalid,P=void 0!==C&&C,S=e.toInvalid,F=void 0!==S&&S,L=e.message,E=e.hideOptionalLabel,I=e.value,W=e.onChange,B=e.onFromInputChange,X=e.onToInputChange,A=e.disabled,J=e.fromLabel,T=e.toLabel,z=e.required,N=void 0!==z&&z,G=e.minDate,Y=e.maxDate,q=e.fromInputRef,H=e.toInputRef,K=e.yearRange,$=e.dateFormat,Q=void 0===$?"dd/MM/yyyy":$,V=(0,l.useMemo)(function(){return Array.from(new Set([Q].concat((0,i.Z)(m.filter(function(e){return y.lL.includes(e)})))))},[Q,m]),U=(0,l.useState)(!1),ee=U[0],et=U[1],en=(0,s.useTernaryState)(!1),er=(0,a.Z)(en,3),eo=er[0],ea=er[1],ei=er[2],el=eo?ei:ea,ed=(0,l.useState)(),eu=ed[0],ec=ed[1],es=(0,l.useRef)(null),ef=(0,l.useRef)(null),ep=(0,b.S)(),eb=(0,l.useMemo)(function(){return{from:"string"==typeof I.from?(0,y.Zy)(I.from):I.from,to:"string"==typeof I.to?(0,y.Zy)(I.to):I.to}},[I]),ey=(0,l.useCallback)(function(e,t,n){if(eu&&!n.disabled){var r=Z("from"===eu?{from:t,to:eb.to}:{from:eb.from,to:t});if(W(r),eg(r.from?(0,y.p6)(r.from,Q):""),eO(r.to?(0,y.p6)(r.to,Q):""),r.from&&r.to){ei(),ec(void 0);return}if("from"===eu){ec("to");return}if("to"===eu&&!r.from){ec("from");return}}},[ei,eu,W,eb,Q]),ev=(0,l.useState)((0,y.JF)(I.from,Q)),eh=ev[0],eg=ev[1],em=(0,l.useState)((0,y.JF)(I.to,Q)),eM=em[0],eO=em[1];(0,l.useEffect)(function(){eg((0,y.JF)(I.from,Q)),eO((0,y.JF)(I.to,Q))},[I,Q]);var ew=(0,l.useCallback)(function(){eo&&ei()},[eo,ei]);(0,s.O8)([ep.popoverRef,es,ef],ew),(0,l.useEffect)(function(){var e=function(e){eo&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),ei(),ec(void 0))};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[eo,ei]);var eZ=(0,l.useMemo)(function(){if(G||Y)return[G?{before:G}:void 0,Y?{after:Y}:void 0].filter(function(e){return!!e})},[G,Y]),e_=(0,s.iP)().windowWidth,ek=(void 0===e_?0:e_)>s.tokens.breakpoint.md?2:1,ej=P||F,ex=(t=(0,s.Me)(R),{fieldsetId:R||"date-range-picker-".concat(t),hintId:"date-range-picker-".concat(t,"-hint"),messageId:"date-range-picker-".concat(t,"-message")}),eD=ex.fieldsetId,eR=ex.hintId,eC=ex.messageId,eP=[P&&L?eC:null,D?eR:null].filter(Boolean).join(" "),eS=[F&&L?eC:null,D?eR:null].filter(Boolean).join(" "),eF=(n=function(){if("from"===eu&&eb.from)return eb.from;if("to"===eu&&eb.to)return eb.to;if(K){var e=new Date(K.from,0,1),t=new Date(K.to,11,31);return(0,M.Z)(new Date,[e,t])}}())&&"to"===eu&&2===ek?0===(null!=eb&&eb.from&&null!=eb&&eb.to?(0,O.Z)(eb.to,eb.from):-1)?n:(0,w.Z)(n,1):n,eL=(0,l.useMemo)(function(){return ep.getPopoverProps()},[ep]),eE=(0,l.useMemo)(function(){return{defaultMonth:eF,disabled:eZ,initialFocus:!0,numberOfMonths:ek,onSelect:ey,returnFocusRef:"from"===eu?es:ef,selected:eb}},[eF,eZ,eu,ek,ey,eb]);return(0,_.tZ)(f.i$,{invalid:ej,id:eD,children:(0,_.BX)(d.Box,{as:"fieldset",children:[(0,_.tZ)(f.Qy,{as:"legend",required:N,hideOptionalLabel:E,css:k?void 0:p.JM,children:null!=k?k:"Date range"}),(0,_.BX)(c.Stack,{gap:.5,css:(0,o.iv)({marginTop:k?(0,s.mapSpacing)(.5):void 0},"",""),children:[D?(0,_.tZ)(f.J1,{id:eR,children:D}):null,L&&ej?(0,_.tZ)(f.nd,{id:eC,children:L}):null,(0,_.BX)(u.Flex,j(j({},ep.getReferenceProps()),{},{flexWrap:"wrap",inline:!0,gap:1,children:[(0,_.tZ)(g.W,{"aria-describedby":eP.length>0?eP:null,ref:q,label:void 0===J?"Start date":J,hideOptionalLabel:E||!!k,value:eh,onBlur:function(e){var t=e.target.value,n=(0,y.sG)(t,V),r=(0,y.cD)(n,G,Y),o=Z({from:r,to:eb.to});!t||r?W(o):null==B||B(t)},onChange:function(e){eg(e.target.value)},buttonRef:es,buttonOnClick:function(){ec("from"),el(),et(!0)},buttonAriaLabel:(0,y.hY)({allowedDateFormats:V,rangeName:"start",value:eh}),disabled:A,required:N,invalid:{field:!1,input:P},dateFormat:Q}),(0,_.tZ)(g.W,{"aria-describedby":eS.length>0?eS:null,ref:H,label:void 0===T?"End date":T,hideOptionalLabel:E||!!k,value:eM,onBlur:function(e){var t=e.target.value,n=(0,y.sG)(t,V),r=(0,y.cD)(n,G,Y),o=Z({from:eb.from,to:r});!t||r?W(o):null==X||X(t)},onChange:function(e){eO(e.target.value)},buttonRef:ef,buttonOnClick:function(){ec("to"),el(),et(!0)},buttonAriaLabel:(0,y.hY)({allowedDateFormats:V,rangeName:"end",value:eM}),disabled:A,required:N,invalid:{field:!1,input:F},dateFormat:Q})]}))]}),(0,_.tZ)(h.g,{yearRange:K,children:ee?eo&&(0,_.tZ)(b.J,j(j({},eL),{},{children:(0,_.tZ)(v.a2,j({},eE))})):(0,_.tZ)(b.J,j(j({},eL),{},{children:eo&&(0,_.tZ)(v.a2,j(j({},eE),{},{css:x}))}))})]})})}}}]);