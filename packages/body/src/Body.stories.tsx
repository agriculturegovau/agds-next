import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Body } from './index';
import { H1 } from '@ag.ds-next/heading';

export default {
	title: 'layout/Body',
	component: Body,
} as ComponentMeta<typeof Body>;

export const Basic: ComponentStory<typeof Body> = (args) => {
	return (
		<Body {...args}>
			<H1>Hello</H1>
			<p>This is the first paragraph</p>

			<h2>H2 Heading</h2>
			<p>This is the second paragraph</p>
		</Body>
	);
};
