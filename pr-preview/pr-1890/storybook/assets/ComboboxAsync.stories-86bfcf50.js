import{j as o}from"./responsive-22d1c539.js";import{r as j}from"./index-f0f3a68d.js";import{A as H}from"./Avatar-aaef2e20.js";import{N as J}from"./NotificationBadge-5114eb4c.js";import{C as g}from"./ComboboxAsync-cd29bbe4.js";import{C as U}from"./ComboboxRenderItem-89f34ee2.js";import{C as $,N as Y}from"./test-utils-de1584cc.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Text-03708b2d.js";import"./ComboboxBase-4263de0d.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./TextInput-b5049985.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./WebsiteIcon-da68083c.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./ComboboxListError-c00a0203.js";import"./ComboboxListEmptyResults-235dd900.js";import"./Button-1a082b6d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./ComboboxMultiBase-44af51ab.js";import"./useTernaryState-ed86673f.js";import"./ComboboxTag-e5f00fde.js";import"./useAsync-987bb331.js";const qe={title:"forms/Combobox/ComboboxAsync",component:g,render:function(p){const[d,e]=j.useState(null);return o(g,{...p,value:d,onChange:e,loadOptions:async function(){return await new Promise(D=>setTimeout(D,1e3)),$}})}},r={label:"Select country",hint:"Start typing to see results",options:$},a={args:r},s={args:{...r,required:!0}},n={args:{...r,hideOptionalLabel:!0}},i={args:{...r,disabled:!0}},m={args:{...r,invalid:!0,message:"Country is required"}},u={args:{...r,block:!0}},l={args:{...r,clearable:!0}},c={render:function(){const[p,d]=j.useState(null);return o(g,{label:"Search users",value:p,onChange:d,loadOptions:async function(){return await new Promise(t=>setTimeout(t,1e3)),Y},renderItem:(e,t)=>o(U,{itemLabel:e.label,inputValue:t,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:o(H,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?o(J,{value:e.unreadMessageCount,tone:"action"}):null})})}};var b,f,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
