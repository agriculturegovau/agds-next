(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{28007:function(n,t,e){"use strict";e.d(t,{M:function(){return l}});var r=e(27378);function i(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var o=i()?r.useLayoutEffect:r.useEffect,u=!1,c=0,d=function(){return++c};function l(n){var t=n||(u?d():null),e=(0,r.useState)(t),i=e[0],c=e[1];return o((function(){null===i&&c(d())}),[]),(0,r.useEffect)((function(){!1===u&&(u=!0)}),[]),null!=i?String(i):void 0}},80165:function(n,t,e){"use strict";e.d(t,{V:function(){return c}});var r=e(4060),i=e(66219),o=e(13170),u=e(87800),c=function(n){var t=n.pretext,e=n.title,c=n.introduction,d=n.callToAction;return(0,u.BX)(r.Kq,{gap:1.5,children:[(0,u.BX)(r.Kq,{children:[t?(0,u.tZ)(o.x,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,u.tZ)(i.H1,{children:e})]}),c?(0,u.tZ)(o.x,{as:"p",fontSize:"md",color:"muted",children:c}):null,d]})}},66715:function(n,t,e){"use strict";e.d(t,{A:function(){return d},F:function(){return c}});var r=e(80997),i=e(92779),o=e(80165),u=e(87800),c=[{href:"/tokens/color",label:"Color"},{href:"/tokens/breakpoints",label:"Breakpoints"},{href:"/tokens/border-radius",label:"Border Radius"},{href:"/tokens/border-width",label:"Border Widths"},{href:"/tokens/max-width",label:"Max Width"},{href:"/tokens/spacing",label:"Spacing"},{href:"/tokens/typography",label:"Typography"}],d=function(n){var t=n.editPath,e=n.children,d=n.title,l=n.description;return(0,u.tZ)(r.L,{children:(0,u.BX)(i.X,{sideNav:{title:"Tokens",titleLink:"/tokens",items:c},editPath:t,children:[(0,u.tZ)(o.V,{title:d,introduction:l}),e]})})}},40527:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(16054),i=e(29639),o=e(66715),u=e(87800);function c(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(i.$,{title:"Border radius tokens"}),(0,u.tZ)(o.A,{title:"Border radius tokens",description:"Apply rounded corners to components",editPath:"/docs/pages/tokens/border-radius.tsx",children:(0,u.tZ)(r.Mr,{children:(0,u.BX)("p",{children:["We have one border radius token, which is 4px. It is available by setting ",(0,u.tZ)("code",{children:"rounded"})," on the ",(0,u.tZ)("code",{children:"Box"})," component."]})})})]})}},29453:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tokens/border-radius",function(){return e(40527)}])},55732:function(n,t,e){"use strict";function r(n,t,e,r,i,o,u){try{var c=n[o](u),d=c.value}catch(l){return void e(l)}c.done?t(d):Promise.resolve(d).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var u=n.apply(t,e);function c(n){r(u,i,o,c,d,"next",n)}function d(n){r(u,i,o,c,d,"throw",n)}c(void 0)}))}}e.d(t,{Z:function(){return i}})}},function(n){n.O(0,[306,236,779,54,774,888,179],(function(){return t=29453,n(n.s=t);var t}));var t=n.O();_N_E=t}]);