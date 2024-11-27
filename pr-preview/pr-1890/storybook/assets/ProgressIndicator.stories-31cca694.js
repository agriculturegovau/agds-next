import{j as i}from"./responsive-123a9343.js";import"./Stack-938d29d6.js";import{B as P}from"./Box-c8c0d4bd.js";import{P as x}from"./ProgressIndicator-22c03b6e.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./useId-1d8fde67.js";import"./CollapsingSideBar-dd7990e7.js";import"./react-spring-web.esm-eb8db2cf.js";import"./index-5ccf1b6b.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./Text-ade3e1ab.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./useToggleState-9cfccda3.js";import"./usePrefersReducedMotion-a214df03.js";import"./WebsiteIcon-a62a72af.js";import"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";const X={title:"forms/ProgressIndicator",component:x},o=[{label:"Introduction",status:"done",href:"#introduction"},{label:"Submit evidence",status:"saved",href:"#evidence"},{label:"Organisations",status:"started",href:"#organisations"},{label:"Business contacts",status:"error",href:"#contacts"},{label:"Case studies",status:"todo",href:"#case-studies"},{label:"Attachments",status:"started",href:"#attachments"},{label:"Review and submit",status:"blocked",href:"#review"}],k=o.map(e=>e.label==="Organisations"?{...e,items:[{label:"Change organisation name",href:"#organisations/change-name"}]}:e),t={args:{activePath:"#organisations",items:o}},a={args:{activePath:"#organisations",items:o,hideSubtitle:!0}},r={name:"On bodyAlt background",args:{activePath:"#organisations",background:"bodyAlt",items:o},parameters:{layout:"fullscreen"},render:e=>i(P,{background:"bodyAlt",padding:1.5,children:i(x,{...e})})},s={args:{activePath:"#organisations/change-name",items:k}};var n,m,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
