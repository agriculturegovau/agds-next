import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { SideNav } from './SideNav';
import { alwaysOpenItems, defaultTestingProps } from './test-utils';

const meta: Meta<typeof SideNav> = {
	title: 'navigation/SideNav',
	component: SideNav,
	args: {
		...defaultTestingProps,
		subLevelVisible: 'whenActive',
	},
};

export default meta;

type Story = StoryObj<typeof SideNav>;

export const Basic: Story = {
	args: {
		activePath: '/welcome',
	},
};

export const ParentActive: Story = {};

export const ChildActive: Story = {
	args: {
		activePath: '/in-detail/record-keeping',
	},
};

export const GrandChildActive: Story = {
	args: {
		activePath: '/in-detail/record-keeping/incorrect-amounts',
	},
};

export const WithoutTitleLinks: Story = {
	args: {
		titleLink: undefined,
		activePath: '/in-detail',
	},
};

export const OnBodyAlt: Story = {
	args: {
		background: 'bodyAlt',
	},
	name: 'On bodyAlt background',
	render: (args) => (
		<Box padding={2} background="bodyAlt">
			<SideNav {...args} />
		</Box>
	),
};

export const SubLevelsAlwaysOpen: Story = {
	args: {
		activePath: '#page-1',
		items: alwaysOpenItems,
		subLevelVisible: 'always',
	},
};
