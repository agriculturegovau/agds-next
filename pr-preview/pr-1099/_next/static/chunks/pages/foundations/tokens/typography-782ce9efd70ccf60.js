(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{14376:function(e,t,n){"use strict";n.d(t,{G_:function(){return p},LR:function(){return d},eJ:function(){return u},zE:function(){return h}});var r=n(10043),i=n(11246),o=n(71389),a=n(34144),l=n(45751),c=n(53009),s=n(87800),d=function(){var e=a.tokens.breakpoint;return(0,s.tZ)("ul",{children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," - ").concat(r,"px");return(0,s.tZ)("li",{children:o},n)})})},h=function(){var e=a.tokens.borderWidth;return(0,s.tZ)(o.Flex,{gap:.5,className:l.proseBlockClassname,children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],a="".concat(n," (").concat(r,"px)");return(0,s.tZ)(o.Box,{padding:.5,border:!0,borderWidth:n,children:(0,s.tZ)(c.Text,{children:a})},n)})})},p=function(){return(0,s.tZ)(o.Stack,{gap:.5,className:l.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,s.BX)(o.Flex,{gap:.25,children:[(0,s.tZ)(o.Box,{css:(0,r.iv)({backgroundColor:a.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,s.tZ)(c.Text,{children:t})]},e)})})},u=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,s.BX)(o.Flex,{gap:1,className:l.proseBlockClassname,children:[(0,s.BX)(o.Flex,{flexDirection:"column",gap:1,children:[(0,s.tZ)(c.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,s.tZ)(o.Box,{background:"shade",children:(0,s.tZ)(c.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,s.BX)(o.Flex,{flexDirection:"column",gap:1,children:[(0,s.tZ)(c.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,s.tZ)(o.Box,{background:"shade",children:(0,s.tZ)(c.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,s.BX)(o.Flex,{flexDirection:"column",gap:1,children:[(0,s.tZ)(c.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,s.tZ)(o.Box,{background:"shade",children:(0,s.tZ)(c.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})}},33536:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var r=n(18590),i=n(14072),o=n(57489),a=n(3029),l=n(87800),c=function(e){var t=e.breadcrumbs,n=e.editPath,c=e.children,s=e.title,d=e.description;return(0,l.tZ)(i.L,{applyMainElement:!1,children:(0,l.BX)(o.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:r.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:n,breadcrumbs:t,children:[(0,l.tZ)(a.V,{title:s,introduction:d}),c]})})}},18590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return a},Qu:function(){return l},Sg:function(){return o}});var r=n(90849);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},a=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function l(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},70312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(11246),i=n(45751),o=n(68920),a=n(53009),l=n(34144),c=n(71389),s=n(64627),d=n(58119),h=n(33536),p=n(14376),u=n(18590),f=n(87800);function b(){return(0,f.BX)(f.HY,{children:[(0,f.tZ)(d.$,{title:u.Sg.typography.pageTitle,description:u.Sg.typography.description}),(0,f.BX)(h.A,{title:u.Sg.typography.pageTitle,description:u.Sg.typography.description,breadcrumbs:(0,u.Qu)(u.Sg.typography),editPath:"/docs/pages/foundations/tokens/typography.tsx",children:[(0,f.tZ)(s.InpageNav,{title:"On this page",links:[{href:"#font-size",label:"Font size"},{href:"#line-height",label:"Line height"},{href:"#font-family",label:"Font family"},{href:"#font-weight",label:"Font weight"}]}),(0,f.BX)(i.Prose,{children:[(0,f.tZ)("h2",{id:"font-size",children:"Font size"}),(0,f.tZ)("p",{children:"A typographic scale of 1.25 was used to create a limited set of font sizes. This helps ensure that text looks balanced and consistent. Font sizes were rounded to to full pixel values for simplicity."}),(0,f.tZ)(m,{}),(0,f.tZ)("h2",{id:"line-height",children:"Line height"}),(0,f.tZ)("p",{children:"A set of predefined line heights that align to a 4px grid. This helps achieve better alignment across website elements."}),(0,f.tZ)(p.eJ,{}),(0,f.tZ)("h2",{id:"font-family",children:"Font family"}),(0,f.tZ)("p",{children:"The design system uses system fonts to decrease file size and increase page speed."}),(0,f.tZ)("p",{children:"Government services are provided for everyone, regardless of their situation or location. By choosing to use system fonts users download less data and make fewer HTTP requests. This means that people on low-end devices or internet connections in remote areas can access government services easier."}),(0,f.tZ)(g,{}),(0,f.tZ)("h2",{id:"font-weight",children:"Font weight"}),(0,f.tZ)("p",{children:"Use 2 font weights, bold and normal, to help convey visual hierarchy amongst text. Primary text like headings are generally bold to make them more prominent. Use a normal font weight for less important text."}),(0,f.tZ)(y,{})]})]})]})}function g(){var e={body:"Used as the default font for all text",monospace:"Used for code and other monospaced text"};return(0,f.tZ)("div",{className:i.proseBlockClassname,children:(0,f.tZ)(o.TableWrapper,{children:(0,f.BX)(o.Table,{children:[(0,f.tZ)(o.TableCaption,{children:"Font family tokens"}),(0,f.tZ)(o.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableHeader,{scope:"col",children:"Token"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Description"})]})}),(0,f.tZ)(o.TableBody,{children:Object.entries(l.tokens.font).map(function(t){var n=(0,r.Z)(t,2),i=n[0],l=n[1];return(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(a.Text,{as:"span",fontFamily:i,children:i})}),(0,f.tZ)(o.TableCell,{children:l}),(0,f.tZ)(o.TableCell,{children:e[i]})]},i)})})]})})})}function m(){return(0,f.tZ)(c.Stack,{className:i.proseBlockClassname,children:(0,f.tZ)(o.TableWrapper,{children:(0,f.BX)(o.Table,{children:[(0,f.tZ)(o.TableCaption,{children:"Font size tokens"}),(0,f.tZ)(o.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableHeader,{scope:"col",children:"Token"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value (mobile viewports)"})]})}),(0,f.tZ)(o.TableBody,{children:Object.keys(l.tokens.fontSize.sm).map(function(e){var t=l.tokens.fontSize.xs[e],n=l.tokens.fontSize.sm[e];return(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(a.Text,{as:"span",fontSize:e,lineHeight:"nospace",children:e})}),(0,f.BX)(o.TableCell,{children:[n,"rem (",16*n,"px)"]}),(0,f.BX)(o.TableCell,{children:[t,"rem (",16*t,"px)"]})]},e)})})]})})})}function y(){return(0,f.tZ)("div",{className:i.proseBlockClassname,children:(0,f.tZ)(o.TableWrapper,{children:(0,f.BX)(o.Table,{children:[(0,f.tZ)(o.TableCaption,{children:"Font weight tokens"}),(0,f.tZ)(o.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableHeader,{scope:"col",children:"Token"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value"}),(0,f.tZ)(o.TableHeader,{scope:"col",width:"75%",children:"Description"})]})}),(0,f.BX)(o.TableBody,{children:[(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(a.Text,{as:"span",children:"Normal"})}),(0,f.tZ)(o.TableCell,{children:"normal"}),(0,f.tZ)(o.TableCell,{children:"Used for the majority of body text"})]}),(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(a.Text,{as:"span",fontWeight:"bold",children:"Bold"})}),(0,f.tZ)(o.TableCell,{children:"bold"}),(0,f.tZ)(o.TableCell,{children:"Used to draw emphasis"})]})]})]})})})}},64627:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(90446),r()},90446:function(e,t,n){"use strict";n.d(t,{InpageNav:function(){return Z},InpageNavContainer:function(){return s},InpageNavItem:function(){return u},InpageNavItemContainer:function(){return d},InpageNavTitle:function(){return b}});var r=n(90849),i=n(90089),o=n(10043),a=n(7686),l=n(98854),c=n(87800),s=function(e){var t=e.children,n=e["aria-label"];return(0,c.tZ)(a.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,o.iv)({borderLeftColor:l.boxPalette.foregroundAction},"",""),"aria-label":n,children:t})},d=function(e){var t=e.children;return(0,c.tZ)(a.Stack,{as:"ul",gap:.5,children:t})},h=n(70711);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var u=function(e){return(0,c.tZ)(a.Box,{as:"li",children:(0,c.tZ)(h.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))})},f=n(93555),b=function(e){var t=e.children;return(0,c.tZ)(f.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},g=["label"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z=function(e){var t=e["aria-label"],n=e.links,r=e.title;return(0,c.BX)(s,{"aria-label":void 0===t?"in page":t,children:[r?(0,c.tZ)(b,{children:r}):null,(0,c.tZ)(d,{children:n.map(function(e,t){var n=e.label,r=(0,i.Z)(e,g);return(0,c.tZ)(u,y(y({},r),{},{children:n}),t)})})]})}},99759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/typography",function(){return n(70312)}])}},function(e){e.O(0,[758,442,367,860,334,685,774,888,179],function(){return e(e.s=99759)}),_N_E=e.O()}]);