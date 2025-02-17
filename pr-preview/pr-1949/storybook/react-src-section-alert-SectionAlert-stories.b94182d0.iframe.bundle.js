(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9702],{"./node_modules/@preconstruct/hook/noop.js":(__unused_webpack_module,exports)=>{exports.___internalHook=()=>()=>{}},"./packages/react/src/section-alert/SectionAlert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Success:()=>Success,Warning:()=>Warning,WithClose:()=>WithClose,WithDescription:()=>WithDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SectionAlert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/section-alert/SectionAlert.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Content/SectionAlert",component:_SectionAlert__WEBPACK_IMPORTED_MODULE_0__._,args:{onDismiss:void 0,onClose:void 0}},Success={args:{title:"Your changes have been saved",tone:"success"}},Warning={args:{title:"A warning message for this section",tone:"warning"}},Error={args:{title:"There was an error saving your changes",tone:"error"}},WithDescription={args:{title:"There was an error saving your changes",tone:"error",children:"Please try again later."}},WithClose={args:{title:"Your changes have been saved",tone:"success",onClose:()=>console.log("dismissed")}},__namedExportsOrder=["Success","Warning","Error","WithDescription","WithClose"];Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Your changes have been saved',\n    tone: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'A warning message for this section',\n    tone: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'There was an error saving your changes',\n    tone: 'error'\n  }\n}",...Error.parameters?.docs?.source}}},WithDescription.parameters={...WithDescription.parameters,docs:{...WithDescription.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'There was an error saving your changes',\n    tone: 'error',\n    children: 'Please try again later.'\n  }\n}",...WithDescription.parameters?.docs?.source}}},WithClose.parameters={...WithClose.parameters,docs:{...WithClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Your changes have been saved',\n    tone: 'success',\n    onClose: () => console.log('dismissed')\n  }\n}",...WithClose.parameters?.docs?.source}}}},"./packages/react/icon/dist/ag.ds-next-react-icon.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";let unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/icon/index.ts"),unregister()},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ButtonGroup=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{alignItems:["stretch","center"],flexDirection:["column","row"],gap:1,children})},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.v,SC:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.S,VV:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.VV});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.ts")},"./packages/react/src/core/utils/useFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>useFocus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useFocus({focusOnMount,focusOnUpdate,forwardedRef}={}){const fallbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),ref=forwardedRef||fallbackRef;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{!focusOnUpdate&&!focusOnMount||!("current"in ref)||Array.isArray(focusOnUpdate)&&0===focusOnUpdate.filter(Boolean).length||ref?.current?.focus?.()}),[focusOnUpdate]),ref}},"./packages/react/src/getCloseHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NZ:()=>getOptionalCloseHandler,id:()=>getRequiredCloseHandler});var console=__webpack_require__("./node_modules/console-browserify/index.js");const closeHandlerWarningMessage="Do not use onDismiss in combination with onClose. Use onClose by itself. onDismiss is deprecated. Only onClose will be called.";function getRequiredCloseHandler(onClose,onDismiss){const closeHandler=onClose||onDismiss;if(handleWarnings(onClose,onDismiss),!closeHandler)throw new Error("onClose prop is required");return closeHandler}function getOptionalCloseHandler(onClose,onDismiss){return handleWarnings(onClose,onDismiss),onClose||onDismiss}function handleWarnings(onClose,onDismiss){onClose&&onDismiss?console.warn(closeHandlerWarningMessage):onDismiss&&console.warn("onDismiss is deprecated. Use onClose instead.")}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_6__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_35__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_68__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_13__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,DM:()=>_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_60__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_43__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_32__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_64__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_73__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_9__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_26__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_76__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_23__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_40__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_51__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_62__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_15__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_16__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_67__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_24__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_65__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_77__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_79__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_38__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_50__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_5__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_66__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_31__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_56__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_41__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_7__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_57__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_78__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_44__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_59__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_33__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_8__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_63__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_61__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_58__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("./packages/react/src/icon/icons/BusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx")),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx")),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx"),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_26__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_31__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DrawerIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_35__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_38__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_40__=(__webpack_require__("./packages/react/src/icon/icons/GripIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx")),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_43__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx")),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_50__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_56__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/ProgressNotRequiredIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_61__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_62__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_63__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_73__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_76__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx")),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_77__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_78__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_79__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx")},"./packages/react/src/section-alert/SectionAlert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>SectionAlert});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),useFocus=__webpack_require__("./packages/react/src/core/utils/useFocus.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),getCloseHandler=__webpack_require__("./packages/react/src/getCloseHandler.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const SectionAlertDismissButton=({onClick})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(src_button.Button,{alignSelf:"start","aria-label":"Close",css:(0,emotion_react_browser_esm.AH)({flexShrink:0,"& > span:first-of-type":{display:"none",[core.tokens.mediaQuery.min.sm]:{display:"block"}}},"",""),iconAfter:icon.US,onClick,variant:"text",children:"Close"});var ag_ds_next_react_icon_cjs=__webpack_require__("./packages/react/icon/dist/ag.ds-next-react-icon.cjs.js");const sectionAlertIconMap={error:(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_icon_cjs.AlertFilledIcon,{color:"error"}),success:(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_icon_cjs.SuccessFilledIcon,{color:"success"}),warning:(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_icon_cjs.WarningFilledIcon,{color:"warning"})},_excluded=["children","focusOnMount","focusOnUpdate","id","onClose","onDismiss","role","tabIndex","title","tone"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref2={name:"1lv1yo7",styles:"display:inline-flex"};const SectionAlert=(0,react.forwardRef)((function SectionAlert(_ref,forwardedRef){let{children,focusOnMount,focusOnUpdate,id,onClose,onDismiss,role,tabIndex,title,tone}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const ref=(0,useFocus.i)({focusOnMount,focusOnUpdate,forwardedRef}),{childrenId,titleId,toneId}=function useSectionAlertIds(idProp){const autoId=(0,core.Bi)(idProp),childrenId=`section-alert-children-${autoId}`,titleId=`section-alert-title-${autoId}`,toneId=`section-alert-icon-${autoId}`;return{childrenId,titleId,toneId}}(id),icon=sectionAlertIconMap[tone],closeHandler=(0,getCloseHandler.NZ)(onClose,onDismiss);return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,_objectSpread(_objectSpread({},props),{},{alignItems:"center","aria-labelledby":`${toneId} ${titleId} ${children?childrenId:""}`,background:tone,borderColor:tone,borderLeft:!0,borderLeftWidth:"xl",focusRingFor:"all",gap:.5,highContrastOutline:!0,id,justifyContent:"space-between",padding:1,ref,role:role||"region",rounded:!0,tabIndex:tabIndex??(focusOnMount||focusOnUpdate?-1:void 0),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:_ref2,children:[icon,(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:a11y.O_,id:toneId,children:tone})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{flexDirection:"column",gap:.25,children:[title&&(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontWeight:"bold",id:titleId,children:title}),children&&(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{id:childrenId,children})]})]}),closeHandler?(0,emotion_react_jsx_runtime_browser_esm.Y)(SectionAlertDismissButton,{onClick:closeHandler}):null]}))}))}}]);