(self.webpackChunk_ag_ds_next_docs=self.webpackChunk_ag_ds_next_docs||[]).push([[520],{7049:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(2951),o=r(1976),c=r(7169),a=r(7132),i=r(9492),l=r(7597),u=r(4649),s=r(7378),p=r(1997),f=r(4487);r(9521);var m=function(e){(0,a.Z)(h,e);var t,r,m=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var o=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function h(){var e;(0,n.Z)(this,h);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=m.call.apply(m,[this].concat(r)),(0,u.Z)((0,c.Z)(e),"state",{error:null,invalidCode:null,errorInfo:null}),e}return(0,o.Z)(h,[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,n=void 0===r?null:r;this.setState({invalidCode:n,error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=e.invalidCode,r=e.error,n=e.errorInfo,o=this.props,c=o.code,a=o.children;if(c!==t||!r)return a;var i=n?n.componentStack.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})):[],l=i.slice(0,i.length-1);return s.createElement("div",{className:"zmhab21i zmhab21j zmhab21k zmhab21l zmhab22a zmhab22i zmhab22q zmhab22y zmhab21h zmhab23x"},s.createElement(p.x,{size:"large",tone:"critical"},s.createElement(f.c,null,r.message),l.map((function(e,t){return s.createElement("span",{key:t},e)}))))}}]),h}(s.Component)},8257:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(4649),o=r(7378),c=r(85),a=r.n(c);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){var t=e.code,r=e.scope;return a()(t,l(l(l({},{}),r),{},{React:o}))}},7633:(e,t,r)=>{"use strict";var n=r(7378),o=r(1927),c=r(7969),a=r(7049),i=r(8257);function l(e){var t=e.themes,r=e.components,o=e.FrameComponent,l=(0,c.UO)((function(e){return{themeName:"string"==typeof e.themeName?e.themeName:"",code:"string"==typeof e.code?e.code:""}})),u=l.themeName,s=l.code,p="__PLAYROOM__NO_THEME__"===u?null:u,f=p?t[p]:null;return n.createElement(a.Z,{code:s},n.createElement(o,{themeName:p,theme:f},n.createElement(i.Z,{code:s,scope:r})))}var u=document.createElement("div");document.body.appendChild(u),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,c=void 0===t?r(3667):t,a=e.components,i=void 0===a?r(4493):a,s=e.FrameComponent,p=void 0===s?r(1885):s;(0,o.l)(n.createElement(l,{components:i,themes:c,FrameComponent:p}),u)}()},1885:(e,t,r)=>{var n=r(9500);e.exports=n.default||n},85:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,n){var o,c,a,i;for(o in c=[],i=[],n)t.call(n,o)&&(a=n[o],"this"!==o&&(c.push(o),i.push(a)));return Function.apply(null,r.call(c).concat(["return eval("+JSON.stringify(e)+")"])).apply(n.this,i)}}).call(this)}},e=>{e.O(0,[307,317],(()=>(7633,e(e.s=7633)))),e.O()}]);