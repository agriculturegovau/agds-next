(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{5600:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(3276),n()},3276:function(e,r,t){"use strict";t.d(r,{Breadcrumbs:function(){return Breadcrumbs}});var n=t(849),i=t(89),o=t(7378),a=t(7137),s=t(43),c=t(6573),l=t(294),d=t(7800);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var BreadcrumbsContainer=function(e){var r,t=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,d.tZ)("nav",{"aria-label":i,children:(0,d.tZ)(c.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,s.iv)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(r={},(0,n.Z)(r,l.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(r,l.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),r)),"",""),children:t})})},u=t(2231),p=t(9272),f={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,d.tZ)(p.XC,{color:"border",size:"sm",css:f})};function BreadcrumbsItem_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var b=(0,o.forwardRef)(function(e,r){var t=e.children,i=e.href;return(0,d.BX)(c.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,d.tZ)(BreadcrumbsDivider,{}),i?(0,d.tZ)(u.TextLink,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?BreadcrumbsItem_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):BreadcrumbsItem_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({ref:r},e)):t]})}),h=t(1233);function BreadcrumbsToggle(e){var r=e.onClick;return(0,d.tZ)(b,{children:(0,d.tZ)(c.Flex,{as:h.BaseButton,onClick:r,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var m=["label"],v=["label"],y=["label"];function Breadcrumbs_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Breadcrumbs_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Breadcrumbs_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Breadcrumbs_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Breadcrumbs=function(e){var r=e["aria-label"],t=e.links,n=(0,o.useRef)(null),s=t[0],c=s.label,l=(0,i.Z)(s,m),u=t[t.length-1],p=u.label,f=(0,i.Z)(u,v),h=t.filter(function(e,r,t){return!(0===r||r===t.length-1)}),g=(0,o.useState)(!h.length),O=g[0],S=g[1];return(0,d.BX)(BreadcrumbsContainer,{"aria-label":void 0===r?"breadcrumb":r,isExpandable:!0,isExpanded:O,children:[(0,d.tZ)(b,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:n},l),{},{children:c})),!O&&h.length?(0,d.tZ)(BreadcrumbsToggle,{onClick:function(){var e;S(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,h.map(function(e,r){var t=e.label,n=(0,i.Z)(e,y);return(0,d.tZ)(b,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},n),{},{children:t}),r)}),(0,d.BX)(b,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},f),{},{children:[p,(0,d.tZ)(a.TX,{children:" (current page)"})]}))]})}},416:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Page}});var n=t(2892),i=t(8803),o=t(8717),a=t(2852),s=t(4149),c=t(5600),l=t(4665),d=t(3135),u=t(1783),p=t(6949),f=t(7800);function Page(){return(0,f.BX)(f.HY,{children:[(0,f.tZ)(p.$,{title:"Services"}),(0,f.BX)(u.I,{children:[(0,f.BX)(i.HeroSubcategoryBanner,{children:[(0,f.tZ)(c.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/services",label:"Services"},{label:"Food, drink and hospitality"}]}),(0,f.tZ)(i.HeroSubcategoryBannerTitle,{children:"Food, drink and hospitality"})]}),(0,f.tZ)(n.SectionContent,{children:(0,f.BX)(o.Stack,{gap:4,children:[(0,f.BX)(o.Stack,{gap:1.5,children:[(0,f.tZ)(a.H2,{children:"Licences and permits "}),(0,f.BX)(d.Columns,{as:"ul",cols:{xs:1,sm:2,md:3},children:[(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Food safety certificates",description:"Businesses that service food and drink must appoint a certified food safety supervisor (FSS)."}),(0,f.tZ)(ServiceCard,{href:"/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas",title:"Operate a food truck, van or stall on public areas",description:"Food trucks, vans and stalls must be registered to operate on public areas."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Serve alcohol on premises",description:"Businesses must have a current liquor licence to serve liquor on premises."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Outdoor dining approval",description:"Register to serve food in a streetside setting outdoor."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Development applications",description:"Get approval for a range of construction developments."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Approval to host musical performances",description:"Venues that sell ticketed admission to music performances are required to have an appropriate licence."})]})]}),(0,f.BX)(o.Stack,{gap:1.5,children:[(0,f.tZ)(a.H2,{children:"Other services"}),(0,f.BX)(d.Columns,{as:"ul",cols:{xs:1,sm:2,md:3},children:[(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Link a business",description:"Link a business to access services online. You will need to use Relationship Authorisation Manager (RAM)."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Report a case of food borne illness",description:"Make a complaint if you have experienced food poisoning."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Check a business licence",description:"Search for business licences, permits and certificates online."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Declare an ownership change",description:"Confirm a change in business ownership and notify government agencies."})]})]}),(0,f.BX)(o.Stack,{gap:1.5,children:[(0,f.tZ)(a.H2,{children:"Guides"}),(0,f.BX)(d.Columns,{as:"ul",cols:{xs:1,sm:2,md:3},children:[(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Understand food safety requirements",description:"Learn about your obligations as a food handler and a food handling business."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Opening a small bar in NSW",description:"Get an overview of what's required to open a small bar in NSW."}),(0,f.tZ)(ServiceCard,{href:"/not-found",title:"Prepare for a food safety inspection",description:"Understand how food safety is assessed and how you can be prepared."})]})]})]})})]})]})}function ServiceCard(e){var r=e.href,t=e.title,n=e.description;return(0,f.tZ)(l.Card,{as:"li",shadow:!0,clickable:!0,children:(0,f.tZ)(l.CardInner,{children:(0,f.BX)(o.Stack,{gap:1,children:[(0,f.tZ)(a.H3,{children:(0,f.tZ)(l.CardLink,{href:r,children:t})}),n?(0,f.tZ)(s.Text,{as:"p",children:n}):null]})})})}},2916:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/food-drink-hospitality",function(){return t(416)}])}},function(e){e.O(0,[195,490,957,774,888,179],function(){return e(e.s=2916)}),_N_E=e.O()}]);