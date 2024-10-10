import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SelectableTableBatchActions } from '../../../../.storybook/stories/SelectableTableBatchActions/SelectableTableBatchActions';
import { Checkbox } from '../checkbox';
import { VisuallyHidden } from '../a11y';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { StatusBadge } from '../status-badge';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { H1, H2 } from '../heading';
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
	name: 'With striped rows',
	args: { striped: true },
};

export const FixedLayout: Story = {
	name: 'With fixed layout',
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

export const AriaRowcount: Story = {
	name: 'With aria-rowcount',
	render: (args) => (
		<TableWrapper>
			<Table aria-rowcount={exampleData.length + 1} {...args}>
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<TableRow aria-rowindex={1}>
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
							<TableRow key={index} aria-rowindex={index + 2}>
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
	name: 'With heading',
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
	name: 'With row actions',
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
						<TableCell>20/06/2024</TableCell>
						<TableCell>
							<StatusBadge
								appearance="subtle"
								tone="infoMedium"
								label="In progress"
							/>
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
						<TableCell>25/06/2024</TableCell>
						<TableCell>
							<StatusBadge
								appearance="subtle"
								tone="infoMedium"
								label="In progress"
							/>
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
						<TableCell>02/07/2024</TableCell>
						<TableCell>
							<StatusBadge
								appearance="subtle"
								tone="successMedium"
								label="Completed"
							/>
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
						<TableCell>05/08/2024</TableCell>
						<TableCell>
							<StatusBadge
								appearance="subtle"
								tone="infoMedium"
								label="In progress"
							/>
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
						<TableCell>19/10/2024</TableCell>
						<TableCell>
							<StatusBadge
								appearance="subtle"
								tone="successMedium"
								label="Completed"
							/>
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

export const SelectableBasic: Story = {
	name: 'With selectable rows',
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
			// When no rows are selected or we're indeterminate, on toggle we'll select all rows to match the screen reader announcement
			setSelectedRowIds(allRowsSelected ? [] : exampleData.map((i) => i.id));
		}

		// The TableCaption` component can not be used with selectable tables due to a11y reasons
		// So we need to connect the heading with the table via `aria-labelledby`
		const headingId = 'table-heading';

		return (
			<Stack gap={1.5}>
				<H2 id={headingId}>Basic selectable table</H2>
				<Stack gap={0}>
					<Box paddingLeft={0.75} paddingBottom={0.75} borderBottom>
						<Checkbox
							size="sm"
							checked={allRowsSelected}
							indeterminate={isIndeterminate}
							onChange={toggleAllRows}
						>
							Select all rows
						</Checkbox>
					</Box>
					<TableWrapper>
						<Table {...props} aria-labelledby={headingId}>
							<TableHead>
								<TableRow>
									<TableHeader scope="col">Select</TableHeader>
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
														size="sm"
														checked={isSelected}
														onChange={() => toggleRow(id)}
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
				</Stack>
			</Stack>
		);
	},
};

export const SelectableWithBatchActions: Story = {
	name: 'With selectable rows and batch actions',
	render: SelectableTableBatchActions,
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
