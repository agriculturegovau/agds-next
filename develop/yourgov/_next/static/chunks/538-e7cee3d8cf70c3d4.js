"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{2951:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(49718),r()},73469:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(85875),r()},30792:function(e,t,n){n.d(t,{a2:function(){return X},Gv:function(){return W}});var r=n(10043),o=n(44285),i=n(90089),a=n(90849),l=n(27378),d=n(48542),c=n(74427),u=n(60701),s=n(37811),f=n(2345),p=n(40343),b=n(8447),y=n(32084),h=n(84815),g=n(84007),v=n(64388);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w="3rem",Z="2.75rem",M={".rdp-vhidden":v.visuallyHiddenStyles,".rdp-button_reset":{appearance:"none",background:"none",border:"none",margin:0,padding:0,cursor:"pointer",color:"inherit",font:"inherit"},".rdp-caption":{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:(0,b.mapSpacing)(.5)},".rdp-caption_label":O({zIndex:b.tokens.zIndex.elevated,whiteSpace:"nowrap",margin:0,color:b._X.foregroundText,fontWeight:b.tokens.fontWeight.bold},(0,b.vY)("lg","nospace")),".rdp-nav_button":O({position:"absolute",top:0,display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:b.tokens.borderRadius,color:b._X.foregroundAction,"&:hover":{color:b._X.foregroundText}},h.j4),".rdp-nav_button_previous":{left:0},".rdp-nav_button_next":{right:0},".rdp-head_cell":O({color:b._X.foregroundMuted,fontWeight:b.tokens.fontWeight.normal,height:Z,margin:0,padding:0,width:Z,"@media(min-width: 375px)":{height:w,width:w}},(0,b.vY)("sm","default")),".rdp-day":O(O({borderRadius:b.tokens.borderRadius,boxSizing:"border-box",color:b._X.foregroundAction,cursor:"pointer",height:Z,position:"relative",textAlign:"center",verticalAlign:"middle",width:Z,"&[disabled]":{color:b._X.foregroundText,opacity:.3,cursor:"not-allowed"},"&:not([disabled], :focus):hover":O({backgroundColor:b._X.backgroundShade,color:b._X.foregroundText,textDecoration:"underline",zIndex:b.tokens.zIndex.elevated},h.ZZ),"&:focus":{zIndex:b.tokens.zIndex.elevated},"@media(min-width: 375px)":{height:w,width:w}},h.j4),{},{"&.rdp-day_today":{fontWeight:b.tokens.fontWeight.bold,"&::after":O({backgroundColor:"currentColor",borderRadius:"0.25rem",bottom:"0.3rem",content:'""',left:"50%",height:"0.5rem",marginLeft:"-0.25rem",position:"absolute",width:"0.5rem"},h.ZZ)}}),".rdp-day_outside":{cursor:"default"},".rdp-months":{display:"flex",height:"21.5rem","@media(min-width: 375px)":{height:"23.5rem"}},".rdp-month":{margin:"0 ".concat((0,b.mapSpacing)(1)),"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}},".rdp-table":{margin:0,width:"calc(".concat(Z," * 7)"),borderCollapse:"collapse",tableLayout:"fixed","@media(min-width: 375px)":{width:"calc(".concat(w," * 7)")}},".rdp-tbody":{border:0},".rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])":{backgroundColor:b._X.selected,color:b._X.backgroundBody,fontWeight:b.tokens.fontWeight.bold,"&::before":O({content:'""',inset:0,pointerEvents:"none",position:"absolute"},h.ZZ)}},k=function(e){var t=null!=e?e:{},n=t.from,r=t.to,o={borderRadius:0,borderBottomLeftRadius:"50%",borderTopLeftRadius:"50%"},i={borderRadius:0,borderBottomRightRadius:"50%",borderTopRightRadius:"50%"};return{".rdp-day_selected:not([disabled]).rdp-day_range_middle":{backgroundColor:b._X.selectedMuted,color:b._X.foregroundText,borderRadius:0},".rdp-day_range_start:not(.rdp-day_range_end)":o,".rdp-day_range_start:not(.rdp-day_range_end)::before":o,".rdp-day_range_end:not(.rdp-day_range_start)":i,".rdp-day_range_end:not(.rdp-day_range_start)::before":i,".rdp-day_range_start.rdp-day_range_end":O(O({},n&&o),r&&i)}},x=n(87800);function _(e){var t=e.children;return(0,x.tZ)(h.Box,{"aria-label":"Choose date","aria-modal":"true",css:M,display:"inline-block",paddingX:[.25,1],paddingY:1,role:"dialog",children:t})}function j(e){var t=e.children,n=e.dateRange;return(0,x.tZ)(h.Box,{"aria-label":"Choose date range","aria-modal":"true",css:[M,k(n),"","","",""],display:"inline-block",paddingX:[.25,1],paddingY:1,role:"dialog",children:t})}var C=n(48947),S=n(200),D=["returnFocusRef"],P=["children","onClick","onKeyDown","role"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function W(e){return(0,x.tZ)(d.ZP,{autoFocus:!1,returnFocus:!0,children:(0,x.tZ)(_,{children:(0,x.tZ)(c._W,I(I({mode:"single"},E),e))})})}function X(e){var t=e.returnFocusRef,n=(0,i.Z)(e,D);return(0,x.tZ)(d.ZP,{autoFocus:!1,onDeactivation:function(){t&&window.setTimeout(function(){var e;return null===(e=t.current)||void 0===e?void 0:e.focus()},0)},children:(0,x.tZ)(j,{dateRange:n.selected,children:(0,x.tZ)(c._W,I(I({mode:"range"},E),n))})})}var F=(0,u.Z)(new Date),L={name:"bjn8wh",styles:"position:relative"};function B(e){var t=e.label,n=e.options,o=e.value,i=e.onChange,a=(0,b.Me)(),l="calendar-".concat(a,"-select");return(0,x.BX)("div",{css:L,children:[(0,x.tZ)("label",{htmlFor:l,css:v.visuallyHiddenStyles,children:t}),(0,x.tZ)(h.Box,{as:"select",autoComplete:"off",id:l,value:o,onChange:i,rounded:!0,focusRingFor:"keyboard",paddingRight:1.5,color:"text",fontWeight:"bold",css:(0,r.iv)({appearance:"none",background:"none",borderColor:b._X.border,borderStyle:"solid",borderWidth:b.tokens.borderWidth.sm,fontSize:"".concat(b.tokens.fontSize.xs.sm,"rem"),height:"2rem",paddingLeft:(0,b.mapSpacing)(.5),paddingRight:(0,b.mapSpacing)(2),"@media(min-width: 375px)":{fontSize:"".concat(b.tokens.fontSize.xs.md,"rem")}},"",""),children:n.map(function(e){return(0,x.tZ)("option",{value:e.value,children:e.label},e.value)})}),(0,x.tZ)(y.v4,{weight:"bold",css:(0,r.iv)({position:"absolute",top:"50%",right:(0,b.mapSpacing)(.5),transform:"translateY(-50%)",pointerEvents:"none",color:b._X.foregroundAction},"","")})]})}var E={components:{Caption:function(e){var t=(0,c.kD)(),n=t.classNames,r=t.styles,o=t.components,i=t.labels,a=i.labelPrevious,l=i.labelNext,d=t.locale,u=(0,c.HJ)(),s=u.displayMonths,f=u.previousMonth,p=u.nextMonth,b=u.goToMonth,h=null==o?void 0:o.CaptionLabel,g=a(f,{locale:d}),v=[n.button_reset,n.button,n.nav_button,n.nav_button_previous].join(" "),m=l(p,{locale:d}),O=[n.button_reset,n.button,n.nav_button,n.nav_button_next].join(" "),w=0===e.displayIndex,Z=e.displayIndex===s.length-1;return(0,x.BX)("div",{className:n.caption,style:r.caption,children:[w&&(0,x.tZ)("button",{"aria-label":g,className:v,disabled:!f,onClick:function(){f&&b(f)},type:"button",children:(0,x.tZ)(y.wy,{color:"inherit",weight:"bold"})}),h&&(0,x.tZ)(h,{id:e.id,displayMonth:e.displayMonth}),Z&&(0,x.tZ)("button",{"aria-label":m,className:O,disabled:!p,onClick:function(){p&&b(p)},type:"button",children:(0,x.tZ)(y.XC,{color:"inherit",weight:"bold"})})]})},CaptionLabel:function(e){var t=e.displayMonth,n=e.id,r=(0,c.HJ)().goToMonth,i=(0,s.Z)(t),a=(0,u.Z)(t),d=(0,l.useCallback)(function(e){r(new Date(parseInt(e.target.value),(0,s.Z)(t),1))},[r,t]),p=(0,l.useCallback)(function(e){r(new Date(a,parseInt(e.target.value),1))},[r,a]),b=(0,C.G)(),y=b.yearRange,m=b.yearsVisitedRef,O=(0,l.useMemo)(function(){m.current.set(a,!0);var e,t,n=null!==(e=null==y?void 0:y.from)&&void 0!==e?e:F-10,r=Array.from({length:(null!==(t=null==y?void 0:y.to)&&void 0!==t?t:F+10)-n+1},function(e,t){return t+n});return r.length>1&&m.current.forEach(function(e,t){r.includes(t)||(r=[].concat((0,o.Z)(r),[t]).sort())}),r.map(function(e){return{value:e,label:e}})},[a,y,m]),w=(0,l.useMemo)(function(){return[{label:"January",value:0},{label:"February",value:1},{label:"March",value:2},{label:"April",value:3},{label:"May",value:4},{label:"June",value:5},{label:"July",value:6},{label:"August",value:7},{label:"September",value:8},{label:"October",value:9},{label:"November",value:10},{label:"December",value:11}]},[]),Z=(0,f.Z)(t,"MMMM yyyy");return O.length>1?(0,x.BX)(l.Fragment,{children:[(0,x.tZ)("h2",{id:n,"aria-live":"polite","aria-atomic":"true",css:v.visuallyHiddenStyles,children:Z}),(0,x.BX)(g.Flex,{justifyContent:"center",gap:.5,width:"100%",children:[(0,x.tZ)(B,{label:"Month",options:w,value:i,onChange:p}),(0,x.tZ)(B,{label:"Year",options:O,value:a,onChange:d})]})]}):(0,x.tZ)(h.Box,{as:"h2",id:n,"aria-live":"polite","aria-atomic":"true",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children:Z})},Row:function(e){var t=(0,c.kD)(),n=t.styles,r=t.classNames,o=t.components,i=null==o?void 0:o.Day;return i?(0,x.tZ)("tr",{className:r.row,style:n.row,children:e.dates.map(function(t){return(0,x.tZ)(i,{displayMonth:e.displayMonth,date:t},(0,p.Z)(t))})}):null},Day:function(e){var t=(0,l.useRef)(null),n=(0,c.c$)(e.date,e.displayMonth,t),r=n.activeModifiers,o=n.buttonProps,a=n.isHidden,d=o.children,u=o.onClick,s=o.onKeyDown,f=(o.role,(0,i.Z)(o,P)),p=I({"aria-current":r.today?"date":void 0,"aria-label":"".concat(r.selected&&!r.range_middle?"Selected. ":"").concat((0,S.G2)(e.date)).concat(r.range_middle?". Between selected dates":""),"aria-selected":r.range_middle?void 0:r.selected,onClick:u},f);return(0,x.tZ)("td",I(I({onKeyDown:function(e){a||"Enter"!==e.key&&"Space"!==e.key?null==s||s(e):(e.preventDefault(),e.stopPropagation(),null==u||u(e))},ref:t,tabIndex:-1},a?void 0:p),{},{children:(0,x.tZ)("span",{tabIndex:-1,children:a?void 0:d})}))}}}},48947:function(e,t,n){n.d(t,{G:function(){return l},g:function(){return a}});var r=n(27378),o=n(87800),i=(0,r.createContext)(void 0);function a(e){var t=e.children,n=e.yearRange,a=(0,r.useRef)(new Map);return(0,o.tZ)(i.Provider,{value:{yearsVisitedRef:a,yearRange:n},children:t})}function l(){var e=(0,r.useContext)(i);if(!e)throw Error("Context not found.");return e}},13940:function(e,t,n){n.d(t,{W:function(){return w}});var r=n(10043),o=n(90849),i=n(90089),a=n(27378),l=n(2345),d=n(84007),c=n(32084),u=n(11725),s=n(8447),f=n(11475),p=n(60954),b=n(200),y=n(87800),h=["label","hideOptionalLabel","required","hint","message","invalid","block","id","buttonRef","maxWidth","buttonOnClick","buttonAriaLabel","disabled","value","dateFormat"],g=["maxWidth"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O={name:"4zleql",styles:"display:block"},w=(0,a.forwardRef)(function(e,t){var n=e.label,o=e.hideOptionalLabel,v=e.required,w=e.hint,Z=e.message,M=e.invalid,k=e.block,x=e.id,_=e.buttonRef,j=e.maxWidth,C=void 0===j?"md":j,S=e.buttonOnClick,D=e.buttonAriaLabel,P=e.disabled,R=e.value,I=e.dateFormat,W=(0,i.Z)(e,h),X=m(m({},(0,u.c)({block:k,maxWidth:C})),{},{width:"100%",borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}),F=X.maxWidth,L=(0,i.Z)(X,g),B=(0,a.useMemo)(function(){var e=b.lL.includes(I)?I:"dd/MM/yyyy";return"(e.g. "+(0,l.Z)(new Date,e)+")"},[I]);return(0,y.tZ)(p.gN,{label:n,maxWidth:C,secondaryLabel:B,hideOptionalLabel:o,required:!!v,hint:w,message:Z,invalid:M.field,id:x,children:function(e){return(0,y.BX)(d.Flex,{alignItems:"flex-end",css:(0,r.iv)({maxWidth:F},"",""),children:[(0,y.tZ)("input",m(m(m({ref:t,type:"text",css:(0,r.iv)(m(m({},L),{},{maxWidth:"unset"}),"",""),autoComplete:"off"},e),{},{"aria-invalid":!!(M.field||M.input)},W),{},{value:R,disabled:P})),(0,y.tZ)(f.Button,{type:"button",ref:_,onClick:S,disabled:P,variant:"secondary","aria-label":D,css:(0,r.iv)({borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:(0,s.mapSpacing)(1),paddingRight:(0,s.mapSpacing)(1)},"",""),children:(0,y.tZ)(c.Qu,{size:"md",css:O})})]})}})})},200:function(e,t,n){n.d(t,{G2:function(){return y},JF:function(){return m},OH:function(){return O},Zy:function(){return Z},cD:function(){return v},hY:function(){return w},lL:function(){return p},p6:function(){return b},sG:function(){return h}});var r=n(2345),o=n(84128),i=n(31708),a=n(53730),l=n(44720),d=n(94762),c=n(26992),u=n(31153),s=n(73809);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p=["dd/MM/yyyy","dd-MM-yyyy","dd MM yyyy","MM/dd/yyyy","MM-dd-yyyy","MM dd yyyy","do MMMM yyyy","do MMM yyyy","MMMM do yyyy","MMM do yyyy","d MMMM yyyy","d MMM yyyy","MMMM d yyyy","MMM d yyyy","dd MMMM yyyy","dd MMM yyyy","MMMM dd yyyy","MMM dd yyyy"],b=function(e,t){return(0,r.Z)(e,t)},y=function(e){return(0,r.Z)(e,"do MMMM yyyy EEEE")},h=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,r=new Date,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}(n);try{for(a.s();!(t=a.n()).done;){var l=t.value,d=e.split(/ |\/|-/g)[2]||"";if(4!==d.length)return;if((0,o.Z)(e,l)){var c=(0,i.Z)(e,l,r);if(g(c))return c}}}catch(e){a.e(e)}finally{a.f()}};function g(e){return(0,a.Z)(e)&&(0,l.Z)(e)}function v(e,t,n){return e?t&&(0,d.Z)(e,t)?t:n&&(0,c.Z)(e,n)?n:e:e}function m(e,t){if(void 0===e)return"";var n="string"==typeof e?Z(e):e;return void 0===n?e.toString():g(n)?b(n,t):""}function O(e,t,n){if(e)return e;if(t)return t;if(n){var r=new Date(n.from,0,1),o=new Date(n.to,11,31);return(0,u.Z)(new Date,[r,o])}}function w(e){var t=e.allowedDateFormats,n=e.rangeName,r=e.value,o=n?"".concat(n," date"):"date";if("string"!=typeof r)return"Choose ".concat(o);var i=h(r,t);return i?"Change ".concat(o,", ").concat(y(i)):"Choose ".concat(o)}var Z=function(e){var t=(0,s.Z)(e);return"Invalid Date"===t.toString()?void 0:t}},61836:function(e,t,n){n.d(t,{DateRangePicker:function(){return C}});var r=n(90849),o=n(10043),i=n(11246),a=n(44285),l=n(27378),d=n(84815),c=n(84007),u=n(7226),s=n(8447),f=n(60954),p=n(64388),b=n(53223),y=n(200),h=n(30792),g=n(48947),v=n(13940),m=n(94762),O=n(31153),w=n(7095),Z=n(90399);function M(e){var t=e.to,n=e.from;return n&&t&&(0,m.Z)(t,n)?{from:t,to:n}:e}var k=n(87800);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j={name:"1coh6b9",styles:"min-height:200px"},C=function(e){var t,n,r=e.allowedDateFormats,m=void 0===r?y.lL:r,x=e.legend,C=e.hint,S=e.id,D=e.fromInvalid,P=void 0!==D&&D,R=e.toInvalid,I=void 0!==R&&R,W=e.message,X=e.hideOptionalLabel,F=e.value,L=e.onChange,B=e.onFromInputChange,E=e.onToInputChange,A=e.disabled,T=e.fromLabel,N=e.toLabel,z=e.required,H=void 0!==z&&z,J=e.minDate,q=e.maxDate,Y=e.fromInputRef,G=e.toInputRef,K=e.yearRange,U=e.dateFormat,Q=void 0===U?"dd/MM/yyyy":U,$=(0,l.useMemo)(function(){return Array.from(new Set([Q].concat((0,a.Z)(m.filter(function(e){return y.lL.includes(e)})))))},[Q,m]),V=(0,l.useState)(!1),ee=V[0],et=V[1],en=(0,s.useTernaryState)(!1),er=(0,i.Z)(en,3),eo=er[0],ei=er[1],ea=er[2],el=eo?ea:ei,ed=(0,l.useState)(),ec=ed[0],eu=ed[1],es=(0,l.useRef)(null),ef=(0,l.useRef)(null),ep=(0,b.S)(),eb=(0,l.useMemo)(function(){return{from:"string"==typeof F.from?(0,y.Zy)(F.from):F.from,to:"string"==typeof F.to?(0,y.Zy)(F.to):F.to}},[F]),ey=(0,l.useCallback)(function(e,t,n){if(ec&&!n.disabled){var r=M("from"===ec?{from:t,to:eb.to}:{from:eb.from,to:t});if(L(r),ev(r.from?(0,y.p6)(r.from,Q):""),ew(r.to?(0,y.p6)(r.to,Q):""),r.from&&r.to){ea(),eu(void 0);return}if("from"===ec){eu("to");return}if("to"===ec&&!r.from){eu("from");return}}},[ea,ec,L,eb,Q]),eh=(0,l.useState)((0,y.JF)(F.from,Q)),eg=eh[0],ev=eh[1],em=(0,l.useState)((0,y.JF)(F.to,Q)),eO=em[0],ew=em[1];(0,l.useEffect)(function(){ev((0,y.JF)(F.from,Q)),ew((0,y.JF)(F.to,Q))},[F,Q]);var eZ=(0,l.useCallback)(function(){eo&&ea()},[eo,ea]);(0,s.O8)([ep.popoverRef,es,ef],eZ),(0,l.useEffect)(function(){var e=function(e){eo&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),ea(),eu(void 0))};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[eo,ea]);var eM=(0,l.useMemo)(function(){if(J||q)return[J?{before:J}:void 0,q?{after:q}:void 0].filter(function(e){return!!e})},[J,q]),ek=(0,s.iP)().windowWidth,ex=(void 0===ek?0:ek)>s.tokens.breakpoint.md?2:1,e_=P||I,ej=(t=(0,s.Me)(S),{fieldsetId:S||"date-range-picker-".concat(t),fromId:"date-range-picker-".concat(t,"-from"),hintId:"date-range-picker-".concat(t,"-hint"),messageId:"date-range-picker-".concat(t,"-message"),toId:"date-range-picker-".concat(t,"-to")}),eC=ej.fieldsetId,eS=ej.fromId,eD=ej.hintId,eP=ej.messageId,eR=ej.toId,eI=[P&&W?eP:null,C?eD:null].filter(Boolean).join(" "),eW=[I&&W?eP:null,C?eD:null].filter(Boolean).join(" "),eX=(n=function(){if("from"===ec&&eb.from)return eb.from;if("to"===ec&&eb.to)return eb.to;if(K){var e=new Date(K.from,0,1),t=new Date(K.to,11,31);return(0,O.Z)(new Date,[e,t])}}())&&"to"===ec&&2===ex?0===(null!=eb&&eb.from&&null!=eb&&eb.to?(0,w.Z)(eb.to,eb.from):-1)?n:(0,Z.Z)(n,1):n,eF=(0,l.useMemo)(function(){return ep.getPopoverProps()},[ep]),eL=(0,l.useMemo)(function(){return{defaultMonth:eX,disabled:eM,initialFocus:!0,numberOfMonths:ex,onSelect:ey,returnFocusRef:"from"===ec?es:ef,selected:eb}},[eX,eM,ec,ex,ey,eb]);return(0,k.tZ)(f.i$,{invalid:e_,id:eC,children:(0,k.BX)(d.Box,{as:"fieldset",children:[(0,k.tZ)(f.Qy,{as:"legend",required:H,hideOptionalLabel:X,css:x?void 0:p.visuallyHiddenStyles,children:null!=x?x:"Date range"}),(0,k.BX)(u.Stack,{gap:.5,css:(0,o.iv)({marginTop:x?(0,s.mapSpacing)(.5):void 0},"",""),children:[C?(0,k.tZ)(f.J1,{id:eD,children:C}):null,W&&e_?(0,k.tZ)(f.nd,{id:eP,children:W}):null,(0,k.BX)(c.Flex,_(_({},ep.getReferenceProps()),{},{flexWrap:"wrap",inline:!0,gap:1,children:[(0,k.tZ)(v.W,{"aria-describedby":eI.length>0?eI:null,ref:Y,label:void 0===T?"Start date":T,hideOptionalLabel:X||!!x,value:eg,onBlur:function(e){var t=e.target.value,n=(0,y.sG)(t,$),r=(0,y.cD)(n,J,q),o=M({from:r,to:eb.to});!t||r?L(o):null==B||B(t)},onChange:function(e){ev(e.target.value)},buttonRef:es,buttonOnClick:function(){eu("from"),el(),et(!0)},buttonAriaLabel:(0,y.hY)({allowedDateFormats:$,rangeName:"start",value:eg}),disabled:A,required:H,invalid:{field:!1,input:P},dateFormat:Q,id:eS}),(0,k.tZ)(v.W,{"aria-describedby":eW.length>0?eW:null,ref:G,label:void 0===N?"End date":N,hideOptionalLabel:X||!!x,value:eO,onBlur:function(e){var t=e.target.value,n=(0,y.sG)(t,$),r=(0,y.cD)(n,J,q),o=M({from:eb.from,to:r});!t||r?L(o):null==E||E(t)},onChange:function(e){ew(e.target.value)},buttonRef:ef,buttonOnClick:function(){eu("to"),el(),et(!0)},buttonAriaLabel:(0,y.hY)({allowedDateFormats:$,rangeName:"end",value:eO}),disabled:A,required:H,invalid:{field:!1,input:I},dateFormat:Q,id:eR})]}))]}),(0,k.tZ)(g.g,{yearRange:K,children:ee?eo&&(0,k.tZ)(b.J,_(_({},eF),{},{children:(0,k.tZ)(h.a2,_({},eL))})):(0,k.tZ)(b.J,_(_({},eF),{},{children:eo&&(0,k.tZ)(h.a2,_(_({},eL),{},{css:j}))}))})]})})}},65050:function(e,t,n){n.d(t,{SectionAlert:function(){return w}});var r=n(90849),o=n(90089),i=n(27378),a=n(53633),l=n(84007),d=n(88614),c=n(89205),u=n(10043),s=n(11475),f=n(8447),p=n(32084),b=n(87800),y=function(e){var t=e.onClick;return(0,b.tZ)(s.Button,{alignSelf:"start",onClick:t,iconAfter:p.Tw,variant:"text","aria-label":"Close",css:(0,u.iv)({flexShrink:0,"& > span:first-of-type":(0,r.Z)({display:"none"},f.tokens.mediaQuery.min.sm,{display:"block"})},"",""),children:"Close"})},h=n(40631),g={success:(0,b.tZ)(h.SuccessFilledIcon,{color:"success","aria-hidden":"false","aria-label":"Success"}),error:(0,b.tZ)(h.AlertFilledIcon,{color:"error","aria-hidden":"false","aria-label":"Error"}),warning:(0,b.tZ)(h.WarningFilledIcon,{color:"warning","aria-hidden":"false","aria-label":"Warning"})},v=["children","id","focusOnMount","focusOnUpdate","onClose","onDismiss","role","tabIndex","title","tone"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=(0,i.forwardRef)(function(e,t){var n=e.children,r=e.id,i=e.focusOnMount,u=e.focusOnUpdate,s=e.onClose,f=e.onDismiss,p=e.role,h=e.tabIndex,m=e.title,w=e.tone,Z=(0,o.Z)(e,v),M=(0,a.K)({focusOnMount:i,focusOnUpdate:u,forwardedRef:t}),k=g[w],x=(0,d.Nl)(s,f);return(0,b.BX)(l.Flex,O(O({alignItems:"center",background:w,borderColor:w,borderLeft:!0,borderLeftWidth:"xl",gap:.5,highContrastOutline:!0,id:r,focusRingFor:"all",justifyContent:"space-between",padding:1,ref:M,role:p,rounded:!0,tabIndex:null!=h?h:i||u?-1:void 0},Z),{},{children:[(0,b.BX)(l.Flex,{gap:.5,children:[k,(0,b.BX)(l.Flex,{gap:.25,flexDirection:"column",children:[m&&(0,b.tZ)(c.Text,{fontWeight:"bold",children:m}),n]})]}),x?(0,b.tZ)(y,{onClick:x}):null]}))})},67098:function(e,t,n){n.d(t,{Select:function(){return b}});var r=n(10043),o=n(90849),i=n(90089),a=n(27378),l=n(60954),d=n(8447),c=n(32084),u=n(87800),s=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=(0,a.forwardRef)(function(e,t){var n=e.label,r=e.hideOptionalLabel,o=e.required,a=e.hint,d=e.message,c=e.invalid,f=e.block,b=e.maxWidth,m=void 0===b?"md":b,O=e.options,w=e.placeholder,Z=e.id,M=(0,i.Z)(e,s),k=v({block:f});return(0,u.tZ)(l.gN,{label:n,hideOptionalLabel:r,required:!!o,hint:a,maxWidth:m,message:d,invalid:c,id:Z,children:function(e){return(0,u.BX)(y,{block:f,maxWidth:m,children:[(0,u.tZ)("select",p(p(p({ref:t,css:k},e),M),{},{children:(0,u.tZ)(h,{options:O,placeholder:w})})),(0,u.tZ)(g,{disabled:M.disabled})]})}})}),y=function(e){var t=e.children,n=e.block,o=e.maxWidth;return(0,u.tZ)("div",{css:(0,r.iv)(p({position:"relative"},!n&&{maxWidth:d.tokens.maxWidth.field[o]}),"",""),children:t})},h=function(e){var t=e.options,n=e.placeholder;return(0,u.BX)(a.Fragment,{children:[n?(0,u.tZ)("option",{value:"",children:n}):null,t.map(function(e){return"options"in e?(0,u.tZ)("optgroup",{label:e.label,disabled:e.disabled,children:e.options.map(function(e){var t=e.value,n=e.label,r=e.disabled;return(0,u.tZ)("option",{value:t,disabled:r,children:n},t)})},e.label):(0,u.tZ)("option",{value:e.value,disabled:e.disabled,children:e.label},e.value)})]})},g=function(e){var t=e.disabled;return(0,u.tZ)(c.v4,{css:(0,r.iv)({position:"absolute",top:"50%",right:(0,d.mapSpacing)(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:d._X.foregroundAction},"","")})},v=function(e){var t=e.block;return p(p(p(p({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,d.mapSpacing)(1),paddingRight:"calc(".concat(d.tokens.borderWidth.lg,"px + 2.5rem)"),margin:0,background:d._X.backgroundBody,borderWidth:d.tokens.borderWidth.lg,borderStyle:"solid",borderColor:d._X.border,borderRadius:d.tokens.borderRadius,color:d._X.foregroundText,width:"100%",fontFamily:d.tokens.font.body},d.lB.input.md),{},{lineHeight:d.tokens.lineHeight.default},d.lB.truncate),t&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:d._X.systemErrorMuted,borderColor:d._X.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:d._X.borderMuted,backgroundColor:d._X.backgroundShade,color:d._X.foregroundMuted},"&:focus":d.lB.outline})}}}]);