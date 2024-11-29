import{j as e,a as L}from"./responsive-22d1c539.js";import"./Stack-e6a92433.js";import{B as R}from"./Box-cc8e6f8e.js";import{T as x}from"./Text-03708b2d.js";import{T as k,a as z,b as F,c as S}from"./Tags-e8fec669.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./mergeRefs-868b543a.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";import"./ExternalLinkCallout-896682bb.js";import"./WebsiteIcon-da68083c.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ButtonGroup-5c583b5f.js";const Y={title:"content/Tags",component:k,args:{heading:e(x,{as:"h2",fontWeight:"bold",children:"Tags:"})}},_=[{label:"Foo"},{label:"Bar"},{label:"Baz"}],u=[{href:"#",label:"Foo"},{href:"#",label:"Bar"},{href:"#",label:"Baz"}],a={args:{items:_}},r={args:{items:u}},s={args:{items:[{label:"Foo",onRemove:console.log},{label:"Bar",onRemove:console.log},{label:"Baz",onRemove:console.log}]}},o=()=>L(S,{children:[e(x,{as:"h2",fontWeight:"bold",children:"Tags:"}),e(F,{children:u.map(({href:f,label:B},v)=>e(R,{as:"li",children:e(z,{href:f,children:B})},v))})]});o.__docgenInfo={description:"",methods:[],displayName:"Modular"};var n,t,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    items: exampleItems
  }
}`,...(m=(t=a.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: exampleLinks
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,g,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var b,h,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => <TagsContainer>
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
    </TagsContainer>`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const Z=["Basic","Links","Removable","Modular"];export{a as Basic,r as Links,o as Modular,s as Removable,Z as __namedExportsOrder,Y as default};
