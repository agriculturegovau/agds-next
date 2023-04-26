import { StoryObj, Meta } from '@storybook/react';
import { TextLink as TextLinkComponent } from './TextLink';

const meta: Meta<typeof TextLinkComponent> = {
	title: 'navigation/TextLink',
	component: TextLinkComponent,
};

export default meta;

type Story = StoryObj<typeof TextLinkComponent>;

export const TextLink: Story = {
	name: 'TextLink',
	args: { children: 'Internal link', href: '#' },
};
