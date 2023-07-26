import { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { SiteLayout } from '../../../../docs/content/templates/__shared/SiteLayout';
import { VisuallyHidden } from '../a11y';
import { Box } from '../box';
import { Breadcrumbs } from '../breadcrumbs';
import { Button } from '../button';
import { Column, Columns } from '../columns';
import { PageContent } from '../content';
import { Flex } from '../flex';
import { H1, H2, H3 } from '../heading';
import { IndicatorDot } from '../indicator-dot';
import { NotificationBadge } from '../notification-badge';
import { Prose } from '../prose';
import { Stack } from '../stack';
import { SubNav } from '../sub-nav';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '../summary-list';
import { Text } from '../text';
import { TabButton, TabList, TabPanel, TabPanels, Tabs } from './index';

const meta: Meta = {
	title: 'layout/Tabs',
	render: function Render(args) {
		return (
			<Box
				padding={args.background === 'bodyAlt' ? 1.5 : 0}
				background={args.background}
			>
				<Tabs {...args}>
					<TabList>
						<TabButton>Tab 1</TabButton>
						<TabButton>Tab 2</TabButton>
						<TabButton>Tab 3</TabButton>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Text as="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque fermentum lacus ac magna elementum, ac laoreet leo
								facilisis. Nulla at bibendum diam. Pellentesque vel accumsan
								eros, nec egestas leo. Etiam lacinia, ligula non cursus sodales,
								diam odio posuere eros, pharetra convallis lacus magna in urna.
								Etiam condimentum iaculis mattis. Vestibulum eget felis in orci
								eleifend vulputate vestibulum id mi. Curabitur at lacus vitae
								urna tincidunt vehicula at quis nibh. Quisque id aliquet sapien.
								Quisque ultricies nibh nisl, eu pellentesque dui semper a.
								Aliquam vestibulum justo vitae feugiat sodales. Aenean efficitur
								sodales diam, et volutpat enim faucibus a. Nulla mollis est eu
								velit malesuada ornare ultrices in neque.
							</Text>
						</TabPanel>
						<TabPanel>
							<Text as="p">
								Praesent metus leo, ultrices porta sodales quis, molestie vitae
								nisl. Fusce at eros ultricies, pharetra eros id, faucibus dolor.
								Nam et nibh lacus. Etiam pellentesque eros finibus ultricies
								malesuada. Sed eget libero suscipit, dictum lacus sit amet,
								venenatis dolor. Sed porttitor lorem turpis, ac suscipit lacus
								vehicula id. Aliquam id venenatis augue. Orci varius natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus. Integer viverra metus sed dolor euismod consectetur. Cras
								mauris nisi, elementum vel eros sed, faucibus rhoncus mauris.
								Phasellus eu ante vehicula, luctus libero in, malesuada nulla.
							</Text>
						</TabPanel>
						<TabPanel>
							<Text as="p">
								Duis eu bibendum urna. Integer nisl massa, aliquam scelerisque
								hendrerit at, ullamcorper quis turpis. Proin vulputate tincidunt
								neque ut sollicitudin. In ullamcorper neque justo, vitae euismod
								ante aliquam eget. Orci varius natoque penatibus et magnis dis
								parturient montes, nascetur ridiculus mus. Donec eu purus ac
								ante tempus vulputate ac vel mauris. Duis congue augue augue,
								quis elementum nisl ultricies fermentum. Sed pellentesque leo ut
								est semper vulputate.
							</Text>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		);
	},
};

export default meta;

export const Basic: StoryObj = {};

export const BodyAlt: StoryObj = {
	args: {
		background: 'bodyAlt',
	},
};

export const NotContained: StoryObj = {
	args: {
		contained: false,
	},
};

export const NotContainedBodyAlt: StoryObj = {
	args: {
		contained: false,
		background: 'bodyAlt',
	},
};

export const Controlled: StoryObj = {
	render: function Render() {
		const [activeTabIndex, setActiveIndex] = useState(0);
		return (
			<Stack gap={2}>
				<Text>Current tab index: {activeTabIndex}</Text>
				<Flex gap={0.5}>
					<Button variant="text" onClick={() => setActiveIndex(0)}>
						Go to first tab
					</Button>
					<Button variant="text" onClick={() => setActiveIndex(1)}>
						Go to second tab
					</Button>
					<Button variant="text" onClick={() => setActiveIndex(2)}>
						Go to third tab
					</Button>
				</Flex>
				<Tabs activeIndex={activeTabIndex} onChange={setActiveIndex}>
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
			</Stack>
		);
	},
};

export const MultiplePerPage: StoryObj = {
	render: function Render() {
		return (
			<Stack gap={2}>
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
			</Stack>
		);
	},
};

export const ManyItems: StoryObj = {
	render: function Render() {
		return (
			<PageContent>
				<Tabs>
					<TabList>
						{Array.from(Array(10).keys()).map((i) => (
							<TabButton key={i}>Tab {i + 1}</TabButton>
						))}
					</TabList>
					<TabPanels>
						{Array.from(Array(10).keys()).map((i) => (
							<TabPanel key={i}>Tab panel {i + 1}.</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			</PageContent>
		);
	},
};

export const WithEndElements: StoryObj = {
	args: {},
	render: function Render(args) {
		return (
			<Tabs {...args}>
				<TabList>
					<TabButton endElement={<IndicatorDot />}>Tab 1</TabButton>
					<TabButton>Tab 2</TabButton>
					<TabButton
						endElement={
							<Fragment>
								<NotificationBadge
									value={100}
									max={99}
									tone="action"
									aria-hidden
								/>
								<VisuallyHidden>, 100 notifications</VisuallyHidden>
							</Fragment>
						}
					>
						Tab 3
					</TabButton>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque fermentum lacus ac magna elementum, ac laoreet leo
							facilisis. Nulla at bibendum diam. Pellentesque vel accumsan eros,
							nec egestas leo. Etiam lacinia, ligula non cursus sodales, diam
							odio posuere eros, pharetra convallis lacus magna in urna. Etiam
							condimentum iaculis mattis. Vestibulum eget felis in orci eleifend
							vulputate vestibulum id mi. Curabitur at lacus vitae urna
							tincidunt vehicula at quis nibh. Quisque id aliquet sapien.
							Quisque ultricies nibh nisl, eu pellentesque dui semper a. Aliquam
							vestibulum justo vitae feugiat sodales. Aenean efficitur sodales
							diam, et volutpat enim faucibus a. Nulla mollis est eu velit
							malesuada ornare ultrices in neque.
						</Text>
					</TabPanel>
					<TabPanel>
						<Text as="p">
							Praesent metus leo, ultrices porta sodales quis, molestie vitae
							nisl. Fusce at eros ultricies, pharetra eros id, faucibus dolor.
							Nam et nibh lacus. Etiam pellentesque eros finibus ultricies
							malesuada. Sed eget libero suscipit, dictum lacus sit amet,
							venenatis dolor. Sed porttitor lorem turpis, ac suscipit lacus
							vehicula id. Aliquam id venenatis augue. Orci varius natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							Integer viverra metus sed dolor euismod consectetur. Cras mauris
							nisi, elementum vel eros sed, faucibus rhoncus mauris. Phasellus
							eu ante vehicula, luctus libero in, malesuada nulla.
						</Text>
					</TabPanel>
					<TabPanel>
						<Text as="p">
							Duis eu bibendum urna. Integer nisl massa, aliquam scelerisque
							hendrerit at, ullamcorper quis turpis. Proin vulputate tincidunt
							neque ut sollicitudin. In ullamcorper neque justo, vitae euismod
							ante aliquam eget. Orci varius natoque penatibus et magnis dis
							parturient montes, nascetur ridiculus mus. Donec eu purus ac ante
							tempus vulputate ac vel mauris. Duis congue augue augue, quis
							elementum nisl ultricies fermentum. Sed pellentesque leo ut est
							semper vulputate.
						</Text>
					</TabPanel>
				</TabPanels>
			</Tabs>
		);
	},
};

export const ExampleComposition: StoryObj = {
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render() {
		return (
			<SiteLayout>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, lg: 8 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '#', label: 'Home' },
										{ href: '#', label: 'Category 1' },
										{ href: '#', label: 'Subcategory 1' },
										{ label: 'Population trends' },
									]}
								/>
								<Stack gap={1.5}>
									<H1>Population trends</H1>
									<Text as="p" fontSize="md" color="muted">
										Introductory paragraph providing context for this single
										page of the multipage form. All questions on page must be
										related - md/default (P).
									</Text>
								</Stack>

								<SubNav
									activePath="/population"
									links={[
										{ href: '/population', label: 'Population' },
										{ href: '/immigration', label: 'Immigration' },
										{ href: '/demographics', label: 'Demographics' },
										{ href: '/births', label: 'Births' },
										{ href: '/deaths', label: 'Deaths' },
									]}
								/>

								<Stack gap={1.5}>
									<H2>Population</H2>
									<Text as="p">Short intro of content.</Text>
								</Stack>

								<Tabs>
									<TabList>
										{examplePopulations.map(({ year }) => (
											<TabButton key={year}>{year}</TabButton>
										))}
									</TabList>
									<TabPanels>
										{examplePopulations.map(({ year, stats, data }) => (
											<TabPanel key={year}>
												<Stack gap={2}>
													<Prose>
														<h3>{year}</h3>
														<ul>
															{stats.map((stat, idx) => (
																<li key={idx}>{stat}</li>
															))}
														</ul>
													</Prose>
													<Stack gap={1.5}>
														<H3>Population quick stats</H3>
														<SummaryList>
															<SummaryListItem>
																<SummaryListItemTerm>
																	People
																</SummaryListItemTerm>
																<SummaryListItemDescription>
																	{numberFormatter.format(data.people)}
																</SummaryListItemDescription>
															</SummaryListItem>
															<SummaryListItem>
																<SummaryListItemTerm>Male</SummaryListItemTerm>
																<SummaryListItemDescription>
																	{percentageFormatter.format(data.male)}
																</SummaryListItemDescription>
															</SummaryListItem>
															<SummaryListItem>
																<SummaryListItemTerm>
																	Female
																</SummaryListItemTerm>
																<SummaryListItemDescription>
																	{percentageFormatter.format(data.female)}
																</SummaryListItemDescription>
															</SummaryListItem>
															<SummaryListItem>
																<SummaryListItemTerm>
																	Median age
																</SummaryListItemTerm>
																<SummaryListItemDescription>
																	{data.medianAge}
																</SummaryListItemDescription>
															</SummaryListItem>
														</SummaryList>
													</Stack>
												</Stack>
											</TabPanel>
										))}
									</TabPanels>
								</Tabs>
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</SiteLayout>
		);
	},
};

const numberFormatter = new Intl.NumberFormat('en-AU');
const percentageFormatter = new Intl.NumberFormat('en-AU', {
	style: 'percent',
	minimumFractionDigits: 1,
	maximumFractionDigits: 1,
});

const examplePopulations = [
	{
		year: 2021,
		stats: [
			'The 2021 Census counted 25,422,788 people in Australia (excludes overseas visitors), an increase of 8.6 per cent since the 2016 Census.',
			'49.3 per cent of the population were male with a median age of 37 years old.',
			'50.7 per cent of the population were female with the median age of 39 years old.',
		],
		data: {
			people: 25422788,
			male: 0.493,
			female: 0.507,
			medianAge: 38,
		},
	},
	{
		year: 2016,
		stats: [
			'In the 2016 Census, there were 23,401,892 people in Australia. Of these 49.3% were male and 50.7% were female. Aboriginal and/or Torres Strait Islander people made up 2.8% of the population.',
		],
		data: {
			people: 23401892,
			male: 0.493,
			female: 0.507,
			medianAge: 38,
		},
	},
	{
		year: 2011,
		stats: [
			'In the 2011 Census, there were 21,507,717 people in Australia of these 49.4% were male and 50.6% were female. Aboriginal and/or Torres Strait Islander people made up 2.5% of the population.',
		],
		data: {
			people: 21507717,
			male: 0.493,
			female: 0.507,
			medianAge: 37,
		},
	},
	{
		year: 2006,
		stats: [
			'In the 2006 Census (held on 8th August 2006), there were 19,855,288 people usually resident in Australia. The population has increased by 6%, or just over 1 million people, since the 2001 Census. As in 2001, female slightly outnumbered male in the population.',
			'2.3% of the population identified themselves as being Aboriginal and/or Torres Strait Islander people in the 2006 Census which is an increase of 11% or 45,000 people.',
		],
		data: {
			people: 19855288,
			male: 0.493,
			female: 0.507,
			medianAge: 37,
		},
	},
];
