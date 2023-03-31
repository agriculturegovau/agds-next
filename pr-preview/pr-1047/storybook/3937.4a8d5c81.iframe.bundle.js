"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3937],{"./packages/react/src/progress-indicator/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ProgressIndicator:()=>ProgressIndicator,Gr:()=>ProgressIndicatorCollapseButton,BP:()=>ProgressIndicatorHeading,az:()=>ProgressIndicatorItemButton,hj:()=>ProgressIndicatorItemLink,zW:()=>ProgressIndicatorList});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),react=__webpack_require__("./node_modules/react/index.js"),react_spring_web_esm=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ProgressIndicatorHeading=function ProgressIndicatorHeading(_ref){var heading=_ref.heading,subHeading=_ref.subHeading;return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Stack,{gap:.5,paddingBottom:1.5,css:(0,emotion_react_browser_esm.iv)((0,defineProperty.Z)({display:"none"},core.tokens.mediaQuery.min.md,{display:"flex"}),"",""),children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{as:"h2",fontSize:"md",fontWeight:"bold",lineHeight:"heading",children:heading}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{color:"muted",fontSize:"xs",children:subHeading})]})};try{ProgressIndicatorHeading.displayName="ProgressIndicatorHeading",ProgressIndicatorHeading.__docgenInfo={description:"",displayName:"ProgressIndicatorHeading",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},subHeading:{defaultValue:null,description:"",name:"subHeading",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/progress-indicator/ProgressIndicatorHeading.tsx#ProgressIndicatorHeading"]={docgenInfo:ProgressIndicatorHeading.__docgenInfo,name:"ProgressIndicatorHeading",path:"packages/react/src/progress-indicator/ProgressIndicatorHeading.tsx#ProgressIndicatorHeading"})}catch(__react_docgen_typescript_loader_error){}var icon=__webpack_require__("./packages/react/src/icon/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),hoverColorMap={body:core.boxPalette.backgroundShade,bodyAlt:core.boxPalette.backgroundShadeAlt},AnimatedIcon=(0,react_spring_web_esm.animated)(icon.ChevronDownIcon),ProgressIndicatorCollapseButton=function ProgressIndicatorCollapseButton(_ref){var ariaControls=_ref.ariaControls,_ref$background=_ref.background,background=void 0===_ref$background?"body":_ref$background,id=_ref.id,isOpen=_ref.isOpen,label=_ref.label,onClick=_ref.onClick,prefersReducedMotion=(0,core.usePrefersReducedMotion)(),iconStyle=(0,react_spring_web_esm.useSpring)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(".concat(isOpen?180:0,"deg)")},immediate:prefersReducedMotion});return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{as:src_button.Yd,"aria-controls":ariaControls,"aria-expanded":isOpen,onClick,id,color:"action",fontSize:"md",lineHeight:"heading",background,fontWeight:"bold",padding:1,justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,css:(0,emotion_react_browser_esm.iv)((0,defineProperty.Z)({"&:hover":{background:hoverColorMap[background]}},core.tokens.mediaQuery.min.md,{display:"none"}),"",""),children:[label,(0,emotion_react_jsx_runtime_browser_esm.tZ)(AnimatedIcon,{size:"sm",weight:"bold",style:iconStyle})]})};try{ProgressIndicatorCollapseButton.displayName="ProgressIndicatorCollapseButton",ProgressIndicatorCollapseButton.__docgenInfo={description:"",displayName:"ProgressIndicatorCollapseButton",props:{ariaControls:{defaultValue:null,description:"",name:"ariaControls",required:!0,type:{name:"string"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/progress-indicator/ProgressIndicatorCollapseButton.tsx#ProgressIndicatorCollapseButton"]={docgenInfo:ProgressIndicatorCollapseButton.__docgenInfo,name:"ProgressIndicatorCollapseButton",path:"packages/react/src/progress-indicator/ProgressIndicatorCollapseButton.tsx#ProgressIndicatorCollapseButton"})}catch(__react_docgen_typescript_loader_error){}var text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),_excluded=["children"],_excluded2=["children"],_excluded3=["as","background","children","status"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ProgressIndicatorItemLink=function ProgressIndicatorItemLink(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItem,_objectSpread(_objectSpread({as:text_link.TextLink},props),{},{children}))},ProgressIndicatorItemButton=function ProgressIndicatorItemButton(_ref2){var children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItem,_objectSpread(_objectSpread({as:src_button.Yd},props),{},{children}))},_ref6={name:"g65o95",styles:"text-decoration:none"},ProgressIndicatorItem=function ProgressIndicatorItem(_ref3){var _lastOfType,_hover,_css2,as=_ref3.as,_ref3$background=_ref3.background,background=void 0===_ref3$background?"body":_ref3$background,children=_ref3.children,status=_ref3.status,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3),active="doing"===status,label=statusMap[status].label;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,{as:"li",background,css:(0,emotion_react_browser_esm.iv)({"&:first-of-type":(0,defineProperty.Z)({},"[".concat(progressIndicatorItemTimelineDataAttr,"]:first-of-type"),{opacity:0}),"&:last-of-type":(_lastOfType={},(0,defineProperty.Z)(_lastOfType,"[".concat(progressIndicatorItemTimelineDataAttr,"]:last-of-type"),{opacity:0}),(0,defineProperty.Z)(_lastOfType,"[".concat(progressIndicatorItemTextContainerDataAttr,"]"),{borderBottomWidth:0}),_lastOfType)},"",""),children:(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,_objectSpread(_objectSpread({as,gap:1,css:(0,emotion_react_browser_esm.iv)((_css2={width:"100%",textDecoration:"none"},(0,defineProperty.Z)(_css2,"[".concat(progressIndicatorItemRingDataAttr,"]:before"),{backgroundColor:box.Vu[background]}),(0,defineProperty.Z)(_css2,"> span:last-of-type > span:first-of-type",{fontWeight:active?"bold":"normal"}),(0,defineProperty.Z)(_css2,"&:hover",(_hover={backgroundColor:hoverColorMap[background]},(0,defineProperty.Z)(_hover,"[".concat(progressIndicatorItemRingDataAttr,"]:before"),{backgroundColor:hoverColorMap[background]}),(0,defineProperty.Z)(_hover,"> span:last-of-type > span:first-of-type",core.lB.underline),_hover)),_css2),"",""),focus:!0},props),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItemIcon,{status}),(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Stack,_objectSpread(_objectSpread({},(0,defineProperty.Z)({},progressIndicatorItemTextContainerDataAttr,"")),{},{as:"span",flexDirection:"column-reverse",flexGrow:1,gap:0,justifyContent:"center",paddingY:.75,fontFamily:"body",fontWeight:active?"bold":"normal",borderBottom:!0,borderColor:"muted",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,_objectSpread(_objectSpread({},(0,defineProperty.Z)({},progressIndicatorItemTextDataAttr,"")),{},{children})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{color:"muted",fontSize:"xs",lineHeight:"nospace",css:_ref6,children:label})]}))]}))})},ProgressIndicatorItemTimeline=function ProgressIndicatorItemTimeline(){return(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",_objectSpread(_objectSpread({},(0,defineProperty.Z)({},progressIndicatorItemTimelineDataAttr,"")),{},{css:(0,emotion_react_browser_esm.iv)({width:core.tokens.borderWidth.md,backgroundColor:core.boxPalette.border,flex:1},"","")}))},ProgressIndicatorItemIcon=function ProgressIndicatorItemIcon(_ref8){var status=_ref8.status,_statusMap$status=statusMap[status],Icon=_statusMap$status.icon,iconColor=_statusMap$status.iconColor,ringWidth=core.tokens.borderWidth.md,ringInset=ringWidth+3;return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{as:"span",flexDirection:"column",alignItems:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItemTimeline,{}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",_objectSpread(_objectSpread({},(0,defineProperty.Z)({},progressIndicatorItemRingDataAttr,"")),{},{css:(0,emotion_react_browser_esm.iv)(_objectSpread({position:"relative",paddingLeft:ringInset,paddingRight:ringInset},"doing"===status&&{":before":{position:"absolute",top:-ringInset,bottom:-ringInset,left:0,right:0,borderRadius:"100%",content:'""',border:"".concat(ringWidth,"px solid ").concat(core.boxPalette.foregroundAction)}}),"",""),children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Icon,{size:"md",color:iconColor,css:(0,emotion_react_browser_esm.iv)({position:"relative",display:"block",margin:-1},"","")})})),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItemTimeline,{})]})},progressIndicatorItemTimelineDataAttr="data-agds-progress-indicator-item-timeline-action",progressIndicatorItemRingDataAttr="data-agds-progress-indicator-item-ring",progressIndicatorItemTextContainerDataAttr="data-agds-progress-indicator-item-text-container",progressIndicatorItemTextDataAttr="data-agds-progress-indicator-item-text",statusMap={blocked:{label:"Cannot start yet",icon:icon.Zs,iconColor:"border"},doing:{label:"In progress",icon:icon.NB,iconColor:"action"},todo:{label:"Not started",icon:icon.Q2,iconColor:"border"},done:{label:"Completed",icon:icon.qE,iconColor:"success"}};try{ProgressIndicatorItemLink.displayName="ProgressIndicatorItemLink",ProgressIndicatorItemLink.__docgenInfo={description:"",displayName:"ProgressIndicatorItemLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"blocked"'},{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/progress-indicator/ProgressIndicatorItem.tsx#ProgressIndicatorItemLink"]={docgenInfo:ProgressIndicatorItemLink.__docgenInfo,name:"ProgressIndicatorItemLink",path:"packages/react/src/progress-indicator/ProgressIndicatorItem.tsx#ProgressIndicatorItemLink"})}catch(__react_docgen_typescript_loader_error){}try{ProgressIndicatorItemButton.displayName="ProgressIndicatorItemButton",ProgressIndicatorItemButton.__docgenInfo={description:"",displayName:"ProgressIndicatorItemButton",props:{background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"blocked"'},{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/progress-indicator/ProgressIndicatorItem.tsx#ProgressIndicatorItemButton"]={docgenInfo:ProgressIndicatorItemButton.__docgenInfo,name:"ProgressIndicatorItemButton",path:"packages/react/src/progress-indicator/ProgressIndicatorItem.tsx#ProgressIndicatorItemButton"})}catch(__react_docgen_typescript_loader_error){}var ProgressIndicatorList=(0,react.forwardRef)((function ProgressIndicatorList(_ref,ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,{ref,as:"ul",borderTop:!0,children})}));try{ProgressIndicatorList.displayName="ProgressIndicatorList",ProgressIndicatorList.__docgenInfo={description:"",displayName:"ProgressIndicatorList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/progress-indicator/ProgressIndicatorList.tsx#ProgressIndicatorList"]={docgenInfo:ProgressIndicatorList.__docgenInfo,name:"ProgressIndicatorList",path:"packages/react/src/progress-indicator/ProgressIndicatorList.tsx#ProgressIndicatorList"})}catch(__react_docgen_typescript_loader_error){}var ProgressIndicator_excluded=["label"];function ProgressIndicator_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ProgressIndicator_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ProgressIndicator_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ProgressIndicator_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ProgressIndicator=function ProgressIndicator(_ref){var _to,background=_ref.background,items=_ref.items,_useProgressIndicator=useProgressIndicatorIds(),buttonId=_useProgressIndicator.buttonId,bodyId=_useProgressIndicator.bodyId,ref=(0,react.useRef)(null),_useToggleState=(0,core.useToggleState)(!1,!0),_useToggleState2=(0,slicedToArray.Z)(_useToggleState,2),isOpen=_useToggleState2[0],onToggle=_useToggleState2[1],prefersReducedMotion=(0,core.usePrefersReducedMotion)(),animatedHeight=(0,react_spring_web_esm.useSpring)({from:{display:"none",height:0},to:(_to=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(next){var _ref$current;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!isOpen){_context.next=3;break}return _context.next=3,next({display:"block",overflow:"hidden"});case 3:return _context.next=5,next({overflow:"hidden",height:isOpen?null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.offsetHeight:0,immediate:prefersReducedMotion});case 5:return _context.next=7,next(isOpen?{height:"auto",overflow:"initial"}:{display:"none",overflow:"initial"});case 7:case"end":return _context.stop()}}),_callee)}))),function to(_x){return _to.apply(this,arguments)})}),isMobile=((0,core.iP)().windowWidth||0)<=core.tokens.breakpoint.lg-1,stepsCompleted=items.filter((function(item){return"done"===item.status})).length,totalSteps=items.length,subHeading="".concat(stepsCompleted," of ").concat(totalSteps," steps completed");return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Box,{as:"section",borderBottom:!0,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorHeading,{heading:"Progress",subHeading}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorCollapseButton,{background,isOpen,onClick:onToggle,ariaControls:bodyId,id:buttonId,label:subHeading}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(react_spring_web_esm.animated.div,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({id:bodyId},isMobile&&{role:"region","aria-labelledby":buttonId}),{},{style:animatedHeight,css:(0,emotion_react_browser_esm.iv)(ProgressIndicator_objectSpread((0,defineProperty.Z)({},core.tokens.mediaQuery.min.md,{overflow:"unset",display:"block !important",height:"auto !important"}),core.lB.print.visible),"",""),children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorList,{ref,children:items.map((function(_ref2,index){var label=_ref2.label,props=(0,objectWithoutProperties.Z)(_ref2,ProgressIndicator_excluded);return isItemLink(props)?(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItemLink,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({background},props),{},{children:label}),index):(0,emotion_react_jsx_runtime_browser_esm.tZ)(ProgressIndicatorItemButton,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({background},props),{},{children:label}),index)}))})}))]})},useProgressIndicatorIds=function useProgressIndicatorIds(){var autoId=(0,core.Me)();return{buttonId:"progress-indicator-".concat(autoId,"-button"),bodyId:"progress-indicator-".concat(autoId,"-body")}},isItemLink=function isItemLink(item){return"href"in item};try{ProgressIndicator.displayName="ProgressIndicator",ProgressIndicator.__docgenInfo={description:"",displayName:"ProgressIndicator",props:{background:{defaultValue:null,description:"If the ProgressIndicator is placed on a page with 'bodyAlt' background, please set this to \"bodyAlt\".",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProgressIndicatorItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/progress-indicator/ProgressIndicator.tsx#ProgressIndicator"]={docgenInfo:ProgressIndicator.__docgenInfo,name:"ProgressIndicator",path:"packages/react/src/progress-indicator/ProgressIndicator.tsx#ProgressIndicator"})}catch(__react_docgen_typescript_loader_error){}try{isItemLink.displayName="isItemLink",isItemLink.__docgenInfo={description:"",displayName:"isItemLink",props:{background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"blocked"'},{value:'"doing"'},{value:'"todo"'},{value:'"done"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/progress-indicator/ProgressIndicator.tsx#isItemLink"]={docgenInfo:isItemLink.__docgenInfo,name:"isItemLink",path:"packages/react/src/progress-indicator/ProgressIndicator.tsx#isItemLink"})}catch(__react_docgen_typescript_loader_error){}}}]);