import{j as e,a as U}from"./responsive-1d67a6a2.js";import{T as u}from"./Text-d916011d.js";import{T as c}from"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import{U as j}from"./UnorderedList-59dcb4a0.js";import"./OrderedList-5b6c8efd.js";import{L as p}from"./ListItem-d7b239ae.js";import{P as s,a as N}from"./PageAlert-549895be.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0bbf8d6d.js";import"./Stack-43f3e7c4.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";const me={title:"content/PageAlert",component:s,args:{onDismiss:void 0},render:t=>e(s,{...t,children:e(u,{as:"p",children:"This is a Page alert component."})})},r={args:{title:"Page alert",tone:"success"}},n={args:{tone:"success"}},i={render:t=>e(s,{...t,children:U(j,{children:[e(p,{children:e(c,{href:"#",children:"Full name must not be empty"})}),e(p,{children:e(c,{href:"#",children:"Phone number must not be empty"})})]})}),args:{title:"Page alert",tone:"error"}},a={args:{tone:"success",title:e(N,{as:"h2",children:"Descriptive success message (H2)"})}},o={render:t=>e(s,{...t,children:e(u,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae diam."})}),args:{title:"Page alert title that is long and spans multiple lines",tone:"success",onDismiss:()=>console.log("Closed")}},l={render:t=>e(s,{...t,children:e(u,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae diam."})}),args:{tone:"success",onDismiss:()=>console.log("Closed")}},m={render:t=>e(s,{...t,children:e(u,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, libero vel tristique mollis, lacus ipsum rutrum sem, in rhoncus nisl velit nec arcu. Sed condimentum, enim eget volutpat consequat, lacus nulla rutrum neque, eget vulputate urna magna vitae diam."})}),args:{tone:"success",title:e(N,{as:"h2",children:"Page Alert title as H2"}),onDismiss:()=>console.log("Closed")}};var d,g,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Page alert',
    tone: 'success'
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,T,P;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tone: 'success'
  }
}`,...(P=(T=n.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var L,A,q;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(A=i.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var f,x,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    title: <PageAlertTitle as="h2">Descriptive success message (H2)</PageAlertTitle>
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,b,W;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    onDismiss: () => console.log('Closed')
  }
}`,...(W=(b=o.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var D,M,k;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    onDismiss: () => console.log('Closed')
  }
}`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var I,y,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    title: <PageAlertTitle as="h2">Page Alert title as H2</PageAlertTitle>,
    onDismiss: () => console.log('Closed')
  }
}`,...(H=(y=m.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const ue=["Basic","WithNoTitle","WithList","WithTitleElement","WithClose","WithCloseNoTitle","WithCloseAndChildTitle"];export{r as Basic,o as WithClose,m as WithCloseAndChildTitle,l as WithCloseNoTitle,i as WithList,n as WithNoTitle,a as WithTitleElement,ue as __namedExportsOrder,me as default};
