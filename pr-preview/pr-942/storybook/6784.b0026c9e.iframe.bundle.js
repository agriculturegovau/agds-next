"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[6784],{"./packages/react/src/field/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AJ:()=>useFieldA11yProps,gN:()=>Field,s_:()=>useFieldIds});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_FieldContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),_FieldLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),_FieldHint__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),_FieldMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Field=function Field(_ref){var children=_ref.children,hint=_ref.hint,id=_ref.id,invalid=_ref.invalid,label=_ref.label,secondaryLabel=_ref.secondaryLabel,hideOptionalLabel=_ref.hideOptionalLabel,message=_ref.message,required=_ref.required,_useFieldIds=useFieldIds(id),fieldId=_useFieldIds.fieldId,hintId=_useFieldIds.hintId,messageId=_useFieldIds.messageId,a11yProps=useFieldA11yProps({required,fieldId,message,messageId,hint,hintId,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.BX)(_FieldContainer__WEBPACK_IMPORTED_MODULE_1__.i,{invalid,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldLabel__WEBPACK_IMPORTED_MODULE_2__.Q,{htmlFor:fieldId,secondaryLabel,hideOptionalLabel,required,children:label}),hint?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldHint__WEBPACK_IMPORTED_MODULE_3__.J,{id:hintId,children:hint}):null,message&&invalid?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldMessage__WEBPACK_IMPORTED_MODULE_4__.n,{id:messageId,children:message}):null,"function"==typeof children?children(a11yProps):children]})},useFieldIds=function useFieldIds(idProp){var autoId=(0,_core__WEBPACK_IMPORTED_MODULE_0__.Me)(idProp);return{fieldId:idProp||"field-".concat(autoId),hintId:"field-".concat(autoId,"-hint"),messageId:"field-".concat(autoId,"-message")}},useFieldA11yProps=function useFieldA11yProps(_ref2){var required=_ref2.required,fieldId=_ref2.fieldId,message=_ref2.message,messageId=_ref2.messageId,hint=_ref2.hint,hintId=_ref2.hintId,invalid=_ref2.invalid,describedByIds=[message?messageId:null,hint?hintId:null].filter(Boolean),describedBy=describedByIds.length?describedByIds.join(" "):void 0;return{"aria-required":Boolean(required),"aria-invalid":Boolean(invalid),"aria-describedby":describedBy,id:fieldId}};try{Field.displayName="Field",Field.__docgenInfo={description:"",displayName:"Field",props:{hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!0,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},secondaryLabel:{defaultValue:null,description:"Override the default secondary label.",name:"secondaryLabel",required:!1,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label even when `required` is `false`.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!0,type:{name:"string | undefined"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"packages/react/src/field/Field.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}try{useFieldIds.displayName="useFieldIds",useFieldIds.__docgenInfo={description:"",displayName:"useFieldIds",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#useFieldIds"]={docgenInfo:useFieldIds.__docgenInfo,name:"useFieldIds",path:"packages/react/src/field/Field.tsx#useFieldIds"})}catch(__react_docgen_typescript_loader_error){}try{useFieldA11yProps.displayName="useFieldA11yProps",useFieldA11yProps.__docgenInfo={description:"",displayName:"useFieldA11yProps",props:{required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},fieldId:{defaultValue:null,description:"",name:"fieldId",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},messageId:{defaultValue:null,description:"",name:"messageId",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},hintId:{defaultValue:null,description:"",name:"hintId",required:!0,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#useFieldA11yProps"]={docgenInfo:useFieldA11yProps.__docgenInfo,name:"useFieldA11yProps",path:"packages/react/src/field/Field.tsx#useFieldA11yProps"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>FieldContainer});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldContainer=function FieldContainer(_ref){var children=_ref.children,invalid=_ref.invalid,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Stack,{gap:.5,paddingLeft:invalid?1:void 0,borderLeft:invalid,borderLeftWidth:"xl",id,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)({borderLeftColor:invalid?_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.systemError:void 0},"",""),children})};try{FieldContainer.displayName="FieldContainer",FieldContainer.__docgenInfo={description:"",displayName:"FieldContainer",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldContainer.tsx#FieldContainer"]={docgenInfo:FieldContainer.__docgenInfo,name:"FieldContainer",path:"packages/react/src/field/FieldContainer.tsx#FieldContainer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FieldHint});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldHint=function FieldHint(_ref){var children=_ref.children,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{display:"block",color:"muted",id,children})};try{FieldHint.displayName="FieldHint",FieldHint.__docgenInfo={description:"",displayName:"FieldHint",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldHint.tsx#FieldHint"]={docgenInfo:FieldHint.__docgenInfo,name:"FieldHint",path:"packages/react/src/field/FieldHint.tsx#FieldHint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>FieldLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldLabel=function FieldLabel(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"label":_ref$as,children=_ref.children,htmlFor=_ref.htmlFor,required=_ref.required,secondaryLabelProp=_ref.secondaryLabel,hideOptionalLabel=_ref.hideOptionalLabel,secondaryLabel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return hideOptionalLabel?null:secondaryLabelProp||(required?void 0:"(optional)")}),[required,secondaryLabelProp,hideOptionalLabel]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_box__WEBPACK_IMPORTED_MODULE_1__.Flex,{as,htmlFor,gap:.25,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"span",fontWeight:"bold",children}),secondaryLabel?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"span",color:"muted",children:secondaryLabel}):null]})};try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"",displayName:"FieldLabel",props:{as:{defaultValue:{value:"label"},description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},secondaryLabel:{defaultValue:null,description:"",name:"secondaryLabel",required:!1,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:"",name:"hideOptionalLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldLabel.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"packages/react/src/field/FieldLabel.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>FieldMessage});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"4zleql",styles:"display:block"},FieldMessage=function FieldMessage(_ref){var children=_ref.children,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:.5,alignItems:"center",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_1__.z$,{color:"error",size:"md","aria-label":"Error","aria-hidden":"false",css:_ref2})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{display:"block",fontWeight:"bold",color:"error",id,children})]})};try{FieldMessage.displayName="FieldMessage",FieldMessage.__docgenInfo={description:"",displayName:"FieldMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldMessage.tsx#FieldMessage"]={docgenInfo:FieldMessage.__docgenInfo,name:"FieldMessage",path:"packages/react/src/field/FieldMessage.tsx#FieldMessage"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gN:()=>Field.gN,i$:()=>FieldContainer.i,J1:()=>FieldHint.J,Qy:()=>FieldLabel.Q,nd:()=>FieldMessage.n,AJ:()=>Field.AJ,s_:()=>Field.s_,useScrollToField:()=>useScrollToField});var Field=__webpack_require__("./packages/react/src/field/Field.tsx"),FieldContainer=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),FieldHint=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),FieldLabel=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),FieldMessage=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),react=__webpack_require__("./node_modules/react/index.js");function useScrollToField(){return(0,react.useCallback)((function(event){(function focusTarget(event){if(!(event.target instanceof HTMLAnchorElement))return!1;var targetId=function getTargetId(event){var target=event.target;if(!(target instanceof HTMLAnchorElement))return;return target.hash.substring(1)}(event);if(!targetId)return!1;var targetEl=document.getElementById(targetId);if(!targetEl)return!1;var _targetEl$querySelect,targetLabel=document.querySelector("label[for='"+targetId+"']"),targetLabelParent=null==targetLabel?void 0:targetLabel.parentElement;"div"===targetEl.tagName.toLowerCase()?null===(_targetEl$querySelect=targetEl.querySelector("input"))||void 0===_targetEl$querySelect||_targetEl$querySelect.focus():targetEl.focus();targetLabelParent?targetLabelParent.scrollIntoView():targetEl.scrollIntoView();return!0})(event)&&event.preventDefault()}),[])}},"./packages/react/src/fieldset/FieldsetHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FieldsetHint});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text/index.ts"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldsetHint=function FieldsetHint(_ref){var children=_ref.children,id=_ref.id;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{id,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(.75)},"",""),children}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{fontSize:"sm",color:"muted",display:"block",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(.75)},"",""),id,children})};try{FieldsetHint.displayName="FieldsetHint",FieldsetHint.__docgenInfo={description:"",displayName:"FieldsetHint",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetHint.tsx#FieldsetHint"]={docgenInfo:FieldsetHint.__docgenInfo,name:"FieldsetHint",path:"packages/react/src/fieldset/FieldsetHint.tsx#FieldsetHint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/fieldset/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fieldset:()=>Fieldset,OB:()=>FieldsetContainer,Qv:()=>FieldsetLegend});var core=__webpack_require__("./packages/react/src/core/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"1bfrawq",styles:"padding:0;margin:0;border:none"},FieldsetContainer=function FieldsetContainer(_ref){var ariaDescribedby=_ref["aria-describedby"],children=_ref.children,id=_ref.id;return(0,emotion_react_jsx_runtime_browser_esm.tZ)("fieldset",{"aria-describedby":ariaDescribedby,id,css:_ref2,children})};try{FieldsetContainer.displayName="FieldsetContainer",FieldsetContainer.__docgenInfo={description:"",displayName:"FieldsetContainer",props:{"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetContainer.tsx#FieldsetContainer"]={docgenInfo:FieldsetContainer.__docgenInfo,name:"FieldsetContainer",path:"packages/react/src/fieldset/FieldsetContainer.tsx#FieldsetContainer"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),FieldsetLegend=function FieldsetLegend(_ref){var children=_ref.children;return(0,react.isValidElement)(children)?(0,emotion_react_jsx_runtime_browser_esm.tZ)("legend",{children}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{as:"legend",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children})};try{FieldsetLegend.displayName="FieldsetLegend",FieldsetLegend.__docgenInfo={description:"",displayName:"FieldsetLegend",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetLegend.tsx#FieldsetLegend"]={docgenInfo:FieldsetLegend.__docgenInfo,name:"FieldsetLegend",path:"packages/react/src/fieldset/FieldsetLegend.tsx#FieldsetLegend"})}catch(__react_docgen_typescript_loader_error){}var FieldsetHint=__webpack_require__("./packages/react/src/fieldset/FieldsetHint.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),FieldsetContent=function FieldsetContent(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",{css:(0,emotion_react_browser_esm.iv)({marginTop:(0,core.mapSpacing)(2)},"",""),children})};try{FieldsetContent.displayName="FieldsetContent",FieldsetContent.__docgenInfo={description:"",displayName:"FieldsetContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetContent.tsx#FieldsetContent"]={docgenInfo:FieldsetContent.__docgenInfo,name:"FieldsetContent",path:"packages/react/src/fieldset/FieldsetContent.tsx#FieldsetContent"})}catch(__react_docgen_typescript_loader_error){}var Fieldset=function Fieldset(_ref){var children=_ref.children,hint=_ref.hint,legend=_ref.legend,id=_ref.id,_useFieldsetIds=useFieldsetIds(id),fieldsetId=_useFieldsetIds.fieldsetId,hintId=_useFieldsetIds.hintId;return(0,emotion_react_jsx_runtime_browser_esm.BX)(FieldsetContainer,{id:fieldsetId,"aria-describedby":hint?hintId:void 0,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(FieldsetLegend,{children:legend}),hint?(0,emotion_react_jsx_runtime_browser_esm.tZ)(FieldsetHint.f,{id:hintId,children:hint}):null,(0,emotion_react_jsx_runtime_browser_esm.tZ)(FieldsetContent,{children})]})},useFieldsetIds=function useFieldsetIds(idProp){var autoId=(0,core.Me)(idProp);return{fieldsetId:idProp||"fieldset-".concat(autoId),hintId:"fieldset-".concat(autoId,"-hint")}};try{Fieldset.displayName="Fieldset",Fieldset.__docgenInfo={description:"",displayName:"Fieldset",props:{hint:{defaultValue:null,description:"Provides extra information about the fieldset.",name:"hint",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"Describes the purpose of the group of fields.",name:"legend",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/Fieldset.tsx#Fieldset"]={docgenInfo:Fieldset.__docgenInfo,name:"Fieldset",path:"packages/react/src/fieldset/Fieldset.tsx#Fieldset"})}catch(__react_docgen_typescript_loader_error){}try{useFieldsetIds.displayName="useFieldsetIds",useFieldsetIds.__docgenInfo={description:"",displayName:"useFieldsetIds",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/Fieldset.tsx#useFieldsetIds"]={docgenInfo:useFieldsetIds.__docgenInfo,name:"useFieldsetIds",path:"packages/react/src/fieldset/Fieldset.tsx#useFieldsetIds"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>textInputStyles,o:()=>TextInput});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextInput(_ref,ref){var label=_ref.label,hideOptionalLabel=_ref.hideOptionalLabel,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,block=_ref.block,_ref$maxWidth=_ref.maxWidth,maxWidth=void 0===_ref$maxWidth?"md":_ref$maxWidth,id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),styles=textInputStyles({block,maxWidth,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_field__WEBPACK_IMPORTED_MODULE_2__.gN,{label,hideOptionalLabel,required:Boolean(required),hint,message,invalid,id,children:function children(a11yProps){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)("input",_objectSpread(_objectSpread({ref,css:styles},a11yProps),{},{type},props))}})})),textInputStyles=function textInputStyles(_ref2){var block=_ref2.block,maxWidth=_ref2.maxWidth,invalid=_ref2.invalid,multiline=_ref2.multiline;return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),margin:0,background:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundBody,borderWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderWidth.lg,borderStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.border,borderRadius:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderRadius,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.font.body},_core__WEBPACK_IMPORTED_MODULE_3__.lB.input.md),maxWidth&&{maxWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.maxWidth.field[maxWidth]}),block&&{maxWidth:"none",display:"block",width:"100%"}),invalid&&{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemError}),multiline&&{paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.5),height:"auto",minHeight:"6rem"}),{},{"&:disabled":{cursor:"not-allowed",opacity:.3},"&:focus":_core__WEBPACK_IMPORTED_MODULE_3__.lB.outline})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"search"'},{value:'"none"'},{value:'"email"'},{value:'"tel"'},{value:'"url"'},{value:'"numeric"'},{value:'"decimal"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"md"},description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-input/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"packages/react/src/text-input/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}try{textInputStyles.displayName="textInputStyles",textInputStyles.__docgenInfo={description:"",displayName:"textInputStyles",props:{block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"md"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-input/TextInput.tsx#textInputStyles"]={docgenInfo:textInputStyles.__docgenInfo,name:"textInputStyles",path:"packages/react/src/text-input/TextInput.tsx#textInputStyles"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextInput:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.o,c:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.c});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-input/TextInput.tsx")}}]);