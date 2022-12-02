"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9911],{"./packages/select/src/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select});var _emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_ag_ds_next_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/field/src/index.tsx"),_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/index.ts"),_ag_ds_next_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icon/src/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","options","placeholder","id"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Select=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function Select(_ref,ref){var label=_ref.label,hideOptionalLabel=_ref.hideOptionalLabel,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,block=_ref.block,_ref$maxWidth=_ref.maxWidth,maxWidth=void 0===_ref$maxWidth?"md":_ref$maxWidth,options=_ref.options,placeholder=_ref.placeholder,id=_ref.id,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded),styles=selectStyles({block,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_field__WEBPACK_IMPORTED_MODULE_2__.gN,{label,hideOptionalLabel,required:Boolean(required),hint,message,invalid,id,children:function children(a11yProps){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(SelectContainer,{block,maxWidth,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("select",_objectSpread(_objectSpread(_objectSpread({ref,css:styles},a11yProps),props),{},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(SelectOptions,{options,placeholder})})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(SelectIcon,{disabled:props.disabled})]})}})})),SelectContainer=function SelectContainer(_ref2){var children=_ref2.children,block=_ref2.block,maxWidth=_ref2.maxWidth;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("div",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)(_objectSpread({position:"relative"},!block&&{maxWidth:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.TV.maxWidth.field[maxWidth]}),"",""),children})},SelectOptions=function SelectOptions(_ref3){var options=_ref3.options,placeholder=_ref3.placeholder;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[placeholder?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("option",{value:"",children:placeholder}):null,options.map((function(opt){return"options"in opt?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("optgroup",{label:opt.label,disabled:opt.disabled,children:opt.options.map((function(_ref4){var value=_ref4.value,label=_ref4.label,disabled=_ref4.disabled;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("option",{value,disabled,children:label},value)}))},opt.label):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("option",{value:opt.value,disabled:opt.disabled,children:opt.label},opt.value)}))]})},SelectIcon=function SelectIcon(_ref5){var disabled=_ref5.disabled;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_icon__WEBPACK_IMPORTED_MODULE_4__.v4,{size:"sm",weight:"bold",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)({position:"absolute",top:"50%",right:(0,_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.XH)(1),transform:"translateY(-50%)",opacity:disabled?.3:1,pointerEvents:"none",color:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__._X.foregroundAction},"","")})},selectStyles=function selectStyles(_ref6){var block=_ref6.block,invalid=_ref6.invalid;return _objectSpread(_objectSpread(_objectSpread(_objectSpread({position:"relative",appearance:"none",boxSizing:"border-box",paddingLeft:(0,_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.XH)(1),paddingRight:(0,_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.XH)(3),margin:0,background:"none",borderWidth:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.TV.borderWidth.lg,borderStyle:"solid",borderColor:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__._X.border,borderRadius:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.TV.borderRadius,color:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__._X.foregroundText,width:"100%",fontFamily:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.TV.font.body},_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.lB.input.md),{},{lineHeight:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.TV.lineHeight.default},block&&{maxWidth:"none",display:"block"}),invalid&&{backgroundColor:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__._X.systemErrorMuted,borderColor:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__._X.systemError}),{},{"&:disabled":{cursor:"not-allowed",opacity:.3},"&:focus":_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.lB.outline})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLSelectElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLSelectElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"The list of options to display in the drop-down list.",name:"options",required:!0,type:{name:"Options"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"md"},description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/select/src/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"packages/select/src/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}}}]);