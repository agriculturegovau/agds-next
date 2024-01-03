import { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './TextLink';

const meta: Meta<typeof TextLink> = {
	title: 'navigation/TextLink',
	component: TextLink,
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Basic: Story = {
	args: {
		children: 'Internal link',
		href: '#',
	},
};
