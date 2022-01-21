import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonLink } from './Button';
import { Box, Stack } from '@ag.ds-next/box';

export default {
	title: 'primitive/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const LightButton: ComponentStory<typeof Button> = (args) => (
	<Stack
		gap={2}
		flexDirection="row"
		padding={2}
		background="page"
		theme="light"
	>
		<Button {...args}>Primary</Button>
		<Button {...args} weight="secondary">
			Secondary
		</Button>
		<Button {...args} weight="tertiary">
			Tertiary
		</Button>
	</Stack>
);
LightButton.args = {
	loading: false,
	disabled: false,
};

export const DarkButton: ComponentStory<typeof Button> = (args) => (
	<Stack gap={2} flexDirection="row" padding={2} background="page" theme="dark">
		<Button {...args}>Primary</Button>
		<Button {...args} weight="secondary">
			Secondary
		</Button>
		<Button {...args} weight="tertiary">
			Tertiary
		</Button>
	</Stack>
);
DarkButton.args = {
	loading: false,
	disabled: false,
};

export const ButtonLinkExample: ComponentStory<typeof ButtonLink> = (args) => (
	<Box flexDirection="row" padding={2} background="page" theme="dark">
		<ButtonLink {...args}>Primary</ButtonLink>
	</Box>
);
ButtonLinkExample.args = {
	href: '#',
	weight: 'primary',
};
