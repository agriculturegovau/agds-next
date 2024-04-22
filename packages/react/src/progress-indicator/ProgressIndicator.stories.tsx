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

const exampleItems: ProgressIndicatorItem[] = [
	{ label: 'Introduction', status: 'done', href: '/introduction' },
	{ label: 'Submit evidence', status: 'saved', href: '/evidence' },
	{ label: 'Organisations', status: 'started', href: '/organisations' },
	{ label: 'Business contacts', status: 'error', href: '/contacts' },
	{ label: 'Case studies', status: 'todo', href: '/case-studies' },
	{ label: 'Attachments', status: 'started', href: '/attachments' },
	{ label: 'Review and submit', status: 'blocked', href: '/review' },
];

const exampleLevelTwoLinkItems: ProgressIndicatorItemWithLevelTwoItems[] =
	exampleItems.map((item) =>
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

export const Basic: Story = {
	args: {
		activePath: '/organisations',
		items: exampleItems,
	},
};

export const HiddenSubtitle: Story = {
	args: {
		activePath: '/organisations',
		items: exampleItems,
		hideSubtitle: true,
	},
};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		activePath: 'Attachments',
		background: 'bodyAlt',
		items: exampleItems,
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

export const LevelTwoStepLinks: Story = {
	args: {
		activePath: '/organisations/change-name',
		items: exampleLevelTwoLinkItems,
	},
};
