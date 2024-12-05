"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[6137],{"./packages/react/src/field/Field.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HideOptionalLabel:()=>HideOptionalLabel,Invalid:()=>Invalid,Modular:()=>Modular,Required:()=>Required,SecondaryLabel:()=>SecondaryLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_Field__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/field/Field.tsx"),_FieldContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),_FieldLabel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),_FieldMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),_FieldHint__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/field/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/Field",component:_Field__WEBPACK_IMPORTED_MODULE_1__.D0,render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_Field__WEBPACK_IMPORTED_MODULE_1__.D0,_objectSpread(_objectSpread({},args),{},{children:a11yProps=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)("input",_objectSpread({},a11yProps))}))},Basic={args:{label:"Example"}},Required={args:{label:"Example",required:!0}},Invalid={args:{label:"Example",message:"This field is invalid",invalid:!0}},SecondaryLabel={args:{label:"Example",secondaryLabel:"(dd/mm/yyyy)"}},HideOptionalLabel={args:{label:"Example",hideOptionalLabel:!0}},Modular={args:{label:"Example",hint:"Hint text",message:"Message",invalid:!0},render:function Render({label,hideOptionalLabel,secondaryLabel,hint,message,invalid,required}){const{fieldId,messageId,hintId}=(0,_index__WEBPACK_IMPORTED_MODULE_6__.Gj)(),a11yProps=(0,_index__WEBPACK_IMPORTED_MODULE_6__.SF)({fieldId,message,messageId,hint,hintId,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)(_FieldContainer__WEBPACK_IMPORTED_MODULE_2__.E,{invalid,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_FieldLabel__WEBPACK_IMPORTED_MODULE_3__.d,{htmlFor:fieldId,required,secondaryLabel,hideOptionalLabel,children:label}),hint?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_FieldHint__WEBPACK_IMPORTED_MODULE_5__.o,{id:hintId,children:hint}):null,message&&invalid?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_FieldMessage__WEBPACK_IMPORTED_MODULE_4__.i,{id:messageId,children:message}):null,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)("input",_objectSpread({},a11yProps))]})}},__namedExportsOrder=["Basic","Required","Invalid","SecondaryLabel","HideOptionalLabel","Modular"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Example'\n  }\n}",...Basic.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Example',\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Example',\n    message: 'This field is invalid',\n    invalid: true\n  }\n}",...Invalid.parameters?.docs?.source}}},SecondaryLabel.parameters={...SecondaryLabel.parameters,docs:{...SecondaryLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Example',\n    secondaryLabel: '(dd/mm/yyyy)'\n  }\n}",...SecondaryLabel.parameters?.docs?.source}}},HideOptionalLabel.parameters={...HideOptionalLabel.parameters,docs:{...HideOptionalLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Example',\n    hideOptionalLabel: true\n  }\n}",...HideOptionalLabel.parameters?.docs?.source}}},Modular.parameters={...Modular.parameters,docs:{...Modular.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Example',\n    hint: 'Hint text',\n    message: 'Message',\n    invalid: true\n  },\n  render: function Render({\n    label,\n    hideOptionalLabel,\n    secondaryLabel,\n    hint,\n    message,\n    invalid,\n    required\n  }) {\n    const {\n      fieldId,\n      messageId,\n      hintId\n    } = useFieldIds();\n    const a11yProps = useFieldA11yProps({\n      fieldId,\n      message,\n      messageId,\n      hint,\n      hintId,\n      invalid\n    });\n    return <FieldContainer invalid={invalid}>\n                <FieldLabel htmlFor={fieldId} required={required} secondaryLabel={secondaryLabel} hideOptionalLabel={hideOptionalLabel}>\n                    {label}\n                </FieldLabel>\n                {hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}\n                {message && invalid ? <FieldMessage id={messageId}>{message}</FieldMessage> : null}\n                <input {...a11yProps} />\n            </FieldContainer>;\n  }\n}",...Modular.parameters?.docs?.source}}}},"./packages/react/src/field/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D0:()=>Field,Gj:()=>useFieldIds,SF:()=>useFieldA11yProps});var _emotion_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_FieldContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),_FieldLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),_FieldHint__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),_FieldMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Field=({children,hint,id,invalid,label,labelId,maxWidth,secondaryLabel,hideOptionalLabel,message,required})=>{const{fieldId,hintId,messageId}=useFieldIds(id),a11yProps=useFieldA11yProps({required,fieldId,message,messageId,hint,hintId,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_FieldContainer__WEBPACK_IMPORTED_MODULE_1__.E,{invalid,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_FieldLabel__WEBPACK_IMPORTED_MODULE_2__.d,{id:labelId,htmlFor:fieldId,secondaryLabel,hideOptionalLabel,required,children:label}),hint?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_FieldHint__WEBPACK_IMPORTED_MODULE_3__.o,{id:hintId,children:hint}):null,message&&invalid?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_FieldMessage__WEBPACK_IMPORTED_MODULE_4__.i,{id:messageId,children:message}):null,"function"==typeof children?children(a11yProps):children,maxWidth?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("div",{"aria-hidden":!0,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({height:0,marginTop:`-${(0,_core__WEBPACK_IMPORTED_MODULE_0__.mapSpacing)(.5)}`,maxWidth:_core__WEBPACK_IMPORTED_MODULE_0__.tokens.maxWidth.field[maxWidth],overflow:"hidden","::after":{content:'"---------------------------------------------------------------"'}},"","")}):null]})},useFieldIds=idProp=>{const autoId=(0,_core__WEBPACK_IMPORTED_MODULE_0__.Bi)(idProp);return{fieldId:idProp||`field-${autoId}`,hintId:`field-${autoId}-hint`,messageId:`field-${autoId}-message`}},useFieldA11yProps=({required,fieldId,message,messageId,hint,hintId,invalid})=>{const describedByIds=[message?messageId:null,hint?hintId:null].filter(Boolean),describedBy=describedByIds.length?describedByIds.join(" "):void 0;return{"aria-required":Boolean(required),"aria-invalid":Boolean(invalid),"aria-describedby":describedBy,id:fieldId}}},"./packages/react/src/field/FieldContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>FieldContainer});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_stack__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/stack/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FieldContainer=({children,invalid,id})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_stack__WEBPACK_IMPORTED_MODULE_0__.Stack,{gap:.5,paddingLeft:invalid?1:void 0,borderLeft:invalid,borderLeftWidth:"xl",id,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({borderLeftColor:invalid?_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.systemError:void 0},"",""),children})},"./packages/react/src/field/FieldHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>FieldHint});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FieldHint=({children,id})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{display:"block",color:"muted",id,children})},"./packages/react/src/field/FieldLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>FieldLabel});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text/index.ts"),_useSecondaryLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/useSecondaryLabel.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FieldLabel=({as="label",children,className,id,htmlFor,required,secondaryLabel,hideOptionalLabel})=>{const secondaryLabelWithOptional=(0,_useSecondaryLabel__WEBPACK_IMPORTED_MODULE_2__.U)({hideOptionalLabel,required,secondaryLabel});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as,id,htmlFor,className,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{as:"span",fontWeight:"bold",children}),secondaryLabelWithOptional?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{as:"span",color:"muted",children:[" ",secondaryLabelWithOptional]}):null]})}},"./packages/react/src/field/FieldMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>FieldMessage});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/flex/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"4zleql",styles:"display:block"};const FieldMessage=({children,id})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{gap:.5,alignItems:"center",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_icon__WEBPACK_IMPORTED_MODULE_2__.AlertFilledIcon,{color:"error",size:"md","aria-label":"Error","aria-hidden":"false",css:_ref})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_3__.Text,{display:"block",fontWeight:"bold",color:"error",id,children})]})},"./packages/react/src/field/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D0:()=>Field.D0,E8:()=>FieldContainer.E,oE:()=>FieldHint.o,dh:()=>FieldLabel.d,ih:()=>FieldMessage.i,SF:()=>Field.SF,Gj:()=>Field.Gj,useScrollToField:()=>useScrollToField});var Field=__webpack_require__("./packages/react/src/field/Field.tsx"),FieldContainer=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),FieldHint=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),FieldLabel=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),FieldMessage=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useScrollToField(){return(0,react.useCallback)((eventOrTargetId=>{const targetId=function getScrollTargetId(eventOrTargetId){if("string"==typeof eventOrTargetId)return eventOrTargetId;const target=eventOrTargetId.target;if(!(target instanceof HTMLAnchorElement))return;return target.hash.substring(1)}(eventOrTargetId);if(!targetId)return;const targetEl=document.getElementById(targetId)||document.getElementsByName(targetId)[0];targetEl&&(!function scrollAndFocusTarget(targetId,targetEl){const targetLabel=document.querySelector("label[for='"+targetId+"']"),targetLabelParent=targetLabel?.parentElement;"div"===targetEl.tagName.toLowerCase()?targetEl.querySelector("input")?.focus():targetEl.focus();targetLabelParent?targetLabelParent.scrollIntoView():targetEl.scrollIntoView()}(targetId,targetEl),"string"!=typeof eventOrTargetId&&eventOrTargetId.preventDefault())}),[])}},"./packages/react/src/field/useSecondaryLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>useSecondaryLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const useSecondaryLabel=({hideOptionalLabel,required,secondaryLabel})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[secondaryLabel,hideOptionalLabel||required?null:"(optional)"].filter(Boolean).join(" ")),[required,secondaryLabel,hideOptionalLabel])},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx"),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_35__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_39__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_43__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_49__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_64__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx"),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({ref,as,color,fontFamily,fontSize,fontWeight,lineHeight},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);