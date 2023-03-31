import{j as e,a as o,B as r,b as g,F as T,m as k}from"./Box-3d8e40b9.js";import{S as p,F as c}from"./Stack-88a94cf9.js";import{T as B}from"./Text-76115ace.js";import{C as P,a as A}from"./CardFooter-96a5bd43.js";import{b as z}from"./Heading-1fbb096a.js";import{P as F}from"./Prose-78d7ff69.js";import{a as G}from"./Column-d93d5024.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";const E={title:"foundations/Core/Tokens"},n=()=>{const t=["light","dark"],a=Object.keys(g);return e(p,{gap:1.5,children:t.map(l=>o(p,{gap:2,padding:1.5,palette:l,background:"body",children:[e(z,{children:l}),e(G,{as:"ul",cols:{xs:1,sm:2,md:3,lg:4,xl:6},children:a.map(i=>o(P,{as:"li",shadow:!0,children:[e(r,{width:"100%",height:"6rem",background:"body",css:{backgroundColor:g[i]}}),e(r,{borderColor:"muted",borderTop:!0,children:e(A,{children:e(B,{fontSize:"xs",children:i})})})]},i))})]},l))})},m=({palette:t})=>o(c,{palette:t,width:"100%",children:[o(c,{padding:2,background:"body",flexGrow:1,children:[e(r,{flexGrow:1,color:"text",paddingY:2,paddingX:1,children:"backgroundBody"}),e(r,{flexGrow:1,color:"text",paddingY:2,paddingX:1,background:"shade",children:"backgroundShade"})]}),o(c,{padding:2,background:"bodyAlt",flexGrow:1,children:[e(r,{flexGrow:1,color:"text",paddingY:2,paddingX:1,children:"backgroundBodyAlt"}),e(r,{flexGrow:1,color:"text",paddingY:2,paddingX:1,background:"shadeAlt",children:"backgroundShadeAlt"})]})]}),d=()=>o(T,{children:[o(F,{children:[e("h2",{children:"Backgrounds"}),e("p",{children:"A visualisation of how body and shade backgrounds work together."})]}),e(m,{palette:"light"}),e(m,{palette:"dark"})]}),s=()=>e(p,{as:"ul",gap:1,fontSize:"xs",children:[0,.25,.5,.75,1,1.5,2,3,4,5,6].map(a=>o(c,{as:"li",gap:1,alignItems:"center",children:[e(r,{height:"1rem",background:"bodyAlt",width:k(a)}),o(B,{fontSize:"xs",children:[a," (",k(a),")"]})]},a))});var u,h,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const palettes = (['light', 'dark'] as const);
  const boxPaletteTokens = (Object.keys(boxPalette) as (keyof typeof boxPalette)[]);
  return <Stack gap={1.5}>
            {palettes.map(palette => <Stack key={palette} gap={2} padding={1.5} palette={palette} background="body">
                    <H2>{palette}</H2>
                    <Columns as="ul" cols={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 6
      }}>
                        {boxPaletteTokens.map(token => <Card key={token} as="li" shadow>
                                <Box width="100%" height="6rem" background="body" css={{
            backgroundColor: boxPalette[token]
          }} />
                                <Box borderColor="muted" borderTop>
                                    <CardInner>
                                        <Text fontSize="xs">{token}</Text>
                                    </CardInner>
                                </Box>
                            </Card>)}
                    </Columns>
                </Stack>)}
        </Stack>;
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <>
            <Prose>
                <h2>Backgrounds</h2>
                <p>A visualisation of how body and shade backgrounds work together.</p>
            </Prose>
            <BackgroundRow palette="light" />
            <BackgroundRow palette="dark" />
        </>;
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,y,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const tokens: Spacing[] = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6];
  return <Stack as="ul" gap={1} fontSize="xs">
            {tokens.map(token => <Flex key={token} as="li" gap={1} alignItems="center">
                    <Box height="1rem" background="bodyAlt" width={mapSpacing(token)} />
                    <Text fontSize="xs">
                        {token} ({mapSpacing(token)})
                    </Text>
                </Flex>)}
        </Stack>;
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const q=["Color","Backgrounds","Space"];export{d as Backgrounds,n as Color,s as Space,q as __namedExportsOrder,E as default};
//# sourceMappingURL=tokens.stories-512e170b.js.map
