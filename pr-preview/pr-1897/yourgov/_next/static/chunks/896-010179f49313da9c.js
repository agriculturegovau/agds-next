"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{24953:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(98192),r()},13635:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(74562),r()},63846:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(48298),r()},74373:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(67098),r()},98192:function(e,t,n){n.d(t,{DatePicker:function(){return y}});var r=n(90849),i=n(11246),o=n(44285),l=n(90089),c=n(27378),a=n(23914),s=n(53223),d=n(200),u=n(30792),f=n(48947),p=n(13940),m=n(87800),h=["allowedDateFormats","dateFormat","initialMonth","inputRef","invalid","maxDate","maxWidth","minDate","onBlur","onChange","onInputChange","value","yearRange"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v={name:"1coh6b9",styles:"min-height:200px"},y=function(e){var t=e.allowedDateFormats,n=void 0===t?d.lL:t,r=e.dateFormat,b=void 0===r?"dd/MM/yyyy":r,y=e.initialMonth,x=e.inputRef,Z=e.invalid,O=void 0!==Z&&Z,k=e.maxDate,j=e.maxWidth,w=e.minDate,S=e.onBlur,B=e.onChange,T=e.onInputChange,P=e.value,D=e.yearRange,X=(0,l.Z)(e,h),C=(0,c.useMemo)(function(){return Array.from(new Set([b].concat((0,o.Z)(n.filter(function(e){return d.lL.includes(e)})))))},[b,n]),L=(0,c.useRef)(null),F=(0,c.useState)(!1),R=F[0],I=F[1],_=(0,a.useTernaryState)(!1),M=(0,i.Z)(_,3),E=M[0],A=M[1],z=M[2],W=E?z:A,Y=(0,s.S)(),H=(0,c.useCallback)(function(e,t,n){n.disabled||(q((0,d.p6)(t,b)),B(t),z())},[B,z,b]),N=(0,c.useState)((0,d.JF)(P,b)),G=N[0],q=N[1];(0,c.useEffect)(function(){q((0,d.JF)(P,b))},[b,P]);var U=(0,c.useCallback)(function(){E&&z()},[E,z]);(0,a.O8)([Y.popoverRef,L],U),(0,c.useEffect)(function(){var e=function(e){E&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),z())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[E,z]);var J=(0,c.useMemo)(function(){if(w||k)return[w?{before:w}:void 0,k?{after:k}:void 0].filter(function(e){return!!e})},[w,k]),K="string"==typeof P?(0,d.Zy)(P):P,V=(0,d.OH)(K,y,D),Q=(0,c.useMemo)(function(){return Y.getPopoverProps()},[Y]),$=(0,c.useMemo)(function(){return{defaultMonth:V,disabled:J,initialFocus:!0,numberOfMonths:1,onSelect:H,selected:K}},[V,J,H,K]);return(0,m.BX)("div",g(g({},Y.getReferenceProps()),{},{children:[(0,m.tZ)(p.W,g(g({},X),{},{dateFormat:b,maxWidth:void 0===j?"md":j,invalid:{field:O,input:O},ref:x,value:G,onBlur:function(e){var t=e.target.value,n=(0,d.sG)(t,C),r=(0,d.cD)(n,w,k);!t||r?B(r):null==T||T(t),null==S||S(e)},onChange:function(e){q(e.target.value)},buttonRef:L,buttonOnClick:function(){W(),I(!0)},buttonAriaLabel:(0,d.hY)({allowedDateFormats:C,value:G})})),(0,m.tZ)(f.g,{yearRange:D,children:R?E&&(0,m.tZ)(s.J,g(g({},Q),{},{children:(0,m.tZ)(u.Gv,g({},$))})):(0,m.tZ)(s.J,g(g({},Q),{},{visibility:E?"visible":"hidden",css:v,children:E&&(0,m.tZ)(u.Gv,g({},$))}))})]}))};n(61836)},14724:function(e,t,n){n.d(t,{G:function(){return o}});var r=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=r.length-1;function o(e){var t,n,o=Number(e);if(isNaN(o))return"Unknown";var l=o<0;l&&(o=-o),n=Math.min(Math.max(Math.floor(Math.log(o)/Math.log(1e3)),0),i);var c=o/Math.pow(1e3,n),a=Math.pow(10,n>0?2:0);return 1e3==(t=Math.round(c*a)/a)&&n<i&&(t=1,n++),l&&(t=-t),"".concat(t," ").concat(r[n])}},74562:function(e,t,n){n.d(t,{FileUpload:function(){return U}});var r=n(10043),i=n(90849),o=n(44285),l=n(90089),c=n(27378),a=n(91165),s=n(64388),d=n(11475),u=n(23914),f=n(60954),p=n(24206),m=n(51190),h=n(65050),b=n(7226),g=n(89205),v=n(84815),y=n(35305),x=n(84007),Z=n(7971),O=n(75055),k=n(87800),j="4.5rem",w=function(e){var t=e.src;return t?(0,k.tZ)(v.Box,{flexShrink:0,display:{xs:"none",md:"block"},css:(0,r.iv)({borderTopLeftRadius:u.tokens.borderRadius,borderBottomLeftRadius:u.tokens.borderRadius,backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",width:j},"","")}):(0,k.tZ)(x.Flex,{flexShrink:0,alignItems:"center",justifyContent:"center",display:{xs:"none",md:"flex"},css:(0,r.iv)({borderTopLeftRadius:u.tokens.borderRadius,borderBottomLeftRadius:u.tokens.borderRadius,width:j},"",""),children:(0,k.tZ)(O.a,{size:"md",color:"muted"})})},S=n(55737),B=n(14724);function T(e){return(0,B.G)(e)}var P={"application/msword":{extensions:[".doc"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{extensions:[".docx"]},"application/pdf":{extensions:[".pdf"]},"application/rtf":{extensions:[".rtf"]},"application/vnd.ms-excel":{extensions:[".xls"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{extensions:[".xlsx"]},"application/vnd.ms-outlook":{extensions:[".msg"]},"application/zip":{extensions:[".zip"]},"application/xml":{extensions:[".xml"]},"audio/*":{extensions:[],label:"Any audio file"},"audio/mpeg":{extensions:[".mp3"]},"audio/wav":{extensions:[".wav"]},"image/*":{extensions:[],label:"Any image file"},"image/gif":{extensions:[".gif"]},"image/heic":{extensions:[".heic"]},"image/jpg":{extensions:[".jpeg",".jpg"]},"image/jpeg":{extensions:[".jpeg",".jpg"]},"image/png":{extensions:[".png"]},"image/svg+xml":{extensions:[".svg"]},"image/tiff":{extensions:[".tif",".tiff"]},"image/webp":{extensions:[".webp"]},"text/*":{extensions:[],label:"Any text file"},"text/csv":{extensions:[".csv"]},"text/plain":{extensions:[".txt"]},"text/rtf":{extensions:[".rtf"]},"text/xml":{extensions:[".xml"]},"video/*":{extensions:[],label:"Any video file"},"video/mp4":{extensions:[".mp4"]},"video/mpeg":{extensions:[".mpeg"]}};function D(e){return e.replace(/^\./,"")}var X={code:S.jK.TooManyFiles,message:"Too many files"};function C(e){return{file:e,errors:[X]}}var L={name:"4zleql",styles:"display:block"},F={name:"1bmnxg7",styles:"white-space:nowrap"},R=function(e){var t=e.file,n=e.hideThumbnails,r=e.onRemove,i=t.name,o=t.size,l=t.href,c=t.thumbnailSrc;return(0,k.BX)(x.Flex,{as:"li",background:"success",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,k.BX)(x.Flex,{children:[!n&&(0,k.tZ)(w,{src:c}),(0,k.BX)(x.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:[(0,k.tZ)(v.Box,{flexShrink:0,children:(0,k.tZ)(p.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:L,size:"md"})}),l?(0,k.tZ)(g.Text,{breakWords:!0,paddingY:1.5,children:(0,k.BX)(Z.TextLink,{href:l,rel:"noopener noreferrer",target:"_blank",children:[i,o?" (".concat(T(o),")"):null]})}):(0,k.BX)(g.Text,{breakWords:!0,paddingY:1.5,children:[i,o?(0,k.BX)(g.Text,{css:F,children:[" ","(",T(o),")"]}):null]})]})]}),(0,k.tZ)(x.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:(0,k.tZ)(d.Button,{"aria-label":"Remove file: ".concat(i),iconBefore:p.Tw,onClick:r,size:"sm",variant:"text",children:"Remove"})})]})},I=function(e){var t=e.files,n=e.hideThumbnails,r=e.onRemove;return t.length?(0,k.tZ)(b.Stack,{"aria-label":"Existing files",as:"ul",gap:.5,children:t.map(function(e,t){return(0,k.tZ)(R,{file:e,hideThumbnails:n,onRemove:function(){return null==r?void 0:r(e)}},t)})}):null},_=n(31369),M={name:"4zleql",styles:"display:block"},E={name:"1bmnxg7",styles:"white-space:nowrap"},A=function(e){var t=e.file,n=e.hideThumbnails,r=e.onRemove,i=t.name,o=t.size,l=t.status,a=void 0===l?"none":l,s=t.href,u=(0,c.useMemo)(function(){return t.type.match(/image\/(png|jpg|jpeg|webp|heic)/i)?URL.createObjectURL(t):void 0},[t]);return(0,k.BX)(x.Flex,{as:"li",background:"success"===a?a:"shade",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,k.BX)(x.Flex,{children:[!n&&(0,k.tZ)(w,{src:u}),(0,k.BX)(x.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:["success"==a&&(0,k.tZ)(v.Box,{flexShrink:0,children:(0,k.tZ)(p.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:M,size:"md"})}),s?(0,k.tZ)(g.Text,{breakWords:!0,paddingY:1.5,children:(0,k.BX)(Z.TextLink,{href:s,rel:"noopener noreferrer",target:"_blank",children:[i,o?" (".concat(T(o),")"):null]})}):(0,k.BX)(g.Text,{breakWords:!0,paddingY:1.5,children:[i,o?(0,k.BX)(g.Text,{css:E,children:[" ","(",T(o),")"]}):null]})]})]}),(0,k.tZ)(x.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:"uploading"===a?(0,k.tZ)(v.Box,{paddingY:1,children:(0,k.tZ)(_.xg,{label:"Uploading"})}):(0,k.tZ)(d.Button,{"aria-label":"Remove file: ".concat(i),iconBefore:p.Tw,onClick:r,size:"sm",variant:"text",children:"Remove"})})]})},z=function(e){var t=e.files,n=e.hideThumbnails,r=e.onRemove;return t.length?(0,k.tZ)(b.Stack,{"aria-label":"Selected files",as:"ul",gap:.5,children:t.map(function(e,t){return(0,k.tZ)(A,{file:e,hideThumbnails:n,onRemove:function(){return r(t)}},t)})}):null},W=["accept","buttonRef","disabled","existingFiles","hideOptionalLabel","hideThumbnails","hint","id","invalid","label","maxFiles","maxSize","message","multiple","onChange","onRemoveExistingFile","required","value"],Y=["role","tabIndex","color"],H=["ref","style"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var q={name:"bjn8wh",styles:"position:relative"},U=(0,c.forwardRef)(function(e,t){var n,x,Z,O,j,w=e.accept,B=e.buttonRef,L=e.disabled,F=e.existingFiles,R=void 0===F?[]:F,_=e.hideOptionalLabel,M=e.hideThumbnails,E=void 0!==M&&M,A=e.hint,N=e.id,U=e.invalid,J=e.label,K=e.maxFiles,V=e.maxSize,Q=e.message,$=e.multiple,ee=e.onChange,et=e.onRemoveExistingFile,en=e.required,er=e.value,ei=void 0===er?[]:er,eo=(0,l.Z)(e,W),el=(0,c.useState)(""),ec=el[0],ea=el[1],es=$?"files":"file",ed=V&&!isNaN(V)?1e3*V:0,eu=T(ed),ef=K;void 0!==K&&K<1&&(ef=void 0,console.warn("FileUpload: maxFiles cannot be less than 1. The property is being ignored."));var ep=(0,c.useState)(void 0),em=ep[0],eh=ep[1],eb=(0,c.useState)(void 0),eg=eb[0],ev=eb[1],ey=function(e){var t;eZ(),null==ee||ee(((t=(0,o.Z)(ei)).splice(e,1),t)),ea(ei[e].name+" removed")},ex=function(e){null==et||et(e),ea(e.name+" removed")};function eZ(){eh(void 0),ev(void 0)}var eO=(0,c.useMemo)(function(){if(w)return Object.fromEntries(w.map(function(e){return"string"==typeof e?[e,P[e].extensions]:[e.mimeType,e.extensions]}))},[w]),ek=(0,a.uI)({accept:eO,maxSize:ed||void 0,multiple:$,onDropAccepted:function(e){if(eZ(),$){var t,n=Object.values([].concat((0,o.Z)(ei),(0,o.Z)(e)).reduce(function(e,t){return G(G({},e),{},(0,i.Z)({},"".concat(t.name,"-").concat(t.size,"-").concat(t.type),t))},{}));ef&&n.length>ef?(eh(function(){return n.slice(ef).map(C)}),t=n.slice(0,ef)):t=n}else t=e;ea(t.map(function(e){return e.name}).join(", ")+" added"),null==ee||ee(t)},disabled:L,noClick:!0,noKeyboard:!0}),ej=ek.getRootProps,ew=ek.getInputProps,eS=ek.isDragActive,eB=ek.open,eT=ek.fileRejections;(0,c.useEffect)(function(){eT.length>0&&ev(eT)},[eT]);var eP=function(e){if(null!=e&&e.length){var t=[];return e.forEach(function(e){if("string"==typeof e){var n=P[e];"label"in n?t.push(n.label):n.extensions.forEach(function(e){t.push(D(e))})}else null!=e&&e.label?t.push(e.label):e.extensions.forEach(function(e){t.push(D(e))})}),t.filter(function(e,t,n){return n.indexOf(e)===t}).join(", ")}}(w),eD=(x=(n={disabled:L,invalid:U,isDragActive:eS}).disabled,Z=n.invalid,O=n.isDragActive,G(G(G({borderWidth:u.tokens.borderWidth.lg,borderStyle:"dashed",borderColor:u._X.border,backgroundColor:u._X.backgroundBody},Z&&{backgroundColor:u._X.systemErrorMuted,borderColor:u._X.systemError}),x&&{cursor:"not-allowed",borderColor:u._X.borderMuted,backgroundColor:u._X.backgroundShade,color:u._X.foregroundMuted}),O&&{borderColor:u._X.foregroundAction,backgroundColor:u._X.backgroundShade})),eX=ej(),eC=(eX.role,eX.tabIndex,eX.color,(0,l.Z)(eX,Y)),eL=ew(),eF=eL.ref,eR=(eL.style,(0,l.Z)(eL,H)),eI=0===(j=[].concat((0,o.Z)(ei),(0,o.Z)(R))).length?"":"".concat(j.length," ").concat(1===j.length?"file":"files"," selected"),e_=!!(ei.length||(null==R?void 0:R.length)),eM=eg&&(null==eg?void 0:eg.length)>0||em&&(null==em?void 0:em.length)>0,eE=eg&&(null==eg?void 0:eg.length)>1||em&&(null==em?void 0:em.length)>1,eA=(0,u.Me)(N),ez=V?"".concat(eA,"-file-size-desc"):"",eW=eO?"".concat(eA,"-accepted-files-desc"):"",eY=(0,y.C)({hideOptionalLabel:_,required:en}),eH="Select ".concat(es),eN=[eH,J,eY,en&&"required",U&&"invalid",eI].filter(Boolean).join(", ");return(0,k.tZ)(f.gN,{label:J,hideOptionalLabel:_,required:en,hint:A,message:Q,invalid:U,id:N,children:function(e){var n=[e["aria-describedby"],ez,eW].filter(Boolean).join(" ");return(0,k.BX)(b.Stack,{gap:1.5,children:[(0,k.tZ)("div",{css:s.visuallyHiddenStyles,role:"status",children:ec}),(0,k.tZ)(v.Box,G(G({},eC),{},{children:(0,k.BX)(b.Stack,{alignItems:"center",border:!0,css:eD,gap:1,padding:1.5,rounded:!0,children:[(0,k.tZ)(p.UploadIcon,{size:"lg",color:"muted"}),(0,k.tZ)("input",G(G(G({},eR),eo),{},{"aria-hidden":!0,css:s.visuallyHiddenStyles,ref:(0,u.lq)([t,eF])})),(0,k.BX)(b.Stack,{alignItems:"center",textAlign:"center",children:[(0,k.BX)("span",{css:q,children:[(0,k.tZ)(g.Text,{color:"muted",css:(0,r.iv)({visibility:eS?"hidden":void 0},"",""),fontWeight:"bold",children:$?"Drag and drop files here or select files to upload.":"Drag and drop a file or select a file to upload."}),(0,k.BX)(g.Text,{color:"action",css:(0,r.iv)({display:eS?"block":"none",left:0,position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},"",""),fontWeight:"bold",children:["Drop ",es," here…"]})]}),V?(0,k.BX)(g.Text,{color:"muted",id:ez,children:[$?"Each file":"File"," cannot exceed"," ",eu,"."]}):null,eO?(0,k.BX)(g.Text,{color:"muted",id:eW,children:["Files accepted: ",eP,"."]}):null]}),(0,k.tZ)(d.Button,{"aria-describedby":n||void 0,"aria-label":eN,disabled:L,focusRingFor:"all",id:e.id,onClick:eB,ref:B,type:"button",variant:"secondary",children:eH})]})})),eM&&(0,k.tZ)(v.Box,{breakWords:!0,children:(0,k.BX)(h.SectionAlert,{focusOnMount:!0,onClose:eZ,title:"The following ".concat(eE?"files":"file"," could not be selected"),tone:"error",children:[(0,k.tZ)(g.Text,{as:"p",children:eE?"These files were unable to be accepted for the following reasons:":"This file was unable to be accepted for the following reason:"}),(0,k.tZ)(m.UnorderedList,{children:[].concat((0,o.Z)(null!=eg?eg:[]),(0,o.Z)(null!=em?em:[])).map(function(e){return(0,k.BX)(m.ListItem,{children:[(0,k.tZ)(g.Text,{color:"error",fontWeight:"bold",children:e.file.name})," ",(0,k.BX)(g.Text,{children:["(",T(e.file.size),")"," - ",function(e,t){if(null!=e&&e.length){var n=Array.from(new Set(e.map(function(e){return e.code})));return n.includes(S.jK.FileInvalidType)?"Invalid file type":n.includes(S.jK.FileTooLarge)?"File is over ".concat(t):X.message}}(e.errors,eu)]})]},e.file.name)})})]})}),e_&&(0,k.BX)(b.Stack,{gap:.5,children:[(0,k.tZ)(g.Text,{color:"muted",children:eI}),(0,k.tZ)(I,{files:R,hideThumbnails:E,onRemove:ex}),(0,k.tZ)(z,{files:ei,hideThumbnails:E,onRemove:ey})]})]})}})})},48298:function(e,t,n){n.d(t,{ProgressIndicator:function(){return W}});var r=n(90089),i=n(90849),o=n(23914),l=n(66924),c=n(7971),a=n(10043),s=n(84815),d=n(84007),u=n(7226),f=n(89205),p=n(24206),m={body:o._X.backgroundShade,bodyAlt:o._X.backgroundShadeAlt},h="data-agds-progress-indicator-item-timeline-action",b="data-agds-progress-indicator-item-ring",g="data-agds-progress-indicator-item-text-container";[].concat(["blocked","doing","started"],["done","error","saved","todo"]);var v={blocked:{label:"Cannot start yet",icon:p.Zs,iconColor:"border"},doing:{label:"In progress",icon:p.NB,iconColor:"border"},started:{label:"In progress",icon:p.NB,iconColor:"border"},todo:{label:"Not started",icon:p.Q2,iconColor:"border"},done:{label:"Completed",icon:p.SuccessFilledIcon,iconColor:"success"},saved:{label:"Saved",icon:p.tm,iconColor:"success"},error:{label:"Error",icon:p.zM,iconColor:"error"}},y=n(87800),x=["as","background","children","isActive","items","status"],Z=["label","isActive"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j={isActive:!1,label:""},w={name:"bjn8wh",styles:"position:relative"},S=function(e){var t,n=e.as,l=e.background,c=void 0===l?"body":l,O=e.children,S=e.isActive,P=e.items,D=e.status,X=(0,r.Z)(e,x),C=v[D].label,L=S&&(null==P?void 0:P.find(function(e){return e.isActive}))||j,F=L.label,R=(L.isActive,(0,r.Z)(L,Z));return(0,y.tZ)(s.Box,{as:"li",background:c,css:(0,a.iv)({"&:first-of-type":(0,i.Z)({},"[".concat(h,"]:first-of-type"),{opacity:0}),"&:last-of-type":(t={},(0,i.Z)(t,"[".concat(h,"]:last-of-type"),{opacity:0}),(0,i.Z)(t,"[".concat(g,"]"),{borderBottomWidth:0}),t)},"",""),children:(0,y.BX)(s.Box,{as:"span",columnGap:.5,css:(0,a.iv)((0,i.Z)({display:"grid",gridTemplateColumns:"min-content 1fr",textDecoration:"none",width:"100%"},"[".concat(b,"]::before"),{backgroundColor:s.Vu[c]}),"",""),focusRingFor:"keyboard",children:[(0,y.tZ)(T,{status:D,isActive:S}),(0,y.BX)(u.Stack,k(k(k(k({},(0,i.Z)({},g,"")),{},{"aria-current":S||void 0,as:n,css:(0,a.iv)({textDecoration:"none","&:hover":{backgroundColor:m[c]},"&:hover span:not(:last-of-type)":k({},o.lB.underline)},"",""),flexGrow:1,fontFamily:"body",gap:.25,justifyContent:"center",paddingX:.5,paddingY:1},!P&&{borderBottom:!0,borderColor:"muted"}),X),{},{children:[(0,y.tZ)(f.Text,k(k({fontWeight:S?"bold":"normal"},(0,i.Z)({},"data-agds-progress-indicator-item-text","")),{},{children:O})),(0,y.tZ)(f.Text,{color:"muted",fontSize:"xs",lineHeight:"nospace",children:C})]})),F&&(0,y.BX)(y.HY,{children:[(0,y.tZ)(B,{}),(0,y.tZ)(s.Box,{as:"ul",children:(0,y.tZ)(s.Box,{as:"li",css:w,children:(0,y.BX)(d.Flex,k(k({},R),{},{alignItems:"center","aria-current":!0,as:n,borderBottom:!0,borderColor:"muted",color:"text",css:(0,a.iv)({textDecoration:"none","&:hover":k(k({backgroundColor:m[c]},o.lB.underline),{},{":not(:focus-visible)::before":{backgroundColor:m[c],content:'""',height:(0,o.mapSpacing)(.5),left:0,position:"absolute",top:"-".concat((0,o.mapSpacing)(.5)),width:"100%"}})},"",""),gap:.5,padding:.5,paddingBottom:1,children:[(0,y.tZ)(p.ti,{color:"selected"}),(0,y.tZ)(f.Text,{color:"inherit",fontSize:"xs",fontWeight:"bold",children:F})]}))})})]})]})})},B=function(){return(0,y.tZ)("span",k({css:(0,a.iv)({backgroundColor:o._X.border,flex:1,justifySelf:"center",width:o.tokens.borderWidth.md,"@media (forced-colors: active)":{backgroundColor:"GrayText"}},"","")},(0,i.Z)({},h,"")))},T=function(e){var t=e.status,n=e.isActive,r=v[t],l=r.icon,c=r.iconColor,s=o.tokens.borderWidth.md,u=s+3,f=n&&"border"===c?"selected":c;return(0,y.BX)(d.Flex,{alignItems:"center",as:"span",flexDirection:"column",children:[(0,y.tZ)(B,{}),(0,y.tZ)("span",k(k({},(0,i.Z)({},b,"")),{},{css:(0,a.iv)(k({position:"relative",paddingLeft:u,paddingRight:u},n&&{"::before":{position:"absolute",top:-u,bottom:-u,left:0,right:0,borderRadius:"100%",content:'""',border:"".concat(s,"px solid ").concat(o._X.selected)}}),"",""),children:(0,y.tZ)(l,{size:"md",color:f,css:(0,a.iv)({position:"relative",display:"block",margin:-1},"","")})})),(0,y.tZ)(B,{})]})},P=["children","isActive","status"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C=function(e){var t=e.children,n=e.isActive,i=e.status,o=(0,r.Z)(e,P);return(0,y.tZ)(S,X(X({as:c.TextLink,isActive:!!n,status:i},o),{},{children:t}))},L=n(11475),F=["children"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _=function(e){var t=e.children,n=(0,r.Z)(e,F);return(0,y.tZ)(S,I(I({as:L.Yd},n),{},{children:t}))};function M(e){var t=e.children;return(0,y.tZ)(s.Box,{as:"ul",borderTop:!0,borderBottom:!0,css:(0,a.iv)((0,i.Z)({},o.tokens.mediaQuery.max.sm,{borderTopWidth:0}),"",""),children:t})}var E=["label"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var W=function(e){var t=e.activePath,n=e.background,i=e.items,o=e.hideSubtitle,c=void 0!==o&&o?void 0:"".concat(i.filter(function(e){return"done"===e.status}).length," of ").concat(i.length," steps completed"),a=i.some(function(e){return e.isActive})?i:i.map(function(e){var n,r,i="doing"===e.status,o="href"in e?e.href:e.label,l="".concat(o).concat(null!=o&&o.endsWith("/")?"":"/"),c=!!(null!=t&&null!==(n=t.split(l)[1])&&void 0!==n&&n.length),a="items"in e?null===(r=e.items)||void 0===r?void 0:r.map(function(e){return z(z({},e),{},{isActive:"href"in e&&e.href===t})}):void 0;return z(z({},e),{},{isActive:i||!!o&&(t===o||c)||!1,items:a})});return(0,y.tZ)(l.ie,{background:n,subTitle:c,title:"Progress",children:(0,y.tZ)(M,{children:a.map(function(e){var t=e.label,i=(0,r.Z)(e,E);return Y(i)?(0,y.tZ)(C,z(z({background:n},i),{},{children:t}),t):(0,y.tZ)(_,z(z({background:n},i),{},{children:t}),t)})})})},Y=function(e){return"href"in e}},87312:function(e,t,n){n.d(t,{SummaryList:function(){return c},SummaryListItem:function(){return a},SummaryListItemDescription:function(){return l},SummaryListItemTerm:function(){return o}});var r=n(84007),i=n(87800);function o(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dt",fontWeight:"bold",width:["100%","30%"],flexShrink:0,minWidth:"200px",fontSize:"sm",color:"text",children:t})}function l(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dd",flexGrow:1,fontSize:"sm",color:"text",children:t})}function c(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dl",width:"100%",borderTop:!0,borderColor:"muted",flexDirection:"column",children:t})}function a(e){var t=e.children;return(0,i.tZ)(r.Flex,{borderBottom:!0,borderColor:"muted",flexDirection:["column","row"],gap:.5,paddingY:.75,children:t})}},20329:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(87312),r()},11410:function(e,t,n){n.d(t,{i:function(){return c}});var r=n(10043),i=n(53169),o=n(56273),l=n(87800);function c(e){var t=e.children;return(0,l.tZ)(i.Box,{borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,r.iv)({marginLeft:"calc(".concat((0,o.mapSpacing)(1)," - ").concat(o.tokens.borderWidth.xl/2,"px)")},"",""),children:t})}},39774:function(e,t,n){n.d(t,{VY:function(){return a},Zu:function(){return s},_c:function(){return f},ge:function(){return u},xL:function(){return c}});var r=n(27378),i=n(2345),o=n(20329),l=n(87800);function c(e){return(0,l.tZ)(o.SummaryList,{children:e.children})}function a(e){var t=e.label,n=e.value;return(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n})]})}function s(e){var t=e.label,n=e.address,i=e.suburb,c=e.state,a=e.postcode;return(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n&&i&&c&&a?(0,l.BX)(r.Fragment,{children:[n,",",(0,l.tZ)("br",{}),i," ",c," ",a]}):null})]})}var d="d MMMM yyyy";function u(e){var t=e.label,n=e.value;return(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n&&(0,l.tZ)(r.Fragment,{children:(0,i.Z)(new Date(n),d)})})]})}function f(e){var t=e.fromLabel,n=e.fromValue,r=e.toLabel,c=e.toValue;return(0,l.BX)(l.HY,{children:[(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n&&(0,i.Z)(new Date(n),d)})]}),(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:r}),(0,l.tZ)(o.SummaryListItemDescription,{children:c&&(0,i.Z)(new Date(c),d)})]})]})}},4041:function(e,t,n){n.d(t,{D:function(){return a}});var r=n(50456),i=n(94303),o=n(68944),l=n(39402),c=n(87800);function a(e){var t=e.titleRef,n=e.formTitle,a=e.stepTitle,s=e.introduction,d=e.callToAction,u=e.hideRequiredFieldsMessage;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(i.H1,{ref:t,tabIndex:-1,focusRingFor:"keyboard","aria-label":"".concat(n," form, ").concat(a),children:[(0,c.tZ)(o.Text,{display:"block",fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:n}),a]}),s?(0,c.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,!u&&(0,c.tZ)(l.z,{}),d]})}}}]);