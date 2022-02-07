import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonLink } from './Button';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'forms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const LightButton: ComponentStory<typeof Button> = (args) => (
	<Flex
		gap={2}
		flexDirection="row"
		padding={2}
		background="body"
		palette="light"
	>
		<Button {...args}>Primary</Button>
		<Button {...args} variant="secondary">
			Secondary
		</Button>
		<Button {...args} variant="tertiary">
			Tertiary
		</Button>
	</Flex>
);
LightButton.args = {
	block: false,
	disabled: false,
	loading: false,
};

export const DarkButton: ComponentStory<typeof Button> = (args) => (
	<Flex
		gap={2}
		flexDirection="row"
		padding={2}
		background="body"
		palette="dark"
	>
		<Button {...args}>Primary</Button>
		<Button {...args} variant="secondary">
			Secondary
		</Button>
		<Button {...args} variant="tertiary">
			Tertiary
		</Button>
	</Flex>
);
DarkButton.args = {
	block: false,
	disabled: false,
	loading: false,
};

export const LightBlockButton: ComponentStory<typeof Button> = (args) => (
	<Box palette="light">
		<Text>
			This is some text, with a Button inside.
			<Button {...args}>Primary</Button>
		</Text>
	</Box>
);
LightBlockButton.args = {
	block: true,
	disabled: false,
	loading: false,
};

export const ButtonLinkExample: ComponentStory<typeof ButtonLink> = (args) => (
	<Box padding={2} background="body" palette="dark">
		<ButtonLink {...args}>Primary</ButtonLink>
	</Box>
);
ButtonLinkExample.args = {
	block: false,
	href: '#',
	variant: 'primary',
};

export const ButtonSize: ComponentStory<typeof Button> = (args) => (
	<Stack gap={1} padding={2} background="body" palette="light">
		<div>
			<Button {...args}>Medium</Button>
		</div>
		<div>
			<Button {...args} size="sm">
				Small
			</Button>
		</div>
	</Stack>
);
