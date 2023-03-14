import { ComponentStory, ComponentMeta } from '@storybook/react';
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

export default {
	title: 'content/Table',
	component: Table,
	subcomponents: {
		TableBody,
		TableCaption,
		TableCell,
		TableHeader,
		TableHead,
		TableWrapper,
	},
} as ComponentMeta<typeof Table>;

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

const Example: ComponentStory<typeof Table> = (args) => {
	return (
		<TableWrapper>
			<Table {...args}>
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
					{exampleData.map(
						({ location, population, growthYear, growthDecade }, index) => (
							<tr key={index}>
								<TableCell>{location}</TableCell>
								<TableCell textAlign="right">{population}</TableCell>
								<TableCell textAlign="right">{growthYear}</TableCell>
								<TableCell textAlign="right">{growthDecade}</TableCell>
							</tr>
						)
					)}
				</TableBody>
			</Table>
		</TableWrapper>
	);
};

export const Basic: ComponentStory<typeof Table> = (args) => (
	<Example {...args} />
);

export const Modular: ComponentStory<typeof Table> = (args) => (
	<TableWrapper>
		<Table {...args}>
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
);

export const WithHeading = () => {
	return (
		<Stack gap={1}>
			<H1 id="table-heading">Applications</H1>
			<Text id="table-description">
				This list of active establishment registrations
			</Text>
			<TableWrapper>
				<Table
					aria-labelledby="table-heading"
					aria-describedby="table-description"
				>
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
						{exampleData.map(
							({ location, population, growthYear, growthDecade }, index) => (
								<tr key={index}>
									<TableCell>{location}</TableCell>
									<TableCell textAlign="right">{population}</TableCell>
									<TableCell textAlign="right">{growthYear}</TableCell>
									<TableCell textAlign="right">{growthDecade}</TableCell>
								</tr>
							)
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
};
