import{j as e,a as r,b as x}from"./Box-e652c7f2.js";import{F as t}from"./Stack-4546232d.js";import{V as f}from"./VisuallyHidden-315ab967.js";import{T as i}from"./Text-51e6146a.js";import"./index-42611d8b.js";import{T as g}from"./TextLink-99cf0354.js";import"./TextLinkExternal-ed8d4b34.js";import{I as a}from"./IndicatorDot-fae4eb3f.js";import"./_commonjsHelpers-042e6b4d.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";const S={title:"content/Badge/IndicatorDot",component:a},n=u=>e(a,{...u}),o=()=>e(t,{flexDirection:"column",as:"ul",children:r(t,{as:"li","aria-selected":"false",borderColor:"muted",borderY:!0,css:{backgroundColor:x.systemInfoMuted},flexDirection:"column",gap:.5,justifyContent:"space-between",padding:1.5,width:"100%",children:[r(t,{justifyContent:"space-between",children:[e(i,{fontSize:"md",fontWeight:"bold",children:"Action required"}),r(t,{alignItems:"center",gap:.5,children:[e(i,{color:"muted",children:"10:15am"}),e(a,{}),e(f,{children:"Unread message"})]})]}),e(i,{fontSize:"sm",children:"Your application to register establishment X needs more information. Please provide Y by 12 June 2022 to avoid delays."}),e("div",{children:e(g,{href:"#details",children:"View details"})})]})});var s,d,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"args => <IndicatorDot {...args} />",...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Flex flexDirection="column" as="ul">
            <Flex as="li" aria-selected="false" borderColor="muted" borderY css={{
      backgroundColor: boxPalette.systemInfoMuted
    }} flexDirection="column" gap={0.5} justifyContent="space-between" padding={1.5} width="100%">
                <Flex justifyContent="space-between">
                    <Text fontSize="md" fontWeight="bold">
                        Action required
                    </Text>

                    <Flex alignItems="center" gap={0.5}>
                        <Text color="muted">10:15am</Text>
                        <IndicatorDot />
                        <VisuallyHidden>Unread message</VisuallyHidden>
                    </Flex>
                </Flex>

                <Text fontSize="sm">
                    Your application to register establishment X needs more information.
                    Please provide Y by 12 June 2022 to avoid delays.
                </Text>

                <div>
                    <TextLink href="#details">View details</TextLink>
                </div>
            </Flex>
        </Flex>;
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const V=["Basic","Example"];export{n as Basic,o as Example,V as __namedExportsOrder,S as default};
//# sourceMappingURL=IndicatorDot.stories-e2db1831.js.map
