import{j as e,a as L}from"./responsive-1d67a6a2.js";import"./Stack-43f3e7c4.js";import{B as R}from"./Box-0bbf8d6d.js";import{T as x}from"./Text-d916011d.js";import{a as k,T as z,c as F,b as S}from"./Tags-457ff773.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";const Z={title:"content/Tags",component:k,args:{heading:e(x,{as:"h2",fontWeight:"bold",children:"Tags:"})}},j=[{label:"Foo"},{label:"Bar"},{label:"Baz"}],u=[{href:"#",label:"Foo"},{href:"#",label:"Bar"},{href:"#",label:"Baz"}],o={args:{items:j}},a={args:{items:u}},r={args:{items:[{label:"Foo",onRemove:console.log},{label:"Bar",onRemove:console.log},{label:"Baz",onRemove:console.log}]}},s=()=>L(S,{children:[e(x,{as:"h2",fontWeight:"bold",children:"Tags:"}),e(F,{children:u.map(({href:f,label:B},v)=>e(R,{as:"li",children:e(z,{href:f,children:B})},v))})]});var n,t,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items: exampleItems
  }
}`,...(m=(t=o.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: exampleLinks
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,g,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Foo',
      onRemove: console.log
    }, {
      label: 'Bar',
      onRemove: console.log
    }, {
      label: 'Baz',
      onRemove: console.log
    }]
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var b,h,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => <TagsContainer>
        <Text as="h2" fontWeight="bold">
            Tags:
        </Text>
        <TagsList>
            {exampleLinks.map(({
      href,
      label
    }, idx) => <Box key={idx} as="li">
                    <Tag href={href}>{label}</Tag>
                </Box>)}
        </TagsList>
    </TagsContainer>`,...(T=(h=s.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const $=["Basic","Links","Removable","Modular"];export{o as Basic,a as Links,s as Modular,r as Removable,$ as __namedExportsOrder,Z as default};
