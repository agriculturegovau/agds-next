import{j as t}from"./responsive-22d1c539.js";import{r as L}from"./index-f0f3a68d.js";import{A as k}from"./Avatar-aaef2e20.js";import{N as $}from"./NotificationBadge-5114eb4c.js";import{C as c}from"./ComboboxMulti-3aefa15a.js";import{C as P}from"./ComboboxRenderItem-89f34ee2.js";import{N as z,C as D}from"./test-utils-de1584cc.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Text-03708b2d.js";import"./ComboboxBase-89095c8a.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./TextInput-72cf6946.js";import"./Field-ef82e19c.js";import"./useId-bf1c3739.js";import"./WebsiteIcon-03a55100.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./ComboboxListError-00d85f32.js";import"./ComboboxListEmptyResults-235dd900.js";import"./Button-1a082b6d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./ComboboxMultiBase-b56116a2.js";import"./useTernaryState-ed86673f.js";import"./ComboboxTag-bd9661e2.js";const Te={title:"forms/Combobox/ComboboxMulti",component:c,render:function(l){const[p,e]=L.useState([]);return t(c,{...l,value:p,onChange:e})}},r={label:"Select country",hint:"Start typing to see results",options:D},o={args:r},a={args:{...r,required:!0}},s={args:{...r,hideOptionalLabel:!0}},n={args:{...r,disabled:!0}},i={args:{...r,invalid:!0,message:"Country is required"}},m={args:{...r,block:!0}},u={render:function(){const[l,p]=L.useState([]);return t(c,{label:"Search users",value:l,onChange:p,options:z,renderItem:(e,j)=>t(P,{itemLabel:e.label,inputValue:j,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(k,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t($,{value:e.unreadMessageCount,tone:"action"}):null})})}};var d,g,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,C,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(A=n.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var M,T,y;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var I,h,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(E=(h=m.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var V,q,B;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:'{\n  render: function Render() {\n    const [value, setValue] = useState<NameOption[]>([]);\n    return <ComboboxMulti label="Search users" value={value} onChange={setValue} options={NAME_OPTIONS} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={`Role: ${item.jobTitle}`} tertiaryText={`Job: ${item.status}`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;\n  }\n}',...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ye=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","CustomRender"];export{o as Basic,m as Block,u as CustomRender,n as Disabled,s as HideOptionalLabel,i as Invalid,a as Required,ye as __namedExportsOrder,Te as default};
