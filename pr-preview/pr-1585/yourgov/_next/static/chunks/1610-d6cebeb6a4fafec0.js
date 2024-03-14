"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1610],{41380:function(o,t,n){var e=n(51502).___internalHook("/","../../../..","../..");o.exports=n(3995),e()},25931:function(o,t,n){n.d(t,{ie:function(){return T},wh:function(){return P},vE:function(){return y}});var e=n(90849),a=n(10043),r=n(55732),i=n(11246),c=n(57135),d=n.n(c),l=n(27378),p=n(39998),s=n(56273),g=n(53169),m=n(51036),u=n(76128),b=n(50456),f=n(40631),h=n(23914),Z={hover:"--collapsing-side-bar-hover"},y={hover:"var(".concat(Z.hover,")")},v={body:"shade",bodyAlt:"shadeAlt"},k=n(87800);function S(o,t){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})),n.push.apply(n,e)}return n}function x(o){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach(function(t){(0,e.Z)(o,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(n,t))})}return o}function T(o){var t,n,c=o.as,m=o["aria-label"],u=o.background,b=o.children,f=o.collapseButtonLabel,Z=o.title,y=(t=(0,h.Me)(),{buttonId:"collapsing-side-bar-".concat(t,"-button"),bodyId:"collapsing-side-bar-".concat(t,"-body")}),v=y.bodyId,S=y.buttonId,T=(0,l.useRef)(null),j=(0,s.useToggleState)(!1,!0),B=(0,i.Z)(j,2),P=B[0],_=B[1],X=(0,s.usePrefersReducedMotion)(),C=(0,p.useSpring)({from:{display:"none",height:0},to:(n=(0,r.Z)(d().mark(function o(t){var n;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!P){o.next=3;break}return o.next=3,t({display:"block",overflow:"hidden"});case 3:return o.next=5,t({overflow:"hidden",height:P?null===(n=T.current)||void 0===n?void 0:n.offsetHeight:0,immediate:X});case 5:return o.next=7,t(P?{height:"auto",overflow:"initial"}:{display:"none",overflow:"initial"});case 7:case"end":return o.stop()}},o)})),function(o){return n.apply(this,arguments)})}),W=((0,s.useWindowSize)().windowWidth||0)<=s.tokens.breakpoint.lg-1;return(0,k.BX)(O,{as:void 0===c?"div":c,background:void 0===u?"body":u,ariaLabel:m,children:[Z,(0,k.tZ)(w,{isOpen:P,onClick:_,ariaControls:v,id:S,children:f}),(0,k.tZ)(p.animated.div,x(x({id:v},W&&{role:"region","aria-labelledby":S}),{},{style:C,css:(0,a.iv)((0,e.Z)({},s.tokens.mediaQuery.min.md,{overflow:"unset",display:"block !important",height:"auto !important"}),"",""),children:(0,k.tZ)(g.Box,{ref:T,children:b})}))]})}var O=function(o){var t=o.as,n=o.ariaLabel,a=o.background,r=o.children,i=v[a];return(0,k.tZ)(b.Stack,{as:t,"aria-label":n,background:a,gap:{xs:0,md:1},css:(0,s.mq)((0,e.Z)({},Z.hover,(0,s.mapResponsiveProp)(i,function(o){return g.backgroundColorMap[o]}))),children:r})},w=function(o){var t=o.ariaControls,n=o.children,r=o.id,i=o.isOpen,c=o.onClick;return(0,k.BX)(u.Flex,{as:m.BaseButton,"aria-controls":t,"aria-expanded":i,onClick:c,id:r,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",paddingY:1,paddingX:{xs:.75,md:0},justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,borderBottom:!0,css:(0,a.iv)((0,e.Z)({"&:hover":{background:y.hover}},s.tokens.mediaQuery.min.md,{display:"none"}),"",""),children:[n,(0,k.tZ)(f.ChevronDownIcon,{weight:"bold",css:(0,a.iv)({transition:"transform ".concat(s.tokens.transition.duration,"ms ").concat(s.tokens.transition.timingFunction),transform:"rotate(".concat(i?180:0,"deg)")},"","")})]})},j=n(84007),B=n(89205);function P(o){var t=o.title,n=o.subtitle;return(0,k.BX)(j.Flex,{display:{xs:"none",md:"flex"},flexDirection:"column",gap:.5,children:[(0,k.tZ)(B.Text,{as:"h2",color:"text",fontSize:"md",fontWeight:"bold",lineHeight:"heading",children:t}),n&&(0,k.tZ)(B.Text,{color:"muted",fontSize:"xs",children:n})]})}},3995:function(o,t,n){n.d(t,{Prose:function(){return s}});var e,a=n(90849),r=n(10043),i=n(23914),c=n(84815),d=n(87800);function l(o,t){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})),n.push.apply(n,e)}return n}function p(o){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,a.Z)(o,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(n,t))})}return o}var s=(0,i.yV)(function(o,t){return(0,d.tZ)(c.Box,p({ref:t,css:u},o))}),g="unset-agds-prose-styles",m=":not([class]):not(.".concat(g," *)"),u=(0,r.iv)((e={},(0,a.Z)(e,"&:not(.".concat(g," *)"),p({margin:0,textSizeAdjust:"100%",color:i._X.foregroundText,fontFamily:i.tokens.font.body},(0,i.vY)("sm","default"))),(0,a.Z)(e,"&:empty:not(.".concat(g,")"),{display:"none"}),(0,a.Z)(e,"* + .".concat("agds-prose-block",":not(.").concat(g," *)"),{marginTop:(0,i.mapSpacing)(2)}),(0,a.Z)(e,"a".concat(m),[c.Wf,c.j4]),(0,a.Z)(e,'[tabindex="0"]:focus-visible, :target',i.lB.outline),(0,a.Z)(e,"& ::selection",{color:i._X.backgroundBody,backgroundColor:i._X.foregroundAction}),(0,a.Z)(e,"img".concat(m),{maxWidth:"100%"}),(0,a.Z)(e,"p".concat(m),{maxWidth:i.tokens.maxWidth.bodyText,margin:0}),(0,a.Z)(e,"* + p".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"ul".concat(m,",ol").concat(m,",dl").concat(m,",pre"),{margin:0}),(0,a.Z)(e,"* + ul".concat(m,", * + ol").concat(m,", * + dl").concat(m,", * + pre"),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"ul".concat(m,", ol").concat(m),(0,a.Z)({"> li":(0,a.Z)({marginTop:(0,i.mapSpacing)(.5)},"> ul".concat(m,", > ol").concat(m),{marginTop:(0,i.mapSpacing)(.5)})},"> ul".concat(m),{listStyleType:"disc"})),(0,a.Z)(e,"dl".concat(m),{"> dd":{marginTop:(0,i.mapSpacing)(.5),paddingLeft:(0,i.mapSpacing)(.5),marginLeft:0,borderLeftWidth:i.tokens.borderWidth.sm,borderLeftStyle:"solid",borderLeftColor:i._X.border},"> dt":{marginTop:(0,i.mapSpacing)(1.5),fontWeight:"bold","&:first-of-type":{marginTop:0}}}),(0,a.Z)(e,"* + table:not(.".concat(g," *)"),{marginTop:(0,i.mapSpacing)(1.5)," + table":{marginTop:(0,i.mapSpacing)(3)}}),(0,a.Z)(e,"h1".concat(m),p(p({},(0,i.vY)("xxl","heading")),{},{marginTop:0,marginBottom:0})),(0,a.Z)(e,"h2".concat(m),p(p({},(0,i.vY)("xl","heading")),{},{marginTop:0,marginBottom:0})),(0,a.Z)(e,"h3".concat(m),p(p({},(0,i.vY)("lg","heading")),{},{marginTop:0,marginBottom:0})),(0,a.Z)(e,"h4".concat(m),p(p({},(0,i.vY)("md","heading")),{},{marginTop:0,marginBottom:0})),(0,a.Z)(e,"h5".concat(m),p(p({},(0,i.vY)("sm","heading")),{},{marginTop:0,marginBottom:0})),(0,a.Z)(e,"h6".concat(m),p(p({},(0,i.vY)("xs","heading")),{},{marginTop:0,marginBottom:0})),(0,a.Z)(e,"* + h1".concat(m),{marginTop:(0,i.mapSpacing)(3)}),(0,a.Z)(e,"* + h2".concat(m),{marginTop:(0,i.mapSpacing)(3)}),(0,a.Z)(e,"* + h3".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"* + h4".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"* + h5".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"* + h6".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"h1 + h2".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"h2 + h3".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"em".concat(m,", i").concat(m),{fontStyle:"italic"}),(0,a.Z)(e,"strong".concat(m,", b").concat(m),{fontWeight:"bold"}),(0,a.Z)(e,"small:".concat(m),p({},(0,i.vY)("xs","default"))),(0,a.Z)(e,"s".concat(m,", del").concat(m),{textDecoration:"line-through"}),(0,a.Z)(e,"ins".concat(m),{textDecorationLine:"underline",textDecorationStyle:"dashed",textDecorationSkipInk:"auto"}),(0,a.Z)(e,"dfn".concat(m),{fontStyle:"normal"}),(0,a.Z)(e,"abbr,abbr[title]".concat(m),{borderBottom:"none",textDecoration:"underline dotted"}),(0,a.Z)(e,"abbr[title]".concat(m),{cursor:"help"}),(0,a.Z)(e,"a abbr".concat(m),{paddingBottom:1}),(0,a.Z)(e,"var".concat(m),{padding:"0 1px",fontStyle:"italic",fontFamily:"serif","sup,sub":{fontFamily:i.tokens.font.body,fontStyle:"normal",padding:"0 1px"}}),(0,a.Z)(e,"sub".concat(m,", sup").concat(m),p(p({},(0,i.vY)("xs","nospace")),{},{position:"relative",verticalAlign:"baseline"})),(0,a.Z)(e,"sub".concat(m),{bottom:"-0.25em"}),(0,a.Z)(e,"sup".concat(m),{top:"-0.5em"}),(0,a.Z)(e,"figure".concat(m),{margin:0}),(0,a.Z)(e,"* + figure".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"figcaption".concat(m),{marginTop:(0,i.mapSpacing)(1),color:i._X.foregroundMuted}),(0,a.Z)(e,"blockquote".concat(m),{margin:0,padding:(0,i.mapSpacing)(2),borderLeftWidth:i.tokens.borderWidth.xl,borderLeftStyle:"solid",borderColor:i._X.border,background:i._X.backgroundShade}),(0,a.Z)(e,"* + blockquote".concat(m),{marginTop:(0,i.mapSpacing)(1.5)}),(0,a.Z)(e,"pre code".concat(m),{display:"block",tabSize:4,padding:(0,i.mapSpacing)(1)}),(0,a.Z)(e,"kbd".concat(m,", code").concat(m,", samp").concat(m),p(p({},(0,i.vY)("xs","default")),{},{padding:(0,i.mapSpacing)(.25),fontFamily:i.tokens.font.monospace,display:"inline-block",borderRadius:i.tokens.borderRadius,backgroundColor:i._X.backgroundShade,color:i._X.foregroundText})),(0,a.Z)(e,"pre".concat(m),{fontFamily:i.tokens.font.monospace,borderRadius:i.tokens.borderRadius,backgroundColor:i._X.backgroundShade,color:i._X.foregroundText,overflowX:"auto"}),(0,a.Z)(e,"hr".concat(m),{boxSizing:"content-box",height:0,overflow:"visible",border:"none",borderTopWidth:i.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.borderMuted,marginBottom:(0,i.mapSpacing)(3)}),(0,a.Z)(e,"* + hr".concat(m),{marginTop:(0,i.mapSpacing)(3)}),(0,a.Z)(e,"@media print",{"a[href]:after":{content:'" (" attr(href) ")" !important'},"abbr[title]:after":{content:'" (" attr(title) ")"'},"pre, blockquote, tr, img":{pageBreakInside:"avoid"},"h2, h3 ":{pageBreakAfter:"avoid"}}),e),"","","","")}}]);