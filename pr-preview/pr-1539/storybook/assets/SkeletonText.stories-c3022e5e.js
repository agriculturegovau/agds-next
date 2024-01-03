import{t as f,j as n,a as r}from"./responsive-1d67a6a2.js";import{S as g}from"./Stack-43f3e7c4.js";import{T as z}from"./Text-d916011d.js";import"./index-42611d8b.js";import{C as a,a as k}from"./Column-d36c45c1.js";import{S as d}from"./SkeletonText-e29dd401.js";import"./Box-0bbf8d6d.js";import"./_commonjsHelpers-042e6b4d.js";import"./SkeletonBox-2334db4d.js";const v={title:"content/Skeleton/SkeletonText",component:d},t={args:{fontSize:"sm",width:"100%"}},o={render:({lineHeight:s})=>{const u=Object.keys(f.fontSize.sm).reverse();return n(g,{gap:1.5,children:u.map(e=>r(k,{gap:[.5,1.5],children:[n(a,{columnSpan:[12,6],children:n(d,{fontSize:e,lineHeight:s},e)}),n(a,{columnSpan:[12,6],children:r(z,{display:"block",fontSize:e,lineHeight:s,border:!0,children:["Text ",e]})})]},e))})},args:{lineHeight:"default"}};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    fontSize: 'sm',
    width: '100%'
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    lineHeight
  }) => {
    const sizes = (Object.keys(tokens.fontSize.sm).reverse() as FontSize[]);
    return <Stack gap={1.5}>
                {sizes.map(size => <Columns gap={[0.5, 1.5]} key={size}>
                        <Column columnSpan={[12, 6]}>
                            <SkeletonText key={size} fontSize={size} lineHeight={lineHeight} />
                        </Column>
                        <Column columnSpan={[12, 6]}>
                            <Text display="block" fontSize={size} lineHeight={lineHeight} border>
                                Text {size}
                            </Text>
                        </Column>
                    </Columns>)}
            </Stack>;
  },
  args: {
    lineHeight: 'default'
  }
}`,...(S=(p=o.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};const w=["Basic","Sizes"];export{t as Basic,o as Sizes,w as __namedExportsOrder,v as default};
