(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{7489:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var r=n(849),i=n(6677),o=n(4276),c=n(5784),a=n(9525),l=n(6710),s=n(4138),u=n(8192),d=n(2010),p=n(3229),f=n(7800);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=e.breadcrumbs,r=e.children,h=e.editPath,g=e.sideNav,m=e.skipLinks,O=(0,i.useRouter)();return(0,f.tZ)(o.PageContent,{children:(0,f.BX)(l.Columns,{children:[g&&(0,f.tZ)(l.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,f.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,f.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:O.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,f.BX)(l.Column,b(b({},void 0!==t&&t&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=m&&m.length?(0,f.tZ)(u.SkipLinks,{links:m}):null,(0,f.BX)(a.Stack,{flexGrow:1,gap:3,children:[null!=n&&n.length?(0,f.tZ)(d.Breadcrumbs,{links:n}):null,r,h&&(0,f.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(p.e,{path:h})})]})]}))]})})}},3029:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(9525),i=n(4239),o=n(3009),c=n(7800),a=function(e){var t=e.pretext,n=e.title,a=e.introduction,l=e.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[t?(0,c.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(i.H1,{children:n})]}),a?(0,c.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,l]})}},4376:function(e,t,n){"use strict";n.d(t,{G_:function(){return h},LR:function(){return p},eJ:function(){return b},zE:function(){return f}});var r=n(43),i=n(1246),o=n(1389),c=n(5784),a=n(9525),l=n(4144),s=n(5751),u=n(3009),d=n(7800),p=function(){var e=l.tokens.breakpoint;return(0,d.tZ)("ul",{children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," - ").concat(r,"px");return(0,d.tZ)("li",{children:o},n)})})},f=function(){var e=l.tokens.borderWidth;return(0,d.tZ)(c.Flex,{gap:.5,className:s.proseBlockClassname,children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," (").concat(r,"px)");return(0,d.tZ)(c.Flex,{alignItems:"center",padding:.5,border:!0,borderWidth:n,children:o},n)})})},h=function(){return(0,d.tZ)(a.Stack,{gap:.5,className:s.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,d.BX)(c.Flex,{gap:.25,children:[(0,d.tZ)(o.Box,{css:(0,r.iv)({backgroundColor:l.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,d.tZ)(u.Text,{children:t})]},e)})})},b=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,d.BX)(c.Flex,{gap:1,className:s.proseBlockClassname,children:[(0,d.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,d.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,d.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})}},3536:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(8590),i=n(272),o=n(7489),c=n(3029),a=n(7800),l=function(e){var t=e.breadcrumbs,n=e.editPath,l=e.children,s=e.title,u=e.description;return(0,a.tZ)(i.I,{applyMainElement:!1,children:(0,a.BX)(o.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:r.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:n,breadcrumbs:t,children:[(0,a.tZ)(c.V,{title:s,introduction:u}),l]})})}},8590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return c},Qu:function(){return a},Sg:function(){return o}});var r=n(849);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."},elevation:{slug:"elevation",label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens for handling the relative distance between two surfaces along the z-axis."}},c=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function a(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},3711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5751),i=n(1389),o=n(4144),c=n(4627),a=n(8119),l=n(3536),s=n(4376),u=n(8590),d=n(7800);function p(){return(0,d.BX)(d.HY,{children:[(0,d.tZ)(a.$,{title:u.Sg.border.pageTitle,description:u.Sg.border.description}),(0,d.BX)(l.A,{title:u.Sg.border.pageTitle,description:u.Sg.border.description,breadcrumbs:(0,u.Qu)(u.Sg.border),editPath:"/docs/pages/foundations/tokens/border.tsx",children:[(0,d.tZ)(c.InpageNav,{title:"On this page",links:[{href:"#border-width",label:"Border width"},{href:"#border-radius-tokens",label:"Border radius tokens"}]}),(0,d.BX)(r.Prose,{children:[(0,d.tZ)("h2",{id:"border-width",children:"Border width"}),(0,d.BX)("p",{children:["The following ",Object.keys(o.tokens.borderWidth).length," tokens can be used to set the thickness of borders."]}),(0,d.tZ)(s.zE,{}),(0,d.tZ)("h2",{id:"border-radius-tokens",children:"Border radius tokens"}),(0,d.tZ)("p",{children:"Use the following border radius token to apply rounded corners to containers."}),(0,d.tZ)("ul",{children:(0,d.BX)("li",{children:[o.tokens.borderRadius,"px"]})}),(0,d.BX)("p",{children:["Use it by setting ",(0,d.tZ)("code",{children:"rounded"})," on the Box component as seen in the following example."]}),(0,d.tZ)(i.Box,{border:!0,rounded:!0,padding:.5,className:r.proseBlockClassname,children:"A Box with rounded corners"})]})]})]})}},6710:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(2590),r()},4627:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(446),r()},446:function(e,t,n){"use strict";n.d(t,{InpageNav:function(){return v},InpageNavContainer:function(){return s},InpageNavItem:function(){return h},InpageNavItemContainer:function(){return u},InpageNavTitle:function(){return g}});var r=n(849),i=n(89),o=n(43),c=n(2951),a=n(7153),l=n(7800),s=function(e){var t=e.children,n=e["aria-label"];return(0,l.tZ)(c.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,o.iv)({borderLeftColor:a.boxPalette.foregroundAction},"",""),"aria-label":n,children:t})},u=function(e){var t=e.children;return(0,l.tZ)(c.Stack,{as:"ul",gap:.5,children:t})},d=n(4241),p=n(711);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var h=function(e){return(0,l.tZ)(d.Box,{as:"li",children:(0,l.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))})},b=n(3555),g=function(e){var t=e.children;return(0,l.tZ)(b.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},m=["label"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=function(e){var t=e["aria-label"],n=e.links,r=e.title;return(0,l.BX)(s,{"aria-label":void 0===t?"in page":t,children:[r?(0,l.tZ)(g,{children:r}):null,(0,l.tZ)(u,{children:n.map(function(e,t){var n=e.label,r=(0,i.Z)(e,m);return(0,l.tZ)(h,k(k({},r),{},{children:n}),t)})})]})}},5723:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/border",function(){return n(3711)}])}},function(e){e.O(0,[758,442,743,708,774,888,179],function(){return e(e.s=5723)}),_N_E=e.O()}]);