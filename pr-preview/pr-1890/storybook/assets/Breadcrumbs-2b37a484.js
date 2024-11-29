import{j as e,t as f,a as m}from"./responsive-22d1c539.js";import{r as h}from"./index-f0f3a68d.js";import{V as T}from"./ExternalLinkCallout-896682bb.js";import{F as p}from"./Stack-e6a92433.js";import{T as I}from"./TextLink-a2918464.js";import"./TextLinkExternal-918028c1.js";import{o as N}from"./WebsiteIcon-da68083c.js";import{a as P}from"./Button-1a082b6d.js";import"./ButtonGroup-5c583b5f.js";const g=({children:n,"aria-label":r,isExpandable:t,isExpanded:a})=>e("nav",{"aria-label":r,children:e(p,{as:"ol",gap:.5,alignItems:"center",flexWrap:"wrap",css:{"li:first-of-type > svg":{display:"none"},...t&&!a&&{[f.mediaQuery.min.md]:{"li:nth-of-type(2)":{display:"none"}},[f.mediaQuery.max.sm]:{"li:not(:nth-of-type(-n+2)):not(:last-of-type)":{display:a?void 0:"none"}}}},children:n})});g.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsContainer"};const k=()=>e(N,{color:"border",size:"sm",css:{flexShrink:0,position:"relative",top:1}});k.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsDivider"};const s=h.forwardRef(function(r,t){const{children:a,href:l}=r;return m(p,{as:"li",alignItems:"center",gap:.5,fontSize:"sm",color:"text",children:[e(k,{}),l?e(I,{ref:t,...r}):a]})});s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsItem"};function y({onClick:n}){return e(s,{children:e(p,{as:P,onClick:n,"aria-label":"Show all breadcrumbs","aria-expanded":"false",alignItems:"center",justifyContent:"center",fontSize:"sm",focusRingFor:"keyboard",link:!0,children:"…"})})}y.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsToggle",props:{onClick:{required:!0,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}}};const R=({"aria-label":n="Breadcrumbs",links:r})=>{const t=h.useRef(null),{label:a,...l}=r[0],{label:b,...w}=r[r.length-1],d=r.filter((i,o,c)=>!(o===0||o===c.length-1)),[u,L]=h.useState(!d.length),v=()=>{var i;L(!0),(i=t.current)==null||i.focus()};return m(g,{"aria-label":n,isExpandable:!0,isExpanded:u,children:[e(s,{ref:t,...l,children:a}),!u&&d.length?e(y,{onClick:v}):null,d.map(({label:i,...o},c)=>e(s,{...o,children:i},c)),m(s,{...w,children:[b,e(T,{children:" (current page)"})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{"aria-label":{required:!1,tsType:{name:"string"},description:"Describes the navigation element to assistive technologies.",defaultValue:{value:"'Breadcrumbs'",computed:!1}},links:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<BreadcrumbsItemProps, 'children'> & {
	label: ReactNode;
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
}>`},{name:"literal",value:"'children'"}],raw:"Omit<BreadcrumbsItemProps, 'children'>"},{name:"signature",type:"object",raw:`{
	label: ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}}]}}]}],raw:"BreadcrumbsLink[]"},description:"The list of links. Minimum of 2 links are required."}}};export{R as B,g as a,k as b,s as c,y as d};
