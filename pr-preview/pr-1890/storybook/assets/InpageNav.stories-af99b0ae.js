import{a as n,j as e}from"./responsive-22d1c539.js";import{r as v}from"./index-f0f3a68d.js";import{P as b}from"./Prose-4fb6c7b0.js";import{S as m}from"./Stack-e6a92433.js";import{I as u,a as f,b as N,c as S,d as x}from"./InpageNav-08d2026d.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Box-cc8e6f8e.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";import"./ExternalLinkCallout-896682bb.js";import"./WebsiteIcon-da68083c.js";import"./Text-03708b2d.js";const B={title:"navigation/InpageNav",component:u},d=[{href:"#section-1",label:"Section 1"},{href:"#section-2",label:"Section 2"},{href:"#section-3",label:"Section 3"},{href:"#section-4",label:"Section 4"},{href:"#section-5",label:"Section 5"}],g=()=>e(b,{children:[1,2,3,4,5].map(a=>n(v.Fragment,{children:[n("h2",{id:`section-${a}`,children:["Section ",a]}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus accusamus doloremque repellat molestias id, iusto cum adipisci distinctio tempore blanditiis dolor hic vero omnis laboriosam! Aenean mattis maximus ante, vitae facilisis nunc commodo vitae."}),e("p",{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea dictumst. Sed eleifend eu sem ut laoreet. Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac lacus."})]},a))}),i={render:a=>n(m,{gap:3,children:[e(u,{...a}),e(g,{})]}),args:{title:"On this page",links:d}},t=()=>n(m,{gap:3,children:[n(f,{"aria-label":"In page",children:[e(N,{children:"On this page"}),e(x,{children:d.map(({label:a,...h},I)=>e(S,{...h,children:a},I))})]}),e(g,{})]});t.__docgenInfo={description:"",methods:[],displayName:"Modular"};var r,s,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
            <InpageNav {...args} />
            <ExampleContent />
        </Stack>,
  args: {
    title: 'On this page',
    links: exampleLinks
  }
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Stack gap={3}>
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
    </Stack>`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["Basic","Modular"];export{i as Basic,t as Modular,D as __namedExportsOrder,B as default};
