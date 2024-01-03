import{j as e,a as T}from"./responsive-1d67a6a2.js";import{a as re}from"./ag.ds-next-react-box.cjs-cf28e632.js";import{a as b}from"./ag.ds-next-react-core.cjs-8e1121e9.js";import{V as te}from"./VisuallyHidden-02be915e.js";import{F as ne}from"./Stack-43f3e7c4.js";import{B as ie}from"./Box-0bbf8d6d.js";import{C as le}from"./ControlGroup-2488cb7d.js";import"./WebsiteIcon-7b03f042.js";import{C as g}from"./CalendarIcon-791c6fea.js";import{R as C}from"./Radio-519bf71c.js";import{T as a}from"./Text-d916011d.js";import{C as r,c as se,a as ce}from"./Callout-6b6bc6e5.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./noop-eb890146.js";import"./index-69af556a.js";import"./useId-d335a68c.js";import"./useTernaryState-6ea40a94.js";import"./useToggleState-9d17fadd.js";import"./usePrefersReducedMotion-fcdf456e.js";import"./useWindowSize-fbc787ee.js";import"./useClickOutside-f1a14f0e.js";import"./useAriaModalPolyfill-a67b2f1a.js";import"./mergeRefs-868b543a.js";import"./findBestMatch-d78b28a3.js";import"./Field-20b34c68.js";import"./ControlGroupProvider-7b13d7d1.js";import"./ag.ds-next-react-icon.cjs-3a9514e5.js";import"./utils-951ab468.js";function x({children:o}){return e(re.Box,{borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:{marginLeft:`calc(${b.mapSpacing(1)} - ${b.tokens.borderWidth.xl/2}px)`},children:o})}try{x.displayName="ConditionalFieldContainer",x.__docgenInfo={description:"",displayName:"ConditionalFieldContainer",props:{}}}catch{}const Ge={title:"content/Callout",component:r,argTypes:{tone:{options:Object.keys(se),control:{type:"select"}}}},t={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"neutral"}},n={name:"On bodyAlt background",args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"neutral",onBodyAlt:!0},render:o=>e(ie,{background:"bodyAlt",padding:1.5,children:e(r,{...o})})},i={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info"}},l={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"compact"}},s={args:{title:"Feature Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"feature"}},c={args:{title:"Feature Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"compact",icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"info",size:"md"})}},d={args:{title:"Feature Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"feature",icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"info",size:"lg"})}},p={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"border",size:"md"})}},u={args:{as:"section",tone:"neutral",icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"border",size:"md"})},render:o=>e(r,{...o,children:T(ne,{flexDirection:"column",children:[e(te,{children:e("h2",{children:"Description of the callout"})}),e(a,{as:"p",children:"The next public holiday is:"}),e(a,{as:"time",fontSize:"xl",fontWeight:"bold",dateTime:"2017-01-01T00:00:00+00:00",children:"Sunday 1 January"}),e(a,{children:"New Year’s Day"})]})})},m={render:o=>T(le,{label:"Control group label",required:!0,block:!0,children:[e(C,{checked:!1,children:"Radio option one"}),e(C,{checked:!0,children:"Radio option two"}),e(x,{children:e(r,{...o})}),e(C,{checked:!1,children:"Text message"})]}),args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"compact"}},h={args:{title:void 0,children:e(a,{as:"p",children:"Description of the callout."}),tone:"neutral"}},f={render:o=>T(r,{...o,children:[e(ce,{as:"h3",variant:o.variant,children:"Callout heading"}),e(a,{as:"p",children:"Description of the callout."})]}),args:{tone:"neutral",variant:"regular"}};var D,y,I;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'neutral'
  }
}`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var F,S,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'On bodyAlt background',
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'neutral',
    onBodyAlt: true
  },
  render: args => <Box background="bodyAlt" padding={1.5}>
            <Callout {...args} />
        </Box>
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var R,k,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info'
  }
}`,...(V=(k=i.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var _,z,B;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'compact'
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var W,A,N;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Feature Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'feature'
  }
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var j,O,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Feature Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'compact',
    icon: <CalendarIcon aria-hidden="false" aria-label="Information" color="info" size="md" />
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var G,w,L;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Feature Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'feature',
    icon: <CalendarIcon aria-hidden="false" aria-label="Information" color="info" size="lg" />
  }
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var H,q,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    icon: <CalendarIcon aria-hidden="false" aria-label="Information" color="border" size="md" />
  }
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Y,$,M;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    as: 'section',
    tone: 'neutral',
    icon: <CalendarIcon aria-hidden="false" aria-label="Information" color="border" size="md" />
  },
  render: args => <Callout {...args}>
            <Flex flexDirection="column">
                <VisuallyHidden>
                    <h2>Description of the callout</h2>
                </VisuallyHidden>
                <Text as="p">The next public holiday is:</Text>
                <Text as="time" fontSize="xl" fontWeight="bold" dateTime="2017-01-01T00:00:00+00:00">
                    Sunday 1 January
                </Text>
                <Text>New Year’s Day</Text>
            </Flex>
        </Callout>
}`,...(M=($=u.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var K,P,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <ControlGroup label="Control group label" required block>
            <Radio checked={false}>Radio option one</Radio>
            <Radio checked={true}>Radio option two</Radio>
            <ConditionalFieldContainer>
                <Callout {...args} />
            </ConditionalFieldContainer>
            <Radio checked={false}>Text message</Radio>
        </ControlGroup>,
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'compact'
  }
}`,...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'neutral'
  }
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,oe;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <Callout {...args}>
            <CalloutTitle as="h3" variant={args.variant}>
                Callout heading
            </CalloutTitle>
            <Text as="p">Description of the callout.</Text>
        </Callout>,
  args: {
    tone: 'neutral',
    variant: 'regular'
  }
}`,...(oe=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const we=["Basic","OnBodyAlt","InfoTone","CompactVariant","FeatureVariant","CompactVariantWithIcon","FeatureVariantWithIcon","RegularVariantWithIcon","CalendarExample","InControlGroup","NoTitle","CustomTitleSize"];export{t as Basic,u as CalendarExample,l as CompactVariant,c as CompactVariantWithIcon,f as CustomTitleSize,s as FeatureVariant,d as FeatureVariantWithIcon,m as InControlGroup,i as InfoTone,h as NoTitle,n as OnBodyAlt,p as RegularVariantWithIcon,we as __namedExportsOrder,Ge as default};
