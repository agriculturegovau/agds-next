"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5542],{54389:function(e,n,t){var i=t(51502).___internalHook("/","../../../..","../..");e.exports=t(98028),i()},5651:function(e,n,t){var i=t(51502).___internalHook("/","../../../..","../..");e.exports=t(22874),i()},98028:function(e,n,t){t.d(n,{Callout:function(){return s}});var i=t(10043),o=t(84007),r=t(7226),a=t(89205),d=t(32084),l=t(87800),c={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},u=function(e){var n=e.as,t=e.children,i=e.variant;return(0,l.tZ)(a.Text,{as:void 0===n?"h2":n,fontSize:c[void 0===i?"regular":i].titleSize,fontWeight:"bold",lineHeight:"heading",children:t})},s=function(e){var n=e.as,t=e.background,a=e.children,s=e.icon,f=e.onBodyAlt,h=e.title,m=e.tone,v=void 0===m?"neutral":m,p=e.variant,g=void 0===p?"regular":p,x=c[g],b=x.textGap,k=x.iconGap,y=x.padding,Z=x.flexDirection,w=x.titlePaddingTop,C={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,l.tZ)(d.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:c[g].iconSize})}}[v],T=C.background,z=C.border,S=C.icon;return(0,l.BX)(o.Flex,{as:n,flexDirection:Z,rounded:!0,gap:k,background:"neutral"===v&&(null!=f?f:"shadeAlt"===t)?"shadeAlt":T,borderColor:z,padding:y,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[s||S?(0,l.tZ)(o.Flex,{flexShrink:0,children:s||S}):null,(0,l.BX)(r.Stack,{gap:b,css:(0,i.iv)({paddingTop:w},"",""),children:[h?(0,l.tZ)(u,{variant:g,children:h}):null,a]})]})}},22874:function(e,n,t){t.d(n,{Drawer:function(){return z}});var i=t(10043),o=t(27378),r=t(31542),a=t(39998),d=t(23914),l=t(88614),c=t(90849),u=t(48542),s=t(84815),f=t(84007),h=t(32084),m=t(11475),v=t(89205),p=t(87800),g={md:"32rem",lg:"45rem"},x=(0,a.animated)(f.Flex);function b(e){var n,t=e.actions,o=e.children,r=e.elementToFocusOnClose,a=e.onClose,s=e.onDismiss,f=e.style,v=e.title,b=e.width,y=(n=(0,d.Me)(),{titleId:"drawer-".concat(n,"-title")}).titleId,C=(0,l.Y1)(a,s);return(0,p.tZ)(u.ZP,{returnFocus:!r||function(){return window.setTimeout(function(){return r.focus()},0),!1},children:(0,p.BX)(x,{flexDirection:"column",role:"dialog","aria-modal":"true",background:"body","aria-labelledby":y,maxWidth:g[b],css:(0,i.iv)((0,c.Z)({boxShadow:d.tokens.shadow.lg,position:"fixed",inset:0,marginLeft:"auto",zIndex:d.tokens.zIndex.dialog},d.tokens.mediaQuery.max.xs,{overflowY:"auto"}),"",""),style:f,children:[(0,p.tZ)(k,{children:(0,p.tZ)(Z,{id:y,children:v})}),(0,p.tZ)(w,{children:o}),t?(0,p.tZ)(T,{children:t}):null,(0,p.tZ)(m.Button,{variant:"text",onClick:C,iconAfter:h.Tw,css:(0,d.mq)({position:"fixed",zIndex:d.tokens.zIndex.elevated,top:"1.25rem",right:(0,d.qz)({xs:(0,d.mapSpacing)(.75),md:(0,d.mapSpacing)(1.5)})}),children:"Close"})]})})}function k(e){var n=e.children;return(0,p.tZ)(s.Box,{background:"body",borderBottom:!0,paddingX:{xs:.75,md:1.5},paddingY:1,css:(0,i.iv)((0,c.Z)({position:"sticky",top:0,zIndex:d.tokens.zIndex.elevated},d.tokens.mediaQuery.min.sm,{position:"relative"}),"",""),children:n})}var y={name:"1r5gb7q",styles:"display:inline-block"};function Z(e){var n=e.children,t=e.id;return(0,p.tZ)(v.Text,{as:"h2",fontSize:"lg",fontWeight:"bold",lineHeight:"heading",id:t,"data-autofocus":!0,focusRingFor:"keyboard",tabIndex:-1,css:y,children:n})}function w(e){var n=e.children;return(0,p.tZ)(s.Box,{background:"body",flexGrow:1,paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},css:(0,i.iv)((0,c.Z)({},d.tokens.mediaQuery.min.sm,{overflowY:"auto"}),"",""),children:n})}var C={name:"xdvdnl",styles:"margin-top:auto"};function T(e){var n=e.children;return(0,p.tZ)(s.Box,{background:"body",borderTop:!0,paddingX:{xs:.75,md:1.5},paddingY:1,css:C,children:n})}var z=function(e){var n=e.actions,t=e.children,i=e.elementToFocusOnClose,c=e.isOpen,u=void 0!==c&&c,s=e.mutedOverlay,f=void 0!==s&&s,h=e.onClose,m=e.onDismiss,v=e.title,g=e.width,x=void 0===g?"md":g,k=(0,l.Y1)(h,m),y=(0,o.useRef)(0);(0,o.useEffect)(function(){y.current=window.innerWidth-document.documentElement.clientWidth},[]),(0,o.useEffect)(function(){var e=function(e){u&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),k())};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[u,k]);var Z=(0,d.p_)(u).modalContainerRef,w=(0,d.Tb)(),C=(0,a.useTransition)([u],{from:{translateX:"100%",opacity:0},enter:{translateX:"0%",opacity:1},leave:{translateX:"100%",opacity:0},config:{duration:150},immediate:w});return(0,d.Nq)()?(0,r.createPortal)((0,p.BX)(o.Fragment,{children:[u?(0,p.tZ)(X,{scrollbarWidth:y.current}):null,C(function(e,o){var r=e.translateX,a=e.opacity;return o?(0,p.BX)("div",{ref:Z,children:[(0,p.tZ)(S,{onClick:k,style:{opacity:a},mutedOverlay:f}),(0,p.tZ)(b,{actions:n,elementToFocusOnClose:i,onClose:k,style:{translateX:r},title:v,width:x,children:t})]}):null})]}),document.body):null};function S(e){var n=e.onClick,t=e.style,o=e.mutedOverlay;return(0,p.tZ)(a.animated.div,{onClick:n,css:(0,i.iv)({position:"fixed",inset:0,backgroundColor:o?d._X.overlayMuted:d._X.overlay,zIndex:d.tokens.zIndex.overlay},"",""),style:t})}function X(e){var n=e.scrollbarWidth;return(0,p.tZ)(i.xB,{styles:(0,i.iv)({html:{marginRight:n,scrollbarGutter:"auto"},body:{overflow:"hidden"}},"","")})}},51883:function(e,n,t){t.d(n,{f:function(){return d}});var i=t(27378),o=t(5651),r=t(79706),a=t(87800);function d(e){var n=e.drawerContent,t=e.linkContent,d=e.linkHref,l=(0,i.useState)(!1),c=l[0],u=l[1];return(0,a.BX)(a.HY,{children:[(0,a.tZ)(r.TextLink,{href:d,onClick:function(e){e.metaKey||(e.preventDefault(),u(!0))},children:t}),(0,a.tZ)(o.Drawer,{isOpen:c,onClose:function(){u(!1)},title:"Help",actions:(0,a.tZ)(r.TextLinkExternal,{href:d,children:"Open in new window"}),width:"lg",children:n})]})}},911:function(e,n,t){t.d(n,{O:function(){return d}});var i=t(54389),o=t(68944),r=t(79706),a=t(87800);function d(){return(0,a.tZ)(i.Callout,{title:"Need help?",children:(0,a.BX)(o.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"02 9481 1122"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email"," ",(0,a.tZ)(r.TextLink,{href:"mailto:emailaccount@yourgov.gov.au",children:"emailaccount@yourgov.gov.au"})]})})}},15748:function(e,n,t){t.d(n,{V:function(){return l}});var i=t(27378),o=t(50456),r=t(94303),a=t(68944),d=t(87800),l=function(e){var n=e.pretext,t=e.title,l=e.introduction,c=e.callToAction;return(0,d.BX)(o.Stack,{gap:1.5,children:[(0,d.BX)(o.Stack,{children:[n?(0,d.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:n}):null,(0,i.isValidElement)(t)?t:(0,d.tZ)(r.H1,{children:t})]}),l?(0,d.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,c]})}}}]);