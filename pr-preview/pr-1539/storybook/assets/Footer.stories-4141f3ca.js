import{a as e,j as n,t as m}from"./responsive-1d67a6a2.js";import{r as F}from"./index-42611d8b.js";import{L as B}from"./Logo-5eada8bc.js";import{S as t}from"./Stack-43f3e7c4.js";import{B as A}from"./Box-0bbf8d6d.js";import{a as T,C as i}from"./Column-d36c45c1.js";import{f as l}from"./Heading-1a35fe7d.js";import{T as a}from"./Text-d916011d.js";import{L as o}from"./LinkList-e012bfc7.js";import{F as u,a as p}from"./FooterDivider-a17e0673.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextLink-364fb860.js";import"./TextLinkExternal-bdbc9763.js";import"./ExternalLinkCallout-f28f2061.js";import"./VisuallyHidden-02be915e.js";import"./WebsiteIcon-7b03f042.js";import"./CalendarIcon-791c6fea.js";const K={title:"layout/Footer",component:u,render:function(h){const r=F.useMemo(()=>new Date().getFullYear(),[]);return e(u,{...h,children:[n("nav",{"aria-label":"footer",children:n(o,{horizontal:!0,links:[{href:"#",label:"Home"},{href:"#",label:"Terms and conditions"},{href:"#",label:"Privacy policy"},{href:"#",label:"A really long link title"}]})}),n(p,{}),n(a,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),e(a,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:["© ",r," Department of Agriculture, Fisheries and Forestry"]})]})}},s={name:"Body background",args:{background:"body"}},c={name:"BodyAlt background",args:{background:"bodyAlt"}},d={args:{background:"bodyAlt"},render:function(){const h=F.useMemo(()=>new Date().getFullYear(),[]),r={xs:12,sm:6,lg:3};return e(u,{children:[n("nav",{"aria-label":"footer",children:e(T,{children:[n(i,{columnSpan:r,children:e(t,{gap:.5,children:[n(l,{as:"h2",type:"h3",children:"Section"}),n(o,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),n(i,{columnSpan:r,children:e(t,{gap:.5,children:[n(l,{as:"h2",type:"h3",children:"Section"}),n(o,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),n(i,{columnSpan:r,children:e(t,{gap:.5,children:[n(l,{as:"h2",type:"h3",children:"Section"}),n(o,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),n(i,{columnSpan:r,children:e(t,{gap:.5,children:[n(l,{as:"h2",type:"h3",children:"Section"}),n(o,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})})]})}),n(p,{}),n(a,{as:"p",children:"Footer text"}),n(A,{maxWidth:"240px",children:n(B,{})}),n(p,{}),n(a,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),e(a,{fontSize:"xs",maxWidth:m.maxWidth.bodyText,children:["© ",h," Department of Agriculture, Fisheries and Forestry"]})]})}};var g,k,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Body background',
  args: {
    background: 'body'
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var b,x,y;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'BodyAlt background',
  args: {
    background: 'bodyAlt'
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,L,W;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    background: 'bodyAlt'
  },
  render: function Render() {
    const year = useMemo(() => new Date().getFullYear(), []);
    const columnSpanning = ({
      xs: 12,
      sm: 6,
      lg: 3
    } as const);
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
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const N=["BodyBackground","BodyAltBackground","ComplexContent"];export{c as BodyAltBackground,s as BodyBackground,d as ComplexContent,N as __namedExportsOrder,K as default};
