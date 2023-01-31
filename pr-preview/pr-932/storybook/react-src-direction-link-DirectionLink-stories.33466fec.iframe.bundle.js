"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[7824],{"./packages/react/src/direction-link/DirectionLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllDirections:()=>AllDirections,Basic:()=>Basic,Button:()=>Button,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/direction-link/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"navigation/DirectionLink",component:_index__WEBPACK_IMPORTED_MODULE_2__.DirectionLink,subcomponents:{DirectionButton:_index__WEBPACK_IMPORTED_MODULE_2__.I}};var Basic=function Basic(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_index__WEBPACK_IMPORTED_MODULE_2__.DirectionLink,_objectSpread({},args))};Basic.args={children:"Continue",direction:"right",href:"#"};var Button=function Button(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_index__WEBPACK_IMPORTED_MODULE_2__.I,_objectSpread({},args))};Button.args={children:"Continue",direction:"right",onClick:console.log};var AllDirections=function AllDirections(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_box__WEBPACK_IMPORTED_MODULE_1__.Stack,{gap:2,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_index__WEBPACK_IMPORTED_MODULE_2__.DirectionLink,{href:"#",direction:"left",children:"Back"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_index__WEBPACK_IMPORTED_MODULE_2__.DirectionLink,{href:"#",direction:"right",children:"Next"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_index__WEBPACK_IMPORTED_MODULE_2__.DirectionLink,{href:"#",direction:"up",children:"Top"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_index__WEBPACK_IMPORTED_MODULE_2__.DirectionLink,{href:"#",direction:"down",children:"Skip to footer"})]})};Basic.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<DirectionLink {...args} />\n)"}},Basic.parameters),Button.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<DirectionButton {...args} />\n)"}},Button.parameters),AllDirections.parameters=_objectSpread({storySource:{source:'() => (\n\t<Stack gap={2}>\n\t\t<DirectionLink href="#" direction="left">\n\t\t\tBack\n\t\t</DirectionLink>\n\t\t<DirectionLink href="#" direction="right">\n\t\t\tNext\n\t\t</DirectionLink>\n\t\t<DirectionLink href="#" direction="up">\n\t\t\tTop\n\t\t</DirectionLink>\n\t\t<DirectionLink href="#" direction="down">\n\t\t\tSkip to footer\n\t\t</DirectionLink>\n\t</Stack>\n)'}},AllDirections.parameters);var __namedExportsOrder=["Basic","Button","AllDirections"]},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ButtonGroup=function ButtonGroup(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/react/src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.$Y,Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.h,Yd:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.Y});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.tsx")},"./packages/react/src/direction-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>DirectionButton,DirectionLink:()=>DirectionLink});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children"],_excluded2=["children"],_excluded3=["as","children","direction","className"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var DirectionLink=function DirectionLink(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(BaseDirectionLink,_objectSpread(_objectSpread({as:text_link.TextLink},props),{},{children}))},DirectionButton=function DirectionButton(_ref2){var children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(BaseDirectionLink,_objectSpread(_objectSpread({as:src_button.Yd},props),{},{children}))},_ref4={name:"xyzkeb",styles:"align-self:flex-start"},BaseDirectionLink=function BaseDirectionLink(_ref3){var as=_ref3.as,children=_ref3.children,direction=_ref3.direction,className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3),Icon=iconMap[direction],iconLeft="left"===direction;return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,_objectSpread(_objectSpread({as,className,inline:!0,gap:.5,alignItems:"center",fontFamily:"body",fontWeight:"normal",link:!0,focus:!0,css:_ref4},props),{},{children:[iconLeft?(0,emotion_react_jsx_runtime_browser_esm.tZ)(Icon,{size:"sm"}):null,children,iconLeft?null:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Icon,{size:"sm"})]}))},iconMap={up:icon.Hf,right:icon.LZ,down:icon.ve,left:icon.Y4};try{DirectionLink.displayName="DirectionLink",DirectionLink.__docgenInfo={description:"",displayName:"DirectionLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},direction:{defaultValue:null,description:"The direction of the link.",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/direction-link/DirectionLink.tsx#DirectionLink"]={docgenInfo:DirectionLink.__docgenInfo,name:"DirectionLink",path:"packages/react/src/direction-link/DirectionLink.tsx#DirectionLink"})}catch(__react_docgen_typescript_loader_error){}try{DirectionButton.displayName="DirectionButton",DirectionButton.__docgenInfo={description:"",displayName:"DirectionButton",props:{"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",name:"aria-expanded",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"Describes the button element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"When true, prevents onClick from firing.",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Function to be fired following a click event of the button.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:null,description:"Provide an alternate type if the button is within a form.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},direction:{defaultValue:null,description:"The direction of the link.",name:"direction",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/direction-link/DirectionLink.tsx#DirectionButton"]={docgenInfo:DirectionButton.__docgenInfo,name:"DirectionButton",path:"packages/react/src/direction-link/DirectionLink.tsx#DirectionButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z$:()=>AlertFilledIcon.z,zM:()=>AlertIcon.z,ve:()=>ArrowDownIcon.v,Y4:()=>ArrowLeftIcon.Y,LZ:()=>ArrowRightIcon.L,Hf:()=>ArrowUpIcon.H,AvatarIcon:()=>AvatarIcon.f,Qu:()=>CalendarIcon,v4:()=>ChevronDownIcon.v,wy:()=>ChevronLeftIcon.w,XC:()=>ChevronRightIcon.X,Tw:()=>CloseIcon.T,h0:()=>ExternalLinkIcon.h,F3:()=>InfoFilledIcon.F,sz:()=>InfoIcon.s,Zs:()=>ProgressBlockedIcon.Z,NB:()=>ProgressDoingIcon.N,Q2:()=>ProgressTodoIcon.Q,W1:()=>SearchIcon.W,qE:()=>SuccessFilledIcon.q,tm:()=>SuccessIcon.t,rG:()=>UploadIcon.r,av:()=>WarningFilledIcon.a,aN:()=>WarningIcon.a,kE:()=>utils.k});var Icon=__webpack_require__("./packages/react/src/icon/Icon.tsx"),utils=__webpack_require__("./packages/react/src/icon/utils.tsx"),AlertIcon=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),AlertFilledIcon=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),ArrowUpIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),ArrowDownIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),ArrowLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),ArrowRightIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),AvatarIcon=__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),CalendarIcon=(0,Icon.I)((0,emotion_react_jsx_runtime_browser_esm.BX)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M8 3C8 4.5621 8 5.4379 8 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M16 3C16 4.5621 16 5.4379 16 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M21 20V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("line",{x1:"3",y1:"12",x2:"21",y2:"12"})]}),"CalendarIcon");try{CalendarIcon.displayName="CalendarIcon",CalendarIcon.__docgenInfo={description:"",displayName:"CalendarIcon",props:{"aria-hidden":{defaultValue:null,description:"",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"border"'},{value:'"focus"'},{value:'"inherit"'},{value:'"action"'},{value:'"muted"'},{value:'"accent"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"]={docgenInfo:CalendarIcon.__docgenInfo,name:"CalendarIcon",path:"packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx");var ChevronDownIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),ChevronLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),ChevronRightIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),CloseIcon=__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx"),InfoIcon=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),InfoFilledIcon=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),ProgressBlockedIcon=(__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx")),ProgressDoingIcon=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),ExternalLinkIcon=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),SearchIcon=(__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx")),SuccessIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),SuccessFilledIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),ProgressTodoIcon=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx")),UploadIcon=__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx"),WarningIcon=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),WarningFilledIcon=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx")},"./packages/react/src/text-link/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>TextLink});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var TextLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextLink(props,ref){var Link=(0,_core__WEBPACK_IMPORTED_MODULE_3__.yF)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(Link,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,css:[_box__WEBPACK_IMPORTED_MODULE_2__.Wf,_box__WEBPACK_IMPORTED_MODULE_2__.j4,"","","",""]},props))}));try{TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-link/TextLink.tsx#TextLink"]={docgenInfo:TextLink.__docgenInfo,name:"TextLink",path:"packages/react/src/text-link/TextLink.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-link/TextLinkExternal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>TextLinkExternal});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TextLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TextLinkExternal=function TextLinkExternal(_ref){var children=_ref.children,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_TextLink__WEBPACK_IMPORTED_MODULE_4__.h,_objectSpread(_objectSpread({target:"_blank",rel:"noopener"},props),{},{children:[children,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_a11y__WEBPACK_IMPORTED_MODULE_1__.e,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_2__.h0,{weight:"regular",size:"sm",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)({position:"relative",top:3,marginLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.XH)(.25)},"","")})]}))};try{TextLinkExternal.displayName="TextLinkExternal",TextLinkExternal.__docgenInfo={description:"",displayName:"TextLinkExternal",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-link/TextLinkExternal.tsx#TextLinkExternal"]={docgenInfo:TextLinkExternal.__docgenInfo,name:"TextLinkExternal",path:"packages/react/src/text-link/TextLinkExternal.tsx#TextLinkExternal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextLink:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.h,z:()=>_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__.z});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/TextLinkExternal.tsx")}}]);