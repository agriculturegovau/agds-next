import{j as l}from"./responsive-1d67a6a2.js";import{a as A}from"./ag.ds-next-react-stack.cjs-f6276bf7.js";import{F as C}from"./FileUploadFile-4515e4e3.js";import{c as e,a as p}from"./test-utils-bb61fe25.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./noop-eb890146.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Text-d916011d.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./FileUploadFileThumbnail-be543fe8.js";const ge={title:"forms/FileUpload/Primitives/FileUploadFile",component:C,args:{hideThumbnails:!1},decorators:[z=>l(A.Stack,{as:"ul",children:l(z,{})})]},a={name:".txt file",args:{file:e()}},r={name:".txt file (uploading)",args:{file:e({status:"uploading"})}},s={name:".txt file (success)",args:{file:e({status:"success"})}},o={name:".txt file (with href)",args:{file:e({href:"#"})}},t={name:".jpg file",args:{file:p()}},i={name:".jpg file (uploading)",args:{file:p({status:"uploading"})}},n={name:".jpg file (success)",args:{file:p({status:"success"})}},m={name:".pdf file",args:{file:e({name:"example.pdf",type:"application/pdf"})}},c={name:".doc file",args:{file:e({name:"example.doc",type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})}};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '.txt file',
  args: {
    file: createExampleFile()
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,x,F;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '.txt file (uploading)',
  args: {
    file: createExampleFile({
      status: 'uploading'
    })
  }
}`,...(F=(x=r.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var S,E,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '.txt file (success)',
  args: {
    file: createExampleFile({
      status: 'success'
    })
  }
}`,...(h=(E=s.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var I,j,U;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '.txt file (with href)',
  args: {
    file: createExampleFile({
      href: '#'
    })
  }
}`,...(U=(j=o.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var k,w,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '.jpg file',
  args: {
    file: createExampleImageFile()
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var W,_,v;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '.jpg file (uploading)',
  args: {
    file: createExampleImageFile({
      status: 'uploading'
    })
  }
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var P,B,L;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '.jpg file (success)',
  args: {
    file: createExampleImageFile({
      status: 'success'
    })
  }
}`,...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var b,N,O;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '.pdf file',
  args: {
    file: createExampleFile({
      name: 'example.pdf',
      type: 'application/pdf'
    })
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,T,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '.doc file',
  args: {
    file: createExampleFile({
      name: 'example.doc',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })
  }
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const xe=["Basic","Uploading","Success","WithLink","Image","ImageUploading","ImageSuccess","Pdf","Word"];export{a as Basic,t as Image,n as ImageSuccess,i as ImageUploading,m as Pdf,s as Success,r as Uploading,o as WithLink,c as Word,xe as __namedExportsOrder,ge as default};
