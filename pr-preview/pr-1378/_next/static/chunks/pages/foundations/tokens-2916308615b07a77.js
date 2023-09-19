(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{7876:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var r=n(849),i=n(6677),o=n(9810),c=n(6268),l=n(6783),a=n(2908),s=n(3294),u=n(7103),d=n(2673),p=n(1262),f=n(7800);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=void 0!==t&&t,r=e.breadcrumbs,h=e.children,g=e.editPath,m=e.sideNav,k=e.skipLinks,y=(0,i.useRouter)();return(0,f.tZ)(o.PageContent,{children:(0,f.BX)(a.Columns,{children:[m&&(0,f.tZ)(a.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,f.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,f.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:y.asPath,title:m.title,titleLink:m.titleLink,items:m.items})})}),(0,f.BX)(a.Column,b(b({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:m?5:1},children:[null!=k&&k.length?(0,f.tZ)(u.SkipLinks,{links:k}):null,(0,f.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,f.tZ)(d.Breadcrumbs,{links:r}):null,h,g&&(0,f.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(p.e,{path:g})})]})]}))]})})}},6596:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var r=n(6783),i=n(1966),o=n(9204),c=n(7800),l=function(e){var t=e.pretext,n=e.title,l=e.introduction,a=e.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[t?(0,c.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(i.H1,{children:n})]}),l?(0,c.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,a]})}},5697:function(e,t,n){"use strict";n.d(t,{a:function(){return d}});var r=n(9810),i=n(249),o=n(6268),c=n(6783),l=n(2673),a=n(9643),s=n(1262),u=n(7800),d=function(e){var t=e.title,n=e.breadcrumbs,d=e.children,p=e.editPath;return(0,u.BX)(a.I,{children:[(0,u.BX)(i.HeroSubcategoryBanner,{children:[null!=n&&n.length?(0,u.tZ)(l.Breadcrumbs,{links:n}):null,(0,u.tZ)(i.HeroSubcategoryBannerTitle,{children:t})]}),(0,u.tZ)(r.SectionContent,{children:(0,u.BX)(c.Stack,{flexGrow:1,gap:3,children:[d,p&&(0,u.tZ)(o.Flex,{justifyContent:"flex-start",children:(0,u.tZ)(s.e,{path:p})})]})})]})}},1466:function(e,t,n){"use strict";n.d(t,{AR:function(){return p},Gw:function(){return d},Sg:function(){return u}});var r=n(849),i=n(1246),o=n(9643),c=n(7876),l=n(6596),a=n(7800);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var u={border:{label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{label:"Breakpoints",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices."},colour:{label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},elevation:{label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens which are used to establish a sense of depth and perspective."},"max-width":{label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},d=Object.entries(u).map(function(e){var t=(0,i.Z)(e,2),n=t[0],o=t[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(n)},o)}),p=function(e){var t=e.editPath,n=e.children,r=e.title,i=e.description;return(0,a.tZ)(o.I,{applyMainElement:!1,children:(0,a.BX)(c.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:d.map(function(e){return{href:e.href,label:e.label}})},editPath:t,breadcrumbs:[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:r}],children:[(0,a.tZ)(l.V,{title:r,introduction:i}),n]})})}},6376:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return b}});var r=n(29),i=n(6268),o=n(6783),c=n(2591),l=n(2908),a=n(9204),s=n(3022),u=n(8531),d=n(5697),p=n(1466),f=n(7800),h=!0;function b(e){var t=e.breadcrumbs,n=e.description,h=e.title;return(0,f.BX)(f.HY,{children:[(0,f.tZ)(u.$,{title:h,description:n}),(0,f.BX)(d.a,{title:h,breadcrumbs:t,editPath:"/docs/pages/foundations/tokens/index.tsx",children:[(0,f.tZ)(a.Text,{as:"p",fontSize:"md",maxWidth:s.tokens.maxWidth.bodyText,children:n}),(0,f.tZ)(l.Columns,{as:"ul",cols:{xs:1,sm:2,lg:3},children:p.Gw.map(function(e){var t=e.href,n=e.label,l=e.description;return(0,f.tZ)(c.Card,{as:"li",clickable:!0,shadow:!0,children:(0,f.tZ)(i.Flex,{flexDirection:"column-reverse",children:(0,f.tZ)(c.CardInner,{children:(0,f.BX)(o.Stack,{gap:1,flexGrow:1,children:[(0,f.tZ)(r.Box,{as:"h3",children:(0,f.tZ)(c.CardLink,{href:t,children:n})}),(0,f.tZ)(a.Text,{children:l})]})})})},t)})})]})]})}},7830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens",function(){return n(6376)}])}},function(e){e.O(0,[758,442,255,799,263,774,888,179],function(){return e(e.s=7830)}),_N_E=e.O()}]);