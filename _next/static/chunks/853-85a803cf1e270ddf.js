"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{80997:function(t,e,r){r.d(e,{L:function(){return y}});var n=r(4060),o=r(17491),i=r(89251),c=r(80824),a=r(86677),l=r(87800),d=[{label:"Home",href:"/"},{label:"Packages",href:"/packages"},{label:"Releases",href:"/releases"},{label:"Guides",href:"/guides"}],u=[{label:"GitHub",href:"https://github.com/steelthreads/agds-next"}],f=function(){var t=(0,a.useRouter)();return(0,l.BX)(n.Kq,{children:[(0,l.tZ)(i.h4,{variant:"dark",logo:(0,l.tZ)(o.T,{}),heading:"Agriculture Design System",subline:"Design System for the Export Service - Alpha"}),(0,l.tZ)(c.$t,{variant:"agriculture",links:d,secondaryLinks:u,activePath:t.asPath})]})},s=r(29848),p=r(45613),g=r(50837),h=[{label:"Home",href:"/"},{label:"Storybook",href:"/storybook/index.html"},{label:"Playroom",href:"/playroom/index.html"}],b=function(){return(0,l.BX)(s.$,{variant:"agriculture",children:[(0,l.tZ)(g.Mc,{links:h,horizontal:!0}),(0,l.tZ)(s.G,{}),(0,l.tZ)(p.x,{children:"\xa9 Commonwealth of Australia."})]})},y=function(t){var e=t.children;return(0,l.BX)(n.kC,{flexDirection:"column",fontFamily:"body",palette:"light",minHeight:"100vh",children:[(0,l.tZ)(f,{}),(0,l.tZ)(n.xu,{as:"main",flexGrow:1,children:e}),(0,l.tZ)(b,{})]})}},4060:function(t,e,r){r.d(e,{xu:function(){return P},kC:function(){return D},Kq:function(){return H},Vu:function(){return s},j4:function(){return O},aW:function(){return f},Wf:function(){return m}});var n=r(90849),o=r(90089),i=r(31670),c=r(13053),a=["palette","dark","light","color","background","border","borderLeft","borderRight","borderTop","borderBottom","borderX","borderY","rounded","display","flexDirection","flexWrap","flexGrow","flexShrink","justifyContent","alignItems","gap","width","minWidth","maxWidth","height","minHeight","maxHeight","paddingTop","paddingBottom","paddingRight","paddingLeft","paddingX","paddingY","padding","fontWeight","fontFamily","fontSize","focus","link","lineHeight"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t){var e=t.palette,r=t.dark,n=t.light;return e?c.JZ[e]:r?c.JZ.dark:n?c.JZ.light:void 0}var f={text:c._X.foregroundText,action:c._X.foregroundAction,focus:c._X.foregroundFocus,muted:c._X.foregroundMuted,accent:c.PK.accent,error:c.PK.error,success:c.PK.success,warning:c.PK.warning,info:c.PK.info},s={body:c._X.backgroundBody,shade:c._X.backgroundShade,bodyAlt:c._X.backgroundBodyAlt,shadeAlt:c._X.backgroundShadeAlt};function p(t){var e=t.color,r=t.background;return{color:e?f[e]:void 0,backgroundColor:r?s[r]:void 0}}function g(t){var e,r=t.fontWeight,n=t.fontFamily,o=t.fontSize,i=t.lineHeight,a=void 0===i?"default":i,l=(0,c.qz)(o,(function(t){return(0,c.vY)(t,a)})),d=null!==(e=null===l||void 0===l?void 0:l.reduce((function(t,e,r){return t.fontSize[r]=h(e)?e.fontSize:null,t.lineHeight[r]=h(e)?e.lineHeight:null,t}),{fontSize:[],lineHeight:[]}))&&void 0!==e?e:{fontSize:void 0,lineHeight:void 0},u=d.fontSize,f=d.lineHeight;return{fontWeight:(0,c.qz)(r,(function(t){return c.TV.fontWeight[t]})),fontFamily:(0,c.qz)(n,(function(t){return c.TV.font[t]})),fontSize:u,lineHeight:f,"& ::selection":{color:c._X.backgroundBody,backgroundColor:c._X.foregroundAction}}}function h(t){return!!t}function b(t){var e=t.display,r=t.flexDirection,n=t.flexWrap,o=t.flexGrow,i=t.flexShrink,a=t.justifyContent,l=t.alignItems,d=t.gap,u=t.width,f=t.minWidth,s=t.maxWidth,p=t.height,g=t.minHeight,h=t.maxHeight;return{display:(0,c.qz)(e),flexDirection:(0,c.qz)(r),flexWrap:(0,c.qz)(n),flexGrow:(0,c.qz)(o),flexShrink:(0,c.qz)(i),justifyContent:(0,c.qz)(a),alignItems:(0,c.qz)(l),gap:(0,c.qz)(d,c.XH),width:(0,c.qz)(u),minWidth:(0,c.qz)(f),maxWidth:(0,c.qz)(s),height:(0,c.qz)(p),minHeight:(0,c.qz)(g),maxHeight:(0,c.qz)(h)}}function y(t){var e,r,n,o,i=t.border,a=t.borderLeft,l=t.borderRight,d=t.borderTop,u=t.borderBottom,f=t.borderX,s=t.borderY,p=t.rounded,g=i||a||l||u||f||s;return{borderWidth:0,borderLeftWidth:(null!==(e=null!==i&&void 0!==i?i:f)&&void 0!==e?e:a)?"1px":void 0,borderRightWidth:(null!==(r=null!==i&&void 0!==i?i:f)&&void 0!==r?r:l)?"1px":void 0,borderTopWidth:(null!==(n=null!==i&&void 0!==i?i:s)&&void 0!==n?n:d)?"1px":void 0,borderBottomWidth:(null!==(o=null!==i&&void 0!==i?i:s)&&void 0!==o?o:u)?"1px":void 0,borderColor:g?c._X.border:void 0,borderStyle:g?"solid":void 0,borderRadius:p?c.TV.borderRadius:void 0}}function v(t){var e,r,n,o,i=t.paddingTop,a=t.paddingBottom,l=t.paddingRight,d=t.paddingLeft,u=t.paddingX,f=t.paddingY,s=t.padding;return{paddingTop:(0,c.qz)(null!==(e=null!==i&&void 0!==i?i:f)&&void 0!==e?e:s,c.XH),paddingBottom:(0,c.qz)(null!==(r=null!==a&&void 0!==a?a:f)&&void 0!==r?r:s,c.XH),paddingRight:(0,c.qz)(null!==(n=null!==l&&void 0!==l?l:u)&&void 0!==n?n:s,c.XH),paddingLeft:(0,c.qz)(null!==(o=null!==d&&void 0!==d?d:u)&&void 0!==o?o:s,c.XH)}}var m={color:c._X.foregroundAction,textDecoration:"underline",textDecorationSkip:"auto","&:hover":{color:c._X.foregroundText,textDecoration:"none"}},O={":focus":c.Kl,"&::-moz-focus-inner":{border:0}};var x=r(30181),j=r(87800),k=["as"];function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var P=(0,c.yV)((function(t,e){var r=t.as,l=void 0===r?"div":r,f=function(t){var e=t.palette,r=t.dark,n=t.light,l=t.color,f=t.background,s=t.border,h=t.borderLeft,x=t.borderRight,j=t.borderTop,k=t.borderBottom,w=t.borderX,P=t.borderY,Z=t.rounded,S=t.display,D=t.flexDirection,X=t.flexWrap,z=t.flexGrow,H=t.flexShrink,C=t.justifyContent,W=t.alignItems,B=t.gap,A=t.width,q=t.minWidth,T=t.maxWidth,E=t.height,_=t.minHeight,V=t.maxHeight,I=t.paddingTop,G=t.paddingBottom,F=t.paddingRight,K=t.paddingLeft,R=t.paddingX,L=t.paddingY,Y=t.padding,M=t.fontWeight,$=t.fontFamily,J=t.fontSize,N=t.focus,Q=t.link,U=t.lineHeight,tt=(0,o.Z)(t,a);return[(0,i.iv)([u({palette:e,dark:r,light:n}),{boxSizing:"border-box",listStyle:"none",margin:0,padding:0},(0,c.mq)(d(d(d(d(d(d(d({},p({background:f,color:l})),y({border:s,borderLeft:h,borderRight:x,borderTop:j,borderBottom:k,borderX:w,borderY:P,rounded:Z})),b({display:S,flexDirection:D,flexWrap:X,flexGrow:z,flexShrink:H,justifyContent:C,alignItems:W,gap:B,width:A,minWidth:q,maxWidth:T,height:E,minHeight:_,maxHeight:V})),v({paddingTop:I,paddingBottom:G,paddingRight:F,paddingLeft:K,paddingX:R,paddingY:L,padding:Y})),g({fontWeight:M,fontFamily:$,fontSize:J,lineHeight:U})),Q?m:void 0),N?O:void 0))],"",""),tt]}((0,o.Z)(t,k)),s=(0,x.Z)(f,2),h=s[0],P=s[1];return(0,j.tZ)(l,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,css:h},P))})),Z=["inline","flexDirection","justifyContent","alignItems","display"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var D=(0,c.yV)((function(t,e){var r=t.inline,i=void 0!==r&&r,c=t.flexDirection,a=void 0===c?"row":c,l=t.justifyContent,d=void 0===l?"flex-start":l,u=t.alignItems,f=void 0===u?"stretch":u,s=t.display,p=(0,o.Z)(t,Z);return(0,j.tZ)(P,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,display:null!==s&&void 0!==s?s:i?"inline-flex":"flex",flexDirection:a,justifyContent:d,alignItems:f},p))})),X=["flexDirection","justifyContent","alignItems"];function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var H=(0,c.yV)((function(t,e){var r=t.flexDirection,i=void 0===r?"column":r,c=t.justifyContent,a=void 0===c?"flex-start":c,l=t.alignItems,d=void 0===l?"stretch":l,u=(0,o.Z)(t,X);return(0,j.tZ)(P,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,display:"flex",flexDirection:i,justifyContent:a,alignItems:d},u))}))},77956:function(t,e,r){r.d(e,{s:function(){return g},o:function(){return u}});var n=r(90849),o=r(90089),i=r(13053),c=r(4060),a=r(87800),l=["gap","columnGap","rowGap"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var u=(0,i.yV)((function(t,e){var r=t.gap,i=t.columnGap,u=t.rowGap,s=(0,o.Z)(t,l),p=f({gap:r,columnGap:i,rowGap:u});return(0,a.tZ)(c.xu,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,css:p},s))})),f=function(t){var e=t.gap,r=void 0===e?1.5:e,n=t.columnGap,o=t.rowGap;return(0,i.mq)({display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:(0,i.qz)(r,i.XH),columnGap:(0,i.qz)(n,i.XH),rowGap:(0,i.qz)(o,i.XH)})},s=["columnSpan","columnStart","columnEnd"];function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var g=(0,i.yV)((function(t,e){var r=t.columnSpan,i=t.columnStart,l=t.columnEnd,d=(0,o.Z)(t,s),u=h({columnSpan:r,columnStart:i,columnEnd:l});return(0,a.tZ)(c.xu,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,css:u},d))})),h=function(t){var e=t.columnSpan,r=t.columnStart,n=t.columnEnd;return(0,i.mq)({gridColumn:(0,i.qz)(e,(function(t){return"span ".concat(t,"/span ").concat(t)})),gridColumnStart:(0,i.qz)(r),gridColumnEnd:(0,i.qz)(n)})}},50897:function(t,e,r){r.d(e,{V:function(){return a}});var n=r(4060),o=r(13053),i=r(87800),c={small:{xs:1,md:2},medium:{xs:1,md:3},large:{xs:1,md:4}};function a(t){var e=t.as,r=void 0===e?"section":e,a=t.spacing,l=void 0===a?"small":a,d=t.palette,u=t.background,f=t.children;return(0,i.tZ)(n.kC,{as:r,justifyContent:"center",palette:d,background:u,children:(0,i.tZ)(n.Kq,{width:"100%",maxWidth:o.TV.maxWidth.container,paddingY:c[l],paddingX:o.TV.containerPadding,gap:1,children:f})})}},29848:function(t,e,r){r.d(e,{$:function(){return f},G:function(){return s}});var n=r(90849),o=r(31670),i=r(4060),c=r(13053),a="--agds-footer-border",l={border:"var(".concat(a,")")},d=r(87800),u={light:{palette:"light",background:"body",border:c._X.foregroundAction},lightAlt:{palette:"light",background:"bodyAlt",border:c._X.foregroundAction},dark:{palette:"dark",background:"body",border:c._X.foregroundAction},darkAlt:{palette:"dark",background:"bodyAlt",border:c._X.foregroundAction},agriculture:{palette:"dark",background:"body",border:c.PK.accent}},f=function(t){var e,r=t.variant,l=void 0===r?"dark":r,f=t.children;return(0,d.tZ)(i.kC,{as:"footer",justifyContent:"center",background:u[l].background,color:"text",palette:u[l].palette,paddingY:3,css:(0,o.iv)((e={borderTop:"4px solid",borderColor:u[l].border},(0,n.Z)(e,a,u[l].border),(0,n.Z)(e,"li",{marginLeft:0}),e),"",""),children:(0,d.tZ)(i.Kq,{maxWidth:c.TV.maxWidth.container,width:"100%",gap:1.5,paddingX:c.TV.containerPadding,children:f})})};function s(){return(0,d.tZ)("hr",{css:(0,o.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:l.border,width:"100%"},"","")})}},89251:function(t,e,r){r.d(e,{h4:function(){return p},R5:function(){return d},gM:function(){return s}});var n=r(4060),o=r(45613),i=r(13053),c=r(87800);var a={name:"18x7o4s",styles:"text-decoration:none;:hover{text-decoration:underline;text-decoration-skip-ink:auto;}"},l={name:"ps6rdj",styles:" img, svg{width:100%;}"};function d(t){var e=t.href,r=void 0===e?"/":e,d=t.logo,u=t.heading,f=t.subline,s=(0,i.yF)();return(0,c.BX)(n.kC,{as:s,href:r,flexDirection:{xs:"column",md:"row"},color:"text",gap:1,focus:!0,alignItems:"stretch",css:a,children:[d?(0,c.tZ)(n.kC,{alignItems:"flex-start",maxWidth:"16rem",css:l,children:d}):null,d?(0,c.tZ)(n.xu,{borderRight:!0,display:{xs:"none",md:"block"}}):null,(0,c.BX)(n.Kq,{justifyContent:"center",children:[(0,c.tZ)(o.x,{lineHeight:"heading",fontSize:{xs:"md",sm:"xl"},fontWeight:"bold",children:u}),f&&(0,c.tZ)(o.x,{color:"muted",fontSize:{xs:"sm",sm:"md"},children:f})]})]})}var u=r(77956),f=(r(27378),{light:{palette:"light",background:"body"},lightAlt:{palette:"light",background:"bodyAlt"},dark:{palette:"dark",background:"body"},darkAlt:{palette:"dark",background:"bodyAlt"}});function s(t){var e=t.variant,r=t.children;return(0,c.tZ)(n.kC,{as:"header",palette:f[e].palette,background:f[e].background,color:"text",paddingY:{xs:1,md:3},justifyContent:"center",children:(0,c.tZ)(u.o,{alignItems:"center",maxWidth:i.TV.maxWidth.container,paddingX:i.TV.containerPadding,width:"100%",children:r})})}function p(t){var e=t.logo,r=t.heading,n=t.rightContent,o=t.subline,i=t.variant,a=void 0===i?"dark":i,l=t.href,f=void 0===l?"/":l,p=!!n;return(0,c.BX)(s,{variant:a,children:[(0,c.tZ)(u.s,{columnSpan:{xs:12,md:p?8:12},children:(0,c.tZ)(d,{logo:e,href:f,heading:r,subline:o})}),p&&(0,c.tZ)(u.s,{columnSpan:{xs:12,md:4},children:n})]})}},66219:function(t,e,r){r.d(e,{H1:function(){return p},H2:function(){return g},H3:function(){return h},H4:function(){return b},H5:function(){return y},H6:function(){return v},X:function(){return s}});var n=r(90849),o=r(90089),i=(r(27378),r(13053)),c=r(4060),a=r(87800),l=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},s=(0,i.yV)((function(t,e){var r=t.as,n=t.type,i=void 0===n?"h2":n,d=t.color,s=void 0===d?"text":d,p=t.fontSize,g=t.fontFamily,h=void 0===g?"body":g,b=t.fontWeight,y=void 0===b?"bold":b,v=t.lineHeight,m=void 0===v?"heading":v,O=(0,o.Z)(t,l),x=null!==r&&void 0!==r?r:i,j=null!==p&&void 0!==p?p:f[i];return(0,a.tZ)(c.xu,u({as:x,ref:e,color:s,fontSize:j,fontFamily:h,fontWeight:y,lineHeight:m},O))})),p=(0,i.yV)((function(t,e){return(0,a.tZ)(s,u({ref:e,as:"h1",type:"h1"},t))})),g=(0,i.yV)((function(t,e){return(0,a.tZ)(s,u({ref:e,as:"h2",type:"h2"},t))})),h=(0,i.yV)((function(t,e){return(0,a.tZ)(s,u({ref:e,as:"h3",type:"h3"},t))})),b=(0,i.yV)((function(t,e){return(0,a.tZ)(s,u({ref:e,as:"h4",type:"h4"},t))})),y=(0,i.yV)((function(t,e){return(0,a.tZ)(s,u({ref:e,as:"h5",type:"h5"},t))})),v=(0,i.yV)((function(t,e){return(0,a.tZ)(s,u({ref:e,as:"h6",type:"h6"},t))}))},50837:function(t,e,r){r.d(e,{Mc:function(){return b}});var n=r(90849),o=r(90089),i=r(4060),c=r(87800),a=function(t){var e=t.children,r=t.horizontal;return(0,c.tZ)(i.Kq,{as:"ul",gap:r?1:.5,flexDirection:r?"row":"column",flexWrap:"wrap",children:e})},l=r(31670),d=r(13053);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(t){var e=(0,d.yF)();return(0,c.tZ)(i.xu,{as:"li",fontSize:"sm",fontFamily:"body",lineHeight:"default",css:(0,l.iv)({a:{color:d._X.foregroundAction,textDecoration:"underline","&:hover":{color:d._X.foregroundAction,textDecoration:"none"},"&:focus":d.Kl}},"",""),children:(0,c.tZ)(e,f({},t))})},p=["label"];function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=function(t){var e=t.links,r=t.horizontal;return(0,c.tZ)(a,{horizontal:r,children:e.map((function(t,e){var r=t.label,n=(0,o.Z)(t,p);return(0,c.tZ)(s,h(h({},n),{},{children:r}),e)}))})}},80824:function(t,e,r){r.d(e,{$t:function(){return B}});var n=r(90849),o=r(31670),i=r(30181),c=(r(27378),r(94173)),a=r.n(c),l=r(4060),d=r(13053),u="--nav-linkHoverBg",f="--nav-linkActiveBg",s="--nav-bottomBar",p={linkHoverBg:"var(".concat(u,")"),linkActiveBg:"var(".concat(f,")"),bottomBar:"var(".concat(s,")")},g=r(87800);function h(t){var e=t.onClick,r=t.children;return(0,g.tZ)(l.xu,{as:"button",display:{xs:"flex",md:"none"},flexDirection:"column",alignItems:"center",fontSize:"xs",lineHeight:"nospace",gap:.5,padding:1,focus:!0,css:(0,o.iv)({background:"transparent",color:d._X.foregroundAction,"&:hover":{color:d._X.foregroundText,backgroundColor:p.linkHoverBg}},"",""),onClick:e,children:r})}function b(t){var e=t.onClick;return(0,g.BX)(h,{onClick:e,children:[(0,g.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",children:[(0,g.tZ)("rect",{x:"4",y:"16",width:"16",height:"2"}),(0,g.tZ)("rect",{x:"4",y:"11",width:"16",height:"2"}),(0,g.tZ)("rect",{x:"4",y:"6",width:"16",height:"2"})]}),(0,g.tZ)("span",{children:"Menu"})]})}function y(t){var e=t.onClick;return(0,g.BX)(h,{onClick:e,children:[(0,g.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",children:[(0,g.tZ)("rect",{x:"6",y:"17.3137",width:"16",height:"2",transform:"rotate(-45 6 17.3137)"}),(0,g.tZ)("rect",{x:"7.41406",y:"6",width:"16",height:"2",transform:"rotate(45 7.41406 6)"})]}),(0,g.tZ)("span",{children:"Close"})]})}var v={light:{palette:"light",background:"body",hover:"shade",bottomBar:d._X.foregroundAction},lightAlt:{palette:"light",background:"bodyAlt",hover:"shadeAlt",bottomBar:d._X.foregroundAction},dark:{palette:"dark",background:"body",hover:"shade",bottomBar:d._X.foregroundAction},darkAlt:{palette:"dark",background:"bodyAlt",hover:"shadeAlt",bottomBar:d._X.foregroundAction},agriculture:{palette:"dark",background:"shade",hover:"body",bottomBar:d.PK.accent}},m={name:"bjn8wh",styles:"position:relative"};function O(t){var e,r=t.variant,c=t.children,p=(0,d.hb)(!1),h=(0,i.Z)(p,3),O=h[0],x=h[1],w=h[2],P=v[r],Z=P.background,S=P.bottomBar,D=P.hover,X=P.palette;return(0,g.BX)(l.xu,{"data-name":"nav-container",palette:X,background:Z,color:"text",css:(0,o.iv)((e={position:"relative"},(0,n.Z)(e,u,l.Vu[D]),(0,n.Z)(e,f,l.Vu[Z]),(0,n.Z)(e,s,S),e),"",""),children:[(0,g.tZ)(k,{}),(0,g.tZ)(l.kC,{as:"nav",justifyContent:"center",css:m,children:(0,g.BX)(l.xu,{maxWidth:d.TV.maxWidth.container,width:"100%",paddingX:{xs:.75,md:2},children:[(0,g.tZ)(b,{onClick:x}),(0,g.tZ)(a(),{active:O,focusTrapOptions:{clickOutsideDeactivates:!0,onDeactivate:w},children:(0,g.BX)("div",{css:(0,o.iv)((0,n.Z)({},d.TV.mediaQuery.max.sm,{zIndex:200,position:"fixed",display:O?"block":"none",background:d._X.backgroundBody,top:0,left:0,bottom:0,width:"100%",maxWidth:d.TV.maxWidth.mobileMenu,padding:(0,d.XH)(1),boxSizing:"border-box"}),"",""),children:[(0,g.tZ)(y,{onClick:w}),(0,g.tZ)(l.kC,{justifyContent:"space-between",width:"100%",flexDirection:{xs:"column",md:"row"},children:c})]})})]})}),(0,g.tZ)(j,{menuOpen:O})]})}var x={name:"fywge2",styles:"position:fixed;top:0;left:0;bottom:0;right:0;background:#000;opacity:0.8;z-index:100"};function j(t){return t.menuOpen?(0,g.tZ)(l.xu,{display:{xs:"block",md:"none"},css:x}):null}function k(){return(0,g.tZ)(l.xu,{"data-name":"nav-bottom-bar",display:{xs:"none",md:"block"},paddingTop:.5,css:(0,o.iv)({position:"absolute",bottom:0,left:0,right:0,backgroundColor:p.bottomBar},"","")})}var w=r(90089);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t){var e=t.children,r=t.active;return(0,g.tZ)(l.xu,{as:"li",paddingBottom:{md:.5},fontFamily:"body",fontSize:"sm",lineHeight:"default",css:(0,d.mq)({" a":{position:"relative",display:"block",color:d._X[r?"foregroundText":"foregroundAction"],padding:(0,d.XH)(1),textDecoration:"none",fontWeight:(0,d.qz)({xs:r?"bold":void 0,md:"normal"}),"&:after":{content:(0,d.qz)({xs:void 0,md:'""'}),height:(0,d.XH)(.5),position:"absolute",top:"100%",left:0,right:0,backgroundColor:r?p.linkActiveBg:"transparent"},"&:focus":{outline:"none","&:before":Z({content:'""',position:"absolute",zIndex:100,top:0,left:0,height:"100%",width:"100%"},d.Kl),"&::-moz-focus-inner":{border:0}},"&:hover":{textDecoration:"underline",textDecorationSkipInk:"auto",color:d._X.foregroundText,backgroundColor:p.linkHoverBg,"&::after":{background:r?p.linkHoverBg:"transparent"}}}}),children:e})}var D=["href","label"];function X(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function W(t){var e=t.links,r=t.activePath,i=(0,d.yF)(),c=function(t,e){if(!e)return"";var r,n="",o=X(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.href===e)return i.href;null!==e&&void 0!==e&&e.startsWith(i.href)&&i.href.length>n.length&&(n=i.href)}}catch(c){o.e(c)}finally{o.f()}return n}(e,r);return(0,g.tZ)(l.kC,{as:"ul",flexDirection:{xs:"column",md:"row"},alignItems:"stretch",css:(0,o.iv)((0,n.Z)({},d.TV.mediaQuery.max.sm,{"& > li":{borderTop:"1px solid ".concat(d._X.border)}}),"",""),children:e.map((function(t,e){var r=t.href,n=t.label,o=(0,w.Z)(t,D);return(0,g.tZ)(S,{active:r===c,children:(0,g.tZ)(i,C(C({href:r},o),{},{children:n}))},e)}))})}function B(t){var e=t.variant,r=void 0===e?"darkAlt":e,n=t.links,o=t.secondaryLinks,i=t.activePath;return(0,g.BX)(O,{variant:r,children:[(0,g.tZ)(W,{links:n,activePath:i}),null!==o&&void 0!==o&&o.length?(0,g.tZ)(W,{links:o,activePath:i}):null]})}},45613:function(t,e,r){r.d(e,{x:function(){return f}});var n=r(90849),o=r(90089),i=r(13053),c=r(4060),a=r(87800),l=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var u={name:"172op4w",styles:"margin-top:0;margin-bottom:0"},f=(0,i.yV)((function(t,e){var r=t.as,i=void 0===r?"span":r,f=t.color,s=void 0===f?"text":f,p=t.fontFamily,g=void 0===p?"body":p,h=t.fontSize,b=void 0===h?"sm":h,y=t.fontWeight,v=void 0===y?"normal":y,m=t.lineHeight,O=void 0===m?"default":m,x=(0,o.Z)(t,l);return(0,a.tZ)(c.xu,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,as:i,css:u,color:s,fontFamily:g,fontSize:b,fontWeight:v,lineHeight:O},x))}))}}]);