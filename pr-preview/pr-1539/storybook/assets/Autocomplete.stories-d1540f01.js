import{j as a}from"./responsive-1d67a6a2.js";import{r as Y}from"./index-42611d8b.js";import{A as z}from"./Avatar-994f28fa.js";import{C as D,N as H}from"./test-utils-de1584cc.js";import{N as J}from"./NotificationBadge-f264d923.js";import{A as F}from"./AutocompleteRenderItem-aade2c21.js";import{C as U}from"./ComboboxListItem-0acb222d.js";import"./Combobox-137b4b5f.js";import"./ComboboxMulti-7143082b.js";import"./ComboboxAsync-b5cdc439.js";import"./ComboboxAsyncMulti-f71f0c73.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./useId-d335a68c.js";import"./ComboboxMultiBase-1649accc.js";import"./index-4d501b15.js";import"./tslib.es6-44ce41f1.js";import"./Popover-7f6cfd9c.js";import"./index-7a46b491.js";import"./TextInput-6e29e5bf.js";import"./Field-20b34c68.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./useTernaryState-6ea40a94.js";import"./mergeRefs-868b543a.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./Button-e28534e8.js";import"./ButtonGroup-20aae35f.js";import"./useAsync-0e212593.js";const Le={title:"forms/Autocomplete",component:F,args:{label:"Find your country",hint:"Start typing to see results",loadOptions:async function(){return await new Promise(r=>setTimeout(r,1e3)),D}}},t={args:{}},o={args:{required:!0}},s={args:{hideOptionalLabel:!0}},n={args:{disabled:!0}},i={args:{invalid:!0,message:"Country is required"}},m={args:{block:!0}},u={args:{emptyResultsMessage:"No countries were found"}},p={args:{hideOptionalLabel:!0,label:"Choose a Star Wars character",loadOptions:async function(r){return(await fetch(`https://swapi.dev/api/people/?search=${r}`).then(e=>e.json())).results.map(e=>({label:e.name,value:e.name,name:e.name,birthYear:e.birth_year,hairColor:e.hair_color}))}}},l={render:function(){const[r,g]=Y.useState(null);return a(F,{label:"Search users",value:r,onChange:g,loadOptions:async function(){return await new Promise(c=>setTimeout(c,1e3)),H},renderItem:(e,c)=>a(U,{itemLabel:e.label,inputValue:c,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:a(z,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?a(J,{value:e.unreadMessageCount,tone:"action"}):null})})}};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var O,C,S;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,v,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true
  }
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var R,w,A;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(A=(w=n.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var T,E,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    invalid: true,
    message: 'Country is required'
  }
}`,...(x=(E=i.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,_,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    block: true
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var L,P,j;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    emptyResultsMessage: 'No countries were found'
  }
}`,...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var q,B,$;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    hideOptionalLabel: true,
    label: 'Choose a Star Wars character',
    loadOptions: async function loadOptionsFromStarWarsApi(inputValue: string) {
      const response = await fetch(\`https://swapi.dev/api/people/?search=\${inputValue}\`).then(r => r.json());
      return response.results.map((result: {
        name: string;
        birth_year: string;
        hair_color: string;
      }) => ({
        label: result.name,
        value: result.name,
        name: result.name,
        birthYear: result.birth_year,
        hairColor: result.hair_color
      }));
    }
  }
}`,...($=(B=p.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var k,V,W;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function Render() {
    const [value, onChange] = useState<NameOption | null>(null);
    return <Autocomplete label="Search users" value={value} onChange={onChange} loadOptions={async function loadOptions() {
      // Simulate a slow network connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NAME_OPTIONS;
    }} renderItem={(item, inputValue) => <AutocompleteRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={\`Role: \${item.jobTitle}\`} tertiaryText={\`Job: \${item.status}\`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;
  }
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const Pe=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","CustomEmptyResultsMessage","ExternalAPI","CustomRender"];export{t as Basic,m as Block,u as CustomEmptyResultsMessage,l as CustomRender,n as Disabled,p as ExternalAPI,s as HideOptionalLabel,i as Invalid,o as Required,Pe as __namedExportsOrder,Le as default};
