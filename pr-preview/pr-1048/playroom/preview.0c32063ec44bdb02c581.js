(self.webpackChunk_ag_ds_next_docs=self.webpackChunk_ag_ds_next_docs||[]).push([[493],{363:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=363,e.exports=t},3618:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(2951),a=n(1976),o=n(7169),c=n(7132),i=n(9492),s=n(7597),l=n(4649),u=n(7378),m=n(3832),h=n(4145);n(5388);var d=function(e){(0,c.Z)(f,e);var t,n,d=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)});function f(){var e;(0,r.Z)(this,f);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=d.call.apply(d,[this].concat(n)),(0,l.Z)((0,o.Z)(e),"state",{error:null,invalidCode:null,errorInfo:null}),e}return(0,a.Z)(f,[{key:"componentDidCatch",value:function(e,t){var n=this.props.code,r=void 0===n?null:n;this.setState({invalidCode:r,error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=e.invalidCode,n=e.error,r=e.errorInfo,a=this.props,o=a.code,c=a.children;if(o!==t||!n)return c;var i=r?r.componentStack.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})):[],s=i.slice(0,i.length-1);return u.createElement("div",{className:"zmhab21i zmhab21j zmhab21k zmhab21l zmhab22a zmhab22i zmhab22q zmhab22y zmhab21h zmhab23x"},u.createElement(m.x,{size:"large",tone:"critical"},u.createElement(h.c,null,n.message),s.map((function(e,t){return u.createElement("span",{key:t},e)}))))}}]),f}(u.Component)},7516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(4649),a=n(7378),o=n(85),c=n.n(o);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){var t=e.code,n=e.scope;return c()(t,s(s(s({},{}),n),{},{React:a}))}},2029:(e,t,n)=>{var r=n(9500);e.exports=r.default||r},449:(e,t,n)=>{"use strict";var r={};n.r(r),n.d(r,{animationDelay:()=>p,animationDuration:()=>v,animationIterationCount:()=>b,hideSplash:()=>y,root:()=>z,size:()=>O,trace:()=>g});var a=n(7378),o=n(7580),c=n(7728),i=n.n(c),s=n(5332),l=n(6501),u=n(4649),m=n(3782),h=n(42),d=n.n(h),f=function(e){var t=e.size,n=void 0===t?100:t;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:n},a.createElement("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"}))},p=(n(5388),500),v=1300,b=2,y="zmhab24c zmhab248",z="gbs90h1 zmhab21i zmhab21j zmhab21k zmhab21l zmhab21h zmhab21n zmhab222 zmhab21w zmhab24r zmhab244",O="gbs90h5",g="gbs90h3",E=v,w=p,Z=b,C=(0,m.Z)(r,["animationDuration","animationDelay","animationIterationCount"]);const _=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){return n(!0)}),w+E*Z);return function(){return clearTimeout(e)}}),[]),a.createElement("div",{className:d()(C.root,(0,u.Z)({},C.hideSplash,t)),"data-testid":"splashscreen"},a.createElement("div",{className:d()(C.trace,C.size)},a.createElement(f,{size:"100%"})))};var k=n(3618),j=n(7516);const N=function(e){var t=e.themes,n=e.components,r=e.FrameComponent,o=(0,s.UO)((function(e){if(e.code){var t,n=JSON.parse(null!==(t=i().decompressFromEncodedURIComponent(String(e.code)))&&void 0!==t?t:"");return{code:(0,l.jw)(n.code),themeName:n.theme}}return{}})),c=o.themeName,u=o.code,m=c?t[c]:null;return a.createElement(k.Z,{code:u},a.createElement("div",{className:"zmhab21g zmhab24d"},a.createElement(r,{themeName:c||"__PLAYROOM__NO_THEME__",theme:m},a.createElement(j.Z,{code:u,scope:n}))),a.createElement("div",{className:"zmhab21g zmhab24e"},a.createElement(_,null)))};var D=document.createElement("div");document.body.appendChild(D),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,r=void 0===t?n(9240):t,c=e.components,i=void 0===c?n(8748):c,s=e.FrameComponent,l=void 0===s?n(2029):s;(0,o.l)(a.createElement(N,{components:i,themes:r,FrameComponent:l}),D)}()},85:function(e){(function(){var t={}.hasOwnProperty,n=[].slice;e.exports=function(e,r){var a,o,c,i;for(a in o=[],i=[],r)t.call(r,a)&&(c=r[a],"this"!==a&&(o.push(a),i.push(c)));return Function.apply(null,n.call(o).concat(["return eval("+JSON.stringify(e)+")"])).apply(r.this,i)}}).call(this)}},e=>{e.O(0,[331,874,317],(()=>(449,e(e.s=449)))),e.O()}]);