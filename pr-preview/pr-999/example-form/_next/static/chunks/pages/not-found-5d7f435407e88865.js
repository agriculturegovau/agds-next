(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{8119:function(e,t,n){"use strict";n.d(t,{$:function(){return u}});var r=n(8038),a=n.n(r),o=n(7800),u=function(e){var t=e.title;return(0,o.tZ)(a(),{children:(0,o.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},8468:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(4239),a=n(1389),o=n(3009),u=n(7348),i=n(4144),d=n(4276),c=n(4072),f=n(8119),s=n(7800);function l(){return(0,s.BX)(s.HY,{children:[(0,s.tZ)(f.$,{title:"Page not found"}),(0,s.tZ)(c.L,{children:(0,s.tZ)(d.PageContent,{children:(0,s.BX)(a.Stack,{gap:1.5,maxWidth:i.tokens.maxWidth.bodyText,children:[(0,s.tZ)(r.H1,{children:"Oops! This page does not exist."}),(0,s.tZ)(o.Text,{as:"p",fontSize:"md",children:"You have reached a page which is not part of the testing process."}),(0,s.BX)(o.Text,{as:"p",children:["Please go back to the"," ",(0,s.tZ)(u.TextLink,{href:"/",children:"yourGov home page"}),"."]})]})})})]})}},9995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2619).Z)(n(7378)).default.createContext({});t.AmpStateContext=r},5919:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},3291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var r=n(6516).Z,a=n(2619).Z,o=(0,n(6808).Z)(n(7378)),u=a(n(4719)),i=n(9995),d=n(5458),c=n(5919);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(1141);var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,a,u,i,d=t.inAmpMode;return e.reduce(s,[]).reverse().concat(f(d).reverse()).filter((n=new Set,a=new Set,u=new Set,i={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var d=0,c=l.length;d<c;d++){var f=l[d];if(e.props.hasOwnProperty(f)){if("charSet"===f)u.has(f)?t=!1:u.add(f);else{var s=e.props[f],p=i[f]||new Set;("name"!==f||!r)&&p.has(s)?t=!1:(p.add(s),i[f]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!d&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,o.default.cloneElement(e,a)}return o.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=o.useContext(i.AmpStateContext),r=o.useContext(d.HeadManagerContext);return o.default.createElement(u.default,{reduceComponentsToState:p,headManager:r,inAmpMode:c.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,i=e.reduceComponentsToState;function d(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(i(t,e))}}return a&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),d()),o(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),o(function(){return n&&(n._pendingUpdate=d),function(){n&&(n._pendingUpdate=d)}}),u(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(6808).Z)(n(7378)),a=!1,o=r.useLayoutEffect,u=a?function(){}:r.useEffect},1141:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},7348:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(711),r()},7033:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/not-found",function(){return n(8468)}])},8038:function(e,t,n){e.exports=n(3291)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7033)}),_N_E=e.O()}]);