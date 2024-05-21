"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4803],{71497:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(81023),r()},99803:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(67603),r()},81023:function(e,t,n){n.d(t,{AppLayout:function(){return u},AppLayoutContent:function(){return ec},AppLayoutFooter:function(){return es},AppLayoutFooterDivider:function(){return eu},AppLayoutHeader:function(){return H},AppLayoutSidebar:function(){return ea}});var r=n(90849),o=n(11246),i=n(23914),a=n(27378),c=(0,a.createContext)(void 0);function l(){var e=(0,a.useContext)(c);if(void 0===e)throw Error("`AppLayoutContext` not found.");return e}var d="16rem",s=n(87800);function u(e){var t=e.children,n=e.focusMode,r=void 0!==n&&n,a=(0,i.useTernaryState)(!1),l=(0,o.Z)(a,3),d=l[0],u=l[1],f=l[2];return(0,s.tZ)(c.Provider,{value:{focusMode:r,isMobileMenuOpen:d,openMobileMenu:u,closeMobileMenu:f},children:(0,s.tZ)(p,{focusMode:r,children:t})})}function p(e){var t=e.children,n=e.focusMode;return(0,s.tZ)("div",{css:(0,i.mq)({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:(0,i.mapResponsiveProp)((0,r.Z)({xs:"1fr"},"xl",n?"1fr":"".concat(d," 1fr")))}),children:t})}var f=n(10043),h=n(84815),b=n(84007),g=n(89205);function m(e){var t=e.heading,n=e.subLine,o=e.badgeLabel,a=e.logo,c=e.href,l=(0,i.yF)();return(0,s.BX)(b.Flex,{as:l,href:c,paddingY:1,flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},gap:{xs:1,md:0},focusRingFor:"keyboard",color:"text",css:(0,f.iv)({textDecoration:"none","&:hover":i.lB.underline,svg:{display:"block",height:"3.75rem",flexShrink:0}},"",""),children:[a,(0,s.BX)(b.Flex,{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",maxWidth:i.tokens.maxWidth.bodyText,css:(0,f.iv)((0,r.Z)({},i.tokens.mediaQuery.min.md,{paddingLeft:(0,i.mapSpacing)(1),marginLeft:(0,i.mapSpacing)(1),borderLeft:i._X.border,borderLeftStyle:"solid",borderLeftColor:i._X.border}),"",""),children:[(0,s.BX)(b.Flex,{alignItems:"flex-start",gap:.5,children:[(0,s.tZ)(g.Text,{fontSize:"lg",fontWeight:"bold",children:t}),o&&(0,s.tZ)(y,{children:o})]}),n?(0,s.tZ)(g.Text,{color:"muted",fontSize:"xs",children:n}):null]})]})}function y(e){var t=e.children;return(0,s.tZ)(h.Box,{fontWeight:"bold",paddingLeft:.5,paddingRight:.5,border:!0,borderWidth:"md",css:(0,f.iv)({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:i._X.foregroundText,borderRadius:"2em"},"",""),children:t})}var v=n(24610),x=n(90089),O=n(64388),k=n(11475),Z=n(67603),w=n(67812),j=["ref"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function L(e){var t=e.children,n=e.name,r=e.secondaryText;return(0,s.BX)(Z.h_,{popoverPlacement:"bottom-end",popoverOffset:-8,children:[(0,s.tZ)(T,{name:n,secondaryText:r}),t]})}var S={name:"d3v9zr",styles:"overflow:hidden"},B={name:"d3v9zr",styles:"overflow:hidden"},D={name:"ozd7xs",styles:"flex-shrink:0"},X={name:"ozd7xs",styles:"flex-shrink:0"};function T(e){var t=e.name,n=e.secondaryText,r=(0,Z.Kk)().isMenuOpen,o=(0,Z.cH)(),a=o.ref,c=(0,x.Z)(o,j);return(0,s.BX)(b.Flex,P(P({as:k.BaseButton,ref:a},c),{},{background:r?"shade":void 0,alignItems:"center",justifyContent:"space-between",padding:1,gap:1,color:"action",focusRingFor:"keyboard",css:(0,i.mq)({height:"100%",maxWidth:["16rem","18rem"],overflow:"hidden","&:hover":{backgroundColor:i._X.backgroundShade,"& > span:last-of-type > span:last-of-type":i.lB.underline}}),children:[(0,s.tZ)(O.TX,{children:"Account menu"}),(0,s.BX)(b.Flex,{as:"span",gap:.5,alignItems:"center",width:"100%","aria-hidden":!0,css:S,children:[(0,s.tZ)(v.q,{name:t,tone:"action",size:"md"}),(0,s.BX)(b.Flex,{as:"span",flexDirection:"column",width:"100%",css:B,children:[(0,s.tZ)(g.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:i.lB.truncate,children:t}),n?(0,s.tZ)(g.Text,{color:"muted",fontSize:"xs",css:i.lB.truncate,children:n}):null]})]}),r?(0,s.tZ)(w.g8,{size:"sm",weight:"bold",css:D}):(0,s.tZ)(w.ChevronDownIcon,{size:"sm",weight:"bold",css:X})]}))}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A={name:"d3v9zr",styles:"overflow:hidden"};function E(e){var t=e.name,n=e.secondaryText,r=e.href,o=e.dropdown,a=(0,i.yF)();if(o)return(0,s.tZ)(L,{name:t,secondaryText:n,children:o});var c=!!r;return(0,s.BX)(b.Flex,z(z({as:"span"},c&&{as:a,href:r,focusRingFor:"keyboard"}),{},{alignItems:"center",flexShrink:0,gap:.5,textAlign:"right",css:(0,i.mq)(z({textDecoration:"none",maxWidth:["16rem","18rem"]},c&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),children:[(0,s.BX)(b.Flex,{as:"span",flexDirection:"column",css:A,children:[(0,s.tZ)(g.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:i.lB.truncate,children:t}),n?(0,s.tZ)(g.Text,{color:"muted",fontSize:"xs",css:i.lB.truncate,children:n}):null]}),(0,s.tZ)(v.q,{name:t,tone:"action","aria-hidden":!0,size:"md"})]}))}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var I={name:"g2vans",styles:"& > a, button{height:100%;}"};function W(e){var t=e.accountDetails,n=l(),o=n.focusMode,a=n.openMobileMenu;return(0,s.BX)(b.Flex,{display:(0,r.Z)({xs:"flex"},"xl","none"),background:"body",alignItems:"center",justifyContent:o?"flex-end":"space-between",paddingLeft:.75,paddingRight:null!=t&&t.dropdown?.75:i.tokens.containerPadding,minHeight:"5.25rem",css:I,children:[o?null:(0,s.tZ)(_,{onClick:a}),t?(0,s.tZ)(E,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)):null]})}function _(e){var t=e.onClick;return(0,s.BX)(b.Flex,{as:k.BaseButton,onClick:t,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:.5,paddingX:1,color:"action",fontSize:"xs",focus:!0,css:(0,f.iv)({"&:hover":{backgroundColor:i._X.backgroundShade,textDecoration:"underline"}},"",""),children:[(0,s.tZ)(w.Oq,{"aria-hidden":!0}),(0,s.tZ)("span",{children:"Menu"})]})}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){var t=e.id,n=e.heading,o=e.href,a=e.logo,c=e.subLine,l=e.badgeLabel,d=e.accountDetails;return(0,s.BX)(b.Flex,{as:"header",id:t,palette:"dark",flexDirection:"column",borderBottom:!0,borderBottomWidth:"xxl",borderColor:"accent",css:(0,f.iv)((0,r.Z)({},i.tokens.mediaQuery.min.xl,{gridColumnStart:1,gridColumnEnd:3}),"",""),children:[(0,s.BX)(b.Flex,{gap:1,paddingX:i.tokens.containerPadding,justifyContent:"space-between",background:"bodyAlt",alignItems:"center",width:"100%",children:[(0,s.tZ)(m,{heading:n,href:o,logo:a,subLine:c,badgeLabel:l}),(0,s.tZ)(h.Box,{height:"100%",display:(0,r.Z)({xs:"none"},"xl","flex"),children:d?(0,s.tZ)(E,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},d)):null})]}),(0,s.tZ)(W,{accountDetails:d})]})}var G=n(7226),q=["endElement","icon","label"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Y(e){var t=e.activePath,n=e.items;return(0,s.tZ)(b.Flex,{as:"nav",flexDirection:"column","aria-label":"main",paddingBottom:1.5,children:(0,s.tZ)(b.Flex,{as:"ul",flexDirection:"column",children:n.map(function(e,r){var o,i,c=0===r,l=Array.isArray(e)?e:e.items,d=!Array.isArray(e)&&!!(null===(o=e.options)||void 0===o?void 0:o.disableGroupPadding),u=n[r-1],p=!!u&&!Array.isArray(u)&&!!(null===(i=u.options)||void 0===i?void 0:i.disableGroupPadding);return(0,s.BX)(a.Fragment,{children:[c?null:(0,s.tZ)(K,{disablePaddingTop:p,disablePaddingBottom:d}),l.map(function(e,n){return(0,s.tZ)(U,{item:e,activePath:t},n)})]},r)})})})}function U(e){var t=e.activePath,n=e.item,r=(0,i.yF)(),o=n.endElement,a=n.icon,c=n.label,d=(0,x.Z)(n,q),u=l().closeMobileMenu;if("href"in n){var p=n.href===t;return(0,s.tZ)(V,{hasEndElement:!!o,isActive:t===n.href,onClick:u,children:(0,s.BX)(r,Q(Q({"aria-current":p?"page":void 0},d),{},{children:[a?(0,s.tZ)(a,{color:"inherit"}):null,(0,s.tZ)("span",{children:c}),o]}))})}return"onClick"in n?(0,s.tZ)(V,{hasEndElement:!!o,isActive:!1,onClick:u,children:(0,s.BX)(k.BaseButton,Q(Q({},d),{},{children:[a?(0,s.tZ)(a,{color:"inherit"}):null,(0,s.tZ)("span",{children:c}),o]}))}):(0,s.tZ)(V,{isActive:!1,hasEndElement:!1,children:(0,s.tZ)(G.Stack,{as:"span",gap:.25,children:c})})}function V(e){var t=e.children,n=e.hasEndElement,r=e.isActive,o=e.onClick;return(0,s.tZ)("li",{css:(0,f.iv)({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:(0,i.mapSpacing)(1),paddingBottom:(0,i.mapSpacing)(1),paddingLeft:(0,i.mapSpacing)(1.5),paddingRight:(0,i.mapSpacing)(1.5),"& > svg":{flexShrink:0}},"> a, > button":Q(Q(Q({position:"relative",display:"flex",alignItems:"center",gap:(0,i.mapSpacing)(.75),color:i._X[r?"foregroundText":"foregroundAction"]},r&&{fontWeight:i.tokens.fontWeight.bold,background:i._X.backgroundShadeAlt,"&:before":{content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftColor:i._X.selected,borderLeftWidth:i.tokens.borderWidth.xl}}),n&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":{background:i._X.backgroundShadeAlt,color:i._X.foregroundText,"& > span:first-of-type":i.lB.underline}},h.j4),"> span":{color:i._X.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:o,children:t})}function K(e){var t=e.disablePaddingTop,n=e.disablePaddingBottom;return(0,s.tZ)(h.Box,{as:"li",paddingTop:t?0:1,paddingBottom:n?0:1,"aria-hidden":"true",children:(0,s.tZ)("hr",{css:(0,f.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:i.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.borderMuted,width:"100%"},"","")})})}var $=n(31542),J=n(39998),ee=n(48542);function et(e){var t=e.children,n=l(),o=n.isMobileMenuOpen,c=n.closeMobileMenu,u=(0,i.p_)(o).modalContainerRef;(0,a.useEffect)(function(){var e=function(e){"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),c())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[c]);var p=(0,i.usePrefersReducedMotion)(),h=(0,J.useTransition)([o],{from:{translateX:"-100%",opacity:0},enter:{translateX:"0%",opacity:1},leave:{translateX:"-100%",opacity:0},config:{duration:150},immediate:p});return(0,i.Nq)()?(0,$.createPortal)((0,s.BX)(a.Fragment,{children:[o&&(0,s.tZ)(er,{}),h(function(e,n){var o=e.translateX,a=e.opacity;return n?(0,s.BX)("div",{ref:u,children:[(0,s.tZ)(eo,{onClick:c,style:{opacity:a}}),(0,s.tZ)(ee.ZP,{returnFocus:!0,children:(0,s.BX)(en,{display:(0,r.Z)({},"xl","none"),role:"dialog","aria-label":"Menu","aria-modal":"true",background:"shade",width:d,css:(0,f.iv)({position:"fixed",zIndex:i.tokens.zIndex.dialog,top:0,left:0,bottom:0,overflowY:"auto"},"",""),style:{translateX:o},children:[(0,s.tZ)(ei,{onClick:c}),t]})})]}):null})]}),document.body):null}var en=(0,J.animated)(h.Box);function er(){return(0,s.tZ)(f.xB,{styles:(0,f.iv)((0,r.Z)({body:{overflow:"hidden"}},i.tokens.mediaQuery.min.xl,{body:{overflow:"unset"}}),"","")})}function eo(e){var t=e.onClick,n=e.style;return(0,s.tZ)(J.animated.div,{css:(0,f.iv)((0,r.Z)({display:"block",position:"fixed",inset:0,backgroundColor:i._X.overlay,zIndex:i.tokens.zIndex.overlay},i.tokens.mediaQuery.min.xl,{display:"none"}),"",""),onClick:t,style:n})}function ei(e){var t=e.onClick;return(0,s.tZ)(b.Flex,{alignItems:"center",borderBottom:!0,borderColor:"muted",paddingLeft:1,flexShrink:0,children:(0,s.BX)(b.Flex,{as:k.BaseButton,onClick:t,flexDirection:"column",alignItems:"center",gap:.5,color:"action",fontSize:"xs",padding:1,focusRingFor:"keyboard",children:[(0,s.tZ)(w.Tw,{}),(0,s.tZ)("span",{"aria-hidden":"true",children:"Close"}),(0,s.tZ)(O.TX,{children:"Close menu"})]})})}function ea(e){var t=e.activePath,n=e.items,o=l().focusMode,c=(0,i.lb)(n.map(function(e){return Array.isArray(e)?e:e.items}).flat(),t);return(0,s.BX)(a.Fragment,{children:[(0,s.tZ)(G.Stack,{gap:1,background:"bodyAlt",borderRight:!0,borderColor:"muted",flexGrow:1,css:(0,f.iv)((0,r.Z)({display:"none",width:d},i.tokens.mediaQuery.min.xl,{display:o?"none":"flex"}),"",""),children:(0,s.tZ)(Y,{activePath:c,items:n})}),(0,s.tZ)(et,{children:(0,s.tZ)(Y,{activePath:c,items:n})})]})}function ec(e){var t=e.children;return(0,s.tZ)(b.Flex,{flexDirection:"column",css:(0,f.iv)({minWidth:"0"},"",""),children:t})}var el=n(61586),ed={name:"xdvdnl",styles:"margin-top:auto"};function es(e){var t=e.children,n=e.id;return(0,s.tZ)("footer",{css:ed,id:n,children:(0,s.tZ)(el.Content,{children:(0,s.tZ)(G.Stack,{paddingY:3,width:"100%",gap:1.5,borderTop:!0,borderTopWidth:"xl",borderColor:"muted",children:t})})})}function eu(){return(0,s.tZ)("hr",{"aria-hidden":"true",css:(0,f.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:i._X.borderMuted,width:"100%"},"","")})}},24610:function(e,t,n){n.d(t,{q:function(){return c}});var r=n(10043),o=n(84007),i=n(23914),a=n(87800);function c(e){var t,n,c,s=e.name,u=e.tone,p=e.size,f=e["aria-hidden"],h=e["aria-label"],b=(c=Array.from(s.matchAll(RegExp(/(\p{L}{1})\p{L}+/,"gu")))).length?(((null===(t=c.shift())||void 0===t?void 0:t[1])||"")+((null===(n=c.pop())||void 0===n?void 0:n[1])||"")).toUpperCase():"?",g=l[void 0===u?"neutral":u],m=d[void 0===p?"md":p],y=m.size,v=m.fontSize;return(0,a.tZ)(o.Flex,{as:"span",alignItems:"center",justifyContent:"center",flexShrink:0,css:(0,r.iv)({textDecoration:"none",height:"".concat(y,"rem"),width:"".concat(y,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:i.tokens.borderWidth.sm,borderColor:g,color:g},"",""),fontSize:v,fontWeight:"bold","aria-hidden":f,"aria-label":h,children:b})}var l={neutral:i._X.foregroundMuted,action:i._X.foregroundAction},d={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}}},3915:function(e,t,n){n.d(t,{S:function(){return c},a:function(){return a}});var r=n(27378),o=n(40631),i=n(87800),a=(0,o.createIcon)((0,i.BX)(r.Fragment,{children:[(0,i.tZ)("path",{d:"M11.832 1.15241C11.9273 1.06594 12.0727 1.06594 12.168 1.15241L14.9342 3.66209C14.9826 3.70607 15.0464 3.72929 15.1118 3.72676L18.844 3.58228C18.9726 3.57731 19.084 3.67075 19.1014 3.79824L19.6072 7.49883C19.6161 7.56368 19.65 7.62246 19.7017 7.66256L22.6536 9.9509C22.7553 10.0297 22.7806 10.1729 22.712 10.2818L20.7207 13.4417C20.6859 13.4971 20.6741 13.5639 20.6879 13.6279L21.4783 17.2783C21.5055 17.4041 21.4328 17.53 21.3103 17.5693L17.7538 18.71C17.6914 18.73 17.6394 18.7736 17.6089 18.8315L15.8679 22.1359C15.808 22.2498 15.6714 22.2995 15.5522 22.2509L12.0945 20.8386C12.0339 20.8139 11.9661 20.8139 11.9055 20.8386L8.44776 22.2509C8.32863 22.2995 8.19203 22.2498 8.13205 22.1359L6.39106 18.8315C6.36056 18.7736 6.30856 18.73 6.24624 18.71L2.6897 17.5693C2.56717 17.53 2.49449 17.4041 2.52172 17.2783L3.31208 13.6279C3.32593 13.5639 3.31415 13.4971 3.27926 13.4417L1.28804 10.2818C1.21944 10.1729 1.24468 10.0297 1.34638 9.9509L4.29828 7.66256C4.35 7.62246 4.38394 7.56368 4.3928 7.49883L4.89862 3.79824C4.91605 3.67075 5.0274 3.57731 5.15599 3.58228L8.88819 3.72676C8.95359 3.72929 9.01737 3.70607 9.06585 3.66209L11.832 1.15241Z",strokeWidth:"2",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M7.23828 12.9521L10.0954 15.8092L16.4047 9.5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"IconApproval"),c=(0,o.createIcon)((0,i.BX)(r.Fragment,{children:[(0,i.tZ)("path",{d:"M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"IconUsers")},54803:function(e,t,n){n.d(t,{L:function(){return z}});var r=n(90849),o=n(27378),i=n(86677),a=n(56273),c=n(33909),l=n(50506),d=n(40631),s=n(71497),u=n(53169),p=n(68944),f=n(65747),h=n(99803),b=n(65402),g=n(52948),m=n(83180),y=n(34217);function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(0,y.Z)(r.key),r)}}function x(e,t){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var O=n(23448);function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=n(50456),w=n(51036),j=n(94303),C=n(74578),P=n(87800),L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(o,e);var t,n,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=k(o);if(t){var r=k(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===(0,O.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function o(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={hasError:!1},t}return n=[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}],v(o.prototype,[{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}]),n&&v(o,n),Object.defineProperty(o,"prototype",{writable:!1}),o}(o.Component);function S(){var e=(0,i.useRouter)().reload;return(0,P.tZ)(C.PageContent,{children:(0,P.BX)(Z.Stack,{gap:2,alignItems:"flex-start",children:[(0,P.BX)(Z.Stack,{gap:1.5,children:[(0,P.tZ)(j.H1,{children:"An error occurred"}),(0,P.tZ)(p.Text,{as:"p",children:"Something went wrong."})]}),(0,P.tZ)(w.Button,{onClick:e,children:"Reload the page"})]})})}var B=n(3915);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T=[{label:"About",href:"/not-found"},{label:"Help",href:"/not-found"},{label:"Accessibility",href:"/not-found"},{label:"Disclaimer",href:"/not-found"}],M={as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}};function z(e){var t=e.children,n=e.focusMode,r=e.applyMainElement,i=new Date().getFullYear(),c=(0,b.a)(),d=c.hasLoadedUser,h=c.user;return d?h?(0,P.BX)(o.Fragment,{children:[(0,P.tZ)(l.SkipLinks,{links:[{href:"#main-content",label:"Skip to main content"}]}),(0,P.BX)(s.AppLayout,{focusMode:void 0!==n&&n,children:[(0,P.tZ)(A,{user:h}),(0,P.tZ)(E,{}),(0,P.BX)(s.AppLayoutContent,{children:[(0,P.tZ)(u.Box,X(X({flexGrow:1},void 0===r||r?M:void 0),{},{children:(0,P.tZ)(L,{fallback:(0,P.tZ)(S,{}),children:t})})),(0,P.BX)(s.AppLayoutFooter,{children:[(0,P.tZ)("nav",{"aria-label":"footer",children:(0,P.tZ)(f.LinkList,{links:T,horizontal:!0})}),(0,P.tZ)(s.AppLayoutFooterDivider,{}),(0,P.tZ)(p.Text,{fontSize:"xs",maxWidth:a.tokens.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),(0,P.BX)(p.Text,{fontSize:"xs",maxWidth:a.tokens.maxWidth.bodyText,children:["\xa9 ",i," Department of Agriculture, Fisheries and Forestry"]})]})]})]})]}):(0,P.tZ)(g.default,{}):null}function A(e){var t=e.user,n=(0,i.useRouter)(),r=n.pathname,o=n.push,a=(0,m.w)(),l=a.linkedBusinesses,u=a.selectedBusiness,p=a.setSelectedBusiness,f="/app"===r;return(0,P.tZ)(s.AppLayoutHeader,{heading:"yourGov",subLine:"Access government services from one place",logo:(0,P.tZ)(c.Logo,{}),href:"/app",accountDetails:{name:t.displayName,secondaryText:f?"My account":null==u?void 0:u.name,dropdown:(0,P.BX)(h.DropdownMenuPanel,{palette:"light",children:[f?null:(0,P.tZ)(h.DropdownMenuGroup,{label:"Businesses",children:l.map(function(e){return(0,P.tZ)(h.DropdownMenuItemRadio,{checked:null!=u&&!!u.name&&u.name===e.name,secondaryText:"ABN ".concat(e.abn),onClick:function(){p(e),o("/app/dashboard")},children:e.name},e.name)})}),(0,P.BX)(h.DropdownMenuGroup,{label:"My account",children:[(0,P.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:d.AvatarIcon,children:"Profile"}),(0,P.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:d.EmailIcon,children:"Messages"}),(0,P.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:d.SettingsIcon,children:"Account settings"})]}),(0,P.tZ)(h.DropdownMenuDivider,{}),(0,P.tZ)(h.DropdownMenuItemLink,{href:"/sign-out",icon:d.ExitIcon,children:"Sign out"})]})}})}function E(){var e=(0,i.useRouter)().pathname,t=(0,m.w)().selectedBusiness,n=(0,o.useMemo)(function(){return[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:d.ChevronsLeftIcon,href:"/app"}]},{options:{disableGroupPadding:!0},items:[{label:(0,P.BX)(o.Fragment,{children:[(0,P.tZ)(p.Text,{fontWeight:"bold",fontSize:"xs",children:null==t?void 0:t.name}),(0,P.BX)(p.Text,{color:"muted",fontSize:"xs",children:["ABN: ",null==t?void 0:t.abn]})]})}]},[{label:"Dashboard",href:"/app/dashboard",icon:d.HomeIcon},{label:"Licences and permits",href:"/app/licences-and-permits",icon:B.a},{label:"Staff access",href:"/not-found",icon:B.S}],[{label:"Messages",href:"/app/messages",icon:d.EmailIcon},{label:"Account settings",href:"/not-found",icon:d.SettingsIcon},{label:"Help",href:"/not-found",icon:d.HelpIcon}],[{label:"Sign out",href:"/sign-out",icon:d.ExitIcon}]]},[null==t?void 0:t.abn,null==t?void 0:t.name]);return(0,P.tZ)(s.AppLayoutSidebar,{items:n,activePath:e})}},52948:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(27378),o=n(94303),i=n(50456),a=n(68944),c=n(79706),l=n(56273),d=n(74578),s=n(7787),u=n(40670),p=n(87800);function f(){return(0,p.BX)(r.Fragment,{children:[(0,p.tZ)(u.$,{title:"Page not found"}),(0,p.tZ)(s.I,{children:(0,p.tZ)(d.PageContent,{children:(0,p.BX)(i.Stack,{gap:1.5,maxWidth:l.tokens.maxWidth.bodyText,children:[(0,p.tZ)(o.H1,{children:"Oops! This page does not exist."}),(0,p.tZ)(a.Text,{as:"p",fontSize:"md",children:"You have reached a page which is not part of the testing process."}),(0,p.BX)(a.Text,{as:"p",children:["Please go back to the"," ",(0,p.tZ)(c.TextLink,{href:"/",children:"yourGov home page"}),"."]})]})})})]})}}}]);