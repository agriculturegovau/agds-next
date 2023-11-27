(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{9163:function(e,t,n){"use strict";n.d(t,{X:function(){return PageLayout}});var r=n(849),o=n(6677),i=n(2892),c=n(4348),a=n(8717),s=n(3135),l=n(4235),u=n(3344),p=n(5600),d=n(5537),f=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function PageLayout(e){var t=e.applyMainElement,n=void 0!==t&&t,r=e.breadcrumbs,b=e.children,h=e.editPath,g=e.sideNav,y=e.skipLinks,O=(0,o.useRouter)();return(0,f.tZ)(i.PageContent,{children:(0,f.BX)(s.Columns,{children:[g&&(0,f.tZ)(s.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,f.tZ)(i.ContentBleed,{visible:{md:!1},children:(0,f.tZ)(l.SideNav,{collapseTitle:"In this section",activePath:O.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,f.BX)(s.Column,_objectSpread(_objectSpread({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=y&&y.length?(0,f.tZ)(u.SkipLinks,{links:y}):null,(0,f.BX)(a.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,f.tZ)(p.Breadcrumbs,{links:r}):null,b,h&&(0,f.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(d.e,{path:h})})]})]}))]})})}},1014:function(e,t,n){"use strict";n.d(t,{V:function(){return PageTitle}});var r=n(8717),o=n(2852),i=n(4149),c=n(7800),PageTitle=function(e){var t=e.pretext,n=e.title,a=e.introduction,s=e.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[t?(0,c.tZ)(i.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(o.H1,{children:n})]}),a?(0,c.tZ)(i.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,s]})}},4957:function(e,t,n){"use strict";n.d(t,{AR:function(){return TokenLayout},Gw:function(){return u},Sg:function(){return l}});var r=n(849),o=n(1246),i=n(4617),c=n(9163),a=n(1014),s=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var l={border:{label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{label:"Breakpoints",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices."},colour:{label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},elevation:{label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens which are used to establish a sense of depth and perspective."},"max-width":{label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},u=Object.entries(l).map(function(e){var t=(0,o.Z)(e,2),n=t[0],i=t[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(n)},i)}),TokenLayout=function(e){var t=e.editPath,n=e.children,r=e.title,o=e.description;return(0,s.tZ)(i.I,{applyMainElement:!1,children:(0,s.BX)(c.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:u.map(function(e){return{href:e.href,label:e.label}})},editPath:t,breadcrumbs:[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:r}],children:[(0,s.tZ)(a.V,{title:r,introduction:o}),n]})})}},9132:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return TokensPage}});var r=n(849),o=n(3772),i=n(5933),c=n(741),a=n(4865),s=n(4957),l=n(6949),u=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=!0;function TokensPage(e){var t=e.toc,n=e.page,r=e.pageTitle,p=e.editPath,d=e.description;return(0,u.BX)(u.HY,{children:[(0,u.tZ)(l.$,{title:r,description:d}),(0,u.BX)(s.AR,{title:r,description:d,editPath:p,children:[(null==t?void 0:t.length)>1?(0,u.tZ)(c.InpageNav,{title:"On this page",links:t.map(function(e){return{label:e.title,href:"#".concat(e.slug)}})}):null,(0,u.tZ)(i.Prose,{children:(0,u.tZ)(o.R,_objectSpread(_objectSpread({},n.source),{},{components:a.d}))})]})]})}},1265:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/[slug]",function(){return n(9132)}])}},function(e){e.O(0,[825,442,853,506,59,957,153,41,169,737,731,360,865,774,888,179],function(){return e(e.s=1265)}),_N_E=e.O()}]);