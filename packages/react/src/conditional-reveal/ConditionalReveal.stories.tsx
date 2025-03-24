import { StoryObj, Meta } from '@storybook/react';
import { ConditionalReveal } from './ConditionalReveal';

const meta: Meta<typeof ConditionalReveal> = {
	title: 'Forms/ConditionalReveal',
	component: ConditionalReveal,
};

export default meta;

type Story = StoryObj<typeof ConditionalReveal>;

export const Basic: Story = {};
