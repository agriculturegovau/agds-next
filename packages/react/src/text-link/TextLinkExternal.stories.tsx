import { Meta, StoryObj } from '@storybook/react';
import { TextLinkExternal as TextLinkExternalComponent } from './TextLinkExternal';

const meta: Meta<typeof TextLinkExternalComponent> = {
	title: 'navigation/TextLink',
	component: TextLinkExternalComponent,
};

export default meta;

type Story = StoryObj<typeof TextLinkExternalComponent>;

export const TextLinkExternal: Story = {
	name: 'TextLinkExternal',
	args: {
		children: 'External link',
		href: 'https://design-system.agriculture.gov.au',
	},
};
