"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[8718],{"./packages/react/src/prose/Prose.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_G:()=>proseBlockClassname,s7:()=>Prose});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Prose=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Prose(props,ref){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,_objectSpread({ref,css:proseClass},props))})),proseBlockClassname="agds-prose-block",notSelector=":not([class]):not(.unset-agds-prose-styles *)",proseClass=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({"&:not(.unset-agds-prose-styles *)":_objectSpread({margin:0,textSizeAdjust:"100%",color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.font.body},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("sm","default")),"&:empty:not(.unset-agds-prose-styles)":{display:"none"},[`* + .${proseBlockClassname}:not(.unset-agds-prose-styles *)`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(2)},[`a${notSelector}`]:[_box__WEBPACK_IMPORTED_MODULE_2__.$Y,_box__WEBPACK_IMPORTED_MODULE_2__.T7],'[tabindex="0"]:focus-visible, :target':_core__WEBPACK_IMPORTED_MODULE_1__.tm.outline,"& ::selection":{color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundBody,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundAction},[`img${notSelector}`]:{maxWidth:"100%"},[`p${notSelector}`]:{maxWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.maxWidth.bodyText,margin:0},[`* + p${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`ul${notSelector},ol${notSelector},dl${notSelector},pre`]:{margin:0},[`* + ul${notSelector}, * + ol${notSelector}, * + dl${notSelector}, * + pre`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`ul${notSelector}, ol${notSelector}`]:{"> li":{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.5),maxWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.maxWidth.bodyText,[`> ul${notSelector}, > ol${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.5)}},[`> ul${notSelector}`]:{listStyleType:"disc"}},[`dl${notSelector}`]:{maxWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.maxWidth.bodyText,"> dd":{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.5),paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.5),marginLeft:0,borderLeftWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderWidth.sm,borderLeftStyle:"solid",borderLeftColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.border},"> dt":{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5),fontWeight:"bold","&:first-of-type":{marginTop:0}}},"* + table:not(.unset-agds-prose-styles *)":{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)," + table":{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(3)}},[`h1${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("xxl","heading")),{},{marginTop:0,marginBottom:0}),[`h2${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("xl","heading")),{},{marginTop:0,marginBottom:0}),[`h3${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("lg","heading")),{},{marginTop:0,marginBottom:0}),[`h4${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("md","heading")),{},{marginTop:0,marginBottom:0}),[`h5${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("sm","heading")),{},{marginTop:0,marginBottom:0}),[`h6${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("xs","heading")),{},{marginTop:0,marginBottom:0}),[`* + h1${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(3)},[`* + h2${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(3)},[`* + h3${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`* + h4${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`* + h5${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`* + h6${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`h1 + h2${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`h2 + h3${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`em${notSelector}, i${notSelector}`]:{fontStyle:"italic"},[`strong${notSelector}, b${notSelector}`]:{fontWeight:"bold"},[`small:${notSelector}`]:_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("xs","default")),[`s${notSelector}, del${notSelector}`]:{textDecoration:"line-through"},[`ins${notSelector}`]:{textDecorationLine:"underline",textDecorationStyle:"dashed",textDecorationSkipInk:"auto"},[`dfn${notSelector}`]:{fontStyle:"normal"},[`abbr,abbr[title]${notSelector}`]:{borderBottom:"none",textDecoration:"underline dotted"},[`abbr[title]${notSelector}`]:{cursor:"help"},[`a abbr${notSelector}`]:{paddingBottom:1},[`var${notSelector}`]:{padding:"0 1px",fontStyle:"italic",fontFamily:"serif","sup,sub":{fontFamily:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.font.body,fontStyle:"normal",padding:"0 1px"}},[`sub${notSelector}, sup${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("xs","nospace")),{},{position:"relative",verticalAlign:"baseline"}),[`sub${notSelector}`]:{bottom:"-0.25em"},[`sup${notSelector}`]:{top:"-0.5em"},[`figure${notSelector}`]:{margin:0},[`* + figure${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`figcaption${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1),color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundMuted},[`blockquote${notSelector}`]:{margin:0,padding:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(2),borderLeftWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderWidth.xl,borderLeftStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.border,background:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundShade},[`* + blockquote${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1.5)},[`pre code${notSelector}`]:{display:"block",tabSize:4,padding:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(1)},[`kbd${notSelector}, code${notSelector}, samp${notSelector}`]:_objectSpread(_objectSpread({},(0,_core__WEBPACK_IMPORTED_MODULE_1__.qW)("xs","default")),{},{padding:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(.25),fontFamily:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.font.monospace,display:"inline-block",borderRadius:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderRadius,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText}),[`pre${notSelector}`]:{fontFamily:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.font.monospace,borderRadius:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderRadius,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.foregroundText,overflowX:"auto"},[`hr${notSelector}`]:{boxSizing:"content-box",height:0,overflow:"visible",border:"none",borderTopWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.borderMuted,marginBottom:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(3)},[`* + hr${notSelector}`]:{marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_1__.mapSpacing)(3)},"@media print":{"a[href]::after":{content:'" (" attr(href) ")" !important'},"abbr[title]::after":{content:'" (" attr(title) ")"'},"pre, blockquote, tr, img":{pageBreakInside:"avoid"},"h2, h3 ":{pageBreakAfter:"avoid"}}},"","","","")}}]);