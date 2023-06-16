(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{4376:function(e,t,n){"use strict";n.d(t,{G_:function(){return h},LR:function(){return p},eJ:function(){return b},zE:function(){return f}});var r=n(43),i=n(1246),o=n(1389),a=n(5784),c=n(9525),s=n(4144),l=n(5751),u=n(3009),d=n(7800),p=function(){var e=s.tokens.breakpoint;return(0,d.tZ)("ul",{children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," - ").concat(r,"px");return(0,d.tZ)("li",{children:o},n)})})},f=function(){var e=s.tokens.borderWidth;return(0,d.tZ)(a.Flex,{gap:.5,className:l.proseBlockClassname,children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],a="".concat(n," (").concat(r,"px)");return(0,d.tZ)(o.Box,{padding:.5,border:!0,borderWidth:n,children:(0,d.tZ)(u.Text,{children:a})},n)})})},h=function(){return(0,d.tZ)(c.Stack,{gap:.5,className:l.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,d.BX)(a.Flex,{gap:.25,children:[(0,d.tZ)(o.Box,{css:(0,r.iv)({backgroundColor:s.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,d.tZ)(u.Text,{children:t})]},e)})})},b=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,d.BX)(a.Flex,{gap:1,className:l.proseBlockClassname,children:[(0,d.BX)(a.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,d.BX)(a.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,d.BX)(a.Flex,{flexDirection:"column",gap:1,children:[(0,d.tZ)(u.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,d.tZ)(o.Box,{background:"shade",children:(0,d.tZ)(u.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})}},3536:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(8590),i=n(2061),o=n(7489),a=n(3029),c=n(7800),s=function(e){var t=e.breadcrumbs,n=e.editPath,s=e.children,l=e.title,u=e.description;return(0,c.tZ)(i.I,{applyMainElement:!1,children:(0,c.BX)(o.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:r.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:n,breadcrumbs:t,children:[(0,c.tZ)(a.V,{title:l,introduction:u}),s]})})}},8590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return a},Qu:function(){return c},Sg:function(){return o}});var r=n(849);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},a=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function c(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},5988:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5751),i=n(8119),o=n(4376),a=n(3536),c=n(8590),s=n(7800);function l(){return(0,s.BX)(s.HY,{children:[(0,s.tZ)(i.$,{title:c.Sg.breakpoints.pageTitle,description:c.Sg.breakpoints.description}),(0,s.tZ)(a.A,{title:c.Sg.breakpoints.pageTitle,description:c.Sg.breakpoints.description,breadcrumbs:(0,c.Qu)(c.Sg.breakpoints),editPath:"/docs/pages/foundations/tokens/breakpoints.tsx",children:(0,s.BX)(r.Prose,{children:[(0,s.tZ)("p",{children:"There are 5 predefined breakpoint tokens:"}),(0,s.tZ)(o.LR,{})]})})]})}},6710:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(2590),r()},1790:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/breakpoints",function(){return n(5988)}])}},function(e){e.O(0,[758,442,334,751,329,774,888,179],function(){return e(e.s=1790)}),_N_E=e.O()}]);