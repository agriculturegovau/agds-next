(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{15600:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(83276),r()},47784:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(71233),r()},24665:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(45897),r()},55735:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(36618),r()},13301:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(72234),r()},18878:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(98395),r()},83276:function(e,t,n){"use strict";n.d(t,{Breadcrumbs:function(){return Breadcrumbs}});var r=n(90849),o=n(90089),i=n(27378),a=n(27137),c=n(10043),l=n(76573),s=n(30294),u=n(87800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var BreadcrumbsContainer=function(e){var t,n=e.children,o=e["aria-label"],i=e.isExpandable,a=e.isExpanded;return(0,u.tZ)("nav",{"aria-label":o,children:(0,u.tZ)(l.Flex,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:(0,c.iv)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({"li:first-of-type > svg":{display:"none"}},i&&!a&&(t={},(0,r.Z)(t,s.tokens.mediaQuery.min.md,{"li:nth-of-type(2)":{display:"none"}}),(0,r.Z)(t,s.tokens.mediaQuery.max.sm,{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}),t)),"",""),children:n})})},d=n(62231),p=n(69272),b={name:"oi0w1a",styles:"flex-shrink:0;position:relative;top:1px"},BreadcrumbsDivider=function(){return(0,u.tZ)(p.XC,{color:"border",size:"sm",css:b})};function BreadcrumbsItem_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=(0,i.forwardRef)(function(e,t){var n=e.children,o=e.href;return(0,u.BX)(l.Flex,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[(0,u.tZ)(BreadcrumbsDivider,{}),o?(0,u.tZ)(d.TextLink,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?BreadcrumbsItem_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):BreadcrumbsItem_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({ref:t},e)):n]})}),g=n(71233);function BreadcrumbsToggle(e){var t=e.onClick;return(0,u.tZ)(f,{children:(0,u.tZ)(l.Flex,{as:g.BaseButton,onClick:t,"aria-label":"Expand list","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focus:!0,link:!0,children:"…"})})}var h=["label"],m=["label"],v=["label"];function Breadcrumbs_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Breadcrumbs_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Breadcrumbs_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Breadcrumbs_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Breadcrumbs=function(e){var t=e["aria-label"],n=e.links,r=(0,i.useRef)(null),c=n[0],l=c.label,s=(0,o.Z)(c,h),d=n[n.length-1],p=d.label,b=(0,o.Z)(d,m),g=n.filter(function(e,t,n){return!(0===t||t===n.length-1)}),y=(0,i.useState)(!g.length),O=y[0],P=y[1];return(0,u.BX)(BreadcrumbsContainer,{"aria-label":void 0===t?"breadcrumb":t,isExpandable:!0,isExpanded:O,children:[(0,u.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({ref:r},s),{},{children:l})),!O&&g.length?(0,u.tZ)(BreadcrumbsToggle,{onClick:function(){var e;P(!0),null===(e=r.current)||void 0===e||e.focus()}}):null,g.map(function(e,t){var n=e.label,r=(0,o.Z)(e,v);return(0,u.tZ)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},r),{},{children:n}),t)}),(0,u.BX)(f,Breadcrumbs_objectSpread(Breadcrumbs_objectSpread({},b),{},{children:[p,(0,u.tZ)(a.TX,{children:" (current page)"})]}))]})}},45897:function(e,t,n){"use strict";n.d(t,{Card:function(){return Card},CardInner:function(){return CardInner},CardLink:function(){return CardLink}});var r=n(90849),o=n(10043),i=n(34339),a=n(30294),c=n(87800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Card=function(e){var t=e.as,n=e.background,r=e.children,l=e.className,s=e.shadow,u=e.clickable;return(0,c.tZ)(i.Box,{as:t,display:"block",border:!0,borderColor:"muted",background:void 0===n?"body":n,rounded:!0,className:l,css:(0,o.iv)(_objectSpread(_objectSpread({position:"relative",overflow:"hidden"},u&&{":has(:focus-visible)":a.lB.outline,"@supports not selector(:has(*))":{":focus-within":a.lB.outline}}),s&&{boxShadow:a.tokens.shadow.sm,"&:hover":u?{boxShadow:a.tokens.shadow.md}:void 0}),"",""),children:r})},CardInner=function(e){var t=e.children;return(0,c.tZ)(i.Box,{padding:1.5,children:t})};function CardLink_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var CardLink=function(e){var t=(0,a.yF)();return(0,c.tZ)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?CardLink_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):CardLink_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({css:[i.Wf,'display:flex;justify-content:space-between;&:focus, &:focus-visible{outline:none;}&:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;}',"","",""]},e))}},72234:function(e,t,n){"use strict";n.d(t,{PaginationButtons:function(){return PaginationButtons}});var r=n(18979),o=n(90849),i=n(90089),a=n(34339),c=n(76573);n(62231);var l=n(71233),s=n(69272),u="2.75rem",d="3rem",p=n(87800),b=["children"],f=["as","children","direction"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function PaginationItemDirectionButton(e){var t=e.direction,n=e.onClick;return(0,p.tZ)(PaginationItemDirectionListItem,{direction:t,children:(0,p.tZ)(DirectionButton,{direction:t,onClick:n,"aria-label":"Go to ".concat("left"==t?"previous":"next"," page"),children:"left"===t?"Previous":"Next"})})}function PaginationItemDirectionListItem(e){var t=e.children,n=e.direction;return(0,p.tZ)(a.Box,{as:"li",paddingRight:"left"===n?{sm:1}:void 0,paddingLeft:"right"===n?{sm:1}:void 0,children:t})}var DirectionButton=function(e){var t=e.children,n=(0,i.Z)(e,b);return(0,p.tZ)(BaseDirectionLink,_objectSpread(_objectSpread({as:l.BaseButton},n),{},{children:t}))},g={name:"xyzkeb",styles:"align-self:flex-start"},BaseDirectionLink=function(e){var t=e.as,n=e.children,r=e.direction,o=(0,i.Z)(e,f);return(0,p.BX)(c.Flex,_objectSpread(_objectSpread({as:t,inline:!0,gap:.5,justifyContent:"center",alignItems:"center",fontFamily:"body",fontWeight:"normal",link:!0,focus:!0,width:{xs:u,sm:"auto"},height:{xs:u,sm:d},css:g},o),{},{children:["left"===r?(0,p.tZ)(s.Y4,{size:"sm"}):null,(0,p.tZ)(a.Box,{as:"span",display:["none","inline"],children:n}),"right"===r?(0,p.tZ)(s.LZ,{size:"sm"}):null]}))};function PaginationItemSeparator_PaginationItemSeparator(){return(0,p.tZ)(c.Flex,{as:"li",width:{sm:d},height:{sm:d},alignItems:"center",justifyContent:"center",children:(0,p.tZ)(r.Text,{children:"…"})})}var h=n(30294);function PaginationItemPageButton(e){var t=e.pageNumber,n=e.onClick,r=e.isActive;return(0,p.tZ)("li",{children:(0,p.tZ)(c.Flex,{as:l.BaseButton,"aria-label":"Go to page ".concat(t),"aria-current":r?"page":void 0,onClick:n,justifyContent:"center",alignItems:"center",width:{xs:u,sm:d},height:{xs:u,sm:d},fontWeight:r?"bold":"normal",link:!0,focus:!0,css:r?{color:h._X.foregroundText,textDecoration:"none"}:void 0,children:t})})}var m=n(27378),v=n(10043),y=["label","maxWidth","options","placeholder","id"];function PaginationSelect_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function PaginationSelect_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?PaginationSelect_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):PaginationSelect_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var PaginationSelect=function(e){var t=e.label,n=e.maxWidth,o=e.options,a=e.placeholder,l=e.id,s=(0,i.Z)(e,y);return(0,p.BX)(c.Flex,{alignItems:"center",gap:1,children:[(0,p.tZ)(r.Text,{as:"label",fontWeight:"bold",htmlFor:l,children:t}),(0,p.BX)("div",{css:(0,v.iv)({position:"relative",maxWidth:h.tokens.maxWidth.field[void 0===n?"md":n]},"",""),children:[(0,p.tZ)("select",PaginationSelect_objectSpread(PaginationSelect_objectSpread({id:l,css:O},s),{},{children:(0,p.tZ)(SelectOptions,{options:o,placeholder:a})})),(0,p.tZ)(SelectIcon,{})]})]})},SelectOptions=function(e){var t=e.options,n=e.placeholder;return(0,p.BX)(m.Fragment,{children:[n?(0,p.tZ)("option",{value:"",children:n}):null,t.map(function(e){return"options"in e?(0,p.tZ)("optgroup",{label:e.label,disabled:e.disabled,children:e.options.map(function(e){var t=e.value,n=e.label,r=e.disabled;return(0,p.tZ)("option",{value:t,disabled:r,children:n},t)})},e.label):(0,p.tZ)("option",{value:e.value,disabled:e.disabled,children:e.label},e.value)})]})},SelectIcon=function(e){var t=e.disabled;return(0,p.tZ)(s.ChevronDownIcon,{css:(0,v.iv)({position:"absolute",top:"50%",right:(0,h.mapSpacing)(.75),transform:"translateY(-50%)",opacity:t?.3:void 0,pointerEvents:"none",color:h._X.foregroundAction},"","")})},O=PaginationSelect_objectSpread(PaginationSelect_objectSpread(PaginationSelect_objectSpread({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,h.mapSpacing)(1),paddingRight:"calc(".concat(h.tokens.borderWidth.lg,"px + 2.5rem)"),margin:0,background:h._X.backgroundBody,borderWidth:h.tokens.borderWidth.lg,borderStyle:"solid",borderColor:h._X.border,borderRadius:h.tokens.borderRadius,color:h._X.foregroundText,width:"100%",fontFamily:h.tokens.font.body},h.lB.input.md),{},{lineHeight:h.tokens.lineHeight.default},h.lB.truncate),{},{"&:disabled":{opacity:1,cursor:"not-allowed",borderColor:h._X.borderMuted,backgroundColor:h._X.backgroundShade,color:h._X.foregroundMuted},"&:focus":h.lB.outline}),PaginationItemsPerPageSelect_PaginationItemsPerPageSelect=function(e){var t=e.value,n=e.options,r=e.onChange,o=(0,m.useId)();return(0,p.tZ)(PaginationSelect,{label:"Items per page",options:(void 0===n?[10,20,50,100]:n).map(function(e){return{label:"".concat(e),value:"".concat(e)}}),value:"".concat(t),onChange:function(e){return r(Number(e.target.value))},maxWidth:"sm",id:"pagination-per-page-select-".concat(o)})},PaginationContainer_PaginationItemContainer=function(e){var t=e.children,n=e["aria-label"];return(0,p.tZ)("nav",{"aria-label":n,children:(0,p.tZ)(c.Flex,{as:"ol",alignItems:"center",justifyContent:"center",flexWrap:"wrap",children:t})})},PaginationContainer_PaginationContainer=function(e){var t=e.children,n=e.hasRightArea;return(0,p.tZ)(c.Flex,{gap:1,alignItems:"center",justifyContent:n?"space-between":"center",flexDirection:{xs:"column",lg:"row"},flexWrap:"wrap",children:t})},PaginationContainer_PaginationSecondaryControlContainer=function(e){var t=e.children;return(0,p.tZ)(c.Flex,{columnGap:2,rowGap:1,alignItems:"center",flexDirection:{xs:"column",lg:"row"},children:t})};function PaginationButtons(e){var t=e["aria-label"],n=e.onChange,o=e.currentPage,i=e.totalPages,a=e.windowLimit,c=e.itemRangeText,l=e.itemsPerPage,s=e.itemsPerPageOptions,u=e.onItemsPerPageChange,d=function(e){var t=e.currentPage,n=e.totalPages,r=e.windowLimit,o=[],i=1,a=n;if(r<n){var c=Math.floor(r/2);i=t-(c+r%2-1),a=t+c,i<1&&(a=r,i=1),a>n&&(i=n-r+1,a=n)}t>1&&o.push({type:"direction",direction:"left",pageNumber:t-1}),i>1&&(o.push({type:"page",pageNumber:1,isActive:1===t}),i>3?o.push({type:"separator"}):2!==i&&o.push({type:"page",pageNumber:2,isActive:2===t}));for(var l=i;l<=a;l++){var s=l===t;o.push({type:"page",pageNumber:l,isActive:s})}return a+1<n&&(a+1!==n-1?o.push({type:"separator"}):o.push({type:"page",pageNumber:n-1,isActive:n-1===t})),a<n&&o.push({type:"page",pageNumber:n,isActive:n===t}),t<n&&o.push({type:"direction",direction:"right",pageNumber:t+1}),o}({currentPage:o,totalPages:i,windowLimit:void 0===a?3:a}),b=!!(l&&u||c);return(0,p.BX)(PaginationContainer_PaginationContainer,{hasRightArea:b,children:[(0,p.tZ)(PaginationContainer_PaginationItemContainer,{"aria-label":void 0===t?"pagination":t,children:d.map(function(e,t){switch(e.type){case"direction":return(0,p.tZ)(PaginationItemDirectionButton,{direction:e.direction,onClick:function(){return n(e.pageNumber)}},e.direction);case"page":return(0,p.tZ)(PaginationItemPageButton,{pageNumber:e.pageNumber,onClick:function(){return n(e.pageNumber)},isActive:e.isActive},t);case"separator":return(0,p.tZ)(PaginationItemSeparator_PaginationItemSeparator,{},t);default:return null}})}),b&&(0,p.BX)(PaginationContainer_PaginationSecondaryControlContainer,{children:[c&&(0,p.tZ)(r.Text,{children:c}),l&&u&&(0,p.tZ)(PaginationItemsPerPageSelect_PaginationItemsPerPageSelect,{value:l,options:s,onChange:u})]})]})}},98395:function(e,t,n){"use strict";n.d(t,{SearchInput:function(){return h}});var r=n(90849),o=n(11246),i=n(90089),a=n(27378),c=n(11100),l=n(30294),s=n(31440),u=n(10043),d=n(87800);function SearchInputContainer(e){var t=e.children,n=e.maxWidth;return(0,d.tZ)("div",{css:(0,u.iv)({position:"relative",maxWidth:n},"",""),children:t})}var p=n(69272),b=n(76573);function SearchInputClearButton(e){var t=e.disabled,n=e.onClick;return(0,d.tZ)(b.Flex,{role:"button",alignItems:"center",justifyContent:"center","aria-label":"Clear search",width:"2rem",height:"2rem",onClick:n,css:(0,u.iv)({position:"absolute",top:"50%",right:"calc(".concat((0,l.mapSpacing)(.5)," + ").concat(l.tokens.borderWidth.lg,"px)"),transform:"translateY(-50%)",opacity:t?.3:void 0,cursor:"pointer",color:l._X.foregroundAction,"&:hover":{color:l._X.foregroundText}},"",""),children:(0,d.tZ)(p.Tw,{color:"inherit"})})}function SearchInputIcon(e){var t=e.disabled;return(0,d.tZ)(p.W1,{size:"md",weight:"regular",color:"muted",css:(0,u.iv)({position:"absolute",top:"50%",left:"calc(".concat((0,l.mapSpacing)(.75)," + ").concat(l.tokens.borderWidth.lg,"px)"),transform:"translateY(-50%)",pointerEvents:"none",opacity:t?.3:void 0},"","")})}var f=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","disabled","value","onChange","onClear"],g=["maxWidth"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h=(0,a.forwardRef)(function(e,t){var n,r,u,p,b,h,m=e.label,v=e.hideOptionalLabel,y=e.required,O=e.hint,P=e.message,w=e.invalid,j=e.block,S=e.maxWidth,_=e.id,Z=e.disabled,x=e.value,k=e.onChange,C=e.onClear,B=(0,i.Z)(e,f),I=(0,a.useRef)(null),D=(0,a.useState)(x||""),X=D[0],E=D[1],W="string"==typeof x?x:X,_onChange=function(e){null==k||k(e),E(e)},clearInput=function(){var e;W&&(_onChange(""),null==C||C(),null===(e=I.current)||void 0===e||e.focus())},onKeyDown=function(e){"Escape"===e.code&&clearInput()},K=!!W,L=(r=(n={block:j,maxWidth:void 0===S?"md":S,invalid:w,showClearButton:K}).block,u=n.maxWidth,p=n.invalid,b=n.showClearButton,[(h=(0,s.c)({block:r,maxWidth:u,invalid:p})).maxWidth,_objectSpread(_objectSpread(_objectSpread({},(0,i.Z)(h,g)),{},{width:"100%",maxWidth:void 0,paddingLeft:"3rem"},b&&{paddingRight:"3rem"}),{},{"&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{display:"none"}})]),N=(0,o.Z)(L,2),F=N[0],T=N[1];return(0,d.tZ)(c.gN,{label:m,hideOptionalLabel:v,required:!!y,hint:O,message:P,invalid:w,id:_,children:function(e){return(0,d.BX)(SearchInputContainer,{maxWidth:F,children:[(0,d.tZ)(SearchInputIcon,{disabled:Z}),(0,d.tZ)("input",_objectSpread(_objectSpread({ref:(0,l.lq)([I,t]),type:"search",disabled:Z,value:W,onChange:function(e){return _onChange(e.target.value)},onKeyDown:onKeyDown,css:T,autoComplete:"off"},e),B)),K?(0,d.tZ)(SearchInputClearButton,{disabled:Z,onClick:clearInput}):null]})}})})},68160:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(62231),r()},61014:function(e,t,n){"use strict";n.d(t,{V:function(){return PageTitle}});var r=n(27378),o=n(18717),i=n(92852),a=n(54149),c=n(87800),PageTitle=function(e){var t=e.pretext,n=e.title,l=e.introduction,s=e.callToAction;return(0,c.BX)(o.Stack,{gap:1.5,children:[(0,c.BX)(o.Stack,{children:[t?(0,c.tZ)(a.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,r.isValidElement)(n)?n:(0,c.tZ)(i.H1,{children:n})]}),l?(0,c.tZ)(a.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,s]})}},74926:function(e,t,n){"use strict";n.r(t);var r=n(27378),o=n(72892),i=n(18717),a=n(15600),c=n(74348),l=n(18878),s=n(13301),u=n(47784),d=n(4196),p=n(54149),b=n(90632),f=n(55735),g=n(92852),h=n(24665),m=n(16949),v=n(91492),y=n(61014),O=n(87800),Page=function(){return(0,O.BX)(r.Fragment,{children:[(0,O.tZ)(m.$,{title:"Manage licences and permits"}),(0,O.tZ)(o.PageContent,{children:(0,O.BX)(i.Stack,{gap:3,children:[(0,O.tZ)(a.Breadcrumbs,{links:[{label:"Home",href:"/app"},{label:"Manage licences and permits",href:"/app/licences-and-permits"},{label:"Apply for a new licence or permit"}]}),(0,O.tZ)(y.V,{title:"Apply for a new licence or permit"}),(0,O.BX)(i.Stack,{gap:1,children:[(0,O.BX)(c.Flex,{gap:1,justifyContent:"space-between",flexDirection:["column","row"],children:[(0,O.BX)(c.Flex,{flexDirection:["column","row"],gap:1,alignItems:["flex-start","flex-end"],children:[(0,O.tZ)(l.SearchInput,{label:"Search",hideOptionalLabel:!0}),(0,O.tZ)(u.Button,{variant:"secondary",iconAfter:b.FilterIcon,children:"Show filters"})]}),(0,O.tZ)(d.Select,{label:"Sort by",hideOptionalLabel:!0,options:[{value:"newest",label:"Newest to oldest"},{value:"old",label:"Oldest to newest"}]})]}),(0,O.tZ)(f.Divider,{})]}),(0,O.BX)(i.Stack,{gap:1,children:[(0,O.tZ)(g.H3,{children:"1 result"}),(0,O.tZ)(h.Card,{shadow:!0,clickable:!0,children:(0,O.tZ)(h.CardInner,{children:(0,O.BX)(i.Stack,{gap:1,children:[(0,O.tZ)(g.H3,{children:(0,O.tZ)(h.CardLink,{href:"/app/licences-and-permits/apply/mobile-food-vendor-permit",children:"Apply for a mobile food vendor permit"})}),(0,O.tZ)(p.Text,{as:"p",children:"If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas."})]})})})]}),(0,O.tZ)(s.PaginationButtons,{currentPage:1,totalPages:1,onChange:function(e){return console.log(e)}})]})})]})};t.default=Page,Page.getLayout=function(e){return(0,O.tZ)(v.L,{children:e})}},32549:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/licences-and-permits/apply",function(){return n(74926)}])}},function(e){e.O(0,[459,998,490,492,579,774,888,179],function(){return e(e.s=32549)}),_N_E=e.O()}]);