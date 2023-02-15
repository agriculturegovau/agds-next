"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[2130],{"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ButtonGroup=function ButtonGroup(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/react/src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.$Y,Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.h,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.Z,Yd:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.Y});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.tsx")},"./packages/react/src/main-nav/MainNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>MainNav});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_NavContainer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/main-nav/NavContainer.tsx"),_NavList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/main-nav/NavList.tsx"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/main-nav/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function MainNav(_ref){var _ref$background=_ref.background,background=void 0===_ref$background?"body":_ref$background,activePath=_ref.activePath,items=_ref.items,secondaryItems=_ref.secondaryItems,id=_ref.id,bestMatch=(0,_utils__WEBPACK_IMPORTED_MODULE_2__.lb)([].concat((0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(items||[]),(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(secondaryItems||[])),activePath);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_NavContainer__WEBPACK_IMPORTED_MODULE_0__.e,{background,id,hasItems:items&&items.length>0,rightContent:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_NavList__WEBPACK_IMPORTED_MODULE_1__.$,{"aria-label":"secondary",items:secondaryItems,activePath:bestMatch,type:"secondary"}),children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_NavList__WEBPACK_IMPORTED_MODULE_1__.$,{"aria-label":"main",items,activePath:bestMatch,type:"primary"})})}try{MainNav.displayName="MainNav",MainNav.__docgenInfo={description:"",displayName:"MainNav",props:{activePath:{defaultValue:null,description:"",name:"activePath",required:!1,type:{name:"string"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavListItem[]"}},secondaryItems:{defaultValue:null,description:"",name:"secondaryItems",required:!1,type:{name:"NavListItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/main-nav/MainNav.tsx#MainNav"]={docgenInfo:MainNav.__docgenInfo,name:"MainNav",path:"packages/react/src/main-nav/MainNav.tsx#MainNav"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/main-nav/MainNavBottomBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>MainNavBottomBar});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/main-nav/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function MainNavBottomBar(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{paddingTop:_utils__WEBPACK_IMPORTED_MODULE_2__.jn,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({backgroundColor:_core__WEBPACK_IMPORTED_MODULE_0__.boxPalette.accent},"","")})}},"./packages/react/src/main-nav/NavContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>NavContainer});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),es2015=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),utils=__webpack_require__("./packages/react/src/main-nav/utils.ts"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["onClick","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function MainNavButton(_ref){var onClick=_ref.onClick,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,{paddingBottom:.5,display:{xs:"block",lg:"none"},children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,_objectSpread(_objectSpread({as:src_button.Yd,flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"xs",lineHeight:"nospace",gap:.5,padding:1,height:"100%",focus:!0,css:(0,emotion_react_browser_esm.iv)({color:core.boxPalette.foregroundAction,"&:hover":{color:core.boxPalette.foregroundText,backgroundColor:utils.JL.linkHoverBg}},"",""),onClick},props),{},{children}))})}function OpenButton(_ref2){var onClick=_ref2.onClick;return(0,emotion_react_jsx_runtime_browser_esm.BX)(MainNavButton,{onClick,"aria-controls":"main-nav-dialog","aria-expanded":"false","aria-label":"Open main menu",children:[(0,emotion_react_jsx_runtime_browser_esm.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("rect",{x:"4",y:"16",width:"16",height:"2"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("rect",{x:"4",y:"11",width:"16",height:"2"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("rect",{x:"4",y:"6",width:"16",height:"2"})]}),"Menu"]})}function CloseButton(_ref3){var onClick=_ref3.onClick;return(0,emotion_react_jsx_runtime_browser_esm.BX)(MainNavButton,{onClick,"aria-controls":"main-nav-dialog","aria-expanded":"true","aria-label":"Close main menu",children:[(0,emotion_react_jsx_runtime_browser_esm.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("rect",{x:"6",y:"17.3137",width:"16",height:"2",transform:"rotate(-45 6 17.3137)"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("rect",{x:"7.41406",y:"6",width:"16",height:"2",transform:"rotate(45 7.41406 6)"})]}),"Close"]})}try{OpenButton.displayName="OpenButton",OpenButton.__docgenInfo={description:"",displayName:"OpenButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/main-nav/MenuButtons.tsx#OpenButton"]={docgenInfo:OpenButton.__docgenInfo,name:"OpenButton",path:"packages/react/src/main-nav/MenuButtons.tsx#OpenButton"})}catch(__react_docgen_typescript_loader_error){}try{CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/main-nav/MenuButtons.tsx#CloseButton"]={docgenInfo:CloseButton.__docgenInfo,name:"CloseButton",path:"packages/react/src/main-nav/MenuButtons.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}function NavContainer_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function NavContainer_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?NavContainer_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):NavContainer_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _ref3={name:"bjn8wh",styles:"position:relative"};function NavContainer(_ref2){var _objectSpread2,id=_ref2.id,rightContent=_ref2.rightContent,children=_ref2.children,_ref2$background=_ref2.background,background=void 0===_ref2$background?"body":_ref2$background,hasItems=_ref2.hasItems,containerRef=(0,react.useRef)(null),hover=utils.F8[background],windowWidth=(0,core.iP)().windowWidth,_useTernaryState=(0,core.hb)(!1),_useTernaryState2=(0,slicedToArray.Z)(_useTernaryState,3),menuOpen=_useTernaryState2[0],open=_useTernaryState2[1],close=_useTernaryState2[2],menuVisiblyOpen=menuOpen&&(windowWidth||0)<=core.tokens.breakpoint.lg-1,palette=(0,core.Dc)(containerRef);return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Box,{id,tabIndex:-1,ref:containerRef,background,color:"text",css:(0,emotion_react_browser_esm.iv)(NavContainer_objectSpread((_objectSpread2={position:"relative","&:focus":{outline:"none"}},(0,defineProperty.Z)(_objectSpread2,utils.oF.linkHoverBg,box.Vu[hover]),(0,defineProperty.Z)(_objectSpread2,utils.oF.linkActiveBg,box.Vu[background]),(0,defineProperty.Z)(_objectSpread2,utils.oF.bottomBar,core.boxPalette.accent),_objectSpread2),core.lB.print.hidden),"",""),children:[menuVisiblyOpen?(0,emotion_react_jsx_runtime_browser_esm.tZ)(LockScroll,{}):null,(0,emotion_react_jsx_runtime_browser_esm.tZ)(BottomBar,{}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{justifyContent:"center",css:_ref3,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{justifyContent:"space-between",alignItems:"center",maxWidth:core.tokens.maxWidth.container,width:"100%",paddingX:{xs:.75,lg:2},children:[hasItems?(0,emotion_react_jsx_runtime_browser_esm.tZ)(OpenButton,{onClick:open}):null,(0,emotion_react_jsx_runtime_browser_esm.tZ)(NavContainerDialog,{palette,menuVisiblyOpen,close,children}),rightContent]})}),menuVisiblyOpen?(0,emotion_react_jsx_runtime_browser_esm.tZ)(Overlay,{onClick:close}):null]})}function NavContainerDialog(_ref4){var children=_ref4.children,close=_ref4.close,menuVisiblyOpen=_ref4.menuVisiblyOpen,palette=_ref4.palette,dialogRef=(0,react.useRef)(null);(0,react.useEffect)((function(){var handleKeyDown=function handleKeyDown(e){"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),close())};return window.addEventListener("keydown",handleKeyDown),function(){return window.removeEventListener("keydown",handleKeyDown)}}),[close]),(0,react.useEffect)((function(){if(menuVisiblyOpen&&dialogRef.current){var rootNodes=[],originalAttrs=[];return document.querySelectorAll("body > *").forEach((function(node){if(node!==dialogRef.current){var attr=node.getAttribute("aria-hidden");null!==attr&&"false"!==attr||(rootNodes.push(node),originalAttrs.push(attr),node.setAttribute("aria-hidden","true"))}})),function(){rootNodes.forEach((function(node,index){var originalValue=originalAttrs[index];null===originalValue?node.removeAttribute("aria-hidden"):node.setAttribute("aria-hidden",originalValue)}))}}}),[menuVisiblyOpen]);var element=(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,NavContainer_objectSpread(NavContainer_objectSpread({palette,ref:dialogRef},menuVisiblyOpen?{role:"dialog","aria-label":"Main navigation","aria-modal":"true"}:null),{},{id:"main-nav-dialog",css:(0,emotion_react_browser_esm.iv)((0,defineProperty.Z)({},core.tokens.mediaQuery.max.md,{zIndex:200,position:"fixed",display:menuVisiblyOpen?"block":"none",background:core.boxPalette.backgroundBody,top:0,left:0,bottom:0,width:"100%",maxWidth:core.tokens.maxWidth.mobileMenu,padding:(0,core.XH)(1),boxSizing:"border-box",overflowY:"auto"}),"",""),children:(0,emotion_react_jsx_runtime_browser_esm.BX)(es2015.ZP,{returnFocus:!0,disabled:!menuVisiblyOpen,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(CloseButton,{onClick:close}),children]})}));return menuVisiblyOpen?(0,react_dom.createPortal)(element,document.body):element}var _ref={name:"1sy9iaq",styles:"body{overflow:hidden;}"};function LockScroll(){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(emotion_react_browser_esm.xB,{styles:_ref})}function Overlay(_ref5){var onClick=_ref5.onClick;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,{css:(0,emotion_react_browser_esm.iv)({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:100},"",""),onClick})}function BottomBar(){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,{paddingTop:utils.jn,css:(0,emotion_react_browser_esm.iv)({position:"absolute",bottom:0,left:0,right:0,backgroundColor:utils.JL.bottomBar},"","")})}try{NavContainer.displayName="NavContainer",NavContainer.__docgenInfo={description:"",displayName:"NavContainer",props:{background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},hasItems:{defaultValue:null,description:"",name:"hasItems",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/main-nav/NavContainer.tsx#NavContainer"]={docgenInfo:NavContainer.__docgenInfo,name:"NavContainer",path:"packages/react/src/main-nav/NavContainer.tsx#NavContainer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/main-nav/NavList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>NavList});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),utils=__webpack_require__("./packages/react/src/main-nav/utils.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function NavListItem(_ref){var active=_ref.active,children=_ref.children,hasEndElement=_ref.hasEndElement,type=_ref.type;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"li",height:"100%",paddingBottom:"primary"===type?{lg:.5}:.5,fontSize:{xs:"xs",lg:"sm"},css:[(0,core.mq)({" a, button":{boxSizing:"border-box",position:"relative",display:"flex",flexDirection:"primary"===type?"row":(0,core.qz)({xs:"column-reverse",lg:"row"}),alignItems:"center",justifyContent:"primary"===type||hasEndElement?"space-between":"center",height:"100%",width:"100%",gap:(0,core.XH)(.5),color:core.boxPalette[active?"foregroundText":"foregroundAction"],padding:(0,core.XH)(1),textDecoration:"none",fontWeight:"primary"===type?(0,core.qz)({xs:active?"bold":void 0,lg:"normal"}):"normal","&:after":{content:"primary"===type?(0,core.qz)({xs:void 0,lg:'""'}):"''",height:(0,core.XH)(.5),position:"absolute",top:"100%",left:0,right:0,backgroundColor:active?utils.JL.linkActiveBg:"transparent"},"&:focus":{outline:"none","&:before":_objectSpread({content:'""',position:"absolute",zIndex:100,top:0,left:0,height:"100%",width:"100%"},core.lB.outline),"&::-moz-focus-inner":{border:0}},"&:hover":{color:core.boxPalette.foregroundText,backgroundColor:utils.JL.linkHoverBg,"& > span:first-of-type":core.lB.underline,"&::after":{background:active?utils.JL.linkHoverBg:"transparent"}}}}),"","","",""],children})}try{NavListItem.displayName="NavListItem",NavListItem.__docgenInfo={description:"",displayName:"NavListItem",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},hasEndElement:{defaultValue:null,description:"",name:"hasEndElement",required:!0,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/main-nav/NavListItem.tsx#NavListItem"]={docgenInfo:NavListItem.__docgenInfo,name:"NavListItem",path:"packages/react/src/main-nav/NavListItem.tsx#NavListItem"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["label","endElement"];function NavList_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function NavList_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?NavList_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):NavList_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function NavList(_ref){var ariaLabel=_ref["aria-label"],activePath=_ref.activePath,items=_ref.items,type=_ref.type,Link=(0,core.yF)();return(0,emotion_react_jsx_runtime_browser_esm.tZ)(NavListContainer,{"aria-label":ariaLabel,type,children:null==items?void 0:items.map((function(_ref2,index){var label=_ref2.label,endElement=_ref2.endElement,item=(0,objectWithoutProperties.Z)(_ref2,_excluded);if("href"in item){var active=item.href===activePath;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(NavListItem,{active,type,hasEndElement:Boolean(endElement),children:(0,emotion_react_jsx_runtime_browser_esm.BX)(Link,NavList_objectSpread(NavList_objectSpread({"aria-current":active?"page":void 0},item),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",{children:label}),endElement]}))},index)}return(0,emotion_react_jsx_runtime_browser_esm.tZ)(NavListItem,{active:!1,type,hasEndElement:Boolean(endElement),children:(0,emotion_react_jsx_runtime_browser_esm.BX)(src_button.Yd,NavList_objectSpread(NavList_objectSpread({},item),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",{children:label}),endElement]}))},index)}))})}function NavListContainer(_ref3){var ariaLabel=_ref3["aria-label"],children=_ref3.children;return"primary"===_ref3.type?(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"nav",justifyContent:"space-between",width:"100%",flexDirection:{xs:"column",lg:"row"},"aria-label":ariaLabel,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"ul",flexDirection:{xs:"column",lg:"row"},flexWrap:"wrap",alignItems:"stretch",css:(0,emotion_react_browser_esm.iv)((0,defineProperty.Z)({},core.tokens.mediaQuery.max.md,{"& > li":{borderTopWidth:core.tokens.borderWidth.sm,borderTopStyle:"solid",borderTopColor:core.boxPalette.border}}),"",""),children})}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"nav",height:"100%","aria-label":ariaLabel,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"ul",height:"100%",children})})}try{NavList.displayName="NavList",NavList.__docgenInfo={description:"",displayName:"NavList",props:{"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!0,type:{name:"string"}},activePath:{defaultValue:null,description:"",name:"activePath",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"NavListItem[]"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/main-nav/NavList.tsx#NavList"]={docgenInfo:NavList.__docgenInfo,name:"NavList",path:"packages/react/src/main-nav/NavList.tsx#NavList"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/main-nav/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{F8:()=>hoverMap,JL:()=>localPalette,jn:()=>bottomBarPadding,lb:()=>findBestMatch,oF:()=>localPaletteVars});var bottomBarPadding=.5,hoverMap={body:"shade",bodyAlt:"shadeAlt"},localPaletteVars={linkHoverBg:"--nav-linkHoverBg",linkActiveBg:"--nav-linkActiveBg",bottomBar:"--nav-bottomBar"},localPalette={linkHoverBg:"var(".concat(localPaletteVars.linkHoverBg,")"),linkActiveBg:"var(".concat(localPaletteVars.linkActiveBg,")"),bottomBar:"var(".concat(localPaletteVars.bottomBar,")")};function findBestMatch(items,activePath){if(!activePath)return"";var _step,bestMatch="",_iterator=_createForOfIteratorHelper(items.filter((function(item){return"href"in item&&item.href})));try{for(_iterator.s();!(_step=_iterator.n()).done;){var link=_step.value;if(link.href===activePath)return link.href;null!=activePath&&activePath.startsWith(link.href)&&"/"!==link.href&&link.href.length>bestMatch.length&&(bestMatch=link.href)}}catch(err){_iterator.e(err)}finally{_iterator.f()}return bestMatch}}}]);