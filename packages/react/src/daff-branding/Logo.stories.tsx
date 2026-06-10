import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Logo as DaffLogo } from './Logo';

const meta: Meta<typeof DaffLogo> = {
	title: 'Brand/DaffBranding',
	component: DaffLogo,
};

export default meta;

type Story = StoryObj<typeof DaffLogo>;

export const Logo: Story = {
	decorators: [
		(Story) => (
			<Box color="text" maxWidth={600}>
				<Story />
			</Box>
		),
	],
};
