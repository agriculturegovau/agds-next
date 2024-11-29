import{t as f,j as t,a as n}from"./responsive-22d1c539.js";import{S as g}from"./Stack-e6a92433.js";import{T as z}from"./Text-03708b2d.js";import"./index-f0f3a68d.js";import{a,C as k}from"./Column-abc95574.js";import{S as d}from"./SkeletonText-f96cf7a0.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./_commonjsHelpers-23102255.js";import"./SkeletonBox-8ac4da43.js";const w={title:"content/Skeleton/SkeletonText",component:d},o={args:{fontSize:"sm",width:"100%"}},r={render:({lineHeight:s})=>{const u=Object.keys(f.fontSize.sm).reverse();return t(g,{gap:1.5,children:u.map(e=>n(k,{gap:[.5,1.5],children:[t(a,{columnSpan:[12,6],children:t(d,{fontSize:e,lineHeight:s},e)}),t(a,{columnSpan:[12,6],children:n(z,{display:"block",fontSize:e,lineHeight:s,border:!0,children:["Text ",e]})})]},e))})},args:{lineHeight:"default"}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    fontSize: 'sm',
    width: '100%'
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,S;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    lineHeight
  }) => {
    const sizes = Object.keys(tokens.fontSize.sm).reverse() as FontSize[];
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
}`,...(S=(p=r.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};const B=["Basic","Sizes"];export{o as Basic,r as Sizes,B as __namedExportsOrder,w as default};
