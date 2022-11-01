"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[5055],{"./packages/progress-indicator/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YF:()=>ProgressIndicator_ProgressIndicator,Gr:()=>ProgressIndicatorCollapseButton_ProgressIndicatorCollapseButton,B:()=>ProgressIndicatorContainer_ProgressIndicatorContainer,az:()=>ProgressIndicatorItem_ProgressIndicatorItemButton,hj:()=>ProgressIndicatorItem_ProgressIndicatorItemLink,zW:()=>ProgressIndicatorList_ProgressIndicatorList});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/react/index.js"),react_spring_web_esm=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),src=__webpack_require__("./packages/core/src/index.ts"),box_src=__webpack_require__("./packages/box/src/index.ts"),icon_src=__webpack_require__("./packages/icon/src/index.ts"),button_src=__webpack_require__("./packages/button/src/index.tsx"),hoverColorMap={body:src._X.backgroundShade,bodyAlt:src._X.backgroundShadeAlt},emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),AnimatedIcon=(0,react_spring_web_esm.animated)(icon_src.v4),ProgressIndicatorCollapseButton_ProgressIndicatorCollapseButton=function ProgressIndicatorCollapseButton(_ref){var ariaControls=_ref.ariaControls,_ref$background=_ref.background,background=void 0===_ref$background?"body":_ref$background,id=_ref.id,isOpen=_ref.isOpen,items=_ref.items,onClick=_ref.onClick,prefersReducedMotion=(0,src.Tb)(),iconStyle=(0,react_spring_web_esm.useSpring)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(".concat(isOpen?180:0,"deg)")},immediate:prefersReducedMotion}),title=(0,react.useMemo)((function(){var activeItemIndex=items.findIndex((function(_ref2){return"doing"===_ref2.status}));return-1===activeItemIndex?"Progress":"Doing step ".concat(activeItemIndex+1," of ").concat(items.length)}),[items]);return(0,emotion_react_jsx_runtime_browser_esm.BX)(box_src.kC,{as:button_src.Yd,"aria-controls":ariaControls,"aria-expanded":isOpen,onClick,id,color:"action",fontSize:"md",lineHeight:"heading",background,fontWeight:"bold",padding:1,justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,css:(0,emotion_react_browser_esm.iv)((0,defineProperty.Z)({"&:hover":{background:hoverColorMap[background]}},src.TV.mediaQuery.min.md,{display:"none"}),"",""),children:[title,(0,emotion_react_jsx_runtime_browser_esm.tZ)(AnimatedIcon,{size:"sm",weight:"bold",style:iconStyle})]})};try{ProgressIndicatorCollapseButton_ProgressIndicatorCollapseButton.displayName="ProgressIndicatorCollapseButton",ProgressIndicatorCollapseButton_ProgressIndicatorCollapseButton.__docgenInfo={description:"",displayName:"ProgressIndicatorCollapseButton",props:{ariaControls:{defaultValue:null,description:"",name:"ariaControls",required:!0,type:{name:"string"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProgressIndicatorItem[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/ProgressIndicatorCollapseButton.tsx#ProgressIndicatorCollapseButton"]={docgenInfo:ProgressIndicatorCollapseButton_ProgressIndicatorCollapseButton.__docgenInfo,name:"ProgressIndicatorCollapseButton",path:"packages/progress-indicator/src/ProgressIndicatorCollapseButton.tsx#ProgressIndicatorCollapseButton"})}catch(__react_docgen_typescript_loader_error){}var _ref2={name:"116phl6",styles:"li:last-of-type{border-bottom:none;}"},ProgressIndicatorContainer_ProgressIndicatorContainer=function ProgressIndicatorContainer(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box_src.xu,{as:"section",borderBottom:!0,css:_ref2,children})};try{ProgressIndicatorContainer_ProgressIndicatorContainer.displayName="ProgressIndicatorContainer",ProgressIndicatorContainer_ProgressIndicatorContainer.__docgenInfo={description:"",displayName:"ProgressIndicatorContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/ProgressIndicatorContainer.tsx#ProgressIndicatorContainer"]={docgenInfo:ProgressIndicatorContainer_ProgressIndicatorContainer.__docgenInfo,name:"ProgressIndicatorContainer",path:"packages/progress-indicator/src/ProgressIndicatorContainer.tsx#ProgressIndicatorContainer"})}catch(__react_docgen_typescript_loader_error){}var text_src=__webpack_require__("./packages/text/src/index.tsx"),text_link_src=__webpack_require__("./packages/text-link/src/index.tsx"),_excluded=["children"],_excluded2=["children"],_excluded3=["as","background","children","status","className"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ProgressIndicatorItem_ProgressIndicatorItemLink=function ProgressIndicatorItemLink(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItem,_objectSpread(_objectSpread({as:text_link_src.h},props),{},{children}))},ProgressIndicatorItem_ProgressIndicatorItemButton=function ProgressIndicatorItemButton(_ref2){var children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItem,_objectSpread(_objectSpread({as:button_src.Yd},props),{},{children}))},ProgressIndicatorItem=function ProgressIndicatorItem(_ref3){var as=_ref3.as,_ref3$background=_ref3.background,background=void 0===_ref3$background?"body":_ref3$background,children=_ref3.children,status=_ref3.status,className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3),active="doing"===status,Icon=statusIconMap[status];return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box_src.xu,{as:"li",borderBottom:!0,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(box_src.kC,_objectSpread(_objectSpread({as,className,alignItems:"center",gap:.75,padding:.75,background,color:"text",fontFamily:"body",fontWeight:active?"bold":"normal",borderLeft:!0,borderLeftWidth:"xl",width:"100%",focus:!0,css:(0,emotion_react_browser_esm.iv)({borderLeftColor:active?src._X.foregroundAction:"transparent",textDecoration:"none","&:hover":_objectSpread(_objectSpread({},src.lB.underline),{},{backgroundColor:hoverColorMap[background]})},"","")},props),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Icon,{size:"md",color:"action"}),(0,emotion_react_jsx_runtime_browser_esm.BX)(box_src.kC,{as:"span",flexDirection:"column",gap:0,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(text_src.x,{color:"muted",fontSize:"xs",lineHeight:"nospace",children:statusLabelMap[status]}),children]})]}))})},statusIconMap={doing:icon_src.NB,todo:icon_src.Q2,done:icon_src.d0},statusLabelMap={doing:"Doing",todo:"To do",done:"Done"};try{ProgressIndicatorItem_ProgressIndicatorItemLink.displayName="ProgressIndicatorItemLink",ProgressIndicatorItem_ProgressIndicatorItemLink.__docgenInfo={description:"",displayName:"ProgressIndicatorItemLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/ProgressIndicatorItem.tsx#ProgressIndicatorItemLink"]={docgenInfo:ProgressIndicatorItem_ProgressIndicatorItemLink.__docgenInfo,name:"ProgressIndicatorItemLink",path:"packages/progress-indicator/src/ProgressIndicatorItem.tsx#ProgressIndicatorItemLink"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicatorItem_ProgressIndicatorItemButton.displayName="ProgressIndicatorItemButton",ProgressIndicatorItem_ProgressIndicatorItemButton.__docgenInfo={description:"",displayName:"ProgressIndicatorItemButton",props:{background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/ProgressIndicatorItem.tsx#ProgressIndicatorItemButton"]={docgenInfo:ProgressIndicatorItem_ProgressIndicatorItemButton.__docgenInfo,name:"ProgressIndicatorItemButton",path:"packages/progress-indicator/src/ProgressIndicatorItem.tsx#ProgressIndicatorItemButton"})}catch(__react_docgen_typescript_loader_error){}var ProgressIndicatorList_ProgressIndicatorList=(0,react.forwardRef)((function ProgressIndicatorList(_ref,ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box_src.xu,{ref,as:"ul",borderTop:!0,children})}));try{ProgressIndicatorList_ProgressIndicatorList.displayName="ProgressIndicatorList",ProgressIndicatorList_ProgressIndicatorList.__docgenInfo={description:"",displayName:"ProgressIndicatorList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/ProgressIndicatorList.tsx#ProgressIndicatorList"]={docgenInfo:ProgressIndicatorList_ProgressIndicatorList.__docgenInfo,name:"ProgressIndicatorList",path:"packages/progress-indicator/src/ProgressIndicatorList.tsx#ProgressIndicatorList"})}catch(__react_docgen_typescript_loader_error){}var ProgressIndicator_excluded=["label"];function ProgressIndicator_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ProgressIndicator_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ProgressIndicator_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ProgressIndicator_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ProgressIndicator_ProgressIndicator=function ProgressIndicator(_ref){var _to,background=_ref.background,items=_ref.items,_useProgressIndicator=useProgressIndicatorIds(),buttonId=_useProgressIndicator.buttonId,bodyId=_useProgressIndicator.bodyId,ref=(0,react.useRef)(null),_useToggleState=(0,src.lP)(!1,!0),_useToggleState2=(0,slicedToArray.Z)(_useToggleState,2),isOpen=_useToggleState2[0],onToggle=_useToggleState2[1],prefersReducedMotion=(0,src.Tb)(),animatedHeight=(0,react_spring_web_esm.useSpring)({from:{display:"none",height:0},to:(_to=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(next){var _ref$current;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!isOpen){_context.next=3;break}return _context.next=3,next({display:"block",overflow:"hidden"});case 3:return _context.next=5,next({overflow:"hidden",height:isOpen?null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.offsetHeight:0,immediate:prefersReducedMotion});case 5:return _context.next=7,next(isOpen?{height:"auto",overflow:"initial"}:{display:"none",overflow:"initial"});case 7:case"end":return _context.stop()}}),_callee)}))),function to(_x){return _to.apply(this,arguments)})}),isMobile=((0,src.iP)().windowWidth||0)<=src.TV.breakpoint.lg-1;return(0,emotion_react_jsx_runtime_browser_esm.BX)(ProgressIndicatorContainer_ProgressIndicatorContainer,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorCollapseButton_ProgressIndicatorCollapseButton,{background,isOpen,onClick:onToggle,ariaControls:bodyId,id:buttonId,items}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(react_spring_web_esm.animated.div,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({id:bodyId},isMobile&&{role:"region","aria-labelledby":buttonId}),{},{style:animatedHeight,css:(0,emotion_react_browser_esm.iv)(ProgressIndicator_objectSpread((0,defineProperty.Z)({},src.TV.mediaQuery.min.md,{overflow:"unset",display:"block !important",height:"auto !important"}),src.lB.print.visible),"",""),children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorList_ProgressIndicatorList,{ref,children:items.map((function(_ref2,index){var label=_ref2.label,props=(0,objectWithoutProperties.Z)(_ref2,ProgressIndicator_excluded);return ProgressIndicator_isItemLink(props)?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItem_ProgressIndicatorItemLink,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({background},props),{},{children:label}),index):(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItem_ProgressIndicatorItemButton,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({background},props),{},{children:label}),index)}))})}))]})},useProgressIndicatorIds=function useProgressIndicatorIds(){var autoId=(0,src.Me)();return{buttonId:"progress-indicator-".concat(autoId,"-button"),bodyId:"progress-indicator-".concat(autoId,"-body")}},ProgressIndicator_isItemLink=function isItemLink(item){return"href"in item};try{ProgressIndicator_ProgressIndicator.displayName="ProgressIndicator",ProgressIndicator_ProgressIndicator.__docgenInfo={description:"",displayName:"ProgressIndicator",props:{background:{defaultValue:null,description:"If the ProgressIndicator is placed on a page with 'bodyAlt' background, please set this to \"bodyAlt\".",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProgressIndicatorItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/ProgressIndicator.tsx#ProgressIndicator"]={docgenInfo:ProgressIndicator_ProgressIndicator.__docgenInfo,name:"ProgressIndicator",path:"packages/progress-indicator/src/ProgressIndicator.tsx#ProgressIndicator"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicator_isItemLink.displayName="isItemLink",ProgressIndicator_isItemLink.__docgenInfo={description:"",displayName:"isItemLink",props:{background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/ProgressIndicator.tsx#isItemLink"]={docgenInfo:ProgressIndicator_isItemLink.__docgenInfo,name:"isItemLink",path:"packages/progress-indicator/src/ProgressIndicator.tsx#isItemLink"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicator.displayName="ProgressIndicator",ProgressIndicator.__docgenInfo={description:"",displayName:"ProgressIndicator",props:{background:{defaultValue:null,description:"If the ProgressIndicator is placed on a page with 'bodyAlt' background, please set this to \"bodyAlt\".",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProgressIndicatorItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/index.tsx#ProgressIndicator"]={docgenInfo:ProgressIndicator.__docgenInfo,name:"ProgressIndicator",path:"packages/progress-indicator/src/index.tsx#ProgressIndicator"})}catch(__react_docgen_typescript_loader_error){}try{isItemLink.displayName="isItemLink",isItemLink.__docgenInfo={description:"",displayName:"isItemLink",props:{background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/index.tsx#isItemLink"]={docgenInfo:isItemLink.__docgenInfo,name:"isItemLink",path:"packages/progress-indicator/src/index.tsx#isItemLink"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicatorCollapseButton.displayName="ProgressIndicatorCollapseButton",ProgressIndicatorCollapseButton.__docgenInfo={description:"",displayName:"ProgressIndicatorCollapseButton",props:{ariaControls:{defaultValue:null,description:"",name:"ariaControls",required:!0,type:{name:"string"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProgressIndicatorItem[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/index.tsx#ProgressIndicatorCollapseButton"]={docgenInfo:ProgressIndicatorCollapseButton.__docgenInfo,name:"ProgressIndicatorCollapseButton",path:"packages/progress-indicator/src/index.tsx#ProgressIndicatorCollapseButton"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicatorContainer.displayName="ProgressIndicatorContainer",ProgressIndicatorContainer.__docgenInfo={description:"",displayName:"ProgressIndicatorContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/index.tsx#ProgressIndicatorContainer"]={docgenInfo:ProgressIndicatorContainer.__docgenInfo,name:"ProgressIndicatorContainer",path:"packages/progress-indicator/src/index.tsx#ProgressIndicatorContainer"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicatorItemLink.displayName="ProgressIndicatorItemLink",ProgressIndicatorItemLink.__docgenInfo={description:"",displayName:"ProgressIndicatorItemLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/index.tsx#ProgressIndicatorItemLink"]={docgenInfo:ProgressIndicatorItemLink.__docgenInfo,name:"ProgressIndicatorItemLink",path:"packages/progress-indicator/src/index.tsx#ProgressIndicatorItemLink"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicatorItemButton.displayName="ProgressIndicatorItemButton",ProgressIndicatorItemButton.__docgenInfo={description:"",displayName:"ProgressIndicatorItemButton",props:{background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/index.tsx#ProgressIndicatorItemButton"]={docgenInfo:ProgressIndicatorItemButton.__docgenInfo,name:"ProgressIndicatorItemButton",path:"packages/progress-indicator/src/index.tsx#ProgressIndicatorItemButton"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicatorList.displayName="ProgressIndicatorList",ProgressIndicatorList.__docgenInfo={description:"",displayName:"ProgressIndicatorList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-indicator/src/index.tsx#ProgressIndicatorList"]={docgenInfo:ProgressIndicatorList.__docgenInfo,name:"ProgressIndicatorList",path:"packages/progress-indicator/src/index.tsx#ProgressIndicatorList"})}catch(__react_docgen_typescript_loader_error){}}}]);