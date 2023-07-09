import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AppLayout } from '../../../../docs/content/templates/__shared/AppLayout';
import { Avatar } from '../avatar';
import { Box } from '../box';
import { Breadcrumbs } from '../breadcrumbs';
import { Button } from '../button';
import { Column, Columns } from '../columns';
import { PageContent } from '../content';
import { boxPalette } from '../core';
import { Flex } from '../flex';
import { H1 } from '../heading';
import { IndicatorDot } from '../indicator-dot';
import { NotificationBadge } from '../notification-badge';
import { Stack } from '../stack';
import { StatusBadge } from '../status-badge';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '../summary-list';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '../table';
import { Text } from '../text';
import { TextLink } from '../text-link';
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
							<NotificationBadge value={100} max={99} tone="action" />
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

export const DashboardScreen: StoryObj = {
	render: function Render() {
		return (
			<AppLayout>
				<PageContent>
					<Columns gap={3}>
						<Column columnSpan={{ xs: 12, lg: 8 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '#', label: 'Home' },
										{ href: '#', label: 'Services' },
										{ label: 'Establishments' },
									]}
								/>
								<Stack>
									<Text color="muted" fontWeight="bold">
										SYD - Sydney, New South Wales
									</Text>
									<H1>Dashboard</H1>
								</Stack>

								<SummaryList>
									<SummaryListItem>
										<SummaryListItemTerm>Type</SummaryListItemTerm>
										<SummaryListItemDescription>
											Fruit and vegetable wholesaler
										</SummaryListItemDescription>
									</SummaryListItem>

									<SummaryListItem>
										<SummaryListItemTerm>Location</SummaryListItemTerm>
										<SummaryListItemDescription>
											Gold Coast, Queensland
										</SummaryListItemDescription>
									</SummaryListItem>
								</SummaryList>

								<Tabs contained={false}>
									<TabList>
										<TabButton>Overview</TabButton>
										<TabButton>Contact</TabButton>
										<TabButton>Staff</TabButton>
										<TabButton>Insights</TabButton>
									</TabList>
									<TabPanels>
										<TabPanel>
											<SummaryList>
												<SummaryListItem>
													<SummaryListItemTerm>Type</SummaryListItemTerm>
													<SummaryListItemDescription>
														Fruit and vegetable wholesaler
													</SummaryListItemDescription>
												</SummaryListItem>
											</SummaryList>
										</TabPanel>
										<TabPanel>
											<SummaryList>
												<SummaryListItem>
													<SummaryListItemTerm>
														Representative name
													</SummaryListItemTerm>
													<SummaryListItemDescription>
														Will Power
													</SummaryListItemDescription>
												</SummaryListItem>
												<SummaryListItem>
													<SummaryListItemTerm>Title</SummaryListItemTerm>
													<SummaryListItemDescription>
														General Manager
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
													<SummaryListItemTerm>
														Date of birth
													</SummaryListItemTerm>
													<SummaryListItemDescription>
														09/06/1995
													</SummaryListItemDescription>
												</SummaryListItem>
											</SummaryList>
										</TabPanel>
										<TabPanel>
											<TableWrapper>
												<Table>
													<TableCaption>Staff</TableCaption>
													<TableHead>
														<tr>
															<TableHeader width="50%" scope="col">
																Name
															</TableHeader>
															<TableHeader scope="col">Role</TableHeader>
															<TableHeader scope="col">Location</TableHeader>
														</tr>
													</TableHead>
													<TableBody>
														<tr>
															<TableCell fontWeight="bold">
																<Flex
																	gap={0.5}
																	alignItems="center"
																	justifyContent="flex-start"
																	as="a"
																	href="#"
																	link
																	css={{
																		textDecoration: 'none',
																		'> span': {
																			textDecoration: 'underline',
																		},
																		'&:hover > span': {
																			textDecoration: 'none',
																			color: boxPalette.foregroundText,
																		},
																	}}
																>
																	<Avatar
																		name="Nathan Simpson"
																		size="sm"
																		tone="action"
																	/>
																	<Text
																		color="action"
																		fontSize="sm"
																		fontWeight="bold"
																	>
																		Nathan Simpson
																	</Text>
																</Flex>
															</TableCell>
															<TableCell>Forklift Operator</TableCell>
															<TableCell>Wharf 3</TableCell>
														</tr>
														<tr>
															<TableCell fontWeight="bold">
																<Flex
																	gap={0.5}
																	alignItems="center"
																	justifyContent="flex-start"
																	as="a"
																	href="#"
																	link
																	css={{
																		textDecoration: 'none',
																		'> span': {
																			textDecoration: 'underline',
																		},
																		'&:hover > span': {
																			textDecoration: 'none',
																			color: boxPalette.foregroundText,
																		},
																	}}
																>
																	<Avatar
																		name="Paul Maher"
																		size="sm"
																		tone="action"
																	/>
																	<Text
																		color="action"
																		fontSize="sm"
																		fontWeight="bold"
																	>
																		Paul Maher
																	</Text>
																</Flex>
															</TableCell>
															<TableCell>Supervisor</TableCell>
															<TableCell>Wharf 2</TableCell>
														</tr>
													</TableBody>
												</Table>
											</TableWrapper>
										</TabPanel>

										<TabPanel>
											<Box width="300px">
												<img
													alt="Screenshot of example chart"
													src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2012/06/Excel-charts-7.png"
												/>
											</Box>
										</TabPanel>
									</TabPanels>
								</Tabs>
							</Stack>
						</Column>

						<Column columnSpan={{ xs: 12, lg: 4 }}>
							<Tabs contained={false}>
								<TabList>
									<TabButton>Incoming</TabButton>
									<TabButton>Outgoing</TabButton>
								</TabList>
								<TabPanels>
									<TabPanel>
										<Text as="p">
											<Table>
												<TableCaption>Incoming vessels (SYD)</TableCaption>
												<TableHead>
													<tr>
														<TableHeader width="50%" scope="col">
															ID
														</TableHeader>
														<TableHeader scope="col">Wharf</TableHeader>
														<TableHeader scope="col">ETA</TableHeader>
													</tr>
												</TableHead>
												<TableBody>
													<tr>
														<TableCell fontWeight="bold">
															<TextLink href="#">QWERTY123</TextLink>
														</TableCell>
														<TableCell>3</TableCell>
														<TableCell>32 mins</TableCell>
													</tr>

													<tr>
														<TableCell fontWeight="bold">
															<TextLink href="#">QWERTY123</TextLink>
														</TableCell>
														<TableCell>1</TableCell>
														<TableCell>45 mins</TableCell>
													</tr>

													<tr>
														<TableCell fontWeight="bold">
															<TextLink href="#">QWERTY123</TextLink>
														</TableCell>
														<TableCell>9</TableCell>
														<TableCell>2 hours</TableCell>
													</tr>

													<tr>
														<TableCell fontWeight="bold">
															<TextLink href="#">QWERTY123</TextLink>
														</TableCell>
														<TableCell>12</TableCell>
														<TableCell>2 hours</TableCell>
													</tr>

													<tr>
														<TableCell fontWeight="bold">
															<TextLink href="#">QWERTY123</TextLink>
														</TableCell>
														<TableCell>1</TableCell>
														<TableCell>3 hours</TableCell>
													</tr>

													<tr>
														<TableCell fontWeight="bold">
															<TextLink href="#">QWERTY123</TextLink>
														</TableCell>
														<TableCell>3</TableCell>
														<TableCell>4 hours</TableCell>
													</tr>
												</TableBody>
											</Table>
										</Text>
									</TabPanel>

									<TabPanel>
										<Text as="p">Outgoing</Text>
									</TabPanel>
								</TabPanels>
							</Tabs>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		);
	},
};

