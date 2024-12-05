"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[5264],{"./packages/react/src/task-list/TaskList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Buttons:()=>Buttons,Ordered:()=>Ordered,OrderedButtons:()=>OrderedButtons,Unordered:()=>Unordered,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/task-list/index.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/TaskList",component:_index__WEBPACK_IMPORTED_MODULE_1__._0,args:{}},exampleLinkItems=[{href:"#",label:"Check eligibility",message:"Short description of the task",status:"done"},{href:"#",label:"Personal details",message:"Short description of the task",status:"doneRecently"},{href:"#",label:"Business details",message:"Short description of the task",status:"doing"},{href:"#",label:"Export",message:"Short description of the task",status:"todo"},{href:"#",label:"Review and submit",message:"Not available until previous tasks are done",status:"blocked"}],exampleButtonItems=exampleLinkItems.map((item=>_objectSpread(_objectSpread({},item),{},{onClick:console.log}))).map((item=>("href"in item&&delete item.href,item))),Unordered={args:{items:exampleLinkItems}},Ordered={args:{items:exampleLinkItems,ordered:!0}},Buttons={args:{items:exampleButtonItems}},OrderedButtons={args:{items:exampleButtonItems,ordered:!0}},__namedExportsOrder=["Unordered","Ordered","Buttons","OrderedButtons"];Unordered.parameters={...Unordered.parameters,docs:{...Unordered.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: exampleLinkItems\n  }\n}",...Unordered.parameters?.docs?.source}}},Ordered.parameters={...Ordered.parameters,docs:{...Ordered.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: exampleLinkItems,\n    ordered: true\n  }\n}",...Ordered.parameters?.docs?.source}}},Buttons.parameters={...Buttons.parameters,docs:{...Buttons.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: exampleButtonItems\n  }\n}",...Buttons.parameters?.docs?.source}}},OrderedButtons.parameters={...OrderedButtons.parameters,docs:{...OrderedButtons.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: exampleButtonItems,\n    ordered: true\n  }\n}",...OrderedButtons.parameters?.docs?.source}}}},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ButtonGroup=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.v,SC:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.S,VV:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.VV});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.ts")},"./packages/react/src/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Heading,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,H5:()=>H5,H6:()=>H6,x:()=>headingFontSizeMap});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const headingFontSizeMap={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},Heading=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Heading(_ref,ref){let{as:ComponentTag,type="h2",color="text",fontSize:__fontSize,fontFamily="body",fontWeight="bold",lineHeight="heading"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);const Tag=ComponentTag??type,fontSize=__fontSize??headingFontSizeMap[type];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,_objectSpread({as:Tag,ref,color,fontSize,fontFamily,fontWeight,lineHeight},props))})),H1=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({ref,as:"h1",type:"h1"},props)))),H2=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({ref,as:"h2",type:"h2"},props)))),H3=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({ref,as:"h3",type:"h3"},props)))),H4=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({ref,as:"h4",type:"h4"},props)))),H5=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({ref,as:"h5",type:"h5"},props)))),H6=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({ref,as:"h6",type:"h6"},props))))},"./packages/react/src/heading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H1,H2:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H2,H3:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H3,Heading:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.D,x:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.x});var _Heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/heading/Heading.tsx")},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx"),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx"),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx")},"./packages/react/src/task-list/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_0:()=>TaskList});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TaskListContainer=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{gap:1.5,children});var heading=__webpack_require__("./packages/react/src/heading/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts");const TaskListHeading=({tasksCompleted,totalTasks})=>(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{gap:1,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.H2,{children:"Complete these tasks"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(src_text.Text,{fontSize:"sm",color:"muted",children:[tasksCompleted," of ",totalTasks," tasks completed"]})]});var _ref={name:"90i3qn",styles:"counter-reset:task-count"};const TaskListItemsContainer=({children,as="ul"})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{as,borderTop:!0,css:_ref,children});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts");const _excluded=["children","message","status","ordered"],_excluded2=["children"],_excluded3=["as","children","status","message","ordered","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TaskListItemLink=_ref=>{let{children,message,status,ordered}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(TaskListItem,_objectSpread(_objectSpread({as:text_link.TextLink,status,message,ordered},props),{},{children}))},TaskListItemButton=_ref2=>{let{children}=_ref2,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.Y)(TaskListItem,_objectSpread(_objectSpread({as:src_button.SC},props),{},{children}))},taskListItemTextDataAttr="data-agds-task-list-item-text";var _ref4={name:"kd5rf1",styles:"counter-increment:task-count"};const TaskListItem=_ref3=>{let{as,children,status,message,ordered,className}=_ref3,props=(0,objectWithoutProperties.A)(_ref3,_excluded3);const{icon:Icon,iconColor,label}=statusMap[status];return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:_ref4,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,_objectSpread(_objectSpread({as,flexDirection:["column","row"],justifyContent:"space-between",alignItems:["flex-start","center"],className,gap:1,paddingY:1,paddingX:[.75,1],fontFamily:"body",color:"text",borderBottom:!0,width:"100%",focusRingFor:"keyboard",css:(0,emotion_react_browser_esm.AH)(_objectSpread(_objectSpread(_objectSpread({position:"relative",textDecoration:"none"},"doneRecently"===status&&{backgroundColor:core.boxPalette.systemSuccessMuted}),"doing"===status&&{"&::before":{content:'""',background:core.boxPalette.foregroundAction,position:"absolute",top:0,bottom:0,left:0,width:core.tokens.borderWidth.xl}}),{},{"[data-agds-task-list-item-text]":_objectSpread(_objectSpread({},core.tm.underline),{},{color:core.boxPalette.foregroundAction}),"&:hover":{backgroundColor:core.boxPalette.backgroundShade,"[data-agds-task-list-item-text]":{textDecoration:"none",color:core.boxPalette.foregroundText}}}),"","")},props),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"span",gap:[0,1],children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{as:"span",alignItems:"center",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{size:"xl",color:iconColor,css:(0,core.mq)({display:["none","block"]})})}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"span",flexDirection:"column",gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(src_text.Text,{[taskListItemTextDataAttr]:"",fontSize:["md","lg"],lineHeight:"heading",fontWeight:"bold",color:"action",css:ordered?{"&::before":{content:"counter(task-count)"}}:void 0,children:[ordered&&(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":"true",children:". "}),children,(0,emotion_react_jsx_runtime_browser_esm.Y)(a11y.s6,{children:"."})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"span",gap:.25,alignItems:"center",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{size:"md",color:iconColor,css:(0,core.mq)({display:["block","none"]})}),(0,emotion_react_jsx_runtime_browser_esm.FD)(src_text.Text,{as:"span",fontSize:["xs","sm"],lineHeight:"nospace",children:[label,(0,emotion_react_jsx_runtime_browser_esm.Y)(a11y.s6,{children:"."})]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{color:"muted",fontSize:"sm",children:message})]})]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.fl,{color:"action",size:["sm","lg"]})]}))})},statusMap={blocked:{label:"Cannot start yet",icon:icon.xb,iconColor:"border"},doing:{label:"In progress",icon:icon.oh,iconColor:"action"},todo:{label:"Not started",icon:icon.Rf,iconColor:"action"},done:{label:"Completed",icon:icon.SuccessFilledIcon,iconColor:"success"},doneRecently:{label:"Completed",icon:icon.SuccessFilledIcon,iconColor:"success"}},TaskList_excluded=["label"];function TaskList_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TaskList_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TaskList_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TaskList_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TaskList=({items,ordered})=>{const tasksCompleted=items.filter((({status})=>"done"===status||"doneRecently"===status)).length;return(0,emotion_react_jsx_runtime_browser_esm.FD)(TaskListContainer,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(TaskListHeading,{tasksCompleted,totalTasks:items.length}),(0,emotion_react_jsx_runtime_browser_esm.Y)(TaskListItemsContainer,{as:ordered?"ol":"ul",children:items.map(((_ref,index)=>{let{label}=_ref,props=(0,objectWithoutProperties.A)(_ref,TaskList_excluded);return isItemLink(props)?(0,emotion_react_jsx_runtime_browser_esm.Y)(TaskListItemLink,TaskList_objectSpread(TaskList_objectSpread({ordered},props),{},{children:label}),index):(0,emotion_react_jsx_runtime_browser_esm.Y)(TaskListItemButton,TaskList_objectSpread(TaskList_objectSpread({ordered},props),{},{children:label}),index)}))})]})},isItemLink=item=>"href"in item},"./packages/react/src/text-link/TextLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>TextLink});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const TextLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextLink(props,ref){const Link=(0,_core__WEBPACK_IMPORTED_MODULE_3__.d5)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Link,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref,css:[_box__WEBPACK_IMPORTED_MODULE_2__.$Y,_box__WEBPACK_IMPORTED_MODULE_2__.T7,"","","",""]},props))}))},"./packages/react/src/text-link/TextLinkExternal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>TextLinkExternal});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_a11y__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TextLink__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextLinkExternal=_ref=>{let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_TextLink__WEBPACK_IMPORTED_MODULE_4__.Y,_objectSpread(_objectSpread({target:"_blank",rel:"noopener"},props),{},{children:[children,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_a11y__WEBPACK_IMPORTED_MODULE_1__.UW,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_icon__WEBPACK_IMPORTED_MODULE_2__.pT,{weight:"regular",size:"sm",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)({position:"relative",top:3,marginLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.mapSpacing)(.25)},"","")})]}))}},"./packages/react/src/text-link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextLink:()=>_TextLink__WEBPACK_IMPORTED_MODULE_0__.Y,d:()=>_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__.d});var _TextLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-link/TextLink.tsx"),_TextLinkExternal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text-link/TextLinkExternal.tsx")}}]);