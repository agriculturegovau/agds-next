"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[373],{"./packages/react/src/date-picker/DateRangePicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ControlledExample:()=>ControlledExample,Disabled:()=>Disabled,FiltersExample:()=>FiltersExample,Labels:()=>Labels,MinMaxDates:()=>MinMaxDates,Required:()=>Required,ScrollExample:()=>ScrollExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/date-fns/esm/subDays/index.js"),date_fns__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/index.ts"),_select__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/select/index.ts"),_prose__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/prose/index.ts"),_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/react/src/date-picker/DateRangePicker.tsx"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"forms/DatePicker/DateRangePicker",component:_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__.D};var Template=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({from:void 0,to:void 0}),range=_useState[0],setRange=_useState[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__.D,_objectSpread(_objectSpread({},args),{},{value:range,onChange:setRange}))},Basic=Template.bind({});Basic.args={};var Disabled=Template.bind({});Disabled.args={disabled:!0};var today=new Date,lastWeek=(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.Z)(today,7),nextWeek=(0,date_fns__WEBPACK_IMPORTED_MODULE_9__.Z)(today,7),MinMaxDates=Template.bind({});MinMaxDates.args={minDate:lastWeek,maxDate:nextWeek};var Required=Template.bind({});Required.args={required:!0};var Labels=Template.bind({});Labels.args={fromLabel:"From",toLabel:"To"};var FiltersExample=function FiltersExample(){var _range$from,_range$to,_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),option=_useState2[0],setOption=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({from:void 0,to:void 0}),range=_useState3[0],setRange=_useState3[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_box__WEBPACK_IMPORTED_MODULE_2__.Stack,{gap:3,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_box__WEBPACK_IMPORTED_MODULE_2__.Flex,{gap:2,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_select__WEBPACK_IMPORTED_MODULE_4__.Select,{label:"Example",placeholder:"Please select",options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],value:option,onChange:function onChange(e){return setOption(e.target.value)}}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__.D,{value:range,onChange:setRange})]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_prose__WEBPACK_IMPORTED_MODULE_5__.Mr,{children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)("ul",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)("li",{children:["Option: ",option||"Not set"]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)("li",{children:["Date from: ",(null===(_range$from=range.from)||void 0===_range$from?void 0:_range$from.toLocaleDateString())||"Not set"]}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)("li",{children:["Date to: ",(null===(_range$to=range.to)||void 0===_range$to?void 0:_range$to.toLocaleDateString())||"Not set"]})]})})]})},ScrollExample=function ScrollExample(args){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,{height:"1000px"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(Template,_objectSpread({},args)),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_box__WEBPACK_IMPORTED_MODULE_2__.Box,{height:"1000px"})]})},ControlledExample=function ControlledExample(){var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({from:void 0,to:void 0}),range=_useState4[0],setRange=_useState4[1];return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_box__WEBPACK_IMPORTED_MODULE_2__.Stack,{gap:4,alignItems:"flex-start",children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__.D,{value:range,onChange:setRange}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.BX)(_button__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup,{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_button__WEBPACK_IMPORTED_MODULE_3__.Button,{onClick:function onClick(){return setRange({from:new Date("2020-08-14"),to:new Date("2020-08-18")})},children:"Set pre-defined range"}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.tZ)(_button__WEBPACK_IMPORTED_MODULE_3__.Button,{variant:"secondary",onClick:function onClick(){return setRange({from:void 0,to:void 0})},children:"Clear range"})]})]})};Basic.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [range, setRange] = useState<DateRange>({\n\t\tfrom: undefined,\n\t\tto: undefined,\n\t});\n\treturn <DateRangePicker {...args} value={range} onChange={setRange} />;\n}"}},Basic.parameters),Disabled.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [range, setRange] = useState<DateRange>({\n\t\tfrom: undefined,\n\t\tto: undefined,\n\t});\n\treturn <DateRangePicker {...args} value={range} onChange={setRange} />;\n}"}},Disabled.parameters),MinMaxDates.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [range, setRange] = useState<DateRange>({\n\t\tfrom: undefined,\n\t\tto: undefined,\n\t});\n\treturn <DateRangePicker {...args} value={range} onChange={setRange} />;\n}"}},MinMaxDates.parameters),Required.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [range, setRange] = useState<DateRange>({\n\t\tfrom: undefined,\n\t\tto: undefined,\n\t});\n\treturn <DateRangePicker {...args} value={range} onChange={setRange} />;\n}"}},Required.parameters),Labels.parameters=_objectSpread({storySource:{source:"(args) => {\n\tconst [range, setRange] = useState<DateRange>({\n\t\tfrom: undefined,\n\t\tto: undefined,\n\t});\n\treturn <DateRangePicker {...args} value={range} onChange={setRange} />;\n}"}},Labels.parameters),FiltersExample.parameters=_objectSpread({storySource:{source:"() => {\n\tconst [option, setOption] = useState<string>();\n\n\tconst [range, setRange] = useState<DateRange>({\n\t\tfrom: undefined,\n\t\tto: undefined,\n\t});\n\n\treturn (\n\t\t<Stack gap={3}>\n\t\t\t<Flex gap={2}>\n\t\t\t\t<Select\n\t\t\t\t\tlabel=\"Example\"\n\t\t\t\t\tplaceholder=\"Please select\"\n\t\t\t\t\toptions={[\n\t\t\t\t\t\t{ label: 'A', value: 'a' },\n\t\t\t\t\t\t{ label: 'B', value: 'b' },\n\t\t\t\t\t\t{ label: 'C', value: 'c' },\n\t\t\t\t\t]}\n\t\t\t\t\tvalue={option}\n\t\t\t\t\tonChange={(e) => setOption(e.target.value)}\n\t\t\t\t/>\n\t\t\t\t<DateRangePicker value={range} onChange={setRange} />\n\t\t\t</Flex>\n\t\t\t<Prose>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Option: {option || 'Not set'}</li>\n\t\t\t\t\t<li>Date from: {range.from?.toLocaleDateString() || 'Not set'}</li>\n\t\t\t\t\t<li>Date to: {range.to?.toLocaleDateString() || 'Not set'}</li>\n\t\t\t\t</ul>\n\t\t\t</Prose>\n\t\t</Stack>\n\t);\n}"}},FiltersExample.parameters),ScrollExample.parameters=_objectSpread({storySource:{source:'(args) => {\n\treturn (\n\t\t<Box>\n\t\t\t<Box height="1000px"></Box>\n\t\t\t<Template {...args} />\n\t\t\t<Box height="1000px"></Box>\n\t\t</Box>\n\t);\n}'}},ScrollExample.parameters),ControlledExample.parameters=_objectSpread({storySource:{source:"() => {\n\tconst [range, setRange] = useState<DateRange>({\n\t\tfrom: undefined,\n\t\tto: undefined,\n\t});\n\treturn (\n\t\t<Stack gap={4} alignItems=\"flex-start\">\n\t\t\t<DateRangePicker value={range} onChange={setRange} />\n\t\t\t<ButtonGroup>\n\t\t\t\t<Button\n\t\t\t\t\tonClick={() =>\n\t\t\t\t\t\tsetRange({\n\t\t\t\t\t\t\tfrom: new Date('2020-08-14'),\n\t\t\t\t\t\t\tto: new Date('2020-08-18'),\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t>\n\t\t\t\t\tSet pre-defined range\n\t\t\t\t</Button>\n\t\t\t\t<Button\n\t\t\t\t\tvariant=\"secondary\"\n\t\t\t\t\tonClick={() => setRange({ from: undefined, to: undefined })}\n\t\t\t\t>\n\t\t\t\t\tClear range\n\t\t\t\t</Button>\n\t\t\t</ButtonGroup>\n\t\t</Stack>\n\t);\n}"}},ControlledExample.parameters);var __namedExportsOrder=["Basic","Disabled","MinMaxDates","Required","Labels","FiltersExample","ScrollExample","ControlledExample"]},"./packages/react/src/button/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/box/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),ButtonGroup=function ButtonGroup(_ref){var children=_ref.children;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_box__WEBPACK_IMPORTED_MODULE_0__.Flex,{gap:1,flexDirection:["column","row"],alignItems:["stretch","center"],children})};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/react/src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>_styles__WEBPACK_IMPORTED_MODULE_3__.$Y,Button:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z,ButtonGroup:()=>_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.h,Yd:()=>_BaseButton__WEBPACK_IMPORTED_MODULE_2__.Y});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/button/ButtonGroup.tsx"),_BaseButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/button/BaseButton.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/button/styles.tsx")},"./packages/react/src/date-picker/DateRangePicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DateRangePicker});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/box/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_Calendar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/date-picker/Calendar.tsx"),_DatePickerInput__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/react/src/date-picker/DatePickerInput.tsx"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/react/src/date-picker/utils.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _ref2={name:"1739oy8",styles:"z-index:1"},DateRangePicker=function DateRangePicker(_ref){var value=_ref.value,onChange=_ref.onChange,disabled=_ref.disabled,_ref$fromLabel=_ref.fromLabel,fromLabel=void 0===_ref$fromLabel?"Start date":_ref$fromLabel,_ref$toLabel=_ref.toLabel,toLabel=void 0===_ref$toLabel?"End date":_ref$toLabel,required=_ref.required,minDate=_ref.minDate,maxDate=_ref.maxDate,fromInputRef=_ref.fromInputRef,toInputRef=_ref.toInputRef,yearRange=_ref.yearRange,_useTernaryState=(0,_core__WEBPACK_IMPORTED_MODULE_3__.hb)(!1),_useTernaryState2=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_useTernaryState,3),isCalendarOpen=_useTernaryState2[0],openCalendar=_useTernaryState2[1],closeCalendar=_useTernaryState2[2],_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),inputMode=_useState[0],setInputMode=_useState[1],fromTriggerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),toTriggerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),onFromTriggerClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setInputMode("from"),openCalendar()}),[openCalendar]),onToTriggerClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setInputMode("to"),openCalendar()}),[openCalendar]),_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),refEl=_useState2[0],setRefEl=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),popperEl=_useState3[0],setPopperEl=_useState3[1],_usePopper=(0,react_popper__WEBPACK_IMPORTED_MODULE_7__.D)(refEl,popperEl,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),styles=_usePopper.styles,attributes=_usePopper.attributes,onSelect=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(_,selectedDay,activeModifiers){if(inputMode&&!activeModifiers.disabled){var range=(0,_utils__WEBPACK_IMPORTED_MODULE_8__.NE)(inputMode,selectedDay,value);if(onChange(range),setFromInputValue(range.from?(0,_utils__WEBPACK_IMPORTED_MODULE_8__.p6)(range.from):""),setToInputValue(range.to?(0,_utils__WEBPACK_IMPORTED_MODULE_8__.p6)(range.to):""),range.from&&range.to)return closeCalendar(),void setInputMode(void 0);"from"!==inputMode?"to"!==inputMode||range.from||setInputMode("from"):setInputMode("to")}}),[closeCalendar,inputMode,onChange,value]),_useState4=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value.from?(0,_utils__WEBPACK_IMPORTED_MODULE_8__.p6)(value.from):""),fromInputValue=_useState4[0],setFromInputValue=_useState4[1],onFromInputChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var inputValue=e.target.value;setFromInputValue(inputValue);var parsedDate=(0,_utils__WEBPACK_IMPORTED_MODULE_8__.sG)(inputValue),containedDate=(0,_utils__WEBPACK_IMPORTED_MODULE_8__.cD)(parsedDate,minDate,maxDate);onChange(_objectSpread(_objectSpread({},value),{},{from:containedDate}))}),[maxDate,minDate,onChange,value]),_useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value.to?(0,_utils__WEBPACK_IMPORTED_MODULE_8__.p6)(value.to):""),toInputValue=_useState5[0],setToInputValue=_useState5[1],onToInputChange=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var inputValue=e.target.value;setToInputValue(inputValue);var parsedDate=(0,_utils__WEBPACK_IMPORTED_MODULE_8__.sG)(inputValue),containedDate=(0,_utils__WEBPACK_IMPORTED_MODULE_8__.cD)(parsedDate,minDate,maxDate);onChange(_objectSpread(_objectSpread({},value),{},{to:containedDate}))}),[maxDate,minDate,onChange,value]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){value.from&&setFromInputValue((0,_utils__WEBPACK_IMPORTED_MODULE_8__.p6)(value.from)),value.to&&setToInputValue((0,_utils__WEBPACK_IMPORTED_MODULE_8__.p6)(value.to))}),[value]);var clickOutsideRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(popperEl);clickOutsideRef.current=popperEl,(0,_core__WEBPACK_IMPORTED_MODULE_3__.O8)(clickOutsideRef,closeCalendar),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var handleKeyDown=function handleKeyDown(e){isCalendarOpen&&"Escape"===e.code&&(e.preventDefault(),e.stopPropagation(),closeCalendar(),setInputMode(void 0))};return window.addEventListener("keydown",handleKeyDown),function(){return window.removeEventListener("keydown",handleKeyDown)}}),[isCalendarOpen,closeCalendar]);var disabledCalendarDays=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){if(minDate||maxDate)return[minDate?{before:minDate}:void 0,maxDate?{after:maxDate}:void 0].filter((function(x){return Boolean(x)}))}),[minDate,maxDate]),_useWindowSize$window=(0,_core__WEBPACK_IMPORTED_MODULE_3__.iP)().windowWidth,numberOfMonths=(void 0===_useWindowSize$window?0:_useWindowSize$window)>_core__WEBPACK_IMPORTED_MODULE_3__.tokens.breakpoint.md?2:1;return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.BX)("div",{children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.BX)(_box__WEBPACK_IMPORTED_MODULE_2__.Flex,{ref:setRefEl,flexDirection:{xs:"column",sm:"row"},inline:!0,gap:1,children:[(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.tZ)(_DatePickerInput__WEBPACK_IMPORTED_MODULE_5__.W,{ref:fromInputRef,label:fromLabel,value:fromInputValue,onChange:onFromInputChange,buttonRef:fromTriggerRef,buttonOnClick:onFromTriggerClick,disabled,required}),(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.tZ)(_DatePickerInput__WEBPACK_IMPORTED_MODULE_5__.W,{ref:toInputRef,label:toLabel,value:toInputValue,onChange:onToInputChange,buttonRef:toTriggerRef,buttonOnClick:onToTriggerClick,disabled,required})]}),isCalendarOpen?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.tZ)("div",_objectSpread(_objectSpread({ref:setPopperEl,style:styles.popper},attributes.popper),{},{css:_ref2,children:(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.tZ)(_Calendar__WEBPACK_IMPORTED_MODULE_4__.a,{initialFocus:!0,defaultMonth:value.from,selected:value,onSelect,numberOfMonths,disabled:disabledCalendarDays,returnFocusRef:"from"===inputMode?fromTriggerRef:toTriggerRef,yearRange})})):null]})};try{DateRangePicker.displayName="DateRangePicker",DateRangePicker.__docgenInfo={description:"",displayName:"DateRangePicker",props:{minDate:{defaultValue:null,description:"If set, any days before this date will not be selectable.",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"If set, any days after this date will not be selectable.",name:"maxDate",required:!1,type:{name:"Date"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!0,type:{name:"DateRange"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!0,type:{name:"(day: DateRange) => void"}},fromLabel:{defaultValue:{value:"Start date"},description:"The label above the start date text input.",name:"fromLabel",required:!1,type:{name:"string"}},toLabel:{defaultValue:{value:"End date"},description:"The label above the end date text input.",name:"toLabel",required:!1,type:{name:"string"}},fromInputRef:{defaultValue:null,description:"Ref to the start input element.",name:"fromInputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},toInputRef:{defaultValue:null,description:"Ref to the end input element.",name:"toInputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},yearRange:{defaultValue:null,description:"The range of options to display in calendar year select.",name:"yearRange",required:!1,type:{name:"{ from: number; to: number; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/date-picker/DateRangePicker.tsx#DateRangePicker"]={docgenInfo:DateRangePicker.__docgenInfo,name:"DateRangePicker",path:"packages/react/src/date-picker/DateRangePicker.tsx#DateRangePicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z$:()=>AlertFilledIcon.z,zM:()=>AlertIcon.z,ve:()=>ArrowDownIcon.v,Y4:()=>ArrowLeftIcon.Y,LZ:()=>ArrowRightIcon.L,Hf:()=>ArrowUpIcon.H,AvatarIcon:()=>AvatarIcon.f,Qu:()=>CalendarIcon,v4:()=>ChevronDownIcon.v,wy:()=>ChevronLeftIcon.w,XC:()=>ChevronRightIcon.X,Tw:()=>CloseIcon.T,h0:()=>ExternalLinkIcon.h,F3:()=>InfoFilledIcon.F,sz:()=>InfoIcon.s,Zs:()=>ProgressBlockedIcon.Z,NB:()=>ProgressDoingIcon.N,Q2:()=>ProgressTodoIcon.Q,W1:()=>SearchIcon.W,qE:()=>SuccessFilledIcon.q,tm:()=>SuccessIcon.t,rG:()=>UploadIcon.r,av:()=>WarningFilledIcon.a,aN:()=>WarningIcon.a,kE:()=>utils.k});var Icon=__webpack_require__("./packages/react/src/icon/Icon.tsx"),utils=__webpack_require__("./packages/react/src/icon/utils.tsx"),AlertIcon=__webpack_require__("./packages/react/src/icon/icons/AlertIcon.tsx"),AlertFilledIcon=__webpack_require__("./packages/react/src/icon/icons/AlertFilledIcon.tsx"),ArrowUpIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowUpIcon.tsx"),ArrowDownIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowDownIcon.tsx"),ArrowLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowLeftIcon.tsx"),ArrowRightIcon=__webpack_require__("./packages/react/src/icon/icons/ArrowRightIcon.tsx"),AvatarIcon=__webpack_require__("./packages/react/src/icon/icons/AvatarIcon.tsx"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),CalendarIcon=(0,Icon.I)((0,emotion_react_jsx_runtime_browser_esm.BX)(react.Fragment,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M8 3C8 4.5621 8 5.4379 8 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M16 3C16 4.5621 16 5.4379 16 7"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("path",{d:"M21 20V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20Z"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)("line",{x1:"3",y1:"12",x2:"21",y2:"12"})]}),"CalendarIcon");try{CalendarIcon.displayName="CalendarIcon",CalendarIcon.__docgenInfo={description:"",displayName:"CalendarIcon",props:{"aria-hidden":{defaultValue:null,description:"",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"border"'},{value:'"focus"'},{value:'"inherit"'},{value:'"action"'},{value:'"muted"'},{value:'"accent"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'ResponsiveProp<"sm" | "md" | "lg" | "xl">'}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"]={docgenInfo:CalendarIcon.__docgenInfo,name:"CalendarIcon",path:"packages/react/src/icon/icons/CalendarIcon.tsx#CalendarIcon"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./packages/react/src/icon/icons/ChartBarIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChartLineIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ChevronUpIcon.tsx");var ChevronDownIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronDownIcon.tsx"),ChevronLeftIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronLeftIcon.tsx"),ChevronRightIcon=__webpack_require__("./packages/react/src/icon/icons/ChevronRightIcon.tsx"),CloseIcon=__webpack_require__("./packages/react/src/icon/icons/CloseIcon.tsx"),InfoIcon=(__webpack_require__("./packages/react/src/icon/icons/CopyIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DeleteIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/DownloadIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/EditIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/FilterIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/HelpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/InfoIcon.tsx")),InfoFilledIcon=__webpack_require__("./packages/react/src/icon/icons/InfoFilledIcon.tsx"),ProgressBlockedIcon=(__webpack_require__("./packages/react/src/icon/icons/PrintIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressBlockedIcon.tsx")),ProgressDoingIcon=__webpack_require__("./packages/react/src/icon/icons/ProgressDoingIcon.tsx"),ExternalLinkIcon=__webpack_require__("./packages/react/src/icon/icons/ExternalLinkIcon.tsx"),SearchIcon=(__webpack_require__("./packages/react/src/icon/icons/MenuIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/SearchIcon.tsx")),SuccessIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessIcon.tsx"),SuccessFilledIcon=__webpack_require__("./packages/react/src/icon/icons/SuccessFilledIcon.tsx"),ProgressTodoIcon=(__webpack_require__("./packages/react/src/icon/icons/ThumbsDownIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ThumbsUpIcon.tsx"),__webpack_require__("./packages/react/src/icon/icons/ProgressTodoIcon.tsx")),UploadIcon=__webpack_require__("./packages/react/src/icon/icons/UploadIcon.tsx"),WarningIcon=__webpack_require__("./packages/react/src/icon/icons/WarningIcon.tsx"),WarningFilledIcon=__webpack_require__("./packages/react/src/icon/icons/WarningFilledIcon.tsx")},"./packages/react/src/select/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Select:()=>_Select__WEBPACK_IMPORTED_MODULE_0__.P});var _Select__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/select/Select.tsx")},"./packages/react/src/text-input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>textInputStyles,o:()=>TextInput});var _home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/field/index.ts"),_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),_excluded=["label","hideOptionalLabel","required","hint","message","invalid","block","maxWidth","id","type"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function TextInput(_ref,ref){var label=_ref.label,hideOptionalLabel=_ref.hideOptionalLabel,required=_ref.required,hint=_ref.hint,message=_ref.message,invalid=_ref.invalid,block=_ref.block,_ref$maxWidth=_ref.maxWidth,maxWidth=void 0===_ref$maxWidth?"md":_ref$maxWidth,id=_ref.id,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,props=(0,_home_runner_work_agds_next_agds_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),styles=textInputStyles({block,maxWidth,invalid});return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)(_field__WEBPACK_IMPORTED_MODULE_2__.gN,{label,hideOptionalLabel,required:Boolean(required),hint,message,invalid,id,children:function children(a11yProps){return(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.tZ)("input",_objectSpread(_objectSpread({ref,css:styles},a11yProps),{},{type},props))}})})),textInputStyles=function textInputStyles(_ref2){var block=_ref2.block,maxWidth=_ref2.maxWidth,invalid=_ref2.invalid,multiline=_ref2.multiline;return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({appearance:"none",boxSizing:"border-box",paddingLeft:(0,_core__WEBPACK_IMPORTED_MODULE_3__.XH)(1),paddingRight:(0,_core__WEBPACK_IMPORTED_MODULE_3__.XH)(1),margin:0,background:_core__WEBPACK_IMPORTED_MODULE_3__._X.backgroundBody,borderWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderWidth.lg,borderStyle:"solid",borderColor:_core__WEBPACK_IMPORTED_MODULE_3__._X.border,borderRadius:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.borderRadius,color:_core__WEBPACK_IMPORTED_MODULE_3__._X.foregroundText,fontFamily:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.font.body},_core__WEBPACK_IMPORTED_MODULE_3__.lB.input.md),maxWidth&&{maxWidth:_core__WEBPACK_IMPORTED_MODULE_3__.tokens.maxWidth.field[maxWidth]}),block&&{maxWidth:"none",display:"block",width:"100%"}),invalid&&{backgroundColor:_core__WEBPACK_IMPORTED_MODULE_3__._X.systemErrorMuted,borderColor:_core__WEBPACK_IMPORTED_MODULE_3__._X.systemError}),multiline&&{paddingTop:(0,_core__WEBPACK_IMPORTED_MODULE_3__.XH)(.5),paddingBottom:(0,_core__WEBPACK_IMPORTED_MODULE_3__.XH)(.5),height:"auto",minHeight:"6rem"}),{},{"&:disabled":{cursor:"not-allowed",opacity:.3},"&:focus":_core__WEBPACK_IMPORTED_MODULE_3__.lB.outline})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"search"'},{value:'"none"'},{value:'"email"'},{value:'"tel"'},{value:'"url"'},{value:'"numeric"'},{value:'"decimal"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"md"},description:"The maximum width of the field.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-input/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"packages/react/src/text-input/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}try{textInputStyles.displayName="textInputStyles",textInputStyles.__docgenInfo={description:"",displayName:"textInputStyles",props:{block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"md"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/text-input/TextInput.tsx#textInputStyles"]={docgenInfo:textInputStyles.__docgenInfo,name:"textInputStyles",path:"packages/react/src/text-input/TextInput.tsx#textInputStyles"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/text-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TextInput:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.o,c:()=>_TextInput__WEBPACK_IMPORTED_MODULE_0__.c});var _TextInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/text-input/TextInput.tsx")}}]);