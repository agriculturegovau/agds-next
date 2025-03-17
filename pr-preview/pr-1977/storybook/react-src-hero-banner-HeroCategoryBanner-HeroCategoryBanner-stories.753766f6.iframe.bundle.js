"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3967],{"./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBanner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,OnBodyAlt:()=>OnBodyAlt,WithoutImage:()=>WithoutImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_HeroCategoryBanner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBanner.tsx"),_HeroCategoryBannerTitle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerTitle.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["title","subtitle"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Template(_ref){let{title,subtitle}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_HeroCategoryBanner__WEBPACK_IMPORTED_MODULE_2__.$,_objectSpread(_objectSpread({},props),{},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_HeroCategoryBannerTitle__WEBPACK_IMPORTED_MODULE_3__.r,{children:title}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_HeroCategoryBannerTitle__WEBPACK_IMPORTED_MODULE_3__.L,{children:subtitle})]}))}const __WEBPACK_DEFAULT_EXPORT__={title:"layout/HeroBanner/HeroCategoryBanner",component:_HeroCategoryBanner__WEBPACK_IMPORTED_MODULE_2__.$,parameters:{layout:"fullscreen"},args:{title:"Website hero banner title - xxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("img",{alt:"",role:"presentation",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"})},render:Template},Basic={args:{}},OnBodyAlt={name:"On bodyAlt background",args:{background:"body"},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{background:"bodyAlt",paddingY:3,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(Template,_objectSpread({},args))})},WithoutImage={args:{image:void 0}},__namedExportsOrder=["Basic","OnBodyAlt","WithoutImage"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Basic.parameters?.docs?.source}}},OnBodyAlt.parameters={...OnBodyAlt.parameters,docs:{...OnBodyAlt.parameters?.docs,source:{originalSource:"{\n  name: 'On bodyAlt background',\n  args: {\n    background: 'body'\n  },\n  render: args => <Box background=\"bodyAlt\" paddingY={3}>\n            <Template {...args} />\n        </Box>\n}",...OnBodyAlt.parameters?.docs?.source}}},WithoutImage.parameters={...WithoutImage.parameters,docs:{...WithoutImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    image: undefined\n  }\n}",...WithoutImage.parameters?.docs?.source}}}},"./packages/react/src/content/BaseContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>BaseContent});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/content/context.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/content/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function BaseContent({as="section",id,className,tabIndex,palette,background,children,paddingY}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_context__WEBPACK_IMPORTED_MODULE_2__.W.Provider,{value:paddingY,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.so,{as,background,className,id,justifyContent:"center",palette,tabIndex,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{maxWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.maxWidth.container,paddingBottom:_utils__WEBPACK_IMPORTED_MODULE_3__.N[paddingY].bottom,paddingTop:_utils__WEBPACK_IMPORTED_MODULE_3__.N[paddingY].top,paddingX:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.containerPadding,width:"100%",children})})})}},"./packages/react/src/content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Content});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_BaseContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/content/BaseContent.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Content(_ref){let{children,as="div"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_BaseContent__WEBPACK_IMPORTED_MODULE_1__.J,_objectSpread(_objectSpread({as},props),{},{paddingY:"none",children}))}},"./packages/react/src/content/PageContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>PageContent});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_BaseContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/content/BaseContent.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function PageContent(_ref){let{children,as="div"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_BaseContent__WEBPACK_IMPORTED_MODULE_1__.J,_objectSpread(_objectSpread({as},props),{},{paddingY:"page",children}))}},"./packages/react/src/content/SectionContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>SectionContent});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_BaseContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/content/BaseContent.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","as"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function SectionContent(_ref){let{children,as="section"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_BaseContent__WEBPACK_IMPORTED_MODULE_1__.J,_objectSpread(_objectSpread({as},props),{},{paddingY:"section",children}))}},"./packages/react/src/content/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useContentSpacing,W:()=>ContentSpacingContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ContentSpacingContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useContentSpacing=()=>{const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ContentSpacingContext);if(void 0===value)throw new Error("Context not found");return value}},"./packages/react/src/content/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Content.U,ContentBleed:()=>ContentBleed,PageContent:()=>PageContent.T,SectionContent:()=>SectionContent.R});var Content=__webpack_require__("./packages/react/src/content/Content.tsx"),PageContent=__webpack_require__("./packages/react/src/content/PageContent.tsx"),SectionContent=__webpack_require__("./packages/react/src/content/SectionContent.tsx"),core=__webpack_require__("./packages/react/src/core/index.ts"),context=__webpack_require__("./packages/react/src/content/context.ts"),utils=__webpack_require__("./packages/react/src/content/utils.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ContentBleed({children,visible}){const spacing=(0,context.S)();return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:[(0,core.mq)({marginTop:(0,core.AY)(utils.N[spacing].top,(v=>`-${(0,core.QY)(v)}`)),marginLeft:(0,core.AY)(core.tokens.containerPadding,(v=>`-${(0,core.QY)(v)}`)),marginRight:(0,core.AY)(core.tokens.containerPadding,(v=>`-${(0,core.QY)(v)}`))}),(0,core.mq)({marginTop:(0,core.AY)(visible,(v=>v?void 0:0)),marginLeft:(0,core.AY)(visible,(v=>v?void 0:0)),marginRight:(0,core.AY)(visible,(v=>v?void 0:0))}),"","","",""],children})}},"./packages/react/src/content/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>paddingYMap});const paddingYMap={none:{top:0,bottom:0},section:{top:{xs:3,md:4},bottom:{xs:3,md:4}},page:{top:{xs:2,md:3},bottom:{xs:3,md:4}}}},"./packages/react/src/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Heading,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,H5:()=>H5,H6:()=>H6,x:()=>headingFontSizeMap});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const headingFontSizeMap={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},Heading=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Heading(_ref,ref){let{as:ComponentTag,type="h2",color="text",fontSize:__fontSize,fontFamily="body",fontWeight="bold",lineHeight="heading"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);const Tag=ComponentTag??type,fontSize=__fontSize??headingFontSizeMap[type];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,_objectSpread({as:Tag,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))})),H1=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h1",ref,type:"h1"},props)))),H2=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h2",ref,type:"h2"},props)))),H3=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h3",ref,type:"h3"},props)))),H4=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h4",ref,type:"h4"},props)))),H5=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h5",ref,type:"h5"},props)))),H6=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h6",ref,type:"h6"},props))))},"./packages/react/src/heading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H1,H2:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H2,H3:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H3,Heading:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.D,x:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.x});var _Heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/heading/Heading.tsx")},"./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>HeroCategoryBanner});var _HeroCategoryBannerContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerContent.tsx"),_HeroCategoryBannerMobileImage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerMobileImage.tsx"),_HeroCategoryBannerContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerContainer.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroCategoryBanner=({children,image,background="bodyAlt"})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_HeroCategoryBannerContainer__WEBPACK_IMPORTED_MODULE_2__.E,{background,children:[image?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_HeroCategoryBannerMobileImage__WEBPACK_IMPORTED_MODULE_1__._,{children:image}):null,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_HeroCategoryBannerContent__WEBPACK_IMPORTED_MODULE_0__.M,{background,image,children})]})},"./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>HeroCategoryBannerContainer});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"vabva8",styles:"position:relative;overflow:hidden"};const HeroCategoryBannerContainer=({children,background})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as:"section",background,css:_ref,children})},"./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>HeroCategoryBannerContent});var _emotion_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/flex/index.ts"),_stack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/stack/index.ts"),_content__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/content/index.ts"),_HeroCategoryBannerImage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerImage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroCategoryBannerContent=({children,image,background})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_content__WEBPACK_IMPORTED_MODULE_3__.U,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_stack__WEBPACK_IMPORTED_MODULE_2__.Stack,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({zIndex:_core__WEBPACK_IMPORTED_MODULE_0__.tokens.zIndex.elevated},"",""),gap:1.5,paddingBottom:{xs:3,md:4},paddingTop:{xs:2,md:4},width:["100%","100%",image?"60%":"100%"],children}),image?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_HeroCategoryBannerImage__WEBPACK_IMPORTED_MODULE_4__.A,{background,children:image}):null]})})},"./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HeroCategoryBannerImage});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/hero-banner/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroCategoryBannerImage=({children,background})=>{const backgroundVar=_utils__WEBPACK_IMPORTED_MODULE_2__.V[background];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({position:"absolute",top:0,right:0,bottom:0,"&::after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:`linear-gradient(90deg, ${_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette[backgroundVar]} 0px, rgba(255, 255, 255, 0.0) 360px)`},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),display:["none","none","block"],width:"40%",children})}},"./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerMobileImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>HeroCategoryBannerMobileImage});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"};const HeroCategoryBannerMobileImage=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{css:_ref,display:{xs:"block",md:"none"},children})},"./packages/react/src/hero-banner/HeroCategoryBanner/HeroCategoryBannerTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>HeroCategoryBannerSubtitle,r:()=>HeroCategoryBannerTitle});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/heading/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroCategoryBannerTitle=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_heading__WEBPACK_IMPORTED_MODULE_1__.Heading,{fontSize:"xxl",type:"h1",children}),HeroCategoryBannerSubtitle=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"p",fontSize:"md",maxWidth:_core__WEBPACK_IMPORTED_MODULE_0__.tokens.maxWidth.bodyText,children})},"./packages/react/src/hero-banner/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>backgroundMap});const backgroundMap={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"}},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({as,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);