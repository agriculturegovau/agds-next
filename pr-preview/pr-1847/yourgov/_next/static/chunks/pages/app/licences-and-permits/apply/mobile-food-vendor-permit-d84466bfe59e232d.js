(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9037],{88338:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(44310),r()},54389:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(98028),r()},5651:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(22874),r()},44310:function(e,t,n){"use strict";n.d(t,{Breadcrumbs:function(){return j}});var r=n(90849),i=n(90089),o=n(27378),a=n(64388),l=n(10043),c=n(84007),s=n(8447),d=n(87800);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var p=function(e){var t,n=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,d.tZ)("nav",{"aria-label":i,children:(0,d.tZ)(c.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,r.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,r.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:n})})},f=n(7971),h=n(32084),g={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},b=function(){return(0,d.tZ)(h.XC,{color:"border",size:"sm",css:g})};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var v=(0,o.forwardRef)(function(e,t){var n=e.children,i=e.href;return(0,d.BX)(c.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,d.tZ)(b,{}),i?(0,d.tZ)(f.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({ref:t},e)):n]})}),y=n(11475);function O(e){var t=e.onClick;return(0,d.tZ)(v,{children:(0,d.tZ)(c.Flex,{as:y.Yd,onClick:t,"aria-label":"Show all breadcrumbs","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focusRingFor:"keyboard",link:!0,children:"…"})})}var Z=["label"],w=["label"],x=["label"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j=function(e){var t=e["aria-label"],n=e.links,r=(0,o.useRef)(null),l=n[0],c=l.label,s=(0,i.Z)(l,Z),u=n[n.length-1],f=u.label,h=(0,i.Z)(u,w),g=n.filter(function(e,t,n){return!(0===t||t===n.length-1)}),b=(0,o.useState)(!g.length),m=b[0],y=b[1];return(0,d.BX)(p,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:m,children:[(0,d.tZ)(v,S(S({ref:r},s),{},{children:c})),!m&&g.length?(0,d.tZ)(O,{onClick:function(){var e;y(!0),null===(e=r.current)||void 0===e||e.focus()}}):null,g.map(function(e,t){var n=e.label,r=(0,i.Z)(e,x);return(0,d.tZ)(v,S(S({},r),{},{children:n}),t)}),(0,d.BX)(v,S(S({},h),{},{children:[f,(0,d.tZ)(a.TX,{children:" (current page)"})]}))]})}},98028:function(e,t,n){"use strict";n.d(t,{Callout:function(){return u}});var r=n(10043),i=n(84007),o=n(7226),a=n(89205),l=n(32084),c=n(87800),s={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},d=function(e){var t=e.as,n=e.children,r=e.variant;return(0,c.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:s[void 0===r?"regular":r].titleSize,fontWeight:"bold",lineHeight:"heading",children:n})},u=function(e){var t=e.as,n=e.background,a=e.children,u=e.icon,p=e.onBodyAlt,f=e.title,h=e.tone,g=void 0===h?"neutral":h,b=e.variant,m=void 0===b?"regular":b,v=s[m],y=v.textGap,O=v.iconGap,Z=v.padding,w=v.flexDirection,x=v.titlePaddingTop,k={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,c.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:s[m].iconSize})}}[g],S=k.background,j=k.border,P=k.icon;return(0,c.BX)(i.Flex,{as:t,flexDirection:w,rounded:!0,gap:O,background:"neutral"===g&&(null!=p?p:"shadeAlt"===n)?"shadeAlt":S,borderColor:j,padding:Z,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u||P?(0,c.tZ)(i.Flex,{flexShrink:0,children:u||P}):null,(0,c.BX)(o.Stack,{gap:y,css:(0,r.iv)({paddingTop:x},"",""),children:[f?(0,c.tZ)(d,{variant:m,children:f}):null,a]})]})}},911:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(54389),i=n(68944),o=n(79706),a=n(87800);function l(){return(0,a.tZ)(r.Callout,{title:"Need help?",children:(0,a.BX)(i.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"02 9481 1122"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email"," ",(0,a.tZ)(o.TextLink,{href:"mailto:emailaccount@yourgov.gov.au",children:"emailaccount@yourgov.gov.au"})]})})}},15748:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var r=n(27378),i=n(50456),o=n(94303),a=n(68944),l=n(39402),c=n(87800),s=function(e){var t=e.pretext,n=e.title,s=e.introduction,d=e.callToAction,u=e.hasAllFieldsRequiredMessage;return(0,c.BX)(i.Stack,{gap:1.5,children:[(0,c.BX)(i.Stack,{children:[t?(0,c.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,c.tZ)(o.H1,{children:n})]}),s?(0,c.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:s}):null,d,u&&(0,c.tZ)(l.z,{})]})}},15907:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(27378),i=n(88338),o=n(2951),a=n(94303),l=n(68944),c=n(20034),s=n(74578),d=n(41380),u=n(50456),p=n(39395),f=n(40670),h=n(911),g=n(5651),b=n(79706),m=n(87800);function v(e){var t=e.drawerContent,n=e.linkContent,i=e.linkHref,o=(0,r.useState)(!1),a=o[0],l=o[1];return(0,m.BX)(m.HY,{children:[(0,m.tZ)(b.TextLink,{href:i,onClick:function(e){e.metaKey||(e.preventDefault(),l(!0))},children:n}),(0,m.tZ)(g.Drawer,{isOpen:a,onClose:function(){l(!1)},title:"Help",actions:(0,m.tZ)(b.TextLinkExternal,{href:i,children:"Open in new window"}),width:"lg",children:t})]})}var y=n(79173),O=n(15748),Z=function(){return(0,m.BX)(r.Fragment,{children:[(0,m.tZ)(f.$,{title:"Apply for a mobile food vendor permit"}),(0,m.tZ)(s.PageContent,{children:(0,m.tZ)(o.Columns,{children:(0,m.tZ)(o.Column,{columnSpan:8,children:(0,m.BX)(u.Stack,{gap:3,children:[(0,m.tZ)(i.Breadcrumbs,{links:[{label:"Home",href:"/app"},{label:"Manage permits",href:"/app/licences-and-permits"},{label:"Apply for a new permit",href:"/app/licences-and-permits/apply"},{label:"Apply for a mobile food vendor permit"}]}),(0,m.tZ)(O.V,{title:"Apply for a mobile food vendor permit",introduction:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas.",callToAction:(0,m.tZ)(c.Details,{label:"More information about mobile food vending business types",children:(0,m.BX)(d.Prose,{children:[(0,m.tZ)("p",{children:"Regulating a mobile food vending business is essential to ensure public health, safety, and fairness in the marketplace. Such regulations help maintain high standards of food hygiene, preventing contamination and ensuring that vendors adhere to safe food handling practices."}),(0,m.tZ)("p",{children:(0,m.tZ)(v,{drawerContent:(0,m.BX)(u.Stack,{gap:2,children:[(0,m.tZ)(a.H1,{children:"What you need to apply for a permit"}),(0,m.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:"Regulating a mobile food vending business is crucial for several reasons, primarily to safeguard public health, ensure safety, and maintain fairness within the marketplace. These regulations play a pivotal role in upholding high standards of food hygiene, which is vital for preventing foodborne illnesses and contamination. By enforcing strict guidelines for food preparation, storage, and handling, these regulations help ensure that vendors follow best practices and adhere to sanitary protocols."}),(0,m.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:"Moreover, regulations help create a level playing field in the food vending industry. They set clear standards and requirements that all vendors must meet, which prevents unfair competition and ensures that no one gains an advantage by cutting corners on health and safety measures. This promotes fairness and transparency in the market, allowing consumers to make informed choices and trust that the food they purchase is safe and of high quality."}),(0,m.tZ)(l.Text,{as:"p",fontSize:"md",color:"muted",children:"In addition to these health and safety benefits, regulations can also address operational aspects such as permitting, zoning, and waste management. This ensures that mobile food vendors operate within designated areas, do not cause disruptions, and manage waste responsibly, contributing to the overall cleanliness and orderliness of public spaces. Overall, effective regulation is essential for protecting the public, supporting fair competition, and enhancing the overall experience for both vendors and consumers."}),(0,m.tZ)(h.O,{})]}),linkContent:"Learn more about mobile food business types",linkHref:"https://exports.agriculture.gov.au/help/page/example-reference-article"})})]})})}),(0,m.tZ)(y.Sf,{}),(0,m.tZ)(h.O,{})]})})})})]})},w=Z;Z.getLayout=function(e){return(0,m.tZ)(p.L,{children:(0,m.tZ)(y.iP,{children:e})})}},33732:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/licences-and-permits/apply/mobile-food-vendor-permit",function(){return n(15907)}])}},function(e){e.O(0,[4371,9998,9073,2345,6749,8301,1854,8837,8486,8163,2294,9395,2210,6741,7098,1249,2571,401,624,2924,9173,2874,9774,2888,179],function(){return e(e.s=33732)}),_N_E=e.O()}]);