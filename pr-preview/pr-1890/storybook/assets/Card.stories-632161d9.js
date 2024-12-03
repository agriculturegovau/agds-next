import{j as e,a as r}from"./responsive-22d1c539.js";import{r as $}from"./index-f0f3a68d.js";import{V as f}from"./ExternalLinkCallout-896682bb.js";import{S as n,F as L}from"./Stack-e6a92433.js";import{B as o}from"./Box-cc8e6f8e.js";import{a as l,b as Z,c as q}from"./Heading-85d6cea8.js";import{o as G}from"./WebsiteIcon-03a55100.js";import{a as p,C as b}from"./Column-abc95574.js";import{D as J}from"./DirectionLink-5f3688da.js";import{T as K}from"./Tags-67693555.js";import{T as i}from"./Text-03708b2d.js";import{T as y}from"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import{S as Q}from"./StatusBadge-2dec0b7a.js";import"./Content-a73dd057.js";import{P as Y}from"./PageContent-28150522.js";import"./SectionContent-238a39dc.js";import"./ContentBleed-4d1b344d.js";import{C as a,a as t,b as S,c as w,d as s}from"./CardLink-1cf91f54.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./Button-1a082b6d.js";import"./LoadingBlanket-5db8d8aa.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-5c583b5f.js";import"./BaseContent-b4d619b8.js";import"./index-e937ffd1.js";const He={title:"layout/Card",component:a},u={args:{},render:function(d){return e(o,{maxWidth:300,children:e(a,{...d,children:e(t,{children:r(n,{gap:1,children:[e(l,{as:"h2",type:"h3",children:"Card heading"}),e(i,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat"})]})})})})}},g={args:{clickable:!0,shadow:!0},render:function(d){return e(o,{maxWidth:300,children:e(a,{...d,children:e(t,{children:r(n,{gap:1,children:[e(l,{as:"h2",type:"h3",children:"Card heading"}),e(i,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat"}),r(s,{href:"#",children:["Linking out",e(G,{})]})]})})})})}},C={args:{background:"body"},render:function(d){return r(b,{children:[e(p,{columnSpan:6,children:r(a,{...d,children:[e(S,{children:e(l,{type:"h4",children:"Feature card title"})}),e(t,{children:e(i,{as:"p",children:"Additional content relating to the card"})})]})}),e(p,{columnSpan:6,children:r(a,{...d,children:[e(S,{background:"bodyAlt",children:e(l,{type:"h4",children:"Feature card title"})}),e(t,{children:e(i,{as:"p",children:"Additional content relating to the card"})})]})})]})}},k={args:{background:"body"},render:function(d){return r(b,{children:[e(p,{columnSpan:6,children:r(a,{...d,children:[e(t,{children:r(n,{gap:1,children:[e(l,{type:"h3",children:"Card title"}),e(i,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus."})]})}),e(w,{children:e(y,{href:"#",children:"Action"})})]})}),e(p,{columnSpan:6,children:r(a,{...d,children:[e(t,{children:r(n,{gap:1,children:[e(l,{type:"h3",children:"Card title"}),e(i,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus."})]})}),e(w,{background:"bodyAlt",children:e(y,{href:"#",children:"Action"})})]})})]})}},x={name:"List of Cards",render:function(){const d={Closed:"successMedium",Open:"warningMedium",Pending:"infoMedium"};return e(Y,{children:r(n,{gap:1.5,children:[e(Z,{children:"Active CARs"}),e(i,{as:"p",children:"You may now manage your CARs online."}),e(b,{as:"ul",gap:1,cols:{xs:1,sm:2,lg:3},children:[{id:"RE4321-2201-03",businessName:"Orange Meat Works",type:"Record keeping (Minor)",status:"Pending"},{id:"RE4321-2201-02",businessName:"Orange Meat Works",type:"Hygiene (Major)",status:"Open"},{id:"RE4321-2201-01",businessName:"Orange Meat Works",type:"Record keeping (Minor)",status:"Closed"}].map(c=>e(a,{as:"li",shadow:!0,clickable:!0,children:e(t,{children:r(n,{gap:.5,width:"100%",flexWrap:"wrap",children:[e(q,{children:e(s,{href:`#${c.id}`,children:c.businessName})}),r(i,{as:"p",children:[e(f,{children:"Type: "}),c.type]}),r(L,{gap:.5,flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:[r(i,{color:"muted",fontSize:"xs",children:[e(f,{children:"CAR ID: "}),c.id]}),e(Q,{tone:d[c.status],label:r($.Fragment,{children:[e(f,{children:"Status: "}),c.status]})})]})]})})},c.id))})]})})}},h=()=>e(Y,{children:r(b,{cols:{xs:1,sm:2},children:[e(p,{children:r(n,{gap:2,width:"100%",children:[e(a,{shadow:!0,children:e(t,{children:r(n,{gap:1,children:[e(l,{as:"h2",type:"h3",children:"Card title"}),e(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."}),e(J,{direction:"right",children:"Learn more"})]})})}),e(a,{shadow:!0,clickable:!0,children:e(t,{children:r(n,{gap:1,children:[e(o,{as:"h3",children:e(s,{href:"#",children:"Card link"})}),e(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})}),e(a,{shadow:!0,clickable:!0,children:e(t,{children:r(n,{gap:1,children:[e(I,{}),e(o,{as:"h3",children:e(s,{href:"#",children:"Card link"})}),e(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})})]})}),e(p,{children:r(n,{gap:2,width:"100%",children:[e(a,{shadow:!0,clickable:!0,children:e(t,{children:r(n,{gap:.5,children:[e(I,{}),e(o,{fontWeight:"bold",children:e(s,{children:"Add a commodity, product or operation"})})]})})}),e(a,{shadow:!0,clickable:!0,children:e(t,{children:r(n,{gap:1,children:[r(L,{gap:.5,children:[e(K,{items:[{label:"1034"}]}),e(i,{children:"Meat"})]}),e(o,{fontWeight:"bold",children:e(s,{children:"Orange Farmers Market"})})]})})}),r(a,{shadow:!0,clickable:!0,children:[e("img",{alt:"Placeholder image",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",width:"100%"}),e(t,{children:r(n,{gap:1,children:[e(o,{as:"h3",children:e(s,{href:"#",children:"News item"})}),e(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})]}),e(a,{shadow:!0,clickable:!0,children:r(L,{children:[e("img",{alt:"Placeholder image",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",css:{width:"50%",objectFit:"cover"}}),e(t,{children:r(n,{gap:1,children:[e(o,{as:"h3",children:e(s,{href:"#",children:"News item"})}),e(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})]})})]})})]})}),I=()=>r("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#00558B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M31 36H17"}),e("path",{d:"M47 59C53.6274 59 59 53.6274 59 47C59 40.3726 53.6274 35 47 35C40.3726 35 35 40.3726 35 47C35 53.6274 40.3726 59 47 59Z"}),e("path",{d:"M51 43C49.8647 44.8542 45.5972 50.9964 45.5972 50.9964L43 49"}),e("path",{d:"M27 46H17"}),e("path",{d:"M41 26H17"}),e("path",{d:"M32.9989 59H10.9989C9.89459 59 8.99925 58.1049 8.99897 57.0006C8.99475 40.3336 8.99555 23.6666 8.99894 6.99957C8.99916 5.89517 9.89462 5 10.999 5V5H42.0763C42.6601 5 43.2147 5.25505 43.5946 5.69823L54.5173 18.4382C54.8281 18.8007 54.9989 19.2625 54.9989 19.74V31"}),e("path",{d:"M43.0003 6L43 17C43 18.1045 43.8955 19 45 19H54"})]});h.__docgenInfo={description:"",methods:[],displayName:"Compositions"};var H,T,M;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: function Render(props) {
    return <Box maxWidth={300}>
                <Card {...props}>
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
            </Box>;
  }
}`,...(M=(T=u.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var F,R,B;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    clickable: true,
    shadow: true
  },
  render: function Render(props) {
    return <Box maxWidth={300}>
                <Card {...props}>
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
                                <ChevronRightIcon />
                            </CardLink>
                        </Stack>
                    </CardInner>
                </Card>
            </Box>;
  }
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var A,v,W;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    background: 'body'
  },
  render: function Render(props) {
    return <Columns>
                <Column columnSpan={6}>
                    <Card {...props}>
                        <CardHeader>
                            <Heading type="h4">Feature card title</Heading>
                        </CardHeader>
                        <CardInner>
                            <Text as="p">Additional content relating to the card</Text>
                        </CardInner>
                    </Card>
                </Column>
                <Column columnSpan={6}>
                    <Card {...props}>
                        <CardHeader background="bodyAlt">
                            <Heading type="h4">Feature card title</Heading>
                        </CardHeader>
                        <CardInner>
                            <Text as="p">Additional content relating to the card</Text>
                        </CardInner>
                    </Card>
                </Column>
            </Columns>;
  }
}`,...(W=(v=C.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var P,j,N;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    background: 'body'
  },
  render: function Render(props) {
    return <Columns>
                <Column columnSpan={6}>
                    <Card {...props}>
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
                    <Card {...props}>
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
            </Columns>;
  }
}`,...(N=(j=k.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,D,V;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'List of Cards',
  render: function Render() {
    const toneMapper = {
      Closed: 'successMedium',
      Open: 'warningMedium',
      Pending: 'infoMedium'
    } as const;
    const listData = [{
      id: 'RE4321-2201-03',
      businessName: 'Orange Meat Works',
      type: 'Record keeping (Minor)',
      status: 'Pending'
    }, {
      id: 'RE4321-2201-02',
      businessName: 'Orange Meat Works',
      type: 'Hygiene (Major)',
      status: 'Open'
    }, {
      id: 'RE4321-2201-01',
      businessName: 'Orange Meat Works',
      type: 'Record keeping (Minor)',
      status: 'Closed'
    }] as const;
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
  }
}`,...(V=(D=x.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var E,_,z;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(z=(_=h.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const Te=["Basic","Link","FeatureHeader","FeatureFooter","CardList","Compositions"];export{u as Basic,x as CardList,h as Compositions,k as FeatureFooter,C as FeatureHeader,g as Link,Te as __namedExportsOrder,He as default};
