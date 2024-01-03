import { Meta, StoryObj } from '@storybook/react';
import { TextLinkExternal } from './TextLinkExternal';

const meta: Meta<typeof TextLinkExternal> = {
	title: 'navigation/TextLink/TextLinkExternal',
	component: TextLinkExternal,
};

export default meta;

type Story = StoryObj<typeof TextLinkExternal>;

export const Basic: Story = {
	args: {
		children: 'External link',
		href: 'https://design-system.agriculture.gov.au',
	},
};
