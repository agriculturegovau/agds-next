"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9289],{"./packages/react/src/select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Block:()=>Block,Controlled:()=>Controlled,Disabled:()=>Disabled,DisabledOption:()=>DisabledOption,GroupedOptions:()=>GroupedOptions,HideOptionalLabel:()=>HideOptionalLabel,Hint:()=>Hint,Invalid:()=>Invalid,MaxWidths:()=>MaxWidths,Placeholder:()=>Placeholder,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/select/Select.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/Select",component:_Select__WEBPACK_IMPORTED_MODULE_3__.P};var EXAMPLE_OPTIONS=[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],Template=function Template(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_Select__WEBPACK_IMPORTED_MODULE_3__.P,_objectSpread({},args))},Basic=Template.bind({});Basic.args={label:"Example",placeholder:"Please select",options:EXAMPLE_OPTIONS};var Placeholder=Template.bind({});Placeholder.args={label:"Example",placeholder:"Select an option from the menu",options:EXAMPLE_OPTIONS};var Required=Template.bind({});Required.args={label:"Example",placeholder:"Please select",required:!0,options:EXAMPLE_OPTIONS};var HideOptionalLabel=Template.bind({});HideOptionalLabel.args={label:"Example",placeholder:"Please select",options:EXAMPLE_OPTIONS,hideOptionalLabel:!0};var Disabled=Template.bind({});Disabled.args={label:"Example",placeholder:"Please select",disabled:!0,options:EXAMPLE_OPTIONS};var DisabledOption=Template.bind({});DisabledOption.args={label:"Example",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B",disabled:!0},{value:"c",label:"Option C"}]};var Invalid=Template.bind({});Invalid.args={label:"Example",placeholder:"Please select",message:"This select is invalid",required:!0,invalid:!0,options:EXAMPLE_OPTIONS};var Hint=Template.bind({});Hint.args={label:"Example",placeholder:"Please select",hint:"Lorem ipsum dolar",options:EXAMPLE_OPTIONS};var Block=Template.bind({});Block.args={label:"Block",placeholder:"Please select",block:!0,options:EXAMPLE_OPTIONS};var MaxWidths=function MaxWidths(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_2__.Stack,{gap:1,children:["md","lg","xl"].map((function(size){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_Select__WEBPACK_IMPORTED_MODULE_3__.P,_objectSpread(_objectSpread({},args),{},{label:size,maxWidth:size}),size)}))})};MaxWidths.args={placeholder:"Please select",options:EXAMPLE_OPTIONS};var Controlled=function Controlled(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),selected=_useState[0],setSelected=_useState[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_Select__WEBPACK_IMPORTED_MODULE_3__.P,{value:null==selected?void 0:selected.value,onChange:function onChange(event){var nextSelected=EXAMPLE_OPTIONS.find((function(_ref){return _ref.value===event.target.value}));setSelected(nextSelected)},label:"Controlled",placeholder:"Please select",options:EXAMPLE_OPTIONS})},GroupedOptions=Template.bind({});GroupedOptions.args={label:"Grouped options",placeholder:"Please select",options:[{label:"Group A",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]},{label:"Group B",options:[{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}]}]},Basic.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},Basic.parameters),Placeholder.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},Placeholder.parameters),Required.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},Required.parameters),HideOptionalLabel.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},HideOptionalLabel.parameters),Disabled.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},Disabled.parameters),DisabledOption.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},DisabledOption.parameters),Invalid.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},Invalid.parameters),Hint.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},Hint.parameters),Block.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},Block.parameters),MaxWidths.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<Stack gap={1}>\n\t\t{(['md', 'lg', 'xl'] as const).map((size) => (\n\t\t\t<Select key={size} {...args} label={size} maxWidth={size} />\n\t\t))}\n\t</Stack>\n)"}},MaxWidths.parameters),Controlled.parameters=_objectSpread({storySource:{source:'() => {\n\tconst [selected, setSelected] = useState<\n\t\ttypeof EXAMPLE_OPTIONS[number] | undefined\n\t>();\n\n\tconst onChange = (event: ChangeEvent<HTMLSelectElement>) => {\n\t\tconst nextSelected = EXAMPLE_OPTIONS.find(\n\t\t\t({ value }) => value === event.target.value\n\t\t);\n\t\tsetSelected(nextSelected);\n\t};\n\n\treturn (\n\t\t<Select\n\t\t\tvalue={selected?.value}\n\t\t\tonChange={onChange}\n\t\t\tlabel="Controlled"\n\t\t\tplaceholder="Please select"\n\t\t\toptions={EXAMPLE_OPTIONS}\n\t\t/>\n\t);\n}'}},Controlled.parameters),GroupedOptions.parameters=_objectSpread({storySource:{source:"(args) => <Select {...args} />"}},GroupedOptions.parameters);var __namedExportsOrder=["Basic","Placeholder","Required","HideOptionalLabel","Disabled","DisabledOption","Invalid","Hint","Block","MaxWidths","Controlled","GroupedOptions"]},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z$:()=>AlertFilledIcon.z,zM:()=>AlertIcon.z,ve:()=>ArrowDownIcon.v,Y4:()=>ArrowLeftIcon.Y,LZ:()=>ArrowRightIcon.L,Hf:()=>ArrowUpIcon.H,AvatarIcon:()=>AvatarIcon.f,Qu:()=>CalendarIcon,v4:()=>ChevronDownIcon.v,wy:()=>ChevronLeftIcon.w,XC:()=>ChevronRightIcon.X,Tw:()=>CloseIcon.T,h0:()=>ExternalLinkIcon.h,F3:()=>InfoFilledIcon.F,sz:()=>InfoIcon.s,Zs:()=>ProgressBlockedIcon.Z,NB:()=>ProgressDoingIcon.N,Q2:()=>ProgressTodoIcon.Q,W1:()=>SearchIcon.W,qE:()=>SuccessFilledIcon.q,tm:()=>SuccessIcon.t,rG:()=>UploadIcon.r,av:()=>WarningFilledIcon.a,aN:()=>WarningIcon.a,kE:()=>utils.k});var Icon=__webpack_require__("./packages/react/src/icon/Icon.tsx"),utils=__webpack_require__("./packages/react/src/icon/utils.tsx"),AlertIcon=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),AlertFilledIcon=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),ArrowUpIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),ArrowDownIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),ArrowLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),ArrowRightIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),AvatarIcon=__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),CalendarIcon=(0,Icon.I)((0,emotion_react_jsx_runtime_browser_esm.BX)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M8 3C8 4.5621 8 5.4379 8 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M16 3C16 4.5621 16 5.4379 16 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M21 20V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("line",{x1:"3",y1:"12",x2:"21",y2:"12"})]}),"CalendarIcon");try{CalendarIcon.displayName="CalendarIcon",CalendarIcon.__docgenInfo={description:"",displayName:"CalendarIcon",props:{"aria-hidden":{defaultValue:null,description:"",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"border"'},{value:'"focus"'},{value:'"inherit"'},{value:'"action"'},{value:'"muted"'},{value:'"accent"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"]={docgenInfo:CalendarIcon.__docgenInfo,name:"CalendarIcon",path:"packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx");var ChevronDownIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),ChevronLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),ChevronRightIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),CloseIcon=__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx"),InfoIcon=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),InfoFilledIcon=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),ProgressBlockedIcon=(__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx")),ProgressDoingIcon=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),ExternalLinkIcon=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),SearchIcon=(__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx")),SuccessIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),SuccessFilledIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),ProgressTodoIcon=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx")),UploadIcon=__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx"),WarningIcon=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),WarningFilledIcon=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx")},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var _ref2={name:"172op4w",styles:"margin-top:0;margin-bottom:0"},Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.yV)((function Text(_ref,ref){var _ref$as=_ref.as,as=void 0===_ref$as?"span":_ref$as,_ref$color=_ref.color,color=void 0===_ref$color?"text":_ref$color,_ref$fontFamily=_ref.fontFamily,fontFamily=void 0===_ref$fontFamily?"body":_ref$fontFamily,_ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?"normal":_ref$fontWeight,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,as,css:_ref2,color,fontFamily,fontSize,fontWeight,lineHeight},props))}));try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ResponsiveProp<"text" | "focus" | "inherit" | "action" | "muted" | "accent" | "error" | "success" | "warning" | "info">'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "bodyAlt" | "shade" | "shadeAlt">'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ResponsiveProp<"border" | "muted">'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderX:{defaultValue:null,description:"",name:"borderX",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderY:{defaultValue:null,description:"",name:"borderY",required:!1,type:{name:"ResponsiveProp<boolean>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},highContrastOutline:{defaultValue:null,description:"If true, a solid outline will be visible in windows high contrast mode.",name:"highContrastOutline",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'ResponsiveProp<"normal" | "bold">'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:'ResponsiveProp<"body" | "monospace">'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ResponsiveProp<"block" | "table" | "none" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | ... 4 more ... | "inline-grid">'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveProp<number>"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnSpan:{defaultValue:null,description:"",name:"gridColumnSpan",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnStart:{defaultValue:null,description:"",name:"gridColumnStart",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnEnd:{defaultValue:null,description:"",name:"gridColumnEnd",required:!1,type:{name:"ResponsiveProp<number>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "stretch" | "baseline">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<Spacing>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<Spacing>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/react/src/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.x});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);