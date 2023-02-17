import { Fragment, ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
	Autocomplete,
	Avatar,
	AvatarIcon,
	Box,
	Breadcrumbs,
	Button,
	ButtonGroup,
	Callout,
	CalloutTitle,
	CallToActionButton,
	CallToActionLink,
	Card,
	CardInner,
	CardLink,
	Checkbox,
	Column,
	Columns,
	Combobox,
	ControlGroup,
	DatePicker,
	DateRangePicker,
	Details,
	DirectionLink,
	Fieldset,
	FileInput,
	FileUpload,
	Footer,
	FooterDivider,
	FormStack,
	GlobalAlert,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Header,
	Heading,
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
	HeroCategoryBanner,
	HeroCategoryBannerSubtitle,
	HeroCategoryBannerTitle,
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
	IndicatorDot,
	InpageNav,
	LinkList,
	LoadingBlanket,
	LoadingDots,
	Logo,
	MainNav,
	NotificationBadge,
	PageAlert,
	PageContent,
	Pagination,
	ProgressIndicator,
	Prose,
	Radio,
	SearchBox,
	SearchBoxButton,
	SearchBoxInput,
	SearchInput,
	Select,
	SideNav,
	SkeletonBox,
	SkeletonHeading,
	SkeletonText,
	SkipLinks,
	Stack,
	StatusBadge,
	SubNav,
	SummaryList,
	SummaryListItem,
	SummaryListItemAction,
	SummaryListItemDescription,
	SummaryListItemTerm,
	Switch,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
	Tag,
	Tags,
	TaskList,
	Text,
	Textarea,
	TextInput,
	TextLink,
	TextLinkExternal,
	tokens,
} from './components';

// FIXME
function BoilerplatePageTemplate({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<Box dark>
				<Header background="bodyAlt" logo={<Logo />} heading="Export Service" />
				<MainNav
					items={[{ label: 'Home', href: '/' }]}
					secondaryItems={[{ label: 'Sign in', endElement: <AvatarIcon /> }]}
				/>
			</Box>
			<PageContent as="main">{children}</PageContent>
			<Box dark>
				<Footer background="bodyAlt">
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
				</Footer>
			</Box>
		</Fragment>
	);
}

