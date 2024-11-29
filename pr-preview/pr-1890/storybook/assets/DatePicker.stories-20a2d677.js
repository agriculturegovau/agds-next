import{a as M,j as e}from"./responsive-22d1c539.js";import{r as te}from"./index-f0f3a68d.js";import{S as ne}from"./Stack-e6a92433.js";import{B as D}from"./Box-cc8e6f8e.js";import{B as S}from"./Button-1a082b6d.js";import{B as ie}from"./ButtonGroup-5c583b5f.js";import{D as h}from"./DatePicker-8a824998.js";import{s as ce,h as me}from"./Calendar-82a8aa21.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./Text-03708b2d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./useTernaryState-ed86673f.js";import"./useClickOutside-ca5d6845.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./DatePickerInput-77442637.js";import"./WebsiteIcon-da68083c.js";import"./TextInput-b5049985.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./Combination-2983c2b6.js";import"./index-67ce947c.js";function oe(r){const[g,y]=te.useState();return e(h,{...r,value:g,onChange:y})}const Je={title:"forms/DatePicker/DatePicker",component:h,args:{label:"Example"},render:oe},a={},t={args:{disabled:!0}},se=new Date,pe=ce(se,7),de=me(se,7),o={args:{minDate:pe,maxDate:de}},s={args:{initialMonth:new Date(1999,11,1)}},n={args:{required:!0}},i={args:{invalid:!0,message:"Enter a valid date"}},c={args:{hint:"We will only use this to respond to your question"}},m={args:{block:!0}},p={args:{dateFormat:"d MMM yyyy"}},d={args:{allowedDateFormats:["dd/MM/yyyy","dd-MM-yyyy","dd MM yyyy"]}},l={render:r=>M(D,{children:[e(D,{height:"1000px"}),e(oe,{...r}),e(D,{height:"1000px"})]})},u={render:function(g){const[y,x]=te.useState();return M(ne,{gap:4,alignItems:"flex-start",children:[e(h,{...g,value:y,onChange:x}),M(ie,{children:[e(S,{onClick:()=>x(new Date(1999,11,25)),children:"Set pre-defined date"}),e(S,{variant:"secondary",onClick:()=>x(void 0),children:"Clear"})]})]})}};var B,k,f;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var v,C,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(w=(C=t.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var b,E,F;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    minDate: lastWeek,
    maxDate: nextWeek
  }
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var q,I,P;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    initialMonth: new Date(1999, 11, 1)
  }
}`,...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var V,W,A;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(A=(W=n.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var R,j,G;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    invalid: true,
    message: 'Enter a valid date'
  }
}`,...(G=(j=i.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,_,O;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    hint: 'We will only use this to respond to your question'
  }
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var z,J,K;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,N,Q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    dateFormat: 'd MMM yyyy'
  }
}`,...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var T,U,X;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    allowedDateFormats: ['dd/MM/yyyy', 'dd-MM-yyyy', 'dd MM yyyy']
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: props => <Box>
            <Box height="1000px"></Box>
            <ControlledDatePicker {...props} />
            <Box height="1000px"></Box>
        </Box>
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=u.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Ke=["Basic","Disabled","MinMaxDates","InitialMonth","Required","Invalid","Hint","Block","AlternativeDateFormat","CustomAllowedDateFormats","ScrollExample","ClearableExample"];export{p as AlternativeDateFormat,a as Basic,m as Block,u as ClearableExample,d as CustomAllowedDateFormats,t as Disabled,c as Hint,s as InitialMonth,i as Invalid,o as MinMaxDates,n as Required,l as ScrollExample,Ke as __namedExportsOrder,Je as default};
