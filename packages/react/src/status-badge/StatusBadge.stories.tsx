import { StoryObj, Meta } from '@storybook/react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
	TableRow,
} from '../table';
import { TextLink } from '../text-link';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
	title: 'content/StatusBadge',
	component: StatusBadge,
};

export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const Info: Story = {
	args: {
		tone: 'info',
		label: 'In progress',
	},
};

export const InfoSubtle: Story = {
	args: {
		weight: 'subtle',
		tone: 'info',
		label: 'Resolved',
	},
};

export const Success: Story = {
	args: {
		tone: 'success',
		label: 'Resolved',
	},
};

export const SuccessSubtle: Story = {
	args: {
		weight: 'subtle',
		tone: 'success',
		label: 'Resolved',
	},
};

export const Error: Story = {
	args: {
		tone: 'error',
		label: 'Rejected',
	},
};

export const ErrorSubtle: Story = {
	args: {
		weight: 'subtle',
		tone: 'error',
		label: 'Rejected',
	},
};

export const Warning: Story = {
	args: {
		tone: 'warning',
		label: 'Attention',
	},
};

export const WarningSubtle: Story = {
	args: {
		weight: 'subtle',
		tone: 'warning',
		label: 'Attention',
	},
};

export const Neutral: Story = {
	args: {
		tone: 'neutral',
		label: 'Draft',
	},
};

export const NeutralSubtle: Story = {
	args: {
		weight: 'subtle',
		tone: 'neutral',
		label: 'Draft',
	},
};

export const InTable = () => {
	const data = [
		{
			id: 'RE4321–2201–03',
			businessName: 'Orange Meat Works',
			type: 'Record keeping—Minor',
			status: 'Pending',
		},
		{
			id: 'RE4321–2201–02',
			businessName: 'Orange Meat Works',
			type: 'Hygiene—Major',
			status: 'Open',
		},
		{
			id: 'RE4321–2201–01',
			businessName: 'Molong Meat Works',
			type: 'Record keeping—Minor',
			status: 'Open',
		},
		{
			id: 'RE4321–2201–00',
			businessName: 'Orange Meat Works',
			type: 'Record keeping—Minor',
			status: 'Closed',
		},
	] as const;

	const toneMapper = {
		Closed: 'success',
		Open: 'warning',
		Pending: 'info',
		Draft: 'neutral',
	} as const;

	return (
		<TableWrapper>
			<Table>
				<TableCaption>Corrective action requests (CAR)</TableCaption>
				<TableHead>
					<TableRow>
						<TableHeader>CAR number</TableHeader>
						<TableHeader>Establishment name</TableHeader>
						<TableHeader>Activity and severity</TableHeader>
						<TableHeader>Status</TableHeader>
						<TableHeader>Actions</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(({ id, businessName, status, type }) => (
						<TableRow key={id}>
							<TableCell>{id}</TableCell>
							<TableCell>{businessName}</TableCell>
							<TableCell>{type}</TableCell>
							<TableCell>
								<StatusBadge
									weight="subtle"
									tone={toneMapper[status]}
									label={status}
								/>
							</TableCell>
							<TableCell>
								<TextLink href={`#${id}`}>
									{status == 'Closed' ? 'View' : 'Manage'}
								</TextLink>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableWrapper>
	);
};
