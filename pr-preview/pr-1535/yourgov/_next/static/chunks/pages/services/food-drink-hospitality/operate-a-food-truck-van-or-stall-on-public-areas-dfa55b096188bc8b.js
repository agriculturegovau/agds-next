(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{79925:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(92245),n()},15600:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(83276),n()},84199:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(23599),n()},53135:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(70800),n()},70741:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(29685),n()},24235:function(e,t,r){"use strict";var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(28762),n()},92245:function(e,t,r){"use strict";r.d(t,{Accordion:function(){return Accordion},AccordionItem:function(){return AccordionItem},AccordionItemContent:function(){return AccordionItemContent}});var n=r(34339),i=r(87800),Accordion=function(e){var t=e.children;return(0,i.tZ)(n.Box,{width:"100%",borderTop:!0,children:t})},o=r(11246),a=r(27378),c=r(30294),l=r(10043),d=r(76573),s=r(69272),u=r(71233),p={body:c._X.backgroundShade,bodyAlt:c._X.backgroundShadeAlt},AccordionTitle=function(e){var t=e.ariaControls,r=e.background,o=void 0===r?"body":r,a=e.children,f=e.id,h=e.isOpen,b=e.onClick,v=e.tag;return(0,i.tZ)(n.Box,{as:v,children:(0,i.BX)(d.Flex,{as:u.BaseButton,id:f,"aria-controls":t,"aria-expanded":h,onClick:b,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",background:o,paddingY:1,justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,css:(0,l.iv)({"&:hover":{backgroundColor:p[o]}},"",""),children:[a,(0,i.tZ)(s.ChevronDownIcon,{weight:"bold",css:(0,l.iv)({transition:"transform ".concat(c.tokens.transition.duration,"ms ").concat(c.tokens.transition.timingFunction),transform:"rotate(".concat(h?180:0,"deg)")},"","")})]})})},f=r(90849),h=r(55732),b=r(34707),v=r.n(b),g=r(39998);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var AccordionBody=function(e){var t,r=e.children,n=e.ariaLabelledBy,o=e.id,d=e.isOpen,s=(0,a.useRef)(null),u=(0,c.usePrefersReducedMotion)(),p=(0,g.useSpring)({from:{display:"none",height:0},to:(t=(0,h.Z)(v().mark(function _callee(e){var t;return v().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!d){r.next=3;break}return r.next=3,e({display:"block"});case 3:return r.next=5,e({height:d?null===(t=s.current)||void 0===t?void 0:t.offsetHeight:0,immediate:u});case 5:return r.next=7,e(d?{height:"auto"}:{display:"none"});case 7:case"end":return r.stop()}},_callee)})),function(e){return t.apply(this,arguments)})});return(0,i.tZ)(g.animated.div,{id:o,"aria-labelledby":n,role:"region",style:p,css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,f.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({overflow:"hidden"},c.lB.print.visible),"",""),children:(0,i.tZ)("div",{ref:s,children:r})})},useAccordionItemIds=function(){var e=(0,c.Me)();return{titleId:"accordion-".concat(e,"-title"),bodyId:"accordion-".concat(e,"-body")}},AccordionItem=function(e){var t=e.background,r=e.children,l=e.title,d=e.titleHeadingTag,s=e.isInitiallyOpen,u=void 0!==s&&s,p=e.isOpen,f=e.onToggle,h=useAccordionItemIds(),b=h.titleId,v=h.bodyId,g=(0,c.useToggleState)(u,!u),m=(0,o.Z)(g,2),y=m[0],O=m[1],Z="boolean"==typeof p?p:y,P=(0,a.useCallback)(function(){"function"==typeof f&&f(),O()},[f,O]);return(0,i.BX)(n.Box,{borderBottom:!0,children:[(0,i.tZ)(AccordionTitle,{background:t,tag:void 0===d?"h3":d,id:b,ariaControls:v,isOpen:Z,onClick:P,children:l}),(0,i.tZ)(AccordionBody,{isOpen:Z,id:v,ariaLabelledBy:b,children:r})]})},AccordionItemContent=function(e){var t=e.children;return(0,i.tZ)(n.Box,{paddingBottom:1.5,paddingTop:.5,children:t})}},83276:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return Breadcrumbs}});var n=r(90849),i=r(90089),o=r(27378),a=r(27137),c=r(10043),l=r(76573),d=r(30294),s=r(87800);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var BreadcrumbsContainer=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,s.tZ)("nav",{"aria-label":i,children:(0,s.tZ)(l.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,c.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:r})})},u=r(62231),p=r(69272),f={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,s.tZ)(p.XC,{color:"border",size:"sm",css:f})};function BreadcrumbsItem_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,s.BX)(l.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,s.tZ)(BreadcrumbsDivider,{}),i?(0,s.tZ)(u.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?BreadcrumbsItem_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):BreadcrumbsItem_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),b=r(71233);function BreadcrumbsToggle(e){var t=e.onClick;return(0,s.tZ)(h,{children:(0,s.tZ)(l.Flex,{as:b.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var v=["label"],g=["label"],m=["label"];function Breadcrumbs_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Breadcrumbs_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Breadcrumbs_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Breadcrumbs_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Breadcrumbs=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),c=r[0],l=c.label,d=(0,i.Z)(c,v),u=r[r.length-1],p=u.label,f=(0,i.Z)(u,g),b=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),y=(0,o.useState)(!b.length),O=y[0],Z=y[1];return(0,s.BX)(BreadcrumbsContainer,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:O,children:[(0,s.tZ)(h,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:n},d),{},{children:l})),!O&&b.length?(0,s.tZ)(BreadcrumbsToggle,{onClick:function(){var e;Z(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,b.map(function(e,t){var r=e.label,n=(0,i.Z)(e,m);return(0,s.tZ)(h,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},n),{},{children:r}),t)}),(0,s.BX)(h,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},f),{},{children:[p,(0,s.tZ)(a.TX,{children:" (current page)"})]}))]})}},23599:function(e,t,r){"use strict";r.d(t,{Callout:function(){return Callout}});var n=r(10043),i=r(76573),o=r(37601),a=r(18979),c=r(90632),l=r(87800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},CalloutTitle=function(e){var t=e.as,r=e.children,n=e.variant;return(0,l.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:d[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:r})},Callout=function(e){var t=e.as,r=e.background,a=e.children,s=e.icon,u=e.onBodyAlt,p=e.title,f=e.tone,h=void 0===f?"neutral":f,b=e.variant,v=void 0===b?"regular":b,g=d[v],m=g.textGap,y=g.iconGap,O=g.padding,Z=g.flexDirection,P=g.titlePaddingTop,w={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,l.tZ)(c.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[v].iconSize})}}[h],j=w.background,k=w.border,S=w.icon;return(0,l.BX)(i.Flex,{as:t,flexDirection:Z,rounded:!0,gap:y,background:"neutral"===h&&(null!=u?u:"shadeAlt"===r)?"shadeAlt":j,borderColor:k,padding:O,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[s||S?(0,l.tZ)(i.Flex,{flexShrink:0,children:s||S}):null,(0,l.BX)(o.Stack,{gap:m,css:(0,n.iv)({paddingTop:P},"",""),children:[p?(0,l.tZ)(CalloutTitle,{variant:v,children:p}):null,a]})]})}},29685:function(e,t,r){"use strict";r.d(t,{InpageNav:function(){return InpageNav}});var n=r(90849),i=r(90089),o=r(10043),a=r(37601),c=r(30294),l=r(87800),InpageNavContainer=function(e){var t=e.children,r=e["aria-label"];return(0,l.tZ)(a.Stack,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,o.iv)({borderLeftColor:c._X.foregroundAction},"",""),"aria-label":r,children:t})},InpageNavItemContainer=function(e){var t=e.children;return(0,l.tZ)(a.Stack,{as:"ul",gap:.5,children:t})},d=r(34339),s=r(62231);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var InpageNavItem=function(e){return(0,l.tZ)(d.Box,{as:"li",children:(0,l.tZ)(s.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))})},u=r(18979),InpageNavTitle=function(e){var t=e.children;return(0,l.tZ)(u.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:t})},p=["label"];function InpageNav_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function InpageNav_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?InpageNav_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):InpageNav_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var InpageNav=function(e){var t=e["aria-label"],r=e.links,n=e.title;return(0,l.BX)(InpageNavContainer,{"aria-label":void 0===t?"In page":t,children:[n?(0,l.tZ)(InpageNavTitle,{children:n}):null,(0,l.tZ)(InpageNavItemContainer,{children:r.map(function(e,t){var r=e.label,n=(0,i.Z)(e,p);return(0,l.tZ)(InpageNavItem,InpageNav_objectSpread(InpageNav_objectSpread({},n),{},{children:r}),t)})})]})}},28762:function(e,t,r){"use strict";r.d(t,{SideNav:function(){return SideNav}});var n=r(34339),i=r(81028),o=r(90849),a=r(10043),c=r(30294),l=r(87800);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function SideNavTitle(e){var t=e.children,r=e.id,o=e.href,d=e.isCurrentPage,s=(0,c.yF)();return o?(0,l.tZ)(n.Box,{as:"h2",id:r,borderBottom:!0,borderBottomWidth:"xl",children:(0,l.tZ)(n.Box,{as:s,padding:1,color:"text",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",display:"block",focus:!0,href:o,"aria-current":d?"page":void 0,css:(0,a.iv)({textDecoration:"none","&:hover":_objectSpread(_objectSpread({},c.lB.underline),{},{backgroundColor:i.vE.hover})},"",""),children:t})}):(0,l.tZ)(n.Box,{as:"h2",id:r,borderBottom:!0,borderBottomWidth:"xl",display:"block",padding:1,color:"text",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:t})}var d=r(44285),s=r(90089),u=["items"];function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,F=function(){};return{s:F,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:F}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var p=r(27378),f=(0,p.createContext)(0),useLinkListDepth=function(){return(0,p.useContext)(f)};function SideNavGroup(e){var t=e.children,r=useLinkListDepth();return(0,l.tZ)(f.Provider,{value:r+1,children:(0,l.tZ)(n.Box,{as:"ul",children:t})})}var h=r(76573),b=["isActive","isCurrentPage","children","label"];function SideNavLink_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function SideNavLink_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?SideNavLink_ownKeys(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):SideNavLink_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function SideNavLink(e){var t=e.isActive,r=e.isCurrentPage,n=e.children,o=e.label,d=(0,s.Z)(e,b),u=useLinkListDepth(),p=(0,c.yF)();return(0,l.BX)(SideNavListItem,{isActive:t,depth:u,children:[(0,l.BX)(h.Flex,SideNavLink_objectSpread(SideNavLink_objectSpread({as:p,"aria-current":r?"page":void 0,gap:.75,color:"muted",fontSize:"xs",paddingY:1,paddingRight:1,borderBottom:!0,borderBottomWidth:"sm",borderColor:"muted",focus:!0},d),{},{css:(0,a.iv)(SideNavLink_objectSpread({textDecoration:"none",paddingLeft:"".concat(u,"rem"),"&:hover":{color:c._X.foregroundText,backgroundColor:i.vE.hover,"& span:last-of-type":c.lB.underline}},r&&{position:"relative",color:c._X.foregroundText,backgroundColor:i.vE.hover,fontWeight:c.tokens.fontWeight.bold,":before":{content:'""',position:"absolute",top:0,left:0,bottom:0,borderLeftWidth:c.tokens.borderWidth.xl,borderLeftStyle:"solid",borderLeftColor:c._X.selected,pointerEvents:"none"}}),"",""),children:[(0,l.tZ)(SideNavLinkIndicator,{depth:u}),(0,l.tZ)("span",{children:o})]})),n]})}function SideNavListItem(e){var t=e.children,r=e.depth,n=e.isActive;return(0,l.tZ)("li",{css:1===r&&n?{position:"relative",":before":{content:'""',position:"absolute",top:0,left:0,bottom:0,borderLeftWidth:c.tokens.borderWidth.xl,borderLeftStyle:"solid",borderLeftColor:c._X.borderMuted,pointerEvents:"none"}}:void 0,children:t})}function SideNavLinkIndicator(e){var t=e.depth;return t>2?(0,l.tZ)("span",{"aria-hidden":!0,children:"—"}):t>1?(0,l.tZ)("span",{"aria-hidden":!0,children:"–"}):null}var v=["isActive","items"];function SideNavLinkList_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function SideNavLinkList_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?SideNavLinkList_ownKeys(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):SideNavLinkList_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function SideNavLinkList(e){var t=e.activePath,r=e.items,n=(0,p.useMemo)(function(){return r.map(function(e){return SideNavLinkList_objectSpread(SideNavLinkList_objectSpread({},e),{},{isActive:e.href===t||function hasNestedActiveItem(e,t){return null!=e&&!!e.length&&!!t&&e.some(function(e){var r;if(e.href===t||null!==(r=e.items)&&void 0!==r&&r.length&&hasNestedActiveItem(e.items,t))return!0})}(e.items,t)})})},[t,r]);return(0,l.tZ)(LinkList,{activePath:t,items:n})}function LinkList(e){var t=e.activePath,r=e.items;return(0,l.tZ)(SideNavGroup,{children:r.map(function(e,r){var n=e.isActive,i=e.items,o=(0,s.Z)(e,v);return(0,l.tZ)(SideNavLink,SideNavLinkList_objectSpread(SideNavLinkList_objectSpread({isActive:n,isCurrentPage:o.href===t},o),{},{children:null!=i&&i.length?(0,l.tZ)(LinkList,{items:i,activePath:t}):null}),r)})})}function SideNav(e){var t,r=e.activePath,o=e.collapseTitle,a=e.items,p=e.background,f=e.title,h=e.titleLink,b=(t=(0,c.Me)(),{navId:"sideNav-".concat(t,"-nav"),titleId:"sideNav-".concat(t,"-title")}),v=b.navId,g=b.titleId,m=function(e,t){if(!t)return"";var r,n="",i=_createForOfIteratorHelper(function flattenItems(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var i=t.value,o=i.items,a=(0,s.Z)(i,u);r.push(a),null!=o&&o.length&&r.push.apply(r,(0,d.Z)(flattenItems(o)))}}catch(e){n.e(e)}finally{n.f()}return r}(e));try{for(i.s();!(r=i.n()).done;){var o=r.value;if(!o.href||o.href===t)return o.href;null!=t&&t.startsWith(o.href)&&o.href.length>n.length&&(n=o.href)}}catch(e){i.e(e)}finally{i.f()}return n}(a,r);return(0,l.tZ)(i.ie,{collapseButtonLabel:o,background:void 0===p?"body":p,children:(0,l.BX)(n.Box,{as:"nav","aria-labelledby":g,id:v,fontFamily:"body",fontSize:"sm",lineHeight:"default",children:[(0,l.tZ)(SideNavTitle,{id:g,href:h,isCurrentPage:r===h,children:f}),(0,l.tZ)(SideNavLinkList,{activePath:m,items:a})]})})}},67163:function(e,t,r){"use strict";r.d(t,{O:function(){return HelpCallout}});var n=r(84199),i=r(54149),o=r(68160),a=r(87800);function HelpCallout(){return(0,a.tZ)(n.Callout,{title:"Need help?",children:(0,a.BX)(i.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email ",(0,a.tZ)(o.TextLink,{href:"/not-found",children:"emailaccount@yourgov.gov.au"})]})})}},98785:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Page}});var n=r(86677),i=r(79894),o=r.n(i),a=r(15933),c=r(72892),l=r(53135),d=r(15600),s=r(18717),u=r(92852),p=r(70741),f=r(54149),h=r(47784),b=r(24235),v=r(55735),g=r(79925),m=r(1783),y=r(16949),O=r(67163),Z=r(87800),P={name:"1nob2mz",styles:"&:focus{outline:none;}"};function Page(){var e=(0,n.useRouter)();return(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(y.$,{title:"Content page example"}),(0,Z.tZ)(m.I,{applyMainElement:!1,children:(0,Z.tZ)(c.PageContent,{children:(0,Z.BX)(l.Columns,{children:[(0,Z.tZ)(l.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,Z.tZ)(c.ContentBleed,{visible:{md:!1},children:(0,Z.tZ)(b.SideNav,{collapseTitle:"In this section",activePath:e.asPath,title:"Services",titleLink:"/services",items:[{href:"/not-found",label:"Agriculture and farming "},{href:"/not-found",label:"Arts, culture and entertainment"},{href:"/not-found",label:"Building and construction"},{href:"/not-found",label:"Cleaning"},{href:"/not-found",label:"Food, drink and hospitality",items:[{href:"/not-found",label:"Food safety certificates"},{href:"/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas",label:"Operate a food truck, van or stall on public areas"},{href:"/not-found",label:"Serve alcohol on premises"},{href:"/not-found",label:"Outdoor dining approval"},{href:"/not-found",label:"Development applications"},{href:"/not-found",label:"Approval to host musical performances"}]},{href:"/not-found",label:"Motor vehicle and road transport"},{href:"/not-found",label:"Private healthcare"},{href:"/not-found",label:"Real estate and property"}]})})}),(0,Z.tZ)(l.Column,{as:"main",id:"main-content",tabIndex:-1,css:P,columnSpan:{xs:12,md:8},columnStart:{lg:5},children:(0,Z.BX)(s.Stack,{gap:3,children:[(0,Z.tZ)(d.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/services",label:"Services"},{href:"/services/food-drink-hospitality",label:"Food, drink and hospitality"},{label:"Operate a food truck, van or stall on public areas"}]}),(0,Z.BX)(s.Stack,{gap:1.5,children:[(0,Z.tZ)(u.H1,{children:"Operate a food truck, van or stall on public areas"}),(0,Z.tZ)(f.Text,{as:"p",fontSize:"md",color:"muted",children:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas."})]}),(0,Z.tZ)(p.InpageNav,{title:"On this page",links:[{href:"#who-needs-to-do-this",label:"Who needs to do this"},{href:"#what-you-will-need",label:"What you will need"},{href:"#how-to-apply",label:"How to apply"},{href:"#more-information",label:"More information"}]}),(0,Z.BX)(s.Stack,{alignItems:"flex-start",gap:1.5,children:[(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"who-needs-to-do-this",children:"Who needs to do this"}),(0,Z.tZ)("p",{children:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must obtain one of the following permits to operate in this area:"})]}),(0,Z.BX)(g.Accordion,{children:[(0,Z.tZ)(g.AccordionItem,{title:"Food van permit",children:(0,Z.tZ)(g.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})}),(0,Z.tZ)(g.AccordionItem,{title:"Food truck permit",children:(0,Z.tZ)(g.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})}),(0,Z.tZ)(g.AccordionItem,{title:"Ice-cream van permit",children:(0,Z.tZ)(g.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})}),(0,Z.tZ)(g.AccordionItem,{title:"Market stall permit",children:(0,Z.tZ)(g.AccordionItemContent,{children:(0,Z.tZ)(a.Prose,{children:(0,Z.tZ)("p",{children:"This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P). This is a standard paragraph - sm/default (P)."})})})})]})]}),(0,Z.tZ)(s.Stack,{alignItems:"flex-start",gap:1.5,children:(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"what-you-will-need",children:"What you will need"}),(0,Z.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:"vehicle registration details and vehicle plans"}),(0,Z.tZ)("li",{children:"operational plan of management"}),(0,Z.tZ)("li",{children:"food safety supervisor certificate"}),(0,Z.tZ)("li",{children:"names of any employees who will be handling food."})]})]})}),(0,Z.BX)(s.Stack,{alignItems:"flex-start",gap:1.5,children:[(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"how-to-apply",children:"How to apply"}),(0,Z.tZ)("p",{children:"You’ll be asked to sign in or create an account to apply online."})]}),(0,Z.BX)(h.ButtonGroup,{children:[(0,Z.tZ)(h.ButtonLink,{href:"/sign-in?redirectTo=/app/licences-and-permits/apply/mobile-food-vendor-permit",variant:"primary",children:"Sign in to apply"}),(0,Z.tZ)(h.ButtonLink,{href:"/not-found",variant:"secondary",children:"Create account"})]})]}),(0,Z.tZ)(v.Divider,{}),(0,Z.tZ)(s.Stack,{alignItems:"flex-start",gap:1.5,children:(0,Z.BX)(a.Prose,{children:[(0,Z.tZ)("h2",{id:"more-information",children:"More information"}),(0,Z.tZ)("h3",{children:"Links"}),(0,Z.tZ)("p",{children:"To complete this application you will need to provide:"}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Understand food safety requirements"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"New laws for food businesses"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Restricted areas and exclusion zones"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Hours of operation"})})]}),(0,Z.tZ)("h3",{children:"Related approvals"}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Serve alcohol on premises"})}),(0,Z.tZ)("li",{children:(0,Z.tZ)(o(),{href:"/not-found",children:"Outdoor dining approval"})})]})]})}),(0,Z.tZ)(O.O,{})]})})]})})})]})}},88198:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/food-drink-hospitality/operate-a-food-truck-van-or-stall-on-public-areas",function(){return r(98785)}])},55732:function(e,t,r){"use strict";function asyncGeneratorStep(e,t,r,n,i,o,a){try{var c=e[o](a),l=c.value}catch(e){r(e);return}c.done?t(l):Promise.resolve(l).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function _next(e){asyncGeneratorStep(o,n,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,n,i,_next,_throw,"throw",e)}_next(void 0)})}}r.d(t,{Z:function(){return _asyncToGenerator}})}},function(e){e.O(0,[8459,9998,5490,7919,9774,2888,179],function(){return e(e.s=88198)}),_N_E=e.O()}]);