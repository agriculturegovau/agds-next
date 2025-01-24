"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[1270],{"./packages/react/icon/dist/ag.ds-next-react-icon.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{let unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/icon/index.ts"),unregister()},"./packages/react/src/file-upload/FileUpload.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>FileUpload});var _emotion_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dropzone__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react-dropzone/dist/es/index.js"),_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/a11y/index.ts"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/index.ts"),_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/core/index.ts"),_field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/field/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/icon/index.ts"),_list__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/list/index.ts"),_section_alert__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/section-alert/index.ts"),_stack__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/stack/index.ts"),_text__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/react/src/text/index.ts"),_box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/react/src/box/index.ts"),_field_useSecondaryLabel__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/react/src/field/useSecondaryLabel.tsx"),_FileUploadExistingFileList__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./packages/react/src/file-upload/FileUploadExistingFileList.tsx"),_FileUploadFileList__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./packages/react/src/file-upload/FileUploadFileList.tsx"),_utils__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/react/src/file-upload/utils.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const _excluded=["accept","buttonRef","disabled","existingFiles","hideOptionalLabel","hideThumbnails","hint","id","invalid","label","maxFiles","maxSize","message","multiple","onChange","onRemoveExistingFile","required","value"],_excluded2=["role","tabIndex","color"],_excluded3=["ref","style"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref2={name:"bjn8wh",styles:"position:relative"};const FileUpload=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function FileUpload(_ref,forwardedRef){let{accept:acceptProp,buttonRef,disabled,existingFiles=[],hideOptionalLabel,hideThumbnails=!1,hint,id,invalid,label,maxFiles,maxSize,message,multiple,onChange,onRemoveExistingFile,required,value=[]}=_ref,consumerProps=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_16__.A)(_ref,_excluded);const{0:status,1:setStatus}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),fileOrFiles=multiple?"files":"file",maxSizeBytes=maxSize&&!isNaN(maxSize)?1e3*maxSize:0,formattedMaxFileSize=(0,_utils__WEBPACK_IMPORTED_MODULE_15__.v7)(maxSizeBytes);let validMaxFiles=maxFiles;void 0!==maxFiles&&maxFiles<1&&(validMaxFiles=void 0,console.warn("FileUpload: maxFiles cannot be less than 1. The property is being ignored."));const{0:tooManyFilesRejections,1:setTooManyFilesRejections}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),{0:invalidRejections,1:setInvalidRejections}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),handleRemoveAcceptedFile=index=>{clearErrors(),onChange?.((0,_utils__WEBPACK_IMPORTED_MODULE_15__.tG)(value,index)),setStatus(value[index].name+" removed")},handleRemove=file=>{onRemoveExistingFile?.(file),setStatus(file.name+" removed")};function clearErrors(){setTooManyFilesRejections(void 0),setInvalidRejections(void 0)}const accept=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{if(acceptProp)return Object.fromEntries(acceptProp.map((item=>"string"==typeof item?[item,_utils__WEBPACK_IMPORTED_MODULE_15__.fu[item].extensions]:[item.mimeType,item.extensions])))}),[acceptProp]),{getRootProps,getInputProps,isDragActive,open,fileRejections:dropzoneFileRejections}=(0,react_dropzone__WEBPACK_IMPORTED_MODULE_17__.VB)({accept,maxSize:maxSizeBytes||void 0,multiple,onDropAccepted:acceptedFiles=>{let validFiles;if(clearErrors(),multiple){const acceptedFilesWithNoDuplicates=Object.values([...value,...acceptedFiles].reduce(((acc,file)=>_objectSpread(_objectSpread({},acc),{},{[`${file.name}-${file.size}-${file.type}`]:file})),{}));validMaxFiles&&acceptedFilesWithNoDuplicates.length>validMaxFiles?(setTooManyFilesRejections((()=>acceptedFilesWithNoDuplicates.slice(validMaxFiles).map(_utils__WEBPACK_IMPORTED_MODULE_15__.W7))),validFiles=acceptedFilesWithNoDuplicates.slice(0,validMaxFiles)):validFiles=acceptedFilesWithNoDuplicates}else validFiles=acceptedFiles;setStatus(validFiles.map((({name})=>name)).join(", ")+" added"),onChange?.(validFiles)},disabled,noClick:!0,noKeyboard:!0});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{dropzoneFileRejections.length>0&&setInvalidRejections(dropzoneFileRejections)}),[dropzoneFileRejections]);const acceptedFilesSummary=(0,_utils__WEBPACK_IMPORTED_MODULE_15__.hN)(acceptProp),styles=function dropzoneStyles({disabled,invalid,isDragActive}){return _objectSpread(_objectSpread(_objectSpread({borderWidth:_core__WEBPACK_IMPORTED_MODULE_4__.tokens.borderWidth.lg,borderStyle:"dashed",borderColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.border,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.backgroundBody},invalid&&{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.systemError}),disabled&&{cursor:"not-allowed",borderColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.borderMuted,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.foregroundMuted}),isDragActive&&{borderColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.foregroundAction,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.backgroundShade})}({disabled,invalid,isDragActive}),_getRootProps=getRootProps(),{role:_unusedRole,tabIndex:_unusedTabIndex,color:_unusedColor}=_getRootProps,dropzoneProps=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_16__.A)(_getRootProps,_excluded2),_getInputProps=getInputProps(),{ref:dropzoneInputRef,style:_unusedStyleProps}=_getInputProps,dropzoneInputProps=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_16__.A)(_getInputProps,_excluded3),fileSummaryText=(0,_utils__WEBPACK_IMPORTED_MODULE_15__.Uf)([...value,...existingFiles]),showFileLists=Boolean(value.length||existingFiles?.length),hasRejections=invalidRejections&&invalidRejections?.length>0||tooManyFilesRejections&&tooManyFilesRejections?.length>0,pluralAllRejections=invalidRejections&&invalidRejections?.length>1||tooManyFilesRejections&&tooManyFilesRejections?.length>1,fallbackId=(0,_core__WEBPACK_IMPORTED_MODULE_4__.Bi)(id),fileSizeDescriptionId=maxSize?`${fallbackId}-file-size-desc`:"",acceptedFilesDescriptionId=accept?`${fallbackId}-accepted-files-desc`:"",secondaryLabelWithOptional=(0,_field_useSecondaryLabel__WEBPACK_IMPORTED_MODULE_12__.U)({hideOptionalLabel,required}),buttonLabel=`Select ${fileOrFiles}`,ariaLabel=[buttonLabel,label,secondaryLabelWithOptional,required&&"required",invalid&&"invalid",fileSummaryText].filter(Boolean).join(", ");return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_field__WEBPACK_IMPORTED_MODULE_5__.D0,{hideOptionalLabel,hint,id,invalid,label,message,required,children:a11yProps=>{const buttonAriaDescribedBy=[a11yProps["aria-describedby"],fileSizeDescriptionId,acceptedFilesDescriptionId].filter(Boolean).join(" ");return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_stack__WEBPACK_IMPORTED_MODULE_9__.Stack,{gap:1.5,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)("div",{css:_a11y__WEBPACK_IMPORTED_MODULE_2__.O_,role:"status",children:status}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_box__WEBPACK_IMPORTED_MODULE_11__.Box,_objectSpread(_objectSpread({},dropzoneProps),{},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_stack__WEBPACK_IMPORTED_MODULE_9__.Stack,{alignItems:"center",border:!0,css:styles,gap:1,padding:1.5,rounded:!0,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_icon__WEBPACK_IMPORTED_MODULE_6__.JM,{color:"muted",size:"lg"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)("input",_objectSpread(_objectSpread(_objectSpread({},dropzoneInputProps),consumerProps),{},{"aria-hidden":!0,css:_a11y__WEBPACK_IMPORTED_MODULE_2__.O_,ref:(0,_core__WEBPACK_IMPORTED_MODULE_4__.Px)([forwardedRef,dropzoneInputRef])})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_stack__WEBPACK_IMPORTED_MODULE_9__.Stack,{alignItems:"center",textAlign:"center",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)("span",{css:_ref2,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{color:"muted",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_19__.AH)({visibility:isDragActive?"hidden":void 0},"",""),fontWeight:"bold",children:multiple?"Drag and drop files here or select files to upload.":"Drag and drop a file or select a file to upload."}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{color:"action",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_19__.AH)({display:isDragActive?"block":"none",left:0,position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},"",""),fontWeight:"bold",children:["Drop ",fileOrFiles," here…"]})]}),maxSize?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{color:"muted",id:fileSizeDescriptionId,children:[multiple?"Each file":"File"," cannot exceed"," ",formattedMaxFileSize,"."]}):null,accept?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{color:"muted",id:acceptedFilesDescriptionId,children:["Files accepted: ",acceptedFilesSummary,"."]}):null]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_button__WEBPACK_IMPORTED_MODULE_3__.Button,{"aria-describedby":buttonAriaDescribedBy||void 0,"aria-label":ariaLabel,disabled,focusRingFor:"all",id:a11yProps.id,onClick:open,ref:buttonRef,type:"button",variant:"secondary",children:buttonLabel})]})})),hasRejections&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_box__WEBPACK_IMPORTED_MODULE_11__.Box,{breakWords:!0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_section_alert__WEBPACK_IMPORTED_MODULE_8__._,{focusOnMount:!0,onClose:clearErrors,title:`The following ${pluralAllRejections?"files":"file"} could not be selected`,tone:"error",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{as:"p",children:pluralAllRejections?"These files were unable to be accepted for the following reasons:":"This file was unable to be accepted for the following reason:"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_list__WEBPACK_IMPORTED_MODULE_7__.UnorderedList,{children:[...invalidRejections??[],...tooManyFilesRejections??[]].map((rejection=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_list__WEBPACK_IMPORTED_MODULE_7__.ListItem,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{color:"error",fontWeight:"bold",children:rejection.file.name})," ",(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{children:["(",(0,_utils__WEBPACK_IMPORTED_MODULE_15__.v7)(rejection.file.size),")"," - ",(0,_utils__WEBPACK_IMPORTED_MODULE_15__.Xl)(rejection.errors,formattedMaxFileSize)]})]},rejection.file.name)))})]})}),showFileLists&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.FD)(_stack__WEBPACK_IMPORTED_MODULE_9__.Stack,{gap:.5,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_text__WEBPACK_IMPORTED_MODULE_10__.Text,{color:"muted",children:fileSummaryText}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_FileUploadExistingFileList__WEBPACK_IMPORTED_MODULE_13__.h,{files:existingFiles,hideThumbnails,onRemove:handleRemove}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Y)(_FileUploadFileList__WEBPACK_IMPORTED_MODULE_14__.c,{files:value,hideThumbnails,onRemove:handleRemoveAcceptedFile})]})]})}})}))},"./packages/react/src/file-upload/FileUploadExistingFile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>FileUploadExistingFile});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/flex/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/icon/index.ts"),_text_link__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/text-link/index.ts"),_FileUploadFileThumbnail__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/file-upload/FileUploadFileThumbnail.tsx"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/file-upload/utils.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"4zleql",styles:"display:block"},_ref2={name:"1bmnxg7",styles:"white-space:nowrap"};const FileUploadExistingFile=({file,hideThumbnails,onRemove})=>{const{name,size,href,thumbnailSrc}=file,showThumbnail=!hideThumbnails;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{as:"li",background:"success",gap:.5,justifyContent:"space-between",rounded:!0,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{children:[showThumbnail&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_FileUploadFileThumbnail__WEBPACK_IMPORTED_MODULE_6__.o,{src:thumbnailSrc}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{alignItems:"center",gap:.5,paddingLeft:1,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_icon__WEBPACK_IMPORTED_MODULE_4__.SuccessFilledIcon,{"aria-hidden":"false","aria-label":"Success",color:"success",css:_ref,size:"md"})}),href?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{breakWords:!0,paddingY:1.5,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_text_link__WEBPACK_IMPORTED_MODULE_5__.TextLink,{href,rel:"noopener noreferrer",target:"_blank",children:[name,size?` (${(0,_utils__WEBPACK_IMPORTED_MODULE_7__.v7)(size)})`:null]})}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{breakWords:!0,paddingY:1.5,children:[name,size?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.FD)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,{css:_ref2,children:[" ","(",(0,_utils__WEBPACK_IMPORTED_MODULE_7__.v7)(size),")"]}):null]})]})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{alignItems:"center",flexShrink:0,paddingRight:1,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Y)(_button__WEBPACK_IMPORTED_MODULE_3__.Button,{"aria-label":`Remove file: ${name}`,iconBefore:_icon__WEBPACK_IMPORTED_MODULE_4__.US,onClick:onRemove,size:"sm",variant:"text",children:"Remove"})})]})}},"./packages/react/src/file-upload/FileUploadExistingFileList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>FileUploadExistingFileList});var _stack__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/stack/index.ts"),_FileUploadExistingFile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/file-upload/FileUploadExistingFile.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FileUploadExistingFileList=({files,hideThumbnails,onRemove})=>files.length?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_stack__WEBPACK_IMPORTED_MODULE_0__.Stack,{"aria-label":"Existing files",as:"ul",gap:.5,children:files.map(((file,index)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_FileUploadExistingFile__WEBPACK_IMPORTED_MODULE_1__.v,{file,hideThumbnails,onRemove:()=>onRemove?.(file)},index)))}):null},"./packages/react/src/file-upload/FileUploadFileList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FileUploadFileList});var _stack__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/stack/index.ts"),_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/file-upload/FileUploadFile.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const FileUploadFileList=({files,hideThumbnails,onRemove})=>files.length?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_stack__WEBPACK_IMPORTED_MODULE_0__.Stack,{"aria-label":"Selected files",as:"ul",gap:.5,children:files.map(((file,index)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__.Y,{file,hideThumbnails,onRemove:()=>onRemove(index)},index)))}):null},"./packages/react/src/form-stack/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FormStack:()=>FormStack});var flex=__webpack_require__("./packages/react/src/flex/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function FormStack({children}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{flexDirection:"column",gap:2,children})}},"./packages/react/src/list/ListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ListItem});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ListItem(_ref){let{children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_2__.Text,_objectSpread(_objectSpread({as:"li",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)({listStyle:"unset","&:not(:first-of-type)":{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.QY)(.5)}},"","")},props),{},{children}))}},"./packages/react/src/list/OrderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>OrderedList});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/list/context.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function OrderedList({children}){const depth=(0,_context__WEBPACK_IMPORTED_MODULE_1__.R)()+1;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_context__WEBPACK_IMPORTED_MODULE_1__.E.Provider,{value:depth,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("ol",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({marginTop:depth>1?(0,_core__WEBPACK_IMPORTED_MODULE_0__.QY)(.5):0,marginBottom:0},"",""),children})})}},"./packages/react/src/list/UnorderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>UnorderedList});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/list/context.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function UnorderedList({children}){const depth=(0,_context__WEBPACK_IMPORTED_MODULE_1__.R)()+1;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)(_context__WEBPACK_IMPORTED_MODULE_1__.E.Provider,{value:depth,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Y)("ul",{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)({marginTop:depth>1?(0,_core__WEBPACK_IMPORTED_MODULE_0__.QY)(.5):0,marginBottom:0},"",""),children})})}},"./packages/react/src/list/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ListContext,R:()=>useListDepth});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const ListContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0),useListDepth=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ListContext)},"./packages/react/src/list/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ListItem:()=>_ListItem__WEBPACK_IMPORTED_MODULE_2__.c,UnorderedList:()=>_UnorderedList__WEBPACK_IMPORTED_MODULE_0__.X});var _UnorderedList__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/list/UnorderedList.tsx"),_ListItem__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./packages/react/src/list/OrderedList.tsx"),__webpack_require__("./packages/react/src/list/ListItem.tsx"))},"./packages/react/src/section-alert/SectionAlert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SectionAlert});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),useFocus=__webpack_require__("./packages/react/src/core/utils/useFocus.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),getCloseHandler=__webpack_require__("./packages/react/src/getCloseHandler.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const SectionAlertDismissButton=({onClick})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(src_button.Button,{alignSelf:"start","aria-label":"Close",css:(0,emotion_react_browser_esm.AH)({flexShrink:0,"& > span:first-of-type":{display:"none",[core.tokens.mediaQuery.min.sm]:{display:"block"}}},"",""),iconAfter:icon.US,onClick,variant:"text",children:"Close"});var ag_ds_next_react_icon_cjs=__webpack_require__("./packages/react/icon/dist/ag.ds-next-react-icon.cjs.js");const sectionAlertIconMap={error:(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_icon_cjs.AlertFilledIcon,{color:"error"}),success:(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_icon_cjs.SuccessFilledIcon,{color:"success"}),warning:(0,emotion_react_jsx_runtime_browser_esm.Y)(ag_ds_next_react_icon_cjs.WarningFilledIcon,{color:"warning"})},_excluded=["children","focusOnMount","focusOnUpdate","id","onClose","onDismiss","role","tabIndex","title","tone"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref2={name:"1lv1yo7",styles:"display:inline-flex"};const SectionAlert=(0,react.forwardRef)((function SectionAlert(_ref,forwardedRef){let{children,focusOnMount,focusOnUpdate,id,onClose,onDismiss,role,tabIndex,title,tone}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const ref=(0,useFocus.i)({focusOnMount,focusOnUpdate,forwardedRef}),{childrenId,titleId,toneId}=function useSectionAlertIds(idProp){const autoId=(0,core.Bi)(idProp),childrenId=`section-alert-children-${autoId}`,titleId=`section-alert-title-${autoId}`,toneId=`section-alert-icon-${autoId}`;return{childrenId,titleId,toneId}}(id),icon=sectionAlertIconMap[tone],closeHandler=(0,getCloseHandler.NZ)(onClose,onDismiss);return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,_objectSpread(_objectSpread({},props),{},{alignItems:"center","aria-labelledby":`${toneId} ${titleId} ${children?childrenId:""}`,background:tone,borderColor:tone,borderLeft:!0,borderLeftWidth:"xl",focusRingFor:"all",gap:.5,highContrastOutline:!0,id,justifyContent:"space-between",padding:1,ref,role:role||"region",rounded:!0,tabIndex:tabIndex??(focusOnMount||focusOnUpdate?-1:void 0),children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)("span",{css:_ref2,children:[icon,(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{css:a11y.O_,id:toneId,children:tone})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{flexDirection:"column",gap:.25,children:[title&&(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{fontWeight:"bold",id:titleId,children:title}),children&&(0,emotion_react_jsx_runtime_browser_esm.Y)("div",{id:childrenId,children})]})]}),closeHandler?(0,emotion_react_jsx_runtime_browser_esm.Y)(SectionAlertDismissButton,{onClick:closeHandler}):null]}))}))},"./packages/react/src/section-alert/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>_SectionAlert__WEBPACK_IMPORTED_MODULE_0__._});var _SectionAlert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/section-alert/SectionAlert.tsx")}}]);