import{T as x}from"./TaskList-22f13f8e.js";import"./responsive-123a9343.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./Heading-53d486d1.js";import"./Text-ade3e1ab.js";import"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import"./ExternalLinkCallout-dac509ef.js";import"./WebsiteIcon-a62a72af.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";const H={title:"forms/TaskList",component:x,args:{}},a=[{href:"#",label:"Check eligibility",message:"Short description of the task",status:"done"},{href:"#",label:"Personal details",message:"Short description of the task",status:"doneRecently"},{href:"#",label:"Business details",message:"Short description of the task",status:"doing"},{href:"#",label:"Export",message:"Short description of the task",status:"todo"},{href:"#",label:"Review and submit",message:"Not available until previous tasks are done",status:"blocked"}],b=a.map(e=>({...e,onClick:console.log})).map(e=>("href"in e&&delete e.href,e)),r={args:{items:a}},t={args:{items:a,ordered:!0}},s={args:{items:b}},o={args:{items:b,ordered:!0}};var m,i,n;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
