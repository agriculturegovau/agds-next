import{j as H}from"./responsive-22d1c539.js";import{r as I}from"./index-f0f3a68d.js";import{T as f}from"./TimeInput-31e85c1b.js";import{i as R}from"./utils-63a6309c.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Text-03708b2d.js";import"./WebsiteIcon-da68083c.js";import"./TextInput-b5049985.js";import"./index-67ce947c.js";const y={title:"Forms/TimeInput",component:f,args:{label:"Time"}},e={render:o},r={args:{value:{value:"9:66"}},render:o},a={args:{timeFormat:"HH:mm",value:{value:"21:30"}},render:o};function o(s){const[t,g]=I.useState(s.value),T=x=>{g(x)},F=t&&!R(t.value);return H(f,{...s,invalid:F,message:"Enter a valid time",onChange:T,value:t})}var n,m,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
