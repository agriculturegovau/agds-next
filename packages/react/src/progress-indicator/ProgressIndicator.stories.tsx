import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { ProgressIndicator, ProgressIndicatorItem } from './index';

const meta: Meta<typeof ProgressIndicator> = {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
};

export default meta;

type Story = StoryObj<typeof meta>;

const exampleLinkItems: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', href: '#' },
	{ label: 'Submit evidence', status: 'saved', href: '#' },
	{ label: 'Organisations', status: 'started', href: '#' },
	{ label: 'Business contacts', status: 'error', href: '#' },
	{ label: 'Case studies', status: 'todo', href: '#' },
	{ label: 'Attachments', status: 'doing', href: '#' },
	{ label: 'Review and submit', status: 'blocked', href: '#' },
];

const exampleButtonItems: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', onClick: console.log },
	{ label: 'Submit evidence', status: 'saved', onClick: console.log },
	{ label: 'Organisations', status: 'started', onClick: console.log },
	{ label: 'Business contacts', status: 'error', onClick: console.log },
	{ label: 'Case studies', status: 'todo', onClick: console.log },
	{ label: 'Attachments', status: 'doing', onClick: console.log },
	{ label: 'Review and submit', status: 'blocked', onClick: console.log },
];

const exampleCustomActiveItem: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', href: '#', isActive: true },
	{ label: 'Submit evidence', status: 'saved', href: '#' },
	{ label: 'Organisations', status: 'started', href: '#' },
	{ label: 'Business contacts', status: 'error', href: '#' },
	{ label: 'Case studies', status: 'todo', href: '#' },
	{ label: 'Attachments', status: 'doing', href: '#' },
	{ label: 'Review and submit', status: 'blocked', href: '#' },
];

export const Basic: Story = {
	args: {
		items: exampleLinkItems,
	},
};

export const CustomActiveItem: Story = {
	args: {
		items: exampleCustomActiveItem,
	},
};

export const HiddenSubtitle: Story = {
	args: {
		items: exampleLinkItems,
		hideSubtitle: true,
	},
};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		background: 'bodyAlt',
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
