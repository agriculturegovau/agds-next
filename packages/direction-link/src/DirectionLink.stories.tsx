import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Flex } from '@ag.ds-next/box';
import { DirectionLink, DirectionButton } from './index';

export default {
	title: 'navigation/DirectionLink',
	component: DirectionLink,
	subcomponents: {
		DirectionButton,
	},
} as ComponentMeta<typeof DirectionLink>;

export const OnLight: ComponentStory<typeof DirectionLink> = (args) => (
	<DirectionLink {...args} />
);
OnLight.args = {
	children: 'Continue',
	direction: 'right',
	href: '#',
};

export const OnDark: ComponentStory<typeof DirectionLink> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<DirectionLink {...args} />
	</Box>
);
OnDark.args = {
	children: 'Continue',
	direction: 'right',
	href: '#',
};

export const Button: ComponentStory<typeof DirectionButton> = (args) => (
	<DirectionButton {...args} />
);
Button.args = {
	children: 'Continue',
	direction: 'right',
	onClick: console.log,
};

export const AllDirections = () => (
	<Flex flexDirection="column" alignItems="flex-start" gap={2}>
		<DirectionLink href="#" direction="left">
			Back
		</DirectionLink>
		<DirectionLink href="#" direction="right">
			Next
		</DirectionLink>
		<DirectionLink href="#" direction="up">
			Top
		</DirectionLink>
		<DirectionLink href="#" direction="down">
			Skip to footer
		</DirectionLink>
	</Flex>
);
