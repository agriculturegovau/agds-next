import{j as e,b as m,a as c,B as d}from"./Box-e652c7f2.js";import{F as p,S as L}from"./Stack-4546232d.js";import{T as l}from"./Text-51e6146a.js";import{a as _}from"./Button-ffb9a9d6.js";import"./ButtonGroup-75f04ad3.js";import"./index-42611d8b.js";import{K as W,c as D}from"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import{C as P}from"./Content-e54e3b95.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import{a as S}from"./Heading-1b1cff4a.js";import"./LoadingBlanket-2ea81d60.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./_commonjsHelpers-042e6b4d.js";import"./VisuallyHidden-315ab967.js";import"./mergeRefs-868b543a.js";import"./BaseContent-1f85429f.js";function i({children:t,onDismiss:u,title:n}){return e("section",{"aria-label":n,css:{backgroundColor:m.systemWarningMuted},children:e(P,{children:c(p,{flexDirection:["column","row"],alignItems:"flex-start",justifyContent:"space-between",gap:[1,1.5],paddingY:1,children:[c(p,{flexDirection:["column","row"],gap:[.5,1],children:[e(d,{flexShrink:0,css:{color:m.systemWarning},paddingTop:n?[0,.25]:void 0,children:e(W,{"aria-hidden":"false","aria-label":"Warning",color:"inherit",css:{display:"block"}})}),c(L,{gap:.5,children:[n?e(S,{as:"h2",type:"h3",children:n}):null,e(d,{flexGrow:1,children:t})]})]}),u?e(_,{onClick:u,iconAfter:D,variant:"text",children:"Dismiss"}):null]})})})}try{i.displayName="GlobalAlert",i.__docgenInfo={description:"",displayName:"GlobalAlert",props:{onDismiss:{defaultValue:null,description:"Function to be called when the 'Close' button is pressed.",name:"onDismiss",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},title:{defaultValue:null,description:"The title of the alert.",name:"title",required:!1,type:{name:"string"}}}}}catch{}const Z={title:"content/GlobalAlert",component:i},r=t=>e(i,{...t,children:e(l,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci vulputate nibh sagittis blandit."})});r.args={title:"",onDismiss:void 0};const a=t=>e(i,{...t,children:e(l,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci vulputate nibh sagittis blandit."})});a.args={title:"Alert title",onDismiss:void 0};const s=t=>e(i,{...t,children:e(l,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci vulputate nibh sagittis blandit."})});s.args={title:"Alert title",onDismiss:console.log};const o=t=>e(i,{...t,children:c(L,{gap:1,children:[e(l,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci vulputate nibh sagittis blandit."}),e(l,{as:"p",children:"Nulla facilisis id orci vel placerat. Nam nisl enim, efficitur id mattis eget, commodo at tortor."})]})});o.args={title:"Alert title"};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <GlobalAlert {...args}>
            <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
                nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
                cursus orci vulputate nibh sagittis blandit.
            </Text>
        </GlobalAlert>;
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,f,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => <GlobalAlert {...args}>
        <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh,
            aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci
            vulputate nibh sagittis blandit.
        </Text>
    </GlobalAlert>`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var q,A,T;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <GlobalAlert {...args}>
            <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
                nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
                cursus orci vulputate nibh sagittis blandit.
            </Text>
        </GlobalAlert>;
}`,...(T=(A=s.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var G,F,y;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`args => <GlobalAlert {...args}>
        <Stack gap={1}>
            <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
                nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
                cursus orci vulputate nibh sagittis blandit.
            </Text>
            <Text as="p">
                Nulla facilisis id orci vel placerat. Nam nisl enim, efficitur id mattis
                eget, commodo at tortor.
            </Text>
        </Stack>
    </GlobalAlert>`,...(y=(F=o.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};const $=["Basic","WithTitle","WithDismiss","WithLongMessage"];export{r as Basic,s as WithDismiss,o as WithLongMessage,a as WithTitle,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=GlobalAlert.stories-91e702e7.js.map
