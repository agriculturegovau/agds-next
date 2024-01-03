import{j as m}from"./responsive-1d67a6a2.js";import{r as F}from"./index-42611d8b.js";import{S as G}from"./Stack-43f3e7c4.js";import{S as p}from"./SearchInput-00bf8c2f.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./Text-d916011d.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./mergeRefs-868b543a.js";import"./TextInput-6e29e5bf.js";const se={title:"forms/SearchInput",component:p,args:{label:"Search"}},r={args:{}},a={args:{required:!0}},s={args:{hideOptionalLabel:!0}},t={args:{disabled:!0,value:"Disabled value"}},o={args:{required:!0,message:"A search term is required to see results",invalid:!0}},n={args:{hint:"Start typing to see results"}},c={args:{block:!0}},i={args:{},render:function(d){const[e,$]=F.useState("");return m(p,{...d,value:e,onChange:$})}},u={args:{},render:function(d){return m(G,{gap:1,children:["md","lg","xl"].map(e=>m(p,{...d,label:`SearchInput max width ${e}`,maxWidth:e},e))})}};var l,g,S;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var h,b,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,f,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var q,I,R;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled value'
  }
}`,...(R=(I=t.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var O,B,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    required: true,
    message: 'A search term is required to see results',
    invalid: true
  }
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,H,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    hint: 'Start typing to see results'
  }
}`,...(L=(H=n.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,y,V;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(V=(y=c.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var j,w,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: function Render(args) {
    const [value, setValue] = useState('');
    return <SearchInput {...args} value={value} onChange={setValue} />;
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var A,E,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: function Render(args) {
    return <Stack gap={1}>
                {(['md', 'lg', 'xl'] as const).map(size => <SearchInput key={size} {...args} label={\`SearchInput max width \${size}\`} maxWidth={size} />)}
            </Stack>;
  }
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const te=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Hint","Block","Controlled","MaxWidths"];export{r as Basic,c as Block,i as Controlled,t as Disabled,s as HideOptionalLabel,n as Hint,o as Invalid,u as MaxWidths,a as Required,te as __namedExportsOrder,se as default};
