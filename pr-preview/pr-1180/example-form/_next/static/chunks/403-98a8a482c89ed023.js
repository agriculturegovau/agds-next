(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{8119:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(8038),o=n.n(r),i=n(7800),a=function(e){var t=e.title;return(0,i.tZ)(o(),{children:(0,i.tZ)("title",{children:[t,"yourGov"].filter(Boolean).join(" | ")})})}},9995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2619).Z)(n(7378)).default.createContext({});t.AmpStateContext=r},5919:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},3291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var r=n(6516).Z,o=n(2619).Z,i=(0,n(6808).Z)(n(7378)),a=o(n(4719)),c=n(9995),d=n(5458),u=n(5919);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(1141);var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,o,a,c,d=t.inAmpMode;return e.reduce(s,[]).reverse().concat(l(d).reverse()).filter((n=new Set,o=new Set,a=new Set,c={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var i=e.key.slice(e.key.indexOf("$")+1);n.has(i)?t=!1:n.add(i)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var d=0,u=f.length;d<u;d++){var l=f[d];if(e.props.hasOwnProperty(l)){if("charSet"===l)a.has(l)?t=!1:a.add(l);else{var s=e.props[l],p=c[l]||new Set;("name"!==l||!r)&&p.has(s)?t=!1:(p.add(s),c[l]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!d&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,i.default.cloneElement(e,o)}return i.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=i.useContext(c.AmpStateContext),r=i.useContext(d.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:u.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,c=e.reduceComponentsToState;function d(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(c(t,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),d()),i(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),i(function(){return n&&(n._pendingUpdate=d),function(){n&&(n._pendingUpdate=d)}}),a(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(6808).Z)(n(7378)),o=!1,i=r.useLayoutEffect,a=o?function(){}:r.useEffect},1141:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},6886:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(3748),r()},6728:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(7548),r()},3748:function(e,t,n){"use strict";n.d(t,{Card:function(){return s},CardInner:function(){return f},CardLink:function(){return h}});var r=n(849),o=n(43),i=n(7547),a=n(5885),c=n(7800);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l={shadow:"0 2px 4px rgba(0, 0, 0, 0.3)",hoverShadow:"0 1px 1px rgba(0, 0, 0, 0.3)"},s=function(e){var t=e.as,n=e.background,r=e.children,d=e.className,s=e.shadow,f=e.clickable;return(0,c.tZ)(i.Box,{as:t,display:"block",border:!0,borderColor:"muted",background:void 0===n?"body":n,rounded:!0,className:d,css:(0,o.iv)(u(u({position:"relative",overflow:"hidden"},f&&{"&:focus-within":a.lB.outline}),s&&{boxShadow:l.shadow,"&:hover":f?{boxShadow:l.hoverShadow}:void 0}),"",""),children:r})},f=function(e){var t=e.children;return(0,c.tZ)(i.Box,{padding:1.5,children:t})};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var h=function(e){var t=(0,a.yF)();return(0,c.tZ)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({css:[i.Wf,'display:flex;justify-content:space-between;&:focus{outline:none;}&:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;}',"","",""]},e))}},7548:function(e,t,n){"use strict";n.d(t,{HeroBanner:function(){return v},HeroBannerSubtitle:function(){return k},HeroBannerTitle:function(){return x},HeroBannerTitleContainer:function(){return m},HeroCategoryBanner:function(){return P},HeroCategoryBannerSubtitle:function(){return E},HeroCategoryBannerTitle:function(){return C},HeroSubcategoryBanner:function(){return M},HeroSubcategoryBannerTitle:function(){return T}});var r=n(7547),o=n(9370),i=n(43),a=n(5885),c={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"},d=n(7800),u=function(e){var t=e.children,n=c[e.background];return(0,d.tZ)(r.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(a._X[n]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:t})},l={name:"1739oy8",styles:"z-index:1"},s=function(e){var t=e.children,n=e.image,i=e.background;return(0,d.tZ)(o.V,{children:(0,d.BX)(r.Flex,{children:[(0,d.tZ)(r.Stack,{gap:2,width:["100%","100%",n?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:l,children:t}),n?(0,d.tZ)(u,{background:i,children:n}):null]})})},f={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},p=function(e){var t=e.children;return(0,d.tZ)(r.Box,{display:{xs:"block",md:"none"},css:f,children:t})},h={name:"vabva8",styles:"position:relative;overflow:hidden"},b=function(e){var t=e.children,n=e.background;return(0,d.tZ)(r.Box,{as:"section",background:n,css:h,children:t})},v=function(e){var t=e.image,n=e.background,r=void 0===n?"bodyAlt":n,o=e.children;return(0,d.BX)(b,{background:r,children:[t?(0,d.tZ)(p,{children:t}):null,(0,d.tZ)(s,{background:r,image:t,children:o})]})},g=n(434),y=n(3555),m=function(e){var t=e.children;return(0,d.tZ)(r.Stack,{gap:1.5,children:t})},x=function(e){var t=e.children;return(0,d.tZ)(g.X,{type:"h1",fontSize:"xxxl",children:t})},k=function(e){var t=e.children;return(0,d.tZ)(y.Text,{as:"p",fontSize:"md",maxWidth:a.tokens.maxWidth.bodyText,children:t})},w=function(e){var t=e.children,n=c[e.background];return(0,d.tZ)(r.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(a._X[n]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:t})},O={name:"1739oy8",styles:"z-index:1"},Z=function(e){var t=e.children,n=e.image,i=e.background;return(0,d.tZ)(o.V,{children:(0,d.BX)(r.Flex,{children:[(0,d.tZ)(r.Stack,{gap:1.5,width:["100%","100%",n?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:O,children:t}),n?(0,d.tZ)(w,{background:i,children:n}):null]})})},j={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},_=function(e){var t=e.children;return(0,d.tZ)(r.Box,{display:{xs:"block",md:"none"},css:j,children:t})},S={name:"vabva8",styles:"position:relative;overflow:hidden"},B=function(e){var t=e.children,n=e.background;return(0,d.tZ)(r.Box,{as:"section",background:n,css:S,children:t})},P=function(e){var t=e.children,n=e.image,r=e.background,o=void 0===r?"bodyAlt":r;return(0,d.BX)(B,{background:o,children:[n?(0,d.tZ)(_,{children:n}):null,(0,d.tZ)(Z,{background:o,image:n,children:t})]})},C=function(e){var t=e.children;return(0,d.tZ)(g.X,{type:"h1",fontSize:"xxl",children:t})},E=function(e){var t=e.children;return(0,d.tZ)(y.Text,{as:"p",fontSize:"md",maxWidth:a.tokens.maxWidth.bodyText,children:t})},A=function(e){var t=e.children,n=e.background;return(0,d.tZ)(r.Box,{as:"section",background:n,children:t})},H=function(e){var t=e.children;return(0,d.tZ)(o.V,{children:(0,d.tZ)(r.Stack,{gap:1.5,paddingTop:{xs:2,md:3},paddingBottom:{xs:3,md:3},children:t})})},M=function(e){var t=e.children,n=e.background;return(0,d.tZ)(A,{background:void 0===n?"bodyAlt":n,children:(0,d.tZ)(H,{children:t})})},T=function(e){var t=e.children;return(0,d.tZ)(g.X,{type:"h1",fontSize:"xxl",children:t})}},8038:function(e,t,n){e.exports=n(3291)}}]);