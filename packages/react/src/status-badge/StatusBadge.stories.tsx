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

export const SuccessHigh: Story = {
	args: {
		label: 'Success',
		type: 'successHigh',
	},
};

export const SuccessMedium: Story = {
	args: {
		label: 'Success',
		type: 'successMedium',
	},
};

export const SuccessLow: Story = {
	args: {
		label: 'Success',
		type: 'successLow',
	},
};

export const ErrorHigh: Story = {
	args: {
		label: 'Error',
		type: 'errorHigh',
	},
};

export const ErrorMedium: Story = {
	args: {
		label: 'Error',
		type: 'errorMedium',
	},
};

export const ErrorLow: Story = {
	args: {
		label: 'Error',
		type: 'errorLow',
	},
};

export const WarningHigh: Story = {
	args: {
		label: 'Warning',
		type: 'warningHigh',
	},
};

export const WarningMedium: Story = {
	args: {
		label: 'Warning',
		type: 'warningMedium',
	},
};

export const WarningLow: Story = {
	args: {
		label: 'Warning',
		type: 'warningLow',
	},
};

export const InfoHigh: Story = {
	args: {
		label: 'Info',
		type: 'infoHigh',
	},
};

export const InfoMedium: Story = {
	args: {
		label: 'Info',
		type: 'infoMedium',
	},
};

export const InfoLow: Story = {
	args: {
		label: 'Info',
		type: 'infoLow',
	},
};

export const BlockedLow: Story = {
	args: {
		label: 'Blocked',
		type: 'blockedLow',
	},
};

export const InProgressLow: Story = {
	args: {
		label: 'In progress',
		type: 'inProgressLow',
	},
};

export const PausedLow: Story = {
	args: {
		label: 'Paused',
		type: 'pausedLow',
	},
};

export const TodoLow: Story = {
	args: {
		label: 'Todo',
		type: 'todoLow',
	},
};

export const UnknownLow: Story = {
	args: {
		label: 'Unknown',
		type: 'unknownLow',
	},
};

export const InTableExample: Story = {
	render: () => {
		const data = [
			{
				id: 'RE4321–2201–03',
				businessName: 'Orange Meat Works',
				type: 'Record keeping—Minor',
				status: 'Pending',
				statusType: 'infoMedium',
			},
			{
				id: 'RE4321–2201–02',
				businessName: 'Orange Meat Works',
				type: 'Hygiene—Major',
				status: 'Approved',
				statusType: 'successHigh',
			},
			{
				id: 'RE4321–2201–01',
				businessName: 'Molong Meat Works',
				type: 'Record keeping—Minor',
				status: 'Conflicted',
				statusType: 'warningLow',
			},
			{
				id: 'RE4321–2201–00',
				businessName: 'Orange Meat Works',
				type: 'Record keeping—Minor',
				status: 'Rejected',
				statusType: 'errorMedium',
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
						{data.map(({ id, businessName, status, statusType, type }) => (
							<TableRow key={id}>
								<TableCell>{id}</TableCell>
								<TableCell>{businessName}</TableCell>
								<TableCell>{type}</TableCell>
								<TableCell>
									<StatusBadge
										appearance="subtle"
										type={statusType}
										label={status}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableWrapper>
		);
	},
};
