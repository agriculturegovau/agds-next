(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{8119:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(8038),i=n.n(r),o=n(7800),a=function(e){var t=e.title;return(0,o.tZ)(i(),{children:(0,o.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},2728:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(5751),i=n(4401),o=n(7800),a=function(){return(0,o.tZ)(i.Callout,{title:"Need help?",children:(0,o.tZ)(r.Prose,{children:(0,o.BX)("p",{children:["Call ",(0,o.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,o.tZ)("br",{}),"Email"," ",(0,o.tZ)("a",{href:"mailto:emailaccount@awe.gov.au",children:"emailaccount@awe.gov.au"})]})})})}},3029:function(e,t,n){"use strict";n.d(t,{V:function(){return u}});var r=n(7378),i=n(1389),o=n(4239),a=n(3009),d=n(7800),u=function(e){var t=e.pretext,n=e.title,u=e.introduction,c=e.callToAction;return(0,d.BX)(i.Stack,{gap:1.5,children:[(0,d.BX)(i.Stack,{children:[t?(0,d.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,d.tZ)(o.H1,{children:n})]}),u?(0,d.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:u}):null,c]})}},3151:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(4276),i=n(6710),o=n(5751),a=n(1389),d=n(4239),u=n(6471),c=n(481),l=n(4072),s=n(8119),f=n(2728),p=n(3029),h=n(8815),v=n(7800);function m(){return(0,v.BX)(v.HY,{children:[(0,v.tZ)(s.$,{title:"Your personal details | Register a pet"}),(0,v.tZ)(l.L,{focusMode:!0,children:(0,v.tZ)(r.PageContent,{children:(0,v.tZ)(i.Columns,{children:(0,v.tZ)(i.Column,{columnSpan:{xs:12,md:8},children:(0,v.BX)(a.Stack,{gap:3,children:[(0,v.tZ)(u.DirectionLink,{href:"/services/registrations/pet",direction:"left",children:"Back"}),(0,v.tZ)(p.V,{title:"Your personal details",introduction:"To complete this process you can check, update and confirm your current contact and address details."}),(0,v.BX)(a.Stack,{gap:1.5,children:[(0,v.tZ)(d.H2,{children:"Registration requirements"}),(0,v.BX)(o.Prose,{children:[(0,v.tZ)("p",{children:"To speed up the process of registering a pet you will need to provide:"}),(0,v.BX)("ul",{children:[(0,v.tZ)("li",{children:"Personal details"}),(0,v.tZ)("li",{children:"Address details"}),(0,v.tZ)("li",{children:"Contact details"})]})]})]}),(0,v.tZ)("div",{children:(0,v.tZ)(c.ButtonLink,{href:"/services/registrations/pet/task-1/form",children:"Get started"})}),(0,v.tZ)(h.$,{}),(0,v.tZ)(f.$,{})]})})})})})]})}},9995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2619).Z)(n(7378)).default.createContext({});t.AmpStateContext=r},5919:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},3291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var r=n(6516).Z,i=n(2619).Z,o=(0,n(6808).Z)(n(7378)),a=i(n(4719)),d=n(9995),u=n(5458),c=n(5919);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(1141);var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,i,a,d,u=t.inAmpMode;return e.reduce(s,[]).reverse().concat(l(u).reverse()).filter((n=new Set,i=new Set,a=new Set,d={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(e.props.hasOwnProperty(l)){if("charSet"===l)a.has(l)?t=!1:a.add(l);else{var s=e.props[l],p=d[l]||new Set;("name"!==l||!r)&&p.has(s)?t=!1:(p.add(s),d[l]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!u&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=r({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,o.default.cloneElement(e,i)}return o.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=o.useContext(d.AmpStateContext),r=o.useContext(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:c.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,d=e.reduceComponentsToState;function u(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(d(t,e))}}return i&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),u()),o(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),o(function(){return n&&(n._pendingUpdate=u),function(){n&&(n._pendingUpdate=u)}}),a(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(6808).Z)(n(7378)),i=!1,o=r.useLayoutEffect,a=i?function(){}:r.useEffect},1141:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},4401:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(3227),r()},3227:function(e,t,n){"use strict";n.d(t,{Callout:function(){return d}});var r=n(7686),i=n(3555),o=n(7800),a=function(e){var t=e.as,n=e.children;return(0,o.tZ)(i.Text,{as:void 0===t?"h2":t,fontSize:"md",fontWeight:"bold",children:n})},d=function(e){var t=e.as,n=e.background,i=e.children,d=e.title;return(0,o.BX)(r.Flex,{as:t,flexDirection:"column",gap:1,background:void 0===n?"shade":n,padding:1.5,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[d?(0,o.tZ)(a,{children:d}):null,i]})}},5790:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet/task-1",function(){return n(3151)}])},8038:function(e,t,n){e.exports=n(3291)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5790)}),_N_E=e.O()}]);