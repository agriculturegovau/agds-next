(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{8119:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(8038),o=r.n(n),i=r(7800),c=function(e){var t=e.title;return(0,i.tZ)(o(),{children:(0,i.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},2728:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5751),o=r(4401),i=r(7800),c=function(){return(0,i.tZ)(o.Callout,{title:"Need help?",children:(0,i.tZ)(n.Prose,{children:(0,i.BX)("p",{children:["Call ",(0,i.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,i.tZ)("br",{}),"Email"," ",(0,i.tZ)("a",{href:"mailto:emailaccount@awe.gov.au",children:"emailaccount@awe.gov.au"})]})})})}},3029:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var n=r(7378),o=r(1389),i=r(4239),c=r(3009),a=r(7800),l=function(e){var t=e.pretext,r=e.title,l=e.introduction,s=e.callToAction;return(0,a.BX)(o.Stack,{gap:1.5,children:[(0,a.BX)(o.Stack,{children:[t?(0,a.tZ)(c.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,a.tZ)(i.H1,{children:r})]}),l?(0,a.tZ)(c.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,s]})}},9310:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(849),o=r(6710),i=r(4239),c=r(4276),a=r(5751),l=r(1389),s=r(4946),u=r(3009),d=r(2010),f=r(4072),p=r(8119),h=r(2728),b=r(3029),g=r(1402),m=r(7800);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O=[{label:"Your personal details",message:"Provide your personal and contact details",href:"/services/registrations/pet/task-1"},{label:"Your pets details",message:"Provide your pet’s details for registration",href:"/services/registrations/pet/task-2"}];function Z(){var e=(0,g.p)().getTaskStatus;return(0,m.BX)(m.HY,{children:[(0,m.tZ)(p.$,{title:"Register a pet"}),(0,m.tZ)(f.L,{children:(0,m.tZ)(c.PageContent,{children:(0,m.tZ)(o.Columns,{children:(0,m.tZ)(o.Column,{columnSpan:{xs:12,md:8},children:(0,m.BX)(l.Stack,{gap:3,children:[(0,m.tZ)(d.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/services/registrations",label:"Registrations"},{label:"Register a pet"}]}),(0,m.tZ)(b.V,{title:"Register a pet",introduction:"Registering domestic animals is a requirement of pet ownership. Complete the following 2 tasks to register a pet.",callToAction:(0,m.tZ)(u.Text,{as:"p",color:"muted",children:"Takes around 10 minutes."})}),(0,m.BX)(l.Stack,{gap:1.5,children:[(0,m.tZ)(i.H2,{children:"Registration requirements"}),(0,m.BX)(a.Prose,{children:[(0,m.tZ)("p",{children:"To speed up the process of registering a pet you will need to provide:"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:"address details"}),(0,m.tZ)("li",{children:"current vaccination certificate"})]})]})]}),(0,m.tZ)(s.TaskList,{items:O.map(function(t,r){return v(v({},t),{},{status:e(r)})})}),(0,m.tZ)(h.$,{})]})})})})})]})}},9995:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var n=(0,r(2619).Z)(r(7378)).default.createContext({});t.AmpStateContext=n},5919:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=e.hybrid,n=e.hasQuery;return void 0!==t&&t||void 0!==r&&r&&void 0!==n&&n}},3291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var n=r(6516).Z,o=r(2619).Z,i=(0,r(6808).Z)(r(7378)),c=o(r(4719)),a=r(9995),l=r(5458),s=r(5919);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(1141);var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var r,o,c,a,l=t.inAmpMode;return e.reduce(d,[]).reverse().concat(u(l).reverse()).filter((r=new Set,o=new Set,c=new Set,a={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var i=e.key.slice(e.key.indexOf("$")+1);r.has(i)?t=!1:r.add(i)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var l=0,s=f.length;l<s;l++){var u=f[l];if(e.props.hasOwnProperty(u)){if("charSet"===u)c.has(u)?t=!1:c.add(u);else{var d=e.props[u],p=a[u]||new Set;("name"!==u||!n)&&p.has(d)?t=!1:(p.add(d),a[u]=p)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=n({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,i.default.cloneElement(e,o)}return i.default.cloneElement(e,{key:r})})}t.default=function(e){var t=e.children,r=i.useContext(a.AmpStateContext),n=i.useContext(l.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:p,headManager:n,inAmpMode:s.isInAmpMode(r)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4719:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=e.headManager,a=e.reduceComponentsToState;function l(){if(r&&r.mountedInstances){var t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return o&&(null==r||null==(t=r.mountedInstances)||t.add(e.children),l()),i(function(){var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),function(){var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(function(){return r&&(r._pendingUpdate=l),function(){r&&(r._pendingUpdate=l)}}),c(function(){return r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),function(){r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)}}),null};var n=(0,r(6808).Z)(r(7378)),o=!1,i=n.useLayoutEffect,c=o?function(){}:n.useEffect},1141:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},2010:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(7666),n()},4401:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(3227),n()},7666:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return x}});var n=r(849),o=r(89),i=r(7378),c=r(9011),a=r(43),l=r(7686),s=r(2810),u=r(7800);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var f=function(e){var t,r=e.children,o=e["aria-label"],i=e.isExpandable,c=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":o,children:(0,u.tZ)(l.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,a.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},i&&!c&&(t={},(0,n.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:c?void 0:"none"}}),t)),"",""),children:r})})},p=r(711),h=r(5995),b={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"},g=function(){return(0,u.tZ)(h.XC,{color:"border",weight:"bold",css:b})};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var y=(0,i.forwardRef)(function(e,t){var r=e.children,o=e.href;return(0,u.BX)(l.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(g,{}),o?(0,u.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),v=r(5842);function O(e){var t=e.onClick;return(0,u.tZ)(y,{children:(0,u.tZ)(l.Flex,{as:v.Yd,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var Z=["label"],j=["label"],P=["label"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=function(e){var t=e["aria-label"],r=e.links,n=(0,i.useRef)(null),a=r[0],l=a.label,s=(0,o.Z)(a,Z),d=r[r.length-1],p=d.label,h=(0,o.Z)(d,j),b=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),g=(0,i.useState)(!b.length),m=g[0],v=g[1];return(0,u.BX)(f,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:m,children:[(0,u.tZ)(y,w(w({ref:n},s),{},{children:l})),!m&&b.length?(0,u.tZ)(O,{onClick:function(){var e;v(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,b.map(function(e,t){var r=e.label,n=(0,o.Z)(e,P);return(0,u.tZ)(y,w(w({},n),{},{children:r}),t)}),(0,u.BX)(y,w(w({},h),{},{children:[p,(0,u.tZ)(c.TX,{children:" (current page)"})]}))]})}},3227:function(e,t,r){"use strict";r.d(t,{Callout:function(){return a}});var n=r(7686),o=r(3555),i=r(7800),c=function(e){var t=e.as,r=e.children;return(0,i.tZ)(o.Text,{as:void 0===t?"h2":t,fontSize:"md",fontWeight:"bold",children:r})},a=function(e){var t=e.as,r=e.background,o=e.children,a=e.title;return(0,i.BX)(n.Flex,{as:t,flexDirection:"column",gap:1,background:void 0===r?"shade":r,padding:1.5,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[a?(0,i.tZ)(c,{children:a}):null,o]})}},8480:function(e,t,r){"use strict";r.d(t,{TaskList:function(){return M}});var n=r(849),o=r(89),i=r(7686),c=r(7800),a=function(e){var t=e.children;return(0,c.tZ)(i.Stack,{gap:1.5,children:t})},l=r(434),s=r(3555),u=function(e){var t=e.stepsCompleted,r=e.totalSteps;return(0,c.BX)(i.Stack,{gap:1,children:[(0,c.tZ)(l.H2,{children:"Task list"}),(0,c.BX)(s.Text,{fontSize:"sm",color:"muted",children:[t," of ",r," steps completed"]})]})},d={name:"90i3qn",styles:"counter-reset:task-count"},f=function(e){var t=e.children,r=e.as;return(0,c.tZ)(i.Stack,{as:void 0===r?"ul":r,borderTop:!0,css:d,children:t})},p=r(43),h=r(711),b=r(5995),g=r(2810),m=r(5842),y=r(9011),v=["children","message","status","ordered"],O=["children"],Z=["as","children","status","message","ordered","className"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(e){var t=e.children,r=e.message,n=e.status,i=e.ordered,a=(0,o.Z)(e,v);return(0,c.tZ)(E,P(P({as:h.TextLink,status:n,message:r,ordered:i},a),{},{children:t}))},w=function(e){var t=e.children,r=(0,o.Z)(e,O);return(0,c.tZ)(E,P(P({as:m.Yd},r),{},{children:t}))},x="data-agds-task-list-item-text",S={name:"kd5rf1",styles:"counter-increment:task-count"},_={name:"1r7keks",styles:"order:1"},C={name:"8mbnz1",styles:"order:3"},E=function(e){var t,r=e.as,a=e.children,l=e.status,u=e.message,d=e.ordered,f=e.className,h=(0,o.Z)(e,Z),m=D[l],v=m.icon,O=m.iconColor,j=m.label;return(0,c.tZ)("li",{css:S,children:(0,c.BX)(i.Flex,P(P({as:r,flexDirection:["column","row"],justifyContent:"space-between",alignItems:["flex-start","center"],className:f,gap:1,paddingY:1,paddingX:[.75,1],fontFamily:"body",color:"text",borderBottom:!0,width:"100%",focus:!0,css:(0,p.iv)(P(P(P({position:"relative",textDecoration:"none"},"doneRecently"===l&&{backgroundColor:g.boxPalette.systemSuccessMuted}),"doing"===l&&{"&:before":{content:'""',background:g.boxPalette.foregroundAction,position:"absolute",top:0,bottom:0,left:0,width:g.tokens.borderWidth.xl}}),{},(t={},(0,n.Z)(t,"[".concat(x,"]"),P(P({},g.lB.underline),{},{color:g.boxPalette.foregroundAction})),(0,n.Z)(t,"&:hover",(0,n.Z)({backgroundColor:g.boxPalette.backgroundShade},"[".concat(x,"]"),{textDecoration:"none",color:g.boxPalette.foregroundText})),t)),"","")},h),{},{children:[(0,c.BX)(i.Flex,{as:"span",gap:[0,1],children:[(0,c.tZ)(i.Flex,{as:"span",alignItems:"center",children:(0,c.tZ)(v,{size:"xl",color:O,css:(0,g.mq)({display:["none","block"]})})}),(0,c.BX)(i.Flex,{as:"span",flexDirection:"column",gap:.5,children:[(0,c.BX)(s.Text,P(P({},(0,n.Z)({},x,"")),{},{fontSize:["md","lg"],lineHeight:"heading",fontWeight:"bold",color:"action",css:(0,p.iv)(P({order:2},d&&{"&:before":{content:"counter(task-count)"}}),"",""),children:[d&&(0,c.tZ)("span",{"aria-hidden":"true",children:". "}),a,(0,c.tZ)(y.TX,{children:"."})]})),(0,c.BX)(i.Flex,{as:"span",gap:.25,alignItems:"center",css:_,children:[(0,c.tZ)(v,{size:"md",color:O,css:(0,g.mq)({display:["block","none"]})}),(0,c.BX)(s.Text,{as:"span",fontSize:["xs","sm"],lineHeight:"nospace",children:[j,(0,c.tZ)(y.TX,{children:"."})]})]}),(0,c.tZ)(s.Text,{color:"muted",fontSize:"sm",css:C,children:u})]})]}),(0,c.tZ)(b.LZ,{color:"action",size:["sm","lg"]})]}))})},D={blocked:{label:"Cannot start yet",icon:b.Zs,iconColor:"border"},doing:{label:"In progress",icon:b.NB,iconColor:"action"},todo:{label:"Not started",icon:b.Q2,iconColor:"action"},done:{label:"Completed",icon:b.qE,iconColor:"success"},doneRecently:{label:"Completed",icon:b.qE,iconColor:"success"}},B=["label"];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var M=function(e){var t=e.items,r=e.ordered,n=t.filter(function(e){return"done"===e.status}).length,i=t.length;return(0,c.BX)(a,{children:[(0,c.tZ)(u,{stepsCompleted:n,totalSteps:i}),(0,c.tZ)(f,{as:r?"ol":"ul",children:t.map(function(e,t){var n=e.label,i=(0,o.Z)(e,B);return A(i)?(0,c.tZ)(k,X(X({ordered:r},i),{},{children:n}),t):(0,c.tZ)(w,X(X({ordered:r},i),{},{children:n}),t)})})]})},A=function(e){return"href"in e}},4946:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(8480),n()},7717:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet",function(){return r(9310)}])},8038:function(e,t,r){e.exports=r(3291)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7717)}),_N_E=e.O()}]);