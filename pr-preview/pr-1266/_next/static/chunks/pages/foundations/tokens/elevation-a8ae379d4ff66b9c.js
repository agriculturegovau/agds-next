(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{7489:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var i=n(849),r=n(6677),o=n(4276),l=n(5784),a=n(9525),s=n(6710),c=n(4138),d=n(8192),u=n(2010),p=n(3229),h=n(7800);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=e.breadcrumbs,i=e.children,f=e.editPath,g=e.sideNav,m=e.skipLinks,k=(0,r.useRouter)();return(0,h.tZ)(o.PageContent,{children:(0,h.BX)(s.Columns,{children:[g&&(0,h.tZ)(s.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,h.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,h.tZ)(c.SideNav,{collapseTitle:"In this section",activePath:k.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,h.BX)(s.Column,b(b({},void 0!==t&&t&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=m&&m.length?(0,h.tZ)(d.SkipLinks,{links:m}):null,(0,h.BX)(a.Stack,{flexGrow:1,gap:3,children:[null!=n&&n.length?(0,h.tZ)(u.Breadcrumbs,{links:n}):null,i,f&&(0,h.tZ)(l.Flex,{justifyContent:"flex-start",children:(0,h.tZ)(p.e,{path:f})})]})]}))]})})}},3029:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var i=n(9525),r=n(4239),o=n(3009),l=n(7800),a=function(e){var t=e.pretext,n=e.title,a=e.introduction,s=e.callToAction;return(0,l.BX)(i.Stack,{gap:1.5,children:[(0,l.BX)(i.Stack,{children:[t?(0,l.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,l.tZ)(r.H1,{children:n})]}),a?(0,l.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,s]})}},3536:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var i=n(8590),r=n(8018),o=n(7489),l=n(3029),a=n(7800),s=function(e){var t=e.breadcrumbs,n=e.editPath,s=e.children,c=e.title,d=e.description;return(0,a.tZ)(r.I,{applyMainElement:!1,children:(0,a.BX)(o.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:i.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:n,breadcrumbs:t,children:[(0,a.tZ)(l.V,{title:c,introduction:d}),s]})})}},8590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return l},Qu:function(){return a},Sg:function(){return o}});var i=n(849);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."},elevation:{slug:"elevation",label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens for handling the relative distance between two surfaces along the z-axis."}},l=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function a(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},1414:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=n(1246),r=n(7378),o=n(4144),l=n(7348),a=n(8920),s=n(8119),c=n(3536),d=n(8590),u=n(7800),p={base:{value:o.tokens.zIndex.base,description:"The base z-index."},elevated:{value:o.tokens.zIndex.elevated,description:"Used to elevate elements above adjacent elements that sit on the base z-index."},overlay:{value:o.tokens.zIndex.overlay,description:(0,u.BX)(r.Fragment,{children:["Used for overlays in modals and other components that sit on top of the page - e.g. ",(0,u.tZ)(l.TextLink,{href:"/components/modal",children:"Modal"}),","," ",(0,u.tZ)(l.TextLink,{href:"/components/filter-drawer",children:"Filter drawer"}),","," ",(0,u.tZ)(l.TextLink,{href:"/components/main-nav",children:"Main nav (mobile)"}),"."]})},dialog:{value:o.tokens.zIndex.dialog,description:(0,u.BX)(r.Fragment,{children:["Used for the main dialog element in modals and other components that sit on top of the - e.g. ",(0,u.tZ)(l.TextLink,{href:"/components/modal",children:"Modal"}),", ",(0,u.tZ)(l.TextLink,{href:"/components/filter-drawer",children:"Filter drawer"}),","," ",(0,u.tZ)(l.TextLink,{href:"/components/main-nav",children:"Main nav (mobile)"}),"."]})},popover:{value:o.tokens.zIndex.popover,description:(0,u.BX)(r.Fragment,{children:["Used for popover elements - e.g. the calendar popover in the"," ",(0,u.tZ)(l.TextLink,{href:"/components/date-picker",children:"Date picker"}),"."]})},skipLink:{value:o.tokens.zIndex.skipLink,description:(0,u.BX)(r.Fragment,{children:["Used for focused"," ",(0,u.tZ)(l.TextLink,{href:"/components/skip-link",children:"Skip links"}),"."]})}};function h(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(s.$,{title:d.Sg.elevation.pageTitle,description:d.Sg.elevation.description}),(0,u.tZ)(c.A,{title:d.Sg.elevation.pageTitle,description:d.Sg.elevation.description,breadcrumbs:(0,d.Qu)(d.Sg.elevation),editPath:"/docs/pages/foundations/tokens/max-width.tsx",children:(0,u.tZ)(a.TableWrapper,{children:(0,u.BX)(a.Table,{children:[(0,u.tZ)(a.TableCaption,{children:"Z-Index tokens"}),(0,u.tZ)(a.TableHead,{children:(0,u.BX)("tr",{children:[(0,u.tZ)(a.TableHeader,{scope:"col",width:"25%",children:"Token"}),(0,u.tZ)(a.TableHeader,{scope:"col",width:"25%",children:"Value"}),(0,u.tZ)(a.TableHeader,{scope:"col",width:"50%",children:"Description"})]})}),(0,u.tZ)(a.TableBody,{children:Object.entries(p).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o=r.value,l=r.description;return(0,u.BX)("tr",{children:[(0,u.tZ)(a.TableCell,{children:n}),(0,u.tZ)(a.TableCell,{children:o}),(0,u.tZ)(a.TableCell,{children:l})]},n)})})]})})})]})}},6710:function(e,t,n){"use strict";var i=n(1502).___internalHook("/","../../../..","../..");e.exports=n(2590),i()},6501:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/elevation",function(){return n(1414)}])}},function(e){e.O(0,[758,442,559,708,685,774,888,179],function(){return e(e.s=6501)}),_N_E=e.O()}]);