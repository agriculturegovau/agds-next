import{j as e,a as o}from"./responsive-1d67a6a2.js";import{r as ee}from"./index-42611d8b.js";import{S as X}from"./Stack-43f3e7c4.js";import{B as _}from"./Box-0bbf8d6d.js";import{u as ie}from"./useToggleState-9d17fadd.js";import{P as b}from"./Prose-c94e344e.js";import{B as J}from"./Button-e28534e8.js";import"./ButtonGroup-20aae35f.js";import{T as s}from"./Text-d916011d.js";import{A as c,a as n,b as r}from"./AccordionItem-89b338c3.js";import"./_commonjsHelpers-042e6b4d.js";import"./LoadingBlanket-54fbe64e.js";import"./Content-9704152d.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";import"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import"./VisuallyHidden-02be915e.js";import"./mergeRefs-868b543a.js";import"./useId-d335a68c.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import"./react-spring-web.esm-e3dcc61e.js";import"./index-7a46b491.js";import"./usePrefersReducedMotion-fcdf456e.js";const ke={title:"Layout/Accordion",component:c},K=({background:i})=>e(_,{padding:1.5,background:i,children:e(c,{children:e(n,{title:"Accordion title",background:i,children:e(r,{children:e(s,{as:"p",children:"This is some text inside an Accordion"})})})})}),a={render:()=>e(K,{background:"body"})},u={render:()=>e(K,{background:"bodyAlt"}),name:"On bodyAlt background"},R=({background:i})=>e(_,{padding:1.5,background:i,children:o(c,{children:[e(n,{title:"Accordion 1",background:i,children:e(r,{children:e(s,{as:"p",children:"This is some text inside an Accordion"})})}),e(n,{title:"Accordion 2",background:i,children:e(r,{children:o(b,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec gravida metus, nec suscipit nulla. Donec est nulla, dictum sed ultricies congue, suscipit at velit. Integer ut leo lectus. Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu rutrum sem luctus. Praesent vulputate eu dolor commodo tempor. Sed nec lorem consectetur, maximus justo at, tincidunt quam. Suspendisse pellentesque accumsan accumsan. Cras in odio leo. Nam pharetra, lorem eget aliquam gravida, felis ex tempor sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl euismod nec."}),e("p",{children:"Curabitur urna erat, ornare in nulla vitae, tempor porttitor dolor. Nam luctus fermentum tellus, vitae maximus turpis viverra eget. Phasellus hendrerit tortor eu mauris ultricies congue. Suspendisse cursus, purus quis viverra pharetra, purus quam hendrerit magna, condimentum cursus massa nisi ut est. Mauris in tristique augue. Phasellus tellus ante, fermentum eget fringilla eget, tempor nec nunc. Ut nec dui vitae ex dignissim tempus ac et ante. Donec imperdiet suscipit leo. Suspendisse mattis quis nisl id mattis. Sed dictum tempus nibh, quis feugiat magna efficitur in. Sed vulputate et dui eu malesuada."})]})})}),e(n,{title:"Accordion 3",background:i,children:e(r,{children:e(s,{as:"p",children:"This is some text inside an Accordion"})})})]})}),l={render:()=>e(R,{background:"body"})},d={render:()=>e(R,{background:"bodyAlt"}),name:"Group on bodyAlt background"},m=()=>{const[i,t]=ie(!1,!0);return o(X,{gap:1,alignItems:"flex-start",children:[e(J,{variant:"tertiary",onClick:t,"aria-expanded":i,children:i?"Close section":"Open section"}),e(c,{children:e(n,{isOpen:i,onToggle:t,title:"Controlled Accordion",children:e(r,{children:e(b,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec gravida metus, nec suscipit nulla. Donec est nulla, dictum sed ultricies congue, suscipit at velit. Integer ut leo lectus. Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu rutrum sem luctus. Praesent vulputate eu dolor commodo tempor. Sed nec lorem consectetur, maximus justo at, tincidunt quam. Suspendisse pellentesque accumsan accumsan. Cras in odio leo. Nam pharetra, lorem eget aliquam gravida, felis ex tempor sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl euismod nec."})})})})})]})},te=({openAccordions:i,toggle:t})=>o(c,{children:[e(n,{title:"Accordion 1",isOpen:i.includes(1),onToggle:()=>t(1),children:e(r,{children:e(s,{as:"p",children:"This is some text inside an Accordion"})})}),e(n,{title:"Accordion 2",isOpen:i.includes(2),onToggle:()=>t(2),children:e(r,{children:o(b,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi, efficitur sit amet ex et, bibendum efficitur odio. Ut nec gravida metus, nec suscipit nulla. Donec est nulla, dictum sed ultricies congue, suscipit at velit. Integer ut leo lectus. Nullam volutpat ex quis imperdiet scelerisque. Etiam ultrices et nisi eget pulvinar. Cras ultrices lectus ut nisl gravida, eu rutrum sem luctus. Praesent vulputate eu dolor commodo tempor. Sed nec lorem consectetur, maximus justo at, tincidunt quam. Suspendisse pellentesque accumsan accumsan. Cras in odio leo. Nam pharetra, lorem eget aliquam gravida, felis ex tempor sapien, a ornare leo nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl euismod nec."}),e("p",{children:"Curabitur urna erat, ornare in nulla vitae, tempor porttitor dolor. Nam luctus fermentum tellus, vitae maximus turpis viverra eget. Phasellus hendrerit tortor eu mauris ultricies congue. Suspendisse cursus, purus quis viverra pharetra, purus quam hendrerit magna, condimentum cursus massa nisi ut est. Mauris in tristique augue. Phasellus tellus ante, fermentum eget fringilla eget, tempor nec nunc. Ut nec dui vitae ex dignissim tempus ac et ante. Donec imperdiet suscipit leo. Suspendisse mattis quis nisl id mattis. Sed dictum tempus nibh, quis feugiat magna efficitur in. Sed vulputate et dui eu malesuada."})]})})}),e(n,{title:"Accordion 3",isOpen:i.includes(3),onToggle:()=>t(3),children:e(r,{children:e(s,{as:"p",children:"This is some text inside an Accordion"})})})]}),p=()=>{const[i,t]=ee.useState([1]),V=()=>t([1,2,3]),W=()=>t([]),Y=f=>{t(v=>v.includes(f)?v.filter($=>$!==f):[...v,f])},Z=3,A=i.length===Z;return o(X,{gap:1,alignItems:"flex-start",children:[e(J,{size:"sm",variant:"tertiary",onClick:A?W:V,"aria-expanded":A,children:A?"Hide all sections":"Show all sections"}),e(te,{openAccordions:i,toggle:Y})]})},g={render:()=>e(c,{children:e(n,{title:"Initially opened",isInitiallyOpen:!0,children:e(r,{children:e(s,{as:"p",children:"This is some text inside an Accordion, which is opened at time of page render."})})})})},h={render:()=>e(c,{children:o(n,{title:"Edge-to-edge image",children:[e("img",{alt:"Placeholder image",src:"/img/placeholder/600X260.png",width:"100%"}),e(r,{children:e(s,{as:"p",children:"In this example, we remove the default padding from the AccordionItem, in order to achieve the edge-to-edge image above. This Text is wrapped in the AccordionItemContent component."})})]})})};var x,q,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <AccordionBasicTemplate background="body" />
}`,...(T=(q=a.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var I,S,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <AccordionBasicTemplate background="bodyAlt" />,
  name: 'On bodyAlt background'
}`,...(C=(S=u.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,y,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <AccordionGroupTemplate background="body" />
}`,...(G=(y=l.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var k,B,N;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AccordionGroupTemplate background="bodyAlt" />,
  name: 'Group on bodyAlt background'
}`,...(N=(B=d.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var P,E,w;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(w=(E=m.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var F,L,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
  const controlledGroupAccordionLength = 3;
  const isAllOpen = openAccordions.length === controlledGroupAccordionLength;
  return <Stack gap={1} alignItems="flex-start">
            <Button size="sm" variant="tertiary" onClick={isAllOpen ? closeAll : openAll} aria-expanded={isAllOpen}>
                {isAllOpen ? 'Hide all sections' : 'Show all sections'}
            </Button>
            <AccordionControlledGroupTemplate openAccordions={openAccordions} toggle={toggle} />
        </Stack>;
}`,...(j=(L=p.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var D,U,Q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Accordion>
            <AccordionItem title="Initially opened" isInitiallyOpen>
                <AccordionItemContent>
                    <Text as="p">
                        This is some text inside an Accordion, which is opened at time of
                        page render.
                    </Text>
                </AccordionItemContent>
            </AccordionItem>
        </Accordion>
}`,...(Q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var z,H,M;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Accordion>
            <AccordionItem title="Edge-to-edge image">
                <img alt="Placeholder image" src="/img/placeholder/600X260.png" width="100%" />
                <AccordionItemContent>
                    <Text as="p">
                        In this example, we remove the default padding from the
                        AccordionItem, in order to achieve the edge-to-edge image above.
                        This Text is wrapped in the AccordionItemContent component.
                    </Text>
                </AccordionItemContent>
            </AccordionItem>
        </Accordion>
}`,...(M=(H=h.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const Be=["Basic","onBodyAlt","Group","GroupOnBodyAlt","Controlled","ControlledGroup","InitiallyOpened","EdgeToEdgeImage"];export{a as Basic,m as Controlled,p as ControlledGroup,h as EdgeToEdgeImage,l as Group,d as GroupOnBodyAlt,g as InitiallyOpened,Be as __namedExportsOrder,ke as default,u as onBodyAlt};
