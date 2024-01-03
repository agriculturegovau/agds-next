import{a as t,j as r}from"./responsive-1d67a6a2.js";import{S as p}from"./Stack-43f3e7c4.js";import{T as I}from"./Text-d916011d.js";import{U as s}from"./UnorderedList-59dcb4a0.js";import{L as e}from"./ListItem-d7b239ae.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";const f={title:"Content/List/UnorderedList",component:s},i={render:n=>t(p,{gap:1,children:[r(I,{as:"p",children:"This is a paragraph, wrapped in a Stack."}),t(s,{...n,children:[r(e,{children:"Item 1"}),r(e,{children:"Item 2"}),r(e,{children:"Item 3"})]})]})},d={render:n=>t(s,{...n,children:[t(e,{children:["Ordered List level 1",t(s,{children:[r(e,{children:"Ordered List level 2"}),t(e,{children:["Ordered List level 2",t(s,{children:[r(e,{children:"Ordered List level 3"}),r(e,{children:"Ordered List level 3"})]})]})]})]}),r(e,{children:"Ordered List level 1"}),r(e,{children:"Ordered List level 1"})]})};var a,m,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Stack gap={1}>
            <Text as="p">This is a paragraph, wrapped in a Stack.</Text>
            <UnorderedList {...args}>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
            </UnorderedList>
        </Stack>
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var L,o,c;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <UnorderedList {...args}>
            <ListItem>
                Ordered List level 1
                <UnorderedList>
                    <ListItem>Ordered List level 2</ListItem>
                    <ListItem>
                        Ordered List level 2
                        <UnorderedList>
                            <ListItem>Ordered List level 3</ListItem>
                            <ListItem>Ordered List level 3</ListItem>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>
            </ListItem>
            <ListItem>Ordered List level 1</ListItem>
            <ListItem>Ordered List level 1</ListItem>
        </UnorderedList>
}`,...(c=(o=d.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const T=["Basic","Nested"];export{i as Basic,d as Nested,T as __namedExportsOrder,f as default};
