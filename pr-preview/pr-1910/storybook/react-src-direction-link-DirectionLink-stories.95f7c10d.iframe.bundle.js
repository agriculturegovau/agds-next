"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[622],{"./packages/react/src/direction-link/DirectionLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Down:()=>Down,Left:()=>Left,Right:()=>Right,Up:()=>Up,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"navigation/DirectionLink",component:__webpack_require__("./packages/react/src/direction-link/index.ts").DirectionLink,args:{href:"#"}},Basic={args:{children:"Next",direction:"right"}},Up={args:{children:"Top",direction:"up"}},Down={args:{children:"Skip to footer",direction:"up"}},Right={args:{children:"Next",direction:"right"}},Left={args:{children:"Back",direction:"left"}},__namedExportsOrder=["Basic","Up","Down","Right","Left"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Next',\n    direction: 'right'\n  }\n}",...Basic.parameters?.docs?.source}}},Up.parameters={...Up.parameters,docs:{...Up.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Top',\n    direction: 'up'\n  }\n}",...Up.parameters?.docs?.source}}},Down.parameters={...Down.parameters,docs:{...Down.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Skip to footer',\n    direction: 'up'\n  }\n}",...Down.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Next',\n    direction: 'right'\n  }\n}",...Right.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Back',\n    direction: 'left'\n  }\n}",...Left.parameters?.docs?.source}}}},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ButtonGroup=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.v,SC:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.S,VV:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.VV});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.ts")},"./packages/react/src/direction-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DirectionButton:()=>DirectionButton,DirectionLink:()=>DirectionLink});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"],_excluded2=["children"],_excluded3=["as","children","direction","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const DirectionLink=_ref=>{let{children}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(BaseDirectionLink,_objectSpread(_objectSpread({as:text_link.TextLink},props),{},{children}))},DirectionButton=_ref2=>{let{children}=_ref2,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.Y)(BaseDirectionLink,_objectSpread(_objectSpread({as:src_button.SC},props),{},{children}))};var _ref4={name:"xyzkeb",styles:"align-self:flex-start"};const BaseDirectionLink=_ref3=>{let{as,children,direction,className}=_ref3,props=(0,objectWithoutProperties.A)(_ref3,_excluded3);const Icon=iconMap[direction],iconLeft="left"===direction;return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,_objectSpread(_objectSpread({as,className,inline:!0,gap:.5,alignItems:"center",fontFamily:"body",fontWeight:"normal",link:!0,focusRingFor:"keyboard",css:_ref4},props),{},{children:[iconLeft?(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{size:"sm"}):null,children,iconLeft?null:(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{size:"sm"})]}))},iconMap={up:icon.Kp,right:icon.fl,down:icon.ZL,left:icon.A6}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_63__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_41__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_60__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_69__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_73__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_37__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_48__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_58__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_64__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_61__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_74__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_75__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_36__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_47__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_62__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_53__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_38__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_54__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_72__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_40__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_56__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_59__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_57__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_55__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx"),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_36__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_40__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_47__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_53__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_61__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_62__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_63__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_69__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_72__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_73__=__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx"),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_74__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_75__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx")},"./packages/react/src/text-link/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>TextLink});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const TextLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextLink(props,ref){const Link=(0,_core__WEBPACK_IMPORTED_MODULE_3__.d5)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Link,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref,css:[_box__WEBPACK_IMPORTED_MODULE_2__.$Y,_box__WEBPACK_IMPORTED_MODULE_2__.T7,"","","",""]},props))}))},"./packages/react/src/text-link/TextLinkExternal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>TextLinkExternal});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TextLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextLinkExternal=_ref=>{let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_TextLink__WEBPACK_IMPORTED_MODULE_4__.Y,_objectSpread(_objectSpread({target:"_blank",rel:"noopener"},props),{},{children:[children,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_a11y__WEBPACK_IMPORTED_MODULE_1__.UW,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_icon__WEBPACK_IMPORTED_MODULE_2__.pT,{weight:"regular",size:"sm",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)({position:"relative",top:3,marginLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(.25)},"","")})]}))}},"./packages/react/src/text-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextLink:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.Y,d:()=>_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__.d});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/TextLinkExternal.tsx")}}]);