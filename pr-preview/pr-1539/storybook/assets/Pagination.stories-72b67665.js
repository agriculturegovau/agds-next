import{j as v}from"./responsive-1d67a6a2.js";import{r as j}from"./index-42611d8b.js";import{P as S}from"./Pagination-13569d02.js";import{g as h}from"./PaginationContainer-a1eb2175.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-d916011d.js";import"./Box-0bbf8d6d.js";import"./Stack-43f3e7c4.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";const Z={title:"navigation/Pagination",component:S,args:{currentPage:5,totalPages:10,generateHref:o=>`#${o}`}},r={},t={args:{currentPage:5,totalPages:300}},a={args:{windowLimit:5,currentPage:5,totalPages:300}},n={args:{currentPage:5,itemRangeText:h({totalItems:100,currentPage:5,itemsPerPage:10,singularNoun:"certificate",pluralNoun:"certificates"})}},s={args:{currentPage:1,itemsPerPage:10},render:function(e){const[w,C]=j.useState(e.itemsPerPage||10);return v(S,{...e,itemsPerPage:w,onItemsPerPageChange:L=>C(L),itemRangeText:h({totalItems:100,currentPage:e.currentPage??1,itemsPerPage:e.itemsPerPage??10,singularNoun:"certificate",pluralNoun:"certificates"})})}};var i,g,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var c,P,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
