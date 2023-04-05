import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Text } from '../text';
import { Stack } from '../box';
import { H1 } from '../heading';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCaption } from './TableCaption';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableHead } from './TableHead';
import { TableWrapper } from './TableWrapper';

const Template: StoryFn<typeof Table> = (args) => (
	<TableWrapper>
		<Table {...args}>
			<TableCaption>
				Population of Australian states and territories, December 2015
			</TableCaption>
			<TableHead>
				<tr>
					<TableHeader scope="col">Location</TableHeader>
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
				{exampleData.map(
					({ location, population, growthYear, growthDecade }, index) => (
						<tr key={index}>
							<TableCell as="th" scope="row">
								{location}
							</TableCell>
							<TableCell textAlign="right">
								{numberFormatter.format(population)}
							</TableCell>
							<TableCell textAlign="right">{growthYear}%</TableCell>
							<TableCell textAlign="right">{growthDecade}%</TableCell>
						</tr>
					)
				)}
			</TableBody>
		</Table>
	</TableWrapper>
);

const meta: Meta<typeof Table> = {
	title: 'content/Table',
	component: Table,
	render: Template,
};

export default meta;

const exampleData = [
	{
		location: 'New South Wales',
		population: 7670700,
		growthYear: 3.1,
		growthDecade: 12.9,
	},
	{
		location: 'Victoria',
		population: 5996400,
		growthYear: 2.5,
		growthDecade: 9.3,
	},
	{
		location: 'Queensland',
		population: 4808800,
		growthYear: 1.7,
		growthDecade: 13.3,
	},
	{
		location: 'Western Australia',
		population: 2603900,
		growthYear: 2.3,
		growthDecade: 11.6,
	},
	{
		location: 'South Australia',
		population: 1702800,
		growthYear: 2.0,
		growthDecade: 6.8,
	},
	{
		location: 'Tasmania',
		population: 517400,
		growthYear: 4,
		growthDecade: 5.3,
	},
	{
		location: 'Northern Territory',
		population: 244400,
		growthYear: 1.2,
		growthDecade: 4.5,
	},
	{
		location: 'Australian Capital Territory',
		population: 393000,
		growthYear: 2.4,
		growthDecade: 9.6,
	},
];

const numberFormatter = new Intl.NumberFormat('en-AU');

type Story = StoryObj<typeof Table>;

export const Basic: Story = {};

export const Striped: Story = {
	args: {
		striped: true,
	},
};

export const FixedLayout = () => (
	<TableWrapper>
		<Table tableLayout="fixed">
			<TableCaption>
				Population of Australian states and territories, December 2015
			</TableCaption>
			<TableHead>
				<tr>
					<TableHeader scope="col" width={{ xs: '14rem', md: '40%' }}>
						Location
					</TableHeader>
					<TableHeader
						scope="col"
						textAlign="right"
						width={{ xs: '10rem', md: '20%' }}
					>
						Population
					</TableHeader>
					<TableHeader
						scope="col"
						textAlign="right"
						width={{ xs: '14rem', md: '20%' }}
					>
						Change over previous year %
					</TableHeader>
					<TableHeader
						scope="col"
						textAlign="right"
						width={{ xs: '14rem', md: '20%' }}
					>
						Change over previous decade %
					</TableHeader>
				</tr>
			</TableHead>
			<TableBody>
				{exampleData.map(
					({ location, population, growthYear, growthDecade }, index) => (
						<tr key={index}>
							<TableCell as="th" scope="row">
								{location}
							</TableCell>
							<TableCell textAlign="right">
								{numberFormatter.format(population)}
							</TableCell>
							<TableCell textAlign="right">{growthYear}%</TableCell>
							<TableCell textAlign="right">{growthDecade}%</TableCell>
						</tr>
					)
				)}
			</TableBody>
		</Table>
	</TableWrapper>
);

export const WithHeading = () => {
	return (
		<Stack gap={1}>
			<H1 id="table-heading">Population</H1>
			<Text id="table-description">
				Population of Australian states and territories, December 2015.
			</Text>
			<TableWrapper>
				<Table
					aria-labelledby="table-heading"
					aria-describedby="table-description"
				>
					<TableHead>
						<tr>
							<TableHeader scope="col">Location</TableHeader>
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
						{exampleData.map(
							({ location, population, growthYear, growthDecade }, index) => (
								<tr key={index}>
									<TableCell as="th" scope="row">
										{location}
									</TableCell>
									<TableCell textAlign="right">
										{numberFormatter.format(population)}
									</TableCell>
									<TableCell textAlign="right">{growthYear}%</TableCell>
									<TableCell textAlign="right">{growthDecade}%</TableCell>
								</tr>
							)
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
};
