import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../box';
import { Logo as AgLogo } from './Logo';

export default {
	title: 'Brand/AGBranding',
	component: AgLogo,
} as ComponentMeta<typeof AgLogo>;

export const Logo: ComponentStory<typeof AgLogo> = () => (
	<Box maxWidth={600} color="text">
		<AgLogo />
	</Box>
);
