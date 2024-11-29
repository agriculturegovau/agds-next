import{j as e,a as r,d as u}from"./responsive-22d1c539.js";import{F as n}from"./Stack-e6a92433.js";import{V as x}from"./ExternalLinkCallout-896682bb.js";import{T as i}from"./Text-03708b2d.js";import"./index-f0f3a68d.js";import{T as f}from"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";import{I as p}from"./IndicatorDot-72a667d4.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./_commonjsHelpers-23102255.js";import"./WebsiteIcon-da68083c.js";const S={title:"content/IndicatorDot",component:p},o={args:{}},t=()=>e(n,{flexDirection:"column",as:"ul",children:r(n,{as:"li",borderColor:"muted",borderY:!0,css:{backgroundColor:u.systemInfoMuted},flexDirection:"column",gap:.5,justifyContent:"space-between",padding:1.5,width:"100%",children:[r(n,{justifyContent:"space-between",children:[e(i,{fontSize:"md",fontWeight:"bold",children:"Action required"}),r(n,{alignItems:"center",gap:.5,children:[e(i,{color:"muted",children:"10:15am"}),e(p,{}),e(x,{children:"Unread message"})]})]}),e(i,{fontSize:"sm",children:"Your application to register establishment X needs more information. Please provide Y by 12 June 2024 to avoid delays."}),e("div",{children:e(f,{href:"#details",children:"View details"})})]})});t.__docgenInfo={description:"",methods:[],displayName:"Example"};var a,s,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const V=["Basic","Example"];export{o as Basic,t as Example,V as __namedExportsOrder,S as default};
