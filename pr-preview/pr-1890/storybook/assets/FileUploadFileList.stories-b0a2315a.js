import{F as v}from"./FileUploadFileList-ecd01d9a.js";import{c as e,a as E}from"./test-utils-7ee87c70.js";import"./responsive-22d1c539.js";import"./index-f0f3a68d.js";import"./_commonjsHelpers-23102255.js";import"./jsx-runtime-70d19cdc.js";import"./Stack-e6a92433.js";import"./Box-cc8e6f8e.js";import"./FileUploadFile-55e0ae47.js";import"./Text-03708b2d.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./Content-a73dd057.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";import"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import"./ExternalLinkCallout-896682bb.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./WebsiteIcon-03a55100.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import"./FileUploadFileThumbnail-fedac0ef.js";import"./utils-a6902619.js";const N={title:"forms/FileUpload/Primitives/FileUploadFileList",component:v,args:{hideThumbnails:!1}},o={args:{files:[e({name:"example.pdf",type:"application/pdf"}),e(),e()],onRemove:a=>console.log(a)}},i={args:{files:[e({name:"example.pdf",type:"application/pdf"}),E(),e()],onRemove:a=>console.log(a)}},r={args:{files:[e({status:"uploading"}),e({status:"success"})],onRemove:a=>console.log(a)}},p={args:{hideThumbnails:!0,files:[e({name:"example.pdf",type:"application/pdf"}),E(),e()],onRemove:a=>console.log(a)}};var s,t,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
