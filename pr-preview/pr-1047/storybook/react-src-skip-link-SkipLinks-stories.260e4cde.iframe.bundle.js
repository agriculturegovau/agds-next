"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[633],{"./packages/react/src/skip-link/SkipLinks.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Modular:()=>Modular,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_prose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/prose/index.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/box/index.ts"),_SkipLinkItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/skip-link/SkipLinkItem.tsx"),_SkipLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/skip-link/SkipLinks.tsx"),_SkipLinkContainer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/skip-link/SkipLinkContainer.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"navigation/SkipLinks",component:_SkipLinks__WEBPACK_IMPORTED_MODULE_5__.O,subcomponents:{SkipLinkContainer:_SkipLinkContainer__WEBPACK_IMPORTED_MODULE_6__.g,SkipLinkItem:_SkipLinkItem__WEBPACK_IMPORTED_MODULE_4__._}};var Basic=function Basic(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_SkipLinks__WEBPACK_IMPORTED_MODULE_5__.O,{links:[{href:"#main-content",label:"Skip to main content"},{href:"#main-nav",label:"Skip to main navigation"}]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(ExampleContent,{})]})},Modular=function Modular(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_SkipLinkContainer__WEBPACK_IMPORTED_MODULE_6__.g,{"aria-label":"skip links",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_SkipLinkItem__WEBPACK_IMPORTED_MODULE_4__._,{href:"#main-content",children:"Skip to main content"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_SkipLinkItem__WEBPACK_IMPORTED_MODULE_4__._,{href:"#main-nav",children:"Skip to main navigation"})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(ExampleContent,{})]})},_ref={name:"1nob2mz",styles:"&:focus{outline:none;}"},_ref2={name:"1nob2mz",styles:"&:focus{outline:none;}"},ExampleContent=function ExampleContent(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_prose__WEBPACK_IMPORTED_MODULE_2__.Prose,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_box__WEBPACK_IMPORTED_MODULE_3__.Stack,{gap:4,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("p",{children:"This example space contains a visually hidden feature."}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("nav",{id:"main-nav",tabIndex:-1,css:_ref,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("ul",{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("li",{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("a",{href:"#",children:"Some navigation"})})})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)("main",{id:"main-content",tabIndex:-1,css:_ref2,children:["Some content here with ",(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("a",{href:"#",children:"an example link"})]})]})})};Basic.parameters=_objectSpread({storySource:{source:"() => (\n\t<Fragment>\n\t\t<SkipLinks\n\t\t\tlinks={[\n\t\t\t\t{ href: '#main-content', label: 'Skip to main content' },\n\t\t\t\t{ href: '#main-nav', label: 'Skip to main navigation' },\n\t\t\t]}\n\t\t/>\n\t\t<ExampleContent />\n\t</Fragment>\n)"}},Basic.parameters),Modular.parameters=_objectSpread({storySource:{source:'() => (\n\t<Fragment>\n\t\t<SkipLinkContainer aria-label="skip links">\n\t\t\t<SkipLinkItem href="#main-content">Skip to main content</SkipLinkItem>\n\t\t\t<SkipLinkItem href="#main-nav">Skip to main navigation</SkipLinkItem>\n\t\t</SkipLinkContainer>\n\t\t<ExampleContent />\n\t</Fragment>\n)'}},Modular.parameters);var __namedExportsOrder=["Basic","Modular"]},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ButtonGroup=function ButtonGroup(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/react/src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.$Y,Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.h,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.Z,Yd:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.Y});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.tsx")},"./packages/react/src/skip-link/SkipLinkContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>SkipLinkContainer});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),SkipLinkContainer=function SkipLinkContainer(_ref){var children=_ref.children,ariaLabel=_ref["aria-label"];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("nav",{"aria-label":ariaLabel,children})};try{SkipLinkContainer.displayName="SkipLinkContainer",SkipLinkContainer.__docgenInfo={description:"",displayName:"SkipLinkContainer",props:{"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skip-link/SkipLinkContainer.tsx#SkipLinkContainer"]={docgenInfo:SkipLinkContainer.__docgenInfo,name:"SkipLinkContainer",path:"packages/react/src/skip-link/SkipLinkContainer.tsx#SkipLinkContainer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skip-link/SkipLinkItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SkipLinkItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/index.ts"),_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/a11y/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),SkipLinkItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function SkipLinkItem(_ref,ref){var children=_ref.children,href=_ref.href;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("a",{ref,href,css:[_a11y__WEBPACK_IMPORTED_MODULE_2__.J,(0,_button__WEBPACK_IMPORTED_MODULE_1__.$Y)({block:!1,size:"md",variant:"primary"}),{position:"absolute","&:focus":{top:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),left:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(1),clip:"auto",clipPath:"none",overflow:"visible",whiteSpace:"normal",width:"auto",zIndex:999}},"","","",""],children})}));try{SkipLinkItem.displayName="SkipLinkItem",SkipLinkItem.__docgenInfo={description:"",displayName:"SkipLinkItem",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skip-link/SkipLinkItem.tsx#SkipLinkItem"]={docgenInfo:SkipLinkItem.__docgenInfo,name:"SkipLinkItem",path:"packages/react/src/skip-link/SkipLinkItem.tsx#SkipLinkItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skip-link/SkipLinks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>SkipLinks});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_SkipLinkContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/skip-link/SkipLinkContainer.tsx"),_SkipLinkItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/skip-link/SkipLinkItem.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["label"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var SkipLinks=function SkipLinks(_ref){var links=_ref.links,_ref$ariaLabel=_ref["aria-label"],ariaLabel=void 0===_ref$ariaLabel?"skip links":_ref$ariaLabel;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_SkipLinkContainer__WEBPACK_IMPORTED_MODULE_3__.g,{"aria-label":ariaLabel,children:links.map((function(_ref2,idx){var label=_ref2.label,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref2,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_SkipLinkItem__WEBPACK_IMPORTED_MODULE_1__._,_objectSpread(_objectSpread({},props),{},{children:label}),idx)}))})};try{SkipLinks.displayName="SkipLinks",SkipLinks.__docgenInfo={description:"",displayName:"SkipLinks",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"{ label: ReactNode; href: string; }[]"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skip-link/SkipLinks.tsx#SkipLinks"]={docgenInfo:SkipLinks.__docgenInfo,name:"SkipLinks",path:"packages/react/src/skip-link/SkipLinks.tsx#SkipLinks"})}catch(__react_docgen_typescript_loader_error){}}}]);