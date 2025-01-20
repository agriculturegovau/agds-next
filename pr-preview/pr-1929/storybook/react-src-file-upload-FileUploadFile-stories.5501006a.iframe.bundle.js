"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9840],{"./packages/react/src/file-upload/FileUploadFile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Image:()=>Image,ImageSuccess:()=>ImageSuccess,ImageUploading:()=>ImageUploading,Pdf:()=>Pdf,Success:()=>Success,Uploading:()=>Uploading,WithLink:()=>WithLink,Word:()=>Word,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _stack__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/stack/index.ts"),_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/file-upload/FileUploadFile.tsx"),_test_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/file-upload/test-utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"forms/FileUpload/Primitives/FileUploadFile",component:_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__.Y,args:{hideThumbnails:!1},decorators:[Story=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_stack__WEBPACK_IMPORTED_MODULE_0__.Stack,{as:"ul",children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(Story,{})})]},Basic={name:".txt file",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.L)()}},Uploading={name:".txt file (uploading)",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.L)({status:"uploading"})}},Success={name:".txt file (success)",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.L)({status:"success"})}},WithLink={name:".txt file (with href)",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.L)({href:"#"})}},Image={name:".jpg file",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.E)()}},ImageUploading={name:".jpg file (uploading)",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.E)({status:"uploading"})}},ImageSuccess={name:".jpg file (success)",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.E)({status:"success"})}},Pdf={name:".pdf file",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.L)({name:"example.pdf",type:"application/pdf"})}},Word={name:".doc file",args:{file:(0,_test_utils__WEBPACK_IMPORTED_MODULE_3__.L)({name:"example.doc",type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})}},__namedExportsOrder=["Basic","Uploading","Success","WithLink","Image","ImageUploading","ImageSuccess","Pdf","Word"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  name: '.txt file',\n  args: {\n    file: createExampleFile()\n  }\n}",...Basic.parameters?.docs?.source}}},Uploading.parameters={...Uploading.parameters,docs:{...Uploading.parameters?.docs,source:{originalSource:"{\n  name: '.txt file (uploading)',\n  args: {\n    file: createExampleFile({\n      status: 'uploading'\n    })\n  }\n}",...Uploading.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  name: '.txt file (success)',\n  args: {\n    file: createExampleFile({\n      status: 'success'\n    })\n  }\n}",...Success.parameters?.docs?.source}}},WithLink.parameters={...WithLink.parameters,docs:{...WithLink.parameters?.docs,source:{originalSource:"{\n  name: '.txt file (with href)',\n  args: {\n    file: createExampleFile({\n      href: '#'\n    })\n  }\n}",...WithLink.parameters?.docs?.source}}},Image.parameters={...Image.parameters,docs:{...Image.parameters?.docs,source:{originalSource:"{\n  name: '.jpg file',\n  args: {\n    file: createExampleImageFile()\n  }\n}",...Image.parameters?.docs?.source}}},ImageUploading.parameters={...ImageUploading.parameters,docs:{...ImageUploading.parameters?.docs,source:{originalSource:"{\n  name: '.jpg file (uploading)',\n  args: {\n    file: createExampleImageFile({\n      status: 'uploading'\n    })\n  }\n}",...ImageUploading.parameters?.docs?.source}}},ImageSuccess.parameters={...ImageSuccess.parameters,docs:{...ImageSuccess.parameters?.docs,source:{originalSource:"{\n  name: '.jpg file (success)',\n  args: {\n    file: createExampleImageFile({\n      status: 'success'\n    })\n  }\n}",...ImageSuccess.parameters?.docs?.source}}},Pdf.parameters={...Pdf.parameters,docs:{...Pdf.parameters?.docs,source:{originalSource:"{\n  name: '.pdf file',\n  args: {\n    file: createExampleFile({\n      name: 'example.pdf',\n      type: 'application/pdf'\n    })\n  }\n}",...Pdf.parameters?.docs?.source}}},Word.parameters={...Word.parameters,docs:{...Word.parameters?.docs,source:{originalSource:"{\n  name: '.doc file',\n  args: {\n    file: createExampleFile({\n      name: 'example.doc',\n      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'\n    })\n  }\n}",...Word.parameters?.docs?.source}}}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_64__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__.D,DM:()=>_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_57__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_41__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_61__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_70__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_74__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_37__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_48__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_59__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_65__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_62__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_75__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_76__.V,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_36__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_47__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_63__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_53__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_38__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_54__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__.h,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_73__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_40__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_56__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_60__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_58__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_55__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx"),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_25__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx"),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_33__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_36__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx"),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_40__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_47__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_53__=(__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_55__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_57__=__webpack_require__("./packages/react/src/icon/icons/ProgressNotRequiredIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_58__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_59__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_60__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx"),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_61__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_62__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_63__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_70__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_73__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_74__=__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx"),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_75__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_76__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx")},"./node_modules/attr-accept/dist/es/index.js":(__unused_webpack_module,exports)=>{exports.A=function(file,acceptedFiles){if(file&&acceptedFiles){var acceptedFilesArray=Array.isArray(acceptedFiles)?acceptedFiles:acceptedFiles.split(","),fileName=file.name||"",mimeType=(file.type||"").toLowerCase(),baseMimeType=mimeType.replace(/\/.*$/,"");return acceptedFilesArray.some((function(type){var validType=type.trim().toLowerCase();return"."===validType.charAt(0)?fileName.toLowerCase().endsWith(validType):validType.endsWith("/*")?baseMimeType===validType.replace(/\/.*$/,""):mimeType===validType}))}return!0}},"./node_modules/react-dropzone/dist/es/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>acceptPropAsAcceptAttr,Hz:()=>fileMatchSize,O4:()=>ErrorCode,Qk:()=>isPropagationStopped,Ri:()=>TOO_MANY_FILES_REJECTION,Vl:()=>pickerOptionsFromAccept,WR:()=>fileAccepted,gs:()=>allFilesAccepted,lP:()=>isIeOrEdge,mK:()=>composeEventHandlers,rV:()=>isAbort,rr:()=>onDocumentDragOver,t:()=>isEvtWithFiles,v2:()=>isSecurityError,vQ:()=>canUseFileSystemAccessAPI});var attr_accept__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/attr-accept/dist/es/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ErrorCode={FileInvalidType:"file-invalid-type",FileTooLarge:"file-too-large",FileTooSmall:"file-too-small",TooManyFiles:"too-many-files"},getInvalidTypeRejectionErr=function getInvalidTypeRejectionErr(accept){accept=Array.isArray(accept)&&1===accept.length?accept[0]:accept;var messageSuffix=Array.isArray(accept)?"one of ".concat(accept.join(", ")):accept;return{code:"file-invalid-type",message:"File type must be ".concat(messageSuffix)}},getTooLargeRejectionErr=function getTooLargeRejectionErr(maxSize){return{code:"file-too-large",message:"File is larger than ".concat(maxSize," ").concat(1===maxSize?"byte":"bytes")}},getTooSmallRejectionErr=function getTooSmallRejectionErr(minSize){return{code:"file-too-small",message:"File is smaller than ".concat(minSize," ").concat(1===minSize?"byte":"bytes")}},TOO_MANY_FILES_REJECTION={code:"too-many-files",message:"Too many files"};function fileAccepted(file,accept){var isAcceptable="application/x-moz-file"===file.type||(0,attr_accept__WEBPACK_IMPORTED_MODULE_0__.A)(file,accept);return[isAcceptable,isAcceptable?null:getInvalidTypeRejectionErr(accept)]}function fileMatchSize(file,minSize,maxSize){if(isDefined(file.size))if(isDefined(minSize)&&isDefined(maxSize)){if(file.size>maxSize)return[!1,getTooLargeRejectionErr(maxSize)];if(file.size<minSize)return[!1,getTooSmallRejectionErr(minSize)]}else{if(isDefined(minSize)&&file.size<minSize)return[!1,getTooSmallRejectionErr(minSize)];if(isDefined(maxSize)&&file.size>maxSize)return[!1,getTooLargeRejectionErr(maxSize)]}return[!0,null]}function isDefined(value){return null!=value}function allFilesAccepted(_ref){var files=_ref.files,accept=_ref.accept,minSize=_ref.minSize,maxSize=_ref.maxSize,multiple=_ref.multiple,maxFiles=_ref.maxFiles,validator=_ref.validator;return!(!multiple&&files.length>1||multiple&&maxFiles>=1&&files.length>maxFiles)&&files.every((function(file){var accepted=_slicedToArray(fileAccepted(file,accept),1)[0],sizeMatch=_slicedToArray(fileMatchSize(file,minSize,maxSize),1)[0],customErrors=validator?validator(file):null;return accepted&&sizeMatch&&!customErrors}))}function isPropagationStopped(event){return"function"==typeof event.isPropagationStopped?event.isPropagationStopped():void 0!==event.cancelBubble&&event.cancelBubble}function isEvtWithFiles(event){return event.dataTransfer?Array.prototype.some.call(event.dataTransfer.types,(function(type){return"Files"===type||"application/x-moz-file"===type})):!!event.target&&!!event.target.files}function onDocumentDragOver(event){event.preventDefault()}function isIeOrEdge(){var userAgent=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function isIe(userAgent){return-1!==userAgent.indexOf("MSIE")||-1!==userAgent.indexOf("Trident/")}(userAgent)||function isEdge(userAgent){return-1!==userAgent.indexOf("Edge/")}(userAgent)}function composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return fns.some((function(fn){return!isPropagationStopped(event)&&fn&&fn.apply(void 0,[event].concat(args)),isPropagationStopped(event)}))}}function canUseFileSystemAccessAPI(){return"showOpenFilePicker"in window}function pickerOptionsFromAccept(accept){return isDefined(accept)?[{description:"Files",accept:Object.entries(accept).filter((function(_ref2){var _ref3=_slicedToArray(_ref2,2),mimeType=_ref3[0],ext=_ref3[1],ok=!0;return isMIMEType(mimeType)||(console.warn('Skipped "'.concat(mimeType,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),ok=!1),Array.isArray(ext)&&ext.every(isExt)||(console.warn('Skipped "'.concat(mimeType,'" because an invalid file extension was provided.')),ok=!1),ok})).reduce((function(agg,_ref4){var _ref5=_slicedToArray(_ref4,2),mimeType=_ref5[0],ext=_ref5[1];return _objectSpread(_objectSpread({},agg),{},_defineProperty({},mimeType,ext))}),{})}]:accept}function acceptPropAsAcceptAttr(accept){if(isDefined(accept))return Object.entries(accept).reduce((function(a,_ref6){var _ref7=_slicedToArray(_ref6,2),mimeType=_ref7[0],ext=_ref7[1];return[].concat(_toConsumableArray(a),[mimeType],_toConsumableArray(ext))}),[]).filter((function(v){return isMIMEType(v)||isExt(v)})).join(",")}function isAbort(v){return v instanceof DOMException&&("AbortError"===v.name||v.code===v.ABORT_ERR)}function isSecurityError(v){return v instanceof DOMException&&("SecurityError"===v.name||v.code===v.SECURITY_ERR)}function isMIMEType(v){return"audio/*"===v||"video/*"===v||"image/*"===v||"text/*"===v||/\w+\/[-+.\w]+/g.test(v)}function isExt(v){return/^.*\.[\w]+$/.test(v)}}}]);