import{j as e,B as h,b as B,a as d,p as de}from"./Box-e652c7f2.js";import{r as _}from"./index-42611d8b.js";import{F as me,S as te}from"./Stack-4546232d.js";import{u as ie}from"./useToggleState-9d17fadd.js";import{P as S}from"./Prose-da08c63f.js";import{B as pe,a as oe}from"./Button-ffb9a9d6.js";import"./ButtonGroup-75f04ad3.js";import{T as g}from"./Text-51e6146a.js";import{u as ge}from"./useId-9773510a.js";import{a as re,u as ne,b as ae}from"./react-spring-web.esm-92c11c75.js";import{C as he}from"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import"./_commonjsHelpers-042e6b4d.js";import"./LoadingBlanket-2ea81d60.js";import"./Content-e54e3b95.js";import"./BaseContent-1f85429f.js";import"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import"./VisuallyHidden-315ab967.js";import"./mergeRefs-868b543a.js";import"./index-7a46b491.js";const m=({children:t})=>e(h,{width:"100%",borderTop:!0,children:t});try{m.displayName="Accordion",m.__docgenInfo={description:"",displayName:"Accordion",props:{}}}catch{}const fe={body:B.backgroundShade,bodyAlt:B.backgroundShadeAlt},Ae=re(he),C=({ariaControls:t,background:i="body",children:p,id:l,isOpen:s,onClick:c,tag:a})=>{const o=ne(),u=ae({from:{transform:"rotate(0deg)"},to:{transform:`rotate(${s?180:0}deg)`},immediate:o});return e(h,{as:a,children:d(me,{as:pe,id:l,"aria-controls":t,"aria-expanded":s,onClick:c,color:"action",fontSize:"md",lineHeight:"heading",fontWeight:"bold",background:i,paddingY:1,justifyContent:"space-between",alignItems:"center",width:"100%",link:!0,focus:!0,css:{"&:hover":{backgroundColor:fe[i]}},children:[p,e(Ae,{weight:"bold",size:"sm",style:u})]})})};try{C.displayName="AccordionTitle",C.__docgenInfo={description:"",displayName:"AccordionTitle",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},ariaControls:{defaultValue:null,description:"",name:"ariaControls",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}const T=({children:t,ariaLabelledBy:i,id:p,isOpen:l})=>{const s=_.useRef(null),c=ne(),a=ae({from:{display:"none",height:0},to:async o=>{var u;l&&await o({display:"block"}),await o({height:l?(u=s.current)==null?void 0:u.offsetHeight:0,immediate:c}),await o(l?{height:"auto"}:{display:"none"})}});return e(re.div,{id:p,"aria-labelledby":i,role:"region",style:a,css:{overflow:"hidden",...de.print.visible},children:e("div",{ref:s,children:t})})};try{T.displayName="AccordionBody",T.__docgenInfo={description:"",displayName:"AccordionBody",props:{ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}const ye=()=>{const t=ge();return{titleId:`accordion-${t}-title`,bodyId:`accordion-${t}-body`}},r=({background:t,children:i,title:p,titleHeadingTag:l="h3",isInitiallyOpen:s=!1,isOpen:c,onToggle:a})=>{const{titleId:o,bodyId:u}=ye(),[le,O]=ie(s,!s),k=typeof c=="boolean"?c:le,ue=_.useCallback(()=>{typeof a=="function"&&a(),O()},[a,O]);return d(h,{borderBottom:!0,children:[e(C,{background:t,tag:l,id:o,ariaControls:u,isOpen:k,onClick:ue,children:p}),e(T,{isOpen:k,id:u,ariaLabelledBy:o,children:i})]})},n=({children:t})=>e(h,{paddingBottom:1.5,paddingTop:.5,children:t});try{r.displayName="AccordionItem",r.__docgenInfo={description:"",displayName:"AccordionItem",props:{background:{defaultValue:null,description:"If the Accordion is placed on a page with 'bodyAlt' background, please set this to 'bodyAlt'.",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}},isInitiallyOpen:{defaultValue:{value:"false"},description:"If true, the item will initially be rendered in an open state.",name:"isInitiallyOpen",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"The current open state.",name:"isOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Handle open/close events.",name:"onToggle",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"The title of the accordion item.",name:"title",required:!0,type:{name:"ReactNode"}},titleHeadingTag:{defaultValue:{value:"h3"},description:"The underlying HTML tag of the title element.",name:"titleHeadingTag",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}try{n.displayName="AccordionItemContent",n.__docgenInfo={description:"",displayName:"AccordionItemContent",props:{}}}catch{}const Ue={title:"Layout/Accordion",component:m},se=({background:t})=>e(h,{padding:1.5,background:t,children:e(m,{children:e(r,{title:"Accordion title",background:t,children:e(n,{children:e(g,{as:"p",children:"This is some text inside an Accordion"})})})})}),y=()=>e(se,{background:"body"}),f=()=>e(se,{background:"bodyAlt"});f.storyName="On bodyAlt background";const ce=({background:t})=>e(h,{padding:1.5,background:t,children:d(m,{children:[e(r,{title:"Accordion 1",background:t,children:e(n,{children:e(g,{as:"p",children:"This is some text inside an Accordion"})})}),e(r,{title:"Accordion 2",background:t,children:e(n,{children:d(S,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec gravida metus, nec suscipit nulla. Donec est nulla, dictum sed ultricies congue, suscipit at velit. Integer ut leo lectus. Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu rutrum sem luctus. Praesent vulputate eu dolor commodo tempor. Sed nec lorem consectetur, maximus justo at, tincidunt quam. Suspendisse pellentesque accumsan accumsan. Cras in odio leo. Nam pharetra, lorem eget aliquam gravida, felis ex tempor sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl euismod nec."}),e("p",{children:"Curabitur urna erat, ornare in nulla vitae, tempor porttitor dolor. Nam luctus fermentum tellus, vitae maximus turpis viverra eget. Phasellus hendrerit tortor eu mauris ultricies congue. Suspendisse cursus, purus quis viverra pharetra, purus quam hendrerit magna, condimentum cursus massa nisi ut est. Mauris in tristique augue. Phasellus tellus ante, fermentum eget fringilla eget, tempor nec nunc. Ut nec dui vitae ex dignissim tempus ac et ante. Donec imperdiet suscipit leo. Suspendisse mattis quis nisl id mattis. Sed dictum tempus nibh, quis feugiat magna efficitur in. Sed vulputate et dui eu malesuada."})]})})}),e(r,{title:"Accordion 3",background:t,children:e(n,{children:e(g,{as:"p",children:"This is some text inside an Accordion"})})})]})}),b=()=>e(ce,{background:"body"}),A=()=>e(ce,{background:"bodyAlt"});A.storyName="Group on bodyAlt background";const v=()=>{const[t,i]=ie(!1,!0);return d(te,{gap:1,alignItems:"flex-start",children:[e(oe,{variant:"tertiary",onClick:i,"aria-expanded":t,children:t?"Close section":"Open section"}),e(m,{children:e(r,{isOpen:t,onToggle:i,title:"Controlled Accordion",children:e(n,{children:e(S,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec gravida metus, nec suscipit nulla. Donec est nulla, dictum sed ultricies congue, suscipit at velit. Integer ut leo lectus. Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu rutrum sem luctus. Praesent vulputate eu dolor commodo tempor. Sed nec lorem consectetur, maximus justo at, tincidunt quam. Suspendisse pellentesque accumsan accumsan. Cras in odio leo. Nam pharetra, lorem eget aliquam gravida, felis ex tempor sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl euismod nec."})})})})})]})},be=3,ve=({openAccordions:t,toggle:i})=>d(m,{children:[e(r,{title:"Accordion 1",isOpen:t.includes(1),onToggle:()=>i(1),children:e(n,{children:e(g,{as:"p",children:"This is some text inside an Accordion"})})}),e(r,{title:"Accordion 2",isOpen:t.includes(2),onToggle:()=>i(2),children:e(n,{children:d(S,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec gravida metus, nec suscipit nulla. Donec est nulla, dictum sed ultricies congue, suscipit at velit. Integer ut leo lectus. Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu rutrum sem luctus. Praesent vulputate eu dolor commodo tempor. Sed nec lorem consectetur, maximus justo at, tincidunt quam. Suspendisse pellentesque accumsan accumsan. Cras in odio leo. Nam pharetra, lorem eget aliquam gravida, felis ex tempor sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl euismod nec."}),e("p",{children:"Curabitur urna erat, ornare in nulla vitae, tempor porttitor dolor. Nam luctus fermentum tellus, vitae maximus turpis viverra eget. Phasellus hendrerit tortor eu mauris ultricies congue. Suspendisse cursus, purus quis viverra pharetra, purus quam hendrerit magna, condimentum cursus massa nisi ut est. Mauris in tristique augue. Phasellus tellus ante, fermentum eget fringilla eget, tempor nec nunc. Ut nec dui vitae ex dignissim tempus ac et ante. Donec imperdiet suscipit leo. Suspendisse mattis quis nisl id mattis. Sed dictum tempus nibh, quis feugiat magna efficitur in. Sed vulputate et dui eu malesuada."})]})})}),e(r,{title:"Accordion 3",isOpen:t.includes(3),onToggle:()=>i(3),children:e(n,{children:e(g,{as:"p",children:"This is some text inside an Accordion"})})})]}),x=()=>{const[t,i]=_.useState([1]),p=()=>i([1,2,3]),l=()=>i([]),s=a=>{i(o=>o.includes(a)?o.filter(u=>u!==a):[...o,a])},c=t.length===be;return d(te,{gap:1,alignItems:"flex-start",children:[e(oe,{size:"sm",variant:"tertiary",onClick:c?l:p,"aria-expanded":c,children:c?"Hide all sections":"Show all sections"}),e(ve,{openAccordions:t,toggle:s})]})},I=()=>e(m,{children:e(r,{title:"Initially opened",isInitiallyOpen:!0,children:e(n,{children:e(g,{as:"p",children:"This is some text inside an Accordion, which is opened at time of page render."})})})}),q=()=>e(m,{children:d(r,{title:"Edge-to-edge image",children:[e("img",{alt:"Placeholder image",src:"/img/placeholder/600X260.png",width:"100%"}),e(n,{children:e(g,{as:"p",children:"In this example, we remove the default padding from the AccordionItem, in order to achieve the edge-to-edge image above. This Text is wrapped in the AccordionItemContent component."})})]})});var N,E,w;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:'() => <AccordionBasicExample background="body" />',...(w=(E=y.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var G,V,P;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:'() => <AccordionBasicExample background="bodyAlt" />',...(P=(V=f.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var L,H,F;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:'() => <AccordionGroupExample background="body" />',...(F=(H=b.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var M,j,D;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:'() => <AccordionGroupExample background="bodyAlt" />',...(D=(j=A.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var U,R,z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [isOpen, onToggle] = useToggleState(false, true);
  return <Stack gap={1} alignItems="flex-start">
            <Button variant="tertiary" onClick={onToggle} aria-expanded={isOpen}>
                {isOpen ? 'Close section' : 'Open section'}
            </Button>
            <Accordion>
                <AccordionItem isOpen={isOpen} onToggle={onToggle} title="Controlled Accordion">
                    <AccordionItemContent>
                        <Prose>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                                libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien
                                mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec
                                gravida metus, nec suscipit nulla. Donec est nulla, dictum sed
                                ultricies congue, suscipit at velit. Integer ut leo lectus.
                                Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et
                                nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu
                                rutrum sem luctus. Praesent vulputate eu dolor commodo tempor.
                                Sed nec lorem consectetur, maximus justo at, tincidunt quam.
                                Suspendisse pellentesque accumsan accumsan. Cras in odio leo.
                                Nam pharetra, lorem eget aliquam gravida, felis ex tempor
                                sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu
                                elit bibendum, nec bibendum ligula posuere. Nam porttitor est
                                eros, ac maximus nisl euismod nec.
                            </p>
                        </Prose>
                    </AccordionItemContent>
                </AccordionItem>
            </Accordion>
        </Stack>;
}`,...(z=(R=v.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var Q,$,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [openAccordions, setOpenAccordions] = useState<ControlledGroupAccordion[]>([1]);
  const openAll = () => setOpenAccordions([1, 2, 3]);
  const closeAll = () => setOpenAccordions([]);
  const toggle = (item: ControlledGroupAccordion) => {
    setOpenAccordions(openAccordions => {
      if (openAccordions.includes(item)) {
        return openAccordions.filter(acc => acc !== item);
      }
      return [...openAccordions, item];
    });
  };
  const isAllOpen = openAccordions.length === controlledGroupAccordionLength;
  return <Stack gap={1} alignItems="flex-start">
            <Button size="sm" variant="tertiary" onClick={isAllOpen ? closeAll : openAll} aria-expanded={isAllOpen}>
                {isAllOpen ? 'Hide all sections' : 'Show all sections'}
            </Button>
            <AccordionControlledGroupExample openAccordions={openAccordions} toggle={toggle} />
        </Stack>;
}`,...(X=($=x.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var W,Y,J;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`() => <Accordion>
        <AccordionItem title="Initially opened" isInitiallyOpen>
            <AccordionItemContent>
                <Text as="p">
                    This is some text inside an Accordion, which is opened at time of page
                    render.
                </Text>
            </AccordionItemContent>
        </AccordionItem>
    </Accordion>`,...(J=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Z,ee;q.parameters={...q.parameters,docs:{...(K=q.parameters)==null?void 0:K.docs,source:{originalSource:`() => <Accordion>
        <AccordionItem title="Edge-to-edge image">
            <img alt="Placeholder image" src="/img/placeholder/600X260.png" width="100%" />
            <AccordionItemContent>
                <Text as="p">
                    In this example, we remove the default padding from the AccordionItem,
                    in order to achieve the edge-to-edge image above. This Text is wrapped
                    in the AccordionItemContent component.
                </Text>
            </AccordionItemContent>
        </AccordionItem>
    </Accordion>`,...(ee=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Re=["Basic","OnBodyAlt","Group","GroupOnBodyAlt","Controlled","ControlledGroup","InitiallyOpened","EdgeToEdgeImage"];export{y as Basic,v as Controlled,x as ControlledGroup,q as EdgeToEdgeImage,b as Group,A as GroupOnBodyAlt,I as InitiallyOpened,f as OnBodyAlt,Re as __namedExportsOrder,Ue as default};
//# sourceMappingURL=Accordion.stories-4782a08c.js.map
