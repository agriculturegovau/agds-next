(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{7489:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var r=n(849),i=n(6677),o=n(4276),c=n(5784),a=n(9525),l=n(6710),s=n(4138),u=n(8192),d=n(2010),p=n(3229),f=n(7800);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=e.breadcrumbs,r=e.children,h=e.editPath,g=e.sideNav,m=e.skipLinks,k=(0,i.useRouter)();return(0,f.tZ)(o.PageContent,{children:(0,f.BX)(l.Columns,{children:[g&&(0,f.tZ)(l.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,f.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,f.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:k.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,f.BX)(l.Column,b(b({},void 0!==t&&t&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=m&&m.length?(0,f.tZ)(u.SkipLinks,{links:m}):null,(0,f.BX)(a.Stack,{flexGrow:1,gap:3,children:[null!=n&&n.length?(0,f.tZ)(d.Breadcrumbs,{links:n}):null,r,h&&(0,f.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(p.e,{path:h})})]})]}))]})})}},3029:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(9525),i=n(4239),o=n(3009),c=n(7800),a=function(e){var t=e.pretext,n=e.title,a=e.introduction,l=e.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[t?(0,c.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(i.H1,{children:n})]}),a?(0,c.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,l]})}},4376:function(e,t,n){"use strict";n.d(t,{G_:function(){return h},LR:function(){return p},eJ:function(){return b},zE:function(){return f}});var r=n(43),i=n(1246),o=n(1389),c=n(5784),a=n(9525),l=n(4144),s=n(5751),u=n(3009),d=n(7800),p=function(){var e=l.tokens.breakpoint;return(0,d.tZ)("ul",{children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," - ").concat(r,"px");return(0,d.tZ)("li",{children:o},n)})})},f=function(){var e=l.tokens.borderWidth;return(0,d.tZ)(c.Flex,{gap:.5,className:s.proseBlockClassname,children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," (").concat(r,"px)");return(0,d.tZ)(c.Flex,{alignItems:"center",padding:.5,border:!0,borderWidth:n,children:o},n)})})},h=function(){return(0,d.tZ)(a.Stack,{gap:.5,className:s.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,d.BX)(c.Flex,{gap:.25,children:[(0,d.tZ)(o.Box,{css:(0,r.iv)({backgroundColor:l.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,d.tZ)(u.Text,{children:t})]},e)})})},b=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,d.BX)(c.Flex,{gap:1,className:s.proseBlockClassname,children:[(0,d.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,d.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,d.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})}},3536:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(8590),i=n(8018),o=n(7489),c=n(3029),a=n(7800),l=function(e){var t=e.breadcrumbs,n=e.editPath,l=e.children,s=e.title,u=e.description;return(0,a.tZ)(i.I,{applyMainElement:!1,children:(0,a.BX)(o.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:r.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:n,breadcrumbs:t,children:[(0,a.tZ)(c.V,{title:s,introduction:u}),l]})})}},8590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return c},Qu:function(){return a},Sg:function(){return o}});var r=n(849);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."},elevation:{slug:"elevation",label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens for handling the relative distance between two surfaces along the z-axis."}},c=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function a(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},5988:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5751),i=n(8119),o=n(4376),c=n(3536),a=n(8590),l=n(7800);function s(){return(0,l.BX)(l.HY,{children:[(0,l.tZ)(i.$,{title:a.Sg.breakpoints.pageTitle,description:a.Sg.breakpoints.description}),(0,l.tZ)(c.A,{title:a.Sg.breakpoints.pageTitle,description:a.Sg.breakpoints.description,breadcrumbs:(0,a.Qu)(a.Sg.breakpoints),editPath:"/docs/pages/foundations/tokens/breakpoints.tsx",children:(0,l.BX)(r.Prose,{children:[(0,l.tZ)("p",{children:"There are 5 predefined breakpoint tokens:"}),(0,l.tZ)(o.LR,{})]})})]})}},6710:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(2590),r()},1790:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/breakpoints",function(){return n(5988)}])}},function(e){e.O(0,[758,442,559,708,774,888,179],function(){return e(e.s=1790)}),_N_E=e.O()}]);