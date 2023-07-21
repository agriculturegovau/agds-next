(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{3029:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(7378),i=r(9525),o=r(4239),a=r(3009),l=r(7800),s=function(e){var t=e.pretext,r=e.title,s=e.introduction,d=e.callToAction;return(0,l.BX)(i.Stack,{gap:1.5,children:[(0,l.BX)(i.Stack,{children:[t?(0,l.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,l.tZ)(o.H1,{children:r})]}),s?(0,l.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,d]})}},610:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n=r(89),i=r(849),o=r(1246),a=r(7378),l=r(6677),s=r(8039),d=r(71),u=r(8301),c=r(481),p=r(8404),b=r(5751),m=r(9525),v=r(6843),f=r(6403),g=r(7828),h=r(4239),y=r(3591),Z=r(5833),S=r(1875),O=r(4276),w=r(6710),P=r(2010),x=r(8157),k=r(7921),A=r(3009),j=r(508),_=r(936),B=r(8119),E=r(3029),T=r(7800),C=["ref"],q=["ref","value","onChange"];function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var N=u.hT().transform(function(e,t){return"string"==typeof t?t:e}).typeError("Enter a valid date"),I=u.Ry({abn:u.Z_().required("Enter your ABN"),acn:u.Z_().required("Enter your ACN"),businessName:u.Z_().required("Enter your business name"),registrationDate:N,entityName:u.Z_().required("Enter your entity name"),entityNumber:u.Z_().required("Enter your entity number"),periodActive:u.Ry({from:N.required("Enter a valid date").max(u.iH("to"),"Start date must be before the end date"),to:N.required("Enter a valid date").min(u.iH("from"),"Start date must be before the end date")}).required("Enter a valid date"),streetAddress:u.Z_().required("Enter your street address"),suburbTownCity:u.Z_().required("Enter your suburb, town or city"),state:u.Z_().required("Enter your state"),postcode:u.Z_().required("Enter your postcode"),isPostalAddressSameAsStreetAddress:u.O7(),postalAddress:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your postal address")}),postalSuburbTownCity:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your suburb, town or city")}),postalState:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your state")}),postalPostcode:u.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:u.Z_().required("Enter your postcode")})}).required(),W=function(){var e,t,r,i,u,O,w,P,A,_,B,E,X,N,W,H,F,R,z,M,V,L,Q,Y,G,$,J=(0,l.useRouter)(),K=(0,a.useState)(!1),U=K[0],ee=K[1],et=(0,a.useRef)(null),er=(0,a.useState)(!1),en=er[0],ei=er[1],eo=(0,S.useScrollToField)(),ea=(0,s.cI)({defaultValues:{periodActive:{from:void 0,to:void 0}},resolver:(0,d.X)(I)}),el=ea.register,es=ea.control,ed=ea.handleSubmit,eu=ea.watch,ec=ea.trigger,ep=ea.formState,eb=ep.errors,em=ep.isSubmitted,ev=Object.keys(eb).length>1;(0,a.useEffect)(function(){var e;(ev||en)&&(null===(e=et.current)||void 0===e||e.focus(),ei(!0))},[en,ev]);var ef=eu("isPostalAddressSameAsStreetAddress",!1);(0,a.useEffect)(function(){em&&ec()},[ef,ec,em]);var eg=Object.entries(eb).map(function(e){var t,r,n=(0,o.Z)(e,2),i=n[0],a=n[1];return"message"in a?{key:i,message:a.message}:"from"in a?{key:i,message:null===(t=a.from)||void 0===t?void 0:t.message}:"to"in a?{key:i,message:null===(r=a.to)||void 0===r?void 0:r.message}:void 0}).filter(function(e){return Boolean(null==e?void 0:e.message)});return(0,T.tZ)("form",{onSubmit:ed(function(e){ee(!0),console.log(e),setTimeout(function(){ee(!1),J.push("single-page-form-success")},2e3)},function(e,t){console.log(e,t),ei(!1)}),noValidate:!0,children:(0,T.BX)(m.Stack,{gap:3,children:[ev&&(0,T.tZ)(Z.PageAlert,{ref:et,tabIndex:-1,tone:"error",title:"There is a problem",children:(0,T.BX)(b.Prose,{children:[(0,T.tZ)("p",{children:"Please correct the following fields and try again"}),(0,T.tZ)("ul",{children:eg.map(function(e){return(0,T.tZ)("li",{children:(0,T.tZ)("a",{href:"#".concat(e.key),onClick:eo,children:e.message})},e.key)})})]})}),(0,T.tZ)(v.Fieldset,{legend:(0,T.tZ)(h.H2,{children:"Business details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,T.BX)(f.FormStack,{children:[(0,T.tZ)(y.TextInput,D(D({label:"Australian Business Number (ABN)"},el("abn")),{},{id:"abn",invalid:Boolean(null===(e=eb.abn)||void 0===e?void 0:e.message),message:null===(t=eb.abn)||void 0===t?void 0:t.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,T.tZ)(y.TextInput,D(D({label:"Australian Company Number (ACN)"},el("acn")),{},{id:"acn",invalid:Boolean(null===(r=eb.acn)||void 0===r?void 0:r.message),message:null===(i=eb.acn)||void 0===i?void 0:i.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,T.tZ)(y.TextInput,D(D({label:"Business name"},el("businessName")),{},{id:"businessName",invalid:Boolean(null===(u=eb.businessName)||void 0===u?void 0:u.message),message:null===(O=eb.businessName)||void 0===O?void 0:O.message,required:!0,maxWidth:"xl"})),(0,T.tZ)(s.Qr,{control:es,name:"registrationDate",render:function(e){var t,r,i=e.field,o=i.ref,a=(0,n.Z)(i,C);return(0,T.tZ)(x.DatePicker,D(D({inputRef:o,label:"Registration date"},a),{},{onInputChange:a.onChange,id:"registrationDate",invalid:Boolean(null===(t=eb.registrationDate)||void 0===t?void 0:t.message),message:null===(r=eb.registrationDate)||void 0===r?void 0:r.message}))}})]})}),(0,T.tZ)(j.Divider,{}),(0,T.tZ)(v.Fieldset,{legend:(0,T.tZ)(h.H2,{children:"Provide entity details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,T.BX)(f.FormStack,{children:[(0,T.tZ)(y.TextInput,D(D({label:"Entity name"},el("entityName")),{},{id:"entityName",invalid:Boolean(null===(w=eb.entityName)||void 0===w?void 0:w.message),message:null===(P=eb.entityName)||void 0===P?void 0:P.message,required:!0})),(0,T.tZ)(y.TextInput,D(D({label:"Entity number"},el("entityNumber")),{},{id:"entityNumber",invalid:Boolean(null===(A=eb.entityNumber)||void 0===A?void 0:A.message),message:null===(_=eb.entityNumber)||void 0===_?void 0:_.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,T.tZ)(s.Qr,{control:es,name:"periodActive",render:function(e){var t,r,i,o,a,l,s,d,u=e.field,c=u.ref,p=u.value,b=u.onChange,m=(0,n.Z)(u,q);return(0,T.tZ)(k.DateRangePicker,D(D({legend:"Period active",fromInputRef:c},m),{},{id:"periodActive",value:p,onChange:b,onFromInputChange:function(e){return b(D(D({},p),{},{from:e}))},onToInputChange:function(e){return b(D(D({},p),{},{to:e}))},fromInvalid:Boolean(null===(t=eb.periodActive)||void 0===t?void 0:null===(r=t.from)||void 0===r?void 0:r.message),toInvalid:Boolean(null===(i=eb.periodActive)||void 0===i?void 0:null===(o=i.to)||void 0===o?void 0:o.message),message:(null===(a=eb.periodActive)||void 0===a?void 0:null===(l=a.from)||void 0===l?void 0:l.message)||(null===(s=eb.periodActive)||void 0===s?void 0:null===(d=s.to)||void 0===d?void 0:d.message),required:!0}))}})]})}),(0,T.tZ)(v.Fieldset,{legend:(0,T.tZ)(h.H3,{children:"Street address (H3)"}),children:(0,T.BX)(f.FormStack,{children:[(0,T.tZ)(y.TextInput,D(D({label:"Street address"},el("streetAddress")),{},{id:"streetAddress",invalid:Boolean(null===(B=eb.streetAddress)||void 0===B?void 0:B.message),message:null===(E=eb.streetAddress)||void 0===E?void 0:E.message,required:!0,maxWidth:"xl"})),(0,T.tZ)(y.TextInput,D(D({label:"Suburb, town or city"},el("suburbTownCity")),{},{id:"suburbTownCity",invalid:Boolean(null===(X=eb.suburbTownCity)||void 0===X?void 0:X.message),message:null===(N=eb.suburbTownCity)||void 0===N?void 0:N.message,required:!0})),(0,T.tZ)(g.Select,D(D({label:"State or territory"},el("state")),{},{id:"state",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:Boolean(null===(W=eb.state)||void 0===W?void 0:W.message),message:null===(H=eb.state)||void 0===H?void 0:H.message,required:!0,maxWidth:"md"})),(0,T.tZ)(y.TextInput,D(D({label:"Postcode"},el("postcode")),{},{id:"postcode",invalid:Boolean(null===(F=eb.postcode)||void 0===F?void 0:F.message),message:null===(R=eb.postcode)||void 0===R?void 0:R.message,maxWidth:"sm",inputMode:"numeric",pattern:"[0-9]*",required:!0}))]})}),(0,T.tZ)(v.Fieldset,{legend:(0,T.tZ)(h.H3,{children:"Postal address (H3)"}),children:(0,T.BX)(f.FormStack,{children:[(0,T.tZ)(p.Checkbox,D(D({},el("isPostalAddressSameAsStreetAddress")),{},{id:"isPostalAddressSameAsStreetAddress",children:"Same as street address"})),!ef&&(0,T.BX)(f.FormStack,{children:[(0,T.tZ)(y.TextInput,D(D({label:"Postal address"},el("postalAddress")),{},{id:"postalAddress",invalid:Boolean(null===(z=eb.postalAddress)||void 0===z?void 0:z.message),message:null===(M=eb.postalAddress)||void 0===M?void 0:M.message,required:!0,maxWidth:"xl"})),(0,T.tZ)(y.TextInput,D(D({label:"Suburb, town or city"},el("postalSuburbTownCity")),{},{id:"postalSuburbTownCity",invalid:Boolean(null===(V=eb.postalSuburbTownCity)||void 0===V?void 0:V.message),message:null===(L=eb.postalSuburbTownCity)||void 0===L?void 0:L.message,required:!0})),(0,T.tZ)(g.Select,D(D({label:"State or territory"},el("postalState")),{},{id:"postalState",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:Boolean(null===(Q=eb.postalState)||void 0===Q?void 0:Q.message),message:null===(Y=eb.postalState)||void 0===Y?void 0:Y.message,required:!0,maxWidth:"md"})),(0,T.tZ)(y.TextInput,D(D({label:"Postcode"},el("postalPostcode")),{},{id:"postalPostcode",invalid:Boolean(null===(G=eb.postalPostcode)||void 0===G?void 0:G.message),message:null===($=eb.postalPostcode)||void 0===$?void 0:$.message,maxWidth:"sm",required:!0,inputMode:"numeric",pattern:"[0-9]*"}))]})]})}),(0,T.tZ)(j.Divider,{}),(0,T.BX)(c.ButtonGroup,{children:[(0,T.tZ)(c.Button,{type:"submit",loading:U,children:"Submit form"}),(0,T.tZ)(c.Button,{type:"button",variant:"secondary",children:"Cancel"})]})]})})};function H(){return(0,T.BX)(T.HY,{children:[(0,T.tZ)(B.$,{title:"Single-page form example"}),(0,T.tZ)(_.I,{template:{name:"Single-page form",slug:"single-page-form"},children:(0,T.tZ)(O.PageContent,{children:(0,T.tZ)(w.Columns,{children:(0,T.tZ)(w.Column,{columnSpan:{xs:12,md:8},children:(0,T.BX)(m.Stack,{gap:3,children:[(0,T.tZ)(P.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/category",label:"Category 1"},{href:"/category/subcategory",label:"Subcategory page"},{label:"Single-page form"}]}),(0,T.tZ)(E.V,{title:"Single-page form (multi-question) xxl/display (H1)",introduction:"Introductory paragraph providing context for this single page of the multi-step form. All questions on page must be related - md/default (P)"}),(0,T.tZ)(A.Text,{fontSize:"xs",color:"muted",children:"All fields are required unless marked optional."}),(0,T.tZ)(W,{})]})})})})})]})}},2010:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(7666),n()},7921:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(3814),n()},6843:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2254),n()},7828:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2167),n()},7666:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return k}});var n=r(849),i=r(89),o=r(7378),a=r(9011),l=r(43),s=r(9138),d=r(7153),u=r(7800);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var p=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":i,children:(0,u.tZ)(s.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:r})})},b=r(711),m=r(2146),v={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"},f=function(){return(0,u.tZ)(m.XC,{color:"border",weight:"bold",css:v})};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,u.BX)(s.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(f,{}),i?(0,u.tZ)(b.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),y=r(5842);function Z(e){var t=e.onClick;return(0,u.tZ)(h,{children:(0,u.tZ)(s.Flex,{as:y.Yd,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var S=["label"],O=["label"],w=["label"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),l=r[0],s=l.label,d=(0,i.Z)(l,S),c=r[r.length-1],b=c.label,m=(0,i.Z)(c,O),v=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),f=(0,o.useState)(!v.length),g=f[0],y=f[1];return(0,u.BX)(p,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:g,children:[(0,u.tZ)(h,x(x({ref:n},d),{},{children:s})),!g&&v.length?(0,u.tZ)(Z,{onClick:function(){var e;y(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,v.map(function(e,t){var r=e.label,n=(0,i.Z)(e,w);return(0,u.tZ)(h,x(x({},n),{},{children:r}),t)}),(0,u.BX)(h,x(x({},m),{},{children:[b,(0,u.tZ)(a.TX,{children:" (current page)"})]}))]})}},2254:function(e,t,r){"use strict";r.d(t,{Fieldset:function(){return b}});var n=r(7153),i=r(7800),o={name:"1bfrawq",styles:"padding:0;margin:0;border:none"},a=function(e){var t=e["aria-describedby"],r=e.children,n=e.id;return(0,i.tZ)("fieldset",{"aria-describedby":t,id:n,css:o,children:r})},l=r(7378),s=r(3555),d=function(e){var t=e.children;return(0,l.isValidElement)(t)?(0,i.tZ)("legend",{children:t}):(0,i.tZ)(s.Text,{as:"legend",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children:t})},u=r(43),c=function(e){var t=e.children,r=e.id;return(0,l.isValidElement)(t)?(0,i.tZ)("div",{id:r,css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),children:t}):(0,i.tZ)(s.Text,{fontSize:"sm",color:"muted",display:"block",css:(0,u.iv)({marginTop:(0,n.mapSpacing)(.75)},"",""),id:r,children:t})},p=function(e){var t=e.children;return(0,i.tZ)("div",{css:(0,u.iv)({marginTop:(0,n.mapSpacing)(2)},"",""),children:t})},b=function(e){var t=e.children,r=e.hint,n=e.legend,o=m(e.id),l=o.fieldsetId,s=o.hintId;return(0,i.BX)(a,{id:l,"aria-describedby":r?s:void 0,children:[(0,i.tZ)(d,{children:n}),r?(0,i.tZ)(c,{id:s,children:r}):null,(0,i.tZ)(p,{children:t})]})},m=function(e){var t=(0,n.Me)(e);return{fieldsetId:e||"fieldset-".concat(t),hintId:"fieldset-".concat(t,"-hint")}}},2167:function(e,t,r){"use strict";r.d(t,{Select:function(){return m}});var n=r(43),i=r(849),o=r(89),a=r(7378),l=r(5),s=r(7153),d=r(2146),u=r(7800),c=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m=(0,a.forwardRef)(function(e,t){var r=e.label,n=e.hideOptionalLabel,i=e.required,a=e.hint,s=e.message,d=e.invalid,p=e.block,m=e.maxWidth,y=void 0===m?"md":m,Z=e.options,S=e.placeholder,O=e.id,w=(0,o.Z)(e,c),P=h({block:p,invalid:d});return(0,u.tZ)(l.gN,{label:r,hideOptionalLabel:n,required:Boolean(i),hint:a,message:s,invalid:d,id:O,children:function(e){return(0,u.BX)(v,{block:p,maxWidth:y,children:[(0,u.tZ)("select",b(b(b({ref:t,css:P},e),w),{},{children:(0,u.tZ)(f,{options:Z,placeholder:S})})),(0,u.tZ)(g,{disabled:w.disabled})]})}})}),v=function(e){var t=e.children,r=e.block,i=e.maxWidth;return(0,u.tZ)("div",{css:(0,n.iv)(b({position:"relative"},!r&&{maxWidth:s.tokens.maxWidth.field[i]}),"",""),children:t})},f=function(e){var t=e.options,r=e.placeholder;return(0,u.BX)(a.Fragment,{children:[r?(0,u.tZ)("option",{value:"",children:r}):null,t.map(function(e){return"options"in e?(0,u.tZ)("optgroup",{label:e.label,disabled:e.disabled,children:e.options.map(function(e){var t=e.value,r=e.label,n=e.disabled;return(0,u.tZ)("option",{value:t,disabled:n,children:r},t)})},e.label):(0,u.tZ)("option",{value:e.value,disabled:e.disabled,children:e.label},e.value)})]})},g=function(e){var t=e.disabled;return(0,u.tZ)(d.v4,{size:"sm",weight:"bold",css:(0,n.iv)({position:"absolute",top:"50%",right:(0,s.mapSpacing)(1),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:s._X.foregroundAction},"","")})},h=function(e){var t=e.block,r=e.invalid;return b(b(b(b({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,s.mapSpacing)(1),paddingRight:(0,s.mapSpacing)(3),margin:0,background:s._X.backgroundBody,borderWidth:s.tokens.borderWidth.lg,borderStyle:"solid",borderColor:s._X.border,borderRadius:s.tokens.borderRadius,color:s._X.foregroundText,width:"100%",fontFamily:s.tokens.font.body},s.lB.input.md),{},{lineHeight:s.tokens.lineHeight.default},t&&{maxWidth:"none",display:"block"}),r&&{backgroundColor:s._X.systemErrorMuted,borderColor:s._X.systemError}),{},{"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:s._X.borderMuted,backgroundColor:s._X.backgroundShade,color:s._X.foregroundMuted},"&:focus":s.lB.outline})}},824:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/subcategory/single-page-form",function(){return r(610)}])}},function(e){e.O(0,[779,110,278,624,751,24,193,774,888,179],function(){return e(e.s=824)}),_N_E=e.O()}]);