const snippets = [
	{
		group: 'Boilerplate',
		name: 'Basic',
		code: reactElementToJSXString(
			<BoilerplatePageTemplate>
				<Prose>
					<h1>Page heading</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
						Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Integer scelerisque at
						ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum
						consequat, libero justo lacinia tortor, id varius tortor ante sit
						amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia.
						Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce
						lacus mi, pharetra molestie tortor eu, finibus lacinia libero.
					</p>
					<p>
						Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex
						convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo
						sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam
						libero nulla, cursus a turpis et, ullamcorper lobortis metus.
						Aliquam aliquam sodales malesuada. Phasellus sit amet libero ut
						nulla porta ornare. In elit lectus, iaculis et volutpat eget, tempor
						ornare eros. Interdum et malesuada fames ac ante ipsum primis in
						faucibus. Suspendisse sodales metus quis vulputate convallis. Morbi
						congue lectus eget massa finibus luctus. Pellentesque tempus dui vel
						auctor ullamcorper.
					</p>
				</Prose>
			</BoilerplatePageTemplate>
		),
	},
	{
		group: 'Boilerplate',
		name: 'Single-page form',
		code: reactElementToJSXString(
			<BoilerplatePageTemplate>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<Breadcrumbs
								links={[
									{ href: '/', label: 'Home' },
									{ href: '/category', label: 'Category 1' },
									{
										href: '/category/subcategory',
										label: 'Subcategory page',
									},
									{ label: 'Single-page form' },
								]}
							/>
							<Stack gap={1.5}>
								<Stack>
									<H1>Single-page form (multi-question) xxl/display (H1)</H1>
								</Stack>
								<Text as="p" fontSize="md" color="muted">
									Introductory paragraph providing context for this single page
									of the multi-step form. All questions on page must be related
									- md/default (P)
								</Text>
							</Stack>
							<Text fontSize="xs" color="muted">
								All fields are required unless marked optional.
							</Text>
							<Stack gap={3}>
								<Fieldset
									legend={<H2>Business details (H2)</H2>}
									hint="Supporting information for provide details subheading - sm/default"
								>
									<FormStack>
										<TextInput
											label="Australian Business Number (ABN)"
											id="abn"
											required
											inputMode="numeric"
											pattern="[0-9]*"
										/>
										<TextInput
											label="Australian Company Number (ACN)"
											id="acn"
											required
											inputMode="numeric"
											pattern="[0-9]*"
										/>
										<TextInput
											label="Business name"
											id="businessName"
											required
											maxWidth="xl"
										/>
									</FormStack>
								</Fieldset>
								<Fieldset
									legend={<H2>Provide entity details (H2)</H2>}
									hint="Supporting information for provide details subheading - sm/default"
								>
									<FormStack>
										<TextInput label="Entity name" id="entityName" required />
										<TextInput
											label="Entity number"
											id="entityNumber"
											required
											inputMode="numeric"
											pattern="[0-9]*"
										/>
									</FormStack>
								</Fieldset>
								<Fieldset legend={<H3>Street address (H3)</H3>}>
									<FormStack>
										<TextInput
											label="Street address"
											id="streetAddress"
											required
											maxWidth="xl"
										/>
										<TextInput
											label="Suburb, town or city"
											id="suburbTownCity"
											required
										/>
										<Select
											label="State or territory"
											id="state"
											placeholder="Select"
											options={[
												{ label: 'NSW', value: 'nsw' },
												{ label: 'QLD', value: 'qld' },
												{ label: 'ACT', value: 'act' },
												{ label: 'VIC', value: 'vic' },
												{ label: 'TAS', value: 'tas' },
												{ label: 'NT', value: 'nt' },
												{ label: 'SA', value: 'sa' },
												{ label: 'WA', value: 'wa' },
											]}
											required
											maxWidth="md"
										/>
										<TextInput
											label="Postcode"
											id="postcode"
											maxWidth="sm"
											inputMode="numeric"
											pattern="[0-9]*"
											required
										/>
									</FormStack>
								</Fieldset>
								<ButtonGroup>
									<Button type="submit">Submit form</Button>
									<Button type="button" variant="secondary">
										Cancel
									</Button>
								</ButtonGroup>
							</Stack>
						</Stack>
					</Column>
				</Columns>
			</BoilerplatePageTemplate>
		),
	},
	{
		group: 'Prose',
		name: 'Basic',
		code: reactElementToJSXString(
			<Prose>
				<h1>Page heading</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia
					elit. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend.
					Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia
					tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras
					a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis,
					molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu,
					finibus lacinia libero.
				</p>
				<p>
					Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex
					convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo
					sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam
					libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam
					aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta
					ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros.
					Interdum et malesuada fames ac ante ipsum primis in faucibus.
					Suspendisse sodales metus quis vulputate convallis. Morbi congue
					lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor
					ullamcorper.
				</p>
			</Prose>
		),
	},
	{
		group: 'Text',
		name: 'Regular',
		code: reactElementToJSXString(
			<Text as="p" fontWeight="normal">
				Normal text
			</Text>
		),
	},
	{
		group: 'Text',
		name: 'Bold',
		code: reactElementToJSXString(
			<Text as="p" fontWeight="bold">
				Bold text
			</Text>
		),
	},
	{
		group: 'Heading',
		name: 'H1',
		code: reactElementToJSXString(<H1>Heading 1</H1>),
	},
	{
		group: 'Heading',
		name: 'H2',
		code: reactElementToJSXString(<H2>Heading 2</H2>),
	},
	{
		group: 'Heading',
		name: 'H3',
		code: reactElementToJSXString(<H3>Heading 2</H3>),
	},
	{
		group: 'Heading',
		name: 'H4',
		code: reactElementToJSXString(<H4>Heading 4</H4>),
	},
	{
		group: 'Heading',
		name: 'H5',
		code: reactElementToJSXString(<H5>Heading 4</H5>),
	},
	{
		group: 'Heading',
		name: 'H6',
		code: reactElementToJSXString(<H6>Heading 4</H6>),
	},
	{
		group: 'LinkList',
		name: 'Basic',
		code: reactElementToJSXString(
			<LinkList
				links={[
					{ href: '#', label: 'Home' },
					{ href: '#', label: 'Establishments' },
					{ href: '#', label: 'Applications' },
				]}
			/>
		),
	},
	{
		group: 'Breadcrumbs',
		name: 'Basic',
		code: reactElementToJSXString(
			<Breadcrumbs
				links={[
					{ href: '#', label: 'Home' },
					{ href: '#', label: 'Establishments' },
					{ label: 'Applications' },
				]}
			/>
		),
	},
	{
		group: 'Footer',
		name: 'Basic',
		code: reactElementToJSXString(
			<Box dark>
				<Footer background="bodyAlt">
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
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; 2022 Department of Agriculture, Fisheries and Forestry
					</Text>
				</Footer>
			</Box>
		),
	},
	{
		group: 'Footer',
		name: 'Complex',
		code: reactElementToJSXString(
			<Box dark>
				<Footer background="bodyAlt">
					<nav aria-label="footer">
						<Columns>
							<Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
								<Stack gap={0.5}>
									<Heading as="h2" type="h3">
										Section
									</Heading>
									<LinkList
										links={[
											{ href: '#', label: 'Link 1' },
											{ href: '#', label: 'Link 2' },
											{ href: '#', label: 'Link 3' },
										]}
									/>
								</Stack>
							</Column>
							<Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
								<Stack gap={0.5}>
									<Heading as="h2" type="h3">
										Section
									</Heading>
									<LinkList
										links={[
											{ href: '#', label: 'Link 1' },
											{ href: '#', label: 'Link 2' },
											{ href: '#', label: 'Link 3' },
										]}
									/>
								</Stack>
							</Column>
							<Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
								<Stack gap={0.5}>
									<Heading as="h2" type="h3">
										Section
									</Heading>
									<LinkList
										links={[
											{ href: '#', label: 'Link 1' },
											{ href: '#', label: 'Link 2' },
											{ href: '#', label: 'Link 3' },
										]}
									/>
								</Stack>
							</Column>
							<Column columnSpan={{ xs: 12, sm: 6, lg: 3 }}>
								<Stack gap={0.5}>
									<Heading as="h2" type="h3">
										Section
									</Heading>
									<LinkList
										links={[
											{ href: '#', label: 'Link 1' },
											{ href: '#', label: 'Link 2' },
											{ href: '#', label: 'Link 3' },
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
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; 2022 Department of Agriculture, Fisheries and Forestry
					</Text>
				</Footer>
			</Box>
		),
	},
	{
		group: 'SideNav',
		name: 'Basic',
		code: reactElementToJSXString(
			<SideNav
				activePath="#welcome"
				title="SideNav"
				collapseTitle="In this section"
				titleLink="#"
				items={[
					{
						href: '#welcome',
						label: 'Welcome',
					},
					{
						href: '#one',
						label: 'Item',
						items: [
							{
								href: '#two',
								label: 'Sub-item',
							},
						],
					},
					{ href: '#three', label: 'Item' },
					{
						href: '#four',
						label: 'Item',
						items: [
							{
								href: '#five',
								label: 'Sub-item',
								items: [
									{
										href: '#six',
										label: 'Sub-sub-item',
									},
									{
										href: '#seven',
										label: 'Sub-sub-item',
									},
								],
							},
							{
								href: '#eight',
								label: 'Sub-item',
							},
						],
					},
				]}
			/>
		),
	},
	{
		group: 'Button',
		name: 'ButtonGroup',
		code: reactElementToJSXString(
			<ButtonGroup>
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="tertiary">Tertiary</Button>
			</ButtonGroup>
		),
	},
	{
		group: 'Button',
		name: 'Primary',
		code: reactElementToJSXString(
			<Button type="submit" onClick={console.log}>
				Submit
			</Button>
		),
	},
	{
		group: 'Button',
		name: 'Secondary',
		code: reactElementToJSXString(<Button variant="secondary">Save</Button>),
	},
	{
		group: 'Button',
		name: 'Tertiary',
		code: reactElementToJSXString(<Button variant="tertiary">Cancel</Button>),
	},
	{
		group: 'Button',
		name: 'Text',
		code: reactElementToJSXString(<Button variant="text">Cancel</Button>),
	},
	{
		group: 'Columns',
		name: 'Basic',
		code: reactElementToJSXString(
			<Columns cols={2}>
				<Box background="shadeAlt" padding={1} />
				<Box background="shadeAlt" padding={1} />
			</Columns>
		),
	},
	{
		group: 'Callout',
		name: 'Basic',
		code: reactElementToJSXString(
			<Callout>
				<CalloutTitle as="h3">Callout heading</CalloutTitle>
				<Text>Description of the callout.</Text>
			</Callout>
		),
	},
	{
		group: 'TextInput',
		name: 'Basic',
		code: reactElementToJSXString(<TextInput label="Name" />),
	},
	{
		group: 'TextArea',
		name: 'Basic',
		code: reactElementToJSXString(<Textarea label="Message" />),
	},
	{
		group: 'Select',
		name: 'Basic',
		code: reactElementToJSXString(
			<Select
				label="What option?"
				placeholder="Please select"
				options={[
					{ value: 'a', label: 'Option A' },
					{ value: 'b', label: 'Option B' },
					{ value: 'c', label: 'Option C' },
				]}
			/>
		),
	},
	{
		group: 'Fieldset',
		name: 'Basic',
		code: reactElementToJSXString(
			<Fieldset legend="What is your address?">
				<FormStack>
					<TextInput label="Street and number" required maxWidth="xl" />
					<TextInput label="Suburb" required maxWidth="xl" />
					<TextInput label="Country" required maxWidth="xl" />
					<TextInput label="Postcode" required maxWidth="sm" />
				</FormStack>
			</Fieldset>
		),
	},
	{
		group: 'Accordion',
		name: 'Basic',
		code: reactElementToJSXString(
			<Accordion>
				<AccordionItem title="Accordion">
					<AccordionItemContent>
						<Text as="p">This is some text inside an Accordion</Text>
					</AccordionItemContent>
				</AccordionItem>
			</Accordion>
		),
	},
	{
		group: 'ProgressIndicator',
		name: 'Basic',
		code: reactElementToJSXString(
			<ProgressIndicator
				items={[
					{ href: '#', label: 'Introduction', status: 'doing' },
					{ href: '#', label: 'Business Contacts', status: 'todo' },
					{ href: '#', label: 'Case Studies', status: 'done' },
				]}
			/>
		),
	},
	{
		group: 'Checkbox',
		name: 'Basic',
		code: reactElementToJSXString(<Checkbox checked={false}>Label</Checkbox>),
	},
	{
		group: 'Radio',
		name: 'Basic',
		code: reactElementToJSXString(
			<ControlGroup>
				<Radio checked={false}>Phone</Radio>
				<Radio checked={false}>Tablet</Radio>
				<Radio checked={true}>Laptop</Radio>
			</ControlGroup>
		),
	},
	{
		group: 'Switch',
		name: 'Basic',
		code: reactElementToJSXString(
			<Switch
				checked={false}
				onChange={console.log}
				label="Show establishments"
			/>
		),
	},
	{
		group: 'Searchbox',
		name: 'Basic',
		code: reactElementToJSXString(
			<SearchBox onSubmit={console.log}>
				<SearchBoxInput label="Search this website" />
				<SearchBoxButton>Search</SearchBoxButton>
			</SearchBox>
		),
	},
	{
		group: 'SkipLinks',
		name: 'Basic',
		code: reactElementToJSXString(
			<SkipLinks
				links={[
					{ href: '#main-content', label: 'Skip to main content' },
					{ href: '#main-nav', label: 'Skip to main navigation' },
				]}
			/>
		),
	},
	{
		group: 'InpageNav',
		name: 'Basic',
		code: reactElementToJSXString(
			<InpageNav
				title="On this page"
				links={[
					{ href: '#section-1', label: 'Section 1' },
					{ href: '#section-2', label: 'Section 2' },
				]}
			/>
		),
	},
	{
		group: 'DirectionLink',
		name: 'Basic',
		code: reactElementToJSXString(
			<DirectionLink href="#" direction="left">
				Back
			</DirectionLink>
		),
	},
	{
		group: 'CallToAction',
		name: 'Link',
		code: reactElementToJSXString(
			<CallToActionLink href="#">Sign up</CallToActionLink>
		),
	},
	{
		group: 'CallToAction',
		name: 'Button',
		code: reactElementToJSXString(
			<CallToActionButton onClick={console.log}>Sign up</CallToActionButton>
		),
	},
	{
		group: 'Tags',
		name: 'Basic',
		code: reactElementToJSXString(
			<Tags
				heading={
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				}
				items={[
					{ href: '#', label: 'Foo' },
					{ href: '#', label: 'Bar' },
					{ href: '#', label: 'Baz' },
				]}
			/>
		),
	},
	{
		group: 'Tags',
		name: 'Removable',
		code: reactElementToJSXString(
			<Tags
				heading={
					<Text as="h2" fontWeight="bold">
						Tags:
					</Text>
				}
				items={[
					{ href: '#', label: 'Foo', onRemove: console.log },
					{ href: '#', label: 'Bar', onRemove: console.log },
					{ href: '#', label: 'Baz', onRemove: console.log },
				]}
			/>
		),
	},
	{
		group: 'Tag',
		name: 'Basic',
		code: reactElementToJSXString(<Tag>Foo</Tag>),
	},
	{
		group: 'Form',
		name: 'Sign in',
		code: reactElementToJSXString(
			<form>
				<FormStack>
					<TextInput label="Email" type="email" maxWidth="xl" />
					<TextInput label="Password" type="password" maxWidth="xl" />
					<ButtonGroup>
						<Button type="submit">Submit</Button>
						<Button type="button" variant="secondary">
							Cancel
						</Button>
					</ButtonGroup>
				</FormStack>
			</form>
		),
	},
	{
		group: 'FileUpload',
		name: 'Basic',
		code: reactElementToJSXString(
			<FileUpload label="Drivers license" value={[]} onChange={console.log} />
		),
	},
	{
		group: 'TaskList',
		name: 'Basic',
		code: reactElementToJSXString(
			<TaskList
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
			/>
		),
	},
	{
		group: 'PageAlert',
		name: 'Info',
		code: reactElementToJSXString(
			<PageAlert tone="info" title="Notice">
				<Prose>
					<p>
						All vacancies close on the advertised closing date unless otherwise
						specified.
					</p>
				</Prose>
			</PageAlert>
		),
	},
	{
		group: 'PageAlert',
		name: 'Success',
		code: reactElementToJSXString(
			<PageAlert tone="success" title="Submission successful">
				<Prose>
					<p>Your application has been successfully submitted.</p>
				</Prose>
			</PageAlert>
		),
	},
	{
		group: 'PageAlert',
		name: 'Error',
		code: reactElementToJSXString(
			<PageAlert tone="error" title="There is a problem">
				<Prose>
					<ul>
						<li>
							<a href="#">Full name must not be empty</a>
						</li>
						<li>
							<a href="#">Email must not be empty</a>
						</li>
						<li>
							<a href="#">Description must not be empty</a>
						</li>
					</ul>
				</Prose>
			</PageAlert>
		),
	},
	{
		group: 'PageAlert',
		name: 'Warning',
		code: reactElementToJSXString(
			<PageAlert tone="warning" title="Browser out of date">
				<Prose>
					<p>Your web browser is out of date.</p>
				</Prose>
			</PageAlert>
		),
	},
	{
		group: 'Table',
		name: 'Basic',
		code: reactElementToJSXString(
			<TableWrapper>
				<Table>
					<TableCaption>
						Population of Australian states and territories, December 2015
					</TableCaption>
					<TableHead>
						<tr>
							<TableHeader width="50%" scope="col">
								Location
							</TableHeader>
							<TableHeader textAlign="right" scope="col">
								Population
							</TableHeader>
							<TableHeader textAlign="right" scope="col">
								Change over previous year %
							</TableHeader>
							<TableHeader textAlign="right" scope="col">
								Change over previous decade %
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						<tr>
							<TableCell>New South Wales</TableCell>
							<TableCell textAlign="right">7,670,700</TableCell>
							<TableCell textAlign="right">3.1%</TableCell>
							<TableCell textAlign="right">12.9%</TableCell>
						</tr>
						<tr>
							<TableCell>Victoria</TableCell>
							<TableCell textAlign="right">5,996,400</TableCell>
							<TableCell textAlign="right">2.5%</TableCell>
							<TableCell textAlign="right">9.3%</TableCell>
						</tr>
						<tr>
							<TableCell>Queensland</TableCell>
							<TableCell textAlign="right">4,808,800</TableCell>
							<TableCell textAlign="right">1.7%</TableCell>
							<TableCell textAlign="right">13.3%</TableCell>
						</tr>
						<tr>
							<TableCell>Western Australia</TableCell>
							<TableCell textAlign="right">2,603,900</TableCell>
							<TableCell textAlign="right">2.3%</TableCell>
							<TableCell textAlign="right">11.6%</TableCell>
						</tr>
						<tr>
							<TableCell>South Australia</TableCell>
							<TableCell textAlign="right">1,702,800</TableCell>
							<TableCell textAlign="right">2.0%</TableCell>
							<TableCell textAlign="right">6.8%</TableCell>
						</tr>
						<tr>
							<TableCell>Tasmania</TableCell>
							<TableCell textAlign="right">517,400</TableCell>
							<TableCell textAlign="right">4%</TableCell>
							<TableCell textAlign="right">5.3%</TableCell>
						</tr>
						<tr>
							<TableCell>Northern Territory</TableCell>
							<TableCell textAlign="right">244,400</TableCell>
							<TableCell textAlign="right">1.2%</TableCell>
							<TableCell textAlign="right">4.5%</TableCell>
						</tr>
						<tr>
							<TableCell>Australian Capital Territory</TableCell>
							<TableCell textAlign="right">393,000</TableCell>
							<TableCell textAlign="right">2.4%</TableCell>
							<TableCell textAlign="right">9.6%</TableCell>
						</tr>
					</TableBody>
				</Table>
			</TableWrapper>
		),
	},
	{
		group: 'DatePicker',
		name: 'Basic',
		code: reactElementToJSXString(
			<DatePicker
				label="Select date"
				value={new Date()}
				onChange={console.log}
			/>
		),
	},
	{
		group: 'DateRangePicker',
		name: 'Basic',
		code: reactElementToJSXString(
			<DateRangePicker
				value={{ from: new Date('2000-01-03'), to: new Date('2000-01-07') }}
				onChange={console.log}
			/>
		),
	},
	{
		group: 'LoadingDots',
		name: 'Basic',
		code: reactElementToJSXString(<LoadingDots />),
	},
	{
		group: 'LoadingBlanket',
		name: 'Basic',
		code: reactElementToJSXString(
			<Box
				background="body"
				height="300px"
				width="100%"
				padding={1}
				border
				rounded
				style={{ position: 'relative' }}
			>
				<LoadingBlanket label="Component loading state" />
			</Box>
		),
	},
	{
		group: 'HeroBanner',
		name: 'Basic',
		code: reactElementToJSXString(
			<HeroBanner
				image={
					<img
						src="/img/placeholder/hero-banner.jpeg"
						role="presentation"
						alt=""
					/>
				}
			>
				<HeroBannerTitleContainer>
					<HeroBannerTitle>
						Website hero banner title - xxxl/display (H1)
					</HeroBannerTitle>
					<HeroBannerSubtitle>
						Hero banner paragraph text (P)
					</HeroBannerSubtitle>
				</HeroBannerTitleContainer>
				<SearchBox onSubmit={console.log}>
					<SearchBoxInput label="Search this website" />
					<SearchBoxButton iconOnly={{ xs: true, md: false }}>
						Search
					</SearchBoxButton>
				</SearchBox>
			</HeroBanner>
		),
	},
	{
		group: 'HeroCategoryBanner',
		name: 'Basic',
		code: reactElementToJSXString(
			<HeroCategoryBanner
				image={
					<img
						src="/img/placeholder/hero-banner.jpeg"
						role="presentation"
						alt=""
					/>
				}
			>
				<HeroCategoryBannerTitle>
					Website hero banner title - xxl/display (H1)
				</HeroCategoryBannerTitle>
				<HeroCategoryBannerSubtitle>
					Hero banner sub title (P).
				</HeroCategoryBannerSubtitle>
			</HeroCategoryBanner>
		),
	},
	{
		group: 'HeroSubcategoryBanner',
		name: 'Basic',
		code: reactElementToJSXString(
			<HeroSubcategoryBanner>
				<Breadcrumbs
					links={[
						{ href: '#', label: 'Section 1' },
						{ href: '#', label: 'Category page' },
						{ label: 'Subcategory page' },
					]}
				/>
				<HeroSubcategoryBannerTitle>
					Subcategory banner title - xxl/display (H1)
				</HeroSubcategoryBannerTitle>
			</HeroSubcategoryBanner>
		),
	},
	{
		group: 'SubNav',
		name: 'Basic',
		code: reactElementToJSXString(
			<SubNav
				activePath="#code"
				links={[
					{ href: '#usage', label: 'Usage' },
					{ href: '#code', label: 'Code' },
					{ href: '#content', label: 'Content' },
					{ href: '#accessibility', label: 'Accessibility' },
				]}
			/>
		),
	},
	{
		group: 'TextLink',
		name: 'Basic',
		code: reactElementToJSXString(<TextLink href="#">Internal link</TextLink>),
	},
	{
		group: 'TextLinkExternal',
		name: 'Basic',
		code: reactElementToJSXString(
			<TextLinkExternal href="https://design-system.agriculture.gov.au">
				External link
			</TextLinkExternal>
		),
	},

	{
		group: 'Pagination',
		name: 'Basic',
		code: reactElementToJSXString(
			<Pagination currentPage={5} totalPages={10} generateHref={() => '#'} />
		),
	},
	{
		group: 'StatusBadge',
		name: 'Success',
		code: reactElementToJSXString(
			<StatusBadge tone="success" label="Accepted" />
		),
	},
	{
		group: 'StatusBadge',
		name: 'Info',
		code: reactElementToJSXString(<StatusBadge tone="info" label="Pending" />),
	},
	{
		group: 'StatusBadge',
		name: 'Warning',
		code: reactElementToJSXString(<StatusBadge tone="warning" label="Alert" />),
	},
	{
		group: 'StatusBadge',
		name: 'Error',
		code: reactElementToJSXString(
			<StatusBadge tone="error" label="Rejected" />
		),
	},
	{
		group: 'StatusBadge',
		name: 'Neutral',
		code: reactElementToJSXString(<StatusBadge tone="neutral" label="Draft" />),
	},
	{
		group: 'NotificationBadge',
		name: 'Action',
		code: reactElementToJSXString(
			<NotificationBadge tone="action" value={16} max={99} />
		),
	},
	{
		group: 'NotificationBadge',
		name: 'Neutral',
		code: reactElementToJSXString(
			<NotificationBadge tone="neutral" value={16} max={99} />
		),
	},
	{
		group: 'IndicatorDot',
		name: 'Basic',
		code: reactElementToJSXString(<IndicatorDot />),
	},
	{
		group: 'Skeleton',
		name: 'SkeletonText',
		code: reactElementToJSXString(
			<SkeletonText fontSize="sm" lineHeight="default" />
		),
	},
	{
		group: 'Skeleton',
		name: 'SkeletonHeading',
		code: reactElementToJSXString(<SkeletonHeading type="h2" />),
	},
	{
		group: 'Skeleton',
		name: 'SkeletonBox',
		code: reactElementToJSXString(<SkeletonBox width="100px" height="100px" />),
	},
	{
		group: 'Card',
		name: 'Basic',
		code: reactElementToJSXString(
			<Card shadow clickable>
				<CardInner>
					<Stack gap={1}>
						<H3>
							<CardLink href="#">Card heading</CardLink>
						</H3>
						<Text as="p">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
							voluptat
						</Text>
					</Stack>
				</CardInner>
			</Card>
		),
	},
	{
		group: 'Autocomplete',
		name: 'Autocomplete',
		code: reactElementToJSXString(
			<Autocomplete
				label="Find your city"
				hint="Start typing to see results"
				loadOptions={async function loadOptions() {
					return [
						{ value: 'a', label: 'Option A' },
						{ value: 'b', label: 'Option B' },
						{ value: 'c', label: 'Option C' },
					];
				}}
			/>
		),
	},
	{
		group: 'Combobox',
		name: 'Combobox',
		code: reactElementToJSXString(
			<Combobox
				label="Select country"
				options={[
					{ value: 'a', label: 'Option A' },
					{ value: 'b', label: 'Option B' },
					{ value: 'c', label: 'Option C' },
				]}
			/>
		),
	},
	{
		group: 'Details',
		name: 'Basic',
		code: reactElementToJSXString(
			<Details label="Details">
				<Text as="p">
					This is a small paragraph of text that is supplementary to the main
					page content.
				</Text>
			</Details>
		),
	},
	{
		group: 'SummaryList',
		name: 'Basic',
		code: reactElementToJSXString(
			<Stack gap={1.5}>
				<SummaryList>
					<SummaryListItem>
						<SummaryListItemTerm>First name</SummaryListItemTerm>
						<SummaryListItemDescription>Will</SummaryListItemDescription>
					</SummaryListItem>
					<SummaryListItem>
						<SummaryListItemTerm>Last name</SummaryListItemTerm>
						<SummaryListItemDescription>Power</SummaryListItemDescription>
					</SummaryListItem>
					<SummaryListItem>
						<SummaryListItemTerm>Contact information</SummaryListItemTerm>
						<SummaryListItemDescription>
							+61 9912 3456
							<br />
							will.power@example.com
						</SummaryListItemDescription>
					</SummaryListItem>
					<SummaryListItem>
						<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
						<SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
					</SummaryListItem>
				</SummaryList>
				<TextLink href="#">Change all</TextLink>
			</Stack>
		),
	},
	{
		group: 'SummaryList',
		name: 'With actions',
		code: reactElementToJSXString(
			<SummaryList>
				<SummaryListItem>
					<SummaryListItemTerm>First name</SummaryListItemTerm>
					<SummaryListItemDescription>Will</SummaryListItemDescription>
					<SummaryListItemAction>
						<TextLink href="#">Change</TextLink>
					</SummaryListItemAction>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Last name</SummaryListItemTerm>
					<SummaryListItemDescription>Power</SummaryListItemDescription>
					<SummaryListItemAction>
						<TextLink href="#">Change</TextLink>
					</SummaryListItemAction>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Contact information</SummaryListItemTerm>
					<SummaryListItemDescription>
						+61 9912 3456
						<br />
						will.power@example.com
					</SummaryListItemDescription>
					<SummaryListItemAction>
						<TextLink href="#">Change</TextLink>
					</SummaryListItemAction>
				</SummaryListItem>
				<SummaryListItem>
					<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
					<SummaryListItemDescription>09/06/1995</SummaryListItemDescription>
					<SummaryListItemAction>
						<TextLink href="#">Change</TextLink>
					</SummaryListItemAction>
				</SummaryListItem>
			</SummaryList>
		),
	},
	{
		group: 'SearchInput',
		name: 'Basic',
		code: reactElementToJSXString(<SearchInput label="Search" />),
	},
	{
		group: 'GlobalAlert',
		name: 'Basic',
		code: reactElementToJSXString(
			<GlobalAlert title="Alert title">
				<Text as="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.nulla.
				</Text>
			</GlobalAlert>
		),
	},
	{
		group: 'FileInput',
		name: 'Basic',
		code: reactElementToJSXString(<FileInput label="Upload a file" />),
	},
	{
		group: 'Avatar',
		name: 'Basic',
		code: reactElementToJSXString(<Avatar name="William Mead" />),
	},
];

export default snippets;
