(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8028],{51623:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(28283),r()},28283:function(e,t,n){"use strict";n.d(t,{DirectionButton:function(){return g},DirectionLink:function(){return b}});var r=n(90849),i=n(90089),o=n(19631),s=n(58229),a=n(1607),c=n(77797),u=n(87800),l=["children"],d=["children"],m=["as","children","direction","className"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=function(e){var t=e.children,n=(0,i.Z)(e,l);return(0,u.tZ)(y,p(p({as:c.TextLink},n),{},{children:t}))},g=function(e){var t=e.children,n=(0,i.Z)(e,d);return(0,u.tZ)(y,p(p({as:s.Yd},n),{},{children:t}))},h={name:"xyzkeb",styles:"align-self:flex-start"},y=function(e){var t=e.as,n=e.children,r=e.direction,s=e.className,a=(0,i.Z)(e,m),c=v[r],l="left"===r;return(0,u.BX)(o.Flex,p(p({alignItems:"center",as:t,className:s,css:h,focusRingFor:"keyboard",fontFamily:"body",fontWeight:"normal",gap:.5,inline:!0,link:!0},a),{},{children:[l?(0,u.tZ)(c,{size:"sm"}):null,n,l?null:(0,u.tZ)(c,{size:"sm"})]}))},v={up:a.Hf,right:a.LZ,down:a.ve,left:a.Y4}},96878:function(e,t,n){"use strict";n.d(t,{SummaryList:function(){return a},SummaryListItem:function(){return c},SummaryListItemDescription:function(){return s},SummaryListItemTerm:function(){return o}});var r=n(19631),i=n(87800);function o(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dt",color:"text",flexShrink:0,fontSize:"sm",fontWeight:"bold",minWidth:"200px",width:["100%","30%"],children:t})}function s(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dd",color:"text",flexGrow:1,fontSize:"sm",children:t})}function a(e){var t=e.children;return(0,i.tZ)(r.Flex,{as:"dl",borderColor:"muted",borderTop:!0,flexDirection:"column",width:"100%",children:t})}function c(e){var t=e.children;return(0,i.tZ)(r.Flex,{borderBottom:!0,borderColor:"muted",flexDirection:["column","row"],gap:.5,paddingY:.75,children:t})}},41794:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(96878),r()},97145:function(e,t,n){"use strict";n.d(t,{GZ:function(){return f},P$:function(){return b},Qu:function(){return g},ZA:function(){return o},bs:function(){return p},e0:function(){return u},fH:function(){return m},jt:function(){return a},pp:function(){return h},q8:function(){return c},qb:function(){return l},ws:function(){return s},yu:function(){return d}});var r=n(84200),i=n(23372),o=r.z.object({firstName:(0,i.Jg)("First name is required"),lastName:(0,i.Jg)("Last name is required"),email:(0,i.Jg)("Email address is required").email("Email address is invalid"),mobileNumber:(0,i.ME)(),contactMethod:(0,i.ly)()}),s=r.z.object({contactMethod:(0,i.Jg)("Preferred contact method is required")}),a=r.z.object({businessName:(0,i.Jg)("Business or company name is required"),tradingName:(0,i.ly)(),businessStructure:(0,i.Jg)("Business structure is required"),abn:(0,i.ly)(),acn:(0,i.ly)()}).refine(function(e){return!["Business","Sole trader"].includes(e.businessStructure)||!!e.abn},{path:["abn"],message:"ABN is required"}).refine(function(e){return"Company"!==e.businessStructure||!!e.acn},{path:["acn"],message:"ACN is required"}),c=r.z.object({streetAddress:(0,i.Jg)("Street address is required"),suburbTownCity:(0,i.Jg)("Suburb, town or city is required"),state:(0,i.Jg)("State or territory is required"),postcode:(0,i.Jg)("Postcode is required").length(4,{message:"Postcode must be 4 digits"}),isPostalAddressSameAsBusinessAddress:r.z.boolean(),postalAddress:(0,i.ly)(),postalSuburbTownCity:(0,i.ly)(),postalState:(0,i.ly)(),postalPostcode:(0,i.ly)()}).superRefine(function(e,t){function n(e,n,i){t.addIssue({code:r.NL.invalid_string,message:i||"".concat(n," is required"),validation:{includes:""},path:[e]})}e.isPostalAddressSameAsBusinessAddress||(e.postalAddress||n("postalAddress","Postal address"),e.postalSuburbTownCity||n("postalSuburbTownCity","Suburb, town or city"),e.postalState||n("postalState","State or territory"),e.postalPostcode?4!==e.postalPostcode.length&&n("postalPostcode","Postcode","Postcode must be 4 digits"):n("postalPostcode","Postcode"))}),u=r.z.object({registrationNumber:r.z.string().transform(function(e){return e.replace(/\s+/g,"")}).pipe(r.z.string().min(1,{message:"Vehicle registration number is required"}).max(6,"Registration number can not be longer than 6 characters")),registrationExpiry:(0,i.MG)("Registration expiry date is required")}),l=r.z.object({tradingPeriod:r.z.object({from:(0,i.MG)("Start date is required"),to:(0,i.MG)("End date is required")}),openingTime:(0,i.AY)({label:"Opening time"}),closingTime:(0,i.AY)({label:"Closing time"})}),d=r.z.object({foodServed:(0,i.b5)(r.z.object({label:(0,i.Jg)(),value:(0,i.Jg)()}),"Food types is required")}),m=r.z.object({employee:r.z.object({id:(0,i.Jg)(),firstName:(0,i.Jg)("First name is required"),lastName:(0,i.Jg)("Last name is required"),email:(0,i.Jg)("Email address is required").email("Email address is invalid")})}),f=r.z.object({files:r.z.object({"rms-vehicle-registration":r.z.object({file:(0,i.Jg)(),size:(0,i.Jg)()}),"suggested-menu-or-list-of-foods-being-sold":r.z.object({file:(0,i.Jg)(),size:(0,i.Jg)()})})}),p=r.z.object({declaration1:r.z.boolean().refine(function(e){return e},"Accept the first declaration to continue"),declaration2:r.z.boolean().refine(function(e){return e},"Accept the second declaration to continue"),declaration3:r.z.boolean().refine(function(e){return e},"Accept the third declaration to continue")}),b={stepOwnerDetails:{firstName:"Charlie",lastName:"Walker",email:"c.walker@email.com",mobileNumber:"0494 811 111",completed:!1},stepBusinessAddress:{isPostalAddressSameAsBusinessAddress:!0,completed:!1},stepEmployees:{employee:[]},stepUploadDocuments:{files:{"rms-vehicle-registration":{file:"",size:""},"suggested-menu-or-list-of-foods-being-sold":{file:"",size:""}}}},g=r.z.object({id:(0,i.Jg)(),firstName:(0,i.Jg)("First name is required"),lastName:(0,i.Jg)("Last name is required"),email:(0,i.Jg)("Email address is required").email("Email address is invalid"),mobile:(0,i.ME)("Mobile number"),role:r.z.enum(["Manager","Employee","Trainee","Work experience"],{errorMap:function(){return{message:"Role is required"}}}),trainingCompleted:r.z.array(r.z.enum(["Deliveries","Distribution","Ice cream making","Packaging"]))}),h=r.z.object({role:r.z.enum(["Manager","Employee","Trainee","Work experience"],{errorMap:function(){return{message:"Role is required"}}}),trainingCompleted:r.z.array(r.z.enum(["Deliveries","Distribution","Ice cream making","Packaging"]))})},75583:function(e,t,n){"use strict";n.d(t,{u:function(){return c}});var r=n(10043),i=n(87466),o=n(75601),s=n(79628),a=n(87800),c=function(){return(0,a.BX)(i.Box,{as:"dl",children:[(0,a.tZ)(u,{children:"Manager"}),(0,a.tZ)(l,{children:"View who has access to a business."}),(0,a.tZ)(l,{children:"Set and change notification preferences."}),(0,a.tZ)(l,{children:"Receive business notifications and messages."}),(0,a.tZ)(u,{children:"Employee"}),(0,a.tZ)(l,{children:"Set and change notification preferences."}),(0,a.tZ)(l,{children:"Receive business notifications and messages"}),(0,a.tZ)(u,{children:"Trainee"}),(0,a.tZ)(l,{children:"Receive business notifications and messages."})]})},u=function(e){var t=e.children;return(0,a.tZ)(s.Text,{as:"dt",css:(0,r.iv)({paddingBottom:(0,o.mapSpacing)(1),":not(:first-of-type)":{paddingTop:(0,o.mapSpacing)(1)}},"",""),children:t})},l=function(e){var t=e.children;return(0,a.tZ)(s.Text,{as:"dd",css:(0,r.iv)({display:"list-item",listStyleType:"disc",marginLeft:(0,o.mapSpacing)(2),paddingBottom:(0,o.mapSpacing)(.25)},"",""),children:t})}},41792:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var r=n(27378),i=n(58229),o=n(92288),s=n(25294),a=n(87600),c=n(87800);function u(e){var t=e.isOpen,n=e.itemsToDelete,u=e.onClose,l=e.onConfirm,d=(0,r.useState)(!1),m=d[0],f=d[1],p=(0,r.useMemo)(function(){return Array.isArray(n)?{title:"Are you sure you want to remove access for ".concat(n.length," staff ").concat((0,a.Ho)(n.length,"member","members"),"?"),description:"Access will be removed immediately. You can not undo this action."}:{title:"Are you sure you want to remove access for ".concat(n.name,"?"),description:"Access will be removed immediately. You can not undo this action."}},[n]),b=p.title,g=p.description;return(0,c.tZ)(s.Modal,{actions:(0,c.BX)(i.ButtonGroup,{children:[(0,c.tZ)(i.Button,{loading:m,onClick:function(){f(!0),setTimeout(function(){f(!1),l()},1500)},children:"Remove access"}),(0,c.tZ)(i.Button,{onClick:u,variant:"secondary",children:"Cancel"})]}),isOpen:t,onClose:u,title:b,children:(0,c.tZ)(o.Text,{as:"p",children:g})})}},87600:function(e,t,n){"use strict";n.d(t,{Ho:function(){return o},KD:function(){return r},UO:function(){return i}});var r=function(e){var t=e.loading,n=e.totalItems,r=e.pagination;if(t)return"Staff members";var i=1===n?"1 item":"".concat(n," items"),o=(r.page-1)*r.perPage+1,s=(r.page-1)*r.perPage+r.perPage;return s>n?"Staff members (".concat(i,")"):"Staff members (".concat(o," - ").concat(s," of ").concat(i,")")},i={Active:{label:"Active",tone:"success"},Invited:{label:"Invited",tone:"info"},Paused:{label:"Paused",tone:"neutral"}},o=function(e,t,n){return 1===e?t:n}},93943:function(e,t,n){"use strict";n.r(t);var r=n(90849),i=n(23982),o=n(27378),s=n(86677),a=n(88039),c=n(32324),u=n(60564),l=n(58607),d=n(79628),m=n(37164),f=n(47753),p=n(39173),b=n(13690),g=n(3096),h=n(51623),y=n(72742),v=n(13497),S=n(41794),Z=n(80043),O=n(87466),j=n(33040),P=n(94308),w=n(76002),B=n(97145),z=n(93e3),k=n(94906),T=n(41792),C=n(75583),x=n(87800);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A=function(){var e=(0,s.useRouter)(),t=(0,z.M)(),n=t.staffMembersGetState,r=t.staffMembersUpdate,P=(0,o.useState)(!1),D=P[0],A=P[1],q=(0,o.useMemo)(function(){return n().find(function(t){return t.name.toLowerCase().replaceAll(" ","-")===e.query.slug})},[e,n]),L=(0,a.cI)({defaultValues:{role:null==q?void 0:q.role,trainingCompleted:null==q?void 0:q.trainingCompleted},resolver:(0,c.F)(B.pp),mode:"onSubmit",reValidateMode:"onBlur"}),I=L.register,M=L.handleSubmit,_=L.reset;(0,o.useEffect)(function(){_({role:null==q?void 0:q.role,trainingCompleted:null==q?void 0:q.trainingCompleted})},[_,q]);var J=(0,o.useState)(!1),N=J[0],X=J[1];return q?(0,x.BX)(o.Fragment,{children:[(0,x.tZ)(j.$,{title:"View ".concat(q.name," | Staff")}),(0,x.BX)(u.PageContent,{children:[(0,x.BX)(l.Stack,{gap:3,children:[(0,x.tZ)(h.DirectionLink,{direction:"left",href:"/app/staff",children:"Back"}),(0,x.BX)(l.Stack,{alignItems:"start",gap:1.5,children:[(0,x.tZ)(w.V,{introduction:(0,x.BX)(d.Text,{children:["Change role or remove access for"," ",(0,x.tZ)(d.Text,{fontSize:"md",fontWeight:"bold",children:q.name}),"."]}),title:q.name}),(0,x.tZ)(y.StatusBadge,{label:"Invited",tone:"infoMedium"})]}),(0,x.BX)(l.Stack,{gap:2,children:[(0,x.tZ)(v.H2,{children:"Personal details"}),(0,x.BX)(S.SummaryList,{children:[(0,x.BX)(S.SummaryListItem,{children:[(0,x.tZ)(S.SummaryListItemTerm,{children:"Name"}),(0,x.tZ)(S.SummaryListItemDescription,{children:q.name})]}),(0,x.BX)(S.SummaryListItem,{children:[(0,x.tZ)(S.SummaryListItemTerm,{children:"Email"}),(0,x.tZ)(S.SummaryListItemDescription,{children:q.email})]}),(0,x.BX)(S.SummaryListItem,{children:[(0,x.tZ)(S.SummaryListItemTerm,{children:"Mobile number"}),(0,x.tZ)(S.SummaryListItemDescription,{children:q.mobile})]}),q.dateJoined&&(0,x.BX)(S.SummaryListItem,{children:[(0,x.tZ)(S.SummaryListItemTerm,{children:"Date joined"}),(0,x.tZ)(S.SummaryListItemDescription,{children:(0,i.Z)(new Date(q.dateJoined),"d MMMM yyyy")})]})]})]}),(0,x.BX)(l.Stack,{gap:2,children:[(0,x.tZ)(v.H2,{children:"Remove access"}),(0,x.tZ)(d.Text,{as:"p",id:"remove-access-description",children:"Remove this person‘s access to your business. You can invite them again at any time."}),(0,x.BX)(m.Button,{alignSelf:"start","aria-describedby":"remove-access-description",onClick:function(){A(!0)},size:"sm",variant:"secondary",children:["Remove ",q.name]})]}),(0,x.BX)(l.Stack,{as:"form",gap:2,noValidate:!0,onSubmit:M(function(t){X(!0),setTimeout(function(){X(!1),r({staffToUpdate:q,updates:t}),e.push("/app/staff?successType=update&staffId=".concat(q.id))},1500)}),children:[(0,x.tZ)(v.H2,{children:"Change role"}),(0,x.tZ)(Z.Details,{iconBefore:!0,label:"Understanding the permissions for each role",children:(0,x.tZ)(C.u,{})}),(0,x.tZ)(b.ControlGroup,{block:!0,label:"Export service role",required:!0,children:["Manager","Employee","Trainee","Work experience"].map(function(e){return(0,x.tZ)(p.Radio,E(E({},I("role")),{},{value:e,children:e}),e)})}),(0,x.tZ)(v.H2,{children:"Training completed"}),(0,x.tZ)(b.ControlGroup,{block:!0,label:"Training completed",children:["Deliveries","Distribution","Ice cream making","Packaging"].map(function(e){return(0,x.tZ)(g.Checkbox,E(E({},I("trainingCompleted")),{},{value:e,children:e}),e)})}),(0,x.tZ)(O.Box,{paddingY:1,children:(0,x.tZ)(f.Divider,{})}),(0,x.BX)(m.ButtonGroup,{children:[(0,x.tZ)(m.Button,{loading:N,type:"submit",children:"Save changes"}),(0,x.tZ)(m.Button,{onClick:function(){e.push("/app/staff")},variant:"tertiary",children:"Cancel"})]})]})]}),(0,x.tZ)(T.E,{isOpen:D,itemsToDelete:q,onClose:function(){return A(!1)},onConfirm:function(){A(!1),e.push("/app/staff?successType=remove&staffId=".concat(q.id))}})]})]}):(0,x.tZ)(k.default,{})};t.default=A,A.getLayout=function(e){return(0,x.tZ)(P.L,{children:(0,x.tZ)(z.w,{children:e})})}},65385:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/staff/[slug]",function(){return n(93943)}])},43350:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},80040:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(34217);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(0,r.Z)(i.key),i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},3117:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},48415:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}n.d(t,{Z:function(){return i}})},94182:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(23448);function i(e,t){if(t&&("object"===(0,r.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}}},function(e){e.O(0,[6484,9998,9073,3982,1854,6212,1338,8205,5294,4308,6232,3434,6174,2888,9774,179],function(){return e(e.s=65385)}),_N_E=e.O()}]);