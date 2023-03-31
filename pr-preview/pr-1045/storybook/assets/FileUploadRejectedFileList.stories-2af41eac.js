import{j as s}from"./Box-3d8e40b9.js";import{F as r}from"./FileUploadRejectedFileList-0a36d961.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-88a94cf9.js";import"./FileUploadRejectedFile-9d99785e.js";import"./filesize.esm-100d58b1.js";import"./Button-5675b78b.js";import"./LoadingBlanket-4dd64634.js";import"./Content-29d7ac08.js";import"./BaseContent-ae52486a.js";import"./PageContent-3c0ee326.js";import"./SectionContent-ef29e939.js";import"./ContentBleed-5d827cf1.js";import"./Text-76115ace.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./VisuallyHidden-9a073e6e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-d4eeb7ce.js";import"./WebsiteIcon-80d17c8d.js";import"./CalendarIcon-ece56b40.js";const _={title:"forms/FileUpload/Primitives/FileUploadRejectedFileList",component:r,argTypes:{handleRemoveRejection:{action:"clicked"}}},e=()=>s(r,{fileRejections:[{fileName:"example1.mp4",fileSize:428325809,errors:[{message:"File size exceeds 10MB",code:"file-too-large"},{message:"File must be one of the following types: jpeg, jpg, png, heic",code:"file-invalid-type"}]},{fileName:"example2.jpg",fileSize:22832300,errors:[{message:"File size exceeds 10MB",code:"file-too-large"}]}],handleRemoveRejection:l=>console.log(l)});var i,o,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const rejectedFiles: RejectedFile[] = [{
    fileName: 'example1.mp4',
    fileSize: 428325809,
    errors: [{
      message: 'File size exceeds 10MB',
      code: 'file-too-large'
    }, {
      message: 'File must be one of the following types: jpeg, jpg, png, heic',
      code: 'file-invalid-type'
    }]
  }, {
    fileName: 'example2.jpg',
    fileSize: 22832300,
    errors: [{
      message: 'File size exceeds 10MB',
      code: 'file-too-large'
    }]
  }];
  return <FileUploadRejectedFileList fileRejections={rejectedFiles} handleRemoveRejection={id => console.log(id)} />;
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=FileUploadRejectedFileList.stories-2af41eac.js.map
