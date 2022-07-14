import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLink } from '@ag.ds-next/text-link';
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

const Example: ComponentStory<typeof Table> = (args) => {
	const data = [
		{
			submissionDate: undefined,
			id: '4f690575-8b96-4dbb-b9d6-a248088782f8',
			type: 'Establishment registration',
		},
		{
			submissionDate: undefined,
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
						<TableHeader>Date submitted</TableHeader>
						<TableHeader>Name</TableHeader>
						<TableHeader display={{ xs: 'none', md: 'table-cell' }}>
							Application type
						</TableHeader>
						<TableHeader>Actions</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					{data.map(({ id, submissionDate, type }) => (
						<tr key={id}>
							<TableCell>{submissionDate || 'Not yet submitted'}</TableCell>
							<TableCell>
								<TextLink href={`#${id}`}>{id}</TextLink>
							</TableCell>
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
				<TableCell>Nothern Territory</TableCell>
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
);
