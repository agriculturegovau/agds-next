(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{28007:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(27378);function o(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var i=o()?r.useLayoutEffect:r.useEffect,c=!1,u=0,a=function(){return++u};function l(e){var t=e||(c?a():null),n=(0,r.useState)(t),o=n[0],u=n[1];return i((function(){null===o&&u(a())}),[]),(0,r.useEffect)((function(){!1===c&&(c=!0)}),[]),null!=o?String(o):void 0}},80165:function(e,t,n){"use strict";n.d(t,{V:function(){return u}});var r=n(4060),o=n(66219),i=n(13170),c=n(87800),u=function(e){var t=e.pretext,n=e.title,u=e.introduction,a=e.callToAction;return(0,c.BX)(r.Kq,{gap:1.5,children:[(0,c.BX)(r.Kq,{children:[t?(0,c.tZ)(i.x,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(o.H1,{children:n})]}),u?(0,c.tZ)(i.x,{as:"p",fontSize:"md",color:"muted",children:u}):null,a]})}},66715:function(e,t,n){"use strict";n.d(t,{A:function(){return a},F:function(){return u}});var r=n(80997),o=n(92779),i=n(80165),c=n(87800),u=[{href:"/tokens/color",label:"Color"},{href:"/tokens/breakpoints",label:"Breakpoints"},{href:"/tokens/border-radius",label:"Border Radius"},{href:"/tokens/border-width",label:"Border Widths"},{href:"/tokens/max-width",label:"Max Width"},{href:"/tokens/spacing",label:"Spacing"},{href:"/tokens/typography",label:"Typography"}],a=function(e){var t=e.editPath,n=e.children,a=e.title,l=e.description;return(0,c.tZ)(r.L,{children:(0,c.BX)(o.X,{sideNav:{title:"Tokens",titleLink:"/tokens",items:u},editPath:t,children:[(0,c.tZ)(i.V,{title:a,introduction:l}),n]})})}},95584:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(4060),o=n(27186),i=n(77956),c=n(66219),u=n(29639),a=n(66715),l=n(87800);function s(){return(0,l.BX)(l.HY,{children:[(0,l.tZ)(u.$,{title:"Tokens"}),(0,l.tZ)(a.A,{title:"Design Tokens",description:"Our Design Tokens are the foundation of our design system. They are the building blocks of our components and are used to create a consistent look and feel across all of our products.",editPath:"/docs/pages/tokens/index.tsx",children:(0,l.tZ)(i.o,{as:"ul",cols:{xs:1,sm:2},children:a.F.map((function(e){return(0,l.tZ)(o.Zb,{as:"li",shadow:!0,clickable:!0,children:(0,l.tZ)(o.MB,{children:(0,l.tZ)(r.Kq,{gap:1,children:(0,l.tZ)(c.H3,{children:(0,l.tZ)(o.YS,{href:e.href,children:e.label})})})})},e.href)}))})})]})}},27186:function(e,t,n){"use strict";n.d(t,{Zb:function(){return v},eW:function(){return w},Ol:function(){return y},MB:function(){return O},YS:function(){return f}});var r=n(90849),o=n(10043),i=n(27378),c=n(4060),u=n(11504),a=n(87800);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d="data-agds-card-link",f=function(e){var t=(0,u.yF)();return(0,a.tZ)(t,s(s({css:[c.Wf,"display:flex;justify-content:space-between;&:focus{outline:none;}","","",""]},(0,r.Z)({},d,!0)),e))};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b="0 2px 4px rgba(0, 0, 0, 0.3)",g="0 1px 1px rgba(0, 0, 0, 0.3)",v=function(e){var t,n=e.as,l=e.background,s=void 0===l?"body":l,f=e.children,h=e.className,v=e.shadow,w=e.clickable,y=(0,i.useRef)();return(0,a.tZ)(c.xu,{as:n,onMouseDown:function(){y.current=(new Date).getTime()},onMouseUp:function(e){if(w&&y.current){var t=e.currentTarget.querySelector("[".concat(d,"]"));t&&(new Date).getTime()-y.current<200&&t.click()}},display:"block",border:!0,borderColor:"muted",background:s,rounded:!0,className:h,css:(0,o.iv)(p(p({position:"relative",overflow:"hidden"},w&&(t={cursor:"pointer"},(0,r.Z)(t,"&:hover [".concat(d,"]"),c.Wf["&:hover"]),(0,r.Z)(t,"&:focus-within",u.lB.outline),t)),v&&{boxShadow:b,"&:hover":w?{boxShadow:g}:void 0}),"",""),children:f})},w=function(e){var t=e.background,n=e.children;return(0,a.tZ)(c.xu,{borderTop:!0,borderColor:"muted",background:t,padding:1.5,children:n})},y=function(e){var t=e.background,n=e.children;return(0,a.tZ)(c.xu,{padding:1.5,borderBottom:!0,borderColor:"muted",background:t,children:n})},O=function(e){var t=e.children;return(0,a.tZ)(c.xu,{padding:1.5,children:t})}},5729:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokens",function(){return n(95584)}])},55732:function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(l){return void n(l)}u.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function u(e){r(c,o,i,u,a,"next",e)}function a(e){r(c,o,i,u,a,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[306,236,779,774,888,179],(function(){return t=5729,e(e.s=t);var t}));var t=e.O();_N_E=t}]);