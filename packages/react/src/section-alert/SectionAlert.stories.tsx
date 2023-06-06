import { StoryObj, Meta } from '@storybook/react';
import { SectionAlert } from './SectionAlert';

const meta: Meta<typeof SectionAlert> = {
	title: 'Content/SectionAlert',
	component: SectionAlert,
	args: {
		onDismiss: undefined,
	},
};

export default meta;

type Story = StoryObj<typeof SectionAlert>;

export const Success: Story = {
	args: {
		children: 'This is a message',
		tone: 'success',
	},
};

export const Warning: Story = {
	args: {
		children: 'This is a message',
		tone: 'warning',
	},
};

export const Error: Story = {
	args: {
		children: 'This is a message',
		tone: 'error',
	},
};

export const OnDismiss: Story = {
	args: {
		children: 'This is a message',
		tone: 'success',
		onDismiss: () => console.log('dismissed'),
	},
};

export const WithTitle: Story = {
	args: {
		children: 'This is a message',
		tone: 'success',
		title: 'This is a title',
	},
};
