(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{8248:function(e,t,n){"use strict";n.d(t,{y:function(){return YourGovLayout}});var r=n(7378),o=n(2479),i=n(8717),a=n(5035),l=n(4855),c=n(4560),s=n(647),u=n(4348),d=n(1691),m=n(4149),f=n(3344),p=n(5748),h=n(7800),g={name:"1nob2mz",styles:"&:focus{outline:none;}"};function YourGovLayout(e){var t=e.children,n=(0,r.useMemo)(function(){return new Date().getFullYear()},[]);return(0,h.BX)(l.Core,{linkComponent:p.N,children:[(0,h.tZ)(f.SkipLinks,{links:[{href:"#main-content",label:"Skip to main content"}]}),(0,h.BX)(u.Flex,{flexDirection:"column",fontFamily:"body",minHeight:"100vh",children:[(0,h.BX)(i.Stack,{palette:"dark",children:[(0,h.tZ)(a.Header,{background:"bodyAlt",logo:(0,h.tZ)(o.Logo,{}),heading:"yourGov",subline:"Access government services from one place"}),(0,h.tZ)(c.MainNavBottomBar,{})]}),(0,h.tZ)(s.Box,{as:"main",id:"main-content",tabIndex:-1,css:g,flexGrow:1,children:t}),(0,h.tZ)(s.Box,{palette:"dark",children:(0,h.BX)(d.Footer,{background:"bodyAlt",children:[(0,h.tZ)(m.Text,{fontSize:"xs",maxWidth:l.tokens.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),(0,h.BX)(m.Text,{fontSize:"xs",maxWidth:l.tokens.maxWidth.bodyText,children:["\xa9 ",n," Department of Agriculture, Fisheries and Forestry"]})]})})]})]})}},7590:function(e,t,n){"use strict";n.r(t);var r=n(849),o=n(1246),i=n(5732),a=n(4707),l=n.n(a),c=n(7378),s=n(8039),u=n(3647),d=n(8301),m=n(7784),f=n(2892),p=n(6700),h=n(9598),g=n(8717),b=n(4076),v=n(4400),y=n(2754),S=n(8160),x=n(4149),Z=n(2852),_=n(3135),k=n(4196),w=n(6949),N=n(8248),O=n(966),j=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Page=function(){var e=(0,O.a)().signIn;return(0,j.BX)(c.Fragment,{children:[(0,j.tZ)(w.$,{title:"Sign in"}),(0,j.tZ)(f.PageContent,{children:(0,j.tZ)(_.Columns,{children:(0,j.tZ)(_.Column,{columnSpan:{xs:12,md:7},children:(0,j.BX)(g.Stack,{gap:1.5,children:[(0,j.tZ)(Z.H1,{children:"Sign in with yourGov"}),(0,j.tZ)(SignInForm,{onSubmit:function(t){var n=t.firstName,r=t.lastName,o=t.role;e({firstName:n,lastName:r,displayName:[n,r].join(" "),role:o})}})]})})})})]})};t.default=Page,Page.getLayout=function(e){return(0,j.tZ)(N.y,{children:e})};var E=d.Ry({firstName:d.Z_().required("Enter your first name"),lastName:d.Z_().required("Enter your last name"),role:d.nK().oneOf(["Employee","Employer"],"Select a role").required("Select a role")}).required();function SignInForm(e){var t,n,r,a,d,f,Z,_=(0,c.useState)(!1),w=_[0],N=_[1],O=(0,c.useRef)(null),P=(0,c.useState)(!1),B=P[0],T=P[1],X=(0,y.useScrollToField)(),F=(0,s.cI)({resolver:(0,u.X)(E)}),C=F.register,I=F.handleSubmit,L=F.formState.errors,W=(t=(0,i.Z)(l().mark(function _callee(t){return l().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:N(!0),setTimeout(function(){N(!1),null==e||e.onSubmit(t)},3e3);case 2:case"end":return n.stop()}},_callee)})),function(e){return t.apply(this,arguments)}),q=Object.keys(L).length>1;return(0,c.useEffect)(function(){var e;(q||B)&&(null===(e=O.current)||void 0===e||e.focus(),T(!0))},[B,q]),(0,j.BX)(g.Stack,{gap:3,children:[q&&(0,j.BX)(b.PageAlert,{ref:O,tabIndex:-1,tone:"error",title:"There is a problem",children:[(0,j.tZ)(x.Text,{as:"p",children:"Please correct the following fields and try again"}),(0,j.tZ)(v.UnorderedList,{children:Object.entries(L).map(function(e){var t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,j.tZ)(v.ListItem,{children:(0,j.tZ)(S.TextLink,{href:"#".concat(n),onClick:X,children:r.message})},n)})})]}),(0,j.tZ)("form",{onSubmit:I(W,function(e,t){console.log(e,t),T(!1)}),noValidate:!0,children:(0,j.BX)(p.FormStack,{children:[(0,j.tZ)(h.TextInput,_objectSpread(_objectSpread({label:"First name"},C("firstName")),{},{id:"firstName",autoComplete:"given-name",invalid:!!(null===(n=L.firstName)||void 0===n?void 0:n.message),message:null===(r=L.firstName)||void 0===r?void 0:r.message,maxWidth:"xl",required:!0})),(0,j.tZ)(h.TextInput,_objectSpread(_objectSpread({label:"Last name"},C("lastName")),{},{id:"lastName",autoComplete:"family-name",invalid:!!(null===(a=L.lastName)||void 0===a?void 0:a.message),message:null===(d=L.lastName)||void 0===d?void 0:d.message,maxWidth:"xl",required:!0})),(0,j.tZ)(k.Select,_objectSpread(_objectSpread({label:"Role"},C("role")),{},{id:"role",placeholder:"Please select",invalid:!!(null===(f=L.role)||void 0===f?void 0:f.message),message:null===(Z=L.role)||void 0===Z?void 0:Z.message,maxWidth:"xl",required:!0,options:[{label:"Employer",value:"Employer"},{label:"Employee",value:"Employee"}]})),(0,j.tZ)("div",{children:(0,j.tZ)(m.Button,{type:"submit",loading:w,children:"Sign in"})})]})})]})}},7784:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(1233),r()},8160:function(e,t,n){"use strict";var r=n(1502).___internalHook("/","../../../..","../..");e.exports=n(2231),r()},5993:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return n(7590)}])}},function(e){e.O(0,[637,401,553,804,362,774,888,179],function(){return e(e.s=5993)}),_N_E=e.O()}]);