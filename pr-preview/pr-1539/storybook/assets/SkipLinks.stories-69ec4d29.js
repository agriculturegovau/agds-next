import{a as i,j as n}from"./responsive-1d67a6a2.js";import{r as l}from"./index-42611d8b.js";import{P as S}from"./Prose-c94e344e.js";import{S as f}from"./Stack-43f3e7c4.js";import{S as k,a as g,b as r}from"./SkipLinks-5d651c8e.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";const z={title:"navigation/SkipLinks",component:k},a={args:{links:[{href:"#main-content",label:"Skip to main content"},{href:"#main-nav",label:"Skip to main navigation"}]},render:h=>i(l.Fragment,{children:[n(k,{...h}),n(d,{})]})},e=()=>i(l.Fragment,{children:[i(g,{"aria-label":"skip links",children:[n(r,{href:"#main-content",children:"Skip to main content"}),n(r,{href:"#main-nav",children:"Skip to main navigation"})]}),n(d,{})]}),d=()=>n(S,{children:i(f,{gap:4,children:[n("p",{children:"This example space contains a visually hidden feature."}),n("nav",{id:"main-nav",tabIndex:-1,css:{"&:focus":{outline:"none"}},children:n("ul",{children:n("li",{children:n("a",{href:"#",children:"Some navigation"})})})}),i("main",{id:"main-content",tabIndex:-1,css:{"&:focus":{outline:"none"}},children:["Some content here with ",n("a",{href:"#",children:"an example link"})]})]})});var t,o,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var s,p,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => <Fragment>
        <SkipLinkContainer aria-label="skip links">
            <SkipLinkItem href="#main-content">Skip to main content</SkipLinkItem>
            <SkipLinkItem href="#main-nav">Skip to main navigation</SkipLinkItem>
        </SkipLinkContainer>
        <ExampleContent />
    </Fragment>`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const A=["Basic","Modular"];export{a as Basic,e as Modular,A as __namedExportsOrder,z as default};
