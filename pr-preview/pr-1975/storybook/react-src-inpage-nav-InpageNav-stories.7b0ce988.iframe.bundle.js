"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[1718],{"./packages/react/src/inpage-nav/InpageNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Modular:()=>Modular,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_prose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/prose/index.ts"),_stack__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/stack/index.ts"),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/inpage-nav/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["label"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"navigation/InpageNav",component:_index__WEBPACK_IMPORTED_MODULE_4__.InpageNav},exampleLinks=[{href:"#section-1",label:"Section 1"},{href:"#section-2",label:"Section 2"},{href:"#section-3",label:"Section 3"},{href:"#section-4",label:"Section 4"},{href:"#section-5",label:"Section 5"}],ExampleContent=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_prose__WEBPACK_IMPORTED_MODULE_2__.Prose,{children:[1,2,3,4,5].map((idx=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)("h2",{id:`section-${idx}`,children:["Section ",idx]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus accusamus doloremque repellat molestias id, iusto cum adipisci distinctio tempore blanditiis dolor hic vero omnis laboriosam! Aenean mattis maximus ante, vitae facilisis nunc commodo vitae."}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("p",{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea dictumst. Sed eleifend eu sem ut laoreet. Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac lacus."})]},idx)))}),Basic={render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_stack__WEBPACK_IMPORTED_MODULE_3__.Stack,{gap:3,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_index__WEBPACK_IMPORTED_MODULE_4__.InpageNav,_objectSpread({},args)),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(ExampleContent,{})]}),args:{title:"On this page",links:exampleLinks}},Modular=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_stack__WEBPACK_IMPORTED_MODULE_3__.Stack,{gap:3,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_index__WEBPACK_IMPORTED_MODULE_4__.nz,{"aria-label":"In page",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_index__WEBPACK_IMPORTED_MODULE_4__.iw,{children:"On this page"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_index__WEBPACK_IMPORTED_MODULE_4__.Ez,{children:exampleLinks.map(((_ref,index)=>{let{label}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_index__WEBPACK_IMPORTED_MODULE_4__.No,_objectSpread(_objectSpread({},props),{},{children:label}),index)}))})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(ExampleContent,{})]}),__namedExportsOrder=["Basic","Modular"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: args => <Stack gap={3}>\n            <InpageNav {...args} />\n            <ExampleContent />\n        </Stack>,\n  args: {\n    title: 'On this page',\n    links: exampleLinks\n  }\n}",...Basic.parameters?.docs?.source}}},Modular.parameters={...Modular.parameters,docs:{...Modular.parameters?.docs,source:{originalSource:'() => <Stack gap={3}>\n        <InpageNavContainer aria-label="In page">\n            <InpageNavTitle>On this page</InpageNavTitle>\n            <InpageNavItemContainer>\n                {exampleLinks.map(({\n        label,\n        ...props\n      }, index) => <InpageNavItem key={index} {...props}>\n                        {label}\n                    </InpageNavItem>)}\n            </InpageNavItemContainer>\n        </InpageNavContainer>\n        <ExampleContent />\n    </Stack>',...Modular.parameters?.docs?.source}}}},"./packages/react/src/a11y/ExternalLinkCallout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>ExternalLinkCallout});var _VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ExternalLinkCallout=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_VisuallyHidden__WEBPACK_IMPORTED_MODULE_0__.s,{children:", opens in a new tab"})},"./packages/react/src/a11y/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>visuallyHiddenStyles,s:()=>VisuallyHidden});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const VisuallyHidden=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Y)("span",{css:visuallyHiddenStyles,children}),visuallyHiddenStyles={clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:1}},"./packages/react/src/a11y/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O_:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.O,UW:()=>_ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__.U,s6:()=>_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__.s});var _ExternalLinkCallout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/a11y/ExternalLinkCallout.tsx"),_VisuallyHidden__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/VisuallyHidden.tsx")},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_6__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_34__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_69__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_13__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,DM:()=>_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_61__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_42__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_31__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_65__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_74__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_9__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_26__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_77__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_23__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_39__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_50__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_63__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_15__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_16__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_68__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_24__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_66__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_78__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_80__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_37__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_49__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_5__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_67__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_30__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_57__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_40__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_7__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_58__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_79__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_43__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_60__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_32__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_8__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_64__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_62__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_59__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("./packages/react/src/icon/icons/BusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx")),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx")),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx"),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_26__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_30__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_34__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_37__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_39__=(__webpack_require__("./packages/react/src/icon/icons/GripIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx")),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_42__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx")),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_49__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_57__=(__webpack_require__("./packages/react/src/icon/icons/MoveLeftIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MoveRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_61__=__webpack_require__("./packages/react/src/icon/icons/ProgressNotRequiredIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_62__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_63__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_69__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_74__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_77__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx")),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_78__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_79__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_80__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx")},"./packages/react/src/inpage-nav/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{InpageNav:()=>InpageNav,nz:()=>InpageNavContainer,No:()=>InpageNavItem,Ez:()=>InpageNavItemContainer,iw:()=>InpageNavTitle});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const InpageNavContainer=({children,"aria-label":ariaLabel})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{"aria-label":ariaLabel,as:"nav",borderLeft:!0,borderLeftWidth:"xl",css:(0,emotion_react_browser_esm.AH)({borderLeftColor:core.boxPalette.foregroundAction},"",""),gap:1,paddingLeft:1.5,children}),InpageNavItemContainer=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{as:"ul",gap:.5,children});var box=__webpack_require__("./packages/react/src/box/index.ts"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const InpageNavItem=props=>(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"li",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(text_link.TextLink,_objectSpread({},props))});var src_text=__webpack_require__("./packages/react/src/text/index.ts");const InpageNavTitle=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{as:"h2",fontWeight:"bold",lineHeight:"heading",children}),_excluded=["label"];function InpageNav_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function InpageNav_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?InpageNav_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):InpageNav_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const InpageNav=({"aria-label":ariaLabel="In page",links,title})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(InpageNavContainer,{"aria-label":ariaLabel,children:[title?(0,emotion_react_jsx_runtime_browser_esm.Y)(InpageNavTitle,{children:title}):null,(0,emotion_react_jsx_runtime_browser_esm.Y)(InpageNavItemContainer,{children:links.map(((_ref,index)=>{let{label}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(InpageNavItem,InpageNav_objectSpread(InpageNav_objectSpread({},props),{},{children:label}),index)}))})]})},"./packages/react/src/prose/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Prose:()=>_Prose__WEBPACK_IMPORTED_MODULE_0__.s7,proseBlockClassname:()=>_Prose__WEBPACK_IMPORTED_MODULE_0__._G});var _Prose__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/prose/Prose.tsx")},"./packages/react/src/text-link/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>TextLink});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const TextLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextLink(props,ref){const Link=(0,_core__WEBPACK_IMPORTED_MODULE_3__.d5)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Link,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({css:[_box__WEBPACK_IMPORTED_MODULE_2__.$Y,_box__WEBPACK_IMPORTED_MODULE_2__.T7,"","","",""],ref},props))}))},"./packages/react/src/text-link/TextLinkExternal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>TextLinkExternal});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TextLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextLinkExternal=_ref=>{let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_TextLink__WEBPACK_IMPORTED_MODULE_4__.Y,_objectSpread(_objectSpread({rel:"noopener",target:"_blank"},props),{},{children:[children,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_a11y__WEBPACK_IMPORTED_MODULE_1__.UW,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_icon__WEBPACK_IMPORTED_MODULE_2__.pT,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)({position:"relative",top:3,marginLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(.25)},"",""),size:"sm",weight:"regular"})]}))}},"./packages/react/src/text-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextLink:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.Y,d:()=>_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__.d});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/TextLinkExternal.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({as,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);