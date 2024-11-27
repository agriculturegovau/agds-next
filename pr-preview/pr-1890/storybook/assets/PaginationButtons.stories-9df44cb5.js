import{j as t}from"./responsive-123a9343.js";import{r as m}from"./index-3b9dd0eb.js";import{P as i}from"./PaginationButtons-63e5a631.js";import{i as j}from"./PaginationItemsPerPageSelect-d9935cfc.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Text-ade3e1ab.js";import"./Box-c8c0d4bd.js";import"./Stack-938d29d6.js";import"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import"./ExternalLinkCallout-dac509ef.js";import"./WebsiteIcon-a62a72af.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./useId-1d8fde67.js";const $={title:"navigation/Pagination/PaginationButtons",component:i,args:{totalPages:10}},P=e=>{const[r,g]=m.useState(5);return t(i,{...e,currentPage:r,onChange:g})},a={render:e=>t(P,{...e})},n={render:e=>t(P,{...e}),args:{totalPages:300}},s={render:e=>t(P,{...e}),args:{windowLimit:5,totalPages:300}},o={args:{currentPage:1,itemsPerPage:10},render:function(r){const[g,h]=m.useState(r.currentPage||1),[B,w]=m.useState(r.itemsPerPage||10),L=j({totalItems:100,currentPage:r.currentPage??1,itemsPerPage:r.itemsPerPage??10});return t(i,{...r,currentPage:g,onChange:h,itemsPerPage:B,onItemsPerPageChange:v=>w(v),itemRangeText:L})}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
