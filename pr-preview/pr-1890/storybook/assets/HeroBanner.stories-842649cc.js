import{j as r,a as n}from"./responsive-123a9343.js";import{a as O,b as W,S as j}from"./SearchBoxInput-7272a95d.js";import{B as i}from"./Button-12960031.js";import{B as v}from"./ButtonGroup-399a126c.js";import"./Stack-938d29d6.js";import{B as T}from"./Box-c8c0d4bd.js";import{H as x,a as G,b as I,c as P}from"./HeroBannerTitle-d1890103.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./WebsiteIcon-a62a72af.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./Text-ade3e1ab.js";import"./ExternalLinkCallout-dac509ef.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./mergeRefs-868b543a.js";import"./utils-41ab3b0f.js";import"./Heading-53d486d1.js";function f({title:s,subtitle:H,children:k,...A}){return n(x,{...A,children:[n(G,{children:[r(I,{children:s}),r(P,{children:H})]}),k]})}const nr={title:"layout/HeroBanner/HeroBanner",component:x,parameters:{layout:"fullscreen"},args:{title:"Website hero banner title - xxxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:r("img",{src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",role:"presentation",alt:""}),children:n(j,{onSubmit:console.log,children:[r(O,{label:"Search this website"}),r(W,{iconOnly:{xs:!0,md:!1},children:"Search"})]})},render:f},e={args:{}},o={name:"On bodyAlt background",args:{background:"body"},render:s=>r(T,{paddingY:3,background:"bodyAlt",children:r(f,{...s})})},t={args:{children:n(v,{children:[r(i,{children:"Primary button"}),r(i,{variant:"secondary",children:"Secondary button"})]})}},a={args:{image:void 0}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'On bodyAlt background',
  args: {
    background: 'body'
  },
  render: args => <Box paddingY={3} background="bodyAlt">
            <Template {...args} />
        </Box>
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,B,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <ButtonGroup>
                <Button>Primary button</Button>
                <Button variant="secondary">Secondary button</Button>
            </ButtonGroup>
  }
}`,...(h=(B=t.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var b,y,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    image: undefined
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const sr=["Basic","OnBodyAlt","WithButtons","WithoutImage"];export{e as Basic,o as OnBodyAlt,t as WithButtons,a as WithoutImage,sr as __namedExportsOrder,nr as default};
