import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonLink } from './Button';
import { Box, Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'forms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const LightButton: ComponentStory<typeof Button> = (args) => (
	<Flex gap={2} flexDirection="row" padding={2} background="page" theme="light">
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
	<Flex gap={2} flexDirection="row" padding={2} background="page" theme="dark">
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
	<Box theme="light">
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
	<Box padding={2} background="page" theme="dark">
		<ButtonLink {...args}>Primary</ButtonLink>
	</Box>
);
ButtonLinkExample.args = {
	block: false,
	href: '#',
	variant: 'primary',
};
