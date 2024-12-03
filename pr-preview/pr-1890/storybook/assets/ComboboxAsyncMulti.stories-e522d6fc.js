import{j as t}from"./responsive-22d1c539.js";import{r as L}from"./index-f0f3a68d.js";import{A as j}from"./Avatar-aaef2e20.js";import{N as $}from"./NotificationBadge-5114eb4c.js";import{C as d}from"./ComboboxAsyncMulti-9268fdc1.js";import{C as z}from"./ComboboxRenderItem-89f34ee2.js";import{C as P,N as D}from"./test-utils-de1584cc.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Text-03708b2d.js";import"./ComboboxBase-89095c8a.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./TextInput-72cf6946.js";import"./Field-ef82e19c.js";import"./useId-bf1c3739.js";import"./WebsiteIcon-03a55100.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./ComboboxListError-00d85f32.js";import"./ComboboxListEmptyResults-235dd900.js";import"./Button-1a082b6d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./ComboboxMultiBase-b56116a2.js";import"./useTernaryState-ed86673f.js";import"./ComboboxTag-bd9661e2.js";import"./useAsync-987bb331.js";const Ie={title:"forms/Combobox/ComboboxAsyncMulti",component:d,render:function(c){const[p,e]=L.useState([]);return t(d,{...c,value:p,onChange:e,loadOptions:async function(){return await new Promise(_=>setTimeout(_,1e3)),P}})}},r={label:"Select country",hint:"Start typing to see results",options:P},a={args:r},s={args:{...r,required:!0}},n={args:{...r,hideOptionalLabel:!0}},i={args:{...r,disabled:!0}},m={args:{...r,invalid:!0,message:"Country is required"}},u={args:{...r,block:!0}},l={render:function(){const[c,p]=L.useState([]);return t(d,{label:"Search users",value:c,onChange:p,loadOptions:async function(){return await new Promise(o=>setTimeout(o,1e3)),D},renderItem:(e,o)=>t(z,{itemLabel:e.label,inputValue:o,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(j,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t($,{value:e.unreadMessageCount,tone:"action"}):null})})}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var R,M,I;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(I=(M=m.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var h,w,E;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var V,q,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<NameOption[]>([]);
    return <ComboboxAsyncMulti label="Search users" value={value} onChange={setValue} loadOptions={async function loadOptions() {
      // Simulate a slow network connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NAME_OPTIONS;
    }} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={\`Role: \${item.jobTitle}\`} tertiaryText={\`Job: \${item.status}\`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;
  }
}`,...(B=(q=l.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const he=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","CustomRender"];export{a as Basic,u as Block,l as CustomRender,i as Disabled,n as HideOptionalLabel,m as Invalid,s as Required,he as __namedExportsOrder,Ie as default};
