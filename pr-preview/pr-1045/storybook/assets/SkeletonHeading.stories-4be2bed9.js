import{j as n,a as s}from"./Box-3d8e40b9.js";import{S as u}from"./Stack-88a94cf9.js";import{C as i,a as g}from"./Column-d93d5024.js";import{h as S,a as y}from"./Heading-1fbb096a.js";import{S as k}from"./SkeletonBox-cc9bf7c0.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";const o=({type:a,width:e="100%"})=>n(k,{fontSize:S[a],lineHeight:"heading",width:e});try{o.displayName="SkeletonHeading",o.__docgenInfo={description:"",displayName:"SkeletonHeading",props:{type:{defaultValue:null,description:"The type/level of heading is used to control the height of the element.",name:"type",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},width:{defaultValue:{value:"100%"},description:"The width of the element.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}}}catch{}const b={title:"content/Skeleton/SkeletonHeading",component:o},t=a=>n(o,{...a});t.args={type:"h1",width:"100%"};const r=()=>n(u,{gap:1.5,children:["h1","h2","h3","h4","h5","h6"].map(e=>s(g,{gap:[.5,1.5],children:[n(i,{columnSpan:[12,6],children:n(o,{type:e},e)}),n(i,{columnSpan:[12,6],children:s(y,{type:e,border:!0,children:["Heading ",e.toLocaleUpperCase()]},e)})]},e))});var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <SkeletonHeading {...args} />;
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const j=["Basic","Sizes"];export{t as Basic,r as Sizes,j as __namedExportsOrder,b as default};
//# sourceMappingURL=SkeletonHeading.stories-4be2bed9.js.map
