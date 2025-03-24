import { StoryObj, Meta } from '@storybook/react';
import { H2, H3, H4, H5, H6 } from '../heading';
import { Text } from '../text';
import { DividerWithText } from './DividerWithText';

const meta: Meta<typeof DividerWithText> = {
	title: 'Content/DividerWithText',
	component: DividerWithText,
	args: {
		children: <Text>Divider label</Text>,
	},
	argTypes: {
		textAlign: {
			options: ['center', 'left'],
			control: 'select',
		},
	},
};

export default meta;

type Story = StoryObj<typeof DividerWithText>;

export const Basic: Story = {};

export const TextAlign: Story = {
	args: { textAlign: 'left' },
};

export const TextElements: Story = {
	argTypes: {
		children: {
			options: ['span', 'paragraph', 'h2', 'h3', 'h4', 'h5', 'h6'],
			mapping: {
				span: <Text>Divider label</Text>,
				paragraph: <Text as="p">Divider label</Text>,
				h2: <H2>Divider label</H2>,
				h3: <H3>Divider label</H3>,
				h4: <H4>Divider label</H4>,
				h5: <H5>Divider label</H5>,
				h6: <H6>Divider label</H6>,
			},
		},
	},
};
