import{T as x}from"./TaskList-4a0849e5.js";import"./responsive-1d67a6a2.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Heading-1a35fe7d.js";import"./Text-d916011d.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";const J={title:"forms/TaskList",component:x,args:{}},a=[{href:"#",label:"Check eligibility",message:"Short description of the task",status:"done"},{href:"#",label:"Personal details",message:"Short description of the task",status:"doneRecently"},{href:"#",label:"Business details",message:"Short description of the task",status:"doing"},{href:"#",label:"Export",message:"Short description of the task",status:"todo"},{href:"#",label:"Review and submit",message:"Not available until previous tasks are done",status:"blocked"}],b=a.map(e=>({...e,onClick:console.log})).map(e=>("href"in e&&delete e.href,e)),r={args:{items:a}},t={args:{items:a,ordered:!0}},s={args:{items:b}},o={args:{items:b,ordered:!0}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const K=["Unordered","Ordered","Buttons","OrderedButtons"];export{s as Buttons,t as Ordered,o as OrderedButtons,r as Unordered,K as __namedExportsOrder,J as default};
