import{j as e,a}from"./responsive-22d1c539.js";import{r as te}from"./index-f0f3a68d.js";import{S as se}from"./SiteLayout-90647067.js";import{V as le}from"./ExternalLinkCallout-896682bb.js";import{S as s,F as ue}from"./Stack-e6a92433.js";import{B as oe}from"./Box-cc8e6f8e.js";import{B as me}from"./Breadcrumbs-35a6bf9b.js";import{B}from"./Button-1a082b6d.js";import"./ButtonGroup-5c583b5f.js";import{C as ce,a as de}from"./Column-abc95574.js";import"./Content-a73dd057.js";import{P as ne}from"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import{H as pe,b as be,c as L}from"./Heading-85d6cea8.js";import{I as he}from"./IndicatorDot-72a667d4.js";import{U as Te}from"./UnorderedList-c9f30bac.js";import"./OrderedList-078cc31c.js";import{L as ge}from"./ListItem-aaab0c0d.js";import{N as fe}from"./NotificationBadge-5114eb4c.js";import{S as ve}from"./SubNav-8ad299d4.js";import{S as Pe,a as p,b,c as h}from"./SummaryList-5eaecf8c.js";import{T as r}from"./Text-03708b2d.js";import{a as l,b as n,c as u,d as i,T as o}from"./Tabs-94cdd8ce.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./ag.ds-next-react-box.cjs-b1944647.js";import"./noop-eb890146.js";import"./index-e937ffd1.js";import"./ag.ds-next-react-main-nav.cjs-f9979277.js";import"./FooterDivider-e8ec1942.js";import"./MainNav-6f3d6916.js";import"./useTernaryState-ed86673f.js";import"./findBestMatch-d78b28a3.js";import"./WebsiteIcon-03a55100.js";import"./DropdownMenuGroupLink-c628e7eb.js";import"./Popover-4e65a303.js";import"./index-33ec0502.js";import"./Divider-6f447906.js";import"./useClickOutside-ca5d6845.js";import"./mergeRefs-868b543a.js";import"./useId-bf1c3739.js";import"./Combination-2983c2b6.js";import"./useAriaModalPolyfill-194cdec9.js";import"./MainNavBottomBar-61c46ab1.js";import"./ag.ds-next-react-skip-link.cjs-364d6df1.js";import"./theme-79017997.js";import"./Logo-335229b1.js";import"./LinkList-bf307ed6.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import"./SkipLinks-ae1108db.js";import"./ag.ds-next-react-core.cjs-689851d3.js";import"./useToggleState-e0319b87.js";import"./usePrefersReducedMotion-f6a12f32.js";import"./useWindowSize-26bd49d7.js";import"./LoadingBlanket-5db8d8aa.js";import"./BaseContent-b4d619b8.js";const La={title:"layout/Tabs",render:function(t){return e(oe,{padding:t.background==="bodyAlt"?1.5:0,background:t.background,children:a(o,{...t,children:[a(l,{children:[e(n,{children:"Tab 1"}),e(n,{children:"Tab 2"}),e(n,{children:"Tab 3"})]}),a(u,{children:[e(i,{children:e(r,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus ac magna elementum, ac laoreet leo facilisis. Nulla at bibendum diam. Pellentesque vel accumsan eros, nec egestas leo. Etiam lacinia, ligula non cursus sodales, diam odio posuere eros, pharetra convallis lacus magna in urna. Etiam condimentum iaculis mattis. Vestibulum eget felis in orci eleifend vulputate vestibulum id mi. Curabitur at lacus vitae urna tincidunt vehicula at quis nibh. Quisque id aliquet sapien. Quisque ultricies nibh nisl, eu pellentesque dui semper a. Aliquam vestibulum justo vitae feugiat sodales. Aenean efficitur sodales diam, et volutpat enim faucibus a. Nulla mollis est eu velit malesuada ornare ultrices in neque."})}),e(i,{children:e(r,{as:"p",children:"Praesent metus leo, ultrices porta sodales quis, molestie vitae nisl. Fusce at eros ultricies, pharetra eros id, faucibus dolor. Nam et nibh lacus. Etiam pellentesque eros finibus ultricies malesuada. Sed eget libero suscipit, dictum lacus sit amet, venenatis dolor. Sed porttitor lorem turpis, ac suscipit lacus vehicula id. Aliquam id venenatis augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer viverra metus sed dolor euismod consectetur. Cras mauris nisi, elementum vel eros sed, faucibus rhoncus mauris. Phasellus eu ante vehicula, luctus libero in, malesuada nulla."})}),e(i,{children:e(r,{as:"p",children:"Duis eu bibendum urna. Integer nisl massa, aliquam scelerisque hendrerit at, ullamcorper quis turpis. Proin vulputate tincidunt neque ut sollicitudin. In ullamcorper neque justo, vitae euismod ante aliquam eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eu purus ac ante tempus vulputate ac vel mauris. Duis congue augue augue, quis elementum nisl ultricies fermentum. Sed pellentesque leo ut est semper vulputate."})})]})]})})}},T={},g={args:{background:"bodyAlt"}},f={args:{contained:!1}},v={args:{contained:!1,background:"bodyAlt"}},P={render:function(){const[t,m]=te.useState(0);return a(s,{gap:2,children:[a(r,{children:["Current tab index: ",t]}),a(ue,{gap:.5,children:[e(B,{variant:"text",onClick:()=>m(0),children:"Go to first tab"}),e(B,{variant:"text",onClick:()=>m(1),children:"Go to second tab"}),e(B,{variant:"text",onClick:()=>m(2),children:"Go to third tab"})]}),a(o,{activeIndex:t,onChange:m,children:[a(l,{children:[e(n,{children:"Tab 1"}),e(n,{children:"Tab 2"}),e(n,{children:"Tab 3"})]}),a(u,{children:[e(i,{children:"Tab panel 1."}),e(i,{children:"Tab panel 2."}),e(i,{children:"Tab panel 3."})]})]})]})}},y={render:function(){return a(s,{gap:2,children:[a(o,{children:[a(l,{children:[e(n,{children:"Tab 1"}),e(n,{children:"Tab 2"}),e(n,{children:"Tab 3"})]}),a(u,{children:[e(i,{children:"Tab panel 1."}),e(i,{children:"Tab panel 2."}),e(i,{children:"Tab panel 3."})]})]}),a(o,{children:[a(l,{children:[e(n,{children:"Tab 1"}),e(n,{children:"Tab 2"}),e(n,{children:"Tab 3"})]}),a(u,{children:[e(i,{children:"Tab panel 1."}),e(i,{children:"Tab panel 2."}),e(i,{children:"Tab panel 3."})]})]}),a(o,{children:[a(l,{children:[e(n,{children:"Tab 1"}),e(n,{children:"Tab 2"}),e(n,{children:"Tab 3"})]}),a(u,{children:[e(i,{children:"Tab panel 1."}),e(i,{children:"Tab panel 2."}),e(i,{children:"Tab panel 3."})]})]})]})}},S={render:function(){return e(ne,{children:a(o,{children:[e(l,{children:Array.from(Array(10).keys()).map(t=>a(n,{children:["Tab ",t+1]},t))}),e(u,{children:Array.from(Array(10).keys()).map(t=>a(i,{children:["Tab panel ",t+1,"."]},t))})]})})}},q={args:{},render:function(t){return a(o,{...t,children:[a(l,{children:[e(n,{endElement:e(he,{}),children:"Tab 1"}),e(n,{children:"Tab 2"}),e(n,{endElement:a(te.Fragment,{children:[e(fe,{value:100,max:99,tone:"action","aria-hidden":!0}),e(le,{children:", 100 notifications"})]}),children:"Tab 3"})]}),a(u,{children:[e(i,{children:e(r,{as:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum lacus ac magna elementum, ac laoreet leo facilisis. Nulla at bibendum diam. Pellentesque vel accumsan eros, nec egestas leo. Etiam lacinia, ligula non cursus sodales, diam odio posuere eros, pharetra convallis lacus magna in urna. Etiam condimentum iaculis mattis. Vestibulum eget felis in orci eleifend vulputate vestibulum id mi. Curabitur at lacus vitae urna tincidunt vehicula at quis nibh. Quisque id aliquet sapien. Quisque ultricies nibh nisl, eu pellentesque dui semper a. Aliquam vestibulum justo vitae feugiat sodales. Aenean efficitur sodales diam, et volutpat enim faucibus a. Nulla mollis est eu velit malesuada ornare ultrices in neque."})}),e(i,{children:e(r,{as:"p",children:"Praesent metus leo, ultrices porta sodales quis, molestie vitae nisl. Fusce at eros ultricies, pharetra eros id, faucibus dolor. Nam et nibh lacus. Etiam pellentesque eros finibus ultricies malesuada. Sed eget libero suscipit, dictum lacus sit amet, venenatis dolor. Sed porttitor lorem turpis, ac suscipit lacus vehicula id. Aliquam id venenatis augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer viverra metus sed dolor euismod consectetur. Cras mauris nisi, elementum vel eros sed, faucibus rhoncus mauris. Phasellus eu ante vehicula, luctus libero in, malesuada nulla."})}),e(i,{children:e(r,{as:"p",children:"Duis eu bibendum urna. Integer nisl massa, aliquam scelerisque hendrerit at, ullamcorper quis turpis. Proin vulputate tincidunt neque ut sollicitudin. In ullamcorper neque justo, vitae euismod ante aliquam eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eu purus ac ante tempus vulputate ac vel mauris. Duis congue augue augue, quis elementum nisl ultricies fermentum. Sed pellentesque leo ut est semper vulputate."})})]})]})}},I={parameters:{layout:"fullscreen"},render:function(){return e(se,{children:e(ne,{children:e(ce,{children:e(de,{columnSpan:{xs:12,lg:8},children:a(s,{gap:3,children:[e(me,{links:[{href:"#",label:"Home"},{href:"#",label:"Category 1"},{href:"#",label:"Subcategory 1"},{label:"Population trends"}]}),a(s,{gap:1.5,children:[e(pe,{children:"Population trends"}),e(r,{as:"p",fontSize:"md",color:"muted",children:"Introductory paragraph providing context for this single page of the multipage form. All questions on page must be related - md/default (P)."})]}),e(ve,{activePath:"/population",links:[{href:"/population",label:"Population"},{href:"/immigration",label:"Immigration"},{href:"/demographics",label:"Demographics"},{href:"/births",label:"Births"},{href:"/deaths",label:"Deaths"}]}),a(s,{gap:1.5,children:[e(be,{children:"Population"}),e(r,{as:"p",children:"Short intro of content."})]}),a(o,{children:[e(l,{children:A.map(({year:t})=>e(n,{children:t},t))}),e(u,{children:A.map(({year:t,stats:m,data:d})=>e(i,{children:a(s,{gap:2,children:[a(s,{gap:1.5,children:[e(L,{children:t}),e(Te,{children:m.map((ie,re)=>e(ge,{children:ie},re))})]}),a(s,{gap:1.5,children:[e(L,{children:"Population quick stats"}),a(Pe,{children:[a(p,{children:[e(b,{children:"People"}),e(h,{children:ye.format(d.people)})]}),a(p,{children:[e(b,{children:"Male"}),e(h,{children:x.format(d.male)})]}),a(p,{children:[e(b,{children:"Female"}),e(h,{children:x.format(d.female)})]}),a(p,{children:[e(b,{children:"Median age"}),e(h,{children:d.medianAge})]})]})]})]})},t))})]})]})})})})})}},ye=new Intl.NumberFormat("en-AU"),x=new Intl.NumberFormat("en-AU",{style:"percent",minimumFractionDigits:1,maximumFractionDigits:1}),A=[{year:2021,stats:["The 2021 Census counted 25,422,788 people in Australia (excludes overseas visitors), an increase of 8.6 per cent since the 2016 Census.","49.3 per cent of the population were male with a median age of 37 years old.","50.7 per cent of the population were female with the median age of 39 years old."],data:{people:25422788,male:.493,female:.507,medianAge:38}},{year:2016,stats:["In the 2016 Census, there were 23,401,892 people in Australia. Of these 49.3% were male and 50.7% were female. Aboriginal and/or Torres Strait Islander people made up 2.8% of the population."],data:{people:23401892,male:.493,female:.507,medianAge:38}},{year:2011,stats:["In the 2011 Census, there were 21,507,717 people in Australia of these 49.4% were male and 50.6% were female. Aboriginal and/or Torres Strait Islander people made up 2.5% of the population."],data:{people:21507717,male:.493,female:.507,medianAge:37}},{year:2006,stats:["In the 2006 Census (held on 8th August 2006), there were 19,855,288 people usually resident in Australia. The population has increased by 6%, or just over 1 million people, since the 2001 Census. As in 2001, female slightly outnumbered male in the population.","2.3% of the population identified themselves as being Aboriginal and/or Torres Strait Islander people in the 2006 Census which is an increase of 11% or 45,000 people."],data:{people:19855288,male:.493,female:.507,medianAge:37}}];var k,C,D;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(D=(C=T.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,F,N;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    background: 'bodyAlt'
  }
}`,...(N=(F=g.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var H,w,R;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    contained: false
  }
}`,...(R=(w=f.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var j,M,O;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    contained: false,
    background: 'bodyAlt'
  }
}`,...(O=(M=v.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var V,G,Q;P.parameters={...P.parameters,docs:{...(V=P.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return <Stack gap={2}>
                <Text>Current tab index: {activeTabIndex}</Text>
                <Flex gap={0.5}>
                    <Button variant="text" onClick={() => setActiveTabIndex(0)}>
                        Go to first tab
                    </Button>
                    <Button variant="text" onClick={() => setActiveTabIndex(1)}>
                        Go to second tab
                    </Button>
                    <Button variant="text" onClick={() => setActiveTabIndex(2)}>
                        Go to third tab
                    </Button>
                </Flex>
                <Tabs activeIndex={activeTabIndex} onChange={setActiveTabIndex}>
                    <TabList>
                        <TabButton>Tab 1</TabButton>
                        <TabButton>Tab 2</TabButton>
                        <TabButton>Tab 3</TabButton>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Tab panel 1.</TabPanel>
                        <TabPanel>Tab panel 2.</TabPanel>
                        <TabPanel>Tab panel 3.</TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>;
  }
}`,...(Q=(G=P.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,z,W;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap={2}>
                <Tabs>
                    <TabList>
                        <TabButton>Tab 1</TabButton>
                        <TabButton>Tab 2</TabButton>
                        <TabButton>Tab 3</TabButton>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Tab panel 1.</TabPanel>
                        <TabPanel>Tab panel 2.</TabPanel>
                        <TabPanel>Tab panel 3.</TabPanel>
                    </TabPanels>
                </Tabs>
                <Tabs>
                    <TabList>
                        <TabButton>Tab 1</TabButton>
                        <TabButton>Tab 2</TabButton>
                        <TabButton>Tab 3</TabButton>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Tab panel 1.</TabPanel>
                        <TabPanel>Tab panel 2.</TabPanel>
                        <TabPanel>Tab panel 3.</TabPanel>
                    </TabPanels>
                </Tabs>
                <Tabs>
                    <TabList>
                        <TabButton>Tab 1</TabButton>
                        <TabButton>Tab 2</TabButton>
                        <TabButton>Tab 3</TabButton>
                    </TabList>
                    <TabPanels>
                        <TabPanel>Tab panel 1.</TabPanel>
                        <TabPanel>Tab panel 2.</TabPanel>
                        <TabPanel>Tab panel 3.</TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>;
  }
}`,...(W=(z=y.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var _,J,K;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: function Render() {
    return <PageContent>
                <Tabs>
                    <TabList>
                        {Array.from(Array(10).keys()).map(i => <TabButton key={i}>Tab {i + 1}</TabButton>)}
                    </TabList>
                    <TabPanels>
                        {Array.from(Array(10).keys()).map(i => <TabPanel key={i}>Tab panel {i + 1}.</TabPanel>)}
                    </TabPanels>
                </Tabs>
            </PageContent>;
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {},
  render: function Render(args) {
    return <Tabs {...args}>
                <TabList>
                    <TabButton endElement={<IndicatorDot />}>Tab 1</TabButton>
                    <TabButton>Tab 2</TabButton>
                    <TabButton endElement={<Fragment>
                                <NotificationBadge value={100} max={99} tone="action" aria-hidden />
                                <VisuallyHidden>, 100 notifications</VisuallyHidden>
                            </Fragment>}>
                        Tab 3
                    </TabButton>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Text as="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque fermentum lacus ac magna elementum, ac laoreet leo
                            facilisis. Nulla at bibendum diam. Pellentesque vel accumsan eros,
                            nec egestas leo. Etiam lacinia, ligula non cursus sodales, diam
                            odio posuere eros, pharetra convallis lacus magna in urna. Etiam
                            condimentum iaculis mattis. Vestibulum eget felis in orci eleifend
                            vulputate vestibulum id mi. Curabitur at lacus vitae urna
                            tincidunt vehicula at quis nibh. Quisque id aliquet sapien.
                            Quisque ultricies nibh nisl, eu pellentesque dui semper a. Aliquam
                            vestibulum justo vitae feugiat sodales. Aenean efficitur sodales
                            diam, et volutpat enim faucibus a. Nulla mollis est eu velit
                            malesuada ornare ultrices in neque.
                        </Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="p">
                            Praesent metus leo, ultrices porta sodales quis, molestie vitae
                            nisl. Fusce at eros ultricies, pharetra eros id, faucibus dolor.
                            Nam et nibh lacus. Etiam pellentesque eros finibus ultricies
                            malesuada. Sed eget libero suscipit, dictum lacus sit amet,
                            venenatis dolor. Sed porttitor lorem turpis, ac suscipit lacus
                            vehicula id. Aliquam id venenatis augue. Orci varius natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Integer viverra metus sed dolor euismod consectetur. Cras mauris
                            nisi, elementum vel eros sed, faucibus rhoncus mauris. Phasellus
                            eu ante vehicula, luctus libero in, malesuada nulla.
                        </Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="p">
                            Duis eu bibendum urna. Integer nisl massa, aliquam scelerisque
                            hendrerit at, ullamcorper quis turpis. Proin vulputate tincidunt
                            neque ut sollicitudin. In ullamcorper neque justo, vitae euismod
                            ante aliquam eget. Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec eu purus ac ante
                            tempus vulputate ac vel mauris. Duis congue augue augue, quis
                            elementum nisl ultricies fermentum. Sed pellentesque leo ut est
                            semper vulputate.
                        </Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>;
  }
}`,...(Z=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: function Render() {
    return <SiteLayout>
                <PageContent>
                    <Columns>
                        <Column columnSpan={{
            xs: 12,
            lg: 8
          }}>
                            <Stack gap={3}>
                                <Breadcrumbs links={[{
                href: '#',
                label: 'Home'
              }, {
                href: '#',
                label: 'Category 1'
              }, {
                href: '#',
                label: 'Subcategory 1'
              }, {
                label: 'Population trends'
              }]} />
                                <Stack gap={1.5}>
                                    <H1>Population trends</H1>
                                    <Text as="p" fontSize="md" color="muted">
                                        Introductory paragraph providing context for this single
                                        page of the multipage form. All questions on page must be
                                        related - md/default (P).
                                    </Text>
                                </Stack>

                                <SubNav activePath="/population" links={[{
                href: '/population',
                label: 'Population'
              }, {
                href: '/immigration',
                label: 'Immigration'
              }, {
                href: '/demographics',
                label: 'Demographics'
              }, {
                href: '/births',
                label: 'Births'
              }, {
                href: '/deaths',
                label: 'Deaths'
              }]} />

                                <Stack gap={1.5}>
                                    <H2>Population</H2>
                                    <Text as="p">Short intro of content.</Text>
                                </Stack>

                                <Tabs>
                                    <TabList>
                                        {examplePopulations.map(({
                    year
                  }) => <TabButton key={year}>{year}</TabButton>)}
                                    </TabList>
                                    <TabPanels>
                                        {examplePopulations.map(({
                    year,
                    stats,
                    data
                  }) => <TabPanel key={year}>
                                                <Stack gap={2}>
                                                    <Stack gap={1.5}>
                                                        <H3>{year}</H3>
                                                        <UnorderedList>
                                                            {stats.map((stat, idx) => <ListItem key={idx}>{stat}</ListItem>)}
                                                        </UnorderedList>
                                                    </Stack>
                                                    <Stack gap={1.5}>
                                                        <H3>Population quick stats</H3>
                                                        <SummaryList>
                                                            <SummaryListItem>
                                                                <SummaryListItemTerm>
                                                                    People
                                                                </SummaryListItemTerm>
                                                                <SummaryListItemDescription>
                                                                    {numberFormatter.format(data.people)}
                                                                </SummaryListItemDescription>
                                                            </SummaryListItem>
                                                            <SummaryListItem>
                                                                <SummaryListItemTerm>Male</SummaryListItemTerm>
                                                                <SummaryListItemDescription>
                                                                    {percentageFormatter.format(data.male)}
                                                                </SummaryListItemDescription>
                                                            </SummaryListItem>
                                                            <SummaryListItem>
                                                                <SummaryListItemTerm>
                                                                    Female
                                                                </SummaryListItemTerm>
                                                                <SummaryListItemDescription>
                                                                    {percentageFormatter.format(data.female)}
                                                                </SummaryListItemDescription>
                                                            </SummaryListItem>
                                                            <SummaryListItem>
                                                                <SummaryListItemTerm>
                                                                    Median age
                                                                </SummaryListItemTerm>
                                                                <SummaryListItemDescription>
                                                                    {data.medianAge}
                                                                </SummaryListItemDescription>
                                                            </SummaryListItem>
                                                        </SummaryList>
                                                    </Stack>
                                                </Stack>
                                            </TabPanel>)}
                                    </TabPanels>
                                </Tabs>
                            </Stack>
                        </Column>
                    </Columns>
                </PageContent>
            </SiteLayout>;
  }
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const xa=["Basic","BodyAlt","NotContained","NotContainedBodyAlt","Controlled","MultiplePerPage","ManyItems","WithEndElements","ExampleComposition"];export{T as Basic,g as BodyAlt,P as Controlled,I as ExampleComposition,S as ManyItems,y as MultiplePerPage,f as NotContained,v as NotContainedBodyAlt,q as WithEndElements,xa as __namedExportsOrder,La as default};
