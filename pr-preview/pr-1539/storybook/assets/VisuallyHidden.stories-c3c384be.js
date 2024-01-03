import{a as t,j as e}from"./responsive-1d67a6a2.js";import{S as d}from"./Stack-43f3e7c4.js";import{T as p}from"./Text-d916011d.js";import{T as h}from"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import{H as m}from"./Heading-1a35fe7d.js";import{V as u,v as y}from"./VisuallyHidden-02be915e.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./ExternalLinkCallout-f28f2061.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";const b={title:"foundations/A11y/VisuallyHidden",component:u},n={render:()=>t(d,{gap:1,children:[e(m,{children:"VisuallyHidden"}),e(p,{children:"Interact with the link in this example using Apple VoiceOver or your chosen screen reader."}),t(h,{href:"#",children:["Read more",e(u,{children:" about how to visually hide content"})]})]})},r={render:()=>t(d,{gap:1,children:[e(m,{children:"visuallyHiddenStyles"}),e(p,{children:"Interact with the link in this example using Apple VoiceOver or your chosen screen reader."}),t(h,{href:"#",children:["Read more",e("span",{css:y,children:"about how to visually hide content"})]})]})};var i,s,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const I=["Basic","Styles"];export{n as Basic,r as Styles,I as __namedExportsOrder,b as default};
