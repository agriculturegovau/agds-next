import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { SideNav } from './SideNav';
import { defaultTestingProps } from './test-utils';

const meta: Meta<typeof SideNav> = {
	title: 'navigation/SideNav',
	component: SideNav,
	args: {
		...defaultTestingProps,
	},
};

export default meta;

type Story = StoryObj<typeof SideNav>;

export const Basic: Story = {};

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
	args: {},
	name: 'On bodyAlt background',
	render: (args) => (
		<Box padding={2} background="bodyAlt">
			<SideNav {...args} />
		</Box>
	),
};
