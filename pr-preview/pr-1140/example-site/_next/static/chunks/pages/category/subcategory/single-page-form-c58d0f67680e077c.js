(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{3029:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(7378),i=r(1389),o=r(4239),a=r(3009),l=r(7800),s=function(e){var t=e.pretext,r=e.title,s=e.introduction,d=e.callToAction;return(0,l.BX)(i.Stack,{gap:1.5,children:[(0,l.BX)(i.Stack,{children:[t?(0,l.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,l.tZ)(o.H1,{children:r})]}),s?(0,l.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,d]})}},8453:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n=r(6008),i=r(8119),o=r(89),a=r(849),l=r(1246),s=r(7378),d=r(6677),u=r(8039),c=r(71),b=r(8301),p=r(481),m=r(1386),v=r(5751),f=r(1389),g=r(6843),h=r(6403),y=r(7828),Z=r(4239),S=r(3591),O=r(5833),P=r(1875),x=r(4276),w=r(6710),k=r(2010),A=r(8157),j=r(3009),B=r(8815),E=r(3029),T=r(7800),C=["ref"],q=["ref","value","onChange"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var I=b.hT().transform(function(e,t){return"string"==typeof t?t:e}).typeError("Enter a valid date"),D=b.Ry({abn:b.Z_().required("Enter your ABN"),acn:b.Z_().required("Enter your ACN"),businessName:b.Z_().required("Enter your business name"),registrationDate:I,entityName:b.Z_().required("Enter your entity name"),entityNumber:b.Z_().required("Enter your entity number"),periodActive:b.Ry({from:I.required("Enter a valid date").max(b.iH("to"),"Start date must be before the end date"),to:I.required("Enter a valid date").min(b.iH("from"),"Start date must be before the end date")}).required("Enter a valid date"),streetAddress:b.Z_().required("Enter your street address"),suburbTownCity:b.Z_().required("Enter your suburb, town or city"),state:b.Z_().required("Enter your state"),postcode:b.Z_().required("Enter your postcode"),isPostalAddressSameAsStreetAddress:b.O7(),postalAddress:b.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:b.Z_().required("Enter your postal address")}),postalSuburbTownCity:b.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:b.Z_().required("Enter your suburb, town or city")}),postalState:b.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:b.Z_().required("Enter your state")}),postalPostcode:b.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:b.Z_().required("Enter your postcode")})}).required(),W=function(){var e,t,r,n,i,a,b,x,w,k,j,E,_,I,W,X,H,F,R,z,M,V,L,Q,Y,$,G=(0,d.useRouter)(),J=(0,s.useState)(!1),K=J[0],U=J[1],ee=(0,s.useRef)(null),et=(0,s.useState)(!1),er=et[0],en=et[1],ei=(0,P.useScrollToField)(),eo=(0,u.cI)({defaultValues:{periodActive:{from:void 0,to:void 0}},resolver:(0,c.X)(D)}),ea=eo.register,el=eo.control,es=eo.handleSubmit,ed=eo.watch,eu=eo.trigger,ec=eo.formState,eb=ec.errors,ep=ec.isSubmitted,em=Object.keys(eb).length>1;(0,s.useEffect)(function(){var e;(em||er)&&(null===(e=ee.current)||void 0===e||e.focus(),en(!0))},[er,em]);var ev=ed("isPostalAddressSameAsStreetAddress",!1);(0,s.useEffect)(function(){ep&&eu()},[ev,eu,ep]);var ef=Object.entries(eb).map(function(e){var t,r,n=(0,l.Z)(e,2),i=n[0],o=n[1];return"message"in o?{key:i,message:o.message}:"from"in o?{key:i,message:null===(t=o.from)||void 0===t?void 0:t.message}:"to"in o?{key:i,message:null===(r=o.to)||void 0===r?void 0:r.message}:void 0}).filter(function(e){return Boolean(null==e?void 0:e.message)});return(0,T.tZ)("form",{onSubmit:es(function(e){U(!0),console.log(e),setTimeout(function(){U(!1),G.push("single-page-form-success")},2e3)},function(e,t){console.log(e,t),en(!1)}),noValidate:!0,children:(0,T.BX)(f.Stack,{gap:3,children:[em&&(0,T.tZ)(O.PageAlert,{ref:ee,tabIndex:-1,tone:"error",title:"There is a problem",children:(0,T.BX)(v.Prose,{children:[(0,T.tZ)("p",{children:"Please correct the following fields and try again"}),(0,T.tZ)("ul",{children:ef.map(function(e){return(0,T.tZ)("li",{children:(0,T.tZ)("a",{href:"#".concat(e.key),onClick:ei,children:e.message})},e.key)})})]})}),(0,T.tZ)(g.Fieldset,{legend:(0,T.tZ)(Z.H2,{children:"Business details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,T.BX)(h.FormStack,{children:[(0,T.tZ)(S.TextInput,N(N({label:"Australian Business Number (ABN)"},ea("abn")),{},{id:"abn",invalid:Boolean(null===(e=eb.abn)||void 0===e?void 0:e.message),message:null===(t=eb.abn)||void 0===t?void 0:t.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,T.tZ)(S.TextInput,N(N({label:"Australian Company Number (ACN)"},ea("acn")),{},{id:"acn",invalid:Boolean(null===(r=eb.acn)||void 0===r?void 0:r.message),message:null===(n=eb.acn)||void 0===n?void 0:n.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,T.tZ)(S.TextInput,N(N({label:"Business name"},ea("businessName")),{},{id:"businessName",invalid:Boolean(null===(i=eb.businessName)||void 0===i?void 0:i.message),message:null===(a=eb.businessName)||void 0===a?void 0:a.message,required:!0,maxWidth:"xl"})),(0,T.tZ)(u.Qr,{control:el,name:"registrationDate",render:function(e){var t,r,n=e.field,i=n.ref,a=(0,o.Z)(n,C);return(0,T.tZ)(A.DatePicker,N(N({inputRef:i,label:"Registration date"},a),{},{onInputChange:a.onChange,id:"registrationDate",invalid:Boolean(null===(t=eb.registrationDate)||void 0===t?void 0:t.message),message:null===(r=eb.registrationDate)||void 0===r?void 0:r.message}))}})]})}),(0,T.tZ)(B.$,{}),(0,T.tZ)(g.Fieldset,{legend:(0,T.tZ)(Z.H2,{children:"Provide entity details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,T.BX)(h.FormStack,{children:[(0,T.tZ)(S.TextInput,N(N({label:"Entity name"},ea("entityName")),{},{id:"entityName",invalid:Boolean(null===(b=eb.entityName)||void 0===b?void 0:b.message),message:null===(x=eb.entityName)||void 0===x?void 0:x.message,required:!0})),(0,T.tZ)(S.TextInput,N(N({label:"Entity number"},ea("entityNumber")),{},{id:"entityNumber",invalid:Boolean(null===(w=eb.entityNumber)||void 0===w?void 0:w.message),message:null===(k=eb.entityNumber)||void 0===k?void 0:k.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,T.tZ)(u.Qr,{control:el,name:"periodActive",render:function(e){var t,r,n,i,a,l,s,d,u=e.field,c=u.ref,b=u.value,p=u.onChange,m=(0,o.Z)(u,q);return(0,T.tZ)(A.DateRangePicker,N(N({legend:"Period active",fromInputRef:c},m),{},{id:"periodActive",value:b,onChange:p,onFromInputChange:function(e){return p(N(N({},b),{},{from:e}))},onToInputChange:function(e){return p(N(N({},b),{},{to:e}))},fromInvalid:Boolean(null===(t=eb.periodActive)||void 0===t?void 0:null===(r=t.from)||void 0===r?void 0:r.message),toInvalid:Boolean(null===(n=eb.periodActive)||void 0===n?void 0:null===(i=n.to)||void 0===i?void 0:i.message),message:(null===(a=eb.periodActive)||void 0===a?void 0:null===(l=a.from)||void 0===l?void 0:l.message)||(null===(s=eb.periodActive)||void 0===s?void 0:null===(d=s.to)||void 0===d?void 0:d.message),required:!0}))}})]})}),(0,T.tZ)(g.Fieldset,{legend:(0,T.tZ)(Z.H3,{children:"Street address (H3)"}),children:(0,T.BX)(h.FormStack,{children:[(0,T.tZ)(S.TextInput,N(N({label:"Street address"},ea("streetAddress")),{},{id:"streetAddress",invalid:Boolean(null===(j=eb.streetAddress)||void 0===j?void 0:j.message),message:null===(E=eb.streetAddress)||void 0===E?void 0:E.message,required:!0,maxWidth:"xl"})),(0,T.tZ)(S.TextInput,N(N({label:"Suburb, town or city"},ea("suburbTownCity")),{},{id:"suburbTownCity",invalid:Boolean(null===(_=eb.suburbTownCity)||void 0===_?void 0:_.message),message:null===(I=eb.suburbTownCity)||void 0===I?void 0:I.message,required:!0})),(0,T.tZ)(y.Select,N(N({label:"State or territory"},ea("state")),{},{id:"state",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:Boolean(null===(W=eb.state)||void 0===W?void 0:W.message),message:null===(X=eb.state)||void 0===X?void 0:X.message,required:!0,maxWidth:"md"})),(0,T.tZ)(S.TextInput,N(N({label:"Postcode"},ea("postcode")),{},{id:"postcode",invalid:Boolean(null===(H=eb.postcode)||void 0===H?void 0:H.message),message:null===(F=eb.postcode)||void 0===F?void 0:F.message,maxWidth:"sm",inputMode:"numeric",pattern:"[0-9]*",required:!0}))]})}),(0,T.tZ)(g.Fieldset,{legend:(0,T.tZ)(Z.H3,{children:"Postal address (H3)"}),children:(0,T.BX)(h.FormStack,{children:[(0,T.tZ)(m.Checkbox,N(N({},ea("isPostalAddressSameAsStreetAddress")),{},{id:"isPostalAddressSameAsStreetAddress",children:"Same as street address"})),!ev&&(0,T.BX)(h.FormStack,{children:[(0,T.tZ)(S.TextInput,N(N({label:"Postal address"},ea("postalAddress")),{},{id:"postalAddress",invalid:Boolean(null===(R=eb.postalAddress)||void 0===R?void 0:R.message),message:null===(z=eb.postalAddress)||void 0===z?void 0:z.message,required:!0,maxWidth:"xl"})),(0,T.tZ)(S.TextInput,N(N({label:"Suburb, town or city"},ea("postalSuburbTownCity")),{},{id:"postalSuburbTownCity",invalid:Boolean(null===(M=eb.postalSuburbTownCity)||void 0===M?void 0:M.message),message:null===(V=eb.postalSuburbTownCity)||void 0===V?void 0:V.message,required:!0})),(0,T.tZ)(y.Select,N(N({label:"State or territory"},ea("postalState")),{},{id:"postalState",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:Boolean(null===(L=eb.postalState)||void 0===L?void 0:L.message),message:null===(Q=eb.postalState)||void 0===Q?void 0:Q.message,required:!0,maxWidth:"md"})),(0,T.tZ)(S.TextInput,N(N({label:"Postcode"},ea("postalPostcode")),{},{id:"postalPostcode",invalid:Boolean(null===(Y=eb.postalPostcode)||void 0===Y?void 0:Y.message),message:null===($=eb.postalPostcode)||void 0===$?void 0:$.message,maxWidth:"sm",required:!0,inputMode:"numeric",pattern:"[0-9]*"}))]})]})}),(0,T.tZ)(B.$,{}),(0,T.BX)(p.ButtonGroup,{children:[(0,T.tZ)(p.Button,{type:"submit",loading:K,children:"Submit form"}),(0,T.tZ)(p.Button,{type:"button",variant:"secondary",children:"Cancel"})]})]})})},X=function(){return(0,T.tZ)(x.PageContent,{children:(0,T.tZ)(w.Columns,{children:(0,T.tZ)(w.Column,{columnSpan:{xs:12,md:8},children:(0,T.BX)(f.Stack,{gap:3,children:[(0,T.tZ)(k.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/category",label:"Category 1"},{href:"/category/subcategory",label:"Subcategory page"},{label:"Single-page form"}]}),(0,T.tZ)(E.V,{title:"Single-page form (multi-question) xxl/display (H1)",introduction:"Introductory paragraph providing context for this single page of the multi-step form. All questions on page must be related - md/default (P)"}),(0,T.tZ)(j.Text,{fontSize:"xs",color:"muted",children:"All fields are required unless marked optional."}),(0,T.tZ)(W,{})]})})})})};function H(){return(0,T.BX)(T.HY,{children:[(0,T.tZ)(i.$,{title:"Single-page form example"}),(0,T.tZ)(n.I,{template:{name:"Single-page form",slug:"single-page-form"},children:(0,T.tZ)(X,{})})]})}},2010:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(7666),n()},6843:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2254),n()},7828:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2167),n()},7666:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return k}});var n=r(849),i=r(89),o=r(7378),a=r(9011),l=r(43),s=r(7686),d=r(5885),u=r(7800);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var b=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":i,children:(0,u.tZ)(s.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:r})})},p=r(711),m=r(4299),v={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"},f=function(){return(0,u.tZ)(m.XC,{color:"border",weight:"bold",css:v})};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,u.BX)(s.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(f,{}),i?(0,u.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),y=r(5842);function Z(e){var t=e.onClick;return(0,u.tZ)(h,{children:(0,u.tZ)(s.Flex,{as:y.Yd,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var S=["label"],O=["label"],P=["label"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),l=r[0],s=l.label,d=(0,i.Z)(l,S),c=r[r.length-1],p=c.label,m=(0,i.Z)(c,O),v=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),f=(0,o.useState)(!v.length),g=f[0],y=f[1];return(0,u.BX)(b,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:g,children:[(0,u.tZ)(h,w(w({ref:n},d),{},{children:s})),!g&&v.length?(0,u.tZ)(Z,{onClick:function(){var e;y(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,v.map(function(e,t){var r=e.label,n=(0,i.Z)(e,P);return(0,u.tZ)(h,w(w({},n),{},{children:r}),t)}),(0,u.BX)(h,w(w({},m),{},{children:[p,(0,u.tZ)(a.TX,{children:" (current page)"})]}))]})}},2254:function(e,t,r){"use strict";r.d(t,{Fieldset:function(){return p}});var n=r(5885),i=r(7800),o={name:"1bfrawq",styles:"padding:0;margin:0;border:none"},a=function(e){var t=e["aria-describedby"],r=e.children,n=e.id;return(0,i.tZ)("fieldset",{"aria-describedby":t,id:n,css:o,children:r})},l=r(7378),s=r(3555),d=function(e){var t=e.children;return(0,l.isValidElement)(t)?(0,i.tZ)("legend",{children:t}):(0,i.tZ)(s.Text,{as:"legend",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children:t})},u=r(43),c=function(e){var t=e.children,r=e.id;return(0,l.isValidElement)(t)?(0,i.tZ)("div",{id:r,css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),children:t}):(0,i.tZ)(s.Text,{fontSize:"sm",color:"muted",display:"block",css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),id:r,children:t})},b=function(e){var t=e.children;return(0,i.tZ)("div",{css:(0,u.iv)({marginTop:(0,n.mapSpacing)(2)},"",""),children:t})},p=function(e){var t=e.children,r=e.hint,n=e.legend,o=m(e.id),l=o.fieldsetId,s=o.hintId;return(0,i.BX)(a,{id:l,"aria-describedby":r?s:void 0,children:[(0,i.tZ)(d,{children:n}),r?(0,i.tZ)(c,{id:s,children:r}):null,(0,i.tZ)(b,{children:t})]})},m=function(e){var t=(0,n.Me)(e);return{fieldsetId:e||"fieldset-".concat(t),hintId:"fieldset-".concat(t,"-hint")}}},2167:function(e,t,r){"use strict";r.d(t,{Select:function(){return m}});var n=r(43),i=r(849),o=r(89),a=r(7378),l=r(5),s=r(5885),d=r(4299),u=r(7800),c=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m=(0,a.forwardRef)(function(e,t){var r=e.label,n=e.hideOptionalLabel,i=e.required,a=e.hint,s=e.message,d=e.invalid,b=e.block,m=e.maxWidth,y=void 0===m?"md":m,Z=e.options,S=e.placeholder,O=e.id,P=(0,o.Z)(e,c),x=h({block:b,invalid:d});return(0,u.tZ)(l.gN,{label:r,hideOptionalLabel:n,required:Boolean(i),hint:a,message:s,invalid:d,id:O,children:function(e){return(0,u.BX)(v,{block:b,maxWidth:y,children:[(0,u.tZ)("select",p(p(p({ref:t,css:x},e),P),{},{children:(0,u.tZ)(f,{options:Z,placeholder:S})})),(0,u.tZ)(g,{disabled:P.disabled})]})}})}),v=function(e){var t=e.children,r=e.block,i=e.maxWidth;return(0,u.tZ)("div",{css:(0,n.iv)(p({position:"relative"},!r&&{maxWidth:s.tokens.maxWidth.field[i]}),"",""),children:t})},f=function(e){var t=e.options,r=e.placeholder;return(0,u.BX)(a.Fragment,{children:[r?(0,u.tZ)("option",{value:"",children:r}):null,t.map(function(e){return"options"in e?(0,u.tZ)("optgroup",{label:e.label,disabled:e.disabled,children:e.options.map(function(e){var t=e.value,r=e.label,n=e.disabled;return(0,u.tZ)("option",{value:t,disabled:n,children:r},t)})},e.label):(0,u.tZ)("option",{value:e.value,disabled:e.disabled,children:e.label},e.value)})]})},g=function(e){var t=e.disabled;return(0,u.tZ)(d.v4,{size:"sm",weight:"bold",css:(0,n.iv)({position:"absolute",top:"50%",right:(0,s.mapSpacing)(1),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:s.boxPalette.foregroundAction},"","")})},h=function(e){var t=e.block,r=e.invalid;return p(p(p(p({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,s.mapSpacing)(1),paddingRight:(0,s.mapSpacing)(3),margin:0,background:s.boxPalette.backgroundBody,borderWidth:s.tokens.borderWidth.lg,borderStyle:"solid",borderColor:s.boxPalette.border,borderRadius:s.tokens.borderRadius,color:s.boxPalette.foregroundText,width:"100%",fontFamily:s.tokens.font.body},s.lB.input.md),{},{lineHeight:s.tokens.lineHeight.default},t&&{maxWidth:"none",display:"block"}),r&&{backgroundColor:s.boxPalette.systemErrorMuted,borderColor:s.boxPalette.systemError}),{},{"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:s.boxPalette.borderMuted,backgroundColor:s.boxPalette.backgroundShade,color:s.boxPalette.foregroundMuted},"&:focus":s.lB.outline})}},824:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/subcategory/single-page-form",function(){return r(8453)}])}},function(e){e.O(0,[779,110,5,164,38,745,774,888,179],function(){return e(e.s=824)}),_N_E=e.O()}]);