import { ComponentMeta, ComponentStory } from '@storybook/react';
import { allIcons, AvatarIcon } from '../icon';
import { Button, ButtonLink } from './Button';

export default {
	title: 'forms/Button',
	component: Button,
	subcomponents: { ButtonLink },
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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const LinkTemplate: ComponentStory<typeof ButtonLink> = (args) => (
	<ButtonLink {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	block: false,
	children: 'Button',
	disabled: false,
	loading: false,
	variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary button',
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Secondary button',
	variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	children: 'Tertiary button',
	variant: 'tertiary',
};

export const TextStory = Template.bind({});
TextStory.storyName = 'Text';
TextStory.args = {
	children: 'Text button',
	variant: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Submit',
	disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
	children: 'Submit',
	loading: true,
};

export const Block = Template.bind({});
Block.args = {
	children: 'Submit',
	block: true,
};

export const Size = Template.bind({});
Size.args = {
	children: 'Button',
	size: 'sm',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	children: 'Sign out',
	iconAfter: AvatarIcon,
};

const ButtonLinkStory = LinkTemplate.bind({});
ButtonLinkStory.storyName = 'ButtonLink';
ButtonLinkStory.args = {
	children: 'Button Link',
	block: false,
	href: '#',
	variant: 'primary',
};
