(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{6949:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(8038),i=n.n(r),o=n(7800),a=function(e){var t=e.title;return(0,o.tZ)(i(),{children:(0,o.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},5497:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(5933),i=n(4199),o=n(7800),a=function(){return(0,o.tZ)(i.Callout,{title:"Need help?",children:(0,o.tZ)(r.Prose,{children:(0,o.BX)("p",{children:["Call ",(0,o.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,o.tZ)("br",{}),"Email"," ",(0,o.tZ)("a",{href:"mailto:emailaccount@agriculture.gov.au",children:"emailaccount@agriculture.gov.au"})]})})})}},1014:function(e,t,n){"use strict";n.d(t,{V:function(){return d}});var r=n(7378),i=n(8717),o=n(2852),a=n(4149),u=n(7800),d=function(e){var t=e.pretext,n=e.title,d=e.introduction,c=e.callToAction;return(0,u.BX)(i.Stack,{gap:1.5,children:[(0,u.BX)(i.Stack,{children:[t?(0,u.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,u.tZ)(o.H1,{children:n})]}),d?(0,u.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:d}):null,c]})}},917:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});var r=n(1538)._(n(7378)).default.createContext({})},8635:function(e,t){"use strict";function n(e){var t=void 0===e?{}:e,n=t.ampFirst,r=t.hybrid,i=t.hasQuery;return void 0!==n&&n||void 0!==r&&r&&void 0!==i&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},1180:function(e,t,n){"use strict";var r=n(3303);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return f},default:function(){return v}});var o=n(1538),a=n(5306)._(n(7378)),u=o._(n(8494)),d=n(917),c=n(8822),l=n(8635);function f(e){void 0===e&&(e=!1);var t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(3866);var s=["name","httpEquiv","charSet","itemProp"];function h(e,t){var n,o,u,d,c=t.inAmpMode;return e.reduce(p,[]).reverse().concat(f(c).reverse()).filter((n=new Set,o=new Set,u=new Set,d={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var i=e.key.slice(e.key.indexOf("$")+1);n.has(i)?t=!1:n.add(i)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var a=0,c=s.length;a<c;a++){var l=s[a];if(e.props.hasOwnProperty(l)){if("charSet"===l)u.has(l)?t=!1:u.add(l);else{var f=e.props[l],p=d[l]||new Set;("name"!==l||!r)&&p.has(f)?t=!1:(p.add(f),d[l]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:n})})}var v=function(e){var t=e.children,n=(0,a.useContext)(d.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var r=n(5306)._(n(7378)),i=r.useLayoutEffect,o=r.useEffect;function a(e){var t=e.headManager,n=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),o(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},3866:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});var n=function(e){}},4199:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(3599),r()},3599:function(e,t,n){"use strict";n.d(t,{Callout:function(){return f}});var r=n(43),i=n(6573),o=n(7601),a=n(8979),u=n(632),d=n(7800),c={compact:{gap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{gap:1,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{gap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},l=function(e){var t=e.as,n=e.children,r=e.variant;return(0,d.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:c[void 0===r?"regular":r].titleSize,fontWeight:"bold",lineHeight:"heading",children:n})},f=function(e){var t=e.as,n=e.background,a=e.children,f=e.icon,p=e.onBodyAlt,s=e.title,h=e.tone,v=void 0===h?"neutral":h,g=e.variant,m=void 0===g?"regular":g,b=c[m],y=b.gap,O=b.padding,_=b.flexDirection,S=b.titlePaddingTop,P={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,d.tZ)(u.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:c[m].iconSize})}}[v],j=P.background,k=P.border,x=P.icon;return(0,d.BX)(i.Flex,{as:t,flexDirection:_,rounded:!0,gap:y,background:"neutral"===v&&(null!=p?p:"shadeAlt"===n)?"shadeAlt":j,borderColor:k,padding:O,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[f||x?(0,d.tZ)(i.Flex,{flexShrink:0,children:f||x}):null,(0,d.BX)(o.Stack,{gap:y,css:(0,r.iv)({paddingTop:S},"",""),children:[s?(0,d.tZ)(l,{variant:m,children:s}):null,a]})]})}},8038:function(e,t,n){e.exports=n(1180)}}]);