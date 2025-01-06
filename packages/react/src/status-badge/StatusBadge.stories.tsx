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
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
	title: 'content/StatusBadge',
	component: StatusBadge,
};

export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const SuccessHigh: Story = {
	args: {
		label: 'Success',
		tone: 'successHigh',
	},
};

export const SuccessMedium: Story = {
	args: {
		label: 'Success',
		tone: 'successMedium',
	},
};

export const SuccessLow: Story = {
	args: {
		label: 'Success',
		tone: 'successLow',
	},
};

export const ErrorHigh: Story = {
	args: {
		label: 'Error',
		tone: 'errorHigh',
	},
};

export const ErrorMedium: Story = {
	args: {
		label: 'Error',
		tone: 'errorMedium',
	},
};

export const ErrorLow: Story = {
	args: {
		label: 'Error',
		tone: 'errorLow',
	},
};

export const WarningHigh: Story = {
	args: {
		label: 'Warning',
		tone: 'warningHigh',
	},
};

export const WarningMedium: Story = {
	args: {
		label: 'Warning',
		tone: 'warningMedium',
	},
};

export const WarningLow: Story = {
	args: {
		label: 'Warning',
		tone: 'warningLow',
	},
};

export const InfoHigh: Story = {
	args: {
		label: 'Info',
		tone: 'infoHigh',
	},
};

export const InfoMedium: Story = {
	args: {
		label: 'Info',
		tone: 'infoMedium',
	},
};

export const InfoLow: Story = {
	args: {
		label: 'Info',
		tone: 'infoLow',
	},
};

export const CannotStartLow: Story = {
	args: {
		label: 'Cannot start',
		tone: 'cannotStartLow',
	},
};

export const InProgressLow: Story = {
	args: {
		label: 'In progress',
		tone: 'inProgressLow',
	},
};

export const PausedLow: Story = {
	args: {
		label: 'Paused',
		tone: 'pausedLow',
	},
};

export const NotStartedLow: Story = {
	args: {
		label: 'Not started',
		tone: 'notStartedLow',
	},
};

export const UnknownLow: Story = {
	args: {
		label: 'Unknown',
		tone: 'unknownLow',
	},
};

export const SubtleAppearanceInTable: Story = {
	render: () => {
		const data = [
			{
				id: 'RE4321–2201–03',
				businessName: 'Orange Meat Works',
				status: 'Pending',
				tone: 'infoMedium',
				type: 'Record keeping—Minor',
			},
			{
				id: 'RE4321–2201–02',
				businessName: 'Orange Meat Works',
				status: 'Approved',
				tone: 'successHigh',
				type: 'Hygiene—Major',
			},
			{
				id: 'RE4321–2201–01',
				businessName: 'Molong Meat Works',
				status: 'Conflicted',
				tone: 'warningLow',
				type: 'Record keeping—Minor',
			},
			{
				id: 'RE4321–2201–00',
				businessName: 'Orange Meat Works',
				status: 'Rejected',
				tone: 'errorMedium',
				type: 'Record keeping—Minor',
			},
		] as const;

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
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map(({ id, businessName, status, tone, type }) => (
							<TableRow key={id}>
								<TableCell>{id}</TableCell>
								<TableCell>{businessName}</TableCell>
								<TableCell>{type}</TableCell>
								<TableCell>
									<StatusBadge appearance="subtle" label={status} tone={tone} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableWrapper>
		);
	},
};
