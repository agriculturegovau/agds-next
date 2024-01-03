import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Logo as AgLogo } from './Logo';

const meta: Meta<typeof AgLogo> = {
	title: 'Brand/AGBranding',
	component: AgLogo,
};

export default meta;

type Story = StoryObj<typeof AgLogo>;

export const Logo: Story = {
	decorators: [
		(Story) => (
			<Box maxWidth={600} color="text">
				<Story />
			</Box>
		),
	],
};
