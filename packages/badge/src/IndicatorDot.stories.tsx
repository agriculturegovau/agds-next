import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { IndicatorDot } from './IndicatorDot';

export default {
	title: 'content/Badge/IndicatorDot',
	component: IndicatorDot,
} as ComponentMeta<typeof IndicatorDot>;

const Template: ComponentStory<typeof IndicatorDot> = (args) => (
	<IndicatorDot {...args} />
);

export const OnLight = Template.bind({});
OnLight.args = {
	tone: 'success',
};

export const OnDark: ComponentStory<typeof IndicatorDot> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	tone: 'success',
};
