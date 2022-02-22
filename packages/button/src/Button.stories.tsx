import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonLink } from './Button';
import { Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'forms/Button',
	component: Button,
	subcomponents: { ButtonLink },
} as ComponentMeta<typeof Button>;

export const OnLight: ComponentStory<typeof Button> = (args) => (
	<Flex gap={2}>
		<Button {...args}>Primary</Button>
		<Button {...args} variant="secondary">
			Secondary
		</Button>
		<Button {...args} variant="tertiary">
			Tertiary
		</Button>
	</Flex>
);
OnLight.args = {
	block: false,
	disabled: false,
	loading: false,
};

export const OnDark: ComponentStory<typeof Button> = (args) => (
	<Flex gap={2} padding={1.5} background="body" palette="dark">
		<Button {...args}>Primary</Button>
		<Button {...args} variant="secondary">
			Secondary
		</Button>
		<Button {...args} variant="tertiary">
			Tertiary
		</Button>
	</Flex>
);
OnDark.args = {
	block: false,
	disabled: false,
	loading: false,
};

export const Block: ComponentStory<typeof Button> = (args) => (
	<Text>
		This is some text, with a Button inside.
		<Button {...args}>Primary</Button>
	</Text>
);
Block.args = {
	block: true,
	disabled: false,
	loading: false,
};

export const Size: ComponentStory<typeof Button> = (args) => (
	<Stack gap={1} alignItems="flex-start">
		<Button {...args} size="sm">
			Small
		</Button>
		<Button {...args}>Medium</Button>
	</Stack>
);

export const ButtonLinkStory: ComponentStory<typeof ButtonLink> = (args) => (
	<ButtonLink {...args}>Primary</ButtonLink>
);
ButtonLinkStory.storyName = 'ButtonLink';
ButtonLinkStory.args = {
	block: false,
	href: '#',
	variant: 'primary',
};
