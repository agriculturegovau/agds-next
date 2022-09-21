(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{1684:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ee}});var n=r(7378),i=r(9639),o=r(849),l=r(6677),a=r(7956),s=r(6297),d=r(7407),c=r(4060),u=r(3170),m=r(1541),h=r(6560),f=r(7865),b=r(8039),p=r(71),v=r(8301),g=r(5191),y=r(2413),Z=r(6527),O=r(8255),S=r(6219),w=r(5581),j=r(6054),x=r(9548),C=r(2482),P=r(165),B=r(7800),k=function(e){var t=e.children,r=e.title,n=e.introduction,i=G().hasCompletedPreviousSteps;return(0,B.BX)(c.Kq,{gap:3,children:[(0,B.tZ)(P.V,{pretext:"Your personal details",title:r,introduction:n}),i?t:(0,B.tZ)(C.F,{tone:"warning",title:"This section of the form is not ready to be completed",children:(0,B.tZ)(j.Mr,{children:(0,B.tZ)("p",{children:"Before starting this part of the form, you will need to go back and complete all of the previous sections."})})})]})},q=r(4413),E=r(8434),X=function(){var e=(0,w.hb)(!1),t=(0,f.Z)(e,3),r=t[0],i=t[1],o=t[2],l=G(),a=l.currentStep,s=l.isSubmittingStep,d=l.saveAndExit,m=l.isSavingBeforeExiting,h=l.cancel;return(0,B.BX)(n.Fragment,{children:[(0,B.BX)(c.Kq,{gap:3,children:[(0,B.tZ)(E.$,{}),(0,B.BX)(g.hE,{children:[(0,B.tZ)(g.zx,{type:"submit",variant:"primary",loading:s,children:4===a?"Submit form":"Continue"}),(0,B.tZ)(g.zx,{type:"button",variant:"secondary",loading:m,onClick:d,children:"Save and exit"}),(0,B.tZ)(g.zx,{type:"button",variant:"tertiary",onClick:i,children:"Cancel"})]})]}),(0,B.tZ)(q.u,{isOpen:r,onDismiss:o,title:"Are you sure you want to cancel?",actions:(0,B.BX)(g.hE,{children:[(0,B.tZ)(g.zx,{onClick:h,children:"Yes, cancel"}),(0,B.tZ)(g.zx,{variant:"secondary",onClick:o,children:"No, take me back"})]}),children:(0,B.tZ)(u.x,{as:"p",children:"This is the Modal Body paragraph, it provides detailed instruction and context for the the modal action. It can also span lines but long form content should be avoided."})})]})};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=v.Ry({firstName:v.Z_().required("Enter your first name"),lastName:v.Z_().required("Enter your first name"),email:v.Z_().email("Enter a valid email").required("Enter your email"),dob:v.hT().required("Enter your date of birth")}).required(),T=r(4172),_=r(6583);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=v.Ry({streetAddress:v.Z_().required("Enter your address"),suburbTownCity:v.Z_().required("Enter your suburb"),state:v.Z_().required("Enter your state"),postcode:v.Z_().length(4,"Invalid postcode").required("Enter your postcode")}).required(),K=r(43),R=r(996);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=v.Ry({contactMethod:v.Z_().required("Select an option"),mobileNumber:v.Z_().when("contactMethod",(function(e,t){return Array.isArray(e)&&e.includes("B")?t.required("Nested field is required"):t}))}).required(),W=r(58);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=[{label:"Personal details",component:function(){var e,t,r,n,i,o,l=(0,w.lP)(!1,!0),a=(0,f.Z)(l,2),s=a[0],d=a[1],u=G(),m=u.next,h=u.stepFormState,v=(0,b.cI)({defaultValues:h,resolver:(0,p.X)(D)}),C=v.control,P=v.register,q=v.handleSubmit,E=v.formState.errors;return(0,B.tZ)(k,{title:"Personal details",introduction:"Confirm if these prefilled details from your account are still correct.",children:(0,B.tZ)(c.Kq,{gap:3,alignItems:"flex-start",children:s?(0,B.BX)(c.Kq,{gap:1.5,children:[(0,B.tZ)(S.H2,{children:"Update personal details"}),(0,B.tZ)(c.Kq,{as:"form",gap:3,onSubmit:q((function(e){m(e)})),noValidate:!0,children:(0,B.BX)(y.R,{children:[(0,B.tZ)(Z.o,M(M({label:"First name",autoComplete:"given-name"},P("firstName")),{},{id:"firstName",invalid:Boolean(null===(e=E.firstName)||void 0===e?void 0:e.message),message:null===(t=E.firstName)||void 0===t?void 0:t.message,required:!0})),(0,B.tZ)(Z.o,M(M({label:"Last name",autoComplete:"family-name"},P("lastName")),{},{id:"lastName",invalid:Boolean(null===(r=E.lastName)||void 0===r?void 0:r.message),message:null===(n=E.lastName)||void 0===n?void 0:n.message,required:!0})),(0,B.tZ)(Z.o,M(M({label:"Email",autoComplete:"email"},P("email")),{},{id:"email",invalid:Boolean(null===(i=E.email)||void 0===i?void 0:i.message),message:null===(o=E.email)||void 0===o?void 0:o.message,type:"email",required:!0})),(0,B.tZ)(b.Qr,{control:C,name:"dob",render:function(e){var t=e.field,r=t.onChange,n=t.onBlur,i=t.value,o=t.name,l=e.fieldState,a=l.invalid,s=l.error;return(0,B.tZ)(O.M,{label:"Date of birth",value:i,onChange:r,onBlur:n,name:o,invalid:a,message:null===s||void 0===s?void 0:s.message,maxWidth:"xl",required:!0})}}),(0,B.tZ)(X,{})]})})]}):(0,B.BX)(B.HY,{children:[(0,B.BX)("details",{children:[(0,B.tZ)("summary",{children:"How were my details prefilled?"}),(0,B.BX)(j.Mr,{children:[(0,B.tZ)("p",{children:"We\u2019re working hard to improve the way we do business with you. This includes making applications and registrations easier to use."}),(0,B.tZ)("p",{children:"If we already have some of the information you need to tell us, we\u2019ll pre-fill it into your applications. This saves you entering all your details yourself."}),(0,B.tZ)("p",{children:"It\u2019s important to check the pre-filled information in your report before you submit it."}),(0,B.tZ)("p",{children:(0,B.tZ)("a",{href:"#",children:"See your profile and account details"})})]})]}),(0,B.BX)(c.Kq,{gap:1.5,alignItems:"flex-start",width:"100%",children:[(0,B.tZ)(S.H2,{children:"Check personal details"}),(0,B.BX)(x.wq,{children:[(0,B.BX)(x.ij,{children:[(0,B.tZ)(x.LM,{children:"First name"}),(0,B.tZ)(x.Rm,{children:h.firstName})]}),(0,B.BX)(x.ij,{children:[(0,B.tZ)(x.LM,{children:"Last name"}),(0,B.tZ)(x.Rm,{children:h.lastName})]}),(0,B.BX)(x.ij,{children:[(0,B.tZ)(x.LM,{children:"Email"}),(0,B.tZ)(x.Rm,{children:h.email})]}),(0,B.BX)(x.ij,{children:[(0,B.tZ)(x.LM,{children:"Date of birth"}),(0,B.tZ)(x.Rm,{children:h.dob})]})]}),(0,B.tZ)(g.zx,{variant:"text",onClick:function(){return d()},children:"Change personal details"})]})]})})})}},{label:"Address details",component:function(){var e,t,r,i,o,l,a,s,d=G(),u=d.next,m=d.stepFormState,h=(0,T.OE)(),v=(0,n.useRef)(null),g=(0,n.useState)(!1),O=g[0],S=g[1],w=(0,b.cI)({defaultValues:null!==m&&void 0!==m?m:{files:[]},resolver:(0,p.X)(L)}),x=w.register,P=w.handleSubmit,q=w.formState.errors,E=Object.keys(q).length>1;return(0,n.useEffect)((function(){var e;E&&!O&&(null===(e=v.current)||void 0===e||e.focus(),S(!0))}),[E,O,q]),(0,B.tZ)(k,{title:"Address details",introduction:"Provide address for where pet will be housed",children:(0,B.BX)(c.Kq,{as:"form",gap:3,onSubmit:P((function(e){S(!1),u(e)}),(function(){S(!1)})),noValidate:!0,children:[(0,B.BX)(y.R,{children:[E&&(0,B.tZ)(C.F,{ref:v,tone:"error",title:"There is a problem",tabIndex:-1,children:(0,B.BX)(j.Mr,{children:[(0,B.tZ)("p",{children:"Please correct the following fields and try again"}),(0,B.tZ)("ul",{children:Object.entries(q).map((function(e){var t=(0,f.Z)(e,2),r=t[0],n=t[1];return(0,B.tZ)("li",{children:(0,B.tZ)("a",{href:"#".concat(r),onClick:h,children:Array.isArray(n)?n[0].message:n.message})},r)}))})]})}),(0,B.tZ)(Z.o,I(I({label:"Street address",autoComplete:"street-address"},x("streetAddress")),{},{id:"streetAddress",invalid:Boolean(null===(e=q.streetAddress)||void 0===e?void 0:e.message),message:null===(t=q.streetAddress)||void 0===t?void 0:t.message,required:!0,maxWidth:"xl"})),(0,B.tZ)(Z.o,I(I({label:"Suburb, town or city",autoComplete:"address-level2"},x("suburbTownCity")),{},{id:"suburbTownCity",invalid:Boolean(null===(r=q.suburbTownCity)||void 0===r?void 0:r.message),message:null===(i=q.suburbTownCity)||void 0===i?void 0:i.message,required:!0})),(0,B.tZ)(_.P,I(I({label:"State or territory"},x("state")),{},{id:"state",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:Boolean(null===(o=q.state)||void 0===o?void 0:o.message),message:null===(l=q.state)||void 0===l?void 0:l.message,required:!0,maxWidth:"md"})),(0,B.tZ)(Z.o,I(I({label:"Postcode",autoComplete:"postal-code"},x("postcode")),{},{id:"postcode",invalid:Boolean(null===(a=q.postcode)||void 0===a?void 0:a.message),message:null===(s=q.postcode)||void 0===s?void 0:s.message,maxWidth:"sm",inputMode:"numeric",pattern:"[0-9]*",required:!0}))]}),(0,B.tZ)(X,{})]})})}},{label:"Contact method",component:function(){var e,t,r,i=G().next,o=(0,T.OE)(),l=(0,n.useRef)(null),a=(0,n.useState)(!1),s=a[0],d=a[1],u=(0,b.cI)({reValidateMode:"onChange",defaultValues:{},resolver:(0,p.X)(H)}),m=u.watch,h=u.register,v=u.handleSubmit,g=u.trigger,O=u.formState,S=O.errors,x=O.isSubmitted,P=Object.keys(S).length>1;(0,n.useEffect)((function(){var e;P&&!s&&(null===(e=l.current)||void 0===e||e.focus(),d(!0))}),[P,s,S]);var q="sms"===m("contactMethod");return(0,n.useEffect)((function(){x&&g()}),[g,x,q]),(0,B.tZ)(k,{title:"Preferred contact method",introduction:"We may need to contact you to check details of your application.",children:(0,B.BX)(c.Kq,{as:"form",gap:3,onSubmit:v((function(e){d(!1),i(e)}),(function(){d(!1)})),noValidate:!0,children:[(0,B.BX)(y.R,{children:[P&&(0,B.tZ)(C.F,{ref:l,tone:"error",title:"There is a problem",tabIndex:-1,children:(0,B.BX)(j.Mr,{children:[(0,B.tZ)("p",{children:"Please correct the following fields and try again"}),(0,B.tZ)("ul",{children:Object.entries(S).map((function(e){var t=(0,f.Z)(e,2),r=t[0],n=t[1];return(0,B.tZ)("li",{children:(0,B.tZ)("a",{href:"#".concat(r),onClick:o,children:n.message})},r)}))})]})}),(0,B.BX)(R.eQ,{id:"checkbox",label:"Preferred contact method",invalid:Boolean(S.contactMethod),message:null===(e=S.contactMethod)||void 0===e?void 0:e.message,required:!0,block:!0,children:[(0,B.tZ)(R.Y8,z(z({},h("contactMethod")),{},{value:"mail",children:"Mail"})),(0,B.tZ)(R.Y8,z(z({},h("contactMethod")),{},{value:"sms",children:"SMS"})),q?(0,B.tZ)(c.xu,{borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:(0,K.iv)({marginLeft:(0,w.XH)(1)},"",""),children:(0,B.tZ)(Z.o,z(z({id:"mobilePhone",type:"tel",label:"Provide mobile phone number"},h("mobileNumber")),{},{invalid:Boolean(null===(t=S.mobileNumber)||void 0===t?void 0:t.message),message:null===(r=S.mobileNumber)||void 0===r?void 0:r.message,required:!0}))}):null,(0,B.tZ)(R.Y8,z(z({},h("contactMethod")),{},{value:"email",children:"Email"}))]})]}),(0,B.tZ)(X,{})]})})}},{label:"Confirm and submit",component:function(){var e,t,r,n,i,o,l,a,s,d=G(),u=d.formState,m=d.goToStep;return(0,B.BX)(k,{title:"Confirm and submit",introduction:"Check and confirm all details on this page.",children:[(0,B.BX)(c.Kq,{gap:1.5,alignItems:"flex-start",children:[(0,B.tZ)(S.H2,{children:Q[0].label}),(0,B.tZ)(g.zx,{variant:"text",onClick:function(){return m(0)},children:"Change"}),(0,B.tZ)(W.x,{items:[{label:"First name",value:null===(e=u[0])||void 0===e?void 0:e.firstName},{label:"Last name",value:null===(t=u[0])||void 0===t?void 0:t.lastName},{label:"Email",value:null===(r=u[0])||void 0===r?void 0:r.email},{label:"Date of birth",value:null===(n=u[0])||void 0===n?void 0:n.dob.toLocaleDateString()}]})]}),(0,B.BX)(c.Kq,{gap:1.5,alignItems:"flex-start",children:[(0,B.tZ)(S.H2,{children:Q[1].label}),(0,B.tZ)(g.zx,{variant:"text",onClick:function(){return m(1)},children:"Change"}),(0,B.tZ)(W.x,{items:[{label:"Street address",value:null===(i=u[1])||void 0===i?void 0:i.streetAddress},{label:"Suburb, town or city",value:null===(o=u[1])||void 0===o?void 0:o.suburbTownCity},{label:"State",value:null===(l=u[1])||void 0===l?void 0:l.state},{label:"Post code",value:null===(a=u[1])||void 0===a?void 0:a.postcode}]})]}),(0,B.BX)(c.Kq,{gap:1.5,alignItems:"flex-start",children:[(0,B.tZ)(S.H2,{children:Q[2].label}),(0,B.tZ)(g.zx,{variant:"text",onClick:function(){return m(2)},children:"Change"}),(0,B.tZ)(W.x,{items:[{label:"Preferred contact method",value:null===(s=u[2])||void 0===s?void 0:s.contactMethod}]})]}),(0,B.tZ)(X,{})]})}}],$=Q.length-1,J=(0,n.createContext)(void 0),U=function(){var e,t=(0,l.useRouter)(),r=(0,n.useState)(0),i=r[0],f=r[1],b=(0,n.useState)({}),p=b[0],v=b[1],g=(0,n.useCallback)((function(){console.log("here..."),t.push("/services/registrations/pet")}),[t]),y=(0,n.useCallback)((function(){0===i&&g(),f(i-1)}),[i,g]),Z=(0,n.useState)(!1),O=Z[0],S=Z[1],w=(0,n.useCallback)((function(e){S(!0),v((function(t){return Y(Y({},t),{},(0,o.Z)({},i,e))})),setTimeout((function(){S(!1),i===$?t.push("success"):f(i+1)}),1500)}),[i,t]),j=(0,n.useState)(!1),x=j[0],C=j[1],P=(0,n.useCallback)((function(){C(!0),setTimeout((function(){g(),C(!1)}),1500)}),[g]),k=(0,n.useMemo)((function(){return 0===i||Boolean(i-1 in p)}),[p,i]),q=null===(e=Q[i])||void 0===e?void 0:e.component,E={back:y,next:w,goToStep:f,currentStep:i,isSubmittingStep:O,saveAndExit:P,isSavingBeforeExiting:x,cancel:g,hasCompletedPreviousSteps:k,formState:p,stepFormState:i in p&&p[i]||{}};return(0,B.tZ)(h.L,{focusMode:!0,children:(0,B.tZ)(s.JH,{children:(0,B.tZ)(J.Provider,{value:E,children:(0,B.BX)(a.o,{children:[(0,B.tZ)(a.s,{columnSpan:{xs:12,md:4,lg:3},children:(0,B.tZ)(s.ef,{visible:{md:!1},children:(0,B.BX)(c.Kq,{gap:.75,children:[(0,B.tZ)(u.x,{display:{xs:"none",md:"block"},as:"h3",fontSize:"md",fontWeight:"bold",lineHeight:"heading",children:"Progress"}),(0,B.tZ)(d.YF,{items:Q.map((function(e,t){return{label:e.label,status:t===i?"doing":t in p?"done":"todo",onClick:function(){return f(t)}}}))})]})})}),(0,B.tZ)(a.s,{columnSpan:{xs:12,md:8},columnStart:{lg:5},children:(0,B.BX)(c.Kq,{gap:3,alignItems:"flex-start",children:[(0,B.tZ)(m.I,{direction:"left",onClick:y,children:"Back"}),q?(0,B.tZ)(q,{}):null]})})]})})})})},G=function(){var e=(0,n.useContext)(J);if(!e)throw new Error("Context provider not found");return e};function ee(){return(0,B.BX)(n.Fragment,{children:[(0,B.tZ)(i.$,{title:"Your pet's details"}),(0,B.tZ)(U,{})]})}},493:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet/task-1/form",function(){return r(1684)}])}},function(e){e.O(0,[65,342,358,466,243,774,888,179],(function(){return t=493,e(e.s=t);var t}));var t=e.O();_N_E=t}]);