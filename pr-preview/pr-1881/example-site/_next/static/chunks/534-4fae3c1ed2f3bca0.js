"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{2951:function(e,n,t){var r=t(51502).___internalHook("/","../../../..","../..");e.exports=t(49718),r()},94303:function(e,n,t){var r=t(51502).___internalHook("/","../../../..","../..");e.exports=t(99164),r()},38163:function(e,n,t){var r=t(51502).___internalHook("/","../../../..","../..");e.exports=t(69078),r()},53633:function(e,n,t){t.d(n,{K:function(){return o}});var r=t(27378);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.focusOnMount,t=e.focusOnUpdate,o=e.forwardedRef,i=(0,r.useRef)(null),s=o||i;return(0,r.useEffect)(function(){var e,r;!t&&!n||!("current"in s)||Array.isArray(t)&&0===t.filter(Boolean).length||null==s||null===(e=s.current)||void 0===e||null===(r=e.focus)||void 0===r||r.call(e)},[t]),s}},88614:function(e,n,t){function r(e,n){var t=e||n;if(i(e,n),!t)throw Error("onClose prop is required");return t}function o(e,n){return i(e,n),e||n}function i(e,n){e&&n?console.warn("Do not use onDismiss in combination with onClose. Use onClose by itself. onDismiss is deprecated. Only onClose will be called."):n&&console.warn("onDismiss is deprecated. Use onClose instead.")}t.d(n,{Nl:function(){return o},Y1:function(){return r}})},99164:function(e,n,t){t.d(n,{H1:function(){return h},H2:function(){return g},H3:function(){return m},Heading:function(){return d}});var r=t(17043),o=t(90089),i=t(23914),s=t(84815),a=t(87800),l=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var f={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},d=(0,i.yV)(function(e,n){var t=e.as,r=e.type,i=void 0===r?"h2":r,u=e.color,d=e.fontSize,h=e.fontFamily,g=e.fontWeight,m=e.lineHeight,p=(0,o.Z)(e,l),y=null!=d?d:f[i];return(0,a.tZ)(s.Box,c({as:null!=t?t:i,ref:n,color:void 0===u?"text":u,fontSize:y,fontFamily:void 0===h?"body":h,fontWeight:void 0===g?"bold":g,lineHeight:void 0===m?"heading":m},p))}),h=(0,i.yV)(function(e,n){return(0,a.tZ)(d,c({ref:n,as:"h1",type:"h1"},e))}),g=(0,i.yV)(function(e,n){return(0,a.tZ)(d,c({ref:n,as:"h2",type:"h2"},e))}),m=(0,i.yV)(function(e,n){return(0,a.tZ)(d,c({ref:n,as:"h3",type:"h3"},e))});(0,i.yV)(function(e,n){return(0,a.tZ)(d,c({ref:n,as:"h4",type:"h4"},e))}),(0,i.yV)(function(e,n){return(0,a.tZ)(d,c({ref:n,as:"h5",type:"h5"},e))}),(0,i.yV)(function(e,n){return(0,a.tZ)(d,c({ref:n,as:"h6",type:"h6"},e))})},69078:function(e,n,t){t.d(n,{PageAlert:function(){return p}});var r=t(17043),o=t(10043),i=t(27378),s=t(84007),a=t(23914),l=t(65534),u=t(88614),c=t(53633),f=t(89205),d=t(87800),h=function(e){var n=e.as,t=e.children,o=e.hasDismissButton,i=e.hasCloseButton;return void 0!==o&&console.warn("hasDismissButton is deprecated. Use hasCloseButton instead."),(0,d.tZ)(f.Text,{as:void 0===n?"h2":n,fontSize:"lg",lineHeight:"heading",fontWeight:"bold",css:(0,a.mq)((0,r.Z)({marginRight:i||o?"2.5rem":void 0},a.tokens.mediaQuery.min.sm,{marginRight:"0"})),children:t})},g=t(11475),m=function(e){var n,t=e.onClick;return(0,d.tZ)(g.Button,{onClick:t,iconAfter:l.Tw,variant:"text","aria-label":"Close",css:(0,a.mq)((n={position:"absolute",top:"1.5rem",right:"1.5rem",flexShrink:0},(0,r.Z)(n,a.tokens.mediaQuery.min.sm,{position:"relative",top:"unset",right:"unset"}),(0,r.Z)(n,"& > span:first-of-type",(0,r.Z)({display:"none"},a.tokens.mediaQuery.min.sm,{display:"block"})),n)),children:"Close"})},p=(0,i.forwardRef)(function(e,n){var t=e.id,l=e.focusOnMount,f=e.focusOnUpdate,g=e.role,p=e.children,b=e.onClose,v=e.onDismiss,O=e.title,x=e.tone,Z=e.tabIndex,k=(0,c.K)({focusOnMount:l,focusOnUpdate:f,forwardedRef:n}),_=(0,u.Nl)(b,v),w=y[x],C=w.fg,B=w.bg,R=w.icon;return(0,d.BX)(s.Flex,{css:(0,o.iv)({backgroundColor:B,position:"relative"},"",""),focusRingFor:"all",highContrastOutline:!0,id:t,ref:k,role:g,rounded:!0,tabIndex:null!=Z?Z:l||f?-1:void 0,children:[(0,d.tZ)(s.Flex,{padding:.5,alignItems:"center",css:(0,o.iv)({borderTopLeftRadius:a.tokens.borderRadius,borderBottomLeftRadius:a.tokens.borderRadius,backgroundColor:C,color:a._X.backgroundBody},"",""),children:R}),(0,d.BX)(s.Flex,{padding:1.5,gap:1,flexGrow:1,alignItems:"flex-start",css:(0,o.iv)((0,r.Z)({marginRight:_&&!O?"3rem":void 0},a.tokens.mediaQuery.min.sm,{marginRight:"0"}),"",""),children:[(0,d.BX)(s.Flex,{flexDirection:"column",flexGrow:1,gap:1,alignItems:"flex-start",children:[O?(0,i.isValidElement)(O)?O:(0,d.tZ)(h,{hasCloseButton:!!_,children:O}):null,p]}),_?(0,d.tZ)(m,{onClick:_}):null]})]})}),y={success:{fg:a._X.systemSuccess,bg:a._X.systemSuccessMuted,icon:(0,d.tZ)(l.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:a._X.systemError,bg:a._X.systemErrorMuted,icon:(0,d.tZ)(l.AlertFilledIcon,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:a._X.systemInfo,bg:a._X.systemInfoMuted,icon:(0,d.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:a._X.systemWarning,bg:a._X.systemWarningMuted,icon:(0,d.tZ)(l.WarningFilledIcon,{"aria-hidden":"false","aria-label":"Warning"})}}}}]);