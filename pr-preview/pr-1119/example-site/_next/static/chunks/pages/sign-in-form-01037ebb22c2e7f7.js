(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{8815:function(e,t,r){"use strict";r.d(t,{$:function(){return a}});var n=r(43),i=r(4144),o=r(7800),a=function(){return(0,o.tZ)("hr",{"aria-hidden":"true",css:(0,n.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:i.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:i.boxPalette.borderMuted,width:"100%"},"","")})}},3029:function(e,t,r){"use strict";r.d(t,{V:function(){return c}});var n=r(7378),i=r(1389),o=r(4239),a=r(3009),l=r(7800),c=function(e){var t=e.pretext,r=e.title,c=e.introduction,s=e.callToAction;return(0,l.BX)(i.Stack,{gap:1.5,children:[(0,l.BX)(i.Stack,{children:[t?(0,l.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,l.tZ)(o.H1,{children:r})]}),c?(0,l.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:c}):null,s]})}},6332:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(3940),i=r(8119),o=r(849),a=r(1246),l=r(5732),c=r(4707),s=r.n(c),u=r(7378),d=r(8039),f=r(71),h=r(8301),g=r(481),p=r(6403),m=r(3591),b=r(1389),v=r(5833),x=r(5751),Z=r(1875),y=r(7348),P=r(4276),w=r(6710),_=r(3029),k=r(8815),S=r(7800);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var E=h.Ry({email:h.Z_().email("Invalid email").required("Enter your email"),password:h.Z_().required("Enter your password")}).required(),T={name:"xyzkeb",styles:"align-self:flex-start"},X=function(){var e,t,r,n,i,o=(0,u.useState)(!1),c=o[0],h=o[1],P=(0,u.useRef)(null),w=(0,u.useState)(),_=w[0],k=w[1],O=(0,u.useRef)(null),X=(0,u.useState)(!1),I=X[0],j=X[1],C=(0,Z.useScrollToField)(),H=(0,d.cI)({resolver:(0,f.X)(E)}),F=H.register,R=H.handleSubmit,W=H.formState.errors,q=(e=(0,l.Z)(s().mark(function e(t){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),h(!0),setTimeout(function(){h(!1),k("Incorrect username or password")},3e3);case 3:case"end":return e.stop()}},e)})),function(t){return e.apply(this,arguments)}),D=Object.keys(W).length>1;(0,u.useEffect)(function(){var e;(D||I)&&(null===(e=O.current)||void 0===e||e.focus(),j(!0))},[I,D]);var z=Boolean(_);return(0,u.useEffect)(function(){var e;z&&(null===(e=P.current)||void 0===e||e.focus())},[z]),(0,S.BX)(b.Stack,{gap:3,children:[z&&(0,S.tZ)(v.PageAlert,{ref:P,tabIndex:-1,tone:"error",children:(0,S.tZ)(x.Prose,{children:(0,S.tZ)("p",{children:_})})}),D&&(0,S.tZ)(v.PageAlert,{ref:O,tabIndex:-1,tone:"error",title:"There is a problem",children:(0,S.BX)(x.Prose,{children:[(0,S.tZ)("p",{children:"Please correct the following fields and try again"}),(0,S.tZ)("ul",{children:Object.entries(W).map(function(e){var t=(0,a.Z)(e,2),r=t[0],n=t[1];return(0,S.tZ)("li",{children:(0,S.tZ)("a",{href:"#".concat(r),onClick:C,children:n.message})},r)})})]})}),(0,S.tZ)("form",{onSubmit:R(q,function(e,t){console.log(e,t),j(!1)}),noValidate:!0,children:(0,S.BX)(p.FormStack,{children:[(0,S.tZ)(m.TextInput,B(B({label:"Email",type:"email"},F("email")),{},{id:"email",invalid:Boolean(null===(t=W.email)||void 0===t?void 0:t.message),message:null===(r=W.email)||void 0===r?void 0:r.message,maxWidth:"xl",required:!0})),(0,S.BX)(b.Stack,{gap:.75,children:[(0,S.tZ)(m.TextInput,B(B({label:"Password",type:"password"},F("password")),{},{id:"password",invalid:Boolean(null===(n=W.password)||void 0===n?void 0:n.message),message:null===(i=W.password)||void 0===i?void 0:i.message,maxWidth:"xl",required:!0})),(0,S.tZ)(y.TextLink,{href:"#",css:T,children:"Forgot password?"})]}),(0,S.tZ)("div",{children:(0,S.tZ)(g.Button,{type:"submit",loading:c,children:"Sign in"})})]})})]})},I=function(){return(0,S.tZ)(P.PageContent,{children:(0,S.tZ)(w.Columns,{children:(0,S.tZ)(w.Column,{columnSpan:{xs:12,md:7},children:(0,S.BX)(b.Stack,{gap:3,children:[(0,S.tZ)(_.V,{title:"Sign in form - xxl/display (H1)",introduction:"Introductory paragraph providing context for this sign in form. All questions on page must be related - md/default (P)."}),(0,S.tZ)(X,{}),(0,S.tZ)(k.$,{}),(0,S.BX)(x.Prose,{children:[(0,S.BX)("p",{children:["Don't have an account? ",(0,S.tZ)("a",{href:"#",children:"Create account"})]}),(0,S.BX)("p",{children:["Read our ",(0,S.tZ)("a",{href:"#",children:"privacy policy"})]})]})]})})})})};function j(){return(0,S.BX)(S.HY,{children:[(0,S.tZ)(i.$,{title:"Sign in"}),(0,S.tZ)(n.L,{template:{name:"Sign-in form",slug:"sign-in"},children:(0,S.tZ)(I,{})})]})}},481:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(5842),n()},1875:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(5),n()},6403:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(5770),n()},5833:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2664),n()},5770:function(e,t,r){"use strict";r.d(t,{FormStack:function(){return o}});var n=r(7686),i=r(7800);function o(e){var t=e.children;return(0,i.tZ)(n.Flex,{flexDirection:"column",gap:2,children:t})}},2664:function(e,t,r){"use strict";r.d(t,{PageAlert:function(){return d},PageAlertTitle:function(){return u}});var n=r(43),i=r(7378),o=r(7686),a=r(5885),l=r(4299),c=r(3555),s=r(7800),u=function(e){var t=e.as,r=e.children;return(0,s.tZ)(c.Text,{as:void 0===t?"h3":t,fontSize:"lg",fontWeight:"bold",children:r})},d=(0,i.forwardRef)(function(e,t){var r=e.id,i=e.role,l=e.children,c=e.title,d=e.tone,h=e.tabIndex,g=f[d],p=g.fg,m=g.bg,b=g.icon;return(0,s.BX)(o.Flex,{ref:t,role:i,id:r,tabIndex:h,rounded:!0,focus:!0,highContrastOutline:!0,css:(0,n.iv)({backgroundColor:m},"",""),children:[(0,s.tZ)(o.Flex,{padding:.5,alignItems:"center",css:(0,n.iv)({borderTopLeftRadius:a.tokens.borderRadius,borderBottomLeftRadius:a.tokens.borderRadius,backgroundColor:p,color:a.boxPalette.backgroundBody},"",""),children:b}),(0,s.BX)(o.Flex,{padding:1.5,gap:1,flexDirection:"column",flexGrow:1,children:[c?(0,s.tZ)(u,{children:c}):null,l]})]})}),f={success:{fg:a.boxPalette.systemSuccess,bg:a.boxPalette.systemSuccessMuted,icon:(0,s.tZ)(l.qE,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:a.boxPalette.systemError,bg:a.boxPalette.systemErrorMuted,icon:(0,s.tZ)(l.z$,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:a.boxPalette.systemInfo,bg:a.boxPalette.systemInfoMuted,icon:(0,s.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:a.boxPalette.systemWarning,bg:a.boxPalette.systemWarningMuted,icon:(0,s.tZ)(l.av,{"aria-hidden":"false","aria-label":"Warning"})}}},3591:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(9787),n()},7348:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(711),n()},6126:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in-form",function(){return r(6332)}])},5732:function(e,t,r){"use strict";function n(e,t,r,n,i,o,a){try{var l=e[o](a),c=l.value}catch(s){r(s);return}l.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(i,o){var a=e.apply(t,r);function l(e){n(a,i,o,l,c,"next",e)}function c(e){n(a,i,o,l,c,"throw",e)}l(void 0)})}}r.d(t,{Z:function(){return i}})}},function(e){e.O(0,[779,110,307,38,774,888,179],function(){return e(e.s=6126)}),_N_E=e.O()}]);