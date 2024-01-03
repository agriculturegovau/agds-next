import{j as r,a as n}from"./responsive-1d67a6a2.js";import{b as O,a as W,S as j}from"./SearchBoxInput-326854b2.js";import{B as i}from"./Button-e28534e8.js";import{B as v}from"./ButtonGroup-20aae35f.js";import"./Stack-43f3e7c4.js";import{B as T}from"./Box-0bbf8d6d.js";import{H as x,g as G,f as I,e as P}from"./HeroBannerTitle-a3dfb39b.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./utils-41ab3b0f.js";import"./Heading-1a35fe7d.js";function f({title:s,subtitle:H,children:k,...A}){return n(x,{...A,children:[n(G,{children:[r(I,{children:s}),r(P,{children:H})]}),k]})}const nr={title:"layout/HeroBanner/HeroBanner",component:x,parameters:{layout:"fullscreen"},args:{title:"Website hero banner title - xxxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:r("img",{src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",role:"presentation",alt:""}),children:n(j,{onSubmit:console.log,children:[r(O,{label:"Search this website"}),r(W,{iconOnly:{xs:!0,md:!1},children:"Search"})]})},render:f},e={args:{}},o={name:"On bodyAlt background",args:{background:"body"},render:s=>r(T,{paddingY:3,background:"bodyAlt",children:r(f,{...s})})},t={args:{children:n(v,{children:[r(i,{children:"Primary button"}),r(i,{variant:"secondary",children:"Secondary button"})]})}},a={args:{image:void 0}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
