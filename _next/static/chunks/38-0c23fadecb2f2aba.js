"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{16886:function(n,e,r){var t=r(51502).___internalHook("/","../../../..","../..");n.exports=r(63748),t()},46728:function(n,e,r){var t=r(51502).___internalHook("/","../../../..","../..");n.exports=r(87548),t()},63748:function(n,e,r){r.d(e,{Card:function(){return p},CardFooter:function(){return v},CardHeader:function(){return y},CardInner:function(){return x},CardLink:function(){return h}});var t=r(90849),o=r(10043),i=r(27378),c=r(7686),a=r(2810),d=r(87800);function u(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(e){(0,t.Z)(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}var s="data-agds-card-link",h=function(n){var e=(0,a.yF)();return(0,d.tZ)(e,l(l({css:[c.Wf,"display:flex;justify-content:space-between;&:focus{outline:none;}","","",""]},(0,t.Z)({},s,"")),n))};function b(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)}return r}function f(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach(function(e){(0,t.Z)(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}var g={shadow:"0 2px 4px rgba(0, 0, 0, 0.3)",hoverShadow:"0 1px 1px rgba(0, 0, 0, 0.3)"},p=function(n){var e,r=n.as,u=n.background,l=n.children,h=n.className,b=n.shadow,p=n.clickable,v=(0,i.useRef)();return(0,d.tZ)(c.Box,{as:r,onMouseDown:function(){v.current=new Date().getTime()},onMouseUp:function(n){if(p&&v.current){var e=n.currentTarget.querySelector("[".concat(s,"]"));e instanceof HTMLAnchorElement&&e!==n.target&&new Date().getTime()-v.current<200&&e.click()}},display:"block",border:!0,borderColor:"muted",background:void 0===u?"body":u,rounded:!0,className:h,css:(0,o.iv)(f(f({position:"relative",overflow:"hidden"},p&&(e={cursor:"pointer"},(0,t.Z)(e,"&:hover [".concat(s,"]"),c.Wf["&:hover"]),(0,t.Z)(e,"&:focus-within",a.packs.outline),e)),b&&{boxShadow:g.shadow,"&:hover":p?{boxShadow:g.hoverShadow}:void 0}),"",""),children:l})},v=function(n){var e=n.background,r=n.children;return(0,d.tZ)(c.Box,{borderTop:!0,borderColor:"muted",background:e,padding:1.5,children:r})},y=function(n){var e=n.background,r=n.children;return(0,d.tZ)(c.Box,{padding:1.5,borderBottom:!0,borderColor:"muted",background:e,children:r})},x=function(n){var e=n.children;return(0,d.tZ)(c.Box,{padding:1.5,children:e})}},87548:function(n,e,r){r.d(e,{HeroBanner:function(){return p},HeroBannerSubtitle:function(){return m},HeroBannerTitle:function(){return k},HeroBannerTitleContainer:function(){return x},HeroCategoryBanner:function(){return C},HeroCategoryBannerSubtitle:function(){return T},HeroCategoryBannerTitle:function(){return H},HeroSubcategoryBanner:function(){return E},HeroSubcategoryBannerTitle:function(){return z}});var t=r(7686),o=r(59370),i=r(10043),c=r(2810),a={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"},d=r(87800),u=function(n){var e=n.children,r=a[n.background];return(0,d.tZ)(t.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c.boxPalette[r]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:e})},l={name:"1739oy8",styles:"z-index:1"},s=function(n){var e=n.children,r=n.image,i=n.background;return(0,d.tZ)(o.Content,{children:(0,d.BX)(t.Flex,{children:[(0,d.tZ)(t.Stack,{gap:2,width:["100%","100%",r?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:l,children:e}),r?(0,d.tZ)(u,{background:i,children:r}):null]})})},h={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},b=function(n){var e=n.children;return(0,d.tZ)(t.Box,{display:{xs:"block",md:"none"},css:h,children:e})},f={name:"vabva8",styles:"position:relative;overflow:hidden"},g=function(n){var e=n.children,r=n.background;return(0,d.tZ)(t.Box,{as:"section",background:r,css:f,children:e})},p=function(n){var e=n.image,r=n.background,t=void 0===r?"bodyAlt":r,o=n.children;return(0,d.BX)(g,{background:t,children:[e?(0,d.tZ)(b,{children:e}):null,(0,d.tZ)(s,{background:t,image:e,children:o})]})},v=r(434),y=r(93555),x=function(n){var e=n.children;return(0,d.tZ)(t.Stack,{gap:1.5,children:e})},k=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxxl",children:e})},m=function(n){var e=n.children;return(0,d.tZ)(y.Text,{as:"p",fontSize:"md",maxWidth:c.tokens.maxWidth.bodyText,children:e})},w=function(n){var e=n.children,r=a[n.background];return(0,d.tZ)(t.Box,{display:["none","none","block"],width:"40%",css:(0,i.iv)({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(c.boxPalette[r]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:e})},Z={name:"1739oy8",styles:"z-index:1"},O=function(n){var e=n.children,r=n.image,i=n.background;return(0,d.tZ)(o.Content,{children:(0,d.BX)(t.Flex,{children:[(0,d.tZ)(t.Stack,{gap:1.5,width:["100%","100%",r?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:Z,children:e}),r?(0,d.tZ)(w,{background:i,children:r}):null]})})},B={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},j=function(n){var e=n.children;return(0,d.tZ)(t.Box,{display:{xs:"block",md:"none"},css:B,children:e})},S={name:"vabva8",styles:"position:relative;overflow:hidden"},P=function(n){var e=n.children,r=n.background;return(0,d.tZ)(t.Box,{as:"section",background:r,css:S,children:e})},C=function(n){var e=n.children,r=n.image,t=n.background,o=void 0===t?"bodyAlt":t;return(0,d.BX)(P,{background:o,children:[r?(0,d.tZ)(j,{children:r}):null,(0,d.tZ)(O,{background:o,image:r,children:e})]})},H=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxl",children:e})},T=function(n){var e=n.children;return(0,d.tZ)(y.Text,{as:"p",fontSize:"md",maxWidth:c.tokens.maxWidth.bodyText,children:e})},D=function(n){var e=n.children,r=n.background;return(0,d.tZ)(t.Box,{as:"section",background:r,children:e})},_=function(n){var e=n.children;return(0,d.tZ)(o.Content,{children:(0,d.tZ)(t.Stack,{gap:1.5,paddingTop:{xs:2,md:3},paddingBottom:{xs:3,md:3},children:e})})},E=function(n){var e=n.children,r=n.background;return(0,d.tZ)(D,{background:void 0===r?"bodyAlt":r,children:(0,d.tZ)(_,{children:e})})},z=function(n){var e=n.children;return(0,d.tZ)(v.Heading,{type:"h1",fontSize:"xxl",children:e})}}}]);