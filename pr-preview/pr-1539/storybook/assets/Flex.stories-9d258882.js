import{a as t,j as a}from"./responsive-1d67a6a2.js";import{F as e,S as b}from"./Stack-43f3e7c4.js";import{B as d}from"./Box-0bbf8d6d.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"foundations/Flex",component:e},i={args:{padding:6,gap:6,border:!0},render:g=>t(e,{...g,children:[a(d,{display:"block",width:100,height:100,background:"shadeAlt"}),a(d,{display:"block",width:100,height:100,background:"shadeAlt"}),a(d,{display:"block",width:100,height:100,background:"shadeAlt"}),a(d,{display:"block",width:100,height:100,background:"shadeAlt"})]})},o=()=>t(b,{gap:6,alignItems:"flex-start",children:[a(d,{fontFamily:"monospace",children:"center"}),t(e,{gap:6,alignItems:"center",border:!0,children:[a(d,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]}),a(d,{fontFamily:"monospace",children:"flex-start"}),t(e,{gap:6,alignItems:"flex-start",border:!0,children:[a(d,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]}),a(d,{fontFamily:"monospace",children:"flex-end"}),t(e,{gap:6,alignItems:"flex-end",border:!0,children:[a(d,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]}),a(d,{fontFamily:"monospace",children:"stretch"}),t(e,{gap:6,alignItems:"stretch",border:!0,children:[a(d,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),a(d,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]})]});var l,n,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    padding: 6,
    gap: 6,
    border: true
  },
  render: props => <Flex {...props}>
            <Box display="block" width={100} height={100} background="shadeAlt" />
            <Box display="block" width={100} height={100} background="shadeAlt" />
            <Box display="block" width={100} height={100} background="shadeAlt" />
            <Box display="block" width={100} height={100} background="shadeAlt" />
        </Flex>
}`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var h,r,c;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Stack gap={6} alignItems="flex-start">
        <Box fontFamily="monospace">center</Box>
        <Flex gap={6} alignItems="center" border>
            <Box display="block" width={100} minHeight={40} background="shadeAlt" />
            <Box display="block" width={100} minHeight={60} background="shadeAlt" />
            <Box display="block" width={100} minHeight={100} background="shadeAlt" />
            <Box display="block" width={100} minHeight={80} background="shadeAlt" />
        </Flex>
        <Box fontFamily="monospace">flex-start</Box>
        <Flex gap={6} alignItems="flex-start" border>
            <Box display="block" width={100} minHeight={40} background="shadeAlt" />
            <Box display="block" width={100} minHeight={60} background="shadeAlt" />
            <Box display="block" width={100} minHeight={100} background="shadeAlt" />
            <Box display="block" width={100} minHeight={80} background="shadeAlt" />
        </Flex>
        <Box fontFamily="monospace">flex-end</Box>
        <Flex gap={6} alignItems="flex-end" border>
            <Box display="block" width={100} minHeight={40} background="shadeAlt" />
            <Box display="block" width={100} minHeight={60} background="shadeAlt" />
            <Box display="block" width={100} minHeight={100} background="shadeAlt" />
            <Box display="block" width={100} minHeight={80} background="shadeAlt" />
        </Flex>
        <Box fontFamily="monospace">stretch</Box>
        <Flex gap={6} alignItems="stretch" border>
            <Box display="block" width={100} minHeight={40} background="shadeAlt" />
            <Box display="block" width={100} minHeight={60} background="shadeAlt" />
            <Box display="block" width={100} minHeight={100} background="shadeAlt" />
            <Box display="block" width={100} minHeight={80} background="shadeAlt" />
        </Flex>
    </Stack>`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const A=["Basic","Alignment"];export{o as Alignment,i as Basic,A as __namedExportsOrder,y as default};
