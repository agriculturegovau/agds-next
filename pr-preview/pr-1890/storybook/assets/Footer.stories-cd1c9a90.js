import{a as n,j as e,t as m}from"./responsive-22d1c539.js";import{r as F}from"./index-f0f3a68d.js";import{L as A}from"./Logo-335229b1.js";import{S as i}from"./Stack-e6a92433.js";import{B as T}from"./Box-cc8e6f8e.js";import{C as w,a as l}from"./Column-abc95574.js";import{a as s}from"./Heading-85d6cea8.js";import{T as o}from"./Text-03708b2d.js";import{L as a}from"./LinkList-bf307ed6.js";import{F as u,a as p}from"./FooterDivider-e8ec1942.js";import"./jsx-runtime-70d19cdc.js";import"./_commonjsHelpers-23102255.js";import"./TextLink-a2918464.js";import"./TextLinkExternal-af289221.js";import"./ExternalLinkCallout-896682bb.js";import"./WebsiteIcon-03a55100.js";const K={title:"layout/Footer",component:u,render:function({borderColor:t,...r}){const C=F.useMemo(()=>new Date().getFullYear(),[]);return n(u,{borderColor:t,...r,children:[e("nav",{"aria-label":"footer",children:e(a,{horizontal:!0,links:[{href:"#",label:"Home"},{href:"#",label:"Terms and conditions"},{href:"#",label:"Privacy policy"},{href:"#",label:"A really long link title"}]})}),e(p,{color:t}),e(o,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),n(o,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:["© ",C," Department of Agriculture, Fisheries and Forestry"]})]})}},c={name:"Body background",args:{background:"body"}},d={name:"BodyAlt background",args:{background:"bodyAlt"}},h={args:{background:"bodyAlt"},render:function(){const t=F.useMemo(()=>new Date().getFullYear(),[]),r={xs:12,sm:6,lg:3};return n(u,{children:[e("nav",{"aria-label":"footer",children:n(w,{children:[e(l,{columnSpan:r,children:n(i,{gap:.5,children:[e(s,{as:"h2",type:"h3",children:"Section"}),e(a,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),e(l,{columnSpan:r,children:n(i,{gap:.5,children:[e(s,{as:"h2",type:"h3",children:"Section"}),e(a,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),e(l,{columnSpan:r,children:n(i,{gap:.5,children:[e(s,{as:"h2",type:"h3",children:"Section"}),e(a,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),e(l,{columnSpan:r,children:n(i,{gap:.5,children:[e(s,{as:"h2",type:"h3",children:"Section"}),e(a,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})})]})}),e(p,{}),e(o,{as:"p",children:"Footer text"}),e(T,{maxWidth:"240px",children:e(A,{})}),e(p,{}),e(o,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),n(o,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:["© ",t," Department of Agriculture, Fisheries and Forestry"]})]})}};var g,k,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Body background',
  args: {
    background: 'body'
  }
}`,...(f=(k=c.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var b,x,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'BodyAlt background',
  args: {
    background: 'bodyAlt'
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,L,W;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    background: 'bodyAlt'
  },
  render: function Render() {
    const year = useMemo(() => new Date().getFullYear(), []);
    const columnSpanning = {
      xs: 12,
      sm: 6,
      lg: 3
    } as const;
    return <Footer>
                <nav aria-label="footer">
                    <Columns>
                        <Column columnSpan={columnSpanning}>
                            <Stack gap={0.5}>
                                <Heading as="h2" type="h3">
                                    Section
                                </Heading>
                                <LinkList links={[{
                href: '#',
                label: 'Link 1'
              }, {
                href: '#',
                label: 'Link 2'
              }, {
                href: '#',
                label: 'Link 3'
              }]} />
                            </Stack>
                        </Column>
                        <Column columnSpan={columnSpanning}>
                            <Stack gap={0.5}>
                                <Heading as="h2" type="h3">
                                    Section
                                </Heading>
                                <LinkList links={[{
                href: '#',
                label: 'Link 1'
              }, {
                href: '#',
                label: 'Link 2'
              }, {
                href: '#',
                label: 'Link 3'
              }]} />
                            </Stack>
                        </Column>
                        <Column columnSpan={columnSpanning}>
                            <Stack gap={0.5}>
                                <Heading as="h2" type="h3">
                                    Section
                                </Heading>
                                <LinkList links={[{
                href: '#',
                label: 'Link 1'
              }, {
                href: '#',
                label: 'Link 2'
              }, {
                href: '#',
                label: 'Link 3'
              }]} />
                            </Stack>
                        </Column>
                        <Column columnSpan={columnSpanning}>
                            <Stack gap={0.5}>
                                <Heading as="h2" type="h3">
                                    Section
                                </Heading>
                                <LinkList links={[{
                href: '#',
                label: 'Link 1'
              }, {
                href: '#',
                label: 'Link 2'
              }, {
                href: '#',
                label: 'Link 3'
              }]} />
                            </Stack>
                        </Column>
                    </Columns>
                </nav>
                <FooterDivider />
                <Text as="p">Footer text</Text>
                <Box maxWidth="240px">
                    <Logo />
                </Box>
                <FooterDivider />
                <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
                    We acknowledge the traditional owners of country throughout Australia
                    and recognise their continuing connection to land, waters and culture.
                    We pay our respects to their Elders past, present and emerging.
                </Text>
                <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
                    &copy; {year} Department of Agriculture, Fisheries and Forestry
                </Text>
            </Footer>;
  }
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const N=["BodyBackground","BodyAltBackground","ComplexContent"];export{d as BodyAltBackground,c as BodyBackground,h as ComplexContent,N as __namedExportsOrder,K as default};
