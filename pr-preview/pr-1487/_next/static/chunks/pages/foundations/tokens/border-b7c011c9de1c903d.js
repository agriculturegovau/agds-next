(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{9163:function(e,t,n){"use strict";n.d(t,{X:function(){return PageLayout}});var r=n(849),o=n(6677),i=n(2892),s=n(4348),a=n(8717),l=n(3135),c=n(4235),d=n(3344),u=n(5600),p=n(5537),h=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function PageLayout(e){var t=e.applyMainElement,n=void 0!==t&&t,r=e.breadcrumbs,f=e.children,b=e.editPath,g=e.sideNav,k=e.skipLinks,y=(0,o.useRouter)();return(0,h.tZ)(i.PageContent,{children:(0,h.BX)(l.Columns,{children:[g&&(0,h.tZ)(l.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,h.tZ)(i.ContentBleed,{visible:{md:!1},children:(0,h.tZ)(c.SideNav,{collapseTitle:"In this section",activePath:y.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,h.BX)(l.Column,_objectSpread(_objectSpread({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=k&&k.length?(0,h.tZ)(d.SkipLinks,{links:k}):null,(0,h.BX)(a.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,h.tZ)(u.Breadcrumbs,{links:r}):null,f,b&&(0,h.tZ)(s.Flex,{justifyContent:"flex-start",children:(0,h.tZ)(p.e,{path:b})})]})]}))]})})}},1014:function(e,t,n){"use strict";n.d(t,{V:function(){return PageTitle}});var r=n(8717),o=n(2852),i=n(4149),s=n(7800),PageTitle=function(e){var t=e.pretext,n=e.title,a=e.introduction,l=e.callToAction;return(0,s.BX)(r.Stack,{gap:1.5,children:[(0,s.BX)(r.Stack,{children:[t?(0,s.tZ)(i.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,s.tZ)(o.H1,{children:n})]}),a?(0,s.tZ)(i.Text,{as:"p",fontSize:"md",color:"muted",children:a}):null,l]})}},4957:function(e,t,n){"use strict";n.d(t,{AR:function(){return TokenLayout},Gw:function(){return d},Sg:function(){return c}});var r=n(849),o=n(1246),i=n(4617),s=n(9163),a=n(1014),l=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var c={border:{label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{label:"Breakpoints",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices."},colour:{label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},elevation:{label:"Elevation",pageTitle:"Elevation tokens",description:"A set of predefined tokens which are used to establish a sense of depth and perspective."},"max-width":{label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},d=Object.entries(c).map(function(e){var t=(0,o.Z)(e,2),n=t[0],i=t[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(n)},i)}),TokenLayout=function(e){var t=e.editPath,n=e.children,r=e.title,o=e.description;return(0,l.tZ)(i.I,{applyMainElement:!1,children:(0,l.BX)(s.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:d.map(function(e){return{href:e.href,label:e.label}})},editPath:t,breadcrumbs:[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:r}],children:[(0,l.tZ)(a.V,{title:r,introduction:o}),n]})})}},3747:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return TokensBorderWidthPage}});var r=n(5933),o=n(647),i=n(4855),s=n(741),a=n(6949),l=n(4957),c=n(360),d=n(7800);function TokensBorderWidthPage(){return(0,d.BX)(d.HY,{children:[(0,d.tZ)(a.$,{title:l.Sg.border.pageTitle,description:l.Sg.border.description}),(0,d.BX)(l.AR,{title:l.Sg.border.pageTitle,description:l.Sg.border.description,editPath:"/docs/pages/foundations/tokens/border.tsx",children:[(0,d.tZ)(s.InpageNav,{title:"On this page",links:[{href:"#border-width",label:"Border width"},{href:"#border-radius-tokens",label:"Border radius tokens"}]}),(0,d.BX)(r.Prose,{children:[(0,d.tZ)("h2",{id:"border-width",children:"Border width"}),(0,d.BX)("p",{children:["The following ",Object.keys(i.tokens.borderWidth).length," tokens can be used to set the thickness of borders."]}),(0,d.tZ)(c.z5,{}),(0,d.tZ)("h2",{id:"border-radius-tokens",children:"Border radius tokens"}),(0,d.tZ)("p",{children:"Use the following border radius token to apply rounded corners to containers."}),(0,d.tZ)("ul",{children:(0,d.BX)("li",{children:[i.tokens.borderRadius,"px"]})}),(0,d.BX)("p",{children:["Use it by setting ",(0,d.tZ)("code",{children:"rounded"})," on the Box component as seen in the following example."]}),(0,d.tZ)(o.Box,{border:!0,rounded:!0,padding:.5,className:r.proseBlockClassname,children:"A Box with rounded corners"})]})]})]})}},5723:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/border",function(){return n(3747)}])}},function(e){e.O(0,[825,442,853,59,957,153,41,169,737,731,360,774,888,179],function(){return e(e.s=5723)}),_N_E=e.O()}]);