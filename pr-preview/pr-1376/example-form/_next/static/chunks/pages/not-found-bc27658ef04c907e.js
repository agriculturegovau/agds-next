(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{8531:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(8038),o=n.n(r),u=n(7800),a=function(e){var t=e.title;return(0,u.tZ)(o(),{children:(0,u.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},8681:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(1966),o=n(6783),u=n(9204),a=n(3540),i=n(3022),c=n(9810),d=n(9022),f=n(8531),s=n(7800);function l(){return(0,s.BX)(s.HY,{children:[(0,s.tZ)(f.$,{title:"Page not found"}),(0,s.tZ)(d.I,{children:(0,s.tZ)(c.PageContent,{children:(0,s.BX)(o.Stack,{gap:1.5,maxWidth:i.tokens.maxWidth.bodyText,children:[(0,s.tZ)(r.H1,{children:"Oops! This page does not exist."}),(0,s.tZ)(u.Text,{as:"p",fontSize:"md",children:"You have reached a page which is not part of the testing process."}),(0,s.BX)(u.Text,{as:"p",children:["Please go back to the"," ",(0,s.tZ)(a.TextLink,{href:"/",children:"yourGov home page"}),"."]})]})})})]})}},7142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});var r=n(1538)._(n(7378)).default.createContext({})},3046:function(e,t){"use strict";function n(e){var t=void 0===e?{}:e,n=t.ampFirst,r=t.hybrid,o=t.hasQuery;return void 0!==n&&n||void 0!==r&&r&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9611:function(e,t,n){"use strict";var r=n(3303);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return s},default:function(){return v}});var u=n(1538),a=n(5306)._(n(7378)),i=u._(n(8774)),c=n(7142),d=n(8602),f=n(3046);function s(e){void 0===e&&(e=!1);var t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(2546);var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){var n,u,i,c,d=t.inAmpMode;return e.reduce(l,[]).reverse().concat(s(d).reverse()).filter((n=new Set,u=new Set,i=new Set,c={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":u.has(e.type)?t=!1:u.add(e.type);break;case"meta":for(var a=0,d=p.length;a<d;a++){var f=p[a];if(e.props.hasOwnProperty(f)){if("charSet"===f)i.has(f)?t=!1:i.add(f);else{var s=e.props[f],l=c[f]||new Set;("name"!==f||!r)&&l.has(s)?t=!1:(l.add(s),c[f]=l)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!d&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:n})})}var v=function(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(d.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8774:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var r=n(5306)._(n(7378)),o=r.useLayoutEffect,u=r.useEffect;function a(e){var t=e.headManager,n=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),u(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},2546:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});var n=function(e){}},7033:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/not-found",function(){return n(8681)}])},8038:function(e,t,n){e.exports=n(9611)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7033)}),_N_E=e.O()}]);