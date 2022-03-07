import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

import { Callout } from './Callout';
import { CalloutTitle } from './CalloutTitle';

export default {
	title: 'layout/Callout',
	component: Callout,
	subcomponents: { CalloutTitle },
} as ComponentMeta<typeof Callout>;

export const OnLight: ComponentStory<typeof Callout> = (args) => (
	<Callout {...args}>
		<Text>Description of the callout.</Text>
	</Callout>
);
OnLight.args = {
	title: 'Callout heading',
};

export const OnDark: ComponentStory<typeof Callout> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Callout {...args}>
			<Text>Description of the callout</Text>
		</Callout>
	</Box>
);

OnDark.args = {
	title: 'Callout heading',
};
