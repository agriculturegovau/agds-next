import{j as t}from"./responsive-123a9343.js";import{r as L}from"./index-3b9dd0eb.js";import{A as j}from"./Avatar-cb5b4ba0.js";import{N as $}from"./NotificationBadge-862122b9.js";import{C as d}from"./ComboboxAsyncMulti-3af3df00.js";import{C as z}from"./ComboboxRenderItem-a32aac8f.js";import{C as P,N as D}from"./test-utils-de1584cc.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./ComboboxBase-68405d13.js";import"./index-8d47fad6.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./WebsiteIcon-a62a72af.js";import"./ComboboxListItem-50db01ca.js";import"./ComboboxListLoading-181a8c4d.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./ComboboxListError-97797edb.js";import"./ComboboxListEmptyResults-a06bdd17.js";import"./Button-12960031.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./ComboboxMultiBase-55ecdd36.js";import"./useTernaryState-a0ca107e.js";import"./ComboboxTag-3bd74b3f.js";import"./useAsync-7298cf8d.js";const Ie={title:"forms/Combobox/ComboboxAsyncMulti",component:d,render:function(c){const[p,e]=L.useState([]);return t(d,{...c,value:p,onChange:e,loadOptions:async function(){return await new Promise(_=>setTimeout(_,1e3)),P}})}},r={label:"Select country",hint:"Start typing to see results",options:P},a={args:r},s={args:{...r,required:!0}},n={args:{...r,hideOptionalLabel:!0}},i={args:{...r,disabled:!0}},m={args:{...r,invalid:!0,message:"Country is required"}},u={args:{...r,block:!0}},l={render:function(){const[c,p]=L.useState([]);return t(d,{label:"Search users",value:c,onChange:p,loadOptions:async function(){return await new Promise(o=>setTimeout(o,1e3)),D},renderItem:(e,o)=>t(z,{itemLabel:e.label,inputValue:o,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(j,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t($,{value:e.unreadMessageCount,tone:"action"}):null})})}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
