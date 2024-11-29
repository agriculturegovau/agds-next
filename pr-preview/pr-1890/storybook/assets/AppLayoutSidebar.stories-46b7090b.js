import{j as m}from"./responsive-22d1c539.js";import{F}from"./Stack-e6a92433.js";import{A as T}from"./utils-ba2ed83c.js";import{A as u}from"./AppLayoutSidebar-dd133bda.js";import{n as E}from"./test-utils-6f69a97a.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./Text-03708b2d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./WebsiteIcon-da68083c.js";import"./index-33ec0502.js";import"./react-spring-web.esm-283dcba6.js";import"./Combination-2983c2b6.js";import"./useId-bf1c3739.js";import"./usePrefersReducedMotion-f6a12f32.js";import"./useAriaModalPolyfill-194cdec9.js";import"./NotificationBadge-5114eb4c.js";import"./DropdownMenuGroupLink-cb67a92f.js";import"./Popover-4e65a303.js";import"./Divider-6f447906.js";import"./useClickOutside-ca5d6845.js";const yr={title:"Layout/AppLayout/AppLayoutSidebar",component:u,parameters:{layout:"fullscreen"},args:{activePath:"/",background:"bodyAlt",items:E("Antfix")},render:r=>m(T.Provider,{value:{focusMode:!1,isMobileMenuOpen:!0,openMobileMenu:console.log,closeMobileMenu:console.log},children:m(F,{flexDirection:"column",css:{minHeight:"100vh"},children:m(u,{...r})})})},e={},a={args:{activePath:"/establishments"}},t={args:{activePath:"/establishments/canberra"}},o={args:{background:"body"}},s={args:{activePath:"/establishments",items:E("Antfix").map(r=>(Array.isArray(r)?r:r.items).map(c=>({...c,icon:void 0})))}},i={args:{activePath:"#0-0",items:Array.from(Array(5)).map((r,p)=>Array.from(Array(5)).map((c,j)=>({href:`#${p}-${j}`,label:"Example item"})))}},n={args:{subLevelVisible:"always"}};var l,d,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var A,y,b;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
