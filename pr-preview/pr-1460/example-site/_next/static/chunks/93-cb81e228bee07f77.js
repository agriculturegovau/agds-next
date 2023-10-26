"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{5600:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(3276),n()},4199:function(e,r,t){var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(3599),n()},3276:function(e,r,t){t.d(r,{Breadcrumbs:function(){return Breadcrumbs}});var n=t(849),i=t(89),o=t(7378),a=t(7137),c=t(43),l=t(6573),d=t(294),s=t(7800);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var BreadcrumbsContainer=function(e){var r,t=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,s.tZ)("nav",{"aria-label":i,children:(0,s.tZ)(l.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,c.iv)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(r={},(0,n.Z)(r,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(r,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),r)),"",""),children:t})})},u=t(2231),b=t(9272),p={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,s.tZ)(b.XC,{color:"border",size:"sm",css:p})};function BreadcrumbsItem_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var f=(0,o.forwardRef)(function(e,r){var t=e.children,i=e.href;return(0,s.BX)(l.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,s.tZ)(BreadcrumbsDivider,{}),i?(0,s.tZ)(u.TextLink,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?BreadcrumbsItem_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):BreadcrumbsItem_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({ref:r},e)):t]})}),g=t(1233);function BreadcrumbsToggle(e){var r=e.onClick;return(0,s.tZ)(f,{children:(0,s.tZ)(l.Flex,{as:g.BaseButton,onClick:r,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var m=["label"],h=["label"],y=["label"];function Breadcrumbs_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Breadcrumbs_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Breadcrumbs_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Breadcrumbs_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Breadcrumbs=function(e){var r=e["aria-label"],t=e.links,n=(0,o.useRef)(null),c=t[0],l=c.label,d=(0,i.Z)(c,m),u=t[t.length-1],b=u.label,p=(0,i.Z)(u,h),g=t.filter(function(e,r,t){return!(0===r||r===t.length-1)}),O=(0,o.useState)(!g.length),v=O[0],j=O[1];return(0,s.BX)(BreadcrumbsContainer,{"aria-label":void 0===r?"breadcrumb":r,isExpandable:!0,isExpanded:v,children:[(0,s.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:n},d),{},{children:l})),!v&&g.length?(0,s.tZ)(BreadcrumbsToggle,{onClick:function(){var e;j(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,g.map(function(e,r){var t=e.label,n=(0,i.Z)(e,y);return(0,s.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},n),{},{children:t}),r)}),(0,s.BX)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},p),{},{children:[b,(0,s.tZ)(a.TX,{children:" (current page)"})]}))]})}},3599:function(e,r,t){t.d(r,{Callout:function(){return Callout}});var n=t(43),i=t(6573),o=t(7601),a=t(8979),c=t(632),l=t(7800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},CalloutTitle=function(e){var r=e.as,t=e.children,n=e.variant;return(0,l.tZ)(a.Text,{as:void 0===r?"h2":r,fontSize:d[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:t})},Callout=function(e){var r=e.as,t=e.background,a=e.children,s=e.icon,u=e.onBodyAlt,b=e.title,p=e.tone,f=void 0===p?"neutral":p,g=e.variant,m=void 0===g?"regular":g,h=d[m],y=h.textGap,O=h.iconGap,v=h.padding,j=h.flexDirection,w=h.titlePaddingTop,x={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,l.tZ)(c.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[m].iconSize})}}[f],B=x.background,P=x.border,S=x.icon;return(0,l.BX)(i.Flex,{as:r,flexDirection:j,rounded:!0,gap:O,background:"neutral"===f&&(null!=u?u:"shadeAlt"===t)?"shadeAlt":B,borderColor:P,padding:v,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[s||S?(0,l.tZ)(i.Flex,{flexShrink:0,children:s||S}):null,(0,l.BX)(o.Stack,{gap:y,css:(0,n.iv)({paddingTop:w},"",""),children:[b?(0,l.tZ)(CalloutTitle,{variant:m,children:b}):null,a]})]})}}}]);