import { Meta } from '@storybook/react';
import { Fragment } from 'react';
import { Autocomplete } from '../../../packages/react/src/autocomplete';
import { Avatar } from '../../../packages/react/src/avatar';
import { Breadcrumbs } from '../../../packages/react/src/breadcrumbs';
import { Button, ButtonGroup } from '../../../packages/react/src/button';
import { Callout } from '../../../packages/react/src/callout';
import { CallToActionLink } from '../../../packages/react/src/call-to-action';
import { Card, CardInner } from '../../../packages/react/src/card';
import { Checkbox } from '../../../packages/react/src/checkbox';
import { Columns, Column } from '../../../packages/react/src/columns';
import { Combobox } from '../../../packages/react/src/combobox';
import { ControlGroup } from '../../../packages/react/src/control-group';
import { DatePicker } from '../../../packages/react/src/date-picker';
import { DatePickerNext } from '../../../packages/react/src/date-picker-next';
import { DateRangePicker } from '../../../packages/react/src/date-range-picker';
import { DateRangePickerNext } from '../../../packages/react/src/date-range-picker-next';
import { Details } from '../../../packages/react/src/details';
import { DirectionLink } from '../../../packages/react/src/direction-link';
import { Divider } from '../../../packages/react/src/divider';
import { FileInput } from '../../../packages/react/src/file-input';
import { FileUpload } from '../../../packages/react/src/file-upload';
import { Flex } from '../../../packages/react/src/flex';
import { FormStack } from '../../../packages/react/src/form-stack';
import { GlobalAlert } from '../../../packages/react/src/global-alert';
import { Heading, H1, H2 } from '../../../packages/react/src/heading';
import { IndicatorDot } from '../../../packages/react/src/indicator-dot';
import { InpageNav } from '../../../packages/react/src/inpage-nav';
import { NotificationBadge } from '../../../packages/react/src/notification-badge';
import { PageAlert } from '../../../packages/react/src/page-alert';
import { PageContent } from '../../../packages/react/src/content';
import { ProgressIndicator } from '../../../packages/react/src/progress-indicator';
import { Radio } from '../../../packages/react/src/radio';
import { SearchInput } from '../../../packages/react/src/search-input';
import { Select } from '../../../packages/react/src/select';
import { SideNav } from '../../../packages/react/src/side-nav';
import {
	SkeletonHeading,
	SkeletonText,
} from '../../../packages/react/src/skeleton';
import { Stack } from '../../../packages/react/src/stack';
import { StatusBadge } from '../../../packages/react/src/status-badge';
import { SubNav } from '../../../packages/react/src/sub-nav';
import { Switch } from '../../../packages/react/src/switch';
import { Text } from '../../../packages/react/src/text';
import { Textarea } from '../../../packages/react/src/textarea';
import { TextInput } from '../../../packages/react/src/text-input';
import { TextLink } from '../../../packages/react/src/text-link';
import { UnorderedList, ListItem } from '../../../packages/react/src/list';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '../../../packages/react/src/accordion';
import {
	SearchBox,
	SearchBoxButton,
	SearchBoxInput,
} from '../../../packages/react/src/search-box';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '../../../packages/react/src/hero-banner';
import {
	Table,
	TableCaption,
	TableRow,
	TableCell,
	TableHeader,
	TableHead,
	TableBody,
} from '../../../packages/react/src/table';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '../../../packages/react/src/summary-list';
import {
	TabButton,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '../../../packages/react/src/tabs';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuPanel,
	DropdownMenuItem,
	DropdownMenuDivider,
} from '../../../packages/react/src/dropdown-menu';
import { Drawer } from '../../../packages/react/src/drawer';
import { SectionAlert } from '../../../packages/react/src/section-alert';
import { PasswordInput } from '../../../packages/react/src/password-input';
import { Modal } from '../../../packages/react/src/modal';
import { GroupedFields } from '../../../packages/react/src/grouped-fields';
import { TimeInput } from '../../../packages/react/src/time-input';
import { TimePicker } from '../../../packages/react/src/time-picker';
import { FeatureLinkList } from '../../../packages/react/src/feature-link-list';
import { ToggleButton } from '../../../packages/react/src/toggle-button';
import { useTernaryState } from '../../../packages/react/src/core';
import { COUNTRY_OPTIONS } from '../../../docs/components/designSystemComponents';
import { SiteLayout } from '../../../docs/content/templates/__shared/SiteLayout';
import { AppLayout } from '../../../docs/content/templates/__shared/AppLayout';

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
	{ href: '#four', label: 'What’s new for individuals' },
	{ href: '#five', label: 'Why you may receive a tax bill' },
];

