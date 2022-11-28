import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLink } from '@ag.ds-next/text-link';
import { Flex, Stack } from '@ag.ds-next/box';
import { Pagination } from '@ag.ds-next/pagination';
import { Select } from '@ag.ds-next/select';
import { TextInput } from '@ag.ds-next/text-input';
import { Text } from '@ag.ds-next/text';
import { Button } from '@ag.ds-next/button';
import { StatusBadge } from '@ag.ds-next/badge';
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

const toneMapper = {
	Cancelled: 'error',
	Registered: 'success',
};

const Example: ComponentStory<typeof Table> = (args) => {
	const data = [
		{
			submissionDate: undefined,
			status: 'draft',
			id: '4f690575-8b96-4dbb-b9d6-a248088782f8',
			type: 'Establishment registration',
		},
		{
			submissionDate: undefined,
			status: 'draft',
			id: '0c8eaf7b-b9d3-4221-9e5b-87871c8442e2',
			type: 'Establishment registration',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: '4dea2af2-8192-41b9-8909-5772b5e1969d',
			type: 'Establishment registration',
		},
		{
			submissionDate: undefined,
			status: 'draft',
			id: 'aef2fa47-c431-472b-ab9f-f0a8a5d37f56',
			type: 'Establishment registration',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: '04bc33ac-134c-4edb-a221-81d345a891ec',
			type: 'Establishment registration',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: '4b8fecdf-d602-4476-be68-fce7133c272f',
			type: 'Establishment registration',
		},
		{
			submissionDate: undefined,
			status: 'draft',
			id: '89bf7ea4-d68f-4b6c-bae6-99d29e70811d',
			type: 'Establishment registration',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: 'f2342620-b5bc-44db-894d-969689373d1d',
			type: 'Establishment registration',
		},
	];

	return (
		<TableWrapper>
			<Table {...args}>
				<TableCaption>
					Your establishment registration applications
				</TableCaption>
				<TableHead>
					<tr>
						<TableHeader>Name</TableHeader>
						<TableHeader>Status</TableHeader>
						<TableHeader>Date submitted</TableHeader>
						<TableHeader display={{ xs: 'none', md: 'table-cell' }}>
							Application type
						</TableHeader>
						<TableHeader>Actions</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					{data.map(({ id, submissionDate, type }) => (
						<tr key={id}>
							<TableCell>
								<TextLink href={`#${id}`}>{id}</TextLink>
							</TableCell>
							<TableCell>
								<StatusBadge label="In progress" tone="success" />
							</TableCell>
							<TableCell>{submissionDate || 'Not yet submitted'}</TableCell>
							<TableCell display={{ xs: 'none', md: 'table-cell' }}>
								{type}
							</TableCell>
							<TableCell>
								<TextLink href={`#${id}`}>
									{submissionDate ? 'View' : 'Edit Draft'}
								</TextLink>
							</TableCell>
						</tr>
					))}
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

export const Filtering: ComponentStory<typeof Table> = (args) => {
	const data = [
		{
			submissionDate: undefined,
			id: 'AA4F690575',
			type: 'Establishment registration',
			status: 'Cancelled',
		},
		{
			submissionDate: undefined,
			id: 'AA0C8EAF7B',
			type: 'Establishment registration',
			status: 'Registered',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: 'AA4DEA2AF2',
			type: 'Establishment registration',
			status: 'Cancelled',
		},
		{
			submissionDate: undefined,
			id: 'AAAEF2FA47',
			type: 'Establishment registration',
			status: 'Registered',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: 'AA04BC33AC',
			type: 'Establishment registration',
			status: 'Cancelled',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: 'AA4B8FECDF',
			type: 'Establishment registration',
			status: 'Cancelled',
		},
		{
			submissionDate: undefined,
			id: 'AA89BF7EA4',
			type: 'Establishment registration',
			status: 'Cancelled',
		},
		{
			submissionDate: 'Tuesday 22 March 2022',
			id: 'AAF2342620',
			type: 'Establishment registration',
			status: 'Registered',
		},
	] as const;

	return (
		<Stack gap={1}>
			<Flex
				background="shade"
				rounded
				border
				padding={1}
				alignItems="flex-end"
				gap={1}
				justifyContent="space-between"
			>
				<Flex gap={1}>
					<TextInput label="Postcode" />
					<Select
						label="Assignment type"
						options={[{ label: 'All', value: 'all' }]}
					/>

					<TextInput label="Search text" />

					<Select
						label="Show number of rows"
						options={[{ label: '10 rows', value: 10 }]}
					/>
				</Flex>

				{/* <Switch checked={false} label="Only these ones" onChange={() => {}} /> */}

				<Flex gap={1}>
					<Button>Search</Button>
					<Button variant="secondary">Reset</Button>
				</Flex>
			</Flex>

			<TableWrapper>
				<Table {...args}>
					<TableCaption>
						Your establishment registration applications
					</TableCaption>
					<TableHead>
						<tr>
							<TableHeader>AA number</TableHeader>
							<TableHeader>Date submitted</TableHeader>
							<TableHeader display={{ xs: 'none', md: 'table-cell' }}>
								Application type
							</TableHeader>
							<TableHeader>Status</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{data.map(({ id, submissionDate, status, type }) => (
							<tr key={id}>
								<TableCell>
									<TextLink href={`#${id}`}>{id}</TextLink>
								</TableCell>
								<TableCell>{submissionDate || 'Not yet submitted'}</TableCell>
								<TableCell display={{ xs: 'none', md: 'table-cell' }}>
									{type}
								</TableCell>
								<TableCell>
									<StatusBadge tone={toneMapper[status]} label={status} />
								</TableCell>
							</tr>
						))}
					</TableBody>
				</Table>
			</TableWrapper>

			<Text color="muted">Showing 1-10 of 120 items</Text>

			<Pagination
				generateHref={(pageNumber) => `#${pageNumber}`}
				currentPage={5}
				totalPages={10}
			/>
		</Stack>
	);
};
