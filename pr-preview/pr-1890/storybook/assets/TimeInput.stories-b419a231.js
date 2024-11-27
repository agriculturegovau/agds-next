import{j as H}from"./responsive-123a9343.js";import{r as I}from"./index-3b9dd0eb.js";import{T as f}from"./TimeInput-e25af1ff.js";import{i as R}from"./utils-63a6309c.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./WebsiteIcon-a62a72af.js";import"./TextInput-b3ca105d.js";import"./index-67ce947c.js";const y={title:"Forms/TimeInput",component:f,args:{label:"Time"}},e={render:o},r={args:{value:{value:"9:66"}},render:o},a={args:{timeFormat:"HH:mm",value:{value:"21:30"}},render:o};function o(s){const[t,g]=I.useState(s.value),T=x=>{g(x)},F=t&&!R(t.value);return H(f,{...s,invalid:F,message:"Enter a valid time",onChange:T,value:t})}var n,m,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Render
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: {
      value: '9:66'
    }
  },
  render: Render
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,l,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    timeFormat: 'HH:mm',
    value: {
      value: '21:30'
    }
  },
  render: Render
}`,...(v=(l=a.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};const z=["Basic","Invalid","DifferentTimeFormat"];export{e as Basic,a as DifferentTimeFormat,r as Invalid,z as __namedExportsOrder,y as default};
