"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9772],{88338:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(44310),n()},54389:function(e,t,r){var n=r(51502).___internalHook("/","../../../..","../..");e.exports=r(98028),n()},44310:function(e,t,r){r.d(t,{Breadcrumbs:function(){return k}});var n=r(90849),i=r(90089),o=r(27378),a=r(64388),l=r(10043),c=r(84007),d=r(8447),s=r(87800);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var p=function(e){var t,r=e.children,i=e["aria-label"],o=e.isExpandable,a=e.isExpanded;return(0,s.tZ)("nav",{"aria-label":i,children:(0,s.tZ)(c.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,l.iv)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"li:first-of-type > svg":{display:"none"}},o&&!a&&(t={},(0,n.Z)(t,d.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,n.Z)(t,d.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:r})})},f=r(7971),b=r(32084),h={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},g=function(){return(0,s.tZ)(b.XC,{color:"border",size:"sm",css:h})};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var O=(0,o.forwardRef)(function(e,t){var r=e.children,i=e.href;return(0,s.BX)(c.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,s.tZ)(g,{}),i?(0,s.tZ)(f.TextLink,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:t},e)):r]})}),v=r(11475);function m(e){var t=e.onClick;return(0,s.tZ)(O,{children:(0,s.tZ)(c.Flex,{as:v.Yd,onClick:t,"aria-label":"Show all breadcrumbs","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focusRingFor:"keyboard",link:!0,children:"…"})})}var Z=["label"],j=["label"],w=["label"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(e){var t=e["aria-label"],r=e.links,n=(0,o.useRef)(null),l=r[0],c=l.label,d=(0,i.Z)(l,Z),u=r[r.length-1],f=u.label,b=(0,i.Z)(u,j),h=r.filter(function(e,t,r){return!(0===t||t===r.length-1)}),g=(0,o.useState)(!h.length),y=g[0],v=g[1];return(0,s.BX)(p,{"aria-label":void 0===t?"Breadcrumbs":t,isExpandable:!0,isExpanded:y,children:[(0,s.tZ)(O,x(x({ref:n},d),{},{children:c})),!y&&h.length?(0,s.tZ)(m,{onClick:function(){var e;v(!0),null===(e=n.current)||void 0===e||e.focus()}}):null,h.map(function(e,t){var r=e.label,n=(0,i.Z)(e,w);return(0,s.tZ)(O,x(x({},n),{},{children:r}),t)}),(0,s.BX)(O,x(x({},b),{},{children:[f,(0,s.tZ)(a.TX,{children:" (current page)"})]}))]})}},98028:function(e,t,r){r.d(t,{Callout:function(){return u}});var n=r(10043),i=r(84007),o=r(7226),a=r(89205),l=r(32084),c=r(87800),d={compact:{textGap:.5,iconGap:.5,padding:1,titleSize:"sm",titlePaddingTop:"0.125rem",iconSize:"md",flexDirection:"row"},regular:{textGap:1,iconGap:.5,padding:1.5,titleSize:"md",titlePaddingTop:void 0,iconSize:"md",flexDirection:"row"},feature:{textGap:1,iconGap:1,padding:1.5,titleSize:"xl",titlePaddingTop:void 0,iconSize:"lg",flexDirection:"column"}},s=function(e){var t=e.as,r=e.children,n=e.variant;return(0,c.tZ)(a.Text,{as:void 0===t?"h2":t,fontSize:d[void 0===n?"regular":n].titleSize,fontWeight:"bold",lineHeight:"heading",children:r})},u=function(e){var t=e.as,r=e.background,a=e.children,u=e.icon,p=e.onBodyAlt,f=e.title,b=e.tone,h=void 0===b?"neutral":b,g=e.variant,y=void 0===g?"regular":g,O=d[y],v=O.textGap,m=O.iconGap,Z=O.padding,j=O.flexDirection,w=O.titlePaddingTop,P={neutral:{background:"shade",border:"border",icon:void 0},info:{background:"info",border:"info",icon:(0,c.tZ)(l.F3,{"aria-hidden":"false","aria-label":"Information",color:"info",size:d[y].iconSize})}}[h],x=P.background,k=P.border,T=P.icon;return(0,c.BX)(i.Flex,{as:t,flexDirection:j,rounded:!0,gap:m,background:"neutral"===h&&(null!=p?p:"shadeAlt"===r)?"shadeAlt":x,borderColor:k,padding:Z,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[u||T?(0,c.tZ)(i.Flex,{flexShrink:0,children:u||T}):null,(0,c.BX)(o.Stack,{gap:v,css:(0,n.iv)({paddingTop:w},"",""),children:[f?(0,c.tZ)(s,{variant:y,children:f}):null,a]})]})}},72490:function(e,t,r){r.d(t,{$:function(){return Z}});var n=r(90849),i=r(44285),o=r(11246),a=r(2345),l=r(51036),c=r(73469),d=r(50456),s=r(68944),u=r(56273),p=r(40631),f=r(77498),b=r(2924),h=r(94303),g=r(79706),y=[{id:"772353784",lastUpdated:new Date("15 Jan 2024").getTime(),status:{tone:"infoMedium",label:"Pending approval"},type:"Outdoor dining permit"},{id:"224377842",lastUpdated:new Date("01 July 2023").getTime(),status:{tone:"successMedium",label:"Approved"},type:"On-premises liquor licence"}],O=r(68713),v=r(87800);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Z(){var e=(0,u.useTernaryState)(!1),t=(0,o.Z)(e,3),r=t[0],Z=t[1],j=t[2],w=(0,O.t)().formState,P=[null!=w&&w.id?w:void 0].concat((0,i.Z)(y)).filter(function(e){return!!e});return(0,v.BX)(d.Stack,{gap:1.5,children:[(0,v.tZ)(h.H2,{id:"current-approvals-heading",children:"Application history"}),(0,v.tZ)(b.TableWrapper,{children:(0,v.BX)(b.Table,{"aria-labelledby":"current-approvals-heading",children:[(0,v.tZ)(b.TableHead,{children:(0,v.BX)(b.TableRow,{children:[(0,v.tZ)(b.TableHeader,{scope:"col",width:"18%",children:"Reference number"}),(0,v.tZ)(b.TableHeader,{scope:"col",width:"27%",children:"Type"}),(0,v.tZ)(b.TableHeader,{scope:"col",width:"25%",children:"Status"}),(0,v.tZ)(b.TableHeader,{scope:"col",width:"20%",children:"Last updated"}),(0,v.tZ)(b.TableHeader,{scope:"col",width:"10%",children:"Actions"})]})}),(0,v.tZ)(b.TableBody,{children:P.map(function(e){return e?(0,v.BX)(b.TableRow,{children:[(0,v.tZ)(b.TableCell,{as:"th",fontWeight:"bold",scope:"row",children:(0,v.tZ)(g.TextLink,{href:"/app/licences-and-permits/".concat(e.id),id:"ref-".concat(e.id),children:e.id})}),(0,v.tZ)(b.TableCell,{children:e.type}),(0,v.tZ)(b.TableCell,{children:void 0!==e.status?(0,v.tZ)(f.StatusBadge,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({appearance:"subtle"},e.status)):null!=e&&e.completed?(0,v.tZ)(f.StatusBadge,{appearance:"subtle",tone:"successMedium",label:"Submitted"}):(0,v.tZ)(f.StatusBadge,{appearance:"subtle",tone:"inProgressLow",label:"In progress"})}),(0,v.tZ)(b.TableCell,{children:(0,a.Z)(e.lastUpdated,"dd MMM yyyy")}),(0,v.tZ)(b.TableCell,{children:(0,v.tZ)(l.Button,{"aria-describedby":"ref-".concat(e.id),iconBefore:p.DeleteIcon,onClick:Z,size:"sm",variant:"text",children:"Remove"})})]},e.id):null})})]})}),(0,v.tZ)(c.Modal,{isOpen:r,onClose:j,title:"Are you sure you want to remove this application?",actions:(0,v.BX)(l.ButtonGroup,{children:[(0,v.tZ)(l.Button,{onClick:j,children:"Yes, remove"}),(0,v.tZ)(l.Button,{variant:"secondary",onClick:j,children:"No"})]}),children:(0,v.tZ)(s.Text,{as:"p",children:"Note: this is for demonstration purposes only and does not function."})})]})}},911:function(e,t,r){r.d(t,{O:function(){return l}});var n=r(54389),i=r(68944),o=r(79706),a=r(87800);function l(){return(0,a.tZ)(n.Callout,{title:"Need help?",children:(0,a.BX)(i.Text,{as:"p",children:["Call ",(0,a.tZ)("strong",{children:"02 9481 1122"})," (9am to 5pm AEST Monday to Friday)",(0,a.tZ)("br",{}),"Email"," ",(0,a.tZ)(o.TextLink,{href:"mailto:emailaccount@yourgov.gov.au",children:"emailaccount@yourgov.gov.au"})]})})}}}]);