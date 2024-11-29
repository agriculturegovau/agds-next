import{a as t,j as e}from"./responsive-22d1c539.js";import{S as d}from"./Stack-e6a92433.js";import{T as p}from"./Text-03708b2d.js";import{T as h}from"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";import{H as m}from"./Heading-85d6cea8.js";import{V as u,v as y}from"./ExternalLinkCallout-896682bb.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./WebsiteIcon-da68083c.js";const O={title:"foundations/A11y/VisuallyHidden",component:u},n={render:()=>t(d,{gap:1,children:[e(m,{children:"VisuallyHidden"}),e(p,{children:"Interact with the link in this example using Apple VoiceOver or your chosen screen reader."}),t(h,{href:"#",children:["Read more",e(u,{children:" about how to visually hide content"})]})]})},r={render:()=>t(d,{gap:1,children:[e(m,{children:"visuallyHiddenStyles"}),e(p,{children:"Interact with the link in this example using Apple VoiceOver or your chosen screen reader."}),t(h,{href:"#",children:["Read more",e("span",{css:y,children:"about how to visually hide content"})]})]})};var i,s,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
