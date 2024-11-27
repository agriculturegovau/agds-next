import{a as t,j as e}from"./responsive-123a9343.js";import{S as d}from"./Stack-938d29d6.js";import{T as p}from"./Text-ade3e1ab.js";import{T as h}from"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import{H as m}from"./Heading-53d486d1.js";import{V as u,v as y}from"./ExternalLinkCallout-dac509ef.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./WebsiteIcon-a62a72af.js";const O={title:"foundations/A11y/VisuallyHidden",component:u},n={render:()=>t(d,{gap:1,children:[e(m,{children:"VisuallyHidden"}),e(p,{children:"Interact with the link in this example using Apple VoiceOver or your chosen screen reader."}),t(h,{href:"#",children:["Read more",e(u,{children:" about how to visually hide content"})]})]})},r={render:()=>t(d,{gap:1,children:[e(m,{children:"visuallyHiddenStyles"}),e(p,{children:"Interact with the link in this example using Apple VoiceOver or your chosen screen reader."}),t(h,{href:"#",children:["Read more",e("span",{css:y,children:"about how to visually hide content"})]})]})};var i,s,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Stack gap={1}>
            <H1>VisuallyHidden</H1>
            <Text>
                Interact with the link in this example using Apple VoiceOver or your
                chosen screen reader.
            </Text>
            <TextLink href="#">
                Read more
                <VisuallyHidden> about how to visually hide content</VisuallyHidden>
            </TextLink>
        </Stack>
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Stack gap={1}>
            <H1>visuallyHiddenStyles</H1>
            <Text>
                Interact with the link in this example using Apple VoiceOver or your
                chosen screen reader.
            </Text>
            <TextLink href="#">
                Read more
                <span css={visuallyHiddenStyles}>
                    about how to visually hide content
                </span>
            </TextLink>
        </Stack>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const b=["Basic","Styles"];export{n as Basic,r as Styles,b as __namedExportsOrder,O as default};
