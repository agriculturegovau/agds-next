import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../checkbox';
import { VisuallyHidden } from '../a11y';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { StatusBadge } from '../status-badge';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { H1 } from '../heading';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCaption } from './TableCaption';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableHead } from './TableHead';
import { TableWrapper } from './TableWrapper';
import { TableRow } from './TableRow';

const meta: Meta<typeof Table> = {
	title: 'content/Table',
	component: Table,
	render: (args) => (
		<TableWrapper>
			<Table {...args}>
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<TableRow>
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
					</TableRow>
				</TableHead>
				<TableBody>
					{exampleData.map(
						({ location, population, growthYear, growthDecade }, index) => (
							<TableRow key={index}>
								<TableCell as="th" scope="row">
									{location}
								</TableCell>
								<TableCell textAlign="right">
									{numberFormatter.format(population)}
								</TableCell>
								<TableCell textAlign="right">{growthYear}%</TableCell>
								<TableCell textAlign="right">{growthDecade}%</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
			</Table>
		</TableWrapper>
	),
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
	args: {},
};

export const Striped: Story = {
	args: { striped: true },
};

export const FixedLayout: Story = {
	args: {
		tableLayout: 'fixed',
	},
	render: (args) => (
		<TableWrapper>
			<Table {...args}>
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<TableRow>
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
					</TableRow>
				</TableHead>
				<TableBody>
					{exampleData.map(
						({ location, population, growthYear, growthDecade }, index) => (
							<TableRow key={index}>
								<TableCell as="th" scope="row">
									{location}
								</TableCell>
								<TableCell textAlign="right">
									{numberFormatter.format(population)}
								</TableCell>
								<TableCell textAlign="right">{growthYear}%</TableCell>
								<TableCell textAlign="right">{growthDecade}%</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
			</Table>
		</TableWrapper>
	),
};

export const WithHeading: Story = {
	args: {},
	render: (args) => (
		<Stack gap={1}>
			<H1 id="table-heading">Population</H1>
			<Text id="table-description">
				Population of Australian states and territories, December 2015.
			</Text>
			<TableWrapper>
				<Table
					aria-labelledby="table-heading"
					aria-describedby="table-description"
					{...args}
				>
					<TableHead>
						<TableRow>
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
						</TableRow>
					</TableHead>
					<TableBody>
						{exampleData.map(
							({ location, population, growthYear, growthDecade }, index) => (
								<TableRow key={index}>
									<TableCell as="th" scope="row">
										{location}
									</TableCell>
									<TableCell textAlign="right">
										{numberFormatter.format(population)}
									</TableCell>
									<TableCell textAlign="right">{growthYear}%</TableCell>
									<TableCell textAlign="right">{growthDecade}%</TableCell>
								</TableRow>
							)
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	),
};

export const Actions: Story = {
	args: {},
	render: (args) => (
		<TableWrapper>
			<Table {...args}>
				<TableCaption>Applications</TableCaption>
				<TableHead>
					<TableRow>
						<TableHeader scope="col">Reference</TableHeader>
						<TableHeader scope="col">Date submitted</TableHeader>
						<TableHeader scope="col">Status</TableHeader>
						<TableHeader scope="col">Actions</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell as="th" scope="row" fontWeight="bold">
							<TextLink href="#">REF-AB3CD4EF</TextLink>
						</TableCell>
						<TableCell>20/06/2022</TableCell>
						<TableCell>
							<StatusBadge weight="subtle" tone="info" label="In progress" />
						</TableCell>
						<TableCell>
							<Flex gap={1}>
								<TextLink href="#">Edit</TextLink>
								<TextLink href="#">Download</TextLink>
							</Flex>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell as="th" scope="row" fontWeight="bold">
							<TextLink href="#">REF-5GH6IJ7K</TextLink>
						</TableCell>
						<TableCell>25/06/2022</TableCell>
						<TableCell>
							<StatusBadge weight="subtle" tone="info" label="In progress" />
						</TableCell>
						<TableCell>
							<Flex gap={1}>
								<TextLink href="#">Edit</TextLink>
								<TextLink href="#">Download</TextLink>
							</Flex>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell as="th" scope="row" fontWeight="bold">
							<TextLink href="#">REF-M8NO9PQR</TextLink>
						</TableCell>
						<TableCell>02/07/2022</TableCell>
						<TableCell>
							<StatusBadge weight="subtle" tone="success" label="Completed" />
						</TableCell>
						<TableCell>
							<Flex gap={1}>
								<TextLink href="#">Edit</TextLink>
								<TextLink href="#">Download</TextLink>
							</Flex>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell as="th" scope="row" fontWeight="bold">
							<TextLink href="#">REF-S1TU2VWX</TextLink>
						</TableCell>
						<TableCell>05/08/2022</TableCell>
						<TableCell>
							<StatusBadge weight="subtle" tone="info" label="In progress" />
						</TableCell>
						<TableCell>
							<Flex gap={1}>
								<TextLink href="#">Edit</TextLink>
								<TextLink href="#">Download</TextLink>
							</Flex>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell as="th" scope="row" fontWeight="bold">
							<TextLink href="#">REF-Y3ZA4B5C</TextLink>
						</TableCell>
						<TableCell>19/10/2022</TableCell>
						<TableCell>
							<StatusBadge weight="subtle" tone="success" label="Completed" />
						</TableCell>
						<TableCell>
							<Flex gap={1}>
								<TextLink href="#">Edit</TextLink>
								<TextLink href="#">Download</TextLink>
							</Flex>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableWrapper>
	),
};

export const Selectable: Story = {
	render: function Render(props) {
		const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

		function isRowSelected(rowId: string) {
			return selectedRowIds.includes(rowId);
		}

		function toggleRow(rowId: string) {
			setSelectedRowIds((selectedRowIds) => {
				if (selectedRowIds.includes(rowId)) {
					return selectedRowIds.filter((i) => i !== rowId);
				} else {
					return [...selectedRowIds, rowId];
				}
			});
		}

		const allRowsSelected = selectedRowIds.length === exampleData.length;
		const isIndeterminate = allRowsSelected ? false : selectedRowIds.length > 0;

		function toggleAllRows() {
			// When no rows are selected, select every row
			// When any row is selected, deselect every row
			const noRowsSelected = selectedRowIds.length === 0;
			setSelectedRowIds(noRowsSelected ? exampleData.map((i) => i.id) : []);
		}

		return (
			<TableWrapper>
				<Table {...props}>
					<TableCaption>
						Population of Australian states and territories, December 2015
					</TableCaption>
					<TableHead>
						<TableRow>
							<TableCell>
								<Checkbox
									size="sm"
									checked={allRowsSelected}
									indeterminate={isIndeterminate}
									onChange={toggleAllRows}
								>
									<VisuallyHidden>Select all rows</VisuallyHidden>
								</Checkbox>
							</TableCell>
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
						</TableRow>
					</TableHead>
					<TableBody>
						{exampleData.map(
							({ id, location, population, growthYear, growthDecade }) => {
								const isSelected = isRowSelected(id);
								return (
									<TableRow key={id} selected={isSelected}>
										<TableCell>
											<Checkbox
												checked={isSelected}
												onChange={() => toggleRow(id)}
												size="sm"
											>
												<VisuallyHidden>Select {location}</VisuallyHidden>
											</Checkbox>
										</TableCell>
										<TableCell as="th" scope="row">
											{location}
										</TableCell>
										<TableCell textAlign="right">
											{numberFormatter.format(population)}
										</TableCell>
										<TableCell textAlign="right">{growthYear}%</TableCell>
										<TableCell textAlign="right">{growthDecade}%</TableCell>
									</TableRow>
								);
							}
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		);
	},
};

const exampleData = [
	{
		id: 'nsw',
		location: 'New South Wales',
		population: 7670700,
		growthYear: 3.1,
		growthDecade: 12.9,
	},
	{
		id: 'vic',
		location: 'Victoria',
		population: 5996400,
		growthYear: 2.5,
		growthDecade: 9.3,
	},
	{
		id: 'qld',
		location: 'Queensland',
		population: 4808800,
		growthYear: 1.7,
		growthDecade: 13.3,
	},
	{
		id: 'wa',
		location: 'Western Australia',
		population: 2603900,
		growthYear: 2.3,
		growthDecade: 11.6,
	},
	{
		id: 'sa',
		location: 'South Australia',
		population: 1702800,
		growthYear: 2.0,
		growthDecade: 6.8,
	},
	{
		id: 'tas',
		location: 'Tasmania',
		population: 517400,
		growthYear: 4,
		growthDecade: 5.3,
	},
	{
		id: 'nt',
		location: 'Northern Territory',
		population: 244400,
		growthYear: 1.2,
		growthDecade: 4.5,
	},
	{
		id: 'act',
		location: 'Australian Capital Territory',
		population: 393000,
		growthYear: 2.4,
		growthDecade: 9.6,
	},
];

const numberFormatter = new Intl.NumberFormat('en-AU');
