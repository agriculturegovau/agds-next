(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{7094:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},7911:function(e){e.exports=function(){"use strict";var e=/^(b|B)$/,t={iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},n={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},r={floor:Math.floor,ceil:Math.ceil};function o(o){var i,a,c,u,l,s,f,p,d,v,g,b,m,y,h,w,x,D,O,j,A,E=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},k=[],F=0;if(isNaN(o))throw new TypeError("Invalid number");if(c=!0===E.bits,h=!0===E.unix,b=!0===E.pad,a=E.base||10,m=void 0!==E.round?E.round:h?1:2,f=void 0!==E.locale?E.locale:"",p=E.localeOptions||{},w=void 0!==E.separator?E.separator:"",x=void 0!==E.spacer?E.spacer:h?"":" ",O=E.symbols||{},D=2===a?E.standard||"iec":"jedec",g=E.output||"string",l=!0===E.fullform,s=E.fullforms instanceof Array?E.fullforms:[],i=void 0!==E.exponent?E.exponent:-1,j=r[E.roundingMethod]||Math.round,d=(v=Number(o))<0,u=a>2?1e3:1024,A=!1===isNaN(E.precision)?parseInt(E.precision,10):0,d&&(v=-v),(-1===i||isNaN(i))&&(i=Math.floor(Math.log(v)/Math.log(u)))<0&&(i=0),i>8&&(A>0&&(A+=8-i),i=8),"exponent"===g)return i;if(0===v)k[0]=0,y=k[1]=h?"":t[D][c?"bits":"bytes"][i];else{F=v/(2===a?Math.pow(2,10*i):Math.pow(1e3,i)),c&&(F*=8)>=u&&i<8&&(F/=u,i++);var P=Math.pow(10,i>0?m:0);k[0]=j(F*P)/P,k[0]===u&&i<8&&void 0===E.exponent&&(k[0]=1,i++),y=k[1]=10===a&&1===i?c?"kbit":"kB":t[D][c?"bits":"bytes"][i],h&&(k[1]=k[1].charAt(0),e.test(k[1])&&(k[0]=Math.floor(k[0]),k[1]=""))}if(d&&(k[0]=-k[0]),A>0&&(k[0]=k[0].toPrecision(A)),k[1]=O[k[1]]||k[1],!0===f?k[0]=k[0].toLocaleString():f.length>0?k[0]=k[0].toLocaleString(f,p):w.length>0&&(k[0]=k[0].toString().replace(".",w)),b&&!1===Number.isInteger(k[0])&&m>0){var S=w||".",C=k[0].toString().split(S),z=C[1]||"",T=z.length,B=m-T;k[0]="".concat(C[0]).concat(S).concat(z.padEnd(T+B,"0"))}return l&&(k[1]=s[i]?s[i]:n[D][i]+(c?"bit":"byte")+(1===k[0]?"":"s")),"array"===g?k:"object"===g?{value:k[0],symbol:k[1],exponent:i,unit:y}:k.join(x)}return o.partial=function(e){return function(t){return o(t,e)}},o}()},8772:function(e,t,n){"use strict";var r=n(331);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},3615:function(e,t,n){e.exports=n(8772)()},331:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1768:function(e,t,n){"use strict";n.d(t,{uI:function(){return ve}});var r=n(7378),o=n(3615),i=n.n(o);function a(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}Object.create;function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}Object.create;var l=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function s(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=l.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var f=[".DS_Store","Thumbs.db"];function p(e){return"object"===typeof e&&null!==e}function d(e){return m(e.target.files).map((function(e){return s(e)}))}function v(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return s(e)}))]}}))}))}function g(e,t){return a(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return null===e?[2,[]]:e.items?(n=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(y))]):[3,2];case 1:return[2,b(h(r.sent()))];case 2:return[2,b(m(e.files).map((function(e){return s(e)})))]}}))}))}function b(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function m(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function y(e){if("function"!==typeof e.webkitGetAsEntry)return w(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?D(t):w(e)}function h(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}(e,Array.isArray(t)?h(t):[t])}),[])}function w(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=s(t);return Promise.resolve(n)}function x(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,e.isDirectory?D(e):O(e)]}))}))}function D(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return a(i,void 0,void 0,(function(){var i,a,u;return c(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),n(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(x)),r.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function O(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=s(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var j=n(7094);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S="file-invalid-type",C="file-too-large",z="file-too-small",T="too-many-files",B=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:S,message:"File type must be ".concat(t)}},R=function(e){return{code:C,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},M=function(e){return{code:z,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},I={code:T,message:"Too many files"};function L(e,t){var n="application/x-moz-file"===e.type||(0,j.Z)(e,t);return[n,n?null:B(t)]}function _(e,t,n){if(K(e.size))if(K(t)&&K(n)){if(e.size>n)return[!1,R(n)];if(e.size<t)return[!1,M(t)]}else{if(K(t)&&e.size<t)return[!1,M(t)];if(K(n)&&e.size>n)return[!1,R(n)]}return[!0,null]}function K(e){return void 0!==e&&null!==e}function N(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=F(L(e,n),1)[0],i=F(_(e,r,o),1)[0];return t&&i}))}function G(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function Y(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Z(e){e.preventDefault()}function U(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function W(e){return-1!==e.indexOf("Edge/")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return U(e)||W(e)}function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!G(e)&&t&&t.apply(void 0,[e].concat(r)),G(e)}))}}function H(){return"showOpenFilePicker"in window}function V(e){return e="string"===typeof e?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter((function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)})).reduce((function(e,t){return E(E({},e),{},k({},t,[]))}),{}):{}}]}function J(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function Q(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}var X=["children"],ee=["open"],te=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ne=["refKey","onChange","onClick"];function re(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ie(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||ie(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){if(e){if("string"===typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var fe=(0,r.forwardRef)((function(e,t){var n=e.children,o=ve(se(e,X)),i=o.open,a=se(o,ee);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(ue(ue({},a),{},{open:i})))}));fe.displayName="Dropzone";var pe={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return p(e)&&p(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:function(e){return p(e)&&p(e.target)}(e)?[2,d(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,v(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0};fe.defaultProps=pe,fe.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var de={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ue(ue({},pe),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,g=t.onDropRejected,b=t.onFileDialogCancel,m=t.onFileDialogOpen,y=t.useFsAccessApi,h=t.preventDropOnDocument,w=t.noClick,x=t.noKeyboard,D=t.noDrag,O=t.noDragEventsBubbling,j=t.validator,A=(0,r.useMemo)((function(){return"function"===typeof m?m:be}),[m]),E=(0,r.useMemo)((function(){return"function"===typeof b?b:be}),[b]),k=(0,r.useRef)(null),F=(0,r.useRef)(null),P=(0,r.useReducer)(ge,de),S=oe(P,2),C=S[0],z=S[1],T=C.isFocused,B=C.isFileDialogActive,R=C.draggedFiles,M=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&y&&H()),K=function(){!M.current&&B&&setTimeout((function(){F.current&&(F.current.files.length||(z({type:"closeDialog"}),E()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",K,!1),function(){window.removeEventListener("focus",K,!1)}}),[F,B,E,M]);var U=(0,r.useRef)([]),W=function(e){k.current&&k.current.contains(e.target)||(e.preventDefault(),U.current=[])};(0,r.useEffect)((function(){return h&&(document.addEventListener("dragover",Z,!1),document.addEventListener("drop",W,!1)),function(){h&&(document.removeEventListener("dragover",Z),document.removeEventListener("drop",W))}}),[k,h]);var X=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e),U.current=[].concat(re(U.current),[e.target]),Y(e)&&Promise.resolve(i(e)).then((function(t){G(e)&&!O||(z({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,O]),ee=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e);var t=Y(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,O]),ie=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e);var t=U.current.filter((function(e){return k.current&&k.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),U.current=t,t.length>0||(z({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),Y(e)&&f&&f(e))}),[k,f,O]),ae=(0,r.useCallback)((function(e,t){var r=[],o=[];e.forEach((function(e){var t=oe(L(e,n),2),i=t[0],u=t[1],l=oe(_(e,c,a),2),s=l[0],f=l[1],p=j?j(e):null;if(i&&s&&!p)r.push(e);else{var d=[u,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!u&&r.length>1||u&&l>=1&&r.length>l)&&(r.forEach((function(e){o.push({file:e,errors:[I]})})),r.splice(0)),z({acceptedFiles:r,fileRejections:o,type:"setFiles"}),d&&d(r,o,t),o.length>0&&g&&g(o,t),r.length>0&&v&&v(r,t)}),[z,u,n,c,a,l,d,v,g,j]),ce=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Oe(e),U.current=[],Y(e)&&Promise.resolve(i(e)).then((function(t){G(e)&&!O||ae(t,e)})),z({type:"reset"})}),[i,ae,O]),fe=(0,r.useCallback)((function(){if(M.current){z({type:"openDialog"}),A();var e={multiple:u,types:V(n)};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ae(e,null),z({type:"closeDialog"})})).catch((function(e){J(e)?(E(e),z({type:"closeDialog"})):Q(e)&&(M.current=!1,F.current&&(F.current.value=null,F.current.click()))}))}else F.current&&(z({type:"openDialog"}),A(),F.current.value=null,F.current.click())}),[z,A,E,y,ae,n,u]),ve=(0,r.useCallback)((function(e){k.current&&k.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),fe()))}),[k,fe]),me=(0,r.useCallback)((function(){z({type:"focus"})}),[]),ye=(0,r.useCallback)((function(){z({type:"blur"})}),[]),he=(0,r.useCallback)((function(){w||($()?setTimeout(fe,0):fe())}),[w,fe]),we=function(e){return o?null:e},xe=function(e){return x?null:we(e)},De=function(e){return D?null:we(e)},Oe=function(e){O&&e.stopPropagation()},je=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=se(e,te);return ue(ue(le({onKeyDown:xe(q(i,ve)),onFocus:xe(q(a,me)),onBlur:xe(q(c,ye)),onClick:we(q(u,he)),onDragEnter:De(q(l,X)),onDragOver:De(q(s,ee)),onDragLeave:De(q(f,ie)),onDrop:De(q(p,ce)),role:"string"===typeof r&&""!==r?r:"button"},n,k),o||x?{}:{tabIndex:0}),d)}}),[k,ve,me,ye,he,X,ee,ie,ce,x,D,o]),Ae=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Ee=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=se(e,ne),c=le({accept:n,multiple:u,type:"file",style:{display:"none"},onChange:we(q(o,ce)),onClick:we(q(i,Ae)),autoComplete:"off",tabIndex:-1},r,F);return ue(ue({},c),a)}}),[F,n,u,ce,o]),ke=R.length,Fe=ke>0&&N({files:R,accept:n,minSize:c,maxSize:a,multiple:u,maxFiles:l}),Pe=ke>0&&!Fe;return ue(ue({},C),{},{isDragAccept:Fe,isDragReject:Pe,isFocused:T&&!o,getRootProps:je,getInputProps:Ee,rootRef:k,inputRef:F,open:we(fe)})}function ge(e,t){switch(t.type){case"focus":return ue(ue({},e),{},{isFocused:!0});case"blur":return ue(ue({},e),{},{isFocused:!1});case"openDialog":return ue(ue({},de),{},{isFileDialogActive:!0});case"closeDialog":return ue(ue({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return ue(ue({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return ue(ue({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return ue({},de);default:return e}}function be(){}}}]);