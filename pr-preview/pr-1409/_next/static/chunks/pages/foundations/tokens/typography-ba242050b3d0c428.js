(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{9163:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var i=n(849),r=n(6677),l=n(2892),o=n(4348),a=n(8717),s=n(3135),c=n(4235),d=n(3344),h=n(5600),p=n(5537),u=n(7800);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=void 0!==t&&t,i=e.breadcrumbs,f=e.children,g=e.editPath,m=e.sideNav,y=e.skipLinks,T=(0,r.useRouter)();return(0,u.tZ)(l.PageContent,{children:(0,u.BX)(s.Columns,{children:[m&&(0,u.tZ)(s.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,u.tZ)(l.ContentBleed,{visible:{md:!1},children:(0,u.tZ)(c.SideNav,{collapseTitle:"In this section",activePath:T.asPath,title:m.title,titleLink:m.titleLink,items:m.items})})}),(0,u.BX)(s.Column,b(b({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:m?5:1},children:[null!=y&&y.length?(0,u.tZ)(d.SkipLinks,{links:y}):null,(0,u.BX)(a.Stack,{flexGrow:1,gap:3,children:[null!=i&&i.length?(0,u.tZ)(h.Breadcrumbs,{links:i}):null,f,g&&(0,u.tZ)(o.Flex,{justifyContent:"flex-start",children:(0,u.tZ)(p.e,{path:g})})]})]}))]})})}},1014:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var i=n(8717),r=n(2852),l=n(4149),o=n(7800),a=function(e){var t=e.pretext,n=e.title,a=e.introduction,s=e.callToAction;return(0,o.BX)(i.Stack,{gap:1.5,children:[(0,o.BX)(i.Stack,{children:[t?(0,o.tZ)(l.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,o.tZ)(r.H1,{children:n})]}),a?(0,o.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,s]})}},4957:function(e,t,n){"use strict";n.d(t,{AR:function(){return p},Gw:function(){return h},Sg:function(){return d}});var i=n(849),r=n(1246),l=n(4617),o=n(9163),a=n(1014),s=n(7800);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var d={border:{label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{label:"Breakpoints",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices."},colour:{label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},elevation:{label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens which are used to establish a sense of depth and perspective."},"max-width":{label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},h=Object.entries(d).map(function(e){var t=(0,r.Z)(e,2),n=t[0],l=t[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(n)},l)}),p=function(e){var t=e.editPath,n=e.children,i=e.title,r=e.description;return(0,s.tZ)(l.I,{applyMainElement:!1,children:(0,s.BX)(o.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:h.map(function(e){return{href:e.href,label:e.label}})},editPath:t,breadcrumbs:[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:i}],children:[(0,s.tZ)(a.V,{title:i,introduction:r}),n]})})}},8246:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(1246),r=n(5933),l=n(8702),o=n(4149),a=n(4855),s=n(8717),c=n(741),d=n(4957),h=n(360),p=n(6949),u=n(7800);function f(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(p.$,{title:d.Sg.typography.pageTitle,description:d.Sg.typography.description}),(0,u.BX)(d.AR,{title:d.Sg.typography.pageTitle,description:d.Sg.typography.description,editPath:"/docs/pages/foundations/tokens/typography.tsx",children:[(0,u.tZ)(c.InpageNav,{title:"On this page",links:[{href:"#font-size",label:"Font size"},{href:"#line-height",label:"Line height"},{href:"#font-family",label:"Font family"},{href:"#font-weight",label:"Font weight"}]}),(0,u.BX)(r.Prose,{children:[(0,u.tZ)("p",{children:"A typographic scale was used to create a set of font-size and line-height values which have been designed for legibility and can be easily be implemented by designers or developers with a predictable output."}),(0,u.tZ)("p",{children:"Using the design system's typography values means any object containing text is more likely to align with another element. This appearance of a baseline grid is created by automatically rounding the line-heights to the nearest grid value 4px, then converting them back to a unit-less value."}),(0,u.tZ)("p",{children:"To ensure consistency with other components in the system:"}),(0,u.BX)("ul",{children:[(0,u.tZ)("li",{children:"Designers can use font-size and line-height values from the typographic scale."}),(0,u.tZ)("li",{children:"Developers can use the fontSize and lineHeight props available on typographic components which use of the fontGrid function."})]}),(0,u.tZ)("h2",{id:"font-size",children:"Font size"}),(0,u.tZ)("p",{children:"A typographic scale of 1.25 was used to create a limited set of font sizes. This helps ensure that text looks balanced and consistent. Font sizes were rounded to to full pixel values for simplicity."}),(0,u.tZ)(g,{}),(0,u.tZ)("h2",{id:"line-height",children:"Line height"}),(0,u.tZ)("p",{children:"A set of predefined line heights that align to a 4px grid. This helps achieve better alignment across website elements."}),(0,u.tZ)(h.YA,{}),(0,u.tZ)("h2",{id:"font-family",children:"Font family"}),(0,u.tZ)("p",{children:"The design system uses system fonts to decrease file size and increase page speed."}),(0,u.tZ)("p",{children:"Government services are provided for everyone, regardless of their situation or location. By choosing to use system fonts users download less data and make fewer HTTP requests. This means that people on low-end devices or internet connections in remote areas can access government services easier."}),(0,u.tZ)(b,{}),(0,u.tZ)("h2",{id:"font-weight",children:"Font weight"}),(0,u.tZ)("p",{children:"Use 2 font weights, bold and normal, to help convey visual hierarchy amongst text. Primary text like headings are generally bold to make them more prominent. Use a normal font weight for less important text."}),(0,u.tZ)(m,{})]})]})]})}function b(){var e={body:"Used as the default font for all text",monospace:"Used for code and other monospaced text"};return(0,u.tZ)("div",{className:r.proseBlockClassname,children:(0,u.tZ)(l.TableWrapper,{children:(0,u.BX)(l.Table,{children:[(0,u.tZ)(l.TableCaption,{children:"Font family tokens"}),(0,u.tZ)(l.TableHead,{children:(0,u.BX)(l.TableRow,{children:[(0,u.tZ)(l.TableHeader,{scope:"col",children:"Token"}),(0,u.tZ)(l.TableHeader,{scope:"col",children:"Value"}),(0,u.tZ)(l.TableHeader,{scope:"col",children:"Description"})]})}),(0,u.tZ)(l.TableBody,{children:Object.entries(a.tokens.font).map(function(t){var n=(0,i.Z)(t,2),r=n[0],a=n[1];return(0,u.BX)(l.TableRow,{children:[(0,u.tZ)(l.TableCell,{children:(0,u.tZ)(o.Text,{as:"span",fontFamily:r,children:r})}),(0,u.tZ)(l.TableCell,{children:a}),(0,u.tZ)(l.TableCell,{children:e[r]})]},r)})})]})})})}function g(){return(0,u.tZ)(s.Stack,{className:r.proseBlockClassname,children:(0,u.tZ)(l.TableWrapper,{children:(0,u.BX)(l.Table,{children:[(0,u.tZ)(l.TableCaption,{children:"Font size tokens"}),(0,u.tZ)(l.TableHead,{children:(0,u.BX)(l.TableRow,{children:[(0,u.tZ)(l.TableHeader,{scope:"col",children:"Token"}),(0,u.tZ)(l.TableHeader,{scope:"col",children:"Value"}),(0,u.tZ)(l.TableHeader,{scope:"col",children:"Value (mobile viewports)"})]})}),(0,u.tZ)(l.TableBody,{children:Object.keys(a.tokens.fontSize.sm).map(function(e){var t=a.tokens.fontSize.xs[e],n=a.tokens.fontSize.sm[e];return(0,u.BX)(l.TableRow,{children:[(0,u.tZ)(l.TableCell,{children:(0,u.tZ)(o.Text,{as:"span",fontSize:e,lineHeight:"nospace",children:e})}),(0,u.BX)(l.TableCell,{children:[n,"rem (",16*n,"px)"]}),(0,u.BX)(l.TableCell,{children:[t,"rem (",16*t,"px)"]})]},e)})})]})})})}function m(){return(0,u.tZ)("div",{className:r.proseBlockClassname,children:(0,u.tZ)(l.TableWrapper,{children:(0,u.BX)(l.Table,{children:[(0,u.tZ)(l.TableCaption,{children:"Font weight tokens"}),(0,u.tZ)(l.TableHead,{children:(0,u.BX)(l.TableRow,{children:[(0,u.tZ)(l.TableHeader,{scope:"col",children:"Token"}),(0,u.tZ)(l.TableHeader,{scope:"col",children:"Value"}),(0,u.tZ)(l.TableHeader,{scope:"col",width:"75%",children:"Description"})]})}),(0,u.BX)(l.TableBody,{children:[(0,u.BX)(l.TableRow,{children:[(0,u.tZ)(l.TableCell,{children:(0,u.tZ)(o.Text,{as:"span",children:"Normal"})}),(0,u.tZ)(l.TableCell,{children:"normal"}),(0,u.tZ)(l.TableCell,{children:"Used for the majority of body text"})]}),(0,u.BX)(l.TableRow,{children:[(0,u.tZ)(l.TableCell,{children:(0,u.tZ)(o.Text,{as:"span",fontWeight:"bold",children:"Bold"})}),(0,u.tZ)(l.TableCell,{children:"bold"}),(0,u.tZ)(l.TableCell,{children:"Used to draw emphasis"})]})]})]})})})}},9759:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/typography",function(){return n(8246)}])}},function(e){e.O(0,[758,442,8,59,957,153,41,169,737,731,360,774,888,179],function(){return e(e.s=9759)}),_N_E=e.O()}]);