"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[7265],{"./packages/react/src/combobox/ComboboxListError.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/_popover/index.ts"),_ComboboxBase_ComboboxListItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),_ComboboxBase_ComboboxListError__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListError.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ComboboxListErrorTemplate(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_popover__WEBPACK_IMPORTED_MODULE_0__.A,{as:"ul",css:_ComboboxBase_ComboboxListItem__WEBPACK_IMPORTED_MODULE_1__.Q,style:{},children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_ComboboxBase_ComboboxListError__WEBPACK_IMPORTED_MODULE_2__.e,{})})}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/Combobox/Primitives/ComboboxListError",component:_ComboboxBase_ComboboxListError__WEBPACK_IMPORTED_MODULE_2__.e,render:()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(ComboboxListErrorTemplate,{})},Basic={},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{}",...Basic.parameters?.docs?.source}}}},"./packages/react/src/_popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Popover,f:()=>usePopover});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children","visibility"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Popover=(0,core.FX)((function Popover(_ref,ref){let{children,visibility}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,_objectSpread(_objectSpread({ref,background:"body",border:!0,borderColor:"muted",rounded:!0,css:(0,emotion_react_browser_esm.AH)({boxShadow:core.tokens.shadow.lg,overflow:"auto",position:"relative",visibility,zIndex:core.tokens.zIndex.popover},"","")},props),{},{children}))})),DEFAULT_OFFSET=8,MIN_SIDE_GUTTER_WIDTH=1;function usePopover(options){const{hiddenWithCSS=!1,isOpen,matchReferenceWidth=!1,minHeight:minHeightOption,maxHeight:maxHeightOption,offset:offsetOption=DEFAULT_OFFSET,placement="bottom-start"}=options||{},floating=(0,floating_ui_react_dom.we)(_objectSpread({placement,middleware:[(0,floating_ui_core.cY)(offsetOption),(0,floating_ui_dom.BN)({padding:MIN_SIDE_GUTTER_WIDTH}),(0,floating_ui_dom.UU)({padding:DEFAULT_OFFSET}),(0,floating_ui_dom.Ej)({padding:DEFAULT_OFFSET,apply({availableHeight:_availableHeight,elements,rects}){const maxHeight=maxHeightOption&&_availableHeight>maxHeightOption?maxHeightOption:_availableHeight,availableHeight=minHeightOption?Math.max(minHeightOption,maxHeight):maxHeight;Object.assign(elements.floating.style,_objectSpread({maxHeight:`${availableHeight}px`},matchReferenceWidth?{width:`${rects.reference.width}px`}:{maxWidth:`calc(100vw - ${2*MIN_SIDE_GUTTER_WIDTH}px)`}))}})]},!hiddenWithCSS&&{whileElementsMounted:(referenceEl,floatingEl,update)=>(0,floating_ui_dom.ll)(referenceEl,floatingEl,update,{elementResize:"function"==typeof ResizeObserver})}));return(0,react.useEffect)((()=>{if(!isOpen||!hiddenWithCSS)return;if(!floating.elements.floating||!floating.elements.reference)return;return(0,floating_ui_dom.ll)(floating.elements.reference,floating.elements.floating,floating.update,{elementResize:"function"==typeof ResizeObserver})}),[hiddenWithCSS,isOpen,floating.elements.floating,floating.elements.reference,floating.update]),{getReferenceProps:function getReferenceProps(){return{ref:floating.refs.setReference}},getPopoverProps:function getPopoverProps(){return{ref:floating.refs.setFloating,style:floating.floatingStyles}},referenceRef:floating.refs.reference,popoverRef:floating.refs.floating}}},"./packages/react/src/combobox/ComboboxBase/ComboboxListError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ComboboxListError});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_ComboboxListItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"ozd7xs",styles:"flex-shrink:0"};function ComboboxListError(){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_ComboboxListItem__WEBPACK_IMPORTED_MODULE_3__.L,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{alignItems:"center",gap:.5,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_icon__WEBPACK_IMPORTED_MODULE_1__.AlertFilledIcon,{color:"error",css:_ref}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{role:"alert",children:"Something went wrong."})]})})}},"./packages/react/src/combobox/ComboboxBase/ComboboxListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ComboboxListItem,Q:()=>listItemStyles});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/combobox/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const hoverStyles={color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundText,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.backgroundShade,"> span":_core__WEBPACK_IMPORTED_MODULE_2__.tm.underline},FONT_SIZE_LINE_HEIGHT=(0,_core__WEBPACK_IMPORTED_MODULE_2__.qW)("sm","default"),listItemStyles={"[data-combobox-list-item]":{alignItems:"center",borderBottomStyle:"solid",borderBottomWidth:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.borderWidth.sm,borderColor:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.borderMuted,display:"flex",gap:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(.75),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(.75),paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(1),paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(.75),'&[aria-selected="true"]':hoverStyles,"&:last-of-type":{borderBottom:"none"},'&[data-combobox-list-item="interactive"]':{cursor:"pointer",color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundAction,"&:hover":hoverStyles},'[data-combobox-render-item="beforeElement"]':{flexShrink:0},'[data-combobox-render-item="itemLabel"]':{alignItems:"stretch",display:"flex",flexDirection:"column"},'[data-combobox-render-item="secondaryText"]':_objectSpread({color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundMuted,fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT),'[data-combobox-render-item="tertiaryText"]':_objectSpread({color:_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.foregroundMuted,fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT),'[data-combobox-render-item="endElement"]':{flexShrink:0,marginLeft:"auto"},'[data-combobox-render-item="renderedLabel"]':_objectSpread({color:"inherit",fontFamily:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.font.body,fontWeight:_core__WEBPACK_IMPORTED_MODULE_2__.tokens.fontWeight.normal},FONT_SIZE_LINE_HEIGHT)}},ComboboxListItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ComboboxListItem(_ref,ref){let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const isIos=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.fr)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("li",_objectSpread(_objectSpread({"data-combobox-list-item":"static",ref,tabIndex:isIos?void 0:-1},props),{},{children}))}))},"./packages/react/src/combobox/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dd:()=>validateMaxWidth,Yf:()=>useComboboxInputId,f2:()=>filterOptions,fr:()=>useIsIos,yC:()=>generateHighlightStyles});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts");function useComboboxInputId(idProp){const autoId=(0,_core__WEBPACK_IMPORTED_MODULE_1__.Bi)();return idProp||`combobox-input-${autoId}`}function validateMaxWidth(componentType,maxWidth){0}function filterOptions(options,inputValue="",selectedItems){const sanitizedInputValue=inputValue?.toLowerCase()||"";return options.filter((function filterOption(option){const hasMatch=option.value.toLowerCase().includes(sanitizedInputValue)||option.label.toLowerCase().includes(sanitizedInputValue);return void 0===selectedItems?hasMatch:hasMatch&&!selectedItems?.some((item=>item.label===option.label&&item.value===option.value))}))}function generateHighlightStyles(inputValue){const styles={};if(!inputValue)return styles;const characters=inputValue.toLowerCase().split("");return characters.forEach(((_,index)=>{const baseSelector=characters.slice(0,index+1).map((char=>`[data-char="${char}" i]`)).join(" + "),hasSelector=characters.slice(index+1).map((char=>`+ [data-char="${char}" i]`)).join(" ");styles[hasSelector?`${baseSelector}:has(${hasSelector})`:baseSelector]={fontWeight:"bold"}})),styles}function useIsIos(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>CSS.supports("-webkit-appearance","-apple-pay-button")&&CSS.supports("-webkit-overflow-scrolling","auto")),[])}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx"),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx"),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref,as,color,fontFamily,fontSize,fontWeight,lineHeight},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);