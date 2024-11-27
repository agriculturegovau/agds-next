import{j as o}from"./responsive-123a9343.js";import{r as j}from"./index-3b9dd0eb.js";import{A as H}from"./Avatar-cb5b4ba0.js";import{N as J}from"./NotificationBadge-862122b9.js";import{C as g}from"./ComboboxAsync-4e395cb5.js";import{C as U}from"./ComboboxRenderItem-a32aac8f.js";import{C as $,N as Y}from"./test-utils-de1584cc.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./ComboboxBase-68405d13.js";import"./index-8d47fad6.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./WebsiteIcon-a62a72af.js";import"./ComboboxListItem-50db01ca.js";import"./ComboboxListLoading-181a8c4d.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./ComboboxListError-97797edb.js";import"./ComboboxListEmptyResults-a06bdd17.js";import"./Button-12960031.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./ComboboxMultiBase-55ecdd36.js";import"./useTernaryState-a0ca107e.js";import"./ComboboxTag-3bd74b3f.js";import"./useAsync-7298cf8d.js";const qe={title:"forms/Combobox/ComboboxAsync",component:g,render:function(p){const[d,e]=j.useState(null);return o(g,{...p,value:d,onChange:e,loadOptions:async function(){return await new Promise(D=>setTimeout(D,1e3)),$}})}},r={label:"Select country",hint:"Start typing to see results",options:$},a={args:r},s={args:{...r,required:!0}},n={args:{...r,hideOptionalLabel:!0}},i={args:{...r,disabled:!0}},m={args:{...r,invalid:!0,message:"Country is required"}},u={args:{...r,block:!0}},l={args:{...r,clearable:!0}},c={render:function(){const[p,d]=j.useState(null);return o(g,{label:"Search users",value:p,onChange:d,loadOptions:async function(){return await new Promise(t=>setTimeout(t,1e3)),Y},renderItem:(e,t)=>o(U,{itemLabel:e.label,inputValue:t,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:o(H,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?o(J,{value:e.unreadMessageCount,tone:"action"}):null})})}};var b,f,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,O,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  }
}`,...(A=(O=s.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var y,v,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    hideOptionalLabel: true
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var N,T,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var I,h,w;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(w=(h=m.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var E,V,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var B,L,M;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    clearable: true
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,k,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<NameOption | null>(null);
    return <ComboboxAsync label="Search users" value={value} onChange={setValue} loadOptions={async function loadOptions() {
      // Simulate a slow network connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NAME_OPTIONS;
    }} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={\`Role: \${item.jobTitle}\`} tertiaryText={\`Job: \${item.status}\`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;
  }
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const Be=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","Clearable","CustomRender"];export{a as Basic,u as Block,l as Clearable,c as CustomRender,i as Disabled,n as HideOptionalLabel,m as Invalid,s as Required,Be as __namedExportsOrder,qe as default};
