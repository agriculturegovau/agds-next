import { StoryObj, Meta } from '@storybook/react';
import { TimeInput } from './TimeInput';

const meta: Meta<typeof TimeInput> = {
	title: 'Forms/TimeInput',
	component: TimeInput,
};

export default meta;

type Story = StoryObj<typeof TimeInput>;

export const Basic: Story = {
	args: {
		label: 'Example',
	},
};
