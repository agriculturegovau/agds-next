(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{15600:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(83276),n()},84199:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(23599),n()},53135:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(70800),n()},67490:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(56001),n()},83276:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return Breadcrumbs}});var n=r(90849),i=r(90089),o=r(27378),l=r(27137),a=r(10043),c=r(76573),d=r(30294),s=r(87800);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var BreadcrumbsContainer=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,l=e.isExpanded;return(0,s.tZ)("nav",{"aria-label":i,children:(0,s.tZ)(c.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,a.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!l&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:l?void 0:"none"}}),t)),"",""),children:r})})},u=r(62231),p=r(69272),f={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,s.tZ)(p.XC,{color:"border",size:"sm",css:f})};function BreadcrumbsItem_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,s.BX)(c.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,s.tZ)(BreadcrumbsDivider,{}),i?(0,s.tZ)(u.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?BreadcrumbsItem_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):BreadcrumbsItem_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),b=r(71233);function BreadcrumbsToggle(e){var t=e.onClick;return(0,s.tZ)(h,{children:(0,s.tZ)(c.Flex,{as:b.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var m=["label"],g=["label"],y=["label"];function Breadcrumbs_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Breadcrumbs_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Breadcrumbs_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Breadcrumbs_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Breadcrumbs=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),a=r[0],c=a.label,d=(0,i.Z)(a,m),u=r[r.length-1],p=u.label,f=(0,i.Z)(u,g),b=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),v=(0,o.useState)(!b.length),Z=v[0],w=v[1];return(0,s.BX)(BreadcrumbsContainer,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:Z,children:[(0,s.tZ)(h,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:n},d),{},{children:c})),!Z&&b.length?(0,s.tZ)(BreadcrumbsToggle,{onClick:function(){var e;w(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,b.map(function(e,t){var r=e.label,n=(0,i.Z)(e,y);return(0,s.tZ)(h,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},n),{},{children:r}),t)}),(0,s.BX)(h,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},f),{},{children:[p,(0,s.tZ)(l.TX,{children:" (current page)"})]}))]})}},23599:function(e,t,r){"use strict";r.d(t,{Callout:function(){return Callout}});var n=r(10043),i=r(76573),o=r(37601),l=r(18979),a=r(90632),c=r(87800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},CalloutTitle=function(e){var t=e.as,r=e.children,n=e.variant;return(0,c.tZ)(l.Text,{as:void 0===t?"h2":t,fontSize:d[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:r})},Callout=function(e){var t=e.as,r=e.background,l=e.children,s=e.icon,u=e.onBodyAlt,p=e.title,f=e.tone,h=void 0===f?"neutral":f,b=e.variant,m=void 0===b?"regular":b,g=d[m],y=g.textGap,v=g.iconGap,Z=g.padding,w=g.flexDirection,O=g.titlePaddingTop,x={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,c.tZ)(a.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[m].iconSize})}}[h],B=x.background,k=x.border,j=x.icon;return(0,c.BX)(i.Flex,{as:t,flexDirection:w,rounded:!0,gap:v,background:"neutral"===h&&(null!=u?u:"shadeAlt"===r)?"shadeAlt":B,borderColor:k,padding:Z,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[s||j?(0,c.tZ)(i.Flex,{flexShrink:0,children:s||j}):null,(0,c.BX)(o.Stack,{gap:y,css:(0,n.iv)({paddingTop:O},"",""),children:[p?(0,c.tZ)(CalloutTitle,{variant:m,children:p}):null,l]})]})}},56001:function(e,t,r){"use strict";r.d(t,{Details:function(){return u}});var n=r(10043),i=r(27378),o=r(34339),l=r(30294),a=r(76573),c=r(69272),d=r(87800),s={name:"17m7bq9",styles:"&[open] summary svg:last-of-type{transform:rotate(180deg);}summary::marker, summary::-webkit-details-marker{display:none;}"},u=(0,i.forwardRef)(function(e,t){var r=e.children,i=e.onBodyAlt,u=e.iconBefore,p=e.label;return(0,d.BX)("details",{ref:t,css:s,children:[(0,d.BX)(a.Flex,{as:"summary",inline:!0,link:!0,focus:!0,alignItems:"center",fontWeight:"bold",paddingY:.5,rounded:!0,children:[void 0!==u&&u&&(0,d.tZ)(c.sz,{weight:"regular",size:"md",css:(0,n.iv)({marginRight:(0,l.mapSpacing)(.5)},"","")}),void 0===p?"Details":p,(0,d.tZ)(c.ChevronDownIcon,{weight:"bold",css:(0,n.iv)({marginLeft:(0,l.mapSpacing)(.25)},"","")})]}),(0,d.tZ)(o.Box,{background:void 0!==i&&i?"shadeAlt":"shade",padding:1.5,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:r})]})})},67163:function(e,t,r){"use strict";r.d(t,{O:function(){return HelpCallout}});var n=r(84199),i=r(54149),o=r(68160),l=r(87800);function HelpCallout(){return(0,l.tZ)(n.Callout,{title:"Need help?",children:(0,l.BX)(i.Text,{as:"p",children:["Call ",(0,l.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,l.tZ)("br",{}),"Email ",(0,l.tZ)(o.TextLink,{href:"/not-found",children:"emailaccount@yourgov.gov.au"})]})})}},61014:function(e,t,r){"use strict";r.d(t,{V:function(){return PageTitle}});var n=r(27378),i=r(18717),o=r(92852),l=r(54149),a=r(87800),PageTitle=function(e){var t=e.pretext,r=e.title,c=e.introduction,d=e.callToAction;return(0,a.BX)(i.Stack,{gap:1.5,children:[(0,a.BX)(i.Stack,{children:[t?(0,a.tZ)(l.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,a.tZ)(o.H1,{children:r})]}),c?(0,a.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:c}):null,d]})}},46834:function(e,t,r){"use strict";r.r(t);var n=r(27378),i=r(72892),o=r(67490),l=r(18717),a=r(15600),c=r(15933),d=r(55735),s=r(53135),u=r(68160),p=r(16949),f=r(91492),h=r(61014),b=r(67163),m=r(87800),Page=function(){return(0,m.BX)(n.Fragment,{children:[(0,m.tZ)(p.$,{title:"Manage licences and permits"}),(0,m.tZ)(i.PageContent,{children:(0,m.tZ)(s.Columns,{children:(0,m.tZ)(s.Column,{columnSpan:8,children:(0,m.BX)(l.Stack,{gap:3,children:[(0,m.tZ)(a.Breadcrumbs,{links:[{label:"Home",href:"/app"},{label:"Manage licences and permits",href:"/app/licences-and-permits"},{label:"Apply for a new licence or permit",href:"/app/licences-and-permits/apply"},{label:"Apply for a mobile food vendor permit"}]}),(0,m.tZ)(h.V,{title:"Apply for a mobile food vendor permit",introduction:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas.",callToAction:(0,m.tZ)(o.Details,{label:"More information about mobile food vending business types",children:"Need content."})}),(0,m.tZ)("p",{children:"Form content"}),(0,m.tZ)(d.Divider,{}),(0,m.tZ)(l.Stack,{alignItems:"flex-start",gap:1.5,children:(0,m.BX)(c.Prose,{children:[(0,m.tZ)("h2",{id:"what-you-will-need",children:"What you will need"}),(0,m.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:"vehicle registration details and vehicle plans"}),(0,m.tZ)("li",{children:"operational plan of management"}),(0,m.tZ)("li",{children:"food safety supervisor certificate"}),(0,m.tZ)("li",{children:"names of any employees who will be handling food"}),(0,m.tZ)("li",{children:"once you have confirmed business and employee details we will provide a checklist of required documents"})]}),(0,m.tZ)("h2",{id:"what-you-will-need",children:"What happens next"}),(0,m.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:"Address details"}),(0,m.tZ)("li",{children:"current vaccination certificate"})]}),(0,m.tZ)("h2",{id:"more-information",children:"More information"}),(0,m.tZ)("h3",{children:"Links"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"Understand food safety requirements"})}),(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"New laws for food businesses"})}),(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"Restricted areas and exclusion zones"})}),(0,m.tZ)("li",{children:(0,m.tZ)(u.TextLinkExternal,{href:"/not-found",children:"Hours of operation"})})]})]})}),(0,m.tZ)(b.O,{})]})})})})]})};t.default=Page,Page.getLayout=function(e){return(0,m.tZ)(f.L,{children:e})}},33732:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/licences-and-permits/apply/mobile-food-vendor-permit",function(){return r(46834)}])}},function(e){e.O(0,[459,998,490,924,492,774,888,179],function(){return e(e.s=33732)}),_N_E=e.O()}]);