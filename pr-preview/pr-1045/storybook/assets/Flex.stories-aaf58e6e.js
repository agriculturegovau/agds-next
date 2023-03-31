import{a,j as e,B as t}from"./Box-3d8e40b9.js";import{r as m}from"./index-42611d8b.js";import{F as i,S as p}from"./Stack-88a94cf9.js";import"./_commonjsHelpers-042e6b4d.js";const w={title:"foundations/Flex",component:i},b=g=>e(i,{...g}),d=b.bind({});d.args={children:a(m.Fragment,{children:[e(t,{display:"block",width:100,height:100,background:"shadeAlt"}),e(t,{display:"block",width:100,height:100,background:"shadeAlt"}),e(t,{display:"block",width:100,height:100,background:"shadeAlt"}),e(t,{display:"block",width:100,height:100,background:"shadeAlt"})]}),border:!0,padding:6,gap:6,palette:"light"};d.story={parameters:{docs:{storyDescription:"`Flex` convenience wrapper around the `Box` component. It applies some default flex styling and should be used for horizontal layouts which require consistent spacing."}}};const o=()=>a(p,{gap:6,alignItems:"flex-start",children:[e(t,{fontFamily:"monospace",children:"center"}),a(i,{gap:6,alignItems:"center",border:!0,children:[e(t,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]}),e(t,{fontFamily:"monospace",children:"flex-start"}),a(i,{gap:6,alignItems:"flex-start",border:!0,children:[e(t,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]}),e(t,{fontFamily:"monospace",children:"flex-end"}),a(i,{gap:6,alignItems:"flex-end",border:!0,children:[e(t,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]}),e(t,{fontFamily:"monospace",children:"stretch"}),a(i,{gap:6,alignItems:"stretch",border:!0,children:[e(t,{display:"block",width:100,minHeight:40,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:60,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:100,background:"shadeAlt"}),e(t,{display:"block",width:100,minHeight:80,background:"shadeAlt"})]})]});o.story={parameters:{docs:{storyDescription:"Use `alignItems` to set the vertical alignment of children."}}};var l,n,s;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Flex {...args} />",...(s=(n=d.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var r,c,h;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Stack gap={6} alignItems="flex-start">
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
    </Stack>`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const A=["Basic","Alignment"];export{o as Alignment,d as Basic,A as __namedExportsOrder,w as default};
//# sourceMappingURL=Flex.stories-aaf58e6e.js.map
