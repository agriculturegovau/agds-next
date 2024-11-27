import{a,j as n}from"./responsive-123a9343.js";import{r as l}from"./index-3b9dd0eb.js";import{P as S}from"./Prose-e8845b62.js";import{S as f}from"./Stack-938d29d6.js";import{S as d,a as g,b as r}from"./SkipLinks-9c17e038.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Box-c8c0d4bd.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./Text-ade3e1ab.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";const z={title:"navigation/SkipLinks",component:d},e={args:{links:[{href:"#main-content",label:"Skip to main content"},{href:"#main-nav",label:"Skip to main navigation"}]},render:h=>a(l.Fragment,{children:[n(d,{...h}),n(k,{})]})},i=()=>a(l.Fragment,{children:[a(g,{"aria-label":"skip links",children:[n(r,{href:"#main-content",children:"Skip to main content"}),n(r,{href:"#main-nav",children:"Skip to main navigation"})]}),n(k,{})]}),k=()=>n(S,{children:a(f,{gap:4,children:[n("p",{children:"This example space contains a visually hidden feature."}),n("nav",{id:"main-nav",tabIndex:-1,css:{"&:focus":{outline:"none"}},children:n("ul",{children:n("li",{children:n("a",{href:"#",children:"Some navigation"})})})}),a("main",{id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}},children:["Some content here with ",n("a",{href:"#",children:"an example link"})]})]})});i.__docgenInfo={description:"",methods:[],displayName:"Modular"};var t,o,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
