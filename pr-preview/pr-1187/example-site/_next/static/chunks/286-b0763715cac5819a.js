"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{6886:function(n,e,t){var r=t(1502).___internalHook("/","../../../..","../..");n.exports=t(3748),r()},6710:function(n,e,t){var r=t(1502).___internalHook("/","../../../..","../..");n.exports=t(2590),r()},6728:function(n,e,t){var r=t(1502).___internalHook("/","../../../..","../..");n.exports=t(7548),r()},3748:function(n,e,t){t.d(e,{Card:function(){return s},CardInner:function(){return h},CardLink:function(){return p}});var r=t(849),o=t(43),i=t(4241),c=t(5885),a=t(7800);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var u={shadow:"0 2px 4px rgba(0, 0, 0, 0.3)",hoverShadow:"0 1px 1px rgba(0, 0, 0, 0.3)"},s=function(n){var e=n.as,t=n.background,r=n.children,d=n.className,s=n.shadow,h=n.clickable;return(0,a.tZ)(i.Box,{as:e,display:"block",border:!0,borderColor:"muted",background:void 0===t?"body":t,rounded:!0,className:d,css:(0,o.iv)(l(l({position:"relative",overflow:"hidden"},h&&{"&:focus-within":c.lB.outline}),s&&{boxShadow:u.shadow,"&:hover":h?{boxShadow:u.hoverShadow}:void 0}),"",""),children:r})},h=function(n){var e=n.children;return(0,a.tZ)(i.Box,{padding:1.5,children:e})};function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}var p=function(n){var e=(0,c.yF)();return(0,a.tZ)(e,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({css:[i.Wf,'display:flex;justify-content:space-between;&:focus{outline:none;}&:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;}',"","",""]},n))}},7548:function(n,e,t){t.d(e,{HeroBanner:function(){return g},HeroBannerSubtitle:function(){return m},HeroBannerTitle:function(){return k},HeroBannerTitleContainer:function(){return x},HeroCategoryBanner:function(){return _},HeroCategoryBannerTitle:function(){return H},HeroSubcategoryBanner:function(){return D},HeroSubcategoryBannerTitle:function(){return E}});var r=t(4241),o=t(9370),i=t(43),c=t(5885),a={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"},d=t(7800),l=function(n){var e=n.children,t=a[n.background];return(0,d.tZ)(r.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c._X[t]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:e})},u={name:"1739oy8",styles:"z-index:1"},s=function(n){var e=n.children,t=n.image,i=n.background;return(0,d.tZ)(o.V,{children:(0,d.BX)(r.Flex,{children:[(0,d.tZ)(r.Stack,{gap:2,width:["100%","100%",t?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:u,children:e}),t?(0,d.tZ)(l,{background:i,children:t}):null]})})},h={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},b=function(n){var e=n.children;return(0,d.tZ)(r.Box,{display:{xs:"block",md:"none"},css:h,children:e})},p={name:"vabva8",styles:"position:relative;overflow:hidden"},f=function(n){var e=n.children,t=n.background;return(0,d.tZ)(r.Box,{as:"section",background:t,css:p,children:e})},g=function(n){var e=n.image,t=n.background,r=void 0===t?"bodyAlt":t,o=n.children;return(0,d.BX)(f,{background:r,children:[e?(0,d.tZ)(b,{children:e}):null,(0,d.tZ)(s,{background:r,image:e,children:o})]})},v=t(434),y=t(3555),x=function(n){var e=n.children;return(0,d.tZ)(r.Stack,{gap:1.5,children:e})},k=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxxl",children:e})},m=function(n){var e=n.children;return(0,d.tZ)(y.Text,{as:"p",fontSize:"md",maxWidth:c.tokens.maxWidth.bodyText,children:e})},w=function(n){var e=n.children,t=a[n.background];return(0,d.tZ)(r.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c._X[t]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:e})},O={name:"1739oy8",styles:"z-index:1"},Z=function(n){var e=n.children,t=n.image,i=n.background;return(0,d.tZ)(o.V,{children:(0,d.BX)(r.Flex,{children:[(0,d.tZ)(r.Stack,{gap:1.5,width:["100%","100%",t?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:O,children:e}),t?(0,d.tZ)(w,{background:i,children:t}):null]})})},j={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},B=function(n){var e=n.children;return(0,d.tZ)(r.Box,{display:{xs:"block",md:"none"},css:j,children:e})},S={name:"vabva8",styles:"position:relative;overflow:hidden"},P=function(n){var e=n.children,t=n.background;return(0,d.tZ)(r.Box,{as:"section",background:t,css:S,children:e})},_=function(n){var e=n.children,t=n.image,r=n.background,o=void 0===r?"bodyAlt":r;return(0,d.BX)(P,{background:o,children:[t?(0,d.tZ)(B,{children:t}):null,(0,d.tZ)(Z,{background:o,image:t,children:e})]})},H=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxl",children:e})},C=function(n){var e=n.children,t=n.background;return(0,d.tZ)(r.Box,{as:"section",background:t,children:e})},T=function(n){var e=n.children;return(0,d.tZ)(o.V,{children:(0,d.tZ)(r.Stack,{gap:1.5,paddingTop:{xs:2,md:3},paddingBottom:{xs:3,md:3},children:e})})},D=function(n){var e=n.children,t=n.background;return(0,d.tZ)(C,{background:void 0===t?"bodyAlt":t,children:(0,d.tZ)(T,{children:e})})},E=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxl",children:e})}}}]);