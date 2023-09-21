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
		title: 'Your changes have been saved,
		tone: 'success',
	},
};

export const Warning: Story = {
	args: {
		title: 'A warning message for this section',
		tone: 'warning',
	},
};

export const Error: Story = {
	args: {
		title: 'There was an error saving your changes',
		tone: 'error',
	},
};

export const WithDescription: Story = {
	args: {
		title: 'This is a title',
		tone: 'success',
		children: 'This is a description which is optional',
	},
};

export const OnDismiss: Story = {
	args: {
		title: 'This is a SectionAlert',
		tone: 'success',
		onDismiss: () => console.log('dismissed'),
	},
};
