(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{6949:function(e,t,n){"use strict";n.d(t,{$:function(){return DocumentTitle}});var r=n(8038),i=n.n(r),o=n(7800),DocumentTitle=function(e){var t=e.title;return(0,o.tZ)(i(),{children:(0,o.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},5497:function(e,t,n){"use strict";n.d(t,{$:function(){return FormHelpCallout}});var r=n(5933),i=n(4199),o=n(7800),FormHelpCallout=function(){return(0,o.tZ)(i.Callout,{title:"Need help?",children:(0,o.tZ)(r.Prose,{children:(0,o.BX)("p",{children:["Call ",(0,o.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,o.tZ)("br",{}),"Email"," ",(0,o.tZ)("a",{href:"mailto:emailaccount@agriculture.gov.au",children:"emailaccount@agriculture.gov.au"})]})})})}},1014:function(e,t,n){"use strict";n.d(t,{V:function(){return PageTitle}});var r=n(7378),i=n(8717),o=n(2852),a=n(4149),u=n(7800),PageTitle=function(e){var t=e.pretext,n=e.title,l=e.introduction,d=e.callToAction;return(0,u.BX)(i.Stack,{gap:1.5,children:[(0,u.BX)(i.Stack,{children:[t?(0,u.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,u.tZ)(o.H1,{children:n})]}),l?(0,u.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,d]})}},917:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});var r=n(1538)._(n(7378)).default.createContext({})},8635:function(e,t){"use strict";function isInAmpMode(e){var t=void 0===e?{}:e,n=t.ampFirst,r=t.hybrid,i=t.hasQuery;return void 0!==n&&n||void 0!==r&&r&&void 0!==i&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},1180:function(e,t,n){"use strict";var r=n(3303);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return _defaultHead},default:function(){return _default2}});var i=n(1538),o=n(5306)._(n(7378)),a=i._(n(8494)),u=n(917),l=n(8822),d=n(8635);function _defaultHead(e){void 0===e&&(e=!1);var t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(3866);var c=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){var n,i,a,u,l=t.inAmpMode;return e.reduce(onlyReactElement,[]).reverse().concat(_defaultHead(l).reverse()).filter((n=new Set,i=new Set,a=new Set,u={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var l=0,d=c.length;l<d;l++){var f=c[l];if(e.props.hasOwnProperty(f)){if("charSet"===f)a.has(f)?t=!1:a.add(f);else{var p=e.props[f],s=u[f]||new Set;("name"!==f||!r)&&s.has(p)?t=!1:(s.add(p),u[f]=s)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,o.default.cloneElement(e,i)}return o.default.cloneElement(e,{key:n})})}var _default2=function(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:reduceComponents,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});var r=n(5306)._(n(7378)),i=r.useLayoutEffect,o=r.useEffect;function SideEffect(e){var t=e.headManager,n=e.reduceComponentsToState;function emitChange(){if(t&&t.mountedInstances){var i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(function(){return t&&(t._pendingUpdate=emitChange),function(){t&&(t._pendingUpdate=emitChange)}}),o(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},3866:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});var warnOnce=function(e){}},4199:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(3599),r()},3599:function(e,t,n){"use strict";n.d(t,{Callout:function(){return Callout}});var r=n(43),i=n(6573),o=n(7601),a=n(8979),u=n(632),l=n(7800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},CalloutTitle=function(e){var t=e.as,n=e.children,r=e.variant;return(0,l.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:d[void 0===r?"regular":r].titleSize,fontWeight:"bold",lineHeight:"heading",children:n})},Callout=function(e){var t=e.as,n=e.background,a=e.children,c=e.icon,f=e.onBodyAlt,p=e.title,s=e.tone,h=void 0===s?"neutral":s,m=e.variant,g=void 0===m?"regular":m,v=d[g],y=v.textGap,b=v.iconGap,_=v.padding,O=v.flexDirection,S=v.titlePaddingTop,x={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,l.tZ)(u.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[g].iconSize})}}[h],C=x.background,P=x.border,j=x.icon;return(0,l.BX)(i.Flex,{as:t,flexDirection:O,rounded:!0,gap:b,background:"neutral"===h&&(null!=f?f:"shadeAlt"===n)?"shadeAlt":C,borderColor:P,padding:_,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[c||j?(0,l.tZ)(i.Flex,{flexShrink:0,children:c||j}):null,(0,l.BX)(o.Stack,{gap:y,css:(0,r.iv)({paddingTop:S},"",""),children:[p?(0,l.tZ)(CalloutTitle,{variant:g,children:p}):null,a]})]})}},8038:function(e,t,n){e.exports=n(1180)}}]);