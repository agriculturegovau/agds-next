import { Meta } from '@storybook/react';
import { Fragment } from 'react';
import { Autocomplete } from '@ag.ds-next/react/autocomplete';
import { Avatar } from '@ag.ds-next/react/avatar';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Callout } from '@ag.ds-next/react/callout';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Card, CardInner } from '@ag.ds-next/react/card';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { Combobox } from '@ag.ds-next/react/combobox';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { Details } from '@ag.ds-next/react/details';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Divider } from '@ag.ds-next/react/divider';
import { FileInput } from '@ag.ds-next/react/file-input';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { Flex } from '@ag.ds-next/react/flex';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { GlobalAlert } from '@ag.ds-next/react/global-alert';
import { Heading, H1, H2 } from '@ag.ds-next/react/heading';
import { IndicatorDot } from '@ag.ds-next/react/indicator-dot';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { PageContent } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { Radio } from '@ag.ds-next/react/radio';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Select } from '@ag.ds-next/react/select';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { SkeletonHeading, SkeletonText } from '@ag.ds-next/react/skeleton';
import { Stack } from '@ag.ds-next/react/stack';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import { SubNav } from '@ag.ds-next/react/sub-nav';
import { Switch } from '@ag.ds-next/react/switch';
import { Text } from '@ag.ds-next/react/text';
import { Textarea } from '@ag.ds-next/react/textarea';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/react/accordion';
import {
	SearchBox,
	SearchBoxButton,
	SearchBoxInput,
} from '@ag.ds-next/react/search-box';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/react/hero-banner';
import {
	Table,
	TableCaption,
	TableCell,
	TableHeader,
	TableHead,
	TableBody,
} from '@ag.ds-next/react/table';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import {
	TabButton,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@ag.ds-next/react/tabs';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuPanel,
	DropdownMenuItem,
	DropdownMenuDivider,
} from '@ag.ds-next/react/dropdown-menu';
import { Drawer } from '@ag.ds-next/react/drawer';
import {
	COUNTRY_OPTIONS,
	Modal,
	useTernaryState,
} from '../../docs/components/designSystemComponents';
import { SiteLayout } from '../../docs/content/templates/__shared/SiteLayout';
import { AppLayout } from '../../docs/content/templates/__shared/AppLayout';

const meta: Meta = {
	title: 'Testing/Kitchen sink',
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		background: 'body',
	},
	argTypes: {
		background: {
			options: ['body', 'bodyAlt'],
			control: { type: 'radio' },
		},
	},
};

export default meta;

const sideNavItems = [
	{
		href: '#one',
		label: 'Do you need to lodge a tax return?',
	},
	{
		href: '#two',
		label: 'Lodge online',
		items: [
			{
				href: '#three',
				label: 'Pre-filling your online tax return',
			},
		],
	},
	{ href: '#four', label: "What's new for individuals" },
	{ href: '#five', label: 'Why you may receive a tax bill' },
];

const backgroundMapper = {
	body: {
		page: 'body',
		shade: 'shade',
		opposite: 'bodyAlt',
	},
	bodyAlt: {
		page: 'bodyAlt',
		shade: 'shadeAlt',
		opposite: 'body',
	},
} as const;

type KitchenSinkProps = { background: 'body' | 'bodyAlt' };

