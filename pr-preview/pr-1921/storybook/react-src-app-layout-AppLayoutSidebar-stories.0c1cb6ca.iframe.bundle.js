"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[1990],{"./packages/react/src/app-layout/AppLayoutSidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlwaysOpen:()=>AlwaysOpen,Basic:()=>Basic,BodyBackground:()=>BodyBackground,LargeList:()=>LargeList,LevelOneActive:()=>LevelOneActive,LevelTwoActive:()=>LevelTwoActive,WithoutIcons:()=>WithoutIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/flex/index.ts"),_AppLayoutContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/app-layout/AppLayoutContext.tsx"),_AppLayoutSidebar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/app-layout/AppLayoutSidebar.tsx"),_test_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/app-layout/test-utils.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref={name:"1uiai01",styles:"min-height:100vh"};const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/AppLayout/AppLayoutSidebar",component:_AppLayoutSidebar__WEBPACK_IMPORTED_MODULE_3__.y,parameters:{layout:"fullscreen"},args:{activePath:"/",background:"bodyAlt",items:(0,_test_utils__WEBPACK_IMPORTED_MODULE_4__.f3)("Antfix")},render:props=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_AppLayoutContext__WEBPACK_IMPORTED_MODULE_2__.p.Provider,{value:{focusMode:!1,isMobileMenuOpen:!0,openMobileMenu:console.log,closeMobileMenu:console.log},children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{flexDirection:"column",css:_ref,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_AppLayoutSidebar__WEBPACK_IMPORTED_MODULE_3__.y,_objectSpread({},props))})})},Basic={},LevelOneActive={args:{activePath:"/establishments"}},LevelTwoActive={args:{activePath:"/establishments/canberra"}},BodyBackground={args:{background:"body"}},WithoutIcons={args:{activePath:"/establishments",items:(0,_test_utils__WEBPACK_IMPORTED_MODULE_4__.f3)("Antfix").map((group=>(Array.isArray(group)?group:group.items).map((item=>_objectSpread(_objectSpread({},item),{},{icon:void 0})))))}},LargeList={args:{activePath:"#0-0",items:Array.from(Array(5)).map(((_,groupIdx)=>Array.from(Array(5)).map(((_,itemIdx)=>({href:`#${groupIdx}-${itemIdx}`,label:"Example item"})))))}},AlwaysOpen={args:{subLevelVisible:"always"}},__namedExportsOrder=["Basic","LevelOneActive","LevelTwoActive","BodyBackground","WithoutIcons","LargeList","AlwaysOpen"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{}",...Basic.parameters?.docs?.source}}},LevelOneActive.parameters={...LevelOneActive.parameters,docs:{...LevelOneActive.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '/establishments'\n  }\n}",...LevelOneActive.parameters?.docs?.source}}},LevelTwoActive.parameters={...LevelTwoActive.parameters,docs:{...LevelTwoActive.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '/establishments/canberra'\n  }\n}",...LevelTwoActive.parameters?.docs?.source}}},BodyBackground.parameters={...BodyBackground.parameters,docs:{...BodyBackground.parameters?.docs,source:{originalSource:"{\n  args: {\n    background: 'body'\n  }\n}",...BodyBackground.parameters?.docs?.source}}},WithoutIcons.parameters={...WithoutIcons.parameters,docs:{...WithoutIcons.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '/establishments',\n    items: navigationItems('Antfix').map(group => {\n      const groupItems = Array.isArray(group) ? group : group.items;\n      return groupItems.map(item => {\n        return {\n          ...item,\n          icon: undefined\n        };\n      });\n    })\n  }\n}",...WithoutIcons.parameters?.docs?.source}}},LargeList.parameters={...LargeList.parameters,docs:{...LargeList.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '#0-0',\n    items: Array.from(Array(5)).map((_, groupIdx) => {\n      return Array.from(Array(5)).map((_, itemIdx) => {\n        return {\n          href: `#${groupIdx}-${itemIdx}`,\n          label: 'Example item'\n        };\n      });\n    })\n  }\n}",...LargeList.parameters?.docs?.source}}},AlwaysOpen.parameters={...AlwaysOpen.parameters,docs:{...AlwaysOpen.parameters?.docs,source:{originalSource:"{\n  args: {\n    subLevelVisible: 'always'\n  }\n}",...AlwaysOpen.parameters?.docs?.source}}}},"./packages/react/src/app-layout/AppLayoutContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useAppLayoutContext,p:()=>AppLayoutContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const AppLayoutContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function useAppLayoutContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppLayoutContext);if(void 0===context)throw new Error("`AppLayoutContext` not found.");return context}},"./packages/react/src/app-layout/test-utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$d:()=>ExampleAccountDropdown,Fo:()=>exampleData,f3:()=>navigationItems});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text/index.ts"),_notification_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/notification-badge/index.ts"),_a11y__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/a11y/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/index.ts"),_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/dropdown-menu/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const navigationItems=businessName=>[{options:{disableGroupPadding:!0},items:[{label:"Back to my account",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.Lp,href:"/account"}]},{options:{disableGroupPadding:!0},items:[{label:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{fontWeight:"bold",fontSize:"xs",children:businessName}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{color:"muted",fontSize:"xs",children:"ABN: 00 000 000 000"})]})}]},[{label:"Dashboard",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.fA,href:"/"},{label:"Establishments",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.AL,href:"/establishments",items:[{label:"Canberra",href:"/establishments/canberra"},{label:"Sydney",href:"/establishments/sydney"}]},{label:"Data and Insights",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.SC,href:"/intelligence"},{label:"Compliance",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.BK,href:"/compliance",items:[{label:"Audit",href:"/compliance/audit"},{label:"Certificates",href:"/compliance/certificates"}]}],[{label:"Help",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.NT,href:"/help"}],[{label:"Sign out",onClick:console.log,icon:_icon__WEBPACK_IMPORTED_MODULE_4__.ExitIcon}]],exampleData={userNames:{short:"Ab Cd",regular:"Toto Wolff",medium:"Benjamin Harrington",long:"Benjamin Alexander Harrington-Smythe"},businessNames:{short:["Lorem","Ipsum","Company"],regular:["Antfix","Produce Fresh","Organic Co"],medium:["Malesuada lacus a tortor blandit fermentum phasellus","Iaculis tortor duis ante nec risus elementum id ui","Purus tortor lacus malesuada phasellus ipsum ex duis libero ante id"],long:["Duis quis iaculis libero nec consectetur luctus ex in malesuada lacus a tortor blandit fermentum phasellus iaculis ipsum nec purus aliquet id elementum risus duis ante ui","Duis ut a libero duis nisl ex lacus in luctus viverra iaculis iaculis tortor duis malesuada blandit purus diam ipsum ante nec risus elementum id ui nec quis aliquet phasellus fermentum","Blandit iaculis iaculis quis ante diam viverra elementum ui risus nec luctus purus tortor lacus malesuada phasellus ipsum ex duis libero ante id Duis fermentum nisl aliquet duis in a nec ut consectetur"]}};function ExampleAccountDropdown({businesses=exampleData.businessNames.regular,onBusinessChange,selectedBusinessName}){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.xn,{palette:"light",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.I,{label:"Businesses",children:[businesses.map((businessName=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.N3,{checked:businessName===selectedBusinessName,secondaryText:"ABN 00 000 000 000",onClick:()=>onBusinessChange?.(businessName),children:businessName},businessName))),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.qN,{href:"#",children:"View all"})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.Id,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.I,{label:"My account",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.Ep,{href:"/profile",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.hS,children:"Profile"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.Ep,{href:"/messages",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.aZ,endElement:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)("span",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_notification_badge__WEBPACK_IMPORTED_MODULE_2__.v,{tone:"action",value:6,max:99,"aria-hidden":!0}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_a11y__WEBPACK_IMPORTED_MODULE_3__.s6,{children:", 6 unread"})]}),children:"Messages"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.Ep,{href:"/account-settings",icon:_icon__WEBPACK_IMPORTED_MODULE_4__.Ze,children:"Account settings"})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__.Id,{}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__._2,{onClick:()=>console.log("sign out"),icon:_icon__WEBPACK_IMPORTED_MODULE_4__.ExitIcon,children:"Sign out"})]})}},"./packages/react/src/app-layout/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B4:()=>findBestMatch,Jl:()=>APP_LAYOUT_SIDEBAR_WIDTH,g8:()=>APP_LAYOUT_DESKTOP_BREAKPOINT});const APP_LAYOUT_DESKTOP_BREAKPOINT="xl",APP_LAYOUT_SIDEBAR_WIDTH="16rem",findBestMatch=(items,activePath)=>{if(!activePath)return"";const allHrefs=items.flatMap((item=>Array.isArray(item)?item:[item,...item.items])).flatMap((item=>"items"in item&&void 0!==item.items?[item,...item.items]:item)).map((item=>item&&"href"in item&&void 0!==item.href?item.href:""));let exactMatch,bestMatch="";for(const href of allHrefs){if(href===activePath){exactMatch=href;break}activePath?.startsWith(href)&&href.length>bestMatch.length&&(bestMatch=href)}return exactMatch||bestMatch}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_64__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,DM:()=>_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_57__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_41__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_61__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_70__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_74__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_37__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_48__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_59__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_65__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_62__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_75__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_76__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_36__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_47__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_63__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_53__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_38__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_54__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_73__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_40__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_56__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_60__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_58__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_55__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx"),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_36__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_40__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_47__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_53__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/ProgressNotRequiredIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_61__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_62__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_63__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_70__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_73__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_74__=__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx"),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_75__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_76__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx")},"./packages/react/src/notification-badge/NotificationBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>NotificationBadge});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts");const badgeToneMap={neutral:core.boxPalette.foregroundMuted,action:core.boxPalette.foregroundAction};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const NotificationBadge=({value,max,tone,"aria-hidden":ariaHidden})=>{const backgroundColor=badgeToneMap[tone];return(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{alignItems:"center","aria-hidden":ariaHidden,css:(0,emotion_react_browser_esm.AH)({color:core.boxPalette.backgroundBody,backgroundColor,minWidth:(0,core.QY)(1.5),borderRadius:(0,core.QY)(.75)},"",""),display:"inline-flex",fontSize:"sm",height:(0,core.QY)(1.5),highContrastOutline:!0,justifyContent:"center",lineHeight:"nospace",paddingX:.5,rounded:!0,children:void 0===max||value<=max?value:`${max}+`})}},"./packages/react/src/notification-badge/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>_NotificationBadge__WEBPACK_IMPORTED_MODULE_0__.v});var _NotificationBadge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/notification-badge/NotificationBadge.tsx")}}]);