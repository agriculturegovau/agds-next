import{j as v}from"./responsive-22d1c539.js";import{r as j}from"./index-f0f3a68d.js";import{P as S}from"./Pagination-65279963.js";import{i as h}from"./PaginationItemsPerPageSelect-3f43cd31.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Text-03708b2d.js";import"./Box-cc8e6f8e.js";import"./Stack-e6a92433.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import"./ExternalLinkCallout-896682bb.js";import"./WebsiteIcon-03a55100.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./useId-bf1c3739.js";const Z={title:"navigation/Pagination",component:S,args:{currentPage:5,totalPages:10,generateHref:o=>`#${o}`}},r={},t={args:{currentPage:5,totalPages:300}},a={args:{windowLimit:5,currentPage:5,totalPages:300}},n={args:{currentPage:5,itemRangeText:h({totalItems:100,currentPage:5,itemsPerPage:10,singularNoun:"certificate",pluralNoun:"certificates"})}},s={args:{currentPage:1,itemsPerPage:10},render:function(e){const[w,C]=j.useState(e.itemsPerPage||10);return v(S,{...e,itemsPerPage:w,onItemsPerPageChange:L=>C(L),itemRangeText:h({totalItems:100,currentPage:e.currentPage??1,itemsPerPage:e.itemsPerPage??10,singularNoun:"certificate",pluralNoun:"certificates"})})}};var i,m,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,P,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
