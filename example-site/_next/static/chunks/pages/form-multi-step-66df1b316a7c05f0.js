(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{3470:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(1670),o=n(8976),i=n(7800),c=function(){return(0,i.tZ)("hr",{css:(0,r.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:o.TV.borderWidth.sm,borderTopStyle:"solid",borderColor:o._X.borderMuted,width:"100%"},"","")})}},662:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var r=n(4060),o=n(74),i=n(7956),c=n(89),a=n(849),l=n(1670),d=n(5732),u=n(7865),s=n(4707),f=n.n(s),h=n(7378),p=n(8007),b=n(9998),g=n(8976),m=n(8882),y=n(7800),v=(0,b.animated)(m.v4),O=function(e){var t=e.ariaControls,n=e.id,o=e.isOpen,i=e.items,c=e.onClick,d=(0,g.Tb)(),u=(0,b.useSpring)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(".concat(o?180:0,"deg)")},immediate:d}),s=(0,h.useMemo)((function(){var e=i.findIndex((function(e){return"doing"===e.status}));return-1===e?"Progress":"Doing step ".concat(e+1," of ").concat(i.length)}),[i]);return(0,y.BX)(r.kC,{as:"button",role:"button","aria-controls":t,"aria-expanded":o,onClick:c,id:n,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",padding:1,justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,css:(0,l.iv)((0,a.Z)({appearance:"none",background:"transparent",cursor:"pointer",textAlign:"left","&:hover":{background:g._X.backgroundShade}},g.TV.mediaQuery.min.md,{display:"none"}),"",""),children:[s,(0,y.tZ)(v,{size:"sm",weight:"bold",style:u})]})};var Z={name:"116phl6",styles:"li:last-of-type{border-bottom:none;}"},j=function(e){var t=e.children;return(0,y.tZ)(r.xu,{as:"section",borderBottom:!0,css:Z,children:t})},w=n(3170),x=["children"],P=["children"],S=["as","children","status"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.children,n=(0,c.Z)(e,x);return(0,y.tZ)(B,D(D({as:w.h},n),{},{children:t}))},X={name:"1h36v61",styles:"appearance:none;background:transparent;cursor:pointer;text-align:left;font-size:inherit"},_=function(e){var t=e.children,n=(0,c.Z)(e,P);return(0,y.tZ)(B,D(D({as:"button",css:X},n),{},{children:t}))},B=function(e){var t=e.as,n=e.children,o=e.status,i=(0,c.Z)(e,S),a="doing"===o,d=E[o];return(0,y.tZ)(r.xu,{as:"li",borderBottom:!0,children:(0,y.BX)(r.kC,D(D({as:t,alignItems:"center",gap:.75,padding:.75,color:"text",fontFamily:"body",fontWeight:a?"bold":"normal",borderLeft:!0,borderLeftWidth:"xl",width:"100%",focus:!0,css:(0,l.iv)({borderLeftColor:a?g._X.foregroundAction:"transparent",textDecoration:"none","&:hover":D(D({},g.lB.underline),{},{backgroundColor:g._X.backgroundShade})},"","")},i),{},{children:[(0,y.tZ)(d,{size:"md",color:"action"}),(0,y.BX)(r.kC,{flexDirection:"column",gap:0,children:[(0,y.tZ)(w.x,{color:"muted",fontSize:"xs",lineHeight:"nospace",children:z[o]}),n]})]}))})},E={doing:m.NB,todo:m.Q2,done:m.d0},z={doing:"Doing",todo:"To do",done:"Done"},W=(0,h.forwardRef)((function(e,t){var n=e.children;return(0,y.tZ)(r.xu,{ref:t,as:"ul",borderTop:!0,children:n})})),V=["label"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=e.items,n=I(),r=n.buttonId,o=n.bodyId,i=(0,h.useRef)(null),s=(0,g.lP)(!1,!0),p=(0,u.Z)(s,2),m=p[0],v=p[1],Z=(0,g.Tb)(),w=(0,b.useSpring)({from:{display:"none",height:0},to:function(){var e=(0,d.Z)(f().mark((function e(t){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=3;break}return e.next=3,t({display:"block"});case 3:return e.next=5,t({height:m?null===(n=i.current)||void 0===n?void 0:n.offsetHeight:0,immediate:Z});case 5:return e.next=7,t(m?{height:"auto"}:{display:"none"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return(0,y.BX)(j,{children:[(0,y.tZ)(O,{isOpen:m,onClick:v,ariaControls:o,id:r,items:t}),(0,y.tZ)(b.animated.div,{id:o,"aria-labelledby":r,style:w,css:(0,l.iv)((0,a.Z)({overflow:"hidden"},g.TV.mediaQuery.min.md,{overflow:"unset",display:"block !important",height:"auto !important"}),"",""),children:(0,y.tZ)(W,{ref:i,children:t.map((function(e,t){var n=e.label,r=(0,c.Z)(e,V);return M(r)?(0,y.tZ)(C,H(H({},r),{},{children:n}),t):(0,y.tZ)(_,H(H({},r),{},{children:n}),t)}))})})]})},I=function(){var e=(0,p.M)();return{buttonId:"progress-indicator-".concat(e,"-button"),bodyId:"progress-indicator-".concat(e,"-body")}},M=function(e){return"href"in e},N=n(2822),R=n(9639),F=n(8039),L=n(71),K=n(8301),Q=n(1594),A=n(3470),Y=n(3277),$=n(6219),G=n(6527),J=n(2413);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=K.Ry({day:K.Z_().required("Enter day"),month:K.Z_().required("Enter month"),year:K.Z_().required("Enter year")}).required(),ne=function(){var e,t,n,o,i,c,a=(0,F.cI)({resolver:(0,L.X)(te)}),l=a.register,d=a.handleSubmit,u=a.formState.errors;return(0,y.tZ)("form",{onSubmit:d((function(e){console.log(e)})),children:(0,y.BX)(J.R,{children:[(0,y.tZ)(Y.pg,{legend:(0,y.tZ)($.H1,{children:"What is your date of birth?"}),hint:(0,y.tZ)(w.x,{fontSize:"md",color:"muted",children:"We will only use this to respond to your requests"}),children:(0,y.BX)(J.R,{children:[(0,y.tZ)(G.o,ee(ee({label:"Day",inputMode:"numeric",maxWidth:"md",required:!0},l("day")),{},{invalid:Boolean(null===(e=u.day)||void 0===e?void 0:e.message),message:null===(t=u.day)||void 0===t?void 0:t.message})),(0,y.tZ)(G.o,ee(ee({label:"Month",inputMode:"numeric",maxWidth:"md",required:!0},l("month")),{},{invalid:Boolean(null===(n=u.month)||void 0===n?void 0:n.message),message:null===(o=u.month)||void 0===o?void 0:o.message})),(0,y.tZ)(G.o,ee(ee({label:"Year",inputMode:"numeric",maxWidth:"md",required:!0},l("year")),{},{invalid:Boolean(null===(i=u.year)||void 0===i?void 0:i.message),message:null===(c=u.year)||void 0===c?void 0:c.message}))]})}),(0,y.tZ)(A.i,{}),(0,y.BX)(r.kC,{gap:1,children:[(0,y.tZ)(Q.zx,{type:"submit",children:"Continue"}),(0,y.tZ)(Q.zx,{type:"button",variant:"secondary",children:"Cancel"})]})]})})},re=function(){return(0,y.BX)(y.HY,{children:[(0,y.tZ)(R.$,{title:"Multi step form example"}),(0,y.tZ)(N.L,{children:(0,y.tZ)(o.V,{children:(0,y.tZ)(r.Kq,{gap:3,children:(0,y.BX)(i.o,{children:[(0,y.tZ)(i.s,{columnSpan:{xs:12,md:3},children:(0,y.tZ)(o.e,{visible:{md:!1},children:(0,y.tZ)(T,{items:[{label:"Personal details",status:"doing"},{label:"Contact details",status:"todo"},{label:"Notification preferences",status:"todo"}]})})}),(0,y.tZ)(i.s,{columnSpan:{xs:12,md:8},columnStart:{md:5},children:(0,y.tZ)(ne,{})})]})})})})]})}},3277:function(e,t,n){"use strict";n.d(t,{pg:function(){return s}});var r=n(4060),o=n(7800);var i={name:"1bfrawq",styles:"padding:0;margin:0;border:none"},c=function(e){var t=e.children;return(0,o.tZ)("fieldset",{css:i,children:(0,o.tZ)(r.Kq,{gap:1.5,children:t})})},a=n(7378),l=n(3170),d=function(e){var t=e.children;return(0,a.isValidElement)(t)?(0,o.tZ)("legend",{children:t}):(0,o.tZ)(l.x,{as:"legend",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children:t})},u=function(e){var t=e.children;return(0,a.isValidElement)(t)?t:(0,o.tZ)(l.x,{fontSize:"sm",color:"muted",children:t})},s=function(e){var t=e.children,n=e.hint,i=e.legend;return(0,o.BX)(c,{children:[(0,o.BX)(r.Kq,{gap:.75,children:[(0,o.tZ)(d,{children:i}),n?(0,o.tZ)(u,{children:n}):null]}),(0,o.tZ)("div",{children:t})]})}},2413:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var r=n(4060),o=n(7800);function i(e){var t=e.children;return(0,o.tZ)(r.kC,{flexDirection:"column",gap:2,children:t})}},6219:function(e,t,n){"use strict";n.d(t,{H1:function(){return h},H2:function(){return p},X:function(){return f}});var r=n(849),o=n(89),i=(n(7378),n(8976)),c=n(4060),a=n(7800),l=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},f=(0,i.yV)((function(e,t){var n=e.as,r=e.type,i=void 0===r?"h2":r,d=e.color,f=void 0===d?"text":d,h=e.fontSize,p=e.fontFamily,b=void 0===p?"body":p,g=e.fontWeight,m=void 0===g?"bold":g,y=e.lineHeight,v=void 0===y?"heading":y,O=(0,o.Z)(e,l),Z=null!==n&&void 0!==n?n:i,j=null!==h&&void 0!==h?h:s[i];return(0,a.tZ)(c.xu,u({as:Z,ref:t,color:f,fontSize:j,fontFamily:b,fontWeight:m,lineHeight:v},O))})),h=(0,i.yV)((function(e,t){return(0,a.tZ)(f,u({ref:t,as:"h1",type:"h1"},e))})),p=(0,i.yV)((function(e,t){return(0,a.tZ)(f,u({ref:t,as:"h2",type:"h2"},e))}));(0,i.yV)((function(e,t){return(0,a.tZ)(f,u({ref:t,as:"h3",type:"h3"},e))})),(0,i.yV)((function(e,t){return(0,a.tZ)(f,u({ref:t,as:"h4",type:"h4"},e))})),(0,i.yV)((function(e,t){return(0,a.tZ)(f,u({ref:t,as:"h5",type:"h5"},e))})),(0,i.yV)((function(e,t){return(0,a.tZ)(f,u({ref:t,as:"h6",type:"h6"},e))}))},3235:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form-multi-step",function(){return n(662)}])},5732:function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var a=e[i](c),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function a(e){r(c,o,i,a,l,"next",e)}function l(e){r(c,o,i,a,l,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[408,110,180,774,888,179],(function(){return t=3235,e(e.s=t);var t}));var t=e.O();_N_E=t}]);