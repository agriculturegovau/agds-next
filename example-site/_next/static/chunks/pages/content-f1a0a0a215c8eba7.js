(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{3848:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var n=r(3716),o=r(74),i=r(7956),a=r(89),l=r(849),c=r(1670),d=r(5732),s=r(181),u=r(4707),h=r.n(u),f=r(7378),p=r(4338),g=r(4060),b=r(8976),m=r(8007);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var k="--sideNav-hover",x={hover:"var(".concat(k,")")},j={background:"body",hover:"shade"},T={background:"bodyAlt",hover:"shadeAlt"},P={light:v({palette:"light"},j),lightAlt:v({palette:"light"},T),dark:v({palette:"dark"},j),darkAlt:v({palette:"dark"},T)},Z=r(7800),X=function(e){var t=e["aria-label"],r=e.children,n=e.variant,o=P[n],i=o.palette,a=o.background,c=o.hover;return(0,Z.tZ)(g.xu,{as:"aside","aria-label":t,palette:i,background:a,css:(0,b.mq)((0,l.Z)({},k,(0,b.qz)(c,(function(e){return g.Vu[e]})))),children:r})},S=["children","id","isCurrentPage"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){var t=e.children,r=e.id,n=e.isCurrentPage,o=(0,a.Z)(e,S),i=(0,b.yF)();return(0,Z.tZ)(g.xu,{as:"h2",id:r,children:(0,Z.tZ)(g.xu,H(H({as:i,padding:1,color:"text",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",display:"block",focus:!0,"aria-current":n?"page":void 0},o),{},{css:(0,c.iv)({textDecoration:"none","&:hover":H(H({},b.lB.underline),{},{backgroundColor:x.hover})},"",""),children:t}))})},D=(0,f.createContext)(0),_=function(){return(0,f.useContext)(D)},W=function(e){var t=e.children,r=_()+1;return(0,Z.tZ)(D.Provider,{value:r,children:(0,Z.tZ)(g.xu,{as:"ul",role:"menu",borderTop:!0,borderColor:r>1?"muted":"border",children:t})})},L=["active","isCurrentPage","children","label"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.active,r=e.isCurrentPage,n=e.children,o=e.label,i=(0,a.Z)(e,L),l=_(),d=(0,b.yF)();return(0,Z.BX)(g.xu,{as:"li",fontSize:"sm",lineHeight:"default",borderBottom:!0,borderColor:l>1?"muted":"border",css:(0,c.iv)({"&:last-child":{borderBottomWidth:l>1?0:void 0}},"",""),children:[(0,Z.tZ)(g.xu,{fontWeight:t?"bold":"normal",css:(0,c.iv)({" a":I(I({},(0,b.vY)("xs","default")),{},{color:b._X[t?"foregroundText":"foregroundMuted"],textDecoration:"none",paddingTop:(0,b.XH)(1),paddingBottom:(0,b.XH)(1),paddingLeft:"".concat(l,"rem"),paddingRight:(0,b.XH)(1),display:"block",borderLeftWidth:b.TV.borderWidth.xl,borderLeftStyle:"solid",borderLeftColor:r?b._X.foregroundAction:"transparent","&:hover":I(I({},b.lB.underline),{},{color:b._X.foregroundText,backgroundColor:x.hover}),"&:focus":b.lB.outline},l>2&&{"&:before":{content:'" "',width:(0,b.XH)(1),height:(0,b.XH)(1),backgroundSize:(0,b.XH)(1),marginLeft:"-1rem",paddingLeft:(0,b.XH)(.5),display:"block",float:"left",backgroundRepeat:"no-repeat",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='gray' d='M2 10h12v1H2zM2 5h1v5H2z'/%3E%3C/svg%3E\")"}})},"",""),children:(0,Z.tZ)(d,I(I({},i),{},{"aria-current":r?"page":void 0,children:o}))}),n]})},V=r(3715),z=(0,p.animated)(V.v4),Y=function(e){var t=e.ariaControls,r=e.children,n=e.id,o=e.isOpen,i=e.onClick,a=(0,b.Tb)(),d=(0,p.useSpring)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(".concat(o?180:0,"deg)")},immediate:a});return(0,Z.BX)(g.kC,{as:"button",role:"button","aria-controls":t,"aria-expanded":o,"aria-haspopup":"menu",onClick:i,id:n,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",padding:1,justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,borderBottom:!0,css:(0,c.iv)((0,l.Z)({appearance:"none",background:"transparent","&:hover":{background:x.hover}},b.TV.mediaQuery.min.md,{display:"none"}),"",""),children:[r,(0,Z.tZ)(z,{size:"sm",weight:"bold",style:d})]})},N=["items"];function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e){var t=e["aria-label"],r=void 0===t?"side navigation":t,n=e.activePath,o=e.collapseTitle,i=e.items,a=e.variant,u=void 0===a?"light":a,y=e.titleLink,v=e.title,O=function(){var e=(0,m.M)();return{buttonId:"sideNav-".concat(e,"-button"),bodyId:"sideNav-".concat(e,"-body"),navId:"sideNav-".concat(e,"-nav"),titleId:"sideNav-".concat(e,"-title")}}(),w=O.bodyId,k=O.buttonId,x=O.navId,j=O.titleId,T=(0,f.useRef)(null),P=(0,b.lP)(!1,!0),S=(0,s.Z)(P,2),C=S[0],H=S[1],D=(0,b.Tb)(),_=(0,p.useSpring)({from:{display:"none",height:0},to:function(){var e=(0,d.Z)(h().mark((function e(t){var r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=3;break}return e.next=3,t({display:"block"});case 3:return e.next=5,t({height:C?null===(r=T.current)||void 0===r?void 0:r.offsetHeight:0,immediate:D});case 5:return e.next=7,t(C?{height:"auto"}:{display:"none"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return(0,Z.BX)(X,{"aria-label":r,variant:u,children:[(0,Z.tZ)(Y,{isOpen:C,onClick:H,ariaControls:w,id:k,children:o}),(0,Z.tZ)(p.animated.div,{id:w,"aria-labelledby":k,style:_,css:(0,c.iv)((0,l.Z)({overflow:"hidden"},b.TV.mediaQuery.min.md,{overflow:"unset",display:"block !important",height:"auto !important"}),"",""),children:(0,Z.BX)(g.xu,{ref:T,as:"nav",role:"navigation","aria-labelledby":j,id:x,fontFamily:"body",fontSize:"sm",lineHeight:"default",children:[(0,Z.tZ)(B,{id:j,href:y,isCurrentPage:n===y,children:v}),(0,Z.tZ)(q,{activePath:n,items:i})]})})]})}function q(e){var t=e.activePath,r=e.items,n=function(e,t){if(!t)return"";var r,n="",o=O(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(!i.href||i.href===t)return i.href;null!==t&&void 0!==t&&t.startsWith(i.href)&&i.href.length>n.length&&(n=i.href)}}catch(a){o.e(a)}finally{o.f()}return n}(r,t);return(0,Z.tZ)(W,{children:r.map((function(e,r){var o=e.items,i=(0,a.Z)(e,N);return(0,Z.tZ)(A,M(M({active:i.href===n,isCurrentPage:i.href===t},i),{},{children:null!==o&&void 0!==o&&o.length?(0,Z.tZ)(q,{items:o,activePath:t}):null}),r)}))})}var K=r(2822),Q=r(9639),U=[{href:"#welcome",label:"Welcome"},{href:"#one",label:"Do you need to lodge a tax return?"},{href:"#two",label:"Lodge online",items:[{href:"#three",label:"Pre-filling your online tax return"}]},{href:"#four",label:"What's new for individuals"},{href:"#five",label:"Why you may receive a tax bill"},{href:"#in-detail",label:"In detail",items:[{href:"#in-detail/record-keeping",label:"Record keeping",items:[{href:"#in-detail/record-keeping/tax",label:"Keeping your tax records"},{href:"#in-detail/record-keeping/incorrect-amounts",label:"Incorrect amounts"}]},{href:"#ten",label:"Tax receipt"},{href:"#eleven",label:"Pre-fill availability"}]}],$=function(){return(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(Q.$,{title:"Content page example"}),(0,Z.tZ)(K.L,{children:(0,Z.tZ)(o.V,{children:(0,Z.BX)(i.o,{children:[(0,Z.tZ)(i.s,{columnSpan:{xs:12,md:3},children:(0,Z.tZ)(o.e,{visible:{md:!1},children:(0,Z.tZ)(F,{collapseTitle:"In this section",title:"Lodging your tax return",variant:"light",titleLink:"#welcome",activePath:"#in-detail/record-keeping/incorrect-amounts",items:U})})}),(0,Z.tZ)(i.s,{columnSpan:{xs:12,md:8},columnStart:{md:5},children:(0,Z.BX)(n.u,{children:[(0,Z.tZ)("h1",{children:"Content page example (h1)"}),(0,Z.tZ)("p",{children:"The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct."}),(0,Z.tZ)("p",{children:"These headings introduce, respectively, sections and subsections within your body copy. As you create these headings, follow the same guidelines that you use when writing section headings: Be succinct, descriptive, and precise."}),(0,Z.tZ)("h2",{children:"Subsection heading (h2)"}),(0,Z.tZ)("p",{children:"The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it\u2019s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that\u2019s most important to your users and then present information of less importance."}),(0,Z.tZ)("p",{children:"Keep each section and subsection focused \u2014 a good approach is to include one theme (topic) per section."}),(0,Z.tZ)("h3",{children:"Subsection heading (h3)"}),(0,Z.tZ)("p",{children:"Use the side navigation menu to help your users quickly skip to different sections of your page. The menu is best suited to displaying a hierarchy with 1 to 3 levels and, as we mentioned, to display the sub-navigation of a given page."}),(0,Z.BX)("p",{children:["Read more about how to best design and structure your web content using the"," ",(0,Z.tZ)("a",{target:"_blank",href:"https://guides.service.gov.au/content-guide/",rel:"noreferrer",children:"content guide"}),"."]}),(0,Z.tZ)("code",{children:"hello();"}),(0,Z.BX)("dl",{children:[(0,Z.tZ)("dt",{children:"Coffee"}),(0,Z.tZ)("dd",{children:"Black hot drink"}),(0,Z.tZ)("dt",{children:"Milk"}),(0,Z.tZ)("dd",{children:"White cold drink"})]}),(0,Z.BX)("ol",{children:[(0,Z.tZ)("li",{children:"Coffee"}),(0,Z.tZ)("li",{children:"Tea"}),(0,Z.tZ)("li",{children:"Milk"})]}),(0,Z.BX)("ul",{children:[(0,Z.tZ)("li",{children:"Coffee"}),(0,Z.tZ)("li",{children:"Tea"}),(0,Z.tZ)("li",{children:"Milk"})]})]})})]})})})]})}},3716:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var n=r(849),o=r(1670),i=r(8976),a=r(4060),l=r(7800);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=(0,i.yV)((function(e,t){return(0,l.tZ)(a.xu,d({ref:t,css:u},e))})),u=(0,o.iv)(d(d({margin:0,textSizeAdjust:"100%",color:i._X.foregroundText,fontFamily:i.TV.font.body},(0,i.vY)("sm","default")),{},{"a:not([class])":[a.Wf,a.j4],'[tabindex="0"]:focus, :target':{},mark:{color:i._X.backgroundBody,backgroundColor:i._X.foregroundAction},"& ::selection":{color:i._X.backgroundBody,backgroundColor:i._X.foregroundAction},img:{maxWidth:"100%"},"p:not([class])":{maxWidth:i.TV.maxWidth.bodyText,margin:0},"* + p:not([class])":{marginTop:(0,i.XH)(1.5)},"ul:not([class]),ol:not([class]),dl:not([class]),pre":{margin:0},"* + ul:not([class]), * + ol:not([class]), * + dl:not([class]), * + pre":{marginTop:(0,i.XH)(1.5)},"ul:not([class]), ol:not([class])":{"> li":{marginTop:(0,i.XH)(.5),"> ul:not([class]), > ol:not([class])":{marginTop:(0,i.XH)(.5)}},"> ul:not([class])":{listStyleType:"disc"}},"dl:not([class])":{"> dd":{marginTop:(0,i.XH)(.5),paddingLeft:(0,i.XH)(.5),marginLeft:0,borderLeftWidth:i.TV.borderWidth.sm,borderLeftStyle:"solid",borderLeftColor:i._X.border},"> dt":{marginTop:(0,i.XH)(1.5),fontWeight:"bold","&:first-of-type":{marginTop:0}}},"h1:not([class])":d(d({},(0,i.vY)("xxl","heading")),{},{marginTop:0,marginBottom:0}),"h2:not([class])":d(d({},(0,i.vY)("xl","heading")),{},{marginTop:0,marginBottom:0}),"h3:not([class])":d(d({},(0,i.vY)("lg","heading")),{},{marginTop:0,marginBottom:0}),"h4:not([class])":d(d({},(0,i.vY)("md","heading")),{},{marginTop:0,marginBottom:0}),"h5:not([class])":d(d({},(0,i.vY)("sm","heading")),{},{marginTop:0,marginBottom:0}),"h6:not([class])":d(d({},(0,i.vY)("xs","heading")),{},{marginTop:0,marginBottom:0}),"* + h1:not([class])":{marginTop:(0,i.XH)(3)},"* + h2:not([class])":{marginTop:(0,i.XH)(3)},"* + h3:not([class])":{marginTop:(0,i.XH)(1.5)},"* + h4:not([class])":{marginTop:(0,i.XH)(1.5)},"* + h5:not([class])":{marginTop:(0,i.XH)(1.5)},"* + h6:not([class])":{marginTop:(0,i.XH)(1.5)},"h1 + h2:not([class])":{marginTop:(0,i.XH)(1.5)},"h2 + h3:not([class])":{marginTop:(0,i.XH)(1.5)},"em,i":{fontStyle:"italic"},"strong,b":{fontWeight:"bold"},small:d({},(0,i.vY)("xs","default")),"s,del":{textDecoration:"line-through"},ins:{textDecorationLine:"underline",textDecorationStyle:"dashed",textDecorationSkipInk:"auto"},dfn:{fontStyle:"normal"},"abbr,abbr[title]":{borderBottom:"none",textDecoration:"underline dotted"},"abbr[title]":{cursor:"help"},"a abbr":{paddingBottom:1},var:{padding:"0 1px",fontStyle:"italic",fontFamily:"serif","sup,sub":{fontFamily:i.TV.font.body,fontStyle:"normal",padding:"0 1px"}},"sub,sup":d(d({},(0,i.vY)("xs","nospace")),{},{position:"relative",verticalAlign:"baseline"}),sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},"figure:not([class])":{marginTop:(0,i.XH)(1.5),marginBottom:0,marginLeft:0,marginRight:0},"blockquote:not([class])":{marginTop:(0,i.XH)(1.5),marginBottom:(0,i.XH)(1),marginLeft:0,marginRight:0,padding:(0,i.XH)(2),borderLeftWidth:i.TV.borderWidth.xl,borderLeftStyle:"solid",borderColor:i._X.border,background:i._X.backgroundShade},"kbd:not([class]),code:not([class]),samp:not([class])":d(d({},(0,i.vY)("xs","default")),{},{padding:(0,i.XH)(.25),fontFamily:i.TV.font.monospace,display:"inline-block",borderRadius:i.TV.borderRadius,backgroundColor:i._X.backgroundShade,color:i._X.foregroundText}),"pre:not([class])":{fontFamily:i.TV.font.monospace},"pre code":{display:"block",tabSize:4},"hr:not([class])":{boxSizing:"content-box",height:0,overflow:"visible",border:"none",borderTopWidth:i.TV.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.border,marginBottom:(0,i.XH)(1.5)},"* + hr:not([class])":{marginTop:(0,i.XH)(1.5)}}),"","")},9205:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content",function(){return r(3848)}])},5732:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(d){return void r(d)}l.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function l(e){n(a,o,i,l,c,"next",e)}function c(e){n(a,o,i,l,c,"throw",e)}l(void 0)}))}}r.d(t,{Z:function(){return o}})}},function(e){e.O(0,[766,180,774,888,179],(function(){return t=9205,e(e.s=t);var t}));var t=e.O();_N_E=t}]);