import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden } from '../a11y';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { H2, H3, Heading } from '../heading';
import { ChevronRightIcon } from '../icon';
import { Columns, Column } from '../columns';
import { DirectionLink } from '../direction-link';
import { Tags } from '../tags';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { StatusBadge } from '../status-badge';
import { PageContent } from '../content';
import { Card } from './Card';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

const meta: Meta<typeof Card> = {
	title: 'layout/Card',
	component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
	args: {},
	render: function Render(props) {
		return (
			<Box maxWidth={300}>
				<Card {...props}>
					<CardInner>
						<Stack gap={1}>
							<Heading as="h2" type="h3">
								Card heading
							</Heading>
							<Text as="p">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
								voluptat
							</Text>
						</Stack>
					</CardInner>
				</Card>
			</Box>
		);
	},
};

export const Clickable: Story = {
	args: {
		clickable: true,
		shadow: true,
	},
	render: function Render(props) {
		return (
			<Box maxWidth={300}>
				<Card {...props}>
					<CardInner>
						<Stack gap={1}>
							<Heading as="h2" type="h3">
								Card heading
							</Heading>
							<Text as="p">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
								voluptat
							</Text>
							<CardLink href="#">
								Linking out
								<ChevronRightIcon />
							</CardLink>
						</Stack>
					</CardInner>
				</Card>
			</Box>
		);
	},
};

export const ClickableWithFooterOutside: Story = {
	args: {
		clickable: true,
		shadow: true,
	},
	render: function Render(props) {
		return (
			<Box maxWidth={300}>
				<Card
					{...props}
					footer={
						<CardFooter>
							<TextLink href="#">Action</TextLink>
						</CardFooter>
					}
				>
					<CardInner>
						<Stack gap={1}>
							<Heading as="h2" type="h3">
								Card heading
							</Heading>
							<Text as="p">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
								voluptat
							</Text>
							<CardLink href="#">
								Linking out
								<ChevronRightIcon />
							</CardLink>
						</Stack>
					</CardInner>
				</Card>
			</Box>
		);
	},
};

export const FeatureHeader: Story = {
	args: {
		background: 'body',
	},
	render: function Render(props) {
		return (
			<Columns>
				<Column columnSpan={6}>
					<Card {...props}>
						<CardHeader>
							<Heading type="h4">Feature card title</Heading>
						</CardHeader>
						<CardInner>
							<Text as="p">Additional content relating to the card</Text>
						</CardInner>
					</Card>
				</Column>
				<Column columnSpan={6}>
					<Card {...props}>
						<CardHeader background="bodyAlt">
							<Heading type="h4">Feature card title</Heading>
						</CardHeader>
						<CardInner>
							<Text as="p">Additional content relating to the card</Text>
						</CardInner>
					</Card>
				</Column>
			</Columns>
		);
	},
};

export const WithFooter: Story = {
	args: {
		background: 'body',
	},
	render: function Render(props) {
		return (
			<Columns>
				<Column columnSpan={6}>
					<Card
						{...props}
						footer={
							<CardFooter>
								<TextLink href="#">Action</TextLink>
							</CardFooter>
						}
					>
						<CardInner>
							<Stack gap={1}>
								<Heading type="h3">Card title</Heading>
								<Text as="p">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
									voluptatibus.
								</Text>
							</Stack>
						</CardInner>
					</Card>
				</Column>
				<Column columnSpan={6}>
					<Card
						{...props}
						footer={
							<CardFooter background="bodyAlt">
								<TextLink href="#">Action</TextLink>
							</CardFooter>
						}
					>
						<CardInner>
							<Stack gap={1}>
								<Heading type="h3">Card title</Heading>
								<Text as="p">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
									voluptatibus.
								</Text>
							</Stack>
						</CardInner>
					</Card>
				</Column>
			</Columns>
		);
	},
};

export const CardList: Story = {
	name: 'List of Cards',
	render: function Render() {
		const toneMapper = {
			Closed: 'successMedium',
			Open: 'warningMedium',
			Pending: 'infoMedium',
		} as const;
		const listData = [
			{
				id: 'RE4321-2201-03',
				businessName: 'Orange Meat Works',
				type: 'Record keeping (Minor)',
				status: 'Pending',
			},
			{
				id: 'RE4321-2201-02',
				businessName: 'Orange Meat Works',
				type: 'Hygiene (Major)',
				status: 'Open',
			},
			{
				id: 'RE4321-2201-01',
				businessName: 'Orange Meat Works',
				type: 'Record keeping (Minor)',
				status: 'Closed',
			},
		] as const;

		return (
			<PageContent>
				<Stack gap={1.5}>
					<H2>Active CARs</H2>
					<Text as="p">You may now manage your CARs online.</Text>
					<Columns as="ul" cols={{ xs: 1, sm: 2, lg: 3 }} gap={1}>
						{listData.map((item) => (
							<Card as="li" clickable key={item.id} shadow>
								<CardInner>
									<Stack flexWrap="wrap" gap={0.5} width="100%">
										<H3>
											<CardLink href={`#${item.id}`}>
												{item.businessName}
											</CardLink>
										</H3>

										<Text as="p">
											<VisuallyHidden>Type: </VisuallyHidden>
											{item.type}
										</Text>

										<Flex
											alignItems="center"
											flexWrap="wrap"
											gap={0.5}
											justifyContent="space-between"
										>
											<Text color="muted" fontSize="xs">
												<VisuallyHidden>{'CAR ID: '}</VisuallyHidden>
												{item.id}
											</Text>
											<StatusBadge
												label={
													<Fragment>
														<VisuallyHidden>{'Status: '}</VisuallyHidden>
														{item.status}
													</Fragment>
												}
												tone={toneMapper[item.status]}
											/>
										</Flex>
									</Stack>
								</CardInner>
							</Card>
						))}
					</Columns>
				</Stack>
			</PageContent>
		);
	},
};

