"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[78],{"./packages/react/src/search-input/SearchInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Block:()=>Block,Controlled:()=>Controlled,Disabled:()=>Disabled,HideOptionalLabel:()=>HideOptionalLabel,Hint:()=>Hint,Invalid:()=>Invalid,MaxWidths:()=>MaxWidths,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_stack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/stack/index.ts"),_SearchInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/search-input/SearchInput.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/SearchInput",component:_SearchInput__WEBPACK_IMPORTED_MODULE_3__.D,args:{label:"Search"}},Basic={args:{}},Required={args:{required:!0}},HideOptionalLabel={args:{hideOptionalLabel:!0}},Disabled={args:{disabled:!0,value:"Disabled value"}},Invalid={args:{required:!0,message:"A search term is required to see results",invalid:!0}},Hint={args:{hint:"Start typing to see results"}},Block={args:{block:!0}},Controlled={args:{},render:function Render(args){const{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_SearchInput__WEBPACK_IMPORTED_MODULE_3__.D,_objectSpread(_objectSpread({},args),{},{value,onChange:setValue}))}},MaxWidths={args:{},render:function Render(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_stack__WEBPACK_IMPORTED_MODULE_2__.Stack,{gap:1,children:["md","lg","xl"].map((size=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_SearchInput__WEBPACK_IMPORTED_MODULE_3__.D,_objectSpread(_objectSpread({},args),{},{label:`SearchInput max width ${size}`,maxWidth:size}),size)))})}},__namedExportsOrder=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Hint","Block","Controlled","MaxWidths"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Basic.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},HideOptionalLabel.parameters={...HideOptionalLabel.parameters,docs:{...HideOptionalLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    hideOptionalLabel: true\n  }\n}",...HideOptionalLabel.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    value: 'Disabled value'\n  }\n}",...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    required: true,\n    message: 'A search term is required to see results',\n    invalid: true\n  }\n}",...Invalid.parameters?.docs?.source}}},Hint.parameters={...Hint.parameters,docs:{...Hint.parameters?.docs,source:{originalSource:"{\n  args: {\n    hint: 'Start typing to see results'\n  }\n}",...Hint.parameters?.docs?.source}}},Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:"{\n  args: {\n    block: true\n  }\n}",...Block.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: function Render(args) {\n    const [value, setValue] = useState('');\n    return <SearchInput {...args} value={value} onChange={setValue} />;\n  }\n}",...Controlled.parameters?.docs?.source}}},MaxWidths.parameters={...MaxWidths.parameters,docs:{...MaxWidths.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: function Render(args) {\n    return <Stack gap={1}>\n                {(['md', 'lg', 'xl'] as const).map(size => <SearchInput key={size} {...args} label={`SearchInput max width ${size}`} maxWidth={size} />)}\n            </Stack>;\n  }\n}",...MaxWidths.parameters?.docs?.source}}}},"./packages/react/src/search-input/SearchInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>SearchInput});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),field=__webpack_require__("./packages/react/src/field/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),text_input=__webpack_require__("./packages/react/src/text-input/index.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function SearchInputContainer({children,maxWidth}){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:(0,emotion_react_browser_esm.AH)({position:"relative",maxWidth},"",""),children})}var icon=__webpack_require__("./packages/react/src/icon/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts");function SearchInputClearButton({disabled,onClick}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{role:"button",alignItems:"center",justifyContent:"center","aria-label":"Clear search",width:"2rem",height:"2rem",onClick,css:(0,emotion_react_browser_esm.AH)({position:"absolute",top:"50%",right:`calc(${(0,core.mapSpacing)(.5)} + ${core.tokens.borderWidth.lg}px)`,transform:"translateY(-50%)",opacity:disabled?.3:void 0,cursor:"pointer",color:core.boxPalette.foregroundAction,"&:hover":{color:core.boxPalette.foregroundText}},"",""),children:(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.US,{color:"inherit"})})}function SearchInputIcon({disabled}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.WI,{size:"md",weight:"regular",color:"muted",css:(0,emotion_react_browser_esm.AH)({position:"absolute",top:"50%",left:`calc(${(0,core.mapSpacing)(.75)} + ${core.tokens.borderWidth.lg}px)`,transform:"translateY(-50%)",pointerEvents:"none",opacity:disabled?.3:void 0},"","")})}const _excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","disabled","value","onChange","onClear"],_excluded2=["maxWidth"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const SearchInput=(0,react.forwardRef)((function SearchInput(_ref,forwardedRef){let{label,hideOptionalLabel,required,hint,message,invalid,block,maxWidth:maxWidthProp="md",id,disabled,value:valueProp,onChange:onChangeProp,onClear}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const internalRef=(0,react.useRef)(null),{0:internalValue,1:setInternalValue}=(0,react.useState)(valueProp||""),value="string"==typeof valueProp?valueProp:internalValue,onChange=value=>{onChangeProp?.(value),setInternalValue(value)},clearInput=()=>{value&&(onChange(""),onClear?.(),internalRef.current?.focus())},onKeyDown=e=>{"Escape"===e.code&&clearInput()},showClearButton=Boolean(value),[maxWidth,styles]=function searchInputStyles({block,maxWidth:maxWidthProp,showClearButton}){const _textInputStyles=(0,text_input.E)({block,maxWidth:maxWidthProp}),{maxWidth}=_textInputStyles,baseStyles=(0,objectWithoutProperties.A)(_textInputStyles,_excluded2);return[maxWidth,_objectSpread(_objectSpread(_objectSpread({},baseStyles),{},{width:"100%",maxWidth:void 0,paddingLeft:"3rem"},showClearButton&&{paddingRight:"3rem"}),{},{"&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{display:"none"}})]}({block,maxWidth:maxWidthProp,showClearButton});return(0,emotion_react_jsx_runtime_browser_esm.Y)(field.D0,{label,hideOptionalLabel,required,hint,maxWidth:maxWidthProp,message,invalid,id,children:a11yProps=>(0,emotion_react_jsx_runtime_browser_esm.FD)(SearchInputContainer,{maxWidth,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchInputIcon,{disabled}),(0,emotion_react_jsx_runtime_browser_esm.Y)("input",_objectSpread(_objectSpread({ref:(0,core.Px)([internalRef,forwardedRef]),type:"search",disabled,value,onChange:e=>onChange(e.target.value),onKeyDown,css:styles,autoComplete:"off"},a11yProps),props)),showClearButton?(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchInputClearButton,{disabled,onClick:clearInput}):null]})})}))},"./packages/react/src/text-input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>textInputStyles,k:()=>TextInput});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextInput(_ref,ref){let{label,hideOptionalLabel,required,hint,message,invalid,block,maxWidth="md",id,type="text"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const styles=textInputStyles({block,maxWidth});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_field__WEBPACK_IMPORTED_MODULE_2__.D0,{label,hideOptionalLabel,required,hint,maxWidth,message,invalid,id,children:a11yProps=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("input",_objectSpread(_objectSpread({ref,css:styles},a11yProps),{},{type},props))})})),textInputStyles=({block,maxWidth,multiline})=>_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),margin:0,background:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundBody,borderWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderWidth.lg,borderStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.border,borderRadius:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderRadius,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.font.body},_core__WEBPACK_IMPORTED_MODULE_3__.tm.input.md),maxWidth&&{maxWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.maxWidth.field[maxWidth]}),block&&{maxWidth:"none",display:"block",width:"100%"}),multiline&&{paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),height:"auto",minHeight:"6rem"}),{},{'&[aria-invalid="true"]':{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemError},"&:disabled":{cursor:"not-allowed",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.borderMuted,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundMuted},"&:focus":_core__WEBPACK_IMPORTED_MODULE_3__.tm.outline})},"./packages/react/src/text-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.E,TextInput:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.k});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-input/TextInput.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref,as,color,fontFamily,fontSize,fontWeight,lineHeight},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);