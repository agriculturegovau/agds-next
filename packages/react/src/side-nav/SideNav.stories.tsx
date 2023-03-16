import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../box';
import { SideNav } from './SideNav';
import { defaultTestingProps } from './test-utils';

export default {
	title: 'navigation/SideNav',
	component: SideNav,
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args) => (
	<SideNav {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	...defaultTestingProps,
};

export const ChildActive = Template.bind({});
ChildActive.args = {
	...defaultTestingProps,
	activePath: '/in-detail/record-keeping',
};

export const GrandChildActive = Template.bind({});
GrandChildActive.args = {
	...defaultTestingProps,
	activePath: '/in-detail/record-keeping/incorrect-amounts',
};

export const WithoutTitleLink: ComponentStory<typeof SideNav> = (args) => (
	<SideNav {...args} />
);
WithoutTitleLink.args = {
	...defaultTestingProps,
	titleLink: undefined,
	activePath: '/in-detail',
};

export const OnBodyAlt: ComponentStory<typeof SideNav> = (args) => (
	<Box padding={2} background="bodyAlt">
		<SideNav {...args} />
	</Box>
);
OnBodyAlt.args = {
	...defaultTestingProps,
	background: 'bodyAlt',
};
OnBodyAlt.storyName = 'On bodyAlt background';
