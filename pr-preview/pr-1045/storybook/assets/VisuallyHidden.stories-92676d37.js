import{a as t,j as s}from"./Box-3d8e40b9.js";import{S as p}from"./Stack-88a94cf9.js";import{T as u}from"./Text-76115ace.js";import{T as c}from"./TextLink-b71de530.js";import"./TextLinkExternal-22a891fa.js";import{H as h}from"./Heading-1fbb096a.js";import{V as m,v as y}from"./VisuallyHidden-9a073e6e.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./WebsiteIcon-80d17c8d.js";import"./CalendarIcon-ece56b40.js";const b={title:"foundations/A11y/VisuallyHidden",component:m},e=()=>t(p,{gap:1,children:[s(h,{children:"VisuallyHidden"}),s(u,{children:"Interact with the link in this example using Apple VoiceOver or your chosen screen reader."}),t(c,{href:"#",children:["Read more",s(m,{children:" about how to visually hide content"})]})]}),r=()=>t(c,{href:"#",children:["Read more",s("span",{css:y,children:"about how to visually hide content"})]});var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Stack gap={1}>
        <H1>VisuallyHidden</H1>
        <Text>
            Interact with the link in this example using Apple VoiceOver or your
            chosen screen reader.
        </Text>

        <TextLink href="#">
            Read more
            <VisuallyHidden> about how to visually hide content</VisuallyHidden>
        </TextLink>
    </Stack>`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var a,l,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => <TextLink href="#">
        Read more
        <span css={visuallyHiddenStyles}>about how to visually hide content</span>
    </TextLink>`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const R=["Basic","Styles"];export{e as Basic,r as Styles,R as __namedExportsOrder,b as default};
//# sourceMappingURL=VisuallyHidden.stories-92676d37.js.map
