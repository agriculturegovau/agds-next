import { Meta } from '@storybook/react';
import { Fragment } from 'react';
import { Autocomplete } from '@ag.ds-next/react/autocomplete';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Callout } from '@ag.ds-next/react/callout';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Card, CardInner } from '@ag.ds-next/react/card';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { Combobox } from '@ag.ds-next/react/combobox';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { Details } from '@ag.ds-next/react/details';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Divider } from '@ag.ds-next/react/divider';
import { FileInput } from '@ag.ds-next/react/file-input';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { GlobalAlert } from '@ag.ds-next/react/global-alert';
import { Heading, H1, H2 } from '@ag.ds-next/react/heading';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { PageContent } from '@ag.ds-next/react/content';
import { Radio } from '@ag.ds-next/react/radio';
import { Select } from '@ag.ds-next/react/select';
import { Stack } from '@ag.ds-next/react/stack';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
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
	TableRow,
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
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import { Modal } from '@ag.ds-next/react/modal';
import { useTernaryState } from '@ag.ds-next/react/core';
import { COUNTRY_OPTIONS } from '../../docs/components/designSystemComponents';
import { SiteLayout } from '../../docs/content/templates/__shared/SiteLayout';
import { AppLayout } from '../../docs/content/templates/__shared/AppLayout';

