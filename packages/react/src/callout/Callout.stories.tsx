import { StoryObj, Meta } from '@storybook/react';
import { Box } from '../box';
import { Text } from '../text';
import { Callout, calloutToneMap } from './Callout';

const meta: Meta<typeof Callout> = {
	title: 'content/Callout',
	component: Callout,
	args: {
		title: 'Callout heading',
		children: <Text as="p">Description of the callout.</Text>,
		tone: 'neutral',
	},
	argTypes: {
		tone: {
			options: Object.keys(calloutToneMap),
			control: { type: 'select' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const Basic: Story = {};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		title: 'Callout heading',
		tone: 'neutralAlt',
	},
	render: (args) => (
		<Box background="bodyAlt" padding={1.5}>
			<Callout {...args} />
		</Box>
	),
};

export const NoTitle: Story = {
	args: {
		title: undefined,
	},
};

export const Info: Story = {
	args: {
		tone: 'info',
	},
};

export const Warning: Story = {
	args: {
		tone: 'warning',
	},
};
