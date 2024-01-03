import{j as t,a as C,b as y}from"./responsive-1d67a6a2.js";import{F as p,S as E}from"./Stack-43f3e7c4.js";import"./index-42611d8b.js";import{T as b}from"./Text-d916011d.js";import{A as l}from"./Avatar-994f28fa.js";import"./Box-0bbf8d6d.js";import"./_commonjsHelpers-042e6b4d.js";const L={title:"Content/Avatar",component:l},s={args:{name:"William Mead",tone:"neutral",size:"md"}},r={args:{name:"William Mead",tone:"action",size:"md"}},o={sm:{fontSize:"xs",gap:.5},md:{fontSize:"sm",gap:.5},lg:{fontSize:"md",gap:.75},xl:{fontSize:"lg",gap:.75},xxl:{fontSize:"xl",gap:1},xxxl:{fontSize:"xl",gap:1}},d=Object.keys(o),j={neutral:"muted",action:"action"},i={args:{name:"William Mead",tone:"neutral"},render:a=>t(p,{alignItems:"center",gap:1,children:d.map(n=>t(l,{...a,size:n},n))})},m=()=>{const a="William Mead",n="neutral";return t(E,{gap:1,alignItems:"flex-start",children:d.map(e=>C(p,{gap:o[e].gap,alignItems:"center",justifyContent:"flex-start",children:[t(l,{name:a,size:e,tone:n}),t(b,{color:j[n],fontSize:o[e].fontSize,fontWeight:"bold",children:a})]},e))})},c=()=>{const a="William Mead",n="action";return t(E,{gap:1,alignItems:"flex-start",children:d.map(e=>C(p,{gap:o[e].gap,alignItems:"center",justifyContent:"flex-start",as:"a",href:"#",link:!0,css:{textDecoration:"none","> span":{textDecoration:"underline"},"&:hover > span":{textDecoration:"none",color:y.foregroundText}},children:[t(l,{name:a,size:e,tone:n}),t(b,{color:j[n],fontSize:o[e].fontSize,fontWeight:"bold",children:a})]},e))})};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'William Mead',
    tone: 'neutral',
    size: 'md'
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var u,z,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'William Mead',
    tone: 'action',
    size: 'md'
  }
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var M,h,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'William Mead',
    tone: 'neutral'
  },
  render: args => <Flex alignItems="center" gap={1}>
            {sizes.map(size => <Avatar key={size} {...args} size={size} />)}
        </Flex>
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var A,W,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const name = 'William Mead';
  const tone = 'neutral';
  return <Stack gap={1} alignItems="flex-start">
            {sizes.map(size => <Flex key={size} gap={SIZE_MAP[size].gap} alignItems="center" justifyContent="flex-start">
                    <Avatar name={name} size={size} tone={tone} />
                    <Text color={TONE_MAP[tone]} fontSize={SIZE_MAP[size].fontSize} fontWeight="bold">
                        {name}
                    </Text>
                </Flex>)}
        </Stack>;
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var T,P,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const name = 'William Mead';
  const tone = 'action';
  return <Stack gap={1} alignItems="flex-start">
            {sizes.map(size => <Flex key={size} gap={SIZE_MAP[size].gap} alignItems="center" justifyContent="flex-start" as="a" href="#" link css={{
      textDecoration: 'none',
      '> span': {
        textDecoration: 'underline'
      },
      '&:hover > span': {
        textDecoration: 'none',
        color: boxPalette.foregroundText
      }
    }}>
                    <Avatar name={name} size={size} tone={tone} />
                    <Text color={TONE_MAP[tone]} fontSize={SIZE_MAP[size].fontSize} fontWeight="bold">
                        {name}
                    </Text>
                </Flex>)}
        </Stack>;
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const q=["Basic","Tone","Sizes","CompositeNames","CompositeNamesLinks"];export{s as Basic,m as CompositeNames,c as CompositeNamesLinks,i as Sizes,r as Tone,q as __namedExportsOrder,L as default};
