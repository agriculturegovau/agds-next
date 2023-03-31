import{j as n,t as f,a as i}from"./Box-3d8e40b9.js";import{S as h}from"./Stack-88a94cf9.js";import{T as g}from"./Text-76115ace.js";import"./index-42611d8b.js";import{C as l,a as k}from"./Column-d93d5024.js";import{S as z}from"./SkeletonBox-cc9bf7c0.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";const s=({fontSize:e="sm",lineHeight:a="default",width:t="100%"})=>n(z,{fontSize:e,lineHeight:a,width:t});try{s.displayName="SkeletonText",s.__docgenInfo={description:"",displayName:"SkeletonText",props:{fontSize:{defaultValue:{value:"sm"},description:"The font size of the element.",name:"fontSize",required:!1,type:{name:"ResponsiveProp<FontSize>"}},lineHeight:{defaultValue:{value:"default"},description:"The line height of the element.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:'"nospace"'},{value:'"heading"'},{value:'"default"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}}}catch{}const w={title:"content/Skeleton/SkeletonText",component:s},o=e=>n(s,{...e});o.args={fontSize:"sm",width:"100%"};const r=({lineHeight:e})=>{const a=Object.keys(f.fontSize.sm).reverse();return n(h,{gap:1.5,children:a.map(t=>i(k,{gap:[.5,1.5],children:[n(l,{columnSpan:[12,6],children:n(s,{fontSize:t,lineHeight:e},t)}),n(l,{columnSpan:[12,6],children:i(g,{display:"block",fontSize:t,lineHeight:e,border:!0,children:["Text ",t]})})]},t))})};o.args={lineHeight:"default"};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"args => <SkeletonText {...args} />",...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(S=(d=r.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};const q=["Basic","Sizes"];export{o as Basic,r as Sizes,q as __namedExportsOrder,w as default};
//# sourceMappingURL=SkeletonText.stories-3db66099.js.map
