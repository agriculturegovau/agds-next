(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{7489:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var r=n(849),i=n(6677),o=n(4276),l=n(5784),a=n(9525),c=n(6710),s=n(4138),d=n(8192),u=n(2010),h=n(3229),p=n(7800);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=e.breadcrumbs,r=e.children,f=e.editPath,g=e.sideNav,m=e.skipLinks,y=(0,i.useRouter)();return(0,p.tZ)(o.PageContent,{children:(0,p.BX)(c.Columns,{children:[g&&(0,p.tZ)(c.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,p.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,p.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:y.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,p.BX)(c.Column,b(b({},void 0!==t&&t&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=m&&m.length?(0,p.tZ)(d.SkipLinks,{links:m}):null,(0,p.BX)(a.Stack,{flexGrow:1,gap:3,children:[null!=n&&n.length?(0,p.tZ)(u.Breadcrumbs,{links:n}):null,r,f&&(0,p.tZ)(l.Flex,{justifyContent:"flex-start",children:(0,p.tZ)(h.e,{path:f})})]})]}))]})})}},3029:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(9525),i=n(4239),o=n(3009),l=n(7800),a=function(e){var t=e.pretext,n=e.title,a=e.introduction,c=e.callToAction;return(0,l.BX)(r.Stack,{gap:1.5,children:[(0,l.BX)(r.Stack,{children:[t?(0,l.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,l.tZ)(i.H1,{children:n})]}),a?(0,l.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,c]})}},4376:function(e,t,n){"use strict";n.d(t,{G_:function(){return f},LR:function(){return h},eJ:function(){return b},zE:function(){return p}});var r=n(43),i=n(1246),o=n(1389),l=n(5784),a=n(9525),c=n(4144),s=n(5751),d=n(3009),u=n(7800),h=function(){var e=c.tokens.breakpoint;return(0,u.tZ)("ul",{children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," - ").concat(r,"px");return(0,u.tZ)("li",{children:o},n)})})},p=function(){var e=c.tokens.borderWidth;return(0,u.tZ)(l.Flex,{gap:.5,className:s.proseBlockClassname,children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," (").concat(r,"px)");return(0,u.tZ)(l.Flex,{alignItems:"center",padding:.5,border:!0,borderWidth:n,children:o},n)})})},f=function(){return(0,u.tZ)(a.Stack,{gap:.5,className:s.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,u.BX)(l.Flex,{gap:.25,children:[(0,u.tZ)(o.Box,{css:(0,r.iv)({backgroundColor:c.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,u.tZ)(d.Text,{children:t})]},e)})})},b=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,u.BX)(l.Flex,{gap:1,className:s.proseBlockClassname,children:[(0,u.BX)(l.Flex,{flexDirection:"column",gap:1,children:[(0,u.tZ)(d.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,u.tZ)(o.Box,{background:"shade",children:(0,u.tZ)(d.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,u.BX)(l.Flex,{flexDirection:"column",gap:1,children:[(0,u.tZ)(d.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,u.tZ)(o.Box,{background:"shade",children:(0,u.tZ)(d.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,u.BX)(l.Flex,{flexDirection:"column",gap:1,children:[(0,u.tZ)(d.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,u.tZ)(o.Box,{background:"shade",children:(0,u.tZ)(d.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})}},3536:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var r=n(8590),i=n(2061),o=n(7489),l=n(3029),a=n(7800),c=function(e){var t=e.breadcrumbs,n=e.editPath,c=e.children,s=e.title,d=e.description;return(0,a.tZ)(i.I,{applyMainElement:!1,children:(0,a.BX)(o.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:r.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:n,breadcrumbs:t,children:[(0,a.tZ)(l.V,{title:s,introduction:d}),c]})})}},8590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return l},Qu:function(){return a},Sg:function(){return o}});var r=n(849);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."},elevation:{slug:"elevation",label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens for handling the relative distance between two surfaces along the z-axis."}},l=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function a(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(1246),i=n(5751),o=n(8920),l=n(3009),a=n(4144),c=n(9525),s=n(4627),d=n(8119),u=n(3536),h=n(4376),p=n(8590),f=n(7800);function b(){return(0,f.BX)(f.HY,{children:[(0,f.tZ)(d.$,{title:p.Sg.typography.pageTitle,description:p.Sg.typography.description}),(0,f.BX)(u.A,{title:p.Sg.typography.pageTitle,description:p.Sg.typography.description,breadcrumbs:(0,p.Qu)(p.Sg.typography),editPath:"/docs/pages/foundations/tokens/typography.tsx",children:[(0,f.tZ)(s.InpageNav,{title:"On this page",links:[{href:"#font-size",label:"Font size"},{href:"#line-height",label:"Line height"},{href:"#font-family",label:"Font family"},{href:"#font-weight",label:"Font weight"}]}),(0,f.BX)(i.Prose,{children:[(0,f.tZ)("h2",{id:"font-size",children:"Font size"}),(0,f.tZ)("p",{children:"A typographic scale of 1.25 was used to create a limited set of font sizes. This helps ensure that text looks balanced and consistent. Font sizes were rounded to to full pixel values for simplicity."}),(0,f.tZ)(m,{}),(0,f.tZ)("h2",{id:"line-height",children:"Line height"}),(0,f.tZ)("p",{children:"A set of predefined line heights that align to a 4px grid. This helps achieve better alignment across website elements."}),(0,f.tZ)(h.eJ,{}),(0,f.tZ)("h2",{id:"font-family",children:"Font family"}),(0,f.tZ)("p",{children:"The design system uses system fonts to decrease file size and increase page speed."}),(0,f.tZ)("p",{children:"Government services are provided for everyone, regardless of their situation or location. By choosing to use system fonts users download less data and make fewer HTTP requests. This means that people on low-end devices or internet connections in remote areas can access government services easier."}),(0,f.tZ)(g,{}),(0,f.tZ)("h2",{id:"font-weight",children:"Font weight"}),(0,f.tZ)("p",{children:"Use 2 font weights, bold and normal, to help convey visual hierarchy amongst text. Primary text like headings are generally bold to make them more prominent. Use a normal font weight for less important text."}),(0,f.tZ)(y,{})]})]})]})}function g(){var e={body:"Used as the default font for all text",monospace:"Used for code and other monospaced text"};return(0,f.tZ)("div",{className:i.proseBlockClassname,children:(0,f.tZ)(o.TableWrapper,{children:(0,f.BX)(o.Table,{children:[(0,f.tZ)(o.TableCaption,{children:"Font family tokens"}),(0,f.tZ)(o.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableHeader,{scope:"col",children:"Token"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Description"})]})}),(0,f.tZ)(o.TableBody,{children:Object.entries(a.tokens.font).map(function(t){var n=(0,r.Z)(t,2),i=n[0],a=n[1];return(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(l.Text,{as:"span",fontFamily:i,children:i})}),(0,f.tZ)(o.TableCell,{children:a}),(0,f.tZ)(o.TableCell,{children:e[i]})]},i)})})]})})})}function m(){return(0,f.tZ)(c.Stack,{className:i.proseBlockClassname,children:(0,f.tZ)(o.TableWrapper,{children:(0,f.BX)(o.Table,{children:[(0,f.tZ)(o.TableCaption,{children:"Font size tokens"}),(0,f.tZ)(o.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableHeader,{scope:"col",children:"Token"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value (mobile viewports)"})]})}),(0,f.tZ)(o.TableBody,{children:Object.keys(a.tokens.fontSize.sm).map(function(e){var t=a.tokens.fontSize.xs[e],n=a.tokens.fontSize.sm[e];return(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(l.Text,{as:"span",fontSize:e,lineHeight:"nospace",children:e})}),(0,f.BX)(o.TableCell,{children:[n,"rem (",16*n,"px)"]}),(0,f.BX)(o.TableCell,{children:[t,"rem (",16*t,"px)"]})]},e)})})]})})})}function y(){return(0,f.tZ)("div",{className:i.proseBlockClassname,children:(0,f.tZ)(o.TableWrapper,{children:(0,f.BX)(o.Table,{children:[(0,f.tZ)(o.TableCaption,{children:"Font weight tokens"}),(0,f.tZ)(o.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableHeader,{scope:"col",children:"Token"}),(0,f.tZ)(o.TableHeader,{scope:"col",children:"Value"}),(0,f.tZ)(o.TableHeader,{scope:"col",width:"75%",children:"Description"})]})}),(0,f.BX)(o.TableBody,{children:[(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(l.Text,{as:"span",children:"Normal"})}),(0,f.tZ)(o.TableCell,{children:"normal"}),(0,f.tZ)(o.TableCell,{children:"Used for the majority of body text"})]}),(0,f.BX)("tr",{children:[(0,f.tZ)(o.TableCell,{children:(0,f.tZ)(l.Text,{as:"span",fontWeight:"bold",children:"Bold"})}),(0,f.tZ)(o.TableCell,{children:"bold"}),(0,f.tZ)(o.TableCell,{children:"Used to draw emphasis"})]})]})]})})})}},6710:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(2590),r()},4627:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(446),r()},446:function(e,t,n){"use strict";n.d(t,{InpageNav:function(){return v},InpageNavContainer:function(){return s},InpageNavItem:function(){return f},InpageNavItemContainer:function(){return d},InpageNavTitle:function(){return g}});var r=n(849),i=n(89),o=n(43),l=n(2951),a=n(7153),c=n(7800),s=function(e){var t=e.children,n=e["aria-label"];return(0,c.tZ)(l.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,o.iv)({borderLeftColor:a.boxPalette.foregroundAction},"",""),"aria-label":n,children:t})},d=function(e){var t=e.children;return(0,c.tZ)(l.Stack,{as:"ul",gap:.5,children:t})},u=n(4241),h=n(711);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=function(e){return(0,c.tZ)(u.Box,{as:"li",children:(0,c.tZ)(h.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))})},b=n(3555),g=function(e){var t=e.children;return(0,c.tZ)(b.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},m=["label"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=function(e){var t=e["aria-label"],n=e.links,r=e.title;return(0,c.BX)(s,{"aria-label":void 0===t?"in page":t,children:[r?(0,c.tZ)(g,{children:r}):null,(0,c.tZ)(d,{children:n.map(function(e,t){var n=e.label,r=(0,i.Z)(e,m);return(0,c.tZ)(f,Z(Z({},r),{},{children:n}),t)})})]})}},9759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/typography",function(){return n(312)}])}},function(e){e.O(0,[758,442,334,708,751,685,774,888,179],function(){return e(e.s=9759)}),_N_E=e.O()}]);