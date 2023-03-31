import{u as _,a as i,p as l,j as e,B as g,t as m,b as v}from"./Box-e652c7f2.js";import{a as q,C as h}from"./Column-81a5e170.js";import"./index-42611d8b.js";import{F as s,S as V}from"./Stack-4546232d.js";import{T as y}from"./Text-51e6146a.js";function c({badgeLabel:a,href:t="/",logo:n,size:r,heading:o,subline:d}){const u=_();return i(s,{as:u,href:t,flexDirection:{xs:"column",md:"row"},color:"text",gap:1,focus:!0,alignItems:"stretch",css:{textDecoration:"none",":hover":l.underline},children:[n?e(s,{alignItems:"flex-start",maxWidth:C[r],css:{" img, svg":{width:"100%"},...l.print.hidden},children:n}):null,n?e(g,{borderRight:!0,display:{xs:"none",md:"block"},css:l.print.hidden}):null,i(V,{justifyContent:"center",children:[i(s,{alignItems:"flex-start",gap:.5,children:[e(y,{lineHeight:"default",fontSize:k[r],fontWeight:"bold",maxWidth:m.maxWidth.bodyText,children:o}),a&&e(H,{children:a})]}),d&&e(y,{color:"muted",fontSize:S[r],children:d})]})]})}const H=({children:a})=>e(g,{fontWeight:"bold",paddingLeft:.5,paddingRight:.5,border:!0,borderWidth:"md",css:{fontSize:"0.75rem",paddingTop:"2px",paddingBottom:"2px",borderColor:v.foregroundText,borderRadius:"2em"},children:a}),C={sm:{xs:"12rem",sm:"14rem"},md:{xs:"12rem",sm:"16rem"}},k={sm:{xs:"md",sm:"lg"},md:{xs:"md",sm:"xl"}},S={sm:"sm",md:{xs:"sm",sm:"md"}};try{c.displayName="HeaderBrand",c.__docgenInfo={description:"",displayName:"HeaderBrand",props:{badgeLabel:{defaultValue:null,description:"",name:"badgeLabel",required:!1,type:{name:"string"}},href:{defaultValue:{value:"/"},description:"",name:"href",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"string"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"Element"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}}}catch{}const W={sm:{xs:1,md:1},md:{xs:1,md:3}};function p({background:a,size:t,children:n}){return e(s,{as:"header",background:a,color:"text",paddingY:W[t],justifyContent:"center",children:e(g,{maxWidth:m.maxWidth.container,paddingX:m.containerPadding,width:"100%",children:e(q,{alignItems:"center",children:n})})})}try{p.displayName="HeaderContainer",p.__docgenInfo={description:"",displayName:"HeaderContainer",props:{background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}}}catch{}function x({badgeLabel:a,logo:t,heading:n,rightContent:r,subline:o,size:d="md",background:u="body",href:b="/"}){const f=!!r;return i(p,{background:u,size:d,children:[e(h,{columnSpan:{xs:12,lg:f?8:12},children:e(c,{badgeLabel:a,logo:t,size:d,href:b,heading:n,subline:o})}),f&&e(h,{columnSpan:{xs:12,lg:4},css:l.print.hidden,children:r})]})}try{x.displayName="Header",x.__docgenInfo={description:"",displayName:"Header",props:{badgeLabel:{defaultValue:null,description:"",name:"badgeLabel",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"Element"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}},subline:{defaultValue:null,description:"",name:"subline",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},href:{defaultValue:{value:"/"},description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}export{x as H,p as a,c as b};
//# sourceMappingURL=Header-43fb83c7.js.map
