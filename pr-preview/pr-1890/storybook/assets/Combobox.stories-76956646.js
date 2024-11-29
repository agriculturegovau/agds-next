import{j as t}from"./responsive-22d1c539.js";import{r as $}from"./index-f0f3a68d.js";import{A as D}from"./Avatar-aaef2e20.js";import{N as H}from"./NotificationBadge-5114eb4c.js";import{C as d}from"./Combobox-52102b5c.js";import{C as J}from"./ComboboxRenderItem-89f34ee2.js";import{N as U,C as Y}from"./test-utils-de1584cc.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Text-03708b2d.js";import"./ComboboxBase-4263de0d.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./TextInput-b5049985.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./WebsiteIcon-da68083c.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./ComboboxListError-c00a0203.js";import"./ComboboxListEmptyResults-235dd900.js";import"./Button-1a082b6d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./ComboboxMultiBase-44af51ab.js";import"./useTernaryState-ed86673f.js";import"./ComboboxTag-e5f00fde.js";const Ve={title:"forms/Combobox/Combobox",component:d,render:function(c){const[p,e]=$.useState(null);return t(d,{...c,value:p,onChange:e})}},r={label:"Select country",hint:"Start typing to see results",options:Y},a={args:r},o={args:{...r,required:!0}},s={args:{...r,hideOptionalLabel:!0}},n={args:{...r,disabled:!0}},i={args:{...r,invalid:!0,message:"Country is required"}},m={args:{...r,block:!0}},u={args:{...r,clearable:!0}},l={render:function(){const[c,p]=$.useState(null);return t(d,{label:"Search users",value:c,onChange:p,options:U,renderItem:(e,z)=>t(J,{itemLabel:e.label,inputValue:z,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(D,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t(H,{value:e.unreadMessageCount,tone:"action"}):null})})}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
