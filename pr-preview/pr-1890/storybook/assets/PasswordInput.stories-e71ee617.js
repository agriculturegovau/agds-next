import{j as c}from"./responsive-22d1c539.js";import{S as M}from"./Stack-e6a92433.js";import{P as j}from"./PasswordInput-6e0e7136.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./useId-bf1c3739.js";import"./useToggleState-e0319b87.js";import"./TextInput-b5049985.js";import"./Field-d96b22a3.js";import"./Text-03708b2d.js";import"./WebsiteIcon-da68083c.js";import"./Checkbox-cfff4252.js";import"./mergeRefs-868b543a.js";import"./ControlGroupProvider-afbdf4c1.js";import"./ExternalLinkCallout-896682bb.js";const rr={title:"forms/PasswordInput",component:j},r={args:{label:"Password"}},a={args:{label:"Password",required:!0}},s={args:{label:"Password",hideOptionalLabel:!0}},e={args:{label:"Password",disabled:!0,value:"Disabled"}},o={args:{label:"Password",message:"Enter your password",invalid:!0,required:!0}},t={args:{label:"Password",hint:"Password should be at least 8 characters"}},n={args:{block:!0,label:"Password"}},d={args:{},render:z=>c(M,{gap:1,children:["md","lg","xl"].map(l=>c(j,{...z,label:l,maxWidth:l},l))})};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
