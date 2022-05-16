import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryNav } from './SecondaryNav';

export default {
	title: 'navigation/SecondaryNav',
	component: SecondaryNav,
} as ComponentMeta<typeof SecondaryNav>;

const NAV_ITEMS = [
	{ href: '#', label: 'Button' },
	{ href: '#code', label: 'Code' },
	{ href: '#', label: 'Content' },
	{ href: '#', label: 'Accessibility' },
];

const defaultArgs = {
	links: NAV_ITEMS,
	activePath: '#code',
	variant: 'light',
} as const;

const Template: ComponentStory<typeof SecondaryNav> = (args) => (
	<SecondaryNav {...args} />
);

export const LightVariant = Template.bind({});
LightVariant.args = {
	...defaultArgs,
	variant: 'light',
};

export const LightAltVariant = Template.bind({});
LightAltVariant.args = {
	...defaultArgs,
	variant: 'lightAlt',
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
	...defaultArgs,
	variant: 'dark',
};

export const DarkAltVariant = Template.bind({});
DarkAltVariant.args = {
	...defaultArgs,
	variant: 'darkAlt',
};
