(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{84199:function(e,t,i){"use strict";var n=i(51502).___internalHook("/","../../../..","../..");e.exports=i(23599),n()},23599:function(e,t,i){"use strict";i.d(t,{Callout:function(){return Callout}});var n=i(10043),r=i(76573),o=i(37601),l=i(18979),a=i(90632),d=i(87800),c={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},CalloutTitle=function(e){var t=e.as,i=e.children,n=e.variant;return(0,d.tZ)(l.Text,{as:void 0===t?"h2":t,fontSize:c[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:i})},Callout=function(e){var t=e.as,i=e.background,l=e.children,u=e.icon,s=e.onBodyAlt,h=e.title,p=e.tone,g=void 0===p?"neutral":p,f=e.variant,m=void 0===f?"regular":f,Z=c[m],v=Z.textGap,k=Z.iconGap,x=Z.padding,S=Z.flexDirection,b=Z.titlePaddingTop,T={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,d.tZ)(a.InfoFilledIcon,{"aria-hidden":"false","aria-label":"Information",color:"info",size:c[m].iconSize})}}[g],C=T.background,P=T.border,_=T.icon;return(0,d.BX)(r.Flex,{as:t,flexDirection:S,rounded:!0,gap:k,background:"neutral"===g&&(null!=s?s:"shadeAlt"===i)?"shadeAlt":C,borderColor:P,padding:x,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u||_?(0,d.tZ)(r.Flex,{flexShrink:0,children:u||_}):null,(0,d.BX)(o.Stack,{gap:v,css:(0,n.iv)({paddingTop:b},"",""),children:[h?(0,d.tZ)(CalloutTitle,{variant:m,children:h}):null,l]})]})}},45497:function(e,t,i){"use strict";i.d(t,{$:function(){return FormHelpCallout}});var n=i(15933),r=i(84199),o=i(87800),FormHelpCallout=function(){return(0,o.tZ)(r.Callout,{title:"Need help?",children:(0,o.tZ)(n.Prose,{children:(0,o.BX)("p",{children:["Call ",(0,o.tZ)("strong",{children:"000 000 000"})," (9am to 5pm AEST Monday to Friday)",(0,o.tZ)("br",{}),"Email"," ",(0,o.tZ)("a",{href:"mailto:emailaccount@agriculture.gov.au",children:"emailaccount@agriculture.gov.au"})]})})})}},61014:function(e,t,i){"use strict";i.d(t,{V:function(){return PageTitle}});var n=i(27378),r=i(18717),o=i(92852),l=i(54149),a=i(87800),PageTitle=function(e){var t=e.pretext,i=e.title,d=e.introduction,c=e.callToAction;return(0,a.BX)(r.Stack,{gap:1.5,children:[(0,a.BX)(r.Stack,{children:[t?(0,a.tZ)(l.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,n.isValidElement)(i)?i:(0,a.tZ)(o.H1,{children:i})]}),d?(0,a.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:d}):null,c]})}},53163:function(e,t,i){"use strict";i.r(t);var n=i(27378),r=i(72892),o=i(53135),l=i(15933),a=i(18717),d=i(92852),c=i(89719),u=i(47784),s=i(55735),h=i(1783),p=i(16949),g=i(45497),f=i(61014),m=i(2782),Z=i(87800),Page=function(){return(0,Z.BX)(n.Fragment,{children:[(0,Z.tZ)(p.$,{title:"Your personal details | Register a pet"}),(0,Z.tZ)(r.PageContent,{children:(0,Z.tZ)(o.Columns,{children:(0,Z.tZ)(o.Column,{columnSpan:{xs:12,md:8},children:(0,Z.BX)(a.Stack,{gap:3,children:[(0,Z.tZ)(c.DirectionLink,{href:"/services/registrations/pet",direction:"left",children:"Back"}),(0,Z.tZ)(f.V,{title:"Your personal details",introduction:"To complete this process you can check, update and confirm your current contact and address details."}),(0,Z.BX)(a.Stack,{gap:1.5,children:[(0,Z.tZ)(d.H2,{children:"Registration requirements"}),(0,Z.BX)(l.Prose,{children:[(0,Z.tZ)("p",{children:"To speed up the process of registering a pet you will need to provide:"}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:"Personal details"}),(0,Z.tZ)("li",{children:"Address details"}),(0,Z.tZ)("li",{children:"Contact details"})]})]})]}),(0,Z.tZ)("div",{children:(0,Z.tZ)(u.ButtonLink,{href:"/services/registrations/pet/task-1/form",children:"Get started"})}),(0,Z.tZ)(s.Divider,{}),(0,Z.tZ)(g.$,{})]})})})})]})};t.default=Page,Page.getLayout=function(e){return(0,Z.tZ)(h.I,{focusMode:!0,children:(0,Z.tZ)(m.N,{children:e})})}},45790:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/registrations/pet/task-1",function(){return i(53163)}])}},function(e){e.O(0,[459,998,376,57,490,804,924,579,28,782,774,888,179],function(){return e(e.s=45790)}),_N_E=e.O()}]);