(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9037],{88338:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(44310),r()},54389:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(98028),r()},44310:function(e,t,n){"use strict";n.d(t,{Breadcrumbs:function(){return P}});var r=n(90849),i=n(90089),o=n(27378),l=n(64388),a=n(10043),c=n(84007),d=n(23914),s=n(87800);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var p=function(e){var t,n=e.children,i=e["aria-label"],o=e.isExpandable,l=e.isExpanded;return(0,s.tZ)("nav",{"aria-label":i,children:(0,s.tZ)(c.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,a.iv)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!l&&(t={},(0,r.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,r.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:l?void 0:"none"}}),t)),"",""),children:n})})},f=n(7971),h=n(32084),b={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},g=function(){return(0,s.tZ)(h.XC,{color:"border",size:"sm",css:b})};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var y=(0,o.forwardRef)(function(e,t){var n=e.children,i=e.href;return(0,s.BX)(c.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,s.tZ)(g,{}),i?(0,s.tZ)(f.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({ref:t},e)):n]})}),v=n(11475);function Z(e){var t=e.onClick;return(0,s.tZ)(y,{children:(0,s.tZ)(c.Flex,{as:v.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focusRingFor:"keyboard",link:!0,children:"…"})})}var O=["label"],x=["label"],w=["label"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=function(e){var t=e["aria-label"],n=e.links,r=(0,o.useRef)(null),a=n[0],c=a.label,d=(0,i.Z)(a,O),u=n[n.length-1],f=u.label,h=(0,i.Z)(u,x),b=n.filter(function(e,t,n){return!(0===t||t===n.length-1)}),g=(0,o.useState)(!b.length),m=g[0],v=g[1];return(0,s.BX)(p,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:m,children:[(0,s.tZ)(y,j(j({ref:r},d),{},{children:c})),!m&&b.length?(0,s.tZ)(Z,{onClick:function(){var e;v(!0),null===(e=r.current)||void 0===e||e.focus()}}):null,b.map(function(e,t){var n=e.label,r=(0,i.Z)(e,w);return(0,s.tZ)(y,j(j({},r),{},{children:n}),t)}),(0,s.BX)(y,j(j({},h),{},{children:[f,(0,s.tZ)(l.TX,{children:" (current page)"})]}))]})}},98028:function(e,t,n){"use strict";n.d(t,{Callout:function(){return u}});var r=n(10043),i=n(84007),o=n(7226),l=n(89205),a=n(40631),c=n(87800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},s=function(e){var t=e.as,n=e.children,r=e.variant;return(0,c.tZ)(l.Text,{as:void 0===t?"h2":t,fontSize:d[void 0===r?"regular":r].titleSize,fontWeight:"bold",lineHeight:"heading",children:n})},u=function(e){var t=e.as,n=e.background,l=e.children,u=e.icon,p=e.onBodyAlt,f=e.title,h=e.tone,b=void 0===h?"neutral":h,g=e.variant,m=void 0===g?"regular":g,y=d[m],v=y.textGap,Z=y.iconGap,O=y.padding,x=y.flexDirection,w=y.titlePaddingTop,k={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,c.tZ)(a.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[m].iconSize})}}[b],j=k.background,P=k.border,S=k.icon;return(0,c.BX)(i.Flex,{as:t,flexDirection:x,rounded:!0,gap:Z,background:"neutral"===b&&(null!=p?p:"shadeAlt"===n)?"shadeAlt":j,borderColor:P,padding:O,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u||S?(0,c.tZ)(i.Flex,{flexShrink:0,children:u||S}):null,(0,c.BX)(o.Stack,{gap:v,css:(0,r.iv)({paddingTop:w},"",""),children:[f?(0,c.tZ)(s,{variant:m,children:f}):null,l]})]})}},911:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(54389),i=n(68944),o=n(79706),l=n(87800);function a(){return(0,l.tZ)(r.Callout,{title:"Need help?",children:(0,l.BX)(i.Text,{as:"p",children:["Call ",(0,l.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,l.tZ)("br",{}),"Email ",(0,l.tZ)(o.TextLink,{href:"/not-found",children:"emailaccount@yourgov.gov.au"})]})})}},15748:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var r=n(27378),i=n(50456),o=n(94303),l=n(68944),a=n(87800),c=function(e){var t=e.pretext,n=e.title,c=e.introduction,d=e.callToAction;return(0,a.BX)(i.Stack,{gap:1.5,children:[(0,a.BX)(i.Stack,{children:[t?(0,a.tZ)(l.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,a.tZ)(o.H1,{children:n})]}),c?(0,a.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:c}):null,d]})}},34500:function(e,t,n){"use strict";n.r(t);var r=n(27378),i=n(74578),o=n(20034),l=n(50456),a=n(88338),c=n(41380),d=n(47586),s=n(2951),u=n(79706),p=n(40670),f=n(54803),h=n(15748),b=n(911),g=n(29363),m=n(87800),y=function(){return(0,m.BX)(r.Fragment,{children:[(0,m.tZ)(p.$,{title:"Manage licences and permits"}),(0,m.tZ)(i.PageContent,{children:(0,m.tZ)(s.Columns,{children:(0,m.tZ)(s.Column,{columnSpan:8,children:(0,m.BX)(l.Stack,{gap:3,children:[(0,m.tZ)(a.Breadcrumbs,{links:[{label:"Home",href:"/app"},{label:"Manage licences and permits",href:"/app/licences-and-permits"},{label:"Apply for a new licence or permit",href:"/app/licences-and-permits/apply"},{label:"Apply for a mobile food vendor permit"}]}),(0,m.tZ)(h.V,{title:"Apply for a mobile food vendor permit",introduction:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas.",callToAction:(0,m.tZ)(o.Details,{label:"More information about mobile food vending business types",children:"Need content."})}),(0,m.tZ)(g.Sf,{}),(0,m.tZ)(d.Divider,{}),(0,m.tZ)(l.Stack,{alignItems:"flex-start",gap:1.5,children:(0,m.BX)(c.Prose,{children:[(0,m.tZ)("h2",{id:"what-you-will-need",children:"What you will need"}),(0,m.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:"vehicle registration details and vehicle plans"}),(0,m.tZ)("li",{children:"operational plan of management"}),(0,m.tZ)("li",{children:"food safety supervisor certificate"}),(0,m.tZ)("li",{children:"names of any employees who will be handling food"}),(0,m.tZ)("li",{children:"once you have confirmed business and employee details we will provide a checklist of required documents"})]}),(0,m.tZ)("h2",{id:"what-you-will-need",children:"What happens next"}),(0,m.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:"Address details"}),(0,m.tZ)("li",{children:"current vaccination certificate"})]}),(0,m.tZ)("h2",{id:"more-information",children:"More information"}),(0,m.tZ)("h3",{children:"Links"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"Understand food safety requirements"})}),(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"New laws for food businesses"})}),(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"Restricted areas and exclusion zones"})}),(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"Hours of operation"})})]})]})}),(0,m.tZ)(b.O,{})]})})})})]})};t.default=y,y.getLayout=function(e){return(0,m.tZ)(f.L,{children:e})}},33732:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/licences-and-permits/apply/mobile-food-vendor-permit",function(){return n(34500)}])}},function(e){e.O(0,[8629,9998,2376,5976,3662,3635,8486,5717,5265,8010,4373,2524,4803,9363,9774,2888,179],function(){return e(e.s=33732)}),_N_E=e.O()}]);