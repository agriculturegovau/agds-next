import{j as r,a as h}from"./responsive-1d67a6a2.js";import"./Stack-43f3e7c4.js";import{B as f}from"./Box-0bbf8d6d.js";import{H as u,f as x,e as H}from"./HeroCategoryBannerTitle-619db8b9.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./utils-41ab3b0f.js";import"./Heading-1a35fe7d.js";import"./Text-d916011d.js";function b({title:t,subtitle:y,...B}){return h(u,{...B,children:[r(x,{children:t}),r(H,{children:y})]})}const w={title:"layout/HeroBanner/HeroCategoryBanner",component:u,parameters:{layout:"fullscreen"},args:{title:"Website hero banner title - xxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:r("img",{src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",role:"presentation",alt:""})},render:b},e={args:{}},a={name:"On bodyAlt background",args:{background:"body"},render:t=>r(f,{paddingY:3,background:"bodyAlt",children:r(b,{...t})})},o={args:{image:void 0}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'On bodyAlt background',
  args: {
    background: 'body'
  },
  render: args => <Box paddingY={3} background="bodyAlt">
            <Template {...args} />
        </Box>
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,g,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    image: undefined
  }
}`,...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const z=["Basic","OnBodyAlt","WithoutImage"];export{e as Basic,a as OnBodyAlt,o as WithoutImage,z as __namedExportsOrder,w as default};
