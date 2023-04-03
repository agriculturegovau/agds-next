"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[4021],{"./packages/react/a11y/dist/ag.ds-next-react-a11y.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/a11y/index.ts"),unregister()},"./packages/react/avatar/dist/ag.ds-next-react-avatar.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/avatar/index.ts"),unregister()},"./packages/react/badge/dist/ag.ds-next-react-badge.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/badge/index.ts"),unregister()},"./packages/react/skeleton/dist/ag.ds-next-react-skeleton.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/skeleton/index.ts"),unregister()},"./packages/react/src/avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Avatar(_ref){var name=_ref.name,_ref$tone=_ref.tone,toneProp=void 0===_ref$tone?"neutral":_ref$tone,_ref$size=_ref.size,sizeProp=void 0===_ref$size?"md":_ref$size,ariaHidden=_ref["aria-hidden"],ariaLabel=_ref["aria-label"],initials=function getInitialsFromName(name){var _matches$shift,_matches$pop,matches=Array.from(name.matchAll(new RegExp(/(\p{L}{1})\p{L}+/,"gu")));return matches.length?(((null===(_matches$shift=matches.shift())||void 0===_matches$shift?void 0:_matches$shift[1])||"")+((null===(_matches$pop=matches.pop())||void 0===_matches$pop?void 0:_matches$pop[1])||"")).toUpperCase():"?"}(name),color=TONE_PROP[toneProp],_SIZE_MAP$sizeProp=SIZE_MAP[sizeProp],size=_SIZE_MAP$sizeProp.size,fontSize=_SIZE_MAP$sizeProp.fontSize;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"span",alignItems:"center",justifyContent:"center",flexShrink:0,css:(0,emotion_react_browser_esm.iv)({textDecoration:"none",height:"".concat(size,"rem"),width:"".concat(size,"rem"),borderRadius:"50%",borderStyle:"solid",borderWidth:core.tokens.borderWidth.sm,borderColor:color,color},"",""),fontSize,fontWeight:"bold","aria-hidden":ariaHidden,"aria-label":ariaLabel,children:initials})}var TONE_PROP={neutral:core.boxPalette.foregroundMuted,action:core.boxPalette.foregroundAction},SIZE_MAP={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{name:{defaultValue:null,description:"The name of the person represented by the avatar.",name:"name",required:!0,type:{name:"string"}},tone:{defaultValue:null,description:"The colour tone to apply.",name:"tone",required:!1,type:{name:"enum",value:[{value:'"action"'},{value:'"neutral"'}]}},size:{defaultValue:null,description:"The size to apply.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},"aria-hidden":{defaultValue:null,description:"If true, the element will be hidden from assistive technologies.",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"Describes the element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"packages/react/src/avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Avatar:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.q});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/avatar/Avatar.tsx")},"./packages/react/src/badge/IndicatorDot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>IndicatorDot});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),IndicatorDot=function IndicatorDot(_ref){var ariaLabel=_ref["aria-label"];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{"aria-label":ariaLabel,highContrastOutline:!0,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)({width:8,height:8,borderRadius:4,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction},"","")})};try{IndicatorDot.displayName="IndicatorDot",IndicatorDot.__docgenInfo={description:"",displayName:"IndicatorDot",props:{"aria-label":{defaultValue:null,description:"The accessible label to read out in screen readers.",name:"aria-label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/badge/IndicatorDot.tsx#IndicatorDot"]={docgenInfo:IndicatorDot.__docgenInfo,name:"IndicatorDot",path:"packages/react/src/badge/IndicatorDot.tsx#IndicatorDot"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/badge/NotificationBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>NotificationBadge});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),badgeToneMap={neutral:core.boxPalette.foregroundMuted,action:core.boxPalette.foregroundAction},emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),NotificationBadge=function NotificationBadge(_ref){var value=_ref.value,max=_ref.max,tone=_ref.tone,ariaHidden=_ref["aria-hidden"],backgroundColor=badgeToneMap[tone];return(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{display:"inline-flex",alignItems:"center",justifyContent:"center",height:(0,core.mapSpacing)(1.5),paddingX:.5,rounded:!0,fontSize:"sm",lineHeight:"nospace","aria-hidden":ariaHidden,css:(0,emotion_react_browser_esm.iv)({color:core.boxPalette.backgroundBody,backgroundColor,minWidth:(0,core.mapSpacing)(1.5),borderRadius:(0,core.mapSpacing)(.75)},"",""),children:void 0===max||value<=max?value:"".concat(max,"+")})};try{NotificationBadge.displayName="NotificationBadge",NotificationBadge.__docgenInfo={description:"",displayName:"NotificationBadge",props:{value:{defaultValue:null,description:"The number to show.",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:null,description:'If value exceeds this number, show max+ instead. e.g. "99+".',name:"max",required:!1,type:{name:"number"}},tone:{defaultValue:null,description:"The colour tone to apply.",name:"tone",required:!0,type:{name:"enum",value:[{value:'"action"'},{value:'"neutral"'}]}},"aria-hidden":{defaultValue:null,description:"If true, the element will be hidden from assistive technologies.",name:"aria-hidden",required:!1,type:{name:"Booleanish"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/badge/NotificationBadge.tsx#NotificationBadge"]={docgenInfo:NotificationBadge.__docgenInfo,name:"NotificationBadge",path:"packages/react/src/badge/NotificationBadge.tsx#NotificationBadge"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/badge/StatusBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>StatusBadge});var _emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"1bmnxg7",styles:"white-space:nowrap"},StatusBadge=function StatusBadge(_ref){var label=_ref.label,tone=_ref.tone,_toneMap$tone=toneMap[tone],borderColor=_toneMap$tone.borderColor,Icon=_toneMap$tone.icon;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.BX)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{display:"inline-flex",alignItems:"center",gap:.5,height,paddingX:.75,background:"body",border:!0,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.iv)({overflow:"hidden",borderRadius,borderColor,"& svg":{flexShrink:0,width:iconWidth}},"",""),children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(Icon,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_text__WEBPACK_IMPORTED_MODULE_3__.Text,{as:"span",fontSize:"sm",lineHeight:"nospace",css:_ref2,children:label})]})},height=(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(2),borderRadius=(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1),iconWidth="1.375rem",NeutralDot=function NeutralDot(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{highContrastOutline:!0,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.iv)({width:8,height:8,borderRadius:4,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundMuted},"","")})},toneMap={neutral:{borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.border,icon:function icon(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(NeutralDot,{})}},success:{borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.systemSuccess,icon:function icon(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_2__.tm,{color:"success"})}},error:{borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.systemError,icon:function icon(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_2__.zM,{color:"error"})}},info:{borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.systemInfo,icon:function icon(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_2__.sz,{color:"info"})}},warning:{borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.systemWarning,icon:function icon(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_2__.aN,{color:"warning"})}}};try{StatusBadge.displayName="StatusBadge",StatusBadge.__docgenInfo={description:"",displayName:"StatusBadge",props:{label:{defaultValue:null,description:"The status that is printed in the text label.",name:"label",required:!0,type:{name:"ReactNode"}},tone:{defaultValue:null,description:"The colour tone to apply.",name:"tone",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'},{value:'"neutral"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/badge/StatusBadge.tsx#StatusBadge"]={docgenInfo:StatusBadge.__docgenInfo,name:"StatusBadge",path:"packages/react/src/badge/StatusBadge.tsx#StatusBadge"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/badge/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IndicatorDot:()=>_IndicatorDot__WEBPACK_IMPORTED_MODULE_1__.P,NotificationBadge:()=>_NotificationBadge__WEBPACK_IMPORTED_MODULE_2__.C,StatusBadge:()=>_StatusBadge__WEBPACK_IMPORTED_MODULE_0__.O});var _StatusBadge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/badge/StatusBadge.tsx"),_IndicatorDot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/badge/IndicatorDot.tsx"),_NotificationBadge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/badge/NotificationBadge.tsx")},"./packages/react/src/skeleton/SkeletonBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>SkeletonBox});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),AnimatedBox=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_0__.animated)(_box__WEBPACK_IMPORTED_MODULE_2__.Box),opacity_start=.84,opacity_end=.2,SkeletonBox=function SkeletonBox(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,_ref$height=_ref.height,height=void 0===_ref$height?"auto":_ref$height,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,prefersReducedMotion=(0,_core__WEBPACK_IMPORTED_MODULE_1__.usePrefersReducedMotion)(),style=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_0__.useSpring)(prefersReducedMotion?{from:{opacity:opacity_start},to:{opacity:opacity_start}}:{from:{opacity:opacity_start},to:{opacity:opacity_end},loop:{reverse:!0,delay:0},config:{duration:1200},reset:!0});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(AnimatedBox,{"aria-hidden":"true",display:"block",fontSize,lineHeight,height,width,highContrastOutline:!0,rounded:!0,style,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({opacity:opacity_start,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.border,cursor:"progress","&:before":{content:'"\\00a0"'}},"","")})};try{SkeletonBox.displayName="SkeletonBox",SkeletonBox.__docgenInfo={description:"",displayName:"SkeletonBox",props:{fontSize:{defaultValue:{value:"sm"},description:"The font size of the element.",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:{value:"default"},description:"The line height of the element.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:{value:"auto"},description:"The height of the element.",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skeleton/SkeletonBox.tsx#SkeletonBox"]={docgenInfo:SkeletonBox.__docgenInfo,name:"SkeletonBox",path:"packages/react/src/skeleton/SkeletonBox.tsx#SkeletonBox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skeleton/SkeletonHeading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>SkeletonHeading});var _heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/heading/index.ts"),_SkeletonBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/skeleton/SkeletonBox.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),SkeletonHeading=function SkeletonHeading(_ref){var type=_ref.type,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_SkeletonBox__WEBPACK_IMPORTED_MODULE_1__.n,{fontSize:_heading__WEBPACK_IMPORTED_MODULE_0__.U[type],lineHeight:"heading",width})};try{SkeletonHeading.displayName="SkeletonHeading",SkeletonHeading.__docgenInfo={description:"",displayName:"SkeletonHeading",props:{type:{defaultValue:null,description:"The type/level of heading is used to control the height of the element.",name:"type",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skeleton/SkeletonHeading.tsx#SkeletonHeading"]={docgenInfo:SkeletonHeading.__docgenInfo,name:"SkeletonHeading",path:"packages/react/src/skeleton/SkeletonHeading.tsx#SkeletonHeading"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skeleton/SkeletonText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SkeletonText});var _SkeletonBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/skeleton/SkeletonBox.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),SkeletonText=function SkeletonText(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SkeletonBox__WEBPACK_IMPORTED_MODULE_0__.n,{fontSize,lineHeight,width})};try{SkeletonText.displayName="SkeletonText",SkeletonText.__docgenInfo={description:"",displayName:"SkeletonText",props:{fontSize:{defaultValue:{value:"sm"},description:"The font size of the element.",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:{value:"default"},description:"The line height of the element.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skeleton/SkeletonText.tsx#SkeletonText"]={docgenInfo:SkeletonText.__docgenInfo,name:"SkeletonText",path:"packages/react/src/skeleton/SkeletonText.tsx#SkeletonText"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skeleton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SkeletonBox:()=>_SkeletonBox__WEBPACK_IMPORTED_MODULE_0__.n,SkeletonHeading:()=>_SkeletonHeading__WEBPACK_IMPORTED_MODULE_1__.j,SkeletonText:()=>_SkeletonText__WEBPACK_IMPORTED_MODULE_2__.N});var _SkeletonBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/skeleton/SkeletonBox.tsx"),_SkeletonHeading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/skeleton/SkeletonHeading.tsx"),_SkeletonText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/skeleton/SkeletonText.tsx")},"./packages/react/table/dist/ag.ds-next-react-table.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/table/index.ts"),unregister()},"./packages/react/text-link/dist/ag.ds-next-react-text-link.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/text-link/index.ts"),unregister()}}]);