"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[5193],{"./packages/react/src/combobox/ComboboxBase/ComboboxBase.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ComboboxBase});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),_popover=__webpack_require__("./packages/react/src/_popover/index.ts"),text_input=__webpack_require__("./packages/react/src/text-input/index.ts"),field=__webpack_require__("./packages/react/src/field/index.ts"),ComboboxRenderItemDefault=__webpack_require__("./packages/react/src/combobox/ComboboxRenderItemDefault.tsx"),utils=__webpack_require__("./packages/react/src/combobox/utils.ts"),ComboboxListLoading=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListLoading.tsx"),ComboboxListError=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListError.tsx"),ComboboxListEmptyResults=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListEmptyResults.tsx"),ComboboxButtons=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxButtons.tsx"),ComboboxListItem=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ComboboxSearchIcon({disabled}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.WI,{color:"muted",css:(0,emotion_react_browser_esm.AH)({position:"absolute",top:"50%",left:`calc(${(0,core.QY)(.75)} + ${core.tokens.borderWidth.lg}px)`,transform:"translateY(-50%)",pointerEvents:"none",opacity:disabled?.3:void 0},"",""),size:"md",weight:"regular"})}const _excluded=["label","hideOptionalLabel","required","hint","message","invalid","inputId","inputName","disabled","block","maxWidth","showDropdownTrigger","clearable","isAutocomplete","emptyResultsMessage","loading","networkError","combobox","inputItems","inputRef","onBlur","onFocus","renderItem"],_excluded2=["maxWidth"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ComboboxBase(_ref){let{label,hideOptionalLabel,required,hint,message,invalid,inputId,inputName,disabled,block=!1,maxWidth:maxWidthProp="xl",showDropdownTrigger=!0,clearable=!1,isAutocomplete,emptyResultsMessage="No options found.",loading,networkError,combobox,inputItems,inputRef:inputRefProp,onBlur,onFocus,renderItem}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const showClearButton=clearable&&combobox.selectedItem,hasButtons=showDropdownTrigger||showClearButton,hasBothButtons=showDropdownTrigger&&showClearButton,isIos=(0,utils.fr)();(0,utils.Dd)("ComboBox",maxWidthProp);const _textInputStyles$pack=_objectSpread(_objectSpread(_objectSpread({},(0,text_input.E)({block,maxWidth:maxWidthProp})),core.tm.truncate),{},{paddingRight:hasBothButtons?"5rem":"3rem"}),{maxWidth}=_textInputStyles$pack,inputStyles=(0,objectWithoutProperties.A)(_textInputStyles$pack,_excluded2),itemLabels=(0,react.useMemo)((()=>inputItems?.length?inputItems.map((item=>(0,ComboboxRenderItemDefault.a)(item.label))):[]),[inputItems]),popover=(0,_popover.f)({matchReferenceWidth:!0,maxHeight:295,minHeight:195,hiddenWithCSS:!0,isOpen:combobox.isOpen}),{id:labelId}=combobox.getLabelProps(),handleOnBlur=event=>{isIos&&!event.nativeEvent?.relatedTarget&&(event.nativeEvent.preventDownshiftDefault=!0),onBlur?.(event)};return(0,emotion_react_jsx_runtime_browser_esm.Y)(field.D0,{hideOptionalLabel,hint,id:inputId,invalid,label,labelId,maxWidth:maxWidthProp,message,required,children:a11yProps=>(0,emotion_react_jsx_runtime_browser_esm.FD)("div",_objectSpread(_objectSpread({},popover.getReferenceProps()),{},{css:(0,emotion_react_browser_esm.AH)(_objectSpread(_objectSpread({maxWidth,position:"relative"},ComboboxListItem.Q),(0,utils.yC)(combobox.inputValue)),"",""),children:[isAutocomplete&&(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxSearchIcon,{disabled}),(0,emotion_react_jsx_runtime_browser_esm.Y)("input",_objectSpread({css:(0,emotion_react_browser_esm.AH)(_objectSpread(_objectSpread({},inputStyles),{},{width:"100%"},isAutocomplete&&{paddingLeft:"3rem"}),"",""),disabled},combobox.getInputProps(_objectSpread(_objectSpread(_objectSpread({},a11yProps),{"aria-describedby":props["aria-describedby"]||a11yProps["aria-describedby"],"aria-invalid":props["aria-invalid"]||a11yProps["aria-invalid"]}),{},{ref:inputRefProp,type:"text",name:inputName,onBlur:handleOnBlur,onFocus})))),hasButtons&&(0,emotion_react_jsx_runtime_browser_esm.FD)(ComboboxButtons.do,{children:[showClearButton&&(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxButtons.Ff,{disabled,onClick:combobox.reset}),hasBothButtons&&(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxButtons.z8,{}),showDropdownTrigger&&(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxButtons.bl,_objectSpread({},combobox.getToggleButtonProps({isOpen:combobox.isOpen,disabled})))]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(_popover.A,_objectSpread(_objectSpread({as:"ul"},combobox.getMenuProps(popover.getPopoverProps())),{},{visibility:combobox.isOpen?"visible":"hidden",children:combobox.isOpen?(0,emotion_react_jsx_runtime_browser_esm.Y)(react.Fragment,{children:loading?(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxListLoading.w,{}):networkError?(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxListError.e,{}):(0,emotion_react_jsx_runtime_browser_esm.Y)(react.Fragment,{children:inputItems?.length?inputItems.map(((item,index)=>(0,emotion_react_jsx_runtime_browser_esm.Y)("li",_objectSpread(_objectSpread({"data-combobox-list-item":"interactive"},combobox.getItemProps({item,index})),{},{tabIndex:isIos?void 0:-1,children:renderItem?renderItem(_objectSpread(_objectSpread({},item),{},{label:itemLabels[index]})):(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxRenderItemDefault.M,{children:itemLabels[index]})}),`${item.value}-${index}`))):(0,emotion_react_jsx_runtime_browser_esm.Y)(ComboboxListEmptyResults.l,{message:emptyResultsMessage})})}):null}))]}))})}},"./packages/react/src/combobox/ComboboxBase/ComboboxButtons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ff:()=>ComboboxClearButton,bl:()=>ComboboxDropdownTrigger,do:()=>ComboboxButtonContainer,z8:()=>ComboboxButtonDivider});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/index.ts"),_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/box/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["isOpen"],_excluded2=["disabled","icon"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ComboboxButtonContainer({children}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_flex__WEBPACK_IMPORTED_MODULE_6__.Flex,{alignItems:"center",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.AH)({position:"absolute",top:"50%",right:`calc(${(0,_core__WEBPACK_IMPORTED_MODULE_4__.QY)(.5)} + ${_core__WEBPACK_IMPORTED_MODULE_4__.tokens.borderWidth.lg}px)`,transform:"translateY(-50%)"},"",""),gap:.25,children})}function ComboboxButtonDivider(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_box__WEBPACK_IMPORTED_MODULE_5__.Box,{"aria-hidden":!0,borderColor:"muted",borderLeft:!0,borderLeftWidth:"md",height:"1.5rem"})}const ComboboxClearButton=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ComboboxClearButton(props,ref){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(ComboboxIconButton,_objectSpread({"aria-label":"Clear input",icon:_icon__WEBPACK_IMPORTED_MODULE_2__.US,ref},props))})),ComboboxDropdownTrigger=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ComboboxDropdownTrigger(_ref,ref){let{isOpen}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_9__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(ComboboxIconButton,_objectSpread({"aria-label":"Toggle menu",icon:isOpen?_icon__WEBPACK_IMPORTED_MODULE_2__.Mt:_icon__WEBPACK_IMPORTED_MODULE_2__.D3,ref},props))})),ComboboxIconButton=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ComboboxIconButton(_ref2,ref){let{disabled,icon:Icon}=_ref2,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_9__.A)(_ref2,_excluded2);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_button__WEBPACK_IMPORTED_MODULE_3__.SC,_objectSpread(_objectSpread({css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.AH)(_objectSpread(_objectSpread({display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",color:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.foregroundAction},disabled&&{cursor:"not-allowed",opacity:.3}),{},{"&:hover":{color:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.foregroundText}},_box__WEBPACK_IMPORTED_MODULE_5__.T7),"",""),disabled,ref},props),{},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(Icon,{color:"inherit",size:"md"})}))}))},"./packages/react/src/combobox/ComboboxBase/ComboboxListEmptyResults.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>ComboboxListEmptyResults});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_ComboboxListItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ComboboxListEmptyResults({message}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_ComboboxListItem__WEBPACK_IMPORTED_MODULE_1__.L,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{children:message})})}},"./packages/react/src/combobox/ComboboxBase/ComboboxListError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ComboboxListError});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_ComboboxListItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"ozd7xs",styles:"flex-shrink:0"};function ComboboxListError(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_ComboboxListItem__WEBPACK_IMPORTED_MODULE_3__.L,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{alignItems:"center",gap:.5,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_icon__WEBPACK_IMPORTED_MODULE_1__.AlertFilledIcon,{color:"error",css:_ref}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{role:"alert",children:"Something went wrong."})]})})}},"./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ComboboxListItem,Q:()=>listItemStyles});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const hoverStyles={color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundText,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.backgroundShade,"> span":_core__WEBPACK_IMPORTED_MODULE_2__.tm.underline},FONT_SIZE_LINE_HEIGHT=(0,_core__WEBPACK_IMPORTED_MODULE_2__.qW)("sm","default"),listItemStyles={"[data-combobox-list-item]":{alignItems:"center",borderBottomStyle:"solid",borderBottomWidth:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.borderWidth.sm,borderColor:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.borderMuted,display:"flex",gap:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75),paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(1),paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75),'&[aria-selected="true"]':hoverStyles,"&:last-of-type":{borderBottom:"none"},'&[data-combobox-list-item="interactive"]':{cursor:"pointer",color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundAction,"&:hover":hoverStyles},'[data-combobox-render-item="beforeElement"]':{flexShrink:0},'[data-combobox-render-item="itemLabel"]':{alignItems:"stretch",display:"flex",flexDirection:"column"},'[data-combobox-render-item="secondaryText"]':_objectSpread({color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundMuted,fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT),'[data-combobox-render-item="tertiaryText"]':_objectSpread({color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundMuted,fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT),'[data-combobox-render-item="endElement"]':{flexShrink:0,marginLeft:"auto"},'[data-combobox-render-item="renderedLabel"]':_objectSpread({color:"inherit",fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT)}},ComboboxListItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ComboboxListItem(_ref,ref){let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const isIos=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.fr)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("li",_objectSpread(_objectSpread({"data-combobox-list-item":"static",ref,tabIndex:isIos?void 0:-1},props),{},{children}))}))},"./packages/react/src/combobox/ComboboxBase/ComboboxListLoading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>ComboboxListLoading});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_loading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/loading/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_ComboboxListItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ComboboxListLoading(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_ComboboxListItem__WEBPACK_IMPORTED_MODULE_3__.L,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{alignItems:"center",gap:1,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_loading__WEBPACK_IMPORTED_MODULE_1__.XC,{"aria-label":"Loading options",role:"alert",size:"sm"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{children:"Loading"})]})})}},"./packages/react/src/combobox/ComboboxRenderItemDefault.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ComboboxRenderItemDefault,a:()=>renderItemLabel});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ComboboxRenderItemDefault({children}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{"data-combobox-render-item":"itemLabel",children})}function renderItemLabel(itemLabel){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{"aria-label":itemLabel,"data-combobox-render-item":"renderedLabel",children:itemLabel.split("").map(((character,index)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{"data-char":character,children:character},index)))})}},"./packages/react/src/combobox/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dd:()=>validateMaxWidth,Yf:()=>useComboboxInputId,f2:()=>filterOptions,fr:()=>useIsIos,yC:()=>generateHighlightStyles});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts");function useComboboxInputId(idProp){const autoId=(0,_core__WEBPACK_IMPORTED_MODULE_1__.Bi)();return idProp||`combobox-input-${autoId}`}function validateMaxWidth(componentType,maxWidth){0}function filterOptions(options,inputValue="",selectedItems){const sanitizedInputValue=inputValue?.toLowerCase()||"";return options.filter((function filterOption(option){const hasMatch=option.value.toLowerCase().includes(sanitizedInputValue)||option.label.toLowerCase().includes(sanitizedInputValue);return void 0===selectedItems?hasMatch:hasMatch&&!selectedItems?.some((item=>item.label===option.label&&item.value===option.value))}))}function generateHighlightStyles(inputValue){const styles={};if(!inputValue)return styles;const characters=inputValue.toLowerCase().split("");return characters.forEach(((_,index)=>{const baseSelector=characters.slice(0,index+1).map((char=>`[data-char="${char}" i]`)).join(" + "),hasSelector=characters.slice(index+1).map((char=>`+ [data-char="${char}" i]`)).join(" ");styles[hasSelector?`${baseSelector}:has(${hasSelector})`:baseSelector]={fontWeight:"bold"}})),styles}function useIsIos(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>CSS.supports("-webkit-appearance","-apple-pay-button")&&CSS.supports("-webkit-overflow-scrolling","auto")),[])}},"./packages/react/src/text-input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>textInputStyles,k:()=>TextInput});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextInput(_ref,ref){let{label,hideOptionalLabel,required,hint,message,invalid,block,maxWidth="md",id,type="text"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const styles=textInputStyles({block,maxWidth});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_field__WEBPACK_IMPORTED_MODULE_2__.D0,{hideOptionalLabel,hint,id,invalid,label,maxWidth,message,required,children:a11yProps=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("input",_objectSpread(_objectSpread({css:styles,ref},a11yProps),{},{type},props))})})),textInputStyles=({block,maxWidth,multiline})=>_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(1),margin:0,background:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundBody,borderWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderWidth.lg,borderStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.border,borderRadius:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderRadius,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.font.body},_core__WEBPACK_IMPORTED_MODULE_3__.tm.input.md),maxWidth&&{maxWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.maxWidth.field[maxWidth]}),block&&{maxWidth:"none",display:"block",width:"100%"}),multiline&&{paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(.5),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(.5),height:"auto",minHeight:"6rem"}),{},{'&[aria-invalid="true"]':{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemError},"&:disabled":{cursor:"not-allowed",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.borderMuted,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundMuted},"&:focus":_core__WEBPACK_IMPORTED_MODULE_3__.tm.outline})},"./packages/react/src/text-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.E,TextInput:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.k});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-input/TextInput.tsx")}}]);