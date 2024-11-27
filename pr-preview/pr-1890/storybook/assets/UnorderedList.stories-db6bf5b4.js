import{a as t,j as r}from"./responsive-123a9343.js";import{S as p}from"./Stack-938d29d6.js";import{T as I}from"./Text-ade3e1ab.js";import{U as s}from"./UnorderedList-9f0ec0d3.js";import{L as e}from"./ListItem-f0e45878.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";const T={title:"Content/List/UnorderedList",component:s},i={render:n=>t(p,{gap:1,children:[r(I,{as:"p",children:"This is a paragraph, wrapped in a Stack."}),t(s,{...n,children:[r(e,{children:"Item 1"}),r(e,{children:"Item 2"}),r(e,{children:"Item 3"})]})]})},d={render:n=>t(s,{...n,children:[t(e,{children:["Ordered List level 1",t(s,{children:[r(e,{children:"Ordered List level 2"}),t(e,{children:["Ordered List level 2",t(s,{children:[r(e,{children:"Ordered List level 3"}),r(e,{children:"Ordered List level 3"})]})]})]})]}),r(e,{children:"Ordered List level 1"}),r(e,{children:"Ordered List level 1"})]})};var a,m,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Stack gap={1}>
            <Text as="p">This is a paragraph, wrapped in a Stack.</Text>
            <UnorderedList {...args}>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
            </UnorderedList>
        </Stack>
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var o,L,c;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(L=d.parameters)==null?void 0:L.docs)==null?void 0:c.source}}};const k=["Basic","Nested"];export{i as Basic,d as Nested,k as __namedExportsOrder,T as default};
