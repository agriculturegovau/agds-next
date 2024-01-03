import{j as o}from"./responsive-1d67a6a2.js";import{r as $}from"./index-42611d8b.js";import{A as H}from"./Avatar-994f28fa.js";import{N as J}from"./NotificationBadge-f264d923.js";import{C as g}from"./ComboboxAsync-b5cdc439.js";import{C as U}from"./ComboboxListItem-0acb222d.js";import{C as V,N as Y}from"./test-utils-de1584cc.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./ComboboxMultiBase-1649accc.js";import"./index-4d501b15.js";import"./tslib.es6-44ce41f1.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./useId-d335a68c.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./useTernaryState-6ea40a94.js";import"./mergeRefs-868b543a.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./Button-e28534e8.js";import"./ButtonGroup-20aae35f.js";import"./useAsync-0e212593.js";const he={title:"forms/Combobox/ComboboxAsync",component:g,render:function(p){const[d,e]=$.useState(null);return o(g,{...p,value:d,onChange:e,loadOptions:async function(){return await new Promise(D=>setTimeout(D,1e3)),V}})}},r={label:"Select country",hint:"Start typing to see results",options:V},t={args:r},s={args:{...r,required:!0}},n={args:{...r,hideOptionalLabel:!0}},i={args:{...r,disabled:!0}},m={args:{...r,invalid:!0,message:"Country is required"}},u={args:{...r,block:!0}},l={args:{...r,clearable:!0}},c={render:function(){const[p,d]=$.useState(null);return o(g,{label:"Search users",value:p,onChange:d,loadOptions:async function(){return await new Promise(a=>setTimeout(a,1e3)),Y},renderItem:(e,a)=>o(U,{itemLabel:e.label,inputValue:a,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:o(H,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?o(J,{value:e.unreadMessageCount,tone:"action"}):null})})}};var b,f,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,O,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var h,I,w;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true,
    message: 'Country is required'
  }
}`,...(w=(I=m.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var E,q,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var L,M,P;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    clearable: true
  }
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var k,_,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function Render() {
    const [value, onChange] = useState<NameOption | null>(null);
    return <ComboboxAsync label="Search users" value={value} onChange={onChange} loadOptions={async function loadOptions() {
      // Simulate a slow network connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NAME_OPTIONS;
    }} renderItem={(item, inputValue) => <ComboboxRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={\`Role: \${item.jobTitle}\`} tertiaryText={\`Job: \${item.status}\`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;
  }
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const Ie=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","Clearable","CustomRender"];export{t as Basic,u as Block,l as Clearable,c as CustomRender,i as Disabled,n as HideOptionalLabel,m as Invalid,s as Required,Ie as __namedExportsOrder,he as default};
