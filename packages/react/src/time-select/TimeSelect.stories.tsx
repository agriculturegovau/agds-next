import { StoryObj, Meta } from '@storybook/react';
import { TimeSelect } from './TimeSelect';

const meta: Meta<typeof TimeSelect> = {
	title: 'Forms/TimeSelect',
	component: TimeSelect,
};

export default meta;

type Story = StoryObj<typeof TimeSelect>;

export const Basic: Story = {};
