import{j as d}from"./responsive-123a9343.js";import{S as M}from"./Stack-938d29d6.js";import{T as E}from"./Textarea-75016d9a.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./Text-ade3e1ab.js";import"./WebsiteIcon-a62a72af.js";import"./TextInput-b3ca105d.js";const V={title:"forms/Textarea",component:E,args:{label:"Example"}},e={},r={args:{required:!0}},a={args:{hideOptionalLabel:!0}},s={args:{disabled:!0,value:"Disabled value"}},o={args:{message:"The message you have entered is invalid",value:"1e039ur4urf",invalid:!0}},t={args:{hint:"We will only use this to respond to your question"}},i={args:{block:!0}},n={args:{},render:I=>d(M,{background:"body",palette:"light",gap:1,children:["md","lg","xl"].map(c=>d(E,{...I,label:c,maxWidth:c},c))})};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,k,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled value'
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,q,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    message: 'The message you have entered is invalid',
    value: '1e039ur4urf',
    invalid: true
  }
}`,...(T=(q=o.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var W,O,B;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    hint: 'We will only use this to respond to your question'
  }
}`,...(B=(O=t.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var D,H,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(L=(H=i.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var j,w,z;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: args => <Stack background="body" palette="light" gap={1}>
            {(['md', 'lg', 'xl'] as const).map(size => <Textarea key={size} {...args} label={size} maxWidth={size} />)}
        </Stack>
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const X=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Hint","Block","MaxWidths"];export{e as Basic,i as Block,s as Disabled,a as HideOptionalLabel,t as Hint,o as Invalid,n as MaxWidths,r as Required,X as __namedExportsOrder,V as default};
