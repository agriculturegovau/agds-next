"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{63094:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(16057),r()},92199:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(94734),r()},16057:function(e,t,n){n.d(t,{AppLayout:function(){return AppLayout},AppLayoutContent:function(){return AppLayoutContent},AppLayoutFooter:function(){return AppLayoutFooter},AppLayoutFooterDivider:function(){return AppLayoutFooterDivider},AppLayoutHeader:function(){return AppLayoutHeader},AppLayoutSidebar:function(){return AppLayoutSidebar}});var r=n(90849),o=n(11246),a=n(30294),i=n(27378),c=(0,i.createContext)(void 0);function useAppLayoutContext(){var e=(0,i.useContext)(c);if(void 0===e)throw Error("`AppLayoutContext` not found.");return e}var d="16rem",l=n(87800);function AppLayout(e){var t=e.children,n=e.focusMode,r=void 0!==n&&n,i=(0,a.useTernaryState)(!1),d=(0,o.Z)(i,3),u=d[0],s=d[1],p=d[2];return(0,l.tZ)(c.Provider,{value:{focusMode:r,isMobileMenuOpen:u,openMobileMenu:s,closeMobileMenu:p},children:(0,l.tZ)(AppLayoutGrid,{focusMode:r,children:t})})}function AppLayoutGrid(e){var t=e.children,n=e.focusMode;return(0,l.tZ)("div",{css:(0,a.mq)({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:(0,a.mapResponsiveProp)((0,r.Z)({xs:"1fr"},"xl",n?"1fr":"".concat(d," 1fr")))}),children:t})}var u=n(10043),s=n(34339),p=n(76573),f=n(18979);function AppLayoutHeaderBrand(e){var t=e.heading,n=e.subLine,o=e.badgeLabel,i=e.logo,c=e.href,d=(0,a.yF)();return(0,l.BX)(p.Flex,{as:d,href:c,paddingY:1,flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},gap:{xs:1,md:0},focus:!0,color:"text",css:(0,u.iv)({textDecoration:"none","&:hover":a.lB.underline,svg:{display:"block",height:"3.75rem",flexShrink:0}},"",""),children:[i,(0,l.BX)(p.Flex,{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",maxWidth:a.tokens.maxWidth.bodyText,css:(0,u.iv)((0,r.Z)({},a.tokens.mediaQuery.min.md,{paddingLeft:(0,a.mapSpacing)(1),marginLeft:(0,a.mapSpacing)(1),borderLeft:a._X.border,borderLeftStyle:"solid",borderLeftColor:a._X.border}),"",""),children:[(0,l.BX)(p.Flex,{alignItems:"flex-start",gap:.5,children:[(0,l.tZ)(f.Text,{fontSize:"lg",fontWeight:"bold",children:t}),o&&(0,l.tZ)(AppLayoutHeaderBrandBadge,{children:o})]}),n?(0,l.tZ)(f.Text,{color:"muted",fontSize:"xs",children:n}):null]})]})}function AppLayoutHeaderBrandBadge(e){var t=e.children;return(0,l.tZ)(s.Box,{fontWeight:"bold",paddingLeft:.5,paddingRight:.5,border:!0,borderWidth:"md",css:(0,u.iv)({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:a._X.foregroundText,borderRadius:"2em"},"",""),children:t})}var h=n(20397),y=n(90089),b=n(27137),g=n(71233),m=n(94734),v=n(69272),x=["ref"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function AppLayoutHeaderAccountDropdown(e){var t=e.children,n=e.name,r=e.secondaryText;return(0,l.BX)(m.h_,{popoverPlacement:"bottom-end",popoverOffset:-8,children:[(0,l.tZ)(AppLayoutHeaderAccountDropdownButton,{name:n,secondaryText:r}),t]})}var L={name:"d3v9zr",styles:"overflow:hidden"},A={name:"d3v9zr",styles:"overflow:hidden"},w={name:"ozd7xs",styles:"flex-shrink:0"},S={name:"ozd7xs",styles:"flex-shrink:0"};function AppLayoutHeaderAccountDropdownButton(e){var t=e.name,n=e.secondaryText,r=(0,m.Kk)().isMenuOpen,o=(0,m.cH)(),i=o.ref,c=(0,y.Z)(o,x);return(0,l.BX)(p.Flex,_objectSpread(_objectSpread({as:g.BaseButton,ref:i},c),{},{background:r?"shade":void 0,alignItems:"center",justifyContent:"space-between",padding:1,gap:1,color:"action",focus:!0,css:(0,a.mq)({height:"100%",maxWidth:["16rem","18rem"],overflow:"hidden","&:hover":{backgroundColor:a._X.backgroundShade,"& > span:last-of-type > span:last-of-type":a.lB.underline}}),children:[(0,l.tZ)(b.TX,{children:"Account menu"}),(0,l.BX)(p.Flex,{as:"span",gap:.5,alignItems:"center",width:"100%","aria-hidden":!0,css:L,children:[(0,l.tZ)(h.q,{name:t,tone:"action",size:"md"}),(0,l.BX)(p.Flex,{as:"span",flexDirection:"column",width:"100%",css:A,children:[(0,l.tZ)(f.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:a.lB.truncate,children:t}),n?(0,l.tZ)(f.Text,{color:"muted",fontSize:"xs",css:a.lB.truncate,children:n}):null]})]}),r?(0,l.tZ)(v.g8,{size:"sm",weight:"bold",css:w}):(0,l.tZ)(v.ChevronDownIcon,{size:"sm",weight:"bold",css:S})]}))}function AppLayoutHeaderAccount_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function AppLayoutHeaderAccount_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?AppLayoutHeaderAccount_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AppLayoutHeaderAccount_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O={name:"d3v9zr",styles:"overflow:hidden"};function AppLayoutHeaderAccount(e){var t=e.name,n=e.secondaryText,r=e.href,o=e.dropdown,i=(0,a.yF)();if(o)return(0,l.tZ)(AppLayoutHeaderAccountDropdown,{name:t,secondaryText:n,children:o});var c=!!r;return(0,l.BX)(p.Flex,AppLayoutHeaderAccount_objectSpread(AppLayoutHeaderAccount_objectSpread({as:"span"},c&&{as:i,href:r,focus:!0}),{},{alignItems:"center",flexShrink:0,gap:.5,textAlign:"right",css:(0,a.mq)(AppLayoutHeaderAccount_objectSpread({textDecoration:"none",maxWidth:["16rem","18rem"]},c&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),children:[(0,l.BX)(p.Flex,{as:"span",flexDirection:"column",css:O,children:[(0,l.tZ)(f.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:a.lB.truncate,children:t}),n?(0,l.tZ)(f.Text,{color:"muted",fontSize:"xs",css:a.lB.truncate,children:n}):null]}),(0,l.tZ)(h.q,{name:t,tone:"action","aria-hidden":!0,size:"md"})]}))}function AppLayoutHeaderNav_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var Z={name:"g2vans",styles:"& > a, button{height:100%;}"};function AppLayoutHeaderNav(e){var t=e.accountDetails,n=useAppLayoutContext(),o=n.focusMode,i=n.openMobileMenu;return(0,l.BX)(p.Flex,{display:(0,r.Z)({xs:"flex"},"xl","none"),background:"body",alignItems:"center",justifyContent:o?"flex-end":"space-between",paddingLeft:.75,paddingRight:null!=t&&t.dropdown?.75:a.tokens.containerPadding,minHeight:"5.25rem",css:Z,children:[o?null:(0,l.tZ)(AppLayoutHeaderNavMenuButton,{onClick:i}),t?(0,l.tZ)(AppLayoutHeaderAccount,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?AppLayoutHeaderNav_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AppLayoutHeaderNav_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)):null]})}function AppLayoutHeaderNavMenuButton(e){var t=e.onClick;return(0,l.BX)(p.Flex,{as:g.BaseButton,onClick:t,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:.5,paddingX:1,color:"action",fontSize:"xs",focus:!0,css:(0,u.iv)({"&:hover":{backgroundColor:a._X.backgroundShade,textDecoration:"underline"}},"",""),children:[(0,l.tZ)(v.Oq,{"aria-hidden":!0}),(0,l.tZ)("span",{children:"Menu"})]})}function AppLayoutHeader_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function AppLayoutHeader(e){var t=e.id,n=e.heading,o=e.href,i=e.logo,c=e.subLine,d=e.badgeLabel,f=e.accountDetails;return(0,l.BX)(p.Flex,{as:"header",id:t,palette:"dark",flexDirection:"column",borderBottom:!0,borderBottomWidth:"xxl",borderColor:"accent",css:(0,u.iv)((0,r.Z)({},a.tokens.mediaQuery.min.xl,{gridColumnStart:1,gridColumnEnd:3}),"",""),children:[(0,l.BX)(p.Flex,{gap:1,paddingX:a.tokens.containerPadding,justifyContent:"space-between",background:"bodyAlt",alignItems:"center",width:"100%",children:[(0,l.tZ)(AppLayoutHeaderBrand,{heading:n,href:o,logo:i,subLine:c,badgeLabel:d}),(0,l.tZ)(s.Box,{height:"100%",display:(0,r.Z)({xs:"none"},"xl","flex"),children:f?(0,l.tZ)(AppLayoutHeaderAccount,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?AppLayoutHeader_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AppLayoutHeader_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},f)):null})]}),(0,l.tZ)(AppLayoutHeaderNav,{accountDetails:f})]})}var k=n(37601),j=["endElement","icon","label"];function AppLayoutSidebarNav_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function AppLayoutSidebarNav_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?AppLayoutSidebarNav_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):AppLayoutSidebarNav_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function AppLayoutSidebarNav(e){var t=e.activePath,n=e.items;return(0,l.tZ)(p.Flex,{as:"nav",flexDirection:"column","aria-label":"main",paddingBottom:1.5,children:(0,l.tZ)(p.Flex,{as:"ul",flexDirection:"column",children:n.map(function(e,r){var o,a,c=0===r,d=Array.isArray(e)?e:e.items,u=!Array.isArray(e)&&!!(null===(o=e.options)||void 0===o?void 0:o.disableGroupPadding),s=n[r-1],p=!!s&&!Array.isArray(s)&&!!(null===(a=s.options)||void 0===a?void 0:a.disableGroupPadding);return(0,l.BX)(i.Fragment,{children:[c?null:(0,l.tZ)(AppLayoutSidebarNavDivider,{disablePaddingTop:p,disablePaddingBottom:u}),d.map(function(e,n){return(0,l.tZ)(AppLayoutSidebarNavListItem,{item:e,activePath:t},n)})]},r)})})})}function AppLayoutSidebarNavListItem(e){var t=e.activePath,n=e.item,r=(0,a.yF)(),o=n.endElement,i=n.icon,c=n.label,d=(0,y.Z)(n,j);if("href"in n){var u=n.href===t;return(0,l.tZ)(AppLayoutSidebarNavItemInner,{isActive:t===n.href,hasEndElement:!!o,children:(0,l.BX)(r,AppLayoutSidebarNav_objectSpread(AppLayoutSidebarNav_objectSpread({"aria-current":u?"page":void 0},d),{},{children:[i?(0,l.tZ)(i,{color:"inherit"}):null,(0,l.tZ)("span",{children:c}),o]}))})}return"onClick"in n?(0,l.tZ)(AppLayoutSidebarNavItemInner,{isActive:!1,hasEndElement:!!o,children:(0,l.BX)(g.BaseButton,AppLayoutSidebarNav_objectSpread(AppLayoutSidebarNav_objectSpread({},d),{},{children:[i?(0,l.tZ)(i,{color:"inherit"}):null,(0,l.tZ)("span",{children:c}),o]}))}):(0,l.tZ)(AppLayoutSidebarNavItemInner,{isActive:!1,hasEndElement:!1,children:(0,l.tZ)(k.Stack,{as:"span",gap:.25,children:c})})}function AppLayoutSidebarNavItemInner(e){var t=e.isActive,n=e.children,r=e.hasEndElement;return(0,l.tZ)("li",{css:(0,u.iv)({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:(0,a.mapSpacing)(1),paddingBottom:(0,a.mapSpacing)(1),paddingLeft:(0,a.mapSpacing)(1.5),paddingRight:(0,a.mapSpacing)(1.5),"& > svg":{flexShrink:0}},"> a, > button":AppLayoutSidebarNav_objectSpread(AppLayoutSidebarNav_objectSpread(AppLayoutSidebarNav_objectSpread({position:"relative",display:"flex",alignItems:"center",gap:(0,a.mapSpacing)(.75),color:a._X[t?"foregroundText":"foregroundAction"]},t&&{fontWeight:a.tokens.fontWeight.bold,background:a._X.backgroundShadeAlt,"&:before":{content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftColor:a._X.selected,borderLeftWidth:a.tokens.borderWidth.xl}}),r&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":{background:a._X.backgroundShadeAlt,color:a._X.foregroundText,"& > span:first-of-type":a.lB.underline}},s.j4),"> span":{color:a._X.foregroundText},"> a":{textDecoration:"none"}},"",""),children:n})}function AppLayoutSidebarNavDivider(e){var t=e.disablePaddingTop,n=e.disablePaddingBottom;return(0,l.tZ)(s.Box,{as:"li",paddingTop:t?0:1,paddingBottom:n?0:1,"aria-hidden":"true",children:(0,l.tZ)("hr",{css:(0,u.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:a.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:a._X.borderMuted,width:"100%"},"","")})})}var B=n(31542),P=n(39998),C=n(81230);function AppLayoutSidebarDialog(e){var t=e.children,n=useAppLayoutContext(),o=n.isMobileMenuOpen,c=n.closeMobileMenu,s=(0,a.p_)(o).modalContainerRef;(0,i.useEffect)(function(){var handleKeyDown=function(e){"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),c())};return window.addEventListener("keydown",handleKeyDown),function(){return window.removeEventListener("keydown",handleKeyDown)}},[c]);var p=(0,a.usePrefersReducedMotion)(),f=(0,P.useTransition)([o],{from:{translateX:"-100%",opacity:0},enter:{translateX:"0%",opacity:1},leave:{translateX:"-100%",opacity:0},config:{duration:150},immediate:p});return(0,a.Nq)()?(0,B.createPortal)((0,l.BX)(i.Fragment,{children:[o&&(0,l.tZ)(LockScroll,{}),f(function(e,n){var o=e.translateX,i=e.opacity;return n?(0,l.BX)("div",{ref:s,children:[(0,l.tZ)(Overlay,{onClick:c,style:{opacity:i}}),(0,l.tZ)(C.ZP,{returnFocus:!0,children:(0,l.BX)(D,{display:(0,r.Z)({},"xl","none"),role:"dialog","aria-modal":"true",background:"shade",width:d,css:(0,u.iv)({position:"fixed",zIndex:a.tokens.zIndex.dialog,top:0,left:0,bottom:0,overflowY:"auto"},"",""),style:{translateX:o},children:[(0,l.tZ)(CloseMenuButton,{onClick:c}),t]})})]}):null})]}),document.body):null}var D=(0,P.animated)(s.Box);function LockScroll(){return(0,l.tZ)(u.xB,{styles:(0,u.iv)((0,r.Z)({body:{overflow:"hidden"}},a.tokens.mediaQuery.min.xl,{body:{overflow:"unset"}}),"","")})}function Overlay(e){var t=e.onClick,n=e.style;return(0,l.tZ)(P.animated.div,{css:(0,u.iv)((0,r.Z)({display:"block",position:"fixed",inset:0,backgroundColor:a._X.overlay,zIndex:a.tokens.zIndex.overlay},a.tokens.mediaQuery.min.xl,{display:"none"}),"",""),onClick:t,style:n})}function CloseMenuButton(e){var t=e.onClick;return(0,l.tZ)(p.Flex,{alignItems:"center",borderBottom:!0,borderColor:"muted",paddingLeft:1,flexShrink:0,children:(0,l.BX)(p.Flex,{as:g.BaseButton,onClick:t,flexDirection:"column",alignItems:"center",gap:.5,color:"action",fontSize:"xs",padding:1,focus:!0,children:[(0,l.tZ)(v.Tw,{}),(0,l.tZ)("span",{"aria-hidden":"true",children:"Close"}),(0,l.tZ)(b.TX,{children:"Close menu"})]})})}function AppLayoutSidebar(e){var t=e.activePath,n=e.items,o=useAppLayoutContext().focusMode,c=(0,a.lb)(n.map(function(e){return Array.isArray(e)?e:e.items}).flat(),t);return(0,l.BX)(i.Fragment,{children:[(0,l.tZ)(k.Stack,{as:"aside",gap:1,background:"bodyAlt",borderRight:!0,borderColor:"muted",flexGrow:1,css:(0,u.iv)((0,r.Z)({display:"none",width:d},a.tokens.mediaQuery.min.xl,{display:o?"none":"flex"}),"",""),children:(0,l.tZ)(AppLayoutSidebarNav,{activePath:c,items:n})}),(0,l.tZ)(AppLayoutSidebarDialog,{children:(0,l.tZ)(AppLayoutSidebarNav,{activePath:c,items:n})})]})}function AppLayoutContent(e){var t=e.children;return(0,l.tZ)(p.Flex,{flexDirection:"column",css:(0,u.iv)({minWidth:"0"},"",""),children:t})}var _=n(5296),X={name:"xdvdnl",styles:"margin-top:auto"};function AppLayoutFooter(e){var t=e.children,n=e.id;return(0,l.tZ)("footer",{css:X,id:n,children:(0,l.tZ)(_.V,{children:(0,l.tZ)(k.Stack,{paddingY:3,width:"100%",gap:1.5,borderTop:!0,borderTopWidth:"xl",borderColor:"muted",children:t})})})}function AppLayoutFooterDivider(){return(0,l.tZ)("hr",{"aria-hidden":"true",css:(0,u.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:a._X.borderMuted,width:"100%"},"","")})}},20397:function(e,t,n){n.d(t,{q:function(){return Avatar}});var r=n(10043),o=n(76573),a=n(30294),i=n(87800);function Avatar(e){var t,n,l,u=e.name,s=e.tone,p=e.size,f=e["aria-hidden"],h=e["aria-label"],y=(l=Array.from(u.matchAll(RegExp(/(\p{L}{1})\p{L}+/,"gu")))).length?(((null===(t=l.shift())||void 0===t?void 0:t[1])||"")+((null===(n=l.pop())||void 0===n?void 0:n[1])||"")).toUpperCase():"?",b=c[void 0===s?"neutral":s],g=d[void 0===p?"md":p],m=g.size,v=g.fontSize;return(0,i.tZ)(o.Flex,{as:"span",alignItems:"center",justifyContent:"center",flexShrink:0,css:(0,r.iv)({textDecoration:"none",height:"".concat(m,"rem"),width:"".concat(m,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:a.tokens.borderWidth.sm,borderColor:b,color:b},"",""),fontSize:v,fontWeight:"bold","aria-hidden":f,"aria-label":h,children:y})}var c={neutral:a._X.foregroundMuted,action:a._X.foregroundAction},d={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}}},7750:function(e,t,n){n.d(t,{S:function(){return c},a:function(){return i}});var r=n(27378),o=n(90632),a=n(87800),i=(0,o.createIcon)((0,a.BX)(r.Fragment,{children:[(0,a.tZ)("path",{d:"M11.832 1.15241C11.9273 1.06594 12.0727 1.06594 12.168 1.15241L14.9342 3.66209C14.9826 3.70607 15.0464 3.72929 15.1118 3.72676L18.844 3.58228C18.9726 3.57731 19.084 3.67075 19.1014 3.79824L19.6072 7.49883C19.6161 7.56368 19.65 7.62246 19.7017 7.66256L22.6536 9.9509C22.7553 10.0297 22.7806 10.1729 22.712 10.2818L20.7207 13.4417C20.6859 13.4971 20.6741 13.5639 20.6879 13.6279L21.4783 17.2783C21.5055 17.4041 21.4328 17.53 21.3103 17.5693L17.7538 18.71C17.6914 18.73 17.6394 18.7736 17.6089 18.8315L15.8679 22.1359C15.808 22.2498 15.6714 22.2995 15.5522 22.2509L12.0945 20.8386C12.0339 20.8139 11.9661 20.8139 11.9055 20.8386L8.44776 22.2509C8.32863 22.2995 8.19203 22.2498 8.13205 22.1359L6.39106 18.8315C6.36056 18.7736 6.30856 18.73 6.24624 18.71L2.6897 17.5693C2.56717 17.53 2.49449 17.4041 2.52172 17.2783L3.31208 13.6279C3.32593 13.5639 3.31415 13.4971 3.27926 13.4417L1.28804 10.2818C1.21944 10.1729 1.24468 10.0297 1.34638 9.9509L4.29828 7.66256C4.35 7.62246 4.38394 7.56368 4.3928 7.49883L4.89862 3.79824C4.91605 3.67075 5.0274 3.57731 5.15599 3.58228L8.88819 3.72676C8.95359 3.72929 9.01737 3.70607 9.06585 3.66209L11.832 1.15241Z",strokeWidth:"2",strokeLinejoin:"round"}),(0,a.tZ)("path",{d:"M7.23828 12.9521L10.0954 15.8092L16.4047 9.5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"IconApproval"),c=(0,o.createIcon)((0,a.BX)(r.Fragment,{children:[(0,a.tZ)("path",{d:"M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.tZ)("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.tZ)("path",{d:"M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.tZ)("path",{d:"M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"IconUsers")},91492:function(e,t,n){n.d(t,{L:function(){return AppLayout}});var r=n(90849),o=n(27378),a=n(86677),i=n(74855),c=n(92479),d=n(83344),l=n(90632),u=n(63094),s=n(10647),p=n(54149),f=n(76966),h=n(92199),y=n(80966),b=n(5938),g=n(36809);function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=n(10458);function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=n(18717),x=n(47784),L=n(92852),A=n(72892),w=n(87800),S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(ErrorBoundary,e);var t,n,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=_getPrototypeOf(ErrorBoundary);if(t){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function ErrorBoundary(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,ErrorBoundary),(t=r.call(this,e)).state={hasError:!1},t}return n=[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}],_defineProperties(ErrorBoundary.prototype,[{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}]),n&&_defineProperties(ErrorBoundary,n),ErrorBoundary}(o.Component);function ErrorBoundaryPageFallback(){var e=(0,a.useRouter)().reload;return(0,w.tZ)(A.PageContent,{children:(0,w.BX)(v.Stack,{gap:2,alignItems:"flex-start",children:[(0,w.BX)(v.Stack,{gap:1.5,children:[(0,w.tZ)(L.H1,{children:"An error occurred"}),(0,w.tZ)(p.Text,{as:"p",children:"Something went wrong."})]}),(0,w.tZ)(x.Button,{onClick:e,children:"Reload the page"})]})})}var O=n(7750);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z=[{label:"About",href:"/not-found"},{label:"Help",href:"/not-found"},{label:"Accessibility",href:"/not-found"},{label:"Disclaimer",href:"/not-found"}],k={as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}};function AppLayout(e){var t=e.children,n=e.focusMode,r=e.applyMainElement,a=void 0===r||r,c=new Date().getFullYear(),l=(0,y.a)(),h=l.hasLoadedUser,g=l.user;return h?g?(0,w.BX)(o.Fragment,{children:[(0,w.tZ)(d.SkipLinks,{links:[{href:"#main-content",label:"Skip to main content"}]}),(0,w.BX)(u.AppLayout,{focusMode:void 0!==n&&n,children:[(0,w.tZ)(AppLayoutHeader,{user:g}),(0,w.tZ)(AppLayoutSidebar,{}),(0,w.BX)(u.AppLayoutContent,{children:[(0,w.tZ)(s.Box,_objectSpread(_objectSpread({flexGrow:1},a?k:void 0),{},{children:(0,w.tZ)(S,{fallback:(0,w.tZ)(ErrorBoundaryPageFallback,{}),children:t})})),(0,w.BX)(u.AppLayoutFooter,{children:[(0,w.tZ)("nav",{"aria-label":"footer",children:(0,w.tZ)(f.LinkList,{links:Z,horizontal:!0})}),(0,w.tZ)(u.AppLayoutFooterDivider,{}),(0,w.tZ)(p.Text,{fontSize:"xs",maxWidth:i.tokens.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),(0,w.BX)(p.Text,{fontSize:"xs",maxWidth:i.tokens.maxWidth.bodyText,children:["\xa9 ",c," Department of Agriculture, Fisheries and Forestry"]})]})]})]})]}):(0,w.tZ)(b.default,{}):null}function AppLayoutHeader(e){var t=e.user,n=(0,a.useRouter)(),r=n.pathname,o=n.push,i=(0,g.w)(),d=i.linkedBusinesses,s=i.selectedBusiness,p=i.setSelectedBusiness,f="/app"===r;return(0,w.tZ)(u.AppLayoutHeader,{heading:"yourGov",subLine:"Access government services from one place",logo:(0,w.tZ)(c.Logo,{}),href:"/app",accountDetails:{name:t.displayName,secondaryText:f?"My account":null==s?void 0:s.name,dropdown:(0,w.BX)(h.DropdownMenuPanel,{palette:"light",children:[f?null:(0,w.tZ)(h.DropdownMenuGroup,{label:"Businesses",children:d.map(function(e){return(0,w.tZ)(h.DropdownMenuItemRadio,{checked:null!=s&&!!s.name&&s.name===e.name,secondaryText:"ABN ".concat(e.abn),onClick:function(){p(e),o("/app/dashboard")},children:e.name},e.name)})}),(0,w.BX)(h.DropdownMenuGroup,{label:"My account",children:[(0,w.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:l.AvatarIcon,children:"Profile"}),(0,w.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:l.EmailIcon,children:"Messages"}),(0,w.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:l.SettingsIcon,children:"Account settings"})]}),(0,w.tZ)(h.DropdownMenuDivider,{}),(0,w.tZ)(h.DropdownMenuItemLink,{href:"/sign-out",icon:l.ExitIcon,children:"Sign out"})]})}})}function AppLayoutSidebar(){var e=(0,a.useRouter)().pathname,t=(0,g.w)().selectedBusiness,n=(0,o.useMemo)(function(){return[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:l.ChevronsLeftIcon,href:"/app"}]},{options:{disableGroupPadding:!0},items:[{label:(0,w.BX)(o.Fragment,{children:[(0,w.tZ)(p.Text,{fontWeight:"bold",fontSize:"xs",children:null==t?void 0:t.name}),(0,w.BX)(p.Text,{color:"muted",fontSize:"xs",children:["ABN: ",null==t?void 0:t.abn]})]})}]},[{label:"Dashboard",href:"/app/dashboard",icon:l.HomeIcon},{label:"Licences and permits",href:"/app/licences-and-permits",icon:O.a},{label:"Staff access",href:"/not-found",icon:O.S}],[{label:"Messages",href:"/app/messages",icon:l.EmailIcon},{label:"Account settings",href:"/not-found",icon:l.SettingsIcon},{label:"Help",href:"/not-found",icon:l.HelpIcon}],[{label:"Sign out",href:"/sign-out",icon:l.ExitIcon}]]},[null==t?void 0:t.abn,null==t?void 0:t.name]);return(0,w.tZ)(u.AppLayoutSidebar,{items:n,activePath:e})}},5938:function(e,t,n){n.r(t),n.d(t,{default:function(){return Page}});var r=n(27378),o=n(92852),a=n(18717),i=n(54149),c=n(68160),d=n(74855),l=n(72892),u=n(1783),s=n(16949),p=n(87800);function Page(){return(0,p.BX)(r.Fragment,{children:[(0,p.tZ)(s.$,{title:"Page not found"}),(0,p.tZ)(u.I,{children:(0,p.tZ)(l.PageContent,{children:(0,p.BX)(a.Stack,{gap:1.5,maxWidth:d.tokens.maxWidth.bodyText,children:[(0,p.tZ)(o.H1,{children:"Oops! This page does not exist."}),(0,p.tZ)(i.Text,{as:"p",fontSize:"md",children:"You have reached a page which is not part of the testing process."}),(0,p.BX)(i.Text,{as:"p",children:["Please go back to the"," ",(0,p.tZ)(c.TextLink,{href:"/",children:"yourGov home page"}),"."]})]})})})]})}}}]);