import{j as a,a as N,d as j}from"./responsive-123a9343.js";import{F as p,S as y}from"./Stack-938d29d6.js";import"./index-3b9dd0eb.js";import{T as P}from"./Text-ade3e1ab.js";import{A as l}from"./Avatar-cb5b4ba0.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./_commonjsHelpers-de833af9.js";const q={title:"Content/Avatar",component:l},i={args:{name:"William Mead",tone:"neutral",size:"md"}},m={args:{name:"William Mead",tone:"action",size:"md"}},r={sm:{fontSize:"xs",gap:.5},md:{fontSize:"sm",gap:.5},lg:{fontSize:"md",gap:.75},xl:{fontSize:"lg",gap:.75},xxl:{fontSize:"xl",gap:1},xxxl:{fontSize:"xl",gap:1}},d=Object.keys(r),E={neutral:"muted",action:"action"},c={args:{name:"William Mead",tone:"neutral"},render:n=>a(p,{alignItems:"center",gap:1,children:d.map(t=>a(l,{...n,size:t},t))})},o=()=>{const n="William Mead",t="neutral";return a(y,{gap:1,alignItems:"flex-start",children:d.map(e=>N(p,{gap:r[e].gap,alignItems:"center",justifyContent:"flex-start",children:[a(l,{name:n,size:e,tone:t}),a(P,{color:E[t],fontSize:r[e].fontSize,fontWeight:"bold",children:n})]},e))})},s=()=>{const n="William Mead",t="action";return a(y,{gap:1,alignItems:"flex-start",children:d.map(e=>N(p,{gap:r[e].gap,alignItems:"center",justifyContent:"flex-start",as:"a",href:"#",link:!0,css:{textDecoration:"none","> span":{textDecoration:"underline"},"&:hover > span":{textDecoration:"none",color:j.foregroundText}},children:[a(l,{name:n,size:e,tone:t}),a(P,{color:E[t],fontSize:r[e].fontSize,fontWeight:"bold",children:n})]},e))})};o.__docgenInfo={description:"",methods:[],displayName:"CompositeNames"};s.__docgenInfo={description:"",methods:[],displayName:"CompositeNamesLinks"};var g,x,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'William Mead',
    tone: 'neutral',
    size: 'md'
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var u,z,S;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'William Mead',
    tone: 'action',
    size: 'md'
  }
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var M,h,I;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'William Mead',
    tone: 'neutral'
  },
  render: args => <Flex alignItems="center" gap={1}>
            {sizes.map(size => <Avatar key={size} {...args} size={size} />)}
        </Flex>
}`,...(I=(h=c.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var k,A,W;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(W=(A=o.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var _,T,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const w=["Basic","Tone","Sizes","CompositeNames","CompositeNamesLinks"];export{i as Basic,o as CompositeNames,s as CompositeNamesLinks,c as Sizes,m as Tone,w as __namedExportsOrder,q as default};
