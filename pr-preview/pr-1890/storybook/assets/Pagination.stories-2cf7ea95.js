import{j as v}from"./responsive-123a9343.js";import{r as j}from"./index-3b9dd0eb.js";import{P as S}from"./Pagination-9e8bf9a5.js";import{i as h}from"./PaginationItemsPerPageSelect-d9935cfc.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Text-ade3e1ab.js";import"./Box-c8c0d4bd.js";import"./Stack-938d29d6.js";import"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import"./ExternalLinkCallout-dac509ef.js";import"./WebsiteIcon-a62a72af.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./useId-1d8fde67.js";const Z={title:"navigation/Pagination",component:S,args:{currentPage:5,totalPages:10,generateHref:o=>`#${o}`}},r={},t={args:{currentPage:5,totalPages:300}},a={args:{windowLimit:5,currentPage:5,totalPages:300}},n={args:{currentPage:5,itemRangeText:h({totalItems:100,currentPage:5,itemsPerPage:10,singularNoun:"certificate",pluralNoun:"certificates"})}},s={args:{currentPage:1,itemsPerPage:10},render:function(e){const[w,C]=j.useState(e.itemsPerPage||10);return v(S,{...e,itemsPerPage:w,onItemsPerPageChange:L=>C(L),itemRangeText:h({totalItems:100,currentPage:e.currentPage??1,itemsPerPage:e.itemsPerPage??10,singularNoun:"certificate",pluralNoun:"certificates"})})}};var i,m,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,P,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 300
  }
}`,...(u=(P=t.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    windowLimit: 5,
    currentPage: 5,
    totalPages: 300
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var f,x,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    itemRangeText: generatePaginationRangeText({
      totalItems: 100,
      currentPage: 5,
      itemsPerPage: 10,
      singularNoun: 'certificate',
      pluralNoun: 'certificates'
    })
  }
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var R,T,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    itemsPerPage: 10
  },
  render: function Render(args) {
    const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage || 10);
    return <Pagination {...args} itemsPerPage={itemsPerPage} onItemsPerPageChange={val => setItemsPerPage(val)} itemRangeText={generatePaginationRangeText({
      totalItems: 100,
      currentPage: args.currentPage ?? 1,
      itemsPerPage: args.itemsPerPage ?? 10,
      singularNoun: 'certificate',
      pluralNoun: 'certificates'
    })} />;
  }
}`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const ee=["Basic","ManyPages","CustomLimit","WithRangeText","ItemsPerPage"];export{r as Basic,a as CustomLimit,s as ItemsPerPage,t as ManyPages,n as WithRangeText,ee as __namedExportsOrder,Z as default};
