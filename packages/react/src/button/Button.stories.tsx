import { Meta, StoryObj } from '@storybook/react';
import { allIcons, AvatarIcon } from '../icon';
import { Button, ButtonLink } from './Button';

const meta: Meta<typeof Button> = {
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
	args: {
		block: false,
		children: 'Button',
		disabled: false,
		loading: false,
		variant: 'primary',
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Primary button',
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary button',
		variant: 'secondary',
	},
};

export const Tertiary: Story = {
	args: {
		children: 'Tertiary button',
		variant: 'tertiary',
	},
};

export const TextStory: Story = {
	name: 'Text',
	args: {
		children: 'Text button',
		variant: 'text',
	},
};

export const Disabled: Story = {
	args: {
		children: 'Submit',
		disabled: true,
	},
};

export const Loading: Story = {
	args: {
		children: 'Submit',
		loading: true,
	},
};

export const Block: Story = {
	args: {
		children: 'Submit',
		block: true,
	},
};

export const Size: Story = {
	args: {
		children: 'Button',
		size: 'sm',
	},
};

export const WithIcon: Story = {
	args: {
		children: 'Sign out',
		iconAfter: AvatarIcon,
	},
};

export const ButtonLinkStory: StoryObj<typeof ButtonLink> = {
	render: (args) => <ButtonLink {...args} />,
	name: 'ButtonLink',
	args: {
		children: 'Button Link',
		block: false,
		href: '#',
		variant: 'primary',
	},
};
