import{a as e,j as a}from"./responsive-1d67a6a2.js";import{S as n,F as k}from"./Stack-43f3e7c4.js";import{B as t}from"./Box-0bbf8d6d.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";const x={title:"foundations/Stack",component:n},i={args:{padding:6,gap:6,border:!0},render:g=>e(n,{...g,children:[a(t,{display:"block",height:40,background:"shadeAlt"}),a(t,{display:"block",height:80,background:"shadeAlt"}),a(t,{display:"block",height:30,background:"shadeAlt"}),a(t,{display:"block",height:60,background:"shadeAlt"})]})},d=()=>e(k,{gap:6,justifyContent:"space-between",children:[e(n,{gap:2,alignItems:"center",children:[a(t,{fontFamily:"monospace",children:"center"}),e(n,{gap:6,alignItems:"center",border:!0,children:[a(t,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]}),e(n,{gap:2,alignItems:"center",children:[a(t,{fontFamily:"monospace",children:"flex-start"}),e(n,{gap:6,alignItems:"flex-start",border:!0,children:[a(t,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]}),e(n,{gap:2,alignItems:"center",children:[a(t,{fontFamily:"monospace",children:"flex-end"}),e(n,{gap:6,alignItems:"flex-end",border:!0,children:[a(t,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]}),e(n,{gap:2,alignItems:"center",children:[a(t,{fontFamily:"monospace",children:"stretch"}),e(n,{gap:6,alignItems:"stretch",border:!0,children:[a(t,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),a(t,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]})]});var o,l,h;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    padding: 6,
    gap: 6,
    border: true
  },
  render: props => <Stack {...props}>
            <Box display="block" height={40} background="shadeAlt" />
            <Box display="block" height={80} background="shadeAlt" />
            <Box display="block" height={30} background="shadeAlt" />
            <Box display="block" height={60} background="shadeAlt" />
        </Stack>
}`,...(h=(l=i.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var c,s,r;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Flex gap={6} justifyContent="space-between">
        <Stack gap={2} alignItems="center">
            <Box fontFamily="monospace">center</Box>
            <Stack gap={6} alignItems="center" border>
                <Box display="block" height={100} minWidth={40} background="shadeAlt" />
                <Box display="block" height={100} minWidth={60} background="shadeAlt" />
                <Box display="block" height={100} minWidth={100} background="shadeAlt" />
                <Box display="block" height={100} minWidth={80} background="shadeAlt" />
            </Stack>
        </Stack>
        <Stack gap={2} alignItems="center">
            <Box fontFamily="monospace">flex-start</Box>
            <Stack gap={6} alignItems="flex-start" border>
                <Box display="block" height={100} minWidth={40} background="shadeAlt" />
                <Box display="block" height={100} minWidth={60} background="shadeAlt" />
                <Box display="block" height={100} minWidth={100} background="shadeAlt" />
                <Box display="block" height={100} minWidth={80} background="shadeAlt" />
            </Stack>
        </Stack>
        <Stack gap={2} alignItems="center">
            <Box fontFamily="monospace">flex-end</Box>
            <Stack gap={6} alignItems="flex-end" border>
                <Box display="block" height={100} minWidth={40} background="shadeAlt" />
                <Box display="block" height={100} minWidth={60} background="shadeAlt" />
                <Box display="block" height={100} minWidth={100} background="shadeAlt" />
                <Box display="block" height={100} minWidth={80} background="shadeAlt" />
            </Stack>
        </Stack>
        <Stack gap={2} alignItems="center">
            <Box fontFamily="monospace">stretch</Box>
            <Stack gap={6} alignItems="stretch" border>
                <Box display="block" height={100} minWidth={40} background="shadeAlt" />
                <Box display="block" height={100} minWidth={60} background="shadeAlt" />
                <Box display="block" height={100} minWidth={100} background="shadeAlt" />
                <Box display="block" height={100} minWidth={80} background="shadeAlt" />
            </Stack>
        </Stack>
    </Flex>`,...(r=(s=d.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const A=["Basic","Alignment"];export{d as Alignment,i as Basic,A as __namedExportsOrder,x as default};
