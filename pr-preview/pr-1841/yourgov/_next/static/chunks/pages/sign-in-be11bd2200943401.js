(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1312],{37654:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(60954),n()},57449:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(88090),n()},16096:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(51190),n()},29309:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(31369),n()},82749:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(74507),n()},50463:function(e,r,t){"use strict";t.d(r,{Checkbox:function(){return k}});var n=t(90849),i=t(90089),o=t(27378),c=t(8447),a=t(60893),u=t(10043),s=t(84007),l=t(32084),d=t(87800);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b=function(e){var r=e.disabled,t=e.indeterminate,n=e.invalid,i=e.size,o=c.lB.control[i],a=o.width,f=o.height,b=o.borderWidth;return(0,d.tZ)(s.Flex,{as:"span",justifyContent:"center",alignItems:"center",width:a,height:f,flexShrink:0,css:(0,u.iv)(p(p({borderWidth:b,borderStyle:"solid",borderColor:c._X.border,backgroundColor:c._X.backgroundBody,color:c._X.foregroundText},r&&{color:c._X.borderMuted,borderColor:c._X.borderMuted,backgroundColor:c._X.backgroundShade}),n&&{borderColor:c._X.systemError,backgroundColor:c._X.systemErrorMuted}),"",""),rounded:!0,children:t?(0,d.tZ)(l.V_,{size:i,weight:"bold"}):(0,d.tZ)(l.nQ,{size:i,weight:"bold"})})},v=t(64388);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m=(0,o.forwardRef)(function(e,r){return(0,d.tZ)("input",g({ref:r,css:(0,u.iv)(g(g({},v.JM),{},{"&:focus ~ span:first-of-type":c.lB.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}}),"","")},e))});function O(e){var r=e.children,t=e.htmlFor,n=e.disabled;return(0,d.tZ)(s.Flex,{as:"label",alignItems:"flex-start",color:"text",gap:.5,htmlFor:t,inline:!0,css:(0,u.iv)({cursor:n?"not-allowed":"pointer"},"",""),children:r})}var y=t(89205),j={sm:0,md:"0.2rem"};function w(e){var r=e.children,t=e.disabled,n=j[e.size];return(0,d.tZ)(y.Text,{flexGrow:1,color:t?"muted":"text",css:(0,u.iv)({paddingTop:n},"",""),children:r})}var P=["checked","children","disabled","indeterminate","invalid","name","required","size"];function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var k=(0,o.forwardRef)(function(e,r){var t,u,s=e.checked,l=e.children,f=e.disabled,p=e.indeterminate,v=e.invalid,h=e.name,g=e.required,y=e.size,j=void 0===y?"md":y,k=(0,i.Z)(e,P),_=(t=k.id,u=(0,c.Me)(t),t||"checkbox-".concat(u)),S=(0,o.useRef)(null),x=(0,a.j)(),E="boolean"==typeof v?v:null==x?void 0:x.invalid,D="boolean"==typeof g?g:null==x?void 0:x.required,T=h||(null==x?void 0:x.name);(0,o.useEffect)(function(){S.current&&(S.current.indeterminate=!!p)},[p]);var C=!p&&s;return(0,d.BX)(O,{disabled:f,htmlFor:_,children:[(0,d.tZ)(m,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({"aria-checked":p?"mixed":void 0,"aria-describedby":E?null==x?void 0:x.messageId:void 0,"aria-invalid":E||void 0,"aria-required":D,checked:C,disabled:f,id:_,name:T,ref:(0,c.lq)([r,S]),type:"checkbox"},k)),(0,d.tZ)(b,{disabled:f,indeterminate:p,invalid:E,size:j}),(0,d.tZ)(w,{disabled:f,size:j,children:l})]})})},60893:function(e,r,t){"use strict";t.d(r,{U:function(){return u},j:function(){return a}});var n=t(27378),i=t(8447),o=t(87800),c=(0,n.createContext)(void 0),a=function(){return(0,n.useContext)(c)};function u(e){var r=e.children,t=e.invalid,n=e.messageId,a=e.name,u=e.required,s=(0,i.Me)();return(0,o.tZ)(c.Provider,{value:{invalid:t,name:a||s,messageId:n,required:u},children:r})}},88090:function(e,r,t){"use strict";t.d(r,{FormStack:function(){return o}});var n=t(84007),i=t(87800);function o(e){var r=e.children;return(0,i.tZ)(n.Flex,{flexDirection:"column",gap:2,children:r})}},51190:function(e,r,t){"use strict";t.d(r,{ListItem:function(){return v},UnorderedList:function(){return u}});var n=t(10043),i=t(8447),o=t(27378),c=(0,o.createContext)(0),a=t(87800);function u(e){var r=e.children,t=(0,o.useContext)(c)+1;return(0,a.tZ)(c.Provider,{value:t,children:(0,a.tZ)("ul",{css:(0,n.iv)({marginTop:t>1?(0,i.mapSpacing)(.5):0,marginBottom:0},"",""),children:r})})}var s=t(90849),l=t(90089),d=t(89205),f=["children"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach(function(r){(0,s.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function v(e){var r=e.children,t=(0,l.Z)(e,f);return(0,a.tZ)(d.Text,b(b({as:"li",css:(0,n.iv)({listStyle:"unset","&:not(:first-of-type)":{marginTop:(0,i.mapSpacing)(.5)}},"","")},t),{},{children:r}))}},74507:function(e,r,t){"use strict";t.d(r,{PasswordInput:function(){return v}});var n=t(90849),i=t(11246),o=t(90089),c=t(27378),a=t(8447),u=t(11725),s=t(50463),l=t(7226),d=t(87800),f=["id"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var v=(0,c.forwardRef)(function(e,r){var t,n=e.id,c=(0,o.Z)(e,f),p=(t=(0,a.Me)(n),n||"password-input-".concat(t)),v=(0,a.useToggleState)(!1,!0),h=(0,i.Z)(v,2),g=h[0],m=h[1];return(0,d.BX)(l.Stack,{gap:1,children:[(0,d.tZ)(u.TextInput,b(b({ref:r},c),{},{id:p,type:g?"text":"password"})),(0,d.tZ)(s.Checkbox,{disabled:c.disabled,"aria-controls":p,size:"sm",checked:g,onChange:m,children:"Show password"})]})})},61444:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(11725),n()},15748:function(e,r,t){"use strict";t.d(r,{V:function(){return u}});var n=t(27378),i=t(50456),o=t(94303),c=t(68944),a=t(87800),u=function(e){var r=e.pretext,t=e.title,u=e.introduction,s=e.callToAction;return(0,a.BX)(i.Stack,{gap:1.5,children:[(0,a.BX)(i.Stack,{children:[r?(0,a.tZ)(c.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:r}):null,(0,n.isValidElement)(t)?t:(0,a.tZ)(o.H1,{children:t})]}),u?(0,a.tZ)(c.Text,{as:"p",fontSize:"md",color:"muted",children:u}):null,s]})}},87672:function(e,r,t){"use strict";t.d(r,{AY:function(){return s},Jg:function(){return i},MG:function(){return a},b5:function(){return l},jF:function(){return c},ly:function(){return o},wC:function(){return u}});var n=t(84200);function i(e){return n.z.string({invalid_type_error:e,required_error:e}).trim().min(1,{message:e})}var o=function(){return n.z.string().optional()};function c(){return o().refine(function(e){return!e||/^[\d\s]+$/.test(e)},{message:"Phone number must not include letters or symbols"}).refine(function(e){return!e||/^0[42][\d\s]+$/.test(e)},{message:"Mobile numbers must begin with ‘04’, landline numbers must begin with ‘02’"}).refine(function(e){return!e||(null==e?void 0:e.replace(/\s/g,"").length)===10},{message:"The Phone number must be 10 digits long"})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter a valid date";return n.z.date({invalid_type_error:"Enter a valid date",required_error:e})}function u(){return n.z.coerce.date()}function s(e){var r=e.label,t=e.requiredMessage,o=void 0===t?"".concat(r," is required"):t,c=e.invalidMessage,a=void 0===c?"".concat(r," is invalid"):c;return n.z.object({value:i(o),formatted:i(o)},{required_error:o,invalid_type_error:a}).superRefine(function(e,r){e.value||r.addIssue({code:n.NL.invalid_string,message:o,validation:{includes:""}}),/^\d\d:\d\d$/.test(e.value)||r.addIssue({code:n.NL.invalid_string,message:a,validation:{includes:""}})})}function l(e,r){return n.z.array(e,{required_error:r}).nonempty({message:r})}},6859:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return B}});var n=t(90849),i=t(11246),o=t(27378),c=t(88039),a=t(86677),u=t(63662),s=t(84200),l=t(32324),d=t(51036),f=t(2951),p=t(47586),b=t(57449),v=t(29309),h=t(38163),g=t(74578),m=t(82749),O=t(50456),y=t(68944),j=t(61444),w=t(79706),P=t(16096),Z=t(37654),k=t(40670),_={firstName:"Charlie",lastName:"Walker",displayName:"Charlie Walker"},S=t(15748),x=t(7787),E=t(65402),D=t(87672),T=t(87800);function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function X(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function B(){var e=(0,a.useRouter)(),r=(0,u.useSearchParams)(),t=(0,E.a)().signIn;return(0,T.BX)(o.Fragment,{children:[(0,T.tZ)(k.$,{title:"Sign in to yourGov"}),(0,T.tZ)(x.I,{children:(0,T.tZ)(g.PageContent,{children:(0,T.tZ)(f.Columns,{children:(0,T.tZ)(f.Column,{columnSpan:{xs:12,md:8},children:(0,T.BX)(O.Stack,{gap:3,children:[(0,T.tZ)(O.Stack,{gap:.5,children:(0,T.tZ)(S.V,{title:"Sign in to yourGov",introduction:"Access government services, quickly and securely"})}),(0,T.tZ)(I,{onSubmit:function(){t(_);var n=r.get("redirectTo");e.push(n?"/app?redirectTo=".concat(n):"/app")}}),(0,T.tZ)(p.Divider,{}),(0,T.BX)(O.Stack,{gap:1.5,children:[(0,T.BX)(y.Text,{as:"p",children:["Don’t have an account?"," ",(0,T.tZ)(w.TextLink,{href:"/not-found",children:"Create account"})]}),(0,T.BX)(y.Text,{as:"p",children:["Read our"," ",(0,T.tZ)(w.TextLink,{href:"/not-found",children:"privacy policy"})]})]})]})})})})})]})}var z=s.z.object({email:(0,D.Jg)("Enter your email").email("Enter a valid email"),password:(0,D.Jg)("Enter your password")});function I(e){var r,t,n,a,u=(0,o.useState)(!1),s=u[0],f=u[1],p=(0,o.useRef)(null),g=(0,o.useState)(!1),k=g[0],_=g[1],S=(0,Z.useScrollToField)(),x=(0,c.cI)({resolver:(0,l.F)(z),mode:"onSubmit",reValidateMode:"onBlur"}),E=x.register,D=x.handleSubmit,C=x.formState.errors,B=Object.keys(C).length>1;return(0,o.useEffect)(function(){var e;(B||k)&&(null===(e=p.current)||void 0===e||e.focus(),_(!0))},[k,B]),(0,T.BX)(O.Stack,{gap:3,children:[B&&(0,T.BX)(h.PageAlert,{ref:p,tabIndex:-1,tone:"error",title:"There is a problem",children:[(0,T.tZ)(y.Text,{as:"p",children:"Please correct the following fields and try again"}),(0,T.tZ)(P.UnorderedList,{children:Object.entries(C).map(function(e){var r=(0,i.Z)(e,2),t=r[0],n=r[1];return(0,T.tZ)(P.ListItem,{children:(0,T.tZ)(w.TextLink,{href:"#".concat(t),onClick:S,children:n.message})},t)})})]}),s&&(0,T.tZ)(v.LoadingBlanket,{fullScreen:!0,label:"Signing in"}),(0,T.tZ)("form",{onSubmit:D(function(r){f(!0),setTimeout(function(){e.onSubmit(r),f(!1)},3e3)},function(){_(!1)}),noValidate:!0,children:(0,T.BX)(b.FormStack,{children:[(0,T.tZ)(j.TextInput,X(X({label:"Email",type:"email"},E("email")),{},{id:"email",invalid:!!(null===(r=C.email)||void 0===r?void 0:r.message),message:null===(t=C.email)||void 0===t?void 0:t.message,maxWidth:"xl",required:!0})),(0,T.tZ)(m.PasswordInput,X(X({label:"Password"},E("password")),{},{id:"password",invalid:!!(null===(n=C.password)||void 0===n?void 0:n.message),message:null===(a=C.password)||void 0===a?void 0:a.message,maxWidth:"xl",required:!0})),(0,T.tZ)("div",{children:(0,T.tZ)(w.TextLink,{href:"/not-found",children:"Forgot password?"})}),(0,T.tZ)("div",{children:(0,T.tZ)(d.Button,{type:"submit",loading:s,children:"Sign in"})})]})})]})}},25993:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return t(6859)}])}},function(e){e.O(0,[7454,9073,1854,3662,8486,5717,5265,9774,2888,179],function(){return e(e.s=25993)}),_N_E=e.O()}]);