"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9065],{"./packages/react/src/button/BaseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>BaseButton});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["onClick","type"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var BaseButton=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function BaseButton(_ref,forwardedRef){var onClickProp=_ref.onClick,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),onClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){var _ref$current;null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.focus(),null==onClickProp||onClickProp(event)}),[ref,onClickProp]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("button",function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref:(0,_core__WEBPACK_IMPORTED_MODULE_2__.lq)([ref,forwardedRef]),type,onClick,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.iv)({appearance:"none",background:"transparent",cursor:"pointer",textAlign:"left",border:"none",padding:0,fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontSize:"inherit",lineHeight:"inherit"},"","")},props))}));try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:"",displayName:"BaseButton",props:{"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",name:"aria-expanded",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"Describes the button element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"When true, prevents onClick from firing.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Function to be fired following a click event of the button.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:{value:"button"},description:"Provide an alternate type if the button is within a form.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"packages/react/src/button/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ButtonLink,z:()=>Button});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_loading__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/loading/index.ts"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/button/styles.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["type","block","iconBefore","iconAfter","children","size","loading","loadingLabel","variant"],_excluded2=["children","block","iconBefore","iconAfter","size","variant"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Button=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function Button(_ref,ref){var _ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,_ref$block=_ref.block,block=void 0!==_ref$block&&_ref$block,IconBefore=_ref.iconBefore,IconAfter=_ref.iconAfter,children=_ref.children,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,_ref$loading=_ref.loading,loading=void 0!==_ref$loading&&_ref$loading,_ref$loadingLabel=_ref.loadingLabel,loadingLabel=void 0===_ref$loadingLabel?"Busy":_ref$loadingLabel,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),styles=(0,_styles__WEBPACK_IMPORTED_MODULE_4__.$Y)({block,size,variant});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_BaseButton__WEBPACK_IMPORTED_MODULE_5__.Y,_objectSpread(_objectSpread({ref,css:styles,type},props),{},{children:[IconBefore?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(IconBefore,{size:_styles__WEBPACK_IMPORTED_MODULE_4__.EA[size],weight:"regular"}):null,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)("span",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("span",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.iv)({opacity:loading?0:1},"",""),children}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(ButtonLoadingDots,{loading,label:loadingLabel,size})]}),IconAfter?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(IconAfter,{size:_styles__WEBPACK_IMPORTED_MODULE_4__.EA[size],weight:"regular"}):null]}))})),ButtonLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ButtonLink(_ref2,ref){var children=_ref2.children,_ref2$block=_ref2.block,block=void 0!==_ref2$block&&_ref2$block,IconBefore=_ref2.iconBefore,IconAfter=_ref2.iconAfter,_ref2$size=_ref2.size,size=void 0===_ref2$size?"md":_ref2$size,_ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"primary":_ref2$variant,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref2,_excluded2),styles=(0,_styles__WEBPACK_IMPORTED_MODULE_4__.$Y)({block,size,variant}),Link=(0,_core__WEBPACK_IMPORTED_MODULE_2__.useLinkComponent)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(Link,_objectSpread(_objectSpread({ref,css:styles},props),{},{children:[IconBefore?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(IconBefore,{size:_styles__WEBPACK_IMPORTED_MODULE_4__.EA[size],weight:"regular"}):null,children,IconAfter?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(IconAfter,{size:_styles__WEBPACK_IMPORTED_MODULE_4__.EA[size],weight:"regular"}):null]}))})),_ref4={name:"ejpnc6",styles:"position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)"},ButtonLoadingDots=function ButtonLoadingDots(_ref3){var label=_ref3.label,loading=_ref3.loading,size=_ref3.size;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("span",{"aria-live":"assertive",children:loading?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_loading__WEBPACK_IMPORTED_MODULE_3__.xg,{label,size:_styles__WEBPACK_IMPORTED_MODULE_4__.mq[size],css:_ref4}):null})};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{block:{defaultValue:{value:"false"},description:"If true, the button will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"The icon to display before the buttons children.",name:"iconBefore",required:!1,type:{name:"ComponentType<IconProps>"}},iconAfter:{defaultValue:null,description:"The icon to display after the buttons children.",name:"iconAfter",required:!1,type:{name:"ComponentType<IconProps>"}},size:{defaultValue:{value:"md"},description:"The size of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:{value:"primary"},description:"The variant of the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},loading:{defaultValue:{value:"false"},description:"When true, the button will display a loading indicator.",name:"loading",required:!1,type:{name:"boolean"}},loadingLabel:{defaultValue:{value:"Busy"},description:"Text to read out to assistive technologies when button is loading.",name:"loadingLabel",required:!1,type:{name:"string"}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",name:"aria-expanded",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"Describes the button element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"When true, prevents onClick from firing.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Function to be fired following a click event of the button.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:{value:"button"},description:"Provide an alternate type if the button is within a form.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/react/src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{ButtonLink.displayName="ButtonLink",ButtonLink.__docgenInfo={description:"",displayName:"ButtonLink",props:{block:{defaultValue:{value:"false"},description:"If true, the button will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"The icon to display before the buttons children.",name:"iconBefore",required:!1,type:{name:"ComponentType<IconProps>"}},iconAfter:{defaultValue:null,description:"The icon to display after the buttons children.",name:"iconAfter",required:!1,type:{name:"ComponentType<IconProps>"}},size:{defaultValue:{value:"md"},description:"The size of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},variant:{defaultValue:{value:"primary"},description:"The variant of the button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/Button.tsx#ButtonLink"]={docgenInfo:ButtonLink.__docgenInfo,name:"ButtonLink",path:"packages/react/src/button/Button.tsx#ButtonLink"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/styles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>buttonStyles,EA:()=>iconSize,mq:()=>loadingSize});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var variants={primary:{background:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction,borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction,color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundBody,textDecoration:"none","&:not(:disabled):hover":_objectSpread({background:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText,borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText,color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundBody},_core__WEBPACK_IMPORTED_MODULE_1__.lB.underline)},secondary:{background:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundBody,borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction,color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction,textDecoration:"none","&:not(:disabled):hover":_objectSpread({background:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundBody,borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText,color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText},_core__WEBPACK_IMPORTED_MODULE_1__.lB.underline)},tertiary:_objectSpread(_objectSpread({background:"transparent",borderColor:"transparent",color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction},_core__WEBPACK_IMPORTED_MODULE_1__.lB.underline),{},{"&:not(:disabled):hover":{background:"transparent",borderColor:"transparent",color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText,textDecoration:"none"}}),text:_objectSpread(_objectSpread({height:"auto",paddingLeft:0,paddingRight:0,borderWidth:0,background:"transparent",color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction},_core__WEBPACK_IMPORTED_MODULE_1__.lB.underline),{},{"&:not(:disabled):hover":{background:"transparent",color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText,textDecoration:"none"}})},sizes={sm:_objectSpread(_objectSpread({},_core__WEBPACK_IMPORTED_MODULE_1__.lB.input.sm),{},{gap:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.25),paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.75),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.75)}),md:_objectSpread(_objectSpread({},_core__WEBPACK_IMPORTED_MODULE_1__.lB.input.md),{},{gap:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.5),paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)})},iconSize={sm:"sm",md:"md"},loadingSize={sm:"sm",md:"md"};function buttonStyles(_ref){var block=_ref.block,variant=_ref.variant,size=_ref.size;return _objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",position:"relative",display:block?"flex":"inline-flex",alignItems:"center",justifyContent:"center",borderWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderWidth.lg,borderStyle:"solid",borderRadius:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderRadius,cursor:"pointer",fontFamily:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.font.body,margin:0,textAlign:"center"},block&&{width:"100%"}),{},{"&:disabled":{cursor:"not-allowed",opacity:.3},"&:focus":_core__WEBPACK_IMPORTED_MODULE_1__.lB.outline},sizes[size]),variants[variant])}try{buttonStyles.displayName="buttonStyles",buttonStyles.__docgenInfo={description:"",displayName:"buttonStyles",props:{block:{defaultValue:null,description:"",name:"block",required:!0,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/styles.tsx#buttonStyles"]={docgenInfo:buttonStyles.__docgenInfo,name:"buttonStyles",path:"packages/react/src/button/styles.tsx#buttonStyles"})}catch(__react_docgen_typescript_loader_error){}}}]);