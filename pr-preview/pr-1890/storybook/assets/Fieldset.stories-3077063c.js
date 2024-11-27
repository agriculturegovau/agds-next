import{j as e,a as o}from"./responsive-123a9343.js";import{S as W}from"./Stack-938d29d6.js";import{T as t}from"./TextInput-b3ca105d.js";import{F as l}from"./FormStack-e2872dc8.js";import{H as C}from"./Heading-53d486d1.js";import{T as q}from"./Text-ade3e1ab.js";import{F as i,a as g,b as F,c as S}from"./Fieldset-4b9b7043.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./WebsiteIcon-a62a72af.js";const B={title:"forms/Fieldset",component:i},a={args:{legend:"What is your address?",hint:"We will only use this to respond to your requests"},render:s=>e(i,{...s,children:o(l,{children:[e(t,{label:"Street and number",required:!0,autoComplete:"street-address",maxWidth:"xl"}),e(t,{label:"Suburb",required:!0,autoComplete:"address-level2",maxWidth:"xl"}),e(t,{label:"Country",required:!0,autoComplete:"country",maxWidth:"xl"}),e(t,{label:"Postcode",required:!0,autoComplete:"postal-code",maxWidth:"sm"})]})})},d={args:{legend:e(C,{children:"What is your date of birth?"}),hint:e(q,{fontSize:"md",color:"muted",children:"We will only use this to respond to your requests"})},render:s=>e(i,{...s,children:o(l,{children:[e(t,{label:"Day",inputMode:"numeric",maxWidth:"md",required:!0,autoComplete:"bday-day"}),e(t,{label:"Month",inputMode:"numeric",maxWidth:"md",required:!0,autoComplete:"bday-month"}),e(t,{label:"Year",inputMode:"numeric",maxWidth:"md",required:!0,autoComplete:"bday-year"})]})})},r=()=>o(S,{children:[o(W,{gap:.75,children:[e(g,{children:"What is your address?"}),e(F,{children:"We will only use this to respond to your requests"})]}),o(l,{children:[e(t,{label:"Street and number",required:!0,autoComplete:"street-address",maxWidth:"xl"}),e(t,{label:"Suburb",required:!0,autoComplete:"address-level2",maxWidth:"xl"}),e(t,{label:"Country",required:!0,autoComplete:"country",maxWidth:"xl"}),e(t,{label:"Postcode",required:!0,autoComplete:"postal-code",maxWidth:"sm"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Modular"};var n,u,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    legend: 'What is your address?',
    hint: 'We will only use this to respond to your requests'
  },
  render: args => <Fieldset {...args}>
            <FormStack>
                <TextInput label="Street and number" required autoComplete="street-address" maxWidth="xl" />
                <TextInput label="Suburb" required autoComplete="address-level2" maxWidth="xl" />
                <TextInput label="Country" required autoComplete="country" maxWidth="xl" />
                <TextInput label="Postcode" required autoComplete="postal-code" maxWidth="sm" />
            </FormStack>
        </Fieldset>
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,c,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    legend: <H1>What is your date of birth?</H1>,
    hint: <Text fontSize="md" color="muted">
                We will only use this to respond to your requests
            </Text>
  },
  render: args => <Fieldset {...args}>
            <FormStack>
                <TextInput label="Day" inputMode="numeric" maxWidth="md" required autoComplete="bday-day" />
                <TextInput label="Month" inputMode="numeric" maxWidth="md" required autoComplete="bday-month" />
                <TextInput label="Year" inputMode="numeric" maxWidth="md" required autoComplete="bday-year" />
            </FormStack>
        </Fieldset>
}`,...(h=(c=d.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var x,b,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => <FieldsetContainer>
        <Stack gap={0.75}>
            <FieldsetLegend>What is your address?</FieldsetLegend>
            <FieldsetHint>
                We will only use this to respond to your requests
            </FieldsetHint>
        </Stack>
        <FormStack>
            <TextInput label="Street and number" required autoComplete="street-address" maxWidth="xl" />
            <TextInput label="Suburb" required autoComplete="address-level2" maxWidth="xl" />
            <TextInput label="Country" required autoComplete="country" maxWidth="xl" />
            <TextInput label="Postcode" required autoComplete="postal-code" maxWidth="sm" />
        </FormStack>
    </FieldsetContainer>`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const D=["Basic","LegendAsPageHeading","Modular"];export{a as Basic,d as LegendAsPageHeading,r as Modular,D as __namedExportsOrder,B as default};
