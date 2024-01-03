import{a,j as r}from"./responsive-1d67a6a2.js";import{r as j}from"./index-42611d8b.js";import{S as o,b as n,a as t}from"./SearchBoxInput-326854b2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";const ee={title:"forms/SearchBox",component:o},s={args:{},render:e=>a(o,{...e,children:[r(n,{}),r(t,{children:"Search"})]})},c={args:{},render:e=>a(o,{...e,children:[r(n,{label:"Search this website",labelVisible:!0}),r(t,{children:"Search"})]})},m={args:{},render:e=>a(o,{...e,children:[r(n,{}),r(t,{children:"Custom label"})]})},i={args:{},render:e=>a(o,{...e,children:[r(n,{}),r(t,{iconOnly:{xs:!0,sm:!1},children:"Search"})]})},h=()=>{const[e,V]=j.useState("");return a(o,{onSubmit:p=>{p.preventDefault(),console.log(e)},children:[r(n,{value:e,onChange:p=>{V(p.target.value)}}),r(t,{children:"Search"})]})};var u,l,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: args => <SearchBox {...args}>
            <SearchBoxInput />
            <SearchBoxButton>Search</SearchBoxButton>
        </SearchBox>
}`,...(S=(l=s.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var B,d,x;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: args => <SearchBox {...args}>
            <SearchBoxInput label="Search this website" labelVisible />
            <SearchBoxButton>Search</SearchBoxButton>
        </SearchBox>
}`,...(x=(d=c.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,b,v;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: args => <SearchBox {...args}>
            <SearchBoxInput />
            <SearchBoxButton>Custom label</SearchBoxButton>
        </SearchBox>
}`,...(v=(b=m.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,f,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: args => <SearchBox {...args}>
            <SearchBoxInput />
            <SearchBoxButton iconOnly={{
      xs: true,
      sm: false
    }}>
                Search
            </SearchBoxButton>
        </SearchBox>
}`,...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var T,E,L;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(L=(E=h.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const re=["Basic","LabelVisible","ButtonLabel","ResponsiveButtonIcon","Controlled"];export{s as Basic,m as ButtonLabel,h as Controlled,c as LabelVisible,i as ResponsiveButtonIcon,re as __namedExportsOrder,ee as default};
