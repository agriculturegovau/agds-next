(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[111],{"./node_modules/@preconstruct/hook/noop.js":(__unused_webpack_module,exports)=>{exports.___internalHook=()=>()=>{}},"./packages/react/src/feature-link-list/FeatureLinkList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithNoDescription:()=>WithNoDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"navigation/FeatureLinkList",component:__webpack_require__("./packages/react/src/feature-link-list/FeatureLinkList.tsx").L,args:{}},Basic={args:{links:[{label:"Add a business with RAM",description:"Set up a business to act on behalf of it or invite others to. You can do this if you are responsible for this business in Relationship Authorisation Manager (RAM).",href:"#"},{label:"Accept an invite",description:"Use an invite code from an email to act on behalf of a business.",href:"#"},{label:"External Google",description:"This is an external link.",href:"https://www.google.com",target:"_blank"}]}},WithNoDescription={args:{links:[{label:"Add a business with RAM",href:"#"},{label:"Accept an invite",href:"#"},{label:"External Google",href:"https://www.google.com",target:"_blank"}]}},__namedExportsOrder=["Basic","WithNoDescription"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    links: [{\n      label: 'Add a business with RAM',\n      description: 'Set up a business to act on behalf of it or invite others to. You can do this if you are responsible for this business in Relationship Authorisation Manager (RAM).',\n      href: '#'\n    }, {\n      label: 'Accept an invite',\n      description: 'Use an invite code from an email to act on behalf of a business.',\n      href: '#'\n    }, {\n      label: 'External Google',\n      description: 'This is an external link.',\n      href: 'https://www.google.com',\n      target: '_blank'\n    }]\n  }\n}",...Basic.parameters?.docs?.source}}},WithNoDescription.parameters={...WithNoDescription.parameters,docs:{...WithNoDescription.parameters?.docs,source:{originalSource:"{\n  args: {\n    links: [{\n      label: 'Add a business with RAM',\n      href: '#'\n    }, {\n      label: 'Accept an invite',\n      href: '#'\n    }, {\n      label: 'External Google',\n      href: 'https://www.google.com',\n      target: '_blank'\n    }]\n  }\n}",...WithNoDescription.parameters?.docs?.source}}}},"./packages/react/core/dist/ag.ds-next-react-core.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";let unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/core/index.ts"),unregister()},"./packages/react/src/a11y/ExternalLinkCallout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>ExternalLinkCallout});var _VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ExternalLinkCallout=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__.s,{children:", opens in a new tab"})},"./packages/react/src/a11y/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>visuallyHiddenStyles,s:()=>VisuallyHidden});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const VisuallyHidden=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{css:visuallyHiddenStyles,children}),visuallyHiddenStyles={clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:1}},"./packages/react/src/a11y/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O_:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.O,UW:()=>_ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__.U,s6:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.s});var _ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/ExternalLinkCallout.tsx"),_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx")},"./packages/react/src/feature-link-list/FeatureLinkList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>FeatureLinkList});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),ag_ds_next_react_core_cjs=__webpack_require__("./packages/react/core/dist/ag.ds-next-react-core.cjs.js");const hoverColorMap={body:ag_ds_next_react_core_cjs.boxPalette.backgroundShade,bodyAlt:ag_ds_next_react_core_cjs.boxPalette.backgroundShadeAlt};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["background","description","label"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref2={name:"6u6rhr",styles:'&:focus, &:focus-visible{outline:none;}&::after{bottom:0;content:"";left:0;position:absolute;right:0;top:0;}'};const FeatureLinkListItem=_ref=>{let{background="body",description,label}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const LinkComponent="_blank"==props.target?text_link.d:text_link.TextLink,descriptionId=function useDescriptionId(idProp){return`feature-link-list-description-${(0,core.Bi)(idProp)}`}(props.id);return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"li",background,borderBottom:!0,css:[box.$Y,{textDecoration:"none","&:hover":{backgroundColor:hoverColorMap[background]}},"","","",""],children:(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"flex-start",css:(0,emotion_react_browser_esm.AH)({position:"relative",":has(:focus-visible)":core.tm.outline,"@supports not selector(:has(*))":{":focus-within":core.tm.outline}},"",""),gap:1.5,justifyContent:"space-between",paddingY:1.5,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontSize:"md",fontWeight:"bold",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(LinkComponent,_objectSpread(_objectSpread({},props),{},{"aria-describedby":description?descriptionId:void 0,css:_ref2,children:label}))}),description&&(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{as:"p",id:descriptionId,children:description})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.fl,{size:"md",weight:"regular"})]})})};const FeatureLinkList_excluded=["links","background"];function FeatureLinkList_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function FeatureLinkList_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?FeatureLinkList_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):FeatureLinkList_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const FeatureLinkList=_ref=>{let{links,background}=_ref,props=(0,objectWithoutProperties.A)(_ref,FeatureLinkList_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,FeatureLinkList_objectSpread(FeatureLinkList_objectSpread({},props),{},{as:"ul",borderTop:!0,children:links.map(((props,index)=>(0,emotion_react_jsx_runtime_browser_esm.Y)(FeatureLinkListItem,FeatureLinkList_objectSpread({background},props),index)))}))}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_37__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_79__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_14__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_18__.D,DM:()=>_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_67__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_48__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_34__.G,Gg:()=>_icons_StarIcon__WEBPACK_IMPORTED_MODULE_77__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_73__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_85__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_10__.K,Kz:()=>_icons_FlagFilledIcon__WEBPACK_IMPORTED_MODULE_41__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_28__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_21__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_88__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_24__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_44__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_56__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_69__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_16__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_17__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_78__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_26__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_74__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_89__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_91__.V,Wm:()=>_icons_StarFilledIcon__WEBPACK_IMPORTED_MODULE_76__.W,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_40__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_19__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_55__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_75__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_32__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_63__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_46__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_64__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__.h,iF:()=>_icons_FlagIcon__WEBPACK_IMPORTED_MODULE_42__.i,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_90__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_49__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_66__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_35__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_72__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_68__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_20__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_65__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./packages/react/src/icon/icons/ArchiveIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx")),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/BusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx")),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_16__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_24__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx")),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_26__=(__webpack_require__("./packages/react/src/icon/icons/ClockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_28__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_32__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_34__=(__webpack_require__("./packages/react/src/icon/icons/EmailOpenIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx")),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_37__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_40__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_FlagFilledIcon__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./packages/react/src/icon/icons/FlagFilledIcon.tsx"),_icons_FlagIcon__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./packages/react/src/icon/icons/FlagIcon.tsx"),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_44__=(__webpack_require__("./packages/react/src/icon/icons/GripIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx")),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_46__=(__webpack_require__("./packages/react/src/icon/icons/HistoryIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_48__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx")),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_55__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_63__=(__webpack_require__("./packages/react/src/icon/icons/MoveLeftIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MoveRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/ProgressNotRequiredIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_69__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_72__=(__webpack_require__("./packages/react/src/icon/icons/RotateLeftIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/RotateRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx")),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_73__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_74__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_75__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_StarFilledIcon__WEBPACK_IMPORTED_MODULE_76__=__webpack_require__("./packages/react/src/icon/icons/StarFilledIcon.tsx"),_icons_StarIcon__WEBPACK_IMPORTED_MODULE_77__=__webpack_require__("./packages/react/src/icon/icons/StarIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_78__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_79__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_85__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TimerIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_88__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx")),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_89__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_90__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_91__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ZoomInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ZoomOutIcon.tsx")},"./packages/react/src/text-link/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>TextLink});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const TextLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextLink(props,ref){const Link=(0,_core__WEBPACK_IMPORTED_MODULE_3__.d5)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Link,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({css:[_box__WEBPACK_IMPORTED_MODULE_2__.$Y,_box__WEBPACK_IMPORTED_MODULE_2__.T7,"","","",""],ref},props))}))},"./packages/react/src/text-link/TextLinkExternal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>TextLinkExternal});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TextLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextLinkExternal=_ref=>{let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_TextLink__WEBPACK_IMPORTED_MODULE_4__.Y,_objectSpread(_objectSpread({rel:"noopener",target:"_blank"},props),{},{children:[children,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_a11y__WEBPACK_IMPORTED_MODULE_1__.UW,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_icon__WEBPACK_IMPORTED_MODULE_2__.pT,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)({position:"relative",top:3,marginLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(.25)},"",""),size:"sm",weight:"regular"})]}))}},"./packages/react/src/text-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{TextLink:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.Y,d:()=>_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__.d});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/TextLinkExternal.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({as,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);