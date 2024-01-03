import{j as a}from"./responsive-1d67a6a2.js";import{F as x}from"./Stack-43f3e7c4.js";import{A as I}from"./utils-2614a59f.js";import{A as s}from"./AppLayoutSidebar-aba641d1.js";import{n as y}from"./test-utils-43218a79.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./findBestMatch-d78b28a3.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./index-7a46b491.js";import"./react-spring-web.esm-e3dcc61e.js";import"./Combination-c1ec471a.js";import"./useId-d335a68c.js";import"./usePrefersReducedMotion-fcdf456e.js";import"./useAriaModalPolyfill-a67b2f1a.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./NotificationBadge-f264d923.js";import"./DropdownMenuGroupLink-d177a86e.js";import"./Popover-7f6cfd9c.js";import"./useClickOutside-f1a14f0e.js";import"./ExternalLinkCallout-f28f2061.js";import"./DropdownMenuDivider-caed35cd.js";import"./Divider-ce5d5014.js";const or={title:"Layout/AppLayout/AppLayoutSidebar",component:s,parameters:{layout:"fullscreen"},args:{activePath:"/establishments",items:y("Antfix")},render:r=>a(I.Provider,{value:{focusMode:!1,isMobileMenuOpen:!0,openMobileMenu:console.log,closeMobileMenu:console.log},children:a(x,{flexDirection:"column",css:{minHeight:"100vh"},children:a(s,{...r})})})},t={},e={args:{activePath:"/establishments",items:y("Antfix").map(r=>(Array.isArray(r)?r:r.items).map(m=>({...m,icon:void 0})))}},o={args:{activePath:"#0-0",items:Array.from(Array(5)).map((r,i)=>Array.from(Array(5)).map((m,h)=>({href:`#${i}-${h}`,label:"Example item"})))}};var p,n,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,l,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    activePath: '/establishments',
    items: navigationItems('Antfix').map(group => {
      const groupItems = Array.isArray(group) ? group : group.items;
      return groupItems.map(item => {
        return {
          ...item,
          icon: undefined
        };
      });
    })
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,A,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    activePath: '#0-0',
    items: Array.from(Array(5)).map((_, groupIdx) => {
      return Array.from(Array(5)).map((_, itemIdx) => {
        return {
          href: \`#\${groupIdx}-\${itemIdx}\`,
          label: 'Example item'
        };
      });
    })
  }
}`,...(f=(A=o.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const ar=["Basic","WithoutIcons","LargeList"];export{t as Basic,o as LargeList,e as WithoutIcons,ar as __namedExportsOrder,or as default};
