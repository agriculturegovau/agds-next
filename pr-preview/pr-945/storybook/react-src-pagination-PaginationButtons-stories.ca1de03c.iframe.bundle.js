"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9239],{"./packages/react/src/pagination/PaginationButtons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomLimit:()=>CustomLimit,ManyPages:()=>ManyPages,OnDark:()=>OnDark,OnLight:()=>OnLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_PaginationButtons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/pagination/PaginationButtons.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"navigation/Pagination/PaginationButtons",component:_PaginationButtons__WEBPACK_IMPORTED_MODULE_3__.e};var Template=function Template(props){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5),currentPage=_useState[0],setCurrentPage=_useState[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_PaginationButtons__WEBPACK_IMPORTED_MODULE_3__.e,_objectSpread(_objectSpread({},props),{},{currentPage,onChange:setCurrentPage}))},OnLight=function OnLight(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(Template,_objectSpread({},args))};OnLight.args={totalPages:10};var OnDark=function OnDark(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,{palette:"dark",background:"body",padding:1.5,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(Template,_objectSpread({},args))})};OnDark.args={totalPages:10};var ManyPages=Template.bind({});ManyPages.args={totalPages:300};var CustomLimit=Template.bind({});CustomLimit.args={windowLimit:5,totalPages:300},OnLight.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Template {...args} />\n)"}},OnLight.parameters),OnDark.parameters=_objectSpread({storySource:{source:'(args) => (\n\t<Box palette="dark" background="body" padding={1.5}>\n\t\t<Template {...args} />\n\t</Box>\n)'}},OnDark.parameters),ManyPages.parameters=_objectSpread({storySource:{source:"(props) => {\n\tconst [currentPage, setCurrentPage] = useState(5);\n\treturn (\n\t\t<PaginationButtons\n\t\t\t{...props}\n\t\t\tcurrentPage={currentPage}\n\t\t\tonChange={setCurrentPage}\n\t\t/>\n\t);\n}"}},ManyPages.parameters),CustomLimit.parameters=_objectSpread({storySource:{source:"(props) => {\n\tconst [currentPage, setCurrentPage] = useState(5);\n\treturn (\n\t\t<PaginationButtons\n\t\t\t{...props}\n\t\t\tcurrentPage={currentPage}\n\t\t\tonChange={setCurrentPage}\n\t\t/>\n\t);\n}"}},CustomLimit.parameters);var __namedExportsOrder=["OnLight","OnDark","ManyPages","CustomLimit"]},"./packages/react/src/pagination/PaginationButtons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>PaginationButtons});var _usePagination__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/pagination/usePagination.ts"),_PaginationContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/pagination/PaginationContainer.tsx"),_PaginationItemDirection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/pagination/PaginationItemDirection.tsx"),_PaginationItemSeparator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/pagination/PaginationItemSeparator.tsx"),_PaginationItemPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/pagination/PaginationItemPage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function PaginationButtons(_ref){var _ref$ariaLabel=_ref["aria-label"],ariaLabel=void 0===_ref$ariaLabel?"pagination":_ref$ariaLabel,onChange=_ref.onChange,currentPage=_ref.currentPage,totalPages=_ref.totalPages,_ref$windowLimit=_ref.windowLimit,windowLimit=void 0===_ref$windowLimit?3:_ref$windowLimit,pagination=(0,_usePagination__WEBPACK_IMPORTED_MODULE_4__.h)({currentPage,totalPages,windowLimit});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationContainer__WEBPACK_IMPORTED_MODULE_0__.f,{"aria-label":ariaLabel,children:pagination.map((function(item,idx){switch(item.type){case"direction":return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationItemDirection__WEBPACK_IMPORTED_MODULE_1__.W,{direction:item.direction,onClick:function onClick(){return onChange(item.pageNumber)}},item.direction);case"page":return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationItemPage__WEBPACK_IMPORTED_MODULE_3__.Y,{pageNumber:item.pageNumber,onClick:function onClick(){return onChange(item.pageNumber)},isActive:item.isActive},idx);case"separator":return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationItemSeparator__WEBPACK_IMPORTED_MODULE_2__.a,{},idx);default:return null}}))})}try{PaginationButtons.displayName="PaginationButtons",PaginationButtons.__docgenInfo={description:"",displayName:"PaginationButtons",props:{"aria-label":{defaultValue:null,description:"Describes the navigation element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback for when a list item is pressed.",name:"onChange",required:!0,type:{name:"(pageNumber: number) => void"}},currentPage:{defaultValue:null,description:"The current page number.",name:"currentPage",required:!0,type:{name:"number"}},windowLimit:{defaultValue:{value:"3"},description:"Controls how many list items are shown.",name:"windowLimit",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"The total number of pages.",name:"totalPages",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/pagination/PaginationButtons.tsx#PaginationButtons"]={docgenInfo:PaginationButtons.__docgenInfo,name:"PaginationButtons",path:"packages/react/src/pagination/PaginationButtons.tsx#PaginationButtons"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-link/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>TextLink});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var TextLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextLink(props,ref){var Link=(0,_core__WEBPACK_IMPORTED_MODULE_3__.yF)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(Link,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,css:[_box__WEBPACK_IMPORTED_MODULE_2__.Wf,_box__WEBPACK_IMPORTED_MODULE_2__.j4,"","","",""]},props))}));try{TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-link/TextLink.tsx#TextLink"]={docgenInfo:TextLink.__docgenInfo,name:"TextLink",path:"packages/react/src/text-link/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-link/TextLinkExternal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>TextLinkExternal});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TextLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TextLinkExternal=function TextLinkExternal(_ref){var children=_ref.children,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_TextLink__WEBPACK_IMPORTED_MODULE_4__.h,_objectSpread(_objectSpread({target:"_blank",rel:"noopener"},props),{},{children:[children,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_a11y__WEBPACK_IMPORTED_MODULE_1__.e,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_2__.h0,{weight:"regular",size:"sm",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)({position:"relative",top:3,marginLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.XH)(.25)},"","")})]}))};try{TextLinkExternal.displayName="TextLinkExternal",TextLinkExternal.__docgenInfo={description:"",displayName:"TextLinkExternal",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-link/TextLinkExternal.tsx#TextLinkExternal"]={docgenInfo:TextLinkExternal.__docgenInfo,name:"TextLinkExternal",path:"packages/react/src/text-link/TextLinkExternal.tsx#TextLinkExternal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextLink:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.h,z:()=>_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__.z});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/TextLinkExternal.tsx")}}]);