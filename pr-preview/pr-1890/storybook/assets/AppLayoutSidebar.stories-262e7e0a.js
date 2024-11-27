import{j as m}from"./responsive-123a9343.js";import{F}from"./Stack-938d29d6.js";import{A as T}from"./utils-516bbe96.js";import{A as u}from"./AppLayoutSidebar-5d001753.js";import{n as E}from"./test-utils-c385eaf4.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./Text-ade3e1ab.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./WebsiteIcon-a62a72af.js";import"./index-5ccf1b6b.js";import"./react-spring-web.esm-eb8db2cf.js";import"./Combination-826c8940.js";import"./useId-1d8fde67.js";import"./usePrefersReducedMotion-a214df03.js";import"./useAriaModalPolyfill-d662b49c.js";import"./NotificationBadge-862122b9.js";import"./DropdownMenuGroupLink-c54d1f63.js";import"./Popover-91e83479.js";import"./Divider-3c12d071.js";import"./useClickOutside-f5418014.js";const yr={title:"Layout/AppLayout/AppLayoutSidebar",component:u,parameters:{layout:"fullscreen"},args:{activePath:"/",background:"bodyAlt",items:E("Antfix")},render:r=>m(T.Provider,{value:{focusMode:!1,isMobileMenuOpen:!0,openMobileMenu:console.log,closeMobileMenu:console.log},children:m(F,{flexDirection:"column",css:{minHeight:"100vh"},children:m(u,{...r})})})},e={},a={args:{activePath:"/establishments"}},t={args:{activePath:"/establishments/canberra"}},o={args:{background:"body"}},s={args:{activePath:"/establishments",items:E("Antfix").map(r=>(Array.isArray(r)?r:r.items).map(c=>({...c,icon:void 0})))}},i={args:{activePath:"#0-0",items:Array.from(Array(5)).map((r,p)=>Array.from(Array(5)).map((c,j)=>({href:`#${p}-${j}`,label:"Example item"})))}},n={args:{subLevelVisible:"always"}};var l,d,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var A,y,b;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    activePath: '/establishments'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,h,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    activePath: '/establishments/canberra'
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,L,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    background: 'body'
  }
}`,...(I=(L=o.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var P,S,M;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(S=s.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var w,B,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(B=i.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var _,k,$;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    subLevelVisible: 'always'
  }
}`,...($=(k=n.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};const br=["Basic","LevelOneActive","LevelTwoActive","BodyBackground","WithoutIcons","LargeList","AlwaysOpen"];export{n as AlwaysOpen,e as Basic,o as BodyBackground,i as LargeList,a as LevelOneActive,t as LevelTwoActive,s as WithoutIcons,br as __namedExportsOrder,yr as default};
