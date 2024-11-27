import{j as l}from"./responsive-123a9343.js";import{S as D}from"./Stack-938d29d6.js";import{F as G}from"./FileUploadFile-30bfb811.js";import{c as e,a as p}from"./test-utils-7ee87c70.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Box-c8c0d4bd.js";import"./Text-ade3e1ab.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./WebsiteIcon-a62a72af.js";import"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import"./FileUploadFileThumbnail-0ea9b80f.js";import"./utils-a6902619.js";const ue={title:"forms/FileUpload/Primitives/FileUploadFile",component:G,args:{hideThumbnails:!1},decorators:[C=>l(D,{as:"ul",children:l(C,{})})]},a={name:".txt file",args:{file:e()}},r={name:".txt file (uploading)",args:{file:e({status:"uploading"})}},s={name:".txt file (success)",args:{file:e({status:"success"})}},o={name:".txt file (with href)",args:{file:e({href:"#"})}},t={name:".jpg file",args:{file:p()}},n={name:".jpg file (uploading)",args:{file:p({status:"uploading"})}},i={name:".jpg file (success)",args:{file:p({status:"success"})}},m={name:".pdf file",args:{file:e({name:"example.pdf",type:"application/pdf"})}},c={name:".doc file",args:{file:e({name:"example.doc",type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})}};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(U=(j=o.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var w,y,W;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '.jpg file',
  args: {
    file: createExampleImageFile()
  }
}`,...(W=(y=t.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var k,v,P;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '.jpg file (uploading)',
  args: {
    file: createExampleImageFile({
      status: 'uploading'
    })
  }
}`,...(P=(v=n.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var B,L,_;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '.jpg file (success)',
  args: {
    file: createExampleImageFile({
      status: 'success'
    })
  }
}`,...(_=(L=i.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var b,O,T;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '.pdf file',
  args: {
    file: createExampleFile({
      name: 'example.pdf',
      type: 'application/pdf'
    })
  }
}`,...(T=(O=m.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var q,z,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '.doc file',
  args: {
    file: createExampleFile({
      name: 'example.doc',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const fe=["Basic","Uploading","Success","WithLink","Image","ImageUploading","ImageSuccess","Pdf","Word"];export{a as Basic,t as Image,i as ImageSuccess,n as ImageUploading,m as Pdf,s as Success,r as Uploading,o as WithLink,c as Word,fe as __namedExportsOrder,ue as default};
