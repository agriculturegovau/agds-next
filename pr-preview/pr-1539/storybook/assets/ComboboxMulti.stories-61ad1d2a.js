import{j as o}from"./responsive-1d67a6a2.js";import{r as _}from"./index-42611d8b.js";import{A as $}from"./Avatar-994f28fa.js";import{N as P}from"./NotificationBadge-f264d923.js";import{C as p}from"./ComboboxMulti-7143082b.js";import{C as V}from"./ComboboxListItem-0acb222d.js";import{N as z,C as D}from"./test-utils-de1584cc.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./ComboboxMultiBase-1649accc.js";import"./index-4d501b15.js";import"./tslib.es6-44ce41f1.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./useTernaryState-6ea40a94.js";import"./mergeRefs-868b543a.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./Button-e28534e8.js";import"./ButtonGroup-20aae35f.js";const Ne={title:"forms/Combobox/ComboboxMulti",component:p,render:function(l){const[c,e]=_.useState([]);return o(p,{...l,value:c,onChange:e})}},r={label:"Select country",hint:"Start typing to see results",options:D},t={args:r},a={args:{...r,required:!0}},s={args:{...r,hideOptionalLabel:!0}},n={args:{...r,disabled:!0}},i={args:{...r,invalid:!0,message:"Country is required"}},m={args:{...r,block:!0}},u={render:function(){const[l,c]=_.useState([]);return o(p,{label:"Search users",value:l,onChange:c,options:z,renderItem:(e,k)=>o(V,{itemLabel:e.label,inputValue:k,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:o($,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?o(P,{value:e.unreadMessageCount,tone:"action"}):null})})}};var d,g,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,C,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var x,v,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideOptionalLabel: true
  }
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var O,A,R;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var h,M,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var y,I,E;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var q,B,L;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:'{\n  render: function Render() {\n    const [value, onChange] = useState<NameOption[]>([]);\n    return <ComboboxMulti label="Search users" value={value} onChange={onChange} options={NAME_OPTIONS} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={`Role: ${item.jobTitle}`} tertiaryText={`Job: ${item.status}`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;\n  }\n}',...(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const Oe=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","CustomRender"];export{t as Basic,m as Block,u as CustomRender,n as Disabled,s as HideOptionalLabel,i as Invalid,a as Required,Oe as __namedExportsOrder,Ne as default};
