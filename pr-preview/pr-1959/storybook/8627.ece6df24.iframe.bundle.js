"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[8627],{"./packages/react/src/progress-indicator/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ProgressIndicator:()=>ProgressIndicator});var objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),_collapsing_side_bar=__webpack_require__("./packages/react/src/_collapsing-side-bar/index.ts"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts");const hoverColorMap={body:core.boxPalette.backgroundShade,bodyAlt:core.boxPalette.backgroundShadeAlt},progressIndicatorItemTimelineDataAttr="data-agds-progress-indicator-item-timeline-action",progressIndicatorItemRingDataAttr="data-agds-progress-indicator-item-ring",progressIndicatorItemTextContainerDataAttr="data-agds-progress-indicator-item-text-container",progressIndicatorItemTextDataAttr="data-agds-progress-indicator-item-text",statusMap={blocked:{label:"Cannot start yet",icon:icon.xb,iconColor:"border"},doing:{label:"In progress",icon:icon.oh,iconColor:"border"},started:{label:"In progress",icon:icon.oh,iconColor:"border"},todo:{label:"Not started",icon:icon.Rf,iconColor:"border"},done:{label:"Completed",icon:icon.SuccessFilledIcon,iconColor:"success"},saved:{label:"Saved",icon:icon.BK,iconColor:"success"},error:{label:"Error",icon:icon._0,iconColor:"error"}};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","background","children","isActive","items","status"],_excluded2=["label","isActive"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const fallbackSubLevelItem={isActive:!1,label:""};var _ref2={name:"bjn8wh",styles:"position:relative"};const ProgressIndicatorItem=_ref=>{let{as,background="body",children,isActive,items,status}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const{label:statusLabel}=statusMap[status];const subLevelItem=isActive&&items?.find((item=>item.isActive))||fallbackSubLevelItem,{label:subLevelItemLabel,isActive:_subLevelItemIsActive}=subLevelItem,subLevelItemRestProps=(0,objectWithoutProperties.A)(subLevelItem,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"li",background,css:(0,emotion_react_browser_esm.AH)({"&:first-of-type":{"[data-agds-progress-indicator-item-timeline-action]:first-of-type":{opacity:0}},"&:last-of-type":{"[data-agds-progress-indicator-item-timeline-action]:last-of-type":{opacity:0},"[data-agds-progress-indicator-item-text-container]":{borderBottomWidth:0}}},"",""),children:(0,emotion_react_jsx_runtime_browser_esm.FD)(box.Box,{as:"span",columnGap:.5,css:(0,emotion_react_browser_esm.AH)({display:"grid",gridTemplateColumns:"min-content 1fr",textDecoration:"none",width:"100%","[data-agds-progress-indicator-item-ring]::before":{backgroundColor:box.Yi[background]}},"",""),focusRingFor:"keyboard",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItemIcon,{isActive,status}),(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,_objectSpread(_objectSpread(_objectSpread({[progressIndicatorItemTextContainerDataAttr]:"","aria-current":isActive||void 0,as,css:(0,emotion_react_browser_esm.AH)({textDecoration:"none","&:hover":{backgroundColor:hoverColorMap[background]},"&:hover span:not(:last-of-type)":_objectSpread({},core.tm.underline)},"",""),flexGrow:1,fontFamily:"body",gap:.25,justifyContent:"center",paddingX:.5,paddingY:1},!items&&{borderBottom:!0,borderColor:"muted"}),props),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontWeight:isActive?"bold":"normal",[progressIndicatorItemTextDataAttr]:"",children}),(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"muted",fontSize:"xs",lineHeight:"nospace",children:statusLabel})]})),subLevelItemLabel&&(0,emotion_react_jsx_runtime_browser_esm.FD)(emotion_react_jsx_runtime_browser_esm.FK,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItemTimeline,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"ul",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"li",css:_ref2,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,_objectSpread(_objectSpread({},subLevelItemRestProps),{},{alignItems:"center","aria-current":!0,as,borderBottom:!0,borderColor:"muted",color:"text",css:(0,emotion_react_browser_esm.AH)({textDecoration:"none","&:hover":_objectSpread(_objectSpread({backgroundColor:hoverColorMap[background]},core.tm.underline),{},{":not(:focus-visible)::before":{backgroundColor:hoverColorMap[background],content:'""',height:(0,core.QY)(.5),left:0,position:"absolute",top:`-${(0,core.QY)(.5)}`,width:"100%"}})},"",""),gap:.5,padding:.5,paddingBottom:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.LE,{color:"selected"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"inherit",fontSize:"xs",fontWeight:"bold",children:subLevelItemLabel})]}))})})]})]})})},ProgressIndicatorItemTimeline=()=>(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:(0,emotion_react_browser_esm.AH)({backgroundColor:core.boxPalette.border,flex:1,justifySelf:"center",width:core.tokens.borderWidth.md,"@media (forced-colors: active)":{backgroundColor:"GrayText"}},"",""),[progressIndicatorItemTimelineDataAttr]:""}),ProgressIndicatorItemIcon=({status,isActive})=>{const{icon:Icon,iconColor}=statusMap[status],ringWidth=core.tokens.borderWidth.md,ringInset=ringWidth+3,processedIconColor=isActive&&"border"===iconColor?"selected":iconColor;return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center",as:"span",flexDirection:"column",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItemTimeline,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{[progressIndicatorItemRingDataAttr]:"",css:(0,emotion_react_browser_esm.AH)(_objectSpread({position:"relative",paddingLeft:ringInset,paddingRight:ringInset},isActive&&{"::before":{position:"absolute",top:-ringInset,bottom:-ringInset,left:0,right:0,borderRadius:"100%",content:'""',border:`${ringWidth}px solid ${core.boxPalette.selected}`}}),"",""),children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{color:processedIconColor,css:(0,emotion_react_browser_esm.AH)({position:"relative",display:"block",margin:-1},"",""),size:"md"})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItemTimeline,{})]})},ProgressIndicatorItemLink_excluded=["children","isActive","status"];function ProgressIndicatorItemLink_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ProgressIndicatorItemLink_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ProgressIndicatorItemLink_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ProgressIndicatorItemLink_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ProgressIndicatorItemLink=_ref=>{let{children,isActive,status}=_ref,props=(0,objectWithoutProperties.A)(_ref,ProgressIndicatorItemLink_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItem,ProgressIndicatorItemLink_objectSpread(ProgressIndicatorItemLink_objectSpread({as:text_link.TextLink,isActive:Boolean(isActive),status},props),{},{children}))};var src_button=__webpack_require__("./packages/react/src/button/index.ts");const ProgressIndicatorItemButton_excluded=["children"];function ProgressIndicatorItemButton_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ProgressIndicatorItemButton_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ProgressIndicatorItemButton_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ProgressIndicatorItemButton_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ProgressIndicatorItemButton=_ref=>{let{children}=_ref,props=(0,objectWithoutProperties.A)(_ref,ProgressIndicatorItemButton_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItem,ProgressIndicatorItemButton_objectSpread(ProgressIndicatorItemButton_objectSpread({as:src_button.SC},props),{},{children}))};function ProgressIndicatorList({children}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"ul",borderBottom:!0,borderTop:!0,css:(0,emotion_react_browser_esm.AH)({[core.tokens.mediaQuery.max.sm]:{borderTopWidth:0}},"",""),children})}const ProgressIndicator_excluded=["label"];function ProgressIndicator_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ProgressIndicator_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ProgressIndicator_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ProgressIndicator_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ProgressIndicator=({activePath,background,items,hideSubtitle=!1})=>{const subTitle=hideSubtitle?void 0:`${items.filter((({status})=>"done"===status)).length} of ${items.length} steps completed`;const itemsWithDefaultActive=items.some((({isActive})=>isActive))?items:items.map((item=>{const isActiveFromLegacyDoingStatus="doing"===item.status,activePathMatcher="href"in item?item.href:item.label,activePathMatcherWithTrailingSlash=`${activePathMatcher}${activePathMatcher?.endsWith("/")?"":"/"}`,hasActiveSubStep=!!activePath?.split(activePathMatcherWithTrailingSlash)[1]?.length,isActive=isActiveFromLegacyDoingStatus||!!activePathMatcher&&(activePath===activePathMatcher||hasActiveSubStep)||!1,levelTwoItemsWithIsActive="items"in item?item.items?.map((levelTwoItem=>ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({},levelTwoItem),{},{isActive:"href"in levelTwoItem&&levelTwoItem.href===activePath}))):void 0;return ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({},item),{},{isActive,items:levelTwoItemsWithIsActive})}));return(0,emotion_react_jsx_runtime_browser_esm.Y)(_collapsing_side_bar.F3,{background,subTitle,title:"Progress",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorList,{children:itemsWithDefaultActive.map((_ref=>{let{label}=_ref,props=(0,objectWithoutProperties.A)(_ref,ProgressIndicator_excluded);return isItemLink(props)?(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItemLink,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({background},props),{},{children:label}),label):(0,emotion_react_jsx_runtime_browser_esm.Y)(ProgressIndicatorItemButton,ProgressIndicator_objectSpread(ProgressIndicator_objectSpread({background},props),{},{children:label}),label)}))})})},isItemLink=item=>"href"in item}}]);