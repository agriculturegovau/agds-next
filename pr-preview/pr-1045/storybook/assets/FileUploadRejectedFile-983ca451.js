import{a as r,b as p,j as e,B as t}from"./Box-e652c7f2.js";import{f as u}from"./filesize.esm-100d58b1.js";import{F as l,S as f}from"./Stack-4546232d.js";import{a as g}from"./Button-ffb9a9d6.js";import"./ButtonGroup-75f04ad3.js";import"./index-42611d8b.js";import{b as h}from"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import{T as a}from"./Text-51e6146a.js";const o=({fileName:i,fileSize:n,errors:s,onRemove:d})=>r(l,{as:"li",gap:.5,alignItems:"flex-start",rounded:!0,flexDirection:"row",justifyContent:"space-between",paddingY:1,paddingLeft:1,css:{background:p.systemErrorMuted},children:[r(l,{gap:.5,children:[e(t,{flexShrink:0,children:e(h,{color:"error",size:"md","aria-hidden":"false","aria-label":"Error",css:{display:"block"}})}),r(f,{gap:.5,children:[r(a,{fontWeight:"bold",color:"error",children:[i," (",u(n),") could not be selected"]}),e("ul",{css:{margin:0,padding:0},children:s.map(({message:c},m)=>e(a,{as:"li",css:{listStyle:"inside"},children:c},m))})]})]}),e(t,{flexShrink:0,children:e(g,{variant:"tertiary",onClick:d,children:"Remove file"})})]});try{o.displayName="FileUploadRejectedFile",o.__docgenInfo={description:"",displayName:"FileUploadRejectedFile",props:{fileName:{defaultValue:null,description:"",name:"fileName",required:!0,type:{name:"string"}},fileSize:{defaultValue:null,description:"",name:"fileSize",required:!0,type:{name:"number"}},errors:{defaultValue:null,description:"",name:"errors",required:!0,type:{name:"{ message: string; code: string; }[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{o as F};
//# sourceMappingURL=FileUploadRejectedFile-983ca451.js.map
