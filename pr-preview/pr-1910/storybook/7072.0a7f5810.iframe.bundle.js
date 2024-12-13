"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[7072],{"./packages/react/src/app-layout/AppLayoutSidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>AppLayoutSidebar});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),AppLayoutContext=__webpack_require__("./packages/react/src/app-layout/AppLayoutContext.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["endElement","icon","isActive","items","label","level"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const addIsActive=(activePath,level=0)=>item=>{const isActive="href"in item&&item.href===activePath||hasSubLevelActiveItem(item.items,activePath);return _objectSpread(_objectSpread({},item),{},{isActive,items:isActive||item.items?.length?item?.items?.map(addIsActive(activePath,level+1)):void 0,level:level+1})},AppLayoutSidebarNav=({activePath,background,items,subLevelVisible})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{as:"nav","aria-label":"main",paddingBottom:1.5,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{as:"ul",children:items.map(((group,index)=>{const isFirstItem=0===index,groupItems=(Array.isArray(group)?group:group.items).map(addIsActive(activePath)),disableGroupPadding=!Array.isArray(group)&&Boolean(group.options?.disableGroupPadding),prevGroup=items[index-1],prevGroupDisableGroupPadding=!!prevGroup&&(!Array.isArray(prevGroup)&&Boolean(prevGroup.options?.disableGroupPadding));return(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[isFirstItem?null:(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarNavDivider,{disablePaddingTop:prevGroupDisableGroupPadding,disablePaddingBottom:disableGroupPadding}),groupItems.map(((item,index)=>{const isActiveGroup=hasSubLevelActiveItem(item.items,activePath),isOpen="always"===subLevelVisible||isActiveGroup;return(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarNavListItem,{activePath,background,isActiveGroup,isOpen,item,subLevelVisible},index)}))]},index)}))})});var _ref={name:"1ff36h2",styles:"flex-grow:1"};function AppLayoutSidebarNavListItem({activePath,background,isActiveGroup,isOpen,item,subLevelVisible}){const Link=(0,core.d5)(),{endElement,icon:Icon,isActive,items,label,level}=item,restItemProps=(0,objectWithoutProperties.A)(item,_excluded),{closeMobileMenu}=(0,AppLayoutContext.c)(),numberOfItems=items?.length||0,hasSubLevelItemsIndicator=numberOfItems>0&&"always"!==subLevelVisible;if("href"in item){const isCurrentPage=item.href===activePath;return(0,emotion_react_jsx_runtime_browser_esm.FD)(AppLayoutSidebarNavItemInner,{background,hasEndElement:Boolean(endElement),isCurrentPage,isActive:isActiveGroup,isOpen,level:item.level,onClick:closeMobileMenu,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(Link,_objectSpread(_objectSpread({"aria-current":isCurrentPage?"page":void 0},restItemProps),{},{children:[Icon&&1===level&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{color:"inherit"}),2===level&&(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:"–"}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:_ref,children:label}),endElement,hasSubLevelItemsIndicator&&(isActive?(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.D3,{"aria-hidden":!1,"aria-label":`. Sub-level ${1===numberOfItems?"link":"links"} below.`,size:"md"}):(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.vK,{"aria-hidden":!1,"aria-label":`. Has ${numberOfItems} sub-level ${1===numberOfItems?"link":"links"}.`,size:"md"}))]})),Boolean(item.items?.length)&&(isOpen||isCurrentPage)&&(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{as:"ul",children:item.items?.map?.((item=>(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarNavListItem,{activePath,background,isActiveGroup:Boolean(isActive),isOpen,item,subLevelVisible},item.label?.toString())))})]})}return"onClick"in item?(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarNavItemInner,{background,hasEndElement:Boolean(endElement),isActive:!1,isCurrentPage:!1,isOpen:!1,onClick:closeMobileMenu,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(src_button.SC,_objectSpread(_objectSpread({},restItemProps),{},{children:[Icon?(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{color:"inherit"}):null,(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:label}),endElement]}))}):(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarNavItemInner,{background,isActive:!1,isCurrentPage:!1,isOpen:!1,hasEndElement:!1,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{as:"span",gap:.25,children:label})})}function AppLayoutSidebarNavItemInner({background,children,hasEndElement,isCurrentPage,isActive,isOpen,level,onClick}){return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:(0,emotion_react_browser_esm.AH)({"> a, > button, > span":{width:"100%",boxSizing:"border-box",wordBreak:"break-word",paddingTop:(0,core.QY)(1),paddingBottom:(0,core.QY)(1),paddingLeft:(0,core.QY)(2===level?3:1.5),paddingRight:(0,core.QY)(1),"& > svg":{flexShrink:0}},"> a, > button":_objectSpread(_objectSpread(_objectSpread(_objectSpread({position:"relative",display:"flex",alignItems:"center",gap:(0,core.QY)(.75),color:isActive&&2!==level||isCurrentPage?core.boxPalette.foregroundText:core.boxPalette.foregroundAction},(isActive||isCurrentPage||isOpen)&&{fontWeight:isCurrentPage?core.tokens.fontWeight.bold:core.tokens.fontWeight.normal,background:isCurrentPage?core.boxPalette.selectedMuted:void 0,"&::before":_objectSpread(_objectSpread(_objectSpread({content:"''",position:"absolute",top:0,left:0,bottom:0,borderLeftStyle:"solid",borderLeftWidth:core.tokens.borderWidth.xl},isCurrentPage&&{borderLeftColor:core.boxPalette.selected}),!isCurrentPage&&isActive&&{borderLeftColor:core.boxPalette.borderMuted}),!isCurrentPage&&!isActive&&isOpen&&{borderLeft:"none"})}),hasEndElement&&{"& > :last-child":{marginLeft:"auto"}}),{},{"&:hover":{background:core.boxPalette["body"===background?"backgroundShade":"backgroundShadeAlt"],color:core.boxPalette.foregroundText,[`& > span:nth-of-type(${level})`]:core.tm.underline}},box.T7),{},{":focus-visible":{zIndex:core.tokens.zIndex.elevated,outlineOffset:`-${core.tm.outline.outlineWidth}`,"&::before":{zIndex:-1}}}),"> span":{color:core.boxPalette.foregroundText},"> a":{textDecoration:"none"}},"",""),onClick,children})}function AppLayoutSidebarNavDivider({disablePaddingTop,disablePaddingBottom}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"li",paddingTop:disablePaddingTop?0:1,paddingBottom:disablePaddingBottom?0:1,"aria-hidden":"true",children:(0,emotion_react_jsx_runtime_browser_esm.Y)("hr",{css:(0,emotion_react_browser_esm.AH)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:core.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:core.boxPalette.borderMuted,width:"100%"},"","")})})}function hasSubLevelActiveItem(items,bestMatch){return!(!items?.length||!bestMatch)&&items.some((item=>"href"in item&&item.href===bestMatch||"items"in item&&hasSubLevelActiveItem(item.items,bestMatch)))}var react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),react_spring_web_esm=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),es2015=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),utils=__webpack_require__("./packages/react/src/app-layout/utils.ts");function AppLayoutSidebarDialog({children,palette}){const{isMobileMenuOpen,closeMobileMenu}=(0,AppLayoutContext.c)(),{modalContainerRef}=(0,core.X5)(isMobileMenuOpen);(0,react.useEffect)((()=>{const handleKeyDown=e=>{"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),closeMobileMenu())};return window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown)}),[closeMobileMenu]);const prefersReducedMotion=(0,core.jt)(),dialogTransitions=(0,react_spring_web_esm.useTransition)([isMobileMenuOpen],{from:{translateX:"-100%",opacity:0},enter:{translateX:"0%",opacity:1},leave:{translateX:"-100%",opacity:0},config:{duration:150},immediate:prefersReducedMotion});return(0,core.Sw)()?(0,react_dom.createPortal)((0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[isMobileMenuOpen&&(0,emotion_react_jsx_runtime_browser_esm.Y)(LockScroll,{}),dialogTransitions((({translateX,opacity},item)=>item?(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{ref:modalContainerRef,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Overlay,{onClick:closeMobileMenu,style:{opacity}}),(0,emotion_react_jsx_runtime_browser_esm.Y)(es2015.Ay,{returnFocus:!0,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(AnimatedBox,{"aria-label":"Menu","aria-modal":"true",background:"shade",css:(0,emotion_react_browser_esm.AH)({position:"fixed",zIndex:core.tokens.zIndex.dialog,top:0,left:0,bottom:0,overflowY:"auto"},"",""),display:{[utils.g8]:"none"},palette,role:"dialog",style:{translateX},width:utils.Jl,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(CloseMenuButton,{onClick:closeMobileMenu}),children]})})]}):null))]}),document.body):null}const AnimatedBox=(0,react_spring_web_esm.animated)(box.Box);function LockScroll(){return(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_browser_esm.mL,{styles:(0,emotion_react_browser_esm.AH)({body:{overflow:"hidden"},[core.tokens.mediaQuery.min[utils.g8]]:{body:{overflow:"unset"}}},"","")})}function Overlay({onClick,style}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(react_spring_web_esm.animated.div,{css:(0,emotion_react_browser_esm.AH)({display:"block",position:"fixed",inset:0,backgroundColor:core.boxPalette.overlay,zIndex:core.tokens.zIndex.overlay,[core.tokens.mediaQuery.min[utils.g8]]:{display:"none"}},"",""),onClick,style})}function CloseMenuButton({onClick}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignItems:"center",borderBottom:!0,borderColor:"muted",flexShrink:0,paddingLeft:1,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center",as:src_button.SC,color:"action",css:(0,emotion_react_browser_esm.AH)({":focus":{outlineOffset:`-${core.tm.outline.outlineWidth}`}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,onClick,padding:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.US,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":"true",children:"Close"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(a11y.s6,{children:"Close menu"})]})})}function AppLayoutSidebar_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function AppLayoutSidebar_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?AppLayoutSidebar_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AppLayoutSidebar_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function AppLayoutSidebar({activePath,background="bodyAlt",items,palette,subLevelVisible="whenActive"}){const{focusMode}=(0,AppLayoutContext.c)(),commonMobileAndDesktopNavProps={activePath:(0,utils.B4)(items,activePath),items,subLevelVisible};return(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{background,borderColor:"muted",borderRight:!0,css:(0,emotion_react_browser_esm.AH)({display:"none",width:utils.Jl,[core.tokens.mediaQuery.min[utils.g8]]:{display:focusMode?"none":"flex"}},"",""),flexGrow:1,gap:1,palette,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarNav,AppLayoutSidebar_objectSpread(AppLayoutSidebar_objectSpread({},commonMobileAndDesktopNavProps),{},{background}))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarDialog,{palette,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutSidebarNav,AppLayoutSidebar_objectSpread(AppLayoutSidebar_objectSpread({},commonMobileAndDesktopNavProps),{},{background:"bodyAlt"}))})]})}}}]);