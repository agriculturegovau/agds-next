import{a as h,p as u,j as o,d as r,m as L,b as s,t as l,c,u as N}from"./responsive-22d1c539.js";import"./index-f0f3a68d.js";import{f as P}from"./findBestMatch-d78b28a3.js";import{F as m}from"./Stack-e6a92433.js";import{b as T,B as f,c as x}from"./Box-cc8e6f8e.js";const b={linkHoverBg:"--nav-linkHoverBg"},C={linkHoverBg:`var(${b.linkHoverBg})`},R={body:{hover:"shade"},bodyAlt:{hover:"shadeAlt"}};function g({id:t,"aria-label":e,children:a,background:n}){const{hover:i}=R[n];return h(f,{as:"nav",background:n,id:t,"aria-label":e,css:{position:"relative",[b.linkHoverBg]:T[i],...u.print.hidden},children:[a,o(A,{})]})}function A(){return o(f,{display:["none","block"],paddingTop:.5,css:{position:"absolute",bottom:0,left:0,right:0,width:"100%",backgroundColor:r.borderMuted}})}g.__docgenInfo={description:"",methods:[],displayName:"SubNavContainer"};function k({children:t,active:e}){return o(m,{as:"li",borderBottom:!0,css:L({borderBottomColor:s([r.borderMuted,e?r.selected:r.borderMuted]),borderBottomWidth:s([l.borderWidth.sm,c(.5)]),"@media (forced-colors: active)":{borderBottomColor:e?"Background":"MenuText"},"&:first-of-type":{borderTopWidth:s([l.borderWidth.sm,0]),borderTopStyle:"solid",borderTopColor:r.borderMuted,"@media (forced-colors: active)":{borderBottomColor:"GrayText"}},"& a":{flex:1,display:s(["flex","inline-flex"]),alignItems:"center",justifyContent:"space-between",gap:c(.5),position:"relative",color:e?r.foregroundText:r.foregroundAction,padding:c(1),textDecoration:"none",borderLeftStyle:"solid",borderLeftWidth:s([l.borderWidth.xl,0]),borderLeftColor:e?r.selected:"transparent","@media (forced-colors: active)":{borderLeftColor:e?"MenuText":"Background"},...x,"&:hover":{color:r.foregroundText,backgroundColor:C.linkHoverBg,"& > span:first-of-type":u.underline}}}),children:t})}k.__docgenInfo={description:"",methods:[],displayName:"SubNavListItem"};function v({links:t,activePath:e}){const a=N();return o(m,{as:"ul",flexDirection:["column","row"],flexWrap:"wrap",css:{position:"relative",zIndex:l.zIndex.elevated},children:t.map(({href:n,label:i,endElement:d,...y},w)=>{const p=n===e;return o(k,{active:p,children:h(a,{href:n,"aria-current":p?"page":void 0,...y,children:[o("span",{children:i}),d]})},w)})})}v.__docgenInfo={description:"",methods:[],displayName:"SubNavList",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<LinkProps, 'children'> & {
	label: ReactNode;
	endElement?: ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
	/** Describes the anchor element to assistive technologies. */
	'aria-label'?: string;
	/** The CSS class name, typically generated from the \`css\` prop. */
	className?: string;
	/** Causes the browser to treat the linked URL as a download. */
	download?: NativeLinkProps['download'];
	/** The URL that the hyperlink points to. */
	href?: string;
	/** The ID of the hyperlink. */
	id?: string;
	/** How much of the referrer to send when following the link. */
	referrerPolicy?: NativeLinkProps['referrerPolicy'];
	/** The relationship of the linked URL as space-separated link types. */
	rel?: string;
	/** WAI-ARIA role. */
	role?: NativeLinkProps['role'];
	/** Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). */
	target?: NativeLinkProps['target'];
}`,signature:{properties:[{key:"aria-label",value:{name:"string",required:!1},description:"Describes the anchor element to assistive technologies."},{key:"className",value:{name:"string",required:!1},description:"The CSS class name, typically generated from the `css` prop."},{key:"download",value:{name:"AnchorHTMLAttributes['download']",raw:"NativeLinkProps['download']",required:!1},description:"Causes the browser to treat the linked URL as a download."},{key:"href",value:{name:"string",required:!1},description:"The URL that the hyperlink points to."},{key:"id",value:{name:"string",required:!1},description:"The ID of the hyperlink."},{key:"referrerPolicy",value:{name:"AnchorHTMLAttributes['referrerPolicy']",raw:"NativeLinkProps['referrerPolicy']",required:!1},description:"How much of the referrer to send when following the link."},{key:"rel",value:{name:"string",required:!1},description:"The relationship of the linked URL as space-separated link types."},{key:"role",value:{name:"AnchorHTMLAttributes['role']",raw:"NativeLinkProps['role']",required:!1},description:"WAI-ARIA role."},{key:"target",value:{name:"AnchorHTMLAttributes['target']",raw:"NativeLinkProps['target']",required:!1},description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>)."}]}}],raw:`PropsWithChildren<{
	/** Describes the anchor element to assistive technologies. */
	'aria-label'?: string;
	/** The CSS class name, typically generated from the \`css\` prop. */
	className?: string;
	/** Causes the browser to treat the linked URL as a download. */
	download?: NativeLinkProps['download'];
	/** The URL that the hyperlink points to. */
	href?: string;
	/** The ID of the hyperlink. */
	id?: string;
	/** How much of the referrer to send when following the link. */
	referrerPolicy?: NativeLinkProps['referrerPolicy'];
	/** The relationship of the linked URL as space-separated link types. */
	rel?: string;
	/** WAI-ARIA role. */
	role?: NativeLinkProps['role'];
	/** Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). */
	target?: NativeLinkProps['target'];
}>`},{name:"literal",value:"'children'"}],raw:"Omit<LinkProps, 'children'>"},{name:"signature",type:"object",raw:`{
	label: ReactNode;
	endElement?: ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"endElement",value:{name:"ReactNode",required:!1}}]}}]}],raw:"SubNavListLink[]"},description:""},activePath:{required:!1,tsType:{name:"string"},description:""}}};function S({links:t,activePath:e,id:a,"aria-label":n="Content",background:i="body"}){const d=P(t,e);return o(g,{id:a,"aria-label":n,background:i,children:o(v,{links:t,activePath:d})})}S.__docgenInfo={description:"",methods:[],displayName:"SubNav",props:{"aria-label":{defaultValue:{value:"'Content'",computed:!1},required:!1},background:{defaultValue:{value:"'body'",computed:!1},required:!1}}};export{S};
