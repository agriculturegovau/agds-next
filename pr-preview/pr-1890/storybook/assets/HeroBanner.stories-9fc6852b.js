import{j as r,a as n}from"./responsive-22d1c539.js";import{a as O,b as W,S as j}from"./SearchBoxInput-b004205f.js";import{B as i}from"./Button-1a082b6d.js";import{B as v}from"./ButtonGroup-5c583b5f.js";import"./Stack-e6a92433.js";import{B as T}from"./Box-cc8e6f8e.js";import{H as x,a as G,b as I,c as P}from"./HeroBannerTitle-38e6848d.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./WebsiteIcon-da68083c.js";import"./TextInput-b5049985.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./Text-03708b2d.js";import"./ExternalLinkCallout-896682bb.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./mergeRefs-868b543a.js";import"./utils-41ab3b0f.js";import"./Heading-85d6cea8.js";function f({title:s,subtitle:H,children:k,...A}){return n(x,{...A,children:[n(G,{children:[r(I,{children:s}),r(P,{children:H})]}),k]})}const nr={title:"layout/HeroBanner/HeroBanner",component:x,parameters:{layout:"fullscreen"},args:{title:"Website hero banner title - xxxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:r("img",{src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",role:"presentation",alt:""}),children:n(j,{onSubmit:console.log,children:[r(O,{label:"Search this website"}),r(W,{iconOnly:{xs:!0,md:!1},children:"Search"})]})},render:f},e={args:{}},o={name:"On bodyAlt background",args:{background:"body"},render:s=>r(T,{paddingY:3,background:"bodyAlt",children:r(f,{...s})})},t={args:{children:n(v,{children:[r(i,{children:"Primary button"}),r(i,{variant:"secondary",children:"Secondary button"})]})}},a={args:{image:void 0}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
