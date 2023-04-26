import { StoryObj, Meta } from '@storybook/react';
import { Box } from '../box';
import { Text } from '../text';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
	title: 'content/Callout',
	component: Callout,
};

export default meta;

export const Basic: StoryObj<typeof Callout> = {
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
	},
};

export const OnBodyAlt: StoryObj<typeof Callout> = {
	render: (args) => (
		<Box background="bodyAlt" padding={1.5}>
			<Callout {...args}>
				<Text as="p">Description of the callout</Text>
			</Callout>
		</Box>
	),
	name: 'On bodyAlt background',
	args: {
		title: 'Callout heading',
		background: 'shadeAlt',
	},
};
