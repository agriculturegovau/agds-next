(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{33536:function(e,t,r){"use strict";r.d(t,{A:function(){return c}});var o=r(18590),n=r(14072),a=r(57489),i=r(3029),l=r(87800),c=function(e){var t=e.breadcrumbs,r=e.editPath,c=e.children,d=e.title,s=e.description;return(0,l.tZ)(n.L,{applyMainElement:!1,children:(0,l.BX)(a.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:o.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:r,breadcrumbs:t,children:[(0,l.tZ)(i.V,{title:d,introduction:s}),c]})})}},18590:function(e,t,r){"use strict";r.d(t,{Gw:function(){return i},Qu:function(){return l},Sg:function(){return a}});var o=r(90849);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}var a={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},i=Object.values(a).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function l(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},50522:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var o=r(27378),n=r(45751),a=r(69568),i=r(71389),l=r(64627),c=r(96710),d=r(58119),s=r(97865),h=r(10043),u=r(90849),p=r(34144),g=r(62076),b=r(68920),f=r(87800);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,u.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=k(k({},p.goldTheme),g.theme),Z={foreground:{text:{light:y.lightForegroundText,dark:y.darkForegroundText,desc:"Used for primary text like body text, headings, and labels to ensure they’re prominent and legible."},muted:{light:y.lightForegroundMuted,dark:y.darkForegroundMuted,desc:"Used for secondary text to make it less prominent."},action:{light:y.lightForegroundAction,dark:y.darkForegroundAction,desc:"Used to indicate interactive components like links and buttons. Don’t use the action colour for non-interactive components as it could confuse users. Also make sure you don’t rely on colour alone to indicate that a component is interactive, use additional visual cues."},focus:{light:y.lightForegroundFocus,dark:y.darkForegroundFocus,desc:"Used to highlight interactive components for those navigating via keyboard."}},background:{body:{light:y.lightBackgroundBody,dark:y.darkBackgroundBody,desc:"Used for the main background."},bodyAlt:{light:y.lightBackgroundBodyAlt,dark:y.darkBackgroundBodyAlt,desc:"Used to help differentiate or highlight interface components that sit on `body` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables."},shade:{light:y.lightBackgroundShade,dark:y.darkBackgroundShade,desc:"Used as an alternative background."},shadeAlt:{light:y.lightBackgroundShadeAlt,dark:y.darkBackgroundShadeAlt,desc:"Used to help differentiate or highlight interface components that sit on `bodyAlt` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables."}},border:{border:{light:y.lightBorder,dark:y.darkBorder,desc:"Used for borders of non-decorative interface components that require a 3:1 colour contrast ratio. For example, form input field borders are considered non-decorative because if they were removed, form input fields wouldn’t be recognisable."},borderMuted:{light:y.lightBorderMuted,dark:y.darkBorderMuted,desc:"Used for decorative interface components that don’t require a 3:1 colour contrast ratio."}},system:{accent:{light:y.lightAccent,dark:y.darkAccent,desc:""},systemSuccess:{light:y.lightSystemSuccess,dark:y.darkSystemSuccess,desc:"Used to indicate that a task was completed as expected."},systemSuccessMuted:{light:y.lightSystemSuccessMuted,dark:y.darkSystemSuccessMuted,desc:"Used as a background for a Component with an `success` tone."},systemError:{light:y.lightSystemError,dark:y.darkSystemError,desc:"Used to indicate that something is wrong, or a task has failed and needs urgent attention. For example, a form validation error."},systemErrorMuted:{light:y.lightSystemErrorMuted,dark:y.darkSystemErrorMuted,desc:"Used as a background for a Component with an `error` tone."},systemInfo:{light:y.lightSystemInfo,dark:y.darkSystemInfo,desc:"Used to provide addition information."},systemInfoMuted:{light:y.lightSystemInfoMuted,dark:y.darkSystemInfoMuted,desc:"Used as a background for a Component with an `info` tone."},systemWarning:{light:y.lightSystemWarning,dark:y.darkSystemWarning,desc:"Used to indicate that taking an action could be risky and that a user should be cautious."},systemWarningMuted:{light:y.lightSystemWarningMuted,dark:y.darkSystemWarningMuted,desc:"Used as a background for a Component with an `warning` tone."}}};function v(e){var t=e.color;return(0,f.tZ)("div",{css:(0,h.iv)({width:32,height:32,backgroundColor:t},"","")})}var B=function(e){var t=e.activePalette;return(0,f.BX)(f.HY,{children:[(0,f.tZ)("h3",{id:"foreground",children:"Foreground colors"}),(0,f.tZ)("p",{children:"Designed to sit on top of background colours to ensure contrast ratios meet WCAG 2.1 level AA accessibility requirements."}),(0,f.tZ)("div",{className:n.proseBlockClassname,children:(0,f.tZ)(b.TableWrapper,{children:(0,f.BX)(b.Table,{children:[(0,f.tZ)(b.TableCaption,{children:"All Foreground tokens"}),(0,f.tZ)(b.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Name"}),(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Value"}),(0,f.tZ)(b.TableHeader,{width:"50%",scope:"col",children:"Description"})]})}),(0,f.tZ)(b.TableBody,{children:Object.entries(Z.foreground).map(function(e){var r=(0,s.Z)(e,2),o=r[0],n=r[1],a=n[t],l=n.desc;return(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableCell,{children:(0,f.BX)(i.Flex,{gap:.5,alignItems:"center",children:[(0,f.tZ)(v,{color:a}),o]})}),(0,f.tZ)(b.TableCell,{children:a}),(0,f.tZ)(b.TableCell,{children:l})]},o)})})]})})}),(0,f.tZ)("h3",{id:"background",children:"Background colors"}),(0,f.tZ)("p",{children:"Designed to sit under foreground colours to ensure contrast ratios meet WCAG 2.1 level AA accessibility requirements. Each colour palette has 2 main background colours to choose from, the default background (body) and a darker alternative (body-alt). Shades can be used to help differentiate or highlight content against the body background colours."}),(0,f.tZ)("div",{className:n.proseBlockClassname,children:(0,f.tZ)(b.TableWrapper,{children:(0,f.BX)(b.Table,{children:[(0,f.tZ)(b.TableCaption,{children:"All Background tokens"}),(0,f.tZ)(b.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Name"}),(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Value"}),(0,f.tZ)(b.TableHeader,{width:"50%",scope:"col",children:"Description"})]})}),(0,f.tZ)(b.TableBody,{children:Object.entries(Z.background).map(function(e){var r=(0,s.Z)(e,2),o=r[0],n=r[1],a=n[t],l=n.desc;return(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableCell,{children:(0,f.BX)(i.Flex,{gap:.5,alignItems:"center",children:[(0,f.tZ)(v,{color:a}),o]})}),(0,f.tZ)(b.TableCell,{children:a}),(0,f.tZ)(b.TableCell,{children:l})]},o)})})]})})}),(0,f.tZ)("h3",{id:"border",children:"Border colors"}),(0,f.tZ)("p",{children:"Each colour palette has 2 border colours."}),(0,f.tZ)("div",{className:n.proseBlockClassname,children:(0,f.tZ)(b.TableWrapper,{children:(0,f.BX)(b.Table,{children:[(0,f.tZ)(b.TableCaption,{children:"All Border tokens"}),(0,f.tZ)(b.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Name"}),(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Value"}),(0,f.tZ)(b.TableHeader,{width:"50%",scope:"col",children:"Description"})]})}),(0,f.tZ)(b.TableBody,{children:Object.entries(Z.border).map(function(e){var r=(0,s.Z)(e,2),o=r[0],n=r[1],a=n[t],l=n.desc;return(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableCell,{children:(0,f.BX)(i.Flex,{gap:.5,alignItems:"center",children:[(0,f.tZ)(v,{color:a}),o]})}),(0,f.tZ)(b.TableCell,{children:a}),(0,f.tZ)(b.TableCell,{children:l})]},o)})})]})})}),(0,f.tZ)("h3",{id:"system",children:"System colors"}),(0,f.tZ)("p",{children:"System colours are used to indicate status. They’re very prominent colours aimed at grabbing the user’s attention. Each system colour has a muted version to be used as a background colour."}),(0,f.tZ)("div",{className:n.proseBlockClassname,children:(0,f.tZ)(b.TableWrapper,{children:(0,f.BX)(b.Table,{children:[(0,f.tZ)(b.TableCaption,{children:"All System tokens"}),(0,f.tZ)(b.TableHead,{children:(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Name"}),(0,f.tZ)(b.TableHeader,{width:"25%",scope:"col",children:"Value"}),(0,f.tZ)(b.TableHeader,{width:"50%",scope:"col",children:"Description"})]})}),(0,f.tZ)(b.TableBody,{children:Object.entries(Z.system).map(function(e){var r=(0,s.Z)(e,2),o=r[0],n=r[1],a=n[t],l=n.desc;return(0,f.BX)("tr",{children:[(0,f.tZ)(b.TableCell,{children:(0,f.BX)(i.Flex,{gap:.5,alignItems:"center",children:[(0,f.tZ)(v,{color:a}),o]})}),(0,f.tZ)(b.TableCell,{children:a}),(0,f.tZ)(b.TableCell,{children:l})]},o)})})]})})})]})},w=r(33536),T=r(95159),S=r(18590);function O(){var e=(0,o.useState)(!1),t=e[0],r=e[1];return(0,f.BX)(i.Box,{palette:t?"dark":"light",background:"body",children:[(0,f.tZ)(d.$,{title:S.Sg.colour.pageTitle,description:S.Sg.colour.description}),(0,f.tZ)(w.A,{title:S.Sg.colour.pageTitle,description:S.Sg.colour.description,breadcrumbs:(0,S.Qu)(S.Sg.colour),editPath:"/docs/pages/foundations/tokens/color.tsx",children:(0,f.BX)(n.Prose,{children:[(0,f.tZ)("h2",{children:"Colour palettes"}),(0,f.tZ)("p",{children:"There are 2 colour palettes, light and dark. Each colour palette is divided into foreground, background, border, and system colours which all have a specific purpose."}),(0,f.tZ)("div",{className:n.proseBlockClassname,children:(0,f.tZ)(l.InpageNav,{title:"On this page",links:[{href:"#foreground",label:"Foreground colors"},{href:"#background",label:"Background colors"},{href:"#border",label:"Border colors"},{href:"#system",label:"System colors"}]})}),(0,f.BX)(i.Box,{borderTop:!0,borderBottom:!0,padding:1.5,borderColor:"muted",background:"shade",className:n.proseBlockClassname,children:[(0,f.tZ)("h3",{children:"Light vs dark palette"}),(0,f.BX)("p",{children:["Toggle the dark palette colour tokens for the whole page via the switch below. ",(0,f.tZ)("a",{href:"#palettes",children:"Learn more about palettes"}),"."]}),(0,f.tZ)("div",{className:n.proseBlockClassname,children:(0,f.tZ)(a.Switch,{label:"Enable dark palette",checked:t,onChange:r})})]}),(0,f.tZ)(B,{activePalette:t?"dark":"light"}),(0,f.tZ)("h2",{children:"Usage guidelines"}),(0,f.BX)(c.Columns,{cols:[1,3],className:n.proseBlockClassname,children:[(0,f.BX)(c.Column,{columnSpan:[1,2],children:[(0,f.tZ)("h3",{id:"palettes",children:"Use palettes to divide sections"}),(0,f.tZ)("p",{children:"An interface can be divided into rows or sections that span the full width of a screen. A section can use either the light or dark colour palette."}),(0,f.tZ)("p",{children:"For example, the website header and footer might use the dark palette to make them more prominent, while the content area in between uses the light palette."}),(0,f.tZ)("p",{children:"Components that sit inside light sections of an interface use the light colour palette. Similarly, components that sit inside dark sections of an interface use the dark colour palette."}),(0,f.BX)("p",{children:[(0,f.tZ)(T.N,{href:"/guides/custom-theme",children:"See the theming guide"})," ","for more on how this works in code."]})]}),(0,f.tZ)(i.Box,{paddingTop:[1,0],children:(0,f.tZ)("img",{src:"/img/guides/home.webp",alt:"Screenshot of a successful usage of palettes"})})]}),(0,f.tZ)("h3",{children:"Don’t rely on colour alone to convey meaning"}),(0,f.tZ)("p",{children:"To ensure the colourblind can use our interface, we shouldn’t rely on colour alone to differentiate interface components or convey meaning. Use other visual cues to differentiate interface components. For example, we underline links as well as using the action colour to help differentiate them from other text and clearly indicate they’re interactive."}),(0,f.tZ)("h3",{children:"More tips"}),(0,f.BX)("ul",{children:[(0,f.BX)("li",{children:[(0,f.tZ)("strong",{children:"Do"})," pair foreground and background colours."]}),(0,f.BX)("li",{children:[(0,f.tZ)("strong",{children:"Don't"})," mix light and dark variables."]}),(0,f.BX)("li",{children:[(0,f.tZ)("strong",{children:"Don't"})," pair foreground with foreground or background with background."]})]})]})})]})}},23286:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/colour",function(){return r(50522)}])},55732:function(e,t,r){"use strict";function o(e,t,r,o,n,a,i){try{var l=e[a](i),c=l.value}catch(d){r(d);return}l.done?t(c):Promise.resolve(c).then(o,n)}function n(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function l(e){o(i,n,a,l,c,"next",e)}function c(e){o(i,n,a,l,c,"throw",e)}l(void 0)})}}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[519,367,334,751,162,568,774,888,179],function(){return e(e.s=23286)}),_N_E=e.O()}]);