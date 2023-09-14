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
		title: 'This is a SectionAlert',
		tone: 'success',
	},
};

export const Warning: Story = {
	args: {
		title: 'This is a SectionAlert',
		tone: 'warning',
	},
};

export const Error: Story = {
	args: {
		title: 'This is a SectionAlert',
		tone: 'error',
	},
};

export const Info: Story = {
	args: {
		title: 'This is a SectionAlert',
		tone: 'info',
	},
};

export const WithChildren: Story = {
	args: {
		title: 'This is a title',
		tone: 'info',
		children: 'This is a message',
	},
};

export const OnDismiss: Story = {
	args: {
		title: 'This is a SectionAlert',
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
