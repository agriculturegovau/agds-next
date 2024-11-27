import{j as t}from"./responsive-123a9343.js";import{r as L}from"./index-3b9dd0eb.js";import{A as k}from"./Avatar-cb5b4ba0.js";import{N as $}from"./NotificationBadge-862122b9.js";import{C as c}from"./ComboboxMulti-5a3f8fd8.js";import{C as P}from"./ComboboxRenderItem-a32aac8f.js";import{N as z,C as D}from"./test-utils-de1584cc.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./ComboboxBase-68405d13.js";import"./index-8d47fad6.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./WebsiteIcon-a62a72af.js";import"./ComboboxListItem-50db01ca.js";import"./ComboboxListLoading-181a8c4d.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./ComboboxListError-97797edb.js";import"./ComboboxListEmptyResults-a06bdd17.js";import"./Button-12960031.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./ComboboxMultiBase-55ecdd36.js";import"./useTernaryState-a0ca107e.js";import"./ComboboxTag-3bd74b3f.js";const Te={title:"forms/Combobox/ComboboxMulti",component:c,render:function(l){const[p,e]=L.useState([]);return t(c,{...l,value:p,onChange:e})}},r={label:"Select country",hint:"Start typing to see results",options:D},o={args:r},a={args:{...r,required:!0}},s={args:{...r,hideOptionalLabel:!0}},n={args:{...r,disabled:!0}},i={args:{...r,invalid:!0,message:"Country is required"}},m={args:{...r,block:!0}},u={render:function(){const[l,p]=L.useState([]);return t(c,{label:"Search users",value:l,onChange:p,options:z,renderItem:(e,j)=>t(P,{itemLabel:e.label,inputValue:j,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(k,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t($,{value:e.unreadMessageCount,tone:"action"}):null})})}};var d,g,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
