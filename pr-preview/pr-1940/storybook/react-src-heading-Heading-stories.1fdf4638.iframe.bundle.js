"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[5901],{"./packages/react/src/heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _stack__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/stack/index.ts"),_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/heading/Heading.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"content/Heading",component:_Heading__WEBPACK_IMPORTED_MODULE_1__.D},Basic={args:{type:"h1",as:"h1",children:"Heading Example"}},Sizes=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.FD)(_stack__WEBPACK_IMPORTED_MODULE_0__.Stack,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H1,{children:"Heading 1"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H2,{children:"Heading 2"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H3,{children:"Heading 3"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H4,{children:"Heading 4"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H5,{children:"Heading 5"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_Heading__WEBPACK_IMPORTED_MODULE_1__.H6,{children:"Heading 6"})]}),__namedExportsOrder=["Basic","Sizes"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'h1',\n    as: 'h1',\n    children: 'Heading Example'\n  }\n}",...Basic.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:"() => <Stack>\n        <H1>Heading 1</H1>\n        <H2>Heading 2</H2>\n        <H3>Heading 3</H3>\n        <H4>Heading 4</H4>\n        <H5>Heading 5</H5>\n        <H6>Heading 6</H6>\n    </Stack>",...Sizes.parameters?.docs?.source}}}},"./packages/react/src/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Heading,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,H5:()=>H5,H6:()=>H6,x:()=>headingFontSizeMap});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const headingFontSizeMap={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},Heading=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Heading(_ref,ref){let{as:ComponentTag,type="h2",color="text",fontSize:__fontSize,fontFamily="body",fontWeight="bold",lineHeight="heading"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);const Tag=ComponentTag??type,fontSize=__fontSize??headingFontSizeMap[type];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,_objectSpread({as:Tag,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))})),H1=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h1",ref,type:"h1"},props)))),H2=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h2",ref,type:"h2"},props)))),H3=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h3",ref,type:"h3"},props)))),H4=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h4",ref,type:"h4"},props)))),H5=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h5",ref,type:"h5"},props)))),H6=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h6",ref,type:"h6"},props))))}}]);