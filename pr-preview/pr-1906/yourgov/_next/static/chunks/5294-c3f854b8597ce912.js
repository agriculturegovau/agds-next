"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5294],{25294:function(n,t,e){e.d(t,{Modal:function(){return E}});var o,i,a=e(27378),r=e(10043),d=e(31542),s=e(8464),c=e(13530),l=e(11752),u=e(87800),m=(0,a.forwardRef)(function(n,t){var e=n.children;return(0,u.tZ)("div",{ref:t,css:(0,r.iv)({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:s._X.overlay,zIndex:s.tokens.zIndex.overlay,overflowY:"auto",animation:"".concat(h," ").concat(s.tokens.transition.duration,"ms ").concat(s.tokens.transition.timingFunction)},"",""),children:e})}),h=(0,r.F4)(o||(o=(0,l.Z)(["\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n"]))),f=e(90849),g=e(48542),p=e(48050),v=e(96778),k=e(14441),b=e(58229),y=e(92288),x=function(n){var t=n.children,e=n.id;return(0,u.tZ)(y.Text,{as:"h2",fontSize:"lg",fontWeight:"bold",lineHeight:"heading",id:e,"data-autofocus":!0,focusRingFor:"keyboard",tabIndex:-1,children:t})},Z=function(){var n=(0,s.Me)();return{titleId:"modal-".concat(n,"-title")}},w={name:"1duj7gx",styles:"align-self:flex-end"},C={name:"xdvdnl",styles:"margin-top:auto"},F=function(n){var t=n.actions,e=n.children,o=n.onClose,i=n.onDismiss,a=n.title,d=(0,c.Y1)(o,i),l=Z().titleId;return(0,u.tZ)(g.ZP,{returnFocus:!0,children:(0,u.BX)(v.Stack,{"aria-labelledby":l,"aria-modal":"true",background:"body",css:(0,r.iv)((0,f.Z)({boxShadow:s.tokens.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(B," ").concat(s.tokens.transition.duration,"ms ").concat(s.tokens.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},s.tokens.mediaQuery.min.sm,{borderRadius:s.tokens.borderRadius,margin:"".concat((0,s.mapSpacing)(6)," auto ").concat((0,s.mapSpacing)(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:"45rem",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[(0,u.tZ)(b.Button,{variant:"text","aria-label":"Close modal",onClick:d,iconAfter:k.Tw,css:w,children:"Close"}),(0,u.tZ)(x,{id:l,children:a}),(0,u.tZ)(p.Box,{children:e}),t?(0,u.tZ)(p.Box,{paddingTop:1,css:C,children:t}):null]})})},B=(0,r.F4)(i||(i=(0,l.Z)(["\n  0% { transform: translateY(1rem); }\n	100% { transform: translateY(0); }\n"]))),E=function(n){var t=n.actions,e=n.children,o=n.isOpen,i=void 0!==o&&o,r=n.onClose,l=n.onDismiss,h=n.title,f=(0,c.Y1)(r,l);(0,a.useEffect)(function(){var n=function(n){i&&"Escape"===n.code&&(n.preventDefault(),n.stopPropagation(),f())};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}},[f,i]);var g=(0,s.p_)(i).modalContainerRef;return i&&(0,s.Nq)()?(0,d.createPortal)((0,u.BX)(a.Fragment,{children:[(0,u.tZ)(_,{}),(0,u.tZ)(m,{ref:g,children:(0,u.tZ)(F,{actions:t,onClose:f,title:h,children:e})})]}),document.body):null},Y={name:"1sy9iaq",styles:"body{overflow:hidden;}"},_=function(){return(0,u.tZ)(r.xB,{styles:Y})}}}]);