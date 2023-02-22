(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707],{5656:function(e,t,r){"use strict";r.d(t,{BE:function(){return y},B_:function(){return b},K7:function(){return x},VO:function(){return g}});var i=r(7865),n=r(6677),a=r(1389),l=r(2010),o=r(6710),s=r(4276),c=r(4144),u=r(4239),d=r(4138),f=r(3295),h=r(3009),m=r(7348),p=r(7800),v=[{href:"/pre-arrival-report/vessel-details",label:"Vessel details",items:[{href:"/pre-arrival-report/vessel-details/edit-vessel-particulars",label:"Vessel Particulars"},{href:"/pre-arrival-report/vessel-details/edit-additional-information",label:"Additional information"},{href:"/pre-arrival-report/vessel-details/edit-ship-sanitation",label:"Ship sanitation"},{href:"/pre-arrival-report/vessel-details/edit-certificate-details",label:"Certificate details"}]},{href:"/pre-arrival-report/arrival-details",label:"Arrival details"},{href:"/pre-arrival-report/sanitation",label:"Sanitation"},{href:"/pre-arrival-report/#four",label:"Human health"},{href:"/pre-arrival-report/#five",label:"BioFouling"},{href:"/pre-arrival-report/#six",label:"BioSecurity"}],g={vesselParticulars:{vesselName:"Boaty McBoatface",countryOfRegistry:"United Kingdom",imo:"1234567",registration:"89101112",vesselType:"Container vessel",overallLength:"123m"},additionalVesselInformation:{yearBuilt:"1995",grossTonnage:"1000",netTonnage:"900",cargoDocks:"2",cargoHolds:"3",cargoTanks:"4"},shipSanitation:{requiresSanitationCertificate:!0,portAgency:"Acme Port Agency",billingAgency:"Acme Billing Agency"},certificateDetails:{certificateType:"extension",controlDetails:"Mosquito vector",portOfIssue:"Sydney",certificate:"cert.pdf"}},y={vesselName:"Vessel name",countryOfRegistry:"Country of registry",imo:"IMO",registration:"Official registration number",vesselType:"Vessel type",overallLength:"Overall length",yearBuilt:"Year built",grossTonnage:"Gross tonnage",netTonnage:"Net tonnage",cargoDocks:"Cargo docks",cargoHolds:"Cargo holds",cargoTanks:"Cargo tanks",requiresSanitationCertificate:"Requires sanitation certificate",portAgency:"Port agency",billingAgency:"Billing agency",certificateType:"Certificate type",controlDetails:"Control details",portOfIssue:"Port of issue",certificate:"Current Sanitation Certificate"},x=function(e){var t=e.title,r=e.fields;return(0,p.BX)(a.Stack,{gap:1.5,alignItems:"flex-start",children:[(0,p.tZ)(u.H2,{children:t}),(0,p.tZ)(f.SummaryList,{children:r.map(function(e){var t=(0,i.Z)(e,3),r=t[0],n=t[1],a=t[2];return(0,p.BX)(f.SummaryListItem,{children:[(0,p.tZ)(f.SummaryListItemTerm,{children:r}),(0,p.tZ)(f.SummaryListItemDescription,{children:n}),(0,p.tZ)(f.SummaryListItemAction,{children:(0,p.tZ)(m.TextLink,{href:a,children:"Change"})})]},r)})})]})},b=function(e){var t=e.children,r=(0,n.useRouter)();return(0,p.tZ)(s.PageContent,{children:(0,p.BX)(o.Columns,{children:[(0,p.tZ)(o.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,p.tZ)(d.SideNav,{activePath:r.asPath,title:"Pre-arrival report",collapseTitle:"In this section",titleLink:"#",items:v})}),(0,p.tZ)(o.Column,{columnSpan:{xs:12,md:8},columnStart:{lg:5},children:(0,p.BX)(a.Stack,{gap:3,children:[(0,p.tZ)(l.Breadcrumbs,{links:[{href:"#",label:"Home"},{href:"#",label:"Pre-arrival reports"},{label:"#PA123456789"}]}),(0,p.BX)(a.Stack,{gap:1.5,maxWidth:c.tokens.maxWidth.bodyText,children:[(0,p.BX)(a.Stack,{children:[(0,p.tZ)(h.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:"PA123456789"}),(0,p.tZ)(u.H1,{as:"h2",children:"Vessel Details"})]}),(0,p.tZ)(h.Text,{as:"p",fontSize:"md",color:"muted",children:"Introductory paragraph providing context for this single page of the multi-step form. All questions on page must be related - md/default (P)"})]}),t]})})]})})}},7635:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var i=r(1389),n=r(481),a=r(1386),l=r(6843),o=r(6403),s=r(4239),c=r(7828),u=r(3591),d=r(6497),f=r(8119),h=r(5656),m=r(7800);function p(){return(0,m.BX)(m.HY,{children:[(0,m.tZ)(f.$,{title:"Vessel Particulars | Details | Pre-arrival report"}),(0,m.tZ)(d.L,{children:(0,m.tZ)(h.B_,{children:(0,m.tZ)(i.Stack,{gap:3,children:(0,m.tZ)("form",{children:(0,m.BX)(o.FormStack,{children:[(0,m.tZ)(l.Fieldset,{legend:(0,m.tZ)(s.H2,{children:"Vessel Particulars"}),hint:"Supporting information for provide details subheading. All fields are required unless marked optional.",children:(0,m.BX)(o.FormStack,{children:[(0,m.tZ)(u.TextInput,{label:"Vessel name",id:"vesselName",required:!0,maxWidth:"xl",value:h.VO.vesselParticulars.vesselName}),(0,m.tZ)(u.TextInput,{label:"Country of registry",id:"countryOfRegistry",required:!0,maxWidth:"xl",value:h.VO.vesselParticulars.countryOfRegistry}),(0,m.BX)(i.Flex,{gap:1,alignItems:"flex-end",children:[(0,m.tZ)(u.TextInput,{label:"IMO",id:"imo",required:!0,maxWidth:"xl",value:h.VO.vesselParticulars.imo}),(0,m.tZ)(a.Checkbox,{checked:!1,children:"tick if none"})]}),(0,m.tZ)(u.TextInput,{label:"Official registration number",id:"registration",required:!0,maxWidth:"xl",value:h.VO.vesselParticulars.registration}),(0,m.tZ)(c.Select,{label:"Vessel type",id:"vesselType",options:[{value:"a",label:"Container vessel"},{value:"b",label:"Submarine"},{value:"c",label:"Kayak"}],value:h.VO.vesselParticulars.vesselType,maxWidth:"xl"}),(0,m.tZ)(u.TextInput,{label:"Overall length",id:"overallLength",required:!0,maxWidth:"xl",value:h.VO.vesselParticulars.overallLength})]})}),(0,m.BX)(n.ButtonGroup,{children:[(0,m.tZ)(n.Button,{children:"Submit"}),(0,m.tZ)(n.Button,{variant:"secondary",onClick:function(){},children:"Discard"})]})]})})})})})]})}},6710:function(e,t,r){"use strict";var i=r(1502).___internalHook("/","../../../..","../..");e.exports=r(2590),i()},8702:function(e,t,r){"use strict";r.d(t,{SummaryList:function(){return s},SummaryListItem:function(){return c},SummaryListItemAction:function(){return o},SummaryListItemDescription:function(){return l},SummaryListItemTerm:function(){return a}});var i=r(7686),n=r(7800);function a(e){var t=e.children;return(0,n.tZ)(i.Flex,{as:"dt",fontWeight:"bold",width:["100%","30%"],flexShrink:0,minWidth:"200px",fontSize:"sm",children:t})}function l(e){var t=e.children;return(0,n.tZ)(i.Flex,{as:"dd",flexGrow:1,fontSize:"sm",children:t})}function o(e){var t=e.children;return(0,n.tZ)(i.Flex,{as:"dd",children:t})}function s(e){var t=e.children;return(0,n.tZ)(i.Flex,{as:"dl",width:"100%",borderTop:!0,borderColor:"muted",flexDirection:"column",children:t})}function c(e){var t=e.children;return(0,n.tZ)(i.Flex,{borderBottom:!0,borderColor:"muted",flexDirection:["column","row"],gap:.25,paddingY:.75,children:t})}},3295:function(e,t,r){"use strict";var i=r(1502).___internalHook("/","../../../..","../..");e.exports=r(8702),i()},7348:function(e,t,r){"use strict";var i=r(1502).___internalHook("/","../../../..","../..");e.exports=r(711),i()},1798:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pre-arrival-report/vessel-details/edit-vessel-particulars",function(){return r(7635)}])},5732:function(e,t,r){"use strict";function i(e,t,r,i,n,a,l){try{var o=e[a](l),s=o.value}catch(c){r(c);return}o.done?t(s):Promise.resolve(s).then(i,n)}function n(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var l=e.apply(t,r);function o(e){i(l,n,a,o,s,"next",e)}function s(e){i(l,n,a,o,s,"throw",e)}o(void 0)})}}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[536,344,472,298,450,774,888,179],function(){return e(e.s=1798)}),_N_E=e.O()}]);