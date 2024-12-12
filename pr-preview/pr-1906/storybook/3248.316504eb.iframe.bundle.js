"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3248],{"./packages/react/src/_popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Popover,f:()=>usePopover});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","visibility"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Popover=(0,core.FX)((function Popover(_ref,ref){let{children,visibility}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,_objectSpread(_objectSpread({ref,background:"body",border:!0,borderColor:"muted",rounded:!0,css:(0,emotion_react_browser_esm.AH)({boxShadow:core.tokens.shadow.lg,overflow:"auto",position:"relative",visibility,zIndex:core.tokens.zIndex.popover},"","")},props),{},{children}))})),DEFAULT_OFFSET=8,MIN_SIDE_GUTTER_WIDTH=1;function usePopover(options){const{hiddenWithCSS=!1,isOpen,matchReferenceWidth=!1,minHeight:minHeightOption,maxHeight:maxHeightOption,offset:offsetOption=DEFAULT_OFFSET,placement="bottom-start"}=options||{},floating=(0,floating_ui_react_dom.we)(_objectSpread({placement,middleware:[(0,floating_ui_core.cY)(offsetOption),(0,floating_ui_dom.BN)({padding:MIN_SIDE_GUTTER_WIDTH}),(0,floating_ui_dom.UU)({padding:DEFAULT_OFFSET}),(0,floating_ui_dom.Ej)({padding:DEFAULT_OFFSET,apply({availableHeight:_availableHeight,elements,rects}){const maxHeight=maxHeightOption&&_availableHeight>maxHeightOption?maxHeightOption:_availableHeight,availableHeight=minHeightOption?Math.max(minHeightOption,maxHeight):maxHeight;Object.assign(elements.floating.style,_objectSpread({maxHeight:`${availableHeight}px`},matchReferenceWidth?{width:`${rects.reference.width}px`}:{maxWidth:`calc(100vw - ${2*MIN_SIDE_GUTTER_WIDTH}px)`}))}})]},!hiddenWithCSS&&{whileElementsMounted:(referenceEl,floatingEl,update)=>(0,floating_ui_dom.ll)(referenceEl,floatingEl,update,{elementResize:"function"==typeof ResizeObserver})}));return(0,react.useEffect)((()=>{if(!isOpen||!hiddenWithCSS)return;if(!floating.elements.floating||!floating.elements.reference)return;return(0,floating_ui_dom.ll)(floating.elements.reference,floating.elements.floating,floating.update,{elementResize:"function"==typeof ResizeObserver})}),[hiddenWithCSS,isOpen,floating.elements.floating,floating.elements.reference,floating.update]),{getReferenceProps:function getReferenceProps(){return{ref:floating.refs.setReference}},getPopoverProps:function getPopoverProps(){return{ref:floating.refs.setFloating,style:floating.floatingStyles}},referenceRef:floating.refs.reference,popoverRef:floating.refs.floating}}},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ButtonGroup=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.v,SC:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.S,VV:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.VV});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.ts")},"./packages/react/src/divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Divider({"aria-hidden":ariaHidden=!0}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)("hr",{"aria-hidden":ariaHidden,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:_core__WEBPACK_IMPORTED_MODULE_0__.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_0__.boxPalette.borderMuted,width:"100%"},"","")})}},"./packages/react/src/divider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Divider:()=>_Divider__WEBPACK_IMPORTED_MODULE_0__.c});var _Divider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/divider/Divider.tsx")},"./packages/react/src/dropdown-menu/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rI:()=>DropdownMenu,F1:()=>DropdownMenuButton,Id:()=>DropdownMenuDivider,I:()=>DropdownMenuGroup,qN:()=>DropdownMenuGroupLink,_2:()=>DropdownMenuItem,Ep:()=>DropdownMenuItemLink,N3:()=>DropdownMenuItemRadio,xn:()=>DropdownMenuPanel,wI:()=>useDropdownMenuButton,Db:()=>useDropdownMenuContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_popover=__webpack_require__("./packages/react/src/_popover/index.ts");const DropdownMenuContext=(0,react.createContext)(void 0);function useDropdownMenuContext(){const context=(0,react.useContext)(DropdownMenuContext);if(void 0===context)throw Error("DropdownMenuContext not found.");return context}var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const initialState={activeDescendantIndex:-1,descendantCount:0,descendantNodes:void 0,descendantSearchTerm:"",isMenuOpen:!1,lastKeyPressTime:0};function reducer(state,action){const currentTime=(new Date).getTime();switch(action.type){case"OPEN_MENU":return _objectSpread(_objectSpread({},state),{},{isMenuOpen:!0});case"CLOSE_MENU":return initialState;case"SET_DESCENDANT_NODES":return _objectSpread(_objectSpread({},state),{},{descendantCount:action.payload.nodes?.length??0,descendantNodes:action.payload.nodes,descendantSearchTerm:"",lastKeyPressTime:0});case"ACTIVATE_FIRST_DESCENDANT":return _objectSpread(_objectSpread({},state),{},{activeDescendantIndex:0,descendantSearchTerm:"",lastKeyPressTime:0});case"ACTIVATE_LAST_DESCENDANT":return _objectSpread(_objectSpread({},state),{},{activeDescendantIndex:state.descendantCount-1,descendantSearchTerm:"",lastKeyPressTime:0});case"ACTIVATE_NEXT_DESCENDANT":{const newActiveDescendantIndex=state.activeDescendantIndex<state.descendantCount-1?state.activeDescendantIndex+1:0;return _objectSpread(_objectSpread({},state),{},{activeDescendantIndex:newActiveDescendantIndex,descendantSearchTerm:"",lastKeyPressTime:0})}case"ACTIVATE_PREVIOUS_DESCENDANT":{const newActiveDescendantIndex=state.activeDescendantIndex>0?state.activeDescendantIndex-1:state.descendantCount-1;return _objectSpread(_objectSpread({},state),{},{activeDescendantIndex:newActiveDescendantIndex,descendantSearchTerm:"",lastKeyPressTime:0})}case"UPDATE_DESCENDANT_SEARCH_TERM":{const quickPress=currentTime-state.lastKeyPressTime<350,newSearchTerm=quickPress?state.descendantSearchTerm+action.payload.eventKey.toLowerCase():action.payload.eventKey.toLowerCase(),currentIndex=state.activeDescendantIndex>=0?state.activeDescendantIndex:-1,offset=quickPress?0:1,items=Array.from(state.descendantNodes??[]).map((node=>node.innerText.toLowerCase().replace(/(\r\n|\n|\r)/gm,""))),matchingItem=items.slice(currentIndex+offset).concat(items.slice(0,currentIndex+offset)).find((item=>item.startsWith(newSearchTerm))),matchIndex=matchingItem?items.indexOf(matchingItem):currentIndex;return _objectSpread(_objectSpread({},state),{},{descendantSearchTerm:newSearchTerm,activeDescendantIndex:matchIndex,lastKeyPressTime:currentTime})}default:throw new Error(`Unhandled action type: ${action.type}`)}}var core=__webpack_require__("./packages/react/src/core/index.ts");function useDropdownMenuControlIds(){const{menuId}=useDropdownMenuContext();return{buttonId:`${menuId}-button`,panelId:`${menuId}-panel`}}function useDropdownMenuItemId(idProp){const{menuId}=useDropdownMenuContext(),autoId=(0,core.Bi)();return idProp||`${menuId}-item-${autoId}`}var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function DropdownMenu({children,popoverPlacement="bottom-start",popoverMaxHeight,popoverOffset}){const{0:state,1:dispatch}=(0,react.useReducer)(reducer,initialState),menuId=function useDropdownMenuId(){return`dropdown-menu-${(0,core.Bi)()}`}(),panelRef=(0,react.useRef)(null),popover=(0,_popover.f)({placement:popoverPlacement,maxHeight:popoverMaxHeight,offset:popoverOffset});function openMenu(){dispatch({type:"OPEN_MENU"})}function closeMenu(){dispatch({type:"CLOSE_MENU"}),popover.referenceRef.current?.focus()}(0,react.useEffect)((()=>{state.isMenuOpen&&dispatch({type:"SET_DESCENDANT_NODES",payload:{nodes:panelRef.current?.querySelectorAll('[role="menuitem"], [role="menuitemradio"]')}})}),[state.isMenuOpen,children]);const activeDescendantId=state.descendantNodes?.[state.activeDescendantIndex]?.id;return(0,emotion_react_jsx_runtime_browser_esm.Y)(DropdownMenuContext.Provider,{value:{isMenuOpen:state.isMenuOpen,openMenu,closeMenu,toggleMenu:function toggleMenu(){state.isMenuOpen?closeMenu():openMenu()},descendantNodes:state.descendantNodes,goToPreviousMenuItem:function goToPreviousMenuItem(){dispatch({type:"ACTIVATE_PREVIOUS_DESCENDANT"})},goToNextMenuItem:function goToNextMenuItem(){dispatch({type:"ACTIVATE_NEXT_DESCENDANT"})},goToFirstMenuItem:function goToFirstMenuItem(){dispatch({type:"ACTIVATE_FIRST_DESCENDANT"})},goToLastMenuItem:function goToLastMenuItem(){dispatch({type:"ACTIVATE_LAST_DESCENDANT"})},clickSelectedItem:function clickSelectedItem(){-1!==state.activeDescendantIndex&&(state.descendantNodes?.[state.activeDescendantIndex]?.click(),closeMenu())},activeDescendantId,updateDescendantSearchTerm:function updateDescendantSearchTerm(eventKey){dispatch({type:"UPDATE_DESCENDANT_SEARCH_TERM",payload:{eventKey}})},menuId,panelRef,popover},children:"function"==typeof children?children({isMenuOpen:state.isMenuOpen}):children})}var objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts");const _excluded=["variant","iconAfter"];function DropdownMenuButton_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DropdownMenuButton_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DropdownMenuButton_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DropdownMenuButton_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function DropdownMenuButton(_ref){let{variant="text",iconAfter}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const{isMenuOpen}=useDropdownMenuContext(),buttonProps=useDropdownMenuButton(),defaultIconAfter=isMenuOpen?icon.Mt:icon.D3;return(0,emotion_react_jsx_runtime_browser_esm.Y)(src_button.Button,DropdownMenuButton_objectSpread(DropdownMenuButton_objectSpread({variant,iconAfter:iconAfter||defaultIconAfter},buttonProps),props))}function useDropdownMenuButton(){const{isMenuOpen,descendantNodes,goToLastMenuItem,goToFirstMenuItem,openMenu,toggleMenu,popover}=useDropdownMenuContext(),{buttonId,panelId}=useDropdownMenuControlIds(),{ref:popoverRef}=popover.getReferenceProps(),{0:lastKeyPressed,1:setLastKeyPressed}=(0,react.useState)();return(0,react.useEffect)((()=>{isMenuOpen&&descendantNodes&&lastKeyPressed&&("ArrowUp"===lastKeyPressed?goToLastMenuItem():goToFirstMenuItem(),setLastKeyPressed(void 0))}),[isMenuOpen,descendantNodes,goToFirstMenuItem,goToLastMenuItem,lastKeyPressed]),{ref:popoverRef,id:buttonId,"aria-haspopup":!0,"aria-controls":panelId,"aria-expanded":isMenuOpen,onClick:toggleMenu,onKeyDown:function onKeyDown(event){supportedKeys.includes(event.code)&&(event.preventDefault(),setLastKeyPressed(event.code),openMenu())}}}const supportedKeys=["ArrowDown","ArrowUp","Space","Enter"];var divider=__webpack_require__("./packages/react/src/divider/index.ts");function DropdownMenuDivider(){return(0,emotion_react_jsx_runtime_browser_esm.Y)(divider.Divider,{})}var src_text=__webpack_require__("./packages/react/src/text/index.ts");function DropdownMenuGroup({children,label}){const id=function useDropdownMenuGroupId(){const{menuId}=useDropdownMenuContext();return`${menuId}-group-${(0,core.Bi)()}`}();return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{role:"group","aria-labelledby":id,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{display:"block",paddingX:1,paddingTop:1.5,paddingBottom:.5,lineHeight:"heading",fontWeight:"bold",fontSize:"xs",color:"muted",id,children:label}),children]})}var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),flex=__webpack_require__("./packages/react/src/flex/index.ts");const DropdownMenuItem_excluded=["as","children","onClick","endElement","icon","id"];function DropdownMenuItem_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DropdownMenuItem_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DropdownMenuItem_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DropdownMenuItem_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref2={name:"ozd7xs",styles:"flex-shrink:0"},_ref3={name:"ozd7xs",styles:"flex-shrink:0"};const DropdownMenuItem=(0,core.FX)((function DropdownMenuItem(_ref,forwardedRef){let{as,children,onClick:onClickProp,endElement,icon:Icon,id:idProp}=_ref,props=(0,objectWithoutProperties.A)(_ref,DropdownMenuItem_excluded);const ref=(0,react.useRef)(null),{activeDescendantId,closeMenu}=useDropdownMenuContext(),id=useDropdownMenuItemId(idProp),isActiveDescendant=id===activeDescendantId;return(0,react.useEffect)((()=>{isActiveDescendant&&ref.current?.scrollIntoView({block:"nearest"})}),[isActiveDescendant]),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,DropdownMenuItem_objectSpread(DropdownMenuItem_objectSpread({as,ref:(0,core.Px)([forwardedRef,ref]),role:"menuitem",tabIndex:-1,id,onClick:function onClick(){onClickProp?.(),closeMenu()},alignItems:"center",justifyContent:"space-between",background:"body",gap:1,padding:1,width:"18rem",link:!0,focusRingFor:"keyboard",css:(0,emotion_react_browser_esm.AH)(DropdownMenuItem_objectSpread(DropdownMenuItem_objectSpread({textDecoration:"none"},isActiveDescendant&&{backgroundColor:core.boxPalette.backgroundShade,"& > div > span":core.tm.underline}),{},{"&:hover":{backgroundColor:core.boxPalette.backgroundShade,"& > div:first-of-type > span":core.tm.underline}}),"","")},props),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center",gap:.75,children:[Icon?(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{color:"inherit",size:"md",css:_ref2}):null,(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"inherit",children})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:_ref3,children:endElement})]}))}));var a11y=__webpack_require__("./packages/react/src/a11y/index.ts");const DropdownMenuItemLink_excluded=["children","target"];function DropdownMenuItemLink_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DropdownMenuItemLink_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DropdownMenuItemLink_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DropdownMenuItemLink_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function DropdownMenuItemLink(_ref){let{children,target}=_ref,props=(0,objectWithoutProperties.A)(_ref,DropdownMenuItemLink_excluded);const Link=(0,core.d5)();return(0,emotion_react_jsx_runtime_browser_esm.FD)(DropdownMenuItem,DropdownMenuItemLink_objectSpread(DropdownMenuItemLink_objectSpread({as:Link,target},props),{},{children:[children,"_blank"===target&&(0,emotion_react_jsx_runtime_browser_esm.Y)(a11y.UW,{})]}))}var _ref={name:"a4hmbt",styles:"position:absolute"};function DropdownMenuPanel({children,palette}){const{panelRef,isMenuOpen,closeMenu,popover,activeDescendantId}=useDropdownMenuContext(),{buttonId,panelId}=useDropdownMenuControlIds(),handleClickOutside=(0,react.useCallback)((()=>{isMenuOpen&&closeMenu()}),[isMenuOpen,closeMenu]);(0,core.Ls)([popover.popoverRef,popover.referenceRef],handleClickOutside),(0,react.useEffect)((()=>{isMenuOpen&&panelRef.current?.focus({preventScroll:!0})}),[panelRef,isMenuOpen]);const{onKeyDown}=function useKeydownNavigation(){const{closeMenu,goToPreviousMenuItem,goToNextMenuItem,goToFirstMenuItem,goToLastMenuItem,clickSelectedItem,updateDescendantSearchTerm}=useDropdownMenuContext();function onKeyDown(event){switch(event.code){case"ArrowUp":event.preventDefault(),goToPreviousMenuItem();break;case"ArrowDown":event.preventDefault(),goToNextMenuItem();break;case"Home":event.preventDefault(),goToFirstMenuItem();break;case"End":event.preventDefault(),goToLastMenuItem();break;case"Escape":event.preventDefault(),closeMenu();break;case"Enter":case"Space":event.preventDefault(),clickSelectedItem();break;case"Tab":closeMenu();break;default:!/^[a-zA-Z]$/.test(event.key)||event.metaKey||event.ctrlKey||(event.preventDefault(),updateDescendantSearchTerm(event.key))}}return{onKeyDown}}(),{style,ref:popoverRef}=popover.getPopoverProps();return isMenuOpen?(0,emotion_react_jsx_runtime_browser_esm.Y)(_popover.A,{as:flex.Flex,ref:(0,core.Px)([popoverRef,panelRef]),role:"menu",tabIndex:-1,id:panelId,"aria-labelledby":buttonId,"aria-activedescendant":activeDescendantId,onKeyDown,palette,flexDirection:"column",focusRingFor:"keyboard",style,children}):(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{id:panelId,css:_ref})}var stack=__webpack_require__("./packages/react/src/stack/index.ts");function DropdownMenuItemRadio_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DropdownMenuItemRadio_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DropdownMenuItemRadio_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DropdownMenuItemRadio_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var DropdownMenuItemRadio_ref={name:"ozd7xs",styles:"flex-shrink:0"};function DropdownMenuItemRadio({children,onClick:onClickProp,endElement,checked,secondaryText,id:idProp}){const ref=(0,react.useRef)(null),{activeDescendantId,closeMenu}=useDropdownMenuContext(),id=useDropdownMenuItemId(idProp),isActiveDescendant=id===activeDescendantId;return(0,react.useEffect)((()=>{isActiveDescendant&&ref.current?.scrollIntoView({block:"nearest"})}),[isActiveDescendant]),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{ref,role:"menuitemradio","aria-checked":checked,id,onClick:function onClick(){onClickProp?.(),closeMenu()},alignItems:"center",justifyContent:"space-between",background:"body",gap:1,padding:1,width:"18rem",css:(0,emotion_react_browser_esm.AH)(DropdownMenuItemRadio_objectSpread(DropdownMenuItemRadio_objectSpread({cursor:"pointer"},isActiveDescendant&&{backgroundColor:core.boxPalette.backgroundShade,color:core.boxPalette.foregroundText,"& > div:first-of-type > span":DropdownMenuItemRadio_objectSpread(DropdownMenuItemRadio_objectSpread({},core.tm.underline),{},{color:core.boxPalette.foregroundText})}),{},{"&:hover":{backgroundColor:core.boxPalette.backgroundShade,"& > div:first-of-type > span":DropdownMenuItemRadio_objectSpread(DropdownMenuItemRadio_objectSpread({},core.tm.underline),{},{color:core.boxPalette.foregroundText})}},checked&&{backgroundColor:core.boxPalette.selectedMuted,position:"relative","&::before":{content:"''",position:"absolute",top:0,bottom:0,left:0,width:core.tokens.borderWidth.xl,background:core.boxPalette.selected}}),"",""),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:checked?"text":"action",fontWeight:checked?"bold":"normal",children}),(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontSize:"xs",color:"muted",children:secondaryText})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{css:DropdownMenuItemRadio_ref,children:endElement})]})}function DropdownMenuGroupLink_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DropdownMenuGroupLink_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DropdownMenuGroupLink_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DropdownMenuGroupLink_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function DropdownMenuGroupLink(props){return(0,emotion_react_jsx_runtime_browser_esm.Y)(DropdownMenuItemLink,DropdownMenuGroupLink_objectSpread(DropdownMenuGroupLink_objectSpread({},props),{},{css:(0,emotion_react_browser_esm.AH)(DropdownMenuGroupLink_objectSpread(DropdownMenuGroupLink_objectSpread({},(0,core.qW)("xs","default")),{},{paddingTop:(0,core.mapSpacing)(.25),paddingBottom:(0,core.mapSpacing)(.25),marginBottom:(0,core.mapSpacing)(.75)}),"","")}))}}}]);