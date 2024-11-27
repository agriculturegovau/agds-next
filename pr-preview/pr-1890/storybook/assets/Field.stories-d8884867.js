import{j as e,a as k}from"./responsive-123a9343.js";import{F as b,u as w,b as z,c as D,d as G,a as J,e as K}from"./Field-b78d080b.js";import"./index-3b9dd0eb.js";import"./jsx-runtime-a3291550.js";import"./useId-1d8fde67.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./WebsiteIcon-a62a72af.js";import"./_commonjsHelpers-de833af9.js";const ae={title:"forms/Field",component:b,render:c=>e(b,{...c,children:d=>e("input",{...d})})},a={args:{label:"Example"}},r={args:{label:"Example",required:!0}},n={args:{label:"Example",message:"This field is invalid",invalid:!0}},s={args:{label:"Example",secondaryLabel:"(dd/mm/yyyy)"}},i={args:{label:"Example",hideOptionalLabel:!0}},l={args:{label:"Example",hint:"Hint text",message:"Message",invalid:!0},render:function({label:d,hideOptionalLabel:A,secondaryLabel:B,hint:o,message:t,invalid:m,required:T}){const{fieldId:p,messageId:u,hintId:g}=w(),_=K({fieldId:p,message:t,messageId:u,hint:o,hintId:g,invalid:m});return k(J,{invalid:m,children:[e(z,{htmlFor:p,required:T,secondaryLabel:B,hideOptionalLabel:A,children:d}),o?e(D,{id:g,children:o}):null,t&&m?e(G,{id:u,children:t}):null,e("input",{..._})]})}};var h,F,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Example'
  }
}`,...(y=(F=a.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var x,L,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    required: true
  }
}`,...(I=(L=r.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var E,f,v;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    message: 'This field is invalid',
    invalid: true
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var O,S,q;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    secondaryLabel: '(dd/mm/yyyy)'
  }
}`,...(q=(S=s.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var H,M,P;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    hideOptionalLabel: true
  }
}`,...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,j,C;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    hint: 'Hint text',
    message: 'Message',
    invalid: true
  },
  render: function Render({
    label,
    hideOptionalLabel,
    secondaryLabel,
    hint,
    message,
    invalid,
    required
  }) {
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
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const re=["Basic","Required","Invalid","SecondaryLabel","HideOptionalLabel","Modular"];export{a as Basic,i as HideOptionalLabel,n as Invalid,l as Modular,r as Required,s as SecondaryLabel,re as __namedExportsOrder,ae as default};
