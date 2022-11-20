"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9036],{"./packages/file-upload/src/FileUpload.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>FileUpload});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-dropzone/dist/es/index.js"),filesize_min=__webpack_require__("./node_modules/filesize/lib/filesize.min.js"),filesize_min_default=__webpack_require__.n(filesize_min),src=__webpack_require__("./packages/box/src/index.ts"),button_src=__webpack_require__("./packages/button/src/index.tsx"),core_src=__webpack_require__("./packages/core/src/index.ts"),field_src=__webpack_require__("./packages/field/src/index.tsx"),icon_src=__webpack_require__("./packages/icon/src/index.ts"),text_src=__webpack_require__("./packages/text/src/index.tsx"),a11y_src=__webpack_require__("./packages/a11y/src/index.ts"),FileUploadRejectedFileList=__webpack_require__("./packages/file-upload/src/FileUploadRejectedFileList.tsx"),getFilesTotal=function getFilesTotal(files){var label=files.length>1?"files":"file",size=files.reduce((function(a,_ref){return a+_ref.size}),0);return"".concat(files.length," ").concat(label," selected (").concat(filesize_min_default()(size),")")},fileTypeMapping={"application/msword":"word","application/pdf":"pdf","application/rtf":"rtf","application/vnd.ms-excel":"xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xls","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"doc","application/zip":"zip","audio/*":"Any audio file","audio/mpeg":"mpeg audio","audio/wav":"wav","image/*":"Any image","image/gif":"gif","image/heic":"heic","image/jpeg":"jpeg","image/jpg":"jpg","image/png":"png","image/svg+xml":"svg","image/tiff":"tiff","image/webp":"webp","text/*":"text","text/csv":"csv","text/plain":"txt","text/rtf":"rtf","video/*":"Anv video file","video/mp4":"mp4","video/mpeg":"mpeg video"},getAcceptedFilesSummary=function getAcceptedFilesSummary(accept){if(null!=accept&&accept.length)return accept.map((function(MIME){return fileTypeMapping[MIME]})).join(", ")},getFileRejectionErrorMessage=function getFileRejectionErrorMessage(_ref2,formattedMaxFileSize,acceptedFilesSummary){var code=_ref2.code,message=_ref2.message;return"file-too-large"===code?"File size exceeds ".concat(formattedMaxFileSize):"file-invalid-type"===code?acceptedFilesSummary?"File must be one of the following types: ".concat(acceptedFilesSummary):"File must be an acceptable format":message};try{getFilesTotal.displayName="getFilesTotal",getFilesTotal.__docgenInfo={description:"",displayName:"getFilesTotal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/file-upload/src/utils.tsx#getFilesTotal"]={docgenInfo:getFilesTotal.__docgenInfo,name:"getFilesTotal",path:"packages/file-upload/src/utils.tsx#getFilesTotal"})}catch(__react_docgen_typescript_loader_error){}try{getAcceptedFilesSummary.displayName="getAcceptedFilesSummary",getAcceptedFilesSummary.__docgenInfo={description:"",displayName:"getAcceptedFilesSummary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/file-upload/src/utils.tsx#getAcceptedFilesSummary"]={docgenInfo:getAcceptedFilesSummary.__docgenInfo,name:"getAcceptedFilesSummary",path:"packages/file-upload/src/utils.tsx#getAcceptedFilesSummary"})}catch(__react_docgen_typescript_loader_error){}var FileUploadFileList=__webpack_require__("./packages/file-upload/src/FileUploadFileList.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["accept","disabled","label","maxFiles","maxSize","multiple","value","onChange","required","hint","message","invalid","id"],_excluded2=["role","tabIndex","color"],_excluded3=["ref","style"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _ref3={name:"1azakc",styles:"text-align:center"},FileUpload=(0,react.forwardRef)((function FileUpload(_ref,forwardedRef){var accept=_ref.accept,disabled=_ref.disabled,label=_ref.label,maxFiles=_ref.maxFiles,maxSize=_ref.maxSize,multiple=_ref.multiple,_ref$value=_ref.value,value=void 0===_ref$value?[]:_ref$value,onChange=_ref.onChange,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,id=_ref.id,consumerProps=(0,objectWithoutProperties.Z)(_ref,_excluded),filesPlural=multiple?"files":"file",maxSizeBytes=1e3*(maxSize||0),formattedMaxFileSize=filesize_min_default()(maxSizeBytes),_useState=(0,react.useState)([]),fileRejections=_useState[0],setFileRejections=_useState[1],handleRemoveFile=function handleRemoveFile(file){var indexOfFile=value.indexOf(file);onChange(value.filter((function(_,index){return index!==indexOfFile})))},handleRemoveRejection=function handleRemoveRejection(fileName){setFileRejections(fileRejections.filter((function(err){return err.fileName!==fileName})))},_useDropzone=(0,es.uI)({accept,maxFiles,maxSize:maxSize&&1e3*maxSize,multiple,onDropAccepted:function handleDropAccepted(acceptedFiles){onChange(multiple?[].concat((0,toConsumableArray.Z)(value),(0,toConsumableArray.Z)(acceptedFiles)):acceptedFiles)},disabled,noClick:!0,noKeyboard:!0}),getRootProps=_useDropzone.getRootProps,getInputProps=_useDropzone.getInputProps,isDragActive=_useDropzone.isDragActive,open=_useDropzone.open,dropzoneFileRejections=_useDropzone.fileRejections,errorSummary=function getErrorSummary(rejections,formattedMaxFileSize,maxFiles){if(null!=rejections&&rejections.length){var uniqueErrorCodes=Array.from(new Set(rejections.map((function(_ref3){return _ref3.errors.map((function(_ref4){return _ref4.code}))})).flat())),firstErrorCode=uniqueErrorCodes[0];if("too-many-files"===firstErrorCode)return"You can not select more than ".concat(maxFiles," files");if(1===uniqueErrorCodes.length){if("file-too-large"===firstErrorCode)return"Each file must be smaller than ".concat(formattedMaxFileSize);if("file-invalid-type"===firstErrorCode)return"Some files are not of the correct format"}return"There’s an issue with one or more of your files"}}(fileRejections,formattedMaxFileSize,maxFiles),acceptedFilesSummary=getAcceptedFilesSummary(accept),styles=fileInputStyles({isDragActive,disabled,invalid:invalid||!!errorSummary});(0,react.useEffect)((function(){setFileRejections(dropzoneFileRejections.map((function(_ref2){var file=_ref2.file,errors=_ref2.errors;return{fileName:file.name,fileSize:file.size,errors:errors.map((function(error){return{code:error.code,message:getFileRejectionErrorMessage(error,formattedMaxFileSize,acceptedFilesSummary)}}))}})))}),[dropzoneFileRejections,formattedMaxFileSize,acceptedFilesSummary]);var _getRootProps=getRootProps(),dropzoneProps=(_getRootProps.role,_getRootProps.tabIndex,_getRootProps.color,(0,objectWithoutProperties.Z)(_getRootProps,_excluded2)),_getInputProps=getInputProps(),dropzoneInputRef=_getInputProps.ref,dropzoneInputProps=(_getInputProps.style,(0,objectWithoutProperties.Z)(_getInputProps,_excluded3));return(0,emotion_react_jsx_runtime_browser_esm.tZ)(field_src.gN,{label,required:Boolean(required),hint,message:message||errorSummary,invalid:invalid||!!errorSummary,id,children:function children(a11yProps){return(0,emotion_react_jsx_runtime_browser_esm.BX)(src.Kq,_objectSpread(_objectSpread({gap:1.5},dropzoneProps),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(src.kC,{gap:1,padding:1.5,alignItems:"center",flexDirection:"column",border:!0,rounded:!0,css:styles,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(icon_src.rG,{size:"lg",color:"muted"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("input",_objectSpread(_objectSpread(_objectSpread(_objectSpread({},dropzoneInputProps),a11yProps),consumerProps),{},{ref:(0,core_src.lq)([forwardedRef,dropzoneInputRef]),css:a11y_src.JM})),(0,emotion_react_jsx_runtime_browser_esm.BX)(src.kC,{flexDirection:"column",alignItems:"center",css:_ref3,children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(text_src.x,{color:isDragActive?"action":"muted",fontWeight:"bold",children:[isDragActive?"Drop ".concat(filesPlural," here"):"Drag and drop ".concat(filesPlural," here or select ").concat(filesPlural," to upload."),isDragActive?(0,emotion_react_jsx_runtime_browser_esm.tZ)(emotion_react_jsx_runtime_browser_esm.HY,{children:"…"}):null]}),maxSize?(0,emotion_react_jsx_runtime_browser_esm.BX)(text_src.x,{color:"muted",children:[multiple?"Each file":"File"," cannot exceed"," ",formattedMaxFileSize,"."]}):null,accept?(0,emotion_react_jsx_runtime_browser_esm.BX)(text_src.x,{color:"muted",children:["Files accepted: ",acceptedFilesSummary]}):null]}),(0,emotion_react_jsx_runtime_browser_esm.BX)(button_src.zx,{type:"button",variant:"secondary",onClick:open,disabled,children:["Select ",filesPlural]})]}),value.length||fileRejections.length?(0,emotion_react_jsx_runtime_browser_esm.BX)(src.Kq,{gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(text_src.x,{color:"muted",children:getFilesTotal(value)}),value.length?(0,emotion_react_jsx_runtime_browser_esm.tZ)(FileUploadFileList.u,{files:value,onRemove:handleRemoveFile}):null,fileRejections.length?(0,emotion_react_jsx_runtime_browser_esm.tZ)(FileUploadRejectedFileList.O,{fileRejections,handleRemoveRejection}):null]}):null]}))}})})),fileInputStyles=function fileInputStyles(_ref4){var disabled=_ref4.disabled,invalid=_ref4.invalid,isDragActive=_ref4.isDragActive;return _objectSpread(_objectSpread(_objectSpread(_objectSpread({borderWidth:core_src.TV.borderWidth.lg,borderStyle:"dashed",borderColor:core_src._X.border,backgroundColor:core_src._X.backgroundBody},invalid&&{backgroundColor:core_src._X.systemErrorMuted,borderColor:core_src._X.systemError}),disabled&&{cursor:"not-allowed",opacity:.3,background:"none"}),isDragActive&&{borderColor:core_src._X.foregroundAction,backgroundColor:core_src._X.backgroundShade}),{},{"&:focus":core_src.lB.outline})};try{FileUpload.displayName="FileUpload",FileUpload.__docgenInfo={description:"",displayName:"FileUpload",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},accept:{defaultValue:null,description:"List of acceptable file types, e.g.`image/jpeg`, `application/pdf`",name:"accept",required:!1,type:{name:'("application/msword" | "application/pdf" | "application/rtf" | "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | ... 19 more ... | "video/mpeg")[]'}},label:{defaultValue:null,description:"A label that describes the field",name:"label",required:!0,type:{name:"string"}},maxFiles:{defaultValue:null,description:"The maximum number of files allowed to be selected. By default there is no limit (if `multiple` is true).",name:"maxFiles",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"The maximum allowed size for each file, measured in KB",name:"maxSize",required:!1,type:{name:"number"}},value:{defaultValue:{value:"[]"},description:"The value of the input",name:"value",required:!1,type:{name:"FileWithStatus[]"}},onChange:{defaultValue:null,description:"Callback for when an accepted file is added or removed",name:"onChange",required:!0,type:{name:"(value: FileWithStatus[]) => void"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"Whether multiple files are allowed to be selected.",name:"multiple",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/file-upload/src/FileUpload.tsx#FileUpload"]={docgenInfo:FileUpload.__docgenInfo,name:"FileUpload",path:"packages/file-upload/src/FileUpload.tsx#FileUpload"})}catch(__react_docgen_typescript_loader_error){}},"./packages/file-upload/src/FileUploadFile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FileUploadFile});var _emotion_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),filesize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/filesize/lib/filesize.min.js"),filesize__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_0__),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/box/src/index.ts"),_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.ts"),_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/text/src/index.tsx"),_ag_ds_next_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/button/src/index.tsx"),_ag_ds_next_loading__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/loading/src/index.tsx"),_ag_ds_next_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/icon/src/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"4zleql",styles:"display:block"},_ref3={name:"1m5hyg0",styles:"word-break:break-all"},FileUploadFile=function FileUploadFile(_ref){var _ref$status=_ref.status,status=void 0===_ref$status?"none":_ref$status,size=_ref.size,name=_ref.name,onRemove=_ref.onRemove;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.kC,{rounded:!0,alignItems:"center",as:"li","aria-label":"".concat("success"===status?"Uploaded file":"File",". ").concat(name),paddingY:.5,paddingLeft:1,justifyContent:"space-between",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.iv)({backgroundColor:TONE_MAP[status]},"",""),children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.kC,{alignItems:"center",gap:.5,children:["success"==status&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.xu,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_ag_ds_next_icon__WEBPACK_IMPORTED_MODULE_6__.qE,{color:"success",size:"md","aria-hidden":"false","aria-label":"Success",css:_ref2})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_3__.x,{css:_ref3,children:[name," (",filesize__WEBPACK_IMPORTED_MODULE_0___default()(size),")"]})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.xu,{flexShrink:0,children:"uploading"===status?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.xu,{paddingY:1,paddingX:1.5,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_ag_ds_next_loading__WEBPACK_IMPORTED_MODULE_5__.xg,{label:"uploading"})}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_ag_ds_next_button__WEBPACK_IMPORTED_MODULE_4__.zx,{variant:"tertiary",onClick:onRemove,"aria-label":"Remove file, ".concat(name),children:"Remove file"})})]})},TONE_MAP={none:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_2__._X.backgroundShade,uploading:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_2__._X.backgroundShade,success:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_2__._X.systemSuccessMuted};try{FileUploadFile.displayName="FileUploadFile",FileUploadFile.__docgenInfo={description:"",displayName:"FileUploadFile",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},status:{defaultValue:{value:"none"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"none"'},{value:'"uploading"'}]}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/file-upload/src/FileUploadFile.tsx#FileUploadFile"]={docgenInfo:FileUploadFile.__docgenInfo,name:"FileUploadFile",path:"packages/file-upload/src/FileUploadFile.tsx#FileUploadFile"})}catch(__react_docgen_typescript_loader_error){}},"./packages/file-upload/src/FileUploadFileList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>FileUploadFileList});var _ag_ds_next_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/box/src/index.ts"),_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/file-upload/src/FileUploadFile.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FileUploadFileList=function FileUploadFileList(_ref){var files=_ref.files,_onRemove=_ref.onRemove;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_0__.Kq,{as:"ul","aria-label":"Selected files",gap:.5,children:files.map((function(file,index){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_FileUploadFile__WEBPACK_IMPORTED_MODULE_1__.m,{name:file.name,size:file.size,status:file.status,onRemove:function onRemove(){return _onRemove(file)}},index)}))})};try{FileUploadFileList.displayName="FileUploadFileList",FileUploadFileList.__docgenInfo={description:"",displayName:"FileUploadFileList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"FileWithStatus[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(file: FileWithStatus) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/file-upload/src/FileUploadFileList.tsx#FileUploadFileList"]={docgenInfo:FileUploadFileList.__docgenInfo,name:"FileUploadFileList",path:"packages/file-upload/src/FileUploadFileList.tsx#FileUploadFileList"})}catch(__react_docgen_typescript_loader_error){}},"./packages/file-upload/src/FileUploadRejectedFile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>FileUploadRejectedFile});var _emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),filesize__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/filesize/lib/filesize.min.js"),filesize__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_0__),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/box/src/index.ts"),_ag_ds_next_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/button/src/index.tsx"),_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/index.ts"),_ag_ds_next_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icon/src/index.ts"),_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/text/src/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"4zleql",styles:"display:block"},_ref3={name:"1xclg2i",styles:"margin:0;padding:0"},_ref5={name:"149ift6",styles:"list-style:inside"},FileUploadRejectedFile=function FileUploadRejectedFile(_ref){var fileName=_ref.fileName,fileSize=_ref.fileSize,errors=_ref.errors,onRemove=_ref.onRemove;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.kC,{as:"li",gap:.5,alignItems:"flex-start",rounded:!0,flexDirection:"row",justifyContent:"space-between",paddingY:1,paddingLeft:1,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)({background:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__._X.systemErrorMuted},"",""),children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.kC,{gap:.5,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.xu,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_icon__WEBPACK_IMPORTED_MODULE_4__.z$,{color:"error",size:"md","aria-hidden":"false","aria-label":"Error",css:_ref2})}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.Kq,{gap:.5,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_5__.x,{fontWeight:"bold",color:"error",children:[fileName," (",filesize__WEBPACK_IMPORTED_MODULE_0___default()(fileSize),") could not be selected"]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)("ul",{css:_ref3,children:errors.map((function(_ref4,index){var message=_ref4.message;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_5__.x,{as:"li",css:_ref5,children:message},index)}))})]})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.xu,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_button__WEBPACK_IMPORTED_MODULE_2__.zx,{variant:"tertiary",onClick:onRemove,children:"Remove file"})})]})};try{FileUploadRejectedFile.displayName="FileUploadRejectedFile",FileUploadRejectedFile.__docgenInfo={description:"",displayName:"FileUploadRejectedFile",props:{fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string"}},fileSize:{defaultValue:null,description:"",name:"fileSize",required:!0,type:{name:"number"}},errors:{defaultValue:null,description:"",name:"errors",required:!0,type:{name:"{ message: string; code: string; }[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/file-upload/src/FileUploadRejectedFile.tsx#FileUploadRejectedFile"]={docgenInfo:FileUploadRejectedFile.__docgenInfo,name:"FileUploadRejectedFile",path:"packages/file-upload/src/FileUploadRejectedFile.tsx#FileUploadRejectedFile"})}catch(__react_docgen_typescript_loader_error){}},"./packages/file-upload/src/FileUploadRejectedFileList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>FileUploadRejectedFileList});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/box/src/index.ts"),_FileUploadRejectedFile__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/file-upload/src/FileUploadRejectedFile.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var FileUploadRejectedFileList=function FileUploadRejectedFileList(_ref){var fileRejections=_ref.fileRejections,handleRemoveRejection=_ref.handleRemoveRejection;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.Kq,{as:"ul","aria-label":"Invalid files",gap:.5,children:fileRejections.map((function(rejection){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_FileUploadRejectedFile__WEBPACK_IMPORTED_MODULE_2__.K,_objectSpread(_objectSpread({},rejection),{},{onRemove:function onRemove(){return handleRemoveRejection(rejection.fileName)}}),rejection.fileName)}))})};try{FileUploadRejectedFileList.displayName="FileUploadRejectedFileList",FileUploadRejectedFileList.__docgenInfo={description:"",displayName:"FileUploadRejectedFileList",props:{fileRejections:{defaultValue:null,description:"",name:"fileRejections",required:!0,type:{name:"RejectedFile[]"}},handleRemoveRejection:{defaultValue:null,description:"",name:"handleRemoveRejection",required:!0,type:{name:"(fileName: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/file-upload/src/FileUploadRejectedFileList.tsx#FileUploadRejectedFileList"]={docgenInfo:FileUploadRejectedFileList.__docgenInfo,name:"FileUploadRejectedFileList",path:"packages/file-upload/src/FileUploadRejectedFileList.tsx#FileUploadRejectedFileList"})}catch(__react_docgen_typescript_loader_error){}},"./packages/form-stack/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>FormStack_FormStack});var src=__webpack_require__("./packages/box/src/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function FormStack_FormStack(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(src.kC,{flexDirection:"column",gap:2,children})}try{FormStack_FormStack.displayName="FormStack",FormStack_FormStack.__docgenInfo={description:"",displayName:"FormStack",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/form-stack/src/FormStack.tsx#FormStack"]={docgenInfo:FormStack_FormStack.__docgenInfo,name:"FormStack",path:"packages/form-stack/src/FormStack.tsx#FormStack"})}catch(__react_docgen_typescript_loader_error){}try{FormStack.displayName="FormStack",FormStack.__docgenInfo={description:"",displayName:"FormStack",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/form-stack/src/index.tsx#FormStack"]={docgenInfo:FormStack.__docgenInfo,name:"FormStack",path:"packages/form-stack/src/index.tsx#FormStack"})}catch(__react_docgen_typescript_loader_error){}}}]);