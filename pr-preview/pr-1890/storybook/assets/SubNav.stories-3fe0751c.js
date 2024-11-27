import{j as o,a as u}from"./responsive-123a9343.js";import{r as f}from"./index-3b9dd0eb.js";import{V as h}from"./ExternalLinkCallout-dac509ef.js";import"./Stack-938d29d6.js";import{B as y}from"./Box-c8c0d4bd.js";import{N as B}from"./NotificationBadge-862122b9.js";import{S as p}from"./SubNav-0ca3a4c6.js";import"./jsx-runtime-a3291550.js";import"./_commonjsHelpers-de833af9.js";import"./Text-ade3e1ab.js";import"./findBestMatch-d78b28a3.js";const H={title:"navigation/SubNav",component:p,args:{activePath:"/code",links:[{href:"/",label:"Usage"},{href:"/code",label:"Code"},{href:"/content",label:"Content"},{href:"/accessibility",label:"Accessibility"}]}},e={args:{}},a={args:{background:"bodyAlt"},render:t=>o(y,{padding:1.5,background:t.background,children:o(p,{...t})})},r={args:{links:[{href:"/",label:"Usage"},{href:"/code",label:"Code",endElement:u(f.Fragment,{children:[o(B,{value:5,tone:"action","aria-hidden":!0}),o(h,{children:", 5 notifications"})]})},{href:"/content",label:"Content"},{href:"/accessibility",label:"Accessibility"}]}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    background: 'bodyAlt'
  },
  render: args => <Box padding={1.5} background={args.background}>
            <SubNav {...args} />
        </Box>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,b,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    links: [{
      href: '/',
      label: 'Usage'
    }, {
      href: '/code',
      label: 'Code',
      endElement: <Fragment>
                        <NotificationBadge value={5} tone="action" aria-hidden />
                        <VisuallyHidden>, 5 notifications</VisuallyHidden>
                    </Fragment>
    }, {
      href: '/content',
      label: 'Content'
    }, {
      href: '/accessibility',
      label: 'Accessibility'
    }]
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const O=["Basic","OnBodyAlt","WithEndElements"];export{e as Basic,a as OnBodyAlt,r as WithEndElements,O as __namedExportsOrder,H as default};
