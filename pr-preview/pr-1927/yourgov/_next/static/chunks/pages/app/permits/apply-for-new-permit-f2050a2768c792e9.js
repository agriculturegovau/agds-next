(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1754],{19263:function(e,r,n){"use strict";var t=n(51502).___internalHook("/","../../../..","../..");e.exports=n(79065),t()},65506:function(e,r,n){"use strict";var t=n(51502).___internalHook("/","../../../..","../..");e.exports=n(89955),t()},70777:function(e,r,n){"use strict";var t=n(51502).___internalHook("/","../../../..","../..");e.exports=n(56091),t()},79065:function(e,r,n){"use strict";n.d(r,{Breadcrumbs:function(){return S}});var t=n(90849),i=n(90089),o=n(27378),a=n(34456),l=n(10043),c=n(19631),d=n(8464),s=n(87800);function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}var h=function(e){var r,n=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,s.tZ)("nav",{"aria-label":i,children:(0,s.tZ)(c.Flex,{alignItems:"center",as:"ol",css:(0,l.iv)(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach(function(r){(0,t.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(r={},(0,t.Z)(r,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,t.Z)(r,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),r)),"",""),flexWrap:"wrap",gap:.5,children:n})})},p=n(77797),f=n(48499),b={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},g=function(){return(0,s.tZ)(f.XC,{color:"border",css:b,size:"sm"})};function Z(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}var m=(0,o.forwardRef)(function(e,r){var n=e.children,i=e.href;return(0,s.BX)(c.Flex,{alignItems:"center",as:"li",color:"text",fontSize:"sm",gap:.5,children:[(0,s.tZ)(g,{}),i?(0,s.tZ)(p.TextLink,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(n),!0).forEach(function(r){(0,t.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}({ref:r},e)):n]})}),y=n(58229);function v(e){var r=e.onClick;return(0,s.tZ)(m,{children:(0,s.tZ)(c.Flex,{alignItems:"center","aria-expanded":"false","aria-label":"Show all breadcrumbs",as:y.Yd,focusRingFor:"keyboard",fontSize:"sm",justifyContent:"center",link:!0,onClick:r,children:"…"})})}var O=["label"],k=["label"],w=["label"];function x(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function C(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?x(Object(n),!0).forEach(function(r){(0,t.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var S=function(e){var r=e["aria-label"],n=e.links,t=(0,o.useRef)(null),l=n[0],c=l.label,d=(0,i.Z)(l,O),u=n[n.length-1],p=u.label,f=(0,i.Z)(u,k),b=n.filter(function(e,r,n){return!(0===r||r===n.length-1)}),g=(0,o.useState)(!b.length),Z=g[0],y=g[1];return(0,s.BX)(h,{"aria-label":void 0===r?"Breadcrumbs":r,isExpandable:!0,isExpanded:Z,children:[(0,s.tZ)(m,C(C({ref:t},d),{},{children:c})),!Z&&b.length?(0,s.tZ)(v,{onClick:function(){var e;y(!0),null===(e=t.current)||void 0===e||e.focus()}}):null,b.map(function(e,r){var n=e.label,t=(0,i.Z)(e,w);return(0,s.tZ)(m,C(C({},t),{},{children:n}),r)}),(0,s.BX)(m,C(C({},f),{},{children:[p,(0,s.tZ)(a.T,{children:" (current page)"})]}))]})}},89955:function(e,r,n){"use strict";n.d(r,{Callout:function(){return u}});var t=n(10043),i=n(19631),o=n(96778),a=n(92288),l=n(48499),c=n(87800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},s=function(e){var r=e.as,n=e.children,t=e.variant;return(0,c.tZ)(a.Text,{as:void 0===r?"h2":r,fontSize:d[void 0===t?"regular":t].titleSize,fontWeight:"bold",lineHeight:"heading",children:n})},u=function(e){var r=e.as,n=e.background,a=e.children,u=e.icon,h=e.onBodyAlt,p=e.title,f=e.tone,b=void 0===f?"neutral":f,g=e.variant,Z=void 0===g?"regular":g,m=d[Z],y=m.textGap,v=m.iconGap,O=m.padding,k=m.flexDirection,w=m.titlePaddingTop,x={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,c.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[Z].iconSize})}}[b],C=x.background,S=x.border,j=x.icon;return(0,c.BX)(i.Flex,{as:r,background:"neutral"===b&&(null!=h?h:"shadeAlt"===n)?"shadeAlt":C,borderColor:S,borderLeft:!0,borderLeftWidth:"xl",flexDirection:k,gap:v,highContrastOutline:!0,padding:O,rounded:!0,children:[u||j?(0,c.tZ)(i.Flex,{flexShrink:0,children:u||j}):null,(0,c.BX)(o.Stack,{css:(0,t.iv)({paddingTop:w},"",""),gap:y,children:[p?(0,c.tZ)(s,{variant:Z,children:p}):null,a]})]})}},56091:function(e,r,n){"use strict";n.d(r,{Card:function(){return s},CardInner:function(){return u},CardLink:function(){return p}});var t=n(90849),i=n(10043),o=n(48050),a=n(8464),l=n(87800);function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach(function(r){(0,t.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var s=function(e){var r=e.as,n=e.background,t=e.children,c=e.className,s=e.shadow,u=e.clickable;return(0,l.tZ)(o.Box,{as:r,background:void 0===n?"body":n,border:!0,borderColor:"muted",className:c,css:(0,i.iv)(d(d({position:"relative",overflow:"hidden"},u&&{":has(:focus-visible)":a.lB.outline,"@supports not selector(:has(*))":{":focus-within":a.lB.outline}}),s&&{boxShadow:a.tokens.shadow.sm,"&:hover":u?{boxShadow:a.tokens.shadow.md}:void 0}),"",""),display:"block",rounded:!0,children:t})},u=function(e){var r=e.children;return(0,l.tZ)(o.Box,{padding:1.5,children:r})};function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}var p=function(e){var r=(0,a.yF)();return(0,l.tZ)(r,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach(function(r){(0,t.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}({css:[o.Wf,'display:flex;justify-content:space-between;&:focus, &:focus-visible{outline:none;}&::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;}',"","",""]},e))}},97700:function(e,r,n){"use strict";n.d(r,{O:function(){return l}});var t=n(65506),i=n(79628),o=n(94609),a=n(87800);function l(){return(0,a.tZ)(t.Callout,{title:"Need help?",children:(0,a.BX)(i.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"02 9481 1122"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email"," ",(0,a.tZ)(o.TextLink,{href:"mailto:emailaccount@yourgov.gov.au",children:"emailaccount@yourgov.gov.au"})]})})}},76002:function(e,r,n){"use strict";n.d(r,{V:function(){return d}});var t=n(27378),i=n(58607),o=n(13497),a=n(79628),l=n(82973),c=n(87800),d=function(e){var r=e.pretext,n=e.title,d=e.introduction,s=e.callToAction,u=e.hasAllFieldsRequiredMessage;return(0,c.BX)(i.Stack,{gap:1.5,children:[(0,c.BX)(i.Stack,{children:[r?(0,c.tZ)(a.Text,{color:"muted",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",children:r}):null,(0,t.isValidElement)(n)?n:(0,c.tZ)(o.H1,{children:n})]}),d?(0,c.tZ)(a.Text,{as:"p",color:"muted",fontSize:"md",children:d}):null,s,u&&(0,c.tZ)(l.z,{})]})}},78464:function(e,r,n){"use strict";n.r(r);var t=n(27378),i=n(19263),o=n(70777),a=n(23748),l=n(60564),c=n(13497),d=n(58607),s=n(79628),u=n(33040),h=n(94308),p=n(76002),f=n(97700),b=n(27401),g=n(87800),Z=function(){return(0,g.BX)(t.Fragment,{children:[(0,g.tZ)(u.$,{title:"Apply for a new permit | Permits"}),(0,g.tZ)(l.PageContent,{children:(0,g.BX)(d.Stack,{gap:3,children:[(0,g.tZ)(i.Breadcrumbs,{links:[{label:"Dashboard",href:"/app/dashboard"},{label:"Permits",href:"/app/permits"},{label:"Apply for a new permit"}]}),(0,g.tZ)(p.V,{introduction:"Stay compliant by registering for business permits.",title:"Apply for a new permit"}),(0,g.BX)(d.Stack,{gap:2,children:[(0,g.tZ)(c.H2,{children:"Driver and rider licences"}),(0,g.BX)(a.Columns,{as:"ul",cols:{xs:1,sm:2,md:3},children:[(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Learners permit"})}),(0,g.tZ)(s.Text,{children:"A learner driver licence allows you to drive with a supervisor who has a full Australian driving licence."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Provisional licence"})}),(0,g.tZ)(s.Text,{children:"Information on provisional licence applicatios, tests, exemptions, changes and checks."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Drivers licence"})}),(0,g.tZ)(s.Text,{children:"Get a driver or rider licence, renew, upgrade or change licence and licence details."})]})})})]})]}),(0,g.BX)(d.Stack,{gap:2,children:[(0,g.tZ)(c.H2,{children:"Business permits"}),(0,g.BX)(a.Columns,{as:"ul",cols:{xs:1,sm:2,md:3},children:[(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Starting your own business"})}),(0,g.tZ)(s.Text,{children:"When starting a business, we try to make it easy to understand and provide everything you need to get started."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Selling food for a fundraiser"})}),(0,g.tZ)(s.Text,{children:"Some non-profit organisations that sell food for fundraising purposes using volunteer staff are exempt."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/app/permits/apply-for-new-permit/mobile-food-vendor-permit",children:"Apply for a mobile food vendor permit"})}),(0,g.tZ)(s.Text,{children:"Food businesses that sell food to the public need to be registered before opening."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Renovating a food business"})}),(0,g.tZ)(s.Text,{children:"For business owners, designers and builders who are creating a food business premises."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Change details of a food business"})}),(0,g.tZ)(s.Text,{children:"You need to tell the Health Protection Service within 7 days of any changes to your food business."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Changing business hours"})}),(0,g.tZ)(s.Text,{children:"Make changes to your trading hours or days."})]})})})]})]}),(0,g.BX)(d.Stack,{gap:2,children:[(0,g.tZ)(c.H2,{children:"Other permits"}),(0,g.BX)(a.Columns,{as:"ul",cols:{xs:1,sm:2,md:3},children:[(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Selling fertiliser"})}),(0,g.tZ)(s.Text,{children:"Apply for and manage your business approvals."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.BX)(o.CardLink,{href:"/not-found",children:["Disposal of dangerous materials"," "]})}),(0,g.tZ)(s.Text,{children:"Some non-profit organisations that sell food for fundraising purposes using volunteer staff are exempt."})]})})}),(0,g.tZ)(o.Card,{as:"li",clickable:!0,shadow:!0,children:(0,g.tZ)(o.CardInner,{children:(0,g.BX)(d.Stack,{gap:1,children:[(0,g.tZ)(c.H3,{children:(0,g.tZ)(o.CardLink,{href:"/not-found",children:"Register a swimming pool"})}),(0,g.tZ)(s.Text,{children:"Public Swimming and Spa pools do not need a license to operate under the Public Health Act 1997."})]})})})]})]}),(0,g.tZ)(a.Columns,{cols:{xs:1,sm:4},children:(0,g.tZ)(a.Column,{columnSpan:{xs:1,sm:3},children:(0,g.tZ)(f.O,{})})})]})})]})};r.default=Z,Z.getLayout=function(e){return(0,g.tZ)(h.L,{children:(0,g.tZ)(b.iP,{children:e})})}},368:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/permits/apply-for-new-permit",function(){return n(78464)}])}},function(e){e.O(0,[6484,9998,9073,3982,8474,8301,1165,1854,8837,6212,2644,1338,8205,5294,8164,4308,840,6140,8495,6232,3434,6257,7401,2888,9774,179],function(){return e(e.s=368)}),_N_E=e.O()}]);