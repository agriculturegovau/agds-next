import{j as U}from"./responsive-22d1c539.js";import{r as W}from"./index-f0f3a68d.js";import{T as u}from"./TimePicker-f454df86.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./ComboboxBase-89095c8a.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./TextInput-72cf6946.js";import"./Field-ef82e19c.js";import"./useId-bf1c3739.js";import"./Text-03708b2d.js";import"./WebsiteIcon-03a55100.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./ComboboxListError-00d85f32.js";import"./ComboboxListEmptyResults-235dd900.js";import"./Button-1a082b6d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./utils-63a6309c.js";import"./index-67ce947c.js";const Br={title:"Forms/TimePicker",component:u,args:{label:"Select a time",hint:"Start typing to see results"},render:function(M){const[N,Q]=W.useState(null);return U(u,{...M,value:N,onChange:Q})}},r={},e={args:{min:"09:00",max:"17:00"}},a={args:{interval:60}},s={args:{timeFormat:"HH:mm"}},o={args:{interval:60,min:"09:00",max:"17:00",timeFormat:"HH:mm"}},t={args:{required:!0}},m={args:{hideOptionalLabel:!0}},i={args:{disabled:!0}},n={args:{invalid:!0,message:"Time is required"}},c={args:{block:!0}},p={args:{clearable:!0}};var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,S,v;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    min: '09:00',
    max: '17:00'
  }
}`,...(v=(S=e.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var C,H,T;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    interval: 60
  }
}`,...(T=(H=a.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var F,x,k;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    timeFormat: 'HH:mm'
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var q,I,R;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    interval: 60,
    min: '09:00',
    max: '17:00',
    timeFormat: 'HH:mm'
  }
}`,...(R=(I=o.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var f,O,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(h=(O=t.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var B,L,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  }
}`,...(P=(L=m.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var j,y,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var D,E,_;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    invalid: true,
    message: 'Time is required'
  }
}`,...(_=(E=n.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var V,w,z;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    clearable: true
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Lr=["Basic","CustomRange","CustomInterval","CustomTimeFormat","CustomRangeIntervalAndTimeFormat","Required","HideOptionalLabel","Disabled","Invalid","Block","Clearable"];export{r as Basic,c as Block,p as Clearable,a as CustomInterval,e as CustomRange,o as CustomRangeIntervalAndTimeFormat,s as CustomTimeFormat,i as Disabled,m as HideOptionalLabel,n as Invalid,t as Required,Lr as __namedExportsOrder,Br as default};
