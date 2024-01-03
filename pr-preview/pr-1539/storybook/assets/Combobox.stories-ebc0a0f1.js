import{j as a}from"./responsive-1d67a6a2.js";import{r as P}from"./index-42611d8b.js";import{A as D}from"./Avatar-994f28fa.js";import{N as H}from"./NotificationBadge-f264d923.js";import{C as d}from"./Combobox-137b4b5f.js";import{C as J}from"./ComboboxListItem-0acb222d.js";import{N as U,C as Y}from"./test-utils-de1584cc.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./ComboboxMultiBase-1649accc.js";import"./index-4d501b15.js";import"./tslib.es6-44ce41f1.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./useTernaryState-6ea40a94.js";import"./mergeRefs-868b543a.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./Button-e28534e8.js";import"./ButtonGroup-20aae35f.js";const he={title:"forms/Combobox/Combobox",component:d,render:function(c){const[p,e]=P.useState(null);return a(d,{...c,value:p,onChange:e})}},r={label:"Select country",hint:"Start typing to see results",options:Y},o={args:r},t={args:{...r,required:!0}},s={args:{...r,hideOptionalLabel:!0}},n={args:{...r,disabled:!0}},i={args:{...r,invalid:!0,message:"Country is required"}},m={args:{...r,block:!0}},u={args:{...r,clearable:!0}},l={render:function(){const[c,p]=P.useState(null);return a(d,{label:"Search users",value:c,onChange:p,options:U,renderItem:(e,z)=>a(J,{itemLabel:e.label,inputValue:z,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:a(D,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?a(H,{value:e.unreadMessageCount,tone:"action"}):null})})}};var g,b,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,S,x;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,A,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideOptionalLabel: true
  }
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,R,h;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(h=(R=n.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var T,y,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var E,q,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var L,M,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    clearable: true
  }
}`,...(_=(M=u.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var j,k,$;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:'{\n  render: function Render() {\n    const [value, onChange] = useState<NameOption | null>(null);\n    return <Combobox label="Search users" value={value} onChange={onChange} options={NAME_OPTIONS} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={`Role: ${item.jobTitle}`} tertiaryText={`Job: ${item.status}`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;\n  }\n}',...($=(k=l.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};const Te=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","Clearable","CustomRender"];export{o as Basic,m as Block,u as Clearable,l as CustomRender,n as Disabled,s as HideOptionalLabel,i as Invalid,t as Required,Te as __namedExportsOrder,he as default};
