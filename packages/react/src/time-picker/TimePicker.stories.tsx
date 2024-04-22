import { StoryObj, Meta } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
	title: 'Forms/TimePicker',
	component: TimePicker,
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Basic: Story = {};
