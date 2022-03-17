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
		code: `<Footer>
    <nav aria-label="footer">
      <LinkList
        horizontal
        links={[
          { href: '#', label: 'Home' },
          { href: '#', label: 'Terms and conditions' },
          { href: '#', label: 'Privacy policy' },
          { href: '#', label: 'A really long link title' },
        ]}
      />
    </nav>
    <FooterDivider />
    <Text>
      <small>
        &copy; Commonwealth of Australia,{' '}
        <TextLink
          href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
          rel="external license"
        >
          MIT licensed
        </TextLink>
      </small>
    </Text>
  </Footer>`,
	},
	{
		group: 'Footer',
		name: 'Complex',
		code: `<Footer variant="agriculture">
    <nav aria-label="footer">
      <Columns>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3  }}>
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
        </Column>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
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
        </Column>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
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
        </Column>
        <Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
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
        </Column>
      </Columns>
    </nav>
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
		group: 'Callout',
		name: 'Basic',
		code: `<Callout>
    <CalloutTitle as="h3">Callout heading</CalloutTitle>
      <Text>Description of the callout.</Text>
    </Callout>`,
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
		group: 'Fieldset',
		name: 'Basic',
		code: `	<Fieldset legend="What is your address?">
    <FormStack>
			<TextInput label="Street and number" required maxWidth="xl" />
			<TextInput label="Suburb" required maxWidth="xl" />
			<TextInput label="Country" required maxWidth="xl" />
			<TextInput label="Postcode" required maxWidth="sm" />
		</FormStack>
	</Fieldset>`,
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
		code: `<SearchBox onSubmit={console.log}>
    <SearchBoxInput label="Search this website" />
    <SearchBoxButton>Search</SearchBoxButton>
  </SearchBox>`,
	},
	{
		group: 'KeywordList',
		name: 'Basic',
		code: `<KeywordList
    items={[
      { subTitle: 'Department of', title: 'Agriculture and Water Resources' },
      { subTitle: 'Department of', title: 'Communications and the Arts' },
    ]}
  />`,
	},
	{
		group: 'SkipLinks',
		name: 'Basic',
		code: `<SkipLinks
    links={[
      { href: '#main-content', label: 'Skip to main content' },
      { href: '#main-nav', label: 'Skip to main navigation' },
    ]}
  />`,
	},
	{
		group: 'InpageNav',
		name: 'Basic',
		code: `<InpageNav
		title="Contents"
		links={[
			{ href: '#section-1', label: 'Section 1' },
			{ href: '#section-2', label: 'Section 2' },
		]}
	/>`,
	},
	{
		group: 'DirectionLink',
		name: 'Basic',
		code: `<DirectionLink href="#" direction="left">Back</DirectionLink>`,
	},
	{
		group: 'CallToAction',
		name: 'Link',
		code: `<CallToActionLink href="#">Sign up</CallToActionLink>`,
	},
	{
		group: 'CallToAction',
		name: 'Button',
		code: `<CallToActionButton onClick={console.log}>Sign up</CallToActionButton>`,
	},
	{
		group: 'Tags',
		name: 'Basic',
		code: `<Tags
    heading={<Text as="h2" fontWeight="bold">Tags:</Text>}
    items={[
      { href: '#', label: 'Foo' },
      { href: '#', label: 'Bar' },
      { href: '#', label: 'Baz' },
    ]}
    />`,
	},
	{
		group: 'Form',
		name: 'Sign in',
		code: `<form>
    <FormStack>
      <TextInput label="Email" type="email" maxWidth="xl" />
      <TextInput label="Password" type="password" maxWidth="xl" />
      <Flex gap={1}>
        <Button type="submit">Submit</Button>
        <Button type="button" variant="secondary">
          Cancel
        </Button>
      </Flex>
    </FormStack>
  </form>`,
	},
	{
		group: 'TaskList',
		name: 'Basic',
		code: `<TaskList
    items={[
      {
        href: '#',
        label: 'Check eligibility',
        status: 'done',
      },
      {
        href: '#',
        label: 'Lorem ipsum dolor sit amet',
        status: 'done',
      },
      {
        href: '#',
        label: 'Case Studies',
        status: 'todo',
      },
      {
        href: '#',
        label: 'Review and submit',
        message: 'Not available until previous tasks are done',
        status: 'todo',
      },
    ]}
  />`,
	},
];

export default snippits;
