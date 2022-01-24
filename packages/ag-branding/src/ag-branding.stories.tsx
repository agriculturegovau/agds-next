import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Logo } from './Logo';

export default {
	title: 'Agriculture/Branding',
	component: Logo,
} as ComponentMeta<typeof Logo>;

export const LogoOnLight: ComponentStory<typeof Logo> = () => (
	<Box theme="light" color="text" background="page" maxWidth={600} padding={2}>
		<Logo />
	</Box>
);

export const LogoOnDark: ComponentStory<typeof Logo> = () => (
	<Box theme="dark" color="text" background="page" maxWidth={600} padding={2}>
		<Logo />
	</Box>
);
