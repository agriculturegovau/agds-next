"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[8585],{"./packages/react/src/avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CompositeNames:()=>CompositeNames,CompositeNamesLinks:()=>CompositeNamesLinks,Sizes:()=>Sizes,Tone:()=>Tone,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/flex/index.ts"),_stack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/stack/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text/index.ts"),_Avatar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/avatar/Avatar.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Content/Avatar",component:_Avatar__WEBPACK_IMPORTED_MODULE_5__.e},Basic={args:{name:"William Mead",tone:"neutral",size:"md"}},Tone={args:{name:"William Mead",tone:"action",size:"md"}},SIZE_MAP={sm:{fontSize:"xs",gap:.5},md:{fontSize:"sm",gap:.5},lg:{fontSize:"md",gap:.75},xl:{fontSize:"lg",gap:.75},xxl:{fontSize:"xl",gap:1},xxxl:{fontSize:"xl",gap:1}},sizes=Object.keys(SIZE_MAP),TONE_MAP={neutral:"muted",action:"action"},Sizes={args:{name:"William Mead",tone:"neutral"},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{alignItems:"center",gap:1,children:sizes.map((size=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Avatar__WEBPACK_IMPORTED_MODULE_5__.e,_objectSpread(_objectSpread({},args),{},{size}),size)))})},CompositeNames=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_stack__WEBPACK_IMPORTED_MODULE_2__.Stack,{alignItems:"flex-start",gap:1,children:sizes.map((size=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{alignItems:"center",gap:SIZE_MAP[size].gap,justifyContent:"flex-start",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Avatar__WEBPACK_IMPORTED_MODULE_5__.e,{name:"William Mead",size,tone:"neutral"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_text__WEBPACK_IMPORTED_MODULE_4__.Text,{color:TONE_MAP.neutral,fontSize:SIZE_MAP[size].fontSize,fontWeight:"bold",children:"William Mead"})]},size)))}),CompositeNamesLinks=()=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_stack__WEBPACK_IMPORTED_MODULE_2__.Stack,{alignItems:"flex-start",gap:1,children:sizes.map((size=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{alignItems:"center",as:"a",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)({textDecoration:"none","> span":{textDecoration:"underline"},"&:hover > span":{textDecoration:"none",color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundText}},"",""),gap:SIZE_MAP[size].gap,href:"#",justifyContent:"flex-start",link:!0,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_Avatar__WEBPACK_IMPORTED_MODULE_5__.e,{name:"William Mead",size,tone:"action"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_text__WEBPACK_IMPORTED_MODULE_4__.Text,{color:TONE_MAP.action,fontSize:SIZE_MAP[size].fontSize,fontWeight:"bold",children:"William Mead"})]},size)))}),__namedExportsOrder=["Basic","Tone","Sizes","CompositeNames","CompositeNamesLinks"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'William Mead',\n    tone: 'neutral',\n    size: 'md'\n  }\n}",...Basic.parameters?.docs?.source}}},Tone.parameters={...Tone.parameters,docs:{...Tone.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'William Mead',\n    tone: 'action',\n    size: 'md'\n  }\n}",...Tone.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'William Mead',\n    tone: 'neutral'\n  },\n  render: args => <Flex alignItems=\"center\" gap={1}>\n            {sizes.map(size => <Avatar key={size} {...args} size={size} />)}\n        </Flex>\n}",...Sizes.parameters?.docs?.source}}},CompositeNames.parameters={...CompositeNames.parameters,docs:{...CompositeNames.parameters?.docs,source:{originalSource:'() => {\n  const name = \'William Mead\';\n  const tone = \'neutral\';\n  return <Stack alignItems="flex-start" gap={1}>\n            {sizes.map(size => <Flex alignItems="center" gap={SIZE_MAP[size].gap} justifyContent="flex-start" key={size}>\n                    <Avatar name={name} size={size} tone={tone} />\n                    <Text color={TONE_MAP[tone]} fontSize={SIZE_MAP[size].fontSize} fontWeight="bold">\n                        {name}\n                    </Text>\n                </Flex>)}\n        </Stack>;\n}',...CompositeNames.parameters?.docs?.source}}},CompositeNamesLinks.parameters={...CompositeNamesLinks.parameters,docs:{...CompositeNamesLinks.parameters?.docs,source:{originalSource:"() => {\n  const name = 'William Mead';\n  const tone = 'action';\n  return <Stack alignItems=\"flex-start\" gap={1}>\n            {sizes.map(size => <Flex alignItems=\"center\" as=\"a\" css={{\n      textDecoration: 'none',\n      '> span': {\n        textDecoration: 'underline'\n      },\n      '&:hover > span': {\n        textDecoration: 'none',\n        color: boxPalette.foregroundText\n      }\n    }} gap={SIZE_MAP[size].gap} href=\"#\" justifyContent=\"flex-start\" key={size} link>\n                    <Avatar name={name} size={size} tone={tone} />\n                    <Text color={TONE_MAP[tone]} fontSize={SIZE_MAP[size].fontSize} fontWeight=\"bold\">\n                        {name}\n                    </Text>\n                </Flex>)}\n        </Stack>;\n}",...CompositeNamesLinks.parameters?.docs?.source}}}},"./packages/react/src/avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts");var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function Avatar({name,tone:toneProp="neutral",size:sizeProp="md","aria-hidden":ariaHidden,"aria-label":ariaLabel}){const initials=function getInitialsFromName(name){const matches=Array.from(name.matchAll(new RegExp(/(\p{L})\p{L}+/,"gu")));return matches.length?((matches.shift()?.[1]||"")+(matches.pop()?.[1]||"")).toUpperCase():"?"}(name),color=TONE_PROP[toneProp],{size,fontSize}=SIZE_MAP[sizeProp];return(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignItems:"center","aria-hidden":ariaHidden,"aria-label":ariaLabel,as:"span",css:(0,emotion_react_browser_esm.AH)({textDecoration:"none",height:`${size}rem`,width:`${size}rem`,borderRadius:"50%",borderStyle:"solid",borderWidth:core.tokens.borderWidth.sm,borderColor:color,color},"",""),flexShrink:0,fontSize,fontWeight:"bold",justifyContent:"center",children:initials})}const TONE_PROP={neutral:core.boxPalette.foregroundMuted,action:core.boxPalette.foregroundAction},SIZE_MAP={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}}},"./packages/react/src/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const Text=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Text(_ref,ref){let{as="span",color="text",fontFamily="body",fontSize="sm",fontWeight="normal",lineHeight="default"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({as,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))}))},"./packages/react/src/text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Text:()=>_Text__WEBPACK_IMPORTED_MODULE_0__.E});var _Text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/Text.tsx")}}]);