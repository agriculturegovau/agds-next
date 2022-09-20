import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Detail } from './Detail';

export default {
	title: 'Content/Detail',
	component: Detail,
} as ComponentMeta<typeof Detail>;

export const Basic: ComponentStory<typeof Detail> = (args) => (
	<Detail {...args} />
);
Basic.args = {};
