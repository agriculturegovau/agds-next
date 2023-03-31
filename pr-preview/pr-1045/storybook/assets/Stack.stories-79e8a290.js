import{a,j as t,B as e}from"./Box-e652c7f2.js";import{r as p}from"./index-42611d8b.js";import{S as i,F as k}from"./Stack-4546232d.js";import"./_commonjsHelpers-042e6b4d.js";const A={title:"foundations/Stack",component:i},m=g=>t(i,{...g}),n=m.bind({});n.args={children:a(p.Fragment,{children:[t(e,{display:"block",height:40,background:"shadeAlt"}),t(e,{display:"block",height:80,background:"shadeAlt"}),t(e,{display:"block",height:30,background:"shadeAlt"}),t(e,{display:"block",height:60,background:"shadeAlt"})]}),border:!0,padding:6,gap:6,palette:"light"};n.story={parameters:{docs:{storyDescription:"`Stack` is a convenience wrapper around the `Box` component. It applies some default flex styling and should be used for vertical layouts which require consistent spacing."}}};const d=()=>a(k,{gap:6,justifyContent:"space-between",children:[a(i,{gap:2,alignItems:"center",children:[t(e,{fontFamily:"monospace",children:"center"}),a(i,{gap:6,alignItems:"center",border:!0,children:[t(e,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]}),a(i,{gap:2,alignItems:"center",children:[t(e,{fontFamily:"monospace",children:"flex-start"}),a(i,{gap:6,alignItems:"flex-start",border:!0,children:[t(e,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]}),a(i,{gap:2,alignItems:"center",children:[t(e,{fontFamily:"monospace",children:"flex-end"}),a(i,{gap:6,alignItems:"flex-end",border:!0,children:[t(e,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]}),a(i,{gap:2,alignItems:"center",children:[t(e,{fontFamily:"monospace",children:"stretch"}),a(i,{gap:6,alignItems:"stretch",border:!0,children:[t(e,{display:"block",height:100,minWidth:40,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:60,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:100,background:"shadeAlt"}),t(e,{display:"block",height:100,minWidth:80,background:"shadeAlt"})]})]})]});d.story={parameters:{docs:{storyDescription:"Use `alignItems` to set the horizontal alignment of children."}}};var o,l,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Stack {...args} />",...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,h,r;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Flex gap={6} justifyContent="space-between">
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
    </Flex>`,...(r=(h=d.parameters)==null?void 0:h.docs)==null?void 0:r.source}}};const W=["Basic","Alignment"];export{d as Alignment,n as Basic,W as __namedExportsOrder,A as default};
//# sourceMappingURL=Stack.stories-79e8a290.js.map
