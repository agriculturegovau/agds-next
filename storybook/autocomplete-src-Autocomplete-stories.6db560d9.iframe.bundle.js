"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[3545],{"./packages/autocomplete/src/Autocomplete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Block:()=>Block,Disabled:()=>Disabled,HideOptionalLabel:()=>HideOptionalLabel,Invalid:()=>Invalid,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Autocomplete_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),Combobox=__webpack_require__("./packages/combobox/src/Combobox.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Autocomplete(props){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Combobox.h,_objectSpread(_objectSpread({},props),{},{showDropdownTrigger:!1,clearable:!0,emptyResultsMessage:"No results found."}))}try{Autocomplete.displayName="Autocomplete",Autocomplete.__docgenInfo={description:"",displayName:"Autocomplete",props:{label:{defaultValue:null,description:"Describes the purpose of the field.",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!1,type:{name:"((value: Option | null) => void)"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!1,type:{name:"DefaultComboboxOption | null"}},block:{defaultValue:null,description:"If true, the field will stretch to the fill the width of its container.",name:"block",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Provides extra information about the field.",name:"hint",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"If true, the invalid state will be rendered.",name:"invalid",required:!1,type:{name:"boolean"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the label.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},required:{defaultValue:null,description:'If false, "(optional)" will be appended to the label.',name:"required",required:!1,type:{name:"boolean"}},loadOptions:{defaultValue:null,description:"Function to be used when options need to be loaded over the network.",name:"loadOptions",required:!1,type:{name:"((inputValue: string) => Promise<Option[]>)"}},renderItem:{defaultValue:null,description:"Used to override the default item rendering.",name:"renderItem",required:!1,type:{name:"((item: Option, inputValue: string) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/autocomplete/src/Autocomplete.tsx#Autocomplete"]={docgenInfo:Autocomplete.__docgenInfo,name:"Autocomplete",path:"packages/autocomplete/src/Autocomplete.tsx#Autocomplete"})}catch(__react_docgen_typescript_loader_error){}function Autocomplete_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Autocomplete_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Autocomplete_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Autocomplete_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Autocomplete_stories={title:"forms/Autocomplete",component:Autocomplete};var _loadOptions,defaultArgs={label:"Find your state",hint:"Start typing to see results",loadOptions:(_loadOptions=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,new Promise((function(resolve){return setTimeout(resolve,3e3)}));case 2:return _context.abrupt("return",[{label:"Australian Capital Territory",value:"act"},{label:"New South Wales",value:"nsw"},{label:"Northern Territory",value:"nt"},{label:"Queensland",value:"qld"},{label:"South Australia",value:"sa"},{label:"Tasmania",value:"tas"},{label:"Victoria",value:"vic"},{label:"Western Australia",value:"wa"}]);case 3:case"end":return _context.stop()}}),_callee)}))),function loadOptions(){return _loadOptions.apply(this,arguments)})},Template=function Template(args){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(Autocomplete,Autocomplete_stories_objectSpread({},args))},Basic=Template.bind({});Basic.args=Autocomplete_stories_objectSpread({},defaultArgs);var Required=Template.bind({});Required.args=Autocomplete_stories_objectSpread(Autocomplete_stories_objectSpread({},defaultArgs),{},{required:!0});var HideOptionalLabel=Template.bind({});HideOptionalLabel.args=Autocomplete_stories_objectSpread(Autocomplete_stories_objectSpread({},defaultArgs),{},{hideOptionalLabel:!0});var Disabled=Template.bind({});Disabled.args=Autocomplete_stories_objectSpread(Autocomplete_stories_objectSpread({},defaultArgs),{},{disabled:!0});var Invalid=Template.bind({});Invalid.args=Autocomplete_stories_objectSpread(Autocomplete_stories_objectSpread({},defaultArgs),{},{invalid:!0,message:"City is required"});var Block=Template.bind({});Block.args=Autocomplete_stories_objectSpread(Autocomplete_stories_objectSpread({},defaultArgs),{},{block:!0}),Basic.parameters=Autocomplete_stories_objectSpread({storySource:{source:"(args) => (\n\t<Autocomplete {...args} />\n)"}},Basic.parameters),Required.parameters=Autocomplete_stories_objectSpread({storySource:{source:"(args) => (\n\t<Autocomplete {...args} />\n)"}},Required.parameters),HideOptionalLabel.parameters=Autocomplete_stories_objectSpread({storySource:{source:"(args) => (\n\t<Autocomplete {...args} />\n)"}},HideOptionalLabel.parameters),Disabled.parameters=Autocomplete_stories_objectSpread({storySource:{source:"(args) => (\n\t<Autocomplete {...args} />\n)"}},Disabled.parameters),Invalid.parameters=Autocomplete_stories_objectSpread({storySource:{source:"(args) => (\n\t<Autocomplete {...args} />\n)"}},Invalid.parameters),Block.parameters=Autocomplete_stories_objectSpread({storySource:{source:"(args) => (\n\t<Autocomplete {...args} />\n)"}},Block.parameters);var __namedExportsOrder=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block"]}}]);