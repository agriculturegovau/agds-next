(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{9639:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=n(8038),a=n.n(r),u=n(7800),o=function(e){var t=e.title;return(0,u.tZ)(a(),{children:(0,u.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},2046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7378),a=n(9639),u=n(3831),o=n(7800);function i(){return(0,o.BX)(r.Fragment,{children:[(0,o.tZ)(a.$,{title:"Your personal details | Register a pet"}),(0,o.tZ)(u.ZY,{})]})}},5836:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2619).Z)(n(7378)).default.createContext({});t.AmpStateContext=r},878:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery,o=void 0!==u&&u;return n||a&&o}},1508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r=n(6516).Z,a=n(2619).Z,u=(0,n(6808).Z)(n(7378)),o=a(n(6775)),i=n(5836),d=n(3759),f=n(878);n(4288);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n=t.inAmpMode;return e.reduce(l,[]).reverse().concat(c(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var u=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?u=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?u=!1:t.add(a.type);break;case"meta":for(var d=0,f=s.length;d<f;d++){var c=s[d];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?u=!1:n.add(c);else{var l=a.props[c],p=r[c]||new Set;"name"===c&&o||!p.has(l)?(p.add(l),r[c]=p):u=!1}}}return u}}()).reverse().map((function(e,t){var a=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,u.default.cloneElement(e,o)}return u.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,n=u.useContext(i.AmpStateContext),r=u.useContext(d.HeadManagerContext);return u.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:f.isInAmpMode(n)},t)};t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var a=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var d;null==t||null==(d=t.mountedInstances)||d.add(e.children),i()}return u((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),u((function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}})),o((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(6808).Z)(n(7378));var a=!1,u=a?function(){}:r.useLayoutEffect,o=a?function(){}:r.useEffect},493:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet/task-1/form",function(){return n(2046)}])},8038:function(e,t,n){e.exports=n(1508)}},function(e){e.O(0,[774,888,179],(function(){return t=493,e(e.s=t);var t}));var t=e.O();_N_E=t}]);