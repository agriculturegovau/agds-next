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
	{ label: 'Attachments', status: 'started', href: '#', isActive: true },
	{ label: 'Review and submit', status: 'blocked', href: '#' },
];

const exampleButtonItems: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', onClick: console.info },
	{ label: 'Submit evidence', status: 'saved', onClick: console.info },
	{ label: 'Organisations', status: 'started', onClick: console.info },
	{ label: 'Business contacts', status: 'error', onClick: console.info },
	{ label: 'Case studies', status: 'todo', onClick: console.info },
	{
		label: 'Attachments',
		status: 'started',
		onClick: console.info,
		isActive: true,
	},
	{ label: 'Review and submit', status: 'blocked', onClick: console.info },
];

const exampleLevelTwoButtonItems: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', onClick: console.info },
	{ label: 'Submit evidence', status: 'saved', onClick: console.info },
	{
		label: 'Organisations',
		status: 'started',
		isActive: true,
		onClick: console.info,
		levelTwoItem: { label: 'Change organisation name', href: '#' },
	},
	{ label: 'Business contacts', status: 'error', onClick: console.info },
	{ label: 'Case studies', status: 'todo', onClick: console.info },
	{
		label: 'Attachments',
		status: 'started',
		onClick: console.info,
	},
	{ label: 'Review and submit', status: 'blocked', onClick: console.info },
];

const exampleLevelTwoLinkItems: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', href: '#' },
	{ label: 'Submit evidence', status: 'saved', href: '#' },
	{
		label: 'Organisations',
		status: 'started',
		isActive: true,
		href: '#',
		levelTwoItem: { label: 'Change organisation name' },
	},
	{ label: 'Business contacts', status: 'error', href: '#' },
	{ label: 'Case studies', status: 'todo', href: '#' },
	{
		label: 'Attachments',
		status: 'started',
		href: '#',
	},
	{ label: 'Review and submit', status: 'blocked', href: '#' },
];

export const Basic: Story = {
	args: {
		items: exampleLinkItems,
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

export const LevelTwoStepButtons: Story = {
	args: {
		items: exampleLevelTwoButtonItems,
	},
};

export const LevelTwoStepLinks: Story = {
	args: {
		items: exampleLevelTwoLinkItems,
	},
};
