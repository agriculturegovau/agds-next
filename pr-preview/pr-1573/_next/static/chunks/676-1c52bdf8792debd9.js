"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{4676:function(e,n,t){t.d(n,{Ry:function(){return Z},T3:function(){return T},YA:function(){return k},lu:function(){return v},qd:function(){return f},z5:function(){return b}});var r=t(43),l=t(1246),o=t(7378),i=t(3169),a=t(6128),c=t(456),d=t(2951),s=t(6273),h=t(1380),p=t(8944),u=t(2924),m=t(9614),x=t(7800),f=function(){var e=s.tokens.breakpoint;return(0,x.tZ)("div",{className:h.proseBlockClassname,children:(0,x.tZ)(u.TableWrapper,{children:(0,x.BX)(u.Table,{children:[(0,x.tZ)(u.TableCaption,{children:"Our Breakpoint tokens"}),(0,x.tZ)(u.TableHead,{children:(0,x.BX)(u.TableRow,{children:[(0,x.tZ)(u.TableHeader,{scope:"col",children:"Token"}),(0,x.tZ)(u.TableHeader,{scope:"col",children:"Value"}),(0,x.tZ)(u.TableHeader,{scope:"col",children:"Media query"})]})}),(0,x.tZ)(u.TableBody,{children:Object.entries(e).map(function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1];return(0,x.BX)(u.TableRow,{children:[(0,x.tZ)(u.TableCell,{as:"th",scope:"row",children:t}),(0,x.BX)(u.TableCell,{children:[r,"px and up"]}),(0,x.tZ)(u.TableCell,{children:0===r?"Mobile devices":(0,x.tZ)("code",{children:"@media (min-width: ".concat(r,"px) { ... }")})})]},t)})})]})})})},b=function(){var e=s.tokens.borderWidth;return(0,x.tZ)(a.Flex,{gap:.5,className:h.proseBlockClassname,children:Object.entries(e).map(function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1],o="".concat(t," (").concat(r,"px)");return(0,x.tZ)(a.Flex,{alignItems:"center",padding:.5,border:!0,borderWidth:t,children:o},t)})})},Z=function(){return(0,x.tZ)(c.Stack,{gap:.5,className:h.proseBlockClassname,children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(function(e){var n="".concat(e," (").concat(16*e,"px)");return(0,x.BX)(a.Flex,{gap:.25,children:[(0,x.tZ)(i.Box,{css:(0,r.iv)({backgroundColor:s.boxPalette.systemInfoMuted,width:16*e},"","")}),(0,x.tZ)(p.Text,{children:n})]},e)})})},k=function(){var e=["xxxl","xxl","xl","lg","md","sm","xs"];return(0,x.BX)(a.Flex,{gap:1,className:h.proseBlockClassname,children:[(0,x.BX)(a.Flex,{flexDirection:"column",gap:1,children:[(0,x.tZ)(p.Text,{fontSize:"sm",fontWeight:"bold",children:"Default"}),e.map(function(e){return(0,x.tZ)(i.Box,{background:"shade",children:(0,x.tZ)(p.Text,{fontSize:e,children:e.toUpperCase()})},e)})]}),(0,x.BX)(a.Flex,{flexDirection:"column",gap:1,children:[(0,x.tZ)(p.Text,{fontSize:"sm",fontWeight:"bold",children:"Heading"}),e.map(function(e){return(0,x.tZ)(i.Box,{background:"shade",children:(0,x.tZ)(p.Text,{fontSize:e,lineHeight:"heading",children:e.toUpperCase()})},e)})]}),(0,x.BX)(a.Flex,{flexDirection:"column",gap:1,children:[(0,x.tZ)(p.Text,{fontSize:"sm",fontWeight:"bold",children:"Nospace"}),e.map(function(e){return(0,x.tZ)(i.Box,{background:"shade",children:(0,x.tZ)(p.Text,{fontSize:e,lineHeight:"nospace",children:e.toUpperCase()})},e)})]})]})},T=function(){var e={base:{value:s.tokens.zIndex.base,description:"The base z-index."},elevated:{value:s.tokens.zIndex.elevated,description:"Used to elevate elements above adjacent elements that sit on the base z-index."},overlay:{value:s.tokens.zIndex.overlay,description:(0,x.BX)(o.Fragment,{children:["Used for overlays in modals and other components that sit on top of the page - e.g. ",(0,x.tZ)(m.TextLink,{href:"/components/modal",children:"Modal"}),","," ",(0,x.tZ)(m.TextLink,{href:"/components/drawer",children:"Drawer"}),","," ",(0,x.tZ)(m.TextLink,{href:"/components/main-nav",children:"Main nav (mobile)"}),"."]})},dialog:{value:s.tokens.zIndex.dialog,description:(0,x.BX)(o.Fragment,{children:["Used for the main dialog element in modals and other components that sit on top of the - e.g."," ",(0,x.tZ)(m.TextLink,{href:"/components/modal",children:"Modal"}),","," ",(0,x.tZ)(m.TextLink,{href:"/components/drawer",children:"Drawer"}),","," ",(0,x.tZ)(m.TextLink,{href:"/components/main-nav",children:"Main nav (mobile)"}),"."]})},popover:{value:s.tokens.zIndex.popover,description:(0,x.BX)(o.Fragment,{children:["Used for popover elements - e.g. the calendar popover in the"," ",(0,x.tZ)(m.TextLink,{href:"/components/date-picker",children:"Date picker"}),"."]})},skipLink:{value:s.tokens.zIndex.skipLink,description:(0,x.BX)(o.Fragment,{children:["Used for focused"," ",(0,x.tZ)(m.TextLink,{href:"/components/skip-link",children:"Skip links"}),"."]})}};return(0,x.tZ)("div",{className:h.proseBlockClassname,children:(0,x.tZ)(u.TableWrapper,{children:(0,x.BX)(u.Table,{children:[(0,x.tZ)(u.TableCaption,{children:"All z-Index tokens"}),(0,x.tZ)(u.TableHead,{children:(0,x.BX)(u.TableRow,{children:[(0,x.tZ)(u.TableHeader,{scope:"col",width:"25%",children:"Token"}),(0,x.tZ)(u.TableHeader,{scope:"col",width:"25%",children:"Value"}),(0,x.tZ)(u.TableHeader,{scope:"col",width:"50%",children:"Description"})]})}),(0,x.tZ)(u.TableBody,{children:Object.entries(e).map(function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1],o=r.value,i=r.description;return(0,x.BX)(u.TableRow,{children:[(0,x.tZ)(u.TableCell,{children:t}),(0,x.tZ)(u.TableCell,{children:o}),(0,x.tZ)(u.TableCell,{children:i})]},t)})})]})})})},v=function(){var e=Object.entries(s.tokens.shadow);return(0,x.tZ)(d.Columns,{cols:3,gap:1.5,className:h.proseBlockClassname,children:e.map(function(e){var n=(0,l.Z)(e,2),t=n[0],o=n[1];return(0,x.BX)(a.Flex,{paddingX:1,paddingY:2,rounded:!0,flexDirection:"column",css:(0,r.iv)({boxShadow:o},"",""),children:[(0,x.tZ)(p.Text,{fontWeight:"bold",children:t}),(0,x.tZ)(p.Text,{fontSize:"xs",children:o})]},t)})})}}}]);