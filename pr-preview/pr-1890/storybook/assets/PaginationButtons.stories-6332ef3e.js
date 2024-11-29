import{j as t}from"./responsive-22d1c539.js";import{r as m}from"./index-f0f3a68d.js";import{P as i}from"./PaginationButtons-1264965d.js";import{i as j}from"./PaginationItemsPerPageSelect-d8383ea4.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Text-03708b2d.js";import"./Box-cc8e6f8e.js";import"./Stack-e6a92433.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";import"./ExternalLinkCallout-896682bb.js";import"./WebsiteIcon-da68083c.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./useId-bf1c3739.js";const $={title:"navigation/Pagination/PaginationButtons",component:i,args:{totalPages:10}},P=e=>{const[r,g]=m.useState(5);return t(i,{...e,currentPage:r,onChange:g})},a={render:e=>t(P,{...e})},n={render:e=>t(P,{...e}),args:{totalPages:300}},s={render:e=>t(P,{...e}),args:{windowLimit:5,totalPages:300}},o={args:{currentPage:1,itemsPerPage:10},render:function(r){const[g,h]=m.useState(r.currentPage||1),[B,w]=m.useState(r.itemsPerPage||10),L=j({totalItems:100,currentPage:r.currentPage??1,itemsPerPage:r.itemsPerPage??10});return t(i,{...r,currentPage:g,onChange:h,itemsPerPage:B,onItemsPerPageChange:v=>w(v),itemRangeText:L})}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Template {...args} />
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,l,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Template {...args} />,
  args: {
    totalPages: 300
  }
}`,...(C=(l=n.parameters)==null?void 0:l.docs)==null?void 0:C.source}}};var x,T,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Template {...args} />,
  args: {
    windowLimit: 5,
    totalPages: 300
  }
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var S,R,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    itemsPerPage: 10
  },
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage || 10);
    const itemRangeText = generatePaginationRangeText({
      totalItems: 100,
      currentPage: args.currentPage ?? 1,
      itemsPerPage: args.itemsPerPage ?? 10
    });
    return <PaginationButtons {...args} currentPage={currentPage} onChange={setCurrentPage} itemsPerPage={itemsPerPage} onItemsPerPageChange={val => setItemsPerPage(val)} itemRangeText={itemRangeText} />;
  }
}`,...(f=(R=o.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const ee=["Basic","ManyPages","CustomLimit","ItemsPerPage"];export{a as Basic,s as CustomLimit,o as ItemsPerPage,n as ManyPages,ee as __namedExportsOrder,$ as default};
