import{a as n,j as r}from"./responsive-123a9343.js";import{r as _}from"./index-3b9dd0eb.js";import{S as o,a as t,b as s}from"./SearchBoxInput-7272a95d.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./Text-ade3e1ab.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./WebsiteIcon-a62a72af.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";const ee={title:"forms/SearchBox",component:o},c={args:{},render:e=>n(o,{...e,children:[r(t,{}),r(s,{children:"Search"})]})},m={args:{},render:e=>n(o,{...e,children:[r(t,{label:"Search this website",labelVisible:!0}),r(s,{children:"Search"})]})},i={args:{},render:e=>n(o,{...e,children:[r(t,{}),r(s,{children:"Custom label"})]})},h={args:{},render:e=>n(o,{...e,children:[r(t,{}),r(s,{iconOnly:{xs:!0,sm:!1},children:"Search"})]})},a=()=>{const[e,V]=_.useState("");return n(o,{onSubmit:l=>{l.preventDefault(),console.log(e)},children:[r(t,{value:e,onChange:l=>{V(l.target.value)}}),r(s,{children:"Search"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var p,u,S;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
