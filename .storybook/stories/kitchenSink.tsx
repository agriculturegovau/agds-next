import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/accordion';
import {
	SearchBox,
	SearchBoxButton,
	SearchBoxInput,
} from '@ag.ds-next/search-box';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Callout } from '@ag.ds-next/callout';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { Card, CardInner, CardList } from '@ag.ds-next/card';
import { Columns, Column } from '@ag.ds-next/columns';
import { PageContent } from '@ag.ds-next/content';
import { ControlGroup, Checkbox, Radio } from '@ag.ds-next/control-input';
import { DirectionLink } from '@ag.ds-next/direction-link';
import { Heading, H1, H2 } from '@ag.ds-next/heading';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { FormStack } from '@ag.ds-next/form-stack';
import { FileUpload } from '@ag.ds-next/file-upload';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Select } from '@ag.ds-next/select';
import {
	StatusBadge,
	NotificationBadge,
	IndicatorDot,
} from '@ag.ds-next/badge';
import { SideNav } from '@ag.ds-next/side-nav';
import { Text } from '@ag.ds-next/text';
import { Textarea } from '@ag.ds-next/textarea';
import { TextInput } from '@ag.ds-next/text-input';
import { DatePicker } from '@ag.ds-next/date-picker';

export default {
	title: 'Examples/Kitchen Sink',
};

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

const KitchenSink = () => {
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 4 }}>
					<Stack gap={1}>
						<DirectionLink
							children="Direction link"
							direction="left"
							href="#"
						/>

						<SideNav
							title="Lodging your tax return"
							titleLink="#"
							collapseTitle="In this section"
							items={sideNavItems}
							activePath="#in-detail/record-keeping/incorrect-amounts"
						/>
						<ProgressIndicator
							items={[
								{ href: '#', label: 'Introduction', status: 'doing' },
								{ href: '#', label: 'Business Contacts', status: 'todo' },
								{ href: '#', label: 'Case Studies', status: 'done' },
							]}
						/>

						<CallToActionLink href="#">Call to action</CallToActionLink>

						<Flex gap={0.5} flexWrap="wrap">
							<StatusBadge tone="info" label="In progress" />
							<StatusBadge tone="success" label="Resolved" />
							<StatusBadge tone="error" label="Rejected" />
							<StatusBadge tone="warning" label="Attention" />
							<StatusBadge tone="neutral" label="Draft" />
						</Flex>

						<Flex gap={0.5}>
							<NotificationBadge tone="neutral" value={16} />
							<NotificationBadge tone="action" value={8} />
						</Flex>

						<Flex gap={0.5}>
							<IndicatorDot tone="neutral" />
							<IndicatorDot tone="action" />
						</Flex>
					</Stack>
				</Column>

				<Column columnSpan={{ xs: 12, md: 8 }}>
					<Stack gap={1}>
						<SearchBox>
							<SearchBoxInput />
							<SearchBoxButton>Search</SearchBoxButton>
						</SearchBox>

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
							<Text as="p">
								<a href="#email">Full name must not be empty</a>
							</Text>
						</PageAlert>

						<PageAlert tone="warning" title="Browser out of date">
							<Text as="p">Your web browser is out of date.</Text>
						</PageAlert>

						<Breadcrumbs
							links={[
								{ href: '#', label: 'Home' },
								{ href: '#', label: 'Establishments' },
								{ label: 'Applications' },
							]}
						/>

						<InpageNav
							title="Content"
							links={[
								{ href: '#section-1', label: 'Section 1' },
								{ href: '#section-2', label: 'Section 2' },
								{ href: '#section-3', label: 'Section 3' },
								{ href: '#section-4', label: 'Section 4' },
								{ href: '#section-5', label: 'Section 5' },
							]}
						/>
						<H1>Kitchen Sink</H1>
						<Text>
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

						<Callout title="Callout heading">
							<Text as="p">Description of the callout.</Text>
						</Callout>

						<Accordion>
							<AccordionItem title="Accordion One">
								<AccordionItemContent>
									<Text as="p">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque at arcu eleifend, varius enim non, eleifend
										nibh. Quisque ac lacinia elit. Orci varius natoque penatibus
										et magnis dis parturient montes, nascetur ridiculus mus.
										Integer scelerisque at ligula tempor eleifend. Vestibulum
										volutpat, dolor eu rutrum consequat, libero justo lacinia
										tortor, id varius tortor ante sit amet nisl. Aenean at dui
										diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam,
										gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi,
										pharetra molestie tortor eu, finibus lacinia libero.
									</Text>
								</AccordionItemContent>
							</AccordionItem>
							<AccordionItem title="Accordion Two">
								<AccordionItemContent>
									<Text as="p">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque at arcu eleifend, varius enim non, eleifend
										nibh. Quisque ac lacinia elit. Orci varius natoque penatibus
										et magnis dis parturient montes, nascetur ridiculus mus.
										Integer scelerisque at ligula tempor eleifend. Vestibulum
										volutpat, dolor eu rutrum consequat, libero justo lacinia
										tortor, id varius tortor ante sit amet nisl. Aenean at dui
										diam. Cras a ligula a ante aliquam lacinia. Ut dolor quam,
										gravida eu dui quis, molestie lacinia dolor. Fusce lacus mi,
										pharetra molestie tortor eu, finibus lacinia libero.
									</Text>
								</AccordionItemContent>
							</AccordionItem>
						</Accordion>

						<CardList templateColumns={2}>
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
						</CardList>

						<H2>Forms</H2>
						<FormStack>
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
								onChange={() => {}}
							/>
							<TextInput
								label="Username"
								value="example"
								valid
								message="This username is available"
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
							<FileUpload
								label="Drivers licence"
								onChange={() => {}}
								value={[]}
							/>
							<Textarea label="Message" />
							<ControlGroup>
								<Radio checked={false}>Phone</Radio>
								<Radio checked={false}>Tablet</Radio>
								<Radio checked={true}>Laptop</Radio>
							</ControlGroup>
							<Checkbox checked={false}>Label</Checkbox>
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
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
};

export const OnLightBody = () => {
	return (
		<Box palette="light" background="body">
			<KitchenSink />
		</Box>
	);
};

export const OnLightBodyAlt = () => {
	return (
		<Box palette="light" background="bodyAlt">
			<KitchenSink />
		</Box>
	);
};

export const OnDarkBody = () => {
	return (
		<Box palette="dark" background="body">
			<KitchenSink />
		</Box>
	);
};

export const OnDarkBodyAlt = () => {
	return (
		<Box palette="dark" background="bodyAlt">
			<KitchenSink />
		</Box>
	);
};
