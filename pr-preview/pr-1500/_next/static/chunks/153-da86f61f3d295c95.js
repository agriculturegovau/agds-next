"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{5537:function(e,n,t){t.d(n,{e:function(){return EditPage}});var o=t(8160),r=t(7800);function EditPage(e){var n=e.path,t=void 0===n?"":n;return(0,r.tZ)(o.TextLink,{href:"https://github.com/".concat("steelthreads","/").concat("agds-next","/edit/").concat("main").concat(t),children:"Edit this page"})}},7784:function(e,n,t){var o=t(1502).___internalHook("/","../../../..","../..");e.exports=t(1233),o()},2852:function(e,n,t){var o=t(1502).___internalHook("/","../../../..","../..");e.exports=t(4046),o()},632:function(e,n,t){var o=t(1502).___internalHook("/","../../../..","../..");e.exports=t(9272),o()},1028:function(e,n,t){t.d(n,{ie:function(){return CollapsingSideBar},wh:function(){return CollapsingSideBarTitle},vE:function(){return y}});var o=t(849),r=t(43),i=t(5732),a=t(1246),c=t(4707),l=t.n(c),d=t(7378),s=t(9998),u=t(4855),p=t(647),h=t(7784),f=t(4348),b=t(8717),g=t(632),v=t(294),m={hover:"--collapsing-side-bar-hover"},y={hover:"var(".concat(m.hover,")")},k={body:"shade",bodyAlt:"shadeAlt"},w=t(7800);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){(0,o.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function CollapsingSideBar(e){var n,t,c=e.as,h=e["aria-label"],f=e.background,b=e.children,g=e.collapseButtonLabel,m=e.title,y=(n=(0,v.useId)(),{buttonId:"collapsing-side-bar-".concat(n,"-button"),bodyId:"collapsing-side-bar-".concat(n,"-body")}),k=y.bodyId,x=y.buttonId,C=(0,d.useRef)(null),S=(0,u.useToggleState)(!1,!0),O=(0,a.Z)(S,2),B=O[0],_=O[1],j=(0,u.usePrefersReducedMotion)(),Z=(0,s.useSpring)({from:{display:"none",height:0},to:(t=(0,i.Z)(l().mark(function _callee(e){var n;return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!B){t.next=3;break}return t.next=3,e({display:"block",overflow:"hidden"});case 3:return t.next=5,e({overflow:"hidden",height:B?null===(n=C.current)||void 0===n?void 0:n.offsetHeight:0,immediate:j});case 5:return t.next=7,e(B?{height:"auto",overflow:"initial"}:{display:"none",overflow:"initial"});case 7:case"end":return t.stop()}},_callee)})),function(e){return t.apply(this,arguments)})}),P=((0,u.useWindowSize)().windowWidth||0)<=u.tokens.breakpoint.lg-1;return(0,w.BX)(CollapsingSideBarContainer,{as:void 0===c?"div":c,background:void 0===f?"body":f,ariaLabel:h,children:[m,(0,w.tZ)(SideBarCollapseButton,{isOpen:B,onClick:_,ariaControls:k,id:x,children:g}),(0,w.tZ)(s.animated.div,_objectSpread(_objectSpread({id:k},P&&{role:"region","aria-labelledby":x}),{},{style:Z,css:(0,r.iv)((0,o.Z)({},u.tokens.mediaQuery.min.md,{overflow:"unset",display:"block !important",height:"auto !important"}),"",""),children:(0,w.tZ)(p.Box,{ref:C,children:b})}))]})}var CollapsingSideBarContainer=function(e){var n=e.as,t=e.ariaLabel,r=e.background,i=e.children,a=k[r];return(0,w.tZ)(b.Stack,{as:n,"aria-label":t,background:r,gap:{xs:0,md:1},css:(0,u.mq)((0,o.Z)({},m.hover,(0,u.mapResponsiveProp)(a,function(e){return p.backgroundColorMap[e]}))),children:i})},SideBarCollapseButton=function(e){var n=e.ariaControls,t=e.children,i=e.id,a=e.isOpen,c=e.onClick;return(0,w.BX)(f.Flex,{as:h.BaseButton,"aria-controls":n,"aria-expanded":a,onClick:c,id:i,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",paddingY:1,paddingX:{xs:.75,md:0},justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,borderBottom:!0,css:(0,r.iv)((0,o.Z)({"&:hover":{background:y.hover}},u.tokens.mediaQuery.min.md,{display:"none"}),"",""),children:[t,(0,w.tZ)(g.ChevronDownIcon,{weight:"bold",css:(0,r.iv)({transition:"transform ".concat(u.tokens.transition.duration,"ms ").concat(u.tokens.transition.timingFunction),transform:"rotate(".concat(a?180:0,"deg)")},"","")})]})},x=t(6573),C=t(8979);function CollapsingSideBarTitle(e){var n=e.title,t=e.subtitle;return(0,w.BX)(x.Flex,{display:{xs:"none",md:"flex"},flexDirection:"column",gap:.5,children:[(0,w.tZ)(C.Text,{as:"h2",color:"text",fontSize:"md",fontWeight:"bold",lineHeight:"heading",children:n}),t&&(0,w.tZ)(C.Text,{color:"muted",fontSize:"xs",children:t})]})}}}]);