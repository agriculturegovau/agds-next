(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{33536:function(e,t,r){"use strict";r.d(t,{A:function(){return d}});var o=r(18590),n=r(42061),a=r(57489),i=r(3029),s=r(87800),d=function(e){var t=e.breadcrumbs,r=e.editPath,d=e.children,l=e.title,c=e.description;return(0,s.tZ)(n.I,{applyMainElement:!1,children:(0,s.BX)(a.X,{applyMainElement:!0,sideNav:{title:"Tokens",titleLink:"/foundations/tokens",items:o.Gw.map(function(e){var t=e.label;return{href:e.href,label:t}})},editPath:r,breadcrumbs:t,children:[(0,s.tZ)(i.V,{title:l,introduction:c}),d]})})}},18590:function(e,t,r){"use strict";r.d(t,{Gw:function(){return i},Qu:function(){return s},Sg:function(){return a}});var o=r(90849);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}var a={border:{slug:"border",label:"Border",pageTitle:"Border tokens",description:"Guidelines for using borders across the Design System."},breakpoints:{slug:"breakpoints",label:"Breakpoint",pageTitle:"Breakpoint tokens",description:"Breakpoints are a set of predefined widths that can be used to change the layout of a webpage to ensure it accommodates different device widths."},colour:{slug:"colour",label:"Colour",pageTitle:"Colour tokens",description:"How to use colour to design consistent, purposeful, and accessible products."},maxWidth:{slug:"max-width",label:"Max width",pageTitle:"Max width tokens",description:"Used to set the maximum width of elements and containers in a page layout."},spacing:{slug:"spacing",label:"Spacing",pageTitle:"Spacing tokens",description:"Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."},typography:{slug:"typography",label:"Typography",pageTitle:"Typography tokens",description:"A set of predefined text styles to ensure text is consistent and legible."}},i=Object.values(a).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({href:"/foundations/tokens/".concat(e.slug)},e)});function s(e){return[{label:"Home",href:"/"},{label:"Foundations",href:"/foundations"},{label:"Tokens",href:"/foundations/tokens"},{label:e.label}]}},50522:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var o=r(27378),n=r(45751),a=r(69568),i=r(71389),s=r(64627),d=r(96710),l=r(58119),c=r(11246),u=r(10043),h=r(90849),g=r(34144),p=r(62076),f=r(68920),b=r(87800);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,h.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=k(k({},g.goldTheme),p.theme),v={foreground:{text:{light:y.lightForegroundText,dark:y.darkForegroundText,desc:"Used for primary text like body text, headings, and labels to ensure they’re prominent and legible."},muted:{light:y.lightForegroundMuted,dark:y.darkForegroundMuted,desc:"Used for secondary text to make it less prominent."},action:{light:y.lightForegroundAction,dark:y.darkForegroundAction,desc:"Used to indicate interactive components like links and buttons. Don’t use the action colour for non-interactive components as it could confuse users. Also make sure you don’t rely on colour alone to indicate that a component is interactive, use additional visual cues."},focus:{light:y.lightForegroundFocus,dark:y.darkForegroundFocus,desc:"Used to highlight interactive components for those navigating via keyboard."},accent:{light:y.lightAccent,dark:y.darkAccent,desc:"Used to add a highlight of branding colours to navigation elements"}},background:{body:{light:y.lightBackgroundBody,dark:y.darkBackgroundBody,desc:"Used for the main background."},bodyAlt:{light:y.lightBackgroundBodyAlt,dark:y.darkBackgroundBodyAlt,desc:"Used as an alternative background."},shade:{light:y.lightBackgroundShade,dark:y.darkBackgroundShade,desc:"Used to help differentiate or highlight interface components that sit on `body` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables."},shadeAlt:{light:y.lightBackgroundShadeAlt,dark:y.darkBackgroundShadeAlt,desc:"Used to help differentiate or highlight interface components that sit on `bodyAlt` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables."}},border:{border:{light:y.lightBorder,dark:y.darkBorder,desc:"Used for borders of non-decorative interface components that require a 3:1 colour contrast ratio. For example, form input field borders are considered non-decorative because if they were removed, form input fields wouldn’t be recognisable."},borderMuted:{light:y.lightBorderMuted,dark:y.darkBorderMuted,desc:"Used for decorative interface components that don’t require a 3:1 colour contrast ratio."}},system:{systemSuccess:{light:y.lightSystemSuccess,dark:y.darkSystemSuccess,desc:"Used to indicate that a task was completed as expected."},systemSuccessMuted:{light:y.lightSystemSuccessMuted,dark:y.darkSystemSuccessMuted,desc:"Used as a background for a Component with an `success` tone."},systemError:{light:y.lightSystemError,dark:y.darkSystemError,desc:"Used to indicate that something is wrong, or a task has failed and needs urgent attention. For example, a form validation error."},systemErrorMuted:{light:y.lightSystemErrorMuted,dark:y.darkSystemErrorMuted,desc:"Used as a background for a Component with an `error` tone."},systemInfo:{light:y.lightSystemInfo,dark:y.darkSystemInfo,desc:"Used to provide addition information."},systemInfoMuted:{light:y.lightSystemInfoMuted,dark:y.darkSystemInfoMuted,desc:"Used as a background for a Component with an `info` tone."},systemWarning:{light:y.lightSystemWarning,dark:y.darkSystemWarning,desc:"Used to indicate that taking an action could be risky and that a user should be cautious."},systemWarningMuted:{light:y.lightSystemWarningMuted,dark:y.darkSystemWarningMuted,desc:"Used as a background for a Component with an `warning` tone."}},other:{overlay:{light:y.lightOverlay,dark:y.darkOverlay,desc:"Used as an overlay for modals and other components that sit on top of the main background. The main content area beneath is considered disabled and not interactive."}}};function w(e){var t=e.color;return(0,b.tZ)("div",{css:(0,u.iv)({width:32,height:32,backgroundColor:t},"","")})}var Z=function(e){var t=e.tokens,r=e.caption;return(0,b.tZ)("div",{className:n.proseBlockClassname,children:(0,b.tZ)(f.TableWrapper,{children:(0,b.BX)(f.Table,{children:[(0,b.tZ)(f.TableCaption,{children:r}),(0,b.tZ)(f.TableHead,{children:(0,b.BX)("tr",{children:[(0,b.tZ)(f.TableHeader,{width:"25%",scope:"col",children:"Name"}),(0,b.tZ)(f.TableHeader,{width:"25%",scope:"col",children:"Value"}),(0,b.tZ)(f.TableHeader,{width:"50%",scope:"col",children:"Description"})]})}),(0,b.tZ)(f.TableBody,{children:t.map(function(e){var t=e.name,r=e.color,o=e.desc;return(0,b.BX)("tr",{children:[(0,b.tZ)(f.TableCell,{children:(0,b.BX)(i.Flex,{gap:.5,alignItems:"center",children:[(0,b.tZ)(w,{color:r}),t]})}),(0,b.tZ)(f.TableCell,{children:r}),(0,b.tZ)(f.TableCell,{children:o})]},t)})})]})})})},B=function(e,t){return Object.entries(e).map(function(e){var r=(0,c.Z)(e,2),o=r[0],n=r[1],a=n[t];return{name:o,desc:n.desc,color:a}})},S=r(33536),O=r(95159),T=r(18590),A=r(89745);function x(){var e=(0,o.useState)(!1),t=e[0],r=e[1],c=t?"dark":"light";return(0,b.BX)(i.Box,{palette:t?"dark":"light",background:"body",children:[(0,b.tZ)(l.$,{title:T.Sg.colour.pageTitle,description:T.Sg.colour.description}),(0,b.BX)(S.A,{title:T.Sg.colour.pageTitle,description:T.Sg.colour.description,breadcrumbs:(0,T.Qu)(T.Sg.colour),editPath:"/docs/pages/foundations/tokens/color.tsx",children:[(0,b.tZ)(s.InpageNav,{title:"On this page",links:[{href:"#colour-palettes",label:"Colour palettes"},{href:"#foreground",label:"Foreground colors"},{href:"#background",label:"Background colors"},{href:"#border",label:"Border colors"},{href:"#system",label:"System colors"},{href:"#usage-guidelines",label:"Usage guidelines"}]}),(0,b.BX)(n.Prose,{children:[(0,b.tZ)("h2",{id:"colour-palettes",children:"Colour palettes"}),(0,b.tZ)("p",{children:"There are 2 colour palettes, light and dark. Each colour palette is divided into foreground, background, border, and system colours which all have a specific purpose."}),(0,b.BX)(i.Box,{borderTop:!0,borderBottom:!0,padding:1.5,borderColor:"muted",background:"shade",className:n.proseBlockClassname,children:[(0,b.tZ)("h3",{children:"Light vs dark palette"}),(0,b.BX)("p",{children:["Toggle the dark palette colour tokens for the whole page via the switch below. ",(0,b.tZ)("a",{href:"#palettes",children:"Learn more about palettes"}),"."]}),(0,b.tZ)("div",{className:n.proseBlockClassname,children:(0,b.tZ)(a.Switch,{label:"Enable dark palette",checked:t,onChange:r})})]}),(0,b.tZ)("h3",{id:"foreground",children:"Foreground colors"}),(0,b.tZ)("p",{children:"Designed to sit on top of background colours to ensure contrast ratios meet WCAG 2.1 level AA accessibility requirements."}),(0,b.tZ)(Z,{caption:"All Foreground tokens",tokens:B(v.foreground,c)}),(0,b.tZ)("h3",{id:"background",children:"Background colors"}),(0,b.tZ)("p",{children:"Designed to sit under foreground colours to ensure contrast ratios meet WCAG 2.1 level AA accessibility requirements. Each colour palette has 2 main background colours to choose from, the default background (body) and a darker alternative (body-alt). Shades can be used to help differentiate or highlight content against the body background colours."}),(0,b.tZ)(Z,{caption:"All Background tokens",tokens:B(v.background,c)}),(0,b.tZ)("h3",{id:"border",children:"Border colors"}),(0,b.tZ)("p",{children:"Each colour palette has 2 border colours."}),(0,b.tZ)(Z,{caption:"All Border tokens",tokens:B(v.border,c)}),(0,b.tZ)("h3",{id:"system",children:"System colors"}),(0,b.tZ)("p",{children:"System colours are used to indicate status. They’re very prominent colours aimed at grabbing the user’s attention. Each system colour has a muted version to be used as a background colour."}),(0,b.tZ)(Z,{caption:"All System tokens",tokens:B(v.system,c)}),(0,b.tZ)("h3",{id:"other",children:"Other colors"}),(0,b.tZ)("p",{children:"Miscellaneous colours which do not form part of the above groups"}),(0,b.tZ)(Z,{caption:"All Other tokens",tokens:B(v.other,c)}),(0,b.tZ)("h2",{id:"usage-guidelines",children:"Usage guidelines"}),(0,b.BX)(d.Columns,{cols:[1,3],className:n.proseBlockClassname,children:[(0,b.BX)(d.Column,{columnSpan:[1,2],children:[(0,b.tZ)("h3",{id:"palettes",children:"Use palettes to divide sections"}),(0,b.tZ)("p",{children:"An interface can be divided into rows or sections that span the full width of a screen. A section can use either the light or dark colour palette."}),(0,b.tZ)("p",{children:"For example, the website header and footer might use the dark palette to make them more prominent, while the content area in between uses the light palette."}),(0,b.tZ)("p",{children:"Components that sit inside light sections of an interface use the light colour palette. Similarly, components that sit inside dark sections of an interface use the dark colour palette."}),(0,b.BX)("p",{children:[(0,b.tZ)(O.N,{href:"/guides/custom-theme",children:"See the theming guide"})," ","for more on how this works in code."]})]}),(0,b.tZ)(i.Box,{paddingTop:[1,0],children:(0,b.tZ)("img",{src:(0,A.w)("/img/guides/home.webp"),alt:"Screenshot of a successful usage of palettes"})})]}),(0,b.tZ)("h3",{children:"Don’t rely on colour alone to convey meaning"}),(0,b.tZ)("p",{children:"To ensure the colourblind can use our interface, we shouldn’t rely on colour alone to differentiate interface components or convey meaning. Use other visual cues to differentiate interface components. For example, we underline links as well as using the action colour to help differentiate them from other text and clearly indicate they’re interactive."}),(0,b.tZ)("h3",{children:"More tips"}),(0,b.BX)("ul",{children:[(0,b.BX)("li",{children:[(0,b.tZ)("strong",{children:"Do"})," pair foreground and background colours."]}),(0,b.BX)("li",{children:[(0,b.tZ)("strong",{children:"Don't"})," mix light and dark variables."]}),(0,b.BX)("li",{children:[(0,b.tZ)("strong",{children:"Don't"})," pair foreground with foreground or background with background."]})]})]})]})]})}},23286:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tokens/colour",function(){return r(50522)}])}},function(e){e.O(0,[758,442,334,860,329,685,493,774,888,179],function(){return e(e.s=23286)}),_N_E=e.O()}]);