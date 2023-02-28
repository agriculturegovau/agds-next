"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[2712],{"./example-site/components/PreArrivalReport/EditVesselDetailsPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EditVesselDetails:()=>EditVesselDetails,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EditVesselDetailsPage_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),data=__webpack_require__("./example-site/components/PreArrivalReport/data.ts"),ag_ds_next_react_box_cjs=__webpack_require__("./packages/react/box/dist/ag.ds-next-react-box.cjs.js"),ag_ds_next_react_button_cjs=__webpack_require__("./packages/react/button/dist/ag.ds-next-react-button.cjs.js"),ag_ds_next_react_fieldset_cjs=__webpack_require__("./packages/react/fieldset/dist/ag.ds-next-react-fieldset.cjs.js"),ag_ds_next_react_form_stack_cjs=__webpack_require__("./packages/react/form-stack/dist/ag.ds-next-react-form-stack.cjs.js"),ag_ds_next_react_heading_cjs=__webpack_require__("./packages/react/heading/dist/ag.ds-next-react-heading.cjs.js"),ag_ds_next_react_text_input_cjs=__webpack_require__("./packages/react/text-input/dist/ag.ds-next-react-text-input.cjs.js"),ag_ds_next_react_control_input_cjs=__webpack_require__("./packages/react/control-input/dist/ag.ds-next-react-control-input.cjs.js"),ag_ds_next_react_select_cjs=__webpack_require__("./packages/react/select/dist/ag.ds-next-react-select.cjs.js"),PreArrivalReportLayout=__webpack_require__("./example-site/components/PreArrivalReport/PreArrivalReportLayout.tsx"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),EditVesselDetailsPage=function EditVesselDetailsPage(_ref){var data=_ref.data,loading=_ref.loading,onSubmit=_ref.onSubmit;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(PreArrivalReportLayout.B,{id:data.id,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_box_cjs.Stack,{gap:3,children:(0,emotion_react_jsx_runtime_browser_esm.tZ)("form",{onSubmit,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(ag_ds_next_react_form_stack_cjs.FormStack,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_fieldset_cjs.Fieldset,{legend:(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_heading_cjs.H2,{children:"Vessel Particulars"}),hint:"Supporting information for provide details subheading. All fields are required unless marked optional.",children:(0,emotion_react_jsx_runtime_browser_esm.BX)(ag_ds_next_react_form_stack_cjs.FormStack,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Vessel name",id:"vesselName",required:!0,maxWidth:"xl",value:data.vesselDetails.vesselName}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Country of registry",id:"countryOfRegistry",required:!0,maxWidth:"xl",value:data.vesselDetails.countryOfRegistry}),(0,emotion_react_jsx_runtime_browser_esm.BX)(ag_ds_next_react_box_cjs.Flex,{gap:1,alignItems:"flex-end",children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"IMO",id:"imo",required:!0,maxWidth:"xl",value:data.vesselDetails.imo}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_control_input_cjs.Checkbox,{checked:!1,children:"tick if none"})]}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Official registration number",id:"registration",required:!0,maxWidth:"xl",value:data.vesselDetails.registration}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_select_cjs.Select,{label:"Vessel type",id:"vesselType",options:[{value:"a",label:"Container vessel"},{value:"b",label:"Submarine"},{value:"c",label:"Kayak"}],value:data.vesselDetails.vesselType,maxWidth:"xl"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Overall length",id:"overallLength",required:!0,maxWidth:"xl",value:data.vesselDetails.overallLength}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Year built",inputMode:"numeric",pattern:"[0-9]*",maxWidth:"xl",value:data.vesselDetails.yearBuilt}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Gross tonnage",inputMode:"numeric",pattern:"[0-9]*",maxWidth:"xl",value:data.vesselDetails.grossTonnage}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Net tonnage",inputMode:"numeric",pattern:"[0-9]*",maxWidth:"xl",value:data.vesselDetails.netTonnage}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Cargo docks",maxWidth:"xl",value:data.vesselDetails.cargoDocks}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Cargo holds",maxWidth:"xl",value:data.vesselDetails.cargoHolds}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_text_input_cjs.TextInput,{label:"Cargo tanks",maxWidth:"xl",value:data.vesselDetails.cargoTanks})]})}),(0,emotion_react_jsx_runtime_browser_esm.BX)(ag_ds_next_react_button_cjs.ButtonGroup,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_button_cjs.Button,{type:"submit",loading,children:"Submit"}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(ag_ds_next_react_button_cjs.Button,{variant:"secondary",onClick:function onClick(){},children:"Discard"})]})]})})})})};try{EditVesselDetailsPage.displayName="EditVesselDetailsPage",EditVesselDetailsPage.__docgenInfo={description:"",displayName:"EditVesselDetailsPage",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:'{ readonly id: "PA123456789"; readonly status: "draft" | "submitted"; readonly vesselDetails: { readonly vesselName: "Boaty McBoatface"; readonly countryOfRegistry: "United Kingdom"; readonly imo: "1234567"; ... 9 more ...; readonly vesselEmail: "boaty@boatface.com"; }; ... 6 more ...; readonly covid19: {}; }'}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(event: FormEvent<HTMLFormElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example-site/components/PreArrivalReport/EditVesselDetailsPage.tsx#EditVesselDetailsPage"]={docgenInfo:EditVesselDetailsPage.__docgenInfo,name:"EditVesselDetailsPage",path:"example-site/components/PreArrivalReport/EditVesselDetailsPage.tsx#EditVesselDetailsPage"})}catch(__react_docgen_typescript_loader_error){}var MarsAppLayout=__webpack_require__("./example-site/components/PreArrivalReport/MarsAppLayout.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}const EditVesselDetailsPage_stories={title:"MARS/Pre-Arrival Report/EditVesselDetails",component:EditVesselDetailsPage,parameters:{layout:"fullscreen"}};var EditVesselDetails=function EditVesselDetails(){return(0,emotion_react_jsx_runtime_browser_esm.tZ)(MarsAppLayout.j9,{children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(EditVesselDetailsPage,{data:data.o$,loading:!0,onSubmit:console.log})})};EditVesselDetails.parameters=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({storySource:{source:"() => {\n\treturn (\n\t\t<MarsAppLayout>\n\t\t\t<EditVesselDetailsPage\n\t\t\t\tdata={preArrivalReportData}\n\t\t\t\tloading\n\t\t\t\tonSubmit={console.log}\n\t\t\t/>\n\t\t</MarsAppLayout>\n\t);\n}"}},EditVesselDetails.parameters);var __namedExportsOrder=["EditVesselDetails"]},"./packages/react/control-input/dist/ag.ds-next-react-control-input.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/control-input/index.ts"),unregister()},"./packages/react/fieldset/dist/ag.ds-next-react-fieldset.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/fieldset/index.ts"),unregister()},"./packages/react/form-stack/dist/ag.ds-next-react-form-stack.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/form-stack/index.ts"),unregister()},"./packages/react/select/dist/ag.ds-next-react-select.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/select/index.ts"),unregister()},"./packages/react/src/control-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Checkbox:()=>_Checkbox__WEBPACK_IMPORTED_MODULE_1__.X,ControlGroup:()=>_ControlGroup__WEBPACK_IMPORTED_MODULE_0__.e,Radio:()=>_Radio__WEBPACK_IMPORTED_MODULE_2__.Y});var _ControlGroup__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/control-input/ControlGroup.tsx"),_Checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/control-input/Checkbox.tsx"),_Radio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/control-input/Radio.tsx")},"./packages/react/src/fieldset/FieldsetHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FieldsetHint});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/text/index.ts"),_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/core/index.ts"),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),FieldsetHint=function FieldsetHint(_ref){var children=_ref.children,id=_ref.id;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{id,css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(.75)},"",""),children}):(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_text__WEBPACK_IMPORTED_MODULE_1__.Text,{fontSize:"sm",color:"muted",display:"block",css:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({marginTop:(0,_core__WEBPACK_IMPORTED_MODULE_2__.mapSpacing)(.75)},"",""),id,children})};try{FieldsetHint.displayName="FieldsetHint",FieldsetHint.__docgenInfo={description:"",displayName:"FieldsetHint",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetHint.tsx#FieldsetHint"]={docgenInfo:FieldsetHint.__docgenInfo,name:"FieldsetHint",path:"packages/react/src/fieldset/FieldsetHint.tsx#FieldsetHint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/fieldset/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fieldset:()=>Fieldset,OB:()=>FieldsetContainer,Qv:()=>FieldsetLegend});var core=__webpack_require__("./packages/react/src/core/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");var _ref2={name:"1bfrawq",styles:"padding:0;margin:0;border:none"},FieldsetContainer=function FieldsetContainer(_ref){var ariaDescribedby=_ref["aria-describedby"],children=_ref.children,id=_ref.id;return(0,emotion_react_jsx_runtime_browser_esm.tZ)("fieldset",{"aria-describedby":ariaDescribedby,id,css:_ref2,children})};try{FieldsetContainer.displayName="FieldsetContainer",FieldsetContainer.__docgenInfo={description:"",displayName:"FieldsetContainer",props:{"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetContainer.tsx#FieldsetContainer"]={docgenInfo:FieldsetContainer.__docgenInfo,name:"FieldsetContainer",path:"packages/react/src/fieldset/FieldsetContainer.tsx#FieldsetContainer"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),FieldsetLegend=function FieldsetLegend(_ref){var children=_ref.children;return(0,react.isValidElement)(children)?(0,emotion_react_jsx_runtime_browser_esm.tZ)("legend",{children}):(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{as:"legend",fontWeight:"bold",fontSize:"lg",lineHeight:"heading",children})};try{FieldsetLegend.displayName="FieldsetLegend",FieldsetLegend.__docgenInfo={description:"",displayName:"FieldsetLegend",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetLegend.tsx#FieldsetLegend"]={docgenInfo:FieldsetLegend.__docgenInfo,name:"FieldsetLegend",path:"packages/react/src/fieldset/FieldsetLegend.tsx#FieldsetLegend"})}catch(__react_docgen_typescript_loader_error){}var FieldsetHint=__webpack_require__("./packages/react/src/fieldset/FieldsetHint.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),FieldsetContent=function FieldsetContent(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)("div",{css:(0,emotion_react_browser_esm.iv)({marginTop:(0,core.mapSpacing)(2)},"",""),children})};try{FieldsetContent.displayName="FieldsetContent",FieldsetContent.__docgenInfo={description:"",displayName:"FieldsetContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/FieldsetContent.tsx#FieldsetContent"]={docgenInfo:FieldsetContent.__docgenInfo,name:"FieldsetContent",path:"packages/react/src/fieldset/FieldsetContent.tsx#FieldsetContent"})}catch(__react_docgen_typescript_loader_error){}var Fieldset=function Fieldset(_ref){var children=_ref.children,hint=_ref.hint,legend=_ref.legend,id=_ref.id,_useFieldsetIds=useFieldsetIds(id),fieldsetId=_useFieldsetIds.fieldsetId,hintId=_useFieldsetIds.hintId;return(0,emotion_react_jsx_runtime_browser_esm.BX)(FieldsetContainer,{id:fieldsetId,"aria-describedby":hint?hintId:void 0,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(FieldsetLegend,{children:legend}),hint?(0,emotion_react_jsx_runtime_browser_esm.tZ)(FieldsetHint.f,{id:hintId,children:hint}):null,(0,emotion_react_jsx_runtime_browser_esm.tZ)(FieldsetContent,{children})]})},useFieldsetIds=function useFieldsetIds(idProp){var autoId=(0,core.Me)(idProp);return{fieldsetId:idProp||"fieldset-".concat(autoId),hintId:"fieldset-".concat(autoId,"-hint")}};try{Fieldset.displayName="Fieldset",Fieldset.__docgenInfo={description:"",displayName:"Fieldset",props:{hint:{defaultValue:null,description:"Provides extra information about the fieldset.",name:"hint",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"Describes the purpose of the group of fields.",name:"legend",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/Fieldset.tsx#Fieldset"]={docgenInfo:Fieldset.__docgenInfo,name:"Fieldset",path:"packages/react/src/fieldset/Fieldset.tsx#Fieldset"})}catch(__react_docgen_typescript_loader_error){}try{useFieldsetIds.displayName="useFieldsetIds",useFieldsetIds.__docgenInfo={description:"",displayName:"useFieldsetIds",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/fieldset/Fieldset.tsx#useFieldsetIds"]={docgenInfo:useFieldsetIds.__docgenInfo,name:"useFieldsetIds",path:"packages/react/src/fieldset/Fieldset.tsx#useFieldsetIds"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/form-stack/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FormStack:()=>FormStack});var box=__webpack_require__("./packages/react/src/box/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js");function FormStack(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{flexDirection:"column",gap:2,children})}try{FormStack.displayName="FormStack",FormStack.__docgenInfo={description:"",displayName:"FormStack",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/form-stack/FormStack.tsx#FormStack"]={docgenInfo:FormStack.__docgenInfo,name:"FormStack",path:"packages/react/src/form-stack/FormStack.tsx#FormStack"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/select/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Select:()=>_Select__WEBPACK_IMPORTED_MODULE_0__.P});var _Select__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/react/src/select/Select.tsx")},"./packages/react/text-input/dist/ag.ds-next-react-text-input.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unregister=__webpack_require__("./node_modules/@preconstruct/hook/noop.js").___internalHook("/","../../../..","../..");module.exports=__webpack_require__("./packages/react/src/text-input/index.ts"),unregister()}}]);