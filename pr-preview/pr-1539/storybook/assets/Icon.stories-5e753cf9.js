import{j as n,a as h}from"./responsive-1d67a6a2.js";import{T as y}from"./Text-d916011d.js";import{F as a}from"./Stack-43f3e7c4.js";import{a as k,a4 as j}from"./WebsiteIcon-7b03f042.js";import{a as t}from"./utils-951ab468.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";const C={title:"foundations/Icon",component:k,args:{color:"text",size:"md",weight:"regular"},argTypes:{color:{options:Object.keys(j),control:{type:"select"}}}},e={},r={render:f=>n(a,{gap:.5,flexWrap:"wrap",children:Object.keys(t).sort().map(o=>{const I=t[o];return h(a,{flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,rounded:!0,gap:1,padding:2,background:"shade",css:{width:180},children:[n(I,{...f}),n(y,{children:o})]},o)})})},s={args:{size:["sm","lg"]}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Flex gap={0.5} flexWrap="wrap">
            {Object.keys(allIcons).sort().map(iconName => {
      const Icon = allIcons[(iconName as keyof typeof allIcons)];
      return <Flex key={iconName} flexDirection="column" alignItems="center" justifyContent="center" flexShrink={0} rounded gap={1} padding={2} background="shade" css={{
        width: 180
      }}>
                            <Icon {...args} />
                            <Text>{iconName}</Text>
                        </Flex>;
    })}
        </Flex>
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: ['sm', 'lg']
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const v=["Basic","AllIcons","ResponsiveSizes"];export{r as AllIcons,e as Basic,s as ResponsiveSizes,v as __namedExportsOrder,C as default};
