(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2969],{19263:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(79065),n()},65506:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(89955),n()},79065:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return w}});var n=r(90849),o=r(90089),i=r(27378),c=r(34456),l=r(10043),a=r(19631),s=r(8464),d=r(87800);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var p=function(e){var t,r=e.children,o=e["aria-label"],i=e.isExpandable,c=e.isExpanded;return(0,d.tZ)("nav",{"aria-label":o,children:(0,d.tZ)(a.Flex,{alignItems:"center",as:"ol",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},i&&!c&&(t={},(0,n.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:c?void 0:"none"}}),t)),"",""),flexWrap:"wrap",gap:.5,children:r})})},f=r(77797),b=r(48499),h={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},g=function(){return(0,d.tZ)(b.XC,{color:"border",css:h,size:"sm"})};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var O=(0,i.forwardRef)(function(e,t){var r=e.children,o=e.href;return(0,d.BX)(a.Flex,{alignItems:"center",as:"li",color:"text",fontSize:"sm",gap:.5,children:[(0,d.tZ)(g,{}),o?(0,d.tZ)(f.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),y=r(58229);function v(e){var t=e.onClick;return(0,d.tZ)(O,{children:(0,d.tZ)(a.Flex,{alignItems:"center","aria-expanded":"false","aria-label":"Show all breadcrumbs",as:y.Yd,focusRingFor:"keyboard",fontSize:"sm",justifyContent:"center",link:!0,onClick:t,children:"…"})})}var Z=["label"],j=["label"],k=["label"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var w=function(e){var t=e["aria-label"],r=e.links,n=(0,i.useRef)(null),l=r[0],a=l.label,s=(0,o.Z)(l,Z),u=r[r.length-1],f=u.label,b=(0,o.Z)(u,j),h=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),g=(0,i.useState)(!h.length),m=g[0],y=g[1];return(0,d.BX)(p,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:m,children:[(0,d.tZ)(O,x(x({ref:n},s),{},{children:a})),!m&&h.length?(0,d.tZ)(v,{onClick:function(){var e;y(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,h.map(function(e,t){var r=e.label,n=(0,o.Z)(e,k);return(0,d.tZ)(O,x(x({},n),{},{children:r}),t)}),(0,d.BX)(O,x(x({},b),{},{children:[f,(0,d.tZ)(c.T,{children:" (current page)"})]}))]})}},89955:function(e,t,r){"use strict";r.d(t,{Callout:function(){return u}});var n=r(10043),o=r(19631),i=r(96778),c=r(92288),l=r(48499),a=r(87800),s={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},d=function(e){var t=e.as,r=e.children,n=e.variant;return(0,a.tZ)(c.Text,{as:void 0===t?"h2":t,fontSize:s[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:r})},u=function(e){var t=e.as,r=e.background,c=e.children,u=e.icon,p=e.onBodyAlt,f=e.title,b=e.tone,h=void 0===b?"neutral":b,g=e.variant,m=void 0===g?"regular":g,O=s[m],y=O.textGap,v=O.iconGap,Z=O.padding,j=O.flexDirection,k=O.titlePaddingTop,P={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,a.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:s[m].iconSize})}}[h],x=P.background,w=P.border,S=P.icon;return(0,a.BX)(o.Flex,{as:t,background:"neutral"===h&&(null!=p?p:"shadeAlt"===r)?"shadeAlt":x,borderColor:w,borderLeft:!0,borderLeftWidth:"xl",flexDirection:j,gap:v,highContrastOutline:!0,padding:Z,rounded:!0,children:[u||S?(0,a.tZ)(o.Flex,{flexShrink:0,children:u||S}):null,(0,a.BX)(i.Stack,{css:(0,n.iv)({paddingTop:k},"",""),gap:y,children:[f?(0,a.tZ)(d,{variant:m,children:f}):null,c]})]})}},91187:function(e,t,r){"use strict";r.d(t,{TaskList:function(){return E}});var n=r(90849),o=r(90089),i=r(96778),c=r(87800),l=function(e){var t=e.children;return(0,c.tZ)(i.Stack,{gap:1.5,children:t})},a=r(73933),s=r(92288),d=function(e){var t=e.tasksCompleted,r=e.totalTasks;return(0,c.BX)(i.Stack,{gap:1,children:[(0,c.tZ)(a.H2,{children:"Complete these tasks"}),(0,c.BX)(s.Text,{color:"muted",fontSize:"sm",children:[t," of ",r," tasks completed"]})]})},u={name:"90i3qn",styles:"counter-reset:task-count"},p=function(e){var t=e.children,r=e.as;return(0,c.tZ)(i.Stack,{as:void 0===r?"ul":r,borderTop:!0,css:u,children:t})},f=r(10043),b=r(19631),h=r(77797),g=r(48499),m=r(8464),O=r(58229),y=r(34456),v=["children","message","status","ordered"],Z=["children"],j=["as","children","status","message","ordered","className"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=function(e){var t=e.children,r=e.message,n=e.status,i=e.ordered,l=(0,o.Z)(e,v);return(0,c.tZ)(C,P(P({as:h.TextLink,message:r,ordered:i,status:n},l),{},{children:t}))},w=function(e){var t=e.children,r=(0,o.Z)(e,Z);return(0,c.tZ)(C,P(P({as:O.Yd},r),{},{children:t}))},S="data-agds-task-list-item-text",D={name:"kd5rf1",styles:"counter-increment:task-count"},C=function(e){var t,r=e.as,i=e.children,l=e.status,a=e.message,d=e.ordered,u=e.className,p=(0,o.Z)(e,j),h=T[l],O=h.icon,v=h.iconColor,Z=h.label;return(0,c.tZ)("li",{css:D,children:(0,c.BX)(b.Flex,P(P({alignItems:["flex-start","center"],as:r,borderBottom:!0,className:u,color:"text",css:(0,f.iv)(P(P(P({position:"relative",textDecoration:"none"},"doneRecently"===l&&{backgroundColor:m._X.systemSuccessMuted}),"doing"===l&&{"&::before":{content:'""',background:m._X.foregroundAction,position:"absolute",top:0,bottom:0,left:0,width:m.tokens.borderWidth.xl}}),{},(t={},(0,n.Z)(t,"[".concat(S,"]"),P(P({},m.lB.underline),{},{color:m._X.foregroundAction})),(0,n.Z)(t,"&:hover",(0,n.Z)({backgroundColor:m._X.backgroundShade},"[".concat(S,"]"),{textDecoration:"none",color:m._X.foregroundText})),t)),"",""),flexDirection:["column","row"],focusRingFor:"keyboard",fontFamily:"body",gap:1,justifyContent:"space-between",paddingX:[.75,1],paddingY:1,width:"100%"},p),{},{children:[(0,c.BX)(b.Flex,{as:"span",gap:[0,1],children:[(0,c.tZ)(b.Flex,{alignItems:"center",as:"span",children:(0,c.tZ)(O,{color:v,css:(0,m.mq)({display:["none","block"]}),size:"xl"})}),(0,c.BX)(b.Flex,{as:"span",flexDirection:"column",gap:.5,children:[(0,c.BX)(s.Text,P(P({},(0,n.Z)({},S,"")),{},{color:"action",css:d?{"&::before":{content:"counter(task-count)"}}:void 0,fontSize:["md","lg"],fontWeight:"bold",lineHeight:"heading",children:[d&&(0,c.tZ)("span",{"aria-hidden":!0,children:". "}),i,(0,c.tZ)(y.T,{children:"."})]})),(0,c.BX)(b.Flex,{alignItems:"center",as:"span",gap:.25,children:[(0,c.tZ)(O,{color:v,css:(0,m.mq)({display:["block","none"]}),size:"md"}),(0,c.BX)(s.Text,{as:"span",fontSize:["xs","sm"],lineHeight:"nospace",children:[Z,(0,c.tZ)(y.T,{children:"."})]})]}),(0,c.tZ)(s.Text,{color:"muted",fontSize:"sm",children:a})]})]}),(0,c.tZ)(g.LZ,{color:"action",size:["sm","lg"]})]}))})},T={notRequired:{label:"No longer required",icon:g.l9,iconColor:"border"},blocked:{label:"Cannot start yet",icon:g.Zs,iconColor:"border"},doing:{label:"In progress",icon:g.NB,iconColor:"action"},todo:{label:"Not started",icon:g.Q2,iconColor:"action"},done:{label:"Completed",icon:g.SuccessFilledIcon,iconColor:"success"},doneRecently:{label:"Completed",icon:g.SuccessFilledIcon,iconColor:"success"}},X=["label"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var E=function(e){var t=e.items,r=e.ordered,n=t.filter(function(e){var t=e.status;return"done"===t||"doneRecently"===t}).length;return(0,c.BX)(l,{children:[(0,c.tZ)(d,{tasksCompleted:n,totalTasks:t.length}),(0,c.tZ)(p,{as:r?"ol":"ul",children:t.map(function(e,t){var n=e.label,i=(0,o.Z)(e,X);return z(i)?(0,c.tZ)(x,_(_({ordered:r},i),{},{children:n}),t):(0,c.tZ)(w,_(_({ordered:r},i),{},{children:n}),t)})})]})},z=function(e){return"href"in e}},97261:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(91187),n()},83447:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(67728),o=r(65506),i=r(87800),c=function(){return(0,i.tZ)(o.Callout,{title:"Need help?",children:(0,i.tZ)(n.Prose,{children:(0,i.BX)("p",{children:["Call ",(0,i.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,i.tZ)("br",{}),"Email"," ",(0,i.tZ)("a",{href:"mailto:emailaccount@agriculture.gov.au",children:"emailaccount@agriculture.gov.au"})]})})})}},76002:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(27378),o=r(58607),i=r(13497),c=r(79628),l=r(82973),a=r(87800),s=function(e){var t=e.pretext,r=e.title,s=e.introduction,d=e.callToAction,u=e.hasAllFieldsRequiredMessage;return(0,a.BX)(o.Stack,{gap:1.5,children:[(0,a.BX)(o.Stack,{children:[t?(0,a.tZ)(c.Text,{color:"muted",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,a.tZ)(i.H1,{children:r})]}),s?(0,a.tZ)(c.Text,{as:"p",color:"muted",fontSize:"md",children:s}):null,d,u&&(0,a.tZ)(l.z,{})]})}},95857:function(e,t,r){"use strict";r.r(t);var n=r(90849),o=r(27378),i=r(23748),c=r(13497),l=r(60564),a=r(67728),s=r(58607),d=r(97261),u=r(79628),p=r(19263),f=r(76072),b=r(33040),h=r(83447),g=r(76002),m=r(5766),O=r(87800);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Z=[{label:"Your personal details",message:"Provide your personal and contact details",href:"/services/registrations/pet/task-1"},{label:"Your pets details",message:"Provide your pet’s details for registration",href:"/services/registrations/pet/task-2"}],j=function(){var e=(0,m.p)().getTaskStatus;return(0,O.BX)(o.Fragment,{children:[(0,O.tZ)(b.$,{title:"Register a pet"}),(0,O.tZ)(l.PageContent,{children:(0,O.tZ)(i.Columns,{children:(0,O.tZ)(i.Column,{columnSpan:{xs:12,md:8},children:(0,O.BX)(s.Stack,{gap:3,children:[(0,O.tZ)(p.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/services/registrations",label:"Registrations"},{label:"Register a pet"}]}),(0,O.tZ)(g.V,{callToAction:(0,O.tZ)(u.Text,{as:"p",color:"muted",children:"Takes around 10 minutes."}),introduction:"Registering domestic animals is a requirement of pet ownership. Complete the following 2 tasks to register a pet.",title:"Register a pet"}),(0,O.BX)(s.Stack,{gap:1.5,children:[(0,O.tZ)(c.H2,{children:"Registration requirements"}),(0,O.BX)(a.Prose,{children:[(0,O.tZ)("p",{children:"To speed up the process of registering a pet you will need to provide:"}),(0,O.BX)("ul",{children:[(0,O.tZ)("li",{children:"address details"}),(0,O.tZ)("li",{children:"current vaccination certificate"})]})]})]}),(0,O.tZ)(d.TaskList,{items:Z.map(function(t,r){return v(v({},t),{},{status:e(r)})})}),(0,O.tZ)(h.$,{})]})})})})]})};t.default=j,j.getLayout=function(e){return(0,O.tZ)(f.I,{focusMode:!0,children:(0,O.tZ)(m.N,{children:e})})}},77717:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet",function(){return r(95857)}])}},function(e){e.O(0,[6484,9998,9073,3982,1960,8301,1165,6212,2644,1338,8205,5294,8164,840,6140,1732,5766,2888,9774,179],function(){return e(e.s=77717)}),_N_E=e.O()}]);