import{j as r,b as w,B as u,a as t,t as W}from"./Box-e652c7f2.js";import{S as O,a as M,b as P}from"./SearchBoxInput-8dcea9bb.js";import{a as H}from"./Button-ffb9a9d6.js";import{B as z}from"./ButtonGroup-75f04ad3.js";import{S as q,F}from"./Stack-4546232d.js";import{C as Y}from"./Content-e54e3b95.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./index-42611d8b.js";import{b as E}from"./utils-41ab3b0f.js";import{a as R}from"./Heading-1b1cff4a.js";import{T as G}from"./Text-51e6146a.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import"./TextInput-af5477b0.js";import"./Field-795f8947.js";import"./useId-9773510a.js";import"./VisuallyHidden-315ab967.js";import"./LoadingBlanket-2ea81d60.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./_commonjsHelpers-042e6b4d.js";import"./mergeRefs-868b543a.js";import"./BaseContent-1f85429f.js";const B=({children:e,background:n})=>{const a=E[n];return r(u,{display:["none","none","block"],width:"40%",css:{position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:`linear-gradient(90deg, ${w[a]} 0px, rgba(255, 255, 255, 0.0) 360px)`},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},children:e})};try{B.displayName="HeroBannerImage",B.__docgenInfo={description:"",displayName:"HeroBannerImage",props:{background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const y=({children:e,image:n,background:a})=>r(Y,{children:t(F,{children:[r(q,{gap:2,width:["100%","100%",n?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:{zIndex:1},children:e}),n?r(B,{background:a,children:n}):null]})});try{y.displayName="HeroBannerContent",y.__docgenInfo={description:"",displayName:"HeroBannerContent",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const _=({children:e})=>r(u,{display:{xs:"block",md:"none"},css:{position:"relative",overflow:"hidden",paddingTop:"40%","& img":{position:"absolute",top:"50%",left:0,right:0,transform:"translateY(-50%)",maxWidth:"100%"}},children:e});try{_.displayName="HeroBannerMobileImage",_.__docgenInfo={description:"",displayName:"HeroBannerMobileImage",props:{}}}catch{}const h=({children:e,background:n})=>r(u,{as:"section",background:n,css:{position:"relative",overflow:"hidden"},children:e});try{h.displayName="HeroBannerContainer",h.__docgenInfo={description:"",displayName:"HeroBannerContainer",props:{background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const d=({image:e,background:n="bodyAlt",children:a})=>t(h,{background:n,children:[e?r(_,{children:e}):null,r(y,{background:n,image:e,children:a})]});try{d.displayName="HeroBanner",d.__docgenInfo={description:"",displayName:"HeroBanner",props:{image:{defaultValue:null,description:"The hero image",name:"image",required:!1,type:{name:"ReactNode"}},background:{defaultValue:{value:"bodyAlt"},description:"The background of the component",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}const c=({children:e})=>r(q,{gap:1.5,children:e}),p=({children:e})=>r(R,{type:"h1",fontSize:"xxxl",children:e}),m=({children:e})=>r(G,{as:"p",fontSize:"md",maxWidth:W.maxWidth.bodyText,children:e});try{c.displayName="HeroBannerTitleContainer",c.__docgenInfo={description:"",displayName:"HeroBannerTitleContainer",props:{}}}catch{}try{p.displayName="HeroBannerTitle",p.__docgenInfo={description:"",displayName:"HeroBannerTitle",props:{}}}catch{}try{m.displayName="HeroBannerSubtitle",m.__docgenInfo={description:"",displayName:"HeroBannerSubtitle",props:{}}}catch{}const Be={title:"layout/HeroBanner/HeroBanner",component:d,subcomponents:{HeroBannerTitleContainer:c,HeroBannerTitle:p,HeroBannerSubtitle:m},argTypes:{title:{control:"text"},subtitle:{control:"text"}}},g=e=>t(d,{...e,children:[t(c,{children:[r(p,{children:e.title}),r(m,{children:e.subtitle})]}),e.children]}),b={title:"Website hero banner title - xxxl/display (H1)",subtitle:"Short hero banner sentence - md/default (P)",image:r("img",{src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",role:"presentation",alt:""}),children:t(P,{onSubmit:console.log,children:[r(O,{label:"Search this website"}),r(M,{iconOnly:{xs:!0,md:!1},children:"Search"})]})},i=g.bind({});i.args={...b};const o=e=>r(u,{paddingY:3,background:"bodyAlt",children:r(g,{...e})});o.storyName="On bodyAlt background";o.args={...b,background:"body"};const s=g.bind({});s.args={...b,children:t(z,{children:[r(H,{children:"Primary button"}),r(H,{variant:"secondary",children:"Secondary button"})]})};const l=g.bind({});l.args={...b,image:void 0,children:void 0};var f,x,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => <HeroBanner {...args}>
        <HeroBannerTitleContainer>
            <HeroBannerTitle>{args.title}</HeroBannerTitle>
            <HeroBannerSubtitle>{args.subtitle}</HeroBannerSubtitle>
        </HeroBannerTitleContainer>
        {args.children}
    </HeroBanner>`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,v,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => <Box paddingY={3} background="bodyAlt">
        <Template {...args} />
    </Box>`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var N,I,C;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => <HeroBanner {...args}>
        <HeroBannerTitleContainer>
            <HeroBannerTitle>{args.title}</HeroBannerTitle>
            <HeroBannerSubtitle>{args.subtitle}</HeroBannerSubtitle>
        </HeroBannerTitleContainer>
        {args.children}
    </HeroBanner>`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var A,V,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`args => <HeroBanner {...args}>
        <HeroBannerTitleContainer>
            <HeroBannerTitle>{args.title}</HeroBannerTitle>
            <HeroBannerSubtitle>{args.subtitle}</HeroBannerSubtitle>
        </HeroBannerTitleContainer>
        {args.children}
    </HeroBanner>`,...(j=(V=l.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const ye=["Basic","OnBodyAlt","Buttons","WithoutImage"];export{i as Basic,s as Buttons,o as OnBodyAlt,l as WithoutImage,ye as __namedExportsOrder,Be as default};
//# sourceMappingURL=HeroBanner.stories-d6c8e19a.js.map
