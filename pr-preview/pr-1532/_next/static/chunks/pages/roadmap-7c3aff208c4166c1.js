(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{9163:function(e,t,n){"use strict";n.d(t,{X:function(){return PageLayout}});var r=n(849),o=n(6677),c=n(2892),i=n(4348),l=n(8717),a=n(3135),u=n(4235),s=n(5600),d=n(5537),p=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function PageLayout(e){var t=e.applyMainElement,n=void 0!==t&&t,r=e.breadcrumbs,f=e.children,b=e.editPath,h=e.sideNav,m=(0,o.useRouter)();return(0,p.tZ)(c.PageContent,{children:(0,p.BX)(a.Columns,{children:[h&&(0,p.tZ)(a.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,p.tZ)(c.ContentBleed,{visible:{md:!1},children:(0,p.tZ)(u.SideNav,{collapseTitle:"In this section",activePath:m.asPath,title:h.title,titleLink:h.titleLink,items:h.items})})}),(0,p.tZ)(a.Column,_objectSpread(_objectSpread({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:h?5:1},children:(0,p.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,p.tZ)(s.Breadcrumbs,{links:r}):null,f,b&&(0,p.tZ)(i.Flex,{justifyContent:"flex-start",children:(0,p.tZ)(d.e,{path:b})})]})}))]})})}},1014:function(e,t,n){"use strict";n.d(t,{V:function(){return PageTitle}});var r=n(8717),o=n(2852),c=n(4149),i=n(7800),PageTitle=function(e){var t=e.pretext,n=e.title,l=e.introduction,a=e.callToAction;return(0,i.BX)(r.Stack,{gap:1.5,children:[(0,i.BX)(r.Stack,{children:[t?(0,i.tZ)(c.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,i.tZ)(o.H1,{children:n})]}),l?(0,i.tZ)(c.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,a]})}},4066:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return RoadmapPage}});var r=n(849),o=n(3772),c=n(5933),i=n(4617),l=n(6949),a=n(1014),u=n(9163),s=n(4865),d=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=!0;function RoadmapPage(e){var t=e.title,n=e.description,r=e.source;return(0,d.BX)(d.HY,{children:[(0,d.tZ)(l.$,{title:t}),(0,d.tZ)(i.I,{applyMainElement:!1,children:(0,d.BX)(u.X,{applyMainElement:!0,breadcrumbs:[{href:"/",label:"Home"},{label:t}],editPath:"/docs/content/roadmap.mdx",children:[(0,d.tZ)(a.V,{title:t,introduction:n}),(0,d.tZ)(c.Prose,{children:(0,d.tZ)(o.R,_objectSpread(_objectSpread({},r),{},{components:s.d}))})]})})]})}},1732:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/roadmap",function(){return n(4066)}])}},function(e){e.O(0,[825,442,853,506,59,957,153,41,169,737,731,360,865,774,888,179],function(){return e(e.s=1732)}),_N_E=e.O()}]);