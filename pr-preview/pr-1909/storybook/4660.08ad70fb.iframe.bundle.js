"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[4660],{"./packages/react/src/global-alert/GlobalAlert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>GlobalAlert});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),heading=__webpack_require__("./packages/react/src/heading/index.ts"),getCloseHandler=__webpack_require__("./packages/react/src/getCloseHandler.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function GlobalAlertCloseButton({onClick}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(src_button.Button,{"aria-label":"Close",onClick,iconAfter:icon.US,variant:"text",css:(0,core.mq)({flexShrink:0,position:"absolute",top:(0,core.mapSpacing)(1.5),right:(0,core.mapSpacing)(1.5),[core.tokens.mediaQuery.min.lg]:{position:"static",top:"auto",right:"auto"},"& > span:first-of-type":{display:"none",[core.tokens.mediaQuery.min.lg]:{display:"block"}}}),children:"Close"})}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref={name:"bjn8wh",styles:"position:relative"};function GlobalAlert({children,onDismiss,onClose,title,tone="warning"}){const{ariaLabel,bg,fg,Icon}=toneMap[tone],closeHandler=(0,getCloseHandler.NZ)(onClose,onDismiss),addTitleMargin=Boolean(closeHandler),addContentMargin=Boolean(closeHandler&&!title);return(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{as:"section","aria-label":title||ariaLabel,css:(0,emotion_react_browser_esm.AH)({backgroundColor:bg},"",""),highContrastOutline:!0,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(flex.Flex,{alignItems:"center",justifyContent:"center",padding:.75,flexShrink:0,css:(0,emotion_react_browser_esm.AH)({backgroundColor:fg,color:core.boxPalette.backgroundBody},"",""),children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Icon,{"aria-hidden":"false","aria-label":ariaLabel,color:"inherit"})}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{flexGrow:1,alignItems:"flex-start",padding:1.5,gap:2,css:_ref,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{flexGrow:1,gap:.75,children:[title?(0,emotion_react_jsx_runtime_browser_esm.Y)(heading.Heading,{as:"h2",type:"h3",maxWidth:core.tokens.maxWidth.bodyText,css:(0,emotion_react_browser_esm.AH)(_objectSpread({},addTitleMargin&&{marginRight:"2.5rem",[core.tokens.mediaQuery.min.lg]:{marginRight:0}}),"",""),children:title}):null,(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{maxWidth:core.tokens.maxWidth.bodyText,css:(0,emotion_react_browser_esm.AH)(_objectSpread({},addContentMargin&&{marginRight:"2.5rem",[core.tokens.mediaQuery.min.lg]:{marginRight:0}}),"",""),children})]}),closeHandler?(0,emotion_react_jsx_runtime_browser_esm.Y)(GlobalAlertCloseButton,{onClick:closeHandler}):null]})]})}const toneMap={info:{ariaLabel:"Information",bg:core.boxPalette.systemInfoMuted,fg:core.boxPalette.systemInfo,Icon:icon.ET},warning:{ariaLabel:"Warning",bg:core.boxPalette.systemWarningMuted,fg:core.boxPalette.systemWarning,Icon:icon.WarningFilledIcon}}}}]);