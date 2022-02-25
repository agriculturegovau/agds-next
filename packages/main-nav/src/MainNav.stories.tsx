import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainNav } from './MainNav';

export default {
	title: 'navigation/MainNav',
	component: MainNav,
} as ComponentMeta<typeof MainNav>;

const NAV_ITEMS = [
	{ href: '#home', label: 'Home' },
	{ href: '#content', label: 'Content page' },
	{ href: '#form', label: 'Form page' },
	{ href: '#', label: 'Simple terms' },
	{ href: '#', label: 'Distinct from each other' },
	{
		href: 'https://steelthreads.github.io/agds-next',
		label: 'External link',
		target: '_blank',
		rel: 'external noreferrer',
	},
];

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const AgricultureVariant = Template.bind({});
AgricultureVariant.args = {
	links: NAV_ITEMS,
	activePath: '#content',
	variant: 'agriculture',
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
	links: NAV_ITEMS,
	activePath: '#content',
	variant: 'dark',
};

export const DarkAltVariant = Template.bind({});
DarkAltVariant.args = {
	links: NAV_ITEMS,
	activePath: '#content',
	variant: 'darkAlt',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
	links: NAV_ITEMS,
	activePath: '#content',
	variant: 'light',
};

export const LightAltVariant = Template.bind({});
LightAltVariant.args = {
	links: NAV_ITEMS,
	activePath: '#content',
	variant: 'lightAlt',
};

export const SecondaryLinks = Template.bind({});
SecondaryLinks.args = {
	links: NAV_ITEMS,
	secondaryLinks: [{ href: '#login', label: 'Sign in' }],
	activePath: '#content',
	variant: 'dark',
};
