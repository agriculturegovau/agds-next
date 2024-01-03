import{a as S,j as n}from"./responsive-1d67a6a2.js";import{r as ge}from"./index-42611d8b.js";import{S as ve}from"./Stack-43f3e7c4.js";import{B as I}from"./Box-0bbf8d6d.js";import{B as C}from"./Button-e28534e8.js";import{B as De}from"./ButtonGroup-20aae35f.js";import{D as B}from"./DateRangePicker-261209cc.js";import{v as fe,w as xe}from"./Calendar-0f15ac31.js";import"./_commonjsHelpers-042e6b4d.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./useId-d335a68c.js";import"./useTernaryState-6ea40a94.js";import"./useWindowSize-fbc787ee.js";import"./useClickOutside-f1a14f0e.js";import"./Field-20b34c68.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./DatePickerInput-6534a915.js";import"./TextInput-6e29e5bf.js";import"./Combination-c1ec471a.js";function le(t){const[h,r]=ge.useState({from:void 0,to:void 0});return n(B,{...t,value:h,onChange:r,onFromInputChange:e=>r(a=>({...a,from:e})),onToInputChange:e=>r(a=>({...a,to:e}))})}const Ze={title:"forms/DateRangePicker",component:B,render:le},o={},s={args:{disabled:!0}},ue=new Date,he=fe(ue,7),Ie=xe(ue,7),i={args:{minDate:he,maxDate:Ie}},d={args:{legend:"Date range"}},m={args:{legend:"Date range",hideOptionalLabel:!0}},c={args:{legend:"Date range",hint:"Hint text"}},p={args:{legend:"Date range",fromInvalid:!0,toInvalid:!0,message:"Enter a valid date"}},g={args:{legend:"Date range",fromInvalid:!0,message:"Enter a valid date"}},l={args:{legend:"Date range",toInvalid:!0,message:"Enter a valid date"}},u={args:{legend:"Date range",toInvalid:!0,message:"Enter a valid date",hint:"Hint text"}},v={args:{legend:"Date range",required:!0}},D={args:{fromLabel:"From",toLabel:"To"}},f={render:t=>S(I,{children:[n(I,{height:"1000px"}),n(le,{...t}),n(I,{height:"1000px"})]})},x={render:function(h){const[r,e]=ge.useState({from:void 0,to:void 0});return S(ve,{gap:4,alignItems:"flex-start",children:[n(B,{...h,value:r,onChange:e,onFromInputChange:a=>e({...r,from:a}),onToInputChange:a=>e({...r,to:a})}),S(De,{children:[n(C,{onClick:()=>e({from:new Date(2020,7,14),to:new Date(2020,7,18)}),children:"Set pre-defined range"}),n(C,{variant:"secondary",onClick:()=>e({from:void 0,to:void 0}),children:"Clear range"})]})]})}};var R,b,k;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var E,L,H;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(H=(L=s.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var T,F,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    minDate: lastWeek,
    maxDate: nextWeek
  }
}`,...(W=(F=i.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var w,y,O;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    legend: 'Date range'
  }
}`,...(O=(y=d.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var P,q,M;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    hideOptionalLabel: true
  }
}`,...(M=(q=m.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var j,G,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    hint: 'Hint text'
  }
}`,...(_=(G=c.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var z,A,J;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    fromInvalid: true,
    toInvalid: true,
    message: 'Enter a valid date'
  }
}`,...(J=(A=p.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var K,N,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    fromInvalid: true,
    message: 'Enter a valid date'
  }
}`,...(Q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,V,X;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    toInvalid: true,
    message: 'Enter a valid date'
  }
}`,...(X=(V=l.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    toInvalid: true,
    message: 'Enter a valid date',
    hint: 'Hint text'
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    legend: 'Date range',
    required: true
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,oe;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    fromLabel: 'From',
    toLabel: 'To'
  }
}`,...(oe=(te=D.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ie,de;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: props => <Box>
            <Box height="1000px"></Box>
            <ControlledDateRangePicker {...props} />
            <Box height="1000px"></Box>
        </Box>
}`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ce,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const $e=["Basic","Disabled","MinMaxDates","Legend","HideOptionalLabel","Hint","Invalid","FromInvalid","ToInvalid","ToInvalidWithHint","Required","Labels","ScrollExample","ClearableExample"];export{o as Basic,x as ClearableExample,s as Disabled,g as FromInvalid,m as HideOptionalLabel,c as Hint,p as Invalid,D as Labels,d as Legend,i as MinMaxDates,v as Required,f as ScrollExample,l as ToInvalid,u as ToInvalidWithHint,$e as __namedExportsOrder,Ze as default};
