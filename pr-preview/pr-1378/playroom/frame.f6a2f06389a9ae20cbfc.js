(self.webpackChunk_ag_ds_next_docs=self.webpackChunk_ag_ds_next_docs||[]).push([[520],{7049:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(2951),o=r(1976),c=r(7169),a=r(7132),i=r(9492),s=r(7597),l=r(4649),u=r(7378),p=r(1997),f=r(4487),h=(r(9521),r(4246));var d=function(e){(0,a.Z)(d,e);var t,r,u=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var o=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function d(){var e;(0,n.Z)(this,d);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=u.call.apply(u,[this].concat(r)),(0,l.Z)((0,c.Z)(e),"state",{error:null,invalidCode:null,errorInfo:null}),e}return(0,o.Z)(d,[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,n=void 0===r?null:r;this.setState({invalidCode:n,error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=e.invalidCode,r=e.error,n=e.errorInfo,o=this.props,c=o.code,a=o.children;if(c!==t||!r)return a;var i=n?n.componentStack.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})):[],s=i.slice(0,i.length-1);return(0,h.jsx)("div",{className:"zmhab21i zmhab21j zmhab21k zmhab21l zmhab22a zmhab22i zmhab22q zmhab22y zmhab21h zmhab23x",children:(0,h.jsxs)(p.x,{size:"large",tone:"critical",children:[(0,h.jsx)(f.c,{children:r.message}),s.map((function(e,t){return(0,h.jsx)("span",{children:e},t)}))]})})}}]),d}(u.Component)},8257:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(4649),o=r(7378),c=r(85),a=r.n(c);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t=e.code,r=e.scope;return a()(t,s(s(s({},{}),r),{},{React:o}))}},7633:(e,t,r)=>{"use strict";var n=r(1927),o=r(7969),c=r(7049),a=r(8257),i=r(4246);function s(e){var t=e.themes,r=e.components,n=e.FrameComponent,s=(0,o.UO)((function(e){return{themeName:"string"==typeof e.themeName?e.themeName:"",code:"string"==typeof e.code?e.code:""}})),l=s.themeName,u=s.code,p="__PLAYROOM__NO_THEME__"===l?null:l,f=p?t[p]:null;return(0,i.jsx)(c.Z,{code:u,children:(0,i.jsx)(n,{themeName:p,theme:f,children:(0,i.jsx)(a.Z,{code:u,scope:r})})})}var l=document.createElement("div");document.body.appendChild(l),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,o=void 0===t?r(3667):t,c=e.components,a=void 0===c?r(4493):c,u=e.FrameComponent,p=void 0===u?r(1885):u;(0,n.l)((0,i.jsx)(s,{components:a,themes:o,FrameComponent:p}),l)}()},1885:(e,t,r)=>{var n=r(9500);e.exports=n.default||n},85:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,n){var o,c,a,i;for(o in c=[],i=[],n)t.call(n,o)&&(a=n[o],"this"!==o&&(c.push(o),i.push(a)));return Function.apply(null,r.call(c).concat(["return eval("+JSON.stringify(e)+")"])).apply(n.this,i)}}).call(this)}},e=>{e.O(0,[415,317],(()=>(7633,e(e.s=7633)))),e.O()}]);