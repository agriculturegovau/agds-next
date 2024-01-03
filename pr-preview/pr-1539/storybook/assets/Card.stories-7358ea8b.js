import{j as n,a as e}from"./responsive-1d67a6a2.js";import{r as $}from"./index-42611d8b.js";import{V as f}from"./VisuallyHidden-02be915e.js";import{S as r,F as L}from"./Stack-43f3e7c4.js";import{B as o}from"./Box-0bbf8d6d.js";import{f as l,a as Z,b as q}from"./Heading-1a35fe7d.js";import{l as G}from"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";import{C as p,a as b}from"./Column-d36c45c1.js";import{a as J}from"./DirectionLink-faaedf31.js";import{a as K}from"./Tags-457ff773.js";import{T as t}from"./Text-d916011d.js";import{T as y}from"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import{S as Q}from"./StatusBadge-1a7c0e25.js";import"./Content-9704152d.js";import{P as _}from"./PageContent-63ae7dc4.js";import"./SectionContent-4758f989.js";import"./ContentBleed-995a257e.js";import{C as a,c as i,b as S,a as w,d as s}from"./CardLink-6a1d11be.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-e28534e8.js";import"./LoadingBlanket-54fbe64e.js";import"./mergeRefs-868b543a.js";import"./ButtonGroup-20aae35f.js";import"./ExternalLinkCallout-f28f2061.js";import"./BaseContent-14775c7e.js";import"./index-69af556a.js";const Fn={title:"layout/Card",component:a},u={args:{},render:function(d){return n(o,{maxWidth:300,children:n(a,{...d,children:n(i,{children:e(r,{gap:1,children:[n(l,{as:"h2",type:"h3",children:"Card heading"}),n(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat"})]})})})})}},m={args:{clickable:!0,shadow:!0},render:function(d){return n(o,{maxWidth:300,children:n(a,{...d,children:n(i,{children:e(r,{gap:1,children:[n(l,{as:"h2",type:"h3",children:"Card heading"}),n(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptat"}),e(s,{href:"#",children:["Linking out",n(G,{})]})]})})})})}},g={args:{background:"body"},render:function(d){return e(b,{children:[n(p,{columnSpan:6,children:e(a,{...d,children:[n(S,{children:n(l,{type:"h4",children:"Feature card title"})}),n(i,{children:n(t,{as:"p",children:"Additional content relating to the card"})})]})}),n(p,{columnSpan:6,children:e(a,{...d,children:[n(S,{background:"bodyAlt",children:n(l,{type:"h4",children:"Feature card title"})}),n(i,{children:n(t,{as:"p",children:"Additional content relating to the card"})})]})})]})}},C={args:{background:"body"},render:function(d){return e(b,{children:[n(p,{columnSpan:6,children:e(a,{...d,children:[n(i,{children:e(r,{gap:1,children:[n(l,{type:"h3",children:"Card title"}),n(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus."})]})}),n(w,{children:n(y,{href:"#",children:"Action"})})]})}),n(p,{columnSpan:6,children:e(a,{...d,children:[n(i,{children:e(r,{gap:1,children:[n(l,{type:"h3",children:"Card title"}),n(t,{as:"p",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus."})]})}),n(w,{background:"bodyAlt",children:n(y,{href:"#",children:"Action"})})]})})]})}},k={name:"List of Cards",render:function(){const d={Closed:"success",Open:"warning",Pending:"info"};return n(_,{children:e(r,{gap:1.5,children:[n(Z,{children:"Active CARs"}),n(t,{as:"p",children:"You may now manage your CARs online."}),n(b,{as:"ul",gap:1,cols:{xs:1,sm:2,lg:3},children:[{id:"RE4321-2201-03",businessName:"Orange Meat Works",type:"Record keeping (Minor)",status:"Pending"},{id:"RE4321-2201-02",businessName:"Orange Meat Works",type:"Hygiene (Major)",status:"Open"},{id:"RE4321-2201-01",businessName:"Orange Meat Works",type:"Record keeping (Minor)",status:"Closed"}].map(c=>n(a,{as:"li",shadow:!0,clickable:!0,children:n(i,{children:e(r,{gap:.5,width:"100%",flexWrap:"wrap",children:[n(q,{children:n(s,{href:`#${c.id}`,children:c.businessName})}),e(t,{as:"p",children:[n(f,{children:"Type: "}),c.type]}),e(L,{gap:.5,flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:[e(t,{color:"muted",fontSize:"xs",children:[n(f,{children:"CAR ID: "}),c.id]}),n(Q,{tone:d[c.status],label:e($.Fragment,{children:[n(f,{children:"Status: "}),c.status]})})]})]})})},c.id))})]})})}},x=()=>n(_,{children:e(b,{cols:{xs:1,sm:2},children:[n(p,{children:e(r,{gap:2,width:"100%",children:[n(a,{shadow:!0,children:n(i,{children:e(r,{gap:1,children:[n(l,{as:"h2",type:"h3",children:"Card title"}),n(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."}),n(J,{direction:"right",children:"Learn more"})]})})}),n(a,{shadow:!0,clickable:!0,children:n(i,{children:e(r,{gap:1,children:[n(o,{as:"h3",children:n(s,{href:"#",children:"Card link"})}),n(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})}),n(a,{shadow:!0,clickable:!0,children:n(i,{children:e(r,{gap:1,children:[n(H,{}),n(o,{as:"h3",children:n(s,{href:"#",children:"Card link"})}),n(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})})]})}),n(p,{children:e(r,{gap:2,width:"100%",children:[n(a,{shadow:!0,clickable:!0,children:n(i,{children:e(r,{gap:.5,children:[n(H,{}),n(o,{fontWeight:"bold",children:n(s,{children:"Add a commodity, product or operation"})})]})})}),n(a,{shadow:!0,clickable:!0,children:n(i,{children:e(r,{gap:1,children:[e(L,{gap:.5,children:[n(K,{items:[{label:"1034"}]}),n(t,{children:"Meat"})]}),n(o,{fontWeight:"bold",children:n(s,{children:"Orange Farmers Market"})})]})})}),e(a,{shadow:!0,clickable:!0,children:[n("img",{alt:"Placeholder image",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",width:"100%"}),n(i,{children:e(r,{gap:1,children:[n(o,{as:"h3",children:n(s,{href:"#",children:"News item"})}),n(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})]}),n(a,{shadow:!0,clickable:!0,children:e(L,{children:[n("img",{alt:"Placeholder image",src:"https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg",css:{width:"50%",objectFit:"cover"}}),n(i,{children:e(r,{gap:1,children:[n(o,{as:"h3",children:n(s,{href:"#",children:"News item"})}),n(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non finibus leo."})]})})]})})]})})]})}),H=()=>e("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#00558B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n("path",{d:"M31 36H17"}),n("path",{d:"M47 59C53.6274 59 59 53.6274 59 47C59 40.3726 53.6274 35 47 35C40.3726 35 35 40.3726 35 47C35 53.6274 40.3726 59 47 59Z"}),n("path",{d:"M51 43C49.8647 44.8542 45.5972 50.9964 45.5972 50.9964L43 49"}),n("path",{d:"M27 46H17"}),n("path",{d:"M41 26H17"}),n("path",{d:"M32.9989 59H10.9989C9.89459 59 8.99925 58.1049 8.99897 57.0006C8.99475 40.3336 8.99555 23.6666 8.99894 6.99957C8.99916 5.89517 9.89462 5 10.999 5V5H42.0763C42.6601 5 43.2147 5.25505 43.5946 5.69823L54.5173 18.4382C54.8281 18.8007 54.9989 19.2625 54.9989 19.74V31"}),n("path",{d:"M43.0003 6L43 17C43 18.1045 43.8955 19 45 19H54"})]});var I,T,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(T=u.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var R,M,B;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(M=m.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var A,v,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(v=g.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var P,j,O;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(j=C.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var N,V,D;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'List of Cards',
  render: function Render() {
    const toneMapper = ({
      Closed: 'success',
      Open: 'warning',
      Pending: 'info'
    } as const);
    const listData = ([{
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
  }
}`,...(D=(V=k.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var E,z,Y;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(Y=(z=x.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};const Rn=["Basic","Link","FeatureHeader","FeatureFooter","CardList","Compositions"];export{u as Basic,k as CardList,x as Compositions,C as FeatureFooter,g as FeatureHeader,m as Link,Rn as __namedExportsOrder,Fn as default};
