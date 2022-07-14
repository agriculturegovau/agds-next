import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Logo as AgLogo } from './Logo';

export default {
	title: 'Brand/AG Branding/Logo',
	component: AgLogo,
} as ComponentMeta<typeof AgLogo>;

export const Logo: ComponentStory<typeof AgLogo> = () => (
	<Box maxWidth={600}>
		<AgLogo />
	</Box>
);
