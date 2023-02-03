"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[4260],{"./packages/react/src/combobox/Combobox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Combobox});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),downshift__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),_ComboboxBase_ComboboxBase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxBase.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Combobox(props){var inputId=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.J5)(props.id),_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.options),inputItems=_useState[0],setInputItems=_useState[1],downshift=(0,downshift__WEBPACK_IMPORTED_MODULE_4__.Kb)({selectedItem:props.value,inputId,items:null!=inputItems?inputItems:[],itemToString:function itemToString(item){var _item$label;return null!==(_item$label=null==item?void 0:item.label)&&void 0!==_item$label?_item$label:""},onSelectedItemChange:function onSelectedItemChange(_ref){var _props$onChange,_ref$selectedItem=_ref.selectedItem,selectedItem=void 0===_ref$selectedItem?null:_ref$selectedItem;null===(_props$onChange=props.onChange)||void 0===_props$onChange||_props$onChange.call(props,selectedItem)},onInputValueChange:function onInputValueChange(_ref2){var _inputValue$toLowerCa,_inputValue,inputValue=_ref2.inputValue;inputValue=null!==(_inputValue$toLowerCa=null===(_inputValue=inputValue)||void 0===_inputValue?void 0:_inputValue.toLowerCase())&&void 0!==_inputValue$toLowerCa?_inputValue$toLowerCa:"",setInputItems((0,_utils__WEBPACK_IMPORTED_MODULE_3__.MN)(props.options,inputValue))},onIsOpenChange:function onIsOpenChange(_ref3){_ref3.isOpen&&setInputItems((0,_utils__WEBPACK_IMPORTED_MODULE_3__.MN)(props.options,""))},stateReducer:function stateReducer(state,actionAndChanges){var _state$selectedItem$l,_state$selectedItem,actionAndChangesType=actionAndChanges.type,changes=actionAndChanges.changes;return actionAndChangesType===downshift__WEBPACK_IMPORTED_MODULE_4__.Kb.stateChangeTypes.InputBlur?_objectSpread(_objectSpread({},changes),{},{inputValue:null!==(_state$selectedItem$l=null===(_state$selectedItem=state.selectedItem)||void 0===_state$selectedItem?void 0:_state$selectedItem.label)&&void 0!==_state$selectedItem$l?_state$selectedItem$l:""}):changes}});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_ComboboxBase_ComboboxBase__WEBPACK_IMPORTED_MODULE_2__.G,_objectSpread({downshift,inputItems,inputId},props))}try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{emptyResultsMessage:{defaultValue:null,description:"Message to display when no options match the users search term.",name:"emptyResultsMessage",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},disabled:{defaultValue:null,description:"If true, the field will not be interactive.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"A string specifying a name for the input control.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!1,type:{name:"((value: Option | null) => void)"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!1,type:{name:"DefaultComboboxOption | null"}},renderItem:{defaultValue:null,description:"Used to override the default item rendering.",name:"renderItem",required:!1,type:{name:"((item: Option, inputValue: string) => ReactNode)"}},options:{defaultValue:null,description:"The list of options to show in the dropdown.",name:"options",required:!0,type:{name:"Option[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/Combobox.tsx#Combobox"]={docgenInfo:Combobox.__docgenInfo,name:"Combobox",path:"packages/react/src/combobox/Combobox.tsx#Combobox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/combobox/ComboboxAsync.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>ComboboxAsync});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/use-debounce/dist/index.module.js"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),ComboboxBase=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxBase.tsx"),utils=__webpack_require__("./packages/react/src/combobox/utils.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["loadOptions","showDropdownTrigger"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function ComboboxAsync(_ref){var _state$inputItems,loadOptionsProp=_ref.loadOptions,_ref$showDropdownTrig=_ref.showDropdownTrigger,showDropdownTrigger=void 0===_ref$showDropdownTrig||_ref$showDropdownTrig,props=(0,objectWithoutProperties.Z)(_ref,_excluded),inputId=(0,utils.J5)(props.id),_useState=(0,react.useState)({inputItems:void 0,loading:!1,networkError:!1}),state=_useState[0],setState=_useState[1],isInputDirty=(0,react.useRef)(!1),downshift=(0,downshift_esm.Kb)({selectedItem:props.value,inputId,items:null!==(_state$inputItems=state.inputItems)&&void 0!==_state$inputItems?_state$inputItems:[],itemToString:function itemToString(item){var _item$label;return null!==(_item$label=null==item?void 0:item.label)&&void 0!==_item$label?_item$label:""},onSelectedItemChange:function onSelectedItemChange(_ref2){var _props$onChange,_ref2$selectedItem=_ref2.selectedItem,selectedItem=void 0===_ref2$selectedItem?null:_ref2$selectedItem;null===(_props$onChange=props.onChange)||void 0===_props$onChange||_props$onChange.call(props,selectedItem)},onInputValueChange:function onInputValueChange(){isInputDirty.current=!0},stateReducer:function stateReducer(state,actionAndChanges){var _state$selectedItem$l,_state$selectedItem,actionAndChangesType=actionAndChanges.type,changes=actionAndChanges.changes;return actionAndChangesType===downshift_esm.Kb.stateChangeTypes.InputBlur?_objectSpread(_objectSpread({},changes),{},{inputValue:null!==(_state$selectedItem$l=null===(_state$selectedItem=state.selectedItem)||void 0===_state$selectedItem?void 0:_state$selectedItem.label)&&void 0!==_state$selectedItem$l?_state$selectedItem$l:""}):changes}}),_useDebounce=(0,index_module.Nr)(downshift.inputValue,300),debouncedInputValue=(0,slicedToArray.Z)(_useDebounce,1)[0],shouldLoadOptions=(0,react.useMemo)((function(){var _downshift$selectedIt;if(!debouncedInputValue&&downshift.inputValue||showDropdownTrigger&&downshift.isOpen&&!downshift.selectedItem)return!0;var selectedItemLabel=null===(_downshift$selectedIt=downshift.selectedItem)||void 0===_downshift$selectedIt?void 0:_downshift$selectedIt.label;return!(state.loading||state.networkError||!downshift.isOpen||selectedItemLabel&&selectedItemLabel===debouncedInputValue||!showDropdownTrigger&&!isInputDirty.current)}),[debouncedInputValue,downshift.inputValue,downshift.isOpen,downshift.selectedItem,showDropdownTrigger,state.loading,state.networkError]),cache=(0,react.useRef)({});return(0,react.useEffect)((function(){function _loadOptions(){return _loadOptions=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(shouldLoadOptions){var _debouncedInputValue$,inputValue,cachedInputItems,inputItems,filteredInputItems;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(shouldLoadOptions){_context.next=2;break}return _context.abrupt("return");case 2:if(inputValue=null!==(_debouncedInputValue$=null==debouncedInputValue?void 0:debouncedInputValue.toLowerCase())&&void 0!==_debouncedInputValue$?_debouncedInputValue$:"",!(cachedInputItems=cache.current[inputValue])){_context.next=7;break}return setState({inputItems:cachedInputItems,loading:!1,networkError:!1}),_context.abrupt("return");case 7:return setState({inputItems:void 0,loading:!0,networkError:!1}),_context.prev=8,_context.next=11,loadOptionsProp(inputValue);case 11:inputItems=_context.sent,filteredInputItems=(0,utils.MN)(inputItems,inputValue),cache.current[inputValue]=filteredInputItems,setState({inputItems:filteredInputItems,loading:!1,networkError:!1}),_context.next=20;break;case 17:_context.prev=17,_context.t0=_context.catch(8),setState({inputItems:void 0,loading:!1,networkError:!0});case 20:case"end":return _context.stop()}}),_callee,null,[[8,17]])}))),_loadOptions.apply(this,arguments)}!function loadOptions(_x){return _loadOptions.apply(this,arguments)}(shouldLoadOptions)}),[shouldLoadOptions,debouncedInputValue,loadOptionsProp]),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxBase.G,_objectSpread({downshift,inputId,loading:state.loading,networkError:state.networkError,inputItems:state.inputItems,showDropdownTrigger},props))}try{ComboboxAsync.displayName="ComboboxAsync",ComboboxAsync.__docgenInfo={description:"",displayName:"ComboboxAsync",props:{label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},disabled:{defaultValue:null,description:"If true, the field will not be interactive.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"A string specifying a name for the input control.",name:"name",required:!1,type:{name:"string"}},showDropdownTrigger:{defaultValue:{value:"true"},description:"If true, the dropdown trigger will be rendered.",name:"showDropdownTrigger",required:!1,type:{name:"boolean"}},clearable:{defaultValue:null,description:"If true, the selected item can be cleared. Only available when `showDropdownTrigger` is false.",name:"clearable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!1,type:{name:"((value: Option | null) => void)"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!1,type:{name:"DefaultComboboxOption | null"}},renderItem:{defaultValue:null,description:"Used to override the default item rendering.",name:"renderItem",required:!1,type:{name:"((item: Option, inputValue: string) => ReactNode)"}},emptyResultsMessage:{defaultValue:null,description:"Message to display when no options match the users search term.",name:"emptyResultsMessage",required:!1,type:{name:"string"}},loadOptions:{defaultValue:null,description:"Function to be used when options need to be loaded over the network.",name:"loadOptions",required:!0,type:{name:"(inputValue: string) => Promise<Option[]>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxAsync.tsx#ComboboxAsync"]={docgenInfo:ComboboxAsync.__docgenInfo,name:"ComboboxAsync",path:"packages/react/src/combobox/ComboboxAsync.tsx#ComboboxAsync"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/combobox/ComboboxBase/ComboboxBase.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ComboboxBase});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),text_input=__webpack_require__("./packages/react/src/text-input/index.ts"),field=__webpack_require__("./packages/react/src/field/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),utils=__webpack_require__("./packages/react/src/combobox/utils.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children","isOpen"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ComboboxList=(0,react.forwardRef)((function ComboboxList(_ref,ref){var children=_ref.children,isOpen=_ref.isOpen,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,_objectSpread(_objectSpread({ref,as:"ul",background:"body",border:!0,borderColor:"muted",rounded:!0},props),{},{css:(0,emotion_react_browser_esm.iv)({opacity:isOpen?1:0,position:"relative",overflowY:"scroll",maxHeight:295},"",""),children}))}));try{ComboboxList.displayName="ComboboxList",ComboboxList.__docgenInfo={description:"",displayName:"ComboboxList",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxBase/ComboboxList.tsx#ComboboxList"]={docgenInfo:ComboboxList.__docgenInfo,name:"ComboboxList",path:"packages/react/src/combobox/ComboboxBase/ComboboxList.tsx#ComboboxList"})}catch(__react_docgen_typescript_loader_error){}var ComboboxListItem_excluded=["children","isActiveItem","isInteractive"];function ComboboxListItem_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ComboboxListItem_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ComboboxListItem_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ComboboxListItem_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ComboboxListItem=(0,react.forwardRef)((function ComboboxListItem(_ref,ref){var children=_ref.children,isActiveItem=_ref.isActiveItem,_ref$isInteractive=_ref.isInteractive,isInteractive=void 0===_ref$isInteractive||_ref$isInteractive,props=(0,objectWithoutProperties.Z)(_ref,ComboboxListItem_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,ComboboxListItem_objectSpread(ComboboxListItem_objectSpread({ref,as:"li",background:isActiveItem?"shade":void 0,paddingX:1,paddingY:.75,borderBottom:!0,borderColor:"muted",css:(0,emotion_react_browser_esm.iv)({cursor:isInteractive?"pointer":void 0,"&:hover":{backgroundColor:isInteractive?core._X.backgroundShade:void 0},"&:last-of-type":{borderBottom:"none"}},"","")},props),{},{children}))}));try{ComboboxListItem.displayName="ComboboxListItem",ComboboxListItem.__docgenInfo={description:"",displayName:"ComboboxListItem",props:{isActiveItem:{defaultValue:null,description:"",name:"isActiveItem",required:!0,type:{name:"boolean"}},isInteractive:{defaultValue:{value:"true"},description:"",name:"isInteractive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx#ComboboxListItem"]={docgenInfo:ComboboxListItem.__docgenInfo,name:"ComboboxListItem",path:"packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx#ComboboxListItem"})}catch(__react_docgen_typescript_loader_error){}var loading=__webpack_require__("./packages/react/src/loading/index.ts");function ComboboxListLoading(){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListItem,{isActiveItem:!1,isInteractive:!1,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{gap:1,alignItems:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(loading.xg,{size:"sm","aria-label":"Loading"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{children:"Loading"})]})})}var icon=__webpack_require__("./packages/react/src/icon/index.ts");var _ref={name:"ozd7xs",styles:"flex-shrink:0"};function ComboboxListError(){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListItem,{isActiveItem:!1,isInteractive:!1,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{alignItems:"center",gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(icon.z$,{color:"error",css:_ref}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{children:"Something went wrong."})]})})}function ComboboxListEmptyResults(_ref){var message=_ref.message;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListItem,{isActiveItem:!1,isInteractive:!1,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{children:message})})}try{ComboboxListEmptyResults.displayName="ComboboxListEmptyResults",ComboboxListEmptyResults.__docgenInfo={description:"",displayName:"ComboboxListEmptyResults",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxBase/ComboboxListEmptyResults.tsx#ComboboxListEmptyResults"]={docgenInfo:ComboboxListEmptyResults.__docgenInfo,name:"ComboboxListEmptyResults",path:"packages/react/src/combobox/ComboboxBase/ComboboxListEmptyResults.tsx#ComboboxListEmptyResults"})}catch(__react_docgen_typescript_loader_error){}var src_button=__webpack_require__("./packages/react/src/button/index.ts"),ComboboxButtons_excluded=["disabled"],_excluded2=["disabled"],_excluded3=["disabled","icon"];function ComboboxButtons_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ComboboxButtons_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ComboboxButtons_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ComboboxButtons_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ComboboxClearButton=(0,react.forwardRef)((function ComboboxClearButton(_ref,ref){_ref.disabled;var props=(0,objectWithoutProperties.Z)(_ref,ComboboxButtons_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxIconButton,ComboboxButtons_objectSpread({ref,"aria-label":"Clear input",icon:icon.Tw},props))})),ComboboxDropdownTrigger=(0,react.forwardRef)((function ComboboxDropdownTrigger(_ref2,ref){_ref2.disabled;var props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxIconButton,ComboboxButtons_objectSpread({ref,"aria-label":"Toggle menu",icon:icon.v4},props))})),ComboboxIconButton=(0,react.forwardRef)((function ComboboxIconButton(_ref3,ref){var disabled=_ref3.disabled,Icon=_ref3.icon,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_button.Yd,ComboboxButtons_objectSpread(ComboboxButtons_objectSpread({ref,disabled,css:(0,emotion_react_browser_esm.iv)(ComboboxButtons_objectSpread({display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",position:"absolute",top:"50%",right:"calc(".concat((0,core.XH)(.5)," + ").concat(core.tokens.borderWidth.lg,"px)"),transform:"translateY(-50%)",opacity:disabled?.3:1,color:core._X.foregroundAction,"&:hover":{color:core._X.foregroundText}},box.j4),"","")},props),{},{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Icon,{size:"sm",weight:"bold",color:"inherit"})}))}));try{ComboboxClearButton.displayName="ComboboxClearButton",ComboboxClearButton.__docgenInfo={description:"",displayName:"ComboboxClearButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxBase/ComboboxButtons.tsx#ComboboxClearButton"]={docgenInfo:ComboboxClearButton.__docgenInfo,name:"ComboboxClearButton",path:"packages/react/src/combobox/ComboboxBase/ComboboxButtons.tsx#ComboboxClearButton"})}catch(__react_docgen_typescript_loader_error){}try{ComboboxDropdownTrigger.displayName="ComboboxDropdownTrigger",ComboboxDropdownTrigger.__docgenInfo={description:"",displayName:"ComboboxDropdownTrigger",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxBase/ComboboxButtons.tsx#ComboboxDropdownTrigger"]={docgenInfo:ComboboxDropdownTrigger.__docgenInfo,name:"ComboboxDropdownTrigger",path:"packages/react/src/combobox/ComboboxBase/ComboboxButtons.tsx#ComboboxDropdownTrigger"})}catch(__react_docgen_typescript_loader_error){}var ComboboxBase_excluded=["maxWidth"],ComboboxBase_excluded2=["ref"];function ComboboxBase_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ComboboxBase_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ComboboxBase_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ComboboxBase_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function ComboboxBase(_ref){var label=_ref.label,hideOptionalLabel=_ref.hideOptionalLabel,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,inputId=_ref.inputId,disabled=_ref.disabled,block=_ref.block,_ref$maxWidth=_ref.maxWidth,maxWidthProp=void 0===_ref$maxWidth?"xl":_ref$maxWidth,_ref$showDropdownTrig=_ref.showDropdownTrigger,showDropdownTrigger=void 0===_ref$showDropdownTrig||_ref$showDropdownTrig,_ref$clearable=_ref.clearable,clearable=void 0!==_ref$clearable&&_ref$clearable,_ref$renderItem=_ref.renderItem,renderItem=void 0===_ref$renderItem?defaultRenderItem:_ref$renderItem,_ref$emptyResultsMess=_ref.emptyResultsMessage,emptyResultsMessage=void 0===_ref$emptyResultsMess?"No options found.":_ref$emptyResultsMess,loading=_ref.loading,networkError=_ref.networkError,downshift=_ref.downshift,inputItems=_ref.inputItems,_useState=(0,react.useState)(null),refEl=_useState[0],setRefEl=_useState[1],_useState2=(0,react.useState)(null),popperEl=_useState2[0],setPopperEl=_useState2[1],_usePopper=(0,usePopper.D)(refEl,popperEl,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),styles=_usePopper.styles,attributes=_usePopper.attributes,_textInputStyles$padd=ComboboxBase_objectSpread(ComboboxBase_objectSpread({},(0,text_input.c)({block,maxWidth:maxWidthProp,invalid})),{},{paddingRight:(0,core.XH)(3)}),maxWidth=_textInputStyles$padd.maxWidth,inputStyles=(0,objectWithoutProperties.Z)(_textInputStyles$padd,ComboboxBase_excluded),_downshift$getCombobo=downshift.getComboboxProps(),comboboxRef=_downshift$getCombobo.ref,comboboxProps=(0,objectWithoutProperties.Z)(_downshift$getCombobo,ComboboxBase_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(field.gN,{label,hideOptionalLabel,required:Boolean(required),hint,message,invalid,id:inputId,children:function children(a11yProps){return(0,emotion_react_jsx_runtime_browser_esm.BX)("div",ComboboxBase_objectSpread(ComboboxBase_objectSpread({css:(0,emotion_react_browser_esm.iv)({position:"relative",maxWidth},"",""),ref:(0,core.lq)([setRefEl,comboboxRef])},comboboxProps),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("input",ComboboxBase_objectSpread(ComboboxBase_objectSpread({css:(0,emotion_react_browser_esm.iv)(ComboboxBase_objectSpread(ComboboxBase_objectSpread({},inputStyles),{},{width:"100%"}),"",""),disabled},a11yProps),downshift.getInputProps({type:"text"}))),showDropdownTrigger&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxDropdownTrigger,ComboboxBase_objectSpread({disabled},downshift.getToggleButtonProps())),!showDropdownTrigger&&clearable&&downshift.selectedItem&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxClearButton,{disabled,onClick:downshift.reset}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",ComboboxBase_objectSpread(ComboboxBase_objectSpread({ref:setPopperEl,style:styles.popper},attributes.popper),{},{css:(0,emotion_react_browser_esm.iv)({maxWidth,zIndex:1,width:"100%"},"",""),children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxList,ComboboxBase_objectSpread(ComboboxBase_objectSpread({},downshift.getMenuProps()),{},{isOpen:downshift.isOpen,children:downshift.isOpen&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(react.Fragment,{children:loading?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListLoading,{}):networkError?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListError,{}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(react.Fragment,{children:null!=inputItems&&inputItems.length?inputItems.map((function(item,index){var isActiveItem=downshift.highlightedIndex===index;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListItem,ComboboxBase_objectSpread(ComboboxBase_objectSpread({isActiveItem,isInteractive:!0},downshift.getItemProps({item,index})),{},{children:renderItem(item,downshift.inputValue)}),"".concat(item.value).concat(index))})):(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListEmptyResults,{message:emptyResultsMessage})})})}))}))]}))}})}var _ref2={name:"bigtx2",styles:"background:none"};function defaultRenderItem(item,inputValue){return(0,utils.PE)(item.label,inputValue).map((function(part,index){return part.toLowerCase()===inputValue.toLowerCase()?(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{as:"mark",color:"action",fontWeight:"bold",css:_ref2,children:part},index):(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{as:"span",color:"action",children:part},index)}))}try{ComboboxBase.displayName="ComboboxBase",ComboboxBase.__docgenInfo={description:"",displayName:"ComboboxBase",props:{label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},disabled:{defaultValue:null,description:"If true, the field will not be interactive.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"A string specifying a name for the input control.",name:"name",required:!1,type:{name:"string"}},showDropdownTrigger:{defaultValue:{value:"true"},description:"If true, the dropdown trigger will be rendered.",name:"showDropdownTrigger",required:!1,type:{name:"boolean"}},clearable:{defaultValue:{value:"false"},description:"If true, the selected item can be cleared. Only available when `showDropdownTrigger` is false.",name:"clearable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!1,type:{name:"((value: Option | null) => void)"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!1,type:{name:"DefaultComboboxOption | null"}},renderItem:{defaultValue:null,description:"Used to override the default item rendering.",name:"renderItem",required:!1,type:{name:"((item: Option, inputValue: string) => ReactNode)"}},emptyResultsMessage:{defaultValue:{value:"No options found."},description:"Message to display when no options match the users search term.",name:"emptyResultsMessage",required:!1,type:{name:"string"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!0,type:{name:"string"}},inputItems:{defaultValue:null,description:"",name:"inputItems",required:!1,type:{name:"Option[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},networkError:{defaultValue:null,description:"",name:"networkError",required:!1,type:{name:"boolean"}},downshift:{defaultValue:null,description:"",name:"downshift",required:!0,type:{name:"UseComboboxState<Option> & UseComboboxPropGetters<Option> & UseComboboxActions<Option>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxBase/ComboboxBase.tsx#ComboboxBase"]={docgenInfo:ComboboxBase.__docgenInfo,name:"ComboboxBase",path:"packages/react/src/combobox/ComboboxBase/ComboboxBase.tsx#ComboboxBase"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/combobox/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J5:()=>useComboboxInputId,MN:()=>filterOptions,PE:()=>splitLabel});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts");function useComboboxInputId(idProp){var autoId=(0,_core__WEBPACK_IMPORTED_MODULE_0__.Me)();return idProp||"combobox-input-".concat(autoId)}function filterOptions(options,inputValue){return inputValue=inputValue.toLowerCase(),options.filter((function(_ref){var value=_ref.value,label=_ref.label;return value.toLowerCase().includes(inputValue)||label.toLowerCase().includes(inputValue)}))}function splitLabel(label,inputValue){return inputValue?label.split(new RegExp("(".concat(inputValue,")"),"gi")).filter(Boolean):[label]}}}]);