import{j as e,a as r,b as u}from"./responsive-1d67a6a2.js";import{F as t}from"./Stack-43f3e7c4.js";import{V as x}from"./VisuallyHidden-02be915e.js";import{T as i}from"./Text-d916011d.js";import"./index-42611d8b.js";import{T as f}from"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import{I as p}from"./IndicatorDot-85b541f4.js";import"./Box-0bbf8d6d.js";import"./_commonjsHelpers-042e6b4d.js";import"./ExternalLinkCallout-f28f2061.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";const V={title:"content/IndicatorDot",component:p},n={args:{}},o=()=>e(t,{flexDirection:"column",as:"ul",children:r(t,{as:"li",borderColor:"muted",borderY:!0,css:{backgroundColor:u.systemInfoMuted},flexDirection:"column",gap:.5,justifyContent:"space-between",padding:1.5,width:"100%",children:[r(t,{justifyContent:"space-between",children:[e(i,{fontSize:"md",fontWeight:"bold",children:"Action required"}),r(t,{alignItems:"center",gap:.5,children:[e(i,{color:"muted",children:"10:15am"}),e(p,{}),e(x,{children:"Unread message"})]})]}),e(i,{fontSize:"sm",children:"Your application to register establishment X needs more information. Please provide Y by 12 June 2024 to avoid delays."}),e("div",{children:e(f,{href:"#details",children:"View details"})})]})});var a,s,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Flex flexDirection="column" as="ul">
            <Flex as="li" borderColor="muted" borderY css={{
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
                    Please provide Y by 12 June 2024 to avoid delays.
                </Text>

                <div>
                    <TextLink href="#details">View details</TextLink>
                </div>
            </Flex>
        </Flex>;
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Y=["Basic","Example"];export{n as Basic,o as Example,Y as __namedExportsOrder,V as default};
