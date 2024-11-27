import{j as e,a as h}from"./responsive-123a9343.js";import{r as ae}from"./index-3b9dd0eb.js";import{L as oe}from"./Logo-8cc18c6c.js";import{H as a,M as se}from"./MainNav-b45709f1.js";import"./MainNavBottomBar-609e2610.js";import{a as $,b as ee,S as re}from"./SearchBoxInput-7272a95d.js";import{A as b}from"./AISLogo-c045bb34.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Column-ae9e54d2.js";import"./Box-c8c0d4bd.js";import"./Stack-938d29d6.js";import"./Text-ade3e1ab.js";import"./useTernaryState-a0ca107e.js";import"./findBestMatch-d78b28a3.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./WebsiteIcon-a62a72af.js";import"./DropdownMenuGroupLink-c54d1f63.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./Divider-3c12d071.js";import"./useClickOutside-f5418014.js";import"./useId-1d8fde67.js";import"./Combination-826c8940.js";import"./useAriaModalPolyfill-d662b49c.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";const Ge={title:"layout/Header",component:a,args:{heading:"Export Service",subline:"Supporting Australian agricultural exports",logo:e(oe,{}),background:"bodyAlt"},parameters:{layout:"fullscreen"}},o={args:{background:"body"}},s={args:{background:"bodyAlt"}},n={args:{badgeLabel:"Beta"}},t={args:{heading:"Internal application",subline:void 0,size:"sm"}},i={args:{heading:"Internal application",subline:void 0,logo:void 0,size:"sm"}},c={args:{subline:"Service description that could be a little longer"}},l={args:{logo:void 0}},d={args:{rightContent:h(re,{onSubmit:console.log,children:[e($,{label:"Search this website"}),e(ee,{iconOnly:{xs:!0,md:!1},children:"Search"})]})}},m={args:{},render:r=>h(ae.Fragment,{children:[e(a,{...r}),e(se,{activePath:"#account",items:[{href:"#account",label:"Home"},{href:"#establishments",label:"Establishments"},{href:"#intelligence",label:"Data and insights"},{href:"#compliance",label:"Compliance"}],background:"body"})]})},g={args:{badgeLabel:"alpha",secondLogo:e(b,{})},render:r=>e(a,{...r})},p={args:{badgeLabel:"alpha",dividerPosition:"between",secondLogo:e(b,{})},render:r=>e(a,{...r})},u={args:{badgeLabel:"alpha",heading:"Short service title",rightContent:h(re,{onSubmit:console.log,children:[e($,{label:"Search this website"}),e(ee,{iconOnly:{xs:!0,sm:!1,lg:!0},children:"Search"})]}),secondHref:"#",secondLogo:e(b,{}),subline:"Short service description"},render:r=>e(a,{...r})};var S,B,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
