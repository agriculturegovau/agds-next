(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{5537:function(e,r,t){"use strict";t.d(r,{e:function(){return EditPage}});var n=t(8160),c=t(7800);function EditPage(e){var r=e.path,t=void 0===r?"":r;return(0,c.tZ)(n.TextLink,{href:"https://github.com/".concat("steelthreads","/").concat("agds-next","/edit/").concat("main").concat(t),children:"Edit this page"})}},9173:function(e,r,t){"use strict";t.d(r,{a:function(){return SubcategoryPageTemplate}});var n=t(2892),c=t(8803),i=t(4348),a=t(8717),o=t(5600),u=t(4617),s=t(5537),l=t(7800),SubcategoryPageTemplate=function(e){var r=e.title,t=e.breadcrumbs,d=e.children,b=e.editPath;return(0,l.BX)(u.I,{children:[(0,l.BX)(c.HeroSubcategoryBanner,{children:[null!=t&&t.length?(0,l.tZ)(o.Breadcrumbs,{links:t}):null,(0,l.tZ)(c.HeroSubcategoryBannerTitle,{children:r})]}),(0,l.tZ)(n.SectionContent,{children:(0,l.BX)(a.Stack,{flexGrow:1,gap:3,children:[d,b&&(0,l.tZ)(i.Flex,{justifyContent:"flex-start",children:(0,l.tZ)(s.e,{path:b})})]})})]})}},7089:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return d},default:function(){return ContentGuidesHome}});var n=t(4665),c=t(2852),i=t(8717),a=t(4149),o=t(3135),u=t(6949),s=t(9173),l=t(7800),d=!0;function ContentGuidesHome(e){var r=e.title,t=e.description,d=e.contentGuideList;return(0,l.BX)(l.HY,{children:[(0,l.tZ)(u.$,{title:r,description:t}),(0,l.tZ)(s.a,{title:r,breadcrumbs:[{href:"/",label:"Home"},{href:"/guides",label:"Guides"},{label:r}],editPath:"/docs/content/guides/how-to-write-guidance.mdx",children:(0,l.tZ)(o.Columns,{as:"ul",gap:1.5,cols:{xs:1,sm:2,lg:3},children:d.map(function(e){var r=e.slug,t=e.title,o=e.overview;return(0,l.tZ)(n.Card,{as:"li",clickable:!0,shadow:!0,children:(0,l.tZ)(n.CardInner,{children:(0,l.BX)(i.Stack,{gap:1,children:[(0,l.tZ)(c.Heading,{as:"h2",type:"h4",children:(0,l.tZ)(n.CardLink,{href:"/guides/how-to-write-guidance/".concat(r),children:t})}),o?(0,l.tZ)(a.Text,{as:"p",children:o}):null]})})},t)})})})]})}},5600:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(3276),n()},2852:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(4046),n()},3276:function(e,r,t){"use strict";t.d(r,{Breadcrumbs:function(){return Breadcrumbs},BreadcrumbsContainer:function(){return BreadcrumbsContainer},BreadcrumbsDivider:function(){return BreadcrumbsDivider},BreadcrumbsItem:function(){return p}});var n=t(849),c=t(89),i=t(7378),a=t(7137),o=t(43),u=t(6573),s=t(294),l=t(7800);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var BreadcrumbsContainer=function(e){var r,t=e.children,c=e["aria-label"],i=e.isExpandable,a=e.isExpanded;return(0,l.tZ)("nav",{"aria-label":c,children:(0,l.tZ)(u.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,o.iv)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({"li:first-of-type > svg":{display:"none"}},i&&!a&&(r={},(0,n.Z)(r,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(r,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),r)),"",""),children:t})})},d=t(2231),b=t(9272),f={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,l.tZ)(b.ChevronRightIcon,{color:"border",size:"sm",css:f})};function BreadcrumbsItem_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var p=(0,i.forwardRef)(function(e,r){var t=e.children,c=e.href;return(0,l.BX)(u.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,l.tZ)(BreadcrumbsDivider,{}),c?(0,l.tZ)(d.TextLink,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?BreadcrumbsItem_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):BreadcrumbsItem_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({ref:r},e)):t]})}),h=t(1233);function BreadcrumbsToggle(e){var r=e.onClick;return(0,l.tZ)(p,{children:(0,l.tZ)(u.Flex,{as:h.BaseButton,onClick:r,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var m=["label"],g=["label"],y=["label"];function Breadcrumbs_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Breadcrumbs_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Breadcrumbs_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Breadcrumbs_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Breadcrumbs=function(e){var r=e["aria-label"],t=e.links,n=(0,i.useRef)(null),o=t[0],u=o.label,s=(0,c.Z)(o,m),d=t[t.length-1],b=d.label,f=(0,c.Z)(d,g),h=t.filter(function(e,r,t){return!(0===r||r===t.length-1)}),O=(0,i.useState)(!h.length),v=O[0],w=O[1];return(0,l.BX)(BreadcrumbsContainer,{"aria-label":void 0===r?"Breadcrumbs":r,isExpandable:!0,isExpanded:v,children:[(0,l.tZ)(p,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:n},s),{},{children:u})),!v&&h.length?(0,l.tZ)(BreadcrumbsToggle,{onClick:function(){var e;w(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,h.map(function(e,r){var t=e.label,n=(0,c.Z)(e,y);return(0,l.tZ)(p,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},n),{},{children:t}),r)}),(0,l.BX)(p,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},f),{},{children:[b,(0,l.tZ)(a.VisuallyHidden,{children:" (current page)"})]}))]})}},9485:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/how-to-write-guidance",function(){return t(7089)}])}},function(e){e.O(0,[825,59,957,774,888,179],function(){return e(e.s=9485)}),_N_E=e.O()}]);