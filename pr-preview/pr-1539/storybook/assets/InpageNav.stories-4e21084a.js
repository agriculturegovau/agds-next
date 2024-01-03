import{a as t,j as e}from"./responsive-1d67a6a2.js";import{r as v}from"./index-42611d8b.js";import{P as b}from"./Prose-c94e344e.js";import{S as m}from"./Stack-43f3e7c4.js";import{I as u,a as f,d as N,b as S,c as x}from"./InpageNav-4cbd24f7.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./Text-d916011d.js";const y={title:"navigation/InpageNav",component:u},d=[{href:"#section-1",label:"Section 1"},{href:"#section-2",label:"Section 2"},{href:"#section-3",label:"Section 3"},{href:"#section-4",label:"Section 4"},{href:"#section-5",label:"Section 5"}],g=()=>e(b,{children:[1,2,3,4,5].map(a=>t(v.Fragment,{children:[t("h2",{id:`section-${a}`,children:["Section ",a]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus accusamus doloremque repellat molestias id, iusto cum adipisci distinctio tempore blanditiis dolor hic vero omnis laboriosam! Aenean mattis maximus ante, vitae facilisis nunc commodo vitae."}),e("p",{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea dictumst. Sed eleifend eu sem ut laoreet. Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac lacus."})]},a))}),n={render:a=>t(m,{gap:3,children:[e(u,{...a}),e(g,{})]}),args:{title:"On this page",links:d}},i=()=>t(m,{gap:3,children:[t(f,{"aria-label":"In page",children:[e(N,{children:"On this page"}),e(x,{children:d.map(({label:a,...h},I)=>e(S,{...h,children:a},I))})]}),e(g,{})]});var r,s,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
            <InpageNav {...args} />
            <ExampleContent />
        </Stack>,
  args: {
    title: 'On this page',
    links: exampleLinks
  }
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var p,c,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Stack gap={3}>
        <InpageNavContainer aria-label="In page">
            <InpageNavTitle>On this page</InpageNavTitle>
            <InpageNavItemContainer>
                {exampleLinks.map(({
        label,
        ...props
      }, index) => <InpageNavItem key={index} {...props}>
                        {label}
                    </InpageNavItem>)}
            </InpageNavItemContainer>
        </InpageNavContainer>
        <ExampleContent />
    </Stack>`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const F=["Basic","Modular"];export{n as Basic,i as Modular,F as __namedExportsOrder,y as default};
