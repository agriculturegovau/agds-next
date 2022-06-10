import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useLinkComponent } from '@ag.ds-next/core';
import { Flex } from '@ag.ds-next/box';
import { allIcons, AvatarIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

export default {
	title: 'forms/Button',
	component: Button,
	argTypes: {
		iconAfter: {
			options: Object.keys(allIcons), // An array of serializable values
			mapping: allIcons, // Maps serializable option values to complex arg values
		},
		iconBefore: {
			options: Object.keys(allIcons), // An array of serializable values
			mapping: allIcons, // Maps serializable option values to complex arg values
		},
	},
} as ComponentMeta<typeof Button>;

export const OnLight: ComponentStory<typeof Button> = (args) => (
	<ButtonGroup>
		<Button {...args}>Primary</Button>
		<Button {...args} variant="secondary">
			Secondary
		</Button>
		<Button {...args} variant="tertiary">
			Tertiary
		</Button>
	</ButtonGroup>
);
OnLight.args = {
	block: false,
	disabled: false,
	loading: false,
};

export const OnDark: ComponentStory<typeof Button> = (args) => (
	<Flex padding={1.5} background="body" palette="dark">
		<ButtonGroup>
			<Button {...args}>Primary</Button>
			<Button {...args} variant="secondary">
				Secondary
			</Button>
			<Button {...args} variant="tertiary">
				Tertiary
			</Button>
		</ButtonGroup>
	</Flex>
);
OnDark.args = {
	block: false,
	disabled: false,
	loading: false,
};

export const Loading: ComponentStory<typeof Button> = (args) => (
	<ButtonGroup>
		<Button {...args}>Primary</Button>
		<Button {...args} variant="secondary">
			Secondary
		</Button>
		<Button {...args} variant="tertiary">
			Tertiary
		</Button>
	</ButtonGroup>
);
Loading.args = {
	block: false,
	disabled: false,
	loading: true,
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
	<ButtonGroup>
		<Button {...args} size="sm">
			Small
		</Button>
		<Button {...args}>Medium</Button>
	</ButtonGroup>
);

export const ButtonLink: ComponentStory<typeof Button> = (args) => {
	const Link = useLinkComponent();
	return <Button as={Link} {...args} />;
};
ButtonLink.args = {
	children: 'Button Link',
	block: false,
	href: '#',
	variant: 'primary',
};

export const ButtonWithIcon: ComponentStory<typeof Button> = (args) => (
	<Button {...args} />
);
ButtonWithIcon.args = {
	children: 'Primary',
	iconAfter: AvatarIcon,
};