export const ArtifactDetailsScreen: StoryObj = {
	render: function Render() {
		return (
			<AppLayout>
				<PageContent>
					<Stack gap={3} alignItems="flex-start">
						<Stack>
							<Text color="muted" fontWeight="bold">
								Voyage Details
							</Text>
							<H1>9378462 BAO BSD</H1>
						</Stack>
						<StatusBadge tone="info" label="Pending" />

						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>Port</SummaryListItemTerm>
								<SummaryListItemDescription>Sydney</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>
									Estimated time of arrival
								</SummaryListItemTerm>
								<SummaryListItemDescription>
									02/11/2023 12:07 (19 hours)
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Tyoe of vessel</SummaryListItemTerm>
								<SummaryListItemDescription>
									Bulk Carrier
								</SummaryListItemDescription>
							</SummaryListItem>

							<SummaryListItem>
								<SummaryListItemTerm>Port Agency</SummaryListItemTerm>
								<SummaryListItemDescription>
									<TextLink href="#">Mark Triple S</TextLink>
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Billing Agency</SummaryListItemTerm>
								<SummaryListItemDescription>
									<TextLink href="#">Mark Triple S</TextLink>
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>

						<Box width="100%">
							<Tabs>
								<TabList>
									<TabButton>Checks</TabButton>
									<TabButton>Contact</TabButton>
									<TabButton>Applications</TabButton>
									<TabButton>Insights</TabButton>
								</TabList>
								<TabPanels>
									<TabPanel>
										<SummaryList>
											<SummaryListItem>
												<SummaryListItemTerm>
													Approval to Berth
												</SummaryListItemTerm>
												<SummaryListItemDescription>
													<StatusBadge tone="success" label="Approved" />
												</SummaryListItemDescription>
											</SummaryListItem>
											<SummaryListItem>
												<SummaryListItemTerm>
													Non first point of Entry
												</SummaryListItemTerm>
												<SummaryListItemDescription>
													<StatusBadge tone="error" label="Not approved" />
												</SummaryListItemDescription>
											</SummaryListItem>
											<SummaryListItem>
												<SummaryListItemTerm>
													Biosecurity Inspection
												</SummaryListItemTerm>
												<SummaryListItemDescription>
													<StatusBadge tone="warning" label="Pending" />
												</SummaryListItemDescription>
											</SummaryListItem>
											<SummaryListItem>
												<SummaryListItemTerm>Pratique</SummaryListItemTerm>
												<SummaryListItemDescription>
													<StatusBadge tone="success" label="Approved" />
												</SummaryListItemDescription>
											</SummaryListItem>
										</SummaryList>
									</TabPanel>
									<TabPanel>
										<SummaryList>
											<SummaryListItem>
												<SummaryListItemTerm>
													Representative name
												</SummaryListItemTerm>
												<SummaryListItemDescription>
													Will Power
												</SummaryListItemDescription>
											</SummaryListItem>
											<SummaryListItem>
												<SummaryListItemTerm>Title</SummaryListItemTerm>
												<SummaryListItemDescription>
													General Manager
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
									</TabPanel>
									<TabPanel>
										<TableWrapper>
											<TableWrapper>
												<Table>
													<TableCaption>Applications Received</TableCaption>
													<TableHead>
														<tr>
															<TableHeader width="50%" scope="col">
																Type
															</TableHeader>
															<TableHeader scope="col">Port</TableHeader>
															<TableHeader scope="col">Status</TableHeader>
															<TableHeader scope="col">
																Date submitted
															</TableHeader>
														</tr>
													</TableHead>
													<TableBody>
														<tr>
															<TableCell fontWeight="bold">
																<TextLink href="#">PAR (Commercial)</TextLink>
															</TableCell>
															<TableCell>Sydney</TableCell>
															<TableCell>
																<StatusBadge
																	tone="success"
																	weight="subtle"
																	label="Completed"
																/>
															</TableCell>
															<TableCell>01/11/2023 11:57</TableCell>
														</tr>
													</TableBody>
												</Table>
											</TableWrapper>
										</TableWrapper>
									</TabPanel>
									<TabPanel>
										<Box width="300px">
											<img
												alt="example chart"
												src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2012/06/Excel-charts-7.png"
											/>
										</Box>
									</TabPanel>
								</TabPanels>
							</Tabs>
						</Box>
					</Stack>
				</PageContent>
			</AppLayout>
		);
	},
};
