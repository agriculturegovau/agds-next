"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9131],{"./packages/react/src/textarea/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Block:()=>Block,Disabled:()=>Disabled,HideOptionalLabel:()=>HideOptionalLabel,Hint:()=>Hint,Invalid:()=>Invalid,MaxWidths:()=>MaxWidths,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_stack__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/stack/index.ts"),_Textarea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/textarea/Textarea.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/Textarea",component:_Textarea__WEBPACK_IMPORTED_MODULE_2__.T,args:{label:"Example"}},Basic={},Required={args:{required:!0}},HideOptionalLabel={args:{hideOptionalLabel:!0}},Disabled={args:{disabled:!0,value:"Disabled value"}},Invalid={args:{message:"The message you have entered is invalid",value:"1e039ur4urf",invalid:!0}},Hint={args:{hint:"We will only use this to respond to your question"}},Block={args:{block:!0}},MaxWidths={args:{},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_stack__WEBPACK_IMPORTED_MODULE_1__.Stack,{background:"body",palette:"light",gap:1,children:["md","lg","xl"].map((size=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_Textarea__WEBPACK_IMPORTED_MODULE_2__.T,_objectSpread(_objectSpread({},args),{},{label:size,maxWidth:size}),size)))})},__namedExportsOrder=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Hint","Block","MaxWidths"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{}",...Basic.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},HideOptionalLabel.parameters={...HideOptionalLabel.parameters,docs:{...HideOptionalLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    hideOptionalLabel: true\n  }\n}",...HideOptionalLabel.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    value: 'Disabled value'\n  }\n}",...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: 'The message you have entered is invalid',\n    value: '1e039ur4urf',\n    invalid: true\n  }\n}",...Invalid.parameters?.docs?.source}}},Hint.parameters={...Hint.parameters,docs:{...Hint.parameters?.docs,source:{originalSource:"{\n  args: {\n    hint: 'We will only use this to respond to your question'\n  }\n}",...Hint.parameters?.docs?.source}}},Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:"{\n  args: {\n    block: true\n  }\n}",...Block.parameters?.docs?.source}}},MaxWidths.parameters={...MaxWidths.parameters,docs:{...MaxWidths.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: args => <Stack background=\"body\" palette=\"light\" gap={1}>\n            {(['md', 'lg', 'xl'] as const).map(size => <Textarea key={size} {...args} label={size} maxWidth={size} />)}\n        </Stack>\n}",...MaxWidths.parameters?.docs?.source}}}},"./packages/react/src/text-input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>textInputStyles,k:()=>TextInput});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextInput(_ref,ref){let{label,hideOptionalLabel,required,hint,message,invalid,block,maxWidth="md",id,type="text"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const styles=textInputStyles({block,maxWidth});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_field__WEBPACK_IMPORTED_MODULE_2__.D0,{label,hideOptionalLabel,required,hint,maxWidth,message,invalid,id,children:a11yProps=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("input",_objectSpread(_objectSpread({ref,css:styles},a11yProps),{},{type},props))})})),textInputStyles=({block,maxWidth,multiline})=>_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),margin:0,background:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundBody,borderWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderWidth.lg,borderStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.border,borderRadius:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderRadius,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.font.body},_core__WEBPACK_IMPORTED_MODULE_3__.tm.input.md),maxWidth&&{maxWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.maxWidth.field[maxWidth]}),block&&{maxWidth:"none",display:"block",width:"100%"}),multiline&&{paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),height:"auto",minHeight:"6rem"}),{},{'&[aria-invalid="true"]':{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemError},"&:disabled":{cursor:"not-allowed",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.borderMuted,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundMuted},"&:focus":_core__WEBPACK_IMPORTED_MODULE_3__.tm.outline})},"./packages/react/src/text-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.E,TextInput:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.k});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-input/TextInput.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref,as,color,fontFamily,fontSize,fontWeight,lineHeight},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")},"./packages/react/src/textarea/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Textarea});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_text_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/text-input/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Textarea=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function Textarea(_ref,ref){let{label,hideOptionalLabel,required,hint,message,invalid,block,maxWidth="md",id}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const styles=(0,_text_input__WEBPACK_IMPORTED_MODULE_3__.E)({block,maxWidth,multiline:!0});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_field__WEBPACK_IMPORTED_MODULE_2__.D0,{label,hideOptionalLabel,required,hint,maxWidth,message,invalid,id,children:a11yProps=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("textarea",_objectSpread(_objectSpread({ref,css:styles},a11yProps),props))})}))}}]);