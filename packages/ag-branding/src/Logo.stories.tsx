import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Logo } from './Logo';

export default {
	title: 'Agriculture/Branding',
	component: Logo,
} as ComponentMeta<typeof Logo>;

export const OnLight: ComponentStory<typeof Logo> = () => (
	<Box maxWidth={600}>
		<Logo />
	</Box>
);

export const OnDark: ComponentStory<typeof Logo> = () => (
	<Box palette="dark" background="body" color="text" padding={1.5}>
		<Box maxWidth={600}>
			<Logo />
		</Box>
	</Box>
);
