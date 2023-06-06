import { StoryObj, Meta } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
	title: 'Layout/Divider',
	component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Basic: Story = {};
