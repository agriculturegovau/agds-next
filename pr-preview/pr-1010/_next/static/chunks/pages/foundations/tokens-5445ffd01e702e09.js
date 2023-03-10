(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{53229:function(e,t,r){"use strict";r.d(t,{e:function(){return o}});var n=r(57348),i=r(87800);function o(e){var t=e.path;return(0,i.tZ)(n.TextLink,{href:"https://github.com/".concat("steelthreads","/").concat("agds-next","/edit/").concat("main").concat(void 0===t?"":t),children:"Edit this page"})}},18590:function(e,t,r){"use strict";r.d(t,{Gw:function(){return c},Qu:function(){return a},Sg:function(){return o}});var n=r(90849);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},c=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function a(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},57979:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return g},default:function(){return y}});var n=r(71389),i=r(16886),o=r(96710),c=r(53009),a=r(58119),l=r(4276),s=r(46728),u=r(42010),p=r(14072),d=r(53229),f=r(87800),b=function(e){var t=e.title,r=e.breadcrumbs,i=e.children,o=e.editPath;return(0,f.BX)(p.L,{children:[(0,f.BX)(s.HeroSubcategoryBanner,{children:[null!=r&&r.length?(0,f.tZ)(u.Breadcrumbs,{links:r}):null,(0,f.tZ)(s.HeroSubcategoryBannerTitle,{children:t})]}),(0,f.tZ)(l.SectionContent,{children:(0,f.BX)(n.Stack,{flexGrow:1,gap:3,children:[i,o&&(0,f.tZ)(n.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(d.e,{path:o})})]})})]})},h=r(18590),g=!0;function y(e){var t=e.breadcrumbs,r=e.description,l=e.title;return(0,f.BX)(f.HY,{children:[(0,f.tZ)(a.$,{title:l,description:r}),(0,f.tZ)(b,{title:l,breadcrumbs:t,editPath:"/docs/pages/foundations/tokens/index.tsx",children:(0,f.tZ)(o.Columns,{as:"ul",cols:{xs:1,sm:2,lg:3},children:h.Gw.map(function(e){var t=e.href,r=e.label,o=e.description;return(0,f.tZ)(i.Card,{as:"li",clickable:!0,shadow:!0,children:(0,f.tZ)(n.Flex,{flexDirection:"column-reverse",children:(0,f.tZ)(i.CardInner,{children:(0,f.BX)(n.Stack,{gap:1,flexGrow:1,children:[(0,f.tZ)(n.Box,{as:"h3",children:(0,f.tZ)(i.CardLink,{href:t,children:r})}),(0,f.tZ)(c.Text,{children:o})]})})})},t)})})})]})}},42010:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(27666),n()},96710:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(32590),n()},27666:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return Z},BreadcrumbsContainer:function(){return d},BreadcrumbsDivider:function(){return g},BreadcrumbsItem:function(){return O}});var n=r(90849),i=r(90089),o=r(27378),c=r(29011),a=r(10043),l=r(7686),s=r(98854),u=r(87800);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var d=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,c=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":i,children:(0,u.tZ)(l.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,a.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!c&&(t={},(0,n.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:c?void 0:"none"}}),t)),"",""),children:r})})},f=r(70711),b=r(96955),h={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"},g=function(){return(0,u.tZ)(b.ChevronRightIcon,{color:"border",weight:"bold",css:h})};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var O=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,u.BX)(l.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(g,{}),i?(0,u.tZ)(f.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),m=r(35842);function v(e){var t=e.onClick;return(0,u.tZ)(O,{children:(0,u.tZ)(l.Flex,{as:m.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var j=["label"],w=["label"],k=["label"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Z=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),a=r[0],l=a.label,s=(0,i.Z)(a,j),p=r[r.length-1],f=p.label,b=(0,i.Z)(p,w),h=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),g=(0,o.useState)(!h.length),y=g[0],m=g[1];return(0,u.BX)(d,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:y,children:[(0,u.tZ)(O,P(P({ref:n},s),{},{children:l})),!y&&h.length?(0,u.tZ)(v,{onClick:function(){var e;m(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,h.map(function(e,t){var r=e.label,n=(0,i.Z)(e,k);return(0,u.tZ)(O,P(P({},n),{},{children:r}),t)}),(0,u.BX)(O,P(P({},b),{},{children:[f,(0,u.tZ)(c.VisuallyHidden,{children:" (current page)"})]}))]})}},67830:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens",function(){return r(57979)}])}},function(e){e.O(0,[519,367,38,774,888,179],function(){return e(e.s=67830)}),_N_E=e.O()}]);