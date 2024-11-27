import{a as M,j as n}from"./responsive-123a9343.js";import{r as xe}from"./index-3b9dd0eb.js";import{S as Me}from"./Stack-938d29d6.js";import{B as I}from"./Box-c8c0d4bd.js";import{B}from"./Button-12960031.js";import{B as Ce}from"./ButtonGroup-399a126c.js";import{D as C}from"./DateRangePicker-598bd9f9.js";import{s as Be,h as Re}from"./Calendar-3a06276d.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./Text-ade3e1ab.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./useId-1d8fde67.js";import"./useTernaryState-a0ca107e.js";import"./useWindowSize-52831703.js";import"./useClickOutside-f5418014.js";import"./Field-b78d080b.js";import"./WebsiteIcon-a62a72af.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./DatePickerInput-eb469809.js";import"./TextInput-b3ca105d.js";import"./index-67ce947c.js";import"./Combination-826c8940.js";function Se(t){const[S,r]=xe.useState({from:void 0,to:void 0});return n(C,{...t,value:S,onChange:r,onFromInputChange:e=>r(a=>({...a,from:e})),onToInputChange:e=>r(a=>({...a,to:e}))})}const dr={title:"forms/DateRangePicker",component:C,render:Se},o={},s={args:{disabled:!0}},Ie=new Date,be=Be(Ie,7),ke=Re(Ie,7),d={args:{minDate:be,maxDate:ke}},i={args:{legend:"Date range"}},m={args:{legend:"Date range",hideOptionalLabel:!0}},c={args:{legend:"Date range",hint:"Hint text"}},p={args:{legend:"Date range",fromInvalid:!0,toInvalid:!0,message:"Enter a valid date"}},g={args:{legend:"Date range",fromInvalid:!0,message:"Enter a valid date"}},l={args:{legend:"Date range",toInvalid:!0,message:"Enter a valid date"}},u={args:{legend:"Date range",toInvalid:!0,message:"Enter a valid date",hint:"Hint text"}},D={args:{legend:"Date range",required:!0}},v={args:{fromLabel:"From",toLabel:"To"}},y={args:{dateFormat:"d MMM yyyy"}},f={args:{allowedDateFormats:["dd/MM/yyyy","dd-MM-yyyy","dd MM yyyy"]}},h={render:t=>M(I,{children:[n(I,{height:"1000px"}),n(Se,{...t}),n(I,{height:"1000px"})]})},x={render:function(S){const[r,e]=xe.useState({from:void 0,to:void 0});return M(Me,{gap:4,alignItems:"flex-start",children:[n(C,{...S,value:r,onChange:e,onFromInputChange:a=>e({...r,from:a}),onToInputChange:a=>e({...r,to:a})}),M(Ce,{children:[n(B,{onClick:()=>e({from:new Date(2020,7,14),to:new Date(2020,7,18)}),children:"Set pre-defined range"}),n(B,{variant:"secondary",onClick:()=>e({from:void 0,to:void 0}),children:"Clear range"})]})]})}};var R,b,k;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var F,E,L;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var H,w,T;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    minDate: lastWeek,
    maxDate: nextWeek
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var W,O,P;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    legend: 'Date range'
  }
}`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var q,A,j;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    hideOptionalLabel: true
  }
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var G,_,z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    hint: 'Hint text'
  }
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,K,N;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    fromInvalid: true,
    toInvalid: true,
    message: 'Enter a valid date'
  }
}`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,V;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    fromInvalid: true,
    message: 'Enter a valid date'
  }
}`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    toInvalid: true,
    message: 'Enter a valid date'
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    toInvalid: true,
    message: 'Enter a valid date',
    hint: 'Hint text'
  }
}`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,te;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    required: true
  }
}`,...(te=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,se,de;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    fromLabel: 'From',
    toLabel: 'To'
  }
}`,...(de=(se=v.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ie,me,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    dateFormat: 'd MMM yyyy'
  }
}`,...(ce=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ge,le;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    allowedDateFormats: ['dd/MM/yyyy', 'dd-MM-yyyy', 'dd MM yyyy']
  }
}`,...(le=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:le.source}}};var ue,De,ve;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: props => <Box>
            <Box height="1000px"></Box>
            <ControlledDateRangePicker {...props} />
            <Box height="1000px"></Box>
        </Box>
}`,...(ve=(De=h.parameters)==null?void 0:De.docs)==null?void 0:ve.source}}};var ye,fe,he;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: function Render(props) {
    const [range, setRange] = useState<DateRangeWithString>({
      from: undefined,
      to: undefined
    });
    return <Stack gap={4} alignItems="flex-start">
                <DateRangePicker {...props} value={range} onChange={setRange} onFromInputChange={from => setRange({
        ...range,
        from
      })} onToInputChange={to => setRange({
        ...range,
        to
      })} />
                <ButtonGroup>
                    <Button onClick={() => setRange({
          from: new Date(2020, 7, 14),
          to: new Date(2020, 7, 18)
        })}>
                        Set pre-defined range
                    </Button>
                    <Button variant="secondary" onClick={() => setRange({
          from: undefined,
          to: undefined
        })}>
                        Clear range
                    </Button>
                </ButtonGroup>
            </Stack>;
  }
}`,...(he=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const ir=["Basic","Disabled","MinMaxDates","Legend","HideOptionalLabel","Hint","Invalid","FromInvalid","ToInvalid","ToInvalidWithHint","Required","Labels","AlternativeDateFormat","CustomAllowedDateFormats","ScrollExample","ClearableExample"];export{y as AlternativeDateFormat,o as Basic,x as ClearableExample,f as CustomAllowedDateFormats,s as Disabled,g as FromInvalid,m as HideOptionalLabel,c as Hint,p as Invalid,v as Labels,i as Legend,d as MinMaxDates,D as Required,h as ScrollExample,l as ToInvalid,u as ToInvalidWithHint,ir as __namedExportsOrder,dr as default};
