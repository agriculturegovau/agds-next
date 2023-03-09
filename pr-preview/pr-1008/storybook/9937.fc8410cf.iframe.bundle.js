"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9937],{"./packages/react/src/prose/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Prose:()=>Prose});var _css,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Prose=(0,core.yV)((function Prose(props,ref){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Box,_objectSpread({ref,css:proseClass},props))})),notSelector=":not([class]):not(.".concat("unset-agds-prose-styles"," *)"),proseClass=(0,emotion_react_browser_esm.iv)((_css={},(0,defineProperty.Z)(_css,"&:not(.".concat("unset-agds-prose-styles"," *)"),_objectSpread({margin:0,textSizeAdjust:"100%",color:core.boxPalette.foregroundText,fontFamily:core.tokens.font.body},(0,core.vY)("sm","default"))),(0,defineProperty.Z)(_css,"&:empty:not(.".concat("unset-agds-prose-styles",")"),{display:"none"}),(0,defineProperty.Z)(_css,"* + .".concat("agds-prose-block",":not(.").concat("unset-agds-prose-styles"," *)"),{marginTop:(0,core.mapSpacing)(2)}),(0,defineProperty.Z)(_css,"a".concat(notSelector),[box.Wf,box.j4]),(0,defineProperty.Z)(_css,'[tabindex="0"]:focus, :target',core.lB.outline),(0,defineProperty.Z)(_css,"mark".concat(notSelector),{color:core.boxPalette.backgroundBody,backgroundColor:core.boxPalette.foregroundAction}),(0,defineProperty.Z)(_css,"& ::selection",{color:core.boxPalette.backgroundBody,backgroundColor:core.boxPalette.foregroundAction}),(0,defineProperty.Z)(_css,"img".concat(notSelector),{maxWidth:"100%"}),(0,defineProperty.Z)(_css,"p".concat(notSelector),{maxWidth:core.tokens.maxWidth.bodyText,margin:0}),(0,defineProperty.Z)(_css,"* + p".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"ul".concat(notSelector,",ol").concat(notSelector,",dl").concat(notSelector,",pre"),{margin:0}),(0,defineProperty.Z)(_css,"* + ul".concat(notSelector,", * + ol").concat(notSelector,", * + dl").concat(notSelector,", * + pre"),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"ul".concat(notSelector,", ol").concat(notSelector),(0,defineProperty.Z)({"> li":(0,defineProperty.Z)({marginTop:(0,core.mapSpacing)(.5)},"> ul".concat(notSelector,", > ol").concat(notSelector),{marginTop:(0,core.mapSpacing)(.5)})},"> ul".concat(notSelector),{listStyleType:"disc"})),(0,defineProperty.Z)(_css,"dl".concat(notSelector),{"> dd":{marginTop:(0,core.mapSpacing)(.5),paddingLeft:(0,core.mapSpacing)(.5),marginLeft:0,borderLeftWidth:core.tokens.borderWidth.sm,borderLeftStyle:"solid",borderLeftColor:core.boxPalette.border},"> dt":{marginTop:(0,core.mapSpacing)(1.5),fontWeight:"bold","&:first-of-type":{marginTop:0}}}),(0,defineProperty.Z)(_css,"* + table:not(.".concat("unset-agds-prose-styles"," *)"),{marginTop:(0,core.mapSpacing)(1.5)," + table":{marginTop:(0,core.mapSpacing)(3)}}),(0,defineProperty.Z)(_css,"h1".concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("xxl","heading")),{},{marginTop:0,marginBottom:0})),(0,defineProperty.Z)(_css,"h2".concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("xl","heading")),{},{marginTop:0,marginBottom:0})),(0,defineProperty.Z)(_css,"h3".concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("lg","heading")),{},{marginTop:0,marginBottom:0})),(0,defineProperty.Z)(_css,"h4".concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("md","heading")),{},{marginTop:0,marginBottom:0})),(0,defineProperty.Z)(_css,"h5".concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("sm","heading")),{},{marginTop:0,marginBottom:0})),(0,defineProperty.Z)(_css,"h6".concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("xs","heading")),{},{marginTop:0,marginBottom:0})),(0,defineProperty.Z)(_css,"* + h1".concat(notSelector),{marginTop:(0,core.mapSpacing)(3)}),(0,defineProperty.Z)(_css,"* + h2".concat(notSelector),{marginTop:(0,core.mapSpacing)(3)}),(0,defineProperty.Z)(_css,"* + h3".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"* + h4".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"* + h5".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"* + h6".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"h1 + h2".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"h2 + h3".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"em".concat(notSelector,", i").concat(notSelector),{fontStyle:"italic"}),(0,defineProperty.Z)(_css,"strong".concat(notSelector,", b").concat(notSelector),{fontWeight:"bold"}),(0,defineProperty.Z)(_css,"small:".concat(notSelector),_objectSpread({},(0,core.vY)("xs","default"))),(0,defineProperty.Z)(_css,"s".concat(notSelector,", del").concat(notSelector),{textDecoration:"line-through"}),(0,defineProperty.Z)(_css,"ins".concat(notSelector),{textDecorationLine:"underline",textDecorationStyle:"dashed",textDecorationSkipInk:"auto"}),(0,defineProperty.Z)(_css,"dfn".concat(notSelector),{fontStyle:"normal"}),(0,defineProperty.Z)(_css,"abbr,abbr[title]".concat(notSelector),{borderBottom:"none",textDecoration:"underline dotted"}),(0,defineProperty.Z)(_css,"abbr[title]".concat(notSelector),{cursor:"help"}),(0,defineProperty.Z)(_css,"a abbr".concat(notSelector),{paddingBottom:1}),(0,defineProperty.Z)(_css,"var".concat(notSelector),{padding:"0 1px",fontStyle:"italic",fontFamily:"serif","sup,sub":{fontFamily:core.tokens.font.body,fontStyle:"normal",padding:"0 1px"}}),(0,defineProperty.Z)(_css,"sub".concat(notSelector,", sup").concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("xs","nospace")),{},{position:"relative",verticalAlign:"baseline"})),(0,defineProperty.Z)(_css,"sub".concat(notSelector),{bottom:"-0.25em"}),(0,defineProperty.Z)(_css,"sup".concat(notSelector),{top:"-0.5em"}),(0,defineProperty.Z)(_css,"figure".concat(notSelector),{margin:0}),(0,defineProperty.Z)(_css,"* + figure".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"figcaption".concat(notSelector),{marginTop:(0,core.mapSpacing)(1)}),(0,defineProperty.Z)(_css,"blockquote".concat(notSelector),{margin:0,padding:(0,core.mapSpacing)(2),borderLeftWidth:core.tokens.borderWidth.xl,borderLeftStyle:"solid",borderColor:core.boxPalette.border,background:core.boxPalette.backgroundShade}),(0,defineProperty.Z)(_css,"* + blockquote".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"pre code".concat(notSelector),{display:"block",tabSize:4,padding:(0,core.mapSpacing)(1)}),(0,defineProperty.Z)(_css,"kbd".concat(notSelector,", code").concat(notSelector,", samp").concat(notSelector),_objectSpread(_objectSpread({},(0,core.vY)("xs","default")),{},{padding:(0,core.mapSpacing)(.25),fontFamily:core.tokens.font.monospace,display:"inline-block",borderRadius:core.tokens.borderRadius,backgroundColor:core.boxPalette.backgroundShade,color:core.boxPalette.foregroundText})),(0,defineProperty.Z)(_css,"pre".concat(notSelector),{fontFamily:core.tokens.font.monospace,borderRadius:core.tokens.borderRadius,backgroundColor:core.boxPalette.backgroundShade,color:core.boxPalette.foregroundText,overflowX:"auto"}),(0,defineProperty.Z)(_css,"hr".concat(notSelector),{boxSizing:"content-box",height:0,overflow:"visible",border:"none",borderTopWidth:core.tokens.borderWidth.sm,borderTopStyle:"solid",borderColor:core.boxPalette.borderMuted,marginBottom:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"* + hr".concat(notSelector),{marginTop:(0,core.mapSpacing)(1.5)}),(0,defineProperty.Z)(_css,"@media print",{"a[href]:after":{content:'" (" attr(href) ")" !important'},"abbr[title]:after":{content:'" (" attr(title) ")"'},"pre, blockquote, tr, img":{pageBreakInside:"avoid"},"h2, h3 ":{pageBreakAfter:"avoid"}}),_css),"","","","");try{Prose.displayName="Prose",Prose.__docgenInfo={description:"",displayName:"Prose",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:'Ref<Comp extends "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | ... 47 more ... | keyof HTMLElementTagNameMap ? ElementTagNameMap[Comp] : Comp extends new (...args: any) => any ? InstanceType<...> : undefined> ...'}},palette:{defaultValue:null,description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'ResponsiveProp<"text" | "focus" | "inherit" | "action" | "muted" | "accent" | "error" | "success" | "warning" | "info">'}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:'ResponsiveProp<"body" | "shade" | "bodyAlt" | "shadeAlt">'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:'ResponsiveProp<"border" | "muted">'}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},borderX:{defaultValue:null,description:"",name:"borderX",required:!1,type:{name:"ResponsiveProp<boolean>"}},borderY:{defaultValue:null,description:"",name:"borderY",required:!1,type:{name:"ResponsiveProp<boolean>"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},focus:{defaultValue:null,description:"",name:"focus",required:!1,type:{name:"boolean"}},highContrastOutline:{defaultValue:null,description:"If true, a solid outline will be visible in windows high contrast mode.",name:"highContrastOutline",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:'ResponsiveProp<"normal" | "bold">'}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:'ResponsiveProp<"body" | "monospace">'}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'ResponsiveProp<"block" | "table" | "none" | "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-row" | ... 4 more ... | "inline-grid">'}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">'}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveProp<number>"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnSpan:{defaultValue:null,description:"",name:"gridColumnSpan",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnStart:{defaultValue:null,description:"",name:"gridColumnStart",required:!1,type:{name:"ResponsiveProp<number>"}},gridColumnEnd:{defaultValue:null,description:"",name:"gridColumnEnd",required:!1,type:{name:"ResponsiveProp<number>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"flex-start" | "flex-end" | "center" | "stretch" | "baseline">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<Spacing>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<string | number>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<string | number>"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveProp<Spacing>"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveProp<Spacing>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveProp<Spacing>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/prose/Prose.tsx#Prose"]={docgenInfo:Prose.__docgenInfo,name:"Prose",path:"packages/react/src/prose/Prose.tsx#Prose"})}catch(__react_docgen_typescript_loader_error){}}}]);