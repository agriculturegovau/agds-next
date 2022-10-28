(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({170:"react-src-page-alert-PageAlert-stories",182:"react-src-ag-branding-Logo-stories",256:"react-src-skeleton-SkeletonBox-stories",273:"react-src-hero-banner-HeroCategoryBanner-HeroCategoryBanner-stories",373:"react-src-date-picker-DateRangePicker-stories",633:"react-src-skip-link-SkipLinks-stories",785:"react-src-a11y-ExternalLinkCallout-stories",902:"react-src-textarea-Textarea-stories",987:"react-src-text-link-TextLink-stories",1093:"CardsWithRemoteData",1165:"react-src-box-Box-stories",1169:"react-src-fieldset-Fieldset-stories",1207:"react-src-footer-Footer-stories",1268:"react-src-field-Field-stories",1387:"react-src-a11y-VisuallyHidden-stories",1716:"react-src-switch-Switch-stories",1845:"react-src-text-Text-stories",1868:"react-src-skeleton-SkeletonHeading-stories",1883:"react-src-keyword-list-KeywordList-stories",2052:"react-src-prose-Prose-stories",2078:"react-src-button-ButtonGroup-stories",2215:"react-src-badge-IndicatorDot-stories",2334:"react-src-sub-nav-SubNav-stories",2359:"react-src-box-Flex-stories",2722:"react-src-core-tokens-stories",2793:"react-src-combobox-Combobox-stories",2798:"react-src-file-upload-FileUpload-stories",3010:"react-src-control-input-Radio-stories",3445:"react-src-text-input-TextInput-stories",3492:"react-src-autocomplete-Autocomplete-stories",3713:"react-src-text-link-TextLinkExternal-stories",3728:"react-src-progress-indicator-ProgressIndicator-stories",3997:"react-src-badge-StatusBadge-stories",4043:"react-src-badge-NotificationBadge-stories",4357:"react-src-date-picker-DatePicker-stories",4568:"react-src-table-Table-stories",4795:"react-src-search-box-SearchBox-stories",4846:"react-src-details-Details-stories",5057:"react-src-box-Stack-stories",5153:"react-src-accordion-Accordion-stories",5354:"react-src-call-to-action-CallToAction-stories",5393:"react-src-modal-Modal-stories",5485:"react-src-columns-Column-stories",5667:"react-src-tags-Tags-stories",5715:"react-src-button-Button-stories",5792:"react-src-heading-heading-stories",6020:"react-src-control-input-Checkbox-stories",6099:"react-src-link-list-LinkList-stories",6253:"TableWithRemoteData",6263:"react-src-inpage-nav-InpageNav-stories",6581:"react-src-file-upload-FileUploadFile-stories",6586:"react-src-loading-LoadingBlanket-stories",6739:"react-src-control-input-ControlGroup-stories",6880:"react-src-breadcrumbs-Breadcrumbs-stories",7604:"react-src-header-Header-stories",7624:"react-src-main-nav-MainNav-stories",7824:"react-src-direction-link-DirectionLink-stories",7969:"react-src-skeleton-SkeletonText-stories",8179:"react-src-pagination-Pagination-stories",8235:"react-src-task-list-TaskList-stories",8308:"react-src-hero-banner-HeroBanner-HeroBanner-stories",8331:"react-src-loading-LoadingDots-stories",8334:"react-src-hero-banner-HeroSubcategoryBanner-HeroSubcategoryBanner-stories",8399:"react-src-content-PageContent-stories",8511:"react-src-side-nav-SideNav-stories",8654:"kitchenSink",8829:"react-src-content-SectionContent-stories",9239:"react-src-pagination-PaginationButtons-stories",9289:"react-src-select-Select-stories",9358:"react-src-summary-list-SummaryList-stories",9451:"react-src-date-picker-Calendar-stories",9461:"react-src-file-upload-FileRejection-stories",9582:"react-src-icon-Icon-stories",9832:"react-src-card-Card-stories",9853:"react-src-callout-Callout-stories",9885:"react-src-content-Content-stories"}[chunkId]||chunkId)+"."+{57:"7d691d3f",170:"a18844a5",182:"a7e84381",256:"201ec246",273:"8df56ef3",373:"c620b007",633:"6f49279e",745:"39c0e984",785:"4cf44097",857:"960bf9e4",902:"262c4c94",987:"d3d3fbf3",1093:"988ba191",1165:"e8de126b",1169:"dabd1422",1207:"a9d7b438",1268:"5f767b8f",1324:"20fc9eaa",1387:"c312b1d3",1395:"75b4e9e2",1472:"7b200ec9",1716:"d8f1f247",1845:"9641ceda",1868:"cc22d7c2",1883:"59d9ae84",2052:"b4d39b0d",2065:"5ebc23ab",2078:"58e61cef",2130:"998e8ecd",2202:"761769e9",2215:"dfd5ff5f",2268:"8dfea95a",2334:"ee4b0ef7",2359:"a516bbc1",2458:"1930c207",2551:"c4f84806",2722:"5bb9427c",2793:"ccdf9240",2798:"38656aaa",2897:"dfaf9544",3010:"c538fcf8",3445:"b4e62958",3492:"fe234562",3713:"ea5b17e0",3728:"a967e682",3752:"ffd32c36",3997:"463151e1",4025:"5199b0df",4043:"a3d5fef1",4357:"07349635",4450:"9621dff0",4568:"7482202f",4641:"fc49605d",4787:"8cb37980",4795:"0c12d7ef",4846:"ec137a07",5051:"b3318346",5057:"63889c09",5153:"b74430f5",5229:"0320e7fb",5354:"0cfb2395",5393:"6654ebc2",5485:"8995370c",5667:"8a067195",5715:"f6039dae",5727:"830e4831",5792:"0c039cc7",5853:"41d15a27",5935:"51a53d44",6020:"8ffed84a",6099:"62c3810d",6253:"02d11df2",6263:"84517bde",6581:"a6ea2ba6",6586:"af4ef3ba",6627:"9c3fb1e5",6701:"40d46e7e",6739:"912d3805",6880:"7a60bbdd",7294:"0c5e7b02",7604:"7961850b",7624:"e3bc54f5",7824:"76a8983d",7969:"57dd7e45",8100:"fec30427",8179:"57a38801",8235:"0c1b1a7e",8273:"3757ee31",8308:"9151b1f9",8331:"f43849db",8334:"4c44a84d",8399:"1c076c0b",8511:"4a9aefdc",8654:"c3e6ce54",8829:"0a93adfe",8979:"f12fbbc7",9065:"6b9c5c03",9115:"983db424",9239:"efcbc4f1",9289:"ffecc8ec",9318:"6d13cbd8",9358:"2b4bcd47",9451:"e9c8867e",9461:"130e63c8",9582:"f1223f98",9640:"7f41bbf3",9795:"b977009f",9807:"f2510dbc",9832:"9ddada58",9853:"f7ecf2cd",9885:"9f646e40",9937:"b7ccf26e"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="agds-next:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","agds-next:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkagds_next=self.webpackChunkagds_next||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();