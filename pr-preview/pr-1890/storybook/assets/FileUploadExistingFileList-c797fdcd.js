import{j as a}from"./responsive-22d1c539.js";import{S as s}from"./Stack-e6a92433.js";import{F as l}from"./FileUploadExistingFile-7ec46b1e.js";const o=({files:i,hideThumbnails:t,onRemove:e})=>i.length?a(s,{"aria-label":"Existing files",as:"ul",gap:.5,children:i.map((n,r)=>a(l,{file:n,hideThumbnails:t,onRemove:()=>e==null?void 0:e(n)},r))}):null;o.__docgenInfo={description:"",methods:[],displayName:"FileUploadExistingFileList",props:{files:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	/** The file name. */
	name: string;
	/** Link to a webpage where the user can view/download the existing file (optional) */
	href?: string;
	/** The file size in bytes (optional). */
	size?: number;
	/** If the file is an image, provide a URL to a 72x72 thumbnail. */
	thumbnailSrc?: string;
	/** Use the meta key to keep track of any extra file information, which can be useful when deleting the file. */
	meta?: Record<string, unknown>;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"The file name."},{key:"href",value:{name:"string",required:!1},description:"Link to a webpage where the user can view/download the existing file (optional)"},{key:"size",value:{name:"number",required:!1},description:"The file size in bytes (optional)."},{key:"thumbnailSrc",value:{name:"string",required:!1},description:"If the file is an image, provide a URL to a 72x72 thumbnail."},{key:"meta",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1},description:"Use the meta key to keep track of any extra file information, which can be useful when deleting the file."}]}}],raw:"ExistingFile[]"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: ExistingFile) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
	/** The file name. */
	name: string;
	/** Link to a webpage where the user can view/download the existing file (optional) */
	href?: string;
	/** The file size in bytes (optional). */
	size?: number;
	/** If the file is an image, provide a URL to a 72x72 thumbnail. */
	thumbnailSrc?: string;
	/** Use the meta key to keep track of any extra file information, which can be useful when deleting the file. */
	meta?: Record<string, unknown>;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0},description:"The file name."},{key:"href",value:{name:"string",required:!1},description:"Link to a webpage where the user can view/download the existing file (optional)"},{key:"size",value:{name:"number",required:!1},description:"The file size in bytes (optional)."},{key:"thumbnailSrc",value:{name:"string",required:!1},description:"If the file is an image, provide a URL to a 72x72 thumbnail."},{key:"meta",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!1},description:"Use the meta key to keep track of any extra file information, which can be useful when deleting the file."}]}},name:"file"}],return:{name:"void"}}},description:""},hideThumbnails:{required:!1,tsType:{name:"boolean"},description:""}}};export{o as F};
