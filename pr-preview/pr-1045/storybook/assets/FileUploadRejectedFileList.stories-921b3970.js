import{j as s}from"./Box-e652c7f2.js";import{F as r}from"./FileUploadRejectedFileList-f8718da1.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./Stack-4546232d.js";import"./FileUploadRejectedFile-983ca451.js";import"./filesize.esm-100d58b1.js";import"./Button-ffb9a9d6.js";import"./LoadingBlanket-2ea81d60.js";import"./Content-e54e3b95.js";import"./BaseContent-1f85429f.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./Text-51e6146a.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./VisuallyHidden-315ab967.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-75f04ad3.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";const _={title:"forms/FileUpload/Primitives/FileUploadRejectedFileList",component:r,argTypes:{handleRemoveRejection:{action:"clicked"}}},e=()=>s(r,{fileRejections:[{fileName:"example1.mp4",fileSize:428325809,errors:[{message:"File size exceeds 10MB",code:"file-too-large"},{message:"File must be one of the following types: jpeg, jpg, png, heic",code:"file-invalid-type"}]},{fileName:"example2.jpg",fileSize:22832300,errors:[{message:"File size exceeds 10MB",code:"file-too-large"}]}],handleRemoveRejection:l=>console.log(l)});var i,o,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=FileUploadRejectedFileList.stories-921b3970.js.map
