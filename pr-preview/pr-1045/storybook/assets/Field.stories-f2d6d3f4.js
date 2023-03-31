import{a as k,j as e}from"./Box-e652c7f2.js";import{F as A,u as w,b as z,c as D,d as G,a as J,e as K}from"./Field-795f8947.js";import"./index-42611d8b.js";import"./useId-9773510a.js";import"./Stack-4546232d.js";import"./Text-51e6146a.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import"./_commonjsHelpers-042e6b4d.js";const ee={title:"forms/Field",component:A},l=o=>e(A,{...o,children:t=>e("input",{...t})}),a=l.bind({});a.args={label:"Example"};const r=l.bind({});r.args={label:"Example",required:!0};const s=l.bind({});s.args={label:"Example",message:"This field is invalid",invalid:!0};const i=l.bind({});i.args={label:"Example",secondaryLabel:"(dd/mm/yyyy)"};const d=l.bind({});d.args={label:"Example",hideOptionalLabel:!0};const n=({label:o,hideOptionalLabel:t,secondaryLabel:B,hint:p,message:c,invalid:m,required:R})=>{const{fieldId:u,messageId:g,hintId:F}=w(),T=K({fieldId:u,message:c,messageId:g,hint:p,hintId:F,invalid:m});return k(J,{invalid:m,children:[e(z,{htmlFor:u,required:R,secondaryLabel:B,hideOptionalLabel:t,children:o}),p?e(D,{id:F,children:p}):null,c&&m?e(G,{id:g,children:c}):null,e("input",{...T})]})};n.args={label:"Example",hint:"Hint text",message:"Message",invalid:!0};var b,y,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Field {...args}>{a11yProps => <input {...a11yProps} />}</Field>",...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var I,L,P;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Field {...args}>{a11yProps => <input {...a11yProps} />}</Field>",...(P=(L=r.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var x,f,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Field {...args}>{a11yProps => <input {...a11yProps} />}</Field>",...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,E,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Field {...args}>{a11yProps => <input {...a11yProps} />}</Field>",...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var q,H,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:"args => <Field {...args}>{a11yProps => <input {...a11yProps} />}</Field>",...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var j,C,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`({
  label,
  hideOptionalLabel,
  secondaryLabel,
  hint,
  message,
  invalid,
  required
}) => {
  const {
    fieldId,
    messageId,
    hintId
  } = useFieldIds();
  const a11yProps = useFieldA11yProps({
    fieldId,
    message,
    messageId,
    hint,
    hintId,
    invalid
  });
  return <FieldContainer invalid={invalid}>
            <FieldLabel htmlFor={fieldId} required={required} secondaryLabel={secondaryLabel} hideOptionalLabel={hideOptionalLabel}>
                {label}
            </FieldLabel>
            {hint ? <FieldHint id={hintId}>{hint}</FieldHint> : null}
            {message && invalid ? <FieldMessage id={messageId}>{message}</FieldMessage> : null}
            <input {...a11yProps} />
        </FieldContainer>;
}`,...(_=(C=n.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const ae=["Basic","Required","Invalid","SecondaryLabel","HideOptionalLabel","Modular"];export{a as Basic,d as HideOptionalLabel,s as Invalid,n as Modular,r as Required,i as SecondaryLabel,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Field.stories-f2d6d3f4.js.map
