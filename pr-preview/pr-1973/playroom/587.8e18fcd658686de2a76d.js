/*! For license information please see 587.8e18fcd658686de2a76d.js.LICENSE.txt */
(self.webpackChunk_ag_ds_next_docs=self.webpackChunk_ag_ds_next_docs||[]).push([[587],{65972:(e,t,r)=>{var n,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(e,t){if(!n[e]){n[e]={};for(var r=0;r<e.length;r++)n[e][e.charAt(r)]=r}return n[e][t]}var i={compressToBase64:function(e){if(null==e)return"";var r=i._compress(e,6,(function(e){return t.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:i._decompress(e.length,32,(function(r){return o(t,e.charAt(r))}))},compressToUTF16:function(t){return null==t?"":i._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=i.compress(e),r=new Uint8Array(2*t.length),n=0,o=t.length;n<o;n++){var a=t.charCodeAt(n);r[2*n]=a>>>8,r[2*n+1]=a%256}return r},decompressFromUint8Array:function(t){if(null==t)return i.decompress(t);for(var r=new Array(t.length/2),n=0,o=r.length;n<o;n++)r[n]=256*t[2*n]+t[2*n+1];var a=[];return r.forEach((function(t){a.push(e(t))})),i.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),i._decompress(e.length,32,(function(t){return o(r,e.charAt(t))})))},compress:function(t){return i._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,r){if(null==e)return"";var n,o,i,a={},c={},u="",s="",f="",l=2,p=3,d=2,h=[],y=0,m=0;for(i=0;i<e.length;i+=1)if(u=e.charAt(i),Object.prototype.hasOwnProperty.call(a,u)||(a[u]=p++,c[u]=!0),s=f+u,Object.prototype.hasOwnProperty.call(a,s))f=s;else{if(Object.prototype.hasOwnProperty.call(c,f)){if(f.charCodeAt(0)<256){for(n=0;n<d;n++)y<<=1,m==t-1?(m=0,h.push(r(y)),y=0):m++;for(o=f.charCodeAt(0),n=0;n<8;n++)y=y<<1|1&o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o>>=1}else{for(o=1,n=0;n<d;n++)y=y<<1|o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)y=y<<1|1&o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[f]}else for(o=a[f],n=0;n<d;n++)y=y<<1|1&o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o>>=1;0==--l&&(l=Math.pow(2,d),d++),a[s]=p++,f=String(u)}if(""!==f){if(Object.prototype.hasOwnProperty.call(c,f)){if(f.charCodeAt(0)<256){for(n=0;n<d;n++)y<<=1,m==t-1?(m=0,h.push(r(y)),y=0):m++;for(o=f.charCodeAt(0),n=0;n<8;n++)y=y<<1|1&o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o>>=1}else{for(o=1,n=0;n<d;n++)y=y<<1|o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)y=y<<1|1&o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o>>=1}0==--l&&(l=Math.pow(2,d),d++),delete c[f]}else for(o=a[f],n=0;n<d;n++)y=y<<1|1&o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o>>=1;0==--l&&(l=Math.pow(2,d),d++)}for(o=2,n=0;n<d;n++)y=y<<1|1&o,m==t-1?(m=0,h.push(r(y)),y=0):m++,o>>=1;for(;;){if(y<<=1,m==t-1){h.push(r(y));break}m++}return h.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,n){var o,i,a,c,u,s,f,l=[],p=4,d=4,h=3,y="",m=[],b={val:n(0),position:r,index:1};for(o=0;o<3;o+=1)l[o]=o;for(a=0,u=Math.pow(2,2),s=1;s!=u;)c=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(c>0?1:0)*s,s<<=1;switch(a){case 0:for(a=0,u=Math.pow(2,8),s=1;s!=u;)c=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(c>0?1:0)*s,s<<=1;f=e(a);break;case 1:for(a=0,u=Math.pow(2,16),s=1;s!=u;)c=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(c>0?1:0)*s,s<<=1;f=e(a);break;case 2:return""}for(l[3]=f,i=f,m.push(f);;){if(b.index>t)return"";for(a=0,u=Math.pow(2,h),s=1;s!=u;)c=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(c>0?1:0)*s,s<<=1;switch(f=a){case 0:for(a=0,u=Math.pow(2,8),s=1;s!=u;)c=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(c>0?1:0)*s,s<<=1;l[d++]=e(a),f=d-1,p--;break;case 1:for(a=0,u=Math.pow(2,16),s=1;s!=u;)c=b.val&b.position,b.position>>=1,0==b.position&&(b.position=r,b.val=n(b.index++)),a|=(c>0?1:0)*s,s<<=1;l[d++]=e(a),f=d-1,p--;break;case 2:return m.join("")}if(0==p&&(p=Math.pow(2,h),h++),l[f])y=l[f];else{if(f!==d)return null;y=i+i.charAt(0)}m.push(y),l[d++]=i+y.charAt(0),i=y,0==--p&&(p=Math.pow(2,h),h++)}}};return i}();void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)},21664:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(c[s]=i[s]);if(t){a=t(i);for(var f=0;f<a.length;f++)n.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c}},97383:e=>{var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=e.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},49814:(e,t,r)=>{"use strict";r.d(t,{m:()=>re});var n,o,i,a,c=r(62688),u=r.n(c),s=r(19406),f=r.n(s),l=r(97383),p=r.n(l),d=r(63696),h=r(21664),y=r.n(h),m="bodyAttributes",b="htmlAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",w="href",O="innerHTML",A="itemprop",C="rel",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j=Object.keys(S).reduce((function(e,t){return e[S[t]]=t,e}),{}),E=[v.NOSCRIPT,v.SCRIPT,v.STYLE],k="data-react-helmet",P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},L=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=B(e,v.TITLE),r=B(e,"titleTemplate");if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=B(e,"defaultTitle");return t||n||void 0},N=function(e){return B(e,"onChangeClientState")||function(){}},R=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return M({},e,t)}),{})},F=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},U=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&z("Helmet: "+e+' should be of type "Array". Instead found type "'+P(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===C&&"canonical"===e[r].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==O&&c!==T&&c!==A||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},B=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){q(e)}),0)}),D=function(e){return clearTimeout(e)},H="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||q:r.g.requestAnimationFrame||q,Y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||D:r.g.cancelAnimationFrame||D,z=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},K=null,V=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;G(v.BODY,n),G(v.HTML,o),$(l,p);var d={baseTag:J(v.BASE,r),linkTags:J(v.LINK,i),metaTags:J(v.META,a),noscriptTags:J(v.NOSCRIPT,c),scriptTags:J(v.SCRIPT,s),styleTags:J(v.STYLE,f)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,h,y)},W=function(e){return Array.isArray(e)?e.join(""):e},$=function(e,t){void 0!==e&&document.title!==e&&(document.title=W(e)),G(v.TITLE,t)},G=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(k),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(k):r.getAttribute(k)!==a.join(",")&&r.setAttribute(k,a.join(","))}},J=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+k+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(k,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Q=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[S[r]||r]=e[r],t}),t)},Z=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[k]=!0,o=X(r,n),[d.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=Q(r),i=W(t);return o?"<"+e+" "+k+'="true" '+o+">"+L(i,n)+"</"+e+">":"<"+e+" "+k+'="true">'+L(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case b:return{toComponent:function(){return X(t)},toString:function(){return Q(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[k]=!0,n);return Object.keys(t).forEach((function(e){var r=S[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+L(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===E.indexOf(e);return t+"<"+e+" "+k+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ee=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:Z(v.BASE,t,n),bodyAttributes:Z(m,r,n),htmlAttributes:Z(b,o,n),link:Z(v.LINK,i,n),meta:Z(v.META,a,n),noscript:Z(v.NOSCRIPT,c,n),script:Z(v.SCRIPT,u,n),style:Z(v.STYLE,s,n),title:Z(v.TITLE,{title:l,titleAttributes:p},n)}},te=f()((function(e){return{baseTag:F([w,"target"],e),bodyAttributes:R(m,e),defer:B(e,"defer"),encode:B(e,"encodeSpecialCharacters"),htmlAttributes:R(b,e),linkTags:U(v.LINK,[C,w],e),metaTags:U(v.META,["name",g,"http-equiv","property",A],e),noscriptTags:U(v.NOSCRIPT,[O],e),onChangeClientState:N(e),scriptTags:U(v.SCRIPT,["src",O],e),styleTags:U(v.STYLE,[T],e),title:_(e),titleAttributes:R("titleAttributes",e)}}),(function(e){K&&Y(K),e.defer?K=H((function(){V(e,(function(){K=null}))})):(V(e),K=null)}),ee)((function(){return null})),re=(o=te,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return M({},n,((t={})[r.type]=[].concat(n[r.type]||[],[M({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return M({},o,((t={})[n.type]=a,t.titleAttributes=M({},i),t));case v.BODY:return M({},o,{bodyAttributes:M({},i)});case v.HTML:return M({},o,{htmlAttributes:M({},i)})}return M({},o,((r={})[n.type]=M({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=M({},t);return Object.keys(e).forEach((function(t){var n;r=M({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)}(I(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=I(e,["children"]),n=M({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(o,n)},x(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);re.renderStatic=re.rewind},19406:(e,t,r)=>{"use strict";var n,o=r(63696),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),l.canUseDOM?t(u):r&&(u=r(u))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(l,"canUseDOM",c),l}}}}]);