const snippits = [
	{
		group: 'Boilerplate',
		name: 'One',
		code: `<Header logo={<Logo />} heading="Export Service" />
    <MainNav links={[{ label: "Hello", href: "#" }]} variant='agriculture' />

    <Content>
      <Body>
        <h1>Page heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus lacinia libero.</p>
        <p>Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi congue lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor ullamcorper.</p>
      </Body>
    </Content>
    `,
	},
	{
		group: 'Body',
		name: 'Basic',
		code: `<Body>
    <h1>Page heading</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus lacinia libero.</p>
    <p>Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi congue lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor ullamcorper.</p>
  </Body>
    `,
	},
	{
		group: 'LinkList',
		name: 'Basic',
		code: `<LinkList links={[
      { href: '#', label: 'Home' },
      { href: '#', label: 'Establishments' },
      { href: '#', label: 'Applications' },
    ]} />`,
	},
	{
		group: 'Breadcrumbs',
		name: 'Basic',
		code: `<Breadcrumbs links={[
      { href: '#', label: 'Home' },
      { href: '#', label: 'Establishments' },
      { label: 'Applications' },
    ]} />`,
	},
	{
		group: 'Footer',
		name: 'Basic',
		code: `<Footer variant='agriculture'>
    <LinkList
      horizontal
      links={[
        { href: '#', label: 'Link 1' },
        { href: '#', label: 'Link 2' },
        { href: '#', label: 'Link 3' },
      ]}
    />
    <FooterDivider />

    <Text><small>&copy; Commonwealth of Australia</small></Text>
  </Footer>`,
	},
	{
		group: 'Footer',
		name: 'Complex',
		code: `<Footer variant="agriculture">
    <Box
      aria-label="footer"
      css={{
        display: "grid",
        gridGap: '1rem',

        [tokens.mediaQuery.min.sm]: {
          gridTemplateColumns: "repeat(2, [col-start] 1fr)",
        },

        [tokens.mediaQuery.min.lg]: {
          gridTemplateColumns: "repeat(4, [col-start] 1fr)",
        },
      }}
    >
      <Stack gap={0.5}>
        <H3>Section</H3>
        <LinkList
          links={[
            { href: "#", label: "Link 1" },
            { href: "#", label: "Link 2" },
            { href: "#", label: "Link 3" },
          ]}
        />
      </Stack>
      <Stack gap={0.5}>
        <H3>Section</H3>
        <LinkList
          links={[
            { href: "#", label: "Link 1" },
            { href: "#", label: "Link 2" },
            { href: "#", label: "Link 3" },
          ]}
        />
      </Stack>
      <Stack gap={0.5}>
        <H3>Section</H3>
        <LinkList
          links={[
            { href: "#", label: "Link 1" },
            { href: "#", label: "Link 2" },
            { href: "#", label: "Link 3" },
          ]}
        />
      </Stack>
      <Stack gap={0.5}>
        <H3>Section</H3>
        <LinkList
          links={[
            { href: "#", label: "Link 1" },
            { href: "#", label: "Link 2" },
            { href: "#", label: "Link 3" },
          ]}
        />
      </Stack>
    </Box>
    <FooterDivider />
    <Text as="p">Footer text</Text>

    <Box maxWidth="240px">
      <Logo />
    </Box>

    <FooterDivider />
    <Text>
      <small>
        &copy; Commonwealth of Australia
      </small>
    </Text>
  </Footer>
  `,
	},
	{
		group: 'SideNav',
		name: 'Basic',
		code: `<SideNav
activePath="#welcome"
title="SideNav"
titleLink="#"
items={[
  {
    href: "#welcome",
    label: "Welcome",
  },
  {
    href: "#one",
    label: "Item",
    items: [
      {
        href: "#two",
        label: "Sub-item",
      },
    ],
  },
  { href: "#three", label: "Item" },
  {
    href: "#four",
    label: "Item",
    items: [
      {
        href: "#five",
        label: "Sub-item",
        items: [
          {
            href: "#six",
            label: "Sub-sub-item",
          },
          {
            href: "#seven",
            label: "Sub-sub-item",
          },
        ],
      },
      {
        href: "#eight",
        label: "Sub-item",
      },
    ],
  },
]}
/>
`,
	},
	{
		group: 'SideNav',
		name: 'Modular',
		code: `<SideNavContainer variant='light'>
      <SideNavTitle href="#" text="SideNavTitle" />
      <SideNavLinkGroup>
        <SideNavLink active={true} href="#one" label="One" />
        <SideNavLink href="#two" label="Two" />
        <SideNavLink href="#three" label="Three" />
        <SideNavLinkGroup>
        <SideNavLink href="#four" label="Four" />
        <SideNavLink href="#five" label="Five" />
        <SideNavLink href="#six" label="Six" />
      </SideNavLinkGroup>
      </SideNavLinkGroup>
    </SideNavContainer>`,
	},
	{
		group: 'Button',
		name: 'Primary',
		code: `<Button>Submit</Button>`,
	},
	{
		group: 'Button',
		name: 'Secondary',
		code: `<Button variant='secondary'>Save</Button>`,
	},
	{
		group: 'Button',
		name: 'Tertiary',
		code: `<Button variant='tertiary'>Cancel</Button>`,
	},
	{
		group: 'Columns',
		name: 'Basic',
		code: `<Columns gap={2}>
      <Column columnSpan={[12, 6]} background="shade" padding={1}>
        <Text>Left</Text>
      </Column>
      <Column columnSpan={[12, 6]} background="shade" padding={1}>
        <Text>Right</Text>
      </Column>
    </Columns>`,
	},
	{
		group: 'TextInput',
		name: 'Basic',
		code: `<TextInput label="Name" />`,
	},
	{
		group: 'TextArea',
		name: 'Basic',
		code: `<Textarea label="Message" />`,
	},
	{
		group: 'Select',
		name: 'Basic',
		code: `<Select 	label="What option?"
    placeholder="Please select"
    options={[
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C' },
    ]} />`,
	},
	{
		group: 'Accordion',
		name: 'Basic',
		code: `<Accordion><AccordionItem title="Accordion">
    <AccordionItemContent><Text>This is some text inside an Accordion</Text></AccordionItemContent>
  </AccordionItem></Accordion>`,
	},
	{
		group: 'ProgressIndicator',
		name: 'Basic',
		code: `<ProgressIndicator
    items={[
      { href: '#', label: 'Introduction', status: 'doing' },
      { href: '#', label: 'Business Contacts', status: 'todo' },
      { href: '#', label: 'Case Studies', status: 'done' },
    ]}
  />`,
	},
	{
		group: 'Checkbox',
		name: 'Basic',
		code: `<Checkbox checked={false}>Label</Checkbox>`,
	},
	{
		group: 'Radio',
		name: 'Basic',
		code: `<ControlGroup>
    <Radio checked={false}>Phone</Radio>
    <Radio checked={false}>Tablet</Radio>
    <Radio checked={true}>Laptop</Radio>
  </ControlGroup>`,
	},
	{
		group: 'Searchbox',
		name: 'Basic',
		code: `<SearchBox aria-label="Sitewide" onSubmit={console.log}>
    <SearchBoxInput label="Search this website" />
    <SearchBoxButton>Search</SearchBoxButton>
  </SearchBox>`,
	},
];

export default snippits;
