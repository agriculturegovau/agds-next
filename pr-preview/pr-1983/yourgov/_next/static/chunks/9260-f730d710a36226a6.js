"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9260],{98216:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(78525),r()},66881:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(4776),r()},59595:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(63087),r()},37874:function(e,t,n){n.d(t,{G:function(){return i}});var r=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],o=r.length-1;function i(e){var t,n,i=Number(e);if(isNaN(i))return"Unknown";var l=i<0;l&&(i=-i),n=Math.min(Math.max(Math.floor(Math.log(i)/Math.log(1e3)),0),o);var c=i/Math.pow(1e3,n),a=Math.pow(10,n>0?2:0);return 1e3==(t=Math.round(c*a)/a)&&n<o&&(t=1,n++),l&&(t=-t),"".concat(t," ").concat(r[n])}},78525:function(e,t,n){n.d(t,{FileUpload:function(){return K}});var r=n(10043),o=n(90849),i=n(44285),l=n(90089),c=n(27378),a=n(91165),s=n(34456),d=n(58229),u=n(8464),f=n(13306),p=n(19282),b=n(18613),m=n(89236),h=n(96778),g=n(92288),v=n(48050),x=n(81195),y=n(19631),Z=n(77797),O=n(35114),j=n(87800),k="4.5rem",w=function(e){var t=e.src;return t?(0,j.tZ)(v.Box,{css:(0,r.iv)({borderTopLeftRadius:u.tokens.borderRadius,borderBottomLeftRadius:u.tokens.borderRadius,backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",width:k},"",""),display:{xs:"none",md:"block"},flexShrink:0}):(0,j.tZ)(y.Flex,{alignItems:"center",css:(0,r.iv)({borderTopLeftRadius:u.tokens.borderRadius,borderBottomLeftRadius:u.tokens.borderRadius,width:k},"",""),display:{xs:"none",md:"flex"},flexShrink:0,justifyContent:"center",children:(0,j.tZ)(O.a,{color:"muted",size:"md"})})},S=n(55737),B=n(37874);function P(e){return(0,B.G)(e)}var T={"application/msword":{extensions:[".doc"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{extensions:[".docx"]},"application/pdf":{extensions:[".pdf"]},"application/rtf":{extensions:[".rtf"]},"application/vnd.ms-excel":{extensions:[".xls"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{extensions:[".xlsx"]},"application/vnd.ms-outlook":{extensions:[".msg"]},"application/zip":{extensions:[".zip"]},"application/xml":{extensions:[".xml"]},"audio/*":{extensions:[],label:"Any audio file"},"audio/mpeg":{extensions:[".mp3"]},"audio/wav":{extensions:[".wav"]},"image/*":{extensions:[],label:"Any image file"},"image/gif":{extensions:[".gif"]},"image/heic":{extensions:[".heic"]},"image/jpg":{extensions:[".jpeg",".jpg"]},"image/jpeg":{extensions:[".jpeg",".jpg"]},"image/png":{extensions:[".png"]},"image/svg+xml":{extensions:[".svg"]},"image/tiff":{extensions:[".tif",".tiff"]},"image/webp":{extensions:[".webp"]},"text/*":{extensions:[],label:"Any text file"},"text/csv":{extensions:[".csv"]},"text/plain":{extensions:[".txt"]},"text/rtf":{extensions:[".rtf"]},"text/xml":{extensions:[".xml"]},"video/*":{extensions:[],label:"Any video file"},"video/mp4":{extensions:[".mp4"]},"video/mpeg":{extensions:[".mpeg"]}};function D(e){return e.replace(/^\./,"")}var C={code:S.jK.TooManyFiles,message:"Too many files"};function I(e){return{file:e,errors:[C]}}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var F={name:"4zleql",styles:"display:block"},R={name:"1bmnxg7",styles:"white-space:nowrap"},X=function(e){var t=e.file,n=e.hideThumbnails,i=e.onRemove,l=t.download,c=t.href,a=t.name,s=t.size,f=t.thumbnailSrc;return(0,j.BX)(y.Flex,{as:"li",background:"success",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,j.BX)(y.Flex,{children:[!n&&(0,j.tZ)(w,{src:f}),(0,j.BX)(y.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:[(0,j.tZ)(v.Box,{flexShrink:0,children:(0,j.tZ)(p.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:F,size:"md"})}),c?(0,j.tZ)(g.Text,{breakWords:!0,paddingY:1.5,children:(0,j.BX)(Z.TextLink,{css:(0,r.iv)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u.S0.hideHref),"",""),download:l,href:c,rel:"noopener noreferrer",target:"_blank",children:[a,s?" (".concat(P(s),")"):null]})}):(0,j.BX)(g.Text,{breakWords:!0,paddingY:1.5,children:[a,s?(0,j.BX)(g.Text,{css:R,children:[" ","(",P(s),")"]}):null]})]})]}),(0,j.tZ)(y.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:(0,j.tZ)(d.Button,{"aria-label":"Remove file: ".concat(a),iconBefore:p.Tw,onClick:i,size:"sm",variant:"text",children:"Remove"})})]})},A=function(e){var t=e.files,n=e.hideThumbnails,r=e.onRemove;return t.length?(0,j.tZ)(h.Stack,{"aria-label":"Existing files",as:"ul",gap:.5,children:t.map(function(e,t){return(0,j.tZ)(X,{file:e,hideThumbnails:n,onRemove:function(){return null==r?void 0:r(e)}},t)})}):null},z=n(88772),E={name:"4zleql",styles:"display:block"},M={name:"1bmnxg7",styles:"white-space:nowrap"},W=function(e){var t=e.file,n=e.hideThumbnails,r=e.onRemove,o=t.download,i=t.href,l=t.name,a=t.size,s=t.status,u=void 0===s?"none":s,f=(0,c.useMemo)(function(){return t.type.match(/image\/(png|jpg|jpeg|webp|heic)/i)?URL.createObjectURL(t):void 0},[t]);return(0,j.BX)(y.Flex,{as:"li",background:"success"===u?u:"shade",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,j.BX)(y.Flex,{children:[!n&&(0,j.tZ)(w,{src:f}),(0,j.BX)(y.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:["success"==u&&(0,j.tZ)(v.Box,{flexShrink:0,children:(0,j.tZ)(p.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:E,size:"md"})}),i?(0,j.tZ)(g.Text,{breakWords:!0,paddingY:1.5,children:(0,j.BX)(Z.TextLink,{download:o,href:i,rel:"noopener noreferrer",target:"_blank",children:[l,a?" (".concat(P(a),")"):null]})}):(0,j.BX)(g.Text,{breakWords:!0,paddingY:1.5,children:[l,a?(0,j.BX)(g.Text,{css:M,children:[" ","(",P(a),")"]}):null]})]})]}),(0,j.tZ)(y.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:"uploading"===u?(0,j.tZ)(v.Box,{paddingY:1,children:(0,j.tZ)(z.xg,{label:"Uploading"})}):(0,j.tZ)(d.Button,{"aria-label":"Remove file: ".concat(l),iconBefore:p.Tw,onClick:r,size:"sm",variant:"text",children:"Remove"})})]})},_=function(e){var t=e.files,n=e.hideThumbnails,r=e.onRemove;return t.length?(0,j.tZ)(h.Stack,{"aria-label":"Selected files",as:"ul",gap:.5,children:t.map(function(e,t){return(0,j.tZ)(W,{file:e,hideThumbnails:n,onRemove:function(){return r(t)}},t)})}):null},Y=["accept","buttonRef","disabled","existingFiles","hideOptionalLabel","hideThumbnails","hint","id","invalid","label","maxFiles","maxSize","message","multiple","onChange","onRemoveExistingFile","required","value"],H=["role","tabIndex","color"],N=["ref","style"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var G={name:"bjn8wh",styles:"position:relative"},K=(0,c.forwardRef)(function(e,t){var n,y,Z,O,k,w=e.accept,B=e.buttonRef,L=e.disabled,F=e.existingFiles,R=void 0===F?[]:F,X=e.hideOptionalLabel,z=e.hideThumbnails,E=void 0!==z&&z,M=e.hint,W=e.id,q=e.invalid,K=e.label,V=e.maxFiles,Q=e.maxSize,J=e.message,$=e.multiple,ee=e.onChange,et=e.onRemoveExistingFile,en=e.required,er=e.value,eo=void 0===er?[]:er,ei=(0,l.Z)(e,Y),el=(0,c.useState)(""),ec=el[0],ea=el[1],es=$?"files":"file",ed=Q&&!isNaN(Q)?1e3*Q:0,eu=P(ed),ef=V;void 0!==V&&V<1&&(ef=void 0,console.warn("FileUpload: maxFiles cannot be less than 1. The property is being ignored."));var ep=(0,c.useState)(void 0),eb=ep[0],em=ep[1],eh=(0,c.useState)(void 0),eg=eh[0],ev=eh[1],ex=function(e){var t;eZ(),null==ee||ee(((t=(0,i.Z)(eo)).splice(e,1),t)),ea(eo[e].name+" removed")},ey=function(e){null==et||et(e),ea(e.name+" removed")};function eZ(){em(void 0),ev(void 0)}var eO=(0,c.useMemo)(function(){if(w)return Object.fromEntries(w.map(function(e){return"string"==typeof e?[e,T[e].extensions]:[e.mimeType,e.extensions]}))},[w]),ej=(0,a.uI)({accept:eO,maxSize:ed||void 0,multiple:$,onDropAccepted:function(e){if(eZ(),$){var t,n=Object.values([].concat((0,i.Z)(eo),(0,i.Z)(e)).reduce(function(e,t){return U(U({},e),{},(0,o.Z)({},"".concat(t.name,"-").concat(t.size,"-").concat(t.type),t))},{}));ef&&n.length>ef?(em(function(){return n.slice(ef).map(I)}),t=n.slice(0,ef)):t=n}else t=e;ea(t.map(function(e){return e.name}).join(", ")+" added"),null==ee||ee(t)},disabled:L,noClick:!0,noKeyboard:!0}),ek=ej.getRootProps,ew=ej.getInputProps,eS=ej.isDragActive,eB=ej.open,eP=ej.fileRejections;(0,c.useEffect)(function(){eP.length>0&&ev(eP)},[eP]);var eT=function(e){if(null!=e&&e.length){var t=[];return e.forEach(function(e){if("string"==typeof e){var n=T[e];"label"in n?t.push(n.label):n.extensions.forEach(function(e){t.push(D(e))})}else null!=e&&e.label?t.push(e.label):e.extensions.forEach(function(e){t.push(D(e))})}),t.filter(function(e,t,n){return n.indexOf(e)===t}).join(", ")}}(w),eD=(y=(n={disabled:L,invalid:q,isDragActive:eS}).disabled,Z=n.invalid,O=n.isDragActive,U(U(U({borderWidth:u.tokens.borderWidth.lg,borderStyle:"dashed",borderColor:u.boxPalette.border,backgroundColor:u.boxPalette.backgroundBody},Z&&{backgroundColor:u.boxPalette.systemErrorMuted,borderColor:u.boxPalette.systemError}),y&&{cursor:"not-allowed",borderColor:u.boxPalette.borderMuted,backgroundColor:u.boxPalette.backgroundShade,color:u.boxPalette.foregroundMuted}),O&&{borderColor:u.boxPalette.foregroundAction,backgroundColor:u.boxPalette.backgroundShade})),eC=ek(),eI=(eC.role,eC.tabIndex,eC.color,(0,l.Z)(eC,H)),eL=ew(),eF=eL.ref,eR=(eL.style,(0,l.Z)(eL,N)),eX=0===(k=[].concat((0,i.Z)(eo),(0,i.Z)(R))).length?"":"".concat(k.length," ").concat(1===k.length?"file":"files"," selected"),eA=!!(eo.length||(null==R?void 0:R.length)),ez=eg&&(null==eg?void 0:eg.length)>0||eb&&(null==eb?void 0:eb.length)>0,eE=eg&&(null==eg?void 0:eg.length)>1||eb&&(null==eb?void 0:eb.length)>1,eM=(0,u.Me)(W),eW=Q?"".concat(eM,"-file-size-desc"):"",e_=eO?"".concat(eM,"-accepted-files-desc"):"",eY=(0,x.C)({hideOptionalLabel:X,required:en}),eH="Select ".concat(es),eN=[eH,K,eY,en&&"required",q&&"invalid",eX].filter(Boolean).join(", ");return(0,j.tZ)(f.gN,{hideOptionalLabel:X,hint:M,id:W,invalid:q,label:K,message:J,required:en,children:function(e){var n=[e["aria-describedby"],eW,e_].filter(Boolean).join(" ");return(0,j.BX)(h.Stack,{gap:1.5,children:[(0,j.tZ)("div",{css:s.visuallyHiddenStyles,role:"status",children:ec}),(0,j.tZ)(v.Box,U(U({},eI),{},{children:(0,j.BX)(h.Stack,{alignItems:"center",border:!0,css:eD,gap:1,padding:1.5,rounded:!0,children:[(0,j.tZ)(p.UploadIcon,{color:"muted",size:"lg"}),(0,j.tZ)("input",U(U(U({},eR),ei),{},{"aria-hidden":!0,css:s.visuallyHiddenStyles,ref:(0,u.lq)([t,eF])})),(0,j.BX)(h.Stack,{alignItems:"center",textAlign:"center",children:[(0,j.BX)("span",{css:G,children:[(0,j.tZ)(g.Text,{color:"muted",css:(0,r.iv)({visibility:eS?"hidden":void 0},"",""),fontWeight:"bold",children:$?"Drag and drop files here or select files to upload.":"Drag and drop a file or select a file to upload."}),(0,j.BX)(g.Text,{color:"action",css:(0,r.iv)({display:eS?"block":"none",left:0,position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},"",""),fontWeight:"bold",children:["Drop ",es," here…"]})]}),Q?(0,j.BX)(g.Text,{color:"muted",id:eW,children:[$?"Each file":"File"," cannot exceed"," ",eu,"."]}):null,eO?(0,j.BX)(g.Text,{color:"muted",id:e_,children:["Files accepted: ",eT,"."]}):null]}),(0,j.tZ)(d.Button,{"aria-describedby":n||void 0,"aria-label":eN,disabled:L,focusRingFor:"all",id:e.id,onClick:eB,ref:B,type:"button",variant:"secondary",children:eH})]})})),ez&&(0,j.tZ)(v.Box,{breakWords:!0,children:(0,j.BX)(m.SectionAlert,{focusOnMount:!0,onClose:eZ,title:"The following ".concat(eE?"files":"file"," could not be selected"),tone:"error",children:[(0,j.tZ)(g.Text,{as:"p",children:eE?"These files were unable to be accepted for the following reasons:":"This file was unable to be accepted for the following reason:"}),(0,j.tZ)(b.UnorderedList,{children:[].concat((0,i.Z)(null!=eg?eg:[]),(0,i.Z)(null!=eb?eb:[])).map(function(e){return(0,j.BX)(b.ListItem,{children:[(0,j.tZ)(g.Text,{color:"error",fontWeight:"bold",children:e.file.name})," ",(0,j.BX)(g.Text,{children:["(",P(e.file.size),")"," - ",function(e,t){if(null!=e&&e.length){var n=Array.from(new Set(e.map(function(e){return e.code})));return n.includes(S.jK.FileInvalidType)?"Invalid file type":n.includes(S.jK.FileTooLarge)?"File is over ".concat(t):C.message}}(e.errors,eu)]})]},e.file.name)})})]})}),eA&&(0,j.BX)(h.Stack,{gap:.5,children:[(0,j.tZ)(g.Text,{color:"muted",children:eX}),(0,j.tZ)(A,{files:R,hideThumbnails:E,onRemove:ey}),(0,j.tZ)(_,{files:eo,hideThumbnails:E,onRemove:ex})]})]})}})})},4776:function(e,t,n){n.d(t,{ProgressIndicator:function(){return _}});var r=n(90089),o=n(90849),i=n(8464),l=n(46275),c=n(77797),a=n(10043),s=n(48050),d=n(19631),u=n(96778),f=n(92288),p=n(19282),b={body:i.boxPalette.backgroundShade,bodyAlt:i.boxPalette.backgroundShadeAlt},m="data-agds-progress-indicator-item-timeline-action",h="data-agds-progress-indicator-item-ring",g="data-agds-progress-indicator-item-text-container";[].concat(["blocked","doing","started"],["done","error","saved","todo"]);var v={blocked:{label:"Cannot start yet",icon:p.Zs,iconColor:"border"},doing:{label:"In progress",icon:p.NB,iconColor:"border"},started:{label:"In progress",icon:p.NB,iconColor:"border"},todo:{label:"Not started",icon:p.Q2,iconColor:"border"},done:{label:"Completed",icon:p.SuccessFilledIcon,iconColor:"success"},saved:{label:"Saved",icon:p.tm,iconColor:"success"},error:{label:"Error",icon:p.zM,iconColor:"error"}},x=n(87800),y=["as","background","children","isActive","items","status"],Z=["label","isActive"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k={isActive:!1,label:""},w={name:"bjn8wh",styles:"position:relative"},S=function(e){var t,n=e.as,l=e.background,c=void 0===l?"body":l,O=e.children,S=e.isActive,T=e.items,D=e.status,C=(0,r.Z)(e,y),I=v[D].label,L=S&&(null==T?void 0:T.find(function(e){return e.isActive}))||k,F=L.label,R=(L.isActive,(0,r.Z)(L,Z));return(0,x.tZ)(s.Box,{as:"li",background:c,css:(0,a.iv)({"&:first-of-type":(0,o.Z)({},"[".concat(m,"]:first-of-type"),{opacity:0}),"&:last-of-type":(t={},(0,o.Z)(t,"[".concat(m,"]:last-of-type"),{opacity:0}),(0,o.Z)(t,"[".concat(g,"]"),{borderBottomWidth:0}),t)},"",""),children:(0,x.BX)(s.Box,{as:"span",columnGap:.5,css:(0,a.iv)((0,o.Z)({display:"grid",gridTemplateColumns:"min-content 1fr",textDecoration:"none",width:"100%"},"[".concat(h,"]::before"),{backgroundColor:s.Vu[c]}),"",""),focusRingFor:"keyboard",children:[(0,x.tZ)(P,{isActive:S,status:D}),(0,x.BX)(u.Stack,j(j(j(j({},(0,o.Z)({},g,"")),{},{"aria-current":S||void 0,as:n,css:(0,a.iv)({textDecoration:"none","&:hover":{backgroundColor:b[c]},"&:hover span:not(:last-of-type)":j({},i.lB.underline)},"",""),flexGrow:1,fontFamily:"body",gap:.25,justifyContent:"center",paddingX:.5,paddingY:1},!T&&{borderBottom:!0,borderColor:"muted"}),C),{},{children:[(0,x.tZ)(f.Text,j(j({fontWeight:S?"bold":"normal"},(0,o.Z)({},"data-agds-progress-indicator-item-text","")),{},{children:O})),(0,x.tZ)(f.Text,{color:"muted",fontSize:"xs",lineHeight:"nospace",children:I})]})),F&&(0,x.BX)(x.HY,{children:[(0,x.tZ)(B,{}),(0,x.tZ)(s.Box,{as:"ul",children:(0,x.tZ)(s.Box,{as:"li",css:w,children:(0,x.BX)(d.Flex,j(j({},R),{},{alignItems:"center","aria-current":!0,as:n,borderBottom:!0,borderColor:"muted",color:"text",css:(0,a.iv)({textDecoration:"none","&:hover":j(j({backgroundColor:b[c]},i.lB.underline),{},{":not(:focus-visible)::before":{backgroundColor:b[c],content:'""',height:(0,i.mapSpacing)(.5),left:0,position:"absolute",top:"-".concat((0,i.mapSpacing)(.5)),width:"100%"}})},"",""),gap:.5,padding:.5,paddingBottom:1,children:[(0,x.tZ)(p.ti,{color:"selected"}),(0,x.tZ)(f.Text,{color:"inherit",fontSize:"xs",fontWeight:"bold",children:F})]}))})})]})]})})},B=function(){return(0,x.tZ)("span",j({css:(0,a.iv)({backgroundColor:i.boxPalette.border,flex:1,justifySelf:"center",width:i.tokens.borderWidth.md,"@media (forced-colors: active)":{backgroundColor:"GrayText"}},"","")},(0,o.Z)({},m,"")))},P=function(e){var t=e.status,n=e.isActive,r=v[t],l=r.icon,c=r.iconColor,s=i.tokens.borderWidth.md,u=s+3,f=n&&"border"===c?"selected":c;return(0,x.BX)(d.Flex,{alignItems:"center",as:"span",flexDirection:"column",children:[(0,x.tZ)(B,{}),(0,x.tZ)("span",j(j({},(0,o.Z)({},h,"")),{},{css:(0,a.iv)(j({position:"relative",paddingLeft:u,paddingRight:u},n&&{"::before":{position:"absolute",top:-u,bottom:-u,left:0,right:0,borderRadius:"100%",content:'""',border:"".concat(s,"px solid ").concat(i.boxPalette.selected)}}),"",""),children:(0,x.tZ)(l,{color:f,css:(0,a.iv)({position:"relative",display:"block",margin:-1},"",""),size:"md"})})),(0,x.tZ)(B,{})]})},T=["children","isActive","status"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I=function(e){var t=e.children,n=e.isActive,o=e.status,i=(0,r.Z)(e,T);return(0,x.tZ)(S,C(C({as:c.TextLink,isActive:!!n,status:o},i),{},{children:t}))},L=n(58229),F=["children"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A=function(e){var t=e.children,n=(0,r.Z)(e,F);return(0,x.tZ)(S,X(X({as:L.Yd},n),{},{children:t}))};function z(e){var t=e.children;return(0,x.tZ)(s.Box,{as:"ul",borderBottom:!0,borderTop:!0,css:(0,a.iv)((0,o.Z)({},i.tokens.mediaQuery.max.sm,{borderTopWidth:0}),"",""),children:t})}var E=["label"];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _=function(e){var t=e.activePath,n=e.background,o=e.items,i=e.hideSubtitle,c=void 0!==i&&i?void 0:"".concat(o.filter(function(e){return"done"===e.status}).length," of ").concat(o.length," steps completed"),a=o.some(function(e){return e.isActive})?o:o.map(function(e){var n,r,o="doing"===e.status,i="href"in e?e.href:e.label,l="".concat(i).concat(null!=i&&i.endsWith("/")?"":"/"),c=!!(null!=t&&null!==(n=t.split(l)[1])&&void 0!==n&&n.length),a="items"in e?null===(r=e.items)||void 0===r?void 0:r.map(function(e){return W(W({},e),{},{isActive:"href"in e&&e.href===t})}):void 0;return W(W({},e),{},{isActive:o||!!i&&(t===i||c)||!1,items:a})});return(0,x.tZ)(l.ie,{background:n,subTitle:c,title:"Progress",children:(0,x.tZ)(z,{children:a.map(function(e){var t=e.label,o=(0,r.Z)(e,E);return Y(o)?(0,x.tZ)(I,W(W({background:n},o),{},{children:t}),t):(0,x.tZ)(A,W(W({background:n},o),{},{children:t}),t)})})})},Y=function(e){return"href"in e}},96878:function(e,t,n){n.d(t,{SummaryList:function(){return c},SummaryListItem:function(){return a},SummaryListItemDescription:function(){return l},SummaryListItemTerm:function(){return i}});var r=n(19631),o=n(87800);function i(e){var t=e.children;return(0,o.tZ)(r.Flex,{as:"dt",color:"text",flexShrink:0,fontSize:"sm",fontWeight:"bold",minWidth:"200px",width:["100%","30%"],children:t})}function l(e){var t=e.children;return(0,o.tZ)(r.Flex,{as:"dd",color:"text",flexGrow:1,fontSize:"sm",children:t})}function c(e){var t=e.children;return(0,o.tZ)(r.Flex,{as:"dl",borderColor:"muted",borderTop:!0,flexDirection:"column",width:"100%",children:t})}function a(e){var t=e.children;return(0,o.tZ)(r.Flex,{borderBottom:!0,borderColor:"muted",flexDirection:["column","row"],gap:.5,paddingY:.75,children:t})}},41794:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(96878),r()},67637:function(e,t,n){n.d(t,{VY:function(){return a},Zu:function(){return s},_c:function(){return f},ge:function(){return u},xL:function(){return c}});var r=n(27378),o=n(23982),i=n(41794),l=n(87800);function c(e){return(0,l.tZ)(i.SummaryList,{children:e.children})}function a(e){var t=e.label,n=e.value;return(0,l.BX)(i.SummaryListItem,{children:[(0,l.tZ)(i.SummaryListItemTerm,{children:t}),(0,l.tZ)(i.SummaryListItemDescription,{children:n})]})}function s(e){var t=e.label,n=e.address,o=e.suburb,c=e.state,a=e.postcode;return(0,l.BX)(i.SummaryListItem,{children:[(0,l.tZ)(i.SummaryListItemTerm,{children:t}),(0,l.tZ)(i.SummaryListItemDescription,{children:n&&o&&c&&a?(0,l.BX)(r.Fragment,{children:[n,",",(0,l.tZ)("br",{}),o," ",c," ",a]}):null})]})}var d="d MMMM yyyy";function u(e){var t=e.label,n=e.value;return(0,l.BX)(i.SummaryListItem,{children:[(0,l.tZ)(i.SummaryListItemTerm,{children:t}),(0,l.tZ)(i.SummaryListItemDescription,{children:n&&(0,l.tZ)(r.Fragment,{children:(0,o.Z)(new Date(n),d)})})]})}function f(e){var t=e.fromLabel,n=e.fromValue,r=e.toLabel,c=e.toValue;return(0,l.BX)(l.HY,{children:[(0,l.BX)(i.SummaryListItem,{children:[(0,l.tZ)(i.SummaryListItemTerm,{children:t}),(0,l.tZ)(i.SummaryListItemDescription,{children:n&&(0,o.Z)(new Date(n),d)})]}),(0,l.BX)(i.SummaryListItem,{children:[(0,l.tZ)(i.SummaryListItemTerm,{children:r}),(0,l.tZ)(i.SummaryListItemDescription,{children:c&&(0,o.Z)(new Date(c),d)})]})]})}},27393:function(e,t,n){n.d(t,{D:function(){return a}});var r=n(58607),o=n(13497),i=n(79628),l=n(82973),c=n(87800);function a(e){var t=e.titleRef,n=e.formTitle,a=e.stepTitle,s=e.introduction,d=e.callToAction,u=e.hideRequiredFieldsMessage;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(o.H1,{"aria-label":"".concat(n," form, ").concat(a),focusRingFor:"keyboard",ref:t,tabIndex:-1,children:[(0,c.tZ)(i.Text,{color:"muted",display:"block",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:n}),a]}),s?(0,c.tZ)(i.Text,{as:"p",color:"muted",fontSize:"md",children:s}):null,!u&&(0,c.tZ)(l.z,{}),d]})}}}]);