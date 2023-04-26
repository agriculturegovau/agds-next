import { StoryObj, Meta } from '@storybook/react';
import { TextLink as TextLinkComponent } from './TextLink';

const meta: Meta<typeof TextLinkComponent> = {
	title: 'navigation/TextLink',
	component: TextLinkComponent,
};

export default meta;

export const TextLink: StoryObj<typeof TextLinkComponent> = {
	name: 'TextLink',
	args: { children: 'Internal link', href: '#' },
};
