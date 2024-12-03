import{a as ae,j as g}from"./responsive-22d1c539.js";import{r as re}from"./index-f0f3a68d.js";import{S as oe}from"./Stack-e6a92433.js";import{S as m}from"./Select-65b744a2.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Box-cc8e6f8e.js";import"./Field-ef82e19c.js";import"./useId-bf1c3739.js";import"./Text-03708b2d.js";import"./WebsiteIcon-03a55100.js";const ge={title:"forms/Select",component:m,args:{label:"Example",placeholder:"Please select",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]}},a={args:{}},r={args:{placeholder:"Choose an option"}},o={args:{required:!0}},s={args:{hideOptionalLabel:!0}},l={args:{disabled:!0}},n={args:{options:[{value:"a",label:"Option A"},{value:"b",label:"Option B",disabled:!0},{value:"c",label:"Option C"}]}},t={args:{invalid:!0,required:!0,message:"This select is invalid"}},i={args:{label:"Example",hint:"Lorem ipsum dolar"}},p={args:{block:!0}},c={args:{block:!0},render:function(b){return ae(oe,{gap:1,children:[g(m,{maxWidth:"sm",label:"Items per page (sm)",hideOptionalLabel:!0,options:[{value:"10",label:"10"},{value:"25",label:"25"},{value:"50",label:"50"},{value:"100",label:"100"}]}),["md","lg","xl"].map(e=>g(m,{...b,label:`What option? (${e})`,maxWidth:e},e))]})}},u={args:{block:!0},render:function(b){const[e,Z]=re.useState();return g(m,{...b,label:"Controlled",value:e,onChange:ee=>Z(ee.target.value)})}},d={args:{options:[{label:"Group A",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]},{label:"Group B",options:[{value:"d",label:"Option D"},{value:"e",label:"Option E"},{value:"f",label:"Option F"}]}]}};var v,O,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(h=(O=a.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var S,x,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose an option'
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,k,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(B=(k=o.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var L,W,A;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  }
}`,...(A=(W=s.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var E,q,D;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var G,R,H;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'a',
      label: 'Option A'
    }, {
      value: 'b',
      label: 'Option B',
      disabled: true
    }, {
      value: 'c',
      label: 'Option C'
    }]
  }
}`,...(H=(R=n.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var I,j,P;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    invalid: true,
    required: true,
    message: 'This select is invalid'
  }
}`,...(P=(j=t.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var V,z,F;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    hint: 'Lorem ipsum dolar'
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var M,T,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,y,w;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    block: true
  },
  render: function Render(args) {
    return <Stack gap={1}>
                <Select maxWidth="sm" label="Items per page (sm)" hideOptionalLabel={true} options={[{
        value: '10',
        label: '10'
      }, {
        value: '25',
        label: '25'
      }, {
        value: '50',
        label: '50'
      }, {
        value: '100',
        label: '100'
      }]} />
                {(['md', 'lg', 'xl'] as const).map(size => <Select key={size} {...args} label={\`What option? (\${size})\`} maxWidth={size} />)}
            </Stack>;
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var J,K,N;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    block: true
  },
  render: function Render(args) {
    const [value, setValue] = useState<string>();
    return <Select {...args} label="Controlled" value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(N=(K=u.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Group A',
      options: [{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }]
    }, {
      label: 'Group B',
      options: [{
        value: 'd',
        label: 'Option D'
      }, {
        value: 'e',
        label: 'Option E'
      }, {
        value: 'f',
        label: 'Option F'
      }]
    }]
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ve=["Basic","Placeholder","Required","HideOptionalLabel","Disabled","DisabledOption","Invalid","Hint","Block","MaxWidths","Controlled","GroupedOptions"];export{a as Basic,p as Block,u as Controlled,l as Disabled,n as DisabledOption,d as GroupedOptions,s as HideOptionalLabel,i as Hint,t as Invalid,c as MaxWidths,r as Placeholder,o as Required,ve as __namedExportsOrder,ge as default};
