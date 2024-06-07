import { StoryObj, Meta } from '@storybook/react';
import { Scrollbar } from './Scrollbar';

const meta: Meta<typeof Scrollbar> = {
	title: 'Foundations/Scrollbar',
	component: Scrollbar,
};

export default meta;

type Story = StoryObj<typeof Scrollbar>;

export const Basic: Story = {};
