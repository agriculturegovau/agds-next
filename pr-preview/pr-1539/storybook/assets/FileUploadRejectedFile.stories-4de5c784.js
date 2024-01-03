import{j as i}from"./responsive-1d67a6a2.js";import{a as F}from"./ag.ds-next-react-stack.cjs-f6276bf7.js";import{F as u}from"./FileUploadRejectedFile-91fdc7b1.js";import{a as x,c as d}from"./test-utils-bb61fe25.js";import"./index-42611d8b.js";import"./_commonjsHelpers-042e6b4d.js";import"./noop-eb890146.js";import"./Stack-43f3e7c4.js";import"./Box-0bbf8d6d.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./Text-d916011d.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./FileUploadFileThumbnail-be543fe8.js";const G={title:"forms/FileUpload/Primitives/FileUploadRejectedFile",component:u,args:{hideThumbnails:!1},decorators:[f=>i(F.Stack,{as:"ul",children:i(f,{})})]},e={args:{errors:[{message:"File size exceeds 10MB",code:"file-too-large"}],file:x()}},r={args:{errors:[{message:"File must be one of the following types: jpeg, jpg, png, heic",code:"file-invalid-type"}],file:d()}},o={args:{errors:[{message:"File size exceeds 10MB",code:"file-too-large"},{message:"File must be one of the following types: jpeg, jpg, png, heic",code:"file-invalid-type"}],file:d()}};var s,a,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    errors: [{
      message: 'File size exceeds 10MB',
      code: 'file-too-large'
    }],
    file: createExampleImageFile()
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    errors: [{
      message: 'File must be one of the following types: jpeg, jpg, png, heic',
      code: 'file-invalid-type'
    }],
    file: createExampleFile()
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var n,c,g;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    errors: [{
      message: 'File size exceeds 10MB',
      code: 'file-too-large'
    }, {
      message: 'File must be one of the following types: jpeg, jpg, png, heic',
      code: 'file-invalid-type'
    }],
    file: createExampleFile()
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const H=["FileSize","InvalidType","Multiple"];export{e as FileSize,r as InvalidType,o as Multiple,H as __namedExportsOrder,G as default};
