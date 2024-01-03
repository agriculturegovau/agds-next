import{j as e,a as r}from"./responsive-1d67a6a2.js";import{S as W}from"./Stack-43f3e7c4.js";import{T as t}from"./TextInput-6e29e5bf.js";import{F as n}from"./FormStack-d8315e9d.js";import{H as C}from"./Heading-1a35fe7d.js";import{T as q}from"./Text-d916011d.js";import{F as l,d as g,c as F,a as S}from"./Fieldset-e6e2e6ca.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";const D={title:"forms/Fieldset",component:l},o={args:{legend:"What is your address?",hint:"We will only use this to respond to your requests"},render:s=>e(l,{...s,children:r(n,{children:[e(t,{label:"Street and number",required:!0,autoComplete:"street-address",maxWidth:"xl"}),e(t,{label:"Suburb",required:!0,autoComplete:"address-level2",maxWidth:"xl"}),e(t,{label:"Country",required:!0,autoComplete:"country",maxWidth:"xl"}),e(t,{label:"Postcode",required:!0,autoComplete:"postal-code",maxWidth:"sm"})]})})},a={args:{legend:e(C,{children:"What is your date of birth?"}),hint:e(q,{fontSize:"md",color:"muted",children:"We will only use this to respond to your requests"})},render:s=>e(l,{...s,children:r(n,{children:[e(t,{label:"Day",inputMode:"numeric",maxWidth:"md",required:!0,autoComplete:"bday-day"}),e(t,{label:"Month",inputMode:"numeric",maxWidth:"md",required:!0,autoComplete:"bday-month"}),e(t,{label:"Year",inputMode:"numeric",maxWidth:"md",required:!0,autoComplete:"bday-year"})]})})},d=()=>r(S,{children:[r(W,{gap:.75,children:[e(g,{children:"What is your address?"}),e(F,{children:"We will only use this to respond to your requests"})]}),r(n,{children:[e(t,{label:"Street and number",required:!0,autoComplete:"street-address",maxWidth:"xl"}),e(t,{label:"Suburb",required:!0,autoComplete:"address-level2",maxWidth:"xl"}),e(t,{label:"Country",required:!0,autoComplete:"country",maxWidth:"xl"}),e(t,{label:"Postcode",required:!0,autoComplete:"postal-code",maxWidth:"sm"})]})]});var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,c,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var x,b,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => <FieldsetContainer>
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
    </FieldsetContainer>`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const Y=["Basic","LegendAsPageHeading","Modular"];export{o as Basic,a as LegendAsPageHeading,d as Modular,Y as __namedExportsOrder,D as default};
