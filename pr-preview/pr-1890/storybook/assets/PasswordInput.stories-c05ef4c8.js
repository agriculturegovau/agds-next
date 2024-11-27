import{j as c}from"./responsive-123a9343.js";import{S as M}from"./Stack-938d29d6.js";import{P as j}from"./PasswordInput-5ad0446a.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./useId-1d8fde67.js";import"./useToggleState-9cfccda3.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./Text-ade3e1ab.js";import"./WebsiteIcon-a62a72af.js";import"./Checkbox-e7edf2bf.js";import"./mergeRefs-868b543a.js";import"./ControlGroupProvider-93e131c1.js";import"./ExternalLinkCallout-dac509ef.js";const rr={title:"forms/PasswordInput",component:j},r={args:{label:"Password"}},a={args:{label:"Password",required:!0}},s={args:{label:"Password",hideOptionalLabel:!0}},e={args:{label:"Password",disabled:!0,value:"Disabled"}},o={args:{label:"Password",message:"Enter your password",invalid:!0,required:!0}},t={args:{label:"Password",hint:"Password should be at least 8 characters"}},n={args:{block:!0,label:"Password"}},d={args:{},render:z=>c(M,{gap:1,children:["md","lg","xl"].map(l=>c(j,{...z,label:l,maxWidth:l},l))})};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Password'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    required: true
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,P,h;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    hideOptionalLabel: true
  }
}`,...(h=(P=s.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var S,x,k;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    disabled: true,
    value: 'Disabled'
  }
}`,...(k=(x=e.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var q,v,f;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    message: 'Enter your password',
    invalid: true,
    required: true
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,O,B;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    hint: 'Password should be at least 8 characters'
  }
}`,...(B=(O=t.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var D,H,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    block: true,
    label: 'Password'
  }
}`,...(L=(H=n.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,y,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack gap={1}>
            {(['md', 'lg', 'xl'] as const).map(size => <PasswordInput key={size} {...args} label={size} maxWidth={size} />)}
        </Stack>
}`,...(E=(y=d.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const ar=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Hint","Block","MaxWidths"];export{r as Basic,n as Block,e as Disabled,s as HideOptionalLabel,t as Hint,o as Invalid,d as MaxWidths,a as Required,ar as __namedExportsOrder,rr as default};
