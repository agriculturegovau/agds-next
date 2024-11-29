import{j as m}from"./responsive-22d1c539.js";import{S as M}from"./Stack-e6a92433.js";import{T as w}from"./TextInput-b5049985.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./Text-03708b2d.js";import"./WebsiteIcon-da68083c.js";const U={title:"forms/TextInput",component:w,args:{label:"Example"}},e={},r={args:{required:!0}},a={args:{hideOptionalLabel:!0}},s={args:{disabled:!0,value:"Disabled value"}},o={args:{type:"email",label:"Email",message:"Enter an email address in the correct format, like name@example.com",invalid:!0}},t={args:{hint:"We will only use this to respond to your question"}},n={args:{block:!0}},i={args:{},render:z=>m(M,{background:"body",palette:"light",gap:1,children:["xs","sm","md","lg","xl"].map(c=>m(w,{...z,label:c,maxWidth:c},c))})};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,y,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled value'
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,q,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Email',
    message: 'Enter an email address in the correct format, like name@example.com',
    invalid: true
  }
}`,...(E=(q=o.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var W,I,O;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    hint: 'We will only use this to respond to your question'
  }
}`,...(O=(I=t.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var B,D,H;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var L,T,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack background="body" palette="light" gap={1}>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <TextInput key={size} {...args} label={size} maxWidth={size} />)}
        </Stack>
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const V=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Hint","Block","MaxWidths"];export{e as Basic,n as Block,s as Disabled,a as HideOptionalLabel,t as Hint,o as Invalid,i as MaxWidths,r as Required,V as __namedExportsOrder,U as default};
