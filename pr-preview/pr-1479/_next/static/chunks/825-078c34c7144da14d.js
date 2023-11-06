"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[825],{5954:function(u,m,p){p.d(m,{YF:function(){return useFloating}});var g=p(5772),k=p(7378),I=p(1542),_="undefined"!=typeof document?k.useLayoutEffect:k.useEffect;function deepEqual(u,m){let p,g,k;if(u===m)return!0;if(typeof u!=typeof m)return!1;if("function"==typeof u&&u.toString()===m.toString())return!0;if(u&&m&&"object"==typeof u){if(Array.isArray(u)){if((p=u.length)!=m.length)return!1;for(g=p;0!=g--;)if(!deepEqual(u[g],m[g]))return!1;return!0}if((p=(k=Object.keys(u)).length)!==Object.keys(m).length)return!1;for(g=p;0!=g--;)if(!({}).hasOwnProperty.call(m,k[g]))return!1;for(g=p;0!=g--;){let p=k[g];if(("_owner"!==p||!u.$$typeof)&&!deepEqual(u[p],m[p]))return!1}return!0}return u!=u&&m!=m}function getDPR(u){if("undefined"==typeof window)return 1;let m=u.ownerDocument.defaultView||window;return m.devicePixelRatio||1}function roundByDPR(u,m){let p=getDPR(u);return Math.round(m*p)/p}function useLatestRef(u){let m=k.useRef(u);return _(()=>{m.current=u}),m}function useFloating(u){void 0===u&&(u={});let{placement:m="bottom",strategy:p="absolute",middleware:G=[],platform:j,elements:{reference:V,floating:q}={},transform:Z=!0,whileElementsMounted:U,open:z}=u,[Y,$]=k.useState({x:0,y:0,strategy:p,placement:m,middlewareData:{},isPositioned:!1}),[J,Q]=k.useState(G);deepEqual(J,G)||Q(G);let[X,K]=k.useState(null),[ee,et]=k.useState(null),en=k.useCallback(u=>{u!=eu.current&&(eu.current=u,K(u))},[K]),er=k.useCallback(u=>{u!==ea.current&&(ea.current=u,et(u))},[et]),eo=V||X,ei=q||ee,eu=k.useRef(null),ea=k.useRef(null),ec=k.useRef(Y),el=useLatestRef(U),ef=useLatestRef(j),es=k.useCallback(()=>{if(!eu.current||!ea.current)return;let u={placement:m,strategy:p,middleware:J};ef.current&&(u.platform=ef.current),(0,g.oo)(eu.current,ea.current,u).then(u=>{let m={...u,isPositioned:!0};ed.current&&!deepEqual(ec.current,m)&&(ec.current=m,I.flushSync(()=>{$(m)}))})},[J,m,p,ef]);_(()=>{!1===z&&ec.current.isPositioned&&(ec.current.isPositioned=!1,$(u=>({...u,isPositioned:!1})))},[z]);let ed=k.useRef(!1);_(()=>(ed.current=!0,()=>{ed.current=!1}),[]),_(()=>{if(eo&&(eu.current=eo),ei&&(ea.current=ei),eo&&ei){if(el.current)return el.current(eo,ei,es);es()}},[eo,ei,es,el]);let em=k.useMemo(()=>({reference:eu,floating:ea,setReference:en,setFloating:er}),[en,er]),ep=k.useMemo(()=>({reference:eo,floating:ei}),[eo,ei]),eg=k.useMemo(()=>{let u={position:p,left:0,top:0};if(!ep.floating)return u;let m=roundByDPR(ep.floating,Y.x),g=roundByDPR(ep.floating,Y.y);return Z?{...u,transform:"translate("+m+"px, "+g+"px)",...getDPR(ep.floating)>=1.5&&{willChange:"transform"}}:{position:p,left:m,top:g}},[p,Z,ep.floating,Y.x,Y.y]);return k.useMemo(()=>({...Y,update:es,refs:em,elements:ep,floatingStyles:eg}),[Y,es,em,ep,eg])}},1230:function(u,m,p){function _extends(){return(_extends=Object.assign||function(u){for(var m=1;m<arguments.length;m++){var p=arguments[m];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(u[g]=p[g])}return u}).apply(this,arguments)}p.d(m,{ZP:function(){return ea}});var g,k,I=p(7378),_="data-focus-lock",G="data-focus-lock-disabled",j={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},InFocusGuard=function(u){var m=u.children;return I.createElement(I.Fragment,null,I.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:j}),m,m&&I.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:j}))};InFocusGuard.propTypes={},InFocusGuard.defaultProps={children:null};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var __assign=function(){return(__assign=Object.assign||function(u){for(var m,p=1,g=arguments.length;p<g;p++)for(var k in m=arguments[p])Object.prototype.hasOwnProperty.call(m,k)&&(u[k]=m[k]);return u}).apply(this,arguments)};function ItoI(u){return u}function innerCreateMedium(u,m){void 0===m&&(m=ItoI);var p=[],g=!1;return{read:function(){if(g)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return p.length?p[p.length-1]:u},useMedium:function(u){var k=m(u,g);return p.push(k),function(){p=p.filter(function(u){return u!==k})}},assignSyncMedium:function(u){for(g=!0;p.length;){var m=p;p=[],m.forEach(u)}p={push:function(m){return u(m)},filter:function(){return p}}},assignMedium:function(u){g=!0;var m=[];if(p.length){var k=p;p=[],k.forEach(u),m=p}var executeQueue=function(){var p=m;m=[],p.forEach(u)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),p={push:function(u){m.push(u),cycle()},filter:function(u){return m=m.filter(u),p}}}}}function createMedium(u,m){return void 0===m&&(m=ItoI),innerCreateMedium(u,m)}var V=createMedium({},function(u){return{target:u.target,currentTarget:u.currentTarget}}),q=createMedium(),Z=createMedium(),U=((g=innerCreateMedium(null)).options=__assign({async:!0,ssr:!1},{async:!0}),g),z=[],Y=I.forwardRef(function(u,m){var p,g,k,Z,Y,$=I.useState(),J=$[0],Q=$[1],X=I.useRef(),K=I.useRef(!1),ee=I.useRef(null),et=u.children,en=u.disabled,er=u.noFocusGuards,eo=u.persistentFocus,ei=u.crossFrame,eu=u.autoFocus,ea=(u.allowTextSelection,u.group),ec=u.className,el=u.whiteList,ef=u.hasPositiveIndices,es=u.shards,ed=void 0===es?z:es,em=u.as,ep=void 0===em?"div":em,eg=u.lockProps,eh=void 0===eg?{}:eg,ev=u.sideCar,ey=u.returnFocus,eb=u.focusOptions,ew=u.onActivation,ex=u.onDeactivation,eE=I.useState({})[0],eT=I.useCallback(function(){ee.current=ee.current||document&&document.activeElement,X.current&&ew&&ew(X.current),K.current=!0},[ew]),eA=I.useCallback(function(){K.current=!1,ex&&ex(X.current)},[ex]);(0,I.useEffect)(function(){en||(ee.current=null)},[]);var eN=I.useCallback(function(u){var m=ee.current;if(m&&m.focus){var p="function"==typeof ey?ey(m):ey;if(p){var g="object"==typeof p?p:void 0;ee.current=null,u?Promise.resolve().then(function(){return m.focus(g)}):m.focus(g)}}},[ey]),eF=I.useCallback(function(u){K.current&&V.useMedium(u)},[]),eO=q.useMedium,eP=I.useCallback(function(u){X.current!==u&&(X.current=u,Q(u))},[]),eR=_extends(((Y={})[G]=en&&"disabled",Y[_]=ea,Y),eh),eS=!0!==er,eC=eS&&"tail"!==er,ek=(p=[m,eP],g=void 0,k=function(u){return p.forEach(function(m){return"function"==typeof m?m(u):m&&(m.current=u),m})},(Z=(0,I.useState)(function(){return{value:g,callback:k,facade:{get current(){return Z.value},set current(value){var u=Z.value;u!==value&&(Z.value=value,Z.callback(value,u))}}}})[0]).callback=k,Z.facade);return I.createElement(I.Fragment,null,eS&&[I.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:en?-1:0,style:j}),ef?I.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:en?-1:1,style:j}):null],!en&&I.createElement(ev,{id:eE,sideCar:U,observed:J,disabled:en,persistentFocus:eo,crossFrame:ei,autoFocus:eu,whiteList:el,shards:ed,onActivation:eT,onDeactivation:eA,returnFocus:eN,focusOptions:eb}),I.createElement(ep,_extends({ref:ek},eR,{className:ec,onBlur:eO,onFocus:eF}),et),eC&&I.createElement("div",{"data-focus-guard":!0,tabIndex:en?-1:0,style:j}))});function _setPrototypeOf(u,m){return(_setPrototypeOf=Object.setPrototypeOf||function(u,m){return u.__proto__=m,u})(u,m)}Y.propTypes={},Y.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var toArray=function(u){for(var m=Array(u.length),p=0;p<u.length;++p)m[p]=u[p];return m},asArray=function(u){return Array.isArray(u)?u:[u]},getActiveElement=function(){return document.activeElement?document.activeElement.shadowRoot?document.activeElement.shadowRoot.activeElement:document.activeElement:void 0},focusIsHidden=function(){var u=document&&getActiveElement();return!!u&&toArray(document.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(m){return m.contains(u)})},filterNested=function(u){for(var m=new Set,p=u.length,g=0;g<p;g+=1)for(var k=g+1;k<p;k+=1){var I=u[g].compareDocumentPosition(u[k]);(I&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&m.add(k),(I&Node.DOCUMENT_POSITION_CONTAINS)>0&&m.add(g)}return u.filter(function(u,p){return!m.has(p)})},getTopParent=function(u){return u.parentNode?getTopParent(u.parentNode):u},getAllAffectedNodes=function(u){return asArray(u).filter(Boolean).reduce(function(u,m){var p=m.getAttribute(_);return u.push.apply(u,p?filterNested(toArray(getTopParent(m).querySelectorAll("[".concat(_,'="').concat(p,'"]:not([').concat(G,'="disabled"])')))):[m]),u},[])},focusInside=function(u){var m=document&&getActiveElement();return!!m&&(!m.dataset||!m.dataset.focusGuard)&&getAllAffectedNodes(u).reduce(function(u,p){return u||p.contains(m)||!!toArray(p.querySelectorAll("iframe")).some(function(u){return u===document.activeElement})},!1)},isElementHidden=function(u){if(u.nodeType!==Node.ELEMENT_NODE)return!1;var m=window.getComputedStyle(u,null);return!!m&&!!m.getPropertyValue&&("none"===m.getPropertyValue("display")||"hidden"===m.getPropertyValue("visibility"))},isVisibleCached=function(u,m){var p,g=u.get(m);if(void 0!==g)return g;var k=(p=isVisibleCached.bind(void 0,u),!m||m===document||m&&m.nodeType===Node.DOCUMENT_NODE||!isElementHidden(m)&&p(m.parentNode&&m.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?m.parentNode.host:m.parentNode));return u.set(m,k),k},getDataset=function(u){return u.dataset},isHTMLInputElement=function(u){return"INPUT"===u.tagName},isRadioElement=function(u){return isHTMLInputElement(u)&&"radio"===u.type},isGuard=function(u){var m;return!!(u&&(null===(m=getDataset(u))||void 0===m?void 0:m.focusGuard))},isNotAGuard=function(u){return!isGuard(u)},isDefined=function(u){return!!u},correctNode=function(u,m){return isRadioElement(u)&&u.name&&m.filter(isRadioElement).filter(function(m){return m.name===u.name}).filter(function(u){return u.checked})[0]||u},correctNodes=function(u){var m=new Set;return u.forEach(function(p){return m.add(correctNode(p,u))}),u.filter(function(u){return m.has(u)})},pickFirstFocus=function(u){return u[0]&&u.length>1?correctNode(u[0],u):u[0]},pickFocusable=function(u,m){return u.length>1?u.indexOf(correctNode(u[m],u)):m},$="NEW_FOCUS",newFocus=function(u,m,p,g){var k=u.length,I=u[0],_=u[k-1],G=isGuard(p);if(!(p&&u.indexOf(p)>=0)){var j=void 0!==p?m.indexOf(p):-1,V=g?m.indexOf(g):j,q=g?u.indexOf(g):-1,Z=j-V,U=m.indexOf(I),z=m.indexOf(_),Y=correctNodes(m),J=(void 0!==p?Y.indexOf(p):-1)-(g?Y.indexOf(g):j),Q=pickFocusable(u,0),X=pickFocusable(u,k-1);if(-1===j||-1===q)return $;if(!Z&&q>=0)return q;if(j<=U&&G&&Math.abs(Z)>1)return X;if(j>=z&&G&&Math.abs(Z)>1)return Q;if(Z&&Math.abs(J)>1)return q;if(j<=U)return X;if(j>z)return Q;if(Z)return Math.abs(Z)>1?q:(k+q+Z)%k}},tabSort=function(u,m){var p=u.tabIndex-m.tabIndex,g=u.index-m.index;if(p){if(!u.tabIndex)return 1;if(!m.tabIndex)return -1}return p||g},orderByTabIndex=function(u,m,p){return toArray(u).map(function(u,m){return{node:u,index:m,tabIndex:p&&-1===u.tabIndex?(u.dataset||{}).focusGuard?0:-1:u.tabIndex}}).filter(function(u){return!m||u.tabIndex>=0}).sort(tabSort)},J="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",Q="".concat(J,", [data-focus-guard]"),getFocusables=function(u,m){return u.reduce(function(u,p){return u.concat(toArray(p.querySelectorAll(m?Q:J)),p.parentNode?toArray(p.parentNode.querySelectorAll(J)).filter(function(u){return u===p}):[])},[])},filterFocusable=function(u,m){return toArray(u).filter(function(u){return isVisibleCached(m,u)}).filter(function(u){return!((isHTMLInputElement(u)||"BUTTON"===u.tagName)&&("hidden"===u.type||u.disabled))&&!u.ariaDisabled})},getTabbableNodes=function(u,m,p){return orderByTabIndex(filterFocusable(getFocusables(u,p),m),!0,p)},getAllTabbableNodes=function(u,m){return orderByTabIndex(filterFocusable(getFocusables(u),m),!1)},getParents=function(u,m){return void 0===m&&(m=[]),m.push(u),u.parentNode&&getParents(u.parentNode,m),m},getCommonParent=function(u,m){for(var p=getParents(u),g=getParents(m),k=0;k<p.length;k+=1){var I=p[k];if(g.indexOf(I)>=0)return I}return!1},getTopCommonParent=function(u,m,p){var g=asArray(u),k=asArray(m),I=g[0],_=!1;return k.filter(Boolean).forEach(function(u){_=getCommonParent(_||u,u)||_,p.filter(Boolean).forEach(function(u){var m=getCommonParent(I,u);m&&(_=!_||m.contains(_)?m:getCommonParent(m,_))})}),_},reorderNodes=function(u,m){var p=new Map;return m.forEach(function(u){return p.set(u.node,u)}),u.map(function(u){return p.get(u)}).filter(isDefined)},getFocusMerge=function(u,m){var p=document&&getActiveElement(),g=getAllAffectedNodes(u).filter(isNotAGuard),k=getTopCommonParent(p||u,u,g),I=new Map,_=getAllTabbableNodes(g,I),G=getTabbableNodes(g,I).filter(function(u){return isNotAGuard(u.node)});if(G[0]||(G=_)[0]){var j=getAllTabbableNodes([k],I).map(function(u){return u.node}),V=reorderNodes(j,G),q=V.map(function(u){return u.node}),Z=newFocus(q,j,p,m);if(Z===$){var U,z=_.map(function(u){return u.node}).filter((U=g.reduce(function(u,m){return u.concat(filterFocusable(toArray(m.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(u){return getFocusables([u])}).reduce(function(u,m){return u.concat(m)},[]),I))},[]),function(u){var m;return u.autofocus||!!(null===(m=getDataset(u))||void 0===m?void 0:m.autofocus)||U.indexOf(u)>=0}));return{node:z&&z.length?pickFirstFocus(z):pickFirstFocus(q)}}return void 0===Z?Z:V[Z]}},focusOn=function(u,m){"focus"in u&&u.focus(m),"contentWindow"in u&&u.contentWindow&&u.contentWindow.focus()},X=0,K=!1,es2015=function(u,m,p){void 0===p&&(p={});var g=getFocusMerge(u,m);if(!K&&g){if(X>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),K=!0,setTimeout(function(){K=!1},1);return}X++,focusOn(g.node,p.focusOptions),X--}},getFocusabledIn=function(u){var m=getAllAffectedNodes(u).filter(isNotAGuard),p=getTopCommonParent(u,u,m),g=new Map,k=getTabbableNodes([p],g,!0),I=getTabbableNodes(m,g).filter(function(u){return isNotAGuard(u.node)}).map(function(u){return u.node});return k.map(function(u){var m=u.node;return{node:m,index:u.index,lockItem:I.indexOf(m)>=0,guard:isGuard(m)}})};function deferAction(u){var m=window.setImmediate;void 0!==m?m(u):setTimeout(u,1)}var ee=null,et=null,en=null,er=!1,recordPortal=function(u,m){en={observerNode:u,portaledElement:m}};function autoGuard(u,m,p,g){var k=null,I=u;do{var _=g[I];if(_.guard)_.node.dataset.focusAutoGuard&&(k=_);else if(_.lockItem){if(I!==u)return;k=null}else break}while((I+=p)!==m);k&&(k.node.tabIndex=0)}var extractRef=function(u){return u&&"current"in u?u.current:u},activateTrap=function(){var u=!1;if(ee){var m=ee,p=m.observed,g=m.persistentFocus,k=m.autoFocus,I=m.shards,_=m.crossFrame,G=m.focusOptions,j=p||en&&en.portaledElement,V=document&&document.activeElement;if(j){var q=[j].concat(I.map(extractRef).filter(Boolean));if((!V||(ee.whiteList||function(){return!0})(V))&&(g||(_?!!er:"meanwhile"===er)||!(document&&document.activeElement===document.body||focusIsHidden())||!et&&k)&&(j&&!(focusInside(q)||V&&q.some(function(u){return function checkInHost(u,m,p){return m&&(m.host===u&&(!m.activeElement||p.contains(m.activeElement))||m.parentNode&&checkInHost(u,m.parentNode,p))}(V,u,u)})||en&&en.portaledElement===V)&&(document&&!et&&V&&!k?(V.blur&&V.blur(),document.body.focus()):(u=es2015(q,et,{focusOptions:G}),en={})),er=!1,et=document&&document.activeElement),document){var Z=document&&document.activeElement,U=getFocusabledIn(q),z=U.map(function(u){return u.node}).indexOf(Z);z>-1&&(U.filter(function(u){var m=u.guard,p=u.node;return m&&p.dataset.focusAutoGuard}).forEach(function(u){return u.node.removeAttribute("tabIndex")}),autoGuard(z,U.length,1,U),autoGuard(z,-1,-1,U))}}}return u},onTrap=function(u){activateTrap()&&u&&(u.stopPropagation(),u.preventDefault())},onBlur=function(){return deferAction(activateTrap)},onWindowBlur=function(){er="just",setTimeout(function(){er="meanwhile"},0)},attachHandler=function(){document.addEventListener("focusin",onTrap),document.addEventListener("focusout",onBlur),window.addEventListener("blur",onWindowBlur)},detachHandler=function(){document.removeEventListener("focusin",onTrap),document.removeEventListener("focusout",onBlur),window.removeEventListener("blur",onWindowBlur)};V.assignSyncMedium(function(u){var m=u.target,p=u.currentTarget;p.contains(m)||recordPortal(p,m)}),q.assignMedium(onBlur),Z.assignMedium(function(u){return u({moveFocusInside:es2015,focusInside:focusInside})});var eo=(k=function(u){var m=u.slice(-1)[0];m&&!ee&&attachHandler();var p=ee,g=p&&m&&m.id===p.id;ee=m,!p||g||(p.onDeactivation(),u.filter(function(u){return u.id===p.id}).length||p.returnFocus(!m)),m?(et=null,g&&p.observed===m.observed||m.onActivation(),activateTrap(!0),deferAction(activateTrap)):(detachHandler(),et=null)},function(u){var m,p,g,_=[];function emitChange(){k(g=_.map(function(u){return u.props}).filter(function(u){return!u.disabled}))}var G=function(m){function SideEffect(){return m.apply(this,arguments)||this}SideEffect.prototype=Object.create(m.prototype),SideEffect.prototype.constructor=SideEffect,_setPrototypeOf(SideEffect,m),SideEffect.peek=function(){return g};var p=SideEffect.prototype;return p.componentDidMount=function(){_.push(this),emitChange()},p.componentDidUpdate=function(){emitChange()},p.componentWillUnmount=function(){var u=_.indexOf(this);_.splice(u,1),emitChange()},p.render=function(){return I.createElement(u,this.props)},SideEffect}(I.PureComponent);return m="displayName",p="SideEffect("+(u.displayName||u.name||"Component")+")",m in G?Object.defineProperty(G,m,{value:p,enumerable:!0,configurable:!0,writable:!0}):G[m]=p,G})(function(){return null}),ei=I.forwardRef(function(u,m){return I.createElement(Y,_extends({sideCar:eo,ref:m},u))}),eu=Y.propTypes||{};eu.sideCar,function(u,m){if(null!=u){var p,g,k={},I=Object.keys(u);for(g=0;g<I.length;g++)m.indexOf(p=I[g])>=0||(k[p]=u[p])}}(eu,["sideCar"]),ei.propTypes={};var ea=ei},3349:function(u,m,p){function t(u){return u.split("-")[1]}function e(u){return"y"===u?"height":"width"}function n(u){return u.split("-")[0]}function o(u){return["top","bottom"].includes(n(u))?"x":"y"}function i(u,m,p){let g,{reference:k,floating:I}=u,_=k.x+k.width/2-I.width/2,G=k.y+k.height/2-I.height/2,j=o(m),V=e(j),q=k[V]/2-I[V]/2,Z="x"===j;switch(n(m)){case"top":g={x:_,y:k.y-I.height};break;case"bottom":g={x:_,y:k.y+k.height};break;case"right":g={x:k.x+k.width,y:G};break;case"left":g={x:k.x-I.width,y:G};break;default:g={x:k.x,y:k.y}}switch(t(m)){case"start":g[j]-=q*(p&&Z?-1:1);break;case"end":g[j]+=q*(p&&Z?-1:1)}return g}p.d(m,{JB:function(){return s},RR:function(){return A},cv:function(){return L},dp:function(){return C},oo:function(){return r}});let r=async(u,m,p)=>{let{placement:g="bottom",strategy:k="absolute",middleware:I=[],platform:_}=p,G=I.filter(Boolean),j=await (null==_.isRTL?void 0:_.isRTL(m)),V=await _.getElementRects({reference:u,floating:m,strategy:k}),{x:q,y:Z}=i(V,g,j),U=g,z={},Y=0;for(let p=0;p<G.length;p++){let{name:I,fn:$}=G[p],{x:J,y:Q,data:X,reset:K}=await $({x:q,y:Z,initialPlacement:g,placement:U,strategy:k,middlewareData:z,rects:V,platform:_,elements:{reference:u,floating:m}});q=null!=J?J:q,Z=null!=Q?Q:Z,z={...z,[I]:{...z[I],...X}},K&&Y<=50&&(Y++,"object"==typeof K&&(K.placement&&(U=K.placement),K.rects&&(V=!0===K.rects?await _.getElementRects({reference:u,floating:m,strategy:k}):K.rects),{x:q,y:Z}=i(V,U,j)),p=-1)}return{x:q,y:Z,placement:U,strategy:k,middlewareData:z}};function a(u,m){return"function"==typeof u?u(m):u}function s(u){return{...u,top:u.y,left:u.x,right:u.x+u.width,bottom:u.y+u.height}}async function c(u,m){var p;void 0===m&&(m={});let{x:g,y:k,platform:I,rects:_,elements:G,strategy:j}=u,{boundary:V="clippingAncestors",rootBoundary:q="viewport",elementContext:Z="floating",altBoundary:U=!1,padding:z=0}=a(m,u),Y="number"!=typeof z?{top:0,right:0,bottom:0,left:0,...z}:{top:z,right:z,bottom:z,left:z},$=G[U?"floating"===Z?"reference":"floating":Z],J=s(await I.getClippingRect({element:null==(p=await (null==I.isElement?void 0:I.isElement($)))||p?$:$.contextElement||await (null==I.getDocumentElement?void 0:I.getDocumentElement(G.floating)),boundary:V,rootBoundary:q,strategy:j})),Q="floating"===Z?{..._.floating,x:g,y:k}:_.reference,X=await (null==I.getOffsetParent?void 0:I.getOffsetParent(G.floating)),K=await (null==I.isElement?void 0:I.isElement(X))&&await (null==I.getScale?void 0:I.getScale(X))||{x:1,y:1},ee=s(I.convertOffsetParentRelativeRectToViewportRelativeRect?await I.convertOffsetParentRelativeRectToViewportRelativeRect({rect:Q,offsetParent:X,strategy:j}):Q);return{top:(J.top-ee.top+Y.top)/K.y,bottom:(ee.bottom-J.bottom+Y.bottom)/K.y,left:(J.left-ee.left+Y.left)/K.x,right:(ee.right-J.right+Y.right)/K.x}}let g=Math.min,k=Math.max;["top","right","bottom","left"].reduce((u,m)=>u.concat(m,m+"-start",m+"-end"),[]);let I={left:"right",right:"left",bottom:"top",top:"bottom"};function y(u){return u.replace(/left|right|bottom|top/g,u=>I[u])}let _={start:"end",end:"start"};function v(u){return u.replace(/start|end/g,u=>_[u])}let A=function(u){return void 0===u&&(u={}),{name:"flip",options:u,async fn(m){var p,g,k,I;let{placement:_,middlewareData:G,rects:j,initialPlacement:V,platform:q,elements:Z}=m,{mainAxis:U=!0,crossAxis:z=!0,fallbackPlacements:Y,fallbackStrategy:$="bestFit",fallbackAxisSideDirection:J="none",flipAlignment:Q=!0,...X}=a(u,m),K=n(_),ee=n(V)===V,et=await (null==q.isRTL?void 0:q.isRTL(Z.floating)),en=Y||(ee||!Q?[y(V)]:function(u){let m=y(u);return[v(u),m,v(m)]}(V));Y||"none"===J||en.push(...function(u,m,p,g){let k=t(u),I=function(u,m,p){let g=["left","right"],k=["right","left"];switch(u){case"top":case"bottom":return p?m?k:g:m?g:k;case"left":case"right":return m?["top","bottom"]:["bottom","top"];default:return[]}}(n(u),"start"===p,g);return k&&(I=I.map(u=>u+"-"+k),m&&(I=I.concat(I.map(v)))),I}(V,Q,J,et));let er=[V,...en],eo=await c(m,X),ei=[],eu=(null==(p=G.flip)?void 0:p.overflows)||[];if(U&&ei.push(eo[K]),z){let{main:u,cross:m}=function(u,m,p){void 0===p&&(p=!1);let g=t(u),k=o(u),I=e(k),_="x"===k?g===(p?"end":"start")?"right":"left":"start"===g?"bottom":"top";return m.reference[I]>m.floating[I]&&(_=y(_)),{main:_,cross:y(_)}}(_,j,et);ei.push(eo[u],eo[m])}if(eu=[...eu,{placement:_,overflows:ei}],!ei.every(u=>u<=0)){let u=((null==(g=G.flip)?void 0:g.index)||0)+1,m=er[u];if(m)return{data:{index:u,overflows:eu},reset:{placement:m}};let p=null==(k=eu.filter(u=>u.overflows[0]<=0).sort((u,m)=>u.overflows[1]-m.overflows[1])[0])?void 0:k.placement;if(!p)switch($){case"bestFit":{let u=null==(I=eu.map(u=>[u.placement,u.overflows.filter(u=>u>0).reduce((u,m)=>u+m,0)]).sort((u,m)=>u[1]-m[1])[0])?void 0:I[0];u&&(p=u);break}case"initialPlacement":p=V}if(_!==p)return{reset:{placement:p}}}return{}}}},L=function(u){return void 0===u&&(u=0),{name:"offset",options:u,async fn(m){let{x:p,y:g}=m,k=await async function(u,m){let{placement:p,platform:g,elements:k}=u,I=await (null==g.isRTL?void 0:g.isRTL(k.floating)),_=n(p),G=t(p),j="x"===o(p),V=["left","top"].includes(_)?-1:1,q=I&&j?-1:1,Z=a(m,u),{mainAxis:U,crossAxis:z,alignmentAxis:Y}="number"==typeof Z?{mainAxis:Z,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...Z};return G&&"number"==typeof Y&&(z="end"===G?-1*Y:Y),j?{x:z*q,y:U*V}:{x:U*V,y:z*q}}(m,u);return{x:p+k.x,y:g+k.y,data:k}}}},C=function(u){return void 0===u&&(u={}),{name:"size",options:u,async fn(m){let p,I;let{placement:_,rects:G,platform:j,elements:V}=m,{apply:q=()=>{},...Z}=a(u,m),U=await c(m,Z),z=n(_),Y=t(_),$="x"===o(_),{width:J,height:Q}=G.floating;"top"===z||"bottom"===z?(p=z,I=Y===(await (null==j.isRTL?void 0:j.isRTL(V.floating))?"start":"end")?"left":"right"):(I=z,p="end"===Y?"top":"bottom");let X=Q-U[p],K=J-U[I],ee=!m.middlewareData.shift,et=X,en=K;if($){let u=J-U.left-U.right;en=Y||ee?g(K,u):u}else{let u=Q-U.top-U.bottom;et=Y||ee?g(X,u):u}if(ee&&!Y){let u=k(U.left,0),m=k(U.right,0),p=k(U.top,0),g=k(U.bottom,0);$?en=J-2*(0!==u||0!==m?u+m:k(U.left,U.right)):et=Q-2*(0!==p||0!==g?p+g:k(U.top,U.bottom))}await q({...m,availableWidth:en,availableHeight:et});let er=await j.getDimensions(V.floating);return J!==er.width||Q!==er.height?{reset:{rects:!0}}:{}}}}},5772:function(u,m,p){p.d(m,{Me:function(){return B},oo:function(){return N}});var g=p(3349);function n(u){var m;return(null==(m=u.ownerDocument)?void 0:m.defaultView)||window}function o(u){return n(u).getComputedStyle(u)}function i(u){return u instanceof n(u).Node}function r(u){return i(u)?(u.nodeName||"").toLowerCase():"#document"}function c(u){return u instanceof n(u).HTMLElement}function l(u){return u instanceof n(u).Element}function s(u){return"undefined"!=typeof ShadowRoot&&(u instanceof n(u).ShadowRoot||u instanceof ShadowRoot)}function f(u){let{overflow:m,overflowX:p,overflowY:g,display:k}=o(u);return/auto|scroll|overlay|hidden|clip/.test(m+g+p)&&!["inline","contents"].includes(k)}function d(u){let m=a(),p=o(u);return"none"!==p.transform||"none"!==p.perspective||!m&&!!p.backdropFilter&&"none"!==p.backdropFilter||!m&&!!p.filter&&"none"!==p.filter||["transform","perspective","filter"].some(u=>(p.willChange||"").includes(u))||["paint","layout","strict","content"].some(u=>(p.contain||"").includes(u))}function a(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function h(u){return["html","body","#document"].includes(r(u))}let k=Math.min,I=Math.max,_=Math.round,G=Math.floor,w=u=>({x:u,y:u});function x(u){let m=o(u),p=parseFloat(m.width)||0,g=parseFloat(m.height)||0,k=c(u),I=k?u.offsetWidth:p,G=k?u.offsetHeight:g,j=_(p)!==I||_(g)!==G;return j&&(p=I,g=G),{width:p,height:g,$:j}}function v(u){return l(u)?u:u.contextElement}function b(u){let m=v(u);if(!c(m))return w(1);let p=m.getBoundingClientRect(),{width:g,height:k,$:I}=x(m),G=(I?_(p.width):p.width)/g,j=(I?_(p.height):p.height)/k;return G&&Number.isFinite(G)||(G=1),j&&Number.isFinite(j)||(j=1),{x:G,y:j}}let j=w(0);function R(u,m,p){var g,k;if(void 0===m&&(m=!0),!a())return j;let I=u?n(u):window;return!p||m&&p!==I?j:{x:(null==(g=I.visualViewport)?void 0:g.offsetLeft)||0,y:(null==(k=I.visualViewport)?void 0:k.offsetTop)||0}}function T(u,m,p,k){void 0===m&&(m=!1),void 0===p&&(p=!1);let I=u.getBoundingClientRect(),_=v(u),G=w(1);m&&(k?l(k)&&(G=b(k)):G=b(u));let j=R(_,p,k),V=(I.left+j.x)/G.x,q=(I.top+j.y)/G.y,Z=I.width/G.x,U=I.height/G.y;if(_){let u=n(_),m=k&&l(k)?n(k):k,p=u.frameElement;for(;p&&k&&m!==u;){let u=b(p),m=p.getBoundingClientRect(),g=getComputedStyle(p),k=m.left+(p.clientLeft+parseFloat(g.paddingLeft))*u.x,I=m.top+(p.clientTop+parseFloat(g.paddingTop))*u.y;V*=u.x,q*=u.y,Z*=u.x,U*=u.y,V+=k,q+=I,p=n(p).frameElement}}return(0,g.JB)({width:Z,height:U,x:V,y:q})}function S(u){return((i(u)?u.ownerDocument:u.document)||window.document).documentElement}function E(u){return l(u)?{scrollLeft:u.scrollLeft,scrollTop:u.scrollTop}:{scrollLeft:u.pageXOffset,scrollTop:u.pageYOffset}}function C(u){return T(S(u)).left+E(u).scrollLeft}function F(u){if("html"===r(u))return u;let m=u.assignedSlot||u.parentNode||s(u)&&u.host||S(u);return s(m)?m.host:m}function D(u,m){var p;void 0===m&&(m=[]);let g=function W(u){let m=F(u);return h(m)?u.ownerDocument?u.ownerDocument.body:u.body:c(m)&&f(m)?m:W(m)}(u),k=g===(null==(p=u.ownerDocument)?void 0:p.body),I=n(g);return k?m.concat(I,I.visualViewport||[],f(g)?g:[]):m.concat(g,D(g))}function H(u,m,p){let k;if("viewport"===m)k=function(u,m){let p=n(u),g=S(u),k=p.visualViewport,I=g.clientWidth,_=g.clientHeight,G=0,j=0;if(k){I=k.width,_=k.height;let u=a();(!u||u&&"fixed"===m)&&(G=k.offsetLeft,j=k.offsetTop)}return{width:I,height:_,x:G,y:j}}(u,p);else if("document"===m)k=function(u){let m=S(u),p=E(u),g=u.ownerDocument.body,k=I(m.scrollWidth,m.clientWidth,g.scrollWidth,g.clientWidth),_=I(m.scrollHeight,m.clientHeight,g.scrollHeight,g.clientHeight),G=-p.scrollLeft+C(u),j=-p.scrollTop;return"rtl"===o(g).direction&&(G+=I(m.clientWidth,g.clientWidth)-k),{width:k,height:_,x:G,y:j}}(S(u));else if(l(m))k=function(u,m){let p=T(u,!0,"fixed"===m),g=p.top+u.clientTop,k=p.left+u.clientLeft,I=c(u)?b(u):w(1);return{width:u.clientWidth*I.x,height:u.clientHeight*I.y,x:k*I.x,y:g*I.y}}(m,p);else{let p=R(u);k={...m,x:m.x-p.x,y:m.y-p.y}}return(0,g.JB)(k)}function M(u,m){return c(u)&&"fixed"!==o(u).position?m?m(u):u.offsetParent:null}function P(u,m){let p=n(u);if(!c(u))return p;let g=M(u,m);for(;g&&["table","td","th"].includes(r(g))&&"static"===o(g).position;)g=M(g,m);return g&&("html"===r(g)||"body"===r(g)&&"static"===o(g).position&&!d(g))?p:g||function(u){let m=F(u);for(;c(m)&&!h(m);){if(d(m))return m;m=F(m)}return null}(u)||p}let V={getClippingRect:function(u){let{element:m,boundary:p,rootBoundary:g,strategy:_}=u,G="clippingAncestors"===p?function(u,m){let p=m.get(u);if(p)return p;let g=D(u).filter(u=>l(u)&&"body"!==r(u)),k=null,I="fixed"===o(u).position,_=I?F(u):u;for(;l(_)&&!h(_);){let m=o(_),p=d(_);p||"fixed"!==m.position||(k=null),(I?!p&&!k:!p&&"static"===m.position&&k&&["absolute","fixed"].includes(k.position)||f(_)&&!p&&function O(u,m){let p=F(u);return!(p===m||!l(p)||h(p))&&("fixed"===o(p).position||O(p,m))}(u,_))?g=g.filter(u=>u!==_):k=m,_=F(_)}return m.set(u,g),g}(m,this._c):[].concat(p),j=[...G,g],V=j[0],q=j.reduce((u,p)=>{let g=H(m,p,_);return u.top=I(g.top,u.top),u.right=k(g.right,u.right),u.bottom=k(g.bottom,u.bottom),u.left=I(g.left,u.left),u},H(m,V,_));return{width:q.right-q.left,height:q.bottom-q.top,x:q.left,y:q.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(u){let{rect:m,offsetParent:p,strategy:g}=u,k=c(p),I=S(p);if(p===I)return m;let _={scrollLeft:0,scrollTop:0},G=w(1),j=w(0);if((k||!k&&"fixed"!==g)&&(("body"!==r(p)||f(I))&&(_=E(p)),c(p))){let u=T(p);G=b(p),j.x=u.x+p.clientLeft,j.y=u.y+p.clientTop}return{width:m.width*G.x,height:m.height*G.y,x:m.x*G.x-_.scrollLeft*G.x+j.x,y:m.y*G.y-_.scrollTop*G.y+j.y}},isElement:l,getDimensions:function(u){return x(u)},getOffsetParent:P,getDocumentElement:S,getScale:b,async getElementRects(u){let{reference:m,floating:p,strategy:g}=u,k=this.getOffsetParent||P,I=this.getDimensions;return{reference:function(u,m,p){let g=c(m),k=S(m),I="fixed"===p,_=T(u,!0,I,m),G={scrollLeft:0,scrollTop:0},j=w(0);if(g||!g&&!I){if(("body"!==r(m)||f(k))&&(G=E(m)),c(m)){let u=T(m,!0,I,m);j.x=u.x+m.clientLeft,j.y=u.y+m.clientTop}else k&&(j.x=C(k))}return{x:_.left+G.scrollLeft-j.x,y:_.top+G.scrollTop-j.y,width:_.width,height:_.height}}(m,await k(p),g),floating:{x:0,y:0,...await I(p)}}},getClientRects:u=>Array.from(u.getClientRects()),isRTL:u=>"rtl"===o(u).direction};function B(u,m,p,g){void 0===g&&(g={});let{ancestorScroll:k=!0,ancestorResize:I=!0,elementResize:_=!0,layoutShift:j="function"==typeof IntersectionObserver,animationFrame:V=!1}=g,q=v(u),Z=k||I?[...q?D(q):[],...D(m)]:[];Z.forEach(u=>{k&&u.addEventListener("scroll",p,{passive:!0}),I&&u.addEventListener("resize",p)});let U=q&&j?function(u,m){let p,g=null,k=S(u);function r(){clearTimeout(p),g&&g.disconnect(),g=null}return function c(I,_){void 0===I&&(I=!1),void 0===_&&(_=1),r();let{left:j,top:V,width:q,height:Z}=u.getBoundingClientRect();if(I||m(),!q||!Z)return;let U=G(V),z=G(k.clientWidth-(j+q)),Y=G(k.clientHeight-(V+Z)),$=G(j),J=!0;(g=new IntersectionObserver(u=>{let m=u[0].intersectionRatio;if(m!==_){if(!J)return c();0===m?p=setTimeout(()=>{c(!1,1e-7)},100):c(!1,m)}J=!1},{rootMargin:-U+"px "+-z+"px "+-Y+"px "+-$+"px",threshold:_})).observe(u)}(!0),r}(q,p):null,z,Y=null;_&&(Y=new ResizeObserver(p),q&&!V&&Y.observe(q),Y.observe(m));let $=V?T(u):null;return V&&function e(){let m=T(u);$&&(m.x!==$.x||m.y!==$.y||m.width!==$.width||m.height!==$.height)&&p(),$=m,z=requestAnimationFrame(e)}(),p(),()=>{Z.forEach(u=>{k&&u.removeEventListener("scroll",p),I&&u.removeEventListener("resize",p)}),U&&U(),Y&&Y.disconnect(),Y=null,V&&cancelAnimationFrame(z)}}let N=(u,m,p)=>{let k=new Map,I={platform:V,...p},_={...I.platform,_c:k};return(0,g.oo)(u,m,{...I,platform:_})}},5242:function(u,m,p){p.d(m,{Z:function(){return _iterableToArray}});function _iterableToArray(u){if("undefined"!=typeof Symbol&&null!=u[Symbol.iterator]||null!=u["@@iterator"])return Array.from(u)}},1752:function(u,m,p){p.d(m,{Z:function(){return _taggedTemplateLiteral}});function _taggedTemplateLiteral(u,m){return m||(m=u.slice(0)),Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(m)}}))}},9466:function(u,m,p){p.d(m,{Z:function(){return _toArray}});var g=p(7523),k=p(5242),I=p(2279),_=p(9047);function _toArray(u){return(0,g.Z)(u)||(0,k.Z)(u)||(0,I.Z)(u)||(0,_.Z)()}},4285:function(u,m,p){p.d(m,{Z:function(){return _toConsumableArray}});var g=p(7452),k=p(5242),I=p(2279);function _toConsumableArray(u){return function(u){if(Array.isArray(u))return(0,g.Z)(u)}(u)||(0,k.Z)(u)||(0,I.Z)(u)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);