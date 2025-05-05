import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
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

export const Warning: Story = {
	args: {
		title: 'These records need more information',
		tone: 'warningHigh',
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['warningHigh', 'warningMedium', 'warningLow'],
		},
	},
};

export const Info: Story = {
	args: {
		title: 'These records contain information you might need',
		tone: 'infoHigh',
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['infoHigh', 'infoMedium', 'infoLow'],
		},
	},
};

export const Progress: Story = {
	args: {
		title: 'Record is in progress',
		tone: 'notStartedLow',
	},
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: [
				'notStartedLow',
				'inProgressLow',
				'pausedLow',
				'unknownLow',
				'cannotStartLow',
			],
		},
	},
};

export const WithDescription: Story = {
	args: {
		title: 'There was an error saving your changes',
		tone: 'errorHigh',
		children: 'Please try again later.',
	},
};

export const Dismissable: Story = {
	args: {
		title: 'Your changes have been saved',
		tone: 'successHigh',
		onClose: fn(),
	},
};
