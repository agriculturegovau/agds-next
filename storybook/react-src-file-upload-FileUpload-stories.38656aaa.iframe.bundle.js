"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[2798],{"./packages/react/src/file-upload/FileUpload.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Disabled:()=>Disabled,InstantUpload:()=>InstantUpload,Invalid:()=>Invalid,MultipleFiles:()=>MultipleFiles,MultipleImages:()=>MultipleImages,OnlyAcceptedFormats:()=>OnlyAcceptedFormats,Required:()=>Required,UploadSingleFileOnSubmit:()=>UploadSingleFileOnSubmit,Valid:()=>Valid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@hookform/resolvers/yup/dist/yup.module.js"),yup__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/yup/es/index.js"),_form_stack__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/form-stack/index.ts"),_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/button/index.ts"),_loading__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/loading/index.ts"),_FileUpload__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/file-upload/FileUpload.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/FileUpload",component:_FileUpload__WEBPACK_IMPORTED_MODULE_9__.p};var Template=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),value=_useState[0],setValue=_useState[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_FileUpload__WEBPACK_IMPORTED_MODULE_9__.p,_objectSpread(_objectSpread({},args),{},{value,onChange:setValue}))},TemplateWithValue=function TemplateWithValue(args){var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([new File(["this is an example file"],"example.jpg",{type:"image/jpg"})]),value=_useState2[0],setValue=_useState2[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_FileUpload__WEBPACK_IMPORTED_MODULE_9__.p,_objectSpread(_objectSpread({},args),{},{value,onChange:setValue}))},Basic=TemplateWithValue.bind({});Basic.args={label:"Drivers licence"};var Required=Template.bind({});Required.args={label:"Drivers licence",required:!0};var Disabled=Template.bind({});Disabled.args={label:"Drivers licence",disabled:!0};var Invalid=Template.bind({});Invalid.args={label:"Drivers licence",message:"Please choose a valid file",invalid:!0};var Valid=TemplateWithValue.bind({});Valid.args={label:"Drivers licence",message:"The file you have submitted is valid",valid:!0};var MultipleFiles=Template.bind({});MultipleFiles.args={label:"Identity documents",multiple:!0};var OnlyAcceptedFormats=Template.bind({});OnlyAcceptedFormats.args={label:"Identity documents",required:!0,hint:"May include images of your passport, drivers licence etc.",maxSize:200,accept:["image/jpeg","image/jpg","image/png","application/pdf","application/msword","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],multiple:!0};var MultipleImages=Template.bind({});MultipleImages.args={label:"Photos from your holiday",maxSize:2e3,maxFiles:3,accept:["image/jpeg","image/jpg","image/png","image/heic"],multiple:!0};var InstantUpload=function InstantUpload(args){var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),value=_useState3[0],setValue=_useState3[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_FileUpload__WEBPACK_IMPORTED_MODULE_9__.p,_objectSpread(_objectSpread({},args),{},{value,onChange:function onChange(acceptedFiles){setValue(acceptedFiles.map((function(file){return file.status&&"none"!==file.status||(file.status="uploading"),file}))),setTimeout((function(){setValue(acceptedFiles.map((function(file){return"uploading"===file.status&&(file.status="success"),file})))}),3e3)}}))};InstantUpload.args={label:"Photos from your holiday",multiple:!0,maxFiles:3};var _ref3={name:"bjn8wh",styles:"position:relative"},UploadSingleFileOnSubmit=function UploadSingleFileOnSubmit(args){var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),isSubmitting=_useState4[0],setSubmitting=_useState4[1],formSchema=yup__WEBPACK_IMPORTED_MODULE_5__.Ry({file:yup__WEBPACK_IMPORTED_MODULE_5__.nK().required("Select a file to upload")}).required(),_useForm=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.cI)({defaultValues:{file:[]},resolver:(0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.X)(formSchema)}),control=_useForm.control,handleSubmit=_useForm.handleSubmit,onSubmit=function(){var _ref=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__.Z)(_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(data){return _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:setSubmitting(!0),console.log({data}),setTimeout((function(){setSubmitting(!1)}),2e3);case 3:case"end":return _context.stop()}}),_callee)})));return function onSubmit(_x){return _ref.apply(this,arguments)}}();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)("form",{onSubmit:handleSubmit(onSubmit,(function onError(err){console.error(err)})),noValidate:!0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.BX)(_form_stack__WEBPACK_IMPORTED_MODULE_6__.R,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Qr,{control,name:"file",render:function render(_ref2){var _ref2$field=_ref2.field,value=_ref2$field.value,onChange=_ref2$field.onChange,onBlur=_ref2$field.onBlur,name=_ref2$field.name,_ref2$fieldState=_ref2.fieldState,invalid=_ref2$fieldState.invalid,error=_ref2$fieldState.error;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.BX)("div",{css:_ref3,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_FileUpload__WEBPACK_IMPORTED_MODULE_9__.p,_objectSpread(_objectSpread({},args),{},{id:"file",accept:["image/jpeg","image/jpg","image/png"],maxSize:500,multiple:!1,value,onChange,onBlur,name,invalid,message:null==error?void 0:error.message,required:!0})),isSubmitting&&(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_loading__WEBPACK_IMPORTED_MODULE_8__.V6,{label:"Uploading file"})]})}}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)("div",{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.tZ)(_button__WEBPACK_IMPORTED_MODULE_7__.zx,{type:"submit",loading:isSubmitting,children:"Submit evidence"})})]})})};UploadSingleFileOnSubmit.args={label:"Upload evidence",hint:"General hint information",maxSize:1e5,multiple:!1,required:!0},Basic.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([\n\t\tnew File(['this is an example file'], 'example.jpg', {\n\t\t\ttype: 'image/jpg',\n\t\t}),\n\t]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},Basic.parameters),Required.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},Required.parameters),Disabled.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},Disabled.parameters),Invalid.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},Invalid.parameters),Valid.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([\n\t\tnew File(['this is an example file'], 'example.jpg', {\n\t\t\ttype: 'image/jpg',\n\t\t}),\n\t]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},Valid.parameters),MultipleFiles.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},MultipleFiles.parameters),OnlyAcceptedFormats.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},OnlyAcceptedFormats.parameters),MultipleImages.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([]);\n\treturn <FileUpload {...args} value={value} onChange={setValue} />;\n}"}},MultipleImages.parameters),InstantUpload.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [value, setValue] = useState<FileWithStatus[]>([]);\n\n\tconst onChange = (acceptedFiles: FileWithStatus[]) => {\n\t\t// Update the UI to show loading state straight away\n\t\tsetValue(\n\t\t\tacceptedFiles.map((file) => {\n\t\t\t\tif (!file.status || file.status === 'none') file.status = 'uploading';\n\t\t\t\treturn file;\n\t\t\t})\n\t\t);\n\t\t// Show uploaded state after simulated network request\n\t\tsetTimeout(() => {\n\t\t\tsetValue(\n\t\t\t\tacceptedFiles.map((file) => {\n\t\t\t\t\tif (file.status === 'uploading') file.status = 'success';\n\t\t\t\t\treturn file;\n\t\t\t\t})\n\t\t\t);\n\t\t}, 3000);\n\t};\n\n\treturn <FileUpload {...args} value={value} onChange={onChange} />;\n}"}},InstantUpload.parameters),UploadSingleFileOnSubmit.parameters=_objectSpread({storySource:{source:"(\n\targs\n) => {\n\tconst [isSubmitting, setSubmitting] = useState(false);\n\n\tconst formSchema = yup\n\t\t.object({\n\t\t\tfile: yup.mixed().required('Select a file to upload'),\n\t\t})\n\t\t.required();\n\n\ttype FormSchema = yup.InferType<typeof formSchema>;\n\n\tconst { control, handleSubmit } = useForm<FormSchema>({\n\t\tdefaultValues: {\n\t\t\tfile: [],\n\t\t},\n\t\tresolver: yupResolver(formSchema),\n\t});\n\n\tconst onSubmit: SubmitHandler<FormSchema> = async (data) => {\n\t\tsetSubmitting(true);\n\t\tconsole.log({ data });\n\t\tsetTimeout(() => {\n\t\t\tsetSubmitting(false);\n\t\t}, 2000);\n\t};\n\n\tconst onError: SubmitErrorHandler<FormSchema> = (err) => {\n\t\tconsole.error(err);\n\t};\n\n\treturn (\n\t\t<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>\n\t\t\t<FormStack>\n\t\t\t\t<Controller\n\t\t\t\t\tcontrol={control}\n\t\t\t\t\tname=\"file\"\n\t\t\t\t\trender={({\n\t\t\t\t\t\tfield: { value, onChange, onBlur, name },\n\t\t\t\t\t\tfieldState: { invalid, error },\n\t\t\t\t\t}) => (\n\t\t\t\t\t\t<div css={{ position: 'relative' }}>\n\t\t\t\t\t\t\t<FileUpload\n\t\t\t\t\t\t\t\t{...args}\n\t\t\t\t\t\t\t\tid=\"file\"\n\t\t\t\t\t\t\t\taccept={['image/jpeg', 'image/jpg', 'image/png']}\n\t\t\t\t\t\t\t\tmaxSize={500} // 500kb\n\t\t\t\t\t\t\t\tmultiple={false}\n\t\t\t\t\t\t\t\tvalue={value}\n\t\t\t\t\t\t\t\tonChange={onChange}\n\t\t\t\t\t\t\t\tonBlur={onBlur}\n\t\t\t\t\t\t\t\tname={name}\n\t\t\t\t\t\t\t\tinvalid={invalid}\n\t\t\t\t\t\t\t\tmessage={error?.message}\n\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t// We use a LoadingBlanket to communicate that this field is causing the form\n\t\t\t\t\t\t\t\t// to take longer than usual to submit\n\t\t\t\t\t\t\t\tisSubmitting && <LoadingBlanket label=\"Uploading file\" />\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t)}\n\t\t\t\t/>\n\t\t\t\t<div>\n\t\t\t\t\t<Button type=\"submit\" loading={isSubmitting}>\n\t\t\t\t\t\tSubmit evidence\n\t\t\t\t\t</Button>\n\t\t\t\t</div>\n\t\t\t</FormStack>\n\t\t</form>\n\t);\n}"}},UploadSingleFileOnSubmit.parameters);var __namedExportsOrder=["Basic","Required","Disabled","Invalid","Valid","MultipleFiles","OnlyAcceptedFormats","MultipleImages","InstantUpload","UploadSingleFileOnSubmit"]},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ButtonGroup=function ButtonGroup(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.kC,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/react/src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.$Y,Yd:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.Y,hE:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.h,zx:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.tsx")},"./packages/react/src/field/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AJ:()=>useFieldA11yProps,gN:()=>Field,s_:()=>useFieldIds});var _core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_FieldContainer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),_FieldLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),_FieldHint__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),_FieldMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Field=function Field(_ref){var children=_ref.children,hint=_ref.hint,id=_ref.id,invalid=_ref.invalid,label=_ref.label,secondaryLabel=_ref.secondaryLabel,message=_ref.message,required=_ref.required,valid=_ref.valid,_useFieldIds=useFieldIds(id),fieldId=_useFieldIds.fieldId,hintId=_useFieldIds.hintId,messageId=_useFieldIds.messageId,a11yProps=useFieldA11yProps({required,fieldId,message,messageId,hint,hintId,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.BX)(_FieldContainer__WEBPACK_IMPORTED_MODULE_1__.i,{invalid,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldLabel__WEBPACK_IMPORTED_MODULE_2__.Q,{htmlFor:fieldId,secondaryLabel,required,children:label}),hint?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldHint__WEBPACK_IMPORTED_MODULE_3__.J,{id:hintId,children:hint}):null,message&&(invalid||valid)?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_FieldMessage__WEBPACK_IMPORTED_MODULE_4__.n,{id:messageId,invalid,valid,children:message}):null,"function"==typeof children?children(a11yProps):children]})},useFieldIds=function useFieldIds(idProp){var autoId=(0,_core__WEBPACK_IMPORTED_MODULE_0__.Me)(idProp);return{fieldId:idProp||"field-".concat(autoId),hintId:"field-".concat(autoId,"-hint"),messageId:"field-".concat(autoId,"-message")}},useFieldA11yProps=function useFieldA11yProps(_ref2){var required=_ref2.required,fieldId=_ref2.fieldId,message=_ref2.message,messageId=_ref2.messageId,hint=_ref2.hint,hintId=_ref2.hintId,invalid=_ref2.invalid,describedByIds=[message?messageId:null,hint?hintId:null].filter(Boolean),describedBy=describedByIds.length?describedByIds.join(" "):void 0;return{"aria-required":Boolean(required),"aria-invalid":Boolean(invalid),"aria-describedby":describedBy,id:fieldId}};try{Field.displayName="Field",Field.__docgenInfo={description:"",displayName:"Field",props:{hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!0,type:{name:"string | undefined"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},secondaryLabel:{defaultValue:null,description:"Override the default secondary label.",name:"secondaryLabel",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid or valid.",name:"message",required:!0,type:{name:"string | undefined"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!0,type:{name:"boolean"}},valid:{defaultValue:null,description:"If true, the valid state will be rendered.",name:"valid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"packages/react/src/field/Field.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}try{useFieldIds.displayName="useFieldIds",useFieldIds.__docgenInfo={description:"",displayName:"useFieldIds",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#useFieldIds"]={docgenInfo:useFieldIds.__docgenInfo,name:"useFieldIds",path:"packages/react/src/field/Field.tsx#useFieldIds"})}catch(__react_docgen_typescript_loader_error){}try{useFieldA11yProps.displayName="useFieldA11yProps",useFieldA11yProps.__docgenInfo={description:"",displayName:"useFieldA11yProps",props:{required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},fieldId:{defaultValue:null,description:"",name:"fieldId",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},messageId:{defaultValue:null,description:"",name:"messageId",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},hintId:{defaultValue:null,description:"",name:"hintId",required:!0,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/Field.tsx#useFieldA11yProps"]={docgenInfo:useFieldA11yProps.__docgenInfo,name:"useFieldA11yProps",path:"packages/react/src/field/Field.tsx#useFieldA11yProps"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>FieldContainer});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldContainer=function FieldContainer(_ref){var children=_ref.children,invalid=_ref.invalid,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Kq,{gap:.5,paddingLeft:invalid?1:void 0,borderLeft:invalid,borderLeftWidth:"xl",id,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)({borderLeftColor:invalid?_core__WEBPACK_IMPORTED_MODULE_1__._X.systemError:void 0},"",""),children})};try{FieldContainer.displayName="FieldContainer",FieldContainer.__docgenInfo={description:"",displayName:"FieldContainer",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldContainer.tsx#FieldContainer"]={docgenInfo:FieldContainer.__docgenInfo,name:"FieldContainer",path:"packages/react/src/field/FieldContainer.tsx#FieldContainer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FieldHint});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldHint=function FieldHint(_ref){var children=_ref.children,id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_text__WEBPACK_IMPORTED_MODULE_0__.x,{display:"block",color:"muted",id,children})};try{FieldHint.displayName="FieldHint",FieldHint.__docgenInfo={description:"",displayName:"FieldHint",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldHint.tsx#FieldHint"]={docgenInfo:FieldHint.__docgenInfo,name:"FieldHint",path:"packages/react/src/field/FieldHint.tsx#FieldHint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>FieldLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldLabel=function FieldLabel(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"label":_ref$as,children=_ref.children,htmlFor=_ref.htmlFor,required=_ref.required,secondaryLabelProp=_ref.secondaryLabel,secondaryLabel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return secondaryLabelProp||(required?void 0:"(optional)")}),[required,secondaryLabelProp]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_box__WEBPACK_IMPORTED_MODULE_1__.kC,{as,htmlFor,gap:.25,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.x,{as:"span",fontWeight:"bold",children}),secondaryLabel?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.x,{as:"span",color:"muted",children:secondaryLabel}):null]})};try{FieldLabel.displayName="FieldLabel",FieldLabel.__docgenInfo={description:"",displayName:"FieldLabel",props:{as:{defaultValue:{value:"label"},description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},secondaryLabel:{defaultValue:null,description:"",name:"secondaryLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldLabel.tsx#FieldLabel"]={docgenInfo:FieldLabel.__docgenInfo,name:"FieldLabel",path:"packages/react/src/field/FieldLabel.tsx#FieldLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/FieldMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>FieldMessage});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/icon/index.ts"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"4zleql",styles:"display:block"},FieldMessage=function FieldMessage(_ref){var children=_ref.children,id=_ref.id,invalid=_ref.invalid,valid=_ref.valid;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(_box__WEBPACK_IMPORTED_MODULE_0__.kC,{gap:.5,alignItems:"center",children:[invalid?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.xu,{flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_icon__WEBPACK_IMPORTED_MODULE_1__.z$,{color:"error",size:"md","aria-label":"Error","aria-hidden":"false",css:_ref2})}):null,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_2__.x,{display:"block",fontWeight:"bold",color:getColor({invalid,valid}),id,children})]})},getColor=function getColor(_ref3){var invalid=_ref3.invalid,valid=_ref3.valid;return invalid?"error":valid?"success":void 0};try{FieldMessage.displayName="FieldMessage",FieldMessage.__docgenInfo={description:"",displayName:"FieldMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:null,description:"",name:"valid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/field/FieldMessage.tsx#FieldMessage"]={docgenInfo:FieldMessage.__docgenInfo,name:"FieldMessage",path:"packages/react/src/field/FieldMessage.tsx#FieldMessage"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/field/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gN:()=>Field.gN,i$:()=>FieldContainer.i,J1:()=>FieldHint.J,Qy:()=>FieldLabel.Q,nd:()=>FieldMessage.n,E$:()=>fieldMaxWidth,AJ:()=>Field.AJ,s_:()=>Field.s_});var Field=__webpack_require__("./packages/react/src/field/Field.tsx"),FieldContainer=__webpack_require__("./packages/react/src/field/FieldContainer.tsx"),FieldHint=__webpack_require__("./packages/react/src/field/FieldHint.tsx"),FieldLabel=__webpack_require__("./packages/react/src/field/FieldLabel.tsx"),FieldMessage=__webpack_require__("./packages/react/src/field/FieldMessage.tsx"),fieldMaxWidth={xs:"4.3rem",sm:"6.3rem",md:"10rem",lg:"18rem",xl:"24rem"};__webpack_require__("./node_modules/react/index.js")},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z$:()=>AlertFilledIcon.z,zM:()=>AlertIcon.z,ve:()=>ArrowDownIcon.v,Y4:()=>ArrowLeftIcon.Y,LZ:()=>ArrowRightIcon.L,Hf:()=>ArrowUpIcon.H,fM:()=>AvatarIcon.f,Qu:()=>CalendarIcon,v4:()=>ChevronDownIcon.v,wy:()=>ChevronLeftIcon.w,XC:()=>ChevronRightIcon.X,Tw:()=>CloseIcon.T,h0:()=>ExternalLinkIcon.h,F3:()=>InfoFilledIcon.F,sz:()=>InfoIcon.s,NB:()=>ProgressDoingIcon.N,d0:()=>ProgressDoneIcon.d,Q2:()=>ProgressTodoIcon.Q,W1:()=>SearchIcon.W,qE:()=>SuccessFilledIcon.q,tm:()=>SuccessIcon.t,rG:()=>UploadIcon.r,av:()=>WarningFilledIcon.a,aN:()=>WarningIcon.a,kE:()=>utils.k});var Icon=__webpack_require__("./packages/react/src/icon/Icon.tsx"),utils=__webpack_require__("./packages/react/src/icon/utils.tsx"),AlertIcon=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),AlertFilledIcon=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),ArrowUpIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),ArrowDownIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),ArrowLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),ArrowRightIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),AvatarIcon=__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),CalendarIcon=(0,Icon.I)((0,emotion_react_jsx_runtime_browser_esm.BX)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M8 3C8 4.5621 8 5.4379 8 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M16 3C16 4.5621 16 5.4379 16 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M21 20V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("line",{x1:"3",y1:"12",x2:"21",y2:"12"})]}),"CalendarIcon");try{CalendarIcon.displayName="CalendarIcon",CalendarIcon.__docgenInfo={description:"",displayName:"CalendarIcon",props:{"aria-hidden":{defaultValue:null,description:"",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"border"'},{value:'"focus"'},{value:'"inherit"'},{value:'"action"'},{value:'"muted"'},{value:'"accent"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"]={docgenInfo:CalendarIcon.__docgenInfo,name:"CalendarIcon",path:"packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx");var ChevronDownIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),ChevronLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),ChevronRightIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),CloseIcon=__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx"),InfoIcon=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),InfoFilledIcon=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),ProgressDoingIcon=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),ProgressDoneIcon=__webpack_require__("./packages/react/src/icon/icons/ProgressDoneIcon.tsx"),ExternalLinkIcon=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),SearchIcon=(__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx")),SuccessIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),SuccessFilledIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),ProgressTodoIcon=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx")),UploadIcon=__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx"),WarningIcon=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),WarningFilledIcon=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx")}}]);