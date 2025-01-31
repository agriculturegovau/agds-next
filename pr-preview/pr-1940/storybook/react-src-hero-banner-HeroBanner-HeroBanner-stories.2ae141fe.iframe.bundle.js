"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[1331],{"./packages/react/src/hero-banner/HeroBanner/HeroBanner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,OnBodyAlt:()=>OnBodyAlt,WithButtons:()=>WithButtons,WithoutImage:()=>WithoutImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_search_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/search-box/index.ts"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/index.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/box/index.ts"),_HeroBanner__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/hero-banner/HeroBanner/HeroBanner.tsx"),_HeroBannerTitle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/hero-banner/HeroBanner/HeroBannerTitle.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const _excluded=["title","subtitle","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Template(_ref){let{title,subtitle,children}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)(_HeroBanner__WEBPACK_IMPORTED_MODULE_4__.H,_objectSpread(_objectSpread({},props),{},{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)(_HeroBannerTitle__WEBPACK_IMPORTED_MODULE_5__.sq,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_HeroBannerTitle__WEBPACK_IMPORTED_MODULE_5__.tn,{children:title}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_HeroBannerTitle__WEBPACK_IMPORTED_MODULE_5__.tJ,{children:subtitle})]}),children]}))}const __WEBPACK_DEFAULT_EXPORT__={title:"layout/HeroBanner/HeroBanner",component:_HeroBanner__WEBPACK_IMPORTED_MODULE_4__.H,parameters:{layout:"fullscreen"},args:{title:"Website hero banner title - xxxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)("img",{alt:"",role:"presentation",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"}),children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)(_search_box__WEBPACK_IMPORTED_MODULE_1__.Gd,{onSubmit:console.log,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_search_box__WEBPACK_IMPORTED_MODULE_1__.qL,{label:"Search this website"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_search_box__WEBPACK_IMPORTED_MODULE_1__.mr,{iconOnly:{xs:!0,md:!1},children:"Search"})]})},render:Template},Basic={args:{}},OnBodyAlt={name:"On bodyAlt background",args:{background:"body"},render:args=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_box__WEBPACK_IMPORTED_MODULE_3__.Box,{background:"bodyAlt",paddingY:3,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(Template,_objectSpread({},args))})},WithButtons={args:{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.FD)(_button__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_button__WEBPACK_IMPORTED_MODULE_2__.Button,{children:"Primary button"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Y)(_button__WEBPACK_IMPORTED_MODULE_2__.Button,{variant:"secondary",children:"Secondary button"})]})}},WithoutImage={args:{image:void 0}},__namedExportsOrder=["Basic","OnBodyAlt","WithButtons","WithoutImage"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Basic.parameters?.docs?.source}}},OnBodyAlt.parameters={...OnBodyAlt.parameters,docs:{...OnBodyAlt.parameters?.docs,source:{originalSource:"{\n  name: 'On bodyAlt background',\n  args: {\n    background: 'body'\n  },\n  render: args => <Box background=\"bodyAlt\" paddingY={3}>\n            <Template {...args} />\n        </Box>\n}",...OnBodyAlt.parameters?.docs?.source}}},WithButtons.parameters={...WithButtons.parameters,docs:{...WithButtons.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <ButtonGroup>\n                <Button>Primary button</Button>\n                <Button variant="secondary">Secondary button</Button>\n            </ButtonGroup>\n  }\n}',...WithButtons.parameters?.docs?.source}}},WithoutImage.parameters={...WithoutImage.parameters,docs:{...WithoutImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    image: undefined\n  }\n}",...WithoutImage.parameters?.docs?.source}}}},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const ButtonGroup=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{alignItems:["stretch","center"],flexDirection:["column","row"],gap:1,children})},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.$,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,ButtonLink:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.v,SC:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.S,VV:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.VV});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.ts")},"./packages/react/src/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Heading,H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,H5:()=>H5,H6:()=>H6,x:()=>headingFontSizeMap});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const headingFontSizeMap={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},Heading=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)((function Heading(_ref,ref){let{as:ComponentTag,type="h2",color="text",fontSize:__fontSize,fontFamily="body",fontWeight="bold",lineHeight="heading"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);const Tag=ComponentTag??type,fontSize=__fontSize??headingFontSizeMap[type];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,_objectSpread({as:Tag,color,fontFamily,fontSize,fontWeight,lineHeight,ref},props))})),H1=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h1",ref,type:"h1"},props)))),H2=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h2",ref,type:"h2"},props)))),H3=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h3",ref,type:"h3"},props)))),H4=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h4",ref,type:"h4"},props)))),H5=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h5",ref,type:"h5"},props)))),H6=(0,_core__WEBPACK_IMPORTED_MODULE_1__.FX)(((props,ref)=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(Heading,_objectSpread({as:"h6",ref,type:"h6"},props))))},"./packages/react/src/heading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H1,H2:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H2,H3:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.H3,Heading:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.D,x:()=>_Heading__WEBPACK_IMPORTED_MODULE_0__.x});var _Heading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/heading/Heading.tsx")},"./packages/react/src/hero-banner/HeroBanner/HeroBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>HeroBanner});var _HeroBannerContent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/hero-banner/HeroBanner/HeroBannerContent.tsx"),_HeroBannerMobileImage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/hero-banner/HeroBanner/HeroBannerMobileImage.tsx"),_HeroBannerContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/hero-banner/HeroBanner/HeroBannerContainer.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroBanner=({image,background="bodyAlt",children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.FD)(_HeroBannerContainer__WEBPACK_IMPORTED_MODULE_2__.U,{background,children:[image?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_HeroBannerMobileImage__WEBPACK_IMPORTED_MODULE_1__.u,{children:image}):null,(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_HeroBannerContent__WEBPACK_IMPORTED_MODULE_0__.a,{background,image,children})]})},"./packages/react/src/hero-banner/HeroBanner/HeroBannerContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>HeroBannerContainer});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"vabva8",styles:"position:relative;overflow:hidden"};const HeroBannerContainer=({children,background})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as:"section",background,css:_ref,children})},"./packages/react/src/hero-banner/HeroBanner/HeroBannerContent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>HeroBannerContent});var _emotion_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/core/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/flex/index.ts"),_stack__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/stack/index.ts"),_content__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/content/index.ts"),_HeroBannerImage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/hero-banner/HeroBanner/HeroBannerImage.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroBannerContent=({children,image,background})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_content__WEBPACK_IMPORTED_MODULE_3__.U,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_flex__WEBPACK_IMPORTED_MODULE_1__.Flex,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_stack__WEBPACK_IMPORTED_MODULE_2__.Stack,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)({zIndex:_core__WEBPACK_IMPORTED_MODULE_0__.tokens.zIndex.elevated},"",""),gap:2,paddingBottom:{xs:3,md:4},paddingTop:{xs:2,md:4},width:["100%","100%",image?"60%":"100%"],children}),image?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_HeroBannerImage__WEBPACK_IMPORTED_MODULE_4__.Q,{background,children:image}):null]})})},"./packages/react/src/hero-banner/HeroBanner/HeroBannerImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>HeroBannerImage});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/hero-banner/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroBannerImage=({children,background})=>{const backgroundVar=_utils__WEBPACK_IMPORTED_MODULE_2__.V[background];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)({position:"absolute",top:0,right:0,bottom:0,"&::after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:`linear-gradient(90deg, ${_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette[backgroundVar]} 0px, rgba(255, 255, 255, 0.0) 360px)`},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),display:["none","none","block"],width:"40%",children})}},"./packages/react/src/hero-banner/HeroBanner/HeroBannerMobileImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>HeroBannerMobileImage});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"};const HeroBannerMobileImage=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{css:_ref,display:{xs:"block",md:"none"},children})},"./packages/react/src/hero-banner/HeroBanner/HeroBannerTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sq:()=>HeroBannerTitleContainer,tJ:()=>HeroBannerSubtitle,tn:()=>HeroBannerTitle});var _stack__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/stack/index.ts"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_heading__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/heading/index.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const HeroBannerTitleContainer=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_stack__WEBPACK_IMPORTED_MODULE_0__.Stack,{gap:1.5,children}),HeroBannerTitle=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_heading__WEBPACK_IMPORTED_MODULE_2__.Heading,{fontSize:"xxxl",type:"h1",children}),HeroBannerSubtitle=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)(_text__WEBPACK_IMPORTED_MODULE_3__.Text,{as:"p",fontSize:"md",maxWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.maxWidth.bodyText,children})},"./packages/react/src/hero-banner/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>backgroundMap});const backgroundMap={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"}},"./packages/react/src/search-box/SearchBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>SearchBox});var _flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/flex/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const SearchBox=({"aria-label":ariaLabel="Sitewide",children,onSubmit})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)("form",{"aria-label":ariaLabel,onSubmit,role:"search",children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_flex__WEBPACK_IMPORTED_MODULE_0__.Flex,{alignItems:"flex-end",children})})},"./packages/react/src/search-box/SearchBoxButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>SearchBoxButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/index.ts"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/index.ts"),_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref={name:"bjn8wh",styles:"position:relative"};const SearchBoxButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function SearchBoxButton({children,iconOnly},ref){const buttonStyles=getButtonStyles({iconOnly});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,{borderLeft:!0,borderWidth:"lg",css:_ref,flexShrink:0,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.FD)(_button__WEBPACK_IMPORTED_MODULE_1__.Button,{"aria-label":children,css:buttonStyles,ref,type:"submit",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("span",{children}),iconOnly?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_icon__WEBPACK_IMPORTED_MODULE_3__.WI,{size:"md"}):null]})})})),getButtonStyles=({iconOnly})=>(0,_core__WEBPACK_IMPORTED_MODULE_4__.mq)({borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_4__.QY)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_4__.QY)(1),"& span > span > span":{display:(0,_core__WEBPACK_IMPORTED_MODULE_4__.AY)(iconOnly,(value=>value?"none":"block"))},"& svg":{display:(0,_core__WEBPACK_IMPORTED_MODULE_4__.AY)(iconOnly,(value=>value?"block":"none"))}})},"./packages/react/src/search-box/SearchBoxInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SearchBoxInput});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),text_input=__webpack_require__("./packages/react/src/text-input/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const SearchBoxLabel=({children,htmlFor,visible})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{as:"label",css:visible?{marginBottom:(0,core.QY)(.5)}:a11y.O_,fontWeight:"bold",htmlFor,children}),_excluded=["label","labelVisible","id"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const SearchBoxInput=(0,react.forwardRef)((function SearchBoxInput(_ref,ref){let{label="Search",labelVisible=!1,id}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const inputId=useInputId(id),styles=inputStyles();return(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{width:"100%",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(SearchBoxLabel,{htmlFor:inputId,visible:labelVisible,children:label}),(0,emotion_react_jsx_runtime_browser_esm.Y)("input",_objectSpread({autoComplete:"off",css:styles,id:inputId,ref,type:"search"},props))]})})),useInputId=idProp=>{const autoId=(0,core.Bi)();return idProp||`search-${autoId}`},inputStyles=()=>_objectSpread(_objectSpread({},(0,text_input.E)({block:!0})),{},{borderRightWidth:0,borderTopRightRadius:0,borderBottomRightRadius:0,color:core.ly.lightForegroundText,background:core.ly.lightBackgroundBody,"&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{display:"none"}})},"./packages/react/src/search-box/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gd:()=>_SearchBox__WEBPACK_IMPORTED_MODULE_0__.G,mr:()=>_SearchBoxButton__WEBPACK_IMPORTED_MODULE_1__.m,qL:()=>_SearchBoxInput__WEBPACK_IMPORTED_MODULE_2__.q});var _SearchBox__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/search-box/SearchBox.tsx"),_SearchBoxButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/search-box/SearchBoxButton.tsx"),_SearchBoxInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/search-box/SearchBoxInput.tsx")},"./packages/react/src/text-input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>textInputStyles,k:()=>TextInput});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextInput(_ref,ref){let{label,hideOptionalLabel,required,hint,message,invalid,block,maxWidth="md",id,type="text"}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);const styles=textInputStyles({block,maxWidth});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_field__WEBPACK_IMPORTED_MODULE_2__.D0,{hideOptionalLabel,hint,id,invalid,label,maxWidth,message,required,children:a11yProps=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)("input",_objectSpread(_objectSpread({css:styles,ref},a11yProps),{},{type},props))})})),textInputStyles=({block,maxWidth,multiline})=>_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(1),margin:0,background:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundBody,borderWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderWidth.lg,borderStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.border,borderRadius:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderRadius,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.font.body},_core__WEBPACK_IMPORTED_MODULE_3__.tm.input.md),maxWidth&&{maxWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.maxWidth.field[maxWidth]}),block&&{maxWidth:"none",display:"block",width:"100%"}),multiline&&{paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(.5),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_3__.QY)(.5),height:"auto",minHeight:"6rem"}),{},{'&[aria-invalid="true"]':{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.systemError},"&:disabled":{cursor:"not-allowed",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.borderMuted,backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundShade,color:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.foregroundMuted},"&:focus":_core__WEBPACK_IMPORTED_MODULE_3__.tm.outline})},"./packages/react/src/text-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.E,TextInput:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.k});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-input/TextInput.tsx")}}]);