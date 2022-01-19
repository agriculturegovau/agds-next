const snippits = [
	{
		group: 'Button',
		name: 'Strong',
		code: `
      <Button weight="strong">
        Button
      </Button>
    `,
	},
	{
		group: 'Boilerplate',
		name: 'One',
		code: `<Header logo={<Logo />} heading="Export services" />
    <MainNav links={[{ label: "Hello", href: "#" }]} />

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
		group: 'Footer',
		name: 'Basic',
		code: `<Footer variant='dark'>
    <LinkList
      horizontal
      links={[
        { href: '#', label: 'Link 1' },
        { href: '#', label: 'Link 2' },
        { href: '#', label: 'Link 3' },
      ]}
    />
    <Divider accent />

    <Text><small>&copy; Commonwealth of Australia</small></Text>
  </Footer>`,
	},
	{
		group: 'Footer',
		name: 'Complex',
		code: `<Footer variant="dark">
    <Flex
      className="au-footer__navigation row"
      aria-label="footer"
      gap={1}
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(4, [col-start] 1fr)",
      }}
    >
      <div>
        <H3>Section</H3>
        <LinkList
          links={[
            { href: "#", label: "Link 1" },
            { href: "#", label: "Link 2" },
            { href: "#", label: "Link 3" },
          ]}
        />
      </div>
      <div>
        <H3>Section</H3>
        <LinkList
          links={[
            { href: "#", label: "Link 1" },
            { href: "#", label: "Link 2" },
            { href: "#", label: "Link 3" },
          ]}
        />
      </div>
    </Flex>
    <Divider />
    <Text as="p">Footer text</Text>

    <Box maxWidth="240px">
      <Logo />
    </Box>

    <Divider />
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
accordionHeader="In this section"
activePath="#welcome"
menuHeader="SideNav"
items={[
  {
    href: "#welcome",
    label: "Welcome",
  },
  {
    href: "#one",
    label: "Item",
    children: [
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
    children: [
      {
        href: "#five",
        label: "Sub-item",
        children: [
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
		code: `<SideNavContent variant='light'>
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
    </SideNavContent>`,
	},
];

export default snippits;
