(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{7489:function(t,e,n){"use strict";n.d(e,{X:function(){return O}});var r=n(849),i=n(6677),c=n(4276),o=n(5784),l=n(9525),u=n(6710),s=n(4138),a=n(8192),d=n(2010),p=n(3229),f=n(7800);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function O(t){var e=t.applyMainElement,n=t.breadcrumbs,r=t.children,h=t.editPath,O=t.sideNav,m=t.skipLinks,g=(0,i.useRouter)();return(0,f.tZ)(c.PageContent,{children:(0,f.BX)(u.Columns,{children:[O&&(0,f.tZ)(u.Column,{columnSpan:{xs:12,md:4,lg:3},children:(0,f.tZ)(c.ContentBleed,{visible:{md:!1},children:(0,f.tZ)(s.SideNav,{collapseTitle:"In this section",activePath:g.asPath,title:O.title,titleLink:O.titleLink,items:O.items})})}),(0,f.BX)(u.Column,b(b({},void 0!==e&&e&&{as:"main",id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}}}),{},{columnSpan:{xs:12,md:8},columnStart:{lg:O?5:1},children:[null!=m&&m.length?(0,f.tZ)(a.SkipLinks,{links:m}):null,(0,f.BX)(l.Stack,{flexGrow:1,gap:3,children:[null!=n&&n.length?(0,f.tZ)(d.Breadcrumbs,{links:n}):null,r,h&&(0,f.tZ)(o.Flex,{justifyContent:"flex-start",children:(0,f.tZ)(p.e,{path:h})})]})]}))]})})}},3029:function(t,e,n){"use strict";n.d(e,{V:function(){return l}});var r=n(9525),i=n(4239),c=n(3009),o=n(7800),l=function(t){var e=t.pretext,n=t.title,l=t.introduction,u=t.callToAction;return(0,o.BX)(r.Stack,{gap:1.5,children:[(0,o.BX)(r.Stack,{children:[e?(0,o.tZ)(c.Text,{fontSize:"sm",color:"muted",fontWeight:"bold",lineHeight:"heading",children:e}):null,(0,o.tZ)(i.H1,{children:n})]}),l?(0,o.tZ)(c.Text,{as:"p",fontSize:"md",color:"muted",children:l}):null,u]})}},2230:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return b},default:function(){return O}});var r=n(849),i=n(3772),c=n(4627),o=n(5751),l=n(3942),u=n(2061),s=n(8119),a=n(7489),d=n(3029),p=n(7800);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var b=!0;function O(t){var e=t.breadcrumbs,n=t.navLinks,r=t.document,f=t.toc;return(0,p.BX)(p.HY,{children:[(0,p.tZ)(s.$,{title:r.title,description:r.description}),(0,p.tZ)(u.I,{applyMainElement:!1,children:(0,p.BX)(a.X,{editPath:"/docs/content/content/".concat(r.slug,".mdx"),breadcrumbs:e,applyMainElement:!0,sideNav:{title:"Content",titleLink:"/content",items:n},children:[(0,p.tZ)(d.V,{title:r.title,introduction:r.description}),(null==f?void 0:f.length)>1?(0,p.tZ)(c.InpageNav,{title:"On this page",links:f.map(function(t){return{label:t.title,href:"#".concat(t.slug)}})}):null,(0,p.tZ)(o.Prose,{children:(0,p.tZ)(i.R,h(h({},r.source),{},{components:l.d}))})]})})]})}},5742:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/[slug]",function(){return n(2230)}])}},function(t){t.O(0,[758,442,450,334,286,708,751,685,493,382,942,774,888,179],function(){return t(t.s=5742)}),_N_E=t.O()}]);