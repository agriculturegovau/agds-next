import { StoryObj, Meta } from '@storybook/react';
import { Box } from '../box';
import { Logo as AgLogo } from './Logo';

const meta: Meta<typeof AgLogo> = {
	title: 'Brand/AGBranding',
	component: AgLogo,
	render: () => (
		<Box maxWidth={600} color="text">
			<AgLogo />
		</Box>
	),
};

export default meta;

export const Logo: StoryObj<typeof AgLogo> = {};
