(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5244],{19263:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(79065),r()},65506:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(89955),r()},4508:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(24377),r()},79065:function(e,t,n){"use strict";n.d(t,{Breadcrumbs:function(){return P}});var r=n(90849),i=n(90089),o=n(27378),a=n(34456),l=n(10043),c=n(19631),s=n(8464),d=n(87800);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var p=function(e){var t,n=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,d.tZ)("nav",{"aria-label":i,children:(0,d.tZ)(c.Flex,{alignItems:"center",as:"ol",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,r.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,r.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),flexWrap:"wrap",gap:.5,children:n})})},f=n(77797),h=n(48499),g={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},b=function(){return(0,d.tZ)(h.XC,{color:"border",css:g,size:"sm"})};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var v=(0,o.forwardRef)(function(e,t){var n=e.children,i=e.href;return(0,d.BX)(c.Flex,{alignItems:"center",as:"li",color:"text",fontSize:"sm",gap:.5,children:[(0,d.tZ)(b,{}),i?(0,d.tZ)(f.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({ref:t},e)):n]})}),y=n(58229);function O(e){var t=e.onClick;return(0,d.tZ)(v,{children:(0,d.tZ)(c.Flex,{alignItems:"center","aria-expanded":"false","aria-label":"Show all breadcrumbs",as:y.Yd,focusRingFor:"keyboard",fontSize:"sm",justifyContent:"center",link:!0,onClick:t,children:"…"})})}var Z=["label"],w=["label"],x=["label"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=function(e){var t=e["aria-label"],n=e.links,r=(0,o.useRef)(null),l=n[0],c=l.label,s=(0,i.Z)(l,Z),u=n[n.length-1],f=u.label,h=(0,i.Z)(u,w),g=n.filter(function(e,t,n){return!(0===t||t===n.length-1)}),b=(0,o.useState)(!g.length),m=b[0],y=b[1];return(0,d.BX)(p,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:m,children:[(0,d.tZ)(v,S(S({ref:r},s),{},{children:c})),!m&&g.length?(0,d.tZ)(O,{onClick:function(){var e;y(!0),null===(e=r.current)||void 0===e||e.focus()}}):null,g.map(function(e,t){var n=e.label,r=(0,i.Z)(e,x);return(0,d.tZ)(v,S(S({},r),{},{children:n}),t)}),(0,d.BX)(v,S(S({},h),{},{children:[f,(0,d.tZ)(a.T,{children:" (current page)"})]}))]})}},89955:function(e,t,n){"use strict";n.d(t,{Callout:function(){return u}});var r=n(10043),i=n(19631),o=n(96778),a=n(92288),l=n(48499),c=n(87800),s={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},d=function(e){var t=e.as,n=e.children,r=e.variant;return(0,c.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:s[void 0===r?"regular":r].titleSize,fontWeight:"bold",lineHeight:"heading",children:n})},u=function(e){var t=e.as,n=e.background,a=e.children,u=e.icon,p=e.onBodyAlt,f=e.title,h=e.tone,g=void 0===h?"neutral":h,b=e.variant,m=void 0===b?"regular":b,v=s[m],y=v.textGap,O=v.iconGap,Z=v.padding,w=v.flexDirection,x=v.titlePaddingTop,k={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,c.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:s[m].iconSize})}}[g],S=k.background,P=k.border,j=k.icon;return(0,c.BX)(i.Flex,{as:t,background:"neutral"===g&&(null!=p?p:"shadeAlt"===n)?"shadeAlt":S,borderColor:P,borderLeft:!0,borderLeftWidth:"xl",flexDirection:w,gap:O,highContrastOutline:!0,padding:Z,rounded:!0,children:[u||j?(0,c.tZ)(i.Flex,{flexShrink:0,children:u||j}):null,(0,c.BX)(o.Stack,{css:(0,r.iv)({paddingTop:x},"",""),gap:y,children:[f?(0,c.tZ)(d,{variant:m,children:f}):null,a]})]})}},97700:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(65506),i=n(79628),o=n(94609),a=n(87800);function l(){return(0,a.tZ)(r.Callout,{title:"Need help?",children:(0,a.BX)(i.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"02 9481 1122"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email"," ",(0,a.tZ)(o.TextLink,{href:"mailto:emailaccount@yourgov.gov.au",children:"emailaccount@yourgov.gov.au"})]})})}},7214:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(27378),i=n(4508),o=n(94609),a=n(87800);function l(e){var t=e.drawerContent,n=e.linkContent,l=e.linkHref,c=(0,r.useState)(!1),s=c[0],d=c[1];return(0,a.BX)(a.HY,{children:[(0,a.tZ)(o.TextLink,{href:l,onClick:function(e){e.metaKey||(e.preventDefault(),d(!0))},children:n}),(0,a.tZ)(i.Drawer,{actions:(0,a.tZ)(o.TextLinkExternal,{href:l,children:"Open in new window"}),isOpen:s,onClose:function(){d(!1)},title:"Help",width:"lg",children:t})]})}},76002:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var r=n(27378),i=n(58607),o=n(13497),a=n(79628),l=n(82973),c=n(87800),s=function(e){var t=e.pretext,n=e.title,s=e.introduction,d=e.callToAction,u=e.hasAllFieldsRequiredMessage;return(0,c.BX)(i.Stack,{gap:1.5,children:[(0,c.BX)(i.Stack,{children:[t?(0,c.tZ)(a.Text,{color:"muted",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,c.tZ)(o.H1,{children:n})]}),s?(0,c.tZ)(a.Text,{as:"p",color:"muted",fontSize:"md",children:s}):null,d,u&&(0,c.tZ)(l.z,{})]})}},3824:function(e,t,n){"use strict";n.r(t);var r=n(27378),i=n(19263),o=n(23748),a=n(13497),l=n(79628),c=n(80043),s=n(60564),d=n(67728),u=n(58607),p=n(94308),f=n(33040),h=n(97700),g=n(7214),b=n(43605),m=n(76002),v=n(87800),y=function(){return(0,v.BX)(r.Fragment,{children:[(0,v.tZ)(f.$,{title:"Apply for a mobile food vendor permit | Permits"}),(0,v.tZ)(s.PageContent,{children:(0,v.tZ)(o.Columns,{children:(0,v.tZ)(o.Column,{columnSpan:{xs:12,md:8},children:(0,v.BX)(u.Stack,{gap:3,children:[(0,v.tZ)(i.Breadcrumbs,{links:[{label:"Dashboard",href:"/app/dashboard"},{label:"Permits",href:"/app/permits"},{label:"Apply for a new permit",href:"/app/permits/apply-for-new-permit"},{label:"Apply for a mobile food vendor permit"}]}),(0,v.tZ)(m.V,{callToAction:(0,v.tZ)(c.Details,{label:"More information about mobile food vending business types",children:(0,v.BX)(d.Prose,{children:[(0,v.tZ)("p",{children:"Regulating a mobile food vending business is essential to ensure public health, safety, and fairness in the marketplace. Such regulations help maintain high standards of food hygiene, preventing contamination and ensuring that vendors adhere to safe food handling practices."}),(0,v.tZ)("p",{children:(0,v.tZ)(g.f,{drawerContent:(0,v.BX)(u.Stack,{gap:2,children:[(0,v.tZ)(a.H1,{children:"What you need to apply for a permit"}),(0,v.tZ)(l.Text,{as:"p",color:"muted",fontSize:"lg",children:"Regulating a mobile food vending business is crucial for several reasons, primarily to safeguard public health, ensure safety, and maintain fairness within the marketplace."}),(0,v.tZ)(l.Text,{as:"p",fontSize:"md",children:"These regulations play a pivotal role in upholding high standards of food hygiene, which is vital for preventing foodborne illnesses and contamination. By enforcing strict guidelines for food preparation, storage, and handling, these regulations help ensure that vendors follow best practices and adhere to sanitary protocols."}),(0,v.tZ)(l.Text,{as:"p",fontSize:"md",children:"Moreover, regulations help create a level playing field in the food vending industry. They set clear standards and requirements that all vendors must meet, which prevents unfair competition and ensures that no one gains an advantage by cutting corners on health and safety measures. This promotes fairness and transparency in the market, allowing consumers to make informed choices and trust that the food they purchase is safe and of high quality."}),(0,v.tZ)(l.Text,{as:"p",fontSize:"md",children:"In addition to these health and safety benefits, regulations can also address operational aspects such as permitting, zoning, and waste management. This ensures that mobile food vendors operate within designated areas, do not cause disruptions, and manage waste responsibly, contributing to the overall cleanliness and orderliness of public spaces. Overall, effective regulation is essential for protecting the public, supporting fair competition, and enhancing the overall experience for both vendors and consumers."}),(0,v.tZ)(h.O,{})]}),linkContent:"Learn more about mobile food business types",linkHref:"https://exports.agriculture.gov.au/help/page/example-reference-article"})})]})}),introduction:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas.",title:"Apply for a mobile food vendor permit"}),(0,v.tZ)(b.Sf,{}),(0,v.tZ)(h.O,{})]})})})})]})};t.default=y,y.getLayout=function(e){return(0,v.tZ)(p.L,{children:(0,v.tZ)(b.iP,{children:e})})}},8766:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/permits/apply-for-new-permit/mobile-food-vendor-permit",function(){return n(3824)}])}},function(e){e.O(0,[6484,9998,9073,3982,8474,8301,1165,1854,8837,6212,2644,1338,8205,5294,8164,4308,840,6140,8495,6232,3434,6257,3605,2888,9774,179],function(){return e(e.s=8766)}),_N_E=e.O()}]);