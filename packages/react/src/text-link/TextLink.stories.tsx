import { StoryObj, Meta } from '@storybook/react';
import { TextLink as TextLinkComponent } from './TextLink';

export default {
	title: 'navigation/TextLink',
	component: TextLinkComponent,
} as Meta<typeof TextLinkComponent>;

export const TextLink: StoryObj<typeof TextLinkComponent> = {
	storyName: 'TextLink',
	args: { children: 'Internal link', href: '#' },
};
