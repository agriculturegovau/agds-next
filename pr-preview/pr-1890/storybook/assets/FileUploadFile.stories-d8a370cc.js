import{j as l}from"./responsive-22d1c539.js";import{S as D}from"./Stack-e6a92433.js";import{F as G}from"./FileUploadFile-55e0ae47.js";import{c as e,a as p}from"./test-utils-7ee87c70.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Box-cc8e6f8e.js";import"./Text-03708b2d.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./WebsiteIcon-03a55100.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import"./FileUploadFileThumbnail-fedac0ef.js";import"./utils-a6902619.js";const ue={title:"forms/FileUpload/Primitives/FileUploadFile",component:G,args:{hideThumbnails:!1},decorators:[C=>l(D,{as:"ul",children:l(C,{})})]},a={name:".txt file",args:{file:e()}},r={name:".txt file (uploading)",args:{file:e({status:"uploading"})}},s={name:".txt file (success)",args:{file:e({status:"success"})}},o={name:".txt file (with href)",args:{file:e({href:"#"})}},t={name:".jpg file",args:{file:p()}},n={name:".jpg file (uploading)",args:{file:p({status:"uploading"})}},i={name:".jpg file (success)",args:{file:p({status:"success"})}},m={name:".pdf file",args:{file:e({name:"example.pdf",type:"application/pdf"})}},c={name:".doc file",args:{file:e({name:"example.doc",type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})}};var d,u,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
