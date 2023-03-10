"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[7868],{"./packages/react/src/date-picker/DatePickerInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>DateInput});var _emotion_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/index.ts"),_text_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-input/index.ts"),_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/core/index.ts"),_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/button/index.ts"),_field__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/field/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/date-picker/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["label","required","hint","message","invalid","block","id","buttonRef","maxWidth","buttonOnClick","disabled","value"],_excluded2=["maxWidth"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _ref2={name:"4zleql",styles:"display:block"},DateInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function DateInput(_ref,ref){var label=_ref.label,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,block=_ref.block,id=_ref.id,buttonRef=_ref.buttonRef,_ref$maxWidth=_ref.maxWidth,maxWidthProp=void 0===_ref$maxWidth?"md":_ref$maxWidth,buttonOnClick=_ref.buttonOnClick,disabled=_ref.disabled,value=_ref.value,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),_textInputStyles$widt=_objectSpread(_objectSpread({},(0,_text_input__WEBPACK_IMPORTED_MODULE_4__.c)({block,invalid:invalid.input,maxWidth:maxWidthProp})),{},{width:"100%",borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}),maxWidth=_textInputStyles$widt.maxWidth,styles=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_textInputStyles$widt,_excluded2),ariaLabel=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){if("string"!=typeof value)return"Choose date";var parsed=(0,_utils__WEBPACK_IMPORTED_MODULE_9__.sG)(value);return parsed?"Change Date, ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_9__.G2)(parsed)):"Choose date"}),[value]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_field__WEBPACK_IMPORTED_MODULE_7__.gN,{label,secondaryLabel:"(dd/mm/yyyy)",required:Boolean(required),hint,message,invalid:invalid.field,id,children:function children(a11yProps){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.BX)(_box__WEBPACK_IMPORTED_MODULE_2__.Flex,{alignItems:"flex-end",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.iv)({maxWidth},"",""),children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)("input",_objectSpread(_objectSpread(_objectSpread({ref,type:"text",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.iv)(_objectSpread(_objectSpread({},styles),{},{maxWidth:"unset"}),"",""),autoComplete:"off"},a11yProps),{},{"aria-invalid":Boolean(invalid.field||invalid.input)},props),{},{value,disabled})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_button__WEBPACK_IMPORTED_MODULE_6__.Button,{type:"button",ref:buttonRef,onClick:buttonOnClick,disabled,variant:"secondary","aria-label":ariaLabel,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.iv)({borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_5__.mapSpacing)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_5__.mapSpacing)(1)},"",""),children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_3__.Qu,{size:"md",css:_ref2})})]})}})}));try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!0,type:{name:"{ field: boolean; input: boolean; }"}},buttonRef:{defaultValue:null,description:"",name:"buttonRef",required:!0,type:{name:"RefObject<HTMLButtonElement>"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/date-picker/DatePickerInput.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"packages/react/src/date-picker/DatePickerInput.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/date-picker/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G2:()=>formatHumanReadableDate,JF:()=>transformValuePropToInputValue,NE:()=>getValidDateRange,cD:()=>constrainDate,p6:()=>formatDate,sG:()=>parseDate});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/parse/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/isDate/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/date-fns/esm/isBefore/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/date-fns/esm/isAfter/index.js"),formatDate=function formatDate(date){return(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.Z)(date,"dd/MM/yyyy")},formatHumanReadableDate=function formatHumanReadableDate(date){return(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.Z)(date,"eeee MMMM do, yyyy")},parseDate=function parseDate(value){if(value.length==="dd/MM/yyyy".length){var parsed=(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.Z)(value,"dd/MM/yyyy",new Date);return isValidDate(parsed)?parsed:void 0}};function isValidDate(value){return(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.Z)(value)&&(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.Z)(value)}function constrainDate(date,minDate,maxDate){return date?minDate&&(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.Z)(date,minDate)?minDate:maxDate&&(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.Z)(date,maxDate)?maxDate:date:date}function getValidDateRange(inputMode,selectedDay,currentRange){return"from"===inputMode?currentRange.to&&(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.Z)(selectedDay,currentRange.to)?{from:selectedDay,to:currentRange.to}:{from:selectedDay,to:void 0}:currentRange.from?(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.Z)(selectedDay,currentRange.from)?{from:currentRange.from,to:selectedDay}:{from:selectedDay,to:void 0}:{from:void 0,to:selectedDay}}function transformValuePropToInputValue(valueProp){return"string"==typeof valueProp?valueProp:void 0===valueProp?"":isValidDate(valueProp)?formatDate(valueProp):""}},"./packages/react/src/field/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AJ:()=>useFieldA11yProps,gN:()=>Field,s_:()=>useFieldIds});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_FieldContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),_FieldLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),_FieldHint__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),_FieldMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Field=function Field(_ref){var children=_ref.children,hint=_ref.hint,id=_ref.id,invalid=_ref.invalid,label=_ref.label,secondaryLabel=_ref.secondaryLabel,hideOptionalLabel=_ref.hideOptionalLabel,message=_ref.message,required=_ref.required,_useFieldIds=useFieldIds(id),fieldId=_useFieldIds.fieldId,hintId=_useFieldIds.hintId,messageId=_useFieldIds.messageId,a11yProps=useFieldA11yProps({required,fieldId,message,messageId,hint,hintId,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.BX)(_FieldContainer__WEBPACK_IMPORTED_MODULE_1__.i,{invalid,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldLabel__WEBPACK_IMPORTED_MODULE_2__.Q,{htmlFor:fieldId,secondaryLabel,hideOptionalLabel,required,children:label}),hint?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldHint__WEBPACK_IMPORTED_MODULE_3__.J,{id:hintId,children:hint}):null,message&&invalid?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldMessage__WEBPACK_IMPORTED_MODULE_4__.n,{id:messageId,children:message}):null,"function"==typeof children?children(a11yProps):children]})},useFieldIds=function useFieldIds(idProp){var autoId=(0,_core__WEBPACK_IMPORTED_MODULE_0__.Me)(idProp);return{fieldId:idProp||"field-".concat(autoId),hintId:"field-".concat(autoId,"-hint"),messageId:"field-".concat(autoId,"-message")}},useFieldA11yProps=function useFieldA11yProps(_ref2){var required=_ref2.required,fieldId=_ref2.fieldId,message=_ref2.message,messageId=_ref2.messageId,hint=_ref2.hint,hintId=_ref2.hintId,invalid=_ref2.invalid,describedByIds=[message?messageId:null,hint?hintId:null].filter(Boolean),describedBy=describedByIds.length?describedByIds.join(" "):void 0;return{"aria-required":Boolean(required),"aria-invalid":Boolean(invalid),"aria-describedby":describedBy,id:fieldId}};try{Field.displayName="Field",Field.__docgenInfo={description:"",displayName:"Field",props:{hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!0,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},secondaryLabel:{defaultValue:null,description:"Override the default secondary label.",name:"secondaryLabel",required:!1,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label even when `required` is `false`.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!0,type:{name:"string | undefined"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"packages/react/src/field/Field.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}try{useFieldIds.displayName="useFieldIds",useFieldIds.__docgenInfo={description:"",displayName:"useFieldIds",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#useFieldIds"]={docgenInfo:useFieldIds.__docgenInfo,name:"useFieldIds",path:"packages/react/src/field/Field.tsx#useFieldIds"})}catch(__react_docgen_typescript_loader_error){}try{useFieldA11yProps.displayName="useFieldA11yProps",useFieldA11yProps.__docgenInfo={description:"",displayName:"useFieldA11yProps",props:{required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},fieldId:{defaultValue:null,description:"",name:"fieldId",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},messageId:{defaultValue:null,description:"",name:"messageId",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},hintId:{defaultValue:null,description:"",name:"hintId",required:!0,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#useFieldA11yProps"]={docgenInfo:useFieldA11yProps.__docgenInfo,name:"useFieldA11yProps",path:"packages/react/src/field/Field.tsx#useFieldA11yProps"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>FieldContainer});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldContainer=function FieldContainer(_ref){var children=_ref.children,invalid=_ref.invalid,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Stack,{gap:.5,paddingLeft:invalid?1:void 0,borderLeft:invalid,borderLeftWidth:"xl",id,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)({borderLeftColor:invalid?_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.systemError:void 0},"",""),children})};try{FieldContainer.displayName="FieldContainer",FieldContainer.__docgenInfo={description:"",displayName:"FieldContainer",props:{invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldContainer.tsx#FieldContainer"]={docgenInfo:FieldContainer.__docgenInfo,name:"FieldContainer",path:"packages/react/src/field/FieldContainer.tsx#FieldContainer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FieldHint});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldHint=function FieldHint(_ref){var children=_ref.children,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{display:"block",color:"muted",id,children})};try{FieldHint.displayName="FieldHint",FieldHint.__docgenInfo={description:"",displayName:"FieldHint",props:{id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldHint.tsx#FieldHint"]={docgenInfo:FieldHint.__docgenInfo,name:"FieldHint",path:"packages/react/src/field/FieldHint.tsx#FieldHint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>FieldLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldLabel=function FieldLabel(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"label":_ref$as,children=_ref.children,className=_ref.className,htmlFor=_ref.htmlFor,required=_ref.required,secondaryLabelProp=_ref.secondaryLabel,hideOptionalLabel=_ref.hideOptionalLabel,secondaryLabel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return hideOptionalLabel?null:secondaryLabelProp||(required?void 0:"(optional)")}),[required,secondaryLabelProp,hideOptionalLabel]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_box__WEBPACK_IMPORTED_MODULE_1__.Flex,{as,htmlFor,gap:.25,className,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"span",fontWeight:"bold",children}),secondaryLabel?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"span",color:"muted",children:secondaryLabel}):null]})};try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"",displayName:"FieldLabel",props:{as:{defaultValue:{value:"label"},description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},htmlFor:{defaultValue:null,description:"The ID of the form element this label relates to.",name:"htmlFor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!0,type:{name:"boolean"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label even when `required` is `false`.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},secondaryLabel:{defaultValue:null,description:"Override the default secondary label.",name:"secondaryLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldLabel.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"packages/react/src/field/FieldLabel.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>FieldMessage});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"4zleql",styles:"display:block"},FieldMessage=function FieldMessage(_ref){var children=_ref.children,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:.5,alignItems:"center",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_1__.z$,{color:"error",size:"md","aria-label":"Error","aria-hidden":"false",css:_ref2})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{display:"block",fontWeight:"bold",color:"error",id,children})]})};try{FieldMessage.displayName="FieldMessage",FieldMessage.__docgenInfo={description:"",displayName:"FieldMessage",props:{id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldMessage.tsx#FieldMessage"]={docgenInfo:FieldMessage.__docgenInfo,name:"FieldMessage",path:"packages/react/src/field/FieldMessage.tsx#FieldMessage"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gN:()=>Field.gN,i$:()=>FieldContainer.i,J1:()=>FieldHint.J,Qy:()=>FieldLabel.Q,nd:()=>FieldMessage.n,AJ:()=>Field.AJ,s_:()=>Field.s_,useScrollToField:()=>useScrollToField});var Field=__webpack_require__("./packages/react/src/field/Field.tsx"),FieldContainer=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),FieldHint=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),FieldLabel=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),FieldMessage=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),react=__webpack_require__("./node_modules/react/index.js");function useScrollToField(){return(0,react.useCallback)((function(event){(function focusTarget(event){if(!(event.target instanceof HTMLAnchorElement))return!1;var targetId=function getTargetId(event){var target=event.target;if(!(target instanceof HTMLAnchorElement))return;return target.hash.substring(1)}(event);if(!targetId)return!1;var targetEl=document.getElementById(targetId);if(!targetEl)return!1;var _targetEl$querySelect,targetLabel=document.querySelector("label[for='"+targetId+"']"),targetLabelParent=null==targetLabel?void 0:targetLabel.parentElement;"div"===targetEl.tagName.toLowerCase()?null===(_targetEl$querySelect=targetEl.querySelector("input"))||void 0===_targetEl$querySelect||_targetEl$querySelect.focus():targetEl.focus();targetLabelParent?targetLabelParent.scrollIntoView():targetEl.scrollIntoView();return!0})(event)&&event.preventDefault()}),[])}},"./packages/react/src/text-input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>textInputStyles,o:()=>TextInput});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextInput(_ref,ref){var label=_ref.label,hideOptionalLabel=_ref.hideOptionalLabel,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,block=_ref.block,_ref$maxWidth=_ref.maxWidth,maxWidth=void 0===_ref$maxWidth?"md":_ref$maxWidth,id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),styles=textInputStyles({block,maxWidth,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_field__WEBPACK_IMPORTED_MODULE_2__.gN,{label,hideOptionalLabel,required:Boolean(required),hint,message,invalid,id,children:function children(a11yProps){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)("input",_objectSpread(_objectSpread({ref,css:styles},a11yProps),{},{type},props))}})})),textInputStyles=function textInputStyles(_ref2){var block=_ref2.block,maxWidth=_ref2.maxWidth,invalid=_ref2.invalid,multiline=_ref2.multiline;return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),margin:0,background:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundBody,borderWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderWidth.lg,borderStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.border,borderRadius:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderRadius,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.font.body},_core__WEBPACK_IMPORTED_MODULE_3__.lB.input.md),maxWidth&&{maxWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.maxWidth.field[maxWidth]}),block&&{maxWidth:"none",display:"block",width:"100%"}),invalid&&{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemError}),multiline&&{paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),height:"auto",minHeight:"6rem"}),{},{"&:disabled":{cursor:"not-allowed",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.borderMuted,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundMuted},"&:focus":_core__WEBPACK_IMPORTED_MODULE_3__.lB.outline})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"search"'},{value:'"none"'},{value:'"email"'},{value:'"tel"'},{value:'"url"'},{value:'"numeric"'},{value:'"decimal"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"md"},description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-input/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"packages/react/src/text-input/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}try{textInputStyles.displayName="textInputStyles",textInputStyles.__docgenInfo={description:"",displayName:"textInputStyles",props:{block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"md"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-input/TextInput.tsx#textInputStyles"]={docgenInfo:textInputStyles.__docgenInfo,name:"textInputStyles",path:"packages/react/src/text-input/TextInput.tsx#textInputStyles"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextInput:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.o,c:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.c});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-input/TextInput.tsx")}}]);