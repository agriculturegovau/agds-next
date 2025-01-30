"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[5033],{"./packages/react/src/control-group/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ControlGroup:()=>_ControlGroup__WEBPACK_IMPORTED_MODULE_0__.t});var _ControlGroup__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/control-group/ControlGroup.tsx")},"./packages/react/src/fieldset/FieldsetHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>FieldsetHint});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text/index.ts"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FieldsetHint=({children,id})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)("div",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75)},"",""),id,children}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{color:"muted",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.QY)(.75)},"",""),display:"block",fontSize:"sm",id,children})},"./packages/react/src/fieldset/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fieldset:()=>Fieldset,UJ:()=>FieldsetContainer,u4:()=>FieldsetLegend});var core=__webpack_require__("./packages/react/src/core/index.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FieldsetContainer=({"aria-describedby":ariaDescribedby,children,id})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-describedby":ariaDescribedby,as:"fieldset",id,children});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),src_text=__webpack_require__("./packages/react/src/text/index.ts");const FieldsetLegend=({children})=>(0,react.isValidElement)(children)?(0,emotion_react_jsx_runtime_browser_esm.Y)("legend",{children}):(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{as:"legend",fontSize:"lg",fontWeight:"bold",lineHeight:"heading",children});var FieldsetHint=__webpack_require__("./packages/react/src/fieldset/FieldsetHint.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const FieldsetContent=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:(0,emotion_react_browser_esm.AH)({marginTop:(0,core.QY)(2)},"",""),children}),Fieldset=({children,hint,legend,id})=>{const{fieldsetId,hintId}=useFieldsetIds(id);return(0,emotion_react_jsx_runtime_browser_esm.FD)(FieldsetContainer,{"aria-describedby":hint?hintId:void 0,id:fieldsetId,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(FieldsetLegend,{children:legend}),hint?(0,emotion_react_jsx_runtime_browser_esm.Y)(FieldsetHint.E,{id:hintId,children:hint}):null,(0,emotion_react_jsx_runtime_browser_esm.Y)(FieldsetContent,{children})]})},useFieldsetIds=idProp=>{const autoId=(0,core.Bi)(idProp);return{fieldsetId:idProp||`fieldset-${autoId}`,hintId:`fieldset-${autoId}-hint`}}},"./packages/react/src/radio/Radio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Radio});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),ControlGroupProvider=__webpack_require__("./packages/react/src/control-group/ControlGroupProvider.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function RadioIndicator({disabled,invalid,size}){const{width,height,borderWidth}=core.tm.control[size];return(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignItems:"center",as:"span",css:(0,emotion_react_browser_esm.AH)(_objectSpread(_objectSpread({borderWidth,borderRadius:"100%",borderStyle:"solid",borderColor:core.boxPalette.border,backgroundColor:core.boxPalette.backgroundBody},disabled&&{color:core.boxPalette.borderMuted,borderColor:core.boxPalette.borderMuted,backgroundColor:core.boxPalette.backgroundShade,"@media (forced-colors: active)":{borderColor:"GrayText",color:"GrayText"}}),invalid&&{borderColor:core.boxPalette.systemError,backgroundColor:core.boxPalette.systemErrorMuted}),"",""),flexShrink:0,height,justifyContent:"center",rounded:!0,width,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"span",css:(0,emotion_react_browser_esm.AH)(_objectSpread({borderRadius:"100%",backgroundColor:core.boxPalette.foregroundText,"@media (forced-colors: active)":{backgroundColor:"MenuText"}},disabled&&{backgroundColor:core.boxPalette.borderMuted,"@media (forced-colors: active)":{backgroundColor:"GrayText"}}),"",""),height:"calc(100% - 0.5rem)",highContrastOutline:!0,width:"calc(100% - 0.5rem)"})})}var a11y=__webpack_require__("./packages/react/src/a11y/index.ts");function RadioInput_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function RadioInput_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?RadioInput_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):RadioInput_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const RadioInput=(0,react.forwardRef)((function RadioInput(props,ref){return(0,emotion_react_jsx_runtime_browser_esm.Y)("input",RadioInput_objectSpread({css:(0,emotion_react_browser_esm.AH)(RadioInput_objectSpread(RadioInput_objectSpread({},a11y.O_),{},{"&:focus ~ span:first-of-type":core.tm.outline,"~ span > span":{opacity:0},"&:checked ~ span > span":{opacity:1}}),"",""),ref},props))})),RadioContainer=({children,disabled,htmlFor})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignItems:"flex-start",as:"label",color:"text",css:(0,emotion_react_browser_esm.AH)({cursor:disabled?"not-allowed":"pointer"},"",""),gap:.5,htmlFor,inline:!0,children});var src_text=__webpack_require__("./packages/react/src/text/index.ts");const paddingTopMap={sm:0,md:"0.2rem"};function RadioLabel({children,disabled,size}){const paddingTop=paddingTopMap[size];return(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:disabled?"muted":"text",css:(0,emotion_react_browser_esm.AH)({paddingTop},"",""),flexGrow:1,children})}const _excluded=["children","disabled","invalid","name","required","size"];function Radio_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Radio_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Radio_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Radio_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Radio=(0,react.forwardRef)((function Radio(_ref,ref){let{children,disabled,invalid:invalidProp,name:nameProp,required:requiredProp,size="md"}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const id=function useRadioId(idProp){const autoId=(0,core.Bi)(idProp);return idProp||`radio-${autoId}`}(props.id),controlGroupContext=(0,ControlGroupProvider.x)(),invalid="boolean"==typeof invalidProp?invalidProp:controlGroupContext?.invalid,required="boolean"==typeof requiredProp?requiredProp:controlGroupContext?.required,name=nameProp||controlGroupContext?.name;return(0,emotion_react_jsx_runtime_browser_esm.FD)(RadioContainer,{disabled,htmlFor:id,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(RadioInput,Radio_objectSpread({"aria-describedby":invalid?controlGroupContext?.messageId:void 0,"aria-invalid":invalid||void 0,"aria-required":required,disabled,id,name,ref,type:"radio"},props)),(0,emotion_react_jsx_runtime_browser_esm.Y)(RadioIndicator,{disabled,invalid,size}),(0,emotion_react_jsx_runtime_browser_esm.Y)(RadioLabel,{disabled,size,children})]})}))},"./packages/react/src/radio/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>_Radio__WEBPACK_IMPORTED_MODULE_0__.s});var _Radio__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/radio/Radio.tsx")},"./packages/react/src/switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Switch});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts");const switchTrackStyles={sm:{borderWidth:core.tm.control.sm.borderWidth,height:core.tm.control.sm.height,thumbCheckedPos:"1.25rem",width:"2.75rem"},md:{borderWidth:core.tm.control.md.borderWidth,height:core.tm.control.md.height,thumbCheckedPos:"1.5rem",width:"3.5rem"}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref={name:"sfltnx",styles:"position:relative;flex-shrink:0"};const SwitchContainer=({children,size})=>{const{width,height}=switchTrackStyles[size];return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"span",css:_ref,height,width,children})},SwitchTrack=({checked,size})=>{const{borderWidth,height}=switchTrackStyles[size];return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"span",css:(0,emotion_react_browser_esm.AH)(_objectSpread({borderWidth,borderStyle:"solid",borderRadius:height,position:"absolute",inset:0},checked?{backgroundColor:core.boxPalette.selected,borderColor:core.boxPalette.selected}:{borderColor:core.boxPalette.border,backgroundColor:core.boxPalette.backgroundShade}),"","")})},ICON_SIZE_MAP={sm:{prop:"sm",actual:"0.875rem"},md:{prop:"md",actual:"1.375rem"}},SwitchThumb=({checked,size})=>{const{thumbCheckedPos,borderWidth,height:thumbSize}=switchTrackStyles[size],iconSize=ICON_SIZE_MAP[size];return(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignItems:"center",as:"span",background:"body",css:(0,emotion_react_browser_esm.AH)({borderRadius:thumbSize,borderWidth,borderStyle:"solid",borderColor:checked?core.boxPalette.selected:core.boxPalette.foregroundAction,position:"absolute",transition:`left ${core.tokens.transition.duration}ms ${core.tokens.transition.timingFunction}`,left:checked?thumbCheckedPos:"0rem"},"",""),height:thumbSize,justifyContent:"center",width:thumbSize,children:checked&&(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.Sr,{color:"selected",css:(0,emotion_react_browser_esm.AH)({width:iconSize.actual,height:iconSize.actual},"",""),size:iconSize.prop,weight:"bold"})})},_excluded=["size","label","onChange","checked"];function Switch_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Switch_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Switch_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Switch_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Switch=_ref=>{let{size="md",label,onChange,checked}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center",as:"label",css:(0,emotion_react_browser_esm.AH)({width:"fit-content",cursor:"pointer","&:hover":{"& input:not(:focus) ~ span:first-of-type":{borderColor:core.boxPalette.foregroundText,backgroundColor:checked?core.boxPalette.foregroundText:core.boxPalette.backgroundShadeAlt},"& input:not(:focus) ~ span:last-of-type":{borderColor:core.boxPalette.foregroundText,"& svg":{stroke:checked?core.boxPalette.foregroundText:void 0}}}},"",""),gap:.75,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(SwitchContainer,{size,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("input",{"aria-checked":checked,"aria-controls":props["aria-controls"],checked,css:(0,emotion_react_browser_esm.AH)(Switch_objectSpread(Switch_objectSpread({},a11y.O_),{},{"&:focus-visible ~ span:first-of-type":core.tm.outline}),"",""),onChange:()=>onChange(!checked),role:"switch",type:"checkbox"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SwitchTrack,{checked,size}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SwitchThumb,{checked,size})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{children:label})]})}},"./packages/react/src/switch/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>_Switch__WEBPACK_IMPORTED_MODULE_0__.d});var _Switch__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/switch/Switch.tsx")}}]);