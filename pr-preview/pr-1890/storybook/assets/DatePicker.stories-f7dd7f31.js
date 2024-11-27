import{a as M,j as e}from"./responsive-123a9343.js";import{r as te}from"./index-3b9dd0eb.js";import{S as ne}from"./Stack-938d29d6.js";import{B as D}from"./Box-c8c0d4bd.js";import{B as S}from"./Button-12960031.js";import{B as ie}from"./ButtonGroup-399a126c.js";import{D as h}from"./DatePicker-93991371.js";import{s as ce,h as me}from"./Calendar-3a06276d.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./Text-ade3e1ab.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./useTernaryState-a0ca107e.js";import"./useClickOutside-f5418014.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./DatePickerInput-eb469809.js";import"./WebsiteIcon-a62a72af.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./Combination-826c8940.js";import"./index-67ce947c.js";function oe(r){const[g,y]=te.useState();return e(h,{...r,value:g,onChange:y})}const Je={title:"forms/DatePicker/DatePicker",component:h,args:{label:"Example"},render:oe},a={},t={args:{disabled:!0}},se=new Date,pe=ce(se,7),de=me(se,7),o={args:{minDate:pe,maxDate:de}},s={args:{initialMonth:new Date(1999,11,1)}},n={args:{required:!0}},i={args:{invalid:!0,message:"Enter a valid date"}},c={args:{hint:"We will only use this to respond to your question"}},m={args:{block:!0}},p={args:{dateFormat:"d MMM yyyy"}},d={args:{allowedDateFormats:["dd/MM/yyyy","dd-MM-yyyy","dd MM yyyy"]}},l={render:r=>M(D,{children:[e(D,{height:"1000px"}),e(oe,{...r}),e(D,{height:"1000px"})]})},u={render:function(g){const[y,x]=te.useState();return M(ne,{gap:4,alignItems:"flex-start",children:[e(h,{...g,value:y,onChange:x}),M(ie,{children:[e(S,{onClick:()=>x(new Date(1999,11,25)),children:"Set pre-defined date"}),e(S,{variant:"secondary",onClick:()=>x(void 0),children:"Clear"})]})]})}};var B,k,f;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var v,C,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
