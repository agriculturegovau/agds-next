(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{7094:function(e,n){"use strict";n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some(function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n})}return!0}},8772:function(e,n,t){"use strict";var r=t(331);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},3615:function(e,n,t){e.exports=t(8772)()},331:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1165:function(e,n,t){"use strict";t.d(n,{uI:function(){return M}});var r=t(7378),o=t(3615),i=t.n(o);function a(e,n,t,r){return new(t||(t=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):((n=e.value)instanceof t?n:new t(function(e){e(n)})).then(a,c)}u((r=r.apply(e,n||[])).next())})}function c(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function u(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function l(e,n,t){if(t||2==arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=s.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof n?n:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"==typeof e&&null!==e}function v(e){return e.filter(function(e){return -1===p.indexOf(e.name)})}function m(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function y(e){if("function"!=typeof e.webkitGetAsEntry)return g(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?h(n):g(e)}function g(e){var n=e.getAsFile();return n?Promise.resolve(f(n)):Promise.reject("".concat(e," is not a File"))}function b(e){return a(this,void 0,void 0,function(){return c(this,function(n){return[2,e.isDirectory?h(e):function(e){return a(this,void 0,void 0,function(){return c(this,function(n){return[2,new Promise(function(n,t){e.file(function(t){n(f(t,e.fullPath))},function(e){t(e)})})]})})}(e)]})})}function h(e){var n=e.createReader();return new Promise(function(e,t){var r=[];!function o(){var i=this;n.readEntries(function(n){return a(i,void 0,void 0,function(){var i;return c(this,function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return t(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(n.map(b)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){t(e)})}()})}var w=t(5737),D=["children"],O=["open"],j=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],x=["refKey","onChange","onClick"];function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(t=o.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,n)||F(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach(function(n){S(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var T=(0,r.forwardRef)(function(e,n){var t=e.children,o=M(C(e,D)),i=o.open,a=C(o,O);return(0,r.useImperativeHandle)(n,function(){return{open:i}},[i]),r.createElement(r.Fragment,null,t(P(P({},a),{},{open:i})))});T.displayName="Dropzone";var z={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,function(){return c(this,function(n){return d(e)&&d(e.dataTransfer)?[2,function(e,n){return a(this,void 0,void 0,function(){var t;return c(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(t=m(e.items).filter(function(e){return"file"===e.kind}),"drop"!==n)return[2,t];return[4,Promise.all(t.map(y))];case 1:return[2,v(function e(n){return n.reduce(function(n,t){return l(l([],u(n),!1),u(Array.isArray(t)?e(t):[t]),!1)},[])}(r.sent()))];case 2:return[2,v(m(e.files).map(function(e){return f(e)}))]}})})}(e.dataTransfer,e.type)]:d(e)&&d(e.target)?[2,m(e.target.files).map(function(e){return f(e)})]:Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return a(this,void 0,void 0,function(){return c(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,n.sent().map(function(e){return f(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};T.defaultProps=z,T.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var R={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=P(P({},z),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,m=n.onDropRejected,y=n.onFileDialogCancel,g=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.autoFocus,D=n.preventDropOnDocument,O=n.noClick,k=n.noKeyboard,T=n.noDrag,M=n.noDragEventsBubbling,L=n.onError,B=n.validator,K=(0,r.useMemo)(function(){return(0,w.gS)(t)},[t]),q=(0,r.useMemo)(function(){return(0,w.zO)(t)},[t]),V=(0,r.useMemo)(function(){return"function"==typeof g?g:_},[g]),U=(0,r.useMemo)(function(){return"function"==typeof y?y:_},[y]),W=(0,r.useRef)(null),N=(0,r.useRef)(null),$=A((0,r.useReducer)(I,R),2),H=$[0],X=$[1],G=H.isFocused,Q=H.isFileDialogActive,Y=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&b&&(0,w.fV)()),Z=function(){!Y.current&&Q&&setTimeout(function(){N.current&&!N.current.files.length&&(X({type:"closeDialog"}),U())},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",Z,!1),function(){window.removeEventListener("focus",Z,!1)}},[N,Q,U,Y]);var J=(0,r.useRef)([]),ee=function(e){W.current&&W.current.contains(e.target)||(e.preventDefault(),J.current=[])};(0,r.useEffect)(function(){return D&&(document.addEventListener("dragover",w.w0,!1),document.addEventListener("drop",ee,!1)),function(){D&&(document.removeEventListener("dragover",w.w0),document.removeEventListener("drop",ee))}},[W,D]),(0,r.useEffect)(function(){return!o&&h&&W.current&&W.current.focus(),function(){}},[W,h,o]);var en=(0,r.useCallback)(function(e){L?L(e):console.error(e)},[L]),et=(0,r.useCallback)(function(e){var n;e.preventDefault(),e.persist(),em(e),J.current=[].concat(function(e){if(Array.isArray(e))return E(e)}(n=J.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||F(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),(0,w.Vq)(e)&&Promise.resolve(i(e)).then(function(n){if(!(0,w.np)(e)||M){var t=n.length,r=t>0&&(0,w.zo)({files:n,accept:K,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:B});X({isDragAccept:r,isDragReject:t>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}}).catch(function(e){return en(e)})},[i,s,en,M,K,c,a,u,l,B]),er=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),em(e);var n=(0,w.Vq)(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return n&&p&&p(e),!1},[p,M]),eo=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),em(e);var n=J.current.filter(function(e){return W.current&&W.current.contains(e)}),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),J.current=n,!(n.length>0)&&(X({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),(0,w.Vq)(e)&&f&&f(e))},[W,f,M]),ei=(0,r.useCallback)(function(e,n){var t=[],r=[];e.forEach(function(e){var n=A((0,w.dR)(e,K),2),o=n[0],i=n[1],u=A((0,w.XT)(e,c,a),2),l=u[0],s=u[1],f=B?B(e):null;if(o&&l&&!f)t.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter(function(e){return e})})}}),(!u&&t.length>1||u&&l>=1&&t.length>l)&&(t.forEach(function(e){r.push({file:e,errors:[w.dX]})}),t.splice(0)),X({acceptedFiles:t,fileRejections:r,type:"setFiles"}),d&&d(t,r,n),r.length>0&&m&&m(r,n),t.length>0&&v&&v(t,n)},[X,u,K,c,a,l,d,v,m,B]),ea=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),em(e),J.current=[],(0,w.Vq)(e)&&Promise.resolve(i(e)).then(function(n){(!(0,w.np)(e)||M)&&ei(n,e)}).catch(function(e){return en(e)}),X({type:"reset"})},[i,ei,en,M]),ec=(0,r.useCallback)(function(){if(Y.current){X({type:"openDialog"}),V(),window.showOpenFilePicker({multiple:u,types:q}).then(function(e){return i(e)}).then(function(e){ei(e,null),X({type:"closeDialog"})}).catch(function(e){(0,w.PQ)(e)?(U(e),X({type:"closeDialog"})):(0,w.c_)(e)?(Y.current=!1,N.current?(N.current.value=null,N.current.click()):en(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):en(e)});return}N.current&&(X({type:"openDialog"}),V(),N.current.value=null,N.current.click())},[X,V,U,b,ei,en,q,u]),eu=(0,r.useCallback)(function(e){W.current&&W.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),ec())},[W,ec]),el=(0,r.useCallback)(function(){X({type:"focus"})},[]),es=(0,r.useCallback)(function(){X({type:"blur"})},[]),ef=(0,r.useCallback)(function(){O||((0,w.DF)()?setTimeout(ec,0):ec())},[O,ec]),ep=function(e){return o?null:e},ed=function(e){return k?null:ep(e)},ev=function(e){return T?null:ep(e)},em=function(e){M&&e.stopPropagation()},ey=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=e.role,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=C(e,j);return P(P(S({onKeyDown:ed((0,w.Mj)(r,eu)),onFocus:ed((0,w.Mj)(i,el)),onBlur:ed((0,w.Mj)(a,es)),onClick:ep((0,w.Mj)(c,ef)),onDragEnter:ev((0,w.Mj)(u,et)),onDragOver:ev((0,w.Mj)(l,er)),onDragLeave:ev((0,w.Mj)(s,eo)),onDrop:ev((0,w.Mj)(f,ea)),role:"string"==typeof t&&""!==t?t:"presentation"},void 0===n?"ref":n,W),o||k?{}:{tabIndex:0}),p)}},[W,eu,el,es,ef,et,er,eo,ea,k,T,o]),eg=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eb=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=e.onChange,r=e.onClick,o=C(e,x);return P(P({},S({accept:K,multiple:u,type:"file",style:{display:"none"},onChange:ep((0,w.Mj)(t,ea)),onClick:ep((0,w.Mj)(r,eg)),tabIndex:-1},void 0===n?"ref":n,N)),o)}},[N,t,u,ea,o]);return P(P({},H),{},{isFocused:G&&!o,getRootProps:ey,getInputProps:eb,rootRef:W,inputRef:N,open:ep(ec)})}function I(e,n){switch(n.type){case"focus":return P(P({},e),{},{isFocused:!0});case"blur":return P(P({},e),{},{isFocused:!1});case"openDialog":return P(P({},R),{},{isFileDialogActive:!0});case"closeDialog":return P(P({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return P(P({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return P(P({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return P({},R);default:return e}}function _(){}},5737:function(e,n,t){"use strict";t.d(n,{DF:function(){return E},Mj:function(){return k},PQ:function(){return T},Vq:function(){return A},XT:function(){return D},c_:function(){return z},dR:function(){return w},dX:function(){return h},fV:function(){return P},gS:function(){return C},jK:function(){return m},np:function(){return x},w0:function(){return F},zO:function(){return S},zo:function(){return j}});var r=t(7094);function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(n){c(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(t=o.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,n)||l(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var f="file-invalid-type",p="file-too-large",d="file-too-small",v="too-many-files",m={FileInvalidType:f,FileTooLarge:p,FileTooSmall:d,TooManyFiles:v},y=function(e){var n=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:f,message:"File type must be ".concat(n)}},g=function(e){return{code:p,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},b=function(e){return{code:d,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},h={code:v,message:"Too many files"};function w(e,n){var t="application/x-moz-file"===e.type||(0,r.Z)(e,n);return[t,t?null:y(n)]}function D(e,n,t){if(O(e.size)){if(O(n)&&O(t)){if(e.size>t)return[!1,g(t)];if(e.size<n)return[!1,b(n)]}else if(O(n)&&e.size<n)return[!1,b(n)];else if(O(t)&&e.size>t)return[!1,g(t)]}return[!0,null]}function O(e){return null!=e}function j(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return(!!i||!(n.length>1))&&(!i||!(a>=1)||!(n.length>a))&&n.every(function(e){var n=u(w(e,t),1)[0],i=u(D(e,r,o),1)[0],a=c?c(e):null;return n&&i&&!a})}function x(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function A(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function F(e){e.preventDefault()}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}function k(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some(function(n){return!x(e)&&n&&n.apply(void 0,[e].concat(r)),x(e)})}}function P(){return"showOpenFilePicker"in window}function S(e){return O(e)?[{description:"Files",accept:Object.entries(e).filter(function(e){var n=u(e,2),t=n[0],r=n[1],o=!0;return R(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(M)||(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,n){var t=u(n,2),r=t[0],o=t[1];return a(a({},e),{},c({},r,o))},{})}]:e}function C(e){if(O(e))return Object.entries(e).reduce(function(e,n){var t=u(n,2),r=t[0],i=t[1];return[].concat(o(e),[r],o(i))},[]).filter(function(e){return R(e)||M(e)}).join(",")}function T(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function z(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function R(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function M(e){return/^.*\.[\w]+$/.test(e)}}}]);