const meta: Meta = {
	title: 'Testing/Kitchen sink max-width',
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean
						tempus volutpat lacus in accumsan.
					</HeroBannerTitle>
					<HeroBannerSubtitle>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						tempus volutpat lacus in accumsan. Vestibulum rutrum velit non nulla
						porta aliquet. Aliquam leo lorem, vehicula at auctor sit amet,
						posuere nec mi. Pellentesque alique
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
				<Stack gap={3}>
					<PageAlert
						tone="info"
						title="Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean tempus volutpat lacus in accumsan."
					>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
							tempus volutpat lacus in accumsan. Vestibulum rutrum velit non
							nulla porta aliquet. Aliquam leo lorem, vehicula at auctor sit
							amet, posuere nec mi. Pellentesque alique
						</Text>
					</PageAlert>

					<PageAlert
						tone="error"
						title="Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean tempus volutpat lacus in accumsan."
					>
						<UnorderedList>
							<ListItem>
								<TextLink href="#email">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aenean tempus volutpat lacus in accumsan. Vestibulum rutrum
									velit non nulla porta aliquet. Aliquam leo lorem, vehicula at
									auctor sit amet, posuere nec mi. Pellentesque alique
								</TextLink>
							</ListItem>
							<ListItem>
								<TextLink href="#email">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Aenean tempus volutpat lacus in accumsan. Vestibulum rutrum
									velit non nulla porta aliquet. Aliquam leo lorem, vehicula at
									auctor sit amet, posuere nec mi. Pellentesque alique
								</TextLink>
							</ListItem>
						</UnorderedList>
					</PageAlert>

					<InpageNav
						title="On this page"
						links={[
							{
								href: '#section-1',
								label:
									'Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque at arcu eleifend varius enim non leifend nibh quisque ac lacinia elit',
							},
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
						Quisque ac lacinia elit. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Integer scelerisque at
						ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum
						consequat, libero justo lacinia tortor, id varius tortor ante sit
						amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam lacinia.
						Ut dolor quam, gravida eu dui quis, molestie lacinia dolor. Fusce
						lacus mi, pharetra molestie tortor eu, finibus lacinia libero.
					</Text>

					<Callout
						title="Callout Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus integer scelerisque at ligula tempor eleifend"
						tone="neutral"
						onBodyAlt={page === 'bodyAlt'}
					>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
							Quisque ac lacinia elit. Orci varius natoque penatibus et magnis
							dis parturient montes, nascetur ridiculus mus. Integer scelerisque
							at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum
							consequat, libero justo lacinia tortor, id varius tortor ante sit
							amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam
							lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia
							dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus
							lacinia libero.
						</Text>
					</Callout>

					<SectionAlert
						tone="warning"
						title="Section alert Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus integer scelerisque at ligula tempor eleifend"
					>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
							Quisque ac lacinia elit. Orci varius natoque penatibus et magnis
							dis parturient montes, nascetur ridiculus mus. Integer scelerisque
							at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum
							consequat, libero justo lacinia tortor, id varius tortor ante sit
							amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam
							lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia
							dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus
							lacinia libero.
						</Text>
					</SectionAlert>

					<Accordion>
						<AccordionItem
							title="Accordion title with really long label that spans multiple lines accordion title with really long label that spans multiple lines"
							background={page}
						>
							<AccordionItemContent>
								<Text as="p">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
									Quisque ac lacinia elit. Orci varius natoque penatibus et
									magnis dis parturient montes, nascetur ridiculus mus. Integer
									scelerisque at ligula tempor eleifend. Vestibulum volutpat,
									dolor eu rutrum consequat, libero justo lacinia tortor, id
									varius tortor ante sit amet nisl. Aenean at dui diam. Cras a
									ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui
									quis, molestie lacinia dolor. Fusce lacus mi, pharetra
									molestie tortor eu, finibus lacinia libero.
								</Text>
							</AccordionItemContent>
						</AccordionItem>
						<AccordionItem title="Accordion Two" background={page}>
							<AccordionItemContent>
								<Text as="p">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
									Quisque ac lacinia elit. Orci varius natoque penatibus et
									magnis dis parturient montes, nascetur ridiculus mus. Integer
									scelerisque at ligula tempor eleifend. Vestibulum volutpat,
									dolor eu rutrum consequat, libero justo lacinia tortor, id
									varius tortor ante sit amet nisl. Aenean at dui diam. Cras a
									ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui
									quis, molestie lacinia dolor. Fusce lacus mi, pharetra
									molestie tortor eu, finibus lacinia libero.
								</Text>
							</AccordionItemContent>
						</AccordionItem>
					</Accordion>

					<Details
						label="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus integer scelerisque at ligula tempor eleifend"
						onBodyAlt={page === 'bodyAlt'}
					>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
							Quisque ac lacinia elit. Orci varius natoque penatibus et magnis
							dis parturient montes, nascetur ridiculus mus. Integer scelerisque
							at ligula tempor eleifend. Vestibulum volutpat, dolor eu rutrum
							consequat, libero justo lacinia tortor, id varius tortor ante sit
							amet nisl. Aenean at dui diam. Cras a ligula a ante aliquam
							lacinia. Ut dolor quam, gravida eu dui quis, molestie lacinia
							dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus
							lacinia libero.
						</Text>
					</Details>

					<Card>
						<CardInner>
							<Stack gap={1}>
								<Heading type="h2">
									Orci varius natoque penatibus et magnis dis parturient montes,
									nascetur ridiculus mus integer scelerisque at ligula tempor
									eleifend
								</Heading>
								<Text as="p">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
									Quisque ac lacinia elit. Orci varius natoque penatibus et
									magnis dis parturient montes, nascetur ridiculus mus. Integer
									scelerisque at ligula tempor eleifend. Vestibulum volutpat,
									dolor eu rutrum consequat, libero justo lacinia tortor, id
									varius tortor ante sit amet nisl. Aenean at dui diam. Cras a
									ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui
									quis, molestie lacinia dolor. Fusce lacus mi, pharetra
									molestie tortor eu, finibus lacinia libero.
								</Text>
							</Stack>
						</CardInner>
					</Card>

					<Tabs>
						<TabList>
							<TabButton>Tab 1</TabButton>
							<TabButton>Tab 2</TabButton>
							<TabButton>Tab 3</TabButton>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
									Quisque ac lacinia elit. Orci varius natoque penatibus et
									magnis dis parturient montes, nascetur ridiculus mus. Integer
									scelerisque at ligula tempor eleifend. Vestibulum volutpat,
									dolor eu rutrum consequat, libero justo lacinia tortor, id
									varius tortor ante sit amet nisl. Aenean at dui diam. Cras a
									ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui
									quis, molestie lacinia dolor. Fusce lacus mi, pharetra
									molestie tortor eu, finibus lacinia libero.
								</Text>
							</TabPanel>
							<TabPanel>
								<Text>Tab panel 2.</Text>
							</TabPanel>
							<TabPanel>
								<Text>Tab panel 3.</Text>
							</TabPanel>
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
						<Textarea label="Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque at arcu eleifend, varius enim non, eleifend nibh" />
						<TextInput
							label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh."
							hint="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh."
							invalid
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh."
							id="email"
						/>
						<DatePicker
							label="Birth date"
							hint="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu eleifend, varius enim non, eleifend nibh."
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
						<ControlGroup label="Device" block>
							<Radio checked={false}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
							</Radio>
							<Radio checked={false}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
							</Radio>
							<Radio checked={true}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
							</Radio>
						</ControlGroup>
						<Checkbox checked={true}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
						</Checkbox>
						<Autocomplete
							label="Find your country"
							hint="Start typing to see results"
							loadOptions={async function loadOptions() {
								return COUNTRY_OPTIONS;
							}}
							block
						/>
						<Combobox
							label="Select country"
							hint="Start typing to see results"
							options={COUNTRY_OPTIONS}
							block
						/>
						<Switch
							label="Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque at arcu eleifend varius enim non eleifend nibh"
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque
						at arcu eleifend, varius enim non, eleifend nibh
					</DirectionLink>

					<CallToActionLink href="#">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque
						at arcu eleifend, varius enim non, eleifend nibh
					</CallToActionLink>

					<div>
						<DropdownMenu>
							<DropdownMenuButton>
								Open dropdown menu Lorem ipsum dolor sit amet, consectetur
								adipiscing elit pellentesque at arcu eleifend, varius enim non,
								eleifend nibh
							</DropdownMenuButton>
							<DropdownMenuPanel>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Messages</DropdownMenuItem>
								<DropdownMenuItem>Account settings</DropdownMenuItem>
								<DropdownMenuDivider />
								<DropdownMenuItem>Sign out</DropdownMenuItem>
							</DropdownMenuPanel>
						</DropdownMenu>
					</div>

					<StatusBadge
						tone="info"
						label="Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque at arcu eleifend, varius enim non, eleifend nibh"
					/>

					<Stack gap={1.5}>
						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>First name</SummaryListItemTerm>
								<SummaryListItemDescription>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
									Quisque ac lacinia elit. Orci varius natoque penatibus et
									magnis dis parturient montes, nascetur ridiculus mus. Integer
									scelerisque at ligula tempor eleifend. Vestibulum volutpat,
									dolor eu rutrum consequat, libero justo lacinia tortor, id
									varius tortor ante sit amet nisl. Aenean at dui diam. Cras a
									ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui
									quis, molestie lacinia dolor. Fusce lacus mi, pharetra
									molestie tortor eu, finibus lacinia libero.
								</SummaryListItemDescription>
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
								<SummaryListItemDescription>
									09/06/1995
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>
						<TextLink href="#">Change all</TextLink>
					</Stack>

					<Table striped>
						<TableCaption>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean
							tempus volutpat lacus in accumsan.
						</TableCaption>
						<TableHead>
							<TableRow>
								<TableHeader scope="col">Location</TableHeader>
								<TableHeader textAlign="right" scope="col">
									Population
								</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque at arcu eleifend, varius enim non, eleifend nibh.
									Quisque ac lacinia elit. Orci varius natoque penatibus et
									magnis dis parturient montes,
								</TableCell>
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
				</Stack>
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
			<GlobalAlert
				onDismiss={console.log}
				title="Proin posuere dui arcu id facilisis augue dignissim nec cras eu libero volutpat pellentesque metus in risus at venenatis facilisis"
			>
				<Text as="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
					volutpat lacus in accumsan. Vestibulum rutrum velit non nulla porta
					aliquet. Aliquam leo lorem, vehicula at auctor sit amet, posuere nec
					mi. Pellentesque aliquet placerat rhoncus. Sed aliquam malesuada
					gravida. Aenean ac porta dolor. Cras vestibulum tristique justo eu
					pretium. Donec quis lorem augue. Donec laoreet mattis nisl sed
					gravida. Vestibulum id pharetra risus.
				</Text>
			</GlobalAlert>
			<AppLayout>
				<KitchenSink {...args} />
			</AppLayout>
		</Fragment>
	),
};
