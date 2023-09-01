(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{7876:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var r=n(849),i=n(6677),o=n(9810),c=n(6268),l=n(6783),a=n(2908),s=n(3294),d=n(7103),u=n(2673),p=n(1262),h=n(7800);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=void 0!==t&&t,r=e.breadcrumbs,f=e.children,g=e.editPath,m=e.sideNav,O=e.skipLinks,k=(0,i.useRouter)();return(0,h.tZ)(o.PageContent,{children:(0,h.BX)(a.Columns,{children:[m&&(0,h.tZ)(a.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,h.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,h.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:k.asPath,title:m.title,titleLink:m.titleLink,items:m.items})})}),(0,h.BX)(a.Column,b(b({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:m?5:1},children:[null!=O&&O.length?(0,h.tZ)(d.SkipLinks,{links:O}):null,(0,h.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,h.tZ)(u.Breadcrumbs,{links:r}):null,f,g&&(0,h.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,h.tZ)(p.e,{path:g})})]})]}))]})})}},6596:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var r=n(6783),i=n(1966),o=n(9204),c=n(7800),l=function(e){var t=e.pretext,n=e.title,l=e.introduction,a=e.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[t?(0,c.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(i.H1,{children:n})]}),l?(0,c.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,a]})}},5875:function(e,t,n){"use strict";n.d(t,{Ry:function(){return b},eJ:function(){return g},qd:function(){return h},zE:function(){return f}});var r=n(43),i=n(1246),o=n(29),c=n(6268),l=n(6783),a=n(3022),s=n(1858),d=n(9204),u=n(1048),p=n(7800),h=function(){var e=a.tokens.breakpoint;return(0,p.tZ)("div",{className:s.proseBlockClassname,children:(0,p.tZ)(u.TableWrapper,{children:(0,p.BX)(u.Table,{children:[(0,p.tZ)(u.TableCaption,{children:"Our Breakpoint tokens"}),(0,p.tZ)(u.TableHead,{children:(0,p.BX)(u.TableRow,{children:[(0,p.tZ)(u.TableHeader,{scope:"col",children:"Token"}),(0,p.tZ)(u.TableHeader,{scope:"col",children:"Value"}),(0,p.tZ)(u.TableHeader,{scope:"col",children:"Media query"})]})}),(0,p.tZ)(u.TableBody,{children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,p.BX)(u.TableRow,{children:[(0,p.tZ)(u.TableCell,{as:"th",scope:"row",children:n}),(0,p.BX)(u.TableCell,{children:[r,"px and up"]}),(0,p.tZ)(u.TableCell,{children:0===r?"Mobile devices":(0,p.tZ)("code",{children:"@media (min-width: ".concat(r,"px) { ... }")})})]},n)})})]})})})},f=function(){var e=a.tokens.borderWidth;return(0,p.tZ)(c.Flex,{gap:.5,className:s.proseBlockClassname,children:Object.entries(e).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," (").concat(r,"px)");return(0,p.tZ)(c.Flex,{alignItems:"center",padding:.5,border:!0,borderWidth:n,children:o},n)})})},b=function(){return(0,p.tZ)(l.Stack,{gap:.5,className:s.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,p.BX)(c.Flex,{gap:.25,children:[(0,p.tZ)(o.Box,{css:(0,r.iv)({backgroundColor:a.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,p.tZ)(d.Text,{children:t})]},e)})})},g=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,p.BX)(c.Flex,{gap:1,className:s.proseBlockClassname,children:[(0,p.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,p.tZ)(d.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,p.tZ)(o.Box,{background:"shade",children:(0,p.tZ)(d.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,p.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,p.tZ)(d.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,p.tZ)(o.Box,{background:"shade",children:(0,p.tZ)(d.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,p.BX)(c.Flex,{flexDirection:"column",gap:1,children:[(0,p.tZ)(d.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,p.tZ)(o.Box,{background:"shade",children:(0,p.tZ)(d.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})}},1466:function(e,t,n){"use strict";n.d(t,{AR:function(){return p},Gw:function(){return u},Sg:function(){return d}});var r=n(849),i=n(1246),o=n(9643),c=n(7876),l=n(6596),a=n(7800);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var d={border:{label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{label:"Breakpoints",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices."},colour:{label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},"max-width":{label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."},elevation:{label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens for handling the relative distance between two surfaces along the z-axis."}},u=Object.entries(d).map(function(e){var t=(0,i.Z)(e,2),n=t[0],o=t[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(n)},o)}),p=function(e){var t=e.editPath,n=e.children,r=e.title,i=e.description;return(0,a.tZ)(o.I,{applyMainElement:!1,children:(0,a.BX)(c.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:u.map(function(e){return{href:e.href,label:e.label}})},editPath:t,breadcrumbs:[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:r}],children:[(0,a.tZ)(l.V,{title:r,introduction:i}),n]})})}},8721:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1858),i=n(29),o=n(3022),c=n(3863),l=n(8531),a=n(1466),s=n(5875),d=n(7800);function u(){return(0,d.BX)(d.HY,{children:[(0,d.tZ)(l.$,{title:a.Sg.border.pageTitle,description:a.Sg.border.description}),(0,d.BX)(a.AR,{title:a.Sg.border.pageTitle,description:a.Sg.border.description,editPath:"/docs/pages/foundations/tokens/border.tsx",children:[(0,d.tZ)(c.InpageNav,{title:"On this page",links:[{href:"#border-width",label:"Border width"},{href:"#border-radius-tokens",label:"Border radius tokens"}]}),(0,d.BX)(r.Prose,{children:[(0,d.tZ)("h2",{id:"border-width",children:"Border width"}),(0,d.BX)("p",{children:["The following ",Object.keys(o.tokens.borderWidth).length," tokens can be used to set the thickness of borders."]}),(0,d.tZ)(s.zE,{}),(0,d.tZ)("h2",{id:"border-radius-tokens",children:"Border radius tokens"}),(0,d.tZ)("p",{children:"Use the following border radius token to apply rounded corners to containers."}),(0,d.tZ)("ul",{children:(0,d.BX)("li",{children:[o.tokens.borderRadius,"px"]})}),(0,d.BX)("p",{children:["Use it by setting ",(0,d.tZ)("code",{children:"rounded"})," on the Box component as seen in the following example."]}),(0,d.tZ)(i.Box,{border:!0,rounded:!0,padding:.5,className:r.proseBlockClassname,children:"A Box with rounded corners"})]})]})]})}},2908:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(6590),r()},3863:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(2478),r()},2478:function(e,t,n){"use strict";n.d(t,{InpageNav:function(){return v},InpageNavContainer:function(){return s},InpageNavItem:function(){return f},InpageNavItemContainer:function(){return d},InpageNavTitle:function(){return g}});var r=n(849),i=n(89),o=n(43),c=n(5825),l=n(3255),a=n(7800),s=function(e){var t=e.children,n=e["aria-label"];return(0,a.tZ)(c.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,o.iv)({borderLeftColor:l.boxPalette.foregroundAction},"",""),"aria-label":n,children:t})},d=function(e){var t=e.children;return(0,a.tZ)(c.Stack,{as:"ul",gap:.5,children:t})},u=n(7994),p=n(2377);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=function(e){return(0,a.tZ)(u.Box,{as:"li",children:(0,a.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))})},b=n(2474),g=function(e){var t=e.children;return(0,a.tZ)(b.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},m=["label"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=function(e){var t=e["aria-label"],n=e.links,r=e.title;return(0,a.BX)(s,{"aria-label":void 0===t?"in page":t,children:[r?(0,a.tZ)(g,{children:r}):null,(0,a.tZ)(d,{children:n.map(function(e,t){var n=e.label,r=(0,i.Z)(e,m);return(0,a.tZ)(f,k(k({},r),{},{children:n}),t)})})]})}},5723:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/border",function(){return n(8721)}])}},function(e){e.O(0,[758,442,255,263,48,858,774,888,179],function(){return e(e.s=5723)}),_N_E=e.O()}]);