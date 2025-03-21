"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9975],{"./packages/react/src/divider-with-text/DividerWithText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,TextAlign:()=>TextAlign,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_DividerWithText__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/divider-with-text/DividerWithText.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Content/DividerWithText",component:_DividerWithText__WEBPACK_IMPORTED_MODULE_1__.v,args:{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{children:"Divider label"})},argTypes:{textAlign:{options:["center","left"],control:"select"}}},Basic={},TextAlign={args:{textAlign:"left"}},__namedExportsOrder=["Basic","TextAlign"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{}",...Basic.parameters?.docs?.source}}},TextAlign.parameters={...TextAlign.parameters,docs:{...TextAlign.parameters?.docs,source:{originalSource:"{\n  args: {\n    textAlign: 'left'\n  }\n}",...TextAlign.parameters?.docs?.source}}}},"./packages/react/src/divider-with-text/DividerWithText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>DividerWithText});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_divider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/divider/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const minimumDividerWidth=(0,_core__WEBPACK_IMPORTED_MODULE_1__.QY)(1.5),defaultDividerWidth=`minmax(${minimumDividerWidth}, 1fr)`,maxTextWidth="40rem";function DividerWithText(props){const{"aria-hidden":ariaHidden=!0,children,textAlign="center"}=props,leftDividerWidth="left"===textAlign?minimumDividerWidth:defaultDividerWidth;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({alignItems:"center",display:"grid",gap:(0,_core__WEBPACK_IMPORTED_MODULE_1__.QY)(1),gridTemplateColumns:`${leftDividerWidth} fit-content(${maxTextWidth}) ${defaultDividerWidth}`},"",""),children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_divider__WEBPACK_IMPORTED_MODULE_2__.Divider,{"aria-hidden":ariaHidden}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({"&& > * ":{color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundMuted,textAlign}},"",""),children}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_divider__WEBPACK_IMPORTED_MODULE_2__.Divider,{})]})}},"./packages/react/src/divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Divider({"aria-hidden":ariaHidden=!0}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)("hr",{"aria-hidden":ariaHidden,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:_core__WEBPACK_IMPORTED_MODULE_0__.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_0__.boxPalette.borderMuted,width:"100%"},"","")})}},"./packages/react/src/divider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Divider:()=>_Divider__WEBPACK_IMPORTED_MODULE_0__.c});var _Divider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/divider/Divider.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({as,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);