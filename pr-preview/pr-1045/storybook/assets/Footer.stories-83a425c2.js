import{j as e,b,t as a,a as r,B as C}from"./Box-e652c7f2.js";import{r as v}from"./index-42611d8b.js";import{L as D}from"./Logo-13ce5ee2.js";import{S as l,F as z}from"./Stack-4546232d.js";import{a as B,C as m}from"./Column-81a5e170.js";import{a as g}from"./Heading-1b1cff4a.js";import{T as c}from"./Text-51e6146a.js";import{L as s}from"./LinkList-574ee781.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextLink-99cf0354.js";import"./TextLinkExternal-ed8d4b34.js";import"./VisuallyHidden-315ab967.js";import"./WebsiteIcon-f0b253fc.js";import"./CalendarIcon-16f5268f.js";const w={border:"--agds-footer-border"},H={border:`var(${w.border})`},h=({background:o="body",children:i})=>e(z,{as:"footer",justifyContent:"center",background:o,color:"text",paddingY:3,borderTop:!0,borderTopWidth:"xl",css:{borderColor:b.accent,[w.border]:b.accent,li:{marginLeft:0}},children:e(l,{maxWidth:a.maxWidth.container,width:"100%",gap:1.5,paddingX:a.containerPadding,children:i})});try{h.displayName="Footer",h.__docgenInfo={description:"",displayName:"Footer",props:{background:{defaultValue:{value:"body"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"bodyAlt"'}]}}}}}catch{}function p(){return e("hr",{"aria-hidden":"true",css:{boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:H.border,width:"100%"}})}const K={title:"layout/Footer",component:h},A=o=>{const i=v.useMemo(()=>new Date().getFullYear(),[]);return r(h,{background:o.background,children:[e("nav",{"aria-label":"footer",children:e(s,{horizontal:!0,links:[{href:"#",label:"Home"},{href:"#",label:"Terms and conditions"},{href:"#",label:"Privacy policy"},{href:"#",label:"A really long link title"}]})}),e(p,{}),e(c,{fontSize:"xs",maxWidth:a.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),r(c,{fontSize:"xs",maxWidth:a.maxWidth.bodyText,children:["© ",i," Department of Agriculture, Fisheries and Forestry"]})]})},t=A.bind({});t.storyName="Body background";t.args={background:"body"};const n=A.bind({});n.storyName="BodyAlt background";n.args={background:"bodyAlt"};const _=o=>{const i=v.useMemo(()=>new Date().getFullYear(),[]),u={xs:12,sm:6,lg:3};return r(h,{background:o.background,children:[e("nav",{"aria-label":"footer",children:r(B,{children:[e(m,{columnSpan:u,children:r(l,{gap:.5,children:[e(g,{as:"h2",type:"h3",children:"Section"}),e(s,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),e(m,{columnSpan:u,children:r(l,{gap:.5,children:[e(g,{as:"h2",type:"h3",children:"Section"}),e(s,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),e(m,{columnSpan:u,children:r(l,{gap:.5,children:[e(g,{as:"h2",type:"h3",children:"Section"}),e(s,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})}),e(m,{columnSpan:u,children:r(l,{gap:.5,children:[e(g,{as:"h2",type:"h3",children:"Section"}),e(s,{links:[{href:"#",label:"Link 1"},{href:"#",label:"Link 2"},{href:"#",label:"Link 3"}]})]})})]})}),e(p,{}),e(c,{as:"p",children:"Footer text"}),e(C,{maxWidth:"240px",children:e(D,{})}),e(p,{}),e(c,{fontSize:"xs",maxWidth:a.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),r(c,{fontSize:"xs",maxWidth:a.maxWidth.bodyText,children:["© ",i," Department of Agriculture, Fisheries and Forestry"]})]})},d=_.bind({});d.args={background:"bodyAlt"};var k,x,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return <Footer background={args.background}>
            <nav aria-label="footer">
                <LinkList horizontal links={[{
        href: '#',
        label: 'Home'
      }, {
        href: '#',
        label: 'Terms and conditions'
      }, {
        href: '#',
        label: 'Privacy policy'
      }, {
        href: '#',
        label: 'A really long link title'
      }]} />
            </nav>
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
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,S,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return <Footer background={args.background}>
            <nav aria-label="footer">
                <LinkList horizontal links={[{
        href: '#',
        label: 'Home'
      }, {
        href: '#',
        label: 'Terms and conditions'
      }, {
        href: '#',
        label: 'Privacy policy'
      }, {
        href: '#',
        label: 'A really long link title'
      }]} />
            </nav>
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
}`,...(L=(S=n.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var F,W,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const columnSpanning = ({
    xs: 12,
    sm: 6,
    lg: 3
  } as const);
  return <Footer background={args.background}>
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
}`,...(T=(W=d.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const Q=["BodyBackground","BodyAltBackground","ComplexContent"];export{n as BodyAltBackground,t as BodyBackground,d as ComplexContent,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Footer.stories-83a425c2.js.map
