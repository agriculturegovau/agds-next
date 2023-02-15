"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[6020],{"./packages/react/src/control-input/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Disabled:()=>Disabled,Invalid:()=>Invalid,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/control-input/Checkbox.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/Checkbox",component:_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X};var Template=function Template(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,_objectSpread({},args))},Basic=Template.bind({});Basic.args={children:"Example",disabled:!1};var Size=Template.bind({});Size.args={size:"sm",children:"Small example",disabled:!1};var Disabled=Template.bind({});Disabled.args={children:"Disabled",disabled:!0};var Invalid=Template.bind({});Invalid.args={children:"Invalid",invalid:!0,disabled:!1},Basic.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Checkbox {...args} />\n)"}},Basic.parameters),Size.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Checkbox {...args} />\n)"}},Size.parameters),Disabled.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Checkbox {...args} />\n)"}},Disabled.parameters),Invalid.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Checkbox {...args} />\n)"}},Invalid.parameters);var __namedExportsOrder=["Basic","Size","Disabled","Invalid"]},"./packages/react/src/a11y/ExternalLinkCallout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ExternalLinkCallout});var _VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ExternalLinkCallout=function ExternalLinkCallout(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__.T,{children:", opens in a new tab"})}},"./packages/react/src/a11y/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>visuallyHiddenStyles,T:()=>VisuallyHidden});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),VisuallyHidden=function VisuallyHidden(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("span",{css:visuallyHiddenStyles,children})},visuallyHiddenStyles={clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:1};try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/a11y/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"packages/react/src/a11y/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/a11y/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.J,VisuallyHidden:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.T,e:()=>_ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__.e});var _ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/ExternalLinkCallout.tsx"),_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx")},"./packages/react/src/control-input/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),iconSize=(core.lB.control.sm,core.lB.control.md,{sm:1,md:1.5}),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var CheckboxIndicator=function CheckboxIndicator(_ref){var disabled=_ref.disabled,invalid=_ref.invalid,size=_ref.size,_packs$control$size=core.lB.control[size],width=_packs$control$size.width,height=_packs$control$size.height,borderWidth=_packs$control$size.borderWidth;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"span",justifyContent:"center",alignItems:"center",width,height,flexShrink:0,css:(0,emotion_react_browser_esm.iv)(_objectSpread({borderWidth,borderStyle:"solid",borderColor:core.boxPalette.border,opacity:disabled?.3:void 0},invalid&&{borderColor:core.boxPalette.systemError,backgroundColor:core.boxPalette.systemErrorMuted}),"",""),background:"body",color:"text",rounded:!0,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(CheckboxIcon,{size:iconSize[size]})})},CheckboxIcon=function CheckboxIcon(_ref2){var size=_ref2.size;return(0,emotion_react_jsx_runtime_browser_esm.tZ)("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",clipRule:"evenodd",xmlns:"http://www.w3.org/2000/svg",focusable:"false",css:(0,emotion_react_browser_esm.iv)({width:(0,core.XH)(size),height:(0,core.XH)(size),display:"none",color:"currentcolor",fill:"none",stroke:"currentColor"},"",""),role:"img",children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M3 13.4286L8.4 19L21 6",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})})};try{CheckboxIndicator.displayName="CheckboxIndicator",CheckboxIndicator.__docgenInfo={description:"",displayName:"CheckboxIndicator",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/control-input/CheckboxIndicator.tsx#CheckboxIndicator"]={docgenInfo:CheckboxIndicator.__docgenInfo,name:"CheckboxIndicator",path:"packages/react/src/control-input/CheckboxIndicator.tsx#CheckboxIndicator"})}catch(__react_docgen_typescript_loader_error){}var ControlInput=__webpack_require__("./packages/react/src/control-input/ControlInput.tsx"),ControlContainer=__webpack_require__("./packages/react/src/control-input/ControlContainer.tsx"),ControlLabel=__webpack_require__("./packages/react/src/control-input/ControlLabel.tsx"),ControlGroupProvider=__webpack_require__("./packages/react/src/control-input/ControlGroupProvider.tsx"),_excluded=["children","disabled","invalid","size"];function Checkbox_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Checkbox_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Checkbox_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Checkbox_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Checkbox=(0,react.forwardRef)((function Checkbox(_ref,ref){var children=_ref.children,disabled=_ref.disabled,invalidProp=_ref.invalid,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,props=(0,objectWithoutProperties.Z)(_ref,_excluded),controlGroupContext=(0,ControlGroupProvider.j)(),invalid=invalidProp||(null==controlGroupContext?void 0:controlGroupContext.invalid);return(0,emotion_react_jsx_runtime_browser_esm.BX)(ControlContainer.g,{disabled,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ControlInput.F,Checkbox_objectSpread({ref,type:"checkbox",disabled,"aria-invalid":invalid?"true":void 0,"aria-describedby":invalid?null==controlGroupContext?void 0:controlGroupContext.messageId:void 0},props)),(0,emotion_react_jsx_runtime_browser_esm.tZ)(CheckboxIndicator,{disabled,invalid,size}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ControlLabel.J,{disabled,size,children})]})}));try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string | number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string | number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"The size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/control-input/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"packages/react/src/control-input/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/control-input/ControlContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>ControlContainer});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ControlContainer=function ControlContainer(_ref){var children=_ref.children,disabled=_ref.disabled;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{as:"label",alignItems:"flex-start",color:"text",gap:.5,inline:!0,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv)({cursor:disabled?"not-allowed":"pointer"},"",""),children})};try{ControlContainer.displayName="ControlContainer",ControlContainer.__docgenInfo={description:"",displayName:"ControlContainer",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/control-input/ControlContainer.tsx#ControlContainer"]={docgenInfo:ControlContainer.__docgenInfo,name:"ControlContainer",path:"packages/react/src/control-input/ControlContainer.tsx#ControlContainer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/control-input/ControlGroupProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>ControlGroupProvider,j:()=>useControlGroupContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ControlGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useControlGroupContext=function useControlGroupContext(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ControlGroupContext)};function ControlGroupProvider(_ref){var children=_ref.children,messageId=_ref.messageId,invalid=_ref.invalid;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(ControlGroupContext.Provider,{value:{messageId,invalid},children})}try{ControlGroupProvider.displayName="ControlGroupProvider",ControlGroupProvider.__docgenInfo={description:"",displayName:"ControlGroupProvider",props:{messageId:{defaultValue:null,description:"The ID of the `ControlGroup` message element.",name:"messageId",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"The value of the `invalid` prop from the `ControlGroup` component.",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/control-input/ControlGroupProvider.tsx#ControlGroupProvider"]={docgenInfo:ControlGroupProvider.__docgenInfo,name:"ControlGroupProvider",path:"packages/react/src/control-input/ControlGroupProvider.tsx#ControlGroupProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/control-input/ControlInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ControlInput});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/a11y/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ControlInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ControlInput(props,ref){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("input",_objectSpread({ref,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.iv)(_objectSpread(_objectSpread({},_a11y__WEBPACK_IMPORTED_MODULE_2__.J),{},{"&:focus ~ span:first-of-type":_core__WEBPACK_IMPORTED_MODULE_3__.lB.outline,"&:checked ~ span > *":{display:"block"}}),"","")},props))}));try{ControlInput.displayName="ControlInput",ControlInput.__docgenInfo={description:"",displayName:"ControlInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/control-input/ControlInput.tsx#ControlInput"]={docgenInfo:ControlInput.__docgenInfo,name:"ControlInput",path:"packages/react/src/control-input/ControlInput.tsx#ControlInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/control-input/ControlLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>ControlLabel});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),paddingTopMap={sm:0,md:"0.2rem"},ControlLabel=function ControlLabel(_ref){var children=_ref.children,disabled=_ref.disabled,size=_ref.size,paddingTop=paddingTopMap[size];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{flexGrow:1,color:disabled?"muted":"text",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv)({paddingTop},"",""),children})};try{ControlLabel.displayName="ControlLabel",ControlLabel.__docgenInfo={description:"",displayName:"ControlLabel",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/control-input/ControlLabel.tsx#ControlLabel"]={docgenInfo:ControlLabel.__docgenInfo,name:"ControlLabel",path:"packages/react/src/control-input/ControlLabel.tsx#ControlLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var _ref2={name:"172op4w",styles:"margin-top:0;margin-bottom:0"},Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.yV)((function Text(_ref,ref){var _ref$as=_ref.as,as=void 0===_ref$as?"span":_ref$as,_ref$color=_ref.color,color=void 0===_ref$color?"text":_ref$color,_ref$fontFamily=_ref.fontFamily,fontFamily=void 0===_ref$fontFamily?"body":_ref$fontFamily,_ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?"normal":_ref$fontWeight,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,as,css:_ref2,color,fontFamily,fontSize,fontWeight,lineHeight},props))}));try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ResponsiveProp<"text" | "focus" | "inherit" | "action" | "muted" | "accent" | "error" | "success" | "warning" | "info">'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "shade" | "bodyAlt" | "shadeAlt">'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ResponsiveProp<"border" | "muted">'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderX:{defaultValue:null,description:"",name:"borderX",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderY:{defaultValue:null,description:"",name:"borderY",required:!1,type:{name:"ResponsiveProp<boolean>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},highContrastOutline:{defaultValue:null,description:"If true, a solid outline will be visible in windows high contrast mode.",name:"highContrastOutline",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'ResponsiveProp<"normal" | "bold">'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:'ResponsiveProp<"body" | "monospace">'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ResponsiveProp<"block" | "table" | "none" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | ... 4 more ... | "inline-grid">'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveProp<number>"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnSpan:{defaultValue:null,description:"",name:"gridColumnSpan",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnStart:{defaultValue:null,description:"",name:"gridColumnStart",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnEnd:{defaultValue:null,description:"",name:"gridColumnEnd",required:!1,type:{name:"ResponsiveProp<number>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "stretch" | "baseline">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<Spacing>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<Spacing>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/react/src/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.x});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);