(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{9639:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=n(8038),i=n.n(r),a=n(7800),o=function(e){var t=e.title;return(0,a.tZ)(i(),{children:(0,a.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},8222:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(1914),i=n(4025),a=n(3439),o=n(7800),d=function(e){var t=e.as,n=void 0===t?"h2":t,r=e.children;return(0,o.tZ)(a.x,{as:n,fontSize:"md",fontWeight:"bold",children:r})},u=function(e){var t=e.as,n=e.background,r=void 0===n?"shade":n,a=e.children,u=e.title;return(0,o.BX)(i.kC,{as:t,flexDirection:"column",gap:1,background:r,padding:1.5,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u?(0,o.tZ)(d,{children:u}):null,a]})},l=function(){return(0,o.tZ)(u,{title:"Need help?",children:(0,o.tZ)(r.Mr,{children:(0,o.BX)("p",{children:["Call ",(0,o.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,o.tZ)("br",{}),"Email"," ",(0,o.tZ)("a",{href:"mailto:emailaccount@awe.gov.au",children:"emailaccount@awe.gov.au"})]})})})}},5771:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7516),i=n(6799),a=n(1914),o=n(4025),d=n(140),u=n(9670),l=n(3549),c=n(3718),s=n(9639),f=n(8222),p=n(165),h=n(8434),v=n(7800);function m(){return(0,v.BX)(v.HY,{children:[(0,v.tZ)(s.$,{title:"Your pet's details | Register a pet"}),(0,v.tZ)(c.L,{focusMode:!0,children:(0,v.tZ)(r.JH,{children:(0,v.tZ)(i.o,{children:(0,v.tZ)(i.s,{columnSpan:{xs:12,md:8},children:(0,v.BX)(o.Kq,{gap:3,children:[(0,v.tZ)(u.z,{href:"/services/registrations/pet",direction:"left",children:"Back"}),(0,v.tZ)(p.V,{title:"Your pet's details",introduction:"Under state regulation you are required to register any pet living with you in your domestic residence in an urban zone."}),(0,v.BX)(o.Kq,{gap:1.5,children:[(0,v.tZ)(d.H2,{children:"Registration requirements"}),(0,v.BX)(a.Mr,{children:[(0,v.tZ)("p",{children:"To speed up the process of registering a pet you will need to provide:"}),(0,v.BX)("ul",{children:[(0,v.tZ)("li",{children:"address details"}),(0,v.tZ)("li",{children:"current vaccination certificate"})]})]})]}),(0,v.tZ)("div",{children:(0,v.tZ)(l.ZP,{href:"/services/registrations/pet/task-2/form",children:"Get started"})}),(0,v.tZ)(h.$,{}),(0,v.BX)(o.Kq,{gap:1.5,children:[(0,v.tZ)(d.H2,{children:"Information on pet registration rules and regulations"}),(0,v.BX)(a.Mr,{children:[(0,v.tZ)("h2",{}),(0,v.BX)("ul",{children:[(0,v.tZ)("li",{children:(0,v.tZ)("a",{href:"#",children:"State pet registration rules"})}),(0,v.tZ)("li",{children:(0,v.tZ)("a",{href:"#",children:"National pet registration legislative framework"})}),(0,v.tZ)("li",{children:(0,v.tZ)("a",{href:"#",children:"Meaningful link label that shows link purpose"})})]})]})]}),(0,v.tZ)(f.$,{})]})})})})})]})}},5836:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2619).Z)(n(7378)).default.createContext({});t.AmpStateContext=r},878:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}},1508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r=n(6516).Z,i=n(2619).Z,a=(0,n(6808).Z)(n(7378)),o=i(n(6775)),d=n(5836),u=n(3759),l=n(878);n(4288);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n=t.inAmpMode;return e.reduce(s,[]).reverse().concat(c(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var d=i.key.slice(i.key.indexOf("$")+1);e.has(d)?a=!1:e.add(d)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var u=0,l=f.length;u<l;u++){var c=f[u];if(i.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var s=i.props[c],p=r[c]||new Set;"name"===c&&o||!p.has(s)?(p.add(s),r[c]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:i})}))}var h=function(e){var t=e.children,n=a.useContext(d.AmpStateContext),r=a.useContext(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function d(){if(t&&t.mountedInstances){var i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),d()}return a((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),a((function(){return t&&(t._pendingUpdate=d),function(){t&&(t._pendingUpdate=d)}})),o((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(6808).Z)(n(7378));var i=!1,a=i?function(){}:r.useLayoutEffect,o=i?function(){}:r.useEffect},7441:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet/task-2",function(){return n(5771)}])},8038:function(e,t,n){e.exports=n(1508)}},function(e){e.O(0,[774,888,179],(function(){return t=7441,e(e.s=t);var t}));var t=e.O();_N_E=t}]);