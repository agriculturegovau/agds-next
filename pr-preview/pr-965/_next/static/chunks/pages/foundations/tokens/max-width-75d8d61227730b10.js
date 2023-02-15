(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{33536:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(18590),i=n(14072),o=n(57489),a=n(3029),l=n(87800),d=function(e){var t=e.breadcrumbs,n=e.editPath,d=e.children,c=e.title,s=e.description;return(0,l.tZ)(i.L,{children:(0,l.BX)(o.X,{sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:r.Gw},editPath:n,breadcrumbs:t,children:[(0,l.tZ)(a.V,{title:c,introduction:s}),d]})})}},18590:function(e,t,n){"use strict";n.d(t,{Gw:function(){return a},Qu:function(){return l},Sg:function(){return o}});var r=n(90849);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var o={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},a=Object.values(o).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function l(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},30073:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(10043),i=n(97865),o=n(71389),a=n(34144),l=n(45751),d=n(68920),c=n(53009),s=n(58119),u=n(33536),h=n(18590),f=n(87800),p={bodyText:{value:a.tokens.maxWidth.bodyText,description:"Used for setting an optimal line length for readability in body text. This helps the users attention flow easily from one line to the next, making reading more natural and comfortable."},container:{value:a.tokens.maxWidth.container,description:"Used for setting the max-width of the page container."},modalDialog:{value:a.tokens.maxWidth.modalDialog,description:"Used for setting the max-width of the dialog in the Modal component."},mobileMenu:{value:a.tokens.maxWidth.mobileMenu,description:"Used for setting the max-width of the modal dialog in the mobile version of the MainNav."}};function b(){return(0,f.BX)(f.HY,{children:[(0,f.tZ)(s.$,{title:h.Sg.maxWidth.pageTitle,description:h.Sg.maxWidth.description}),(0,f.tZ)(u.A,{title:h.Sg.maxWidth.pageTitle,description:h.Sg.maxWidth.description,breadcrumbs:(0,h.Qu)(h.Sg.maxWidth),editPath:"/docs/pages/foundations/tokens/max-width.tsx",children:(0,f.BX)(l.Prose,{children:[(0,f.tZ)("div",{className:l.proseBlockClassname,children:(0,f.tZ)(d.TableWrapper,{children:(0,f.BX)(d.Table,{children:[(0,f.tZ)(d.TableCaption,{children:"Max-width tokens"}),(0,f.tZ)(d.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(d.TableHeader,{scope:"col",width:"25%",children:"Token"}),(0,f.tZ)(d.TableHeader,{scope:"col",width:"25%",children:"Value"}),(0,f.tZ)(d.TableHeader,{scope:"col",width:"50%",children:"Description"})]})}),(0,f.tZ)(d.TableBody,{children:Object.entries(p).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1],o=r.value,a=r.description;return(0,f.BX)("tr",{children:[(0,f.tZ)(d.TableCell,{children:n}),(0,f.tZ)(d.TableCell,{children:o}),(0,f.tZ)(d.TableCell,{children:a})]},n)})})]})})}),(0,f.tZ)("h2",{children:"Form fields"}),(0,f.tZ)("p",{children:"The width of a form field should indicate the amount of information expected to be entered into the field. The size of the form field acts as a visual constraint for the end user."}),(0,f.tZ)("p",{children:"As an example, form fields for postcodes should have a smaller width than fields for emails."}),(0,f.tZ)("div",{className:l.proseBlockClassname,children:(0,f.tZ)(d.TableWrapper,{children:(0,f.BX)(d.Table,{children:[(0,f.tZ)(d.TableCaption,{children:"Max-width form field tokens"}),(0,f.tZ)(d.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(d.TableHeader,{scope:"col",width:"25%",children:"Token"}),(0,f.tZ)(d.TableHeader,{scope:"col",children:"Value"})]})}),(0,f.tZ)(d.TableBody,{children:Object.entries(a.tokens.maxWidth.field).map(function(e){var t=(0,i.Z)(e,2),n=t[0],l=t[1];return(0,f.BX)("tr",{children:[(0,f.tZ)(d.TableCell,{children:n}),(0,f.tZ)(d.TableCell,{children:(0,f.tZ)(o.Box,{padding:.5,css:(0,r.iv)({backgroundColor:a.boxPalette.systemInfoMuted,width:"100%",maxWidth:l},"",""),children:(0,f.tZ)(c.Text,{children:l})})})]},n)})})]})})})]})})]})}},59764:function(e,t,n){"use strict";n.d(t,{Table:function(){return d},TableBody:function(){return y},TableCaption:function(){return m},TableCell:function(){return x},TableHead:function(){return v},TableHeader:function(){return p},TableWrapper:function(){return T}});var r=n(10043),i=n(27378),o=n(7686),a=n(2810),l=n(87800),d=(0,i.forwardRef)(function(e,t){var n=e.children,i=e.striped,d=e.tabIndex;return(0,l.tZ)(o.Box,{as:"table",ref:t,tabIndex:d,fontSize:"sm",focus:!0,width:"100%",display:"table",css:(0,r.iv)({borderCollapse:"collapse",borderSpacing:0,"tbody tr:nth-last-of-type( odd )":{backgroundColor:i?a.boxPalette.backgroundShade:"transparent"}},"",""),children:n})}),c=n(90849),s=n(90089),u=["children","textAlign","width"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,c.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=function(e){var t=e.children,n=e.textAlign,i=e.width,a=(0,s.Z)(e,u);return(0,l.tZ)(o.Box,f(f({as:"th",color:"text",padding:.75,fontWeight:"bold",focus:!0,width:i,css:(0,r.iv)({textAlign:void 0===n?"left":n},"","")},a),{},{children:t}))},b=n(93555),g={name:"1flj9lk",styles:"text-align:left"},m=function(e){var t=e.children;return(0,l.tZ)(b.Text,{as:"caption",fontSize:"md",fontWeight:"bold",paddingBottom:.5,display:"table-caption",css:g,children:t})},v=function(e){var t=e.children;return(0,l.tZ)(o.Box,{as:"thead",borderBottom:!0,borderBottomWidth:"xl",borderColor:"muted",display:"table-header-group",children:t})},y=function(e){var t=e.children;return(0,l.tZ)(o.Box,{as:"tbody",display:"table-row-group",children:t})},x=function(e){var t=e.children,n=e.display,i=e.verticalAlign,a=e.textAlign;return(0,l.tZ)(o.Box,{as:"td",padding:.75,borderBottom:!0,borderColor:"muted",color:"text",focus:!0,display:n,css:(0,r.iv)({verticalAlign:void 0===i?"top":i,textAlign:void 0===a?"left":a},"",""),children:t})},w={name:"1j3zebv",styles:"overflow-x:auto"},T=function(e){var t=e.children;return(0,l.tZ)("div",{css:w,children:t})}},68920:function(e,t,n){"use strict";var r=n(51502).___internalHook("/","../../../..","../..");e.exports=n(59764),r()},32857:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/max-width",function(){return n(30073)}])},55732:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var l=e[o](a),d=l.value}catch(c){n(c);return}l.done?t(d):Promise.resolve(d).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,o){var a=e.apply(t,n);function l(e){r(a,i,o,l,d,"next",e)}function d(e){r(a,i,o,l,d,"throw",e)}l(void 0)})}}n.d(t,{Z:function(){return i}})}},function(e){e.O(0,[519,367,334,751,774,888,179],function(){return e(e.s=32857)}),_N_E=e.O()}]);