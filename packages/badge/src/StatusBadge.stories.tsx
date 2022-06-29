import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { StatusBadge } from './StatusBadge';

export default {
	title: 'content/Badge/StatusBadge',
	component: StatusBadge,
} as ComponentMeta<typeof StatusBadge>;

const Template: ComponentStory<typeof StatusBadge> = (args) => (
	<StatusBadge {...args} />
);

export const OnLight = Template.bind({});
OnLight.args = {
	tone: 'info',
	label: 'In progress',
};

export const OnDark: ComponentStory<typeof StatusBadge> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	tone: 'info',
	label: 'In progress',
};

export const LanguageExamples = () => {
	return (
		<Flex gap={1}>
			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="success" label="Approved" />
				<StatusBadge tone="success" label="Accepted" />
				<StatusBadge tone="success" label="Online" />
				<StatusBadge tone="success" label="Open" />
				<StatusBadge tone="success" label="Available" />
				<StatusBadge tone="success" label="Success" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="info" label="In progress" />
				<StatusBadge tone="info" label="Pending" />
				<StatusBadge tone="info" label="New" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="warning" label="Due" />
				<StatusBadge tone="warning" label="Alert" />
				<StatusBadge tone="warning" label="Attention" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="error" label="Rejected" />
				<StatusBadge tone="error" label="Outage" />
				<StatusBadge tone="error" label="Overdue" />
				<StatusBadge tone="error" label="Error" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<StatusBadge tone="neutral" label="Draft" />
			</Stack>
		</Flex>
	);
};
