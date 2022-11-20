"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[829],{"./packages/skeleton/src/SkeletonText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/box/src/index.ts"),_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/text/src/index.tsx"),_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/index.ts"),_ag_ds_next_columns__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/columns/src/index.tsx"),_SkeletonText__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/skeleton/src/SkeletonText.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"content/Skeleton/SkeletonText",component:_SkeletonText__WEBPACK_IMPORTED_MODULE_5__.N};var Basic=function Basic(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_SkeletonText__WEBPACK_IMPORTED_MODULE_5__.N,_objectSpread({},args))};Basic.args={fontSize:"sm",width:"100%"};var Sizes=function Sizes(_ref){var lineHeight=_ref.lineHeight,sizes=Object.keys(_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_3__.TV.fontSize.sm).reverse();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.Kq,{gap:1.5,children:sizes.map((function(size){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_ag_ds_next_columns__WEBPACK_IMPORTED_MODULE_4__.o,{gap:[.5,1.5],children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_columns__WEBPACK_IMPORTED_MODULE_4__.s,{columnSpan:[12,6],children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_SkeletonText__WEBPACK_IMPORTED_MODULE_5__.N,{fontSize:size,lineHeight},size)}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.tZ)(_ag_ds_next_columns__WEBPACK_IMPORTED_MODULE_4__.s,{columnSpan:[12,6],children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.BX)(_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_2__.x,{display:"block",fontSize:size,lineHeight,border:!0,children:["Text ",size]})})]},size)}))})};Basic.args={lineHeight:"default"},Basic.parameters=_objectSpread({storySource:{source:"(args) => (\n\t<SkeletonText {...args} />\n)"}},Basic.parameters),Sizes.parameters=_objectSpread({storySource:{source:'({ lineHeight }) => {\n\tconst sizes = Object.keys(tokens.fontSize.sm).reverse() as FontSize[];\n\treturn (\n\t\t<Stack gap={1.5}>\n\t\t\t{sizes.map((size) => (\n\t\t\t\t<Columns gap={[0.5, 1.5]} key={size}>\n\t\t\t\t\t<Column columnSpan={[12, 6]}>\n\t\t\t\t\t\t<SkeletonText key={size} fontSize={size} lineHeight={lineHeight} />\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column columnSpan={[12, 6]}>\n\t\t\t\t\t\t<Text\n\t\t\t\t\t\t\tdisplay="block"\n\t\t\t\t\t\t\tfontSize={size}\n\t\t\t\t\t\t\tlineHeight={lineHeight}\n\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tText {size}\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t</Column>\n\t\t\t\t</Columns>\n\t\t\t))}\n\t\t</Stack>\n\t);\n}'}},Sizes.parameters);var __namedExportsOrder=["Basic","Sizes"]},"./packages/columns/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Column_Column,o:()=>Columns_Columns});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),src=__webpack_require__("./packages/core/src/index.ts"),box_src=__webpack_require__("./packages/box/src/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["gap","cols"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var Columns_Columns=(0,src.yV)((function Columns(_ref,ref){var _ref$gap=_ref.gap,gap=void 0===_ref$gap?1.5:_ref$gap,_ref$cols=_ref.cols,cols=void 0===_ref$cols?12:_ref$cols,props=(0,objectWithoutProperties.Z)(_ref,_excluded),styles=columnsStyles({cols});return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box_src.xu,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,gap,css:styles},props))})),columnsStyles=function columnsStyles(_ref2){var cols=_ref2.cols;return(0,src.mq)({display:"grid",gridTemplateColumns:(0,src.qz)(cols,(function(val){return"repeat(".concat(val,", 1fr)")}))})};try{Columns_Columns.displayName="Columns",Columns_Columns.__docgenInfo={description:"",displayName:"Columns",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},gap:{defaultValue:null,description:"The amount of space between each column or row.",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"The amount of space between each column.",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"The amount of space between each row.",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},alignItems:{defaultValue:null,description:"Position children within their cell in the Grid.",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">'}},cols:{defaultValue:null,description:"The amount of columns that should be created.",name:"cols",required:!1,type:{name:"ResponsiveProp<ColumnRange>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/columns/src/Columns.tsx#Columns"]={docgenInfo:Columns_Columns.__docgenInfo,name:"Columns",path:"packages/columns/src/Columns.tsx#Columns"})}catch(__react_docgen_typescript_loader_error){}var Column_excluded=["columnSpan","columnStart","columnEnd"];function Column_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var Column_Column=(0,src.yV)((function Column(_ref,ref){var columnSpan=_ref.columnSpan,columnStart=_ref.columnStart,columnEnd=_ref.columnEnd,props=(0,objectWithoutProperties.Z)(_ref,Column_excluded),styles=columnStyles({columnSpan,columnStart,columnEnd});return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box_src.xu,function Column_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Column_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Column_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,css:styles},props))})),columnStyles=function columnStyles(_ref2){var columnSpan=_ref2.columnSpan,columnStart=_ref2.columnStart,columnEnd=_ref2.columnEnd;return(0,src.mq)({gridColumn:(0,src.qz)(columnSpan,(function(v){return"span ".concat(v,"/span ").concat(v)})),gridColumnStart:(0,src.qz)(columnStart),gridColumnEnd:(0,src.qz)(columnEnd)})};try{Column_Column.displayName="Column",Column_Column.__docgenInfo={description:"",displayName:"Column",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},columnSpan:{defaultValue:null,description:"",name:"columnSpan",required:!1,type:{name:"ResponsiveProp<ColumnRange>"}},columnStart:{defaultValue:null,description:"",name:"columnStart",required:!1,type:{name:'ResponsiveProp<ColumnRange | "first" | "last">'}},columnEnd:{defaultValue:null,description:"",name:"columnEnd",required:!1,type:{name:'ResponsiveProp<ColumnRange | "first" | "last">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/columns/src/Column.tsx#Column"]={docgenInfo:Column_Column.__docgenInfo,name:"Column",path:"packages/columns/src/Column.tsx#Column"})}catch(__react_docgen_typescript_loader_error){}try{Columns.displayName="Columns",Columns.__docgenInfo={description:"",displayName:"Columns",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},gap:{defaultValue:null,description:"The amount of space between each column or row.",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"The amount of space between each column.",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"The amount of space between each row.",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},alignItems:{defaultValue:null,description:"Position children within their cell in the Grid.",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">'}},cols:{defaultValue:null,description:"The amount of columns that should be created.",name:"cols",required:!1,type:{name:"ResponsiveProp<ColumnRange>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/columns/src/index.tsx#Columns"]={docgenInfo:Columns.__docgenInfo,name:"Columns",path:"packages/columns/src/index.tsx#Columns"})}catch(__react_docgen_typescript_loader_error){}try{Column.displayName="Column",Column.__docgenInfo={description:"",displayName:"Column",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},columnSpan:{defaultValue:null,description:"",name:"columnSpan",required:!1,type:{name:"ResponsiveProp<ColumnRange>"}},columnStart:{defaultValue:null,description:"",name:"columnStart",required:!1,type:{name:'ResponsiveProp<ColumnRange | "first" | "last">'}},columnEnd:{defaultValue:null,description:"",name:"columnEnd",required:!1,type:{name:'ResponsiveProp<ColumnRange | "first" | "last">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/columns/src/index.tsx#Column"]={docgenInfo:Column.__docgenInfo,name:"Column",path:"packages/columns/src/index.tsx#Column"})}catch(__react_docgen_typescript_loader_error){}},"./packages/skeleton/src/SkeletonBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>SkeletonBox});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/index.ts"),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/box/src/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),AnimatedBox=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_0__.animated)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_2__.xu),opacity_start=.84,opacity_end=.2,SkeletonBox=function SkeletonBox(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,_ref$height=_ref.height,height=void 0===_ref$height?"auto":_ref$height,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,prefersReducedMotion=(0,_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_1__.Tb)(),style=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_0__.useSpring)(prefersReducedMotion?{from:{opacity:opacity_start},to:{opacity:opacity_start}}:{from:{opacity:opacity_start},to:{opacity:opacity_end},loop:{reverse:!0,delay:0},config:{duration:1200},reset:!0});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(AnimatedBox,{"aria-hidden":"true",display:"block",fontSize,lineHeight,height,width,highContrastOutline:!0,rounded:!0,style,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({opacity:opacity_start,backgroundColor:_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_1__._X.border,cursor:"progress","&:before":{content:'"\\00a0"'}},"","")})};try{SkeletonBox.displayName="SkeletonBox",SkeletonBox.__docgenInfo={description:"",displayName:"SkeletonBox",props:{fontSize:{defaultValue:{value:"sm"},description:"The font size of the element.",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:{value:"default"},description:"The line height of the element.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:{value:"auto"},description:"The height of the element.",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/skeleton/src/SkeletonBox.tsx#SkeletonBox"]={docgenInfo:SkeletonBox.__docgenInfo,name:"SkeletonBox",path:"packages/skeleton/src/SkeletonBox.tsx#SkeletonBox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/skeleton/src/SkeletonText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SkeletonText});var _SkeletonBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/skeleton/src/SkeletonBox.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),SkeletonText=function SkeletonText(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SkeletonBox__WEBPACK_IMPORTED_MODULE_0__.n,{fontSize,lineHeight,width})};try{SkeletonText.displayName="SkeletonText",SkeletonText.__docgenInfo={description:"",displayName:"SkeletonText",props:{fontSize:{defaultValue:{value:"sm"},description:"The font size of the element.",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:{value:"default"},description:"The line height of the element.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/skeleton/src/SkeletonText.tsx#SkeletonText"]={docgenInfo:SkeletonText.__docgenInfo,name:"SkeletonText",path:"packages/skeleton/src/SkeletonText.tsx#SkeletonText"})}catch(__react_docgen_typescript_loader_error){}},"./packages/text/src/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/index.ts"),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/box/src/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var _ref2={name:"172op4w",styles:"margin-top:0;margin-bottom:0"},Text=(0,_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_1__.yV)((function Text(_ref,ref){var _ref$as=_ref.as,as=void 0===_ref$as?"span":_ref$as,_ref$color=_ref.color,color=void 0===_ref$color?"text":_ref$color,_ref$fontFamily=_ref.fontFamily,fontFamily=void 0===_ref$fontFamily?"body":_ref$fontFamily,_ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?"normal":_ref$fontWeight,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_2__.xu,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,as,css:_ref2,color,fontFamily,fontSize,fontWeight,lineHeight},props))}));try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ResponsiveProp<"focus" | "text" | "inherit" | "action" | "muted" | "accent" | "error" | "success" | "warning" | "info">'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "bodyAlt" | "shade" | "shadeAlt">'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ResponsiveProp<"border" | "muted">'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderX:{defaultValue:null,description:"",name:"borderX",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderY:{defaultValue:null,description:"",name:"borderY",required:!1,type:{name:"ResponsiveProp<boolean>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},highContrastOutline:{defaultValue:null,description:"If true, a solid outline will be visible in windows high contrast mode.",name:"highContrastOutline",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'ResponsiveProp<"normal" | "bold">'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:'ResponsiveProp<"body" | "monospace">'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ResponsiveProp<"table" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | "none" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | ... 4 more ... | "inline-grid">'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveProp<number>"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnSpan:{defaultValue:null,description:"",name:"gridColumnSpan",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnStart:{defaultValue:null,description:"",name:"gridColumnStart",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnEnd:{defaultValue:null,description:"",name:"gridColumnEnd",required:!1,type:{name:"ResponsiveProp<number>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<Spacing>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<Spacing>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text/src/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/text/src/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./packages/text/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.x});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/text/src/Text.tsx");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ResponsiveProp<"focus" | "text" | "inherit" | "action" | "muted" | "accent" | "error" | "success" | "warning" | "info">'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "bodyAlt" | "shade" | "shadeAlt">'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ResponsiveProp<"border" | "muted">'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderX:{defaultValue:null,description:"",name:"borderX",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderY:{defaultValue:null,description:"",name:"borderY",required:!1,type:{name:"ResponsiveProp<boolean>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},highContrastOutline:{defaultValue:null,description:"If true, a solid outline will be visible in windows high contrast mode.",name:"highContrastOutline",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'ResponsiveProp<"normal" | "bold">'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:'ResponsiveProp<"body" | "monospace">'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ResponsiveProp<"table" | "flex" | "grid" | "block" | "inline" | "inline-block" | "inline-flex" | "none" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | ... 4 more ... | "inline-grid">'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveProp<number>"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnSpan:{defaultValue:null,description:"",name:"gridColumnSpan",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnStart:{defaultValue:null,description:"",name:"gridColumnStart",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnEnd:{defaultValue:null,description:"",name:"gridColumnEnd",required:!1,type:{name:"ResponsiveProp<number>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<Spacing>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<Spacing>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text/src/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/text/src/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);