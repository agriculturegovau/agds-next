import{a as n,j as r}from"./responsive-22d1c539.js";import{r as _}from"./index-f0f3a68d.js";import{S as o,a as t,b as s}from"./SearchBoxInput-4f18fec2.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./Text-03708b2d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./WebsiteIcon-03a55100.js";import"./TextInput-72cf6946.js";import"./Field-ef82e19c.js";import"./useId-bf1c3739.js";const ee={title:"forms/SearchBox",component:o},c={args:{},render:e=>n(o,{...e,children:[r(t,{}),r(s,{children:"Search"})]})},m={args:{},render:e=>n(o,{...e,children:[r(t,{label:"Search this website",labelVisible:!0}),r(s,{children:"Search"})]})},i={args:{},render:e=>n(o,{...e,children:[r(t,{}),r(s,{children:"Custom label"})]})},h={args:{},render:e=>n(o,{...e,children:[r(t,{}),r(s,{iconOnly:{xs:!0,sm:!1},children:"Search"})]})},a=()=>{const[e,V]=_.useState("");return n(o,{onSubmit:l=>{l.preventDefault(),console.log(e)},children:[r(t,{value:e,onChange:l=>{V(l.target.value)}}),r(s,{children:"Search"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var p,u,S;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: args => <SearchBox {...args}>
            <SearchBoxInput />
            <SearchBoxButton>Search</SearchBoxButton>
        </SearchBox>
}`,...(S=(u=c.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var B,d,x;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: args => <SearchBox {...args}>
            <SearchBoxInput label="Search this website" labelVisible />
            <SearchBoxButton>Search</SearchBoxButton>
        </SearchBox>
}`,...(x=(d=m.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,b,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: args => <SearchBox {...args}>
            <SearchBoxInput />
            <SearchBoxButton>Custom label</SearchBoxButton>
        </SearchBox>
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,f,I;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(f=h.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var T,E,L;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(L=(E=a.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const re=["Basic","LabelVisible","ButtonLabel","ResponsiveButtonIcon","Controlled"];export{c as Basic,i as ButtonLabel,a as Controlled,m as LabelVisible,h as ResponsiveButtonIcon,re as __namedExportsOrder,ee as default};
