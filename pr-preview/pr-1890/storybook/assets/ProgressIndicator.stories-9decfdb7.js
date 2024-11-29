import{j as i}from"./responsive-22d1c539.js";import"./Stack-e6a92433.js";import{B as P}from"./Box-cc8e6f8e.js";import{P as x}from"./ProgressIndicator-a562f548.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./useId-bf1c3739.js";import"./CollapsingSideBar-0866da05.js";import"./react-spring-web.esm-283dcba6.js";import"./index-33ec0502.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./Text-03708b2d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./useToggleState-e0319b87.js";import"./usePrefersReducedMotion-f6a12f32.js";import"./WebsiteIcon-da68083c.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";const X={title:"forms/ProgressIndicator",component:x},o=[{label:"Introduction",status:"done",href:"#introduction"},{label:"Submit evidence",status:"saved",href:"#evidence"},{label:"Organisations",status:"started",href:"#organisations"},{label:"Business contacts",status:"error",href:"#contacts"},{label:"Case studies",status:"todo",href:"#case-studies"},{label:"Attachments",status:"started",href:"#attachments"},{label:"Review and submit",status:"blocked",href:"#review"}],k=o.map(e=>e.label==="Organisations"?{...e,items:[{label:"Change organisation name",href:"#organisations/change-name"}]}:e),t={args:{activePath:"#organisations",items:o}},a={args:{activePath:"#organisations",items:o,hideSubtitle:!0}},r={name:"On bodyAlt background",args:{activePath:"#organisations",background:"bodyAlt",items:o},parameters:{layout:"fullscreen"},render:e=>i(P,{background:"bodyAlt",padding:1.5,children:i(x,{...e})})},s={args:{activePath:"#organisations/change-name",items:k}};var n,m,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    activePath: '#organisations',
    items: exampleItems
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    activePath: '#organisations',
    items: exampleItems,
    hideSubtitle: true
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'On bodyAlt background',
  args: {
    activePath: '#organisations',
    background: 'bodyAlt',
    items: exampleItems
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: props => <Box background="bodyAlt" padding={1.5}>
            <ProgressIndicator {...props} />
        </Box>
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    activePath: '#organisations/change-name',
    items: exampleLevelTwoLinkItems
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const Y=["Basic","HiddenSubtitle","OnBodyAlt","LevelTwoStepLinks"];export{t as Basic,a as HiddenSubtitle,s as LevelTwoStepLinks,r as OnBodyAlt,Y as __namedExportsOrder,X as default};
