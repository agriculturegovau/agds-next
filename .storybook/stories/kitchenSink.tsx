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
import { Box, Stack } from '@ag.ds-next/box';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Callout } from '@ag.ds-next/callout';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { Card, CardInner } from '@ag.ds-next/card';
import { Columns, Column } from '@ag.ds-next/columns';
import { Content } from '@ag.ds-next/content';
import { ControlGroup, Checkbox, Radio } from '@ag.ds-next/control-input';
import { DirectionLink } from '@ag.ds-next/direction-link';
import { Heading, H1, H2 } from '@ag.ds-next/heading';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { KeywordList } from '@ag.ds-next/keyword-list';
import { LinkList } from '@ag.ds-next/link-list';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Select } from '@ag.ds-next/select';
import { SideNav } from '@ag.ds-next/side-nav';
import { Text } from '@ag.ds-next/text';
import { Textarea } from '@ag.ds-next/textarea';
import { TextInput } from '@ag.ds-next/text-input';

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

const KitchenSink = ({
	sideNavVariant,
}: {
	sideNavVariant: 'light' | 'dark';
}) => {
	return (
		<Content spacing="lg">
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
							variant={sideNavVariant}
						/>
						<ProgressIndicator
							items={[
								{ href: '#', label: 'Introduction', status: 'doing' },
								{ href: '#', label: 'Business Contacts', status: 'todo' },
								{ href: '#', label: 'Case Studies', status: 'done' },
							]}
						/>
						<KeywordList
							items={[
								{
									subTitle: 'Department of',
									title: 'Agriculture and Water Resources',
								},
								{
									subTitle: 'Department of',
									title: 'Communications and the Arts',
								},
							]}
						/>
						<Card background="body">
							<CardInner>
								<Stack gap={1}>
									<Heading type="h2">Card with body background</Heading>
									<Text as="p">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Cras non finibus leo, non rhoncus neque. Nunc et dui cursus,
										euismod felis eget, tristique augue. Praesent consequat
										mollis lorem id efficitur.
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
										Cras non finibus leo, non rhoncus neque. Nunc et dui cursus,
										euismod felis eget, tristique augue. Praesent consequat
										mollis lorem id efficitur.
									</Text>
								</Stack>
							</CardInner>
						</Card>

						<SearchBox>
							<SearchBoxInput />
							<SearchBoxButton>Search</SearchBoxButton>
						</SearchBox>
					</Stack>
				</Column>
				<Column columnSpan={{ xs: 12, md: 4 }}>
					<Stack gap={1} alignItems="flex-start">
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
						<LinkList
							links={[
								{ href: '#', label: 'LinkList item 1' },
								{ href: '#', label: 'LinkList item 2' },
								{ href: '#', label: 'LinkList item 3' },
							]}
						/>
						<CallToActionLink href="#">Call to action</CallToActionLink>
						<Accordion>
							<AccordionItem title="Accordion">
								<AccordionItemContent>
									<Text>
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
						<H2>Forms</H2>
						<TextInput label="Name" />
						<TextInput
							label="Email"
							invalid
							message="An email address is required"
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
					</Stack>
				</Column>

				<Column columnSpan={{ xs: 12, md: 4 }}>
					<Stack gap={1} alignItems="flex-start">
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
								<a href="#">Full name must not be empty</a>
							</Text>
						</PageAlert>

						<PageAlert tone="warning" title="Browser out of date">
							<Text as="p">Your web browser is out of date.</Text>
						</PageAlert>

						<Callout title="Callout heading">
							<Text as="p">Description of the callout.</Text>
						</Callout>
					</Stack>
				</Column>
			</Columns>
		</Content>
	);
};

export const OnLight = () => {
	return (
		<Box palette="light" background="body">
			<KitchenSink sideNavVariant="light" />
		</Box>
	);
};

export const OnDark = () => {
	return (
		<Box palette="dark" background="body">
			<KitchenSink sideNavVariant="dark" />
		</Box>
	);
};
