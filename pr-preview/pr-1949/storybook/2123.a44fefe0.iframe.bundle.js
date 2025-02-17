"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[2123],{"./packages/react/src/date-picker-next/DatePickerInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>DateInput});var _emotion_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),_flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/flex/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/icon/index.ts"),_text_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/text-input/index.ts"),_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/core/index.ts"),_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/button/index.ts"),_field__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/react/src/field/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/react/src/date-picker-next/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");const _excluded=["block","buttonAriaLabel","buttonOnClick","buttonRef","dateFormat","disabled","hideOptionalLabel","highlight","hint","id","invalid","isCalendarOpen","label","maxWidth","message","required","secondaryLabelDate","value"],_excluded2=["maxWidth"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _ref2={name:"4zleql",styles:"display:block"};const DateInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function DateInput(_ref,ref){let{block,buttonAriaLabel,buttonOnClick,buttonRef,dateFormat:dateFormatProp,disabled,hideOptionalLabel,highlight,hint,id,invalid,isCalendarOpen,label,maxWidth:maxWidthProp="md",message,required,secondaryLabelDate=new Date,value}=_ref,props=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__.A)(_ref,_excluded);const _textInputStyles$widt=_objectSpread(_objectSpread({},(0,_text_input__WEBPACK_IMPORTED_MODULE_4__.E)({block,maxWidth:maxWidthProp})),{},{width:"100%",borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}),{maxWidth}=_textInputStyles$widt,styles=(0,_home_runner_work_agds_next_agds_next_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_8__.A)(_textInputStyles$widt,_excluded2),secondaryLabel=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{const dateFormat=_utils__WEBPACK_IMPORTED_MODULE_9__.e.includes(dateFormatProp)?dateFormatProp:"dd/MM/yyyy";return"(e.g. "+(0,date_fns__WEBPACK_IMPORTED_MODULE_10__.A)(secondaryLabelDate,dateFormat)+")"}),[dateFormatProp,secondaryLabelDate]);return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_field__WEBPACK_IMPORTED_MODULE_7__.D0,{hideOptionalLabel,hint,id,invalid:invalid.field,label,maxWidth:maxWidthProp,message,required,secondaryLabel,children:a11yProps=>(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.FD)(_flex__WEBPACK_IMPORTED_MODULE_2__.Flex,{alignItems:"flex-end",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.AH)(_objectSpread({borderRadius:_core__WEBPACK_IMPORTED_MODULE_5__.tokens.borderRadius,maxWidth},highlight?_core__WEBPACK_IMPORTED_MODULE_5__.tm.outline:void 0),"",""),children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)("input",_objectSpread(_objectSpread(_objectSpread({autoComplete:"off",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.AH)(_objectSpread(_objectSpread({},styles),{},{maxWidth:"unset"}),"",""),ref,type:"text"},a11yProps),{},{"aria-invalid":Boolean(invalid.field||invalid.input)},props),{},{disabled,value})),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_button__WEBPACK_IMPORTED_MODULE_6__.Button,{"aria-expanded":isCalendarOpen,"aria-label":buttonAriaLabel,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_12__.AH)({borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_5__.QY)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_5__.QY)(1)},"",""),disabled,onClick:buttonOnClick,ref:buttonRef,type:"button",variant:"secondary",children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Y)(_icon__WEBPACK_IMPORTED_MODULE_3__.CT,{css:_ref2,size:"md"})})]})})}))},"./packages/react/src/date-picker-next/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$q:()=>formatHumanReadableDate,A9:()=>normaliseDateString,D5:()=>asDate,Lp:()=>transformValuePropToInputValue,O4:()=>getCalendarDefaultMonth,Yq:()=>formatDate,_U:()=>parseDate,e:()=>acceptedDateFormats,oo:()=>getDateInputButtonAriaLabel,vd:()=>isValidDate});var date_fns__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/isMatch/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/parse/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/date-fns/esm/isDate/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/date-fns/esm/isBefore/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/date-fns/esm/isAfter/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/date-fns/esm/closestTo/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");const acceptedDateFormats=["dd/MM/yyyy","dd-MM-yyyy","dd MM yyyy","MM/dd/yyyy","MM-dd-yyyy","MM dd yyyy","do MMMM yyyy","do MMM yyyy","MMMM do yyyy","MMM do yyyy","d MMMM yyyy","d MMM yyyy","MMMM d yyyy","MMM d yyyy","dd MMMM yyyy","dd MMM yyyy","MMMM dd yyyy","MMM dd yyyy"],formatDate=(date,dateformat)=>{const valueAsDate=asDate(date);return valueAsDate&&dateformat?(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.A)(valueAsDate,dateformat):""},formatHumanReadableDate=date=>(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.A)(date,"do MMMM yyyy EEEE"),parseDate=(value,allowedDateFormats=acceptedDateFormats)=>{const now=new Date,parsedISODate=normaliseDateString(value);if(parsedISODate)return parsedISODate;for(const displayDateFormat of allowedDateFormats){if(4!==(value.split(/ |\/|-/g)[2]||"").length)return;if((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.A)(value,displayDateFormat)){const parsed=(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.A)(value,displayDateFormat,now);if(isValidDate(parsed))return parsed}}};function asDate(value,allowedDateFormats){return"string"==typeof value?parseDate(value,allowedDateFormats):value}function isValidDate(value,options={}){const allowedDateFormats=options.allowedDateFormats||acceptedDateFormats,valueAsDate=asDate(value,allowedDateFormats);if(!valueAsDate)return!1;if(!((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.A)(valueAsDate)&&(0,date_fns__WEBPACK_IMPORTED_MODULE_4__.A)(valueAsDate)))return!1;let rangeDate;return!((options.fromDate||options.minDate)&&(rangeDate=asDate(options.fromDate||options.minDate),!isValidDate(rangeDate,{allowedDateFormats})||rangeDate&&(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.A)(valueAsDate,rangeDate)))&&!((options.toDate||options.maxDate)&&(rangeDate=asDate(options.toDate||options.maxDate),!isValidDate(rangeDate,{allowedDateFormats})||rangeDate&&(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.A)(valueAsDate,rangeDate)))}function transformValuePropToInputValue(valueProp,dateFormat,allowedDateFormats){if(void 0===valueProp)return"";const valueAsDateOrUndefined=asDate(valueProp,allowedDateFormats);return void 0===valueAsDateOrUndefined?valueProp.toString():isValidDate(valueAsDateOrUndefined)?formatDate(valueAsDateOrUndefined,dateFormat):""}function getCalendarDefaultMonth(valueAsDateOrUndefined,initialMonth,yearRange){if(valueAsDateOrUndefined)return valueAsDateOrUndefined;if(initialMonth)return initialMonth;if(yearRange){const earliestDateInRange=new Date(yearRange.from,0,1),lastDateInRange=new Date(yearRange.to,11,31);return(0,date_fns__WEBPACK_IMPORTED_MODULE_7__.A)(new Date,[earliestDateInRange,lastDateInRange])}}function getDateInputButtonAriaLabel({allowedDateFormats,rangeName,value}){const dateStr=rangeName?`${rangeName} date`:"date";if("string"!=typeof value)return`Choose ${dateStr}`;const parsed=parseDate(value,allowedDateFormats);return parsed?`Change ${dateStr}, ${formatHumanReadableDate(parsed)}`:`Choose ${dateStr}`}const normaliseDateString=date=>{const parsedISODate=(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.A)(date);return"Invalid Date"===parsedISODate.toString()?void 0:parsedISODate}}}]);