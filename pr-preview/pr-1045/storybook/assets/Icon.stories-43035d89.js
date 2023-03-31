import{j as r,a as x}from"./Box-e652c7f2.js";import{T as f}from"./Text-51e6146a.js";import{F as n}from"./Stack-4546232d.js";import{e as d,O as I}from"./WebsiteIcon-f0b253fc.js";import{a as t}from"./utils-dae07463.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";const w={title:"foundations/Icon",component:d,argTypes:{color:{options:Object.keys(I),control:{type:"select"}}}},e=g=>r(n,{gap:.5,flexWrap:"wrap",children:Object.keys(t).sort().map(s=>{const u=t[s];return x(n,{flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,rounded:!0,gap:1,padding:2,background:"shade",css:{width:180},children:[r(u,{...g}),r(f,{children:s})]},s)})});e.args={color:"text",size:"md",weight:"regular"};const o=()=>r(d,{size:["sm","lg"]});var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => <Flex gap={0.5} flexWrap="wrap">
        {Object.keys(allIcons).sort().map(iconName => {
    const Icon = allIcons[(iconName as keyof typeof allIcons)];
    return <Flex key={iconName} flexDirection="column" alignItems="center" justifyContent="center" flexShrink={0} rounded gap={1} padding={2} background="shade" css={{
      width: 180
    }}>
                        <Icon {...args} />
                        <Text>{iconName}</Text>
                    </Flex>;
  })}
    </Flex>`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"() => <AlertIcon size={['sm', 'lg']} />",...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const z=["AllIcons","ResponsiveSizes"];export{e as AllIcons,o as ResponsiveSizes,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Icon.stories-43035d89.js.map
