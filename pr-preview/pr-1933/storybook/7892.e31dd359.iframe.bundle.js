"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[7892],{"./packages/react/src/date-picker-next/Calendar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eS:()=>CalendarRange,ND:()=>CalendarSingle});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),objectWithoutProperties=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es2015=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),index_esm=__webpack_require__("./node_modules/react-day-picker/dist/index.esm.js"),getYear=__webpack_require__("./node_modules/date-fns/esm/getYear/index.js"),getMonth=__webpack_require__("./node_modules/date-fns/esm/getMonth/index.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),getUnixTime=__webpack_require__("./node_modules/date-fns/esm/getUnixTime/index.js"),core=__webpack_require__("./packages/react/src/core/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const reactDayPickerStyles={".rdp-vhidden":a11y.O_,".rdp-button_reset":{appearance:"none",background:"none",border:"none",margin:0,padding:0,cursor:"pointer",color:"inherit",font:"inherit"},".rdp-caption":{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:(0,core.QY)(.5)},".rdp-caption_label":_objectSpread({zIndex:core.tokens.zIndex.elevated,whiteSpace:"nowrap",margin:0,color:core.boxPalette.foregroundText,fontWeight:core.tokens.fontWeight.bold},(0,core.qW)("lg","nospace")),".rdp-nav_button":_objectSpread({position:"absolute",top:0,display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:core.tokens.borderRadius,color:core.boxPalette.foregroundAction,"&:hover":{color:core.boxPalette.foregroundText}},box.T7),".rdp-nav_button_previous":{left:0},".rdp-nav_button_next":{right:0},".rdp-head_cell":_objectSpread({color:core.boxPalette.foregroundMuted,fontWeight:core.tokens.fontWeight.normal,height:"2.75rem",margin:0,padding:0,width:"2.75rem","@media (min-width: 375px)":{height:"3rem",width:"3rem"}},(0,core.qW)("sm","default")),".rdp-day":_objectSpread(_objectSpread({borderRadius:core.tokens.borderRadius,boxSizing:"border-box",color:core.boxPalette.foregroundAction,cursor:"pointer",height:"2.75rem",padding:0,position:"relative",textAlign:"center",verticalAlign:"middle",width:"2.75rem","&[disabled]":{color:core.boxPalette.foregroundText,opacity:.3,cursor:"not-allowed"},"&:not([disabled], :focus):hover":_objectSpread(_objectSpread({backgroundColor:core.boxPalette.backgroundShade,color:core.boxPalette.foregroundText,fontWeight:"bold",textDecoration:"underline",zIndex:core.tokens.zIndex.elevated},box.VQ),{},{"&::before":{backgroundColor:core.boxPalette.backgroundShade,borderColor:core.boxPalette.selected,borderRadius:"0.25rem",borderStyle:"solid",borderWidth:core.tokens.borderWidth.lg,content:'""',inset:0,pointerEvents:"none",position:"absolute",zIndex:-1}}),"&:focus":{zIndex:core.tokens.zIndex.elevated},"& span":{alignItems:"center",display:"flex",height:"2.75rem",justifyContent:"center",position:"relative",width:"2.75rem","@media (min-width: 375px)":{height:"3rem",width:"3rem"},"::before":{content:'""',inset:0,position:"absolute"}},"@media (min-width: 375px)":{height:"3rem",width:"3rem"}},box.T7),{},{"&.rdp-day_today":{fontWeight:core.tokens.fontWeight.bold,"&::after":_objectSpread({backgroundColor:"currentColor",borderRadius:"0.25rem",bottom:"0.3rem",content:'""',left:"50%",height:"0.5rem",marginLeft:"-0.25rem",position:"absolute",width:"0.5rem"},box.VQ)}}),".rdp-day_outside":{cursor:"default"},".rdp-months":{display:"flex",height:"21.5rem","@media (min-width: 375px)":{height:"23.5rem"}},".rdp-month":{margin:`0 ${(0,core.QY)(1)}`,"&:first-of-type":{marginLeft:0},"&:last-of-type":{marginRight:0}},".rdp-table":{margin:0,width:"calc(2.75rem * 7)",borderCollapse:"collapse",tableLayout:"fixed","@media (min-width: 375px)":{width:"calc(3rem * 7)"}},".rdp-tbody":{border:0},".rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])":{backgroundColor:core.boxPalette.selected,color:core.boxPalette.backgroundBody,fontWeight:core.tokens.fontWeight.bold,"&::before":_objectSpread({content:'""',inset:0,pointerEvents:"none",position:"absolute"},box.VQ)}},reactDayRangePickerStyles=(dateRange,inputMode)=>{const{from,to}=dateRange??{},startStyles={borderRadius:0,borderBottomLeftRadius:"50%",borderTopLeftRadius:"50%"},endStyles={borderRadius:0,borderBottomRightRadius:"50%",borderTopRightRadius:"50%"};return _objectSpread({".rdp-day_selected:not([disabled]).rdp-day_range_middle":{backgroundColor:core.boxPalette.selectedMuted,color:core.boxPalette.foregroundText,borderRadius:0},".hover-range:not([disabled]):not(.rdp-day_range_start):not(.rdp-day_range_end)":{backgroundColor:core.boxPalette.selectedMuted,borderRadius:0,color:core.boxPalette.foregroundText,fontWeight:"bold"},".rdp-day_range_start:not(.rdp-day_range_end)":startStyles,".rdp-day_range_start:not(.rdp-day_range_end)::before":startStyles,".rdp-day_range_end:not(.rdp-day_range_start)":endStyles,".rdp-day_range_end:not(.rdp-day_range_start)::before":endStyles,".rdp-day_range_start.rdp-day_range_end":_objectSpread(_objectSpread({},from&&startStyles),to&&endStyles)},inputMode&&{".rdp-day":_objectSpread(_objectSpread(_objectSpread({},"from"===inputMode&&startStyles),"to"===inputMode&&endStyles),{},{"&::before":{borderColor:"transparent",borderStyle:"solid",borderWidth:core.tokens.borderWidth.lg,content:'""',inset:0,pointerEvents:"none",position:"absolute",zIndex:-1},"&:hover:not([disabled])::before":_objectSpread(_objectSpread(_objectSpread(_objectSpread({},"from"===inputMode&&startStyles),"to"===inputMode&&endStyles),box.VQ),{},{backgroundColor:core.boxPalette.backgroundShade,borderColor:core.boxPalette.selected}),"&:hover:not([disabled])":{color:core.boxPalette.foregroundText,textDecoration:"underline"}}),".rdp-day_range_start:hover:not([disabled])::before":{borderRadius:"to"===inputMode?"50%":void 0},".rdp-day_range_end:hover:not([disabled])::before":{borderRadius:"from"===inputMode?"50%":void 0},".rdp-day_range_start.rdp-day_range_end:hover":{backgroundColor:core.boxPalette.backgroundBody}})};var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function CalendarContainer({children}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-label":"Choose date","aria-modal":!0,css:reactDayPickerStyles,display:"inline-block",paddingX:[.25,1],paddingY:1,role:"dialog",children})}function CalendarRangeContainer({children,dateRange,inputMode}){return(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-label":"Choose date range","aria-modal":!0,css:[reactDayPickerStyles,reactDayRangePickerStyles(dateRange,inputMode),"","","",""],display:"inline-block",paddingX:[.25,1],paddingY:1,role:"dialog",children})}var CalendarContext=__webpack_require__("./packages/react/src/date-picker-next/CalendarContext.tsx"),utils=__webpack_require__("./packages/react/src/date-picker-next/utils.ts");const _excluded=["inputMode"],_excluded2=["children","onClick","onKeyDown","role"];function Calendar_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Calendar_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Calendar_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Calendar_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function CalendarSingle(props){return(0,emotion_react_jsx_runtime_browser_esm.Y)(es2015.Ay,{autoFocus:!1,returnFocus:!0,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CalendarContainer,{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.hv,Calendar_objectSpread(Calendar_objectSpread({mode:"single"},defaultDayPickerProps),props))})})}function CalendarRange(_ref){let{inputMode}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.Y)(es2015.Ay,{autoFocus:!1,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(CalendarRangeContainer,{dateRange:props.selected,inputMode,children:(0,emotion_react_jsx_runtime_browser_esm.Y)(index_esm.hv,Calendar_objectSpread(Calendar_objectSpread({mode:"range"},defaultDayPickerProps),props))})})}const currentYear=(0,getYear.A)(new Date);var _ref2={name:"bjn8wh",styles:"position:relative"};function YearMonthSelect({label,options,value,onChange}){const selectId=`calendar-${(0,core.Bi)()}-select`;return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{css:_ref2,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("label",{css:a11y.O_,htmlFor:selectId,children:label}),(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{as:"select",autoComplete:"off",color:"text",css:(0,emotion_react_browser_esm.AH)({appearance:"none",background:"none",borderColor:core.boxPalette.border,borderStyle:"solid",borderWidth:core.tokens.borderWidth.sm,fontSize:`${core.tokens.fontSize.xs.sm}rem`,height:"2rem",paddingLeft:(0,core.QY)(.5),paddingRight:(0,core.QY)(2),"@media(min-width: 375px)":{fontSize:`${core.tokens.fontSize.xs.md}rem`}},"",""),focusRingFor:"keyboard",fontWeight:"bold",id:selectId,onChange,paddingRight:1.5,rounded:!0,value,children:options.map((option=>(0,emotion_react_jsx_runtime_browser_esm.Y)("option",{value:option.value,children:option.label},option.value)))}),(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.D3,{css:(0,emotion_react_browser_esm.AH)({position:"absolute",top:"50%",right:(0,core.QY)(.5),transform:"translateY(-50%)",pointerEvents:"none",color:core.boxPalette.foregroundAction},"",""),weight:"bold"})]})}const defaultDayPickerProps={components:{Caption:function Caption(props){const{classNames,styles,components,labels:{labelPrevious,labelNext},locale}=(0,index_esm.wj)(),{displayMonths,previousMonth,nextMonth,goToMonth}=(0,index_esm.cq)(),CaptionLabelComponent=components?.CaptionLabel,previousLabel=labelPrevious(previousMonth,{locale}),previousClassName=[classNames.button_reset,classNames.button,classNames.nav_button,classNames.nav_button_previous].join(" "),nextLabel=labelNext(nextMonth,{locale}),nextClassName=[classNames.button_reset,classNames.button,classNames.nav_button,classNames.nav_button_next].join(" "),isFirst=0===props.displayIndex,isLast=props.displayIndex===displayMonths.length-1;return(0,emotion_react_jsx_runtime_browser_esm.FD)("div",{className:classNames.caption,style:styles.caption,children:[isFirst&&(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{"aria-label":previousLabel,className:previousClassName,disabled:!previousMonth,onClick:()=>{previousMonth&&goToMonth(previousMonth)},type:"button",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.YJ,{color:"inherit",weight:"bold"})}),CaptionLabelComponent&&(0,emotion_react_jsx_runtime_browser_esm.Y)(CaptionLabelComponent,{displayIndex:props.displayIndex,displayMonth:props.displayMonth,id:props.id}),isLast&&(0,emotion_react_jsx_runtime_browser_esm.Y)("button",{"aria-label":nextLabel,className:nextClassName,disabled:!nextMonth,onClick:()=>{nextMonth&&goToMonth(nextMonth)},type:"button",children:(0,emotion_react_jsx_runtime_browser_esm.Y)(icon.vK,{color:"inherit",weight:"bold"})})]})},CaptionLabel:function CaptionLabel({displayIndex,displayMonth,id}){const{goToMonth}=(0,index_esm.cq)(),month=(0,getMonth.A)(displayMonth),year=(0,getYear.A)(displayMonth),onYearChange=(0,react.useCallback)((event=>{const year=parseInt(event.target.value);goToMonth(new Date(year,(0,getMonth.A)(displayMonth)-(displayIndex||0),1))}),[displayIndex,displayMonth,goToMonth]),onMonthChange=(0,react.useCallback)((event=>{const monthIndex=parseInt(event.target.value);goToMonth(new Date(year,monthIndex-(displayIndex||0),1))}),[displayIndex,goToMonth,year]),{yearRange,yearsVisitedRef}=(0,CalendarContext._)(),yearOptions=(0,react.useMemo)((()=>{yearsVisitedRef.current.set(year,!0);const lowerBound=yearRange?.from??currentYear-10,upperBound=yearRange?.to??currentYear+10;let yearOptions=Array.from({length:upperBound-lowerBound+1},((_,i)=>i+lowerBound));return yearOptions.length>1&&yearsVisitedRef.current.forEach(((_,key)=>{yearOptions.includes(key)||(yearOptions=[...yearOptions,key].sort())})),yearOptions.map((year=>({value:year,label:year})))}),[year,yearRange,yearsVisitedRef]),monthOptions=(0,react.useMemo)((()=>[{label:"January",value:0},{label:"February",value:1},{label:"March",value:2},{label:"April",value:3},{label:"May",value:4},{label:"June",value:5},{label:"July",value:6},{label:"August",value:7},{label:"September",value:8},{label:"October",value:9},{label:"November",value:10},{label:"December",value:11}]),[]),formattedMonthYear=(0,format.A)(displayMonth,"MMMM yyyy");return yearOptions.length>1?(0,emotion_react_jsx_runtime_browser_esm.FD)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.Y)("h2",{"aria-atomic":!0,"aria-live":"polite",css:a11y.O_,id,children:formattedMonthYear}),(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,{gap:.5,justifyContent:"center",width:"100%",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(YearMonthSelect,{label:"Month",onChange:onMonthChange,options:monthOptions,value:month}),(0,emotion_react_jsx_runtime_browser_esm.Y)(YearMonthSelect,{label:"Year",onChange:onYearChange,options:yearOptions,value:year})]})]}):(0,emotion_react_jsx_runtime_browser_esm.Y)(box.Box,{"aria-atomic":!0,"aria-live":"polite",as:"h2",fontSize:"lg",fontWeight:"bold",id,lineHeight:"heading",children:formattedMonthYear})},Row:function Row(props){const{styles,classNames,components}=(0,index_esm.wj)(),DayComponent=components?.Day;return DayComponent?(0,emotion_react_jsx_runtime_browser_esm.Y)("tr",{className:classNames.row,style:styles.row,children:props.dates.map((date=>(0,emotion_react_jsx_runtime_browser_esm.Y)(DayComponent,{date,displayMonth:props.displayMonth},(0,getUnixTime.A)(date))))}):null},Day:function Day(props){const buttonRef=(0,react.useRef)(null),{activeModifiers,buttonProps,isHidden}=(0,index_esm.W5)(props.date,props.displayMonth,buttonRef),{onHover,clearHoveredDay}=(0,CalendarContext._)(),{children,onClick,onKeyDown,role}=buttonProps,restButtonProps=(0,objectWithoutProperties.A)(buttonProps,_excluded2),interactiveProps=Calendar_objectSpread({"aria-current":activeModifiers.today?"date":void 0,"aria-label":`${activeModifiers.selected&&!activeModifiers.range_middle?"Selected. ":""}${(0,utils.$q)(props.date)}${activeModifiers.range_middle?". Between selected dates":""}`,"aria-selected":activeModifiers.range_middle?void 0:activeModifiers.selected,onClick},restButtonProps);return(0,emotion_react_jsx_runtime_browser_esm.Y)("td",Calendar_objectSpread(Calendar_objectSpread({ref:buttonRef,tabIndex:-1},isHidden?void 0:interactiveProps),{},{onKeyDown:event=>{isHidden||"Enter"!==event.key&&"Space"!==event.key?onKeyDown?.(event):(event.preventDefault(),event.stopPropagation(),onClick?.(event))},onMouseEnter:()=>{onHover&&!isHidden&&(clearHoveredDay?.cancel(),onHover(props.date))},onMouseLeave:()=>{onHover&&clearHoveredDay&&!isHidden&&clearHoveredDay()},children:(0,emotion_react_jsx_runtime_browser_esm.Y)("span",{tabIndex:-1,children:isHidden?void 0:children})}))}}}},"./packages/react/src/date-picker-next/CalendarContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>CalendarProvider,_:()=>useCalendar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function CalendarProvider({children,clearHoveredDay,onHover,yearRange}){const yearsVisitedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Y)(Context.Provider,{value:{clearHoveredDay,onHover,yearRange,yearsVisitedRef},children})}function useCalendar(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context)throw new Error("Context not found.");return context}}}]);