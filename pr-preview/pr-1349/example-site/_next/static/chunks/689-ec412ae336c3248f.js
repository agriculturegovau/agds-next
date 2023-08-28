"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{2908:function(e,t,n){var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(6590),r()},1966:function(e,t,n){var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(1017),r()},7635:function(e,t,n){var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(8049),r()},1017:function(e,t,n){n.d(t,{H1:function(){return h},H2:function(){return g},H3:function(){return m},Heading:function(){return d}});var r=n(849),i=n(89),o=n(3255),s=n(7994),a=n(7800),l=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},d=(0,o.yV)(function(e,t){var n=e.as,r=e.type,o=void 0===r?"h2":r,c=e.color,d=e.fontSize,h=e.fontFamily,g=e.fontWeight,m=e.lineHeight,y=(0,i.Z)(e,l),p=null!=d?d:f[o];return(0,a.tZ)(s.Box,u({as:null!=n?n:o,ref:t,color:void 0===c?"text":c,fontSize:p,fontFamily:void 0===h?"body":h,fontWeight:void 0===g?"bold":g,lineHeight:void 0===m?"heading":m},y))}),h=(0,o.yV)(function(e,t){return(0,a.tZ)(d,u({ref:t,as:"h1",type:"h1"},e))}),g=(0,o.yV)(function(e,t){return(0,a.tZ)(d,u({ref:t,as:"h2",type:"h2"},e))}),m=(0,o.yV)(function(e,t){return(0,a.tZ)(d,u({ref:t,as:"h3",type:"h3"},e))});(0,o.yV)(function(e,t){return(0,a.tZ)(d,u({ref:t,as:"h4",type:"h4"},e))}),(0,o.yV)(function(e,t){return(0,a.tZ)(d,u({ref:t,as:"h5",type:"h5"},e))}),(0,o.yV)(function(e,t){return(0,a.tZ)(d,u({ref:t,as:"h6",type:"h6"},e))})},8049:function(e,t,n){n.d(t,{PageAlert:function(){return g},PageAlertTitle:function(){return f}});var r=n(849),i=n(43),o=n(7378),s=n(2557),a=n(3255),l=n(8432),c=n(2474),u=n(7800),f=function(e){var t=e.as,n=e.children,i=e.hasDismissButton;return(0,u.tZ)(c.Text,{as:void 0===t?"h3":t,fontSize:"lg",lineHeight:"heading",fontWeight:"bold",css:(0,a.mq)((0,r.Z)({marginRight:i?"2.5rem":void 0},a.tokens.mediaQuery.min.sm,{marginRight:"0"})),children:n})},d=n(4630),h=function(e){var t,n=e.onClick;return(0,u.tZ)(d.Button,{onClick:n,iconAfter:l.Tw,variant:"text","aria-label":"Close",css:(0,a.mq)((t={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},(0,r.Z)(t,a.tokens.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),(0,r.Z)(t,"& > span:first-of-type",(0,r.Z)({display:"none"},a.tokens.mediaQuery.min.sm,{display:"block"})),t)),children:"Close"})},g=(0,o.forwardRef)(function(e,t){var n=e.id,l=e.role,c=e.children,d=e.onDismiss,g=e.title,y=e.tone,p=e.tabIndex,b=m[y],v=b.fg,x=b.bg,Z=b.icon;return(0,u.BX)(s.Flex,{ref:t,role:l,id:n,tabIndex:p,rounded:!0,focus:!0,highContrastOutline:!0,css:(0,i.iv)({backgroundColor:x,position:"relative"},"",""),children:[(0,u.tZ)(s.Flex,{padding:.5,alignItems:"center",css:(0,i.iv)({borderTopLeftRadius:a.tokens.borderRadius,borderBottomLeftRadius:a.tokens.borderRadius,backgroundColor:v,color:a._X.backgroundBody},"",""),children:Z}),(0,u.BX)(s.Flex,{padding:1.5,gap:1,flexGrow:1,alignItems:"flex-start",css:(0,i.iv)((0,r.Z)({marginRight:d&&!g?"3rem":void 0},a.tokens.mediaQuery.min.sm,{marginRight:"0"}),"",""),children:[(0,u.BX)(s.Flex,{flexDirection:"column",flexGrow:1,gap:1,alignItems:"flex-start",children:[g?(0,o.isValidElement)(g)?g:(0,u.tZ)(f,{hasDismissButton:!!d,children:g}):null,c]}),d?(0,u.tZ)(h,{onClick:d}):null]})]})}),m={success:{fg:a._X.systemSuccess,bg:a._X.systemSuccessMuted,icon:(0,u.tZ)(l.qE,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:a._X.systemError,bg:a._X.systemErrorMuted,icon:(0,u.tZ)(l.z$,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:a._X.systemInfo,bg:a._X.systemInfoMuted,icon:(0,u.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:a._X.systemWarning,bg:a._X.systemWarningMuted,icon:(0,u.tZ)(l.av,{"aria-hidden":"false","aria-label":"Warning"})}}}}]);