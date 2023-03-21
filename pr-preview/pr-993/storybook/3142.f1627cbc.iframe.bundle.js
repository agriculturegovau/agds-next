"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3142],{"./packages/react/src/combobox/ComboboxMulti.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ComboboxMulti});var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),downshift_esm=__webpack_require__("./node_modules/downshift/dist/downshift.esm.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),field=__webpack_require__("./packages/react/src/field/index.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),tags=__webpack_require__("./packages/react/src/tags/index.ts"),ComboboxList=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxList.tsx"),ComboboxListItem=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),ComboboxListLoading=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListLoading.tsx"),ComboboxListError=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListError.tsx"),ComboboxListEmptyResults=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListEmptyResults.tsx"),ComboboxButtons=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxButtons.tsx"),defaultRenderItem=__webpack_require__("./packages/react/src/combobox/defaultRenderItem.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["ref"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _ref2={name:"1jxbm6n",styles:"right:2.5rem"};function ComboboxMultiBase(_ref){var label=_ref.label,hideOptionalLabel=_ref.hideOptionalLabel,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,inputId=_ref.inputId,disabled=_ref.disabled,_ref$block=_ref.block,block=void 0===_ref$block||_ref$block,_ref$maxWidth=_ref.maxWidth,maxWidthProp=void 0===_ref$maxWidth?"xl":_ref$maxWidth,_ref$renderItem=_ref.renderItem,renderItem=void 0===_ref$renderItem?defaultRenderItem._:_ref$renderItem,_ref$emptyResultsMess=_ref.emptyResultsMessage,emptyResultsMessage=void 0===_ref$emptyResultsMess?"No options found.":_ref$emptyResultsMess,loading=_ref.loading,networkError=_ref.networkError,downshift=_ref.downshift,inputItems=_ref.inputItems,selectedItems=_ref.selectedItems,multiSelection=_ref.multiSelection,_useState=(0,react.useState)(null),refEl=_useState[0],setRefEl=_useState[1],_useState2=(0,react.useState)(null),popperEl=_useState2[0],setPopperEl=_useState2[1],_usePopper=(0,usePopper.D)(refEl,popperEl,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),styles=_usePopper.styles,attributes=_usePopper.attributes,update=_usePopper.update,inputContainerStyles=_objectSpread(_objectSpread({appearance:"none",margin:0,background:core.boxPalette.backgroundBody,borderWidth:core.tokens.borderWidth.lg,borderStyle:"solid",borderColor:core.boxPalette.border,color:core.boxPalette.foregroundText,fontFamily:core.tokens.font.body},core.lB.input.md),{},{height:"auto",minHeight:core.lB.input.md.height,paddingTop:(0,core.mapSpacing)(.25),paddingBottom:(0,core.mapSpacing)(.25),paddingLeft:(0,core.mapSpacing)(.5),paddingRight:"4rem"});return(0,react.useEffect)((function(){null==update||update()}),[selectedItems,update]),(0,emotion_react_jsx_runtime_browser_esm.tZ)(field.gN,{label,hideOptionalLabel,required:Boolean(required),hint,message,invalid,id:inputId,children:function children(a11yProps){return(0,emotion_react_jsx_runtime_browser_esm.BX)("div",{css:(0,emotion_react_browser_esm.iv)({position:"relative",maxWidth:block?void 0:core.tokens.maxWidth.field[maxWidthProp],width:block?"100%":void 0,":focus-within":core.lB.outline},"",""),ref:setRefEl,children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{gap:.5,flexWrap:"wrap",css:inputContainerStyles,children:[selectedItems.map((function(item,idx){var _multiSelection$getSe=multiSelection.getSelectedItemProps({selectedItem:item,index:idx}),ref=_multiSelection$getSe.ref,itemProps=(0,objectWithoutProperties.Z)(_multiSelection$getSe,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(tags.Vp,_objectSpread(_objectSpread({onRemove:function onRemove(){return multiSelection.removeSelectedItem(item)},removeButtonRef:ref},itemProps),{},{children:item.label}),"selected-item-".concat(idx))})),(0,emotion_react_jsx_runtime_browser_esm.tZ)("input",_objectSpread(_objectSpread(_objectSpread({disabled},a11yProps),downshift.getInputProps(multiSelection.getDropdownProps({type:"text",preventKeyAction:downshift.isOpen}))),{},{css:(0,emotion_react_browser_esm.iv)(_objectSpread({flex:1,appearance:"none",border:"none",with:"100%",borderWidth:0,"&:focus":{outline:"none"},fontFamily:core.tokens.font.body},(0,core.vY)("sm","default")),"","")}))]}),null!=selectedItems&&selectedItems.length?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxButtons.X,{disabled,onClick:function onClick(){return multiSelection.setSelectedItems([])},css:_ref2}):null,(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxButtons.f,_objectSpread({disabled},downshift.getToggleButtonProps())),(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",_objectSpread(_objectSpread({ref:setPopperEl,style:styles.popper},attributes.popper),{},{css:(0,emotion_react_browser_esm.iv)({maxWidth:block?void 0:core.tokens.maxWidth.field[maxWidthProp],zIndex:1,width:"100%"},"",""),children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxList.G,_objectSpread(_objectSpread({},downshift.getMenuProps()),{},{isOpen:downshift.isOpen,children:downshift.isOpen&&(0,emotion_react_jsx_runtime_browser_esm.tZ)(react.Fragment,{children:loading?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListLoading.S,{}):networkError?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListError.N,{}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(react.Fragment,{children:null!=inputItems&&inputItems.length?inputItems.map((function(item,index){var isActiveItem=downshift.highlightedIndex===index;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListItem.A,_objectSpread(_objectSpread({isActiveItem,isInteractive:!0},downshift.getItemProps({item,index})),{},{children:renderItem(item,downshift.inputValue)}),"".concat(item.value).concat(index))})):(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxListEmptyResults.a,{message:emptyResultsMessage})})})}))}))]})}})}try{ComboboxMultiBase.displayName="ComboboxMultiBase",ComboboxMultiBase.__docgenInfo={description:"",displayName:"ComboboxMultiBase",props:{label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"true"},description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},disabled:{defaultValue:null,description:"If true, the field will not be interactive.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"A string specifying a name for the input control.",name:"name",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"If true, the selected item can be cleared.",name:"clearable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!1,type:{name:"((value: Option | null) => void)"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!1,type:{name:"DefaultComboboxOption | null"}},renderItem:{defaultValue:null,description:"Used to override the default item rendering.",name:"renderItem",required:!1,type:{name:"((item: Option, inputValue: string) => ReactNode)"}},emptyResultsMessage:{defaultValue:{value:"No options found."},description:"Message to display when no options match the users search term.",name:"emptyResultsMessage",required:!1,type:{name:"string"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!0,type:{name:"string"}},inputItems:{defaultValue:null,description:"",name:"inputItems",required:!1,type:{name:"(Option & { isSelected?: boolean; })[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},networkError:{defaultValue:null,description:"",name:"networkError",required:!1,type:{name:"boolean"}},downshift:{defaultValue:null,description:"",name:"downshift",required:!0,type:{name:"UseComboboxState<Option> & UseComboboxPropGetters<Option> & UseComboboxActions<Option>"}},selectedItems:{defaultValue:null,description:"",name:"selectedItems",required:!0,type:{name:"Option[]"}},multiSelection:{defaultValue:null,description:"",name:"multiSelection",required:!0,type:{name:"UseMultipleSelectionState<Option> & UseMultipleSelectionPropGetters<Option> & UseMultipleSelectionActions<Option>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxMultiBase/ComboboxMultiBase.tsx#ComboboxMultiBase"]={docgenInfo:ComboboxMultiBase.__docgenInfo,name:"ComboboxMultiBase",path:"packages/react/src/combobox/ComboboxMultiBase/ComboboxMultiBase.tsx#ComboboxMultiBase"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./packages/react/src/combobox/utils.ts");function ComboboxMulti_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ComboboxMulti_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ComboboxMulti_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ComboboxMulti_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function ComboboxMulti(props){var _useState=(0,react.useState)(""),inputValue=_useState[0],setInputValue=_useState[1],inputId=(0,utils.J5)(props.id),_useState2=(0,react.useState)([]),selectedItems=_useState2[0],setSelectedItems=_useState2[1],items=(0,react.useMemo)((function(){return(0,utils.MN)(props.options,inputValue,selectedItems)}),[props.options,inputValue,selectedItems]),multiSelection=(0,downshift_esm.M$)({selectedItems,onStateChange:function onStateChange(_ref){var newSelectedItems=_ref.selectedItems;switch(_ref.type){case downshift_esm.M$.stateChangeTypes.SelectedItemKeyDownBackspace:case downshift_esm.M$.stateChangeTypes.SelectedItemKeyDownDelete:case downshift_esm.M$.stateChangeTypes.DropdownKeyDownBackspace:case downshift_esm.M$.stateChangeTypes.FunctionRemoveSelectedItem:setSelectedItems(null!=newSelectedItems?newSelectedItems:[])}}}),downshift=(0,downshift_esm.Kb)({inputValue,inputId,items:null!=items?items:[],itemToString:function itemToString(item){var _item$label;return null!==(_item$label=null==item?void 0:item.label)&&void 0!==_item$label?_item$label:""},selectedItem:null,defaultHighlightedIndex:0,stateReducer:function stateReducer(state,actionAndChanges){var changes=actionAndChanges.changes;switch(actionAndChanges.type){case downshift_esm.Kb.stateChangeTypes.InputKeyDownEnter:case downshift_esm.Kb.stateChangeTypes.ItemClick:return ComboboxMulti_objectSpread(ComboboxMulti_objectSpread({},changes),{},{isOpen:!0,highlightedIndex:0});default:return changes}},onStateChange:function onStateChange(_ref2){var _ref2$inputValue=_ref2.inputValue,newInputValue=void 0===_ref2$inputValue?"":_ref2$inputValue,type=_ref2.type,newSelectedItem=_ref2.selectedItem;switch(type){case downshift_esm.Kb.stateChangeTypes.InputKeyDownEnter:case downshift_esm.Kb.stateChangeTypes.ItemClick:case downshift_esm.Kb.stateChangeTypes.InputBlur:newSelectedItem&&setSelectedItems([].concat((0,toConsumableArray.Z)(selectedItems),[newSelectedItem])),setInputValue("");break;case downshift_esm.Kb.stateChangeTypes.InputChange:setInputValue(newInputValue)}}});return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ComboboxMultiBase,ComboboxMulti_objectSpread({downshift,inputItems:items,inputId,multiSelection,selectedItems},props))}try{ComboboxMulti.displayName="ComboboxMulti",ComboboxMulti.__docgenInfo={description:"",displayName:"ComboboxMulti",props:{label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"If true, the field will not be interactive.",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"A string specifying a name for the input control.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!1,type:{name:"((value: Option | null) => void)"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!1,type:{name:"DefaultComboboxOption | null"}},renderItem:{defaultValue:null,description:"Used to override the default item rendering.",name:"renderItem",required:!1,type:{name:"((item: Option, inputValue: string) => ReactNode)"}},emptyResultsMessage:{defaultValue:null,description:"Message to display when no options match the users search term.",name:"emptyResultsMessage",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"The list of options to show in the dropdown.",name:"options",required:!0,type:{name:"Option[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/combobox/ComboboxMulti.tsx#ComboboxMulti"]={docgenInfo:ComboboxMulti.__docgenInfo,name:"ComboboxMulti",path:"packages/react/src/combobox/ComboboxMulti.tsx#ComboboxMulti"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/tags/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vp:()=>Tag,Tags:()=>Tags,r$:()=>TagsContainer,Pn:()=>TagsList});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),TagsContainer=function TagsContainer(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Stack,{gap:.25,children})};try{TagsContainer.displayName="TagsContainer",TagsContainer.__docgenInfo={description:"",displayName:"TagsContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/tags/TagsContainer.tsx#TagsContainer"]={docgenInfo:TagsContainer.__docgenInfo,name:"TagsContainer",path:"packages/react/src/tags/TagsContainer.tsx#TagsContainer"})}catch(__react_docgen_typescript_loader_error){}var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),_excluded=["children","onRemove","removeButtonRef"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Tag=(0,react.forwardRef)((function Tag(_ref,ref){var children=_ref.children,onRemove=_ref.onRemove,removeButtonRef=_ref.removeButtonRef,linkProps=(0,objectWithoutProperties.Z)(_ref,_excluded),href=linkProps.href;return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{ref,as:"span",inline:!0,alignItems:"center",border:!0,rounded:!0,paddingLeft:.5,paddingRight:onRemove?.25:.5,gap:.25,fontSize:"sm",color:href?"action":"text",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,_objectSpread(_objectSpread({as:href?text_link.TextLink:"span"},linkProps),{},{children})),onRemove?(0,emotion_react_jsx_runtime_browser_esm.tZ)(TagRemoveButton,{ref:removeButtonRef,onClick:onRemove,"aria-label":"Remove ".concat(children)}):null]})})),TagRemoveButton=(0,react.forwardRef)((function TagRemoveButton(_ref2,ref){var onClick=_ref2.onClick,ariaLabel=_ref2["aria-label"];return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{ref,as:src_button.BaseButton,height:(0,core.mapSpacing)(1.5),width:(0,core.mapSpacing)(1.5),alignItems:"center",justifyContent:"center",onClick,"aria-label":ariaLabel,focus:!0,css:(0,emotion_react_browser_esm.iv)({svg:{display:"block",color:core.boxPalette.foregroundAction},"&:hover":{svg:{color:core.boxPalette.foregroundText}}},"",""),children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(icon.CloseIcon,{size:"sm"})})}));try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},removeButtonRef:{defaultValue:null,description:"",name:"removeButtonRef",required:!1,type:{name:"RefObject<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/tags/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/react/src/tags/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}var TagsList=function TagsList(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"ul",gap:.5,alignItems:"center",children})};try{TagsList.displayName="TagsList",TagsList.__docgenInfo={description:"",displayName:"TagsList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/tags/TagsList.tsx#TagsList"]={docgenInfo:TagsList.__docgenInfo,name:"TagsList",path:"packages/react/src/tags/TagsList.tsx#TagsList"})}catch(__react_docgen_typescript_loader_error){}var Tags_excluded=["label"];function Tags_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Tags_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Tags_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tags_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Tags=function Tags(_ref){var items=_ref.items,heading=_ref.heading;return(0,emotion_react_jsx_runtime_browser_esm.BX)(TagsContainer,{children:[heading,(0,emotion_react_jsx_runtime_browser_esm.tZ)(TagsList,{children:items.map((function(_ref2,index){var label=_ref2.label,props=(0,objectWithoutProperties.Z)(_ref2,Tags_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,{as:"li",children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Tag,Tags_objectSpread(Tags_objectSpread({},props),{},{children:label}))},index)}))})]})};try{Tags.displayName="Tags",Tags.__docgenInfo={description:"",displayName:"Tags",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<TagProps, "children"> & { label: string; }[]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/tags/Tags.tsx#Tags"]={docgenInfo:Tags.__docgenInfo,name:"Tags",path:"packages/react/src/tags/Tags.tsx#Tags"})}catch(__react_docgen_typescript_loader_error){}}}]);