(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9909],{65506:function(e,i,t){"use strict";var n=t(51502).___internalHook("/","../../../..","../..");e.exports=t(89955),n()},89955:function(e,i,t){"use strict";t.d(i,{Callout:function(){return p}});var n=t(10043),r=t(19631),o=t(96778),a=t(92288),l=t(48499),d=t(87800),c={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},u=function(e){var i=e.as,t=e.children,n=e.variant;return(0,d.tZ)(a.Text,{as:void 0===i?"h2":i,fontSize:c[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:t})},p=function(e){var i=e.as,t=e.background,a=e.children,p=e.icon,s=e.onBodyAlt,h=e.title,f=e.tone,g=void 0===f?"neutral":f,m=e.variant,v=void 0===m?"regular":m,b=c[v],x=b.textGap,Z=b.iconGap,k=b.padding,T=b.flexDirection,S=b.titlePaddingTop,_={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,d.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:c[v].iconSize})}}[g],y=_.background,w=_.border,z=_.icon;return(0,d.BX)(r.Flex,{as:i,background:"neutral"===g&&(null!=s?s:"shadeAlt"===t)?"shadeAlt":y,borderColor:w,borderLeft:!0,borderLeftWidth:"xl",flexDirection:T,gap:Z,highContrastOutline:!0,padding:k,rounded:!0,children:[p||z?(0,d.tZ)(r.Flex,{flexShrink:0,children:p||z}):null,(0,d.BX)(o.Stack,{css:(0,n.iv)({paddingTop:S},"",""),gap:x,children:[h?(0,d.tZ)(u,{variant:v,children:h}):null,a]})]})}},97700:function(e,i,t){"use strict";t.d(i,{O:function(){return l}});var n=t(65506),r=t(79628),o=t(94609),a=t(87800);function l(){return(0,a.tZ)(n.Callout,{title:"Need help?",children:(0,a.BX)(r.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"02 9481 1122"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email"," ",(0,a.tZ)(o.TextLink,{href:"mailto:emailaccount@yourgov.gov.au",children:"emailaccount@yourgov.gov.au"})]})})}},15591:function(e,i,t){"use strict";t.r(i);var n=t(27378),r=t(86677),o=t(23748),a=t(51623),l=t(13497),d=t(60564),c=t(52644),u=t(58607),p=t(79628),s=t(94609),h=t(94308),f=t(33040),g=t(97700),m=t(43605),v=t(20547),b=t(21855),x=t(87800),Z=function(){var e=(0,r.useRouter)(),i=e.query,t=e.isReady,h=(0,m.t7)(),Z=h.formState,k=h.formTitle,T=(null==i?void 0:i.id)===(null==Z?void 0:Z.id)&&(null==Z?void 0:Z.completed);return(0,x.BX)(n.Fragment,{children:[(0,x.tZ)(f.$,{title:"Application submitted | ".concat(k)}),(0,x.tZ)(d.PageContent,{children:(0,x.tZ)(o.Columns,{children:(0,x.tZ)(o.Column,{columnSpan:8,children:(0,x.BX)(v.Y,{hideRequiredFieldsMessage:!0,title:"Application submitted",children:[t?T?(0,x.BX)(x.HY,{children:[(0,x.tZ)(c.PageAlert,{title:"Your application for a food truck permit has been submitted",tone:"success",children:(0,x.BX)(p.Text,{as:"p",children:["Reference:"," ",(0,x.tZ)(p.Text,{fontWeight:"bold",children:(0,x.tZ)(s.TextLink,{href:"/app/permits/".concat(Z.id),children:Z.id})})]})}),(0,x.BX)(u.Stack,{gap:1.5,children:[(0,x.tZ)(l.H2,{children:"What happens next"}),(0,x.tZ)(p.Text,{as:"p",children:"It will take 10 business days for your application to be reviewed by a yourGov representative."}),(0,x.tZ)(a.DirectionLink,{direction:"right",href:b.Hv,children:"Manage existing permits"})]})]}):(0,x.tZ)(c.PageAlert,{title:"No matching application found",tone:"error",children:(0,x.tZ)(a.DirectionLink,{direction:"right",href:b.Hv,children:"Manage existing permits"})}):null,(0,x.tZ)(g.O,{})]})})})})]})};i.default=Z,Z.getLayout=function(e){return(0,x.tZ)(h.L,{focusMode:!0,children:(0,x.tZ)(m.iP,{children:e})})}},54491:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/permits/apply-for-new-permit/mobile-food-vendor-permit/success",function(){return t(15591)}])}},function(e){e.O(0,[6484,9998,9073,3982,8474,8301,1165,1854,8837,6212,2644,1338,8205,5294,8164,4308,840,6140,8495,6232,3434,6257,3605,2888,9774,179],function(){return e(e.s=54491)}),_N_E=e.O()}]);