export const Compositions = () => {
	return (
		<PageContent>
			<Columns cols={{ xs: 1, sm: 2 }}>
				<Column>
					<Stack gap={2} width="100%">
						<Card>
							<CardInner>
								<Stack gap={1}>
									<Heading as="h2" type="h3">
										Card title
									</Heading>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Cras non finibus leo.
									</Text>
									<DirectionLink direction="right">Learn more</DirectionLink>
								</Stack>
							</CardInner>
						</Card>

						<Card clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<Box as="h3">
										<CardLink href="#">Card link</CardLink>
									</Box>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Cras non finibus leo.
									</Text>
								</Stack>
							</CardInner>
						</Card>

						<Card clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<Pictogram />

									<Box as="h3">
										<CardLink href="#">Card link</CardLink>
									</Box>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Cras non finibus leo.
									</Text>
								</Stack>
							</CardInner>
						</Card>

						<Card
							clickable
							footer={
								<CardFooter>
									<TextLink href="#">Action</TextLink>
								</CardFooter>
							}
							shadow
						>
							<CardInner>
								<Stack gap={0.5}>
									<Pictogram />

									<Box fontWeight="bold">
										<CardLink>Card link, footer outside</CardLink>
									</Box>
								</Stack>
							</CardInner>
						</Card>

						<Card
							clickable
							footer={
								<CardFooter>
									<TextLink href="#">Action</TextLink>
								</CardFooter>
							}
							shadow
						>
							<img
								alt="Placeholder image"
								src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"
								width="100%"
							/>
							<CardInner>
								<Stack gap={1}>
									<Box as="h3">
										<CardLink href="#">News item</CardLink>
									</Box>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Cras non finibus leo.
									</Text>
								</Stack>
							</CardInner>
						</Card>
					</Stack>
				</Column>

				<Column>
					<Stack gap={2} width="100%">
						<Card clickable shadow>
							<CardInner>
								<Stack gap={0.5}>
									<Pictogram />

									<Box fontWeight="bold">
										<CardLink>Add a commodity, product or operation</CardLink>
									</Box>
								</Stack>
							</CardInner>
						</Card>

						<Card clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<Flex gap={0.5}>
										<Tags items={[{ label: '1034' }]} />
										<Text>Meat</Text>
									</Flex>

									<Box fontWeight="bold">
										<CardLink>Orange Farmers Market</CardLink>
									</Box>
								</Stack>
							</CardInner>
						</Card>

						<Card clickable shadow>
							<img
								alt="Placeholder image"
								src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"
								width="100%"
							/>
							<CardInner>
								<Stack gap={1}>
									<Box as="h3">
										<CardLink href="#">News item</CardLink>
									</Box>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Cras non finibus leo.
									</Text>
								</Stack>
							</CardInner>
						</Card>

						<Card clickable shadow>
							<Flex>
								<img
									alt="Placeholder image"
									css={{
										width: '50%',
										objectFit: 'cover',
									}}
									src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"
								/>
								<CardInner>
									<Stack gap={1}>
										<Box as="h3">
											<CardLink href="#">News item</CardLink>
										</Box>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Cras non finibus leo.
										</Text>
									</Stack>
								</CardInner>
							</Flex>
						</Card>
						<Card
							clickable
							footer={
								<CardFooter>
									<TextLink href="#">Action</TextLink>
								</CardFooter>
							}
							shadow
						>
							<Flex>
								<img
									alt="Placeholder image"
									css={{
										width: '50%',
										objectFit: 'cover',
									}}
									src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"
								/>
								<CardInner>
									<Stack gap={1}>
										<Box as="h3">
											<CardLink href="#">News item</CardLink>
										</Box>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Cras non finibus leo.
										</Text>
									</Stack>
								</CardInner>
							</Flex>
						</Card>
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
};

const Pictogram = () => {
	return (
		<svg
			fill="none"
			height="64"
			stroke="#00558B"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 64 64"
			width="64"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M31 36H17" />
			<path d="M47 59C53.6274 59 59 53.6274 59 47C59 40.3726 53.6274 35 47 35C40.3726 35 35 40.3726 35 47C35 53.6274 40.3726 59 47 59Z" />
			<path d="M51 43C49.8647 44.8542 45.5972 50.9964 45.5972 50.9964L43 49" />
			<path d="M27 46H17" />
			<path d="M41 26H17" />
			<path d="M32.9989 59H10.9989C9.89459 59 8.99925 58.1049 8.99897 57.0006C8.99475 40.3336 8.99555 23.6666 8.99894 6.99957C8.99916 5.89517 9.89462 5 10.999 5V5H42.0763C42.6601 5 43.2147 5.25505 43.5946 5.69823L54.5173 18.4382C54.8281 18.8007 54.9989 19.2625 54.9989 19.74V31" />
			<path d="M43.0003 6L43 17C43 18.1045 43.8955 19 45 19H54" />
		</svg>
	);
};
