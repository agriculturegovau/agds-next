"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{13538:function(e,t,n){n.d(t,{G_:function(){return p},LR:function(){return l},eJ:function(){return h},zE:function(){return d},zF:function(){return f}});var r=n(10043),i=n(97865),o=n(4060),c=n(45715),a=n(16054),u=n(13170),s=n(87800),l=function(){var e=c.TV.breakpoint;return(0,s.tZ)("ul",{children:Object.entries(e).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o="".concat(n," - ").concat(r,"px");return(0,s.tZ)("li",{children:o},n)}))})},d=function(){var e=c.TV.borderWidth;return(0,s.tZ)(o.kC,{gap:.5,className:a.jB,children:Object.entries(e).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],c="".concat(n," (").concat(r,"px)");return(0,s.tZ)(o.xu,{padding:.5,border:!0,borderWidth:n,children:(0,s.tZ)(u.x,{children:c})},n)}))})},p=function(){return(0,s.tZ)(o.Kq,{gap:.5,className:a.jB,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map((function(e){var t="".concat(e," (").concat(16*e,"px)");return(0,s.BX)(o.kC,{gap:.25,children:[(0,s.tZ)(o.xu,{css:(0,r.iv)({backgroundColor:c._X.systemInfoMuted,width:16*e},"","")}),(0,s.tZ)(u.x,{children:t})]},e)}))})},f=function(e){var t=e.tokens;return(0,s.tZ)(o.Kq,{as:"ul",gap:.5,className:a.jB,children:Object.entries(t).map((function(e,t){var n=(0,i.Z)(e,2),a=n[0],l=n[1];if("string"!==typeof l)return null;var d="".concat(a," (").concat(l,")");return(0,s.tZ)(o.kC,{as:"li",gap:.25,children:(0,s.tZ)(o.xu,{padding:.5,css:(0,r.iv)({backgroundColor:c._X.systemInfoMuted,width:"100%",maxWidth:l},"",""),children:(0,s.tZ)(u.x,{children:d})})},t)}))})},h=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,s.BX)(o.kC,{gap:1,className:a.jB,children:[(0,s.BX)(o.kC,{flexDirection:"column",gap:1,children:[(0,s.tZ)(u.x,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map((function(e){return(0,s.tZ)(o.xu,{background:"shade",children:(0,s.tZ)(u.x,{fontSize:e,children:e.toUpperCase()})},e)}))]}),(0,s.BX)(o.kC,{flexDirection:"column",gap:1,children:[(0,s.tZ)(u.x,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map((function(e){return(0,s.tZ)(o.xu,{background:"shade",children:(0,s.tZ)(u.x,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)}))]}),(0,s.BX)(o.kC,{flexDirection:"column",gap:1,children:[(0,s.tZ)(u.x,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map((function(e){return(0,s.tZ)(o.xu,{background:"shade",children:(0,s.tZ)(u.x,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)}))]})]})}},66715:function(e,t,n){n.d(t,{A:function(){return u}});var r=n(80690),i=n(80997),o=n(92779),c=n(80165),a=n(87800),u=function(e){var t=e.breadcrumbs,n=e.editPath,u=e.children,s=e.title,l=e.description;return(0,a.tZ)(i.L,{children:(0,a.BX)(o.X,{sideNav:{title:"Tokens",titleLink:"/tokens",items:r.Gw},editPath:n,breadcrumbs:t,children:[(0,a.tZ)(c.V,{title:s,introduction:l}),u]})})}},80690:function(e,t,n){n.d(t,{Gw:function(){return c},Qu:function(){return a},Sg:function(){return o}});var r=n(90849);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements or containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},c=Object.values(o).map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({href:"/tokens/".concat(e.slug)},e)}));function a(e){return[{label:"Home",href:"/"},{label:"Tokens",href:"/tokens"},{label:e.label}]}},55732:function(e,t,n){function r(e,t,n,r,i,o,c){try{var a=e[o](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var c=e.apply(t,n);function a(e){r(c,i,o,a,u,"next",e)}function u(e){r(c,i,o,a,u,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return i}})}}]);