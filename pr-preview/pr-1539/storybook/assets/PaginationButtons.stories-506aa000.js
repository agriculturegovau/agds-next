import{j as t}from"./responsive-1d67a6a2.js";import{r as m}from"./index-42611d8b.js";import{P as i}from"./PaginationButtons-1e492907.js";import{g as j}from"./PaginationContainer-a1eb2175.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-d916011d.js";import"./Box-0bbf8d6d.js";import"./Stack-43f3e7c4.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";const $={title:"navigation/Pagination/PaginationButtons",component:i,args:{totalPages:10}},P=e=>{const[r,g]=m.useState(5);return t(i,{...e,currentPage:r,onChange:g})},a={render:e=>t(P,{...e})},n={render:e=>t(P,{...e}),args:{totalPages:300}},s={render:e=>t(P,{...e}),args:{windowLimit:5,totalPages:300}},o={args:{currentPage:1,itemsPerPage:10},render:function(r){const[g,h]=m.useState(r.currentPage||1),[B,w]=m.useState(r.itemsPerPage||10),L=j({totalItems:100,currentPage:r.currentPage??1,itemsPerPage:r.itemsPerPage??10});return t(i,{...r,currentPage:g,onChange:h,itemsPerPage:B,onItemsPerPageChange:v=>w(v),itemRangeText:L})}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
