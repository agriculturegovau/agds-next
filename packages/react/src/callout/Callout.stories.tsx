import { StoryObj, Meta } from '@storybook/react';
import { Box } from '../box';
import { Text } from '../text';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
	title: 'content/Callout',
	component: Callout,
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Basic: Story = {
	args: {
		title: 'Callout heading',
	},
	render: (args) => (
		<Callout {...args}>
			<Text as="p">Description of the callout.</Text>
		</Callout>
	),
};

export const WithoutHeading: Story = {
	args: {},
	render: (args) => (
		<Callout {...args}>
			<Text as="p">Description of the callout.</Text>
		</Callout>
	),
};

export const OnBodyAltBackground: Story = {
	name: 'On bodyAlt background',
	args: {
		title: 'Callout heading',
		background: 'shadeAlt',
	},
	render: (args) => (
		<Box background="bodyAlt" padding={1.5}>
			<Callout {...args}>
				<Text as="p">Description of the callout</Text>
			</Callout>
		</Box>
	),
};
