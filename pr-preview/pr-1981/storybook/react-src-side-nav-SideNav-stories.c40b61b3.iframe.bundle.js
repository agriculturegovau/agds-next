"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[6892],{"./packages/react/src/side-nav/SideNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,LevelOneActive:()=>LevelOneActive,LevelThreeActive:()=>LevelThreeActive,LevelTwoActive:()=>LevelTwoActive,OnBodyAlt:()=>OnBodyAlt,SubLevelsAlwaysOpen:()=>SubLevelsAlwaysOpen,WithoutTitleLinks:()=>WithoutTitleLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNav_stories});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),SideNav=__webpack_require__("./packages/react/src/side-nav/SideNav.tsx");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const SideNav_stories={title:"navigation/SideNav",component:SideNav.f,args:_objectSpread(_objectSpread({},{title:"Lodging your tax return",titleLink:"/",items:[{href:"/welcome",label:"Welcome"},{href:"/do-you-need-to-lodge-a-tax-return",label:"Do you need to lodge a tax return?"},{href:"/lodge-online",label:"Lodge online",items:[{href:"/lodge-online/pre-filling",label:"Pre-filling your online tax return"}]},{href:"/whats-new-for-individuals",label:"What’s new for individuals"},{href:"/why-you-may-receive-a-tax-bill",label:"Why you may receive a tax bill"},{href:"/in-detail",label:"In detail",items:[{href:"/in-detail/record-keeping",label:"Record keeping",items:[{href:"/in-detail/record-keeping/tax",label:"Keeping your tax records"},{href:"/in-detail/record-keeping/incorrect-amounts",label:"Incorrect amounts"}]},{href:"/tax-receipt",label:"Tax receipt"},{href:"/pre-fill-availability",label:"Pre-fill availability"}]}],activePath:"/in-detail"}),{},{subLevelVisible:"whenActive"})},Basic={args:{activePath:"/welcome"}},LevelOneActive={},LevelTwoActive={args:{activePath:"/in-detail/record-keeping"}},LevelThreeActive={args:{activePath:"/in-detail/record-keeping/incorrect-amounts"}},WithoutTitleLinks={args:{titleLink:void 0,activePath:"/in-detail"}},OnBodyAlt={args:{background:"bodyAlt"},name:"On bodyAlt background",render:args=>(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{background:"bodyAlt",padding:2,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(SideNav.f,_objectSpread({},args))})},SubLevelsAlwaysOpen={args:{activePath:"#page-1",items:[{href:"#page-1",label:"Landing page 1"},{href:"#page-2",label:"Landing page 2",items:[{href:"#next-page/page-2-1",label:"Page 2.1"},{href:"#next-page/page-2-2",label:"Page 2.2"}]}],subLevelVisible:"always"}},__namedExportsOrder=["Basic","LevelOneActive","LevelTwoActive","LevelThreeActive","WithoutTitleLinks","OnBodyAlt","SubLevelsAlwaysOpen"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '/welcome'\n  }\n}",...Basic.parameters?.docs?.source}}},LevelOneActive.parameters={...LevelOneActive.parameters,docs:{...LevelOneActive.parameters?.docs,source:{originalSource:"{}",...LevelOneActive.parameters?.docs?.source}}},LevelTwoActive.parameters={...LevelTwoActive.parameters,docs:{...LevelTwoActive.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '/in-detail/record-keeping'\n  }\n}",...LevelTwoActive.parameters?.docs?.source}}},LevelThreeActive.parameters={...LevelThreeActive.parameters,docs:{...LevelThreeActive.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '/in-detail/record-keeping/incorrect-amounts'\n  }\n}",...LevelThreeActive.parameters?.docs?.source}}},WithoutTitleLinks.parameters={...WithoutTitleLinks.parameters,docs:{...WithoutTitleLinks.parameters?.docs,source:{originalSource:"{\n  args: {\n    titleLink: undefined,\n    activePath: '/in-detail'\n  }\n}",...WithoutTitleLinks.parameters?.docs?.source}}},OnBodyAlt.parameters={...OnBodyAlt.parameters,docs:{...OnBodyAlt.parameters?.docs,source:{originalSource:"{\n  args: {\n    background: 'bodyAlt'\n  },\n  name: 'On bodyAlt background',\n  render: args => <Box background=\"bodyAlt\" padding={2}>\n            <SideNav {...args} />\n        </Box>\n}",...OnBodyAlt.parameters?.docs?.source}}},SubLevelsAlwaysOpen.parameters={...SubLevelsAlwaysOpen.parameters,docs:{...SubLevelsAlwaysOpen.parameters?.docs,source:{originalSource:"{\n  args: {\n    activePath: '#page-1',\n    items: alwaysOpenItems,\n    subLevelVisible: 'always'\n  }\n}",...SubLevelsAlwaysOpen.parameters?.docs?.source}}}},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ButtonGroup=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{alignItems:["stretch","center"],flexDirection:["column","row"],gap:1,children})},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.v,SC:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.S,VV:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.VV});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.ts")},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_37__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_79__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_14__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_18__.D,DM:()=>_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_67__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_48__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_34__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_73__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_85__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_10__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_28__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_21__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_88__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_24__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_44__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_56__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_69__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_16__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_17__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_78__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_26__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_74__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_89__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_91__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_40__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_19__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_55__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_75__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_32__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_63__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_46__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_64__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_90__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_49__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_66__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_35__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_72__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_68__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_20__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_65__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./packages/react/src/icon/icons/ArchiveIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx")),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/BusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx")),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_16__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_24__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx")),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_26__=(__webpack_require__("./packages/react/src/icon/icons/ClockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_28__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_32__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_34__=(__webpack_require__("./packages/react/src/icon/icons/EmailOpenIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx")),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_37__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_40__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_44__=(__webpack_require__("./packages/react/src/icon/icons/FlagFilledIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FlagIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/GripIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx")),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_46__=(__webpack_require__("./packages/react/src/icon/icons/HistoryIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_48__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx")),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_55__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_63__=(__webpack_require__("./packages/react/src/icon/icons/MoveLeftIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MoveRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/ProgressNotRequiredIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_69__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_72__=(__webpack_require__("./packages/react/src/icon/icons/RotateLeftIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/RotateRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx")),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_73__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_74__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_75__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_78__=(__webpack_require__("./packages/react/src/icon/icons/StarFilledIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/StarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx")),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_79__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_85__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TimerIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_88__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx")),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_89__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_90__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_91__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ZoomInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ZoomOutIcon.tsx")},"./packages/react/src/side-nav/SideNav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>SideNav});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),_collapsing_side_bar=__webpack_require__("./packages/react/src/_collapsing-side-bar/index.ts"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function SideNavTitle({as,children,className,display,href,id,isCurrentPage}){const Link=(0,core.d5)(),linkProps=href?{"aria-current":isCurrentPage?"page":void 0,as:Link,href,css:{textDecoration:"none","&:hover":_objectSpread(_objectSpread({},core.tm.underline),{},{backgroundColor:_collapsing_side_bar.ew})}}:void 0;return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as,borderBottom:!0,borderBottomWidth:"xl",className,display,id,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,_objectSpread(_objectSpread({as:"span",color:"text",display:"block",focusRingFor:"keyboard",fontSize:"sm",fontWeight:"bold",lineHeight:"heading",padding:1},linkProps),{},{children}))})}var objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js");const _excluded=["items"];function findBestMatch(items,activePath){if(!activePath)return"";let bestMatch="";const allItems=flattenItems(items);for(const link of allItems){if(!link.href||link.href===activePath)return link.href;activePath?.startsWith(link.href)&&link.href.length>bestMatch.length&&(bestMatch=link.href)}return bestMatch}function flattenItems(items){const allItems=[];for(const item of items){const{items}=item,restItem=(0,objectWithoutProperties.A)(item,_excluded);allItems.push(restItem),items?.length&&allItems.push(...flattenItems(items))}return allItems}function hasSubLevelActiveItem(items,bestMatch){return!(!items?.length||!bestMatch)&&items.some((item=>item.href===bestMatch||item.items?.length&&hasSubLevelActiveItem(item.items,bestMatch)))}var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const LinkListContext=(0,react.createContext)(0),useLinkListDepth=()=>(0,react.useContext)(LinkListContext);function SideNavUnorderedList({children,isOpen}){const value=useLinkListDepth()+1;return isOpen?(0,emotion_react_jsx_runtime_browser_esm.Y)(LinkListContext.Provider,{value,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"ul",children})}):null}function SideNavListItem({children,isActive}){const depth=useLinkListDepth();return(0,emotion_react_jsx_runtime_browser_esm.Y)("li",{css:1===depth&&isActive?{position:"relative","::before":{borderLeftColor:core.boxPalette.borderMuted,borderLeftStyle:"solid",borderLeftWidth:core.tokens.borderWidth.xl,bottom:0,content:'""',left:0,pointerEvents:"none",position:"absolute",top:0}}:void 0,children})}var flex=__webpack_require__("./packages/react/src/flex/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts");const SideNavLink_excluded=["hasSubLevelItemsIndicator","isCurrentPage","isOpen","label","numberOfItems"];function SideNavLink_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function SideNavLink_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?SideNavLink_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):SideNavLink_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref2={name:"1ff36h2",styles:"flex-grow:1"};const SideNavLink=_ref=>{let{hasSubLevelItemsIndicator,isCurrentPage,isOpen,label,numberOfItems}=_ref,props=(0,objectWithoutProperties.A)(_ref,SideNavLink_excluded);const Link=(0,core.d5)(),depth=useLinkListDepth();return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,SideNavLink_objectSpread(SideNavLink_objectSpread({"aria-current":isCurrentPage?"page":void 0,as:Link,borderBottom:!0,borderBottomWidth:"sm",borderColor:"muted",color:"muted",css:(0,emotion_react_browser_esm.AH)(SideNavLink_objectSpread({textDecoration:"none",paddingLeft:`${depth}rem`,"&:hover":{color:core.boxPalette.foregroundText,backgroundColor:_collapsing_side_bar.ew,"& span:last-of-type":core.tm.underline}},isCurrentPage&&{position:"relative",color:core.boxPalette.foregroundText,backgroundColor:_collapsing_side_bar.ew,fontWeight:core.tokens.fontWeight.bold,"::before":{content:'""',position:"absolute",top:0,left:0,bottom:0,borderLeftWidth:core.tokens.borderWidth.xl,borderLeftStyle:"solid",borderLeftColor:core.boxPalette.selected,pointerEvents:"none"}}),"",""),focusRingFor:"keyboard",fontSize:"xs",gap:.75,paddingBottom:depth>1?1:.75,paddingRight:1,paddingTop:1},props),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SideNavActiveAncestorIndicator,{depth}),(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:_ref2,children:label}),hasSubLevelItemsIndicator&&(isOpen?(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.D3,{"aria-hidden":!1,"aria-label":`. Sub-level ${1===numberOfItems?"link":"links"} below.`,css:depth>1?{marginRight:(0,core.QY)(.25)}:void 0,size:depth>1?"sm":"md"}):(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.vK,{"aria-hidden":!1,"aria-label":`. Has ${numberOfItems} sub-level ${1===numberOfItems?"link":"links"}.`,css:depth>1?{marginRight:(0,core.QY)(.25)}:void 0,size:depth>1?"sm":"md"}))]}))},SideNavActiveAncestorIndicator=({depth})=>depth>2?(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:"—"}):depth>1?(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{"aria-hidden":!0,children:"–"}):null,SideNavLinkList_excluded=["isActive","items"];function SideNavLinkList_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function SideNavLinkList_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?SideNavLinkList_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):SideNavLinkList_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const addIsActive=activePath=>item=>{const isActive=item.href===activePath||hasSubLevelActiveItem(item.items,activePath);return SideNavLinkList_objectSpread(SideNavLinkList_objectSpread({},item),{},{isActive,items:isActive||item.items?.length?item.items?.map(addIsActive(activePath)):item.items})},SideNavLinkList=({activePath,items,subLevelVisible})=>{const itemsWithIsActive=(0,react.useMemo)((()=>items.map(addIsActive(activePath))),[activePath,items]),isTopLevelItemActive=itemsWithIsActive.find((item=>item.isActive))?.href===activePath;return(0,emotion_react_jsx_runtime_browser_esm.Y)(LinkList,{activePath,isListOpen:isTopLevelItemActive,items:itemsWithIsActive,subLevelVisible})},LinkList=({activePath,isListOpen,items,subLevelVisible})=>{const isOpen=(0,react.useCallback)(((items,isActive)=>isActive||"always"===subLevelVisible||hasSubLevelActiveItem(items,activePath)),[activePath,subLevelVisible]);return(0,emotion_react_jsx_runtime_browser_esm.Y)(SideNavUnorderedList,{isOpen:isOpen(items,isListOpen),children:items.map((_ref=>{let{isActive,items}=_ref,item=(0,objectWithoutProperties.A)(_ref,SideNavLinkList_excluded);const numberOfItems=items?.length||0,hasSubLevelItemsIndicator=numberOfItems>0&&"whenActive"===subLevelVisible;return(0,emotion_react_jsx_runtime_browser_esm.FD)(SideNavListItem,{isActive:isActive||hasSubLevelActiveItem(items,activePath),children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SideNavLink,SideNavLinkList_objectSpread({hasSubLevelItemsIndicator,isCurrentPage:item.href===activePath,isOpen:isOpen(items,isActive),numberOfItems},item),item.href),items?.length?(0,emotion_react_jsx_runtime_browser_esm.Y)(LinkList,{activePath,isListOpen:isOpen(items,item.href===activePath),items,subLevelVisible}):null]},item.href)}))})};function SideNav({activePath,background="body",collapseTitle,items,subLevelVisible="whenActive",title,titleLink}){const bestMatch=findBestMatch(items,activePath);return(0,emotion_react_jsx_runtime_browser_esm.Y)(_collapsing_side_bar.F3,{as:"nav",background,customTitleElement:(0,emotion_react_jsx_runtime_browser_esm.Y)(SideNavTitle,{as:"h2",css:(0,emotion_react_browser_esm.AH)({[core.tokens.mediaQuery.min.md]:a11y.O_},"",""),children:title}),gap:0,title,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(box.Box,{fontFamily:"body",fontSize:"sm",lineHeight:"default",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SideNavTitle,{as:"span",display:{xs:titleLink?"block":"none",md:"block"},href:titleLink,isCurrentPage:activePath===titleLink,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)(SideNavLinkList,{activePath:bestMatch,items,subLevelVisible})]})})}}}]);