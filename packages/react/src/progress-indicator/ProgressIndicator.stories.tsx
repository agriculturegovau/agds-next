import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { ProgressIndicator } from './index';

const meta: Meta<typeof ProgressIndicator> = {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
};

export default meta;

type Story = StoryObj<typeof meta>;

const exampleLinkItems = [
	{ href: '#', label: 'Introduction', status: 'done' as const },
	{ href: '#', label: 'Organisations', status: 'started' as const },
	{ href: '#', label: 'Business contacts', status: 'doing' as const },
	{ href: '#', label: 'Case studies', status: 'todo' as const },
	{ href: '#', label: 'Attachments', status: 'blocked' as const },
];

const exampleButtonItems = [
	{ onClick: console.log, label: 'Introduction', status: 'done' as const },
	{ onClick: console.log, label: 'Organisations', status: 'started' as const },
	{
		onClick: console.log,
		label: 'Business contacts',
		status: 'doing' as const,
	},
	{ onClick: console.log, label: 'Case studies', status: 'todo' as const },
	{ onClick: console.log, label: 'Attachments', status: 'blocked' as const },
];

export const Basic: Story = {
	args: {
		items: exampleLinkItems,
	},
};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		items: exampleButtonItems,
	},
	parameters: {
		layout: 'fullscreen',
	},
	render: (props) => (
		<Box background="bodyAlt" padding={1.5}>
			<ProgressIndicator {...props} />
		</Box>
	),
};

export const Buttons: Story = {
	args: {
		items: exampleButtonItems,
	},
};
