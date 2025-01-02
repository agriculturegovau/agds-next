"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[4979],{"./packages/react/src/a11y/ExternalLinkCallout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>ExternalLinkCallout});var _VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ExternalLinkCallout=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__.s,{children:", opens in a new tab"})},"./packages/react/src/a11y/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>visuallyHiddenStyles,s:()=>VisuallyHidden});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const VisuallyHidden=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{css:visuallyHiddenStyles,children}),visuallyHiddenStyles={clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:1}},"./packages/react/src/a11y/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O_:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.O,UW:()=>_ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__.U,s6:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.s});var _ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/ExternalLinkCallout.tsx"),_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx")},"./packages/react/src/content/BaseContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BaseContent});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/content/context.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/content/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function BaseContent({as="section",id,className,tabIndex,palette,background,children,paddingY}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_context__WEBPACK_IMPORTED_MODULE_2__.W.Provider,{value:paddingY,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.so,{as,background,className,id,justifyContent:"center",palette,tabIndex,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{maxWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.maxWidth.container,paddingBottom:_utils__WEBPACK_IMPORTED_MODULE_3__.N[paddingY].bottom,paddingTop:_utils__WEBPACK_IMPORTED_MODULE_3__.N[paddingY].top,paddingX:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.containerPadding,width:"100%",children})})})}},"./packages/react/src/content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Content});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_BaseContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/content/BaseContent.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Content(_ref){let{children,as="div"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_BaseContent__WEBPACK_IMPORTED_MODULE_1__.J,_objectSpread(_objectSpread({as},props),{},{paddingY:"none",children}))}},"./packages/react/src/content/PageContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>PageContent});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_BaseContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/content/BaseContent.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function PageContent(_ref){let{children,as="div"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_BaseContent__WEBPACK_IMPORTED_MODULE_1__.J,_objectSpread(_objectSpread({as},props),{},{paddingY:"page",children}))}},"./packages/react/src/content/SectionContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>SectionContent});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_BaseContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/content/BaseContent.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function SectionContent(_ref){let{children,as="section"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_BaseContent__WEBPACK_IMPORTED_MODULE_1__.J,_objectSpread(_objectSpread({as},props),{},{paddingY:"section",children}))}},"./packages/react/src/content/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useContentSpacing,W:()=>ContentSpacingContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ContentSpacingContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useContentSpacing=()=>{const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ContentSpacingContext);if(void 0===value)throw new Error("Context not found");return value}},"./packages/react/src/content/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Content.U,ContentBleed:()=>ContentBleed,PageContent:()=>PageContent.T,SectionContent:()=>SectionContent.R});var Content=__webpack_require__("./packages/react/src/content/Content.tsx"),PageContent=__webpack_require__("./packages/react/src/content/PageContent.tsx"),SectionContent=__webpack_require__("./packages/react/src/content/SectionContent.tsx"),core=__webpack_require__("./packages/react/src/core/index.ts"),context=__webpack_require__("./packages/react/src/content/context.ts"),utils=__webpack_require__("./packages/react/src/content/utils.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ContentBleed({children,visible}){const spacing=(0,context.S)();return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:[(0,core.mq)({marginTop:(0,core.AY)(utils.N[spacing].top,(v=>`-${(0,core.QY)(v)}`)),marginLeft:(0,core.AY)(core.tokens.containerPadding,(v=>`-${(0,core.QY)(v)}`)),marginRight:(0,core.AY)(core.tokens.containerPadding,(v=>`-${(0,core.QY)(v)}`))}),(0,core.mq)({marginTop:(0,core.AY)(visible,(v=>v?void 0:0)),marginLeft:(0,core.AY)(visible,(v=>v?void 0:0)),marginRight:(0,core.AY)(visible,(v=>v?void 0:0))}),"","","",""],children})}},"./packages/react/src/content/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>paddingYMap});const paddingYMap={none:{top:0,bottom:0},section:{top:{xs:3,md:4},bottom:{xs:3,md:4}},page:{top:{xs:2,md:3},bottom:{xs:3,md:4}}}},"./packages/react/src/loading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WT:()=>LoadingBlanket,XC:()=>LoadingDots});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const LoadingBlanketContainer=({children,fullScreen})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignItems:"center","aria-live":"assertive",color:"text",css:(0,emotion_react_browser_esm.AH)({position:fullScreen?"fixed":"absolute",inset:0,zIndex:core.tokens.zIndex.overlay,backgroundColor:"rgba(255, 255, 255, 0.9)"},"",""),flexDirection:"column",justifyContent:"center",palette:"light",children});var stack=__webpack_require__("./packages/react/src/stack/index.ts"),content=__webpack_require__("./packages/react/src/content/index.ts");const LoadingBlanketContent=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(content.U,{as:"div",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{alignItems:"center",gap:1,textAlign:"center",children})});var src_text=__webpack_require__("./packages/react/src/text/index.ts");const LoadingBlanketLabel=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontSize:"lg",fontWeight:"bold",lineHeight:"heading",role:"status",children});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts");const _excluded=["label","aria-live","role","className","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const loadingDotsSizes={sm:{gap:.5,dotSize:(0,core.QY)(.5),dots:3},md:{gap:.5,dotSize:(0,core.QY)(.75),dots:3},lg:{gap:.5,dotSize:(0,core.QY)(.75),dots:5}},LoadingDots=_ref=>{let{label,"aria-live":ariaLive,role,className,size="md"}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const{gap,dots,dotSize}=loadingDotsSizes[size],dotsArr=Array.from(Array(dots).keys());return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,_objectSpread(_objectSpread({"aria-atomic":"false","aria-live":ariaLive,as:"span",className,gap,role},props),{},{children:[label&&(0,emotion_react_jsx_runtime_browser_esm.Y)(a11y.s6,{children:label}),dotsArr.map((idx=>(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-hidden":"true",as:"span",css:(0,emotion_react_browser_esm.AH)({opacity:0,background:"currentColor",borderRadius:"50%",animationName:fadeInOut,animationDuration:"1250ms",animationIterationCount:"infinite",animationDelay:100*idx+"ms"},"",""),height:dotSize,highContrastOutline:!0,width:dotSize},idx)))]}))},fadeInOut=emotion_react_browser_esm.i7`
  0% { opacity: 0; }
  50% { opacity: 1; }
	100% { opacity: 0 }
`,LoadingBlanket=({fullScreen=!1,label})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(LoadingBlanketContainer,{fullScreen,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(LoadingBlanketContent,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(LoadingDots,{size:fullScreen?"lg":"md"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(LoadingBlanketLabel,{children:label})]})})},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({as,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);
//# sourceMappingURL=4979.7687b967.iframe.bundle.js.map