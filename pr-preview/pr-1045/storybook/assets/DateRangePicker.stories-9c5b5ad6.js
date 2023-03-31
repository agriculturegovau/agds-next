import{j as n,a as s,m as ya,t as ka,B as J}from"./Box-e652c7f2.js";import{r as e}from"./index-42611d8b.js";import{S as X,F as Ye}from"./Stack-4546232d.js";import{a as oe}from"./Button-ffb9a9d6.js";import{B as Ia}from"./ButtonGroup-75f04ad3.js";import{S as Ca}from"./Select-f60808c9.js";import{P as xa}from"./Prose-da08c63f.js";import{u as Va}from"./usePopper-f1eff677.js";import{u as wa}from"./useId-9773510a.js";import{u as Ba}from"./useTernaryState-6ea40a94.js";import{u as Ea}from"./useWindowSize-fbc787ee.js";import{g as qa,f as se,t as N,p as ie,c as le,u as La,D as de}from"./DatePickerInput-fa25363d.js";import{b as Pa,c as _a,d as Fa,a as Ta}from"./Field-795f8947.js";import{v as Oa}from"./VisuallyHidden-315ab967.js";import{b as Ma,s as Na,a as Ha}from"./Calendar-0e78322b.js";import"./_commonjsHelpers-042e6b4d.js";import"./LoadingBlanket-2ea81d60.js";import"./Content-e54e3b95.js";import"./BaseContent-1f85429f.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./Text-51e6146a.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./mergeRefs-868b543a.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import"./TextInput-af5477b0.js";import"./Combination-c1ec471a.js";const D=({legend:a,hint:t,id:d,fromInvalid:b=!1,toInvalid:m=!1,message:R,hideOptionalLabel:S,value:l,onChange:c,onFromInputChange:T,onToInputChange:O,disabled:Y,fromLabel:ea="Start date",toLabel:aa="End date",required:A=!1,minDate:g,maxDate:p,fromInputRef:na,toInputRef:ta,yearRange:ra})=>{const[G,M,y]=Ba(!1),[h,v]=e.useState(),Z=e.useRef(null),ee=e.useRef(null),oa=e.useCallback(()=>{v("from"),M()},[M]),sa=e.useCallback(()=>{v("to"),M()},[M]),[ia,la]=e.useState(null),[$,da]=e.useState(null),{styles:ua,attributes:ca}=Va(ia,$,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),f=e.useMemo(()=>({from:typeof l.from=="string"?void 0:l.from,to:typeof l.to=="string"?void 0:l.to}),[l]),ga=e.useCallback((u,r,k)=>{if(!h||k.disabled)return;const o=qa(h,r,f);if(c(o),z(o.from?se(o.from):""),K(o.to?se(o.to):""),o.from&&o.to){y(),v(void 0);return}if(h==="from"){v("to");return}if(h==="to"&&!o.from){v("from");return}},[y,h,c,f]),[pa,z]=e.useState(N(l.from)),fa=e.useCallback(u=>{const r=u.target.value;z(r);const k=ie(r),o=le(k,g,p),I={from:o,to:f.to};if(!r||o){c(I);return}c(I),T==null||T(r)},[p,g,c,f,T]),[ma,K]=e.useState(N(l.to)),ba=e.useCallback(u=>{const r=u.target.value;K(r);const k=ie(r),o=le(k,g,p),I={from:f.from,to:o};if(!r||o){c(I);return}c(I),O==null||O(r)},[p,g,c,O,f]);e.useEffect(()=>{z(N(l.from)),K(N(l.to))},[l]);const ae=e.useRef($);ae.current=$,La(ae,y),e.useEffect(()=>{const u=r=>{G&&r.code==="Escape"&&(r.preventDefault(),r.stopPropagation(),y(),v(void 0))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[G,y]);const Ra=e.useMemo(()=>{if(g||p)return[g?{before:g}:void 0,p?{after:p}:void 0].filter(u=>!!u)},[g,p]),{windowWidth:ha=0}=Ea(),va=ha>ka.breakpoint.md?2:1,U=b||m,{fieldsetId:Da,hintId:ne,messageId:te}=Q(d),re=[U&&R?te:null,t?ne:null].filter(Boolean),Sa=re.length?re.join(" "):void 0;return n(Ta,{invalid:U,id:Da,children:s("fieldset",{"aria-describedby":Sa,css:{padding:0,margin:0,border:"none"},children:[n(Pa,{as:"legend",required:A,hideOptionalLabel:S,css:a?void 0:Oa,children:a??"Date range"}),s(X,{gap:.5,css:{marginTop:a?ya(.5):void 0},children:[t?n(_a,{id:ne,children:t}):null,R&&U?n(Fa,{id:te,children:R}):null,s(Ye,{ref:la,flexDirection:{xs:"column",sm:"row"},inline:!0,gap:1,children:[n(de,{ref:na,label:ea,hideOptionalLabel:S||!!a,value:pa,onChange:fa,buttonRef:Z,buttonOnClick:oa,disabled:Y,required:A,invalid:{field:!1,input:b}}),n(de,{ref:ta,label:aa,hideOptionalLabel:S||!!a,value:ma,onChange:ba,buttonRef:ee,buttonOnClick:sa,disabled:Y,required:A,invalid:{field:!1,input:m}})]})]}),G?n("div",{ref:da,style:ua.popper,...ca.popper,css:{zIndex:1},children:n(Ma,{initialFocus:!0,defaultMonth:f.from,selected:f,onSelect:ga,numberOfMonths:va,disabled:Ra,returnFocusRef:h==="from"?Z:ee,yearRange:ra})}):null]})})},Q=a=>{const t=wa(a),d=a||`date-range-picker-${t}`,b=`date-range-picker-${t}-hint`,m=`date-range-picker-${t}-message`;return{fieldsetId:d,hintId:b,messageId:m}};try{D.displayName="DateRangePicker",D.__docgenInfo={description:"",displayName:"DateRangePicker",props:{minDate:{defaultValue:null,description:"If set, any days before this date will not be selectable.",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"If set, any days after this date will not be selectable.",name:"maxDate",required:!1,type:{name:"Date"}},legend:{defaultValue:null,description:"Describes the purpose of the group of fields.",name:"legend",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Provides extra information about the group of fields.",name:"hint",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Defines an identifier (ID) which must be unique.",name:"id",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"Message to show when the field is invalid.",name:"message",required:!1,type:{name:"string"}},fromInvalid:{defaultValue:{value:"false"},description:"If true, the invalid state will be rendered for the start date.",name:"fromInvalid",required:!1,type:{name:"boolean"}},toInvalid:{defaultValue:{value:"false"},description:"If true, the invalid state will be rendered for the end date.",name:"toInvalid",required:!1,type:{name:"boolean"}},hideOptionalLabel:{defaultValue:null,description:'If true, "(optional)" will never be appended to the legend even when `required` is `false`.',name:"hideOptionalLabel",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If true, the field will not be interactive.",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:'If false, "(optional)" will not be appended to the legend.',name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the field.",name:"value",required:!0,type:{name:"DateRangeWithString"}},onChange:{defaultValue:null,description:"Function to be fired following a change event.",name:"onChange",required:!0,type:{name:"(day: DateRange) => void"}},onFromInputChange:{defaultValue:null,description:"Function to be fired when the input value is updated.",name:"onFromInputChange",required:!1,type:{name:"((inputValue: string) => void)"}},onToInputChange:{defaultValue:null,description:"Function to be fired when the input value is updated.",name:"onToInputChange",required:!1,type:{name:"((inputValue: string) => void)"}},fromLabel:{defaultValue:{value:"Start date"},description:"The label above the start date.",name:"fromLabel",required:!1,type:{name:"string"}},toLabel:{defaultValue:{value:"End date"},description:"The label above the end date.",name:"toLabel",required:!1,type:{name:"string"}},fromInputRef:{defaultValue:null,description:"Ref to the start input element.",name:"fromInputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},toInputRef:{defaultValue:null,description:"Ref to the end input element.",name:"toInputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},yearRange:{defaultValue:null,description:"The range of options to display in calendar year select.",name:"yearRange",required:!1,type:{name:"{ from: number; to: number; }"}}}}}catch{}try{Q.displayName="useDateRangePickerIds",Q.__docgenInfo={description:"",displayName:"useDateRangePickerIds",props:{}}}catch{}const Dn={title:"forms/DatePicker/DateRangePicker",component:D},i=a=>{const[t,d]=e.useState({from:void 0,to:void 0});return n(D,{...a,value:t,onChange:d})},C=i.bind({});C.args={};const x=i.bind({});x.args={disabled:!0};const Ze=new Date,Wa=Na(Ze,7),ja=Ha(Ze,7),V=i.bind({});V.args={minDate:Wa,maxDate:ja};const w=i.bind({});w.args={legend:"Date range"};const B=i.bind({});B.args={legend:"Date range",hideOptionalLabel:!0};const E=i.bind({});E.args={legend:"Date range",hint:"Hint text"};const q=i.bind({});q.args={legend:"Date range",fromInvalid:!0,toInvalid:!0,message:"Enter a valid date"};const L=i.bind({});L.args={legend:"Date range",fromInvalid:!0,message:"Enter a valid date"};const P=i.bind({});P.args={legend:"Date range",toInvalid:!0,message:"Enter a valid date"};const _=i.bind({});_.args={legend:"Date range",required:!0};const F=i.bind({});F.args={fromLabel:"From",toLabel:"To"};const H=()=>{var m,R;const[a,t]=e.useState(),[d,b]=e.useState({from:void 0,to:void 0});return s(X,{gap:3,children:[s(Ye,{gap:2,children:[n(Ca,{label:"Example",placeholder:"Please select",options:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}],value:a,onChange:S=>t(S.target.value)}),n(D,{value:d,onChange:b})]}),n(xa,{children:s("ul",{children:[s("li",{children:["Option: ",a||"Not set"]}),s("li",{children:["Date from: ",((m=d.from)==null?void 0:m.toLocaleDateString())||"Not set"]}),s("li",{children:["Date to: ",((R=d.to)==null?void 0:R.toLocaleDateString())||"Not set"]})]})})]})},W=a=>s(J,{children:[n(J,{height:"1000px"}),n(i,{...a}),n(J,{height:"1000px"})]}),j=()=>{const[a,t]=e.useState({from:void 0,to:void 0});return s(X,{gap:4,alignItems:"flex-start",children:[n(D,{value:a,onChange:t}),s(Ia,{children:[n(oe,{onClick:()=>t({from:new Date(2020,7,14),to:new Date(2020,7,18)}),children:"Set pre-defined range"}),n(oe,{variant:"secondary",onClick:()=>t({from:void 0,to:void 0}),children:"Clear range"})]})]})};var ue,ce,ge;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(ge=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var pe,fe,me;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(me=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var be,Re,he;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(he=(Re=V.parameters)==null?void 0:Re.docs)==null?void 0:he.source}}};var ve,De,Se;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(Se=(De=w.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var ye,ke,Ie;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(Ie=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};var Ce,xe,Ve;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(Ve=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var we,Be,Ee;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(Ee=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var qe,Le,Pe;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(Pe=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var _e,Fe,Te;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(Te=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var Oe,Me,Ne;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(Ne=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var He,We,je;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <DateRangePicker {...args} value={range} onChange={setRange} />;
}`,...(je=(We=F.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var Ae,Ge,$e;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [option, setOption] = useState<string>();
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <Stack gap={3}>
            <Flex gap={2}>
                <Select label="Example" placeholder="Please select" options={[{
        label: 'A',
        value: 'a'
      }, {
        label: 'B',
        value: 'b'
      }, {
        label: 'C',
        value: 'c'
      }]} value={option} onChange={e => setOption(e.target.value)} />
                <DateRangePicker value={range} onChange={setRange} />
            </Flex>
            <Prose>
                <ul>
                    <li>Option: {option || 'Not set'}</li>
                    <li>Date from: {range.from?.toLocaleDateString() || 'Not set'}</li>
                    <li>Date to: {range.to?.toLocaleDateString() || 'Not set'}</li>
                </ul>
            </Prose>
        </Stack>;
}`,...($e=(Ge=H.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};var ze,Ke,Ue;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`args => {
  return <Box>
            <Box height="1000px"></Box>
            <Template {...args} />
            <Box height="1000px"></Box>
        </Box>;
}`,...(Ue=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var Je,Qe,Xe;j.parameters={...j.parameters,docs:{...(Je=j.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined
  });
  return <Stack gap={4} alignItems="flex-start">
            <DateRangePicker value={range} onChange={setRange} />
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
}`,...(Xe=(Qe=j.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const Sn=["Basic","Disabled","MinMaxDates","Legend","HideOptionalLabel","Hint","Invalid","FromInvalid","ToInvalid","Required","Labels","FiltersExample","ScrollExample","ControlledExample"];export{C as Basic,j as ControlledExample,x as Disabled,H as FiltersExample,L as FromInvalid,B as HideOptionalLabel,E as Hint,q as Invalid,F as Labels,w as Legend,V as MinMaxDates,_ as Required,W as ScrollExample,P as ToInvalid,Sn as __namedExportsOrder,Dn as default};
//# sourceMappingURL=DateRangePicker.stories-9c5b5ad6.js.map
