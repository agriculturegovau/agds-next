(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{7876:function(e,t,n){"use strict";n.d(t,{X:function(){return m}});var i=n(849),r=n(6677),o=n(9810),a=n(6268),l=n(6783),c=n(2908),s=n(3294),d=n(7103),p=n(2673),u=n(1262),h=n(7800);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){var t=e.applyMainElement,n=void 0!==t&&t,i=e.breadcrumbs,f=e.children,m=e.editPath,g=e.sideNav,k=e.skipLinks,v=(0,r.useRouter)();return(0,h.tZ)(o.PageContent,{children:(0,h.BX)(c.Columns,{children:[g&&(0,h.tZ)(c.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,h.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,h.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:v.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,h.BX)(c.Column,b(b({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=k&&k.length?(0,h.tZ)(d.SkipLinks,{links:k}):null,(0,h.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=i&&i.length?(0,h.tZ)(p.Breadcrumbs,{links:i}):null,f,m&&(0,h.tZ)(a.Flex,{justifyContent:"flex-start",children:(0,h.tZ)(u.e,{path:m})})]})]}))]})})}},6596:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var i=n(6783),r=n(1966),o=n(9204),a=n(3022),l=n(7800),c=function(e){var t=e.pretext,n=e.title,c=e.introduction,s=e.callToAction;return(0,l.BX)(i.Stack,{gap:1.5,children:[(0,l.BX)(i.Stack,{children:[t?(0,l.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,l.tZ)(r.H1,{children:n})]}),c?(0,l.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",maxWidth:a.tokens.maxWidth.bodyText,children:c}):null,s]})}},1466:function(e,t,n){"use strict";n.d(t,{AR:function(){return u},Gw:function(){return p},Sg:function(){return d}});var i=n(849),r=n(1246),o=n(9643),a=n(7876),l=n(6596),c=n(7800);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var d={border:{label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{label:"Breakpoints",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices."},colour:{label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},"max-width":{label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."},elevation:{label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens for handling the relative distance between two surfaces along the z-axis."}},p=Object.entries(d).map(function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(n)},o)}),u=function(e){var t=e.editPath,n=e.children,i=e.title,r=e.description;return(0,c.tZ)(o.I,{applyMainElement:!1,children:(0,c.BX)(a.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:p.map(function(e){return{href:e.href,label:e.label}})},editPath:t,breadcrumbs:[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:i}],children:[(0,c.tZ)(l.V,{title:i,introduction:r}),n]})})}},2624:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(1246),r=n(7378),o=n(3022),a=n(3540),l=n(1048),c=n(1466),s=n(8531),d=n(7800),p={base:{value:o.tokens.zIndex.base,description:"The base z-index."},elevated:{value:o.tokens.zIndex.elevated,description:"Used to elevate elements above adjacent elements that sit on the base z-index."},overlay:{value:o.tokens.zIndex.overlay,description:(0,d.BX)(r.Fragment,{children:["Used for overlays in modals and other components that sit on top of the page - e.g. ",(0,d.tZ)(a.TextLink,{href:"/components/modal",children:"Modal"}),","," ",(0,d.tZ)(a.TextLink,{href:"/components/filter-drawer",children:"Filter drawer"}),","," ",(0,d.tZ)(a.TextLink,{href:"/components/main-nav",children:"Main nav (mobile)"}),"."]})},dialog:{value:o.tokens.zIndex.dialog,description:(0,d.BX)(r.Fragment,{children:["Used for the main dialog element in modals and other components that sit on top of the - e.g. ",(0,d.tZ)(a.TextLink,{href:"/components/modal",children:"Modal"}),", ",(0,d.tZ)(a.TextLink,{href:"/components/filter-drawer",children:"Filter drawer"}),","," ",(0,d.tZ)(a.TextLink,{href:"/components/main-nav",children:"Main nav (mobile)"}),"."]})},popover:{value:o.tokens.zIndex.popover,description:(0,d.BX)(r.Fragment,{children:["Used for popover elements - e.g. the calendar popover in the"," ",(0,d.tZ)(a.TextLink,{href:"/components/date-picker",children:"Date picker"}),"."]})},skipLink:{value:o.tokens.zIndex.skipLink,description:(0,d.BX)(r.Fragment,{children:["Used for focused"," ",(0,d.tZ)(a.TextLink,{href:"/components/skip-link",children:"Skip links"}),"."]})}};function u(){return(0,d.BX)(d.HY,{children:[(0,d.tZ)(s.$,{title:c.Sg.elevation.pageTitle,description:c.Sg.elevation.description}),(0,d.tZ)(c.AR,{title:c.Sg.elevation.pageTitle,description:c.Sg.elevation.description,editPath:"/docs/pages/foundations/tokens/max-width.tsx",children:(0,d.tZ)(l.TableWrapper,{children:(0,d.BX)(l.Table,{children:[(0,d.tZ)(l.TableCaption,{children:"Z-Index tokens"}),(0,d.tZ)(l.TableHead,{children:(0,d.BX)("tr",{children:[(0,d.tZ)(l.TableHeader,{scope:"col",width:"25%",children:"Token"}),(0,d.tZ)(l.TableHeader,{scope:"col",width:"25%",children:"Value"}),(0,d.tZ)(l.TableHeader,{scope:"col",width:"50%",children:"Description"})]})}),(0,d.tZ)(l.TableBody,{children:Object.entries(p).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o=r.value,a=r.description;return(0,d.BX)("tr",{children:[(0,d.tZ)(l.TableCell,{children:n}),(0,d.tZ)(l.TableCell,{children:o}),(0,d.tZ)(l.TableCell,{children:a})]},n)})})]})})})]})}},2908:function(e,t,n){"use strict";var i=n(1502).___internalHook("/","../../../..","../..");e.exports=n(6590),i()},6501:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/elevation",function(){return n(2624)}])}},function(e){e.O(0,[758,442,255,263,48,774,888,179],function(){return e(e.s=6501)}),_N_E=e.O()}]);