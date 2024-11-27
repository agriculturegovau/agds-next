import{j as e,a as x}from"./responsive-123a9343.js";import{a as re,b as T}from"./ag.ds-next-react-box.cjs-c9762b23.js";import{V as te}from"./ExternalLinkCallout-dac509ef.js";import{F as ie}from"./Stack-938d29d6.js";import{B as ne}from"./Box-c8c0d4bd.js";import{C as le}from"./ControlGroup-08335608.js";import{C as g}from"./WebsiteIcon-a62a72af.js";import{R as C}from"./Radio-accae0d4.js";import{T as a}from"./Text-ade3e1ab.js";import{C as r,c as se,a as ce}from"./Callout-24df773d.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./noop-eb890146.js";import"./useId-1d8fde67.js";import"./useTernaryState-a0ca107e.js";import"./useToggleState-9cfccda3.js";import"./usePrefersReducedMotion-a214df03.js";import"./useWindowSize-52831703.js";import"./useClickOutside-f5418014.js";import"./useAriaModalPolyfill-d662b49c.js";import"./mergeRefs-868b543a.js";import"./findBestMatch-d78b28a3.js";import"./index-1c0ca288.js";import"./Field-b78d080b.js";import"./ControlGroupProvider-93e131c1.js";function oe({children:o}){return React.createElement(re.Box,{borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:{marginLeft:`calc(${T.mapSpacing(1)} - ${T.tokens.borderWidth.xl/2}px)`}},o)}oe.__docgenInfo={description:"",methods:[],displayName:"ConditionalFieldContainer"};const je={title:"content/Callout",component:r,argTypes:{tone:{options:Object.keys(se),control:{type:"select"}}}},t={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"neutral"}},i={name:"On bodyAlt background",args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"neutral",onBodyAlt:!0},render:o=>e(ne,{background:"bodyAlt",padding:1.5,children:e(r,{...o})})},n={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info"}},l={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"compact"}},s={args:{title:"Feature Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"feature"}},c={args:{title:"Feature Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"compact",icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"info",size:"md"})}},d={args:{title:"Feature Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"feature",icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"info",size:"lg"})}},p={args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"border",size:"md"})}},u={args:{as:"section",tone:"neutral",icon:e(g,{"aria-hidden":"false","aria-label":"Information",color:"border",size:"md"})},render:o=>e(r,{...o,children:x(ie,{flexDirection:"column",children:[e(te,{children:e("h2",{children:"Description of the callout"})}),e(a,{as:"p",children:"The next public holiday is:"}),e(a,{as:"time",fontSize:"xl",fontWeight:"bold",dateTime:"2017-01-01T00:00:00+00:00",children:"Sunday 1 January"}),e(a,{children:"New Year’s Day"})]})})},m={render:o=>x(le,{label:"Control group label",required:!0,block:!0,children:[e(C,{checked:!1,children:"Radio option one"}),e(C,{checked:!0,children:"Radio option two"}),e(oe,{children:e(r,{...o})}),e(C,{checked:!1,children:"Text message"})]}),args:{title:"Callout heading",children:e(a,{as:"p",children:"Description of the callout."}),tone:"info",variant:"compact"}},h={args:{title:void 0,children:e(a,{as:"p",children:"Description of the callout."}),tone:"neutral"}},f={render:o=>x(r,{...o,children:[e(ce,{as:"h3",variant:o.variant,children:"Callout heading"}),e(a,{as:"p",children:"Description of the callout."})]}),args:{tone:"neutral",variant:"regular"}};var b,D,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'neutral'
  }
}`,...(I=(D=t.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var y,S,F;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var v,R,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info'
  }
}`,...(k=(R=n.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var V,z,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'compact'
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var W,A,_;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Feature Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'feature'
  }
}`,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var N,j,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Feature Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'compact',
    icon: <CalendarIcon aria-hidden="false" aria-label="Information" color="info" size="md" />
  }
}`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var G,w,E;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Feature Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'info',
    variant: 'feature',
    icon: <CalendarIcon aria-hidden="false" aria-label="Information" color="info" size="lg" />
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var L,H,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Callout heading',
    children: <Text as="p">Description of the callout.</Text>,
    icon: <CalendarIcon aria-hidden="false" aria-label="Information" color="border" size="md" />
  }
}`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var J,Y,$;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var M,K,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(K=m.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: undefined,
    children: <Text as="p">Description of the callout.</Text>,
    tone: 'neutral'
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Oe=["Basic","OnBodyAlt","InfoTone","CompactVariant","FeatureVariant","CompactVariantWithIcon","FeatureVariantWithIcon","RegularVariantWithIcon","CalendarExample","InControlGroup","NoTitle","CustomTitleSize"];export{t as Basic,u as CalendarExample,l as CompactVariant,c as CompactVariantWithIcon,f as CustomTitleSize,s as FeatureVariant,d as FeatureVariantWithIcon,m as InControlGroup,n as InfoTone,h as NoTitle,i as OnBodyAlt,p as RegularVariantWithIcon,Oe as __namedExportsOrder,je as default};