function KitchenSink({ background }: KitchenSinkProps) {
	const { page, shade, opposite } = backgroundMapper[background];
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);
	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	return (
		<Fragment>
			<HeroBanner background={opposite}>
				<HeroBannerTitleContainer>
					<HeroBannerTitle>
						Website hero banner title - xxxl/display (H1)
					</HeroBannerTitle>
					<HeroBannerSubtitle>
						Short hero banner sentence - md/default (P)
					</HeroBannerSubtitle>
				</HeroBannerTitleContainer>
				<SearchBox onSubmit={() => undefined}>
					<SearchBoxInput label="Search this website" />
					<SearchBoxButton iconOnly={{ xs: true, md: false }}>
						Search
					</SearchBoxButton>
				</SearchBox>
			</HeroBanner>
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 4 }}>
						<Stack gap={2}>
							<SideNav
								background={page}
								title="Lodging your tax return"
								titleLink="#"
								collapseTitle="In this section"
								items={sideNavItems}
								activePath="#in-detail/record-keeping/incorrect-amounts"
							/>
							<ProgressIndicator
								background={page}
								items={[
									{ href: '#', label: 'Introduction', status: 'doing' },
									{ href: '#', label: 'Business Contacts', status: 'todo' },
									{ href: '#', label: 'Case Studies', status: 'done' },
								]}
							/>
						</Stack>
					</Column>

					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={2}>
							<SubNav
								background={page}
								activePath="#usage"
								links={[
									{ href: '#usage', label: 'Usage' },
									{ href: '#code', label: 'Code' },
									{ href: '#content', label: 'Content' },
									{ href: '#accessibility', label: 'Accessibility' },
								]}
							/>

							<Stack gap={1}>
								<PageAlert tone="info" title="Notice">
									<Text as="p">
										All vacancies close on the advertised closing date unless
										otherwise specified.
									</Text>
								</PageAlert>

								<PageAlert tone="success" title="Submission successful">
									<Text as="p">
										Your application has been successfully submitted.
									</Text>
								</PageAlert>

								<PageAlert tone="error" title="There is a problem">
									<UnorderedList>
										<ListItem>
											<TextLink href="#email">Name is required</TextLink>
										</ListItem>
										<ListItem>
											<TextLink href="#email">Email is required</TextLink>
										</ListItem>
									</UnorderedList>
								</PageAlert>

								<PageAlert tone="warning" title="Browser out of date">
									<Text as="p">Your web browser is out of date.</Text>
								</PageAlert>
							</Stack>

							<Breadcrumbs
								links={[
									{ href: '#', label: 'Home' },
									{ href: '#', label: 'Establishments' },
									{ label: 'Applications' },
								]}
							/>

							<InpageNav
								title="On this page"
								links={[
									{ href: '#section-1', label: 'Section 1' },
									{ href: '#section-2', label: 'Section 2' },
									{ href: '#section-3', label: 'Section 3' },
									{ href: '#section-4', label: 'Section 4' },
									{ href: '#section-5', label: 'Section 5' },
								]}
							/>
							<H1>Kitchen sink</H1>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
								Quisque ac lacinia elit. Orci varius natoque penatibus et magnis
								dis parturient montes, nascetur ridiculus mus. Integer
								scelerisque at ligula tempor eleifend. Vestibulum volutpat,
								dolor eu rutrum consequat, libero justo lacinia tortor, id
								varius tortor ante sit amet nisl. Aenean at dui diam. Cras a
								ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui
								quis, molestie lacinia dolor. Fusce lacus mi, pharetra molestie
								tortor eu, finibus lacinia libero.
							</Text>

							<Callout title="Callout heading" background={shade}>
								<Text as="p">Description of the callout.</Text>
							</Callout>

							<Accordion>
								<AccordionItem title="Accordion One" background={page}>
									<AccordionItemContent>
										<Text as="p">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Pellentesque at arcu eleifend, varius enim non, eleifend
											nibh. Quisque ac lacinia elit. Orci varius natoque
											penatibus et magnis dis parturient montes, nascetur
											ridiculus mus. Integer scelerisque at ligula tempor
											eleifend. Vestibulum volutpat, dolor eu rutrum consequat,
											libero justo lacinia tortor, id varius tortor ante sit
											amet nisl. Aenean at dui diam. Cras a ligula a ante
											aliquam lacinia. Ut dolor quam, gravida eu dui quis,
											molestie lacinia dolor. Fusce lacus mi, pharetra molestie
											tortor eu, finibus lacinia libero.
										</Text>
									</AccordionItemContent>
								</AccordionItem>
								<AccordionItem title="Accordion Two" background={page}>
									<AccordionItemContent>
										<Text as="p">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Pellentesque at arcu eleifend, varius enim non, eleifend
											nibh. Quisque ac lacinia elit. Orci varius natoque
											penatibus et magnis dis parturient montes, nascetur
											ridiculus mus. Integer scelerisque at ligula tempor
											eleifend. Vestibulum volutpat, dolor eu rutrum consequat,
											libero justo lacinia tortor, id varius tortor ante sit
											amet nisl. Aenean at dui diam. Cras a ligula a ante
											aliquam lacinia. Ut dolor quam, gravida eu dui quis,
											molestie lacinia dolor. Fusce lacus mi, pharetra molestie
											tortor eu, finibus lacinia libero.
										</Text>
									</AccordionItemContent>
								</AccordionItem>
							</Accordion>

							<Details label="Details">
								<Text as="p">
									This is a small paragraph of text that is supplementary to the
									main page content.
								</Text>
							</Details>

							<Columns cols={2}>
								<Card background="body">
									<CardInner>
										<Stack gap={1}>
											<Heading type="h2">Card with body background</Heading>
											<Text as="p">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Cras non finibus leo, non rhoncus neque. Nunc et dui
												cursus, euismod felis eget, tristique augue. Praesent
												consequat mollis lorem id efficitur.
											</Text>
										</Stack>
									</CardInner>
								</Card>
								<Card background="bodyAlt">
									<CardInner>
										<Stack gap={1}>
											<Heading type="h2">Card with bodyAlt background</Heading>
											<Text as="p">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Cras non finibus leo, non rhoncus neque. Nunc et dui
												cursus, euismod felis eget, tristique augue. Praesent
												consequat mollis lorem id efficitur.
											</Text>
										</Stack>
									</CardInner>
								</Card>
								<Card>
									<CardInner>
										<Stack gap={1}>
											<SkeletonHeading type="h3" width="50%" />
											<SkeletonText fontSize="sm" width="25%" />
										</Stack>
									</CardInner>
								</Card>
								<Card background="bodyAlt">
									<CardInner>
										<Stack gap={1}>
											<SkeletonHeading type="h3" width="50%" />
											<SkeletonText fontSize="sm" width="25%" />
										</Stack>
									</CardInner>
								</Card>
							</Columns>

							<Tabs>
								<TabList>
									<TabButton>Tab 1</TabButton>
									<TabButton>Tab 2</TabButton>
									<TabButton>Tab 3</TabButton>
								</TabList>
								<TabPanels>
									<TabPanel>Tab panel 1.</TabPanel>
									<TabPanel>Tab panel 2.</TabPanel>
									<TabPanel>Tab panel 3.</TabPanel>
								</TabPanels>
							</Tabs>

							<H2>Modals</H2>
							<div>
								<Button variant="secondary" onClick={openModal}>
									Open Modal
								</Button>
							</div>
							<div>
								<Button variant="secondary" onClick={openDrawer}>
									Open Drawer
								</Button>
							</div>

							<H2>Forms</H2>
							<FormStack>
								<SearchInput label="Search" />

								<TextInput label="Name" />

								<TextInput
									label="Email"
									invalid
									message="An email address is required"
									id="email"
								/>
								<DatePicker
									label="Birth date"
									value={new Date()}
									onChange={() => undefined}
								/>
								<Select
									label="Example"
									placeholder="Please select"
									options={[
										{ value: 'a', label: 'Option A' },
										{ value: 'b', label: 'Option B' },
										{ value: 'c', label: 'Option C' },
									]}
								/>
								<FileInput label="Drivers licence" />
								<FileUpload
									label="Drivers licence"
									onChange={() => undefined}
									value={[]}
								/>
								<Textarea label="Message" />
								<ControlGroup label="Device">
									<Radio checked={false}>Phone</Radio>
									<Radio checked={false}>Tablet</Radio>
									<Radio checked={true}>Laptop</Radio>
								</ControlGroup>
								<Checkbox checked={true}>Label</Checkbox>
								<Autocomplete
									label="Find your country"
									hint="Start typing to see results"
									loadOptions={async function loadOptions() {
										return COUNTRY_OPTIONS;
									}}
								/>
								<Combobox
									label="Select country"
									hint="Start typing to see results"
									options={COUNTRY_OPTIONS}
								/>
								<Switch
									label="Show establishments"
									checked={true}
									onChange={console.log}
								/>

								<ButtonGroup>
									<Button size="md">Primary</Button>
									<Button size="md" variant="secondary">
										Secondary
									</Button>
									<Button size="md" variant="tertiary">
										Tertiary
									</Button>
								</ButtonGroup>
							</FormStack>

							<Divider />

							<DirectionLink direction="left" href="#">
								Back
							</DirectionLink>

							<CallToActionLink href="#">Call to action</CallToActionLink>

							<div>
								<DropdownMenu>
									<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
									<DropdownMenuPanel>
										<DropdownMenuItem>Profile</DropdownMenuItem>
										<DropdownMenuItem>Messages</DropdownMenuItem>
										<DropdownMenuItem>Account settings</DropdownMenuItem>
										<DropdownMenuDivider />
										<DropdownMenuItem>Sign out</DropdownMenuItem>
									</DropdownMenuPanel>
								</DropdownMenu>
							</div>

							<Flex gap={0.5} flexWrap="wrap">
								<StatusBadge tone="info" label="In progress" />
								<StatusBadge tone="success" label="Resolved" />
								<StatusBadge tone="error" label="Rejected" />
								<StatusBadge tone="warning" label="Attention" />
								<StatusBadge tone="neutral" label="Draft" />
							</Flex>

							<Flex gap={0.5} flexWrap="wrap">
								<StatusBadge weight="subtle" tone="info" label="In progress" />
								<StatusBadge weight="subtle" tone="success" label="Resolved" />
								<StatusBadge weight="subtle" tone="error" label="Rejected" />
								<StatusBadge weight="subtle" tone="warning" label="Attention" />
								<StatusBadge weight="subtle" tone="neutral" label="Draft" />
							</Flex>

							<Flex gap={0.5}>
								<NotificationBadge tone="neutral" value={16} />
								<NotificationBadge tone="action" value={8} />
							</Flex>

							<IndicatorDot />

							<Flex gap={0.5}>
								<Avatar name="William Mead" tone="neutral" />
								<Avatar name="William Mead" tone="action" />
							</Flex>

							<Stack gap={1.5}>
								<SummaryList>
									<SummaryListItem>
										<SummaryListItemTerm>First name</SummaryListItemTerm>
										<SummaryListItemDescription>
											Will
										</SummaryListItemDescription>
									</SummaryListItem>
									<SummaryListItem>
										<SummaryListItemTerm>Last name</SummaryListItemTerm>
										<SummaryListItemDescription>
											Power
										</SummaryListItemDescription>
									</SummaryListItem>
									<SummaryListItem>
										<SummaryListItemTerm>
											Contact information
										</SummaryListItemTerm>
										<SummaryListItemDescription>
											+61 9912 3456
											<br />
											will.power@example.com
										</SummaryListItemDescription>
									</SummaryListItem>
									<SummaryListItem>
										<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
										<SummaryListItemDescription>
											09/06/1995
										</SummaryListItemDescription>
									</SummaryListItem>
								</SummaryList>
								<TextLink href="#">Change all</TextLink>
							</Stack>

							<Table striped>
								<TableCaption>
									Population of Australian states and territories, December 2015
								</TableCaption>
								<TableHead>
									<tr>
										<TableHeader scope="col">Location</TableHeader>
										<TableHeader textAlign="right" scope="col">
											Population
										</TableHeader>
									</tr>
								</TableHead>
								<TableBody>
									<tr>
										<TableCell>New South Wales</TableCell>
										<TableCell textAlign="right">7,670,700</TableCell>
									</tr>
									<tr>
										<TableCell>Victoria</TableCell>
										<TableCell textAlign="right">5,996,400</TableCell>
									</tr>
									<tr>
										<TableCell>Queensland</TableCell>
										<TableCell textAlign="right">4,808,800</TableCell>
									</tr>
									<tr>
										<TableCell>Western Australia</TableCell>
										<TableCell textAlign="right">2,603,900</TableCell>
									</tr>
									<tr>
										<TableCell>South Australia</TableCell>
										<TableCell textAlign="right">1,702,800</TableCell>
									</tr>
									<tr>
										<TableCell>Tasmania</TableCell>
										<TableCell textAlign="right">517,400</TableCell>
									</tr>
									<tr>
										<TableCell>Northern Territory</TableCell>
										<TableCell textAlign="right">244,400</TableCell>
									</tr>
									<tr>
										<TableCell>Australian Capital Territory</TableCell>
										<TableCell textAlign="right">393,000</TableCell>
									</tr>
								</TableBody>
							</Table>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
			<Drawer
				isOpen={isDrawerOpen}
				onDismiss={closeDrawer}
				title="Drawer title"
				actions={
					<ButtonGroup>
						<Button onClick={closeDrawer}>Primary</Button>
						<Button variant="secondary" onClick={closeDrawer}>
							Secondary
						</Button>
						<Button variant="tertiary" onClick={closeDrawer}>
							Tertiary
						</Button>
					</ButtonGroup>
				}
			>
				<Text as="p">Drawer body area.</Text>
			</Drawer>
			<Modal
				isOpen={isModalOpen}
				onDismiss={closeModal}
				title="This is the title of the modal dialog, it can span lines but should not be too long."
				actions={
					<ButtonGroup>
						<Button onClick={closeModal}>Primary button</Button>
						<Button variant="secondary" onClick={closeModal}>
							Secondary button
						</Button>
						<Button variant="tertiary" onClick={closeModal}>
							Tertiary button
						</Button>
					</ButtonGroup>
				}
			>
				<Text as="p">
					This is the Modal Body paragraph, it provides detailed instruction and
					context for the the modal action. It can also span lines but long form
					content should be avoided.
				</Text>
			</Modal>
		</Fragment>
	);
}

export const WesbsiteLayout = {
	name: 'Website layout',
	render: (args: KitchenSinkProps) => (
		<Fragment>
			<GlobalAlert onDismiss={console.log} title="Scheduled outage">
				<Text as="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
					nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
					cursus orci vulputate nibh sagittis blandit.
				</Text>
			</GlobalAlert>
			<SiteLayout>
				<KitchenSink {...args} />
			</SiteLayout>
		</Fragment>
	),
};

export const ApplicationLayout = {
	name: 'Application layout',
	render: (args: KitchenSinkProps) => (
		<Fragment>
			<GlobalAlert onDismiss={console.log} title="Scheduled outage">
				<Text as="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
					nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
					cursus orci vulputate nibh sagittis blandit.
				</Text>
			</GlobalAlert>
			<AppLayout>
				<KitchenSink {...args} />
			</AppLayout>
		</Fragment>
	),
};
