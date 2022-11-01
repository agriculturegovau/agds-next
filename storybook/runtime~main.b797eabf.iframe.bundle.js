(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({89:"text-src-Text-stories",128:"table-src-Table-stories",417:"switch-src-Switch-stories",629:"box-src-Stack-stories",654:"box-src-Box-stories",816:"accordion-src-Accordion-stories",826:"textarea-src-Textarea-stories",829:"skeleton-src-SkeletonText-stories",895:"a11y-src-ExternalLinkCallout-stories",1031:"date-picker-src-Calendar-stories",1093:"CardsWithRemoteData",1466:"heading-src-heading-stories",1988:"pagination-src-Pagination-stories",2331:"date-picker-src-DatePicker-stories",2356:"control-input-src-Checkbox-stories",2379:"card-src-Card-stories",2469:"core-src-tokens-stories",2585:"ag-branding-src-Logo-stories",2607:"content-src-PageContent-stories",2900:"hero-banner-src-HeroCategoryBanner-HeroCategoryBanner-stories",2955:"file-upload-src-FileUpload-stories",2965:"skeleton-src-SkeletonBox-stories",2972:"loading-src-LoadingDots-stories",3116:"button-src-Button-stories",3372:"icon-src-Icon-stories",3408:"select-src-Select-stories",3441:"header-src-Header-stories",3505:"inpage-nav-src-InpageNav-stories",3529:"main-nav-src-MainNav-stories",3545:"autocomplete-src-Autocomplete-stories",3818:"task-list-src-TaskList-stories",4035:"file-upload-src-FileUploadFile-stories",4132:"date-picker-src-DateRangePicker-stories",4152:"progress-indicator-src-ProgressIndicator-stories",4198:"direction-link-src-DirectionLink-stories",4361:"details-src-Details-stories",4438:"fieldset-src-Fieldset-stories",4473:"search-box-src-SearchBox-stories",4493:"breadcrumbs-src-Breadcrumbs-stories",4832:"file-upload-src-FileRejection-stories",5035:"call-to-action-src-CallToAction-stories",5285:"control-input-src-Radio-stories",5401:"skip-link-src-SkipLinks-stories",5408:"loading-src-LoadingBlanket-stories",5537:"skeleton-src-SkeletonHeading-stories",5734:"summary-list-src-SummaryList-stories",6149:"combobox-src-Combobox-stories",6192:"sub-nav-src-SubNav-stories",6253:"TableWithRemoteData",6363:"modal-src-Modal-stories",6374:"footer-src-Footer-stories",6823:"columns-src-Column-stories",6894:"content-src-Content-stories",6930:"prose-src-Prose-stories",7037:"text-link-src-TextLink-stories",7065:"box-src-Flex-stories",7299:"keyword-list-src-KeywordList-stories",7395:"control-input-src-ControlGroup-stories",7550:"hero-banner-src-HeroBanner-HeroBanner-stories",7624:"page-alert-src-PageAlert-stories",7906:"hero-banner-src-HeroSubcategoryBanner-HeroSubcategoryBanner-stories",8054:"tags-src-Tags-stories",8142:"side-nav-src-SideNav-stories",8379:"callout-src-Callout-stories",8523:"text-link-src-TextLinkExternal-stories",8533:"badge-src-NotificationBadge-stories",8654:"kitchenSink",8807:"button-src-ButtonGroup-stories",8979:"field-src-Field-stories",9523:"link-list-src-LinkList-stories",9569:"a11y-src-VisuallyHidden-stories",9729:"text-input-src-TextInput-stories",9750:"content-src-SectionContent-stories",9780:"pagination-src-PaginationButtons-stories",9915:"badge-src-IndicatorDot-stories",9990:"badge-src-StatusBadge-stories"}[chunkId]||chunkId)+"."+{89:"8afc9f85",128:"beea1777",138:"a2344a4a",245:"5816a609",417:"5e2aed39",629:"29100336",654:"1c5a6a55",732:"956be06c",745:"39c0e984",748:"95bf03d1",816:"55dc4132",826:"b3951bb9",829:"f5675149",857:"960bf9e4",895:"e81e1c8d",1031:"25ceeb50",1093:"931e24f2",1334:"4e2653d4",1395:"75b4e9e2",1466:"34c06366",1472:"7b200ec9",1789:"a5afbe9a",1988:"083ef752",2331:"b9499185",2356:"b32fb4f1",2379:"e74e329a",2469:"3fef4262",2551:"c4f84806",2585:"03db994c",2607:"0bbdb54b",2897:"dfaf9544",2900:"1e358ba9",2955:"9d3b62bb",2965:"291ea8df",2972:"578750e1",3006:"faf2abcd",3116:"99778ce8",3132:"50df6476",3331:"767a1fb4",3372:"374f74f1",3408:"4c456431",3441:"bf740d2f",3505:"d76fd4fe",3529:"ee22ed28",3545:"2d14b3f9",3752:"ffd32c36",3818:"62ecfda5",4035:"c39b41bc",4132:"ca13bc69",4152:"ba5f5a4a",4198:"53b83527",4361:"2da4923d",4438:"6392a4dd",4473:"043b10c5",4493:"34b47489",4832:"f7bf19f4",5035:"6fd2999c",5051:"b3318346",5055:"a5a69201",5229:"0320e7fb",5285:"a534b0e8",5401:"306172fe",5408:"94c65e84",5537:"e586b86d",5734:"6fbfe6c8",5853:"41d15a27",5935:"51a53d44",6149:"cdaf8de4",6192:"6e615190",6253:"6217239e",6363:"a86a4d43",6374:"d98bc3ed",6429:"861ea55d",6701:"40d46e7e",6823:"a5291ac5",6882:"43bd6295",6894:"8c526500",6930:"dec8d6ae",7037:"e979348b",7065:"aaac63c6",7294:"0c5e7b02",7299:"ddfa6f19",7395:"cc6bb01e",7550:"8521cdfe",7624:"f8475815",7906:"b280e4dc",8003:"b80e6e9c",8054:"beeb814b",8100:"fec30427",8142:"ac2e082d",8273:"3757ee31",8379:"91f1c13a",8523:"78a4f6e4",8533:"c7896d77",8654:"92a113e7",8807:"e57d5843",8974:"17592b58",8979:"6b3b2bc9",9036:"ecdbc39a",9115:"983db424",9242:"f2f2f45e",9481:"04b9ad94",9523:"67f8bdb2",9569:"30f3bdb6",9600:"5a39af0c",9729:"77b9b3fe",9750:"d025955c",9780:"841755f5",9807:"f2510dbc",9911:"11790f55",9915:"c8380104",9990:"3005c4e3"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="agds-next:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","agds-next:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkagds_next=self.webpackChunkagds_next||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();