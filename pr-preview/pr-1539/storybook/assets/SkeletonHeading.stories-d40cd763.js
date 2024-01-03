import{j as n,a as o}from"./responsive-1d67a6a2.js";import{S as h}from"./Stack-43f3e7c4.js";import{C as s,a as u}from"./Column-d36c45c1.js";import{f as g}from"./Heading-1a35fe7d.js";import{S as l}from"./SkeletonHeading-dacb6dab.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./SkeletonBox-2334db4d.js";const w={title:"content/Skeleton/SkeletonHeading",component:l},a={args:{type:"h1",width:"100%"}},r={render:()=>n(h,{gap:1.5,children:["h1","h2","h3","h4","h5","h6"].map(e=>o(u,{gap:[.5,1.5],children:[n(s,{columnSpan:[12,6],children:n(l,{type:e},e)}),n(s,{columnSpan:[12,6],children:o(g,{type:e,border:!0,children:["Heading ",e.toLocaleUpperCase()]},e)})]},e))})};var t,p,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    type: 'h1',
    width: '100%'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const headingTypes = (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const);
    return <Stack gap={1.5}>
                {headingTypes.map(type => <Columns gap={[0.5, 1.5]} key={type}>
                        <Column columnSpan={[12, 6]}>
                            <SkeletonHeading key={type} type={type} />
                        </Column>
                        <Column columnSpan={[12, 6]}>
                            <Heading key={type} type={type} border>
                                Heading {type.toLocaleUpperCase()}
                            </Heading>
                        </Column>
                    </Columns>)}
            </Stack>;
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const z=["Basic","Sizes"];export{a as Basic,r as Sizes,z as __namedExportsOrder,w as default};
