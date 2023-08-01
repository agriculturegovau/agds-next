import { Meta, StoryObj } from '@storybook/react';
import { DenseDashboard } from './DenseDashboard';

const meta: Meta<typeof DenseDashboard> = {
	title: 'Patterns/DenseDashboard',
	component: DenseDashboard,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof DenseDashboard>;

export const Basic: Story = {};
