(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{9163:function(e,t,n){"use strict";n.d(t,{X:function(){return PageLayout}});var r=n(849),i=n(6677),o=n(2892),c=n(4348),l=n(8717),u=n(3135),a=n(4235),s=n(3344),d=n(5600),p=n(5537),f=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function PageLayout(e){var t=e.applyMainElement,n=void 0!==t&&t,r=e.breadcrumbs,b=e.children,h=e.editPath,g=e.sideNav,O=e.skipLinks,y=(0,i.useRouter)();return(0,f.tZ)(o.PageContent,{children:(0,f.BX)(u.Columns,{children:[g&&(0,f.tZ)(u.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,f.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,f.tZ)(a.SideNav,{collapseTitle:"In this section",activePath:y.asPath,title:g.title,titleLink:g.titleLink,items:g.items})})}),(0,f.BX)(u.Column,_objectSpread(_objectSpread({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:g?5:1},children:[null!=O&&O.length?(0,f.tZ)(s.SkipLinks,{links:O}):null,(0,f.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,f.tZ)(d.Breadcrumbs,{links:r}):null,b,h&&(0,f.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(p.e,{path:h})})]})]}))]})})}},1014:function(e,t,n){"use strict";n.d(t,{V:function(){return PageTitle}});var r=n(8717),i=n(2852),o=n(4149),c=n(7800),PageTitle=function(e){var t=e.pretext,n=e.title,l=e.introduction,u=e.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[t?(0,c.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:t}):null,(0,c.tZ)(i.H1,{children:n})]}),l?(0,c.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,u]})}},3828:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return Guides}});var r=n(849),i=n(3772),o=n(741),c=n(5933),l=n(4865),u=n(4617),a=n(6949),s=n(9163),d=n(1014),p=n(7800);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=!0;function Guides(e){var t=e.guide,n=e.toc,r=e.breadcrumbs;return(0,p.BX)(p.HY,{children:[(0,p.tZ)(a.$,{title:t.title,description:t.opener}),(0,p.tZ)(u.I,{applyMainElement:!1,children:(0,p.BX)(s.X,{applyMainElement:!0,editPath:"/docs/content/guides/".concat(t.slug,".mdx"),breadcrumbs:r,children:[(0,p.tZ)(d.V,{title:t.title,introduction:t.opener}),(null==n?void 0:n.length)>1?(0,p.tZ)(o.InpageNav,{title:"On this page",links:n.map(function(e){return{label:e.title,href:"#".concat(e.slug)}})}):null,(0,p.tZ)(c.Prose,{children:(0,p.tZ)(i.R,_objectSpread(_objectSpread({},t.source),{},{components:l.d}))})]})})]})}},283:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/[slug]",function(){return n(3828)}])}},function(e){e.O(0,[758,442,8,506,59,957,153,41,169,737,731,360,865,774,888,179],function(){return e(e.s=283)}),_N_E=e.O()}]);