(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{5497:function(e,t,r){"use strict";r.d(t,{$:function(){return FormHelpCallout}});var n=r(5933),o=r(4199),i=r(7800),FormHelpCallout=function(){return(0,i.tZ)(o.Callout,{title:"Need help?",children:(0,i.tZ)(n.Prose,{children:(0,i.BX)("p",{children:["Call ",(0,i.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,i.tZ)("br",{}),"Email"," ",(0,i.tZ)("a",{href:"mailto:emailaccount@agriculture.gov.au",children:"emailaccount@agriculture.gov.au"})]})})})}},1014:function(e,t,r){"use strict";r.d(t,{V:function(){return PageTitle}});var n=r(7378),o=r(8717),i=r(2852),a=r(4149),c=r(7800),PageTitle=function(e){var t=e.pretext,r=e.title,s=e.introduction,l=e.callToAction;return(0,c.BX)(o.Stack,{gap:1.5,children:[(0,c.BX)(o.Stack,{children:[t?(0,c.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,c.tZ)(i.H1,{children:r})]}),s?(0,c.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,l]})}},7715:function(e,t,r){"use strict";r.r(t);var n=r(849),o=r(7378),i=r(3135),a=r(2852),c=r(2892),s=r(5933),l=r(8717),d=r(4986),u=r(4149),p=r(5600),b=r(1783),f=r(6949),g=r(5497),h=r(1014),m=r(2782),y=r(7800);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O=[{label:"Your personal details",message:"Provide your personal and contact details",href:"/services/registrations/pet/task-1"},{label:"Your pets details",message:"Provide your pet’s details for registration",href:"/services/registrations/pet/task-2"}],Page=function(){var e=(0,m.p)().getTaskStatus;return(0,y.BX)(o.Fragment,{children:[(0,y.tZ)(f.$,{title:"Register a pet"}),(0,y.tZ)(c.PageContent,{children:(0,y.tZ)(i.Columns,{children:(0,y.tZ)(i.Column,{columnSpan:{xs:12,md:8},children:(0,y.BX)(l.Stack,{gap:3,children:[(0,y.tZ)(p.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/services/registrations",label:"Registrations"},{label:"Register a pet"}]}),(0,y.tZ)(h.V,{title:"Register a pet",introduction:"Registering domestic animals is a requirement of pet ownership. Complete the following 2 tasks to register a pet.",callToAction:(0,y.tZ)(u.Text,{as:"p",color:"muted",children:"Takes around 10 minutes."})}),(0,y.BX)(l.Stack,{gap:1.5,children:[(0,y.tZ)(a.H2,{children:"Registration requirements"}),(0,y.BX)(s.Prose,{children:[(0,y.tZ)("p",{children:"To speed up the process of registering a pet you will need to provide:"}),(0,y.BX)("ul",{children:[(0,y.tZ)("li",{children:"address details"}),(0,y.tZ)("li",{children:"current vaccination certificate"})]})]})]}),(0,y.tZ)(d.TaskList,{items:O.map(function(t,r){return _objectSpread(_objectSpread({},t),{},{status:e(r)})})}),(0,y.tZ)(g.$,{})]})})})})]})};t.default=Page,Page.getLayout=function(e){return(0,y.tZ)(b.I,{focusMode:!0,children:(0,y.tZ)(m.N,{children:e})})}},5600:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(3276),n()},4199:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(3599),n()},3276:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return Breadcrumbs}});var n=r(849),o=r(89),i=r(7378),a=r(7137),c=r(43),s=r(6573),l=r(294),d=r(7800);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var BreadcrumbsContainer=function(e){var t,r=e.children,o=e["aria-label"],i=e.isExpandable,a=e.isExpanded;return(0,d.tZ)("nav",{"aria-label":o,children:(0,d.tZ)(s.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,c.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},i&&!a&&(t={},(0,n.Z)(t,l.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,l.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:r})})},u=r(2231),p=r(9272),b={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,d.tZ)(p.XC,{color:"border",size:"sm",css:b})};function BreadcrumbsItem_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=(0,i.forwardRef)(function(e,t){var r=e.children,o=e.href;return(0,d.BX)(s.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,d.tZ)(BreadcrumbsDivider,{}),o?(0,d.tZ)(u.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?BreadcrumbsItem_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):BreadcrumbsItem_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),g=r(1233);function BreadcrumbsToggle(e){var t=e.onClick;return(0,d.tZ)(f,{children:(0,d.tZ)(s.Flex,{as:g.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var h=["label"],m=["label"],y=["label"];function Breadcrumbs_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Breadcrumbs_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Breadcrumbs_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Breadcrumbs_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Breadcrumbs=function(e){var t=e["aria-label"],r=e.links,n=(0,i.useRef)(null),c=r[0],s=c.label,l=(0,o.Z)(c,h),u=r[r.length-1],p=u.label,b=(0,o.Z)(u,m),g=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),O=(0,i.useState)(!g.length),j=O[0],v=O[1];return(0,d.BX)(BreadcrumbsContainer,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:j,children:[(0,d.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:n},l),{},{children:s})),!j&&g.length?(0,d.tZ)(BreadcrumbsToggle,{onClick:function(){var e;v(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,g.map(function(e,t){var r=e.label,n=(0,o.Z)(e,y);return(0,d.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},n),{},{children:r}),t)}),(0,d.BX)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},b),{},{children:[p,(0,d.tZ)(a.TX,{children:" (current page)"})]}))]})}},3599:function(e,t,r){"use strict";r.d(t,{Callout:function(){return Callout}});var n=r(43),o=r(6573),i=r(7601),a=r(8979),c=r(632),s=r(7800),l={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},CalloutTitle=function(e){var t=e.as,r=e.children,n=e.variant;return(0,s.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:l[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:r})},Callout=function(e){var t=e.as,r=e.background,a=e.children,d=e.icon,u=e.onBodyAlt,p=e.title,b=e.tone,f=void 0===b?"neutral":b,g=e.variant,h=void 0===g?"regular":g,m=l[h],y=m.textGap,O=m.iconGap,j=m.padding,v=m.flexDirection,k=m.titlePaddingTop,S={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,s.tZ)(c.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:l[h].iconSize})}}[f],Z=S.background,w=S.border,_=S.icon;return(0,s.BX)(o.Flex,{as:t,flexDirection:v,rounded:!0,gap:O,background:"neutral"===f&&(null!=u?u:"shadeAlt"===r)?"shadeAlt":Z,borderColor:w,padding:j,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[d||_?(0,s.tZ)(o.Flex,{flexShrink:0,children:d||_}):null,(0,s.BX)(i.Stack,{gap:y,css:(0,n.iv)({paddingTop:k},"",""),children:[p?(0,s.tZ)(CalloutTitle,{variant:h,children:p}):null,a]})]})}},8345:function(e,t,r){"use strict";r.d(t,{TaskList:function(){return TaskList}});var n=r(849),o=r(89),i=r(7601),a=r(7800),TaskListContainer=function(e){var t=e.children;return(0,a.tZ)(i.Stack,{gap:1.5,children:t})},c=r(4046),s=r(8979),TaskListHeading=function(e){var t=e.stepsCompleted,r=e.totalSteps;return(0,a.BX)(i.Stack,{gap:1,children:[(0,a.tZ)(c.H2,{children:"Task list"}),(0,a.BX)(s.Text,{fontSize:"sm",color:"muted",children:[t," of ",r," steps completed"]})]})},l={name:"90i3qn",styles:"counter-reset:task-count"},TaskListItemsContainer=function(e){var t=e.children,r=e.as;return(0,a.tZ)(i.Stack,{as:void 0===r?"ul":r,borderTop:!0,css:l,children:t})},d=r(43),u=r(6573),p=r(2231),b=r(9272),f=r(294),g=r(1233),h=r(7137),m=["children","message","status","ordered"],y=["children"],O=["as","children","status","message","ordered","className"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var TaskListItemLink=function(e){var t=e.children,r=e.message,n=e.status,i=e.ordered,c=(0,o.Z)(e,m);return(0,a.tZ)(TaskListItem,_objectSpread(_objectSpread({as:p.TextLink,status:n,message:r,ordered:i},c),{},{children:t}))},TaskListItemButton=function(e){var t=e.children,r=(0,o.Z)(e,y);return(0,a.tZ)(TaskListItem,_objectSpread(_objectSpread({as:g.BaseButton},r),{},{children:t}))},j="data-agds-task-list-item-text",v={name:"kd5rf1",styles:"counter-increment:task-count"},k={name:"1r7keks",styles:"order:1"},S={name:"8mbnz1",styles:"order:3"},TaskListItem=function(e){var t,r=e.as,i=e.children,c=e.status,l=e.message,p=e.ordered,g=e.className,m=(0,o.Z)(e,O),y=Z[c],w=y.icon,_=y.iconColor,P=y.label;return(0,a.tZ)("li",{css:v,children:(0,a.BX)(u.Flex,_objectSpread(_objectSpread({as:r,flexDirection:["column","row"],justifyContent:"space-between",alignItems:["flex-start","center"],className:g,gap:1,paddingY:1,paddingX:[.75,1],fontFamily:"body",color:"text",borderBottom:!0,width:"100%",focus:!0,css:(0,d.iv)(_objectSpread(_objectSpread(_objectSpread({position:"relative",textDecoration:"none"},"doneRecently"===c&&{backgroundColor:f._X.systemSuccessMuted}),"doing"===c&&{"&:before":{content:'""',background:f._X.foregroundAction,position:"absolute",top:0,bottom:0,left:0,width:f.tokens.borderWidth.xl}}),{},(t={},(0,n.Z)(t,"[".concat(j,"]"),_objectSpread(_objectSpread({},f.lB.underline),{},{color:f._X.foregroundAction})),(0,n.Z)(t,"&:hover",(0,n.Z)({backgroundColor:f._X.backgroundShade},"[".concat(j,"]"),{textDecoration:"none",color:f._X.foregroundText})),t)),"","")},m),{},{children:[(0,a.BX)(u.Flex,{as:"span",gap:[0,1],children:[(0,a.tZ)(u.Flex,{as:"span",alignItems:"center",children:(0,a.tZ)(w,{size:"xl",color:_,css:(0,f.mq)({display:["none","block"]})})}),(0,a.BX)(u.Flex,{as:"span",flexDirection:"column",gap:.5,children:[(0,a.BX)(s.Text,_objectSpread(_objectSpread({},(0,n.Z)({},j,"")),{},{fontSize:["md","lg"],lineHeight:"heading",fontWeight:"bold",color:"action",css:(0,d.iv)(_objectSpread({order:2},p&&{"&:before":{content:"counter(task-count)"}}),"",""),children:[p&&(0,a.tZ)("span",{"aria-hidden":"true",children:". "}),i,(0,a.tZ)(h.TX,{children:"."})]})),(0,a.BX)(u.Flex,{as:"span",gap:.25,alignItems:"center",css:k,children:[(0,a.tZ)(w,{size:"md",color:_,css:(0,f.mq)({display:["block","none"]})}),(0,a.BX)(s.Text,{as:"span",fontSize:["xs","sm"],lineHeight:"nospace",children:[P,(0,a.tZ)(h.TX,{children:"."})]})]}),(0,a.tZ)(s.Text,{color:"muted",fontSize:"sm",css:S,children:l})]})]}),(0,a.tZ)(b.LZ,{color:"action",size:["sm","lg"]})]}))})},Z={blocked:{label:"Cannot start yet",icon:b.Zs,iconColor:"border"},doing:{label:"In progress",icon:b.NB,iconColor:"action"},todo:{label:"Not started",icon:b.Q2,iconColor:"action"},done:{label:"Completed",icon:b.qE,iconColor:"success"},doneRecently:{label:"Completed",icon:b.qE,iconColor:"success"}},w=["label"];function TaskList_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function TaskList_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?TaskList_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):TaskList_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var TaskList=function(e){var t=e.items,r=e.ordered,n=t.filter(function(e){return"done"===e.status}).length,i=t.length;return(0,a.BX)(TaskListContainer,{children:[(0,a.tZ)(TaskListHeading,{stepsCompleted:n,totalSteps:i}),(0,a.tZ)(TaskListItemsContainer,{as:r?"ol":"ul",children:t.map(function(e,t){var n=e.label,i=(0,o.Z)(e,w);return isItemLink(i)?(0,a.tZ)(TaskListItemLink,TaskList_objectSpread(TaskList_objectSpread({ordered:r},i),{},{children:n}),t):(0,a.tZ)(TaskListItemButton,TaskList_objectSpread(TaskList_objectSpread({ordered:r},i),{},{children:n}),t)})})]})},isItemLink=function(e){return"href"in e}},4986:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(8345),n()},7717:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet",function(){return r(7715)}])}},function(e){e.O(0,[465,64,401,634,553,231,804,362,782,774,888,179],function(){return e(e.s=7717)}),_N_E=e.O()}]);