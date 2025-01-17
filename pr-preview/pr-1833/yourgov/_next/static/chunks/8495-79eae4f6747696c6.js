"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8495],{52747:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(77433),r()},98216:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(78525),r()},66881:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(4776),r()},59595:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(63087),r()},77433:function(e,t,n){n.d(t,{DatePicker:function(){return y}});var r=n(90849),i=n(11246),o=n(44285),l=n(90089),a=n(27378),c=n(8464),s=n(17625),d=n(395),u=n(52385),f=n(33233),p=n(23442),m=n(87800),b=["allowedDateFormats","dateFormat","initialMonth","inputRef","invalid","maxDate","maxWidth","minDate","onBlur","onChange","onInputChange","value","yearRange"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v={name:"1coh6b9",styles:"min-height:200px"},y=function(e){var t=e.allowedDateFormats,n=void 0===t?d.lL:t,r=e.dateFormat,h=void 0===r?"dd/MM/yyyy":r,y=e.initialMonth,x=e.inputRef,Z=e.invalid,O=void 0!==Z&&Z,k=e.maxDate,j=e.maxWidth,w=e.minDate,S=e.onBlur,B=e.onChange,T=e.onInputChange,P=e.value,D=e.yearRange,C=(0,l.Z)(e,b),X=(0,a.useMemo)(function(){return Array.from(new Set([h].concat((0,o.Z)(n.filter(function(e){return d.lL.includes(e)})))))},[h,n]),F=(0,a.useRef)(null),L=(0,a.useState)(!1),R=L[0],I=L[1],_=(0,c.useTernaryState)(!1),M=(0,i.Z)(_,3),E=M[0],A=M[1],z=M[2],W=E?z:A,Y=(0,s.S)(),H=(0,a.useCallback)(function(e,t,n){n.disabled||(q((0,d.p6)(t,h)),B(t),z())},[B,z,h]),N=(0,a.useState)((0,d.JF)(P,h)),G=N[0],q=N[1];(0,a.useEffect)(function(){q((0,d.JF)(P,h))},[h,P]);var U=(0,a.useCallback)(function(){E&&z()},[E,z]);(0,c.O8)([Y.popoverRef,F],U),(0,a.useEffect)(function(){var e=function(e){E&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),z())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[E,z]);var J=(0,a.useMemo)(function(){if(w||k)return[w?{before:w}:void 0,k?{after:k}:void 0].filter(function(e){return!!e})},[w,k]),K="string"==typeof P?(0,d.Zy)(P):P,V=(0,d.OH)(K,y,D),Q=(0,a.useMemo)(function(){return Y.getPopoverProps()},[Y]),$=(0,a.useMemo)(function(){return{defaultMonth:V,disabled:J,initialFocus:!0,numberOfMonths:1,onSelect:H,selected:K}},[V,J,H,K]);return(0,m.BX)("div",g(g({},Y.getReferenceProps()),{},{children:[(0,m.tZ)(p.W,g(g({},C),{},{buttonAriaLabel:(0,d.hY)({allowedDateFormats:X,value:G}),buttonOnClick:function(){W(),I(!0)},buttonRef:F,dateFormat:h,invalid:{field:O,input:O},isCalendarOpen:E,maxWidth:void 0===j?"md":j,onBlur:function(e){var t=e.target.value,n=(0,d.sG)(t,X),r=(0,d.cD)(n,w,k);!t||r?B(r):null==T||T(t),null==S||S(e)},onChange:function(e){q(e.target.value)},ref:x,secondaryLabelDate:w||k,value:G})),(0,m.tZ)(f.g,{yearRange:D,children:R?E&&(0,m.tZ)(s.J,g(g({},Q),{},{children:(0,m.tZ)(u.Gv,g({},$))})):(0,m.tZ)(s.J,g(g({},Q),{},{css:v,visibility:E?"visible":"hidden",children:E&&(0,m.tZ)(u.Gv,g({},$))}))})]}))};n(81930)},37874:function(e,t,n){n.d(t,{G:function(){return o}});var r=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=r.length-1;function o(e){var t,n,o=Number(e);if(isNaN(o))return"Unknown";var l=o<0;l&&(o=-o),n=Math.min(Math.max(Math.floor(Math.log(o)/Math.log(1e3)),0),i);var a=o/Math.pow(1e3,n),c=Math.pow(10,n>0?2:0);return 1e3==(t=Math.round(a*c)/c)&&n<i&&(t=1,n++),l&&(t=-t),"".concat(t," ").concat(r[n])}},78525:function(e,t,n){n.d(t,{FileUpload:function(){return U}});var r=n(10043),i=n(90849),o=n(44285),l=n(90089),a=n(27378),c=n(91165),s=n(34456),d=n(58229),u=n(8464),f=n(13306),p=n(48499),m=n(18613),b=n(89236),h=n(96778),g=n(92288),v=n(48050),y=n(81195),x=n(19631),Z=n(77797),O=n(35114),k=n(87800),j="4.5rem",w=function(e){var t=e.src;return t?(0,k.tZ)(v.Box,{css:(0,r.iv)({borderTopLeftRadius:u.tokens.borderRadius,borderBottomLeftRadius:u.tokens.borderRadius,backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",width:j},"",""),display:{xs:"none",md:"block"},flexShrink:0}):(0,k.tZ)(x.Flex,{alignItems:"center",css:(0,r.iv)({borderTopLeftRadius:u.tokens.borderRadius,borderBottomLeftRadius:u.tokens.borderRadius,width:j},"",""),display:{xs:"none",md:"flex"},flexShrink:0,justifyContent:"center",children:(0,k.tZ)(O.a,{color:"muted",size:"md"})})},S=n(55737),B=n(37874);function T(e){return(0,B.G)(e)}var P={"application/msword":{extensions:[".doc"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{extensions:[".docx"]},"application/pdf":{extensions:[".pdf"]},"application/rtf":{extensions:[".rtf"]},"application/vnd.ms-excel":{extensions:[".xls"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{extensions:[".xlsx"]},"application/vnd.ms-outlook":{extensions:[".msg"]},"application/zip":{extensions:[".zip"]},"application/xml":{extensions:[".xml"]},"audio/*":{extensions:[],label:"Any audio file"},"audio/mpeg":{extensions:[".mp3"]},"audio/wav":{extensions:[".wav"]},"image/*":{extensions:[],label:"Any image file"},"image/gif":{extensions:[".gif"]},"image/heic":{extensions:[".heic"]},"image/jpg":{extensions:[".jpeg",".jpg"]},"image/jpeg":{extensions:[".jpeg",".jpg"]},"image/png":{extensions:[".png"]},"image/svg+xml":{extensions:[".svg"]},"image/tiff":{extensions:[".tif",".tiff"]},"image/webp":{extensions:[".webp"]},"text/*":{extensions:[],label:"Any text file"},"text/csv":{extensions:[".csv"]},"text/plain":{extensions:[".txt"]},"text/rtf":{extensions:[".rtf"]},"text/xml":{extensions:[".xml"]},"video/*":{extensions:[],label:"Any video file"},"video/mp4":{extensions:[".mp4"]},"video/mpeg":{extensions:[".mpeg"]}};function D(e){return e.replace(/^\./,"")}var C={code:S.jK.TooManyFiles,message:"Too many files"};function X(e){return{file:e,errors:[C]}}var F={name:"4zleql",styles:"display:block"},L={name:"1bmnxg7",styles:"white-space:nowrap"},R=function(e){var t=e.file,n=e.hideThumbnails,r=e.onRemove,i=t.name,o=t.size,l=t.href,a=t.thumbnailSrc;return(0,k.BX)(x.Flex,{as:"li",background:"success",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,k.BX)(x.Flex,{children:[!n&&(0,k.tZ)(w,{src:a}),(0,k.BX)(x.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:[(0,k.tZ)(v.Box,{flexShrink:0,children:(0,k.tZ)(p.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:F,size:"md"})}),l?(0,k.tZ)(g.Text,{breakWords:!0,paddingY:1.5,children:(0,k.BX)(Z.TextLink,{href:l,rel:"noopener noreferrer",target:"_blank",children:[i,o?" (".concat(T(o),")"):null]})}):(0,k.BX)(g.Text,{breakWords:!0,paddingY:1.5,children:[i,o?(0,k.BX)(g.Text,{css:L,children:[" ","(",T(o),")"]}):null]})]})]}),(0,k.tZ)(x.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:(0,k.tZ)(d.Button,{"aria-label":"Remove file: ".concat(i),iconBefore:p.Tw,onClick:r,size:"sm",variant:"text",children:"Remove"})})]})},I=function(e){var t=e.files,n=e.hideThumbnails,r=e.onRemove;return t.length?(0,k.tZ)(h.Stack,{"aria-label":"Existing files",as:"ul",gap:.5,children:t.map(function(e,t){return(0,k.tZ)(R,{file:e,hideThumbnails:n,onRemove:function(){return null==r?void 0:r(e)}},t)})}):null},_=n(88772),M={name:"4zleql",styles:"display:block"},E={name:"1bmnxg7",styles:"white-space:nowrap"},A=function(e){var t=e.file,n=e.hideThumbnails,r=e.onRemove,i=t.name,o=t.size,l=t.status,c=void 0===l?"none":l,s=t.href,u=(0,a.useMemo)(function(){return t.type.match(/image\/(png|jpg|jpeg|webp|heic)/i)?URL.createObjectURL(t):void 0},[t]);return(0,k.BX)(x.Flex,{as:"li",background:"success"===c?c:"shade",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,k.BX)(x.Flex,{children:[!n&&(0,k.tZ)(w,{src:u}),(0,k.BX)(x.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:["success"==c&&(0,k.tZ)(v.Box,{flexShrink:0,children:(0,k.tZ)(p.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:M,size:"md"})}),s?(0,k.tZ)(g.Text,{breakWords:!0,paddingY:1.5,children:(0,k.BX)(Z.TextLink,{href:s,rel:"noopener noreferrer",target:"_blank",children:[i,o?" (".concat(T(o),")"):null]})}):(0,k.BX)(g.Text,{breakWords:!0,paddingY:1.5,children:[i,o?(0,k.BX)(g.Text,{css:E,children:[" ","(",T(o),")"]}):null]})]})]}),(0,k.tZ)(x.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:"uploading"===c?(0,k.tZ)(v.Box,{paddingY:1,children:(0,k.tZ)(_.xg,{label:"Uploading"})}):(0,k.tZ)(d.Button,{"aria-label":"Remove file: ".concat(i),iconBefore:p.Tw,onClick:r,size:"sm",variant:"text",children:"Remove"})})]})},z=function(e){var t=e.files,n=e.hideThumbnails,r=e.onRemove;return t.length?(0,k.tZ)(h.Stack,{"aria-label":"Selected files",as:"ul",gap:.5,children:t.map(function(e,t){return(0,k.tZ)(A,{file:e,hideThumbnails:n,onRemove:function(){return r(t)}},t)})}):null},W=["accept","buttonRef","disabled","existingFiles","hideOptionalLabel","hideThumbnails","hint","id","invalid","label","maxFiles","maxSize","message","multiple","onChange","onRemoveExistingFile","required","value"],Y=["role","tabIndex","color"],H=["ref","style"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var q={name:"bjn8wh",styles:"position:relative"},U=(0,a.forwardRef)(function(e,t){var n,x,Z,O,j,w=e.accept,B=e.buttonRef,F=e.disabled,L=e.existingFiles,R=void 0===L?[]:L,_=e.hideOptionalLabel,M=e.hideThumbnails,E=void 0!==M&&M,A=e.hint,N=e.id,U=e.invalid,J=e.label,K=e.maxFiles,V=e.maxSize,Q=e.message,$=e.multiple,ee=e.onChange,et=e.onRemoveExistingFile,en=e.required,er=e.value,ei=void 0===er?[]:er,eo=(0,l.Z)(e,W),el=(0,a.useState)(""),ea=el[0],ec=el[1],es=$?"files":"file",ed=V&&!isNaN(V)?1e3*V:0,eu=T(ed),ef=K;void 0!==K&&K<1&&(ef=void 0,console.warn("FileUpload: maxFiles cannot be less than 1. The property is being ignored."));var ep=(0,a.useState)(void 0),em=ep[0],eb=ep[1],eh=(0,a.useState)(void 0),eg=eh[0],ev=eh[1],ey=function(e){var t;eZ(),null==ee||ee(((t=(0,o.Z)(ei)).splice(e,1),t)),ec(ei[e].name+" removed")},ex=function(e){null==et||et(e),ec(e.name+" removed")};function eZ(){eb(void 0),ev(void 0)}var eO=(0,a.useMemo)(function(){if(w)return Object.fromEntries(w.map(function(e){return"string"==typeof e?[e,P[e].extensions]:[e.mimeType,e.extensions]}))},[w]),ek=(0,c.uI)({accept:eO,maxSize:ed||void 0,multiple:$,onDropAccepted:function(e){if(eZ(),$){var t,n=Object.values([].concat((0,o.Z)(ei),(0,o.Z)(e)).reduce(function(e,t){return G(G({},e),{},(0,i.Z)({},"".concat(t.name,"-").concat(t.size,"-").concat(t.type),t))},{}));ef&&n.length>ef?(eb(function(){return n.slice(ef).map(X)}),t=n.slice(0,ef)):t=n}else t=e;ec(t.map(function(e){return e.name}).join(", ")+" added"),null==ee||ee(t)},disabled:F,noClick:!0,noKeyboard:!0}),ej=ek.getRootProps,ew=ek.getInputProps,eS=ek.isDragActive,eB=ek.open,eT=ek.fileRejections;(0,a.useEffect)(function(){eT.length>0&&ev(eT)},[eT]);var eP=function(e){if(null!=e&&e.length){var t=[];return e.forEach(function(e){if("string"==typeof e){var n=P[e];"label"in n?t.push(n.label):n.extensions.forEach(function(e){t.push(D(e))})}else null!=e&&e.label?t.push(e.label):e.extensions.forEach(function(e){t.push(D(e))})}),t.filter(function(e,t,n){return n.indexOf(e)===t}).join(", ")}}(w),eD=(x=(n={disabled:F,invalid:U,isDragActive:eS}).disabled,Z=n.invalid,O=n.isDragActive,G(G(G({borderWidth:u.tokens.borderWidth.lg,borderStyle:"dashed",borderColor:u._X.border,backgroundColor:u._X.backgroundBody},Z&&{backgroundColor:u._X.systemErrorMuted,borderColor:u._X.systemError}),x&&{cursor:"not-allowed",borderColor:u._X.borderMuted,backgroundColor:u._X.backgroundShade,color:u._X.foregroundMuted}),O&&{borderColor:u._X.foregroundAction,backgroundColor:u._X.backgroundShade})),eC=ej(),eX=(eC.role,eC.tabIndex,eC.color,(0,l.Z)(eC,Y)),eF=ew(),eL=eF.ref,eR=(eF.style,(0,l.Z)(eF,H)),eI=0===(j=[].concat((0,o.Z)(ei),(0,o.Z)(R))).length?"":"".concat(j.length," ").concat(1===j.length?"file":"files"," selected"),e_=!!(ei.length||(null==R?void 0:R.length)),eM=eg&&(null==eg?void 0:eg.length)>0||em&&(null==em?void 0:em.length)>0,eE=eg&&(null==eg?void 0:eg.length)>1||em&&(null==em?void 0:em.length)>1,eA=(0,u.Me)(N),ez=V?"".concat(eA,"-file-size-desc"):"",eW=eO?"".concat(eA,"-accepted-files-desc"):"",eY=(0,y.C)({hideOptionalLabel:_,required:en}),eH="Select ".concat(es),eN=[eH,J,eY,en&&"required",U&&"invalid",eI].filter(Boolean).join(", ");return(0,k.tZ)(f.gN,{hideOptionalLabel:_,hint:A,id:N,invalid:U,label:J,message:Q,required:en,children:function(e){var n=[e["aria-describedby"],ez,eW].filter(Boolean).join(" ");return(0,k.BX)(h.Stack,{gap:1.5,children:[(0,k.tZ)("div",{css:s.visuallyHiddenStyles,role:"status",children:ea}),(0,k.tZ)(v.Box,G(G({},eX),{},{children:(0,k.BX)(h.Stack,{alignItems:"center",border:!0,css:eD,gap:1,padding:1.5,rounded:!0,children:[(0,k.tZ)(p.UploadIcon,{color:"muted",size:"lg"}),(0,k.tZ)("input",G(G(G({},eR),eo),{},{"aria-hidden":!0,css:s.visuallyHiddenStyles,ref:(0,u.lq)([t,eL])})),(0,k.BX)(h.Stack,{alignItems:"center",textAlign:"center",children:[(0,k.BX)("span",{css:q,children:[(0,k.tZ)(g.Text,{color:"muted",css:(0,r.iv)({visibility:eS?"hidden":void 0},"",""),fontWeight:"bold",children:$?"Drag and drop files here or select files to upload.":"Drag and drop a file or select a file to upload."}),(0,k.BX)(g.Text,{color:"action",css:(0,r.iv)({display:eS?"block":"none",left:0,position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},"",""),fontWeight:"bold",children:["Drop ",es," here…"]})]}),V?(0,k.BX)(g.Text,{color:"muted",id:ez,children:[$?"Each file":"File"," cannot exceed"," ",eu,"."]}):null,eO?(0,k.BX)(g.Text,{color:"muted",id:eW,children:["Files accepted: ",eP,"."]}):null]}),(0,k.tZ)(d.Button,{"aria-describedby":n||void 0,"aria-label":eN,disabled:F,focusRingFor:"all",id:e.id,onClick:eB,ref:B,type:"button",variant:"secondary",children:eH})]})})),eM&&(0,k.tZ)(v.Box,{breakWords:!0,children:(0,k.BX)(b.SectionAlert,{focusOnMount:!0,onClose:eZ,title:"The following ".concat(eE?"files":"file"," could not be selected"),tone:"error",children:[(0,k.tZ)(g.Text,{as:"p",children:eE?"These files were unable to be accepted for the following reasons:":"This file was unable to be accepted for the following reason:"}),(0,k.tZ)(m.UnorderedList,{children:[].concat((0,o.Z)(null!=eg?eg:[]),(0,o.Z)(null!=em?em:[])).map(function(e){return(0,k.BX)(m.ListItem,{children:[(0,k.tZ)(g.Text,{color:"error",fontWeight:"bold",children:e.file.name})," ",(0,k.BX)(g.Text,{children:["(",T(e.file.size),")"," - ",function(e,t){if(null!=e&&e.length){var n=Array.from(new Set(e.map(function(e){return e.code})));return n.includes(S.jK.FileInvalidType)?"Invalid file type":n.includes(S.jK.FileTooLarge)?"File is over ".concat(t):C.message}}(e.errors,eu)]})]},e.file.name)})})]})}),e_&&(0,k.BX)(h.Stack,{gap:.5,children:[(0,k.tZ)(g.Text,{color:"muted",children:eI}),(0,k.tZ)(I,{files:R,hideThumbnails:E,onRemove:ex}),(0,k.tZ)(z,{files:ei,hideThumbnails:E,onRemove:ey})]})]})}})})},4776:function(e,t,n){n.d(t,{ProgressIndicator:function(){return W}});var r=n(90089),i=n(90849),o=n(8464),l=n(46275),a=n(77797),c=n(10043),s=n(48050),d=n(19631),u=n(96778),f=n(92288),p=n(48499),m={body:o._X.backgroundShade,bodyAlt:o._X.backgroundShadeAlt},b="data-agds-progress-indicator-item-timeline-action",h="data-agds-progress-indicator-item-ring",g="data-agds-progress-indicator-item-text-container";[].concat(["blocked","doing","started"],["done","error","saved","todo"]);var v={blocked:{label:"Cannot start yet",icon:p.Zs,iconColor:"border"},doing:{label:"In progress",icon:p.NB,iconColor:"border"},started:{label:"In progress",icon:p.NB,iconColor:"border"},todo:{label:"Not started",icon:p.Q2,iconColor:"border"},done:{label:"Completed",icon:p.SuccessFilledIcon,iconColor:"success"},saved:{label:"Saved",icon:p.tm,iconColor:"success"},error:{label:"Error",icon:p.zM,iconColor:"error"}},y=n(87800),x=["as","background","children","isActive","items","status"],Z=["label","isActive"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j={isActive:!1,label:""},w={name:"bjn8wh",styles:"position:relative"},S=function(e){var t,n=e.as,l=e.background,a=void 0===l?"body":l,O=e.children,S=e.isActive,P=e.items,D=e.status,C=(0,r.Z)(e,x),X=v[D].label,F=S&&(null==P?void 0:P.find(function(e){return e.isActive}))||j,L=F.label,R=(F.isActive,(0,r.Z)(F,Z));return(0,y.tZ)(s.Box,{as:"li",background:a,css:(0,c.iv)({"&:first-of-type":(0,i.Z)({},"[".concat(b,"]:first-of-type"),{opacity:0}),"&:last-of-type":(t={},(0,i.Z)(t,"[".concat(b,"]:last-of-type"),{opacity:0}),(0,i.Z)(t,"[".concat(g,"]"),{borderBottomWidth:0}),t)},"",""),children:(0,y.BX)(s.Box,{as:"span",columnGap:.5,css:(0,c.iv)((0,i.Z)({display:"grid",gridTemplateColumns:"min-content 1fr",textDecoration:"none",width:"100%"},"[".concat(h,"]::before"),{backgroundColor:s.Vu[a]}),"",""),focusRingFor:"keyboard",children:[(0,y.tZ)(T,{isActive:S,status:D}),(0,y.BX)(u.Stack,k(k(k(k({},(0,i.Z)({},g,"")),{},{"aria-current":S||void 0,as:n,css:(0,c.iv)({textDecoration:"none","&:hover":{backgroundColor:m[a]},"&:hover span:not(:last-of-type)":k({},o.lB.underline)},"",""),flexGrow:1,fontFamily:"body",gap:.25,justifyContent:"center",paddingX:.5,paddingY:1},!P&&{borderBottom:!0,borderColor:"muted"}),C),{},{children:[(0,y.tZ)(f.Text,k(k({fontWeight:S?"bold":"normal"},(0,i.Z)({},"data-agds-progress-indicator-item-text","")),{},{children:O})),(0,y.tZ)(f.Text,{color:"muted",fontSize:"xs",lineHeight:"nospace",children:X})]})),L&&(0,y.BX)(y.HY,{children:[(0,y.tZ)(B,{}),(0,y.tZ)(s.Box,{as:"ul",children:(0,y.tZ)(s.Box,{as:"li",css:w,children:(0,y.BX)(d.Flex,k(k({},R),{},{alignItems:"center","aria-current":!0,as:n,borderBottom:!0,borderColor:"muted",color:"text",css:(0,c.iv)({textDecoration:"none","&:hover":k(k({backgroundColor:m[a]},o.lB.underline),{},{":not(:focus-visible)::before":{backgroundColor:m[a],content:'""',height:(0,o.mapSpacing)(.5),left:0,position:"absolute",top:"-".concat((0,o.mapSpacing)(.5)),width:"100%"}})},"",""),gap:.5,padding:.5,paddingBottom:1,children:[(0,y.tZ)(p.ti,{color:"selected"}),(0,y.tZ)(f.Text,{color:"inherit",fontSize:"xs",fontWeight:"bold",children:L})]}))})})]})]})})},B=function(){return(0,y.tZ)("span",k({css:(0,c.iv)({backgroundColor:o._X.border,flex:1,justifySelf:"center",width:o.tokens.borderWidth.md,"@media (forced-colors: active)":{backgroundColor:"GrayText"}},"","")},(0,i.Z)({},b,"")))},T=function(e){var t=e.status,n=e.isActive,r=v[t],l=r.icon,a=r.iconColor,s=o.tokens.borderWidth.md,u=s+3,f=n&&"border"===a?"selected":a;return(0,y.BX)(d.Flex,{alignItems:"center",as:"span",flexDirection:"column",children:[(0,y.tZ)(B,{}),(0,y.tZ)("span",k(k({},(0,i.Z)({},h,"")),{},{css:(0,c.iv)(k({position:"relative",paddingLeft:u,paddingRight:u},n&&{"::before":{position:"absolute",top:-u,bottom:-u,left:0,right:0,borderRadius:"100%",content:'""',border:"".concat(s,"px solid ").concat(o._X.selected)}}),"",""),children:(0,y.tZ)(l,{color:f,css:(0,c.iv)({position:"relative",display:"block",margin:-1},"",""),size:"md"})})),(0,y.tZ)(B,{})]})},P=["children","isActive","status"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var X=function(e){var t=e.children,n=e.isActive,i=e.status,o=(0,r.Z)(e,P);return(0,y.tZ)(S,C(C({as:a.TextLink,isActive:!!n,status:i},o),{},{children:t}))},F=n(58229),L=["children"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _=function(e){var t=e.children,n=(0,r.Z)(e,L);return(0,y.tZ)(S,I(I({as:F.Yd},n),{},{children:t}))};function M(e){var t=e.children;return(0,y.tZ)(s.Box,{as:"ul",borderBottom:!0,borderTop:!0,css:(0,c.iv)((0,i.Z)({},o.tokens.mediaQuery.max.sm,{borderTopWidth:0}),"",""),children:t})}var E=["label"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var W=function(e){var t=e.activePath,n=e.background,i=e.items,o=e.hideSubtitle,a=void 0!==o&&o?void 0:"".concat(i.filter(function(e){return"done"===e.status}).length," of ").concat(i.length," steps completed"),c=i.some(function(e){return e.isActive})?i:i.map(function(e){var n,r,i="doing"===e.status,o="href"in e?e.href:e.label,l="".concat(o).concat(null!=o&&o.endsWith("/")?"":"/"),a=!!(null!=t&&null!==(n=t.split(l)[1])&&void 0!==n&&n.length),c="items"in e?null===(r=e.items)||void 0===r?void 0:r.map(function(e){return z(z({},e),{},{isActive:"href"in e&&e.href===t})}):void 0;return z(z({},e),{},{isActive:i||!!o&&(t===o||a)||!1,items:c})});return(0,y.tZ)(l.ie,{background:n,subTitle:a,title:"Progress",children:(0,y.tZ)(M,{children:c.map(function(e){var t=e.label,i=(0,r.Z)(e,E);return Y(i)?(0,y.tZ)(X,z(z({background:n},i),{},{children:t}),t):(0,y.tZ)(_,z(z({background:n},i),{},{children:t}),t)})})})},Y=function(e){return"href"in e}},96878:function(e,t,n){n.d(t,{SummaryList:function(){return a},SummaryListItem:function(){return c},SummaryListItemDescription:function(){return l},SummaryListItemTerm:function(){return o}});var r=n(19631),i=n(87800);function o(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dt",color:"text",flexShrink:0,fontSize:"sm",fontWeight:"bold",minWidth:"200px",width:["100%","30%"],children:t})}function l(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dd",color:"text",flexGrow:1,fontSize:"sm",children:t})}function a(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dl",borderColor:"muted",borderTop:!0,flexDirection:"column",width:"100%",children:t})}function c(e){var t=e.children;return(0,i.tZ)(r.Flex,{borderBottom:!0,borderColor:"muted",flexDirection:["column","row"],gap:.5,paddingY:.75,children:t})}},41794:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(96878),r()},67637:function(e,t,n){n.d(t,{VY:function(){return c},Zu:function(){return s},_c:function(){return f},ge:function(){return u},xL:function(){return a}});var r=n(27378),i=n(23982),o=n(41794),l=n(87800);function a(e){return(0,l.tZ)(o.SummaryList,{children:e.children})}function c(e){var t=e.label,n=e.value;return(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n})]})}function s(e){var t=e.label,n=e.address,i=e.suburb,a=e.state,c=e.postcode;return(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n&&i&&a&&c?(0,l.BX)(r.Fragment,{children:[n,",",(0,l.tZ)("br",{}),i," ",a," ",c]}):null})]})}var d="d MMMM yyyy";function u(e){var t=e.label,n=e.value;return(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n&&(0,l.tZ)(r.Fragment,{children:(0,i.Z)(new Date(n),d)})})]})}function f(e){var t=e.fromLabel,n=e.fromValue,r=e.toLabel,a=e.toValue;return(0,l.BX)(l.HY,{children:[(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:t}),(0,l.tZ)(o.SummaryListItemDescription,{children:n&&(0,i.Z)(new Date(n),d)})]}),(0,l.BX)(o.SummaryListItem,{children:[(0,l.tZ)(o.SummaryListItemTerm,{children:r}),(0,l.tZ)(o.SummaryListItemDescription,{children:a&&(0,i.Z)(new Date(a),d)})]})]})}},27393:function(e,t,n){n.d(t,{D:function(){return c}});var r=n(58607),i=n(13497),o=n(79628),l=n(82973),a=n(87800);function c(e){var t=e.titleRef,n=e.formTitle,c=e.stepTitle,s=e.introduction,d=e.callToAction,u=e.hideRequiredFieldsMessage;return(0,a.BX)(r.Stack,{gap:1.5,children:[(0,a.BX)(i.H1,{"aria-label":"".concat(n," form, ").concat(c),focusRingFor:"keyboard",ref:t,tabIndex:-1,children:[(0,a.tZ)(o.Text,{color:"muted",display:"block",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:n}),c]}),s?(0,a.tZ)(o.Text,{as:"p",color:"muted",fontSize:"md",children:s}):null,!u&&(0,a.tZ)(l.z,{}),d]})}}}]);