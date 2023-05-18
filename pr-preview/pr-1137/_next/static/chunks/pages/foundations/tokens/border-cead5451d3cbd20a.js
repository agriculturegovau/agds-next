(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{14376:function(e,t,n){"use strict";n.d(t,{G_:function(){return p},LR:function(){return d},eJ:function(){return f},zE:function(){return u}});var r=n(10043),o=n(11246),i=n(71389),c=n(34144),a=n(45751),l=n(53009),s=n(87800),d=function(){var e=c.tokens.breakpoint;return(0,s.tZ)("ul",{children:Object.entries(e).map(function(e){var t=(0,o.Z)(e,2),n=t[0],r=t[1],i="".concat(n," - ").concat(r,"px");return(0,s.tZ)("li",{children:i},n)})})},u=function(){var e=c.tokens.borderWidth;return(0,s.tZ)(i.Flex,{gap:.5,className:a.proseBlockClassname,children:Object.entries(e).map(function(e){var t=(0,o.Z)(e,2),n=t[0],r=t[1],c="".concat(n," (").concat(r,"px)");return(0,s.tZ)(i.Box,{padding:.5,border:!0,borderWidth:n,children:(0,s.tZ)(l.Text,{children:c})},n)})})},p=function(){return(0,s.tZ)(i.Stack,{gap:.5,className:a.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,s.BX)(i.Flex,{gap:.25,children:[(0,s.tZ)(i.Box,{css:(0,r.iv)({backgroundColor:c.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,s.tZ)(l.Text,{children:t})]},e)})})},f=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,s.BX)(i.Flex,{gap:1,className:a.proseBlockClassname,children:[(0,s.BX)(i.Flex,{flexDirection:"column",gap:1,children:[(0,s.tZ)(l.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,s.tZ)(i.Box,{background:"shade",children:(0,s.tZ)(l.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,s.BX)(i.Flex,{flexDirection:"column",gap:1,children:[(0,s.tZ)(l.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,s.tZ)(i.Box,{background:"shade",children:(0,s.tZ)(l.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,s.BX)(i.Flex,{flexDirection:"column",gap:1,children:[(0,s.tZ)(l.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,s.tZ)(i.Box,{background:"shade",children:(0,s.tZ)(l.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})}},33536:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(18590),o=n(42061),i=n(57489),c=n(3029),a=n(87800),l=function(e){var t=e.breadcrumbs,n=e.editPath,l=e.children,s=e.title,d=e.description;return(0,a.tZ)(o.I,{applyMainElement:!1,children:(0,a.BX)(i.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:r.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:n,breadcrumbs:t,children:[(0,a.tZ)(c.V,{title:s,introduction:d}),l]})})}},18590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return c},Qu:function(){return a},Sg:function(){return i}});var r=n(90849);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var i={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},c=Object.values(i).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function a(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},3711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(45751),o=n(71389),i=n(34144),c=n(64627),a=n(58119),l=n(33536),s=n(14376),d=n(18590),u=n(87800);function p(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(a.$,{title:d.Sg.border.pageTitle,description:d.Sg.border.description}),(0,u.BX)(l.A,{title:d.Sg.border.pageTitle,description:d.Sg.border.description,breadcrumbs:(0,d.Qu)(d.Sg.border),editPath:"/docs/pages/foundations/tokens/border.tsx",children:[(0,u.tZ)(c.InpageNav,{title:"On this page",links:[{href:"#border-width",label:"Border width"},{href:"#border-radius-tokens",label:"Border radius tokens"}]}),(0,u.BX)(r.Prose,{children:[(0,u.tZ)("h2",{id:"border-width",children:"Border width"}),(0,u.BX)("p",{children:["The following ",Object.keys(i.tokens.borderWidth).length," tokens can be used to set the thickness of borders."]}),(0,u.tZ)(s.zE,{}),(0,u.tZ)("h2",{id:"border-radius-tokens",children:"Border radius tokens"}),(0,u.tZ)("p",{children:"Use the following border radius token to apply rounded corners to containers."}),(0,u.tZ)("ul",{children:(0,u.BX)("li",{children:[i.tokens.borderRadius,"px"]})}),(0,u.BX)("p",{children:["Use it by setting ",(0,u.tZ)("code",{children:"rounded"})," on the Box component as seen in the following example."]}),(0,u.tZ)(o.Box,{border:!0,rounded:!0,padding:.5,className:r.proseBlockClassname,children:"A Box with rounded corners"})]})]})]})}},64627:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(90446),r()},90446:function(e,t,n){"use strict";n.d(t,{InpageNav:function(){return k},InpageNavContainer:function(){return s},InpageNavItem:function(){return f},InpageNavItemContainer:function(){return d},InpageNavTitle:function(){return b}});var r=n(90849),o=n(90089),i=n(10043),c=n(7686),a=n(85885),l=n(87800),s=function(e){var t=e.children,n=e["aria-label"];return(0,l.tZ)(c.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,i.iv)({borderLeftColor:a.boxPalette.foregroundAction},"",""),"aria-label":n,children:t})},d=function(e){var t=e.children;return(0,l.tZ)(c.Stack,{as:"ul",gap:.5,children:t})},u=n(70711);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=function(e){return(0,l.tZ)(c.Box,{as:"li",children:(0,l.tZ)(u.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))})},h=n(93555),b=function(e){var t=e.children;return(0,l.tZ)(h.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},g=["label"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k=function(e){var t=e["aria-label"],n=e.links,r=e.title;return(0,l.BX)(s,{"aria-label":void 0===t?"in page":t,children:[r?(0,l.tZ)(b,{children:r}):null,(0,l.tZ)(d,{children:n.map(function(e,t){var n=e.label,r=(0,o.Z)(e,g);return(0,l.tZ)(f,m(m({},r),{},{children:n}),t)})})]})}},55723:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/border",function(){return n(3711)}])}},function(e){e.O(0,[758,442,334,860,329,774,888,179],function(){return e(e.s=55723)}),_N_E=e.O()}]);