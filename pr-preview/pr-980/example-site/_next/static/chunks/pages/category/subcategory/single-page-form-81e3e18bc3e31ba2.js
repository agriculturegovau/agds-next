(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{8815:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});var n=r(43),i=r(4144),o=r(7800),l=function(){return(0,o.tZ)("hr",{"aria-hidden":"true",css:(0,n.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:i.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:i.boxPalette.borderMuted,width:"100%"},"","")})}},3029:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(7378),i=r(1389),o=r(4239),l=r(3009),a=r(7800),s=function(e){var t=e.pretext,r=e.title,s=e.introduction,d=e.callToAction;return(0,a.BX)(i.Stack,{gap:1.5,children:[(0,a.BX)(i.Stack,{children:[t?(0,a.tZ)(l.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(r)?r:(0,a.tZ)(o.H1,{children:r})]}),s?(0,a.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,d]})}},8453:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(6497),i=r(8119),o=r(849),l=r(7865),a=r(7378),s=r(6677),d=r(8039),u=r(71),c=r(8301),b=r(481),p=r(1386),m=r(5751),f=r(1389),g=r(6843),v=r(6403),h=r(7828),y=r(4239),Z=r(3591),S=r(5833),O=r(1875),x=r(4276),P=r(6710),w=r(2010),A=r(3009),j=r(8815),T=r(3029),B=r(7800);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var _=c.Ry({abn:c.Z_().required("Enter your ABN"),acn:c.Z_().required("Enter your ACN"),businessName:c.Z_().required("Enter your business name"),entityName:c.Z_().required("Enter your entity name"),entityNumber:c.Z_().required("Enter your entity number"),streetAddress:c.Z_().required("Enter your street address"),suburbTownCity:c.Z_().required("Enter your suburb, town or city"),state:c.Z_().required("Enter your state"),postcode:c.Z_().required("Enter your postcode"),isPostalAddressSameAsStreetAddress:c.O7(),postalAddress:c.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:c.Z_().required("Enter your postal address")}),postalSuburbTownCity:c.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:c.Z_().required("Enter your suburb, town or city")}),postalState:c.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:c.Z_().required("Enter your state")}),postalPostcode:c.Z_().when("isPostalAddressSameAsStreetAddress",{is:!1,then:c.Z_().required("Enter your postcode")})}).required(),C=function(){var e,t,r,n,i,o,c,x,P,w,A,T,k,C,q,N,I,X,D,W,F,H,M,R,z,L,V=(0,s.useRouter)(),$=(0,a.useState)(!1),Q=$[0],Y=$[1],G=(0,a.useRef)(null),J=(0,a.useState)(!1),K=J[0],U=J[1],ee=(0,O.useScrollToField)(),et=(0,d.cI)({resolver:(0,u.X)(_)}),er=et.register,en=et.handleSubmit,ei=et.watch,eo=et.trigger,el=et.formState,ea=el.errors,es=el.isSubmitted,ed=Object.keys(ea).length>1;(0,a.useEffect)(function(){var e;(ed||K)&&(null===(e=G.current)||void 0===e||e.focus(),U(!0))},[K,ed]);var eu=ei("isPostalAddressSameAsStreetAddress",!1);return(0,a.useEffect)(function(){es&&eo()},[eu,eo,es]),(0,B.tZ)("form",{onSubmit:en(function(e){Y(!0),console.log(e),setTimeout(function(){Y(!1),V.push("single-page-form-success")},2e3)},function(e,t){console.log(e,t),U(!1)}),noValidate:!0,children:(0,B.BX)(f.Stack,{gap:3,children:[ed&&(0,B.tZ)(S.PageAlert,{ref:G,tabIndex:-1,tone:"error",title:"There is a problem",children:(0,B.BX)(m.Prose,{children:[(0,B.tZ)("p",{children:"Please correct the following fields and try again"}),(0,B.tZ)("ul",{children:Object.entries(ea).map(function(e){var t=(0,l.Z)(e,2),r=t[0],n=t[1];return(0,B.tZ)("li",{children:(0,B.tZ)("a",{href:"#".concat(r),onClick:ee,children:n.message})},r)})})]})}),(0,B.tZ)(g.Fieldset,{legend:(0,B.tZ)(y.H2,{children:"Business details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,B.BX)(v.FormStack,{children:[(0,B.tZ)(Z.TextInput,E(E({label:"Australian Business Number (ABN)"},er("abn")),{},{id:"abn",invalid:Boolean(null===(e=ea.abn)||void 0===e?void 0:e.message),message:null===(t=ea.abn)||void 0===t?void 0:t.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,B.tZ)(Z.TextInput,E(E({label:"Australian Company Number (ACN)"},er("acn")),{},{id:"acn",invalid:Boolean(null===(r=ea.acn)||void 0===r?void 0:r.message),message:null===(n=ea.acn)||void 0===n?void 0:n.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"})),(0,B.tZ)(Z.TextInput,E(E({label:"Business name"},er("businessName")),{},{id:"businessName",invalid:Boolean(null===(i=ea.businessName)||void 0===i?void 0:i.message),message:null===(o=ea.businessName)||void 0===o?void 0:o.message,required:!0,maxWidth:"xl"}))]})}),(0,B.tZ)(j.$,{}),(0,B.tZ)(g.Fieldset,{legend:(0,B.tZ)(y.H2,{children:"Provide entity details (H2)"}),hint:"Supporting information for provide details subheading - sm/default",children:(0,B.BX)(v.FormStack,{children:[(0,B.tZ)(Z.TextInput,E(E({label:"Entity name"},er("entityName")),{},{id:"entityName",invalid:Boolean(null===(c=ea.entityName)||void 0===c?void 0:c.message),message:null===(x=ea.entityName)||void 0===x?void 0:x.message,required:!0})),(0,B.tZ)(Z.TextInput,E(E({label:"Entity number"},er("entityNumber")),{},{id:"entityNumber",invalid:Boolean(null===(P=ea.entityNumber)||void 0===P?void 0:P.message),message:null===(w=ea.entityNumber)||void 0===w?void 0:w.message,required:!0,inputMode:"numeric",pattern:"[0-9]*"}))]})}),(0,B.tZ)(g.Fieldset,{legend:(0,B.tZ)(y.H3,{children:"Street address (H3)"}),children:(0,B.BX)(v.FormStack,{children:[(0,B.tZ)(Z.TextInput,E(E({label:"Street address"},er("streetAddress")),{},{id:"streetAddress",invalid:Boolean(null===(A=ea.streetAddress)||void 0===A?void 0:A.message),message:null===(T=ea.streetAddress)||void 0===T?void 0:T.message,required:!0,maxWidth:"xl"})),(0,B.tZ)(Z.TextInput,E(E({label:"Suburb, town or city"},er("suburbTownCity")),{},{id:"suburbTownCity",invalid:Boolean(null===(k=ea.suburbTownCity)||void 0===k?void 0:k.message),message:null===(C=ea.suburbTownCity)||void 0===C?void 0:C.message,required:!0})),(0,B.tZ)(h.Select,E(E({label:"State or territory"},er("state")),{},{id:"state",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:Boolean(null===(q=ea.state)||void 0===q?void 0:q.message),message:null===(N=ea.state)||void 0===N?void 0:N.message,required:!0,maxWidth:"md"})),(0,B.tZ)(Z.TextInput,E(E({label:"Postcode"},er("postcode")),{},{id:"postcode",invalid:Boolean(null===(I=ea.postcode)||void 0===I?void 0:I.message),message:null===(X=ea.postcode)||void 0===X?void 0:X.message,maxWidth:"sm",inputMode:"numeric",pattern:"[0-9]*",required:!0}))]})}),(0,B.tZ)(g.Fieldset,{legend:(0,B.tZ)(y.H3,{children:"Postal address (H3)"}),children:(0,B.BX)(v.FormStack,{children:[(0,B.tZ)(p.Checkbox,E(E({},er("isPostalAddressSameAsStreetAddress")),{},{id:"isPostalAddressSameAsStreetAddress",children:"Same as street address"})),!eu&&(0,B.BX)(v.FormStack,{children:[(0,B.tZ)(Z.TextInput,E(E({label:"Postal address"},er("postalAddress")),{},{id:"postalAddress",invalid:Boolean(null===(D=ea.postalAddress)||void 0===D?void 0:D.message),message:null===(W=ea.postalAddress)||void 0===W?void 0:W.message,required:!0,maxWidth:"xl"})),(0,B.tZ)(Z.TextInput,E(E({label:"Suburb, town or city"},er("postalSuburbTownCity")),{},{id:"postalSuburbTownCity",invalid:Boolean(null===(F=ea.postalSuburbTownCity)||void 0===F?void 0:F.message),message:null===(H=ea.postalSuburbTownCity)||void 0===H?void 0:H.message,required:!0})),(0,B.tZ)(h.Select,E(E({label:"State or territory"},er("postalState")),{},{id:"postalState",placeholder:"Select",options:[{label:"NSW",value:"nsw"},{label:"QLD",value:"qld"},{label:"ACT",value:"act"},{label:"VIC",value:"vic"},{label:"TAS",value:"tas"},{label:"NT",value:"nt"},{label:"SA",value:"sa"},{label:"WA",value:"wa"}],invalid:Boolean(null===(M=ea.postalState)||void 0===M?void 0:M.message),message:null===(R=ea.postalState)||void 0===R?void 0:R.message,required:!0,maxWidth:"md"})),(0,B.tZ)(Z.TextInput,E(E({label:"Postcode"},er("postalPostcode")),{},{id:"postalPostcode",invalid:Boolean(null===(z=ea.postalPostcode)||void 0===z?void 0:z.message),message:null===(L=ea.postalPostcode)||void 0===L?void 0:L.message,maxWidth:"sm",required:!0,inputMode:"numeric",pattern:"[0-9]*"}))]})]})}),(0,B.tZ)(j.$,{}),(0,B.BX)(b.ButtonGroup,{children:[(0,B.tZ)(b.Button,{type:"submit",loading:Q,children:"Submit form"}),(0,B.tZ)(b.Button,{type:"button",variant:"secondary",children:"Cancel"})]})]})})},q=function(){return(0,B.tZ)(x.PageContent,{children:(0,B.tZ)(P.Columns,{children:(0,B.tZ)(P.Column,{columnSpan:{xs:12,md:8},children:(0,B.BX)(f.Stack,{gap:3,children:[(0,B.tZ)(w.Breadcrumbs,{links:[{href:"/",label:"Home"},{href:"/category",label:"Category 1"},{href:"/category/subcategory",label:"Subcategory page"},{label:"Single-page form"}]}),(0,B.tZ)(T.V,{title:"Single-page form (multi-question) xxl/display (H1)",introduction:"Introductory paragraph providing context for this single page of the multi-step form. All questions on page must be related - md/default (P)"}),(0,B.tZ)(A.Text,{fontSize:"xs",color:"muted",children:"All fields are required unless marked optional."}),(0,B.tZ)(C,{})]})})})})};function N(){return(0,B.BX)(B.HY,{children:[(0,B.tZ)(i.$,{title:"Single-page form example"}),(0,B.tZ)(n.L,{template:{name:"Single-page form",slug:"single-page-form"},children:(0,B.tZ)(q,{})})]})}},2010:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(7666),n()},1875:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(5),n()},5833:function(e,t,r){"use strict";var n=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2664),n()},7666:function(e,t,r){"use strict";r.d(t,{Breadcrumbs:function(){return A}});var n=r(849),i=r(89),o=r(7378),l=r(9011),a=r(43),s=r(7686),d=r(2810),u=r(7800);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var b=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,l=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":i,children:(0,u.tZ)(s.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,a.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!l&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:l?void 0:"none"}}),t)),"",""),children:r})})},p=r(711),m=r(5995),f={name:"1jfkd3a",styles:"flex-shrink:0;width:10px;height:10px;position:relative;top:1px"},g=function(){return(0,u.tZ)(m.XC,{color:"border",weight:"bold",css:f})};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,u.BX)(s.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(g,{}),i?(0,u.tZ)(p.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),y=r(5842);function Z(e){var t=e.onClick;return(0,u.tZ)(h,{children:(0,u.tZ)(s.Flex,{as:y.Yd,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var S=["label"],O=["label"],x=["label"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var A=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),a=r[0],s=a.label,d=(0,i.Z)(a,S),c=r[r.length-1],p=c.label,m=(0,i.Z)(c,O),f=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),g=(0,o.useState)(!f.length),v=g[0],y=g[1];return(0,u.BX)(b,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:v,children:[(0,u.tZ)(h,w(w({ref:n},d),{},{children:s})),!v&&f.length?(0,u.tZ)(Z,{onClick:function(){var e;y(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,f.map(function(e,t){var r=e.label,n=(0,i.Z)(e,x);return(0,u.tZ)(h,w(w({},n),{},{children:r}),t)}),(0,u.BX)(h,w(w({},m),{},{children:[p,(0,u.tZ)(l.TX,{children:" (current page)"})]}))]})}},2664:function(e,t,r){"use strict";r.d(t,{PageAlert:function(){return c},PageAlertTitle:function(){return u}});var n=r(43),i=r(7378),o=r(7686),l=r(2810),a=r(5995),s=r(3555),d=r(7800),u=function(e){var t=e.as,r=e.children;return(0,d.tZ)(s.Text,{as:void 0===t?"h3":t,fontSize:"lg",fontWeight:"bold",children:r})},c=(0,i.forwardRef)(function(e,t){var r=e.id,i=e.role,a=e.children,s=e.title,c=e.tone,p=e.tabIndex,m=b[c],f=m.fg,g=m.bg,v=m.icon;return(0,d.BX)(o.Flex,{ref:t,role:i,id:r,tabIndex:p,rounded:!0,focus:!0,highContrastOutline:!0,css:(0,n.iv)({backgroundColor:g},"",""),children:[(0,d.tZ)(o.Flex,{padding:.5,alignItems:"center",css:(0,n.iv)({borderTopLeftRadius:l.tokens.borderRadius,borderBottomLeftRadius:l.tokens.borderRadius,backgroundColor:f,color:l.boxPalette.backgroundBody},"",""),children:v}),(0,d.BX)(o.Flex,{padding:1.5,gap:1,flexDirection:"column",children:[s?(0,d.tZ)(u,{children:s}):null,a]})]})}),b={success:{fg:l.boxPalette.systemSuccess,bg:l.boxPalette.systemSuccessMuted,icon:(0,d.tZ)(a.qE,{"aria-hidden":"false","aria-label":"Success"})},error:{fg:l.boxPalette.systemError,bg:l.boxPalette.systemErrorMuted,icon:(0,d.tZ)(a.z$,{"aria-hidden":"false","aria-label":"Error"})},info:{fg:l.boxPalette.systemInfo,bg:l.boxPalette.systemInfoMuted,icon:(0,d.tZ)(a.F3,{"aria-hidden":"false","aria-label":"Information"})},warning:{fg:l.boxPalette.systemWarning,bg:l.boxPalette.systemWarningMuted,icon:(0,d.tZ)(a.av,{"aria-hidden":"false","aria-label":"Warning"})}}},824:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/subcategory/single-page-form",function(){return r(8453)}])}},function(e){e.O(0,[536,110,344,38,298,450,774,888,179],function(){return e(e.s=824)}),_N_E=e.O()}]);