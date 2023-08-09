(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{6596:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(7378),i=r(6783),o=r(1966),a=r(9204),l=r(7800),s=function(e){var t=e.pretext,r=e.title,s=e.introduction,d=e.callToAction;return(0,l.BX)(i.Stack,{gap:1.5,children:[(0,l.BX)(i.Stack,{children:[t?(0,l.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,l.tZ)(o.H1,{children:r})]}),s?(0,l.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,d]})}},9496:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(89),i=r(849),o=r(1246),a=r(7378),l=r(6677),s=r(8039),d=r(3647),u=r(8301),c=r(9007),p=r(9339),b=r(3566),m=r(6783),v=r(5545),f=r(2153),g=r(1615),h=r(1966),y=r(170),Z=r(3540),S=r(7635),O=r(4117),w=r(9810),x=r(2908),P=r(2673),k=r(9743),A=r(7447),j=r(9204),_=r(5396),E=r(5418),T=r(8531),C=r(6596),q=r(7800),B=["ref"],D=["ref","value","onChange"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var N=u.hT().transform(function(e,t){return"string"==typeof t?t:e}).typeError("Enter a valid date"),W=u.Ry({abn:u.Z_().required("Enter your ABN"),acn:u.Z_().required("Enter your ACN"),businessName:u.Z_().required("Enter your business name"),registrationDate:N,entityName:u.Z_().required("Enter your entity name"),entityNumber:u.Z_().required("Enter your entity number"),periodActive:u.Ry({from:N.required("Enter a valid date").max(u.iH("to"),"Start date must be before the end date"),to:N.required("Enter a valid date").min(u.iH("from"),"Start date must be before the end date")}).required("Enter a valid date"),streetAddress:u.Z_().required("Enter your street address"),suburbTownCity:u.Z_().required("Enter your suburb, town or city"),state:u.Z_().required("Enter your state"),postcode:u.Z_().required("Enter your postcode"),isPostalAddressSameAsStreetAddress:u.O7(),postalAddress:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your postal address")}),postalSuburbTownCity:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your suburb, town or city")}),postalState:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your state")}),postalPostcode:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your postcode")})}).required(),H=function(){var e,t,r,i,u,w,x,P,E,T,C,I,N,H,F,R,L,z,M,V,Q,Y,G,U,$,J,K=(0,l.useRouter)(),ee=(0,a.useState)(!1),et=ee[0],er=ee[1],en=(0,a.useRef)(null),ei=(0,a.useState)(!1),eo=ei[0],ea=ei[1],el=(0,O.useScrollToField)(),es=(0,s.cI)({defaultValues:{periodActive:{from:void 0,to:void 0}},resolver:(0,d.X)(W)}),ed=es.register,eu=es.control,ec=es.handleSubmit,ep=es.watch,eb=es.trigger,em=es.formState,ev=em.errors,ef=em.isSubmitted,eg=Object.keys(ev).length>1;(0,a.useEffect)(function(){var e;(eg||eo)&&(null===(e=en.current)||void 0===e||e.focus(),ea(!0))},[eo,eg]);var eh=ep("isPostalAddressSameAsStreetAddress",!1);(0,a.useEffect)(function(){ef&&eb()},[eh,eb,ef]);var ey=Object.entries(ev).map(function(e){var t,r,n=(0,o.Z)(e,2),i=n[0],a=n[1];return"message"in a?{key:i,message:a.message}:"from"in a?{key:i,message:null===(t=a.from)||void 0===t?void 0:t.message}:"to"in a?{key:i,message:null===(r=a.to)||void 0===r?void 0:r.message}:void 0}).filter(function(e){return!!(null==e?void 0:e.message)});return(0,q.tZ)("form",{onSubmit:ec(function(e){er(!0),console.log(e),setTimeout(function(){er(!1),K.push("single-page-form-success")},2e3)},function(e,t){console.log(e,t),ea(!1)}),noValidate:!0,children:(0,q.BX)(m.Stack,{gap:3,children:[eg&&(0,q.BX)(S.PageAlert,{ref:en,tabIndex:-1,tone:"error",title:"There is a problem",children:[(0,q.tZ)(j.Text,{as:"p",children:"Please correct the following fields and try again"}),(0,q.tZ)(b.UnorderedList,{children:ey.map(function(e){return(0,q.tZ)(b.ListItem,{children:(0,q.tZ)(Z.TextLink,{href:"#".concat(e.key),onClick:el,children:e.message})},e.key)})})]}),(0,q.tZ)(v.Fieldset,{legend:(0,q.tZ)(h.H2,{children:"Business details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,q.BX)(f.FormStack,{children:[(0,q.tZ)(y.TextInput,X(X({label:"Australian Business Number (ABN)"},ed("abn")),{},{id:"abn",invalid:!!(null===(e=ev.abn)||void 0===e?void 0:e.message),message:null===(t=ev.abn)||void 0===t?void 0:t.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,q.tZ)(y.TextInput,X(X({label:"Australian Company Number (ACN)"},ed("acn")),{},{id:"acn",invalid:!!(null===(r=ev.acn)||void 0===r?void 0:r.message),message:null===(i=ev.acn)||void 0===i?void 0:i.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,q.tZ)(y.TextInput,X(X({label:"Business name"},ed("businessName")),{},{id:"businessName",invalid:!!(null===(u=ev.businessName)||void 0===u?void 0:u.message),message:null===(w=ev.businessName)||void 0===w?void 0:w.message,required:!0,maxWidth:"xl"})),(0,q.tZ)(s.Qr,{control:eu,name:"registrationDate",render:function(e){var t,r,i=e.field,o=i.ref,a=(0,n.Z)(i,B);return(0,q.tZ)(k.DatePicker,X(X({inputRef:o,label:"Registration date"},a),{},{onInputChange:a.onChange,id:"registrationDate",invalid:!!(null===(t=ev.registrationDate)||void 0===t?void 0:t.message),message:null===(r=ev.registrationDate)||void 0===r?void 0:r.message}))}})]})}),(0,q.tZ)(_.Divider,{}),(0,q.tZ)(v.Fieldset,{legend:(0,q.tZ)(h.H2,{children:"Provide entity details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,q.BX)(f.FormStack,{children:[(0,q.tZ)(y.TextInput,X(X({label:"Entity name"},ed("entityName")),{},{id:"entityName",invalid:!!(null===(x=ev.entityName)||void 0===x?void 0:x.message),message:null===(P=ev.entityName)||void 0===P?void 0:P.message,required:!0})),(0,q.tZ)(y.TextInput,X(X({label:"Entity number"},ed("entityNumber")),{},{id:"entityNumber",invalid:!!(null===(E=ev.entityNumber)||void 0===E?void 0:E.message),message:null===(T=ev.entityNumber)||void 0===T?void 0:T.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,q.tZ)(s.Qr,{control:eu,name:"periodActive",render:function(e){var t,r,i,o,a,l,s,d,u=e.field,c=u.ref,p=u.value,b=u.onChange,m=(0,n.Z)(u,D);return(0,q.tZ)(A.DateRangePicker,X(X({legend:"Period active",fromInputRef:c},m),{},{id:"periodActive",value:p,onChange:b,onFromInputChange:function(e){return b(X(X({},p),{},{from:e}))},onToInputChange:function(e){return b(X(X({},p),{},{to:e}))},fromInvalid:!!(null===(t=ev.periodActive)||void 0===t?void 0:null===(r=t.from)||void 0===r?void 0:r.message),toInvalid:!!(null===(i=ev.periodActive)||void 0===i?void 0:null===(o=i.to)||void 0===o?void 0:o.message),message:(null===(a=ev.periodActive)||void 0===a?void 0:null===(l=a.from)||void 0===l?void 0:l.message)||(null===(s=ev.periodActive)||void 0===s?void 0:null===(d=s.to)||void 0===d?void 0:d.message),required:!0}))}})]})}),(0,q.tZ)(v.Fieldset,{legend:(0,q.tZ)(h.H3,{children:"Street address (H3)"}),children:(0,q.BX)(f.FormStack,{children:[(0,q.tZ)(y.TextInput,X(X({label:"Street address"},ed("streetAddress")),{},{id:"streetAddress",invalid:!!(null===(C=ev.streetAddress)||void 0===C?void 0:C.message),message:null===(I=ev.streetAddress)||void 0===I?void 0:I.message,required:!0,maxWidth:"xl"})),(0,q.tZ)(y.TextInput,X(X({label:"Suburb, town or city"},ed("suburbTownCity")),{},{id:"suburbTownCity",invalid:!!(null===(N=ev.suburbTownCity)||void 0===N?void 0:N.message),message:null===(H=ev.suburbTownCity)||void 0===H?void 0:H.message,required:!0})),(0,q.tZ)(g.Select,X(X({label:"State or territory"},ed("state")),{},{id:"state",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:!!(null===(F=ev.state)||void 0===F?void 0:F.message),message:null===(R=ev.state)||void 0===R?void 0:R.message,required:!0,maxWidth:"md"})),(0,q.tZ)(y.TextInput,X(X({label:"Postcode"},ed("postcode")),{},{id:"postcode",invalid:!!(null===(L=ev.postcode)||void 0===L?void 0:L.message),message:null===(z=ev.postcode)||void 0===z?void 0:z.message,maxWidth:"sm",inputMode:"numeric",pattern:"[0-9]*",required:!0}))]})}),(0,q.tZ)(v.Fieldset,{legend:(0,q.tZ)(h.H3,{children:"Postal address (H3)"}),children:(0,q.BX)(f.FormStack,{children:[(0,q.tZ)(p.Checkbox,X(X({},ed("isPostalAddressSameAsStreetAddress")),{},{id:"isPostalAddressSameAsStreetAddress",children:"Same as street address"})),!eh&&(0,q.BX)(f.FormStack,{children:[(0,q.tZ)(y.TextInput,X(X({label:"Postal address"},ed("postalAddress")),{},{id:"postalAddress",invalid:!!(null===(M=ev.postalAddress)||void 0===M?void 0:M.message),message:null===(V=ev.postalAddress)||void 0===V?void 0:V.message,required:!0,maxWidth:"xl"})),(0,q.tZ)(y.TextInput,X(X({label:"Suburb, town or city"},ed("postalSuburbTownCity")),{},{id:"postalSuburbTownCity",invalid:!!(null===(Q=ev.postalSuburbTownCity)||void 0===Q?void 0:Q.message),message:null===(Y=ev.postalSuburbTownCity)||void 0===Y?void 0:Y.message,required:!0})),(0,q.tZ)(g.Select,X(X({label:"State or territory"},ed("postalState")),{},{id:"postalState",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:!!(null===(G=ev.postalState)||void 0===G?void 0:G.message),message:null===(U=ev.postalState)||void 0===U?void 0:U.message,required:!0,maxWidth:"md"})),(0,q.tZ)(y.TextInput,X(X({label:"Postcode"},ed("postalPostcode")),{},{id:"postalPostcode",invalid:!!(null===($=ev.postalPostcode)||void 0===$?void 0:$.message),message:null===(J=ev.postalPostcode)||void 0===J?void 0:J.message,maxWidth:"sm",required:!0,inputMode:"numeric",pattern:"[0-9]*"}))]})]})}),(0,q.tZ)(_.Divider,{}),(0,q.BX)(c.ButtonGroup,{children:[(0,q.tZ)(c.Button,{type:"submit",loading:et,children:"Submit form"}),(0,q.tZ)(c.Button,{type:"button",variant:"secondary",children:"Cancel"})]})]})})};function F(){return(0,q.BX)(q.HY,{children:[(0,q.tZ)(T.$,{title:"Single-page form example"}),(0,q.tZ)(E.I,{template:{name:"Single-page form",slug:"single-page-form"},children:(0,q.tZ)(w.PageContent,{children:(0,q.tZ)(x.Columns,{children:(0,q.tZ)(x.Column,{columnSpan:{xs:12,md:8},children:(0,q.BX)(m.Stack,{gap:3,children:[(0,q.tZ)(P.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/category",label:"Category 1"},{href:"/category/subcategory",label:"Subcategory page"},{label:"Single-page form"}]}),(0,q.tZ)(C.V,{title:"Single-page form (multi-question) xxl/display (H1)",introduction:"Introductory paragraph providing context for this single page of the multi-step form. All questions on page must be related - md/default (P)"}),(0,q.tZ)(j.Text,{fontSize:"xs",color:"muted",children:"All fields are required unless marked optional."}),(0,q.tZ)(H,{})]})})})})})]})}},2673:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(578),n()},7447:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(102),n()},5545:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(315),n()},1615:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(161),n()},578:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return k}});var n=r(849),i=r(89),o=r(7378),a=r(6811),l=r(43),s=r(2557),d=r(3255),u=r(7800);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var p=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":i,children:(0,u.tZ)(s.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:r})})},b=r(2377),m=r(2341),v={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"},f=function(){return(0,u.tZ)(m.XC,{color:"border",weight:"bold",css:v})};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,u.BX)(s.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(f,{}),i?(0,u.tZ)(b.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),y=r(4630);function Z(e){var t=e.onClick;return(0,u.tZ)(h,{children:(0,u.tZ)(s.Flex,{as:y.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var S=["label"],O=["label"],w=["label"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),l=r[0],s=l.label,d=(0,i.Z)(l,S),c=r[r.length-1],b=c.label,m=(0,i.Z)(c,O),v=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),f=(0,o.useState)(!v.length),g=f[0],y=f[1];return(0,u.BX)(p,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:g,children:[(0,u.tZ)(h,P(P({ref:n},d),{},{children:s})),!g&&v.length?(0,u.tZ)(Z,{onClick:function(){var e;y(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,v.map(function(e,t){var r=e.label,n=(0,i.Z)(e,w);return(0,u.tZ)(h,P(P({},n),{},{children:r}),t)}),(0,u.BX)(h,P(P({},m),{},{children:[b,(0,u.tZ)(a.TX,{children:" (current page)"})]}))]})}},315:function(e,t,r){"use strict";r.d(t,{Fieldset:function(){return b}});var n=r(3255),i=r(7800),o={name:"1bfrawq",styles:"padding:0;margin:0;border:none"},a=function(e){var t=e["aria-describedby"],r=e.children,n=e.id;return(0,i.tZ)("fieldset",{"aria-describedby":t,id:n,css:o,children:r})},l=r(7378),s=r(2474),d=function(e){var t=e.children;return(0,l.isValidElement)(t)?(0,i.tZ)("legend",{children:t}):(0,i.tZ)(s.Text,{as:"legend",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children:t})},u=r(43),c=function(e){var t=e.children,r=e.id;return(0,l.isValidElement)(t)?(0,i.tZ)("div",{id:r,css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),children:t}):(0,i.tZ)(s.Text,{fontSize:"sm",color:"muted",display:"block",css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),id:r,children:t})},p=function(e){var t=e.children;return(0,i.tZ)("div",{css:(0,u.iv)({marginTop:(0,n.mapSpacing)(2)},"",""),children:t})},b=function(e){var t=e.children,r=e.hint,n=e.legend,o=m(e.id),l=o.fieldsetId,s=o.hintId;return(0,i.BX)(a,{id:l,"aria-describedby":r?s:void 0,children:[(0,i.tZ)(d,{children:n}),r?(0,i.tZ)(c,{id:s,children:r}):null,(0,i.tZ)(p,{children:t})]})},m=function(e){var t=(0,n.Me)(e);return{fieldsetId:e||"fieldset-".concat(t),hintId:"fieldset-".concat(t,"-hint")}}},161:function(e,t,r){"use strict";r.d(t,{Select:function(){return m}});var n=r(43),i=r(849),o=r(89),a=r(7378),l=r(1563),s=r(3255),d=r(2341),u=r(7800),c=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m=(0,a.forwardRef)(function(e,t){var r=e.label,n=e.hideOptionalLabel,i=e.required,a=e.hint,s=e.message,d=e.invalid,p=e.block,m=e.maxWidth,y=void 0===m?"md":m,Z=e.options,S=e.placeholder,O=e.id,w=(0,o.Z)(e,c),x=h({block:p,invalid:d});return(0,u.tZ)(l.gN,{label:r,hideOptionalLabel:n,required:!!i,hint:a,message:s,invalid:d,id:O,children:function(e){return(0,u.BX)(v,{block:p,maxWidth:y,children:[(0,u.tZ)("select",b(b(b({ref:t,css:x},e),w),{},{children:(0,u.tZ)(f,{options:Z,placeholder:S})})),(0,u.tZ)(g,{disabled:w.disabled})]})}})}),v=function(e){var t=e.children,r=e.block,i=e.maxWidth;return(0,u.tZ)("div",{css:(0,n.iv)(b({position:"relative"},!r&&{maxWidth:s.tokens.maxWidth.field[i]}),"",""),children:t})},f=function(e){var t=e.options,r=e.placeholder;return(0,u.BX)(a.Fragment,{children:[r?(0,u.tZ)("option",{value:"",children:r}):null,t.map(function(e){return"options"in e?(0,u.tZ)("optgroup",{label:e.label,disabled:e.disabled,children:e.options.map(function(e){var t=e.value,r=e.label,n=e.disabled;return(0,u.tZ)("option",{value:t,disabled:n,children:r},t)})},e.label):(0,u.tZ)("option",{value:e.value,disabled:e.disabled,children:e.label},e.value)})]})},g=function(e){var t=e.disabled;return(0,u.tZ)(d.ChevronDownIcon,{size:"sm",weight:"bold",css:(0,n.iv)({position:"absolute",top:"50%",right:(0,s.mapSpacing)(1),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:s._X.foregroundAction},"","")})},h=function(e){var t=e.block,r=e.invalid;return b(b(b(b(b({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,s.mapSpacing)(1),paddingRight:(0,s.mapSpacing)(3),margin:0,background:s._X.backgroundBody,borderWidth:s.tokens.borderWidth.lg,borderStyle:"solid",borderColor:s._X.border,borderRadius:s.tokens.borderRadius,color:s._X.foregroundText,width:"100%",fontFamily:s.tokens.font.body},s.lB.input.md),{},{lineHeight:s.tokens.lineHeight.default},s.lB.truncate),t&&{maxWidth:"none",display:"block"}),r&&{backgroundColor:s._X.systemErrorMuted,borderColor:s._X.systemError}),{},{"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:s._X.borderMuted,backgroundColor:s._X.backgroundShade,color:s._X.foregroundMuted},"&:focus":s.lB.outline})}},5:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/subcategory/single-page-form",function(){return r(9496)}])}},function(e){e.O(0,[779,376,278,998,689,282,774,888,179],function(){return e(e.s=5)}),_N_E=e.O()}]);