(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5333],{19263:function(e,t,i){"use strict";var n=i(51502).___internalHook("/","../../../..","../..");e.exports=i(79065),n()},65506:function(e,t,i){"use strict";var n=i(51502).___internalHook("/","../../../..","../..");e.exports=i(89955),n()},79065:function(e,t,i){"use strict";i.d(t,{Breadcrumbs:function(){return P}});var n=i(90849),l=i(90089),r=i(27378),o=i(34456),a=i(10043),s=i(19631),d=i(8464),c=i(87800);function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}var p=function(e){var t,i=e.children,l=e["aria-label"],r=e.isExpandable,o=e.isExpanded;return(0,c.tZ)("nav",{"aria-label":l,children:(0,c.tZ)(s.Flex,{alignItems:"center",as:"ol",css:(0,a.iv)(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({"li:first-of-type > svg":{display:"none"}},r&&!o&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:o?void 0:"none"}}),t)),"",""),flexWrap:"wrap",gap:.5,children:i})})},v=i(77797),h=i(48499),b={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},f=function(){return(0,c.tZ)(h.XC,{color:"border",css:b,size:"sm"})};function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}var m=(0,r.forwardRef)(function(e,t){var i=e.children,l=e.href;return(0,c.BX)(s.Flex,{alignItems:"center",as:"li",color:"text",fontSize:"sm",gap:.5,children:[(0,c.tZ)(f,{}),l?(0,c.tZ)(v.TextLink,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({ref:t},e)):i]})}),Z=i(58229);function y(e){var t=e.onClick;return(0,c.tZ)(m,{children:(0,c.tZ)(s.Flex,{alignItems:"center","aria-expanded":"false","aria-label":"Show all breadcrumbs",as:Z.Yd,focusRingFor:"keyboard",fontSize:"sm",justifyContent:"center",link:!0,onClick:t,children:"…"})})}var B=["label"],x=["label"],S=["label"];function O(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var P=function(e){var t=e["aria-label"],i=e.links,n=(0,r.useRef)(null),a=i[0],s=a.label,d=(0,l.Z)(a,B),u=i[i.length-1],v=u.label,h=(0,l.Z)(u,x),b=i.filter(function(e,t,i){return!(0===t||t===i.length-1)}),f=(0,r.useState)(!b.length),g=f[0],Z=f[1];return(0,c.BX)(p,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:g,children:[(0,c.tZ)(m,T(T({ref:n},d),{},{children:s})),!g&&b.length?(0,c.tZ)(y,{onClick:function(){var e;Z(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,b.map(function(e,t){var i=e.label,n=(0,l.Z)(e,S);return(0,c.tZ)(m,T(T({},n),{},{children:i}),t)}),(0,c.BX)(m,T(T({},h),{},{children:[v,(0,c.tZ)(o.T,{children:" (current page)"})]}))]})}},89955:function(e,t,i){"use strict";i.d(t,{Callout:function(){return u}});var n=i(10043),l=i(19631),r=i(96778),o=i(92288),a=i(48499),s=i(87800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},c=function(e){var t=e.as,i=e.children,n=e.variant;return(0,s.tZ)(o.Text,{as:void 0===t?"h2":t,fontSize:d[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:i})},u=function(e){var t=e.as,i=e.background,o=e.children,u=e.icon,p=e.onBodyAlt,v=e.title,h=e.tone,b=void 0===h?"neutral":h,f=e.variant,g=void 0===f?"regular":f,m=d[g],Z=m.textGap,y=m.iconGap,B=m.padding,x=m.flexDirection,S=m.titlePaddingTop,O={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,s.tZ)(a.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[g].iconSize})}}[b],T=O.background,P=O.border,k=O.icon;return(0,s.BX)(l.Flex,{as:t,background:"neutral"===b&&(null!=p?p:"shadeAlt"===i)?"shadeAlt":T,borderColor:P,borderLeft:!0,borderLeftWidth:"xl",flexDirection:x,gap:y,highContrastOutline:!0,padding:B,rounded:!0,children:[u||k?(0,s.tZ)(l.Flex,{flexShrink:0,children:u||k}):null,(0,s.BX)(r.Stack,{css:(0,n.iv)({paddingTop:S},"",""),gap:Z,children:[v?(0,s.tZ)(c,{variant:g,children:v}):null,o]})]})}},76002:function(e,t,i){"use strict";i.d(t,{V:function(){return d}});var n=i(27378),l=i(58607),r=i(13497),o=i(79628),a=i(82973),s=i(87800),d=function(e){var t=e.pretext,i=e.title,d=e.introduction,c=e.callToAction,u=e.hasAllFieldsRequiredMessage;return(0,s.BX)(l.Stack,{gap:1.5,children:[(0,s.BX)(l.Stack,{children:[t?(0,s.tZ)(o.Text,{color:"muted",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(i)?i:(0,s.tZ)(r.H1,{children:i})]}),d?(0,s.tZ)(o.Text,{as:"p",color:"muted",fontSize:"md",children:d}):null,c,u&&(0,s.tZ)(a.z,{})]})}},18928:function(e,t,i){"use strict";i.r(t);var n=i(11246),l=i(27378),r=i(86677),o=i(19263),a=i(37164),s=i(65506),d=i(60564),c=i(75601),u=i(51623),p=i(47753),v=i(13497),h=i(61066),b=i(8632),f=i(52644),g=i(67728),m=i(58607),Z=i(72742),y=i(27140),B=i(79628),x=i(94609),S=i(33040),O=i(94308),T=i(97796),P=i(67637),k=i(20547),w=i(76002),D=i(21855),X=i(62853),j=i(88096),C=i(87800),E=function(){var e,t,i,O,E,A,H,V,I,L,N,Y,_,F,z,R,G,W,U,M,q,Q,$,J,K,ee,et,ei,en,el,er,eo=(0,r.useRouter)(),ea=eo.query,es=eo.isReady,ed=(0,T.t7)().formState,ec=(0,c.useTernaryState)(!1),eu=(0,n.Z)(ec,3),ep=eu[0],ev=eu[1],eh=eu[2],eb=ea.slug&&ea.slug===ed.id,ef=eb&&ed.id?ed.id:"View permit";return(0,C.BX)(l.Fragment,{children:[(0,C.tZ)(S.$,{title:"".concat(ef.startsWith("View")?ef:"View ".concat(ef)," | Permits")}),(0,C.BX)(d.PageContent,{children:[(0,C.BX)(m.Stack,{gap:3,children:[(0,C.tZ)(o.Breadcrumbs,{links:[{label:"Dashboard",href:"/app/dashboard"},{label:"Permits",href:"/app/permits"},{label:ef}]}),es?eb?(0,C.BX)(C.HY,{children:[(0,C.BX)(m.Stack,{gap:1.5,children:[(0,C.tZ)(k.Y,{hideRequiredFieldsMessage:!0,title:ef}),(0,C.tZ)("div",{children:null!=ed&&ed.completed?(0,C.tZ)(Z.StatusBadge,{label:"Submitted",tone:"successMedium"}):(0,C.tZ)(Z.StatusBadge,{label:"In progress",tone:"inProgressLow"})})]}),(0,C.tZ)(p.Divider,{}),(null==ed?void 0:ed.completed)&&(0,C.tZ)(a.Button,{alignSelf:"start",iconBefore:h.DeleteIcon,onClick:ev,variant:"text",children:"Remove application"}),null!=ed&&ed.completed?(0,C.BX)(C.HY,{children:[(0,C.tZ)(v.H2,{children:"Business details"}),(0,C.BX)(m.Stack,{gap:2,children:[(0,C.tZ)(v.H3,{children:j.g2.stepOwnerDetails.label}),(0,C.BX)(P.xL,{children:[(0,C.tZ)(P.VY,{label:"First name",value:null===(e=ed.steps)||void 0===e||null===(e=e.stepOwnerDetails)||void 0===e?void 0:e.firstName}),(0,C.tZ)(P.VY,{label:"Last name",value:null===(t=ed.steps)||void 0===t||null===(t=t.stepOwnerDetails)||void 0===t?void 0:t.lastName}),(0,C.tZ)(P.VY,{label:"Email address",value:null===(i=ed.steps)||void 0===i||null===(i=i.stepOwnerDetails)||void 0===i?void 0:i.email}),(0,C.tZ)(P.VY,{label:"Contact phone number",value:null===(O=ed.steps)||void 0===O||null===(O=O.stepOwnerDetails)||void 0===O?void 0:O.contactPhoneNumber})]})]}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{children:j.g2.stepBusinessDetails.label}),(0,C.BX)(P.xL,{children:[(0,C.tZ)(P.VY,{label:"Business name",value:null===(E=ed.steps)||void 0===E||null===(E=E.stepBusinessDetails)||void 0===E?void 0:E.businessName}),(0,C.tZ)(P.VY,{label:"Trading name",value:null===(A=ed.steps)||void 0===A||null===(A=A.stepBusinessDetails)||void 0===A?void 0:A.tradingName}),(0,C.tZ)(P.VY,{label:"Business structure",value:null===(H=ed.steps)||void 0===H||null===(H=H.stepBusinessDetails)||void 0===H?void 0:H.businessStructure}),(null===(V=ed.steps)||void 0===V||null===(V=V.stepBusinessDetails)||void 0===V?void 0:V.businessStructure)==="Business"?(0,C.tZ)(P.VY,{label:"Australian Business Number (ABN)",value:null===(I=ed.steps)||void 0===I||null===(I=I.stepBusinessDetails)||void 0===I?void 0:I.abn}):(null===(L=ed.steps)||void 0===L||null===(L=L.stepBusinessDetails)||void 0===L?void 0:L.businessStructure)==="Company"?(0,C.tZ)(P.VY,{label:"Australian Company Number (ACN)",value:null===(N=ed.steps)||void 0===N||null===(N=N.stepBusinessDetails)||void 0===N?void 0:N.acn}):null]})]}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{children:j.g2.stepBusinessAddress.label}),(0,C.BX)(P.xL,{children:[(0,C.tZ)(P.Zu,{address:null===(Y=ed.steps)||void 0===Y||null===(Y=Y.stepBusinessAddress)||void 0===Y?void 0:Y.streetAddress,label:"Street address",postcode:null===(_=ed.steps)||void 0===_||null===(_=_.stepBusinessAddress)||void 0===_?void 0:_.postcode,state:null===(F=ed.steps)||void 0===F||null===(F=F.stepBusinessAddress)||void 0===F?void 0:F.state,suburb:null===(z=ed.steps)||void 0===z||null===(z=z.stepBusinessAddress)||void 0===z?void 0:z.suburbTownCity}),null!==(R=ed.steps)&&void 0!==R&&null!==(R=R.stepBusinessAddress)&&void 0!==R&&R.isPostalAddressSameAsBusinessAddress?(0,C.tZ)(P.VY,{label:"Postal address",value:"Same as street address"}):(0,C.tZ)(P.Zu,{address:null===(G=ed.steps)||void 0===G||null===(G=G.stepBusinessAddress)||void 0===G?void 0:G.postalAddress,label:"Postal address",postcode:null===(W=ed.steps)||void 0===W||null===(W=W.stepBusinessAddress)||void 0===W?void 0:W.postalPostcode,state:null===(U=ed.steps)||void 0===U||null===(U=U.stepBusinessAddress)||void 0===U?void 0:U.postalState,suburb:null===(M=ed.steps)||void 0===M||null===(M=M.stepBusinessAddress)||void 0===M?void 0:M.postalSuburbTownCity})]})]}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{children:j.g2.stepVehicleRegistration.label}),(0,C.BX)(P.xL,{children:[(0,C.tZ)(P.VY,{label:"Vehicle registration number",value:null===(q=ed.steps)||void 0===q||null===(q=q.stepVehicleRegistration)||void 0===q?void 0:q.registrationNumber}),(0,C.tZ)(P.ge,{label:"Registration expiry date",value:null===(Q=ed.steps)||void 0===Q||null===(Q=Q.stepVehicleRegistration)||void 0===Q?void 0:Q.registrationExpiry})]})]}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{children:j.g2.stepTradingTime.label}),(0,C.BX)(P.xL,{children:[(0,C.tZ)(P._c,{fromLabel:"Start date",fromValue:null===($=ed.steps)||void 0===$||null===($=$.stepTradingTime)||void 0===$||null===($=$.tradingPeriod)||void 0===$?void 0:$.from,toLabel:"End date",toValue:null===(J=ed.steps)||void 0===J||null===(J=J.stepTradingTime)||void 0===J||null===(J=J.tradingPeriod)||void 0===J?void 0:J.to}),(0,C.tZ)(P.VY,{label:"Trading hours",value:"".concat(null===(K=ed.steps)||void 0===K||null===(K=K.stepTradingTime)||void 0===K||null===(K=K.openingTime)||void 0===K?void 0:K.formatted," - ").concat(null===(ee=ed.steps)||void 0===ee||null===(ee=ee.stepTradingTime)||void 0===ee||null===(ee=ee.closingTime)||void 0===ee?void 0:ee.formatted)})]})]}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{children:j.g2.stepFoodServed.label}),(0,C.tZ)(P.xL,{children:(0,C.tZ)(P.VY,{label:"Food served",value:null===(et=ed.steps)||void 0===et||null===(et=et.stepFoodServed)||void 0===et||null===(et=et.foodServed)||void 0===et?void 0:et.map(function(e){return null==e?void 0:e.label}).join(", ")})})]}),(0,C.tZ)(p.Divider,{}),(0,C.tZ)(v.H2,{children:"Employee details"}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{id:"employees-heading",children:j.g2.stepEmployees.label}),(0,C.tZ)(y.TableWrapper,{children:(0,C.BX)(y.Table,{"aria-labelledby":"employees-heading",children:[(0,C.tZ)(y.TableHead,{children:(0,C.BX)(y.TableRow,{children:[(0,C.tZ)(y.TableHeader,{width:"33%",children:"Employee name"}),(0,C.tZ)(y.TableHeader,{children:"Email address"})]})}),(0,C.tZ)(y.TableBody,{children:null===(ei=ed.steps)||void 0===ei||null===(ei=ei.stepEmployees)||void 0===ei||null===(ei=ei.employee)||void 0===ei?void 0:ei.map(function(e){return(null==e?void 0:e.id)&&(0,C.BX)(y.TableRow,{children:[(0,C.BX)(y.TableCell,{children:[e.firstName," ",e.lastName]}),(0,C.tZ)(y.TableCell,{children:e.email})]},e.id)})})]})})]}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{children:j.g2.stepFoodSafetySupervisor.label}),(0,C.tZ)(P.xL,{children:(0,C.tZ)(P.VY,{label:"Food safety supervisor",value:null===(en=ed.steps)||void 0===en||null===(en=en.stepFoodSafetySupervisor)||void 0===en?void 0:en.supervisor})})]}),(0,C.tZ)(p.Divider,{}),(0,C.tZ)(v.H2,{children:"Upload documents"}),(0,C.BX)(m.Stack,{alignItems:"flex-start",gap:2,children:[(0,C.tZ)(v.H3,{id:"upload-documents-heading",children:j.g2.stepUploadDocuments.label}),(0,C.tZ)(y.TableWrapper,{children:(0,C.BX)(y.Table,{"aria-labelledby":"upload-documents-heading",children:[(0,C.tZ)(y.TableHead,{children:(0,C.BX)(y.TableRow,{children:[(0,C.tZ)(y.TableHeader,{width:"33%",children:"Document type"}),(0,C.tZ)(y.TableHeader,{children:"File"})]})}),(0,C.tZ)(y.TableBody,{children:(null===(el=ed.steps)||void 0===el||null===(el=el.stepUploadDocuments)||void 0===el?void 0:el.files)&&(null===(er=Object.entries(ed.steps.stepUploadDocuments.files))||void 0===er?void 0:er.map(function(e){var t=(0,n.Z)(e,2),i=t[0],l=t[1],r=l.file,o=l.size;return(0,C.BX)(y.TableRow,{children:[(0,C.tZ)(y.TableCell,{children:X.W[i]}),(0,C.tZ)(y.TableCell,{children:(0,C.tZ)(B.Text,{breakWords:!0,children:"".concat(r||""," (").concat(o,")")})})]},i)}))})]})})]}),(0,C.tZ)(v.H2,{children:"Declaration"}),(0,C.BX)(g.Prose,{children:[(0,C.BX)("p",{children:["I have agreed to the"," ",(0,C.tZ)(x.TextLinkExternal,{href:"/not-found",children:"Terms of Use"}),", the"," ",(0,C.tZ)(x.TextLinkExternal,{href:"/not-found",children:"Privacy Policy"})," ","and the"," ",(0,C.tZ)(x.TextLinkExternal,{href:"/not-found",children:"Privacy Notice"}),"."]}),(0,C.tZ)("p",{children:"I have read, understood and agree to be bound by the Terms of Use, The Privacy Policy and the Privacy notice."}),(0,C.tZ)("p",{children:"I understand and agree that any information I provide to the Export Service may be used in relation to other Services in order to improve the Export Service experience."}),(0,C.tZ)("p",{children:"I understand and consent to the Department using the personal information, sensitive information, and/or relevant information (within the meaning of the Export Control Act 2020 (Cth) and the Privacy Act 1988 (Cth)) I provide for the purposes of facilitating my access to, and ability to perform export activities in, the Export Service."})]})]}):(0,C.tZ)(s.Callout,{title:"This application is in progress",tone:"info",children:(0,C.tZ)(u.DirectionLink,{direction:"right",href:"/app/permits/apply-for-new-permit/mobile-food-vendor-permit",children:"Continue application"})}),(0,C.tZ)(p.Divider,{}),(0,C.tZ)(a.Button,{alignSelf:"start",iconBefore:h.DeleteIcon,onClick:ev,variant:"text",children:"Remove application"})]}):(0,C.BX)(C.HY,{children:[(0,C.tZ)(w.V,{title:ef}),(0,C.tZ)(f.PageAlert,{title:"No matching permit found",tone:"error",children:(0,C.tZ)(u.DirectionLink,{direction:"right",href:D.Hv,children:"Manage existing permits"})})]}):null]}),(0,C.tZ)(b.Modal,{actions:(0,C.BX)(a.ButtonGroup,{children:[(0,C.tZ)(a.Button,{onClick:eh,children:"Yes, remove"}),(0,C.tZ)(a.Button,{onClick:eh,variant:"secondary",children:"No"})]}),isOpen:ep,onClose:eh,title:"Are you sure you want to remove this application?",children:(0,C.tZ)(B.Text,{as:"p",children:"Note: this is for demonstration purposes only and does not function."})})]})]})};t.default=E,E.getLayout=function(e){return(0,C.tZ)(O.L,{children:(0,C.tZ)(T.iP,{children:e})})}},74584:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/permits/[slug]",function(){return i(18928)}])}},function(e){e.O(0,[6484,9998,9073,3982,8474,8301,1165,1854,8837,6212,2644,1338,8205,5294,8164,4308,840,6140,8495,6232,3434,2815,7796,2888,9774,179],function(){return e(e.s=74584)}),_N_E=e.O()}]);