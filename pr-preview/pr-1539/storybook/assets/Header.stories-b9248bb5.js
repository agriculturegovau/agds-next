import{j as r,a as w}from"./responsive-1d67a6a2.js";import{r as _}from"./index-42611d8b.js";import{L as q}from"./Logo-5eada8bc.js";import{H as D,M as G}from"./MainNav-d2236e94.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import{b as J,a as K,S as Q}from"./SearchBoxInput-326854b2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Column-d36c45c1.js";import"./Text-d916011d.js";import"./useTernaryState-6ea40a94.js";import"./findBestMatch-d78b28a3.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./DropdownMenuGroupLink-d177a86e.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./useClickOutside-f1a14f0e.js";import"./ExternalLinkCallout-f28f2061.js";import"./useId-d335a68c.js";import"./Divider-ce5d5014.js";import"./Combination-c1ec471a.js";import"./useAriaModalPolyfill-a67b2f1a.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";const Ir={title:"layout/Header",component:D,args:{heading:"Export Service",subline:"Supporting Australian agricultural exports",logo:r(q,{}),background:"bodyAlt"}},e={args:{background:"body"}},a={args:{background:"bodyAlt"}},o={args:{badgeLabel:"Beta"}},n={args:{heading:"Internal application",subline:void 0,size:"sm"}},t={args:{heading:"Internal application",subline:void 0,logo:void 0,size:"sm"}},s={args:{subline:"Service description that could be a little longer"}},i={args:{logo:void 0}},c={args:{rightContent:w(Q,{onSubmit:console.log,children:[r(J,{label:"Search this website"}),r(K,{iconOnly:{xs:!0,md:!1},children:"Search"})]})}},m={args:{},render:P=>w(_.Fragment,{children:[r(D,{...P}),r(G,{activePath:"#account",items:[{href:"#account",label:"Home"},{href:"#establishments",label:"Establishments"},{href:"#intelligence",label:"Data and insights"},{href:"#compliance",label:"Compliance"}],background:"body"})]})};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    background: 'body'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    background: 'bodyAlt'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,S,B;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    badgeLabel: 'Beta'
  }
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var f,x,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    heading: 'Internal application',
    subline: undefined,
    size: 'sm'
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,k,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    heading: 'Internal application',
    subline: undefined,
    logo: undefined,
    size: 'sm'
  }
}`,...(L=(k=t.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,A,H;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    subline: 'Service description that could be a little longer'
  }
}`,...(H=(A=s.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var I,W,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    logo: undefined
  }
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var M,z,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    rightContent: <SearchBox onSubmit={console.log}>
                <SearchBoxInput label="Search this website" />
                <SearchBoxButton iconOnly={{
        xs: true,
        md: false
      }}>
                    Search
                </SearchBoxButton>
            </SearchBox>
  }
}`,...(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var j,F,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: args => <Fragment>
            <Header {...args} />
            <MainNav activePath="#account" items={[{
      href: '#account',
      label: 'Home'
    }, {
      href: '#establishments',
      label: 'Establishments'
    }, {
      href: '#intelligence',
      label: 'Data and insights'
    }, {
      href: '#compliance',
      label: 'Compliance'
    }]} background="body" />
        </Fragment>
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Wr=["BodyBackground","BodyAltBackground","WithBadge","Small","SmallNoLogo","LongSubline","NoLogo","WithSearchBox","WithMainNav"];export{a as BodyAltBackground,e as BodyBackground,s as LongSubline,i as NoLogo,n as Small,t as SmallNoLogo,o as WithBadge,m as WithMainNav,c as WithSearchBox,Wr as __namedExportsOrder,Ir as default};
