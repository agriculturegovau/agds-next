import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Flex } from '@ag.ds-next/box';
import { palette } from '@ag.ds-next/ag-branding';

import { Core } from './Core';

export default {
	title: 'foundations/Core',
	component: Core,
} as ComponentMeta<typeof Core>;

const template: ComponentStory<typeof Core> = (args) => <Core {...args} />;

export const Usage = template.bind({});

// TODO: Better stories for Core
// - a demo component which consumes all palette tokens and shows some content in context

Usage.args = {
	palette,
	children: (
		<Flex gap={2} fontFamily="body">
			<Box theme="light" background="page" color="text" padding={4} border>
				Content light
			</Box>
			<Box theme="dark" background="page" color="text" padding={4} border>
				Content dark
			</Box>
		</Flex>
	),
};
