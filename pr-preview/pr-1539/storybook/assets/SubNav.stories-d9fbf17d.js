import{j as n,a as u}from"./responsive-1d67a6a2.js";import{r as f}from"./index-42611d8b.js";import{V as h}from"./VisuallyHidden-02be915e.js";import"./Stack-43f3e7c4.js";import{B as y}from"./Box-0bbf8d6d.js";import{N as B}from"./NotificationBadge-f264d923.js";import{S as p}from"./SubNav-495929ec.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-d916011d.js";import"./findBestMatch-d78b28a3.js";const F={title:"navigation/SubNav",component:p,args:{activePath:"/code",links:[{href:"/",label:"Usage"},{href:"/code",label:"Code"},{href:"/content",label:"Content"},{href:"/accessibility",label:"Accessibility"}]}},e={args:{}},a={args:{background:"bodyAlt"},render:o=>n(y,{padding:1.5,background:o.background,children:n(p,{...o})})},r={args:{links:[{href:"/",label:"Usage"},{href:"/code",label:"Code",endElement:u(f.Fragment,{children:[n(B,{value:5,tone:"action","aria-hidden":!0}),n(h,{children:", 5 notifications"})]})},{href:"/content",label:"Content"},{href:"/accessibility",label:"Accessibility"}]}};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const H=["Basic","OnBodyAlt","WithEndElements"];export{e as Basic,a as OnBodyAlt,r as WithEndElements,H as __namedExportsOrder,F as default};
