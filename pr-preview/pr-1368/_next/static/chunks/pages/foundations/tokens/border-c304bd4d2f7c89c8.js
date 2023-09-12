(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{7876:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var r=n(849),i=n(6677),o=n(9810),s=n(6268),l=n(6783),c=n(2908),a=n(3294),d=n(7103),u=n(2673),p=n(1262),h=n(7800);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e){var t=e.applyMainElement,n=void 0!==t&&t,r=e.breadcrumbs,f=e.children,g=e.editPath,k=e.sideNav,m=e.skipLinks,y=(0,i.useRouter)();return(0,h.tZ)(o.PageContent,{children:(0,h.BX)(c.Columns,{children:[k&&(0,h.tZ)(c.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,h.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,h.tZ)(a.SideNav,{collapseTitle:"In this section",activePath:y.asPath,title:k.title,titleLink:k.titleLink,items:k.items})})}),(0,h.BX)(c.Column,b(b({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:k?5:1},children:[null!=m&&m.length?(0,h.tZ)(d.SkipLinks,{links:m}):null,(0,h.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,h.tZ)(u.Breadcrumbs,{links:r}):null,f,g&&(0,h.tZ)(s.Flex,{justifyContent:"flex-start",children:(0,h.tZ)(p.e,{path:g})})]})]}))]})})}},6596:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var r=n(6783),i=n(1966),o=n(9204),s=n(7800),l=function(e){var t=e.pretext,n=e.title,l=e.introduction,c=e.callToAction;return(0,s.BX)(r.Stack,{gap:1.5,children:[(0,s.BX)(r.Stack,{children:[t?(0,s.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,s.tZ)(i.H1,{children:n})]}),l?(0,s.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,c]})}},1466:function(e,t,n){"use strict";n.d(t,{AR:function(){return p},Gw:function(){return u},Sg:function(){return d}});var r=n(849),i=n(1246),o=n(9643),s=n(7876),l=n(6596),c=n(7800);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var d={border:{label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{label:"Breakpoints",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices."},colour:{label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},elevation:{label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens which are used to establish a sense of depth and perspective."},"max-width":{label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},u=Object.entries(d).map(function(e){var t=(0,i.Z)(e,2),n=t[0],o=t[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(n)},o)}),p=function(e){var t=e.editPath,n=e.children,r=e.title,i=e.description;return(0,c.tZ)(o.I,{applyMainElement:!1,children:(0,c.BX)(s.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:u.map(function(e){return{href:e.href,label:e.label}})},editPath:t,breadcrumbs:[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:r}],children:[(0,c.tZ)(l.V,{title:r,introduction:i}),n]})})}},8721:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1858),i=n(29),o=n(3022),s=n(3863),l=n(8531),c=n(1466),a=n(5875),d=n(7800);function u(){return(0,d.BX)(d.HY,{children:[(0,d.tZ)(l.$,{title:c.Sg.border.pageTitle,description:c.Sg.border.description}),(0,d.BX)(c.AR,{title:c.Sg.border.pageTitle,description:c.Sg.border.description,editPath:"/docs/pages/foundations/tokens/border.tsx",children:[(0,d.tZ)(s.InpageNav,{title:"On this page",links:[{href:"#border-width",label:"Border width"},{href:"#border-radius-tokens",label:"Border radius tokens"}]}),(0,d.BX)(r.Prose,{children:[(0,d.tZ)("h2",{id:"border-width",children:"Border width"}),(0,d.BX)("p",{children:["The following ",Object.keys(o.tokens.borderWidth).length," tokens can be used to set the thickness of borders."]}),(0,d.tZ)(a.z5,{}),(0,d.tZ)("h2",{id:"border-radius-tokens",children:"Border radius tokens"}),(0,d.tZ)("p",{children:"Use the following border radius token to apply rounded corners to containers."}),(0,d.tZ)("ul",{children:(0,d.BX)("li",{children:[o.tokens.borderRadius,"px"]})}),(0,d.BX)("p",{children:["Use it by setting ",(0,d.tZ)("code",{children:"rounded"})," on the Box component as seen in the following example."]}),(0,d.tZ)(i.Box,{border:!0,rounded:!0,padding:.5,className:r.proseBlockClassname,children:"A Box with rounded corners"})]})]})]})}},5723:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/border",function(){return n(8721)}])}},function(e){e.O(0,[758,442,8,255,799,263,5,796,966,875,774,888,179],function(){return e(e.s=5723)}),_N_E=e.O()}]);