"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5875],{85875:function(n,t,e){e.d(t,{Modal:function(){return B}});var o,i,a=e(27378),r=e(10043),s=e(31542),c=e(23914),d=e(88614),l=e(11752),u=e(87800),m=(0,a.forwardRef)(function(n,t){var e=n.children;return(0,u.tZ)("div",{ref:t,css:(0,r.iv)({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:c._X.overlay,zIndex:c.tokens.zIndex.overlay,overflowY:"auto",animation:"".concat(f," ").concat(c.tokens.transition.duration,"ms ").concat(c.tokens.transition.timingFunction)},"",""),children:e})}),f=(0,r.F4)(o||(o=(0,l.Z)(["\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n"]))),h=e(90849),g=e(48542),p=e(84815),v=e(7226),k=e(65534),b=e(11475),y=e(89205),w=function(n){var t=n.children,e=n.id;return(0,u.tZ)(y.Text,{as:"h2",fontSize:"lg",fontWeight:"bold",lineHeight:"heading",id:e,"data-autofocus":!0,focusRingFor:"keyboard",tabIndex:-1,children:t})},x=function(){var n=(0,c.Me)();return{titleId:"modal-".concat(n,"-title")}},Z={name:"1duj7gx",styles:"align-self:flex-end"},C={name:"xdvdnl",styles:"margin-top:auto"},F=function(n){var t=n.actions,e=n.children,o=n.elementToFocusOnClose,i=n.onClose,a=n.onDismiss,s=n.title,l=(0,d.Y1)(i,a),m=x().titleId;return(0,u.tZ)(g.ZP,{returnFocus:!o||function(){return window.setTimeout(function(){return o.focus()},0),!1},children:(0,u.BX)(v.Stack,{"aria-labelledby":m,"aria-modal":"true",background:"body",css:(0,r.iv)((0,h.Z)({boxShadow:c.tokens.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:"".concat(T," ").concat(c.tokens.transition.duration,"ms ").concat(c.tokens.transition.timingFunction),"@supports (min-height: 100dvh)":{minHeight:"100dvh"}},c.tokens.mediaQuery.min.sm,{borderRadius:c.tokens.borderRadius,margin:"".concat((0,c.mapSpacing)(6)," auto ").concat((0,c.mapSpacing)(1)),minHeight:"auto"}),"",""),gap:1,highContrastOutline:!0,maxWidth:"45rem",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[(0,u.tZ)(b.Button,{variant:"text","aria-label":"Close modal",onClick:l,iconAfter:k.Tw,css:Z,children:"Close"}),(0,u.tZ)(w,{id:m,children:s}),(0,u.tZ)(p.Box,{children:e}),t?(0,u.tZ)(p.Box,{paddingTop:1,css:C,children:t}):null]})})},T=(0,r.F4)(i||(i=(0,l.Z)(["\n  0% { transform: translateY(1rem); }\n	100% { transform: translateY(0); }\n"]))),B=function(n){var t=n.actions,e=n.children,o=n.elementToFocusOnClose,i=n.isOpen,r=void 0!==i&&i,l=n.onClose,f=n.onDismiss,h=n.title,g=(0,d.Y1)(l,f);(0,a.useEffect)(function(){var n=function(n){r&&"Escape"===n.code&&(n.preventDefault(),n.stopPropagation(),g())};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}},[g,r]);var p=(0,c.p_)(r).modalContainerRef;return r&&(0,c.Nq)()?(0,s.createPortal)((0,u.BX)(a.Fragment,{children:[(0,u.tZ)(Y,{}),(0,u.tZ)(m,{ref:p,children:(0,u.tZ)(F,{actions:t,elementToFocusOnClose:o,onClose:g,title:h,children:e})})]}),document.body):null},E={name:"1sy9iaq",styles:"body{overflow:hidden;}"},Y=function(){return(0,u.tZ)(r.xB,{styles:E})}}}]);