import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainNav } from './MainNav';

export default {
	title: 'navigation/MainNav',
	component: MainNav,
} as ComponentMeta<typeof MainNav>;

const NAV_ITEMS = [
	{ href: '#', label: 'Home' },
	{ href: 'content', label: 'Content page' },
	{ href: 'form', label: 'Form page' },
	{ href: '#', label: 'Simple terms' },
	{ href: '#', label: 'Distinct from eachother' },
];

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const MainNavDark = Template.bind({});
MainNavDark.args = {
	links: NAV_ITEMS,
	variant: 'dark',
};

export const MainNavDarkAlt = Template.bind({});
MainNavDark.args = {
	links: NAV_ITEMS,
	variant: 'darkAlt',
};

export const MainNavLight = Template.bind({});
MainNavDark.args = {
	links: NAV_ITEMS,
	variant: 'light',
};

export const MainNavLightAlt = Template.bind({});
MainNavDark.args = {
	links: NAV_ITEMS,
	variant: 'lightAlt',
};
