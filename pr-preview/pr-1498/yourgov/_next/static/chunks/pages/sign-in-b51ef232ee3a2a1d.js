(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{47784:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(71233),n()},55735:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(36618),n()},52754:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(11100),n()},16700:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(84090),n()},74400:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(45673),n()},62378:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(20071),n()},60828:function(e,r,t){"use strict";t.d(r,{U:function(){return ControlGroupProvider},j:function(){return useControlGroupContext}});var n=t(27378),o=t(87800),i=(0,n.createContext)(void 0),useControlGroupContext=function(){return(0,n.useContext)(i)};function ControlGroupProvider(e){var r=e.children,t=e.messageId,n=e.invalid;return(0,o.tZ)(i.Provider,{value:{messageId:t,invalid:n},children:r})}},11100:function(e,r,t){"use strict";t.d(r,{gN:function(){return Field},i$:function(){return FieldContainer},J1:function(){return FieldHint},Qy:function(){return FieldLabel},nd:function(){return FieldMessage},useScrollToField:function(){return useScrollToField}});var n=t(30294),o=t(10043),i=t(37601),c=t(87800),FieldContainer=function(e){var r=e.children,t=e.invalid,a=e.id;return(0,c.tZ)(i.Stack,{gap:.5,paddingLeft:t?1:void 0,borderLeft:t,borderLeftWidth:"xl",id:a,css:(0,o.iv)({borderLeftColor:t?n._X.systemError:void 0},"",""),children:r})},a=t(27378),d=t(34339),l=t(18979),FieldLabel=function(e){var r=e.as,t=e.children,n=e.className,o=e.id,i=e.htmlFor,s=e.required,u=e.secondaryLabel,p=e.hideOptionalLabel,b=(0,a.useMemo)(function(){return[u,p||s?null:"(optional)"].filter(Boolean).join(" ")},[s,u,p]);return(0,c.BX)(d.Box,{as:void 0===r?"label":r,id:o,htmlFor:i,className:n,children:[(0,c.tZ)(l.Text,{as:"span",fontWeight:"bold",children:t}),b?(0,c.BX)(l.Text,{as:"span",color:"muted",children:[" ",b]}):null]})},FieldHint=function(e){var r=e.children,t=e.id;return(0,c.tZ)(l.Text,{display:"block",color:"muted",id:t,children:r})},s=t(76573),u=t(69272),p={name:"4zleql",styles:"display:block"},FieldMessage=function(e){var r=e.children,t=e.id;return(0,c.BX)(s.Flex,{gap:.5,alignItems:"center",children:[(0,c.tZ)(d.Box,{flexShrink:0,children:(0,c.tZ)(u.z$,{color:"error",size:"md","aria-label":"Error","aria-hidden":"false",css:p})}),(0,c.tZ)(l.Text,{display:"block",fontWeight:"bold",color:"error",id:t,children:r})]})},Field=function(e){var r=e.children,t=e.hint,n=e.id,o=e.invalid,i=e.label,a=e.labelId,d=e.secondaryLabel,l=e.hideOptionalLabel,s=e.message,u=e.required,p=useFieldIds(n),b=p.fieldId,f=p.hintId,h=p.messageId,g=useFieldA11yProps({required:u,fieldId:b,message:s,messageId:h,hint:t,hintId:f,invalid:o});return(0,c.BX)(FieldContainer,{invalid:o,children:[(0,c.tZ)(FieldLabel,{id:a,htmlFor:b,secondaryLabel:d,hideOptionalLabel:l,required:u,children:i}),t?(0,c.tZ)(FieldHint,{id:f,children:t}):null,s&&o?(0,c.tZ)(FieldMessage,{id:h,children:s}):null,"function"==typeof r?r(g):r]})},useFieldIds=function(e){var r=(0,n.Me)(e);return{fieldId:e||"field-".concat(r),hintId:"field-".concat(r,"-hint"),messageId:"field-".concat(r,"-message")}},useFieldA11yProps=function(e){var r=e.required,t=e.fieldId,n=e.message,o=e.messageId,i=e.hint,c=e.hintId,a=e.invalid,d=[n?o:null,i?c:null].filter(Boolean);return{"aria-required":!!r,"aria-invalid":!!a,"aria-describedby":d.length?d.join(" "):void 0,id:t}};function useScrollToField(){return(0,a.useCallback)(function(e){var r=function(e){if("string"==typeof e)return e;var r=e.target;if(r instanceof HTMLAnchorElement)return r.hash.substring(1)}(e);if(r){var t,n,o,i=document.getElementById(r);i&&(o=null==(n=document.querySelector("label[for='"+r+"']"))?void 0:n.parentElement,"div"===i.tagName.toLowerCase()?null===(t=i.querySelector("input"))||void 0===t||t.focus():i.focus(),o?o.scrollIntoView():i.scrollIntoView(),"string"!=typeof e&&e.preventDefault())}},[])}},84090:function(e,r,t){"use strict";t.d(r,{FormStack:function(){return FormStack}});var n=t(76573),o=t(87800);function FormStack(e){var r=e.children;return(0,o.tZ)(n.Flex,{flexDirection:"column",gap:2,children:r})}},45673:function(e,r,t){"use strict";t.d(r,{ListItem:function(){return ListItem},UnorderedList:function(){return UnorderedList}});var n=t(10043),o=t(30294),i=t(27378),c=(0,i.createContext)(0),a=t(87800);function UnorderedList(e){var r=e.children,t=(0,i.useContext)(c)+1;return(0,a.tZ)(c.Provider,{value:t,children:(0,a.tZ)("ul",{css:(0,n.iv)({marginTop:t>1?(0,o.mapSpacing)(.5):0,marginBottom:0},"",""),children:r})})}var d=t(90849),l=t(90089),s=t(18979),u=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,d.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ListItem(e){var r=e.children,t=(0,l.Z)(e,u);return(0,a.tZ)(s.Text,_objectSpread(_objectSpread({as:"li",css:(0,n.iv)({listStyle:"unset","&:not(:first-of-type)":{marginTop:(0,o.mapSpacing)(.5)}},"","")},t),{},{children:r}))}},20071:function(e,r,t){"use strict";t.d(r,{PasswordInput:function(){return w}});var n=t(90849),o=t(11246),i=t(90089),c=t(27378),a=t(30294),d=t(31440),l=t(60828),s=t(10043),u=t(76573),p=t(69272),b=t(87800);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var CheckboxIndicator=function(e){var r=e.disabled,t=e.indeterminate,n=e.invalid,o=e.size,i=a.lB.control[o],c=i.width,d=i.height,l=i.borderWidth;return(0,b.tZ)(u.Flex,{as:"span",justifyContent:"center",alignItems:"center",width:c,height:d,flexShrink:0,css:(0,s.iv)(_objectSpread(_objectSpread({borderWidth:l,borderStyle:"solid",borderColor:a._X.border,backgroundColor:a._X.backgroundBody,color:a._X.foregroundText},r&&{color:a._X.borderMuted,borderColor:a._X.borderMuted,backgroundColor:a._X.backgroundShade}),n&&{borderColor:a._X.systemError,backgroundColor:a._X.systemErrorMuted}),"",""),rounded:!0,children:t?(0,b.tZ)(p.V_,{size:o,weight:"bold"}):(0,b.tZ)(p.nQ,{size:o,weight:"bold"})})},f=t(27137);function CheckboxInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function CheckboxInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?CheckboxInput_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):CheckboxInput_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h=(0,c.forwardRef)(function(e,r){return(0,b.tZ)("input",CheckboxInput_objectSpread({ref:r,css:(0,s.iv)(CheckboxInput_objectSpread(CheckboxInput_objectSpread({},f.JM),{},{"&:focus-visible ~ span:first-of-type":a.lB.outline,"~ span > svg":{opacity:0},"&:checked ~ span > svg, &:indeterminate ~ span > svg":{opacity:1}}),"","")},e))});function CheckboxContainer(e){var r=e.children,t=e.disabled;return(0,b.tZ)(u.Flex,{as:"label",alignItems:"flex-start",color:"text",gap:.5,inline:!0,css:(0,s.iv)({cursor:t?"not-allowed":"pointer"},"",""),children:r})}var g=t(18979),m={sm:0,md:"0.2rem"};function CheckboxLabel(e){var r=e.children,t=e.disabled,n=m[e.size];return(0,b.tZ)(g.Text,{flexGrow:1,color:t?"muted":"text",css:(0,s.iv)({paddingTop:n},"",""),children:r})}var y=["children","disabled","invalid","size","indeterminate","checked"];function Checkbox_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var v=(0,c.forwardRef)(function(e,r){var t=e.children,o=e.disabled,d=e.invalid,s=e.size,u=void 0===s?"md":s,p=e.indeterminate,f=e.checked,g=(0,i.Z)(e,y),m=(0,c.useRef)(null),v=(0,l.j)(),O="boolean"==typeof d?d:null==v?void 0:v.invalid;(0,c.useEffect)(function(){m.current&&(m.current.indeterminate=!!p)},[p]);var j=!p&&f;return(0,b.BX)(CheckboxContainer,{disabled:o,children:[(0,b.tZ)(h,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Checkbox_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Checkbox_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({ref:(0,a.lq)([r,m]),type:"checkbox",disabled:o,"aria-invalid":O?"true":void 0,"aria-describedby":O?null==v?void 0:v.messageId:void 0,checked:j,"aria-checked":p?"mixed":void 0},g)),(0,b.tZ)(CheckboxIndicator,{disabled:o,invalid:O,size:u,indeterminate:p}),(0,b.tZ)(CheckboxLabel,{disabled:o,size:u,children:t})]})}),O=t(37601),j=["id"];function PasswordInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function PasswordInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?PasswordInput_ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):PasswordInput_ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var w=(0,c.forwardRef)(function(e,r){var t,n=e.id,c=(0,i.Z)(e,j),l=(t=(0,a.Me)(n),n||"password-input-".concat(t)),s=(0,a.useToggleState)(!1,!0),u=(0,o.Z)(s,2),p=u[0],f=u[1];return(0,b.BX)(O.Stack,{gap:1,children:[(0,b.tZ)(d.TextInput,PasswordInput_objectSpread(PasswordInput_objectSpread({ref:r},c),{},{id:l,type:p?"text":"password"})),(0,b.tZ)(v,{disabled:c.disabled,"aria-controls":l,size:"sm",checked:p,onChange:f,children:"Show password"})]})})},31440:function(e,r,t){"use strict";t.d(r,{TextInput:function(){return s},c:function(){return textInputStyles}});var n=t(90849),o=t(90089),i=t(27378),c=t(11100),a=t(30294),d=t(87800),l=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var s=(0,i.forwardRef)(function(e,r){var t=e.label,n=e.hideOptionalLabel,i=e.required,a=e.hint,s=e.message,u=e.invalid,p=e.block,b=e.maxWidth,f=e.id,h=e.type,g=void 0===h?"text":h,m=(0,o.Z)(e,l),y=textInputStyles({block:p,maxWidth:void 0===b?"md":b,invalid:u});return(0,d.tZ)(c.gN,{label:t,hideOptionalLabel:n,required:!!i,hint:a,message:s,invalid:u,id:f,children:function(e){return(0,d.tZ)("input",_objectSpread(_objectSpread({ref:r,css:y},e),{},{type:g},m))}})}),textInputStyles=function(e){var r=e.block,t=e.maxWidth,n=e.invalid,o=e.multiline;return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,a.mapSpacing)(1),paddingRight:(0,a.mapSpacing)(1),margin:0,background:a._X.backgroundBody,borderWidth:a.tokens.borderWidth.lg,borderStyle:"solid",borderColor:a._X.border,borderRadius:a.tokens.borderRadius,color:a._X.foregroundText,fontFamily:a.tokens.font.body},a.lB.input.md),t&&{maxWidth:a.tokens.maxWidth.field[t]}),r&&{maxWidth:"none",display:"block",width:"100%"}),n&&{backgroundColor:a._X.systemErrorMuted,borderColor:a._X.systemError}),o&&{paddingTop:(0,a.mapSpacing)(.5),paddingBottom:(0,a.mapSpacing)(.5),height:"auto",minHeight:"6rem"}),{},{"&:disabled":{cursor:"not-allowed",borderColor:a._X.borderMuted,backgroundColor:a._X.backgroundShade,color:a._X.foregroundMuted},"&:focus":a.lB.outline})}},69598:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(31440),n()},68160:function(e,r,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(62231),n()},61420:function(e,r,t){"use strict";t.r(r),t.d(r,{SignInFormPage:function(){return SignInFormPage},default:function(){return Page}});var n=t(90849),o=t(11246),i=t(27378),c=t(86677),a=t(63662),d=t(88039),l=t(43647),s=t(68301),u=t(47784),p=t(16700),b=t(69598),f=t(62378),h=t(18717),g=t(74076),m=t(74400),y=t(52754),v=t(68160),O=t(72892),j=t(53135),w=t(55735),S=t(54149),_=t(92852),x=t(80966),k={firstName:"Barney",lastName:"Gumble",displayName:"Barney Gumble"},P=t(16949),Z=t(1783),I=t(87800);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Page(){var e=(0,c.useRouter)(),r=(0,a.useSearchParams)(),t=(0,x.a)().signIn;return(0,I.BX)(i.Fragment,{children:[(0,I.tZ)(P.$,{title:"Sign in"}),(0,I.tZ)(Z.I,{children:(0,I.tZ)(O.PageContent,{children:(0,I.tZ)(j.Columns,{children:(0,I.tZ)(j.Column,{columnSpan:{xs:12,md:7},children:(0,I.BX)(h.Stack,{gap:3,children:[(0,I.BX)(h.Stack,{gap:.5,children:[(0,I.tZ)(_.H1,{children:"Sign in to yourGov"}),(0,I.tZ)(S.Text,{as:"p",fontSize:"md",color:"muted",children:"Access government services, quickly and securely."})]}),(0,I.tZ)(SignInForm,{onSubmit:function(){t(k);var n=r.get("redirectTo");e.push(n?"/app?redirectTo=".concat(n):"/app")}}),(0,I.tZ)(w.Divider,{}),(0,I.BX)(h.Stack,{gap:1.5,children:[(0,I.BX)(S.Text,{as:"p",children:["Don't have an account?"," ",(0,I.tZ)(v.TextLink,{href:"/not-found",children:"Create account"})]}),(0,I.BX)(S.Text,{as:"p",children:["Read our"," ",(0,I.tZ)(v.TextLink,{href:"/not-found",children:"privacy policy"})]})]})]})})})})})]})}var C=s.Ry({email:s.Z_().email("Invalid email").required("Enter your email"),password:s.Z_().required("Enter your password")}).required();function SignInForm(e){var r,t,n,c,a=(0,i.useState)(!1),s=a[0],O=a[1],j=(0,i.useRef)(null),w=(0,i.useState)(!1),_=w[0],x=w[1],k=(0,y.useScrollToField)(),P=(0,d.cI)({resolver:(0,l.X)(C)}),Z=P.register,F=P.handleSubmit,T=P.formState.errors,X=Object.keys(T).length>1;return(0,i.useEffect)(function(){var e;(X||_)&&(null===(e=j.current)||void 0===e||e.focus(),x(!0))},[_,X]),(0,I.BX)(h.Stack,{gap:3,children:[X&&(0,I.BX)(g.PageAlert,{ref:j,tabIndex:-1,tone:"error",title:"There is a problem",children:[(0,I.tZ)(S.Text,{as:"p",children:"Please correct the following fields and try again"}),(0,I.tZ)(m.UnorderedList,{children:Object.entries(T).map(function(e){var r=(0,o.Z)(e,2),t=r[0],n=r[1];return(0,I.tZ)(m.ListItem,{children:(0,I.tZ)(v.TextLink,{href:"#".concat(t),onClick:k,children:n.message})},t)})})]}),(0,I.tZ)("form",{onSubmit:F(function(r){console.log(r),O(!0),setTimeout(function(){e.onSubmit(r),O(!1)},3e3)},function(e,r){console.log(e,r),x(!1)}),noValidate:!0,children:(0,I.BX)(p.FormStack,{children:[(0,I.tZ)(b.TextInput,_objectSpread(_objectSpread({label:"Email",type:"email"},Z("email")),{},{id:"email",invalid:!!(null===(r=T.email)||void 0===r?void 0:r.message),message:null===(t=T.email)||void 0===t?void 0:t.message,maxWidth:"xl",required:!0})),(0,I.tZ)(f.PasswordInput,_objectSpread(_objectSpread({label:"Password"},Z("password")),{},{id:"password",invalid:!!(null===(n=T.password)||void 0===n?void 0:n.message),message:null===(c=T.password)||void 0===c?void 0:c.message,maxWidth:"xl",required:!0})),(0,I.tZ)("div",{children:(0,I.tZ)(v.TextLink,{href:"/not-found",children:"Forgot password?"})}),(0,I.tZ)("div",{children:(0,I.tZ)(u.Button,{type:"submit",loading:s,children:"Sign in"})})]})})]})}var SignInFormPage=function(){return(0,I.tZ)(O.PageContent,{children:(0,I.tZ)(j.Columns,{children:(0,I.tZ)(j.Column,{columnSpan:{xs:12,md:7}})})})}},25993:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return t(61420)}])}},function(e){e.O(0,[459,376,662,490,804,774,888,179],function(){return e(e.s=25993)}),_N_E=e.O()}]);