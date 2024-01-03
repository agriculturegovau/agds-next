import{a as h,j as e}from"./responsive-1d67a6a2.js";import{r as U}from"./index-42611d8b.js";import{S as Z}from"./Stack-43f3e7c4.js";import{B as x}from"./Box-0bbf8d6d.js";import{B}from"./Button-e28534e8.js";import{B as $}from"./ButtonGroup-20aae35f.js";import{D}from"./DatePicker-bde30f85.js";import{v as ee,w as re}from"./Calendar-0f15ac31.js";import"./_commonjsHelpers-042e6b4d.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./useTernaryState-6ea40a94.js";import"./useClickOutside-f1a14f0e.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./DatePickerInput-6534a915.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./Combination-c1ec471a.js";function X(r){const[u,d]=U.useState();return e(D,{...r,value:u,onChange:d})}const Re={title:"forms/DatePicker/DatePicker",component:D,args:{label:"Example"},render:X},a={},t={args:{disabled:!0}},Y=new Date,ae=ee(Y,7),te=re(Y,7),o={args:{minDate:ae,maxDate:te}},s={args:{initialMonth:new Date(1999,11,1)}},n={args:{required:!0}},i={args:{invalid:!0,message:"Enter a valid date"}},c={args:{hint:"We will only use this to respond to your question"}},p={args:{block:!0}},m={render:r=>h(x,{children:[e(x,{height:"1000px"}),e(X,{...r}),e(x,{height:"1000px"})]})},l={render:function(u){const[d,g]=U.useState();return h(Z,{gap:4,alignItems:"flex-start",children:[e(D,{...u,value:d,onChange:g}),h($,{children:[e(B,{onClick:()=>g(new Date(1999,11,25)),children:"Set pre-defined date"}),e(B,{variant:"secondary",onClick:()=>g(void 0),children:"Clear"})]})]})}};var k,S,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,C,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,E,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    minDate: lastWeek,
    maxDate: nextWeek
  }
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var M,q,I;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    initialMonth: new Date(1999, 11, 1)
  }
}`,...(I=(q=s.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var P,V,W;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(W=(V=n.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var R,j,G;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    invalid: true,
    message: 'Enter a valid date'
  }
}`,...(G=(j=i.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,_,O;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    hint: 'We will only use this to respond to your question'
  }
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var z,A,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: props => <Box>
            <Box height="1000px"></Box>
            <ControlledDatePicker {...props} />
            <Box height="1000px"></Box>
        </Box>
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,T;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function Render(props) {
    const [value, setValue] = useState<Date>();
    return <Stack gap={4} alignItems="flex-start">
                <DatePicker {...props} value={value} onChange={setValue} />
                <ButtonGroup>
                    <Button onClick={() => setValue(new Date(1999, 11, 25))}>
                        Set pre-defined date
                    </Button>
                    <Button variant="secondary" onClick={() => setValue(undefined)}>
                        Clear
                    </Button>
                </ButtonGroup>
            </Stack>;
  }
}`,...(T=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};const je=["Basic","Disabled","MinMaxDates","InitialMonth","Required","Invalid","Hint","Block","ScrollExample","ClearableExample"];export{a as Basic,p as Block,l as ClearableExample,t as Disabled,c as Hint,s as InitialMonth,i as Invalid,o as MinMaxDates,n as Required,m as ScrollExample,je as __namedExportsOrder,Re as default};
