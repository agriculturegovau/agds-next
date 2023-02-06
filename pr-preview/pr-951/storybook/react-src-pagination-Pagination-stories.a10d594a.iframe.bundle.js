"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[8179],{"./packages/react/src/pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomLimit:()=>CustomLimit,ManyPages:()=>ManyPages,OnDark:()=>OnDark,OnLight:()=>OnLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_Pagination__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/pagination/Pagination.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"navigation/Pagination",component:_Pagination__WEBPACK_IMPORTED_MODULE_2__.t};var Template=function Template(props){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_Pagination__WEBPACK_IMPORTED_MODULE_2__.t,_objectSpread(_objectSpread({},props),{},{generateHref:function generateHref(pageNumber){return"#".concat(pageNumber)}}))},OnLight=function OnLight(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(Template,_objectSpread({},args))};OnLight.args={currentPage:5,totalPages:10};var OnDark=function OnDark(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{palette:"dark",background:"body",padding:1.5,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(Template,_objectSpread({},args))})};OnDark.args={currentPage:5,totalPages:10};var ManyPages=Template.bind({});ManyPages.args={currentPage:5,totalPages:300};var CustomLimit=Template.bind({});CustomLimit.args={windowLimit:5,currentPage:5,totalPages:300},OnLight.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Template {...args} />\n)"}},OnLight.parameters),OnDark.parameters=_objectSpread({storySource:{source:'(args) => (\n\t<Box palette="dark" background="body" padding={1.5}>\n\t\t<Template {...args} />\n\t</Box>\n)'}},OnDark.parameters),ManyPages.parameters=_objectSpread({storySource:{source:"(props) => {\n\treturn (\n\t\t<Pagination {...props} generateHref={(pageNumber) => `#${pageNumber}`} />\n\t);\n}"}},ManyPages.parameters),CustomLimit.parameters=_objectSpread({storySource:{source:"(props) => {\n\treturn (\n\t\t<Pagination {...props} generateHref={(pageNumber) => `#${pageNumber}`} />\n\t);\n}"}},CustomLimit.parameters);var __namedExportsOrder=["OnLight","OnDark","ManyPages","CustomLimit"]},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ButtonGroup=function ButtonGroup(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/react/src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.$Y,Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.h,Yd:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.Y});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.tsx")},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z$:()=>AlertFilledIcon.z,zM:()=>AlertIcon.z,ve:()=>ArrowDownIcon.v,Y4:()=>ArrowLeftIcon.Y,LZ:()=>ArrowRightIcon.L,Hf:()=>ArrowUpIcon.H,AvatarIcon:()=>AvatarIcon.f,Qu:()=>CalendarIcon,v4:()=>ChevronDownIcon.v,wy:()=>ChevronLeftIcon.w,XC:()=>ChevronRightIcon.X,Tw:()=>CloseIcon.T,h0:()=>ExternalLinkIcon.h,F3:()=>InfoFilledIcon.F,sz:()=>InfoIcon.s,Zs:()=>ProgressBlockedIcon.Z,NB:()=>ProgressDoingIcon.N,Q2:()=>ProgressTodoIcon.Q,W1:()=>SearchIcon.W,qE:()=>SuccessFilledIcon.q,tm:()=>SuccessIcon.t,rG:()=>UploadIcon.r,av:()=>WarningFilledIcon.a,aN:()=>WarningIcon.a,kE:()=>utils.k});var Icon=__webpack_require__("./packages/react/src/icon/Icon.tsx"),utils=__webpack_require__("./packages/react/src/icon/utils.tsx"),AlertIcon=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),AlertFilledIcon=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),ArrowUpIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),ArrowDownIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),ArrowLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),ArrowRightIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),AvatarIcon=__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),CalendarIcon=(0,Icon.I)((0,emotion_react_jsx_runtime_browser_esm.BX)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M8 3C8 4.5621 8 5.4379 8 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M16 3C16 4.5621 16 5.4379 16 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M21 20V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("line",{x1:"3",y1:"12",x2:"21",y2:"12"})]}),"CalendarIcon");try{CalendarIcon.displayName="CalendarIcon",CalendarIcon.__docgenInfo={description:"",displayName:"CalendarIcon",props:{"aria-hidden":{defaultValue:null,description:"",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"border"'},{value:'"focus"'},{value:'"inherit"'},{value:'"action"'},{value:'"muted"'},{value:'"accent"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"]={docgenInfo:CalendarIcon.__docgenInfo,name:"CalendarIcon",path:"packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx");var ChevronDownIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),ChevronLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),ChevronRightIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),CloseIcon=__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx"),InfoIcon=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),InfoFilledIcon=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),ProgressBlockedIcon=(__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx")),ProgressDoingIcon=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),ExternalLinkIcon=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),SearchIcon=(__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx")),SuccessIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),SuccessFilledIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),ProgressTodoIcon=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx")),UploadIcon=__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx"),WarningIcon=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),WarningFilledIcon=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx")},"./packages/react/src/pagination/Pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Pagination});var _usePagination__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/pagination/usePagination.ts"),_PaginationContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/pagination/PaginationContainer.tsx"),_PaginationItemDirection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/pagination/PaginationItemDirection.tsx"),_PaginationItemSeparator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/pagination/PaginationItemSeparator.tsx"),_PaginationItemPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/pagination/PaginationItemPage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Pagination(_ref){var _ref$ariaLabel=_ref["aria-label"],ariaLabel=void 0===_ref$ariaLabel?"pagination":_ref$ariaLabel,generateHref=_ref.generateHref,_ref$windowLimit=_ref.windowLimit,windowLimit=void 0===_ref$windowLimit?3:_ref$windowLimit,currentPage=_ref.currentPage,totalPages=_ref.totalPages,pagination=(0,_usePagination__WEBPACK_IMPORTED_MODULE_4__.h)({currentPage,windowLimit,totalPages});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationContainer__WEBPACK_IMPORTED_MODULE_0__.f,{"aria-label":ariaLabel,children:pagination.map((function(item,idx){switch(item.type){case"direction":return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationItemDirection__WEBPACK_IMPORTED_MODULE_1__.P,{direction:item.direction,href:generateHref(item.pageNumber)},item.direction);case"page":return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationItemPage__WEBPACK_IMPORTED_MODULE_3__.g,{href:generateHref(item.pageNumber),pageNumber:item.pageNumber,isActive:item.isActive},idx);case"separator":return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_PaginationItemSeparator__WEBPACK_IMPORTED_MODULE_2__.a,{},idx);default:return null}}))})}try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{"aria-label":{defaultValue:null,description:"Describes the navigation element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},generateHref:{defaultValue:null,description:"Function to generate a href for each list item.",name:"generateHref",required:!0,type:{name:"(pageNumber: number) => string"}},currentPage:{defaultValue:null,description:"The current page number.",name:"currentPage",required:!0,type:{name:"number"}},windowLimit:{defaultValue:{value:"3"},description:"Controls how many list items are shown.",name:"windowLimit",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"The total number of pages.",name:"totalPages",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"packages/react/src/pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/pagination/PaginationContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>PaginationContainer});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),PaginationContainer=function PaginationContainer(_ref){var children=_ref.children,ariaLabel=_ref["aria-label"];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("nav",{"aria-label":ariaLabel,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{as:"ol",alignItems:"center",justifyContent:"center",flexWrap:"wrap",children})})};try{PaginationContainer.displayName="PaginationContainer",PaginationContainer.__docgenInfo={description:"",displayName:"PaginationContainer",props:{"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/pagination/PaginationContainer.tsx#PaginationContainer"]={docgenInfo:PaginationContainer.__docgenInfo,name:"PaginationContainer",path:"packages/react/src/pagination/PaginationContainer.tsx#PaginationContainer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/pagination/PaginationItemDirection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>PaginationItemDirection,W:()=>PaginationItemDirectionButton});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_text_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/index.ts"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/box/index.ts"),_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/button/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/pagination/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children"],_excluded2=["children"],_excluded3=["as","children","direction","className"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function PaginationItemDirection(_ref){var direction=_ref.direction,href=_ref.href;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(PaginationItemDirectionListItem,{direction,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(DirectionLink,{direction,href,"aria-label":"Go to ".concat("left"==direction?"previous":"next"," page"),children:"left"===direction?"Previous":"Next"})})}function PaginationItemDirectionButton(_ref2){var direction=_ref2.direction,onClick=_ref2.onClick;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(PaginationItemDirectionListItem,{direction,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(DirectionButton,{direction,onClick,"aria-label":"Go to ".concat("left"==direction?"previous":"next"," page"),children:"left"===direction?"Previous":"Next"})})}function PaginationItemDirectionListItem(_ref3){var children=_ref3.children,direction=_ref3.direction;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)("li",{css:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mq)({marginLeft:{sm:"right"===direction?(0,_core__WEBPACK_IMPORTED_MODULE_2__.XH)(1):void 0},marginRight:{sm:"left"===direction?(0,_core__WEBPACK_IMPORTED_MODULE_2__.XH)(1):void 0}}),children})}var DirectionLink=function DirectionLink(_ref4){var children=_ref4.children,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref4,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(BaseDirectionLink,_objectSpread(_objectSpread({as:_text_link__WEBPACK_IMPORTED_MODULE_1__.TextLink},props),{},{children}))},DirectionButton=function DirectionButton(_ref5){var children=_ref5.children,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref5,_excluded2);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(BaseDirectionLink,_objectSpread(_objectSpread({as:_button__WEBPACK_IMPORTED_MODULE_4__.Yd},props),{},{children}))},BaseDirectionLink=function BaseDirectionLink(_ref6){var as=_ref6.as,children=_ref6.children,direction=_ref6.direction,className=_ref6.className,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref6,_excluded3);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_box__WEBPACK_IMPORTED_MODULE_3__.Flex,_objectSpread(_objectSpread({as,className,inline:!0,gap:.5,alignItems:"center",fontFamily:"body",fontWeight:"normal",link:!0,focus:!0,css:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mq)({alignSelf:"flex-start",height:_utils__WEBPACK_IMPORTED_MODULE_6__.i,width:{xs:_utils__WEBPACK_IMPORTED_MODULE_6__.i}})},props),{},{children:["left"===direction?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_5__.Y4,{size:"sm"}):null,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_box__WEBPACK_IMPORTED_MODULE_3__.Box,{as:"span",display:["none","inline"],children}),"right"===direction?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_5__.LZ,{size:"sm"}):null]}))};try{PaginationItemDirection.displayName="PaginationItemDirection",PaginationItemDirection.__docgenInfo={description:"",displayName:"PaginationItemDirection",props:{href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/pagination/PaginationItemDirection.tsx#PaginationItemDirection"]={docgenInfo:PaginationItemDirection.__docgenInfo,name:"PaginationItemDirection",path:"packages/react/src/pagination/PaginationItemDirection.tsx#PaginationItemDirection"})}catch(__react_docgen_typescript_loader_error){}try{PaginationItemDirectionButton.displayName="PaginationItemDirectionButton",PaginationItemDirectionButton.__docgenInfo={description:"",displayName:"PaginationItemDirectionButton",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/pagination/PaginationItemDirection.tsx#PaginationItemDirectionButton"]={docgenInfo:PaginationItemDirectionButton.__docgenInfo,name:"PaginationItemDirectionButton",path:"packages/react/src/pagination/PaginationItemDirection.tsx#PaginationItemDirectionButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/pagination/PaginationItemPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>PaginationItemPageButton,g:()=>PaginationItemPage});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/pagination/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function PaginationItemPage(_ref){var pageNumber=_ref.pageNumber,href=_ref.href,isActive=_ref.isActive,Link=(0,_core__WEBPACK_IMPORTED_MODULE_0__.yF)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("li",{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_1__.Flex,{as:Link,"aria-label":"Go to page ".concat(pageNumber),href,justifyContent:"center",alignItems:"center",width:_utils__WEBPACK_IMPORTED_MODULE_3__.i,height:_utils__WEBPACK_IMPORTED_MODULE_3__.i,fontWeight:isActive?"bold":"normal",link:!0,focus:!0,"aria-current":isActive?"page":void 0,css:isActive?{color:_core__WEBPACK_IMPORTED_MODULE_0__._X.foregroundText,textDecoration:"none"}:void 0,children:pageNumber})})}function PaginationItemPageButton(_ref2){var pageNumber=_ref2.pageNumber,onClick=_ref2.onClick,isActive=_ref2.isActive;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("li",{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_1__.Flex,{as:_button__WEBPACK_IMPORTED_MODULE_2__.Yd,"aria-label":"Go to page ".concat(pageNumber),"aria-current":isActive?"page":void 0,onClick,justifyContent:"center",alignItems:"center",width:_utils__WEBPACK_IMPORTED_MODULE_3__.i,height:_utils__WEBPACK_IMPORTED_MODULE_3__.i,fontWeight:isActive?"bold":"normal",link:!0,focus:!0,css:isActive?{color:_core__WEBPACK_IMPORTED_MODULE_0__._X.foregroundText,textDecoration:"none"}:void 0,children:pageNumber})})}try{PaginationItemPage.displayName="PaginationItemPage",PaginationItemPage.__docgenInfo={description:"",displayName:"PaginationItemPage",props:{href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},pageNumber:{defaultValue:null,description:"",name:"pageNumber",required:!0,type:{name:"number"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/pagination/PaginationItemPage.tsx#PaginationItemPage"]={docgenInfo:PaginationItemPage.__docgenInfo,name:"PaginationItemPage",path:"packages/react/src/pagination/PaginationItemPage.tsx#PaginationItemPage"})}catch(__react_docgen_typescript_loader_error){}try{PaginationItemPageButton.displayName="PaginationItemPageButton",PaginationItemPageButton.__docgenInfo={description:"",displayName:"PaginationItemPageButton",props:{href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},pageNumber:{defaultValue:null,description:"",name:"pageNumber",required:!0,type:{name:"number"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/pagination/PaginationItemPage.tsx#PaginationItemPageButton"]={docgenInfo:PaginationItemPageButton.__docgenInfo,name:"PaginationItemPageButton",path:"packages/react/src/pagination/PaginationItemPage.tsx#PaginationItemPageButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/pagination/PaginationItemSeparator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>PaginationItemSeparator});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/pagination/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function PaginationItemSeparator(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{as:"li",width:_utils__WEBPACK_IMPORTED_MODULE_2__.i,height:_utils__WEBPACK_IMPORTED_MODULE_2__.i,alignItems:"center",justifyContent:"center",children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{children:"…"})})}},"./packages/react/src/pagination/usePagination.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function usePagination(_ref){var currentPage=_ref.currentPage,totalPages=_ref.totalPages,windowLimit=_ref.windowLimit,elements=[],minPage=1,maxPage=totalPages;if(windowLimit<totalPages){var rightLimit=Math.floor(windowLimit/2);maxPage=currentPage+rightLimit,(minPage=currentPage-(rightLimit+windowLimit%2-1))<1&&(maxPage=windowLimit,minPage=1),maxPage>totalPages&&(minPage=totalPages-windowLimit+1,maxPage=totalPages)}currentPage>1&&elements.push({type:"direction",direction:"left",pageNumber:currentPage-1}),minPage>1&&(elements.push({type:"page",pageNumber:1,isActive:1===currentPage}),minPage>2&&elements.push({type:"separator"}));for(var page=minPage;page<=maxPage;page++){var isActive=page===currentPage;elements.push({type:"page",pageNumber:page,isActive})}return maxPage+1<totalPages&&elements.push({type:"separator"}),maxPage<totalPages&&elements.push({type:"page",pageNumber:totalPages,isActive:totalPages===currentPage}),currentPage<totalPages&&elements.push({type:"direction",direction:"right",pageNumber:currentPage+1}),elements}__webpack_require__.d(__webpack_exports__,{h:()=>usePagination})},"./packages/react/src/pagination/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BUTTON_SIZE});var BUTTON_SIZE=(0,__webpack_require__("./packages/react/src/core/index.ts").XH)(3)},"./packages/react/src/text-link/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>TextLink});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var TextLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextLink(props,ref){var Link=(0,_core__WEBPACK_IMPORTED_MODULE_3__.yF)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(Link,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,css:[_box__WEBPACK_IMPORTED_MODULE_2__.Wf,_box__WEBPACK_IMPORTED_MODULE_2__.j4,"","","",""]},props))}));try{TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-link/TextLink.tsx#TextLink"]={docgenInfo:TextLink.__docgenInfo,name:"TextLink",path:"packages/react/src/text-link/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-link/TextLinkExternal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>TextLinkExternal});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TextLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TextLinkExternal=function TextLinkExternal(_ref){var children=_ref.children,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_TextLink__WEBPACK_IMPORTED_MODULE_4__.h,_objectSpread(_objectSpread({target:"_blank",rel:"noopener"},props),{},{children:[children,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_a11y__WEBPACK_IMPORTED_MODULE_1__.e,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_2__.h0,{weight:"regular",size:"sm",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)({position:"relative",top:3,marginLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.XH)(.25)},"","")})]}))};try{TextLinkExternal.displayName="TextLinkExternal",TextLinkExternal.__docgenInfo={description:"",displayName:"TextLinkExternal",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-link/TextLinkExternal.tsx#TextLinkExternal"]={docgenInfo:TextLinkExternal.__docgenInfo,name:"TextLinkExternal",path:"packages/react/src/text-link/TextLinkExternal.tsx#TextLinkExternal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextLink:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.h,z:()=>_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__.z});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/TextLinkExternal.tsx")}}]);