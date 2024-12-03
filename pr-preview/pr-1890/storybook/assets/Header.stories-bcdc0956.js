import{j as e,a as h}from"./responsive-22d1c539.js";import{r as ae}from"./index-f0f3a68d.js";import{L as oe}from"./Logo-335229b1.js";import{H as a,M as se}from"./MainNav-6f3d6916.js";import"./MainNavBottomBar-61c46ab1.js";import{a as $,b as ee,S as re}from"./SearchBoxInput-4f18fec2.js";import{A as b}from"./AISLogo-54a70672.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Column-abc95574.js";import"./Box-cc8e6f8e.js";import"./Stack-e6a92433.js";import"./Text-03708b2d.js";import"./useTernaryState-ed86673f.js";import"./findBestMatch-d78b28a3.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./WebsiteIcon-03a55100.js";import"./DropdownMenuGroupLink-c628e7eb.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./Divider-6f447906.js";import"./useClickOutside-ca5d6845.js";import"./useId-bf1c3739.js";import"./Combination-2983c2b6.js";import"./useAriaModalPolyfill-194cdec9.js";import"./TextInput-72cf6946.js";import"./Field-ef82e19c.js";const Ge={title:"layout/Header",component:a,args:{heading:"Export Service",subline:"Supporting Australian agricultural exports",logo:e(oe,{}),background:"bodyAlt"},parameters:{layout:"fullscreen"}},o={args:{background:"body"}},s={args:{background:"bodyAlt"}},n={args:{badgeLabel:"Beta"}},t={args:{heading:"Internal application",subline:void 0,size:"sm"}},i={args:{heading:"Internal application",subline:void 0,logo:void 0,size:"sm"}},c={args:{subline:"Service description that could be a little longer"}},l={args:{logo:void 0}},d={args:{rightContent:h(re,{onSubmit:console.log,children:[e($,{label:"Search this website"}),e(ee,{iconOnly:{xs:!0,md:!1},children:"Search"})]})}},m={args:{},render:r=>h(ae.Fragment,{children:[e(a,{...r}),e(se,{activePath:"#account",items:[{href:"#account",label:"Home"},{href:"#establishments",label:"Establishments"},{href:"#intelligence",label:"Data and insights"},{href:"#compliance",label:"Compliance"}],background:"body"})]})},g={args:{badgeLabel:"alpha",secondLogo:e(b,{})},render:r=>e(a,{...r})},p={args:{badgeLabel:"alpha",dividerPosition:"between",secondLogo:e(b,{})},render:r=>e(a,{...r})},u={args:{badgeLabel:"alpha",heading:"Short service title",rightContent:h(re,{onSubmit:console.log,children:[e($,{label:"Search this website"}),e(ee,{iconOnly:{xs:!0,sm:!1,lg:!0},children:"Search"})]}),secondHref:"#",secondLogo:e(b,{}),subline:"Short service description"},render:r=>e(a,{...r})};var S,B,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    background: 'body'
  }
}`,...(f=(B=o.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var x,L,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    background: 'bodyAlt'
  }
}`,...(v=(L=s.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var y,C,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    badgeLabel: 'Beta'
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var A,H,I;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    heading: 'Internal application',
    subline: undefined,
    size: 'sm'
  }
}`,...(I=(H=t.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var w,N,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    heading: 'Internal application',
    subline: undefined,
    logo: undefined,
    size: 'sm'
  }
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var P,E,M;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    subline: 'Service description that could be a little longer'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,z,D;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    logo: undefined
  }
}`,...(D=(z=l.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var j,F,_;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(F=d.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var q,G,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,R;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    badgeLabel: 'alpha',
    secondLogo: <AISLogo />
  },
  render: args => <Header {...args} />
}`,...(R=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var T,U,V;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    badgeLabel: 'alpha',
    dividerPosition: 'between',
    secondLogo: <AISLogo />
  },
  render: args => <Header {...args} />
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    badgeLabel: 'alpha',
    heading: 'Short service title',
    rightContent: <SearchBox onSubmit={console.log}>
                <SearchBoxInput label="Search this website" />
                <SearchBoxButton iconOnly={{
        xs: true,
        sm: false,
        lg: true
      }}>
                    Search
                </SearchBoxButton>
            </SearchBox>,
    secondHref: '#',
    secondLogo: <AISLogo />,
    subline: 'Short service description'
  },
  render: args => <Header {...args} />
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Je=["BodyBackground","BodyAltBackground","WithBadge","Small","SmallNoLogo","LongSubline","NoLogo","WithSearchBox","WithMainNav","CoBranding","CoBrandingDividerPositionBetween","CoBrandingWithSearch"];export{s as BodyAltBackground,o as BodyBackground,g as CoBranding,p as CoBrandingDividerPositionBetween,u as CoBrandingWithSearch,c as LongSubline,l as NoLogo,t as Small,i as SmallNoLogo,n as WithBadge,m as WithMainNav,d as WithSearchBox,Je as __namedExportsOrder,Ge as default};
