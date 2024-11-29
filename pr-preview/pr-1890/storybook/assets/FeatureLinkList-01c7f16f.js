import{j as e,a as i,p as s}from"./responsive-22d1c539.js";import{S as c,F as u}from"./Stack-e6a92433.js";import{u as m}from"./useId-bf1c3739.js";import"./index-f0f3a68d.js";import{T as f}from"./TextLink-a2918464.js";import{T as k}from"./TextLinkExternal-918028c1.js";import{l as y,B as g}from"./Box-cc8e6f8e.js";import{T as l}from"./Text-03708b2d.js";import{q as b}from"./WebsiteIcon-da68083c.js";import{a as d}from"./ag.ds-next-react-core.cjs-689851d3.js";const w={body:d.boxPalette.backgroundShade,bodyAlt:d.boxPalette.backgroundShadeAlt};function L(t){return`link-desc-${m(t)}`}const p=({label:t,description:r,background:a="body",...n})=>{const h=n.target=="_blank"?k:f,o=L(n.id);return e(g,{as:"li",borderBottom:!0,background:a,css:[{...y,textDecoration:"none"},{"&:hover":{backgroundColor:w[a]}}],children:i(u,{gap:1.5,paddingY:1.5,css:{position:"relative",":has(:focus-visible)":s.outline,"@supports not selector(:has(*))":{":focus-within":s.outline}},justifyContent:"space-between",alignItems:"flex-start",children:[i(c,{gap:.5,children:[e(l,{fontSize:"md",fontWeight:"bold",children:e(h,{...n,css:{"&:focus, &:focus-visible":{outline:"none"},"&::after":{content:'""',position:"absolute",top:0,right:0,bottom:0,left:0}},"aria-describedby":r?o:void 0,children:t})}),r&&e(l,{as:"p",id:o,children:r})]}),e(b,{size:"md",weight:"regular"})]})})};p.__docgenInfo={description:"",methods:[],displayName:"FeatureLinkListItem",props:{label:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},background:{required:!1,tsType:{name:"union",raw:"keyof typeof hoverColorMap",elements:[{name:"literal",value:"body"},{name:"literal",value:"bodyAlt"}]},description:"",defaultValue:{value:"'body'",computed:!1}}}};const v=({links:t,background:r})=>e(c,{as:"ul",borderTop:!0,children:t.map((a,n)=>e(p,{background:r,...a},n))});v.__docgenInfo={description:"",methods:[],displayName:"FeatureLinkList",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`LinkProps & {
	label: ReactNode;
	description?: ReactNode;
	background?: FeatureLinkListBackground;
}`,elements:[{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"signature",type:"object",raw:`{
	label: ReactNode;
	description?: ReactNode;
	background?: FeatureLinkListBackground;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"background",value:{name:"union",raw:"keyof typeof hoverColorMap",elements:[{name:"literal",value:"body"},{name:"literal",value:"bodyAlt"}],required:!1}}]}}]},{name:"literal",value:"'children'"}],raw:"Omit<FeatureLinkListItemProps, 'children'>"}],raw:"Omit<FeatureLinkListItemProps, 'children'>[]"},description:""},background:{required:!1,tsType:{name:"union",raw:"keyof typeof hoverColorMap",elements:[{name:"literal",value:"body"},{name:"literal",value:"bodyAlt"}]},description:""}}};export{v as F};
