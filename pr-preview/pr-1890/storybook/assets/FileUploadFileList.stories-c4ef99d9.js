import{F as v}from"./FileUploadFileList-a06ff27b.js";import{c as e,a as E}from"./test-utils-7ee87c70.js";import"./responsive-123a9343.js";import"./index-3b9dd0eb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-a3291550.js";import"./Stack-938d29d6.js";import"./Box-c8c0d4bd.js";import"./FileUploadFile-30bfb811.js";import"./Text-ade3e1ab.js";import"./Button-12960031.js";import"./LoadingBlanket-1bc581e5.js";import"./Content-1f109ee5.js";import"./BaseContent-45e1bca4.js";import"./index-1c0ca288.js";import"./PageContent-a0776569.js";import"./SectionContent-49d65950.js";import"./ContentBleed-8062a65d.js";import"./ExternalLinkCallout-dac509ef.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-399a126c.js";import"./WebsiteIcon-a62a72af.js";import"./TextLink-7c30dfcc.js";import"./TextLinkExternal-a7dcdcef.js";import"./FileUploadFileThumbnail-0ea9b80f.js";import"./utils-a6902619.js";const N={title:"forms/FileUpload/Primitives/FileUploadFileList",component:v,args:{hideThumbnails:!1}},o={args:{files:[e({name:"example.pdf",type:"application/pdf"}),e(),e()],onRemove:a=>console.log(a)}},i={args:{files:[e({name:"example.pdf",type:"application/pdf"}),E(),e()],onRemove:a=>console.log(a)}},r={args:{files:[e({status:"uploading"}),e({status:"success"})],onRemove:a=>console.log(a)}},p={args:{hideThumbnails:!0,files:[e({name:"example.pdf",type:"application/pdf"}),E(),e()],onRemove:a=>console.log(a)}};var s,t,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    files: [createExampleFile({
      name: 'example.pdf',
      type: 'application/pdf'
    }), createExampleFile(), createExampleFile()],
    onRemove: id => console.log(id)
  }
}`,...(m=(t=o.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var l,n,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    files: [createExampleFile({
      name: 'example.pdf',
      type: 'application/pdf'
    }), createExampleImageFile(), createExampleFile()],
    onRemove: id => console.log(id)
  }
}`,...(c=(n=i.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    files: [createExampleFile({
      status: 'uploading'
    }), createExampleFile({
      status: 'success'
    })],
    onRemove: id => console.log(id)
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,x,F;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    hideThumbnails: true,
    files: [createExampleFile({
      name: 'example.pdf',
      type: 'application/pdf'
    }), createExampleImageFile(), createExampleFile()],
    onRemove: id => console.log(id)
  }
}`,...(F=(x=p.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const Q=["Basic","MixedFiles","Uploading","HiddenThumbnails"];export{o as Basic,p as HiddenThumbnails,i as MixedFiles,r as Uploading,Q as __namedExportsOrder,N as default};
