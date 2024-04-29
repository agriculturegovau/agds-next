"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5945],{54389:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(98028),r()},98028:function(e,t,n){n.d(t,{Callout:function(){return u}});var r=n(10043),o=n(84007),i=n(7226),c=n(89205),l=n(40631),a=n(87800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},s=function(e){var t=e.as,n=e.children,r=e.variant;return(0,a.tZ)(c.Text,{as:void 0===t?"h2":t,fontSize:d[void 0===r?"regular":r].titleSize,fontWeight:"bold",lineHeight:"heading",children:n})},u=function(e){var t=e.as,n=e.background,c=e.children,u=e.icon,p=e.onBodyAlt,f=e.title,h=e.tone,g=void 0===h?"neutral":h,b=e.variant,m=void 0===b?"regular":b,v=d[m],Z=v.textGap,x=v.iconGap,k=v.padding,y=v.flexDirection,O=v.titlePaddingTop,S={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,a.tZ)(l.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[m].iconSize})}}[g],j=S.background,X=S.border,C=S.icon;return(0,a.BX)(o.Flex,{as:t,flexDirection:y,rounded:!0,gap:x,background:"neutral"===g&&(null!=p?p:"shadeAlt"===n)?"shadeAlt":j,borderColor:X,padding:k,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u||C?(0,a.tZ)(o.Flex,{flexShrink:0,children:u||C}):null,(0,a.BX)(i.Stack,{gap:Z,css:(0,r.iv)({paddingTop:O},"",""),children:[f?(0,a.tZ)(s,{variant:m,children:f}):null,c]})]})}},7093:function(e,t,n){n.d(t,{TaskList:function(){return E}});var r=n(90849),o=n(90089),i=n(7226),c=n(87800),l=function(e){var t=e.children;return(0,c.tZ)(i.Stack,{gap:1.5,children:t})},a=n(99164),d=n(89205),s=function(e){var t=e.stepsCompleted,n=e.totalSteps;return(0,c.BX)(i.Stack,{gap:1,children:[(0,c.tZ)(a.H2,{children:"Task list"}),(0,c.BX)(d.Text,{fontSize:"sm",color:"muted",children:[t," of ",n," steps completed"]})]})},u={name:"90i3qn",styles:"counter-reset:task-count"},p=function(e){var t=e.children,n=e.as;return(0,c.tZ)(i.Stack,{as:void 0===n?"ul":n,borderTop:!0,css:u,children:t})},f=n(10043),h=n(84007),g=n(7971),b=n(20607),m=n(23914),v=n(11475),Z=n(64388),x=["children","message","status","ordered"],k=["children"],y=["as","children","status","message","ordered","className"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j=function(e){var t=e.children,n=e.message,r=e.status,i=e.ordered,l=(0,o.Z)(e,x);return(0,c.tZ)(z,S(S({as:g.TextLink,status:r,message:n,ordered:i},l),{},{children:t}))},X=function(e){var t=e.children,n=(0,o.Z)(e,k);return(0,c.tZ)(z,S(S({as:v.BaseButton},n),{},{children:t}))},C="data-agds-task-list-item-text",P={name:"kd5rf1",styles:"counter-increment:task-count"},T={name:"1r7keks",styles:"order:1"},w={name:"8mbnz1",styles:"order:3"},z=function(e){var t,n=e.as,i=e.children,l=e.status,a=e.message,s=e.ordered,u=e.className,p=(0,o.Z)(e,y),g=B[l],v=g.icon,x=g.iconColor,k=g.label;return(0,c.tZ)("li",{css:P,children:(0,c.BX)(h.Flex,S(S({as:n,flexDirection:["column","row"],justifyContent:"space-between",alignItems:["flex-start","center"],className:u,gap:1,paddingY:1,paddingX:[.75,1],fontFamily:"body",color:"text",borderBottom:!0,width:"100%",focus:!0,css:(0,f.iv)(S(S(S({position:"relative",textDecoration:"none"},"doneRecently"===l&&{backgroundColor:m._X.systemSuccessMuted}),"doing"===l&&{"&:before":{content:'""',background:m._X.foregroundAction,position:"absolute",top:0,bottom:0,left:0,width:m.tokens.borderWidth.xl}}),{},(t={},(0,r.Z)(t,"[".concat(C,"]"),S(S({},m.lB.underline),{},{color:m._X.foregroundAction})),(0,r.Z)(t,"&:hover",(0,r.Z)({backgroundColor:m._X.backgroundShade},"[".concat(C,"]"),{textDecoration:"none",color:m._X.foregroundText})),t)),"","")},p),{},{children:[(0,c.BX)(h.Flex,{as:"span",gap:[0,1],children:[(0,c.tZ)(h.Flex,{as:"span",alignItems:"center",children:(0,c.tZ)(v,{size:"xl",color:x,css:(0,m.mq)({display:["none","block"]})})}),(0,c.BX)(h.Flex,{as:"span",flexDirection:"column",gap:.5,children:[(0,c.BX)(d.Text,S(S({},(0,r.Z)({},C,"")),{},{fontSize:["md","lg"],lineHeight:"heading",fontWeight:"bold",color:"action",css:(0,f.iv)(S({order:2},s&&{"&:before":{content:"counter(task-count)"}}),"",""),children:[s&&(0,c.tZ)("span",{"aria-hidden":"true",children:". "}),i,(0,c.tZ)(Z.TX,{children:"."})]})),(0,c.BX)(h.Flex,{as:"span",gap:.25,alignItems:"center",css:T,children:[(0,c.tZ)(v,{size:"md",color:x,css:(0,m.mq)({display:["block","none"]})}),(0,c.BX)(d.Text,{as:"span",fontSize:["xs","sm"],lineHeight:"nospace",children:[k,(0,c.tZ)(Z.TX,{children:"."})]})]}),(0,c.tZ)(d.Text,{color:"muted",fontSize:"sm",css:w,children:a})]})]}),(0,c.tZ)(b.LZ,{color:"action",size:["sm","lg"]})]}))})},B={blocked:{label:"Cannot start yet",icon:b.Zs,iconColor:"border"},doing:{label:"In progress",icon:b.NB,iconColor:"action"},todo:{label:"Not started",icon:b.Q2,iconColor:"action"},done:{label:"Completed",icon:b.SuccessFilledIcon,iconColor:"success"},doneRecently:{label:"Completed",icon:b.SuccessFilledIcon,iconColor:"success"}},D=["label"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E=function(e){var t=e.items,n=e.ordered,r=t.filter(function(e){return"done"===e.status}).length,i=t.length;return(0,c.BX)(l,{children:[(0,c.tZ)(s,{stepsCompleted:r,totalSteps:i}),(0,c.tZ)(p,{as:n?"ol":"ul",children:t.map(function(e,t){var r=e.label,i=(0,o.Z)(e,D);return I(i)?(0,c.tZ)(j,F(F({ordered:n},i),{},{children:r}),t):(0,c.tZ)(X,F(F({ordered:n},i),{},{children:r}),t)})})]})},I=function(e){return"href"in e}},44366:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(7093),r()},93641:function(e,t,n){n.d(t,{$:function(){return c}});var r=n(41380),o=n(54389),i=n(87800),c=function(){return(0,i.tZ)(o.Callout,{title:"Need help?",children:(0,i.tZ)(r.Prose,{children:(0,i.BX)("p",{children:["Call ",(0,i.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,i.tZ)("br",{}),"Email"," ",(0,i.tZ)("a",{href:"mailto:emailaccount@agriculture.gov.au",children:"emailaccount@agriculture.gov.au"})]})})})}},15748:function(e,t,n){n.d(t,{V:function(){return a}});var r=n(27378),o=n(50456),i=n(94303),c=n(68944),l=n(87800),a=function(e){var t=e.pretext,n=e.title,a=e.introduction,d=e.callToAction;return(0,l.BX)(o.Stack,{gap:1.5,children:[(0,l.BX)(o.Stack,{children:[t?(0,l.tZ)(c.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,l.tZ)(i.H1,{children:n})]}),a?(0,l.tZ)(c.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,d]})}}}]);