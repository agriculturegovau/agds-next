"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[5320],{"./packages/react/src/file-upload/FileUploadFileList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,HiddenThumbnails:()=>HiddenThumbnails,MixedFiles:()=>MixedFiles,Uploading:()=>Uploading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _FileUploadFileList__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/file-upload/FileUploadFileList.tsx"),_test_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/file-upload/test-utils.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"forms/FileUpload/Primitives/FileUploadFileList",component:_FileUploadFileList__WEBPACK_IMPORTED_MODULE_0__.c,args:{hideThumbnails:!1}},Basic={args:{files:[(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)({name:"example.pdf",type:"application/pdf"}),(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)(),(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)()],onRemove:id=>console.log(id)}},MixedFiles={args:{files:[(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)({name:"example.pdf",type:"application/pdf"}),(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.E)(),(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)()],onRemove:id=>console.log(id)}},Uploading={args:{files:[(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)({status:"uploading"}),(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)({status:"success"})],onRemove:id=>console.log(id)}},HiddenThumbnails={args:{hideThumbnails:!0,files:[(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)({name:"example.pdf",type:"application/pdf"}),(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.E)(),(0,_test_utils__WEBPACK_IMPORTED_MODULE_1__.L)()],onRemove:id=>console.log(id)}},__namedExportsOrder=["Basic","MixedFiles","Uploading","HiddenThumbnails"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    files: [createExampleFile({\n      name: 'example.pdf',\n      type: 'application/pdf'\n    }), createExampleFile(), createExampleFile()],\n    onRemove: id => console.log(id)\n  }\n}",...Basic.parameters?.docs?.source}}},MixedFiles.parameters={...MixedFiles.parameters,docs:{...MixedFiles.parameters?.docs,source:{originalSource:"{\n  args: {\n    files: [createExampleFile({\n      name: 'example.pdf',\n      type: 'application/pdf'\n    }), createExampleImageFile(), createExampleFile()],\n    onRemove: id => console.log(id)\n  }\n}",...MixedFiles.parameters?.docs?.source}}},Uploading.parameters={...Uploading.parameters,docs:{...Uploading.parameters?.docs,source:{originalSource:"{\n  args: {\n    files: [createExampleFile({\n      status: 'uploading'\n    }), createExampleFile({\n      status: 'success'\n    })],\n    onRemove: id => console.log(id)\n  }\n}",...Uploading.parameters?.docs?.source}}},HiddenThumbnails.parameters={...HiddenThumbnails.parameters,docs:{...HiddenThumbnails.parameters?.docs,source:{originalSource:"{\n  args: {\n    hideThumbnails: true,\n    files: [createExampleFile({\n      name: 'example.pdf',\n      type: 'application/pdf'\n    }), createExampleImageFile(), createExampleFile()],\n    onRemove: id => console.log(id)\n  }\n}",...HiddenThumbnails.parameters?.docs?.source}}}},"./packages/react/src/file-upload/FileUploadFile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FileUploadFile});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/flex/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/text/index.ts"),_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/button/index.ts"),_loading__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/loading/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/index.ts"),_text_link__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/text-link/index.ts"),_FileUploadFileThumbnail__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/file-upload/FileUploadFileThumbnail.tsx"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/file-upload/utils.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"4zleql",styles:"display:block"},_ref2={name:"1bmnxg7",styles:"white-space:nowrap"};const FileUploadFile=({file,hideThumbnails,onRemove})=>{const{download,href,name,size,status="none"}=file,showThumbnail=!hideThumbnails,imagePreview=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,_utils__WEBPACK_IMPORTED_MODULE_9__.Ml)(file)),[file]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_flex__WEBPACK_IMPORTED_MODULE_2__.Flex,{as:"li",background:"success"===status?status:"shade",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_flex__WEBPACK_IMPORTED_MODULE_2__.Flex,{children:[showThumbnail&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_FileUploadFileThumbnail__WEBPACK_IMPORTED_MODULE_8__.o,{src:imagePreview}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_flex__WEBPACK_IMPORTED_MODULE_2__.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:["success"==status&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_icon__WEBPACK_IMPORTED_MODULE_6__.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:_ref,size:"md"})}),href?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_text__WEBPACK_IMPORTED_MODULE_3__.Text,{breakWords:!0,paddingY:1.5,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_text_link__WEBPACK_IMPORTED_MODULE_7__.TextLink,{download,href,rel:"noopener noreferrer",target:"_blank",children:[name,size?` (${(0,_utils__WEBPACK_IMPORTED_MODULE_9__.v7)(size)})`:null]})}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_text__WEBPACK_IMPORTED_MODULE_3__.Text,{breakWords:!0,paddingY:1.5,children:[name,size?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.FD)(_text__WEBPACK_IMPORTED_MODULE_3__.Text,{css:_ref2,children:[" ","(",(0,_utils__WEBPACK_IMPORTED_MODULE_9__.v7)(size),")"]}):null]})]})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_flex__WEBPACK_IMPORTED_MODULE_2__.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:"uploading"===status?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{paddingY:1,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_loading__WEBPACK_IMPORTED_MODULE_5__.XC,{label:"Uploading"})}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Y)(_button__WEBPACK_IMPORTED_MODULE_4__.Button,{"aria-label":`Remove file: ${name}`,iconBefore:_icon__WEBPACK_IMPORTED_MODULE_6__.US,onClick:onRemove,size:"sm",variant:"text",children:"Remove"})})]})}},"./packages/react/src/file-upload/FileUploadFileList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FileUploadFileList});var _stack__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/stack/index.ts"),_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/file-upload/FileUploadFile.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FileUploadFileList=({files,hideThumbnails,onRemove})=>files.length?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_stack__WEBPACK_IMPORTED_MODULE_0__.Stack,{"aria-label":"Selected files",as:"ul",gap:.5,children:files.map(((file,index)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__.Y,{file,hideThumbnails,onRemove:()=>onRemove(index)},index)))}):null},"./packages/react/src/file-upload/FileUploadFileThumbnail.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>FileUploadFileThumbnail});var _emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/flex/index.ts"),_icon_icons_FileIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FileUploadFileThumbnail=({src})=>src?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({borderTopLeftRadius:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderRadius,borderBottomLeftRadius:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderRadius,backgroundImage:`url(${src})`,backgroundSize:"cover",backgroundPosition:"center",width:"4.5rem"},"",""),display:{xs:"none",md:"block"},flexShrink:0}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_flex__WEBPACK_IMPORTED_MODULE_2__.Flex,{alignItems:"center",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({borderTopLeftRadius:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderRadius,borderBottomLeftRadius:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderRadius,width:"4.5rem"},"",""),display:{xs:"none",md:"flex"},flexShrink:0,justifyContent:"center",children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_icon_icons_FileIcon__WEBPACK_IMPORTED_MODULE_3__.o,{color:"muted",size:"md"})})},"./packages/react/src/file-upload/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W7:()=>convertFileToTooManyFilesRejection,fu:()=>fileTypeMapping,v7:()=>formatFileSize,hN:()=>getAcceptedFilesSummary,Xl:()=>getErrorSummary,Uf:()=>getFileListSummaryText,Ml:()=>getImageThumbnail,tG:()=>removeItemAtIndex});var utils=__webpack_require__("./node_modules/react-dropzone/dist/es/utils/index.js");const BYTES_PER_KB=1e3,UNITS=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],UNKNOWN="Unknown",MAX_EXPONENT=UNITS.length-1,clamp=(num,min,max)=>Math.min(Math.max(num,min),max);function formatFileSize(bytes){return function filesize(arg){let result,exponent,num=Number(arg);if(isNaN(num))return UNKNOWN;const neg=num<0;neg&&(num=-num),exponent=clamp(Math.floor(Math.log(num)/Math.log(BYTES_PER_KB)),0,MAX_EXPONENT);const val=num/Math.pow(BYTES_PER_KB,exponent),p=Math.pow(10,exponent>0?2:0);return result=Math.round(val*p)/p,result===BYTES_PER_KB&&exponent<MAX_EXPONENT&&(result=1,exponent++),neg&&(result=-result),`${result} ${UNITS[exponent]}`}(bytes)}function getFileListSummaryText(files){return 0===files.length?"":`${files.length} ${1===files.length?"file":"files"} selected`}const fileTypeMapping={"application/msword":{extensions:[".doc"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{extensions:[".docx"]},"application/pdf":{extensions:[".pdf"]},"application/rtf":{extensions:[".rtf"]},"application/vnd.ms-excel":{extensions:[".xls"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{extensions:[".xlsx"]},"application/vnd.ms-outlook":{extensions:[".msg"]},"application/zip":{extensions:[".zip"]},"application/xml":{extensions:[".xml"]},"audio/*":{extensions:[],label:"Any audio file"},"audio/mpeg":{extensions:[".mp3"]},"audio/wav":{extensions:[".wav"]},"image/*":{extensions:[],label:"Any image file"},"image/gif":{extensions:[".gif"]},"image/heic":{extensions:[".heic"]},"image/jpg":{extensions:[".jpeg",".jpg"]},"image/jpeg":{extensions:[".jpeg",".jpg"]},"image/png":{extensions:[".png"]},"image/svg+xml":{extensions:[".svg"]},"image/tiff":{extensions:[".tif",".tiff"]},"image/webp":{extensions:[".webp"]},"text/*":{extensions:[],label:"Any text file"},"text/csv":{extensions:[".csv"]},"text/plain":{extensions:[".txt"]},"text/rtf":{extensions:[".rtf"]},"text/xml":{extensions:[".xml"]},"video/*":{extensions:[],label:"Any video file"},"video/mp4":{extensions:[".mp4"]},"video/mpeg":{extensions:[".mpeg"]}};function getAcceptedFilesSummary(acceptProp){if(!acceptProp?.length)return;const allFileTypes=[];return acceptProp.forEach((item=>{if("string"==typeof item){const option=fileTypeMapping[item];"label"in option?allFileTypes.push(option.label):option.extensions.forEach((extension=>{allFileTypes.push(formatFileExtension(extension))}))}else item?.label?allFileTypes.push(item.label):item.extensions.forEach((extension=>{allFileTypes.push(formatFileExtension(extension))}))})),allFileTypes.filter(((v,idx,arr)=>arr.indexOf(v)===idx)).join(", ")}function formatFileExtension(ext){return ext.replace(/^\./,"")}const TOO_MANY_FILES_ERROR={code:utils.O4.TooManyFiles,message:"Too many files"};function getErrorSummary(rejections,formattedMaxFileSize){if(!rejections?.length)return;const uniqueErrorCodes=Array.from(new Set(rejections.map((({code})=>code))));return uniqueErrorCodes.includes(utils.O4.FileInvalidType)?"Invalid file type":uniqueErrorCodes.includes(utils.O4.FileTooLarge)?`File is over ${formattedMaxFileSize}`:TOO_MANY_FILES_ERROR.message}function getImageThumbnail(file){return file.type.match(/image\/(png|jpg|jpeg|webp|heic)/i)?URL.createObjectURL(file):void 0}function convertFileToTooManyFilesRejection(file){return{file,errors:[TOO_MANY_FILES_ERROR]}}function removeItemAtIndex(array,index){const cloneArray=[...array];return cloneArray.splice(index,1),cloneArray}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A6:()=>_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__.A,AL:()=>_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_37__.A,AlertFilledIcon:()=>_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__.M,BK:()=>_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_79__.B,CT:()=>_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_14__.C,D3:()=>_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_18__.D,DM:()=>_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_67__.D,ET:()=>_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_48__.E,ExitIcon:()=>_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_34__.G,Gg:()=>_icons_StarIcon__WEBPACK_IMPORTED_MODULE_77__.G,JG:()=>_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_73__.J,JM:()=>_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_85__.J,Kp:()=>_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_10__.K,Kz:()=>_icons_FlagFilledIcon__WEBPACK_IMPORTED_MODULE_41__.K,LE:()=>_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_28__.L,Lp:()=>_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_21__.L,Ms:()=>_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_88__.M,Mt:()=>_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_24__.M,NT:()=>_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_44__.N,QG:()=>_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_56__.Q,Rf:()=>_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_69__.R,SC:()=>_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_16__.S,Sr:()=>_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_17__.S,SuccessFilledIcon:()=>_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_78__.h,US:()=>_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_26__.U,WI:()=>_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_74__.W,WarningFilledIcon:()=>_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_89__.A,WebsiteIcon:()=>_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_91__.V,Wm:()=>_icons_StarFilledIcon__WEBPACK_IMPORTED_MODULE_76__.W,Wz:()=>_utils__WEBPACK_IMPORTED_MODULE_1__.W,YG:()=>_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_40__.Y,YJ:()=>_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_19__.Y,ZB:()=>_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_55__.Z,ZL:()=>_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__.Z,Ze:()=>_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_75__.Z,_0:()=>_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__._,aZ:()=>_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_32__.a,c1:()=>_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_63__.c,fA:()=>_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_46__.f,fl:()=>_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__.f,hM:()=>_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_64__.h,hS:()=>_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__.h,iF:()=>_icons_FlagIcon__WEBPACK_IMPORTED_MODULE_42__.i,id:()=>_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_90__.i,mo:()=>_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_49__.m,ms:()=>_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__.m,oh:()=>_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_66__.o,pT:()=>_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_35__.p,qd:()=>_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__.q,uH:()=>_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_72__.u,vB:()=>_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_68__.v,vK:()=>_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_20__.v,xb:()=>_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_65__.x});__webpack_require__("./packages/react/src/icon/Icon.tsx");var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/utils.tsx"),_icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/icon/icons/AlertCircleIcon.tsx"),_icons_AlertFilledIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),_icons_AlertIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),_icons_ArrowDownIcon__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./packages/react/src/icon/icons/ArchiveIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx")),_icons_ArrowLeftIcon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),_icons_ArrowRightIcon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),_icons_ArrowUpDownIcon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpDownIcon.tsx"),_icons_ArrowUpIcon__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),_icons_AvatarIcon__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./packages/react/src/icon/icons/AttachmentIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx")),_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./packages/react/src/icon/icons/BusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CalendarIcon.tsx")),_icons_ChartLineIcon__WEBPACK_IMPORTED_MODULE_16__=(__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx")),_icons_CheckIcon__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./packages/react/src/icon/icons/CheckIcon.tsx"),_icons_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),_icons_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),_icons_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),_icons_ChevronsLeftIcon__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./packages/react/src/icon/icons/ChevronsLeftIcon.tsx"),_icons_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_24__=(__webpack_require__("./packages/react/src/icon/icons/ChevronsRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronsUpDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx")),_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_26__=(__webpack_require__("./packages/react/src/icon/icons/ClockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx")),_icons_CornerDownRightIcon__WEBPACK_IMPORTED_MODULE_28__=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/CornerDownRightIcon.tsx")),_icons_EmailIcon__WEBPACK_IMPORTED_MODULE_32__=(__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EmailIcon.tsx")),_icons_ExitIcon__WEBPACK_IMPORTED_MODULE_34__=(__webpack_require__("./packages/react/src/icon/icons/EmailOpenIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ExitIcon.tsx")),_icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),_icons_FactoryIcon__WEBPACK_IMPORTED_MODULE_37__=(__webpack_require__("./packages/react/src/icon/icons/FacebookIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FactoryIcon.tsx")),_icons_FilterIcon__WEBPACK_IMPORTED_MODULE_40__=(__webpack_require__("./packages/react/src/icon/icons/FileIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FileTextIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx")),_icons_FlagFilledIcon__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./packages/react/src/icon/icons/FlagFilledIcon.tsx"),_icons_FlagIcon__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./packages/react/src/icon/icons/FlagIcon.tsx"),_icons_HelpIcon__WEBPACK_IMPORTED_MODULE_44__=(__webpack_require__("./packages/react/src/icon/icons/GripIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx")),_icons_HomeIcon__WEBPACK_IMPORTED_MODULE_46__=(__webpack_require__("./packages/react/src/icon/icons/HistoryIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HomeIcon.tsx")),_icons_InfoFilledIcon__WEBPACK_IMPORTED_MODULE_48__=(__webpack_require__("./packages/react/src/icon/icons/InboxIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx")),_icons_InfoIcon__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx"),_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_55__=(__webpack_require__("./packages/react/src/icon/icons/InstagramIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceBusinessIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LicenceIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LinkedInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/LockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx")),_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_56__=__webpack_require__("./packages/react/src/icon/icons/MinusIcon.tsx"),_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_63__=(__webpack_require__("./packages/react/src/icon/icons/MoveLeftIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/MoveRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PauseIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PermitIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PieChartIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlayIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/PlusIcon.tsx")),_icons_PrintIcon__WEBPACK_IMPORTED_MODULE_64__=__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),_icons_ProgressBlockedIcon__WEBPACK_IMPORTED_MODULE_65__=__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx"),_icons_ProgressDoingIcon__WEBPACK_IMPORTED_MODULE_66__=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),_icons_ProgressNotRequiredIcon__WEBPACK_IMPORTED_MODULE_67__=__webpack_require__("./packages/react/src/icon/icons/ProgressNotRequiredIcon.tsx"),_icons_ProgressPausedIcon__WEBPACK_IMPORTED_MODULE_68__=__webpack_require__("./packages/react/src/icon/icons/ProgressPausedIcon.tsx"),_icons_ProgressTodoIcon__WEBPACK_IMPORTED_MODULE_69__=__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx"),_icons_ScrollbarArrowLeftIcon__WEBPACK_IMPORTED_MODULE_72__=(__webpack_require__("./packages/react/src/icon/icons/RotateLeftIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/RotateRightIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowLeftIcon.tsx")),_icons_ScrollbarArrowRightIcon__WEBPACK_IMPORTED_MODULE_73__=__webpack_require__("./packages/react/src/icon/icons/ScrollbarArrowRightIcon.tsx"),_icons_SearchIcon__WEBPACK_IMPORTED_MODULE_74__=__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx"),_icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_75__=__webpack_require__("./packages/react/src/icon/icons/SettingsIcon.tsx"),_icons_StarFilledIcon__WEBPACK_IMPORTED_MODULE_76__=__webpack_require__("./packages/react/src/icon/icons/StarFilledIcon.tsx"),_icons_StarIcon__WEBPACK_IMPORTED_MODULE_77__=__webpack_require__("./packages/react/src/icon/icons/StarIcon.tsx"),_icons_SuccessFilledIcon__WEBPACK_IMPORTED_MODULE_78__=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),_icons_SuccessIcon__WEBPACK_IMPORTED_MODULE_79__=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),_icons_UploadIcon__WEBPACK_IMPORTED_MODULE_85__=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TimerIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/TwitterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UnlockIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx")),_icons_WarningCircleIcon__WEBPACK_IMPORTED_MODULE_88__=(__webpack_require__("./packages/react/src/icon/icons/UsersIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WalletIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/WarningCircleIcon.tsx")),_icons_WarningFilledIcon__WEBPACK_IMPORTED_MODULE_89__=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx"),_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_90__=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),_icons_WebsiteIcon__WEBPACK_IMPORTED_MODULE_91__=__webpack_require__("./packages/react/src/icon/icons/WebsiteIcon.tsx");__webpack_require__("./packages/react/src/icon/icons/XIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ZoomInIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ZoomOutIcon.tsx")},"./node_modules/attr-accept/dist/es/index.js":(__unused_webpack_module,exports)=>{exports.A=function(file,acceptedFiles){if(file&&acceptedFiles){var acceptedFilesArray=Array.isArray(acceptedFiles)?acceptedFiles:acceptedFiles.split(","),fileName=file.name||"",mimeType=(file.type||"").toLowerCase(),baseMimeType=mimeType.replace(/\/.*$/,"");return acceptedFilesArray.some((function(type){var validType=type.trim().toLowerCase();return"."===validType.charAt(0)?fileName.toLowerCase().endsWith(validType):validType.endsWith("/*")?baseMimeType===validType.replace(/\/.*$/,""):mimeType===validType}))}return!0}},"./node_modules/react-dropzone/dist/es/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>acceptPropAsAcceptAttr,Hz:()=>fileMatchSize,O4:()=>ErrorCode,Qk:()=>isPropagationStopped,Ri:()=>TOO_MANY_FILES_REJECTION,Vl:()=>pickerOptionsFromAccept,WR:()=>fileAccepted,gs:()=>allFilesAccepted,lP:()=>isIeOrEdge,mK:()=>composeEventHandlers,rV:()=>isAbort,rr:()=>onDocumentDragOver,t:()=>isEvtWithFiles,v2:()=>isSecurityError,vQ:()=>canUseFileSystemAccessAPI});var attr_accept__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/attr-accept/dist/es/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ErrorCode={FileInvalidType:"file-invalid-type",FileTooLarge:"file-too-large",FileTooSmall:"file-too-small",TooManyFiles:"too-many-files"},getInvalidTypeRejectionErr=function getInvalidTypeRejectionErr(accept){accept=Array.isArray(accept)&&1===accept.length?accept[0]:accept;var messageSuffix=Array.isArray(accept)?"one of ".concat(accept.join(", ")):accept;return{code:"file-invalid-type",message:"File type must be ".concat(messageSuffix)}},getTooLargeRejectionErr=function getTooLargeRejectionErr(maxSize){return{code:"file-too-large",message:"File is larger than ".concat(maxSize," ").concat(1===maxSize?"byte":"bytes")}},getTooSmallRejectionErr=function getTooSmallRejectionErr(minSize){return{code:"file-too-small",message:"File is smaller than ".concat(minSize," ").concat(1===minSize?"byte":"bytes")}},TOO_MANY_FILES_REJECTION={code:"too-many-files",message:"Too many files"};function fileAccepted(file,accept){var isAcceptable="application/x-moz-file"===file.type||(0,attr_accept__WEBPACK_IMPORTED_MODULE_0__.A)(file,accept);return[isAcceptable,isAcceptable?null:getInvalidTypeRejectionErr(accept)]}function fileMatchSize(file,minSize,maxSize){if(isDefined(file.size))if(isDefined(minSize)&&isDefined(maxSize)){if(file.size>maxSize)return[!1,getTooLargeRejectionErr(maxSize)];if(file.size<minSize)return[!1,getTooSmallRejectionErr(minSize)]}else{if(isDefined(minSize)&&file.size<minSize)return[!1,getTooSmallRejectionErr(minSize)];if(isDefined(maxSize)&&file.size>maxSize)return[!1,getTooLargeRejectionErr(maxSize)]}return[!0,null]}function isDefined(value){return null!=value}function allFilesAccepted(_ref){var files=_ref.files,accept=_ref.accept,minSize=_ref.minSize,maxSize=_ref.maxSize,multiple=_ref.multiple,maxFiles=_ref.maxFiles,validator=_ref.validator;return!(!multiple&&files.length>1||multiple&&maxFiles>=1&&files.length>maxFiles)&&files.every((function(file){var accepted=_slicedToArray(fileAccepted(file,accept),1)[0],sizeMatch=_slicedToArray(fileMatchSize(file,minSize,maxSize),1)[0],customErrors=validator?validator(file):null;return accepted&&sizeMatch&&!customErrors}))}function isPropagationStopped(event){return"function"==typeof event.isPropagationStopped?event.isPropagationStopped():void 0!==event.cancelBubble&&event.cancelBubble}function isEvtWithFiles(event){return event.dataTransfer?Array.prototype.some.call(event.dataTransfer.types,(function(type){return"Files"===type||"application/x-moz-file"===type})):!!event.target&&!!event.target.files}function onDocumentDragOver(event){event.preventDefault()}function isIeOrEdge(){var userAgent=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function isIe(userAgent){return-1!==userAgent.indexOf("MSIE")||-1!==userAgent.indexOf("Trident/")}(userAgent)||function isEdge(userAgent){return-1!==userAgent.indexOf("Edge/")}(userAgent)}function composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return fns.some((function(fn){return!isPropagationStopped(event)&&fn&&fn.apply(void 0,[event].concat(args)),isPropagationStopped(event)}))}}function canUseFileSystemAccessAPI(){return"showOpenFilePicker"in window}function pickerOptionsFromAccept(accept){return isDefined(accept)?[{description:"Files",accept:Object.entries(accept).filter((function(_ref2){var _ref3=_slicedToArray(_ref2,2),mimeType=_ref3[0],ext=_ref3[1],ok=!0;return isMIMEType(mimeType)||(console.warn('Skipped "'.concat(mimeType,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),ok=!1),Array.isArray(ext)&&ext.every(isExt)||(console.warn('Skipped "'.concat(mimeType,'" because an invalid file extension was provided.')),ok=!1),ok})).reduce((function(agg,_ref4){var _ref5=_slicedToArray(_ref4,2),mimeType=_ref5[0],ext=_ref5[1];return _objectSpread(_objectSpread({},agg),{},_defineProperty({},mimeType,ext))}),{})}]:accept}function acceptPropAsAcceptAttr(accept){if(isDefined(accept))return Object.entries(accept).reduce((function(a,_ref6){var _ref7=_slicedToArray(_ref6,2),mimeType=_ref7[0],ext=_ref7[1];return[].concat(_toConsumableArray(a),[mimeType],_toConsumableArray(ext))}),[]).filter((function(v){return isMIMEType(v)||isExt(v)})).join(",")}function isAbort(v){return v instanceof DOMException&&("AbortError"===v.name||v.code===v.ABORT_ERR)}function isSecurityError(v){return v instanceof DOMException&&("SecurityError"===v.name||v.code===v.SECURITY_ERR)}function isMIMEType(v){return"audio/*"===v||"video/*"===v||"image/*"===v||"text/*"===v||/\w+\/[-+.\w]+/g.test(v)}function isExt(v){return/^.*\.[\w]+$/.test(v)}}}]);