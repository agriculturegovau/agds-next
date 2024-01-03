import{F as p}from"./FileUploadRejectedFileList-938f07cc.js";import{c,a as d}from"./test-utils-bb61fe25.js";import"./responsive-1d67a6a2.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./FileUploadRejectedFile-91fdc7b1.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./FileUploadFileThumbnail-be543fe8.js";const I={title:"forms/FileUpload/Primitives/FileUploadRejectedFileList",component:p,argTypes:{handleRemoveRejection:{action:"clicked"}},args:{hideThumbnails:!1}},n=[{file:c({name:"example1.mp4",type:"video/mp4"}),errors:[{message:"File size exceeds 10MB",code:"file-too-large"},{message:"File must be one of the following types: jpeg, jpg, png, heic",code:"file-invalid-type"}]},{file:d(),errors:[{message:"File size exceeds 10MB",code:"file-too-large"}]}],e={args:{fileRejections:n,handleRemoveRejection:i=>console.log(i)}},o={args:{hideThumbnails:!0,fileRejections:n,handleRemoveRejection:i=>console.log(i)}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    fileRejections: testFiles,
    handleRemoveRejection: id => console.log(id)
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var a,m,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    hideThumbnails: true,
    fileRejections: testFiles,
    handleRemoveRejection: id => console.log(id)
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const O=["Basic","HiddenThumbnails"];export{e as Basic,o as HiddenThumbnails,O as __namedExportsOrder,I as default};
