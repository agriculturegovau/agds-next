import{j as l}from"./Box-e652c7f2.js";import{S as o}from"./Stack-4546232d.js";import{F as r}from"./FileUploadRejectedFile-983ca451.js";const a=({fileRejections:i,handleRemoveRejection:t})=>l(o,{as:"ul","aria-label":"Invalid files",gap:.5,children:i.map(e=>l(r,{...e,onRemove:()=>t(e.fileName)},e.fileName))});try{a.displayName="FileUploadRejectedFileList",a.__docgenInfo={description:"",displayName:"FileUploadRejectedFileList",props:{fileRejections:{defaultValue:null,description:"",name:"fileRejections",required:!0,type:{name:"RejectedFile[]"}},handleRemoveRejection:{defaultValue:null,description:"",name:"handleRemoveRejection",required:!0,type:{name:"(fileName: string) => void"}}}}}catch{}export{a as F};
//# sourceMappingURL=FileUploadRejectedFileList-f8718da1.js.map
