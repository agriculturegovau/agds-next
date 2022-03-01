import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

import { Callout } from './Callout';

export default {
	title: 'layout/Callout',
	component: Callout,
} as ComponentMeta<typeof Callout>;

export const OnLight: ComponentStory<typeof Callout> = (args) => (
	<Box maxWidth={300}>
		<Callout {...args}>
			<Heading as="h2" type="h3" paddingBottom={1}>
				Callout heading
			</Heading>
			<Text>Description of the callout</Text>
		</Callout>
	</Box>
);

export const OnDark: ComponentStory<typeof Callout> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Box maxWidth={300}>
			<Callout {...args}>
				<Heading as="h2" type="h3" paddingBottom={1}>
					Callout heading
				</Heading>
				<Text>Description of the callout</Text>
			</Callout>
		</Box>
	</Box>
);
