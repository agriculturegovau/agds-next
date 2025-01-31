"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[7728],{"./packages/react/src/date-picker/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lp:()=>transformValuePropToInputValue,QO:()=>constrainDate,Yq:()=>formatDate,_U:()=>parseDate});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/isMatch/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/date-fns/esm/parse/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/date-fns/esm/isDate/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/date-fns/esm/isBefore/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/date-fns/esm/isAfter/index.js"),_date_picker_next_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/date-picker-next/utils.ts");const formatDate=(date,dateformat)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.A)(date,dateformat),parseDate=(value,dateFormats=_date_picker_next_utils__WEBPACK_IMPORTED_MODULE_1__.e)=>{const now=new Date;for(const displayDateFormat of dateFormats){if(4!==(value.split(/ |\/|-/g)[2]||"").length)return;if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.A)(value,displayDateFormat)){const parsed=(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.A)(value,displayDateFormat,now);if(isValidDate(parsed))return parsed}}};function isValidDate(value){return(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.A)(value)&&(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.A)(value)}function constrainDate(date,minDate,maxDate){return date?minDate&&(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.A)(date,minDate)?minDate:maxDate&&(0,date_fns__WEBPACK_IMPORTED_MODULE_7__.A)(date,maxDate)?maxDate:date:date}function transformValuePropToInputValue(valueProp,dateFormat){if(void 0===valueProp)return"";const valueAsDateOrUndefined="string"==typeof valueProp?(0,_date_picker_next_utils__WEBPACK_IMPORTED_MODULE_1__.A9)(valueProp):valueProp;return void 0===valueAsDateOrUndefined?valueProp.toString():isValidDate(valueAsDateOrUndefined)?formatDate(valueAsDateOrUndefined,dateFormat):""}},"./packages/react/src/date-range-picker/DateRangePicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>DateRangePicker});var defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),flex=__webpack_require__("./packages/react/src/flex/index.ts"),stack=__webpack_require__("./packages/react/src/stack/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),field=__webpack_require__("./packages/react/src/field/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),_popover=__webpack_require__("./packages/react/src/_popover/index.ts"),utils=__webpack_require__("./packages/react/src/date-picker/utils.ts"),Calendar=__webpack_require__("./packages/react/src/date-picker/Calendar.tsx"),CalendarContext=__webpack_require__("./packages/react/src/date-picker/CalendarContext.tsx"),date_picker_next_utils=__webpack_require__("./packages/react/src/date-picker-next/utils.ts"),DatePickerInput=__webpack_require__("./packages/react/src/date-picker-next/DatePickerInput.tsx"),isBefore=__webpack_require__("./node_modules/date-fns/esm/isBefore/index.js"),closestTo=__webpack_require__("./node_modules/date-fns/esm/closestTo/index.js"),differenceInCalendarMonths=__webpack_require__("./node_modules/date-fns/esm/differenceInCalendarMonths/index.js"),subMonths=__webpack_require__("./node_modules/date-fns/esm/subMonths/index.js");function ensureValidDateRange(dateRange){const{to,from}=dateRange;return from&&to&&(0,isBefore.A)(to,from)?{from:to,to:from}:dateRange}var emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref={name:"1coh6b9",styles:"min-height:200px"};const DateRangePicker=({allowedDateFormats:allowedDateFormatsProp=date_picker_next_utils.e,legend,hint,id,fromInvalid=!1,toInvalid=!1,message,hideOptionalLabel,value,onChange,onFromInputChange:onFromInputChangeProp,onToInputChange:onToInputChangeProp,disabled,fromLabel="Start date",toLabel="End date",required=!1,minDate,maxDate,fromInputRef,toInputRef,yearRange,dateFormat="dd/MM/yyyy"})=>{const allowedDateFormats=(0,react.useMemo)((()=>Array.from(new Set([dateFormat,...allowedDateFormatsProp.filter((dateFormat=>date_picker_next_utils.e.includes(dateFormat)))]))),[dateFormat,allowedDateFormatsProp]),{0:hasCalendarOpened,1:setHasCalendarOpened}=(0,react.useState)(!1),[isCalendarOpen,openCalendar,closeCalendar]=(0,core.C6)(!1),toggleCalendar=isCalendarOpen?closeCalendar:openCalendar,{0:inputMode,1:setInputMode}=(0,react.useState)(),fromTriggerRef=(0,react.useRef)(null),toTriggerRef=(0,react.useRef)(null);const popover=(0,_popover.f)(),valueAsDateOrUndefined=(0,react.useMemo)((()=>({from:"string"==typeof value.from?(0,date_picker_next_utils.A9)(value.from):value.from,to:"string"==typeof value.to?(0,date_picker_next_utils.A9)(value.to):value.to})),[value]),onSelect=(0,react.useCallback)(((_,selectedDay,activeModifiers)=>{if(!inputMode||activeModifiers.disabled)return;const range=ensureValidDateRange("from"===inputMode?{from:selectedDay,to:valueAsDateOrUndefined.to}:{from:valueAsDateOrUndefined.from,to:selectedDay});if(onChange(range),setFromInputValue(range.from?(0,utils.Yq)(range.from,dateFormat):""),setToInputValue(range.to?(0,utils.Yq)(range.to,dateFormat):""),range.from&&range.to)return closeCalendar(),void setInputMode(void 0);"from"!==inputMode?"to"!==inputMode||range.from||setInputMode("from"):setInputMode("to")}),[closeCalendar,inputMode,onChange,valueAsDateOrUndefined,dateFormat]),{0:fromInputValue,1:setFromInputValue}=(0,react.useState)((0,utils.Lp)(value.from,dateFormat)),{0:toInputValue,1:setToInputValue}=(0,react.useState)((0,utils.Lp)(value.to,dateFormat));(0,react.useEffect)((()=>{setFromInputValue((0,utils.Lp)(value.from,dateFormat)),setToInputValue((0,utils.Lp)(value.to,dateFormat))}),[value,dateFormat]);const handleClickOutside=(0,react.useCallback)((()=>{isCalendarOpen&&closeCalendar()}),[isCalendarOpen,closeCalendar]);(0,core.Ls)([popover.popoverRef,fromTriggerRef,toTriggerRef],handleClickOutside),(0,react.useEffect)((()=>{const handleKeyDown=e=>{isCalendarOpen&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),closeCalendar(),setInputMode(void 0))};return window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown)}),[isCalendarOpen,closeCalendar]);const disabledCalendarDays=(0,react.useMemo)((()=>{if(minDate||maxDate)return[minDate?{before:minDate}:void 0,maxDate?{after:maxDate}:void 0].filter((x=>Boolean(x)))}),[minDate,maxDate]),{windowWidth=0}=(0,core.lW)(),numberOfMonths=windowWidth>core.tokens.breakpoint.md?2:1,invalid=fromInvalid||toInvalid,{fieldsetId,fromId,hintId,messageId,toId}=function useDateRangePickerIds(idProp){const autoId=(0,core.Bi)(idProp),fieldsetId=idProp||`date-range-picker-${autoId}`,hintId=`date-range-picker-${autoId}-hint`,messageId=`date-range-picker-${autoId}-message`,fromId=`date-range-picker-${autoId}-from`,toId=`date-range-picker-${autoId}-to`;return{fieldsetId,fromId,hintId,messageId,toId}}(id),fromDescribedByIds=[fromInvalid&&message?messageId:null,hint?hintId:null].filter(Boolean).join(" "),toDescribedByIds=[toInvalid&&message?messageId:null,hint?hintId:null].filter(Boolean).join(" "),defaultMonth=function getCalendarDefaultMonth(inputMode,valueAsDateOrUndefined,yearRange,numberOfMonths){const value=(()=>{if("from"===inputMode&&valueAsDateOrUndefined.from)return valueAsDateOrUndefined.from;if("to"===inputMode&&valueAsDateOrUndefined.to)return valueAsDateOrUndefined.to;if(yearRange){const earliestDateInRange=new Date(yearRange.from,0,1),lastDateInRange=new Date(yearRange.to,11,31);return(0,closestTo.A)(new Date,[earliestDateInRange,lastDateInRange])}})();if(value&&"to"===inputMode&&2===numberOfMonths)return 0===(valueAsDateOrUndefined?.from&&valueAsDateOrUndefined?.to?(0,differenceInCalendarMonths.A)(valueAsDateOrUndefined.to,valueAsDateOrUndefined.from):-1)?value:(0,subMonths.A)(value,1);return value}(inputMode,valueAsDateOrUndefined,yearRange,numberOfMonths),popoverProps=(0,react.useMemo)((()=>popover.getPopoverProps()),[popover]),calendarProps=(0,react.useMemo)((()=>({defaultMonth,disabled:disabledCalendarDays,initialFocus:!0,numberOfMonths,onSelect,returnFocusRef:"from"===inputMode?fromTriggerRef:toTriggerRef,selected:valueAsDateOrUndefined})),[defaultMonth,disabledCalendarDays,inputMode,numberOfMonths,onSelect,valueAsDateOrUndefined]);return(0,emotion_react_jsx_runtime_browser_esm.Y)(field.E8,{id:fieldsetId,invalid,children:(0,emotion_react_jsx_runtime_browser_esm.FD)(box.Box,{as:"fieldset",children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(field.dh,{as:"legend",css:legend?void 0:a11y.O_,hideOptionalLabel,required,children:legend??"Date range"}),(0,emotion_react_jsx_runtime_browser_esm.FD)(stack.Stack,{css:(0,emotion_react_browser_esm.AH)({marginTop:legend?(0,core.QY)(.5):void 0},"",""),gap:.5,children:[hint?(0,emotion_react_jsx_runtime_browser_esm.Y)(field.oE,{id:hintId,children:hint}):null,message&&invalid?(0,emotion_react_jsx_runtime_browser_esm.Y)(field.ih,{id:messageId,children:message}):null,(0,emotion_react_jsx_runtime_browser_esm.FD)(flex.Flex,_objectSpread(_objectSpread({},popover.getReferenceProps()),{},{flexWrap:"wrap",gap:1,inline:!0,children:[(0,emotion_react_jsx_runtime_browser_esm.Y)(DatePickerInput.J,{"aria-describedby":fromDescribedByIds.length>0?fromDescribedByIds:null,buttonAriaLabel:(0,date_picker_next_utils.oo)({allowedDateFormats,rangeName:"start",value:fromInputValue}),buttonOnClick:function onFromTriggerClick(){setInputMode("from"),toggleCalendar(),setHasCalendarOpened(!0)},buttonRef:fromTriggerRef,dateFormat,disabled,hideOptionalLabel:hideOptionalLabel||Boolean(legend),id:fromId,invalid:{field:!1,input:fromInvalid},isCalendarOpen,label:fromLabel,onBlur:e=>{const inputValue=e.target.value,parsedDate=(0,utils._U)(inputValue,allowedDateFormats),constrainedDate=(0,utils.QO)(parsedDate,minDate,maxDate),nextValue=ensureValidDateRange({from:constrainedDate,to:valueAsDateOrUndefined.to});!inputValue||constrainedDate?onChange(nextValue):onFromInputChangeProp?.(inputValue)},onChange:e=>{const inputValue=e.target.value;setFromInputValue(inputValue)},ref:fromInputRef,required,secondaryLabelDate:minDate,value:fromInputValue}),(0,emotion_react_jsx_runtime_browser_esm.Y)(DatePickerInput.J,{"aria-describedby":toDescribedByIds.length>0?toDescribedByIds:null,buttonAriaLabel:(0,date_picker_next_utils.oo)({allowedDateFormats,rangeName:"end",value:toInputValue}),buttonOnClick:function onToTriggerClick(){setInputMode("to"),toggleCalendar(),setHasCalendarOpened(!0)},buttonRef:toTriggerRef,dateFormat,disabled,hideOptionalLabel:hideOptionalLabel||Boolean(legend),id:toId,invalid:{field:!1,input:toInvalid},isCalendarOpen,label:toLabel,onBlur:e=>{const inputValue=e.target.value,parsedDate=(0,utils._U)(inputValue,allowedDateFormats),constrainedDate=(0,utils.QO)(parsedDate,minDate,maxDate),nextValue=ensureValidDateRange({from:valueAsDateOrUndefined.from,to:constrainedDate});!inputValue||constrainedDate?onChange(nextValue):onToInputChangeProp?.(inputValue)},onChange:e=>{const inputValue=e.target.value;setToInputValue(inputValue)},ref:toInputRef,required,secondaryLabelDate:maxDate||(0,addDays.A)(new Date,1),value:toInputValue})]}))]}),(0,emotion_react_jsx_runtime_browser_esm.Y)(CalendarContext.S,{yearRange,children:hasCalendarOpened?isCalendarOpen&&(0,emotion_react_jsx_runtime_browser_esm.Y)(_popover.A,_objectSpread(_objectSpread({},popoverProps),{},{children:(0,emotion_react_jsx_runtime_browser_esm.Y)(Calendar.eS,_objectSpread({},calendarProps))})):(0,emotion_react_jsx_runtime_browser_esm.Y)(_popover.A,_objectSpread(_objectSpread({},popoverProps),{},{children:isCalendarOpen&&(0,emotion_react_jsx_runtime_browser_esm.Y)(Calendar.eS,_objectSpread(_objectSpread({},calendarProps),{},{css:_ref}))}))})]})})}}}]);