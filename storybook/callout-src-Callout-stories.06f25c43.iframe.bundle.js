"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[8379],{"./packages/callout/src/Callout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,OnBodyAlt:()=>OnBodyAlt,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/box/src/index.ts"),_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/text/src/index.tsx"),_Callout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/callout/src/Callout.tsx"),_CalloutTitle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/callout/src/CalloutTitle.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"content/Callout",component:_Callout__WEBPACK_IMPORTED_MODULE_3__.U,subcomponents:{CalloutTitle:_CalloutTitle__WEBPACK_IMPORTED_MODULE_4__.l}};var Basic=function Basic(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_Callout__WEBPACK_IMPORTED_MODULE_3__.U,_objectSpread(_objectSpread({},args),{},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_2__.x,{as:"p",children:"Description of the callout."})}))};Basic.args={title:"Callout heading"};var OnBodyAlt=function OnBodyAlt(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_1__.xu,{background:"bodyAlt",padding:1.5,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_Callout__WEBPACK_IMPORTED_MODULE_3__.U,_objectSpread(_objectSpread({},args),{},{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_2__.x,{as:"p",children:"Description of the callout"})}))})};OnBodyAlt.storyName="On bodyAlt background",OnBodyAlt.args={title:"Callout heading",background:"shadeAlt"},Basic.parameters=_objectSpread({storySource:{source:'(args) => (\n\t<Callout {...args}>\n\t\t<Text as="p">Description of the callout.</Text>\n\t</Callout>\n)'}},Basic.parameters),OnBodyAlt.parameters=_objectSpread({storySource:{source:'(args) => (\n\t<Box background="bodyAlt" padding={1.5}>\n\t\t<Callout {...args}>\n\t\t\t<Text as="p">Description of the callout</Text>\n\t\t</Callout>\n\t</Box>\n)'}},OnBodyAlt.parameters);var __namedExportsOrder=["Basic","OnBodyAlt"]},"./packages/callout/src/Callout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Callout});var _ag_ds_next_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/box/src/index.ts"),_CalloutTitle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/callout/src/CalloutTitle.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Callout=function Callout(_ref){var as=_ref.as,_ref$background=_ref.background,background=void 0===_ref$background?"shade":_ref$background,children=_ref.children,title=_ref.title;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_0__.kC,{as,flexDirection:"column",gap:1,background,padding:1.5,borderLeft:!0,borderLeftWidth:"xl",highContrastOutline:!0,children:[title?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_CalloutTitle__WEBPACK_IMPORTED_MODULE_1__.l,{children:title}):null,children]})};try{Callout.displayName="Callout",Callout.__docgenInfo={description:"",displayName:"Callout",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},background:{defaultValue:{value:"shade"},description:'If Callout is placed on "bodyAlt" background, please set this to "shadeAlt".',name:"background",required:!1,type:{name:"enum",value:[{value:'"shade"'},{value:'"shadeAlt"'}]}},title:{defaultValue:null,description:"Title will appear in bold",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/callout/src/Callout.tsx#Callout"]={docgenInfo:Callout.__docgenInfo,name:"Callout",path:"packages/callout/src/Callout.tsx#Callout"})}catch(__react_docgen_typescript_loader_error){}},"./packages/callout/src/CalloutTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>CalloutTitle});var _ag_ds_next_text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/text/src/index.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),CalloutTitle=function CalloutTitle(_ref){var _ref$as=_ref.as,as=void 0===_ref$as?"h2":_ref$as,children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_ag_ds_next_text__WEBPACK_IMPORTED_MODULE_0__.x,{as,fontSize:"md",fontWeight:"bold",children})};try{CalloutTitle.displayName="CalloutTitle",CalloutTitle.__docgenInfo={description:"",displayName:"CalloutTitle",props:{as:{defaultValue:{value:"h2"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/callout/src/CalloutTitle.tsx#CalloutTitle"]={docgenInfo:CalloutTitle.__docgenInfo,name:"CalloutTitle",path:"packages/callout/src/CalloutTitle.tsx#CalloutTitle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/text/src/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/index.ts"),_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/box/src/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var _ref2={name:"172op4w",styles:"margin-top:0;margin-bottom:0"},Text=(0,_ag_ds_next_core__WEBPACK_IMPORTED_MODULE_1__.yV)((function Text(_ref,ref){var _ref$as=_ref.as,as=void 0===_ref$as?"span":_ref$as,_ref$color=_ref.color,color=void 0===_ref$color?"text":_ref$color,_ref$fontFamily=_ref.fontFamily,fontFamily=void 0===_ref$fontFamily?"body":_ref$fontFamily,_ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?"normal":_ref$fontWeight,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_ag_ds_next_box__WEBPACK_IMPORTED_MODULE_2__.xu,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ref,as,css:_ref2,color,fontFamily,fontSize,fontWeight,lineHeight},props))}));try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "text" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined>'}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ResponsiveProp<"focus" | "text" | "inherit" | "action" | "muted" | "accent" | "error" | "success" | "warning" | "info">'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "shade" | "shadeAlt" | "bodyAlt">'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"border"'},{value:'"muted"'}]}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"boolean"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"boolean"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"boolean"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"boolean"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderX:{defaultValue:null,description:"",name:"borderX",required:!1,type:{name:"boolean"}},borderY:{defaultValue:null,description:"",name:"borderY",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},highContrastOutline:{defaultValue:null,description:"If true, a solid outline will be visible in windows high contrast mode.",name:"highContrastOutline",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'ResponsiveProp<"normal" | "bold">'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:'ResponsiveProp<"body" | "monospace">'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ResponsiveProp<"block" | "none" | "flex" | "inline" | "inline-block" | "inline-flex" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cell" | "table-column-group" | "table-column" | "table-caption">'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveProp<number>"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveProp<number>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<Spacing>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<Spacing>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text/src/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/text/src/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./packages/text/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.x});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/text/src/Text.tsx");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "text" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined>'}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ResponsiveProp<"focus" | "text" | "inherit" | "action" | "muted" | "accent" | "error" | "success" | "warning" | "info">'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "shade" | "shadeAlt" | "bodyAlt">'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"border"'},{value:'"muted"'}]}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"boolean"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"boolean"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"boolean"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"boolean"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},borderX:{defaultValue:null,description:"",name:"borderX",required:!1,type:{name:"boolean"}},borderY:{defaultValue:null,description:"",name:"borderY",required:!1,type:{name:"boolean"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},highContrastOutline:{defaultValue:null,description:"If true, a solid outline will be visible in windows high contrast mode.",name:"highContrastOutline",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'ResponsiveProp<"normal" | "bold">'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:'ResponsiveProp<"body" | "monospace">'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ResponsiveProp<"block" | "none" | "flex" | "inline" | "inline-block" | "inline-flex" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | "table-cell" | "table-column-group" | "table-column" | "table-caption">'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveProp<number>"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveProp<number>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"stretch" | "flex-start" | "flex-end" | "center" | "baseline">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<Spacing>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<Spacing>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text/src/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/text/src/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);