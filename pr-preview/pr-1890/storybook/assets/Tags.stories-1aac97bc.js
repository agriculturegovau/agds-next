import{j as e,a as L}from"./responsive-123a9343.js";import"./Stack-938d29d6.js";import{B as R}from"./Box-c8c0d4bd.js";import{T as x}from"./Text-ade3e1ab.js";import{T as k,a as z,b as F,c as S}from"./Tags-3216cbdc.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./mergeRefs-868b543a.js";import"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import"./ExternalLinkCallout-dac509ef.js";import"./WebsiteIcon-a62a72af.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ButtonGroup-399a126c.js";const Y={title:"content/Tags",component:k,args:{heading:e(x,{as:"h2",fontWeight:"bold",children:"Tags:"})}},_=[{label:"Foo"},{label:"Bar"},{label:"Baz"}],u=[{href:"#",label:"Foo"},{href:"#",label:"Bar"},{href:"#",label:"Baz"}],a={args:{items:_}},r={args:{items:u}},s={args:{items:[{label:"Foo",onRemove:console.log},{label:"Bar",onRemove:console.log},{label:"Baz",onRemove:console.log}]}},o=()=>L(S,{children:[e(x,{as:"h2",fontWeight:"bold",children:"Tags:"}),e(F,{children:u.map(({href:f,label:B},v)=>e(R,{as:"li",children:e(z,{href:f,children:B})},v))})]});o.__docgenInfo={description:"",methods:[],displayName:"Modular"};var n,t,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
