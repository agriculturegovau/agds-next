"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5717],{2951:function(e,n,i){var o=i(51502).___internalHook("/","../../../..","../..");e.exports=i(49718),o()},38163:function(e,n,i){var o=i(51502).___internalHook("/","../../../..","../..");e.exports=i(75707),o()},88614:function(e,n,i){function o(e,n){var i=e||n;if(r(e,n),!i)throw Error("onClose prop is required");return i}function t(e,n){return r(e,n),e||n}function r(e,n){e&&n?console.warn("Do not use onDismiss in combination with onClose. Use onClose by itself. onDismiss is deprecated. Only onClose will be called."):n&&console.warn("onDismiss is deprecated. Use onClose instead.")}i.d(n,{Nl:function(){return t},Y1:function(){return o}})},75707:function(e,n,i){i.d(n,{PageAlert:function(){return h},PageAlertTitle:function(){return f}});var o=i(90849),t=i(10043),r=i(27378),s=i(84007),a=i(23914),l=i(67812),d=i(88614),u=i(89205),c=i(87800),f=function(e){var n=e.as,i=e.children,t=e.hasDismissButton,r=e.hasCloseButton;return void 0!==t&&console.warn("hasDismissButton is deprecated. Use hasCloseButton instead."),(0,c.tZ)(u.Text,{as:void 0===n?"h3":n,fontSize:"lg",lineHeight:"heading",fontWeight:"bold",css:(0,a.mq)((0,o.Z)({marginRight:r||t?"2.5rem":void 0},a.tokens.mediaQuery.min.sm,{marginRight:"0"})),children:i})},g=i(11475),m=function(e){var n,i=e.onClick;return(0,c.tZ)(g.Button,{onClick:i,iconAfter:l.Tw,variant:"text","aria-label":"Close",css:(0,a.mq)((n={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},(0,o.Z)(n,a.tokens.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),(0,o.Z)(n,"& > span:first-of-type",(0,o.Z)({display:"none"},a.tokens.mediaQuery.min.sm,{display:"block"})),n)),children:"Close"})},h=(0,r.forwardRef)(function(e,n){var i=e.id,l=e.focusOnMount,u=e.focusOnUpdate,g=e.role,h=e.children,p=e.onClose,v=e.onDismiss,k=e.title,y=e.tone,C=e.tabIndex,_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.disabled,i=e.focusOnUpdate,o=e.forwardedRef,t=(0,r.useRef)(null),s=o||t;return(0,r.useEffect)(function(){var e,i;!n&&"string"!=typeof s&&"current"in s&&(null==s||null===(e=s.current)||void 0===e||null===(i=e.focus)||void 0===i||i.call(e))},[n,void 0===i?[]:i]),s}({disabled:!l&&!u,forwardedRef:n,focusOnUpdate:u}),x=(0,d.Nl)(p,v),w=b[y],Z=w.fg,R=w.bg,X=w.icon;return(0,c.BX)(s.Flex,{css:(0,t.iv)({backgroundColor:R,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:i,ref:_,role:g,rounded:!0,tabIndex:C||(l||u?-1:void 0),children:[(0,c.tZ)(s.Flex,{padding:.5,alignItems:"center",css:(0,t.iv)({borderTopLeftRadius:a.tokens.borderRadius,borderBottomLeftRadius:a.tokens.borderRadius,backgroundColor:Z,color:a._X.backgroundBody},"",""),children:X}),(0,c.BX)(s.Flex,{padding:1.5,gap:1,flexGrow:1,alignItems:"flex-start",css:(0,t.iv)((0,o.Z)({marginRight:x&&!k?"3rem":void 0},a.tokens.mediaQuery.min.sm,{marginRight:"0"}),"",""),children:[(0,c.BX)(s.Flex,{flexDirection:"column",flexGrow:1,gap:1,alignItems:"flex-start",children:[k?(0,r.isValidElement)(k)?k:(0,c.tZ)(f,{hasCloseButton:!!x,children:k}):null,h]}),x?(0,c.tZ)(m,{onClick:x}):null]})]})}),b={success:{fg:a._X.systemSuccess,bg:a._X.systemSuccessMuted,icon:(0,c.tZ)(l.qE,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:a._X.systemError,bg:a._X.systemErrorMuted,icon:(0,c.tZ)(l.z$,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:a._X.systemInfo,bg:a._X.systemInfoMuted,icon:(0,c.tZ)(l.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:a._X.systemWarning,bg:a._X.systemWarningMuted,icon:(0,c.tZ)(l.av,{"aria-hidden":"false","aria-label":"Warning"})}}}}]);