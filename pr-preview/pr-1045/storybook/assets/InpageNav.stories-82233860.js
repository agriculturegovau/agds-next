import{j as a,b as q,B as x,a as t}from"./Box-e652c7f2.js";import{r as C}from"./index-42611d8b.js";import{P as S}from"./Prose-da08c63f.js";import{S as u}from"./Stack-4546232d.js";import{T}from"./TextLink-99cf0354.js";import"./TextLinkExternal-ed8d4b34.js";import{T as w}from"./Text-51e6146a.js";import"./_commonjsHelpers-042e6b4d.js";import"./VisuallyHidden-315ab967.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";const i=({children:e,"aria-label":n})=>a(u,{as:"nav",gap:1,borderLeft:!0,borderLeftWidth:"xl",paddingLeft:1.5,css:{borderLeftColor:q.foregroundAction},"aria-label":n,children:e});try{i.displayName="InpageNavContainer",i.__docgenInfo={description:"",displayName:"InpageNavContainer",props:{"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!0,type:{name:"string"}}}}}catch{}const l=({children:e})=>a(u,{as:"ul",gap:.5,children:e});try{l.displayName="InpageNavItemContainer",l.__docgenInfo={description:"",displayName:"InpageNavItemContainer",props:{}}}catch{}const s=e=>a(x,{as:"li",children:a(T,{...e})});try{s.displayName="InpageNavItem",s.__docgenInfo={description:"",displayName:"InpageNavItem",props:{"aria-label":{defaultValue:null,description:"Describes the anchor element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name, typically generated from the `css` prop.",name:"className",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to treat the linked URL as a download.",name:"download",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"The URL that the hyperlink points to.",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hyperlink.",name:"id",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link.",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},rel:{defaultValue:null,description:"The relationship of the linked URL as space-separated link types.",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}}}}}catch{}const o=({children:e})=>a(w,{as:"h2",fontWeight:"bold",lineHeight:"heading",children:e});try{o.displayName="InpageNavTitle",o.__docgenInfo={description:"",displayName:"InpageNavTitle",props:{}}}catch{}const d=({"aria-label":e="in page",links:n,title:p})=>t(i,{"aria-label":e,children:[p?a(o,{children:p}):null,a(l,{children:n.map(({label:b,...N},k)=>a(s,{...N,children:b},k))})]});try{d.displayName="InpageNav",d.__docgenInfo={description:"",displayName:"InpageNav",props:{"aria-label":{defaultValue:null,description:"Describes the navigation element to assistive technologies.",name:"aria-label",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of links.",name:"links",required:!0,type:{name:'(Omit<InpageNavItemProps, "children"> & { label: ReactNode; })[]'}},title:{defaultValue:null,description:"The title to display above the list of links.",name:"title",required:!1,type:{name:"string"}}}}}catch{}const H={title:"navigation/InpageNav",component:d,subcomponents:{InpageNavContainer:i,InpageNavItem:s,InpageNavItemContainer:l,InpageNavTitle:o}},y=[{href:"#section-1",label:"Section 1"},{href:"#section-2",label:"Section 2"},{href:"#section-3",label:"Section 3"},{href:"#section-4",label:"Section 4"},{href:"#section-5",label:"Section 5"}],_=()=>a(S,{children:[1,2,3,4,5].map(e=>t(C.Fragment,{children:[t("h2",{id:`section-${e}`,children:["Section ",e]}),a("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus accusamus doloremque repellat molestias id, iusto cum adipisci distinctio tempore blanditiis dolor hic vero omnis laboriosam! Aenean mattis maximus ante, vitae facilisis nunc commodo vitae."}),a("p",{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer non erat et purus faucibus consectetur. Donec at hendrerit odio. In hac habitasse platea dictumst. Sed eleifend eu sem ut laoreet. Cras rutrum metus consequat pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut, blandit ac lacus."})]},e))}),r=e=>t(u,{gap:3,children:[a(d,{...e}),a(_,{})]});r.args={title:"On this page",links:y};const c=()=>t(u,{gap:3,children:[t(i,{"aria-label":"In page",children:[a(o,{children:"On this page"}),a(l,{children:y.map(({label:e,...n},p)=>a(s,{...n,children:e},p))})]}),a(_,{})]});var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Stack gap={3}>
        <InpageNav {...args} />
        <ExampleContent />
    </Stack>`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Stack gap={3}>
        <InpageNavContainer aria-label="In page">
            <InpageNavTitle>On this page</InpageNavTitle>
            <InpageNavItemContainer>
                {exampleLinks.map(({
        label,
        ...props
      }, index) => <InpageNavItem key={index} {...props}>
                        {label}
                    </InpageNavItem>)}
            </InpageNavItemContainer>
        </InpageNavContainer>
        <ExampleContent />
    </Stack>`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const M=["Basic","Modular"];export{r as Basic,c as Modular,M as __namedExportsOrder,H as default};
//# sourceMappingURL=InpageNav.stories-82233860.js.map
