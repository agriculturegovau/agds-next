import{j as n,a as o}from"./responsive-123a9343.js";import{S as h}from"./Stack-938d29d6.js";import{a as t,C as u}from"./Column-ae9e54d2.js";import{a as g}from"./Heading-53d486d1.js";import{S as l}from"./SkeletonHeading-28fc8357.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./SkeletonBox-dbefcf8b.js";const z={title:"content/Skeleton/SkeletonHeading",component:l},a={args:{type:"h1",width:"100%"}},r={render:()=>n(h,{gap:1.5,children:["h1","h2","h3","h4","h5","h6"].map(e=>o(u,{gap:[.5,1.5],children:[n(t,{columnSpan:[12,6],children:n(l,{type:e},e)}),n(t,{columnSpan:[12,6],children:o(g,{type:e,border:!0,children:["Heading ",e.toLocaleUpperCase()]},e)})]},e))})};var s,p,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'h1',
    width: '100%'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const B=["Basic","Sizes"];export{a as Basic,r as Sizes,B as __namedExportsOrder,z as default};
