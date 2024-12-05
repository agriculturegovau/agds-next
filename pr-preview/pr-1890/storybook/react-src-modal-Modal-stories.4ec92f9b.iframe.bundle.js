"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3993],{"./packages/react/src/modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ConfirmingDestructiveAction:()=>ConfirmingDestructiveAction,ConfirmingFormCancellation:()=>ConfirmingFormCancellation,LeavingFormPage:()=>LeavingFormPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/modal/Modal.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"content/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_3__.a},Basic={args:{title:"This is the title of the modal dialog, it can span lines but should not be too long."},render:function Render(props){const[isModalOpen,openModal,closeModal]=(0,_core__WEBPACK_IMPORTED_MODULE_1__.C6)(!1);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)("div",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:openModal,children:"Open modal"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_3__.a,{isOpen:isModalOpen,onClose:closeModal,title:props.title,actions:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_button__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:closeModal,children:"Primary button"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{variant:"secondary",onClick:closeModal,children:"Secondary button"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{variant:"tertiary",onClick:closeModal,children:"Tertiary button"})]}),children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"p",children:"This is the Modal Body paragraph, it provides detailed instruction and context for the the modal action. It can also span lines but long form content should be avoided."})})]})}},ConfirmingDestructiveAction={args:{title:"Are you sure you want to delete this certificate?"},render:function Render(props){const[isModalOpen,openModal,closeModal]=(0,_core__WEBPACK_IMPORTED_MODULE_1__.C6)(!1);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)("div",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:openModal,children:"Open modal"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_3__.a,{isOpen:isModalOpen,onClose:closeModal,title:props.title,actions:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_button__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:closeModal,children:"Delete certificate"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{variant:"secondary",onClick:closeModal,children:"Cancel"})]}),children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"p",children:["Certificate ",(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{fontWeight:"bold",children:"CER-36476487"})," will be deleted immediately. You can not undo this action."]})})]})}},ConfirmingFormCancellation={args:{title:"Are you sure you want to cancel?"},render:function Render(props){const[isModalOpen,openModal,closeModal]=(0,_core__WEBPACK_IMPORTED_MODULE_1__.C6)(!1);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)("div",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:openModal,children:"Open modal"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_3__.a,{isOpen:isModalOpen,onClose:closeModal,title:props.title,actions:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_button__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:closeModal,children:"Yes, cancel"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{variant:"secondary",onClick:closeModal,children:"No, take me back"})]}),children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"p",children:"If you cancel, you will lose all information entered."})})]})}},LeavingFormPage={args:{title:"Are you sure you want to leave this page?"},render:function Render(props){const[isModalOpen,openModal,closeModal]=(0,_core__WEBPACK_IMPORTED_MODULE_1__.C6)(!1);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)("div",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:openModal,children:"Open modal"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_Modal__WEBPACK_IMPORTED_MODULE_3__.a,{isOpen:isModalOpen,onClose:closeModal,title:props.title,actions:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_button__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{onClick:closeModal,children:"Leave this page"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_button__WEBPACK_IMPORTED_MODULE_0__.Button,{variant:"secondary",onClick:closeModal,children:"Stay on this page"})]}),children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{as:"p",children:"You will lose all changes made since your last save."})})]})}},__namedExportsOrder=["Basic","ConfirmingDestructiveAction","ConfirmingFormCancellation","LeavingFormPage"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'This is the title of the modal dialog, it can span lines but should not be too long.\'\n  },\n  render: function Render(props) {\n    const [isModalOpen, openModal, closeModal] = useTernaryState(false);\n    return <div>\n                <Button onClick={openModal}>Open modal</Button>\n                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>\n                            <Button onClick={closeModal}>Primary button</Button>\n                            <Button variant="secondary" onClick={closeModal}>\n                                Secondary button\n                            </Button>\n                            <Button variant="tertiary" onClick={closeModal}>\n                                Tertiary button\n                            </Button>\n                        </ButtonGroup>}>\n                    <Text as="p">\n                        This is the Modal Body paragraph, it provides detailed instruction\n                        and context for the the modal action. It can also span lines but\n                        long form content should be avoided.\n                    </Text>\n                </Modal>\n            </div>;\n  }\n}',...Basic.parameters?.docs?.source}}},ConfirmingDestructiveAction.parameters={...ConfirmingDestructiveAction.parameters,docs:{...ConfirmingDestructiveAction.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Are you sure you want to delete this certificate?\'\n  },\n  render: function Render(props) {\n    const [isModalOpen, openModal, closeModal] = useTernaryState(false);\n    return <div>\n                <Button onClick={openModal}>Open modal</Button>\n                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>\n                            <Button onClick={closeModal}>Delete certificate</Button>\n                            <Button variant="secondary" onClick={closeModal}>\n                                Cancel\n                            </Button>\n                        </ButtonGroup>}>\n                    <Text as="p">\n                        Certificate <Text fontWeight="bold">CER-36476487</Text> will be\n                        deleted immediately. You can not undo this action.\n                    </Text>\n                </Modal>\n            </div>;\n  }\n}',...ConfirmingDestructiveAction.parameters?.docs?.source}}},ConfirmingFormCancellation.parameters={...ConfirmingFormCancellation.parameters,docs:{...ConfirmingFormCancellation.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Are you sure you want to cancel?\'\n  },\n  render: function Render(props) {\n    const [isModalOpen, openModal, closeModal] = useTernaryState(false);\n    return <div>\n                <Button onClick={openModal}>Open modal</Button>\n                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>\n                            <Button onClick={closeModal}>Yes, cancel</Button>\n                            <Button variant="secondary" onClick={closeModal}>\n                                No, take me back\n                            </Button>\n                        </ButtonGroup>}>\n                    <Text as="p">\n                        If you cancel, you will lose all information entered.\n                    </Text>\n                </Modal>\n            </div>;\n  }\n}',...ConfirmingFormCancellation.parameters?.docs?.source}}},LeavingFormPage.parameters={...LeavingFormPage.parameters,docs:{...LeavingFormPage.parameters?.docs,source:{originalSource:'{\n  args: {\n    title: \'Are you sure you want to leave this page?\'\n  },\n  render: function Render(props) {\n    const [isModalOpen, openModal, closeModal] = useTernaryState(false);\n    return <div>\n                <Button onClick={openModal}>Open modal</Button>\n                <Modal isOpen={isModalOpen} onClose={closeModal} title={props.title} actions={<ButtonGroup>\n                            <Button onClick={closeModal}>Leave this page</Button>\n                            <Button variant="secondary" onClick={closeModal}>\n                                Stay on this page\n                            </Button>\n                        </ButtonGroup>}>\n                    <Text as="p">\n                        You will lose all changes made since your last save.\n                    </Text>\n                </Modal>\n            </div>;\n  }\n}',...LeavingFormPage.parameters?.docs?.source}}}},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ButtonGroup=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.v,SC:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.S,VV:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.VV});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.ts")},"./packages/react/src/getCloseHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NZ:()=>getOptionalCloseHandler,id:()=>getRequiredCloseHandler});var console=__webpack_require__("./node_modules/console-browserify/index.js");const closeHandlerWarningMessage="Do not use onDismiss in combination with onClose. Use onClose by itself. onDismiss is deprecated. Only onClose will be called.";function getRequiredCloseHandler(onClose,onDismiss){const closeHandler=onClose||onDismiss;if(handleWarnings(onClose,onDismiss),!closeHandler)throw new Error("onClose prop is required");return closeHandler}function getOptionalCloseHandler(onClose,onDismiss){return handleWarnings(onClose,onDismiss),onClose||onDismiss}function handleWarnings(onClose,onDismiss){onClose&&onDismiss?console.warn(closeHandlerWarningMessage):onDismiss&&console.warn("onDismiss is deprecated. Use onClose instead.")}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx"),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx"),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx")},"./packages/react/src/modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),getCloseHandler=__webpack_require__("./packages/react/src/getCloseHandler.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ModalCover=(0,react.forwardRef)((function ModalCover({children},ref){return(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{ref,css:(0,emotion_react_browser_esm.AH)({position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:core.boxPalette.overlay,zIndex:core.tokens.zIndex.overlay,overflowY:"auto",animation:`${animateFadeInOut} ${core.tokens.transition.duration}ms ${core.tokens.transition.timingFunction}`},"",""),children})})),animateFadeInOut=emotion_react_browser_esm.i7`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;var es2015=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts");const ModalTitle=({children,id})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{as:"h2",fontSize:"lg",fontWeight:"bold",lineHeight:"heading",id,"data-autofocus":!0,focusRingFor:"keyboard",tabIndex:-1,children});var _ref={name:"1duj7gx",styles:"align-self:flex-end"},_ref2={name:"xdvdnl",styles:"margin-top:auto"};const ModalDialog=({actions,children,onClose,onDismiss,title})=>{const closeHandler=(0,getCloseHandler.id)(onClose,onDismiss),{titleId}={titleId:`modal-${(0,core.Bi)()}-title`};return(0,emotion_react_jsx_runtime_browser_esm.Y)(es2015.Ay,{returnFocus:!0,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{"aria-labelledby":titleId,"aria-modal":"true",background:"body",css:(0,emotion_react_browser_esm.AH)({boxShadow:core.tokens.shadow.lg,position:"relative",margin:"0 auto",minHeight:"100vh",animation:`${animateSlideInUp} ${core.tokens.transition.duration}ms ${core.tokens.transition.timingFunction}`,"@supports (min-height: 100dvh)":{minHeight:"100dvh"},[core.tokens.mediaQuery.min.sm]:{borderRadius:core.tokens.borderRadius,margin:`${(0,core.mapSpacing)(6)} auto ${(0,core.mapSpacing)(1)}`,minHeight:"auto"}},"",""),gap:1,highContrastOutline:!0,maxWidth:"45rem",paddingX:{xs:.75,md:1.5},paddingY:{xs:1,md:1.5},role:"dialog",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(src_button.Button,{variant:"text","aria-label":"Close modal",onClick:closeHandler,iconAfter:icon.US,css:_ref,children:"Close"}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ModalTitle,{id:titleId,children:title}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{children}),actions?(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{paddingTop:1,css:_ref2,children:actions}):null]})})},animateSlideInUp=emotion_react_browser_esm.i7`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`;const Modal=({actions,children,isOpen=!1,onClose,onDismiss,title})=>{const closeHandler=(0,getCloseHandler.id)(onClose,onDismiss);(0,react.useEffect)((()=>{const handleKeyDown=e=>{isOpen&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),closeHandler())};return window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown)}),[closeHandler,isOpen]);const{modalContainerRef}=(0,core.X5)(isOpen);return isOpen&&(0,core.Sw)()?(0,react_dom.createPortal)((0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(LockScroll,{}),(0,emotion_react_jsx_runtime_browser_esm.Y)(ModalCover,{ref:modalContainerRef,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(ModalDialog,{actions,onClose:closeHandler,title,children})})]}),document.body):null};var Modal_ref={name:"1sy9iaq",styles:"body{overflow:hidden;}"};const LockScroll=()=>(0,emotion_react_jsx_runtime_browser_esm.Y)(emotion_react_browser_esm.mL,{styles:Modal_ref})}}]);
//# sourceMappingURL=react-src-modal-Modal-stories.4ec92f9b.iframe.bundle.js.map