"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3142],{"./packages/react/src/combobox/ComboboxListEmptyResults.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_popover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/_popover/index.ts"),_ComboboxBase_ComboboxListItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),_ComboboxBase_ComboboxListEmptyResults__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListEmptyResults.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ComboboxListEmptyResultsTemplate(props){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_popover__WEBPACK_IMPORTED_MODULE_1__.A,{as:"ul",css:_ComboboxBase_ComboboxListItem__WEBPACK_IMPORTED_MODULE_2__.Q,style:{},children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_ComboboxBase_ComboboxListEmptyResults__WEBPACK_IMPORTED_MODULE_3__.l,_objectSpread({},props))})}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/Combobox/Primitives/ComboboxListEmptyResults",component:_ComboboxBase_ComboboxListEmptyResults__WEBPACK_IMPORTED_MODULE_3__.l,render:props=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(ComboboxListEmptyResultsTemplate,_objectSpread({},props))},Basic={args:{message:"No options found."}},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: 'No options found.'\n  }\n}",...Basic.parameters?.docs?.source}}}},"./packages/react/src/_popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Popover,f:()=>usePopover});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","visibility"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Popover=(0,core.FX)((function Popover(_ref,ref){let{children,visibility}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,_objectSpread(_objectSpread({ref,background:"body",border:!0,borderColor:"muted",rounded:!0,css:(0,emotion_react_browser_esm.AH)({boxShadow:core.tokens.shadow.lg,overflow:"auto",position:"relative",visibility,zIndex:core.tokens.zIndex.popover},"","")},props),{},{children}))})),DEFAULT_OFFSET=8,MIN_SIDE_GUTTER_WIDTH=1;function usePopover(options){const{hiddenWithCSS=!1,isOpen,matchReferenceWidth=!1,minHeight:minHeightOption,maxHeight:maxHeightOption,offset:offsetOption=DEFAULT_OFFSET,placement="bottom-start"}=options||{},floating=(0,floating_ui_react_dom.we)(_objectSpread({placement,middleware:[(0,floating_ui_core.cY)(offsetOption),(0,floating_ui_dom.BN)({padding:MIN_SIDE_GUTTER_WIDTH}),(0,floating_ui_dom.UU)({padding:DEFAULT_OFFSET}),(0,floating_ui_dom.Ej)({padding:DEFAULT_OFFSET,apply({availableHeight:_availableHeight,elements,rects}){const maxHeight=maxHeightOption&&_availableHeight>maxHeightOption?maxHeightOption:_availableHeight,availableHeight=minHeightOption?Math.max(minHeightOption,maxHeight):maxHeight;Object.assign(elements.floating.style,_objectSpread({maxHeight:`${availableHeight}px`},matchReferenceWidth?{width:`${rects.reference.width}px`}:{maxWidth:`calc(100vw - ${2*MIN_SIDE_GUTTER_WIDTH}px)`}))}})]},!hiddenWithCSS&&{whileElementsMounted:(referenceEl,floatingEl,update)=>(0,floating_ui_dom.ll)(referenceEl,floatingEl,update,{elementResize:"function"==typeof ResizeObserver})}));return(0,react.useEffect)((()=>{if(!isOpen||!hiddenWithCSS)return;if(!floating.elements.floating||!floating.elements.reference)return;return(0,floating_ui_dom.ll)(floating.elements.reference,floating.elements.floating,floating.update,{elementResize:"function"==typeof ResizeObserver})}),[hiddenWithCSS,isOpen,floating.elements.floating,floating.elements.reference,floating.update]),{getReferenceProps:function getReferenceProps(){return{ref:floating.refs.setReference}},getPopoverProps:function getPopoverProps(){return{ref:floating.refs.setFloating,style:floating.floatingStyles}},referenceRef:floating.refs.reference,popoverRef:floating.refs.floating}}},"./packages/react/src/combobox/ComboboxBase/ComboboxListEmptyResults.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>ComboboxListEmptyResults});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_ComboboxListItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ComboboxListEmptyResults({message}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_ComboboxListItem__WEBPACK_IMPORTED_MODULE_1__.L,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{children:message})})}},"./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ComboboxListItem,Q:()=>listItemStyles});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const hoverStyles={color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundText,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.backgroundShade,"> span":_core__WEBPACK_IMPORTED_MODULE_2__.tm.underline},FONT_SIZE_LINE_HEIGHT=(0,_core__WEBPACK_IMPORTED_MODULE_2__.qW)("sm","default"),listItemStyles={"[data-combobox-list-item]":{alignItems:"center",borderBottomStyle:"solid",borderBottomWidth:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.borderWidth.sm,borderColor:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.borderMuted,display:"flex",gap:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75),paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(1),paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75),'&[aria-selected="true"]':hoverStyles,"&:last-of-type":{borderBottom:"none"},'&[data-combobox-list-item="interactive"]':{cursor:"pointer",color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundAction,"&:hover":hoverStyles},'[data-combobox-render-item="beforeElement"]':{flexShrink:0},'[data-combobox-render-item="itemLabel"]':{alignItems:"stretch",display:"flex",flexDirection:"column"},'[data-combobox-render-item="secondaryText"]':_objectSpread({color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundMuted,fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT),'[data-combobox-render-item="tertiaryText"]':_objectSpread({color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundMuted,fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT),'[data-combobox-render-item="endElement"]':{flexShrink:0,marginLeft:"auto"},'[data-combobox-render-item="renderedLabel"]':_objectSpread({color:"inherit",fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT)}},ComboboxListItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ComboboxListItem(_ref,ref){let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const isIos=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.fr)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("li",_objectSpread(_objectSpread({"data-combobox-list-item":"static",ref,tabIndex:isIos?void 0:-1},props),{},{children}))}))},"./packages/react/src/combobox/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dd:()=>validateMaxWidth,Yf:()=>useComboboxInputId,f2:()=>filterOptions,fr:()=>useIsIos,yC:()=>generateHighlightStyles});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts");function useComboboxInputId(idProp){const autoId=(0,_core__WEBPACK_IMPORTED_MODULE_1__.Bi)();return idProp||`combobox-input-${autoId}`}function validateMaxWidth(componentType,maxWidth){0}function filterOptions(options,inputValue="",selectedItems){const sanitizedInputValue=inputValue?.toLowerCase()||"";return options.filter((function filterOption(option){const hasMatch=option.value.toLowerCase().includes(sanitizedInputValue)||option.label.toLowerCase().includes(sanitizedInputValue);return void 0===selectedItems?hasMatch:hasMatch&&!selectedItems?.some((item=>item.label===option.label&&item.value===option.value))}))}function generateHighlightStyles(inputValue){const styles={};if(!inputValue)return styles;const characters=inputValue.toLowerCase().split("");return characters.forEach(((_,index)=>{const baseSelector=characters.slice(0,index+1).map((char=>`[data-char="${char}" i]`)).join(" + "),hasSelector=characters.slice(index+1).map((char=>`+ [data-char="${char}" i]`)).join(" ");styles[hasSelector?`${baseSelector}:has(${hasSelector})`:baseSelector]={fontWeight:"bold"}})),styles}function useIsIos(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>CSS.supports("-webkit-appearance","-apple-pay-button")&&CSS.supports("-webkit-overflow-scrolling","auto")),[])}},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref,as,color,fontFamily,fontSize,fontWeight,lineHeight},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);