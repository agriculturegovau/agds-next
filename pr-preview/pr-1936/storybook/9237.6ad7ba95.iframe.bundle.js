"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[9237],{"./packages/react/src/table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Table});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_TableContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/table/TableContext.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Table=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function Table({children,striped,tabIndex,tableLayout="auto","aria-labelledby":ariaLabelledby,"aria-describedby":ariaDescribedby,"aria-rowcount":ariaRowcount,id},ref){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_TableContext__WEBPACK_IMPORTED_MODULE_4__.G.Provider,{value:{tableLayout},children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Y)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,{"aria-describedby":ariaDescribedby,"aria-labelledby":ariaLabelledby,"aria-rowcount":ariaRowcount,as:"table",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.AH)(_objectSpread({borderCollapse:"collapse",borderSpacing:0,tableLayout},striped&&{"tbody tr:nth-last-of-type(odd):not([aria-selected='true'])":{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__.boxPalette.backgroundShade}}),"",""),display:"table",focusRingFor:"keyboard",fontSize:"sm",id,ref,tabIndex,width:"100%",children})})}))},"./packages/react/src/table/TableBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>TableBody});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TableBody=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as:"tbody",display:"table-row-group",children})},"./packages/react/src/table/TableCaption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>TableCaption});var _text__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TableCaption=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_text__WEBPACK_IMPORTED_MODULE_0__.Text,{as:"caption",display:"table-caption",fontSize:"md",fontWeight:"bold",paddingBottom:.5,textAlign:"left",children})},"./packages/react/src/table/TableCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>TableCell});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TableCell=({as="td",children,colSpan,display,fontWeight="normal",id,rowSpan,scope,textAlign="left",verticalAlign="top"})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as,borderBottom:!0,borderColor:"muted",colSpan,color:"text",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)({verticalAlign},"",""),display,focusRingFor:"keyboard",fontWeight,id,padding:.75,rowSpan,scope,textAlign,children})},"./packages/react/src/table/TableContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useTableContext,G:()=>TableContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const TableContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function useTableContext(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TableContext);if(void 0===context)throw Error("TableContext not found.");return context}},"./packages/react/src/table/TableHead.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>TableHead});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const TableHead=({children})=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(_box__WEBPACK_IMPORTED_MODULE_0__.Box,{as:"thead",borderBottom:!0,borderBottomWidth:"xl",borderColor:"muted",display:"table-header-group",children})},"./packages/react/src/table/TableHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TableHeader});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["as","children","colSpan","rowSpan","scope","textAlign","width"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TableHeader=_ref=>{let{as="th",children,colSpan,rowSpan,scope,textAlign="left",width}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Y)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,_objectSpread(_objectSpread({as,colSpan,color:"text",focusRingFor:"keyboard",fontWeight:"bold",padding:.75,rowSpan,scope,textAlign,width},props),{},{children}))}},"./packages/react/src/table/TableHeaderSortable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>TableHeaderSortable});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/box/index.ts"),_flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/flex/index.ts"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/index.ts"),_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/core/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/icon/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TableHeaderSortable=({children,display,onClick,sort,textAlign="left",width})=>{const Icon=getSortIcon(sort),sortLabel=getSortLabel(sort);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{"aria-sort":sortLabel,as:"th",borderBottom:!0,borderBottomWidth:sort?"xl":"none",borderColor:"selected",display,scope:"col",width,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.FD)(_flex__WEBPACK_IMPORTED_MODULE_2__.Flex,{alignItems:"center",as:_button__WEBPACK_IMPORTED_MODULE_3__.SC,color:"text",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)(_objectSpread(_objectSpread({},_core__WEBPACK_IMPORTED_MODULE_4__.tm.underline),{},{svg:{color:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.foregroundAction},"&:hover":{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.backgroundShade,textDecoration:"none",svg:{color:_core__WEBPACK_IMPORTED_MODULE_4__.boxPalette.foregroundText}}}),"",""),focusRingFor:"keyboard",fontWeight:"bold",gap:.5,justifyContent:"space-between",onClick,padding:.75,width:"100%",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(_box__WEBPACK_IMPORTED_MODULE_1__.Box,{as:"span",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH)({marginLeft:"right"===textAlign||"center"===textAlign?"auto":void 0,marginRight:"center"===textAlign?"auto":void 0},"",""),textAlign,children}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Y)(Icon,{color:"inherit",size:"md"})]})})},getSortLabel=sort=>"ASC"===sort?"ascending":"DESC"===sort?"descending":void 0,getSortIcon=sort=>{switch(sort){case"ASC":return _icon__WEBPACK_IMPORTED_MODULE_5__.Kp;case"DESC":return _icon__WEBPACK_IMPORTED_MODULE_5__.ZL;default:return _icon__WEBPACK_IMPORTED_MODULE_5__.qd}}},"./packages/react/src/table/TableRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>TableRow});var _home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/core/index.ts"),_ag_branding__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/ag-branding/index.ts"),_TableContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/table/TableContext.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function TableRow({"aria-rowindex":ariaRowindex,children,invalid,selected}){const{tableLayout}=(0,_TableContext__WEBPACK_IMPORTED_MODULE_3__.$)();return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Y)("tr",{"aria-rowindex":ariaRowindex,"aria-selected":selected,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.AH)(_objectSpread(_objectSpread({},selected&&_objectSpread(_objectSpread(_objectSpread({},"auto"===tableLayout&&{position:"relative",backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.selectedMuted,"&::after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,borderWidth:_core__WEBPACK_IMPORTED_MODULE_1__.tokens.borderWidth.md,borderColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.selected,borderStyle:"solid"},":has(+ tr[aria-selected='true'])::after":{borderBottomWidth:0},"+ tr::after":{borderTopWidth:0}}),"fixed"===tableLayout&&alternativeSelectedStyles),{},{"@supports (-webkit-appearance: -apple-pay-button)":alternativeSelectedStyles})),invalid&&{background:_ag_branding__WEBPACK_IMPORTED_MODULE_2__.w.lightSystemErrorMuted}),"",""),children})}const alternativeSelectedStyles={backgroundColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.selectedMuted,outlineWidth:"2px",outlineStyle:"solid",outlineColor:_core__WEBPACK_IMPORTED_MODULE_1__.boxPalette.selected,outlineOffset:"-3px","&::after":{display:"none"}}},"./packages/react/src/table/TableWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TableWrapper});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref={name:"pw7jst",styles:"position:relative;width:100%"},_ref2={name:"a70l0o",styles:"-ms-overflow-style:none;overflow-x:auto;overscroll-behavior-x:none;scrollbar-width:none;-webkit-overflow-scrolling:touch;width:100%;&::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track{display:none;}"};function TableScroller({children}){const trackRef=(0,react.useRef)(null),thumbRef=(0,react.useRef)(null),scrollerRef=(0,react.useRef)(null),mousePos=(0,react.useRef)({x:0,y:0}),{0:shadowHeight,1:setShadowHeight}=(0,react.useState)(0),{0:scrollerAriaLabel,1:setScrollerAriaLabel}=(0,react.useState)(""),{0:isDraggingThumb,1:setIsDraggingThumb}=(0,react.useState)(!1),{0:thumbPosition,1:setThumbPosition}=(0,react.useState)(0),{0:thumbWidthRatio,1:setThumbWidthRatio}=(0,react.useState)(1),{0:buttonIntervalId,1:setButtonIntervalId}=(0,react.useState)(null),repositionThumb=(0,react.useCallback)((()=>{scrollerRef?.current&&setThumbPosition(scrollerRef.current.scrollLeft*thumbWidthRatio)}),[thumbWidthRatio]),calculateThumbWidth=(0,react.useCallback)((()=>{scrollerRef?.current&&trackRef?.current&&(scrollerRef.current.offsetWidth===scrollerRef.current.scrollWidth?setThumbWidthRatio(1):setThumbWidthRatio(trackRef.current.offsetWidth/(scrollerRef.current.scrollWidth-(scrollerRef.current.offsetWidth-trackRef.current.offsetWidth))))}),[]);(0,react.useEffect)((()=>{if("undefined"==typeof window||!("ResizeObserver"in window)||!scrollerRef.current)return;const observer=new ResizeObserver((entry=>{setShadowHeight(entry[0].contentRect.height),calculateThumbWidth(),repositionThumb()}));return observer.observe(scrollerRef.current),()=>{observer.disconnect()}}),[calculateThumbWidth,repositionThumb]);const handleThumbPress=event=>{event.preventDefault(),setIsDraggingThumb(!0),"mousedown"===event.type&&"button"in event&&0===event.button?mousePos.current={x:event.pageX,y:event.pageY}:"touchstart"===event.type&&"touches"in event&&(mousePos.current={x:event.touches[0].pageX,y:event.touches[0].pageY})},handleThumbMove=(0,react.useCallback)((event=>{if(!scrollerRef?.current)return;let pageX="pageX"in event?event.pageX:null,pageY="pageY"in event?event.pageY:null;const touches="touches"in event?event.touches:null;if(isDraggingThumb){if(pageX=touches?touches[0].pageX:pageX,pageY=touches?touches[0].pageY:pageY,null===pageX||null===pageY)return;const deltaX=pageX-mousePos.current.x,deltaY=pageY-mousePos.current.y;Math.abs(deltaX)>Math.abs(deltaY)&&(event.preventDefault(),scrollerRef.current.scrollLeft=scrollerRef.current.scrollLeft+deltaX/thumbWidthRatio,mousePos.current.x=pageX),mousePos.current.y=pageY}}),[isDraggingThumb,thumbWidthRatio]),handleThumbRelease=(0,react.useCallback)((()=>{isDraggingThumb&&setIsDraggingThumb(!1)}),[isDraggingThumb]);(0,react.useEffect)((()=>(isDraggingThumb?(document.addEventListener("mousemove",handleThumbMove),document.addEventListener("mouseup",handleThumbRelease),document.addEventListener("touchmove",handleThumbMove),document.addEventListener("touchend",handleThumbRelease)):(document.removeEventListener("mousemove",handleThumbMove),document.removeEventListener("mouseup",handleThumbRelease),document.removeEventListener("touchmove",handleThumbMove),document.removeEventListener("touchend",handleThumbRelease)),()=>{document.removeEventListener("mousemove",handleThumbMove),document.removeEventListener("mouseup",handleThumbRelease),document.removeEventListener("touchmove",handleThumbMove),document.removeEventListener("touchend",handleThumbRelease)})),[handleThumbMove,handleThumbRelease,isDraggingThumb]);const handleButtonClick=direction=>{const scrollAmount="left"===direction?-40:40;scrollerRef.current&&(scrollerRef.current.scrollLeft+=scrollAmount),buttonIntervalId&&(clearInterval(buttonIntervalId),setButtonIntervalId(null))},handleButtonPress=(event,direction)=>{const scrollAmount="left"===direction?-40:40,intervalId=window.setInterval((()=>{scrollerRef.current&&("touchstart"===event.type||"mousedown"===event.type&&"button"in event&&0===event.button)&&(scrollerRef.current.scrollLeft+=scrollAmount)}),100);setButtonIntervalId(intervalId)},handleButtonRelease=()=>{buttonIntervalId&&(clearInterval(buttonIntervalId),setButtonIntervalId(null))},hasScroll=1!==thumbWidthRatio;return(0,react.useEffect)((()=>{let ariaLabel;const captionEl=scrollerRef.current?.querySelector("caption");if(captionEl)ariaLabel=captionEl?.textContent;else{const ariaLabelledbyTableEl=scrollerRef.current?.querySelector("table[aria-labelledby]");ariaLabelledbyTableEl&&(ariaLabel=document.getElementById(ariaLabelledbyTableEl.getAttribute("aria-labelledby")||"")?.textContent)}setScrollerAriaLabel(`Table ${ariaLabel||""}`)}),[]),(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{css:_ref,gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.FD)(box.Box,{"aria-label":scrollerAriaLabel,as:"section",css:_ref2,focusRingFor:"keyboard",onScroll:repositionThumb,ref:scrollerRef,tabIndex:hasScroll?0:-1,children:[children,(0,emotion_react_jsx_runtime_browser_esm.Y)(Shadow,{edge:"left",height:shadowHeight,isVisible:Boolean(thumbWidthRatio<1&&scrollerRef?.current?.scrollLeft&&scrollerRef.current.scrollLeft>0)}),(0,emotion_react_jsx_runtime_browser_esm.Y)(Shadow,{edge:"right",height:shadowHeight,isVisible:Boolean(thumbWidthRatio<1&&scrollerRef?.current?.offsetWidth&&Math.ceil(scrollerRef.current.scrollLeft+scrollerRef.current.offsetWidth)<scrollerRef.current.scrollWidth)})]}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{alignItems:"center",background:"body",css:(0,emotion_react_browser_esm.AH)({bottom:0,display:hasScroll?void 0:"none",left:0,position:"sticky",right:0},"",""),flexWrap:"nowrap",gap:.25,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-hidden":!0,as:"button",css:(0,emotion_react_browser_esm.AH)({appearance:"none",background:"none",cursor:"default",height:pxToRem(24),width:pxToRem(24)},"",""),onClick:()=>handleButtonClick("left"),onMouseDown:event=>handleButtonPress(event,"left"),onMouseLeave:handleButtonRelease,onMouseUp:handleButtonRelease,onTouchEnd:handleButtonRelease,onTouchStart:event=>handleButtonPress(event,"left"),tabIndex:-1,type:"button",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.uH,{color:"border"})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-hidden":!0,background:"shade",border:!0,css:(0,emotion_react_browser_esm.AH)({borderRadius:999,height:pxToRem(12),padding:0,position:"relative",flexGrow:1},"",""),onClick:event=>{if(!scrollerRef?.current||!thumbRef?.current)return;const thumbDimensions=thumbRef.current.getBoundingClientRect();event.pageX>thumbDimensions.right?scrollerRef.current.scrollLeft+=.95*thumbDimensions.width:event.pageX<thumbDimensions.left&&(scrollerRef.current.scrollLeft-=.95*thumbDimensions.width)},ref:trackRef,tabIndex:-1,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-hidden":!0,as:"button",css:(0,emotion_react_browser_esm.AH)({appearance:"none",background:core.boxPalette.border,border:"none",borderRadius:999,bottom:0,cursor:"default",padding:0,position:"absolute",top:0,touchAction:"none","@media (forced-colors: active)":{backgroundColor:"CaptionText"}},"",""),onMouseDown:handleThumbPress,onTouchStart:handleThumbPress,ref:thumbRef,style:{left:thumbPosition,width:100*thumbWidthRatio+"%"},tabIndex:-1,type:"button"})}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-hidden":!0,as:"button",css:(0,emotion_react_browser_esm.AH)({appearance:"none",background:"none",cursor:"default",height:pxToRem(24),width:pxToRem(24)},"",""),onClick:()=>handleButtonClick("right"),onMouseDown:event=>handleButtonPress(event,"right"),onMouseLeave:handleButtonRelease,onMouseUp:handleButtonRelease,onTouchEnd:handleButtonRelease,onTouchStart:event=>handleButtonPress(event,"right"),tabIndex:-1,type:"button",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.JG,{color:"border"})})]})]})}function Shadow({edge,height,isVisible}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{css:(0,emotion_react_browser_esm.AH)(_objectSpread({height,opacity:isVisible?1:0,pointerEvents:"none",position:"absolute",top:0,transition:`opacity ${core.tokens.transition.duration}ms ${core.tokens.transition.timingFunction}`,width:28},"left"===edge?{background:"linear-gradient(to right, rgba(0, 0, 0, 0.08), transparent)",left:0}:{background:"linear-gradient(to left, rgba(0, 0, 0, 0.08), transparent)",right:0}),"","")})}function pxToRem(px){return px/16+"rem"}const TableWrapper=({children})=>(0,emotion_react_jsx_runtime_browser_esm.Y)(TableScroller,{children})},"./packages/react/src/table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>Table.X,Zk:()=>TableBatchActionsBar,qB:()=>TableBatchActionsTitle,BF:()=>TableBody.B,r6:()=>TableCaption.r,nA:()=>TableCell.n,nd:()=>TableHead.n,A0:()=>TableHeader.A,a9:()=>TableHeaderSortable.a,Hj:()=>TableRow.H,AC:()=>TableWrapper.A});var Table=__webpack_require__("./packages/react/src/table/Table.tsx"),TableHeader=__webpack_require__("./packages/react/src/table/TableHeader.tsx"),TableCaption=__webpack_require__("./packages/react/src/table/TableCaption.tsx"),TableHead=__webpack_require__("./packages/react/src/table/TableHead.tsx"),TableBody=__webpack_require__("./packages/react/src/table/TableBody.tsx"),TableHeaderSortable=__webpack_require__("./packages/react/src/table/TableHeaderSortable.tsx"),TableRow=__webpack_require__("./packages/react/src/table/TableRow.tsx"),TableCell=__webpack_require__("./packages/react/src/table/TableCell.tsx"),TableWrapper=__webpack_require__("./packages/react/src/table/TableWrapper.tsx"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function TableBatchActionsBar({children}){const ref=(0,react.useRef)(null),{0:isSticky,1:setIsSticky}=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(!ref.current)return;const observer=new IntersectionObserver((([e])=>setIsSticky(e.intersectionRatio<1)),{threshold:[1]});return observer.observe(ref.current),()=>observer.disconnect()}),[]),(0,emotion_react_jsx_runtime_browser_esm.Y)(stack.Stack,{background:"bodyAlt",border:!0,borderColor:"muted",borderWidth:"sm",css:(0,emotion_react_browser_esm.AH)(_objectSpread({position:"sticky",bottom:-1},isSticky&&{borderBottomLeftRadius:0,borderBottomRightRadius:0,borderBottomWidth:0,boxShadow:"0 -2px 4px rgba(0, 0, 0, 0.3)"}),"",""),gap:1,padding:1,ref,rounded:!0,children})}var src_text=__webpack_require__("./packages/react/src/text/index.ts");function TableBatchActionsTitle({children}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(src_text.Text,{as:"h3",fontSize:"md",fontWeight:"bold",lineHeight:"heading",children})}}}]);