import{j as r,b as T,B as c,a as y,t as I}from"./Box-e652c7f2.js";import{S,F as A}from"./Stack-4546232d.js";import{C as V}from"./Content-e54e3b95.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./index-42611d8b.js";import{b as j}from"./utils-41ab3b0f.js";import{a as q}from"./Heading-1b1cff4a.js";import{T as W}from"./Text-51e6146a.js";import"./BaseContent-1f85429f.js";import"./_commonjsHelpers-042e6b4d.js";const p=({children:e,background:o})=>{const t=j[o];return r(c,{display:["none","none","block"],width:"40%",css:{position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:`linear-gradient(90deg, ${T[t]} 0px, rgba(255, 255, 255, 0.0) 360px)`},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},children:e})};try{p.displayName="HeroCategoryBannerImage",p.__docgenInfo={description:"",displayName:"HeroCategoryBannerImage",props:{background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const g=({children:e,image:o,background:t})=>r(V,{children:y(A,{children:[r(S,{gap:1.5,width:["100%","100%",o?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:{zIndex:1},children:e}),o?r(p,{background:t,children:o}):null]})});try{g.displayName="HeroCategoryBannerContent",g.__docgenInfo={description:"",displayName:"HeroCategoryBannerContent",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const m=({children:e})=>r(c,{display:{xs:"block",md:"none"},css:{position:"relative",overflow:"hidden",paddingTop:"40%","& img":{position:"absolute",top:"50%",left:0,right:0,transform:"translateY(-50%)",maxWidth:"100%"}},children:e});try{m.displayName="HeroCategoryBannerMobileImage",m.__docgenInfo={description:"",displayName:"HeroCategoryBannerMobileImage",props:{}}}catch{}const u=({children:e,background:o})=>r(c,{as:"section",background:o,css:{position:"relative",overflow:"hidden"},children:e});try{u.displayName="HeroCategoryBannerContainer",u.__docgenInfo={description:"",displayName:"HeroCategoryBannerContainer",props:{background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const s=({children:e,image:o,background:t="bodyAlt"})=>y(u,{background:t,children:[o?r(m,{children:o}):null,r(g,{background:t,image:o,children:e})]});try{s.displayName="HeroCategoryBanner",s.__docgenInfo={description:"",displayName:"HeroCategoryBanner",props:{image:{defaultValue:null,description:"The hero image",name:"image",required:!1,type:{name:"ReactNode"}},background:{defaultValue:{value:"bodyAlt"},description:"The background of the component",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const d=({children:e})=>r(q,{type:"h1",fontSize:"xxl",children:e}),l=({children:e})=>r(W,{as:"p",fontSize:"md",maxWidth:I.maxWidth.bodyText,children:e});try{d.displayName="HeroCategoryBannerTitle",d.__docgenInfo={description:"",displayName:"HeroCategoryBannerTitle",props:{}}}catch{}try{l.displayName="HeroCategoryBannerSubtitle",l.__docgenInfo={description:"",displayName:"HeroCategoryBannerSubtitle",props:{}}}catch{}const J={title:"layout/HeroBanner/HeroCategoryBanner",component:s,subcomponents:{HeroCategoryBannerTitle:d,HeroCategoryBannerSubtitle:l},argTypes:{title:{control:"text"},subtitle:{control:"text"}}},b=e=>y(s,{...e,children:[r(d,{children:e.title}),r(l,{children:e.subtitle})]}),_={title:"Website hero banner title - xxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:r("img",{src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",role:"presentation",alt:""})},n=b.bind({});n.args={..._};const a=e=>r(c,{paddingY:3,background:"bodyAlt",children:r(b,{...e})});a.storyName="On bodyAlt background";a.args={..._,background:"body"};const i=b.bind({});i.args={..._,image:void 0};var B,C,h;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => <HeroCategoryBanner {...args}>
        <HeroCategoryBannerTitle>{args.title}</HeroCategoryBannerTitle>
        <HeroCategoryBannerSubtitle>{args.subtitle}</HeroCategoryBannerSubtitle>
    </HeroCategoryBanner>`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var H,f,x;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Box paddingY={3} background="bodyAlt">
        <Template {...args} />
    </Box>`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,k,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => <HeroCategoryBanner {...args}>
        <HeroCategoryBannerTitle>{args.title}</HeroCategoryBannerTitle>
        <HeroCategoryBannerSubtitle>{args.subtitle}</HeroCategoryBannerSubtitle>
    </HeroCategoryBanner>`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const K=["Basic","OnBodyAlt","WithoutImage"];export{n as Basic,a as OnBodyAlt,i as WithoutImage,K as __namedExportsOrder,J as default};
//# sourceMappingURL=HeroCategoryBanner.stories-ba029030.js.map
