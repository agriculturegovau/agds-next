(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{9163:function(t,e,n){"use strict";n.d(e,{X:function(){return O}});var r=n(849),i=n(6677),c=n(2892),o=n(4348),l=n(8717),u=n(3135),s=n(4235),a=n(3344),d=n(5600),p=n(5537),f=n(7800);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function O(t){var e=t.applyMainElement,n=void 0!==e&&e,r=t.breadcrumbs,h=t.children,O=t.editPath,m=t.sideNav,g=t.skipLinks,y=(0,i.useRouter)();return(0,f.tZ)(c.PageContent,{children:(0,f.BX)(u.Columns,{children:[m&&(0,f.tZ)(u.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,f.tZ)(c.ContentBleed,{visible:{md:!1},children:(0,f.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:y.asPath,title:m.title,titleLink:m.titleLink,items:m.items})})}),(0,f.BX)(u.Column,b(b({},n&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:m?5:1},children:[null!=g&&g.length?(0,f.tZ)(a.SkipLinks,{links:g}):null,(0,f.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=r&&r.length?(0,f.tZ)(d.Breadcrumbs,{links:r}):null,h,O&&(0,f.tZ)(o.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(p.e,{path:O})})]})]}))]})})}},1014:function(t,e,n){"use strict";n.d(e,{V:function(){return l}});var r=n(8717),i=n(2852),c=n(4149),o=n(7800),l=function(t){var e=t.pretext,n=t.title,l=t.introduction,u=t.callToAction;return(0,o.BX)(r.Stack,{gap:1.5,children:[(0,o.BX)(r.Stack,{children:[e?(0,o.tZ)(c.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:e}):null,(0,o.tZ)(i.H1,{children:n})]}),l?(0,o.tZ)(c.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,u]})}},170:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return b},default:function(){return O}});var r=n(849),i=n(3772),c=n(741),o=n(5933),l=n(4865),u=n(4617),s=n(6949),a=n(9163),d=n(1014),p=n(7800);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var b=!0;function O(t){var e=t.breadcrumbs,n=t.navLinks,r=t.document,f=t.toc;return(0,p.BX)(p.HY,{children:[(0,p.tZ)(s.$,{title:r.title,description:r.description}),(0,p.tZ)(u.I,{applyMainElement:!1,children:(0,p.BX)(a.X,{editPath:"/docs/content/content/".concat(r.slug,".mdx"),breadcrumbs:e,applyMainElement:!0,sideNav:{title:"Content",titleLink:"/content",items:n},children:[(0,p.tZ)(d.V,{title:r.title,introduction:r.description}),(null==f?void 0:f.length)>1?(0,p.tZ)(c.InpageNav,{title:"On this page",links:f.map(function(t){return{label:t.title,href:"#".concat(t.slug)}})}):null,(0,p.tZ)(o.Prose,{children:(0,p.tZ)(i.R,h(h({},r.source),{},{components:l.d}))})]})})]})}},5742:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/[slug]",function(){return n(170)}])}},function(t){t.O(0,[758,442,8,506,59,957,991,169,731,878,360,865,774,888,179],function(){return t(t.s=5742)}),_N_E=t.O()}]);