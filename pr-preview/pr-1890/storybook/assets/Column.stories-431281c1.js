import{j as n,a as s}from"./responsive-123a9343.js";import"./Stack-938d29d6.js";import{B as R}from"./Box-c8c0d4bd.js";import{C as u,a as o}from"./Column-ae9e54d2.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";const D={title:"layout/Columns",component:u},l=()=>n(R,{background:"shadeAlt",padding:1}),a={args:{},render:m=>n(u,{...m,children:Array.from(Array(12)).map((k,p)=>n(l,{},p))})},r={args:{},render:m=>s(u,{...m,children:[n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:1,children:n(l,{})}),n(o,{columnSpan:2,children:n(l,{})}),n(o,{columnSpan:2,children:n(l,{})}),n(o,{columnSpan:2,children:n(l,{})}),n(o,{columnSpan:2,children:n(l,{})}),n(o,{columnSpan:2,children:n(l,{})}),n(o,{columnSpan:2,children:n(l,{})}),n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:4,children:n(l,{})}),n(o,{columnSpan:4,children:n(l,{})}),n(o,{columnSpan:4,children:n(l,{})}),n(o,{columnSpan:5,children:n(l,{})}),n(o,{columnSpan:5,children:n(l,{})}),n(o,{columnSpan:2,children:n(l,{})}),n(o,{columnSpan:6,children:n(l,{})}),n(o,{columnSpan:6,children:n(l,{})})]})},e={args:{cols:[1,2,4],gap:3},render:m=>n(u,{...m,children:Array.from(Array(4)).map((k,p)=>n(l,{},p))})},c={args:{rowGap:3,columnGap:.75},render:m=>s(u,{...m,children:[n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:3,children:n(l,{})}),n(o,{columnSpan:4,children:n(l,{})}),n(o,{columnSpan:4,children:n(l,{})}),n(o,{columnSpan:4,children:n(l,{})})]})},C={args:{cols:{xs:1,md:3},gap:2},render:m=>s(u,{...m,children:[n(l,{}),n(o,{columnSpan:2,children:n(l,{})})]})};var d,S,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: args => <Columns {...args}>
            {Array.from(Array(12)).map((_, idx) => <Cell key={idx} />)}
        </Columns>
}`,...(i=(S=a.parameters)==null?void 0:S.docs)==null?void 0:i.source}}};var h,t,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <Columns {...args}>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={1}>
                <Cell />
            </Column>
            <Column columnSpan={2}>
                <Cell />
            </Column>
            <Column columnSpan={2}>
                <Cell />
            </Column>
            <Column columnSpan={2}>
                <Cell />
            </Column>
            <Column columnSpan={2}>
                <Cell />
            </Column>
            <Column columnSpan={2}>
                <Cell />
            </Column>
            <Column columnSpan={2}>
                <Cell />
            </Column>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={4}>
                <Cell />
            </Column>
            <Column columnSpan={4}>
                <Cell />
            </Column>
            <Column columnSpan={4}>
                <Cell />
            </Column>
            <Column columnSpan={5}>
                <Cell />
            </Column>
            <Column columnSpan={5}>
                <Cell />
            </Column>
            <Column columnSpan={2}>
                <Cell />
            </Column>
            <Column columnSpan={6}>
                <Cell />
            </Column>
            <Column columnSpan={6}>
                <Cell />
            </Column>
        </Columns>
}`,...(g=(t=r.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};var x,y,A;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    cols: [1, 2, 4],
    gap: 3
  },
  render: args => <Columns {...args}>
            {Array.from(Array(4)).map((_, idx) => <Cell key={idx} />)}
        </Columns>
}`,...(A=(y=e.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var f,G,_;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    rowGap: 3,
    columnGap: 0.75
  },
  render: args => <Columns {...args}>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={3}>
                <Cell />
            </Column>
            <Column columnSpan={4}>
                <Cell />
            </Column>
            <Column columnSpan={4}>
                <Cell />
            </Column>
            <Column columnSpan={4}>
                <Cell />
            </Column>
        </Columns>
}`,...(_=(G=c.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var w,B,j;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    cols: {
      xs: 1,
      md: 3
    },
    gap: 2
  },
  render: args => <Columns {...args}>
            <Cell />
            <Column columnSpan={2}>
                <Cell />
            </Column>
        </Columns>
}`,...(j=(B=C.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const F=["Basic","ColSpans","Gap","RowAndColumnGaps","ThreeColumn"];export{a as Basic,r as ColSpans,e as Gap,c as RowAndColumnGaps,C as ThreeColumn,F as __namedExportsOrder,D as default};
