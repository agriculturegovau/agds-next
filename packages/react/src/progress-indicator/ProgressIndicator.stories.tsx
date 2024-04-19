import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import {
	ProgressIndicatorItem,
	ProgressIndicatorItemWithLevelTwoItems,
} from './utils';
import { ProgressIndicator } from './index';

const meta: Meta<typeof ProgressIndicator> = {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
};

export default meta;

type Story = StoryObj<typeof meta>;

const exampleLinkItems: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', href: '/introduction' },
	{ label: 'Submit evidence', status: 'saved', href: '/evidence' },
	{ label: 'Organisations', status: 'started', href: '/organisations' },
	{ label: 'Business contacts', status: 'error', href: '/contacts' },
	{ label: 'Case studies', status: 'todo', href: '/case-studies' },
	{ label: 'Attachments', status: 'started', href: '/attachments' },
	{ label: 'Review and submit', status: 'blocked', href: '/review' },
];

const exampleLevelTwoLinkItems: ProgressIndicatorItemWithLevelTwoItems[] =
	exampleLinkItems.map((item) =>
		item.label === 'Organisations'
			? {
					...item,
					items: [
						{
							label: 'Change organisation name',
							href: '/organisations/change-name',
						},
					],
			  }
			: item
	);

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
	},
	{ label: 'Review and submit', status: 'blocked', onClick: console.info },
];

export const Basic: Story = {
	args: {
		activePath: '/organisations',
		items: exampleLinkItems,
	},
};

export const HiddenSubtitle: Story = {
	args: {
		activePath: '/organisations',
		items: exampleLinkItems,
		hideSubtitle: true,
	},
};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		activePath: 'Attachments',
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
		activePath: 'Attachments',
		items: exampleButtonItems,
	},
};

export const LevelTwoStepLinks: Story = {
	args: {
		activePath: '/organisations/change-name',
		items: exampleLevelTwoLinkItems,
	},
};
