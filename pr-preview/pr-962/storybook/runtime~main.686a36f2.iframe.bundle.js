(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({170:"react-src-page-alert-PageAlert-stories",182:"react-src-ag-branding-Logo-stories",256:"react-src-skeleton-SkeletonBox-stories",273:"react-src-hero-banner-HeroCategoryBanner-HeroCategoryBanner-stories",373:"react-src-date-picker-DateRangePicker-stories",633:"react-src-skip-link-SkipLinks-stories",785:"react-src-a11y-ExternalLinkCallout-stories",902:"react-src-textarea-Textarea-stories",987:"react-src-text-link-TextLink-stories",1093:"CardsWithRemoteData",1165:"react-src-box-Box-stories",1169:"react-src-fieldset-Fieldset-stories",1207:"react-src-footer-Footer-stories",1268:"react-src-field-Field-stories",1387:"react-src-a11y-VisuallyHidden-stories",1716:"react-src-switch-Switch-stories",1845:"react-src-text-Text-stories",1868:"react-src-skeleton-SkeletonHeading-stories",1927:"react-src-avatar-Avatar-stories",2052:"react-src-prose-Prose-stories",2078:"react-src-button-ButtonGroup-stories",2215:"react-src-badge-IndicatorDot-stories",2334:"react-src-sub-nav-SubNav-stories",2359:"react-src-box-Flex-stories",2722:"react-src-core-tokens-stories",2793:"react-src-combobox-Combobox-stories",2798:"react-src-file-upload-FileUpload-stories",3010:"react-src-control-input-Radio-stories",3204:"react-src-global-alert-GlobalAlert-stories",3445:"react-src-text-input-TextInput-stories",3455:"react-src-file-upload-FileUploadRejectedFileList-stories",3492:"react-src-autocomplete-Autocomplete-stories",3713:"react-src-text-link-TextLinkExternal-stories",3728:"react-src-progress-indicator-ProgressIndicator-stories",3997:"react-src-badge-StatusBadge-stories",4043:"react-src-badge-NotificationBadge-stories",4082:"KitchenSink",4357:"react-src-date-picker-DatePicker-stories",4568:"react-src-table-Table-stories",4795:"react-src-search-box-SearchBox-stories",4846:"react-src-details-Details-stories",5057:"react-src-box-Stack-stories",5153:"react-src-accordion-Accordion-stories",5354:"react-src-call-to-action-CallToAction-stories",5393:"react-src-modal-Modal-stories",5485:"react-src-columns-Column-stories",5576:"components-FormExampleSignIn-stories",5626:"components-FormExampleSinglePage-stories",5667:"react-src-tags-Tags-stories",5715:"react-src-button-Button-stories",5792:"react-src-heading-heading-stories",6020:"react-src-control-input-Checkbox-stories",6099:"react-src-link-list-LinkList-stories",6111:"react-src-file-upload-FileUploadFileList-stories",6253:"TableWithRemoteData",6263:"react-src-inpage-nav-InpageNav-stories",6581:"react-src-file-upload-FileUploadFile-stories",6586:"react-src-loading-LoadingBlanket-stories",6739:"react-src-control-input-ControlGroup-stories",6880:"react-src-breadcrumbs-Breadcrumbs-stories",7604:"react-src-header-Header-stories",7624:"react-src-main-nav-MainNav-stories",7824:"react-src-direction-link-DirectionLink-stories",7969:"react-src-skeleton-SkeletonText-stories",8179:"react-src-pagination-Pagination-stories",8235:"react-src-task-list-TaskList-stories",8308:"react-src-hero-banner-HeroBanner-HeroBanner-stories",8331:"react-src-loading-LoadingDots-stories",8334:"react-src-hero-banner-HeroSubcategoryBanner-HeroSubcategoryBanner-stories",8399:"react-src-content-PageContent-stories",8511:"react-src-side-nav-SideNav-stories",8688:"react-src-search-input-SearchInput-stories",8829:"react-src-content-SectionContent-stories",9159:"react-src-file-input-FileInput-stories",9239:"react-src-pagination-PaginationButtons-stories",9289:"react-src-select-Select-stories",9358:"react-src-summary-list-SummaryList-stories",9451:"react-src-date-picker-Calendar-stories",9479:"react-src-file-upload-FileUploadRejectedFile-stories",9582:"react-src-icon-Icon-stories",9832:"react-src-card-Card-stories",9853:"react-src-callout-Callout-stories",9885:"react-src-content-Content-stories"}[chunkId]||chunkId)+"."+{57:"d1c35159",170:"0e43a650",182:"e1c29f8c",256:"2889f48f",273:"76be0d29",373:"80baf973",633:"551b6874",745:"39c0e984",785:"fa948d77",902:"e4821fcb",980:"eeb992e3",987:"d3d3fbf3",1093:"6363bc67",1165:"e8de126b",1169:"0092188a",1207:"91534bd7",1268:"a65e04d7",1387:"4919af67",1472:"7b200ec9",1716:"57d804c2",1845:"ac23a9e8",1868:"581d5e42",1927:"3a0702de",2052:"fbb6626e",2078:"e6a76e4a",2130:"55556cb3",2215:"df0d7bd7",2268:"8e46d865",2334:"3409bed2",2359:"a516bbc1",2458:"7a7fe8e4",2544:"dc9b2ca7",2551:"c4f84806",2706:"792bd7a2",2722:"41abb38b",2793:"c3c46ab1",2798:"194074ce",2897:"dfaf9544",3010:"a42dbb35",3204:"9f086ecf",3445:"d35f9d7e",3455:"ec9df8db",3492:"34cdcba4",3713:"37f7c437",3728:"32d69509",3937:"fed4313c",3997:"9e2fa07a",4043:"a774a3c4",4082:"e8920b08",4235:"f7114a36",4260:"55a9aa4a",4357:"f7672c2b",4450:"0b447f0e",4568:"b98f3e95",4641:"ece13578",4795:"a5f7a9cb",4846:"e68b3be7",5051:"b3318346",5057:"63889c09",5153:"c933a2e3",5229:"0320e7fb",5354:"bb9d4bbb",5393:"24dd89ac",5485:"637cc626",5525:"f07ed843",5527:"35b5655f",5576:"8f1f13a2",5626:"346a62e4",5667:"b1274a8a",5693:"9ec9d808",5715:"7e2c8c59",5727:"428593b7",5792:"e210c25e",5844:"90a96338",5853:"41d15a27",5935:"51a53d44",6020:"c29476a7",6099:"94c88cd4",6111:"5e88a748",6253:"591eb8f6",6263:"dcdcf7c4",6414:"88aa792d",6581:"8bb2040e",6586:"bd035f3f",6650:"0868994f",6701:"40d46e7e",6739:"03d971d6",6880:"e59ac168",7294:"0c5e7b02",7604:"cca769d5",7624:"f3546763",7824:"33466fec",7868:"e8a45221",7969:"1901a8d0",8100:"fec30427",8159:"7c607c2d",8179:"3c44fa0f",8235:"5264d9f1",8273:"3757ee31",8308:"c16c2e39",8331:"f43849db",8334:"104dafb4",8399:"16cfa07e",8448:"85d7e81b",8511:"8525ed14",8688:"80ce02c3",8829:"875fc383",9065:"4be8b391",9115:"983db424",9159:"1a5e8237",9239:"9a8c3f53",9289:"66b81f2b",9358:"7c9a0599",9451:"75e45ef8",9479:"1a6b86c8",9579:"38d28447",9582:"dfa09a11",9795:"b977009f",9807:"f2510dbc",9832:"5f1dbbbf",9853:"605da56d",9885:"079114ee",9937:"7cd003ed"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="agds-next:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","agds-next:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkagds_next=self.webpackChunkagds_next||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();