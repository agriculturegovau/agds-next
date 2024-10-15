"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4803],{71497:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(81023),r()},99803:function(e,t,n){var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(67603),r()},81023:function(e,t,n){n.d(t,{AppLayout:function(){return h},AppLayoutContent:function(){return ex},AppLayoutFooter:function(){return eZ},AppLayoutFooterDivider:function(){return ew},AppLayoutHeader:function(){return $},AppLayoutSidebar:function(){return ev}});var r=n(90849),o=n(11246),i=n(8447),a=n(27378),c=(0,a.createContext)(void 0);function l(){var e=(0,a.useContext)(c);if(void 0===e)throw Error("`AppLayoutContext` not found.");return e}var d=n(44285);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var u="16rem",f=function(e,t){if(!t)return"";var n,r,o=e.flatMap(function(e){return Array.isArray(e)?e:[e].concat((0,d.Z)(e.items))}).flatMap(function(e){return"items"in e&&void 0!==e.items?[e].concat((0,d.Z)(e.items)):e}).map(function(e){return e&&"href"in e&&void 0!==e.href?e.href:""}),i="",a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(o);try{for(a.s();!(r=a.n()).done;){var c=r.value;if(c===t){n=c;break}null!=t&&t.startsWith(c)&&c.length>i.length&&(i=c)}}catch(e){a.e(e)}finally{a.f()}return n||i},p=n(87800);function h(e){var t=e.children,n=e.focusMode,r=void 0!==n&&n,a=(0,i.useTernaryState)(!1),l=(0,o.Z)(a,3),d=l[0],s=l[1],u=l[2];return(0,p.tZ)(c.Provider,{value:{focusMode:r,isMobileMenuOpen:d,openMobileMenu:s,closeMobileMenu:u},children:(0,p.tZ)(b,{focusMode:r,children:t})})}function b(e){var t=e.children,n=e.focusMode;return(0,p.tZ)("div",{css:(0,i.mq)({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:(0,i.qz)((0,r.Z)({xs:"1fr"},"xl",n?"1fr":"".concat(u," 1fr")))}),children:t})}var g=n(10043),m=n(84815),v=n(84007),y=n(89205),x=n(7226);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Z="3.75rem",w={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function j(e){var t=e.badgeLabel,n=e.dividerPosition,o=e.logo,a=e.heading,c=e.hasAccountDetails,l=e.href,d=e.secondHref,s=e.secondLogo,u=e.subLine,f=(0,i.yF)();return o&&s?(0,p.BX)(v.Flex,{css:w,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:1.5},inline:!0,padding:.5,children:[(0,p.BX)(v.Flex,{css:(0,g.iv)({marginRight:c&&"after"===n?(0,i.mapSpacing)(1.5):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:1.5,children:[(0,p.tZ)(v.Flex,{alignSelf:{xs:"start",sm:"center"},as:f,color:"text",css:(0,g.iv)(k({" img, svg":{height:Z}},i.lB.print.hidden),"",""),focusRingFor:"keyboard",href:l,children:o}),"between"===n&&(0,p.tZ)(S,{dividerPosition:n}),(0,p.tZ)(v.Flex,k(k({alignSelf:{xs:"start",sm:"center"},as:d?f:"span",color:"text",css:(0,g.iv)(k({" img, svg":{width:"100%"}},i.lB.print.hidden),"",""),focusRingFor:"keyboard"},d&&{href:d}),{},{children:s}))]}),(0,p.BX)(v.Flex,{css:"after"===n?(0,r.Z)({},i.tokens.mediaQuery.min.lg,{marginLeft:"calc(-".concat(c?(0,i.mapSpacing)(1.5):0," - ").concat(i.tokens.borderWidth.sm,"px)")}):void 0,gap:1.5,children:["after"===n&&(0,p.tZ)(S,{dividerPosition:n}),(0,p.BX)(x.Stack,{as:f,color:"text",css:(0,g.iv)({textDecoration:"none",":hover":i.lB.underline},"",""),focusRingFor:"keyboard",href:l,justifyContent:"center",children:[(0,p.BX)(v.Flex,{alignItems:"flex-start",gap:.5,children:[(0,p.tZ)(y.Text,{fontSize:"lg",fontWeight:"bold",children:a}),t&&(0,p.tZ)(P,{children:t})]}),u&&(0,p.tZ)(y.Text,{color:"muted",fontSize:"xs",children:u})]})]})]}):(0,p.BX)(v.Flex,{as:f,href:l,paddingY:.5,flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},gap:{xs:1,md:0},focusRingFor:"keyboard",color:"text",css:(0,g.iv)({textDecoration:"none","&:hover":i.lB.underline,svg:{display:"block",height:Z,flexShrink:0}},"",""),children:[o,(0,p.tZ)(S,{singleLogo:!0}),(0,p.BX)(v.Flex,{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",maxWidth:i.tokens.maxWidth.bodyText,children:[(0,p.BX)(v.Flex,{alignItems:"flex-start",gap:.5,children:[(0,p.tZ)(y.Text,{fontSize:"lg",fontWeight:"bold",children:a}),t&&(0,p.tZ)(P,{children:t})]}),u&&(0,p.tZ)(y.Text,{color:"muted",fontSize:"xs",children:u})]})]})}function P(e){var t=e.children;return(0,p.tZ)(m.Box,{fontWeight:"bold",paddingLeft:.5,paddingRight:.5,border:!0,borderWidth:"md",css:(0,g.iv)({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:i._X.foregroundText,borderRadius:"2em"},"",""),children:t})}var S=function(e){var t=e.dividerPosition,n=e.singleLogo;return(0,p.tZ)(m.Box,{borderLeft:!0,css:(0,g.iv)(k({margin:n?"0 1rem":void 0},i.lB.print.hidden),"",""),display:n?{xs:"none",md:"block"}:{xs:"none",sm:"between"===t?"block":void 0,lg:"block"},height:n?Z:void 0})},C=n(24610),L=n(90089),B=n(64388),D=n(11475),X=n(67603),A=n(32084),M=["ref"];function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function E(e){var t=e.children,n=e.name,r=e.secondaryText;return(0,p.BX)(X.h_,{popoverPlacement:"bottom-end",popoverOffset:-8,children:[(0,p.tZ)(R,{name:n,secondaryText:r}),t]})}var F={name:"d3v9zr",styles:"overflow:hidden"},W={name:"d3v9zr",styles:"overflow:hidden"},I={name:"ozd7xs",styles:"flex-shrink:0"},_={name:"ozd7xs",styles:"flex-shrink:0"};function R(e){var t=e.name,n=e.secondaryText,r=(0,X.Kk)().isMenuOpen,o=(0,X.cH)(),c=o.ref,l=(0,L.Z)(o,M),d=(0,a.useRef)(0);return(0,a.useEffect)(function(){d.current=window.innerWidth-document.documentElement.offsetWidth},[]),(0,p.BX)(v.Flex,T(T({as:D.Yd,ref:c},l),{},{background:r?"shade":void 0,alignItems:"center",justifyContent:"space-between",padding:1,gap:1,color:"action",focusRingFor:"keyboard",minHeight:"5.25rem",css:(0,i.mq)({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(d.current,"px)"),overflow:"hidden","&:hover":{backgroundColor:i._X.backgroundShade,"& > span:last-of-type > span:last-of-type":i.lB.underline}}),children:[(0,p.tZ)(B.TX,{children:"Account menu"}),(0,p.BX)(v.Flex,{as:"span",gap:.5,alignItems:"center",width:"100%","aria-hidden":!0,css:F,children:[(0,p.tZ)(C.q,{name:t,tone:"action",size:"md"}),(0,p.BX)(v.Flex,{as:"span",flexDirection:"column",width:"100%",css:W,children:[(0,p.tZ)(y.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:i.lB.truncate,children:t}),n?(0,p.tZ)(y.Text,{color:"muted",fontSize:"xs",css:i.lB.truncate,children:n}):null]})]}),r?(0,p.tZ)(A.g8,{size:"sm",weight:"bold",css:I}):(0,p.tZ)(A.v4,{size:"sm",weight:"bold",css:_})]}))}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Y={name:"d3v9zr",styles:"overflow:hidden"};function q(e){var t=e.name,n=e.secondaryText,r=e.href,o=e.dropdown,c=(0,i.yF)(),l=(0,a.useRef)(0);if((0,a.useEffect)(function(){l.current=window.innerWidth-document.documentElement.offsetWidth},[]),o)return(0,p.tZ)(E,{name:t,secondaryText:n,children:o});var d=!!r;return(0,p.BX)(v.Flex,G(G({as:"span"},d&&{as:c,href:r,focusRingFor:"keyboard"}),{},{alignItems:"center",flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",css:(0,i.mq)(G({marginLeft:"auto",maxWidth:"calc(17.625rem - ".concat(l.current,"px)"),textDecoration:"none"},d&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),children:[(0,p.BX)(v.Flex,{as:"span",flexDirection:"column",css:Y,children:[(0,p.tZ)(y.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:i.lB.truncate,children:t}),n?(0,p.tZ)(y.Text,{color:"muted",fontSize:"xs",css:i.lB.truncate,children:n}):null]}),(0,p.tZ)(C.q,{name:t,tone:"action","aria-hidden":!0,size:"md"})]}))}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){var t=e.accountDetails,n=l(),o=n.focusMode,a=n.openMobileMenu;return(0,p.BX)(v.Flex,{alignItems:"center",background:"body",flexWrap:"wrap",display:(0,r.Z)({xs:"flex"},"xl","none"),justifyContent:o?"flex-end":"space-between",paddingLeft:.75,paddingRight:null!=t&&t.dropdown?.75:i.tokens.containerPadding,children:[o?null:(0,p.tZ)(Q,{onClick:a}),t?(0,p.tZ)(q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)):null]})}function Q(e){var t=e.onClick,n=l().isMobileMenuOpen;return(0,p.BX)(v.Flex,{alignItems:"center","aria-expanded":n,"aria-haspopup":"dialog",as:D.Yd,color:"action",css:(0,g.iv)({"&:hover":{backgroundColor:i._X.backgroundShade,textDecoration:"underline"}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick:t,paddingX:1,children:[(0,p.tZ)(A.Oq,{"aria-hidden":!0}),(0,p.tZ)("span",{children:"Menu"})]})}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){var t=e.accountDetails,n=e.background,o=e.badgeLabel,a=e.borderColor,c=e.dividerPosition,l=e.heading,d=e.href,s=e.id,u=e.logo,f=e.palette,h=e.secondHref,b=e.secondLogo,y=e.subLine;return(0,p.BX)(v.Flex,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor:void 0===a?"accent":a,css:(0,g.iv)((0,r.Z)({},i.tokens.mediaQuery.min.xl,{gridColumnStart:1,gridColumnEnd:3}),"",""),flexDirection:"column",id:s,palette:void 0===f?"dark":f,children:[(0,p.BX)(v.Flex,{alignItems:"center",background:void 0===n?"bodyAlt":n,gap:1,justifyContent:"space-between",paddingX:i.tokens.containerPadding,paddingY:.5,width:"100%",children:[(0,p.tZ)(j,{badgeLabel:o,dividerPosition:void 0===c?"after":c,hasAccountDetails:!!t,heading:l,href:d,logo:u,secondHref:h,secondLogo:b,subLine:y}),(0,p.tZ)(m.Box,{display:(0,r.Z)({xs:"none"},"xl","flex"),children:t?(0,p.tZ)(q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)):null})]}),(0,p.tZ)(N,{accountDetails:t})]})}var K=["endElement","icon","isActive","items","label","level"];function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var et=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(r){var o,i,a="href"in r&&r.href===t||ec(r.items,t);return ee(ee({},r),{},{isActive:a,items:a||null!==(o=r.items)&&void 0!==o&&o.length?null==r||null===(i=r.items)||void 0===i?void 0:i.map(e(t,n+1)):void 0,level:n+1})}},en=function(e){var t=e.activePath,n=e.background,r=e.items,o=e.subLevelVisible;return(0,p.tZ)(x.Stack,{as:"nav","aria-label":"main",paddingBottom:1.5,children:(0,p.tZ)(x.Stack,{as:"ul",children:r.map(function(e,i){var c,l,d=0===i,s=(Array.isArray(e)?e:e.items).map(et(t)),u=!Array.isArray(e)&&!!(null===(c=e.options)||void 0===c?void 0:c.disableGroupPadding),f=r[i-1],h=!!f&&!Array.isArray(f)&&!!(null===(l=f.options)||void 0===l?void 0:l.disableGroupPadding);return(0,p.BX)(a.Fragment,{children:[d?null:(0,p.tZ)(ea,{disablePaddingTop:h,disablePaddingBottom:u}),s.map(function(e,r){var i=ec(e.items,t),a="always"===o||i;return(0,p.tZ)(eo,{activePath:t,background:n,isActiveGroup:i,isOpen:a,item:e,subLevelVisible:o},r)})]},i)})})})},er={name:"1ff36h2",styles:"flex-grow:1"};function eo(e){var t=e.activePath,n=e.background,r=e.isActiveGroup,o=e.isOpen,a=e.item,c=e.subLevelVisible,d=(0,i.yF)(),s=a.endElement,u=a.icon,f=a.isActive,h=a.items,b=a.label,g=a.level,m=(0,L.Z)(a,K),v=l().closeMobileMenu,y=(null==h?void 0:h.length)||0;if("href"in a){var O,k,Z,w=a.href===t;return(0,p.BX)(ei,{background:n,hasEndElement:!!s,isCurrentPage:w,isActive:r,isOpen:o,level:a.level,onClick:v,children:[(0,p.BX)(d,ee(ee({"aria-current":w?"page":void 0},m),{},{children:[u&&1===g&&(0,p.tZ)(u,{color:"inherit"}),2===g&&(0,p.tZ)("span",{"aria-hidden":!0,children:"–"}),(0,p.tZ)("span",{css:er,children:b}),s,y>0&&"always"!==c&&(f?(0,p.tZ)(A.v4,{"aria-hidden":!1,"aria-label":". Sub-level ".concat(1===y?"link":"links"," below."),size:"md"}):(0,p.tZ)(A.XC,{"aria-hidden":!1,"aria-label":". Has ".concat(y," sub-level ").concat(1===y?"link":"links","."),size:"md"}))]})),!!(null===(O=a.items)||void 0===O?void 0:O.length)&&(o||w)&&(0,p.tZ)(x.Stack,{as:"ul",children:null===(k=a.items)||void 0===k||null===(Z=k.map)||void 0===Z?void 0:Z.call(k,function(e){var r;return(0,p.tZ)(eo,{activePath:t,background:n,isActiveGroup:!!f,isOpen:o,item:e,subLevelVisible:c},null===(r=e.label)||void 0===r?void 0:r.toString())})})]})}return"onClick"in a?(0,p.tZ)(ei,{background:n,hasEndElement:!!s,isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:v,children:(0,p.BX)(D.Yd,ee(ee({},m),{},{children:[u?(0,p.tZ)(u,{color:"inherit"}):null,(0,p.tZ)("span",{children:b}),s]}))}):(0,p.tZ)(ei,{background:n,isActive:!1,isCurrentPage:!1,isOpen:!1,hasEndElement:!1,children:(0,p.tZ)(x.Stack,{as:"span",gap:.25,children:b})})}function ei(e){var t=e.background,n=e.children,o=e.hasEndElement,a=e.isCurrentPage,c=e.isActive,l=e.isOpen,d=e.level,s=e.onClick;return(0,p.tZ)("li",{css:(0,g.iv)({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:(0,i.mapSpacing)(1),paddingBottom:(0,i.mapSpacing)(1),paddingLeft:(0,i.mapSpacing)(2===d?3:1.5),paddingRight:(0,i.mapSpacing)(1),"& > svg":{flexShrink:0}},"> a, > button":ee(ee(ee(ee({position:"relative",display:"flex",alignItems:"center",gap:(0,i.mapSpacing)(.75),color:c&&2!==d||a?i._X.foregroundText:i._X.foregroundAction},(c||a||l)&&{fontWeight:a?i.tokens.fontWeight.bold:i.tokens.fontWeight.normal,background:a?i._X.selectedMuted:void 0,"&::before":ee(ee(ee({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:i.tokens.borderWidth.xl},a&&{borderLeftColor:i._X.selected}),!a&&c&&{borderLeftColor:i._X.borderMuted}),!a&&!c&&l&&{borderLeft:"none"})}),o&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":(0,r.Z)({background:i._X["body"===t?"backgroundShade":"backgroundShadeAlt"],color:i._X.foregroundText},"& > span:nth-of-type(".concat(d,")"),i.lB.underline)},m.j4),{},{":focus-visible":{zIndex:i.tokens.zIndex.elevated,outlineOffset:"-".concat(i.lB.outline.outlineWidth),"&::before":{zIndex:-1}}}),"> span":{color:i._X.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick:s,children:n})}function ea(e){var t=e.disablePaddingTop,n=e.disablePaddingBottom;return(0,p.tZ)(m.Box,{as:"li",paddingTop:t?0:1,paddingBottom:n?0:1,"aria-hidden":"true",children:(0,p.tZ)("hr",{css:(0,g.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:i.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.borderMuted,width:"100%"},"","")})})}function ec(e,t){return null!=e&&!!e.length&&!!t&&e.some(function(e){return"href"in e&&e.href===t||"items"in e&&ec(e.items,t)})}var el=n(31542),ed=n(39998),es=n(48542);function eu(e){var t=e.children,n=e.palette,o=l(),c=o.isMobileMenuOpen,d=o.closeMobileMenu,s=(0,i.p_)(c).modalContainerRef;(0,a.useEffect)(function(){var e=function(e){"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),d())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[d]);var f=(0,i.Tb)(),h=(0,ed.useTransition)([c],{from:{translateX:"-100%",opacity:0},enter:{translateX:"0%",opacity:1},leave:{translateX:"-100%",opacity:0},config:{duration:150},immediate:f});return(0,i.Nq)()?(0,el.createPortal)((0,p.BX)(a.Fragment,{children:[c&&(0,p.tZ)(ep,{}),h(function(e,o){var a=e.translateX,c=e.opacity;return o?(0,p.BX)("div",{ref:s,children:[(0,p.tZ)(eh,{onClick:d,style:{opacity:c}}),(0,p.tZ)(es.ZP,{returnFocus:!0,children:(0,p.BX)(ef,{"aria-label":"Menu","aria-modal":"true",background:"shade",css:(0,g.iv)({position:"fixed",zIndex:i.tokens.zIndex.dialog,top:0,left:0,bottom:0,overflowY:"auto"},"",""),display:(0,r.Z)({},"xl","none"),palette:n,role:"dialog",style:{translateX:a},width:u,children:[(0,p.tZ)(eb,{onClick:d}),t]})})]}):null})]}),document.body):null}var ef=(0,ed.animated)(m.Box);function ep(){return(0,p.tZ)(g.xB,{styles:(0,g.iv)((0,r.Z)({body:{overflow:"hidden"}},i.tokens.mediaQuery.min.xl,{body:{overflow:"unset"}}),"","")})}function eh(e){var t=e.onClick,n=e.style;return(0,p.tZ)(ed.animated.div,{css:(0,g.iv)((0,r.Z)({display:"block",position:"fixed",inset:0,backgroundColor:i._X.overlay,zIndex:i.tokens.zIndex.overlay},i.tokens.mediaQuery.min.xl,{display:"none"}),"",""),onClick:t,style:n})}function eb(e){var t=e.onClick;return(0,p.tZ)(v.Flex,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:(0,p.BX)(v.Flex,{alignItems:"center",as:D.Yd,color:"action",css:(0,g.iv)({":focus":{outlineOffset:"-".concat(i.lB.outline.outlineWidth)}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick:t,padding:1,children:[(0,p.tZ)(A.Tw,{}),(0,p.tZ)("span",{"aria-hidden":"true",children:"Close"}),(0,p.tZ)(B.TX,{children:"Close menu"})]})})}function eg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function em(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eg(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eg(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ev(e){var t=e.activePath,n=e.background,o=void 0===n?"bodyAlt":n,c=e.items,d=e.palette,s=e.subLevelVisible,h=l().focusMode,b={activePath:f(c,t),items:c,subLevelVisible:void 0===s?"whenActive":s};return(0,p.BX)(a.Fragment,{children:[(0,p.tZ)(x.Stack,{background:o,borderColor:"muted",borderRight:!0,css:(0,g.iv)((0,r.Z)({display:"none",width:u},i.tokens.mediaQuery.min.xl,{display:h?"none":"flex"}),"",""),flexGrow:1,gap:1,palette:d,children:(0,p.tZ)(en,em(em({},b),{},{background:o}))}),(0,p.tZ)(eu,{palette:d,children:(0,p.tZ)(en,em(em({},b),{},{background:"bodyAlt"}))})]})}var ey={name:"ovk77c",styles:"min-width:0"};function ex(e){var t=e.children;return(0,p.tZ)(v.Flex,{flexDirection:"column",css:ey,children:t})}var eO=n(61586),ek={name:"xdvdnl",styles:"margin-top:auto"};function eZ(e){var t=e.background,n=e.children,r=e.id,o=e.palette;return(0,p.tZ)(m.Box,{as:"footer",background:void 0===t?"body":t,css:ek,id:r,palette:o,children:(0,p.tZ)(eO.Content,{children:(0,p.tZ)(x.Stack,{paddingY:3,width:"100%",gap:1.5,borderTop:!0,borderTopWidth:"xl",borderColor:"muted",children:n})})})}function ew(){return(0,p.tZ)("hr",{"aria-hidden":"true",css:(0,g.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:i._X.borderMuted,width:"100%"},"","")})}},24610:function(e,t,n){n.d(t,{q:function(){return c}});var r=n(10043),o=n(84007),i=n(8447),a=n(87800);function c(e){var t,n,c,s=e.name,u=e.tone,f=e.size,p=e["aria-hidden"],h=e["aria-label"],b=(c=Array.from(s.matchAll(RegExp(/(\p{L})\p{L}+/,"gu")))).length?(((null===(t=c.shift())||void 0===t?void 0:t[1])||"")+((null===(n=c.pop())||void 0===n?void 0:n[1])||"")).toUpperCase():"?",g=l[void 0===u?"neutral":u],m=d[void 0===f?"md":f],v=m.size,y=m.fontSize;return(0,a.tZ)(o.Flex,{as:"span",alignItems:"center",justifyContent:"center",flexShrink:0,css:(0,r.iv)({textDecoration:"none",height:"".concat(v,"rem"),width:"".concat(v,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:i.tokens.borderWidth.sm,borderColor:g,color:g},"",""),fontSize:y,fontWeight:"bold","aria-hidden":p,"aria-label":h,children:b})}var l={neutral:i._X.foregroundMuted,action:i._X.foregroundAction},d={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}}},3915:function(e,t,n){n.d(t,{S:function(){return c},a:function(){return a}});var r=n(27378),o=n(40631),i=n(87800),a=(0,o.createIcon)((0,i.BX)(r.Fragment,{children:[(0,i.tZ)("path",{d:"M11.832 1.15241C11.9273 1.06594 12.0727 1.06594 12.168 1.15241L14.9342 3.66209C14.9826 3.70607 15.0464 3.72929 15.1118 3.72676L18.844 3.58228C18.9726 3.57731 19.084 3.67075 19.1014 3.79824L19.6072 7.49883C19.6161 7.56368 19.65 7.62246 19.7017 7.66256L22.6536 9.9509C22.7553 10.0297 22.7806 10.1729 22.712 10.2818L20.7207 13.4417C20.6859 13.4971 20.6741 13.5639 20.6879 13.6279L21.4783 17.2783C21.5055 17.4041 21.4328 17.53 21.3103 17.5693L17.7538 18.71C17.6914 18.73 17.6394 18.7736 17.6089 18.8315L15.8679 22.1359C15.808 22.2498 15.6714 22.2995 15.5522 22.2509L12.0945 20.8386C12.0339 20.8139 11.9661 20.8139 11.9055 20.8386L8.44776 22.2509C8.32863 22.2995 8.19203 22.2498 8.13205 22.1359L6.39106 18.8315C6.36056 18.7736 6.30856 18.73 6.24624 18.71L2.6897 17.5693C2.56717 17.53 2.49449 17.4041 2.52172 17.2783L3.31208 13.6279C3.32593 13.5639 3.31415 13.4971 3.27926 13.4417L1.28804 10.2818C1.21944 10.1729 1.24468 10.0297 1.34638 9.9509L4.29828 7.66256C4.35 7.62246 4.38394 7.56368 4.3928 7.49883L4.89862 3.79824C4.91605 3.67075 5.0274 3.57731 5.15599 3.58228L8.88819 3.72676C8.95359 3.72929 9.01737 3.70607 9.06585 3.66209L11.832 1.15241Z",strokeWidth:"2",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M7.23828 12.9521L10.0954 15.8092L16.4047 9.5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"IconApproval"),c=(0,o.createIcon)((0,i.BX)(r.Fragment,{children:[(0,i.tZ)("path",{d:"M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.tZ)("path",{d:"M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"IconUsers")},54803:function(e,t,n){n.d(t,{L:function(){return z}});var r=n(90849),o=n(27378),i=n(86677),a=n(56273),c=n(33909),l=n(50506),d=n(40631),s=n(71497),u=n(53169),f=n(68944),p=n(65747),h=n(99803),b=n(65402),g=n(52948),m=n(83180),v=n(34217);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(0,v.Z)(r.key),r)}}function x(e,t){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var O=n(23448);function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=n(50456),w=n(51036),j=n(94303),P=n(74578),S=n(87800),C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(o,e);var t,n,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=k(o);if(t){var r=k(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===(0,O.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function o(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={hasError:!1},t}return n=[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}],y(o.prototype,[{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}]),n&&y(o,n),Object.defineProperty(o,"prototype",{writable:!1}),o}(o.Component);function L(){var e=(0,i.useRouter)().reload;return(0,S.tZ)(P.PageContent,{children:(0,S.BX)(Z.Stack,{gap:2,alignItems:"flex-start",children:[(0,S.BX)(Z.Stack,{gap:1.5,children:[(0,S.tZ)(j.H1,{children:"An error occurred"}),(0,S.tZ)(f.Text,{as:"p",children:"Something went wrong."})]}),(0,S.tZ)(w.Button,{onClick:e,children:"Reload the page"})]})})}var B=n(3915);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A=[{label:"About",href:"/not-found"},{label:"Help",href:"/not-found"},{label:"Accessibility",href:"/not-found"},{label:"Disclaimer",href:"/not-found"}],M={as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}};function z(e){var t=e.children,n=e.focusMode,r=e.applyMainElement,i=new Date().getFullYear(),c=(0,b.a)(),d=c.hasLoadedUser,h=c.user;return d?h?(0,S.BX)(o.Fragment,{children:[(0,S.tZ)(l.SkipLinks,{links:[{href:"#main-content",label:"Skip to main content"}]}),(0,S.BX)(s.AppLayout,{focusMode:void 0!==n&&n,children:[(0,S.tZ)(T,{user:h}),(0,S.tZ)(E,{}),(0,S.BX)(s.AppLayoutContent,{children:[(0,S.tZ)(u.Box,X(X({flexGrow:1},void 0===r||r?M:void 0),{},{children:(0,S.tZ)(C,{fallback:(0,S.tZ)(L,{}),children:t})})),(0,S.BX)(s.AppLayoutFooter,{children:[(0,S.tZ)("nav",{"aria-label":"footer",children:(0,S.tZ)(p.LinkList,{links:A,horizontal:!0})}),(0,S.tZ)(s.AppLayoutFooterDivider,{}),(0,S.tZ)(f.Text,{fontSize:"xs",maxWidth:a.tokens.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),(0,S.BX)(f.Text,{fontSize:"xs",maxWidth:a.tokens.maxWidth.bodyText,children:["\xa9 ",i," Department of Agriculture, Fisheries and Forestry"]})]})]})]})]}):(0,S.tZ)(g.default,{}):null}function T(e){var t=e.user,n=(0,i.useRouter)(),r=n.pathname,o=n.push,a=(0,m.w)(),l=a.linkedBusinesses,u=a.selectedBusiness,f=a.setSelectedBusiness,p="/app"===r;return(0,S.tZ)(s.AppLayoutHeader,{heading:"yourGov",subLine:"Access government services from one place",logo:(0,S.tZ)(c.Logo,{}),href:"/app",accountDetails:{name:t.displayName,secondaryText:p?"My account":null==u?void 0:u.name,dropdown:(0,S.BX)(h.DropdownMenuPanel,{palette:"light",children:[p?null:(0,S.tZ)(h.DropdownMenuGroup,{label:"Businesses",children:l.map(function(e){return(0,S.tZ)(h.DropdownMenuItemRadio,{checked:null!=u&&!!u.name&&u.name===e.name,secondaryText:"ABN ".concat(e.abn),onClick:function(){f(e),o("/app/dashboard")},children:e.name},e.name)})}),(0,S.BX)(h.DropdownMenuGroup,{label:"My account",children:[(0,S.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:d.AvatarIcon,children:"Profile"}),(0,S.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:d.EmailIcon,children:"Messages"}),(0,S.tZ)(h.DropdownMenuItemLink,{href:"/not-found",icon:d.SettingsIcon,children:"Account settings"})]}),(0,S.tZ)(h.DropdownMenuDivider,{}),(0,S.tZ)(h.DropdownMenuItemLink,{href:"/sign-out",icon:d.ExitIcon,children:"Sign out"})]})}})}function E(){var e=(0,i.useRouter)().pathname,t=(0,m.w)().selectedBusiness,n=(0,o.useMemo)(function(){return[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:d.ChevronsLeftIcon,href:"/app"}]},{options:{disableGroupPadding:!0},items:[{label:(0,S.BX)(o.Fragment,{children:[(0,S.tZ)(f.Text,{fontWeight:"bold",fontSize:"xs",children:null==t?void 0:t.name}),(0,S.BX)(f.Text,{color:"muted",fontSize:"xs",children:["ABN: ",null==t?void 0:t.abn]})]})}]},[{label:"Dashboard",href:"/app/dashboard",icon:d.HomeIcon},{label:"Licences and permits",href:"/app/licences-and-permits",icon:B.a},{label:"Staff access",href:"/not-found",icon:B.S}],[{label:"Messages",href:"/app/messages",icon:d.EmailIcon},{label:"Account settings",href:"/not-found",icon:d.SettingsIcon},{label:"Help",href:"/not-found",icon:d.HelpIcon}],[{label:"Sign out",href:"/sign-out",icon:d.ExitIcon}]]},[null==t?void 0:t.abn,null==t?void 0:t.name]);return(0,S.tZ)(s.AppLayoutSidebar,{items:n,activePath:e})}},52948:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(27378),o=n(94303),i=n(50456),a=n(68944),c=n(79706),l=n(56273),d=n(74578),s=n(7787),u=n(40670),f=n(87800);function p(){return(0,f.BX)(r.Fragment,{children:[(0,f.tZ)(u.$,{title:"Page not found"}),(0,f.tZ)(s.I,{children:(0,f.tZ)(d.PageContent,{children:(0,f.BX)(i.Stack,{gap:1.5,maxWidth:l.tokens.maxWidth.bodyText,children:[(0,f.tZ)(o.H1,{children:"Oops! This page does not exist."}),(0,f.tZ)(a.Text,{as:"p",fontSize:"md",children:"You have reached a page which is not part of the testing process."}),(0,f.BX)(a.Text,{as:"p",children:["Please go back to the"," ",(0,f.tZ)(c.TextLink,{href:"/",children:"yourGov home page"}),"."]})]})})})]})}}}]);