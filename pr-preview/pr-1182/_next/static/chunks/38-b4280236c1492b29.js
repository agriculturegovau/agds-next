"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{6886:function(n,e,r){var t=r(1502).___internalHook("/","../../../..","../..");n.exports=r(3748),t()},6728:function(n,e,r){var t=r(1502).___internalHook("/","../../../..","../..");n.exports=r(7548),t()},3748:function(n,e,r){r.d(e,{Card:function(){return s},CardFooter:function(){return b},CardHeader:function(){return h},CardInner:function(){return p},CardLink:function(){return g}});var t=r(849),o=r(43),i=r(4241),c=r(5885),a=r(7800);function d(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)}return r}function u(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(e){(0,t.Z)(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}var l={shadow:"0 2px 4px rgba(0, 0, 0, 0.3)",hoverShadow:"0 1px 1px rgba(0, 0, 0, 0.3)"},s=function(n){var e=n.as,r=n.background,t=n.children,d=n.className,s=n.shadow,b=n.clickable;return(0,a.tZ)(i.Box,{as:e,display:"block",border:!0,borderColor:"muted",background:void 0===r?"body":r,rounded:!0,className:d,css:(0,o.iv)(u(u({position:"relative",overflow:"hidden"},b&&{"&:focus-within":c.packs.outline}),s&&{boxShadow:l.shadow,"&:hover":b?{boxShadow:l.hoverShadow}:void 0}),"",""),children:t})},b=function(n){var e=n.background,r=n.children;return(0,a.tZ)(i.Box,{borderTop:!0,borderColor:"muted",background:e,padding:1.5,children:r})},h=function(n){var e=n.background,r=n.children;return(0,a.tZ)(i.Box,{padding:1.5,borderBottom:!0,borderColor:"muted",background:e,children:r})},p=function(n){var e=n.children;return(0,a.tZ)(i.Box,{padding:1.5,children:e})};function f(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)}return r}var g=function(n){var e=(0,c.yF)();return(0,a.tZ)(e,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach(function(e){(0,t.Z)(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}({css:[i.Wf,'display:flex;justify-content:space-between;&:focus{outline:none;}&:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;}',"","",""]},n))}},7548:function(n,e,r){r.d(e,{HeroBanner:function(){return g},HeroBannerSubtitle:function(){return m},HeroBannerTitle:function(){return k},HeroBannerTitleContainer:function(){return x},HeroCategoryBanner:function(){return C},HeroCategoryBannerSubtitle:function(){return T},HeroCategoryBannerTitle:function(){return H},HeroSubcategoryBanner:function(){return E},HeroSubcategoryBannerTitle:function(){return z}});var t=r(4241),o=r(9370),i=r(43),c=r(5885),a={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"},d=r(7800),u=function(n){var e=n.children,r=a[n.background];return(0,d.tZ)(t.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c.boxPalette[r]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:e})},l={name:"1739oy8",styles:"z-index:1"},s=function(n){var e=n.children,r=n.image,i=n.background;return(0,d.tZ)(o.Content,{children:(0,d.BX)(t.Flex,{children:[(0,d.tZ)(t.Stack,{gap:2,width:["100%","100%",r?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:l,children:e}),r?(0,d.tZ)(u,{background:i,children:r}):null]})})},b={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},h=function(n){var e=n.children;return(0,d.tZ)(t.Box,{display:{xs:"block",md:"none"},css:b,children:e})},p={name:"vabva8",styles:"position:relative;overflow:hidden"},f=function(n){var e=n.children,r=n.background;return(0,d.tZ)(t.Box,{as:"section",background:r,css:p,children:e})},g=function(n){var e=n.image,r=n.background,t=void 0===r?"bodyAlt":r,o=n.children;return(0,d.BX)(f,{background:t,children:[e?(0,d.tZ)(h,{children:e}):null,(0,d.tZ)(s,{background:t,image:e,children:o})]})},v=r(434),y=r(3555),x=function(n){var e=n.children;return(0,d.tZ)(t.Stack,{gap:1.5,children:e})},k=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxxl",children:e})},m=function(n){var e=n.children;return(0,d.tZ)(y.Text,{as:"p",fontSize:"md",maxWidth:c.tokens.maxWidth.bodyText,children:e})},w=function(n){var e=n.children,r=a[n.background];return(0,d.tZ)(t.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c.boxPalette[r]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:e})},O={name:"1739oy8",styles:"z-index:1"},Z=function(n){var e=n.children,r=n.image,i=n.background;return(0,d.tZ)(o.Content,{children:(0,d.BX)(t.Flex,{children:[(0,d.tZ)(t.Stack,{gap:1.5,width:["100%","100%",r?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:O,children:e}),r?(0,d.tZ)(w,{background:i,children:r}):null]})})},B={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},j=function(n){var e=n.children;return(0,d.tZ)(t.Box,{display:{xs:"block",md:"none"},css:B,children:e})},S={name:"vabva8",styles:"position:relative;overflow:hidden"},P=function(n){var e=n.children,r=n.background;return(0,d.tZ)(t.Box,{as:"section",background:r,css:S,children:e})},C=function(n){var e=n.children,r=n.image,t=n.background,o=void 0===t?"bodyAlt":t;return(0,d.BX)(P,{background:o,children:[r?(0,d.tZ)(j,{children:r}):null,(0,d.tZ)(Z,{background:o,image:r,children:e})]})},H=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxl",children:e})},T=function(n){var e=n.children;return(0,d.tZ)(y.Text,{as:"p",fontSize:"md",maxWidth:c.tokens.maxWidth.bodyText,children:e})},_=function(n){var e=n.children,r=n.background;return(0,d.tZ)(t.Box,{as:"section",background:r,children:e})},D=function(n){var e=n.children;return(0,d.tZ)(o.Content,{children:(0,d.tZ)(t.Stack,{gap:1.5,paddingTop:{xs:2,md:3},paddingBottom:{xs:3,md:3},children:e})})},E=function(n){var e=n.children,r=n.background;return(0,d.tZ)(_,{background:void 0===r?"bodyAlt":r,children:(0,d.tZ)(D,{children:e})})},z=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxl",children:e})}}}]);