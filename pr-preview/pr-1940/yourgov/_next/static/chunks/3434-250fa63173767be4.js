"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3434],{3096:function(o,r,e){var n=e(51502).___internalHook("/","../../../..","../..");o.exports=e(78010),n()},7150:function(o,r,e){e.d(r,{StatusBadge:function(){return p}});var n=e(90849),i=e(10043),c=e(48050),t=e(19631),a=e(8464),l=e(48499),s=e(92288),d=e(87800);function u(o,r){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable})),e.push.apply(e,n)}return e}function b(o){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?u(Object(e),!0).forEach(function(r){(0,n.Z)(o,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))})}return o}var g={name:"1bmnxg7",styles:"white-space:nowrap"},f={name:"1bmnxg7",styles:"white-space:nowrap"},p=function(o){var r=o.appearance,e=o.label,n=o.tone,c=void 0===n?"info":n,a=o.weight;if(y.includes(c)){console.warn("The \"tone='".concat(c,'\'" and "weight" props are deprecated. Use the tones which include emphasis and the "appearance" prop instead.'));var l=v[c],u=l.icon,p=l.tone,w="regular"===(void 0===a?"regular":a)?m:{};return(0,d.BX)(t.Flex,b(b({alignItems:"center",borderColor:p,css:(0,i.iv)({borderRadius:h,"& svg":{flexShrink:0,width:C}},"",""),display:"inline-flex",gap:.5},w),{},{children:[(0,d.tZ)(u,{}),(0,d.tZ)(s.Text,{as:"span",css:g,fontSize:"sm",lineHeight:"nospace",children:e})]}))}var O=L[c],S=O.borderColor,k=O.icon,x=O.iconColor,j=O.iconLabel,Z="regular"===(void 0===r?"regular":r)?m:{};return(0,d.BX)(t.Flex,b(b({alignItems:"center",borderColor:S,css:(0,i.iv)({borderRadius:h,"& svg":{flexShrink:0,width:C}},"",""),display:"inline-flex",gap:.5},Z),{},{children:[(0,d.tZ)(k,{"aria-hidden":"false","aria-label":"Status: ".concat(j,"."),color:x}),(0,d.tZ)(s.Text,{as:"span",css:f,fontSize:"sm",lineHeight:"nospace",children:e})]}))},h=(0,a.mapSpacing)(1),w=(0,a.mapSpacing)(2),C="1.375rem",m={background:"body",border:!0,borderWidth:"sm",height:w,paddingX:1},L={cannotStartLow:{borderColor:"border",icon:l.Zs,iconColor:"muted",iconLabel:"cannot start"},errorHigh:{borderColor:"error",icon:l.AlertFilledIcon,iconColor:"error",iconLabel:"error"},errorLow:{borderColor:"border",icon:l.go,iconColor:"muted",iconLabel:"error"},errorMedium:{borderColor:"error",icon:l.zM,iconColor:"error",iconLabel:"error"},infoHigh:{borderColor:"info",icon:l.F3,iconColor:"info",iconLabel:"information"},infoLow:{borderColor:"border",icon:l.sz,iconColor:"muted",iconLabel:"information"},infoMedium:{borderColor:"info",icon:l.sz,iconColor:"info",iconLabel:"information"},inProgressLow:{borderColor:"border",icon:l.NB,iconColor:"muted",iconLabel:"in progress"},notStartedLow:{borderColor:"border",icon:l.Q2,iconColor:"muted",iconLabel:"not started"},pausedLow:{borderColor:"border",icon:l.GA,iconColor:"muted",iconLabel:"paused"},successHigh:{borderColor:"success",icon:l.SuccessFilledIcon,iconColor:"success",iconLabel:"success"},successLow:{borderColor:"border",icon:l.tm,iconColor:"muted",iconLabel:"success"},successMedium:{borderColor:"success",icon:l.tm,iconColor:"success",iconLabel:"success"},unknownLow:{borderColor:"border",icon:l.HelpIcon,iconColor:"muted",iconLabel:"help"},warningHigh:{borderColor:"warning",icon:l.WarningFilledIcon,iconColor:"warning",iconLabel:"warning"},warningLow:{borderColor:"border",icon:l.hL,iconColor:"muted",iconLabel:"warning"},warningMedium:{borderColor:"warning",icon:l.aN,iconColor:"warning",iconLabel:"warning"}},v={neutral:{icon:function(){return(0,d.tZ)(c.Box,{css:(0,i.iv)({width:8,height:8,borderRadius:4,backgroundColor:a._X.foregroundMuted},"",""),highContrastOutline:!0})},tone:"border"},success:{icon:function(){return(0,d.tZ)(l.tm,{"aria-hidden":"false","aria-label":"Success",color:"success"})},tone:"success"},error:{icon:function(){return(0,d.tZ)(l.zM,{"aria-hidden":"false","aria-label":"Error",color:"error"})},tone:"error"},info:{icon:function(){return(0,d.tZ)(l.sz,{"aria-hidden":"false","aria-label":"Information",color:"info"})},tone:"info"},warning:{icon:function(){return(0,d.tZ)(l.aN,{"aria-hidden":"false","aria-label":"Warning",color:"warning"})},tone:"warning"}},y=Object.keys(v)},72742:function(o,r,e){var n=e(51502).___internalHook("/","../../../..","../..");o.exports=e(7150),n()},41228:function(o,r,e){e.d(r,{H:function(){return n}});function n(){try{return crypto.randomUUID()}catch(o){return String(1e17*Math.random())}}}}]);