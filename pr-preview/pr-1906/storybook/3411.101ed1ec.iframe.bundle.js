"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3411],{"./packages/react/src/app-layout/AppLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>AppLayout});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_AppLayoutContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/app-layout/AppLayoutContext.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/app-layout/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function AppLayout({children,focusMode=!1}){const[isMobileMenuOpen,openMobileMenu,closeMobileMenu]=(0,_core__WEBPACK_IMPORTED_MODULE_0__.C6)(!1);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_AppLayoutContext__WEBPACK_IMPORTED_MODULE_1__.p.Provider,{value:{focusMode,isMobileMenuOpen,openMobileMenu,closeMobileMenu},children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(AppLayoutGrid,{focusMode,children})})}function AppLayoutGrid({children,focusMode}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("div",{css:(0,_core__WEBPACK_IMPORTED_MODULE_0__.mq)({display:"grid",minHeight:"100vh",gridTemplateRows:"auto 1fr",gridTemplateColumns:(0,_core__WEBPACK_IMPORTED_MODULE_0__.AY)({xs:"1fr",[_utils__WEBPACK_IMPORTED_MODULE_3__.g8]:focusMode?"1fr":`${_utils__WEBPACK_IMPORTED_MODULE_3__.Jl} 1fr`})}),children})}},"./packages/react/src/app-layout/AppLayoutContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useAppLayoutContext,p:()=>AppLayoutContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const AppLayoutContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function useAppLayoutContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppLayoutContext);if(void 0===context)throw new Error("`AppLayoutContext` not found.");return context}},"./packages/react/src/app-layout/AppLayoutHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>AppLayoutHeader});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const GAP_REM=1.5,LOGO_HEIGHT="3.75rem";var _ref={name:"1kn4ch8",styles:"margin-left:-0.5rem;margin-right:-0.5rem;overflow:hidden"};function AppLayoutHeaderBrand({badgeLabel,dividerPosition,logo,heading,hasAccountDetails,href,secondHref,secondLogo,subLine}){const Link=(0,core.d5)();return logo&&secondLogo?(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{css:_ref,flexDirection:{xs:"column",lg:"row"},flexWrap:{xs:"wrap",xl:"nowrap"},gap:{xs:1,md:GAP_REM},inline:!0,padding:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{css:(0,emotion_react_browser_esm.AH)({marginRight:hasAccountDetails&&"after"===dividerPosition?(0,core.mapSpacing)(GAP_REM):0},"",""),flexDirection:{xs:"column",sm:"row"},flexShrink:0,gap:GAP_REM,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignSelf:{xs:"start",sm:"center"},as:Link,color:"text",css:(0,emotion_react_browser_esm.AH)(_objectSpread({" img, svg":{height:LOGO_HEIGHT}},core.tm.print.hidden),"",""),focusRingFor:"keyboard",href,children:logo}),"between"===dividerPosition&&(0,emotion_react_jsx_runtime_browser_esm.Y)(DividingLine,{dividerPosition}),(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,_objectSpread(_objectSpread({alignSelf:{xs:"start",sm:"center"},as:secondHref?Link:"span",color:"text",css:(0,emotion_react_browser_esm.AH)(_objectSpread({" img, svg":{width:"100%"}},core.tm.print.hidden),"",""),focusRingFor:"keyboard"},secondHref&&{href:secondHref}),{},{children:secondLogo}))]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{css:"after"===dividerPosition?{[core.tokens.mediaQuery.min.lg]:{marginLeft:`calc(-${hasAccountDetails?(0,core.mapSpacing)(GAP_REM):0} - ${core.tokens.borderWidth.sm}px)`}}:void 0,gap:GAP_REM,children:["after"===dividerPosition&&(0,emotion_react_jsx_runtime_browser_esm.Y)(DividingLine,{dividerPosition}),(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{as:Link,color:"text",css:(0,emotion_react_browser_esm.AH)({textDecoration:"none",":hover":core.tm.underline},"",""),focusRingFor:"keyboard",href,justifyContent:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"flex-start",gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontSize:"lg",fontWeight:"bold",children:heading}),badgeLabel&&(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderBrandBadge,{children:badgeLabel})]}),subLine&&(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"muted",fontSize:"xs",children:subLine})]})]})]}):(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:Link,href,paddingY:.5,flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},gap:{xs:1,md:0},focusRingFor:"keyboard",color:"text",css:(0,emotion_react_browser_esm.AH)({textDecoration:"none","&:hover":core.tm.underline,svg:{display:"block",height:LOGO_HEIGHT,flexShrink:0}},"",""),children:[logo,(0,emotion_react_jsx_runtime_browser_esm.Y)(DividingLine,{singleLogo:!0}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",maxWidth:core.tokens.maxWidth.bodyText,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"flex-start",gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontSize:"lg",fontWeight:"bold",children:heading}),badgeLabel&&(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderBrandBadge,{children:badgeLabel})]}),subLine&&(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"muted",fontSize:"xs",children:subLine})]})]})}function AppLayoutHeaderBrandBadge({children}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{fontWeight:"bold",paddingLeft:.5,paddingRight:.5,border:!0,borderWidth:"md",css:(0,emotion_react_browser_esm.AH)({fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:core.boxPalette.foregroundText,borderRadius:"2em"},"",""),children})}const DividingLine=({dividerPosition,singleLogo})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{borderLeft:!0,css:(0,emotion_react_browser_esm.AH)(_objectSpread({margin:singleLogo?"0 1rem":void 0},core.tm.print.hidden),"",""),display:singleLogo?{xs:"none",md:"block"}:{xs:"none",sm:"between"===dividerPosition?"block":void 0,lg:"block"},height:singleLogo?LOGO_HEIGHT:void 0});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),avatar=__webpack_require__("./packages/react/src/avatar/index.ts"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),dropdown_menu=__webpack_require__("./packages/react/src/dropdown-menu/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts");const _excluded=["ref"];function AppLayoutHeaderAccountDropdown_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function AppLayoutHeaderAccountDropdown_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?AppLayoutHeaderAccountDropdown_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AppLayoutHeaderAccountDropdown_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function AppLayoutHeaderAccountDropdown({children,name,secondaryText}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(dropdown_menu.rI,{popoverPlacement:"bottom-end",popoverOffset:-8,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderAccountDropdownButton,{name,secondaryText}),children]})}var AppLayoutHeaderAccountDropdown_ref={name:"d3v9zr",styles:"overflow:hidden"},_ref2={name:"d3v9zr",styles:"overflow:hidden"},_ref3={name:"ozd7xs",styles:"flex-shrink:0"},_ref4={name:"ozd7xs",styles:"flex-shrink:0"};function AppLayoutHeaderAccountDropdownButton({name,secondaryText}){const{isMenuOpen}=(0,dropdown_menu.Db)(),_useDropdownMenuButto=(0,dropdown_menu.wI)(),{ref}=_useDropdownMenuButto,buttonProps=(0,objectWithoutProperties.A)(_useDropdownMenuButto,_excluded),scrollbarWidthRef=(0,react.useRef)(0);return(0,react.useEffect)((()=>{scrollbarWidthRef.current=window.innerWidth-document.documentElement.offsetWidth}),[]),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,AppLayoutHeaderAccountDropdown_objectSpread(AppLayoutHeaderAccountDropdown_objectSpread({as:src_button.SC,ref},buttonProps),{},{background:isMenuOpen?"shade":void 0,alignItems:"center",justifyContent:"space-between",padding:1,gap:1,color:"action",focusRingFor:"keyboard",minHeight:"5.25rem",css:(0,core.mq)({marginLeft:"auto",maxWidth:`calc(17.625rem - ${scrollbarWidthRef.current}px)`,overflow:"hidden","&:hover":{backgroundColor:core.boxPalette.backgroundShade,"& > span:last-of-type > span:last-of-type":core.tm.underline}}),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(a11y.s6,{children:"Account menu"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"span",gap:.5,alignItems:"center",width:"100%","aria-hidden":!0,css:AppLayoutHeaderAccountDropdown_ref,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(avatar.e,{name,tone:"action",size:"md"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"span",flexDirection:"column",width:"100%",css:_ref2,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:core.tm.truncate,children:name}),secondaryText?(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"muted",fontSize:"xs",css:core.tm.truncate,children:secondaryText}):null]})]}),isMenuOpen?(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.Mt,{size:"sm",weight:"bold",css:_ref3}):(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.D3,{size:"sm",weight:"bold",css:_ref4})]}))}function AppLayoutHeaderAccount_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function AppLayoutHeaderAccount_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?AppLayoutHeaderAccount_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AppLayoutHeaderAccount_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var AppLayoutHeaderAccount_ref={name:"d3v9zr",styles:"overflow:hidden"};function AppLayoutHeaderAccount({name,secondaryText,href,dropdown}){const Link=(0,core.d5)(),scrollbarWidthRef=(0,react.useRef)(0);if((0,react.useEffect)((()=>{scrollbarWidthRef.current=window.innerWidth-document.documentElement.offsetWidth}),[]),dropdown)return(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderAccountDropdown,{name,secondaryText,children:dropdown});const hasLink=Boolean(href);return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,AppLayoutHeaderAccount_objectSpread(AppLayoutHeaderAccount_objectSpread({as:"span"},hasLink&&{as:Link,href,focusRingFor:"keyboard"}),{},{alignItems:"center",flexShrink:0,gap:.5,minHeight:"5.25rem",textAlign:"right",css:(0,core.mq)(AppLayoutHeaderAccount_objectSpread({marginLeft:"auto",maxWidth:`calc(17.625rem - ${scrollbarWidthRef.current}px)`,textDecoration:"none"},hasLink&&{"&:hover":{"& > span > span":{textDecoration:"underline"}}})),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"span",flexDirection:"column",css:AppLayoutHeaderAccount_ref,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"action",fontWeight:"bold",fontSize:"xs",css:core.tm.truncate,children:name}),secondaryText?(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"muted",fontSize:"xs",css:core.tm.truncate,children:secondaryText}):null]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(avatar.e,{name,tone:"action","aria-hidden":!0,size:"md"})]}))}var AppLayoutContext=__webpack_require__("./packages/react/src/app-layout/AppLayoutContext.tsx"),utils=__webpack_require__("./packages/react/src/app-layout/utils.ts");function AppLayoutHeaderNav_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function AppLayoutHeaderNav_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?AppLayoutHeaderNav_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AppLayoutHeaderNav_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function AppLayoutHeaderNav({accountDetails}){const{focusMode,openMobileMenu}=(0,AppLayoutContext.c)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center",background:"body",flexWrap:"wrap",display:{xs:"flex",[utils.g8]:"none"},justifyContent:focusMode?"flex-end":"space-between",paddingLeft:.75,paddingRight:accountDetails?.dropdown?.75:core.tokens.containerPadding,children:[focusMode?null:(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderNavMenuButton,{onClick:openMobileMenu}),accountDetails?(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderAccount,AppLayoutHeaderNav_objectSpread({},accountDetails)):null]})}function AppLayoutHeaderNavMenuButton({onClick}){const{isMobileMenuOpen}=(0,AppLayoutContext.c)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center","aria-expanded":isMobileMenuOpen,"aria-haspopup":"dialog",as:src_button.SC,color:"action",css:(0,emotion_react_browser_esm.AH)({"&:hover":{backgroundColor:core.boxPalette.backgroundShade,textDecoration:"underline"}},"",""),flexDirection:"column",focusRingFor:"keyboard",fontSize:"xs",gap:.5,justifyContent:"center",minHeight:"5.25rem",onClick,paddingX:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.ZB,{"aria-hidden":!0}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{children:"Menu"})]})}function AppLayoutHeader_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function AppLayoutHeader_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?AppLayoutHeader_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):AppLayoutHeader_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function AppLayoutHeader({accountDetails,background="bodyAlt",badgeLabel,borderColor="accent",dividerPosition="after",heading,href,id,logo,palette="dark",secondHref,secondLogo,subLine}){return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"header",borderBottom:!0,borderBottomWidth:"xxl",borderColor,css:(0,emotion_react_browser_esm.AH)({[core.tokens.mediaQuery.min[utils.g8]]:{gridColumnStart:1,gridColumnEnd:3}},"",""),flexDirection:"column",id,palette,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center",background,gap:1,justifyContent:"space-between",paddingX:core.tokens.containerPadding,paddingY:.5,width:"100%",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderBrand,{badgeLabel,dividerPosition,hasAccountDetails:Boolean(accountDetails),heading,href,logo,secondHref,secondLogo,subLine}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{display:{xs:"none",[utils.g8]:"flex"},children:accountDetails?(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderAccount,AppLayoutHeader_objectSpread({},accountDetails)):null})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(AppLayoutHeaderNav,{accountDetails})]})}},"./packages/react/src/app-layout/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B4:()=>findBestMatch,Jl:()=>APP_LAYOUT_SIDEBAR_WIDTH,g8:()=>APP_LAYOUT_DESKTOP_BREAKPOINT});const APP_LAYOUT_DESKTOP_BREAKPOINT="xl",APP_LAYOUT_SIDEBAR_WIDTH="16rem",findBestMatch=(items,activePath)=>{if(!activePath)return"";const allHrefs=items.flatMap((item=>Array.isArray(item)?item:[item,...item.items])).flatMap((item=>"items"in item&&void 0!==item.items?[item,...item.items]:item)).map((item=>item&&"href"in item&&void 0!==item.href?item.href:""));let exactMatch,bestMatch="";for(const href of allHrefs){if(href===activePath){exactMatch=href;break}activePath?.startsWith(href)&&href.length>bestMatch.length&&(bestMatch=href)}return exactMatch||bestMatch}},"./packages/react/src/avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Avatar({name,tone:toneProp="neutral",size:sizeProp="md","aria-hidden":ariaHidden,"aria-label":ariaLabel}){const initials=function getInitialsFromName(name){const matches=Array.from(name.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));return matches.length?((matches.shift()?.[1]||"")+(matches.pop()?.[1]||"")).toUpperCase():"?"}(name),color=TONE_PROP[toneProp],{size,fontSize}=SIZE_MAP[sizeProp];return(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{as:"span",alignItems:"center",justifyContent:"center",flexShrink:0,css:(0,emotion_react_browser_esm.AH)({textDecoration:"none",height:`${size}rem`,width:`${size}rem`,borderRadius:"50%",borderStyle:"solid",borderWidth:core.tokens.borderWidth.sm,borderColor:color,color},"",""),fontSize,fontWeight:"bold","aria-hidden":ariaHidden,"aria-label":ariaLabel,children:initials})}const TONE_PROP={neutral:core.boxPalette.foregroundMuted,action:core.boxPalette.foregroundAction},SIZE_MAP={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}}},"./packages/react/src/avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.e});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/avatar/Avatar.tsx")}}]);