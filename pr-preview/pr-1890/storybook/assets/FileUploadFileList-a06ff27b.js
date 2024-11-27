import{j as a}from"./responsive-123a9343.js";import{S as r}from"./Stack-938d29d6.js";import{F as l}from"./FileUploadFile-30bfb811.js";const o=({files:e,hideThumbnails:i,onRemove:n})=>e.length?a(r,{"aria-label":"Selected files",as:"ul",gap:.5,children:e.map((s,t)=>a(l,{file:s,hideThumbnails:i,onRemove:()=>n(t)},t))}):null;o.__docgenInfo={description:"",methods:[],displayName:"FileUploadFileList",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`FileWithPath & {
	/** Use to indicate the upload status of a file. */
	status?: FileStatus;
	/** Used to link to a webpage where the user can view/download the existing file. */
	href?: string;
}`,elements:[{name:"FileWithPath"},{name:"signature",type:"object",raw:`{
	/** Use to indicate the upload status of a file. */
	status?: FileStatus;
	/** Used to link to a webpage where the user can view/download the existing file. */
	href?: string;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:"'none' | 'uploading' | 'success'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'success'"}],required:!1},description:"Use to indicate the upload status of a file."},{key:"href",value:{name:"string",required:!1},description:"Used to link to a webpage where the user can view/download the existing file."}]}}]}],raw:"FileWithStatus[]"},description:""},hideThumbnails:{required:!1,tsType:{name:"boolean"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};export{o as F};
