import{n as M,W as ue,T as Ee,F as Me,I as Ce,g as $e}from"./DocsRenderer-3PUGWF3O-57961e9d.js";import{a as h,r as m,C as Ne,j as J,W as Oe}from"./iframe-ec4f1c69.js";import"../sb-preview/runtime.js";function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Q(e,t){if(e==null)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}function K(e){var t=m.useRef(e),n=m.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var S=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},j=function(e){return"touches"in e},V=function(e){return e&&e.ownerDocument.defaultView||self},ne=function(e,t,n){var r=e.getBoundingClientRect(),a=j(t)?function(o,s){for(var l=0;l<o.length;l++)if(o[l].identifier===s)return o[l];return o[0]}(t.touches,n):t;return{left:S((a.pageX-(r.left+V(e).pageXOffset))/r.width),top:S((a.pageY-(r.top+V(e).pageYOffset))/r.height)}},re=function(e){!j(e)&&e.preventDefault()},Z=h.memo(function(e){var t=e.onMove,n=e.onKey,r=Q(e,["onMove","onKey"]),a=m.useRef(null),o=K(t),s=K(n),l=m.useRef(null),i=m.useRef(!1),c=m.useMemo(function(){var k=function(p){re(p),(j(p)?p.touches.length>0:p.buttons>0)&&a.current?o(ne(a.current,p,l.current)):_(!1)},N=function(){return _(!1)};function _(p){var b=i.current,x=V(a.current),C=p?x.addEventListener:x.removeEventListener;C(b?"touchmove":"mousemove",k),C(b?"touchend":"mouseup",N)}return[function(p){var b=p.nativeEvent,x=a.current;if(x&&(re(b),!function(X,R){return R&&!j(X)}(b,i.current)&&x)){if(j(b)){i.current=!0;var C=b.changedTouches||[];C.length&&(l.current=C[0].identifier)}x.focus(),o(ne(x,b,l.current)),_(!0)}},function(p){var b=p.which||p.keyCode;b<37||b>40||(p.preventDefault(),s({left:b===39?.05:b===37?-.05:0,top:b===40?.05:b===38?-.05:0}))},_]},[s,o]),d=c[0],f=c[1],g=c[2];return m.useEffect(function(){return g},[g]),h.createElement("div",$({},r,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:a,onKeyDown:f,tabIndex:0,role:"slider"}))}),F=function(e){return e.filter(Boolean).join(" ")},ee=function(e){var t=e.color,n=e.left,r=e.top,a=r===void 0?.5:r,o=F(["react-colorful__pointer",e.className]);return h.createElement("div",{className:o,style:{top:100*a+"%",left:100*n+"%"}},h.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},y=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},Ie={grad:.9,turn:360,rad:360/(2*Math.PI)},Se=function(e){return de(A(e))},A=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?y(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?y(parseInt(e.substring(6,8),16)/255,2):1}},Re=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Ie[t]||1)},Te=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?je({h:Re(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},je=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},ze=function(e){return He(he(e))},fe=function(e){var t=e.s,n=e.v,r=e.a,a=(200-t)*n/100;return{h:y(e.h),s:y(a>0&&a<200?t*n/100/(a<=100?a:200-a)*100:0),l:y(a/2),a:y(r,2)}},G=function(e){var t=fe(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},q=function(e){var t=fe(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},he=function(e){var t=e.h,n=e.s,r=e.v,a=e.a;t=t/360*6,n/=100,r/=100;var o=Math.floor(t),s=r*(1-n),l=r*(1-(t-o)*n),i=r*(1-(1-t+o)*n),c=o%6;return{r:y(255*[r,l,s,s,i,r][c]),g:y(255*[i,r,r,l,s,s][c]),b:y(255*[s,s,i,r,r,l][c]),a:y(a,2)}},Fe=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?de({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},H=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},He=function(e){var t=e.r,n=e.g,r=e.b,a=e.a,o=a<1?H(y(255*a)):"";return"#"+H(t)+H(n)+H(r)+o},de=function(e){var t=e.r,n=e.g,r=e.b,a=e.a,o=Math.max(t,n,r),s=o-Math.min(t,n,r),l=s?o===t?(n-r)/s:o===n?2+(r-t)/s:4+(t-n)/s:0;return{h:y(60*(l<0?l+6:l)),s:y(o?s/o*100:0),v:y(o/255*100),a}},ge=h.memo(function(e){var t=e.hue,n=e.onChange,r=F(["react-colorful__hue",e.className]);return h.createElement("div",{className:r},h.createElement(Z,{onMove:function(a){n({h:360*a.left})},onKey:function(a){n({h:S(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":y(t),"aria-valuemax":"360","aria-valuemin":"0"},h.createElement(ee,{className:"react-colorful__hue-pointer",left:t/360,color:G({h:t,s:100,v:100,a:1})})))}),be=h.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:G({h:t.h,s:100,v:100,a:1})};return h.createElement("div",{className:"react-colorful__saturation",style:r},h.createElement(Z,{onMove:function(a){n({s:100*a.left,v:100-100*a.top})},onKey:function(a){n({s:S(t.s+100*a.left,0,100),v:S(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+y(t.s)+"%, Brightness "+y(t.v)+"%"},h.createElement(ee,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:G(t)})))}),me=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},ve=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Pe=function(e,t){return e.toLowerCase()===t.toLowerCase()||me(A(e),A(t))};function pe(e,t,n){var r=K(n),a=m.useState(function(){return e.toHsva(t)}),o=a[0],s=a[1],l=m.useRef({color:t,hsva:o});m.useEffect(function(){if(!e.equal(t,l.current.color)){var c=e.toHsva(t);l.current={hsva:c,color:t},s(c)}},[t,e]),m.useEffect(function(){var c;me(o,l.current.hsva)||e.equal(c=e.fromHsva(o),l.current.color)||(l.current={hsva:o,color:c},r(c))},[o,e,r]);var i=m.useCallback(function(c){s(function(d){return Object.assign({},d,c)})},[]);return[o,i]}var Le=typeof window<"u"?m.useLayoutEffect:m.useEffect,qe=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},ae=new Map,ye=function(e){Le(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!ae.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,ae.set(t,n);var r=qe();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},We=function(e){var t=e.className,n=e.colorModel,r=e.color,a=r===void 0?n.defaultColor:r,o=e.onChange,s=Q(e,["className","colorModel","color","onChange"]),l=m.useRef(null);ye(l);var i=pe(n,a,o),c=i[0],d=i[1],f=F(["react-colorful",t]);return h.createElement("div",$({},s,{ref:l,className:f}),h.createElement(be,{hsva:c,onChange:d}),h.createElement(ge,{hue:c.h,onChange:d,className:"react-colorful__last-control"}))},Be={defaultColor:"000",toHsva:Se,fromHsva:function(e){return ze({h:e.h,s:e.s,v:e.v,a:1})},equal:Pe},Xe=function(e){return h.createElement(We,$({},e,{colorModel:Be}))},De=function(e){var t=e.className,n=e.hsva,r=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+q(Object.assign({},n,{a:0}))+", "+q(Object.assign({},n,{a:1}))+")"},o=F(["react-colorful__alpha",t]),s=y(100*n.a);return h.createElement("div",{className:o},h.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),h.createElement(Z,{onMove:function(l){r({a:l.left})},onKey:function(l){r({a:S(n.a+l.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},h.createElement(ee,{className:"react-colorful__alpha-pointer",left:n.a,color:q(n)})))},xe=function(e){var t=e.className,n=e.colorModel,r=e.color,a=r===void 0?n.defaultColor:r,o=e.onChange,s=Q(e,["className","colorModel","color","onChange"]),l=m.useRef(null);ye(l);var i=pe(n,a,o),c=i[0],d=i[1],f=F(["react-colorful",t]);return h.createElement("div",$({},s,{ref:l,className:f}),h.createElement(be,{hsva:c,onChange:d}),h.createElement(ge,{hue:c.h,onChange:d}),h.createElement(De,{hsva:c,onChange:d,className:"react-colorful__last-control"}))},Ke={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Te,fromHsva:q,equal:ve},Ve=function(e){return h.createElement(xe,$({},e,{colorModel:Ke}))},Ae={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Fe,fromHsva:function(e){var t=he(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ve},Ge=function(e){return h.createElement(xe,$({},e,{colorModel:Ae}))},Ue={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const z=Ue,we={};for(const e of Object.keys(z))we[z[e]]=e;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var ke=u;for(const e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:n})}u.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,a=Math.min(t,n,r),o=Math.max(t,n,r),s=o-a;let l,i;o===a?l=0:t===o?l=(n-r)/s:n===o?l=2+(r-t)/s:r===o&&(l=4+(t-n)/s),l=Math.min(l*60,360),l<0&&(l+=360);const c=(a+o)/2;return o===a?i=0:c<=.5?i=s/(o+a):i=s/(2-o-a),[l,i*100,c*100]};u.rgb.hsv=function(e){let t,n,r,a,o;const s=e[0]/255,l=e[1]/255,i=e[2]/255,c=Math.max(s,l,i),d=c-Math.min(s,l,i),f=function(g){return(c-g)/6/d+1/2};return d===0?(a=0,o=0):(o=d/c,t=f(s),n=f(l),r=f(i),s===c?a=r-n:l===c?a=1/3+t-r:i===c&&(a=2/3+n-t),a<0?a+=1:a>1&&(a-=1)),[a*360,o*100,c*100]};u.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const a=u.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[a,o*100,r*100]};u.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,a=Math.min(1-t,1-n,1-r),o=(1-t-a)/(1-a)||0,s=(1-n-a)/(1-a)||0,l=(1-r-a)/(1-a)||0;return[o*100,s*100,l*100,a*100]};function Ye(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}u.rgb.keyword=function(e){const t=we[e];if(t)return t;let n=1/0,r;for(const a of Object.keys(z)){const o=z[a],s=Ye(e,o);s<n&&(n=s,r=a)}return r};u.keyword.rgb=function(e){return z[e]};u.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const a=t*.4124+n*.3576+r*.1805,o=t*.2126+n*.7152+r*.0722,s=t*.0193+n*.1192+r*.9505;return[a*100,o*100,s*100]};u.rgb.lab=function(e){const t=u.rgb.xyz(e);let n=t[0],r=t[1],a=t[2];n/=95.047,r/=100,a/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;const o=116*r-16,s=500*(n-r),l=200*(r-a);return[o,s,l]};u.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let a,o,s;if(n===0)return s=r*255,[s,s,s];r<.5?a=r*(1+n):a=r+n-r*n;const l=2*r-a,i=[0,0,0];for(let c=0;c<3;c++)o=t+1/3*-(c-1),o<0&&o++,o>1&&o--,6*o<1?s=l+(a-l)*6*o:2*o<1?s=a:3*o<2?s=l+(a-l)*(2/3-o)*6:s=l,i[c]=s*255;return i};u.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,a=n;const o=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,a*=o<=1?o:2-o;const s=(r+n)/2,l=r===0?2*a/(o+a):2*n/(r+n);return[t,l*100,s*100]};u.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),s=255*r*(1-n),l=255*r*(1-n*o),i=255*r*(1-n*(1-o));switch(r*=255,a){case 0:return[r,i,s];case 1:return[l,r,s];case 2:return[s,r,i];case 3:return[s,l,r];case 4:return[i,s,r];case 5:return[r,s,l]}};u.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,a=Math.max(r,.01);let o,s;s=(2-n)*r;const l=(2-n)*a;return o=n*a,o/=l<=1?l:2-l,o=o||0,s/=2,[t,o*100,s*100]};u.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const a=n+r;let o;a>1&&(n/=a,r/=a);const s=Math.floor(6*t),l=1-r;o=6*t-s,s&1&&(o=1-o);const i=n+o*(l-n);let c,d,f;switch(s){default:case 6:case 0:c=l,d=i,f=n;break;case 1:c=i,d=l,f=n;break;case 2:c=n,d=l,f=i;break;case 3:c=n,d=i,f=l;break;case 4:c=i,d=n,f=l;break;case 5:c=l,d=n,f=i;break}return[c*255,d*255,f*255]};u.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,a=e[3]/100,o=1-Math.min(1,t*(1-a)+a),s=1-Math.min(1,n*(1-a)+a),l=1-Math.min(1,r*(1-a)+a);return[o*255,s*255,l*255]};u.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let a,o,s;return a=t*3.2406+n*-1.5372+r*-.4986,o=t*-.9689+n*1.8758+r*.0415,s=t*.0557+n*-.204+r*1.057,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),s=Math.min(Math.max(0,s),1),[a*255,o*255,s*255]};u.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const a=116*n-16,o=500*(t-n),s=200*(n-r);return[a,o,s]};u.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let a,o,s;o=(t+16)/116,a=n/500+o,s=o-r/200;const l=o**3,i=a**3,c=s**3;return o=l>.008856?l:(o-16/116)/7.787,a=i>.008856?i:(a-16/116)/7.787,s=c>.008856?c:(s-16/116)/7.787,a*=95.047,o*=100,s*=108.883,[a,o,s]};u.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let a;a=Math.atan2(r,n)*360/2/Math.PI,a<0&&(a+=360);const s=Math.sqrt(n*n+r*r);return[t,s,a]};u.lch.lab=function(e){const t=e[0],n=e[1],a=e[2]/360*2*Math.PI,o=n*Math.cos(a),s=n*Math.sin(a);return[t,o,s]};u.rgb.ansi16=function(e,t=null){const[n,r,a]=e;let o=t===null?u.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),o===0)return 30;let s=30+(Math.round(a/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return o===2&&(s+=60),s};u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])};u.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};u.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,a=(t>>1&1)*n*255,o=(t>>2&1)*n*255;return[r,a,o]};u.ansi256.rgb=function(e){if(e>=232){const o=(e-232)*10+8;return[o,o,o]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,a=t%6/5*255;return[n,r,a]};u.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(l=>l+l).join(""));const r=parseInt(n,16),a=r>>16&255,o=r>>8&255,s=r&255;return[a,o,s]};u.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,a=Math.max(Math.max(t,n),r),o=Math.min(Math.min(t,n),r),s=a-o;let l,i;return s<1?l=o/(1-s):l=0,s<=0?i=0:a===t?i=(n-r)/s%6:a===n?i=2+(r-t)/s:i=4+(t-n)/s,i/=6,i%=1,[i*360,s*100,l*100]};u.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let a=0;return r<1&&(a=(n-.5*r)/(1-r)),[e[0],r*100,a*100]};u.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let a=0;return r<1&&(a=(n-r)/(1-r)),[e[0],r*100,a*100]};u.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const a=[0,0,0],o=t%1*6,s=o%1,l=1-s;let i=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=s,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=s;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=s,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return i=(1-n)*r,[(n*a[0]+i)*255,(n*a[1]+i)*255,(n*a[2]+i)*255]};u.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let a=0;return r>0&&(a=t/r),[e[0],a*100,r*100]};u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let a=0;return r>0&&r<.5?a=t/(2*r):r>=.5&&r<1&&(a=t/(2*(1-r))),[e[0],a*100,r*100]};u.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};u.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,a=r-t;let o=0;return a<1&&(o=(r-a)/(1-a)),[e[0],a*100,o*100]};u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};u.gray.hsl=function(e){return[0,0,e[0]]};u.gray.hsv=u.gray.hsl;u.gray.hwb=function(e){return[0,100,e[0]]};u.gray.cmyk=function(e){return[0,0,0,e[0]]};u.gray.lab=function(e){return[e[0],0,0]};u.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const W=ke;function Je(){const e={},t=Object.keys(W);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function Qe(e){const t=Je(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),a=Object.keys(W[r]);for(let o=a.length,s=0;s<o;s++){const l=a[s],i=t[l];i.distance===-1&&(i.distance=t[r].distance+1,i.parent=r,n.unshift(l))}}return t}function Ze(e,t){return function(n){return t(e(n))}}function et(e,t){const n=[t[e].parent,e];let r=W[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)n.unshift(t[a].parent),r=Ze(W[t[a].parent][a],r),a=t[a].parent;return r.conversion=n,r}var tt=function(e){const t=Qe(e),n={},r=Object.keys(t);for(let a=r.length,o=0;o<a;o++){const s=r[o];t[s].parent!==null&&(n[s]=et(s,t))}return n};const U=ke,nt=tt,O={},rt=Object.keys(U);function at(e){const t=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function ot(e){const t=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const a=e(n);if(typeof a=="object")for(let o=a.length,s=0;s<o;s++)a[s]=Math.round(a[s]);return a};return"conversion"in e&&(t.conversion=e.conversion),t}rt.forEach(e=>{O[e]={},Object.defineProperty(O[e],"channels",{value:U[e].channels}),Object.defineProperty(O[e],"labels",{value:U[e].labels});const t=nt(e);Object.keys(t).forEach(r=>{const a=t[r];O[e][r]=ot(a),O[e][r].raw=at(a)})});var w=O,st=Ne,lt=function(){return st.Date.now()},it=lt,ct=/\s/;function ut(e){for(var t=e.length;t--&&ct.test(e.charAt(t)););return t}var ft=ut,ht=ft,dt=/^\s+/;function gt(e){return e&&e.slice(0,ht(e)+1).replace(dt,"")}var bt=gt,mt=bt,oe=J,vt=Oe,se=0/0,pt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,xt=/^0o[0-7]+$/i,wt=parseInt;function kt(e){if(typeof e=="number")return e;if(vt(e))return se;if(oe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=oe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=mt(e);var n=yt.test(e);return n||xt.test(e)?wt(e.slice(2),n?2:8):pt.test(e)?se:+e}var _t=kt,Et=J,D=it,le=_t,Mt="Expected a function",Ct=Math.max,$t=Math.min;function Nt(e,t,n){var r,a,o,s,l,i,c=0,d=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(Mt);t=le(t)||0,Et(n)&&(d=!!n.leading,f="maxWait"in n,o=f?Ct(le(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function k(v){var E=r,T=a;return r=a=void 0,c=v,s=e.apply(T,E),s}function N(v){return c=v,l=setTimeout(b,t),d?k(v):s}function _(v){var E=v-i,T=v-c,te=t-E;return f?$t(te,o-T):te}function p(v){var E=v-i,T=v-c;return i===void 0||E>=t||E<0||f&&T>=o}function b(){var v=D();if(p(v))return x(v);l=setTimeout(b,_(v))}function x(v){return l=void 0,g&&r?k(v):(r=a=void 0,s)}function C(){l!==void 0&&clearTimeout(l),c=0,r=i=a=l=void 0}function X(){return l===void 0?s:x(D())}function R(){var v=D(),E=p(v);if(r=arguments,a=this,i=v,E){if(l===void 0)return N(i);if(f)return clearTimeout(l),l=setTimeout(b,t),k(i)}return l===void 0&&(l=setTimeout(b,t)),s}return R.cancel=C,R.flush=X,R}var Ot=Nt,It=Ot,St=J,Rt="Expected a function";function Tt(e,t,n){var r=!0,a=!0;if(typeof e!="function")throw new TypeError(Rt);return St(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),It(e,t,{leading:r,maxWait:t,trailing:a})}var jt=Tt,zt=M.div({position:"relative",maxWidth:250}),Ft=M(ue)({position:"absolute",zIndex:1,top:4,left:4}),Ht=M.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Pt=M(Ee)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Lt=M.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),qt=M.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Wt=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ie=({value:e,active:t,onClick:n,style:r,...a})=>{let o=`linear-gradient(${e}, ${e}), ${Wt}, linear-gradient(#fff, #fff)`;return h.createElement(qt,{...a,active:t,onClick:n,style:{...r,backgroundImage:o}})},Bt=M(Me.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Xt=M(Ce)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),_e=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(_e||{}),P=Object.values(_e),Dt=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Kt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Vt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Y=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,At=/^\s*#?([0-9a-f]{3})\s*$/i,Gt={hex:Xe,rgb:Ge,hsl:Ve},L={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ce=e=>{let t=e==null?void 0:e.match(Dt);if(!t)return[0,0,0,1];let[,n,r,a,o=1]=t;return[n,r,a,o].map(Number)},I=e=>{if(!e)return;let t=!0;if(Kt.test(e)){let[s,l,i,c]=ce(e),[d,f,g]=w.rgb.hsl([s,l,i])||[0,0,0];return{valid:t,value:e,keyword:w.rgb.keyword([s,l,i]),colorSpace:"rgb",rgb:e,hsl:`hsla(${d}, ${f}%, ${g}%, ${c})`,hex:`#${w.rgb.hex([s,l,i]).toLowerCase()}`}}if(Vt.test(e)){let[s,l,i,c]=ce(e),[d,f,g]=w.hsl.rgb([s,l,i])||[0,0,0];return{valid:t,value:e,keyword:w.hsl.keyword([s,l,i]),colorSpace:"hsl",rgb:`rgba(${d}, ${f}, ${g}, ${c})`,hsl:e,hex:`#${w.hsl.hex([s,l,i]).toLowerCase()}`}}let n=e.replace("#",""),r=w.keyword.rgb(n)||w.hex.rgb(n),a=w.rgb.hsl(r),o=e;if(/[^#a-f0-9]/i.test(e)?o=n:Y.test(e)&&(o=`#${n}`),o.startsWith("#"))t=Y.test(o);else try{w.keyword.hex(o)}catch{t=!1}return{valid:t,value:o,keyword:w.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:o}},Ut=(e,t,n)=>{if(!e||!(t!=null&&t.valid))return L[n];if(n!=="hex")return(t==null?void 0:t[n])||L[n];if(!t.hex.startsWith("#"))try{return`#${w.keyword.hex(t.hex)}`}catch{return L.hex}let r=t.hex.match(At);if(!r)return Y.test(t.hex)?t.hex:L.hex;let[a,o,s]=r[1].split("");return`#${a}${a}${o}${o}${s}${s}`},Yt=(e,t)=>{let[n,r]=m.useState(e||""),[a,o]=m.useState(()=>I(n)),[s,l]=m.useState((a==null?void 0:a.colorSpace)||"hex");m.useEffect(()=>{let f=e||"",g=I(f);r(f),o(g),l((g==null?void 0:g.colorSpace)||"hex")},[e]);let i=m.useMemo(()=>Ut(n,a,s).toLowerCase(),[n,a,s]),c=m.useCallback(f=>{let g=I(f),k=(g==null?void 0:g.value)||f||"";r(k),k===""&&(o(void 0),t(void 0)),g&&(o(g),l(g.colorSpace),t(g.value))},[t]),d=m.useCallback(()=>{let f=P.indexOf(s)+1;f>=P.length&&(f=0),l(P[f]);let g=(a==null?void 0:a[P[f]])||"";r(g),t(g)},[a,s,t]);return{value:n,realValue:i,updateValue:c,color:a,colorSpace:s,cycleColorSpace:d}},B=e=>e.replace(/\s*/,"").toLowerCase(),Jt=(e,t,n)=>{let[r,a]=m.useState(t!=null&&t.valid?[t]:[]);m.useEffect(()=>{t===void 0&&a([])},[t]);let o=m.useMemo(()=>(e||[]).map(l=>typeof l=="string"?I(l):l.title?{...I(l.color),keyword:l.title}:I(l.color)).concat(r).filter(Boolean).slice(-27),[e,r]),s=m.useCallback(l=>{l!=null&&l.valid&&(o.some(i=>B(i[n])===B(l[n]))||a(i=>i.concat(l)))},[n,o]);return{presets:o,addPreset:s}},Qt=({name:e,value:t,onChange:n,onFocus:r,onBlur:a,presetColors:o,startOpen:s=!1})=>{let l=m.useCallback(jt(n,200),[n]),{value:i,realValue:c,updateValue:d,color:f,colorSpace:g,cycleColorSpace:k}=Yt(t,l),{presets:N,addPreset:_}=Jt(o,f,g),p=Gt[g];return h.createElement(zt,null,h.createElement(Ft,{startOpen:s,closeOnOutsideClick:!0,onVisibleChange:()=>_(f),tooltip:h.createElement(Ht,null,h.createElement(p,{color:c==="transparent"?"#000000":c,onChange:d,onFocus:r,onBlur:a}),N.length>0&&h.createElement(Lt,null,N.map((b,x)=>h.createElement(ue,{key:`${b.value}-${x}`,hasChrome:!1,tooltip:h.createElement(Pt,{note:b.keyword||b.value})},h.createElement(ie,{value:b[g],active:f&&B(b[g])===B(f[g]),onClick:()=>d(b.value)})))))},h.createElement(ie,{value:c,style:{margin:4}})),h.createElement(Bt,{id:$e(e),value:i,onChange:b=>d(b.target.value),onFocus:b=>b.target.select(),placeholder:"Choose color..."}),i?h.createElement(Xt,{icon:"markup",onClick:k}):null)},nn=Qt;export{Qt as ColorControl,nn as default};
//# sourceMappingURL=Color-6VNJS4EI-a9e8be6f.js.map
