(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{6002:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(7378),i=r(8607),o=r(3497),a=r(9628),l=r(7800),s=function(e){var t=e.pretext,r=e.title,s=e.introduction,d=e.callToAction;return(0,l.BX)(i.Stack,{gap:1.5,children:[(0,l.BX)(i.Stack,{children:[t?(0,l.tZ)(a.Text,{color:"muted",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,l.tZ)(o.H1,{children:r})]}),s?(0,l.tZ)(a.Text,{as:"p",color:"muted",fontSize:"md",children:s}):null,d]})}},3849:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(89),i=r(7043),o=r(1246),a=r(7378),l=r(6677),s=r(8039),d=r(3647),u=r(8301),c=r(7164),p=r(3096),b=r(9460),m=r(8607),v=r(2808),f=r(3434),g=r(9595),h=r(3497),y=r(460),Z=r(7625),S=r(2644),O=r(2059),x=r(564),w=r(3748),P=r(9263),k=r(2747),A=r(1077),j=r(9628),_=r(3600),E=r(7229),T=r(3040),q=r(6002),C=r(7800),B=["ref"],X=["ref","value","onChange"];function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var I=u.hT().transform(function(e,t){return"string"==typeof t?t:e}).typeError("Enter a valid date"),W=u.Ry({abn:u.Z_().required("Enter your ABN"),acn:u.Z_().required("Enter your ACN"),businessName:u.Z_().required("Enter your business name"),registrationDate:I,entityName:u.Z_().required("Enter your entity name"),entityNumber:u.Z_().required("Enter your entity number"),periodActive:u.Ry({from:I.required("Enter a valid date").max(u.iH("to"),"Start date must be before the end date"),to:I.required("Enter a valid date").min(u.iH("from"),"Start date must be before the end date")}).required("Enter a valid date"),streetAddress:u.Z_().required("Enter your street address"),suburbTownCity:u.Z_().required("Enter your suburb, town or city"),state:u.Z_().required("Enter your state"),postcode:u.Z_().required("Enter your postcode"),isPostalAddressSameAsStreetAddress:u.O7(),postalAddress:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your postal address")}),postalSuburbTownCity:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your suburb, town or city")}),postalState:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your state")}),postalPostcode:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your postcode")})}).required(),H=function(){var e,t,r,i,u,x,w,P,E,T,q,D,I,H,F,R,L,z,M,V,Q,Y,G,U,$,J,K=(0,l.useRouter)(),ee=(0,a.useState)(!1),et=ee[0],er=ee[1],en=(0,a.useRef)(null),ei=(0,a.useState)(!1),eo=ei[0],ea=ei[1],el=(0,O.useScrollToField)(),es=(0,s.cI)({defaultValues:{periodActive:{from:void 0,to:void 0}},resolver:(0,d.X)(W)}),ed=es.register,eu=es.control,ec=es.handleSubmit,ep=es.watch,eb=es.trigger,em=es.formState,ev=em.errors,ef=em.isSubmitted,eg=Object.keys(ev).length>1;(0,a.useEffect)(function(){var e;(eg||eo)&&(null===(e=en.current)||void 0===e||e.focus(),ea(!0))},[eo,eg]);var eh=ep("isPostalAddressSameAsStreetAddress",!1);(0,a.useEffect)(function(){ef&&eb()},[eh,eb,ef]);var ey=Object.entries(ev).map(function(e){var t,r,n=(0,o.Z)(e,2),i=n[0],a=n[1];return"message"in a?{key:i,message:a.message}:"from"in a?{key:i,message:null===(t=a.from)||void 0===t?void 0:t.message}:"to"in a?{key:i,message:null===(r=a.to)||void 0===r?void 0:r.message}:void 0}).filter(function(e){return!!(null==e?void 0:e.message)});return(0,C.tZ)("form",{noValidate:!0,onSubmit:ec(function(e){er(!0),console.log(e),setTimeout(function(){er(!1),K.push("single-page-form-success")},2e3)},function(e,t){console.log(e,t),ea(!1)}),children:(0,C.BX)(m.Stack,{gap:3,children:[eg&&(0,C.BX)(S.PageAlert,{ref:en,tabIndex:-1,title:"There is a problem",tone:"error",children:[(0,C.tZ)(j.Text,{as:"p",children:"Please correct the following fields and try again"}),(0,C.tZ)(b.UnorderedList,{children:ey.map(function(e){return(0,C.tZ)(b.ListItem,{children:(0,C.tZ)(Z.TextLink,{href:"#".concat(e.key),onClick:el,children:e.message})},e.key)})})]}),(0,C.tZ)(v.Fieldset,{hint:"Supporting information for provide details subheading - sm/default",legend:(0,C.tZ)(h.H2,{children:"Business details (H2)"}),children:(0,C.BX)(f.FormStack,{children:[(0,C.tZ)(y.TextInput,N(N({},ed("abn")),{},{id:"abn",inputMode:"numeric",invalid:!!(null===(e=ev.abn)||void 0===e?void 0:e.message),label:"Australian Business Number (ABN)",message:null===(t=ev.abn)||void 0===t?void 0:t.message,pattern:"[0-9]*",required:!0})),(0,C.tZ)(y.TextInput,N(N({},ed("acn")),{},{id:"acn",inputMode:"numeric",invalid:!!(null===(r=ev.acn)||void 0===r?void 0:r.message),label:"Australian Company Number (ACN)",message:null===(i=ev.acn)||void 0===i?void 0:i.message,pattern:"[0-9]*",required:!0})),(0,C.tZ)(y.TextInput,N(N({},ed("businessName")),{},{id:"businessName",invalid:!!(null===(u=ev.businessName)||void 0===u?void 0:u.message),label:"Business name",maxWidth:"xl",message:null===(x=ev.businessName)||void 0===x?void 0:x.message,required:!0})),(0,C.tZ)(s.Qr,{control:eu,name:"registrationDate",render:function(e){var t,r,i=e.field,o=i.ref,a=(0,n.Z)(i,B);return(0,C.tZ)(k.DatePicker,N(N({},a),{},{id:"registrationDate",inputRef:o,invalid:!!(null===(t=ev.registrationDate)||void 0===t?void 0:t.message),label:"Registration date",message:null===(r=ev.registrationDate)||void 0===r?void 0:r.message}))}})]})}),(0,C.tZ)(_.Divider,{}),(0,C.tZ)(v.Fieldset,{hint:"Supporting information for provide details subheading - sm/default",legend:(0,C.tZ)(h.H2,{children:"Provide entity details (H2)"}),children:(0,C.BX)(f.FormStack,{children:[(0,C.tZ)(y.TextInput,N(N({},ed("entityName")),{},{id:"entityName",invalid:!!(null===(w=ev.entityName)||void 0===w?void 0:w.message),label:"Entity name",message:null===(P=ev.entityName)||void 0===P?void 0:P.message,required:!0})),(0,C.tZ)(y.TextInput,N(N({},ed("entityNumber")),{},{id:"entityNumber",inputMode:"numeric",invalid:!!(null===(E=ev.entityNumber)||void 0===E?void 0:E.message),label:"Entity number",message:null===(T=ev.entityNumber)||void 0===T?void 0:T.message,pattern:"[0-9]*",required:!0})),(0,C.tZ)(s.Qr,{control:eu,name:"periodActive",render:function(e){var t,r,i,o,a=e.field,l=a.ref,s=a.value,d=a.onChange,u=(0,n.Z)(a,X);return(0,C.tZ)(A.DateRangePicker,N(N({},u),{},{fromInputRef:l,fromInvalid:!!(null===(t=ev.periodActive)||void 0===t||null===(t=t.from)||void 0===t?void 0:t.message),id:"periodActive",legend:"Period active",message:(null===(r=ev.periodActive)||void 0===r||null===(r=r.from)||void 0===r?void 0:r.message)||(null===(i=ev.periodActive)||void 0===i||null===(i=i.to)||void 0===i?void 0:i.message),onChange:d,required:!0,toInvalid:!!(null===(o=ev.periodActive)||void 0===o||null===(o=o.to)||void 0===o?void 0:o.message),value:s}))}})]})}),(0,C.tZ)(v.Fieldset,{legend:(0,C.tZ)(h.H3,{children:"Street address (H3)"}),children:(0,C.BX)(f.FormStack,{children:[(0,C.tZ)(y.TextInput,N(N({},ed("streetAddress")),{},{id:"streetAddress",invalid:!!(null===(q=ev.streetAddress)||void 0===q?void 0:q.message),label:"Street address",maxWidth:"xl",message:null===(D=ev.streetAddress)||void 0===D?void 0:D.message,required:!0})),(0,C.tZ)(y.TextInput,N(N({},ed("suburbTownCity")),{},{id:"suburbTownCity",invalid:!!(null===(I=ev.suburbTownCity)||void 0===I?void 0:I.message),label:"Suburb, town or city",message:null===(H=ev.suburbTownCity)||void 0===H?void 0:H.message,required:!0})),(0,C.tZ)(g.Select,N(N({},ed("state")),{},{id:"state",invalid:!!(null===(F=ev.state)||void 0===F?void 0:F.message),label:"State or territory",maxWidth:"md",message:null===(R=ev.state)||void 0===R?void 0:R.message,options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],placeholder:"Select",required:!0})),(0,C.tZ)(y.TextInput,N(N({},ed("postcode")),{},{id:"postcode",inputMode:"numeric",invalid:!!(null===(L=ev.postcode)||void 0===L?void 0:L.message),label:"Postcode",maxWidth:"sm",message:null===(z=ev.postcode)||void 0===z?void 0:z.message,pattern:"[0-9]*",required:!0}))]})}),(0,C.tZ)(v.Fieldset,{legend:(0,C.tZ)(h.H3,{children:"Postal address (H3)"}),children:(0,C.BX)(f.FormStack,{children:[(0,C.tZ)(p.Checkbox,N(N({},ed("isPostalAddressSameAsStreetAddress")),{},{id:"isPostalAddressSameAsStreetAddress",children:"Same as street address"})),!eh&&(0,C.BX)(f.FormStack,{children:[(0,C.tZ)(y.TextInput,N(N({},ed("postalAddress")),{},{id:"postalAddress",invalid:!!(null===(M=ev.postalAddress)||void 0===M?void 0:M.message),label:"Postal address",maxWidth:"xl",message:null===(V=ev.postalAddress)||void 0===V?void 0:V.message,required:!0})),(0,C.tZ)(y.TextInput,N(N({},ed("postalSuburbTownCity")),{},{id:"postalSuburbTownCity",invalid:!!(null===(Q=ev.postalSuburbTownCity)||void 0===Q?void 0:Q.message),label:"Suburb, town or city",message:null===(Y=ev.postalSuburbTownCity)||void 0===Y?void 0:Y.message,required:!0})),(0,C.tZ)(g.Select,N(N({},ed("postalState")),{},{id:"postalState",invalid:!!(null===(G=ev.postalState)||void 0===G?void 0:G.message),label:"State or territory",maxWidth:"md",message:null===(U=ev.postalState)||void 0===U?void 0:U.message,options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],placeholder:"Select",required:!0})),(0,C.tZ)(y.TextInput,N(N({},ed("postalPostcode")),{},{id:"postalPostcode",inputMode:"numeric",invalid:!!(null===($=ev.postalPostcode)||void 0===$?void 0:$.message),label:"Postcode",maxWidth:"sm",message:null===(J=ev.postalPostcode)||void 0===J?void 0:J.message,pattern:"[0-9]*",required:!0}))]})]})}),(0,C.tZ)(_.Divider,{}),(0,C.BX)(c.ButtonGroup,{children:[(0,C.tZ)(c.Button,{loading:et,type:"submit",children:"Submit form"}),(0,C.tZ)(c.Button,{type:"button",variant:"secondary",children:"Cancel"})]})]})})};function F(){return(0,C.BX)(C.HY,{children:[(0,C.tZ)(T.$,{title:"Single-page form example"}),(0,C.tZ)(E.I,{template:{name:"Single-page form",slug:"single-page-form"},children:(0,C.tZ)(x.PageContent,{children:(0,C.tZ)(w.Columns,{children:(0,C.tZ)(w.Column,{columnSpan:{xs:12,md:8},children:(0,C.BX)(m.Stack,{gap:3,children:[(0,C.tZ)(P.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/category",label:"Category 1"},{href:"/category/subcategory",label:"Subcategory page"},{label:"Single-page form"}]}),(0,C.tZ)(q.V,{introduction:"Introductory paragraph providing context for this single page of the multi-step form. All questions on page must be related - md/default (P)",title:"Single-page form (multi-question) xxl/display (H1)"}),(0,C.tZ)(j.Text,{color:"muted",fontSize:"xs",children:"All fields are required unless marked optional."}),(0,C.tZ)(H,{})]})})})})})]})}},9263:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(9065),n()},1077:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(1930),n()},2808:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(1894),n()},9595:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(3087),n()},9065:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return k}});var n=r(7043),i=r(89),o=r(7378),a=r(4456),l=r(43),s=r(9631),d=r(8464),u=r(7800);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var p=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":i,children:(0,u.tZ)(s.Flex,{alignItems:"center",as:"ol",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),flexWrap:"wrap",gap:.5,children:r})})},b=r(7797),m=r(8499),v={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},f=function(){return(0,u.tZ)(m.XC,{color:"border",css:v,size:"sm"})};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,u.BX)(s.Flex,{alignItems:"center",as:"li",color:"text",fontSize:"sm",gap:.5,children:[(0,u.tZ)(f,{}),i?(0,u.tZ)(b.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),y=r(8229);function Z(e){var t=e.onClick;return(0,u.tZ)(h,{children:(0,u.tZ)(s.Flex,{alignItems:"center","aria-expanded":"false","aria-label":"Show all breadcrumbs",as:y.Yd,focusRingFor:"keyboard",fontSize:"sm",justifyContent:"center",link:!0,onClick:t,children:"…"})})}var S=["label"],O=["label"],x=["label"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),l=r[0],s=l.label,d=(0,i.Z)(l,S),c=r[r.length-1],b=c.label,m=(0,i.Z)(c,O),v=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),f=(0,o.useState)(!v.length),g=f[0],y=f[1];return(0,u.BX)(p,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:g,children:[(0,u.tZ)(h,P(P({ref:n},d),{},{children:s})),!g&&v.length?(0,u.tZ)(Z,{onClick:function(){var e;y(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,v.map(function(e,t){var r=e.label,n=(0,i.Z)(e,x);return(0,u.tZ)(h,P(P({},n),{},{children:r}),t)}),(0,u.BX)(h,P(P({},m),{},{children:[b,(0,u.tZ)(a.TX,{children:" (current page)"})]}))]})}},1894:function(e,t,r){"use strict";r.d(t,{Fieldset:function(){return b}});var n=r(8464),i=r(8050),o=r(7800),a=function(e){var t=e["aria-describedby"],r=e.children,n=e.id;return(0,o.tZ)(i.Box,{"aria-describedby":t,as:"fieldset",id:n,children:r})},l=r(7378),s=r(2288),d=function(e){var t=e.children;return(0,l.isValidElement)(t)?(0,o.tZ)("legend",{children:t}):(0,o.tZ)(s.Text,{as:"legend",fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children:t})},u=r(43),c=function(e){var t=e.children,r=e.id;return(0,l.isValidElement)(t)?(0,o.tZ)("div",{css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),id:r,children:t}):(0,o.tZ)(s.Text,{color:"muted",css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),display:"block",fontSize:"sm",id:r,children:t})},p=function(e){var t=e.children;return(0,o.tZ)("div",{css:(0,u.iv)({marginTop:(0,n.mapSpacing)(2)},"",""),children:t})},b=function(e){var t=e.children,r=e.hint,n=e.legend,i=m(e.id),l=i.fieldsetId,s=i.hintId;return(0,o.BX)(a,{"aria-describedby":r?s:void 0,id:l,children:[(0,o.tZ)(d,{children:n}),r?(0,o.tZ)(c,{id:s,children:r}):null,(0,o.tZ)(p,{children:t})]})},m=function(e){var t=(0,n.Me)(e);return{fieldsetId:e||"fieldset-".concat(t),hintId:"fieldset-".concat(t,"-hint")}}},3087:function(e,t,r){"use strict";r.d(t,{Select:function(){return m}});var n=r(43),i=r(7043),o=r(89),a=r(7378),l=r(3306),s=r(8464),d=r(8499),u=r(7800),c=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m=(0,a.forwardRef)(function(e,t){var r=e.label,n=e.hideOptionalLabel,i=e.required,a=e.hint,s=e.message,d=e.invalid,p=e.block,m=e.maxWidth,y=void 0===m?"md":m,Z=e.options,S=e.placeholder,O=e.id,x=(0,o.Z)(e,c),w=h({block:p});return(0,u.tZ)(l.gN,{hideOptionalLabel:n,hint:a,id:O,invalid:d,label:r,maxWidth:y,message:s,required:i,children:function(e){return(0,u.BX)(v,{block:p,maxWidth:y,children:[(0,u.tZ)("select",b(b(b({css:w,ref:t},e),x),{},{children:(0,u.tZ)(f,{options:Z,placeholder:S})})),(0,u.tZ)(g,{disabled:x.disabled})]})}})}),v=function(e){var t=e.children,r=e.block,i=e.maxWidth;return(0,u.tZ)("div",{css:(0,n.iv)(b({position:"relative"},!r&&{maxWidth:s.tokens.maxWidth.field[i]}),"",""),children:t})},f=function(e){var t=e.options,r=e.placeholder;return(0,u.BX)(a.Fragment,{children:[r?(0,u.tZ)("option",{value:"",children:r}):null,t.map(function(e){return"options"in e?(0,u.tZ)("optgroup",{disabled:e.disabled,label:e.label,children:e.options.map(function(e){var t=e.value,r=e.label,n=e.disabled;return(0,u.tZ)("option",{disabled:n,value:t,children:r},t)})},e.label):(0,u.tZ)("option",{disabled:e.disabled,value:e.value,children:e.label},e.value)})]})},g=function(e){var t=e.disabled;return(0,u.tZ)(d.v4,{css:(0,n.iv)({position:"absolute",top:"50%",right:(0,s.mapSpacing)(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:s._X.foregroundAction},"","")})},h=function(e){var t=e.block;return b(b(b(b({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,s.mapSpacing)(1),paddingRight:"calc(".concat(s.tokens.borderWidth.lg,"px + 2.5rem)"),margin:0,background:s._X.backgroundBody,borderWidth:s.tokens.borderWidth.lg,borderStyle:"solid",borderColor:s._X.border,borderRadius:s.tokens.borderRadius,color:s._X.foregroundText,width:"100%",fontFamily:s.tokens.font.body},s.lB.input.md),{},{lineHeight:s.tokens.lineHeight.default},s.lB.truncate),t&&{maxWidth:"none",display:"block"}),{},{'&[aria-invalid="true"]':{backgroundColor:s._X.systemErrorMuted,borderColor:s._X.systemError},"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:s._X.borderMuted,backgroundColor:s._X.backgroundShade,color:s._X.foregroundMuted},"&:focus":s.lB.outline})}},5:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/subcategory/single-page-form",function(){return r(3849)}])}},function(e){e.O(0,[569,376,147,225,12,126,614,888,774,179],function(){return e(e.s=5)}),_N_E=e.O()}]);