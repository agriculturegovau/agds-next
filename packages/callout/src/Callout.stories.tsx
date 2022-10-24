import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Callout } from './Callout';
import { CalloutTitle } from './CalloutTitle';

export default {
	title: 'Components/Callout',
	component: Callout,
	subcomponents: { CalloutTitle },
} as ComponentMeta<typeof Callout>;

export const Basic: ComponentStory<typeof Callout> = (args) => (
	<Callout {...args}>
		<Text as="p">Description of the callout.</Text>
	</Callout>
);
Basic.args = {
	title: 'Callout heading',
};

export const OnBodyAlt: ComponentStory<typeof Callout> = (args) => (
	<Box background="bodyAlt" padding={1.5}>
		<Callout {...args}>
			<Text as="p">Description of the callout</Text>
		</Callout>
	</Box>
);
OnBodyAlt.storyName = 'On bodyAlt background';
OnBodyAlt.args = {
	title: 'Callout heading',
	background: 'shadeAlt',
};
