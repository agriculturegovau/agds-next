(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{3397:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return RegistrationsPage}});var n=t(7378),i=t(6677),o=t(2892),s=t(8803),a=t(4076),c=t(4149),l=t(5600),u=t(8717),d=t(4407),b=t(6949),p=t(2852),f=t(4665),g=t(3135),m=t(7800),y=[{title:"Register your car",slug:"/not-found",description:"Register for a parking permit."},{title:"Register for a parking permit",slug:"/not-found",description:"Pay for a permit to park in authorised zones in your area."},{title:"Register a business",slug:"/not-found",description:"Apply for an ABN, and register a business or business name."},{title:"Register a pet",slug:"/services/registrations/pet",description:"Registering domestic animals is a requirement of pet ownership."},{title:"Register for business vouchers",slug:"/not-found",description:"Find out what vouchers your business may be eligible to offer customers"},{title:"Register an event",slug:"/not-found",description:"You'll need to register if your event serves food or alcohol."}];function RegistrationsCardList(){return(0,m.tZ)(g.Columns,{as:"ul",cols:{xs:1,sm:2,md:3},children:y.map(function(e){return(0,m.tZ)(f.Card,{as:"li",shadow:!0,clickable:!0,children:(0,m.tZ)(f.CardInner,{children:(0,m.BX)(u.Stack,{gap:1,children:[(0,m.tZ)(p.H3,{children:(0,m.tZ)(f.CardLink,{href:e.slug,children:e.title})}),(0,m.tZ)(c.Text,{as:"p",children:e.description})]})})},e.title)})})}function RegistrationsPage(){var e=(0,n.useRef)(null),r=(0,i.useRouter)().query.registrationId;return(0,n.useEffect)(function(){var t;r&&(null===(t=e.current)||void 0===t||t.focus())},[r]),(0,m.BX)(m.HY,{children:[(0,m.tZ)(b.$,{title:r?"Successfully registered pet ":"Registrations"}),(0,m.BX)(d.I,{children:[(0,m.BX)(s.HeroSubcategoryBanner,{children:[(0,m.tZ)(l.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/services",label:"Services"},{label:"Registrations"}]}),(0,m.tZ)(s.HeroSubcategoryBannerTitle,{children:"Registrations"})]}),(0,m.tZ)(o.SectionContent,{children:(0,m.BX)(u.Stack,{gap:1.5,children:[r&&(0,m.tZ)(a.PageAlert,{ref:e,title:"Your pet registration has been submitted",tone:"success",tabIndex:-1,children:(0,m.BX)(c.Text,{as:"p",children:["Registration application number ",r]})}),(0,m.tZ)(RegistrationsCardList,{})]})})]})]})}},5600:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(3276),n()},3276:function(e,r,t){"use strict";t.d(r,{Breadcrumbs:function(){return Breadcrumbs}});var n=t(849),i=t(89),o=t(7378),s=t(7137),a=t(43),c=t(6573),l=t(294),u=t(7800);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var BreadcrumbsContainer=function(e){var r,t=e.children,i=e["aria-label"],o=e.isExpandable,s=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":i,children:(0,u.tZ)(c.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,a.iv)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!s&&(r={},(0,n.Z)(r,l.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(r,l.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:s?void 0:"none"}}),r)),"",""),children:t})})},d=t(2231),b=t(9272),p={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,u.tZ)(b.XC,{color:"border",size:"sm",css:p})};function BreadcrumbsItem_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var f=(0,o.forwardRef)(function(e,r){var t=e.children,i=e.href;return(0,u.BX)(c.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(BreadcrumbsDivider,{}),i?(0,u.tZ)(d.TextLink,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?BreadcrumbsItem_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):BreadcrumbsItem_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({ref:r},e)):t]})}),g=t(1233);function BreadcrumbsToggle(e){var r=e.onClick;return(0,u.tZ)(f,{children:(0,u.tZ)(c.Flex,{as:g.BaseButton,onClick:r,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var m=["label"],y=["label"],h=["label"];function Breadcrumbs_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Breadcrumbs_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Breadcrumbs_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Breadcrumbs_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Breadcrumbs=function(e){var r=e["aria-label"],t=e.links,n=(0,o.useRef)(null),a=t[0],c=a.label,l=(0,i.Z)(a,m),d=t[t.length-1],b=d.label,p=(0,i.Z)(d,y),g=t.filter(function(e,r,t){return!(0===r||r===t.length-1)}),O=(0,o.useState)(!g.length),v=O[0],j=O[1];return(0,u.BX)(BreadcrumbsContainer,{"aria-label":void 0===r?"breadcrumb":r,isExpandable:!0,isExpanded:v,children:[(0,u.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:n},l),{},{children:c})),!v&&g.length?(0,u.tZ)(BreadcrumbsToggle,{onClick:function(){var e;j(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,g.map(function(e,r){var t=e.label,n=(0,i.Z)(e,h);return(0,u.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},n),{},{children:t}),r)}),(0,u.BX)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},p),{},{children:[b,(0,u.tZ)(s.TX,{children:" (current page)"})]}))]})}},4456:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations",function(){return t(3397)}])}},function(e){e.O(0,[396,774,888,179],function(){return e(e.s=4456)}),_N_E=e.O()}]);