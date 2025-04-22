import { Meta, StoryObj } from '@storybook/react';
import { SectionAlert } from './SectionAlert';
import { sectionAlertToneMap } from './utils';

const meta: Meta<typeof SectionAlert> = {
	title: 'Content/SectionAlert',
	component: SectionAlert,
	args: {
		onDismiss: undefined,
		onClose: undefined,
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: Object.keys(sectionAlertToneMap),
		},
	},
};

export default meta;

type Story = StoryObj<typeof SectionAlert>;

export const Success: Story = {
	args: {
		title: 'Your changes have been saved',
		tone: 'successHigh',
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['successHigh', 'successMedium', 'successLow'],
		},
	},
};

export const Warning: Story = {
	args: {
		title: 'A warning message for this section',
		tone: 'warningHigh',
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['warningHigh', 'warningMedium', 'warningLow'],
		},
	},
};

export const Error: Story = {
	args: {
		title: 'There was an error saving your changes',
		tone: 'errorHigh',
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['errorHigh', 'errorMedium', 'errorLow'],
		},
	},
};

export const Info: Story = {
	args: {
		title: 'Please read the comments carefully',
		tone: 'infoHigh',
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['infoHigh', 'infoMedium', 'infoLow'],
		},
	},
};

export const WithDescription: Story = {
	args: {
		title: 'There was an error saving your changes',
		tone: 'error',
		children: 'Please try again later.',
	},
};

export const WithClose: Story = {
	args: {
		title: 'Your changes have been saved',
		tone: 'success',
		onClose: () => console.log('dismissed'),
	},
};
