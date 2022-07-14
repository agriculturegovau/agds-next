import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IndicatorDot } from './IndicatorDot';

export default {
	title: 'content/Badge/IndicatorDot',
	component: IndicatorDot,
} as ComponentMeta<typeof IndicatorDot>;

export const Basic: ComponentStory<typeof IndicatorDot> = (args) => (
	<IndicatorDot {...args} />
);
Basic.args = {
	tone: 'neutral',
};
