(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{9163:function(t,e,n){"use strict";n.d(e,{X:function(){return PageLayout}});var r=n(849),i=n(6677),o=n(2892),c=n(4348),l=n(8717),u=n(3135),a=n(4235),s=n(5600),d=n(5537),p=n(7800);function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function PageLayout(t){var e=t.applyMainElement,n=void 0!==e&&e,r=t.breadcrumbs,f=t.children,b=t.editPath,h=t.sideNav,O=(0,i.useRouter)();return(0,p.tZ)(o.PageContent,{children:(0,p.BX)(u.Columns,{children:[h&&(0,p.tZ)(u.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,p.tZ)(o.ContentBleed,{visible:{md:!1},children:(0,p.tZ)(a.SideNav,{collapseTitle:"In this section",activePath:O.asPath,title:h.title,titleLink:h.titleLink,items:h.items})})}),(0,p.tZ)(u.Column,_objectSpread(_objectSpread({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:h?5:1},children:(0,p.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,p.tZ)(s.Breadcrumbs,{links:r}):null,f,b&&(0,p.tZ)(c.Flex,{justifyContent:"flex-start",children:(0,p.tZ)(d.e,{path:b})})]})}))]})})}},1014:function(t,e,n){"use strict";n.d(e,{V:function(){return PageTitle}});var r=n(8717),i=n(2852),o=n(4149),c=n(7800),PageTitle=function(t){var e=t.pretext,n=t.title,l=t.introduction,u=t.callToAction;return(0,c.BX)(r.Stack,{gap:1.5,children:[(0,c.BX)(r.Stack,{children:[e?(0,c.tZ)(o.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:e}):null,(0,c.tZ)(i.H1,{children:n})]}),l?(0,c.tZ)(o.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,u]})}},170:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return f},default:function(){return ContentPage}});var r=n(849),i=n(3772),o=n(741),c=n(5933),l=n(4865),u=n(4617),a=n(6949),s=n(9163),d=n(1014),p=n(7800);function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var f=!0;function ContentPage(t){var e=t.breadcrumbs,n=t.navLinks,r=t.document,f=t.toc;return(0,p.BX)(p.HY,{children:[(0,p.tZ)(a.$,{title:r.title,description:r.description}),(0,p.tZ)(u.I,{applyMainElement:!1,children:(0,p.BX)(s.X,{editPath:"/docs/content/content/".concat(r.slug,".mdx"),breadcrumbs:e,applyMainElement:!0,sideNav:{title:"Content",titleLink:"/content",items:n},children:[(0,p.tZ)(d.V,{title:r.title,introduction:r.description}),(null==f?void 0:f.length)>1?(0,p.tZ)(o.InpageNav,{title:"On this page",links:f.map(function(t){return{label:t.title,href:"#".concat(t.slug)}})}):null,(0,p.tZ)(c.Prose,{children:(0,p.tZ)(i.R,_objectSpread(_objectSpread({},r.source),{},{components:l.d}))})]})})]})}},5742:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/[slug]",function(){return n(170)}])}},function(t){t.O(0,[825,442,620,506,59,957,153,41,169,737,731,360,865,774,888,179],function(){return t(t.s=5742)}),_N_E=t.O()}]);