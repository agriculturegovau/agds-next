(self.webpackChunk_ag_ds_next_docs=self.webpackChunk_ag_ds_next_docs||[]).push([[685],{61741:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(92099),o=n(48183),a=n(72367),i=n(50171),c=n(42912),l=n(74572),s=n(41705),u=n(63696),h=n(54981),d=n(88691),m=(n(13050),n(67511),n(97145));var f=function(e){(0,i.A)(f,e);var t,n,u=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.A)(t);if(n){var o=(0,l.A)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,c.A)(this,e)});function f(){var e;(0,r.A)(this,f);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=u.call.apply(u,[this].concat(n)),(0,s.A)((0,a.A)(e),"state",{error:null,invalidCode:null,errorInfo:null}),e}return(0,o.A)(f,[{key:"componentDidCatch",value:function(e,t){var n=this.props.code,r=void 0===n?null:n;this.setState({invalidCode:r,error:e,errorInfo:t})}},{key:"render",value:function(){var e,t,n=this.state,r=n.invalidCode,o=n.error,a=n.errorInfo,i=this.props,c=i.code,l=i.children;if(c!==r||!o)return l;var s=null!==(e=null==a||null===(t=a.componentStack)||void 0===t?void 0:t.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})))&&void 0!==e?e:[],u=s.slice(0,s.length-1);return(0,m.Y)("div",{className:"zmhab2t zmhab2u zmhab2v zmhab2w zmhab21y zmhab228 zmhab22i zmhab22s zmhab2s zmhab244",children:(0,m.FD)(h.E,{size:"large",tone:"critical",children:[(0,m.Y)(d.O,{children:o.message}),u.map((function(e,t){return(0,m.Y)("span",{children:e},t)}))]})})}}]),f}(u.Component)},94379:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var r=n(41705),o=n(63696),a=n(669),i=n.n(a);const c=function(){};var l=n(12297);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t,n,a=e.code,s=e.scope,h=u(u({},null!==(t=c())&&void 0!==t?t:{}),s);if(l.u6 in h)throw new Error("'".concat(l.u6,"' is used internally by Playroom and is not allowed in scope"));if(l._ in h)throw new Error("'".concat(l._,"' is used internally by Playroom and is not allowed in scope"));return i()(a,u(u({},h),{},(n={React:o},(0,r.A)(n,l.u6,o.createElement),(0,r.A)(n,l._,o.Fragment),n)))}},97295:(e,t,n)=>{var r=n(4896);e.exports=r.default||r},84190:(e,t,n)=>{"use strict";var r={};n.r(r),n.d(r,{animationDelay:()=>v,animationDuration:()=>b,animationIterationCount:()=>y,hideSplash:()=>z,root:()=>O,size:()=>g,trace:()=>w});var o=n(40279),a=n(65972),i=n.n(a),c=n(48959),l=n(12297),s=n(41705),u=n(81515),h=n(63696),d=n(71633),m=n.n(d),f=n(97145),p=function(e){var t=e.size,n=void 0===t?100:t;return(0,f.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:n,children:(0,f.Y)("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"})})},v=(n(13050),n(67511),500),b=1300,y=2,z="zmhab24j zmhab24f",O="gbs90h1 zmhab2t zmhab2u zmhab2v zmhab2w zmhab2s zmhab2y zmhab21f zmhab219 zmhab24y zmhab24b",g="gbs90h5",w="gbs90h3",A=b,_=v,P=y,Y=(0,u.A)(r,["animationDuration","animationDelay","animationIterationCount"]);const C=function(){var e=(0,h.useState)(!1),t=e[0],n=e[1];return(0,h.useEffect)((function(){var e=setTimeout((function(){return n(!0)}),_+A*P);return function(){return clearTimeout(e)}}),[]),(0,f.Y)("div",{className:m()(Y.root,(0,s.A)({},Y.hideSplash,t)),"data-testid":"splashscreen",children:(0,f.Y)("div",{className:m()(Y.trace,Y.size),children:(0,f.Y)(p,{size:"100%"})})})};var j=n(61741),k=n(94379),D=n(49814);const E=function(e){var t=e.themes,n=e.components,r=e.FrameComponent,o=(0,c.g)((function(e){var t=e.get("code");if(t){var n,r=JSON.parse(null!==(n=i().decompressFromEncodedURIComponent(String(t)))&&void 0!==n?n:"");return{code:(0,l.hr)(r.code),themeName:r.theme,title:r.title}}return{}})),a=o.themeName,s=o.code,u=o.title,h=a?t[a]:null;return(0,f.FD)(j.A,{code:s,children:[(0,f.Y)(D.m,{children:(0,f.Y)("title",{children:u?"".concat(u," | Playroom Preview"):"Playroom Preview"})}),(0,f.Y)("div",{className:"zmhab2r zmhab24k",children:(0,f.Y)(r,{themeName:a||"__PLAYROOM__NO_THEME__",theme:h,children:(0,f.Y)(k.A,{code:s,scope:n})})}),(0,f.Y)("div",{className:"zmhab2r zmhab24l",children:(0,f.Y)(C,{})})]})};var N=document.createElement("div");document.body.appendChild(N),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,r=void 0===t?n(11645):t,a=e.components,i=void 0===a?n(8651):a,c=e.FrameComponent,l=void 0===c?n(97295):c;(0,o.d)((0,f.Y)(E,{components:i,themes:r,FrameComponent:l}),N)}()},669:function(e){(function(){var t={}.hasOwnProperty,n=[].slice;e.exports=function(e,r){var o,a,i,c;for(o in a=[],c=[],r)t.call(r,o)&&(i=r[o],"this"!==o&&(a.push(o),c.push(i)));return Function.apply(null,n.call(a).concat(["return eval("+JSON.stringify(e)+")"])).apply(r.this,c)}}).call(this)}},e=>{e.O(0,[782,587,451],(()=>e(e.s=84190))),e.O()}]);