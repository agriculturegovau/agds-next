"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[2544],{"./packages/react/skeleton/dist/ag.ds-next-react-skeleton.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/skeleton/index.ts"),unregister()},"./packages/react/src/skeleton/SkeletonBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>SkeletonBox});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_react_spring_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-spring/web/dist/react-spring-web.esm.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),AnimatedBox=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_0__.animated)(_box__WEBPACK_IMPORTED_MODULE_2__.Box),opacity_start=.84,opacity_end=.2,SkeletonBox=function SkeletonBox(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,_ref$height=_ref.height,height=void 0===_ref$height?"auto":_ref$height,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,prefersReducedMotion=(0,_core__WEBPACK_IMPORTED_MODULE_1__.usePrefersReducedMotion)(),style=(0,_react_spring_web__WEBPACK_IMPORTED_MODULE_0__.useSpring)(prefersReducedMotion?{from:{opacity:opacity_start},to:{opacity:opacity_start}}:{from:{opacity:opacity_start},to:{opacity:opacity_end},loop:{reverse:!0,delay:0},config:{duration:1200},reset:!0});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(AnimatedBox,{"aria-hidden":"true",display:"block",fontSize,lineHeight,height,width,highContrastOutline:!0,rounded:!0,style,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({opacity:opacity_start,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.border,cursor:"progress","&:before":{content:'"\\00a0"'}},"","")})};try{SkeletonBox.displayName="SkeletonBox",SkeletonBox.__docgenInfo={description:"",displayName:"SkeletonBox",props:{fontSize:{defaultValue:{value:"sm"},description:"The font size of the element.",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:{value:"default"},description:"The line height of the element.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:{value:"auto"},description:"The height of the element.",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skeleton/SkeletonBox.tsx#SkeletonBox"]={docgenInfo:SkeletonBox.__docgenInfo,name:"SkeletonBox",path:"packages/react/src/skeleton/SkeletonBox.tsx#SkeletonBox"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skeleton/SkeletonHeading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>SkeletonHeading});var _heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/heading/index.ts"),_SkeletonBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/skeleton/SkeletonBox.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),SkeletonHeading=function SkeletonHeading(_ref){var type=_ref.type,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_SkeletonBox__WEBPACK_IMPORTED_MODULE_1__.n,{fontSize:_heading__WEBPACK_IMPORTED_MODULE_0__.U[type],lineHeight:"heading",width})};try{SkeletonHeading.displayName="SkeletonHeading",SkeletonHeading.__docgenInfo={description:"",displayName:"SkeletonHeading",props:{type:{defaultValue:null,description:"The type/level of heading is used to control the height of the element.",name:"type",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skeleton/SkeletonHeading.tsx#SkeletonHeading"]={docgenInfo:SkeletonHeading.__docgenInfo,name:"SkeletonHeading",path:"packages/react/src/skeleton/SkeletonHeading.tsx#SkeletonHeading"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skeleton/SkeletonText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SkeletonText});var _SkeletonBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/skeleton/SkeletonBox.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),SkeletonText=function SkeletonText(_ref){var _ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?"sm":_ref$fontSize,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?"default":_ref$lineHeight,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SkeletonBox__WEBPACK_IMPORTED_MODULE_0__.n,{fontSize,lineHeight,width})};try{SkeletonText.displayName="SkeletonText",SkeletonText.__docgenInfo={description:"",displayName:"SkeletonText",props:{fontSize:{defaultValue:{value:"sm"},description:"The font size of the element.",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:{value:"default"},description:"The line height of the element.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/skeleton/SkeletonText.tsx#SkeletonText"]={docgenInfo:SkeletonText.__docgenInfo,name:"SkeletonText",path:"packages/react/src/skeleton/SkeletonText.tsx#SkeletonText"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/skeleton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SkeletonBox:()=>_SkeletonBox__WEBPACK_IMPORTED_MODULE_0__.n,SkeletonHeading:()=>_SkeletonHeading__WEBPACK_IMPORTED_MODULE_1__.j,SkeletonText:()=>_SkeletonText__WEBPACK_IMPORTED_MODULE_2__.N});var _SkeletonBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/skeleton/SkeletonBox.tsx"),_SkeletonHeading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/skeleton/SkeletonHeading.tsx"),_SkeletonText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/skeleton/SkeletonText.tsx")},"./packages/react/src/table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Table});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),Table=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Table(_ref,ref){var children=_ref.children,striped=_ref.striped,tabIndex=_ref.tabIndex,ariaLabelledby=_ref["aria-labelledby"],ariaDescribedby=_ref["aria-describedby"],id=_ref.id;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{as:"table",ref,tabIndex,fontSize:"sm",focus:!0,width:"100%",display:"table",id,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({borderCollapse:"collapse",borderSpacing:0,"tbody tr:nth-last-of-type( odd )":{backgroundColor:striped?_core__WEBPACK_IMPORTED_MODULE_2__.boxPalette.backgroundShade:"transparent"}},"",""),"aria-labelledby":ariaLabelledby,"aria-describedby":ariaDescribedby,children})}));try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{striped:{defaultValue:null,description:"If true, alternating rows will have a different background colour.",name:"striped",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Setting this to -1 allows the table to be focusable",name:"tabIndex",required:!1,type:{name:"number"}},"aria-labelledby":{defaultValue:null,description:"The id of the element that labels the table",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"The id of the element that describes the table",name:"aria-describedby",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the table",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"packages/react/src/table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/table/TableBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TableBody});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),TableBody=function TableBody(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as:"tbody",display:"table-row-group",children})};try{TableBody.displayName="TableBody",TableBody.__docgenInfo={description:"",displayName:"TableBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/table/TableBody.tsx#TableBody"]={docgenInfo:TableBody.__docgenInfo,name:"TableBody",path:"packages/react/src/table/TableBody.tsx#TableBody"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/table/TableCaption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TableCaption});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"1flj9lk",styles:"text-align:left"},TableCaption=function TableCaption(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{as:"caption",fontSize:"md",fontWeight:"bold",paddingBottom:.5,display:"table-caption",css:_ref2,children})};try{TableCaption.displayName="TableCaption",TableCaption.__docgenInfo={description:"",displayName:"TableCaption",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/table/TableCaption.tsx#TableCaption"]={docgenInfo:TableCaption.__docgenInfo,name:"TableCaption",path:"packages/react/src/table/TableCaption.tsx#TableCaption"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/table/TableCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>TableCell});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),TableCell=function TableCell(_ref){var children=_ref.children,display=_ref.display,_ref$verticalAlign=_ref.verticalAlign,verticalAlign=void 0===_ref$verticalAlign?"top":_ref$verticalAlign,_ref$textAlign=_ref.textAlign,textAlign=void 0===_ref$textAlign?"left":_ref$textAlign;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as:"td",padding:.75,borderBottom:!0,borderColor:"muted",color:"text",focus:!0,display,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv)({verticalAlign,textAlign},"",""),children})};try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{display:{defaultValue:null,description:"Can be used to conditionally hide or show table cells at different breakpoints.",name:"display",required:!1,type:{name:'ResponsiveProp<"none" | "table-cell">'}},textAlign:{defaultValue:{value:"left"},description:"Sets the horizontal alignment of the content.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},verticalAlign:{defaultValue:{value:"top"},description:"Sets the vertical alignment of the content.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/table/TableCell.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"packages/react/src/table/TableCell.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/table/TableHead.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>TableHead});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),TableHead=function TableHead(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as:"thead",borderBottom:!0,borderBottomWidth:"xl",borderColor:"muted",display:"table-header-group",children})};try{TableHead.displayName="TableHead",TableHead.__docgenInfo={description:"",displayName:"TableHead",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/table/TableHead.tsx#TableHead"]={docgenInfo:TableHead.__docgenInfo,name:"TableHead",path:"packages/react/src/table/TableHead.tsx#TableHead"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/table/TableHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>TableHeader});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["children","textAlign","width"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TableHeader=function TableHeader(_ref){var children=_ref.children,_ref$textAlign=_ref.textAlign,textAlign=void 0===_ref$textAlign?"left":_ref$textAlign,width=_ref.width,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,_objectSpread(_objectSpread({as:"th",color:"text",padding:.75,fontWeight:"bold",focus:!0,width,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({textAlign},"","")},props),{},{children}))};try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{display:{defaultValue:null,description:"Can be used to conditionally hide or show table cells at different breakpoints.",name:"display",required:!1,type:{name:'ResponsiveProp<"none" | "table-cell">'}},scope:{defaultValue:null,description:"Defines the cells that the header (defined in the <th>) element relates to.",name:"scope",required:!1,type:{name:"enum",value:[{value:'"col"'},{value:'"colgroup"'},{value:'"row"'},{value:'"rowgroup"'}]}},textAlign:{defaultValue:{value:"left"},description:"Sets the horizontal alignment of the content.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},width:{defaultValue:null,description:"Sets the width of the column.",name:"width",required:!1,type:{name:"ResponsiveProp<TableHeaderWidthType>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/table/TableHeader.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"packages/react/src/table/TableHeader.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/table/TableWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>TableWrapper});var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"1j3zebv",styles:"overflow-x:auto"},TableWrapper=function TableWrapper(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("div",{css:_ref2,children})};try{TableWrapper.displayName="TableWrapper",TableWrapper.__docgenInfo={description:"",displayName:"TableWrapper",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/table/TableWrapper.tsx#TableWrapper"]={docgenInfo:TableWrapper.__docgenInfo,name:"TableWrapper",path:"packages/react/src/table/TableWrapper.tsx#TableWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Table:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.i,TableBody:()=>_TableBody__WEBPACK_IMPORTED_MODULE_4__.R,TableCaption:()=>_TableCaption__WEBPACK_IMPORTED_MODULE_2__.R,TableCell:()=>_TableCell__WEBPACK_IMPORTED_MODULE_5__.p,TableHead:()=>_TableHead__WEBPACK_IMPORTED_MODULE_3__.s,TableHeader:()=>_TableHeader__WEBPACK_IMPORTED_MODULE_1__.x,TableWrapper:()=>_TableWrapper__WEBPACK_IMPORTED_MODULE_6__.y});var _Table__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/table/Table.tsx"),_TableHeader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/table/TableHeader.tsx"),_TableCaption__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/table/TableCaption.tsx"),_TableHead__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/table/TableHead.tsx"),_TableBody__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/table/TableBody.tsx"),_TableCell__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/table/TableCell.tsx"),_TableWrapper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/table/TableWrapper.tsx")},"./packages/react/table/dist/ag.ds-next-react-table.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/table/index.ts"),unregister()}}]);