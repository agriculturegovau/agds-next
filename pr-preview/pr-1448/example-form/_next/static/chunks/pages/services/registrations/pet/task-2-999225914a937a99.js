(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{5497:function(e,t,i){"use strict";i.d(t,{$:function(){return FormHelpCallout}});var n=i(5933),r=i(4199),l=i(7800),FormHelpCallout=function(){return(0,l.tZ)(r.Callout,{title:"Need help?",children:(0,l.tZ)(n.Prose,{children:(0,l.BX)("p",{children:["Call ",(0,l.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,l.tZ)("br",{}),"Email"," ",(0,l.tZ)("a",{href:"mailto:emailaccount@agriculture.gov.au",children:"emailaccount@agriculture.gov.au"})]})})})}},1014:function(e,t,i){"use strict";i.d(t,{V:function(){return PageTitle}});var n=i(7378),r=i(8717),l=i(2852),o=i(4149),a=i(7800),PageTitle=function(e){var t=e.pretext,i=e.title,d=e.introduction,c=e.callToAction;return(0,a.BX)(r.Stack,{gap:1.5,children:[(0,a.BX)(r.Stack,{children:[t?(0,a.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(i)?i:(0,a.tZ)(l.H1,{children:i})]}),d?(0,a.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:d}):null,c]})}},8638:function(e,t,i){"use strict";i.r(t);var n=i(7378),r=i(2892),l=i(3135),o=i(5933),a=i(8717),d=i(2852),c=i(9719),u=i(7784),s=i(5735),h=i(1783),g=i(6949),p=i(5497),f=i(1014),Z=i(2782),m=i(7800),Page=function(){return(0,m.BX)(n.Fragment,{children:[(0,m.tZ)(g.$,{title:"Your pet's details | Register a pet"}),(0,m.tZ)(r.PageContent,{children:(0,m.tZ)(l.Columns,{children:(0,m.tZ)(l.Column,{columnSpan:{xs:12,md:8},children:(0,m.BX)(a.Stack,{gap:3,children:[(0,m.tZ)(c.DirectionLink,{href:"/services/registrations/pet",direction:"left",children:"Back"}),(0,m.tZ)(f.V,{title:"Your pet's details",introduction:"Under state regulation you are required to register any pet living with you in your domestic residence in an urban zone."}),(0,m.BX)(a.Stack,{gap:1.5,children:[(0,m.tZ)(d.H2,{children:"Registration requirements"}),(0,m.BX)(o.Prose,{children:[(0,m.tZ)("p",{children:"To speed up the process of registering a pet you will need to provide:"}),(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:"address details"}),(0,m.tZ)("li",{children:"current vaccination certificate"})]})]})]}),(0,m.tZ)("div",{children:(0,m.tZ)(u.ButtonLink,{href:"/services/registrations/pet/task-2/form",children:"Get started"})}),(0,m.tZ)(s.Divider,{}),(0,m.BX)(a.Stack,{gap:1.5,children:[(0,m.tZ)(d.H2,{children:"Information on pet registration rules and regulations"}),(0,m.tZ)(o.Prose,{children:(0,m.BX)("ul",{children:[(0,m.tZ)("li",{children:(0,m.tZ)("a",{href:"#",children:"State pet registration rules"})}),(0,m.tZ)("li",{children:(0,m.tZ)("a",{href:"#",children:"National pet registration legislative framework"})}),(0,m.tZ)("li",{children:(0,m.tZ)("a",{href:"#",children:"Meaningful link label that shows link purpose"})})]})})]}),(0,m.tZ)(p.$,{})]})})})})]})};t.default=Page,Page.getLayout=function(e){return(0,m.tZ)(h.I,{focusMode:!0,children:(0,m.tZ)(Z.N,{children:e})})}},4199:function(e,t,i){"use strict";var n=i(1502).___internalHook("/","../../../..","../..");e.exports=i(3599),n()},3599:function(e,t,i){"use strict";i.d(t,{Callout:function(){return Callout}});var n=i(43),r=i(6573),l=i(7601),o=i(8979),a=i(632),d=i(7800),c={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},CalloutTitle=function(e){var t=e.as,i=e.children,n=e.variant;return(0,d.tZ)(o.Text,{as:void 0===t?"h2":t,fontSize:c[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:i})},Callout=function(e){var t=e.as,i=e.background,o=e.children,u=e.icon,s=e.onBodyAlt,h=e.title,g=e.tone,p=void 0===g?"neutral":g,f=e.variant,Z=void 0===f?"regular":f,m=c[Z],v=m.textGap,k=m.iconGap,S=m.padding,b=m.flexDirection,x=m.titlePaddingTop,T={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,d.tZ)(a.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:c[Z].iconSize})}}[p],C=T.background,B=T.border,P=T.icon;return(0,d.BX)(r.Flex,{as:t,flexDirection:b,rounded:!0,gap:k,background:"neutral"===p&&(null!=s?s:"shadeAlt"===i)?"shadeAlt":C,borderColor:B,padding:S,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u||P?(0,d.tZ)(r.Flex,{flexShrink:0,children:u||P}):null,(0,d.BX)(l.Stack,{gap:v,css:(0,n.iv)({paddingTop:x},"",""),children:[h?(0,d.tZ)(CalloutTitle,{variant:Z,children:h}):null,o]})]})}},7441:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet/task-2",function(){return i(8638)}])}},function(e){e.O(0,[465,64,401,634,553,189,804,250,782,774,888,179],function(){return e(e.s=7441)}),_N_E=e.O()}]);