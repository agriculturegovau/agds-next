import{j as a,b as _,B as o}from"./Box-e652c7f2.js";import{r as g}from"./index-42611d8b.js";import"./Stack-4546232d.js";import{T as v}from"./Text-51e6146a.js";const i=g.forwardRef(function({children:t,striped:l,tabIndex:r,tableLayout:n="auto","aria-labelledby":d,"aria-describedby":m,id:y},h){return a(o,{as:"table",ref:h,tabIndex:r,fontSize:"sm",focus:!0,width:"100%",display:"table",id:y,css:{borderCollapse:"collapse",borderSpacing:0,tableLayout:n,"tbody tr:nth-last-of-type( odd )":{backgroundColor:l?_.backgroundShade:"transparent"}},"aria-labelledby":d,"aria-describedby":m,children:t})});try{i.displayName="Table",i.__docgenInfo={description:"",displayName:"Table",props:{striped:{defaultValue:null,description:"If true, alternating rows will have a different background colour.",name:"striped",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"Setting this to -1 allows the table to be focusable",name:"tabIndex",required:!1,type:{name:"number"}},tableLayout:{defaultValue:{value:"auto"},description:"The table-layout CSS property sets the algorithm used to lay out cells, rows, and columns.",name:"tableLayout",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"auto"'}]}},"aria-labelledby":{defaultValue:null,description:"The id of the element that labels the table",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"The id of the element that describes the table",name:"aria-describedby",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the table",name:"id",required:!1,type:{name:"string"}}}}}catch{}const s=({children:e,textAlign:t="left",width:l,...r})=>a(o,{as:"th",color:"text",padding:.75,fontWeight:"bold",focus:!0,width:l,css:{textAlign:t},...r,children:e});try{s.displayName="TableHeader",s.__docgenInfo={description:"",displayName:"TableHeader",props:{display:{defaultValue:null,description:"Can be used to conditionally hide or show table cells at different breakpoints.",name:"display",required:!1,type:{name:'ResponsiveProp<"none" | "table-cell">'}},scope:{defaultValue:null,description:"Defines the cells that the header (defined in the <th>) element relates to.",name:"scope",required:!1,type:{name:"enum",value:[{value:'"col"'},{value:'"colgroup"'},{value:'"row"'},{value:'"rowgroup"'}]}},textAlign:{defaultValue:{value:"left"},description:"Sets the horizontal alignment of the content.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},width:{defaultValue:null,description:"Sets the width of the column.",name:"width",required:!1,type:{name:"ResponsiveProp<string | number>"}}}}}catch{}const u=({children:e})=>a(v,{as:"caption",fontSize:"md",fontWeight:"bold",paddingBottom:.5,display:"table-caption",css:{textAlign:"left"},children:e});try{u.displayName="TableCaption",u.__docgenInfo={description:"",displayName:"TableCaption",props:{}}}catch{}const p=({children:e})=>a(o,{as:"thead",borderBottom:!0,borderBottomWidth:"xl",borderColor:"muted",display:"table-header-group",children:e});try{p.displayName="TableHead",p.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}const c=({children:e})=>a(o,{as:"tbody",display:"table-row-group",children:e});try{c.displayName="TableBody",c.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const b=({as:e="td",children:t,display:l,verticalAlign:r="top",textAlign:n="left",scope:d})=>a(o,{as:e,padding:.75,borderBottom:!0,borderColor:"muted",color:"text",fontWeight:"normal",focus:!0,display:l,css:{verticalAlign:r,textAlign:n},scope:d,children:t});try{b.displayName="TableCell",b.__docgenInfo={description:"",displayName:"TableCell",props:{as:{defaultValue:{value:"td"},description:"The HTML element to render.",name:"as",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},display:{defaultValue:null,description:"Can be used to conditionally hide or show table cells at different breakpoints.",name:"display",required:!1,type:{name:'ResponsiveProp<"none" | "table-cell">'}},scope:{defaultValue:null,description:'Essential if you are using TableCell as a row header (as="th"). This defines the cells that the header (defined in the <th>) element relates to.',name:"scope",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"rowgroup"'}]}},textAlign:{defaultValue:{value:"left"},description:"Sets the horizontal alignment of the content.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},verticalAlign:{defaultValue:{value:"top"},description:"Sets the vertical alignment of the content.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"middle"'}]}}}}}catch{}const f=({children:e})=>a("div",{css:{overflowX:"auto"},children:e});try{f.displayName="TableWrapper",f.__docgenInfo={description:"",displayName:"TableWrapper",props:{}}}catch{}export{f as T,u as a,p as b,s as c,c as d,b as e,i as f};
//# sourceMappingURL=TableWrapper-929f22f3.js.map
