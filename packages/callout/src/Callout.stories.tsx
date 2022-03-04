import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

import { Callout } from './Callout';
import { CalloutTitle } from './CalloutTitle';

export default {
	title: 'layout/Callout',
	component: Callout,
} as ComponentMeta<typeof Callout>;

export const OnLight: ComponentStory<typeof Callout> = (args) => (
	<Callout {...args}>
		<CalloutTitle as="h3">Callout heading</CalloutTitle>
		<Text>Description of the callout.</Text>
	</Callout>
);

export const OnDark: ComponentStory<typeof Callout> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Callout {...args}>
			<CalloutTitle as="h3">Callout heading</CalloutTitle>
			<Text>Description of the callout</Text>
		</Callout>
	</Box>
);
