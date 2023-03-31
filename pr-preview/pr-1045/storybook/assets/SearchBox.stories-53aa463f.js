import{a as m,j as e}from"./Box-e652c7f2.js";import{r as V}from"./index-42611d8b.js";import{b as o,a as t,S as a}from"./SearchBoxInput-8dcea9bb.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-4546232d.js";import"./Button-ffb9a9d6.js";import"./LoadingBlanket-2ea81d60.js";import"./Content-e54e3b95.js";import"./BaseContent-1f85429f.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./Text-51e6146a.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./VisuallyHidden-315ab967.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-75f04ad3.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import"./TextInput-af5477b0.js";import"./Field-795f8947.js";import"./useId-9773510a.js";const ee={title:"forms/SearchBox",component:o,subcomponents:{SearchBoxButton:t,SearchBoxInput:a}},i=()=>m(o,{children:[e(a,{}),e(t,{children:"Search"})]}),n=r=>m(o,{children:[e(a,{...r}),e(t,{children:"Search"})]});n.args={label:"Search this website",labelVisible:!0};const s=r=>m(o,{children:[e(a,{}),e(t,{...r})]});s.args={children:"Custom label"};const c=r=>m(o,{children:[e(a,{}),e(t,{...r,children:"Search"})]});c.args={iconOnly:{xs:!0,sm:!1}};const h=()=>{const[r,j]=V.useState("");return m(o,{onSubmit:p=>{p.preventDefault(),console.log(r)},children:[e(a,{value:r,onChange:p=>{j(p.target.value)}}),e(t,{children:"Search"})]})};var u,S,l;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <SearchBox>
        <SearchBoxInput />
        <SearchBoxButton>Search</SearchBoxButton>
    </SearchBox>`,...(l=(S=i.parameters)==null?void 0:S.docs)==null?void 0:l.source}}};var B,x,d;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => <SearchBox>
        <SearchBoxInput {...args} />
        <SearchBoxButton>Search</SearchBoxButton>
    </SearchBox>`,...(d=(x=n.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var g,b,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => <SearchBox>
        <SearchBoxInput />
        <SearchBoxButton {...args} />
    </SearchBox>`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,I,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <SearchBox>
        <SearchBoxInput />
        <SearchBoxButton {...args}>Search</SearchBoxButton>
    </SearchBox>`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var f,E,L;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [searchTerm, setSearchTerm] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchTerm);
  };
  return <SearchBox onSubmit={onSubmit}>
            <SearchBoxInput value={searchTerm} onChange={onChange} />
            <SearchBoxButton>Search</SearchBoxButton>
        </SearchBox>;
}`,...(L=(E=h.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const re=["Basic","LabelVisible","ButtonLabel","ResponsiveButtonIcon","Controlled"];export{i as Basic,s as ButtonLabel,h as Controlled,n as LabelVisible,c as ResponsiveButtonIcon,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=SearchBox.stories-53aa463f.js.map
