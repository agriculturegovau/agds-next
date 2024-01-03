import{a as v,j as n}from"./responsive-1d67a6a2.js";import{r as f}from"./index-42611d8b.js";import{B as t}from"./Box-0bbf8d6d.js";import"./_commonjsHelpers-042e6b4d.js";const j={title:"foundations/Box",component:t},e={args:{children:"Box with a border",background:"body",color:"text",padding:2,border:!0,rounded:!0,light:!0}},r={args:{children:v(f.Fragment,{children:[n("div",{children:"Responsive padding"}),n("div",{children:"Change the size of the browser window to see the padding change"}),n(w,{})]}),border:!0,rounded:!0,padding:{xs:1,sm:2,md:3,lg:4,xl:5}}};function w(){return n(t,{palette:"dark",color:"text",display:"flex",flexDirection:"row",gap:2,paddingTop:1,children:["xs","sm","md","lg","xl"].map((s,o,d)=>n(t,{background:"body",padding:.5,rounded:!0,display:Object.fromEntries([["xs","none"],[d[o-1],"none"],[d[o],"block"],[d[o+1],"none"]].filter(([b])=>!!b)),children:s},s))})}var i,a,p,c,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Box with a border',
    background: 'body',
    color: 'text',
    padding: 2,
    border: true,
    rounded: true,
    light: true
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source},description:{story:"The Box with a Light palette applied",...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.description}}};var l,m,u,h,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Fragment>
                <div>Responsive padding</div>
                <div>
                    Change the size of the browser window to see the padding change
                </div>
                <ResponsiveSizeIndicator />
            </Fragment>,
    border: true,
    rounded: true,
    padding: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Responsive props",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};const z=["Basic","ResponsivePadding"];export{e as Basic,r as ResponsivePadding,z as __namedExportsOrder,j as default};
