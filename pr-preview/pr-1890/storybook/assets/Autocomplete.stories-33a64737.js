import{j as t}from"./responsive-22d1c539.js";import{r as Y}from"./index-f0f3a68d.js";import{A as z}from"./Avatar-aaef2e20.js";import{C as D,N as H}from"./test-utils-de1584cc.js";import{N as J}from"./NotificationBadge-5114eb4c.js";import{A as F}from"./Autocomplete-1866d2f0.js";import"./Combobox-52102b5c.js";import"./ComboboxMulti-9b3eae91.js";import"./ComboboxAsync-cd29bbe4.js";import"./ComboboxAsyncMulti-0c07e7e9.js";import{C as U}from"./ComboboxRenderItem-89f34ee2.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Text-03708b2d.js";import"./ComboboxBase-4263de0d.js";import"./index-1f6fda92.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./TextInput-b5049985.js";import"./Field-d96b22a3.js";import"./useId-bf1c3739.js";import"./WebsiteIcon-da68083c.js";import"./ComboboxListItem-78231edd.js";import"./ComboboxListLoading-39269b7f.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./ComboboxListError-c00a0203.js";import"./ComboboxListEmptyResults-235dd900.js";import"./Button-1a082b6d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./ComboboxMultiBase-44af51ab.js";import"./useTernaryState-ed86673f.js";import"./ComboboxTag-e5f00fde.js";import"./useAsync-987bb331.js";const Be={title:"forms/Autocomplete",component:F,args:{label:"Find your country",hint:"Start typing to see results",loadOptions:async function(){return await new Promise(r=>setTimeout(r,1e3)),D}}},a={args:{}},o={args:{required:!0}},s={args:{hideOptionalLabel:!0}},n={args:{disabled:!0}},i={args:{invalid:!0,message:"Country is required"}},m={args:{block:!0}},p={args:{emptyResultsMessage:"No countries were found"}},u={args:{hideOptionalLabel:!0,label:"Choose a Star Wars character",loadOptions:async function(r){return(await fetch(`https://swapi.dev/api/people/?search=${r}`).then(e=>e.json())).results.map(e=>({label:e.name,value:e.name,name:e.name,birthYear:e.birth_year,hairColor:e.hair_color}))}}},l={render:function(){const[r,g]=Y.useState(null);return t(F,{label:"Search users",value:r,onChange:g,loadOptions:async function(){return await new Promise(c=>setTimeout(c,1e3)),H},renderItem:(e,c)=>t(U,{itemLabel:e.label,inputValue:c,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(z,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t(J,{value:e.unreadMessageCount,tone:"action"}):null})})}};var b,h,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var O,S,y;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,v,N;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var L,P,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    emptyResultsMessage: 'No countries were found'
  }
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var j,q,B;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var $,k,W;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<NameOption | null>(null);
    return <Autocomplete label="Search users" value={value} onChange={setValue} loadOptions={async function loadOptions() {
      // Simulate a slow network connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NAME_OPTIONS;
    }} renderItem={(item, inputValue) => <AutocompleteRenderItem itemLabel={item.label} inputValue={inputValue} secondaryText={\`Role: \${item.jobTitle}\`} tertiaryText={\`Job: \${item.status}\`} beforeElement={<Avatar name={item.fullName} size="sm" tone="action" />} endElement={item.unreadMessageCount > 0 ? <NotificationBadge value={item.unreadMessageCount} tone="action" /> : null} />} />;
  }
}`,...(W=(k=l.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};const $e=["Basic","Required","HideOptionalLabel","Disabled","Invalid","Block","CustomEmptyResultsMessage","ExternalAPI","CustomRender"];export{a as Basic,m as Block,p as CustomEmptyResultsMessage,l as CustomRender,n as Disabled,u as ExternalAPI,s as HideOptionalLabel,i as Invalid,o as Required,$e as __namedExportsOrder,Be as default};
