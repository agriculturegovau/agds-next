import{a,j as n}from"./responsive-22d1c539.js";import{r as l}from"./index-f0f3a68d.js";import{P as S}from"./Prose-4fb6c7b0.js";import{S as f}from"./Stack-e6a92433.js";import{S as d,a as g,b as r}from"./SkipLinks-ae1108db.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Box-cc8e6f8e.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./Text-03708b2d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";const z={title:"navigation/SkipLinks",component:d},e={args:{links:[{href:"#main-content",label:"Skip to main content"},{href:"#main-nav",label:"Skip to main navigation"}]},render:h=>a(l.Fragment,{children:[n(d,{...h}),n(k,{})]})},i=()=>a(l.Fragment,{children:[a(g,{"aria-label":"skip links",children:[n(r,{href:"#main-content",children:"Skip to main content"}),n(r,{href:"#main-nav",children:"Skip to main navigation"})]}),n(k,{})]}),k=()=>n(S,{children:a(f,{gap:4,children:[n("p",{children:"This example space contains a visually hidden feature."}),n("nav",{id:"main-nav",tabIndex:-1,css:{"&:focus":{outline:"none"}},children:n("ul",{children:n("li",{children:n("a",{href:"#",children:"Some navigation"})})})}),a("main",{id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}},children:["Some content here with ",n("a",{href:"#",children:"an example link"})]})]})});i.__docgenInfo={description:"",methods:[],displayName:"Modular"};var t,o,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    links: [{
      href: '#main-content',
      label: 'Skip to main content'
    }, {
      href: '#main-nav',
      label: 'Skip to main navigation'
    }]
  },
  render: args => <Fragment>
            <SkipLinks {...args} />
            <ExampleContent />
        </Fragment>
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var s,p,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Fragment>
        <SkipLinkContainer aria-label="skip links">
            <SkipLinkItem href="#main-content">Skip to main content</SkipLinkItem>
            <SkipLinkItem href="#main-nav">Skip to main navigation</SkipLinkItem>
        </SkipLinkContainer>
        <ExampleContent />
    </Fragment>`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const A=["Basic","Modular"];export{e as Basic,i as Modular,A as __namedExportsOrder,z as default};
