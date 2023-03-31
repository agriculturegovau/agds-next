import{a as b,j as r,B as aa}from"./Box-e652c7f2.js";import{L as ea}from"./Logo-13ce5ee2.js";import{S as V,a as Y,b as Z}from"./SearchBoxInput-8dcea9bb.js";import"./Stack-4546232d.js";import{M as ra}from"./MainNav-6c18c1c9.js";import"./index-42611d8b.js";import{H as h,a as oa,b as sa}from"./Header-43fb83c7.js";import"./Button-ffb9a9d6.js";import"./LoadingBlanket-2ea81d60.js";import"./Content-e54e3b95.js";import"./BaseContent-1f85429f.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./Text-51e6146a.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./_commonjsHelpers-042e6b4d.js";import"./VisuallyHidden-315ab967.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-75f04ad3.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import"./TextInput-af5477b0.js";import"./Field-795f8947.js";import"./useId-9773510a.js";import"./Combination-c1ec471a.js";import"./useTernaryState-6ea40a94.js";import"./useWindowSize-fbc787ee.js";import"./Column-81a5e170.js";const ja={title:"layout/Header",component:h,subcomponents:{HeaderContainer:oa,HeaderBrand:sa},parameters:{docs:{description:{component:"FIXME: NextJS declares '*.png' as StaticImageData which has is an object\nwith `src` and other properties.\nThe image imports here are handled by storybook and resolve to strings."}}}},a={heading:"Export Service",subline:"Supporting Australian agricultural exports",logo:r(ea,{}),background:"bodyAlt"},e=u=>r(h,{...u}),o=e.bind({});o.storyName="Body background";o.args={...a,background:"body"};const s=e.bind({});s.storyName="BodyAlt background";s.args={...a,background:"bodyAlt"};const d=e.bind({});d.args={...a,heading:"Internal application",subline:void 0,size:"sm"};const m=e.bind({});m.args={...a,heading:"Internal application",subline:void 0,logo:void 0,size:"sm"};const l=e.bind({});l.args={...a,subline:"Service description that could be a little longer"};const p=e.bind({});p.args={...a,badgeLabel:"Beta"};const g=e.bind({});g.args={...a,logo:void 0};const t=e.bind({});t.args={...a,rightContent:b(Z,{onSubmit:console.log,children:[r(V,{label:"Search this website"}),r(Y,{iconOnly:{xs:!0,md:!1},children:"Search"})]})};t.storyName="With SearchBox";const $=u=>b(aa,{children:[r(h,{...u}),r(ra,{items:[{href:"#account",label:"Home"},{href:"#establishments",label:"Establishments"},{href:"#intelligence",label:"Data and insights"},{href:"#compliance",label:"Compliance"}],activePath:"#account",background:"body"})]}),i=$.bind({});i.storyName="With MainNav";i.args={...a,background:"bodyAlt"};const c=$.bind({});c.storyName="With MainNav and SearchBox";c.args={...a,rightContent:b(Z,{onSubmit:console.log,children:[r(V,{label:"Search this website"}),r(Y,{iconOnly:{xs:!0,md:!1},children:"Search"})]}),background:"bodyAlt"};const n=e.bind({});n.args={...a,heading:"TODO ..."};n.storyName="🕥 Co-Branded";var S,B,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Header {...args} />",...(y=(B=o.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var f,N,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Header {...args} />",...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var H,x,k;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:"args => <Header {...args} />",...(k=(x=d.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var M,A,C;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:"args => <Header {...args} />",...(C=(A=m.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var L,W,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Header {...args} />",...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var D,I,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:"args => <Header {...args} />",...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,w,T;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Header {...args} />",...(T=(w=g.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var P,_,z;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Header {...args} />",...(z=(_=t.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,J,X;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <Box>
            <Header {...args} />
            <MainNav items={[{
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
    }]} activePath="#account" background="body" />
        </Box>;
}`,...(X=(J=i.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var q,G,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <Box>
            <Header {...args} />
            <MainNav items={[{
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
    }]} activePath="#account" background="body" />
        </Box>;
}`,...(K=(G=c.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,R,U;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:"args => <Header {...args} />",...(U=(R=n.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const wa=["BodyBackground","BodyAltBackground","Small","SmallNoLogo","LongSubline","Badge","NoLogo","Search","WithMainNav","WithMainNavAndSearch","CoBranded"];export{p as Badge,s as BodyAltBackground,o as BodyBackground,n as CoBranded,l as LongSubline,g as NoLogo,t as Search,d as Small,m as SmallNoLogo,i as WithMainNav,c as WithMainNavAndSearch,wa as __namedExportsOrder,ja as default};
//# sourceMappingURL=Header.stories-01a46bb0.js.map
