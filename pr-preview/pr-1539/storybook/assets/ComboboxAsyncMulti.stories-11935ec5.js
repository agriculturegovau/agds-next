import{j as o}from"./responsive-1d67a6a2.js";import{r as P}from"./index-42611d8b.js";import{A as $}from"./Avatar-994f28fa.js";import{N as V}from"./NotificationBadge-f264d923.js";import{C as d}from"./ComboboxAsyncMulti-f71f0c73.js";import{C as z}from"./ComboboxListItem-0acb222d.js";import{C as k,N as D}from"./test-utils-de1584cc.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./ComboboxMultiBase-1649accc.js";import"./index-4d501b15.js";import"./tslib.es6-44ce41f1.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./useTernaryState-6ea40a94.js";import"./mergeRefs-868b543a.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./Button-e28534e8.js";import"./ButtonGroup-20aae35f.js";import"./useAsync-0e212593.js";const xe={title:"forms/Combobox/ComboboxAsyncMulti",component:d,render:function(l){const[p,e]=P.useState([]);return o(d,{...l,value:p,onChange:e,loadOptions:async function(){return await new Promise(j=>setTimeout(j,1e3)),k}})}},r={label:"Select country",hint:"Start typing to see results",options:k},a={args:r},s={args:{...r,required:!0}},n={args:{...r,hideOptionalLabel:!0}},i={args:{...r,disabled:!0}},m={args:{...r,invalid:!0,message:"Country is required"}},u={args:{...r,block:!0}},c={render:function(){const[l,p]=P.useState([]);return o(d,{label:"Search users",value:l,onChange:p,loadOptions:async function(){return await new Promise(t=>setTimeout(t,1e3)),D},renderItem:(e,t)=>o(z,{itemLabel:e.label,inputValue:t,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:o($,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?o(V,{value:e.unreadMessageCount,tone:"action"}):null})})}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,O,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  }
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var y,A,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideOptionalLabel: true
  }
}`,...(v=(A=n.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var x,N,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var R,h,M;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(M=(h=m.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var I,w,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var q,B,L;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: function Render() {
    const [value, onChange] = useState<NameOption[]>([]);
    return <ComboboxAsyncMulti label="Search users" value={value} onChange={onChange} loadOptions={async function loadOptions() {
      // Simulate a slow network connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NAME_OPTIONS;
    }} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={\`Role: \${item.jobTitle}\`} tertiaryText={\`Job: \${item.status}\`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const Ne=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","CustomRender"];export{a as Basic,u as Block,c as CustomRender,i as Disabled,n as HideOptionalLabel,m as Invalid,s as Required,Ne as __namedExportsOrder,xe as default};
