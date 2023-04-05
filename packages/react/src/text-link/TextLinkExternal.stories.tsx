import { Meta, StoryObj } from '@storybook/react';
import { TextLinkExternal as TextLinkExternalComponent } from './TextLinkExternal';

export default {
	title: 'navigation/TextLink',
	component: TextLinkExternalComponent,
} as Meta<typeof TextLinkExternalComponent>;

export const TextLinkExternal: StoryObj<typeof TextLinkExternalComponent> = {
	storyName: 'TextLinkExternal',
	args: {
		children: 'External link',
		href: 'https://design-system.agriculture.gov.au',
	},
};
