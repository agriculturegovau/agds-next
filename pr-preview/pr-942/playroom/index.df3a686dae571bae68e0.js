(self.webpackChunk_ag_ds_next_docs=self.webpackChunk_ag_ds_next_docs||[]).push([[826],{363:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=363,e.exports=n},2229:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});const a=[{group:"Boilerplate",name:"One",code:"<Box dark><Header background=\"bodyAlt\" logo={<Logo />} heading=\"Export Service\" />\n    <MainNav items={[{ label: \"Home\", href: \"/\" }]} secondaryItems={[{ label: 'Sign in', endElement: <AvatarIcon />}]} /></Box>\n    <PageContent as=\"main\">\n      <Prose>\n        <h1>Page heading</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus lacinia libero.</p>\n        <p>Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi congue lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor ullamcorper.</p>\n      </Prose>\n    </PageContent>\n    <Box dark><Footer background=\"bodyAlt\">\n    <nav aria-label=\"footer\">\n      <LinkList\n        horizontal\n        links={[\n          { href: '#', label: 'Home' },\n          { href: '#', label: 'Terms and conditions' },\n          { href: '#', label: 'Privacy policy' },\n          { href: '#', label: 'A really long link title' },\n        ]}\n      />\n    </nav>\n    </Footer></Box>\n    "},{group:"Prose",name:"Basic",code:"<Prose>\n    <h1>Page heading</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus lacinia libero.</p>\n    <p>Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi congue lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor ullamcorper.</p>\n  </Prose>\n    "},{group:"Text",name:"Regular",code:'<Text as="p" fontWeight="normal">Normal text</Text>'},{group:"Text",name:"Bold",code:'<Text as="p" fontWeight="bold">Bold text</Text>'},{group:"Heading",name:"H1",code:"<H1>Heading 1</H1>"},{group:"Heading",name:"H2",code:"<H2>Heading 2</H2>"},{group:"Heading",name:"H3",code:"<H3>Heading 2</H3>"},{group:"Heading",name:"H4",code:"<H4>Heading 4</H4>"},{group:"Heading",name:"H5",code:"<H5>Heading 4</H5>"},{group:"Heading",name:"H6",code:"<H6>Heading 4</H6>"},{group:"LinkList",name:"Basic",code:"<LinkList links={[\n      { href: '#', label: 'Home' },\n      { href: '#', label: 'Establishments' },\n      { href: '#', label: 'Applications' },\n    ]} />"},{group:"Breadcrumbs",name:"Basic",code:"<Breadcrumbs links={[\n      { href: '#', label: 'Home' },\n      { href: '#', label: 'Establishments' },\n      { label: 'Applications' },\n    ]} />"},{group:"Footer",name:"Basic",code:"<Box dark><Footer background=\"bodyAlt\">\n    <nav aria-label=\"footer\">\n      <LinkList\n        horizontal\n        links={[\n          { href: '#', label: 'Home' },\n          { href: '#', label: 'Terms and conditions' },\n          { href: '#', label: 'Privacy policy' },\n          { href: '#', label: 'A really long link title' },\n        ]}\n      />\n    </nav>\n    <FooterDivider />\n    <Text fontSize=\"xs\" maxWidth={tokens.maxWidth.bodyText}>\n      We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture.\n      We pay our respects to their Elders past, present and emerging.\n    </Text>\n    <Text fontSize=\"xs\" maxWidth={tokens.maxWidth.bodyText}>\n      &copy; 2022 Department of Agriculture, Fisheries and Forestry\n    </Text>\n  </Footer></Box>"},{group:"Footer",name:"Complex",code:'<Box dark><Footer background="bodyAlt">\n    <nav aria-label="footer">\n      <Columns>\n        <Column columnSpan={{ xs: 12, sm: 6, lg: 3  }}>\n          <Stack gap={0.5}>\n            <Heading as="h2" type="h3">Section</Heading>\n            <LinkList\n              links={[\n                { href: "#", label: "Link 1" },\n                { href: "#", label: "Link 2" },\n                { href: "#", label: "Link 3" },\n              ]}\n            />\n          </Stack>\n        </Column>\n        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>\n          <Stack gap={0.5}>\n            <Heading as="h2" type="h3">Section</Heading>\n            <LinkList\n              links={[\n                { href: "#", label: "Link 1" },\n                { href: "#", label: "Link 2" },\n                { href: "#", label: "Link 3" },\n              ]}\n            />\n          </Stack>\n        </Column>\n        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>\n          <Stack gap={0.5}>\n            <Heading as="h2" type="h3">Section</Heading>\n            <LinkList\n              links={[\n                { href: "#", label: "Link 1" },\n                { href: "#", label: "Link 2" },\n                { href: "#", label: "Link 3" },\n              ]}\n            />\n          </Stack>\n        </Column>\n        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>\n          <Stack gap={0.5}>\n            <Heading as="h2" type="h3">Section</Heading>\n            <LinkList\n              links={[\n                { href: "#", label: "Link 1" },\n                { href: "#", label: "Link 2" },\n                { href: "#", label: "Link 3" },\n              ]}\n            />\n          </Stack>\n        </Column>\n      </Columns>\n    </nav>\n    <FooterDivider />\n    <Text as="p">Footer text</Text>\n    <Box maxWidth="240px">\n      <Logo />\n    </Box>\n    <FooterDivider />\n    <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>\n      We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture.\n      We pay our respects to their Elders past, present and emerging.\n    </Text>\n    <Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>\n      &copy; 2022 Department of Agriculture, Fisheries and Forestry\n    </Text>\n  </Footer></Box>\n  '},{group:"SideNav",name:"Basic",code:'<SideNav\nactivePath="#welcome"\ntitle="SideNav"\ncollapseTitle="In this section"\ntitleLink="#"\nitems={[\n  {\n    href: "#welcome",\n    label: "Welcome",\n  },\n  {\n    href: "#one",\n    label: "Item",\n    items: [\n      {\n        href: "#two",\n        label: "Sub-item",\n      },\n    ],\n  },\n  { href: "#three", label: "Item" },\n  {\n    href: "#four",\n    label: "Item",\n    items: [\n      {\n        href: "#five",\n        label: "Sub-item",\n        items: [\n          {\n            href: "#six",\n            label: "Sub-sub-item",\n          },\n          {\n            href: "#seven",\n            label: "Sub-sub-item",\n          },\n        ],\n      },\n      {\n        href: "#eight",\n        label: "Sub-item",\n      },\n    ],\n  },\n]}\n/>\n'},{group:"Button",name:"ButtonGroup",code:'<ButtonGroup>\n    <Button variant="primary">Primary</Button>\n    <Button variant="secondary">Secondary</Button>\n    <Button variant="tertiary">Tertiary</Button>\n  </ButtonGroup>'},{group:"Button",name:"Primary",code:"<Button>Submit</Button>"},{group:"Button",name:"Secondary",code:"<Button variant='secondary'>Save</Button>"},{group:"Button",name:"Tertiary",code:"<Button variant='tertiary'>Cancel</Button>"},{group:"Button",name:"Text",code:"<Button variant='text'>Cancel</Button>"},{group:"Columns",name:"Basic",code:'<Columns gap={2}>\n      <Column columnSpan={[12, 6]} background="shade" padding={1}>\n        <Text>Left</Text>\n      </Column>\n      <Column columnSpan={[12, 6]} background="shade" padding={1}>\n        <Text>Right</Text>\n      </Column>\n    </Columns>'},{group:"Callout",name:"Basic",code:'<Callout>\n    <CalloutTitle as="h3">Callout heading</CalloutTitle>\n      <Text>Description of the callout.</Text>\n    </Callout>'},{group:"TextInput",name:"Basic",code:'<TextInput label="Name" />'},{group:"TextArea",name:"Basic",code:'<Textarea label="Message" />'},{group:"Select",name:"Basic",code:"<Select \tlabel=\"What option?\"\n    placeholder=\"Please select\"\n    options={[\n      { value: 'a', label: 'Option A' },\n      { value: 'b', label: 'Option B' },\n      { value: 'c', label: 'Option C' },\n    ]} />"},{group:"Fieldset",name:"Basic",code:'<Fieldset legend="What is your address?">\n    <FormStack>\n\t\t\t<TextInput label="Street and number" required maxWidth="xl" />\n\t\t\t<TextInput label="Suburb" required maxWidth="xl" />\n\t\t\t<TextInput label="Country" required maxWidth="xl" />\n\t\t\t<TextInput label="Postcode" required maxWidth="sm" />\n\t\t</FormStack>\n\t</Fieldset>'},{group:"Accordion",name:"Basic",code:'<Accordion><AccordionItem title="Accordion">\n    <AccordionItemContent><Text as="p">This is some text inside an Accordion</Text></AccordionItemContent>\n  </AccordionItem></Accordion>'},{group:"ProgressIndicator",name:"Basic",code:"<ProgressIndicator\n    items={[\n      { href: '#', label: 'Introduction', status: 'doing' },\n      { href: '#', label: 'Business Contacts', status: 'todo' },\n      { href: '#', label: 'Case Studies', status: 'done' },\n    ]}\n  />"},{group:"Checkbox",name:"Basic",code:"<Checkbox checked={false}>Label</Checkbox>"},{group:"Radio",name:"Basic",code:"<ControlGroup>\n    <Radio checked={false}>Phone</Radio>\n    <Radio checked={false}>Tablet</Radio>\n    <Radio checked={true}>Laptop</Radio>\n  </ControlGroup>"},{group:"Switch",name:"Basic",code:'<Switch checked={false} label="Show establishments" />'},{group:"Searchbox",name:"Basic",code:'<SearchBox onSubmit={console.log}>\n    <SearchBoxInput label="Search this website" />\n    <SearchBoxButton>Search</SearchBoxButton>\n  </SearchBox>'},{group:"SkipLinks",name:"Basic",code:"<SkipLinks\n    links={[\n      { href: '#main-content', label: 'Skip to main content' },\n      { href: '#main-nav', label: 'Skip to main navigation' },\n    ]}\n  />"},{group:"InpageNav",name:"Basic",code:"<InpageNav\n\t\ttitle=\"On this page\"\n\t\tlinks={[\n\t\t\t{ href: '#section-1', label: 'Section 1' },\n\t\t\t{ href: '#section-2', label: 'Section 2' },\n\t\t]}\n\t/>"},{group:"DirectionLink",name:"Basic",code:'<DirectionLink href="#" direction="left">Back</DirectionLink>'},{group:"CallToAction",name:"Link",code:'<CallToActionLink href="#">Sign up</CallToActionLink>'},{group:"CallToAction",name:"Button",code:"<CallToActionButton onClick={console.log}>Sign up</CallToActionButton>"},{group:"Tags",name:"Basic",code:"<Tags\n    heading={<Text as=\"h2\" fontWeight=\"bold\">Tags:</Text>}\n    items={[\n      { href: '#', label: 'Foo' },\n      { href: '#', label: 'Bar' },\n      { href: '#', label: 'Baz' },\n    ]}\n    />"},{group:"Tags",name:"Removable",code:"<Tags\n    heading={<Text as=\"h2\" fontWeight=\"bold\">Tags:</Text>}\n    items={[\n      { href: '#', label: 'Foo', onRemove: console.log },\n      { href: '#', label: 'Bar', onRemove: console.log },\n      { href: '#', label: 'Baz', onRemove: console.log },\n    ]}\n    />"},{group:"Tag",name:"Basic",code:"<Tag>Foo</Tag>"},{group:"Form",name:"Sign in",code:'<form>\n    <FormStack>\n      <TextInput label="Email" type="email" maxWidth="xl" />\n      <TextInput label="Password" type="password" maxWidth="xl" />\n      <ButtonGroup>\n        <Button type="submit">Submit</Button>\n        <Button type="button" variant="secondary">\n          Cancel\n        </Button>\n      </ButtonGroup>\n    </FormStack>\n  </form>'},{group:"FileUpload",name:"Basic",code:'<FileUpload label="Drivers license" />'},{group:"TaskList",name:"Basic",code:"<TaskList\n    items={[\n      {\n        href: '#',\n        label: 'Check eligibility',\n        status: 'done',\n      },\n      {\n        href: '#',\n        label: 'Lorem ipsum dolor sit amet',\n        status: 'done',\n      },\n      {\n        href: '#',\n        label: 'Case Studies',\n        status: 'todo',\n      },\n      {\n        href: '#',\n        label: 'Review and submit',\n        message: 'Not available until previous tasks are done',\n        status: 'todo',\n      },\n    ]}\n  />"},{group:"PageAlert",name:"Info",code:'<PageAlert tone="info" title="Notice">\n      <Prose><p>All vacancies close on the advertised closing date unless otherwise specified.</p></Prose>\n    </PageAlert>'},{group:"PageAlert",name:"Success",code:'<PageAlert tone="success" title="Submission successful">\n      <Prose><p>Your application has been successfully submitted.</p></Prose>\n    </PageAlert>'},{group:"PageAlert",name:"Error",code:'<PageAlert tone="error" title="There is a problem">\n      <Prose>\n        <ul>\n          <li><a href="#">Full name must not be empty</a></li>\n          <li><a href="#">Email must not be empty</a></li>\n          <li><a href="#">Description must not be empty</a></li>\n        </ul>\n      </Prose>\n    </PageAlert>'},{group:"PageAlert",name:"Warning",code:'<PageAlert tone="warning" title="Browser out of date">\n      <Prose><p>Your web browser is out of date.</p></Prose>\n    </PageAlert>'},{group:"Table",name:"Basic",code:'<TableWrapper>\n    <Table>\n      <TableCaption>\n        Population of Australian states and territories, December 2015\n      </TableCaption>\n      <TableHead>\n        <tr>\n          <TableHeader width="50%" scope="col">\n            Location\n          </TableHeader>\n          <TableHeader textAlign="right" scope="col">\n            Population\n          </TableHeader>\n          <TableHeader textAlign="right" scope="col">\n            Change over previous year %\n          </TableHeader>\n          <TableHeader textAlign="right" scope="col">\n            Change over previous decade %\n          </TableHeader>\n        </tr>\n      </TableHead>\n      <TableBody>\n        <tr>\n          <TableCell>New South Wales</TableCell>\n          <TableCell textAlign="right">7,670,700</TableCell>\n          <TableCell textAlign="right">3.1%</TableCell>\n          <TableCell textAlign="right">12.9%</TableCell>\n        </tr>\n        <tr>\n          <TableCell>Victoria</TableCell>\n          <TableCell textAlign="right">5,996,400</TableCell>\n          <TableCell textAlign="right">2.5%</TableCell>\n          <TableCell textAlign="right">9.3%</TableCell>\n        </tr>\n        <tr>\n          <TableCell>Queensland</TableCell>\n          <TableCell textAlign="right">4,808,800</TableCell>\n          <TableCell textAlign="right">1.7%</TableCell>\n          <TableCell textAlign="right">13.3%</TableCell>\n        </tr>\n        <tr>\n          <TableCell>Western Australia</TableCell>\n          <TableCell textAlign="right">2,603,900</TableCell>\n          <TableCell textAlign="right">2.3%</TableCell>\n          <TableCell textAlign="right">11.6%</TableCell>\n        </tr>\n        <tr>\n          <TableCell>South Australia</TableCell>\n          <TableCell textAlign="right">1,702,800</TableCell>\n          <TableCell textAlign="right">2.0%</TableCell>\n          <TableCell textAlign="right">6.8%</TableCell>\n        </tr>\n        <tr>\n          <TableCell>Tasmania</TableCell>\n          <TableCell textAlign="right">517,400</TableCell>\n          <TableCell textAlign="right">4%</TableCell>\n          <TableCell textAlign="right">5.3%</TableCell>\n        </tr>\n        <tr>\n          <TableCell>Northern Territory</TableCell>\n          <TableCell textAlign="right">244,400</TableCell>\n          <TableCell textAlign="right">1.2%</TableCell>\n          <TableCell textAlign="right">4.5%</TableCell>\n        </tr>\n        <tr>\n          <TableCell>Australian Capital Territory</TableCell>\n          <TableCell textAlign="right">393,000</TableCell>\n          <TableCell textAlign="right">2.4%</TableCell>\n          <TableCell textAlign="right">9.6%</TableCell>\n        </tr>\n      </TableBody>\n    </Table>\n  </TableWrapper>\n  '},{group:"DatePicker",name:"Basic",code:'<DatePicker label="Select date" value={new Date()} onChange={() => {}} />'},{group:"DateRangePicker",name:"Basic",code:"<DateRangePicker value={{ from: new Date('2000-01-03'), to: new Date('2000-01-07') }} onChange={() => {}} />"},{group:"LoadingDots",name:"Basic",code:"<LoadingDots />"},{group:"LoadingBlanket",name:"Basic",code:'<Box background="body" height="300px" width="100%" padding={1} border rounded style={{ position: \'relative\' }}>\n      <LoadingBlanket label="Component loading state" />\n    </Box>'},{group:"HeroBanner",name:"Basic",code:'<HeroBanner\n    image={\n      <img\n        src="/img/placeholder/hero-banner.jpeg"\n        role="presentation"\n        alt=""\n      />\n    }\n>\n    <HeroBannerTitleContainer>\n        <HeroBannerTitle>Website hero banner title - xxxl/display (H1)</HeroBannerTitle>\n        <HeroBannerSubtitle>Hero banner paragraph text (P)</HeroBannerSubtitle>\n    </HeroBannerTitleContainer>\n    <SearchBox onSubmit={() => {}}>\n        <SearchBoxInput label="Search this website" />\n        <SearchBoxButton iconOnly={{ xs: true, md: false }}>Search</SearchBoxButton>\n    </SearchBox>\n  </HeroBanner>'},{group:"HeroCategoryBanner",name:"Basic",code:'<HeroCategoryBanner\n    image={\n      <img\n        src="/img/placeholder/hero-banner.jpeg"\n        role="presentation"\n        alt=""\n      />\n    }\n  >\n    <HeroCategoryBannerTitle>\n      Website hero banner title - xxl/display (H1)\n    </HeroCategoryBannerTitle>\n    <HeroCategoryBannerSubtitle>\n      Hero banner sub title (P).\n    </HeroCategoryBannerSubtitle>\n  </HeroCategoryBanner>'},{group:"HeroSubcategoryBanner",name:"Basic",code:"<HeroSubcategoryBanner>\n    <Breadcrumbs\n      links={[\n        { href: '#', label: 'Section 1' },\n        { href: '#', label: 'Category page' },\n        { label: 'Subcategory page' },\n      ]}\n    />\n    <HeroSubcategoryBannerTitle>\n      Subcategory banner title - xxl/display (H1)\n    </HeroSubcategoryBannerTitle>\n  </HeroSubcategoryBanner>"},{group:"SubNav",name:"Basic",code:"<SubNav\n    activePath=\"#code\"\n    links={[\n      { href: '#usage', label: 'Usage' },\n      { href: '#code', label: 'Code' },\n      { href: '#content', label: 'Content' },\n      { href: '#accessibility', label: 'Accessibility' },\n    ]}\n  />"},{group:"TextLink",name:"Basic",code:'<TextLink href="#">Internal link</TextLink>'},{group:"TextLinkExternal",name:"Basic",code:'<TextLinkExternal href="https://design-system.agriculture.gov.au">External link</TextLinkExternal>'},{group:"Pagination",name:"Basic",code:"<Pagination currentPage={5} totalPages={10} generateHref={() => '#'} />"},{group:"StatusBadge",name:"Success",code:'<StatusBadge tone="success" label="Accepted" />'},{group:"StatusBadge",name:"Info",code:'<StatusBadge tone="info" label="Pending" />'},{group:"StatusBadge",name:"Warning",code:'<StatusBadge tone="warning" label="Alert" />'},{group:"StatusBadge",name:"Error",code:'<StatusBadge tone="error" label="Rejected" />'},{group:"StatusBadge",name:"Neutral",code:'<StatusBadge tone="neutral" label="Draft" />'},{group:"NotificationBadge",name:"Action",code:'\t<NotificationBadge tone="action" value={16} max={99} />'},{group:"NotificationBadge",name:"Neutral",code:'\t<NotificationBadge tone="neutral" value={16} max={99} />'},{group:"IndicatorDot",name:"Action",code:'\t<IndicatorDot tone="action" />'},{group:"IndicatorDot",name:"Neutral",code:'\t<IndicatorDot tone="neutral" />'},{group:"Skeleton",name:"SkeletonText",code:'<SkeletonText fontSize="sm" lineHeight="default" />'},{group:"Skeleton",name:"SkeletonHeading",code:'<SkeletonHeading type="h2" />'},{group:"Skeleton",name:"SkeletonBox",code:'<SkeletonBox width="100px" height="100px" />'},{group:"Card",name:"Basic",code:'<Card shadow clickable>\n    <CardInner>\n      <Stack gap={1}>\n        <H3>\n          <CardLink href="#">Card heading</CardLink>\n        </H3>\n        <Text as="p">\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,\n          voluptat\n        </Text>\n      </Stack>\n    </CardInner>\n  </Card>'},{group:"Autocomplete",name:"Autocomplete",code:"<Autocomplete label=\"Find your city\" hint=\"Start typing to see results\" loadOptions={() => [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }]} />"},{group:"Combobox",name:"Combobox",code:"<Combobox label=\"Select country\" options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }]} />"},{group:"Details",name:"Basic",code:'<Details label="Details"><Text as="p">This is a small paragraph of text that is supplementary to the main page\n\t\tcontent.</Text></Details>'},{group:"SummaryList",name:"Basic",code:'<Stack gap={1.5}>\n      <SummaryList>\n        <SummaryListItem>\n          <SummaryListItemTerm>First name</SummaryListItemTerm>\n          <SummaryListItemDescription>Will</SummaryListItemDescription>\n        </SummaryListItem>\n        <SummaryListItem>\n          <SummaryListItemTerm>Last name</SummaryListItemTerm>\n          <SummaryListItemDescription>Power</SummaryListItemDescription>\n        </SummaryListItem>\n        <SummaryListItem>\n          <SummaryListItemTerm>Contact information</SummaryListItemTerm>\n          <SummaryListItemDescription>\n            +61 9912 3456\n\t\t\t\t\t  <br />\n\t\t\t\t\t  will.power@example.com\n          </SummaryListItemDescription>\n        </SummaryListItem>\n        <SummaryListItem>\n          <SummaryListItemTerm>Date of birth</SummaryListItemTerm>\n          <SummaryListItemDescription>09/06/1995</SummaryListItemDescription>\n        </SummaryListItem>\n      </SummaryList>\n      <TextLink href="#">Change all</TextLink>\n    </Stack>'},{group:"SummaryList",name:"With actions",code:'<SummaryList>\n      <SummaryListItem>\n          <SummaryListItemTerm>First name</SummaryListItemTerm>\n          <SummaryListItemDescription>Will</SummaryListItemDescription>\n          <SummaryListItemAction>\n              <TextLink href="#">Change</TextLink>\n          </SummaryListItemAction>\n      </SummaryListItem>\n      <SummaryListItem>\n          <SummaryListItemTerm>Last name</SummaryListItemTerm>\n          <SummaryListItemDescription>Power</SummaryListItemDescription>\n          <SummaryListItemAction>\n              <TextLink href="#">Change</TextLink>\n          </SummaryListItemAction>\n      </SummaryListItem>\n      <SummaryListItem>\n          <SummaryListItemTerm>Contact information</SummaryListItemTerm>\n          <SummaryListItemDescription>\n            +61 9912 3456\n\t\t\t\t\t  <br />\n\t\t\t\t\t  will.power@example.com\n          </SummaryListItemDescription>\n          <SummaryListItemAction>\n              <TextLink href="#">Change</TextLink>\n          </SummaryListItemAction>\n      </SummaryListItem>\n      <SummaryListItem>\n          <SummaryListItemTerm>Date of birth</SummaryListItemTerm>\n          <SummaryListItemDescription>09/06/1995</SummaryListItemDescription>\n          <SummaryListItemAction>\n              <TextLink href="#">Change</TextLink>\n          </SummaryListItemAction>\n      </SummaryListItem>\n    </SummaryList>'},{group:"SearchInput",name:"Basic",code:'<SearchInput label="Search" />'},{group:"GlobalAlert",name:"Basic",code:'<GlobalAlert title="Alert title"><Text as="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.nulla.</Text></GlobalAlert>'},{group:"FileInput",name:"Basic",code:'<FileInput label="Upload a file" />'},{group:"Avatar",name:"Basic",code:'<Avatar name="William Mead" />'}]}},e=>{e.O(0,[140,74,993,536],(()=>(1758,e(e.s=1758)))),e.O()}]);