"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9885],{"./packages/react/src/content/Content.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_prose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/prose/index.ts"),_Content__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/content/Content.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"layout/Content/Content",component:_Content__WEBPACK_IMPORTED_MODULE_2__.V};var Basic=function Basic(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_Content__WEBPACK_IMPORTED_MODULE_2__.V,_objectSpread(_objectSpread({},args),{},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_prose__WEBPACK_IMPORTED_MODULE_1__.Prose,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("h2",{children:"Content heading"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus lacinia libero."})]})}))};Basic.args={background:"shade"},Basic.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Content {...args}>\n\t\t<Prose>\n\t\t\t<h2>Content heading</h2>\n\t\t\t<p>\n\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at\n\t\t\t\tarcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit.\n\t\t\t\tOrci varius natoque penatibus et magnis dis parturient montes, nascetur\n\t\t\t\tridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum\n\t\t\t\tvolutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id\n\t\t\t\tvarius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a\n\t\t\t\tante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie\n\t\t\t\tlacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus\n\t\t\t\tlacinia libero.\n\t\t\t</p>\n\t\t</Prose>\n\t</Content>\n)"}},Basic.parameters);var __namedExportsOrder=["Basic"]},"./packages/react/src/content/BaseContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>BaseContent});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/content/context.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/content/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function BaseContent(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"section":_ref$as,id=_ref.id,className=_ref.className,tabIndex=_ref.tabIndex,palette=_ref.palette,background=_ref.background,children=_ref.children,paddingY=_ref.paddingY;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_context__WEBPACK_IMPORTED_MODULE_2__._.Provider,{value:paddingY,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{as,justifyContent:"center",palette,background,id,className,tabIndex,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{width:"100%",maxWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.maxWidth.container,paddingTop:_utils__WEBPACK_IMPORTED_MODULE_3__.D[paddingY].top,paddingBottom:_utils__WEBPACK_IMPORTED_MODULE_3__.D[paddingY].bottom,paddingX:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.containerPadding,children})})})}try{BaseContent.displayName="BaseContent",BaseContent.__docgenInfo={description:"",displayName:"BaseContent",props:{as:{defaultValue:{value:"section"},description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "bodyAlt" | "shade" | "shadeAlt">'}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!0,type:{name:"enum",value:[{value:'"section"'},{value:'"none"'},{value:'"page"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/content/BaseContent.tsx#BaseContent"]={docgenInfo:BaseContent.__docgenInfo,name:"BaseContent",path:"packages/react/src/content/BaseContent.tsx#BaseContent"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/content/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Content});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_BaseContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/content/BaseContent.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children","as"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Content(_ref){var children=_ref.children,_ref$as=_ref.as,as=void 0===_ref$as?"div":_ref$as,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_BaseContent__WEBPACK_IMPORTED_MODULE_1__.L,_objectSpread(_objectSpread({as},props),{},{paddingY:"none",children}))}try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "bodyAlt" | "shade" | "shadeAlt">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/content/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"packages/react/src/content/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/content/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>ContentSpacingContext,z:()=>useContentSpacing});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ContentSpacingContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useContentSpacing=function useContentSpacing(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ContentSpacingContext);if(void 0===value)throw new Error("Context not found");return value}},"./packages/react/src/content/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>paddingYMap});var paddingYMap={none:{top:0,bottom:0},section:{top:{xs:3,md:4},bottom:{xs:3,md:4}},page:{top:{xs:2,md:3},bottom:{xs:3,md:4}}}}}]);