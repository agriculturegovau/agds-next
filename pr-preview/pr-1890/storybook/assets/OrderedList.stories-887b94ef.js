import{a as t,j as r}from"./responsive-22d1c539.js";import{S as p}from"./Stack-e6a92433.js";import{T as I}from"./Text-03708b2d.js";import{O as s}from"./OrderedList-078cc31c.js";import{L as e}from"./ListItem-aaab0c0d.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";const k={title:"Content/List/OrderedList",component:s},i={render:n=>t(p,{gap:1,children:[r(I,{as:"p",children:"This is a paragraph, wrapped in a Stack."}),t(s,{...n,children:[r(e,{children:"Item 1"}),r(e,{children:"Item 2"}),r(e,{children:"Item 3"})]})]})},d={render:n=>t(s,{...n,children:[t(e,{children:["Ordered List level 1",t(s,{children:[r(e,{children:"Ordered List level 2"}),t(e,{children:["Ordered List level 2",t(s,{children:[r(e,{children:"Ordered List level 3"}),r(e,{children:"Ordered List level 3"})]})]})]})]}),r(e,{children:"Ordered List level 1"}),r(e,{children:"Ordered List level 1"})]})};var a,m,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Stack gap={1}>
            <Text as="p">This is a paragraph, wrapped in a Stack.</Text>
            <OrderedList {...args}>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
            </OrderedList>
        </Stack>
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var L,c,o;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <OrderedList {...args}>
            <ListItem>
                Ordered List level 1
                <OrderedList>
                    <ListItem>Ordered List level 2</ListItem>
                    <ListItem>
                        Ordered List level 2
                        <OrderedList>
                            <ListItem>Ordered List level 3</ListItem>
                            <ListItem>Ordered List level 3</ListItem>
                        </OrderedList>
                    </ListItem>
                </OrderedList>
            </ListItem>
            <ListItem>Ordered List level 1</ListItem>
            <ListItem>Ordered List level 1</ListItem>
        </OrderedList>
}`,...(o=(c=d.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const j=["Basic","Nested"];export{i as Basic,d as Nested,j as __namedExportsOrder,k as default};