const backgroundMapper = {
	body: {
		page: 'body',
		opposite: 'bodyAlt',
	},
	bodyAlt: {
		page: 'bodyAlt',
		opposite: 'body',
	},
} as const;

type KitchenSinkProps = { background: 'body' | 'bodyAlt' };

function KitchenSink({ background }: KitchenSinkProps) {
	const { page, opposite } = backgroundMapper[background];
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
			<PageContent background={page}>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 4 }}>
						<Stack gap={2}>
							<SideNav
								activePath="#in-detail/record-keeping/incorrect-amounts"
								background={page}
								items={sideNavItems}
								title="Lodging your tax return"
								titleLink="#"
							/>
							<ProgressIndicator
								activePath="#1"
								background={page}
								items={[
									{ href: '#1', label: 'Introduction', status: 'started' },
									{ href: '#2', label: 'Business Contacts', status: 'todo' },
									{ href: '#3', label: 'Case Studies', status: 'done' },
								]}
							/>
						</Stack>
					</Column>

					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={2}>
							<SubNav
								activePath="#usage"
								background={page}
								links={[
									{ href: '#usage', label: 'Usage' },
									{ href: '#code', label: 'Code' },
									{ href: '#content', label: 'Content' },
									{ href: '#accessibility', label: 'Accessibility' },
								]}
							/>

							<Stack gap={1}>
								<PageAlert title="Notice" tone="info">
									<Text as="p">
										All vacancies close on the advertised closing date unless
										otherwise specified.
									</Text>
								</PageAlert>

								<PageAlert title="Submission successful" tone="success">
									<Text as="p">
										Your application has been successfully submitted.
									</Text>
								</PageAlert>

								<PageAlert title="There is a problem" tone="error">
									<UnorderedList>
										<ListItem>
											<TextLink href="#email">Name is required</TextLink>
										</ListItem>
										<ListItem>
											<TextLink href="#email">Email is required</TextLink>
										</ListItem>
									</UnorderedList>
								</PageAlert>

								<PageAlert title="Browser out of date" tone="warning">
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
								links={[
									{ href: '#section-1', label: 'Section 1' },
									{ href: '#section-2', label: 'Section 2' },
									{ href: '#section-3', label: 'Section 3' },
									{ href: '#section-4', label: 'Section 4' },
									{ href: '#section-5', label: 'Section 5' },
								]}
								title="On this page"
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

							<Callout
								onBodyAlt={page === 'bodyAlt'}
								title="Callout heading"
								tone="neutral"
							>
								<Text as="p">Description of the callout.</Text>
							</Callout>

							<SectionAlert title="This is a Section alert" tone="error" />

							<SectionAlert
								onClose={console.log}
								title="This is a Section alert"
								tone="success"
							/>

							<SectionAlert title="This is a Section alert" tone="warning">
								<Text as="p">This is a description.</Text>
							</SectionAlert>

							<Accordion>
								<AccordionItem background={page} title="Accordion One">
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
								<AccordionItem background={page} title="Accordion Two">
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

							<Details label="Details" onBodyAlt={page === 'bodyAlt'}>
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
								<Button onClick={openModal} variant="secondary">
									Open Modal
								</Button>
							</div>
							<div>
								<Button onClick={openDrawer} variant="secondary">
									Open Drawer
								</Button>
							</div>

							<H2>Forms</H2>
							<FormStack>
								<SearchInput label="Search" />

								<TextInput label="Name" />

								<PasswordInput label="Password" />

								<TextInput
									id="email"
									invalid
									label="Email"
									message="An email address is required"
								/>
								<DatePicker
									label="Birth date"
									onChange={() => undefined}
									value={new Date()}
								/>
								<DatePickerNext
									label="Birth date (Next)"
									onChange={() => undefined}
									value={new Date()}
								/>
								<DateRangePicker
									onChange={() => undefined}
									value={{ from: new Date(), to: undefined }}
								/>
								<DateRangePickerNext
									onChange={() => undefined}
									value={{ from: new Date(), to: undefined }}
								/>
								<Select
									label="Example"
									options={[
										{ value: 'a', label: 'Option A' },
										{ value: 'b', label: 'Option B' },
										{ value: 'c', label: 'Option C' },
									]}
									placeholder="Please select"
								/>
								<FileInput label="Drivers licence" />
								<FileUpload
									label="Drivers licence"
									onChange={() => undefined}
									value={[]}
								/>
								<Textarea label="Message" />
								<ControlGroup label="Device">
									<Radio checked={false} onChange={console.log}>
										Phone
									</Radio>
									<Radio checked={false} onChange={console.log}>
										Tablet
									</Radio>
									<Radio checked onChange={console.log}>
										Laptop
									</Radio>
								</ControlGroup>
								<Checkbox checked onChange={console.log}>
									Label
								</Checkbox>
								<Autocomplete
									hint="Start typing to see results"
									label="Find your country"
									loadOptions={async function loadOptions() {
										return COUNTRY_OPTIONS;
									}}
								/>
								<Combobox
									hint="Start typing to see results"
									label="Select country"
									options={COUNTRY_OPTIONS}
								/>
								<Switch
									checked
									label="Show establishments"
									onChange={console.log}
								/>
								<GroupedFields
									field1Invalid
									legend="Grouped fields"
									message="Enter a valid value"
								>
									{({ field1Props, field2Props }) => (
										<>
											<TextInput label="TextInput" required {...field1Props} />
											<Select
												label="Select"
												options={[
													{ value: 'a', label: 'Option A' },
													{ value: 'b', label: 'Option B' },
													{ value: 'c', label: 'Option C' },
												]}
												placeholder="Please select"
												{...field2Props}
											/>
										</>
									)}
								</GroupedFields>

								<TimeInput label="Start time" onChange={() => undefined} />

								<TimePicker label="Select a time" onChange={() => undefined} />

								<ToggleButton
									iconType="flag"
									label="Toggle button"
									onClick={console.log}
									pressed
									pressedLabel="Pressed toggle button"
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

							<Flex flexWrap="wrap" gap={0.5}>
								<StatusBadge label="Success" tone="successHigh" />
								<StatusBadge label="Error" tone="errorHigh" />
								<StatusBadge label="Warning" tone="warningHigh" />
								<StatusBadge label="Info" tone="infoHigh" />
							</Flex>

							<Flex flexWrap="wrap" gap={0.5}>
								<StatusBadge label="Success" tone="successMedium" />
								<StatusBadge label="Error" tone="errorMedium" />
								<StatusBadge label="Warning" tone="warningMedium" />
								<StatusBadge label="Info" tone="infoMedium" />
							</Flex>

							<Flex flexWrap="wrap" gap={0.5}>
								<StatusBadge label="Success" tone="successLow" />
								<StatusBadge label="Error" tone="errorLow" />
								<StatusBadge label="Warning" tone="warningLow" />
								<StatusBadge label="Info" tone="infoLow" />
								<StatusBadge label="Cannot start" tone="cannotStartLow" />
								<StatusBadge label="In progress" tone="inProgressLow" />
								<StatusBadge label="Paused" tone="pausedLow" />
								<StatusBadge label="Not started" tone="notStartedLow" />
								<StatusBadge label="Unknown" tone="unknownLow" />
							</Flex>

							<Flex flexWrap="wrap" gap={0.5}>
								<Flex flexWrap="wrap" gap={2}>
									<StatusBadge
										appearance="subtle"
										label="Success"
										tone="successHigh"
									/>
									<StatusBadge
										appearance="subtle"
										label="Error"
										tone="errorHigh"
									/>
									<StatusBadge
										appearance="subtle"
										label="Warning"
										tone="warningHigh"
									/>
									<StatusBadge
										appearance="subtle"
										label="Info"
										tone="infoHigh"
									/>
								</Flex>
								<Flex flexWrap="wrap" gap={2}>
									<StatusBadge
										appearance="subtle"
										label="Success"
										tone="successMedium"
									/>
									<StatusBadge
										appearance="subtle"
										label="Error"
										tone="errorMedium"
									/>
									<StatusBadge
										appearance="subtle"
										label="Warning"
										tone="warningMedium"
									/>
									<StatusBadge
										appearance="subtle"
										label="Info"
										tone="infoMedium"
									/>
								</Flex>
								<Flex flexWrap="wrap" gap={2}>
									<StatusBadge
										appearance="subtle"
										label="Success"
										tone="successLow"
									/>
									<StatusBadge
										appearance="subtle"
										label="Error"
										tone="errorLow"
									/>
									<StatusBadge
										appearance="subtle"
										label="Warning"
										tone="warningLow"
									/>
									<StatusBadge
										appearance="subtle"
										label="Info"
										tone="infoLow"
									/>
								</Flex>
								<Flex flexWrap="wrap" gap={2}>
									<StatusBadge
										appearance="subtle"
										label="Cannot start"
										tone="cannotStartLow"
									/>
									<StatusBadge
										appearance="subtle"
										label="In progress"
										tone="inProgressLow"
									/>
									<StatusBadge
										appearance="subtle"
										label="Paused"
										tone="pausedLow"
									/>
									<StatusBadge
										appearance="subtle"
										label="Not started"
										tone="notStartedLow"
									/>
									<StatusBadge
										appearance="subtle"
										label="Unknown"
										tone="unknownLow"
									/>
								</Flex>
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
									<TableRow>
										<TableHeader scope="col">Location</TableHeader>
										<TableHeader scope="col" textAlign="right">
											Population
										</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>New South Wales</TableCell>
										<TableCell textAlign="right">7,670,700</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Victoria</TableCell>
										<TableCell textAlign="right">5,996,400</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Queensland</TableCell>
										<TableCell textAlign="right">4,808,800</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Western Australia</TableCell>
										<TableCell textAlign="right">2,603,900</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>South Australia</TableCell>
										<TableCell textAlign="right">1,702,800</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Tasmania</TableCell>
										<TableCell textAlign="right">517,400</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Northern Territory</TableCell>
										<TableCell textAlign="right">244,400</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Australian Capital Territory</TableCell>
										<TableCell textAlign="right">393,000</TableCell>
									</TableRow>
								</TableBody>
							</Table>
							<FeatureLinkList
								links={[
									{
										label: 'Add a business with RAM',
										description:
											'Set up a business to act on behalf of it or invite others to. You can do this if you are responsible for this business in Relationship Authorisation Manager (RAM).',
										href: '#',
									},
									{
										label: 'Accept an invite',
										description:
											'Use an invite code from an email to act on behalf of a business.',
										href: '#',
									},
									{
										label: 'External link',
										description: 'This is an external link.',
										href: 'https://www.google.com',
										target: '_blank',
									},
								]}
							/>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
			<Drawer
				actions={
					<ButtonGroup>
						<Button onClick={closeDrawer}>Primary</Button>
						<Button onClick={closeDrawer} variant="secondary">
							Secondary
						</Button>
						<Button onClick={closeDrawer} variant="tertiary">
							Tertiary
						</Button>
					</ButtonGroup>
				}
				isOpen={isDrawerOpen}
				onClose={closeDrawer}
				title="Drawer title"
			>
				<Text as="p">Drawer body area.</Text>
			</Drawer>
			<Modal
				actions={
					<ButtonGroup>
						<Button onClick={closeModal}>Primary button</Button>
						<Button onClick={closeModal} variant="secondary">
							Secondary button
						</Button>
						<Button onClick={closeModal} variant="tertiary">
							Tertiary button
						</Button>
					</ButtonGroup>
				}
				isOpen={isModalOpen}
				onClose={closeModal}
				title="This is the title of the modal dialog, it can span lines but should not be too long."
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
			<GlobalAlert onClose={console.log} title="Scheduled outage">
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
			<GlobalAlert onClose={console.log} title="Scheduled outage">
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
