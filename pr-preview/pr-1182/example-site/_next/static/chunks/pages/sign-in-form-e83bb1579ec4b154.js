(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{3029:function(e,r,t){"use strict";t.d(r,{V:function(){return l}});var n=t(7378),i=t(1389),o=t(4239),a=t(3009),c=t(7800),l=function(e){var r=e.pretext,t=e.title,l=e.introduction,s=e.callToAction;return(0,c.BX)(i.Stack,{gap:1.5,children:[(0,c.BX)(i.Stack,{children:[r?(0,c.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:r}):null,(0,n.isValidElement)(t)?t:(0,c.tZ)(o.H1,{children:t})]}),l?(0,c.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,s]})}},6332:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(6008),i=t(8119),o=t(849),a=t(1246),c=t(5732),l=t(4707),s=t.n(l),u=t(7378),d=t(8039),f=t(71),h=t(8301),p=t(481),g=t(6403),m=t(3591),v=t(9525),b=t(5833),_=t(5751),Z=t(1875),x=t(7348),y=t(4276),w=t(6710),k=t(508),S=t(3029),X=t(7800);function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach(function(r){(0,o.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var B=h.Ry({email:h.Z_().email("Invalid email").required("Enter your email"),password:h.Z_().required("Enter your password")}).required(),E={name:"xyzkeb",styles:"align-self:flex-start"},T=function(){var e,r,t,n,i,o=(0,u.useState)(!1),l=o[0],h=o[1],y=(0,u.useRef)(null),w=(0,u.useState)(),k=w[0],S=w[1],P=(0,u.useRef)(null),T=(0,u.useState)(!1),I=T[0],j=T[1],H=(0,Z.useScrollToField)(),C=(0,d.cI)({resolver:(0,f.X)(B)}),D=C.register,F=C.handleSubmit,R=C.formState.errors,W=(e=(0,c.Z)(s().mark(function e(r){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(r),h(!0),setTimeout(function(){h(!1),S("Incorrect username or password")},3e3);case 3:case"end":return e.stop()}},e)})),function(r){return e.apply(this,arguments)}),q=Object.keys(R).length>1;(0,u.useEffect)(function(){var e;(q||I)&&(null===(e=P.current)||void 0===e||e.focus(),j(!0))},[I,q]);var z=Boolean(k);return(0,u.useEffect)(function(){var e;z&&(null===(e=y.current)||void 0===e||e.focus())},[z]),(0,X.BX)(v.Stack,{gap:3,children:[z&&(0,X.tZ)(b.PageAlert,{ref:y,tabIndex:-1,tone:"error",children:(0,X.tZ)(_.Prose,{children:(0,X.tZ)("p",{children:k})})}),q&&(0,X.tZ)(b.PageAlert,{ref:P,tabIndex:-1,tone:"error",title:"There is a problem",children:(0,X.BX)(_.Prose,{children:[(0,X.tZ)("p",{children:"Please correct the following fields and try again"}),(0,X.tZ)("ul",{children:Object.entries(R).map(function(e){var r=(0,a.Z)(e,2),t=r[0],n=r[1];return(0,X.tZ)("li",{children:(0,X.tZ)("a",{href:"#".concat(t),onClick:H,children:n.message})},t)})})]})}),(0,X.tZ)("form",{onSubmit:F(W,function(e,r){console.log(e,r),j(!1)}),noValidate:!0,children:(0,X.BX)(g.FormStack,{children:[(0,X.tZ)(m.TextInput,O(O({label:"Email",type:"email"},D("email")),{},{id:"email",invalid:Boolean(null===(r=R.email)||void 0===r?void 0:r.message),message:null===(t=R.email)||void 0===t?void 0:t.message,maxWidth:"xl",required:!0})),(0,X.BX)(v.Stack,{gap:.75,children:[(0,X.tZ)(m.TextInput,O(O({label:"Password",type:"password"},D("password")),{},{id:"password",invalid:Boolean(null===(n=R.password)||void 0===n?void 0:n.message),message:null===(i=R.password)||void 0===i?void 0:i.message,maxWidth:"xl",required:!0})),(0,X.tZ)(x.TextLink,{href:"#",css:E,children:"Forgot password?"})]}),(0,X.tZ)("div",{children:(0,X.tZ)(p.Button,{type:"submit",loading:l,children:"Sign in"})})]})})]})},I=function(){return(0,X.tZ)(y.PageContent,{children:(0,X.tZ)(w.Columns,{children:(0,X.tZ)(w.Column,{columnSpan:{xs:12,md:7},children:(0,X.BX)(v.Stack,{gap:3,children:[(0,X.tZ)(S.V,{title:"Sign in form - xxl/display (H1)",introduction:"Introductory paragraph providing context for this sign in form. All questions on page must be related - md/default (P)."}),(0,X.tZ)(T,{}),(0,X.tZ)(k.Divider,{}),(0,X.BX)(_.Prose,{children:[(0,X.BX)("p",{children:["Don't have an account? ",(0,X.tZ)("a",{href:"#",children:"Create account"})]}),(0,X.BX)("p",{children:["Read our ",(0,X.tZ)("a",{href:"#",children:"privacy policy"})]})]})]})})})})};function j(){return(0,X.BX)(X.HY,{children:[(0,X.tZ)(i.$,{title:"Sign in"}),(0,X.tZ)(n.I,{template:{name:"Sign-in form",slug:"sign-in"},children:(0,X.tZ)(I,{})})]})}},481:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(5842),n()},508:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(84),n()},1875:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(5),n()},6403:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(5770),n()},5833:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(2664),n()},84:function(e,r,t){"use strict";t.d(r,{Divider:function(){return a}});var n=t(43),i=t(5885),o=t(7800);function a(e){var r=e["aria-hidden"];return(0,o.tZ)("hr",{"aria-hidden":void 0===r||r,css:(0,n.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:i.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.borderMuted,width:"100%"},"","")})}},5770:function(e,r,t){"use strict";t.d(r,{FormStack:function(){return o}});var n=t(4241),i=t(7800);function o(e){var r=e.children;return(0,i.tZ)(n.Flex,{flexDirection:"column",gap:2,children:r})}},2664:function(e,r,t){"use strict";t.d(r,{PageAlert:function(){return d},PageAlertTitle:function(){return u}});var n=t(43),i=t(7378),o=t(4241),a=t(5885),c=t(4299),l=t(3555),s=t(7800),u=function(e){var r=e.as,t=e.children;return(0,s.tZ)(l.Text,{as:void 0===r?"h3":r,fontSize:"lg",fontWeight:"bold",children:t})},d=(0,i.forwardRef)(function(e,r){var t=e.id,c=e.role,l=e.children,d=e.title,h=e.tone,p=e.tabIndex,g=f[h],m=g.fg,v=g.bg,b=g.icon;return(0,s.BX)(o.Flex,{ref:r,role:c,id:t,tabIndex:p,rounded:!0,focus:!0,highContrastOutline:!0,css:(0,n.iv)({backgroundColor:v},"",""),children:[(0,s.tZ)(o.Flex,{padding:.5,alignItems:"center",css:(0,n.iv)({borderTopLeftRadius:a.tokens.borderRadius,borderBottomLeftRadius:a.tokens.borderRadius,backgroundColor:m,color:a._X.backgroundBody},"",""),children:b}),(0,s.BX)(o.Flex,{padding:1.5,gap:1,flexDirection:"column",flexGrow:1,children:[d?(0,i.isValidElement)(d)?d:(0,s.tZ)(u,{children:d}):null,l]})]})}),f={success:{fg:a._X.systemSuccess,bg:a._X.systemSuccessMuted,icon:(0,s.tZ)(c.qE,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:a._X.systemError,bg:a._X.systemErrorMuted,icon:(0,s.tZ)(c.z$,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:a._X.systemInfo,bg:a._X.systemInfoMuted,icon:(0,s.tZ)(c.F3,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:a._X.systemWarning,bg:a._X.systemWarningMuted,icon:(0,s.tZ)(c.av,{"aria-hidden":"false","aria-label":"Warning"})}}},9525:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(2951),n()},3591:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(9787),n()},7348:function(e,r,t){"use strict";var n=t(1502).___internalHook("/","../../../..","../..");e.exports=t(711),n()},6126:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in-form",function(){return t(6332)}])},5732:function(e,r,t){"use strict";function n(e,r,t,n,i,o,a){try{var c=e[o](a),l=c.value}catch(s){t(s);return}c.done?r(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(i,o){var a=e.apply(r,t);function c(e){n(a,i,o,c,l,"next",e)}function l(e){n(a,i,o,c,l,"throw",e)}c(void 0)})}}t.d(r,{Z:function(){return i}})}},function(e){e.O(0,[779,110,164,38,774,888,179],function(){return e(e.s=6126)}),_N_E=e.O()}]);