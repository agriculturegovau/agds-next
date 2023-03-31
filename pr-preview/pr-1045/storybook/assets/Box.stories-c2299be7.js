import{B as d,a as f,j as o}from"./Box-e652c7f2.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";const j={title:"foundations/Box",component:d},b=s=>o(d,{...s}),e=b.bind({});e.args={children:"Box with a border",background:"body",color:"text",padding:2,border:!0,rounded:!0,light:!0};const r=b.bind({});r.args={children:f("div",{children:[o("div",{children:"Responsive padding"}),o("div",{children:"Change the size of the browser window to see the padding change"}),o(v,{})]}),border:!0,rounded:!0,padding:{xs:1,sm:2,md:3,lg:4,xl:5}};function v(){return o(d,{palette:"dark",color:"text",display:"flex",flexDirection:"row",gap:2,paddingTop:1,children:["xs","sm","md","lg","xl"].map((s,t,a)=>o(d,{background:"body",padding:.5,rounded:!0,display:Object.fromEntries([["xs","none"],[a[t-1],"none"],[a[t],"block"],[a[t+1],"none"]].filter(([B])=>!!B)),children:s},s))})}var i,n,c,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Box {...args} />",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"The Box with a Light palette applied",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var g,m,u,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Box {...args} />",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Responsive props",...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};const k=["Basic","ResponsivePadding"];export{e as Basic,r as ResponsivePadding,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Box.stories-c2299be7.js.map
