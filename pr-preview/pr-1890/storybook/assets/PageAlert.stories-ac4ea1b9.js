import{j as e,a as j}from"./responsive-123a9343.js";import{T as u}from"./Text-ade3e1ab.js";import{T as c}from"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import{U as D}from"./UnorderedList-9f0ec0d3.js";import"./OrderedList-fcbd1470.js";import{L as p}from"./ListItem-f0e45878.js";import{P as s,a as U}from"./PageAlert-d0bdbefa.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./Stack-938d29d6.js";import"./ExternalLinkCallout-dac509ef.js";import"./WebsiteIcon-a62a72af.js";import"./getCloseHandler-d347a0fa.js";import"./useFocus-81953b1d.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";const ue={title:"content/PageAlert",component:s,args:{onDismiss:void 0,onClose:void 0},render:t=>e(s,{...t,children:e(u,{as:"p",children:"This is a Page alert component."})})},r={args:{title:"Page alert",tone:"success"}},a={args:{tone:"success"}},i={render:t=>e(s,{...t,children:j(D,{children:[e(p,{children:e(c,{href:"#",children:"Full name must not be empty"})}),e(p,{children:e(c,{href:"#",children:"Phone number must not be empty"})})]})}),args:{title:"Page alert",tone:"error"}},o={args:{tone:"success",title:e(U,{as:"h3",children:"Descriptive success message (H3)"})}},l={render:t=>e(s,{...t,children:e(u,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae diam."})}),args:{title:"Page alert title that is long and spans multiple lines",tone:"success",onClose:()=>console.log("Closed")}},n={render:t=>e(s,{...t,children:e(u,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae diam."})}),args:{tone:"success",onClose:()=>console.log("Closed")}},m={render:t=>e(s,{...t,children:e(u,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae diam."})}),args:{tone:"success",title:e(U,{as:"h3",children:"Page Alert title as H3"}),onClose:()=>console.log("Closed")}};var d,g,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Page alert',
    tone: 'success'
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,T,P;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tone: 'success'
  }
}`,...(P=(T=a.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var L,C,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <PageAlert {...args}>
            <UnorderedList>
                <ListItem>
                    <TextLink href="#">Full name must not be empty</TextLink>
                </ListItem>
                <ListItem>
                    <TextLink href="#">Phone number must not be empty</TextLink>
                </ListItem>
            </UnorderedList>
        </PageAlert>,
  args: {
    title: 'Page alert',
    tone: 'error'
  }
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var q,f,x;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    title: <PageAlertTitle as="h3">Descriptive success message (H3)</PageAlertTitle>
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,b,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <PageAlert {...args}>
            <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in
                rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat
                consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae
                diam.
            </Text>
        </PageAlert>,
  args: {
    title: 'Page alert title that is long and spans multiple lines',
    tone: 'success',
    onClose: () => console.log('Closed')
  }
}`,...(W=(b=l.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var M,k,I;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <PageAlert {...args}>
            <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in
                rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat
                consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae
                diam.
            </Text>
        </PageAlert>,
  args: {
    tone: 'success',
    onClose: () => console.log('Closed')
  }
}`,...(I=(k=n.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var y,H,N;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <PageAlert {...args}>
            <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in
                rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat
                consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae
                diam.
            </Text>
        </PageAlert>,
  args: {
    tone: 'success',
    title: <PageAlertTitle as="h3">Page Alert title as H3</PageAlertTitle>,
    onClose: () => console.log('Closed')
  }
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const ce=["Basic","WithNoTitle","WithList","WithTitleElement","WithClose","WithCloseNoTitle","WithCloseAndChildTitle"];export{r as Basic,l as WithClose,m as WithCloseAndChildTitle,n as WithCloseNoTitle,i as WithList,a as WithNoTitle,o as WithTitleElement,ce as __namedExportsOrder,ue as default};
