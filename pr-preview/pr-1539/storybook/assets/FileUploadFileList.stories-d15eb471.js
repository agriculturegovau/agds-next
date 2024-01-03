import{F as v}from"./FileUploadFileList-69a1b783.js";import{c as e,a as E}from"./test-utils-bb61fe25.js";import"./responsive-1d67a6a2.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./FileUploadFile-4515e4e3.js";import"./Text-d916011d.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./FileUploadFileThumbnail-be543fe8.js";const N={title:"forms/FileUpload/Primitives/FileUploadFileList",component:v,args:{hideThumbnails:!1}},o={args:{files:[e({name:"example.pdf",type:"application/pdf"}),e(),e()],onRemove:a=>console.log(a)}},i={args:{files:[e({name:"example.pdf",type:"application/pdf"}),E(),e()],onRemove:a=>console.log(a)}},r={args:{files:[e({status:"uploading"}),e({status:"success"})],onRemove:a=>console.log(a)}},p={args:{hideThumbnails:!0,files:[e({name:"example.pdf",type:"application/pdf"}),E(),e()],onRemove:a=>console.log(a)}};var s,t,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
