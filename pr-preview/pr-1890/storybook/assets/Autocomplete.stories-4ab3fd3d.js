import{j as t}from"./responsive-123a9343.js";import{r as Y}from"./index-3b9dd0eb.js";import{A as z}from"./Avatar-cb5b4ba0.js";import{C as D,N as H}from"./test-utils-de1584cc.js";import{N as J}from"./NotificationBadge-862122b9.js";import{A as F}from"./Autocomplete-5380edfc.js";import"./Combobox-0ecd19c6.js";import"./ComboboxMulti-5a3f8fd8.js";import"./ComboboxAsync-4e395cb5.js";import"./ComboboxAsyncMulti-3af3df00.js";import{C as U}from"./ComboboxRenderItem-a32aac8f.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./ComboboxBase-68405d13.js";import"./index-8d47fad6.js";import"./Popover-91e83479.js";import"./index-5ccf1b6b.js";import"./TextInput-b3ca105d.js";import"./Field-b78d080b.js";import"./useId-1d8fde67.js";import"./WebsiteIcon-a62a72af.js";import"./ComboboxListItem-50db01ca.js";import"./ComboboxListLoading-181a8c4d.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./ComboboxListError-97797edb.js";import"./ComboboxListEmptyResults-a06bdd17.js";import"./Button-12960031.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./ComboboxMultiBase-55ecdd36.js";import"./useTernaryState-a0ca107e.js";import"./ComboboxTag-3bd74b3f.js";import"./useAsync-7298cf8d.js";const Be={title:"forms/Autocomplete",component:F,args:{label:"Find your country",hint:"Start typing to see results",loadOptions:async function(){return await new Promise(r=>setTimeout(r,1e3)),D}}},a={args:{}},o={args:{required:!0}},s={args:{hideOptionalLabel:!0}},n={args:{disabled:!0}},i={args:{invalid:!0,message:"Country is required"}},m={args:{block:!0}},p={args:{emptyResultsMessage:"No countries were found"}},u={args:{hideOptionalLabel:!0,label:"Choose a Star Wars character",loadOptions:async function(r){return(await fetch(`https://swapi.dev/api/people/?search=${r}`).then(e=>e.json())).results.map(e=>({label:e.name,value:e.name,name:e.name,birthYear:e.birth_year,hairColor:e.hair_color}))}}},l={render:function(){const[r,g]=Y.useState(null);return t(F,{label:"Search users",value:r,onChange:g,loadOptions:async function(){return await new Promise(c=>setTimeout(c,1e3)),H},renderItem:(e,c)=>t(U,{itemLabel:e.label,inputValue:c,secondaryText:`Role: ${e.jobTitle}`,tertiaryText:`Job: ${e.status}`,beforeElement:t(z,{name:e.fullName,size:"sm",tone:"action"}),endElement:e.unreadMessageCount>0?t(J,{value:e.unreadMessageCount,tone:"action"}):null})})}};var b,h,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
