"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{28007:function(n,t,e){e.d(t,{M:function(){return l}});var r=e(27378);function i(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var o=i()?r.useLayoutEffect:r.useEffect,c=!1,u=0,a=function(){return++u};function l(n){var t=n||(c?a():null),e=(0,r.useState)(t),i=e[0],u=e[1];return o((function(){null===i&&u(a())}),[]),(0,r.useEffect)((function(){!1===c&&(c=!0)}),[]),null!=i?String(i):void 0}},80165:function(n,t,e){e.d(t,{V:function(){return u}});var r=e(4060),i=e(66219),o=e(13170),c=e(87800),u=function(n){var t=n.pretext,e=n.title,u=n.introduction,a=n.callToAction;return(0,c.BX)(r.Kq,{gap:1.5,children:[(0,c.BX)(r.Kq,{children:[t?(0,c.tZ)(o.x,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(i.H1,{children:e})]}),u?(0,c.tZ)(o.x,{as:"p",fontSize:"md",color:"muted",children:u}):null,a]})}},13538:function(n,t,e){e.d(t,{G_:function(){return h},LR:function(){return d},jx:function(){return p},zE:function(){return f},zF:function(){return s}});var r=e(10043),i=e(97865),o=e(4060),c=e(11504),u=e(16054),a=e(13170),l=e(87800),d=function(){var n=c.TV.breakpoint;return(0,l.tZ)("ul",{children:Object.entries(n).map((function(n){var t=(0,i.Z)(n,2),e=t[0],r=t[1],o="".concat(e," - ").concat(r,"px");return(0,l.tZ)("li",{children:o},e)}))})},f=function(){var n=c.TV.borderWidth;return(0,l.tZ)(o.kC,{gap:.5,className:u.jB,children:Object.entries(n).map((function(n){var t=(0,i.Z)(n,2),e=t[0],r=t[1],c="".concat(e," (").concat(r,"px)");return(0,l.tZ)(o.xu,{padding:.5,border:!0,borderWidth:e,children:(0,l.tZ)(a.x,{children:c})},e)}))})},h=function(){return(0,l.tZ)(o.Kq,{gap:.5,className:u.jB,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map((function(n){var t="".concat(n," (").concat(16*n,"px)");return(0,l.BX)(o.kC,{gap:.25,children:[(0,l.tZ)(o.xu,{css:(0,r.iv)({backgroundColor:c._X.systemInfoMuted,width:16*n},"","")}),(0,l.tZ)(a.x,{children:t})]},n)}))})},s=function(){return(0,l.tZ)(o.Kq,{gap:.5,className:u.jB,children:Object.entries(c.TV.maxWidth).map((function(n){var t=(0,i.Z)(n,2),e=t[0],u=t[1],d="".concat(e," (").concat(u,")");return(0,l.tZ)(o.kC,{gap:.25,children:(0,l.tZ)(o.xu,{padding:.5,css:(0,r.iv)({backgroundColor:c._X.systemInfoMuted,width:"100%",maxWidth:u},"",""),children:(0,l.tZ)(a.x,{children:d})})},e)}))})},p=function(){var n=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,l.BX)(o.kC,{gap:1,className:u.jB,children:[(0,l.BX)(o.kC,{flexDirection:"column",gap:1,children:[(0,l.tZ)(a.x,{fontSize:"sm",fontWeight:"bold",children:"Default"}),n.map((function(n){return(0,l.tZ)(o.xu,{background:"shade",children:(0,l.tZ)(a.x,{fontSize:n,children:n.toUpperCase()})},n)}))]}),(0,l.BX)(o.kC,{flexDirection:"column",gap:1,children:[(0,l.tZ)(a.x,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),n.map((function(n){return(0,l.tZ)(o.xu,{background:"shade",children:(0,l.tZ)(a.x,{fontSize:n,lineHeight:"heading",children:n.toUpperCase()})},n)}))]}),(0,l.BX)(o.kC,{flexDirection:"column",gap:1,children:[(0,l.tZ)(a.x,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),n.map((function(n){return(0,l.tZ)(o.xu,{background:"shade",children:(0,l.tZ)(a.x,{fontSize:n,lineHeight:"nospace",children:n.toUpperCase()})},n)}))]})]})}},66715:function(n,t,e){e.d(t,{A:function(){return a},F:function(){return u}});var r=e(80997),i=e(92779),o=e(80165),c=e(87800),u=[{href:"/tokens/color",label:"Color"},{href:"/tokens/breakpoints",label:"Breakpoints"},{href:"/tokens/border-radius",label:"Border Radius"},{href:"/tokens/border-width",label:"Border Widths"},{href:"/tokens/max-width",label:"Max Width"},{href:"/tokens/spacing",label:"Spacing"},{href:"/tokens/typography",label:"Typography"}],a=function(n){var t=n.editPath,e=n.children,a=n.title,l=n.description;return(0,c.tZ)(r.L,{children:(0,c.BX)(i.X,{sideNav:{title:"Tokens",titleLink:"/tokens",items:u},editPath:t,children:[(0,c.tZ)(o.V,{title:a,introduction:l}),e]})})}},55732:function(n,t,e){function r(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(l){return void e(l)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var c=n.apply(t,e);function u(n){r(c,i,o,u,a,"next",n)}function a(n){r(c,i,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);