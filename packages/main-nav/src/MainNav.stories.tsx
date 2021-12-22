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
];

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const MainNavDark = Template.bind({});
MainNavDark.args = {
	links: NAV_ITEMS,
	activePath: '#home',
	variant: 'dark',
};

export const MainNavDarkAlt = Template.bind({});
MainNavDarkAlt.args = {
	links: NAV_ITEMS,
	activePath: '#content',
	variant: 'darkAlt',
};

export const MainNavLight = Template.bind({});
MainNavLight.args = {
	links: NAV_ITEMS,
	variant: 'light',
};

export const MainNavLightAlt = Template.bind({});
MainNavLightAlt.args = {
	links: NAV_ITEMS,
	variant: 'lightAlt',
};
