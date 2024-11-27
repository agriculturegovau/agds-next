import{j as t}from"./responsive-123a9343.js";import{r as $}from"./index-3b9dd0eb.js";import{A as D}from"./Avatar-cb5b4ba0.js";import{N as H}from"./NotificationBadge-862122b9.js";import{C as d}from"./Combobox-0ecd19c6.js";import{C as J}from"./ComboboxRenderItem-a32aac8f.js";import{N as U,C as Y}from"./test-utils-de1584cc.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./ComboboxBase-68405d13.js";import"./index-8d47fad6.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./WebsiteIcon-a62a72af.js";import"./ComboboxListItem-50db01ca.js";import"./ComboboxListLoading-181a8c4d.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./ComboboxListError-97797edb.js";import"./ComboboxListEmptyResults-a06bdd17.js";import"./Button-12960031.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./ComboboxMultiBase-55ecdd36.js";import"./useTernaryState-a0ca107e.js";import"./ComboboxTag-3bd74b3f.js";const Ve={title:"forms/Combobox/Combobox",component:d,render:function(c){const[p,e]=$.useState(null);return t(d,{...c,value:p,onChange:e})}},r={label:"Select country",hint:"Start typing to see results",options:Y},a={args:r},o={args:{...r,required:!0}},s={args:{...r,hideOptionalLabel:!0}},n={args:{...r,disabled:!0}},i={args:{...r,invalid:!0,message:"Country is required"}},m={args:{...r,block:!0}},u={args:{...r,clearable:!0}},l={render:function(){const[c,p]=$.useState(null);return t(d,{label:"Search users",value:c,onChange:p,options:U,renderItem:(e,z)=>t(J,{itemLabel:e.label,inputValue:z,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(D,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t(H,{value:e.unreadMessageCount,tone:"action"}):null})})}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,S,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,A,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideOptionalLabel: true
  }
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,R,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var y,I,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(h=(I=i.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var E,V,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var B,L,M;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    clearable: true
  }
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,j,k;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:'{\n  render: function Render() {\n    const [value, setValue] = useState<NameOption | null>(null);\n    return <Combobox label="Search users" value={value} onChange={setValue} options={NAME_OPTIONS} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={`Role: ${item.jobTitle}`} tertiaryText={`Job: ${item.status}`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;\n  }\n}',...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const qe=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","Clearable","CustomRender"];export{a as Basic,m as Block,u as Clearable,l as CustomRender,n as Disabled,s as HideOptionalLabel,i as Invalid,o as Required,qe as __namedExportsOrder,Ve as default};
