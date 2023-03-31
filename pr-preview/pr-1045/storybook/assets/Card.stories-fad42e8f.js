import{j as e,a as r,B as s}from"./Box-e652c7f2.js";import{r as Y}from"./index-42611d8b.js";import{V as b}from"./VisuallyHidden-315ab967.js";import{S as a,F as f}from"./Stack-4546232d.js";import{a as l,b as $,c as Z}from"./Heading-1b1cff4a.js";import{a as q}from"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";import{C as p,a as x}from"./Column-81a5e170.js";import{D as G}from"./DirectionLink-18b58fa7.js";import{T as J}from"./Tags-4c9b9e24.js";import{T as t}from"./Text-51e6146a.js";import{T as S}from"./TextLink-99cf0354.js";import"./TextLinkExternal-ed8d4b34.js";import{S as K}from"./StatusBadge-31570fd0.js";import"./IndicatorDot-fae4eb3f.js";import"./NotificationBadge-d8282998.js";import"./Content-e54e3b95.js";import{P as _}from"./PageContent-3fd36d19.js";import"./SectionContent-a2643fbb.js";import"./ContentBleed-5b1d8d06.js";import{C as n,a as i,b as d,c as L,d as y}from"./CardFooter-11b802ec.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-ffb9a9d6.js";import"./LoadingBlanket-2ea81d60.js";import"./react-spring-web.esm-92c11c75.js";import"./index-7a46b491.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-75f04ad3.js";import"./BaseContent-1f85429f.js";const Te={title:"layout/Card",component:n,subcomponents:{CardInner:i,CardLink:d,CardHeader:L,CardFooter:y}},h=o=>e(s,{maxWidth:300,children:e(n,{...o,children:e(i,{children:r(a,{gap:1,children:[e(l,{as:"h2",type:"h3",children:"Card heading"}),e(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat"})]})})})});h.args={};const m=o=>e(s,{maxWidth:300,children:e(n,{...o,children:e(i,{children:r(a,{gap:1,children:[e(l,{as:"h2",type:"h3",children:"Card heading"}),e(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat"}),r(d,{href:"#",children:["Linking out",e(q,{weight:"bold",size:"sm"})]})]})})})});m.args={clickable:!0,shadow:!0};const u=o=>r(x,{children:[e(p,{columnSpan:6,children:r(n,{...o,children:[e(L,{children:e(l,{type:"h4",children:"Feature card title"})}),e(i,{children:e(t,{as:"p",children:"Additional conent relating to the card"})})]})}),e(p,{columnSpan:6,children:r(n,{...o,children:[e(L,{background:"bodyAlt",children:e(l,{type:"h4",children:"Feature card title"})}),e(i,{children:e(t,{as:"p",children:"Additional conent relating to the card"})})]})})]});u.args={background:"body"};const g=o=>r(x,{children:[e(p,{columnSpan:6,children:r(n,{...o,children:[e(i,{children:r(a,{gap:1,children:[e(l,{type:"h3",children:"Card title"}),e(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus."})]})}),e(y,{children:e(S,{href:"#",children:"Action"})})]})}),e(p,{columnSpan:6,children:r(n,{...o,children:[e(i,{children:r(a,{gap:1,children:[e(l,{type:"h3",children:"Card title"}),e(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus."})]})}),e(y,{background:"bodyAlt",children:e(S,{href:"#",children:"Action"})})]})})]});g.args={background:"body"};const C=()=>{const o={Closed:"success",Open:"warning",Pending:"info"};return e(_,{children:r(a,{gap:1.5,children:[e($,{children:"Active CARs"}),e(t,{as:"p",children:"You may now manage your CARs online."}),e(x,{as:"ul",gap:1,cols:{xs:1,sm:2,lg:3},children:[{id:"RE4321–2201–03",businessName:"Orange Meat Works",type:"Record keeping (Minor)",status:"Pending"},{id:"RE4321–2201–02",businessName:"Orange Meat Works",type:"Hygiene (Major)",status:"Open"},{id:"RE4321–2201–01",businessName:"Orange Meat Works",type:"Record keeping (Minor)",status:"Closed"}].map(c=>e(n,{as:"li",shadow:!0,clickable:!0,children:e(i,{children:r(a,{gap:.5,width:"100%",flexWrap:"wrap",children:[e(Z,{children:e(d,{href:`#${c.id}`,children:c.businessName})}),r(t,{as:"p",children:[e(b,{children:"Type: "}),c.type]}),r(f,{gap:.5,flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:[r(t,{color:"muted",fontSize:"xs",children:[e(b,{children:"CAR ID: "}),c.id]}),e(K,{tone:o[c.status],label:r(Y.Fragment,{children:[e(b,{children:"Status: "}),c.status]})})]})]})})},c.id))})]})})};C.storyName="List of Cards";const k=()=>e(_,{children:r(x,{cols:{xs:1,sm:2},children:[e(p,{children:r(a,{gap:2,width:"100%",children:[e(n,{shadow:!0,children:e(i,{children:r(a,{gap:1,children:[e(l,{as:"h2",type:"h3",children:"Card title"}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."}),e(G,{direction:"right",children:"Learn more"})]})})}),e(n,{shadow:!0,clickable:!0,children:e(i,{children:r(a,{gap:1,children:[e(s,{as:"h3",children:e(d,{href:"#",children:"Card link"})}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})}),e(n,{shadow:!0,clickable:!0,children:e(i,{children:r(a,{gap:1,children:[e(w,{}),e(s,{as:"h3",children:e(d,{href:"#",children:"Card link"})}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})})]})}),e(p,{children:r(a,{gap:2,width:"100%",children:[e(n,{shadow:!0,clickable:!0,children:e(i,{children:r(a,{gap:.5,children:[e(w,{}),e(s,{fontWeight:"bold",children:e(d,{children:"Add a commodity, product or operation"})})]})})}),e(n,{shadow:!0,clickable:!0,children:e(i,{children:r(a,{gap:1,children:[r(f,{gap:.5,children:[e(J,{items:[{label:"1034"}]}),e(t,{children:"Meat"})]}),e(s,{fontWeight:"bold",children:e(d,{children:"Orange Farmers Market"})})]})})}),r(n,{shadow:!0,clickable:!0,children:[e("img",{alt:"Placeholder image",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",width:"100%"}),e(i,{children:r(a,{gap:1,children:[e(s,{as:"h3",children:e(d,{href:"#",children:"News item"})}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})]}),e(n,{shadow:!0,clickable:!0,children:r(f,{children:[e("img",{alt:"Placeholder image",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",css:{width:"50%",objectFit:"cover"}}),e(i,{children:r(a,{gap:1,children:[e(s,{as:"h3",children:e(d,{href:"#",children:"News item"})}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})]})})]})})]})}),w=()=>r("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#00558B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M31 36H17"}),e("path",{d:"M47 59C53.6274 59 59 53.6274 59 47C59 40.3726 53.6274 35 47 35C40.3726 35 35 40.3726 35 47C35 53.6274 40.3726 59 47 59Z"}),e("path",{d:"M51 43C49.8647 44.8542 45.5972 50.9964 45.5972 50.9964L43 49"}),e("path",{d:"M27 46H17"}),e("path",{d:"M41 26H17"}),e("path",{d:"M32.9989 59H10.9989C9.89459 59 8.99925 58.1049 8.99897 57.0006C8.99475 40.3336 8.99555 23.6666 8.99894 6.99957C8.99916 5.89517 9.89462 5 10.999 5V5H42.0763C42.6601 5 43.2147 5.25505 43.5946 5.69823L54.5173 18.4382C54.8281 18.8007 54.9989 19.2625 54.9989 19.74V31"}),e("path",{d:"M43.0003 6L43 17C43 18.1045 43.8955 19 45 19H54"})]});var H,I,T;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Box maxWidth={300}>
        <Card {...args}>
            <CardInner>
                <Stack gap={1}>
                    <Heading as="h2" type="h3">
                        Card heading
                    </Heading>
                    <Text as="p">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                        voluptat
                    </Text>
                </Stack>
            </CardInner>
        </Card>
    </Box>`,...(T=(I=h.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var F,M,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => <Box maxWidth={300}>
        <Card {...args}>
            <CardInner>
                <Stack gap={1}>
                    <Heading as="h2" type="h3">
                        Card heading
                    </Heading>
                    <Text as="p">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                        voluptat
                    </Text>
                    <CardLink href="#">
                        Linking out
                        <ChevronRightIcon weight="bold" size="sm" />
                    </CardLink>
                </Stack>
            </CardInner>
        </Card>
    </Box>`,...(B=(M=m.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var A,v,W;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => <Columns>
        <Column columnSpan={6}>
            <Card {...args}>
                <CardHeader>
                    <Heading type="h4">Feature card title</Heading>
                </CardHeader>
                <CardInner>
                    <Text as="p">Additional conent relating to the card</Text>
                </CardInner>
            </Card>
        </Column>
        <Column columnSpan={6}>
            <Card {...args}>
                <CardHeader background="bodyAlt">
                    <Heading type="h4">Feature card title</Heading>
                </CardHeader>
                <CardInner>
                    <Text as="p">Additional conent relating to the card</Text>
                </CardInner>
            </Card>
        </Column>
    </Columns>`,...(W=(v=u.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var R,P,j;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => <Columns>
        <Column columnSpan={6}>
            <Card {...args}>
                <CardInner>
                    <Stack gap={1}>
                        <Heading type="h3">Card title</Heading>
                        <Text as="p">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                            voluptatibus.
                        </Text>
                    </Stack>
                </CardInner>
                <CardFooter>
                    <TextLink href="#">Action</TextLink>
                </CardFooter>
            </Card>
        </Column>
        <Column columnSpan={6}>
            <Card {...args}>
                <CardInner>
                    <Stack gap={1}>
                        <Heading type="h3">Card title</Heading>
                        <Text as="p">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                            voluptatibus.
                        </Text>
                    </Stack>
                </CardInner>
                <CardFooter background="bodyAlt">
                    <TextLink href="#">Action</TextLink>
                </CardFooter>
            </Card>
        </Column>
    </Columns>`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,O,D;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const toneMapper = ({
    Closed: 'success',
    Open: 'warning',
    Pending: 'info'
  } as const);
  const listData = ([{
    id: 'RE4321–2201–03',
    businessName: 'Orange Meat Works',
    type: 'Record keeping (Minor)',
    status: 'Pending'
  }, {
    id: 'RE4321–2201–02',
    businessName: 'Orange Meat Works',
    type: 'Hygiene (Major)',
    status: 'Open'
  }, {
    id: 'RE4321–2201–01',
    businessName: 'Orange Meat Works',
    type: 'Record keeping (Minor)',
    status: 'Closed'
  }] as const);
  return <PageContent>
            <Stack gap={1.5}>
                <H2>Active CARs</H2>
                <Text as="p">You may now manage your CARs online.</Text>
                <Columns as="ul" gap={1} cols={{
        xs: 1,
        sm: 2,
        lg: 3
      }}>
                    {listData.map(item => <Card as="li" shadow clickable key={item.id}>
                            <CardInner>
                                <Stack gap={0.5} width="100%" flexWrap="wrap">
                                    <H3>
                                        <CardLink href={\`#\${item.id}\`}>
                                            {item.businessName}
                                        </CardLink>
                                    </H3>

                                    <Text as="p">
                                        <VisuallyHidden>Type: </VisuallyHidden>
                                        {item.type}
                                    </Text>

                                    <Flex gap={0.5} flexWrap="wrap" justifyContent="space-between" alignItems="center">
                                        <Text color="muted" fontSize="xs">
                                            <VisuallyHidden>{'CAR ID: '}</VisuallyHidden>
                                            {item.id}
                                        </Text>
                                        <StatusBadge tone={toneMapper[item.status]} label={<Fragment>
                                                    <VisuallyHidden>{'Status: '}</VisuallyHidden>
                                                    {item.status}
                                                </Fragment>} />
                                    </Flex>
                                </Stack>
                            </CardInner>
                        </Card>)}
                </Columns>
            </Stack>
        </PageContent>;
}`,...(D=(O=C.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var V,E,z;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <PageContent>
            <Columns cols={{
      xs: 1,
      sm: 2
    }}>
                <Column>
                    <Stack gap={2} width="100%">
                        <Card shadow>
                            <CardInner>
                                <Stack gap={1}>
                                    <Heading as="h2" type="h3">
                                        Card title
                                    </Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Cras non finibus leo.
                                    </Text>
                                    <DirectionLink direction="right">Learn more</DirectionLink>
                                </Stack>
                            </CardInner>
                        </Card>

                        <Card shadow clickable>
                            <CardInner>
                                <Stack gap={1}>
                                    <Box as="h3">
                                        <CardLink href="#">Card link</CardLink>
                                    </Box>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Cras non finibus leo.
                                    </Text>
                                </Stack>
                            </CardInner>
                        </Card>

                        <Card shadow clickable>
                            <CardInner>
                                <Stack gap={1}>
                                    <Pictogram />

                                    <Box as="h3">
                                        <CardLink href="#">Card link</CardLink>
                                    </Box>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Cras non finibus leo.
                                    </Text>
                                </Stack>
                            </CardInner>
                        </Card>
                    </Stack>
                </Column>

                <Column>
                    <Stack gap={2} width="100%">
                        <Card shadow clickable>
                            <CardInner>
                                <Stack gap={0.5}>
                                    <Pictogram />

                                    <Box fontWeight="bold">
                                        <CardLink>Add a commodity, product or operation</CardLink>
                                    </Box>
                                </Stack>
                            </CardInner>
                        </Card>

                        <Card shadow clickable>
                            <CardInner>
                                <Stack gap={1}>
                                    <Flex gap={0.5}>
                                        <Tags items={[{
                    label: '1034'
                  }]} />
                                        <Text>Meat</Text>
                                    </Flex>

                                    <Box fontWeight="bold">
                                        <CardLink>Orange Farmers Market</CardLink>
                                    </Box>
                                </Stack>
                            </CardInner>
                        </Card>

                        <Card shadow clickable>
                            <img alt="Placeholder image" src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg" width="100%" />
                            <CardInner>
                                <Stack gap={1}>
                                    <Box as="h3">
                                        <CardLink href="#">News item</CardLink>
                                    </Box>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Cras non finibus leo.
                                    </Text>
                                </Stack>
                            </CardInner>
                        </Card>

                        <Card shadow clickable>
                            <Flex>
                                <img alt="Placeholder image" src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg" css={{
                width: '50%',
                objectFit: 'cover'
              }} />
                                <CardInner>
                                    <Stack gap={1}>
                                        <Box as="h3">
                                            <CardLink href="#">News item</CardLink>
                                        </Box>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cras non finibus leo.
                                        </Text>
                                    </Stack>
                                </CardInner>
                            </Flex>
                        </Card>
                    </Stack>
                </Column>
            </Columns>
        </PageContent>;
}`,...(z=(E=k.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const Fe=["Basic","Link","FeatureHeader","FeatureFooter","CardListStory","Compositions"];export{h as Basic,C as CardListStory,k as Compositions,g as FeatureFooter,u as FeatureHeader,m as Link,Fe as __namedExportsOrder,Te as default};
//# sourceMappingURL=Card.stories-fad42e8f.js.map
