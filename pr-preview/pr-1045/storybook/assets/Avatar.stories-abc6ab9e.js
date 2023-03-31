import{j as n,t as V,b as f,a as j}from"./Box-3d8e40b9.js";import{F as u,S as F}from"./Stack-88a94cf9.js";import"./index-42611d8b.js";import{T as D}from"./Text-76115ace.js";import"./_commonjsHelpers-042e6b4d.js";function L(t){var c,m;const a=Array.from(t.matchAll(new RegExp(/(\p{L}{1})\p{L}+/,"gu")));if(!a.length)return"?";const e=((c=a.shift())==null?void 0:c[1])||"",g=((m=a.pop())==null?void 0:m[1])||"";return(e+g).toUpperCase()}function r({name:t,tone:a="neutral",size:e="md","aria-hidden":g,"aria-label":c}){const m=L(t),z=w[a],{size:h,fontSize:q}=B[e];return n(u,{as:"span",alignItems:"center",justifyContent:"center",flexShrink:0,css:{textDecoration:"none",height:`${h}rem`,width:`${h}rem`,borderRadius:"50%",borderStyle:"solid",borderWidth:V.borderWidth.sm,borderColor:z,color:z},fontSize:q,fontWeight:"bold","aria-hidden":g,"aria-label":c,children:m})}const w={neutral:f.foregroundMuted,action:f.foregroundAction},B={sm:{fontSize:"xs",size:2},md:{fontSize:"sm",size:2.5},lg:{fontSize:"md",size:3},xl:{fontSize:"lg",size:4},xxl:{fontSize:"xl",size:4.5},xxxl:{fontSize:"xl",size:5}};try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",props:{name:{defaultValue:null,description:"The name of the person represented by the avatar.",name:"name",required:!0,type:{name:"string"}},tone:{defaultValue:null,description:"The colour tone to apply.",name:"tone",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"action"'}]}},size:{defaultValue:null,description:"The size to apply.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},"aria-hidden":{defaultValue:null,description:"If true, the element will be hidden from assistive technologies.",name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-label":{defaultValue:null,description:"Describes the element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Content/Avatar",component:r},O=t=>n(r,{...t}),o=O.bind({});o.args={name:"William Mead",tone:"neutral",size:"md"};const s=O.bind({});s.args={name:"William Mead",tone:"action",size:"md"};const l={sm:{fontSize:"xs",gap:.5},md:{fontSize:"sm",gap:.5},lg:{fontSize:"md",gap:.75},xl:{fontSize:"lg",gap:.75},xxl:{fontSize:"xl",gap:1},xxxl:{fontSize:"xl",gap:1}},x=Object.keys(l),Z={neutral:"muted",action:"action"},i=({size:t,...a})=>n(u,{alignItems:"center",gap:1,children:x.map(e=>n(r,{...a,size:e},e))});i.args={name:"William Mead",tone:"neutral"};const d=()=>{const t="William Mead",a="neutral";return n(F,{gap:1,alignItems:"flex-start",children:x.map(e=>j(u,{gap:l[e].gap,alignItems:"center",justifyContent:"flex-start",children:[n(r,{name:t,size:e,tone:a}),n(D,{color:Z[a],fontSize:l[e].fontSize,fontWeight:"bold",children:t})]},e))})},p=()=>{const t="William Mead",a="action";return n(F,{gap:1,alignItems:"flex-start",children:x.map(e=>j(u,{gap:l[e].gap,alignItems:"center",justifyContent:"flex-start",as:"a",href:"#",link:!0,css:{textDecoration:"none","> span":{textDecoration:"underline"},"&:hover > span":{textDecoration:"none",color:f.foregroundText}},children:[n(r,{name:t,size:e,tone:a}),n(D,{color:Z[a],fontSize:l[e].fontSize,fontWeight:"bold",children:t})]},e))})};var S,v,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Avatar {...args} />",...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,A,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Avatar {...args} />",...(I=(A=s.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var _,T,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`({
  size,
  ...args
}) => {
  return <Flex alignItems="center" gap={1}>
            {sizes.map(size => <Avatar key={size} {...args} size={size} />)}
        </Flex>;
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var k,W,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(P=(W=d.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var C,E,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["Basic","Tone","Sizes","CompositeNames","CompositeNamesLinks"];export{o as Basic,d as CompositeNames,p as CompositeNamesLinks,i as Sizes,s as Tone,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Avatar.stories-abc6ab9e.js.map
