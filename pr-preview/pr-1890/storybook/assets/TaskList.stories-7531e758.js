import{T as x}from"./TaskList-64878832.js";import"./responsive-22d1c539.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./Heading-85d6cea8.js";import"./Text-03708b2d.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import"./ExternalLinkCallout-896682bb.js";import"./WebsiteIcon-03a55100.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";const H={title:"forms/TaskList",component:x,args:{}},a=[{href:"#",label:"Check eligibility",message:"Short description of the task",status:"done"},{href:"#",label:"Personal details",message:"Short description of the task",status:"doneRecently"},{href:"#",label:"Business details",message:"Short description of the task",status:"doing"},{href:"#",label:"Export",message:"Short description of the task",status:"todo"},{href:"#",label:"Review and submit",message:"Not available until previous tasks are done",status:"blocked"}],b=a.map(e=>({...e,onClick:console.log})).map(e=>("href"in e&&delete e.href,e)),r={args:{items:a}},t={args:{items:a,ordered:!0}},s={args:{items:b}},o={args:{items:b,ordered:!0}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: exampleLinkItems
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,d,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: exampleLinkItems,
    ordered: true
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: exampleButtonItems
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: exampleButtonItems,
    ordered: true
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const J=["Unordered","Ordered","Buttons","OrderedButtons"];export{s as Buttons,t as Ordered,o as OrderedButtons,r as Unordered,J as __namedExportsOrder,H as default};
