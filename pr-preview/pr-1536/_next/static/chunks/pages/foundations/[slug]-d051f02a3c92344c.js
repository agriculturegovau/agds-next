(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{9163:function(t,e,n){"use strict";n.d(e,{X:function(){return PageLayout}});var r=n(849),o=n(6677),i=n(2892),c=n(4348),l=n(8717),u=n(3135),a=n(4235),s=n(5600),d=n(5537),p=n(7800);function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function PageLayout(t){var e=t.applyMainElement,n=void 0!==e&&e,r=t.breadcrumbs,f=t.children,b=t.editPath,h=t.sideNav,O=(0,o.useRouter)();return(0,p.tZ)(i.PageContent,{children:(0,p.BX)(u.Columns,{children:[h&&(0,p.tZ)(u.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,p.tZ)(i.ContentBleed,{visible:{md:!1},children:(0,p.tZ)(a.SideNav,{collapseTitle:"In this section",activePath:O.asPath,title:h.title,titleLink:h.titleLink,items:h.items})})}),(0,p.tZ)(u.Column,_objectSpread(_objectSpread({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:h?5:1},children:(0,p.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,p.tZ)(s.Breadcrumbs,{links:r}):null,f,b&&(0,p.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,p.tZ)(d.e,{path:b})})]})}))]})})}},1014:function(t,e,n){"use strict";n.d(e,{V:function(){return PageTitle}});var r=n(8717),o=n(2852),i=n(4149),c=n(7800),PageTitle=function(t){var e=t.pretext,n=t.title,l=t.introduction,u=t.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[e?(0,c.tZ)(i.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:e}):null,(0,c.tZ)(o.H1,{children:n})]}),l?(0,c.tZ)(i.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,u]})}},6610:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return f},default:function(){return FoundationsPage}});var r=n(849),o=n(3772),i=n(741),c=n(5933),l=n(4865),u=n(4617),a=n(6949),s=n(9163),d=n(1014),p=n(7800);function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var f=!0;function FoundationsPage(t){var e=t.breadcrumbs,n=t.foundation,r=t.toc;return(0,p.BX)(p.HY,{children:[(0,p.tZ)(a.$,{title:n.title,description:n.description}),(0,p.tZ)(u.I,{children:(0,p.BX)(s.X,{editPath:"/docs/content/foundations/".concat(n.slug,".mdx"),breadcrumbs:e,children:[(0,p.tZ)(d.V,{title:n.title,introduction:n.description}),(null==r?void 0:r.length)>1?(0,p.tZ)(i.InpageNav,{title:"On this page",links:r.map(function(t){return{label:t.title,href:"#".concat(t.slug)}})}):null,(0,p.tZ)(c.Prose,{children:(0,p.tZ)(o.R,_objectSpread(_objectSpread({},n.source),{},{components:l.d}))})]})})]})}},7479:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/[slug]",function(){return n(6610)}])}},function(t){t.O(0,[825,442,620,506,59,957,153,41,169,737,731,360,865,774,888,179],function(){return t(t.s=7479)}),_N_E=t.O()}]);