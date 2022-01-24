import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading, H1, H2, H3, H4, H5, H6 } from './Heading';

export default {
	title: 'content/Heading',
	component: Heading,
	subcomponents: {
		H1,
		H2,
		H3,
		H4,
		H5,
		H6,
	},
} as ComponentMeta<typeof Heading>;

const template: ComponentStory<typeof Heading> = (args) => (
	<Heading {...args} />
);

export const Usage = template.bind({});
Usage.args = {
	type: 'h1',
	as: 'h1',
	children: 'Heading Example',
};
