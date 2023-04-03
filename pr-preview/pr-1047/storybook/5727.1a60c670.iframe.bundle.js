"use strict";(self.webpackChunkagds_next=self.webpackChunkagds_next||[]).push([[5727],{"./packages/react/src/task-list/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ax:()=>TaskList,IL:()=>TaskListContainer,QJ:()=>TaskListHeading,dK:()=>TaskListItemButton,hB:()=>TaskListItemLink,GE:()=>TaskListItemsContainer});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),box=__webpack_require__("./packages/react/src/box/index.ts"),emotion_react_jsx_runtime_browser_esm=__webpack_require__("./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js"),TaskListContainer=function TaskListContainer(_ref){var children=_ref.children;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Stack,{gap:1.5,children})};try{TaskListContainer.displayName="TaskListContainer",TaskListContainer.__docgenInfo={description:"",displayName:"TaskListContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/task-list/TaskListContainer.tsx#TaskListContainer"]={docgenInfo:TaskListContainer.__docgenInfo,name:"TaskListContainer",path:"packages/react/src/task-list/TaskListContainer.tsx#TaskListContainer"})}catch(__react_docgen_typescript_loader_error){}var heading=__webpack_require__("./packages/react/src/heading/index.ts"),src_text=__webpack_require__("./packages/react/src/text/index.ts"),TaskListHeading=function TaskListHeading(_ref){var stepsCompleted=_ref.stepsCompleted,totalSteps=_ref.totalSteps;return(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Stack,{gap:1,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(heading.H2,{children:"Task list"}),(0,emotion_react_jsx_runtime_browser_esm.BX)(src_text.Text,{fontSize:"sm",color:"muted",children:[stepsCompleted," of ",totalSteps," steps completed"]})]})};try{TaskListHeading.displayName="TaskListHeading",TaskListHeading.__docgenInfo={description:"",displayName:"TaskListHeading",props:{stepsCompleted:{defaultValue:null,description:"",name:"stepsCompleted",required:!0,type:{name:"number"}},totalSteps:{defaultValue:null,description:"",name:"totalSteps",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/task-list/TaskListHeading.tsx#TaskListHeading"]={docgenInfo:TaskListHeading.__docgenInfo,name:"TaskListHeading",path:"packages/react/src/task-list/TaskListHeading.tsx#TaskListHeading"})}catch(__react_docgen_typescript_loader_error){}var _ref2={name:"90i3qn",styles:"counter-reset:task-count"},TaskListItemsContainer=function TaskListItemsContainer(_ref){var children=_ref.children,_ref$as=_ref.as,as=void 0===_ref$as?"ul":_ref$as;return(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Stack,{as,borderTop:!0,css:_ref2,children})};try{TaskListItemsContainer.displayName="TaskListItemsContainer",TaskListItemsContainer.__docgenInfo={description:"",displayName:"TaskListItemsContainer",props:{as:{defaultValue:{value:"ul"},description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/task-list/TaskListItemsContainer.tsx#TaskListItemsContainer"]={docgenInfo:TaskListItemsContainer.__docgenInfo,name:"TaskListItemsContainer",path:"packages/react/src/task-list/TaskListItemsContainer.tsx#TaskListItemsContainer"})}catch(__react_docgen_typescript_loader_error){}var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),text_link=__webpack_require__("./packages/react/src/text-link/index.ts"),icon=__webpack_require__("./packages/react/src/icon/index.ts"),core=__webpack_require__("./packages/react/src/core/index.ts"),src_button=__webpack_require__("./packages/react/src/button/index.ts"),a11y=__webpack_require__("./packages/react/src/a11y/index.ts"),_excluded=["children","message","status","ordered"],_excluded2=["children"],_excluded3=["as","children","status","message","ordered","className"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TaskListItemLink=function TaskListItemLink(_ref){var children=_ref.children,message=_ref.message,status=_ref.status,ordered=_ref.ordered,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TaskListItem,_objectSpread(_objectSpread({as:text_link.TextLink,status,message,ordered},props),{},{children}))},TaskListItemButton=function TaskListItemButton(_ref2){var children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return(0,emotion_react_jsx_runtime_browser_esm.tZ)(TaskListItem,_objectSpread(_objectSpread({as:src_button.Yd},props),{},{children}))},_ref4={name:"kd5rf1",styles:"counter-increment:task-count"},_ref6={name:"1r7keks",styles:"order:1"},_ref7={name:"8mbnz1",styles:"order:3"},TaskListItem=function TaskListItem(_ref3){var _objectSpread2,as=_ref3.as,children=_ref3.children,status=_ref3.status,message=_ref3.message,ordered=_ref3.ordered,className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3),_statusMap$status=statusMap[status],Icon=_statusMap$status.icon,iconColor=_statusMap$status.iconColor,label=_statusMap$status.label;return(0,emotion_react_jsx_runtime_browser_esm.tZ)("li",{css:_ref4,children:(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,_objectSpread(_objectSpread({as,flexDirection:["column","row"],justifyContent:"space-between",alignItems:["flex-start","center"],className,gap:1,paddingY:1,paddingX:[.75,1],fontFamily:"body",color:"text",borderBottom:!0,width:"100%",focus:!0,css:(0,emotion_react_browser_esm.iv)(_objectSpread(_objectSpread(_objectSpread({position:"relative",textDecoration:"none"},"doneRecently"===status&&{backgroundColor:core.boxPalette.systemSuccessMuted}),"doing"===status&&{"&:before":{content:'""',background:core.boxPalette.foregroundAction,position:"absolute",top:0,bottom:0,left:0,width:core.tokens.borderWidth.xl}}),{},(_objectSpread2={},(0,defineProperty.Z)(_objectSpread2,"[".concat("data-agds-task-list-item-text","]"),_objectSpread(_objectSpread({},core.lB.underline),{},{color:core.boxPalette.foregroundAction})),(0,defineProperty.Z)(_objectSpread2,"&:hover",(0,defineProperty.Z)({backgroundColor:core.boxPalette.backgroundShade},"[".concat("data-agds-task-list-item-text","]"),{textDecoration:"none",color:core.boxPalette.foregroundText})),_objectSpread2)),"","")},props),{},{children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{as:"span",gap:[0,1],children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(box.Flex,{as:"span",alignItems:"center",children:(0,emotion_react_jsx_runtime_browser_esm.tZ)(Icon,{size:"xl",color:iconColor,css:(0,core.mq)({display:["none","block"]})})}),(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{as:"span",flexDirection:"column",gap:.5,children:[(0,emotion_react_jsx_runtime_browser_esm.BX)(src_text.Text,_objectSpread(_objectSpread({},(0,defineProperty.Z)({},"data-agds-task-list-item-text","")),{},{fontSize:["md","lg"],lineHeight:"heading",fontWeight:"bold",color:"action",css:(0,emotion_react_browser_esm.iv)(_objectSpread({order:2},ordered&&{"&:before":{content:"counter(task-count)"}}),"",""),children:[ordered&&(0,emotion_react_jsx_runtime_browser_esm.tZ)("span",{"aria-hidden":"true",children:". "}),children,(0,emotion_react_jsx_runtime_browser_esm.tZ)(a11y.VisuallyHidden,{children:"."})]})),(0,emotion_react_jsx_runtime_browser_esm.BX)(box.Flex,{as:"span",gap:.25,alignItems:"center",css:_ref6,children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(Icon,{size:"md",color:iconColor,css:(0,core.mq)({display:["block","none"]})}),(0,emotion_react_jsx_runtime_browser_esm.BX)(src_text.Text,{as:"span",fontSize:["xs","sm"],lineHeight:"nospace",children:[label,(0,emotion_react_jsx_runtime_browser_esm.tZ)(a11y.VisuallyHidden,{children:"."})]})]}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(src_text.Text,{color:"muted",fontSize:"sm",css:_ref7,children:message})]})]}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(icon.LZ,{color:"action",size:["sm","lg"]})]}))})},statusMap={blocked:{label:"Cannot start yet",icon:icon.Zs,iconColor:"border"},doing:{label:"In progress",icon:icon.NB,iconColor:"action"},todo:{label:"Not started",icon:icon.Q2,iconColor:"action"},done:{label:"Completed",icon:icon.qE,iconColor:"success"},doneRecently:{label:"Completed",icon:icon.qE,iconColor:"success"}};try{TaskListItemLink.displayName="TaskListItemLink",TaskListItemLink.__docgenInfo={description:"",displayName:"TaskListItemLink",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"blocked"'},{value:'"doing"'},{value:'"todo"'},{value:'"done"'},{value:'"doneRecently"'}]}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},ordered:{defaultValue:null,description:"",name:"ordered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/task-list/TaskListItem.tsx#TaskListItemLink"]={docgenInfo:TaskListItemLink.__docgenInfo,name:"TaskListItemLink",path:"packages/react/src/task-list/TaskListItem.tsx#TaskListItemLink"})}catch(__react_docgen_typescript_loader_error){}try{TaskListItemButton.displayName="TaskListItemButton",TaskListItemButton.__docgenInfo={description:"",displayName:"TaskListItemButton",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"blocked"'},{value:'"doing"'},{value:'"todo"'},{value:'"done"'},{value:'"doneRecently"'}]}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},ordered:{defaultValue:null,description:"",name:"ordered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/task-list/TaskListItem.tsx#TaskListItemButton"]={docgenInfo:TaskListItemButton.__docgenInfo,name:"TaskListItemButton",path:"packages/react/src/task-list/TaskListItem.tsx#TaskListItemButton"})}catch(__react_docgen_typescript_loader_error){}var TaskList_excluded=["label"];function TaskList_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function TaskList_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?TaskList_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TaskList_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TaskList=function TaskList(_ref){var items=_ref.items,ordered=_ref.ordered,stepsCompleted=items.filter((function(item){return"done"===item.status})).length,totalSteps=items.length;return(0,emotion_react_jsx_runtime_browser_esm.BX)(TaskListContainer,{children:[(0,emotion_react_jsx_runtime_browser_esm.tZ)(TaskListHeading,{stepsCompleted,totalSteps}),(0,emotion_react_jsx_runtime_browser_esm.tZ)(TaskListItemsContainer,{as:ordered?"ol":"ul",children:items.map((function(_ref2,index){var label=_ref2.label,props=(0,objectWithoutProperties.Z)(_ref2,TaskList_excluded);return isItemLink(props)?(0,emotion_react_jsx_runtime_browser_esm.tZ)(TaskListItemLink,TaskList_objectSpread(TaskList_objectSpread({ordered},props),{},{children:label}),index):(0,emotion_react_jsx_runtime_browser_esm.tZ)(TaskListItemButton,TaskList_objectSpread(TaskList_objectSpread({ordered},props),{},{children:label}),index)}))})]})},isItemLink=function isItemLink(item){return"href"in item};try{TaskList.displayName="TaskList",TaskList.__docgenInfo={description:"",displayName:"TaskList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TaskListItem[]"}},ordered:{defaultValue:null,description:"",name:"ordered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/task-list/TaskList.tsx#TaskList"]={docgenInfo:TaskList.__docgenInfo,name:"TaskList",path:"packages/react/src/task-list/TaskList.tsx#TaskList"})}catch(__react_docgen_typescript_loader_error){}}}]);