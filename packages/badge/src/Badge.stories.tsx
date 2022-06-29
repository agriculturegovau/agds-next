import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Badge } from './Badge';

export default {
	title: 'content/Badge/Badge',
	component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const OnLight = Template.bind({});
OnLight.args = {
	tone: 'info',
	label: 'In progress',
};

export const OnDark: ComponentStory<typeof Badge> = (args) => (
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
				<Badge tone="success" label="Approved" />
				<Badge tone="success" label="Accepted" />
				<Badge tone="success" label="Online" />
				<Badge tone="success" label="Open" />
				<Badge tone="success" label="Available" />
				<Badge tone="success" label="Success" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<Badge tone="info" label="In progress" />
				<Badge tone="info" label="Pending" />
				<Badge tone="info" label="New" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<Badge tone="warning" label="Due" />
				<Badge tone="warning" label="Alert" />
				<Badge tone="warning" label="Attention" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<Badge tone="error" label="Rejected" />
				<Badge tone="error" label="Outage" />
				<Badge tone="error" label="Overdue" />
				<Badge tone="error" label="Error" />
			</Stack>

			<Stack gap={0.5} alignItems="flex-start">
				<Badge tone="neutral" label="Draft" />
			</Stack>
		</Flex>
	);
};
