import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainNav } from './MainNav';

export default {
	title: 'navigation/MainNav',
	component: MainNav,
} as ComponentMeta<typeof MainNav>;

const navitems = [
	{ href: '#', label: 'Home' },
	{ href: 'content', label: 'Content page' },
	{ href: 'form', label: 'Form page' },
	{ href: '#', label: 'Simple terms' },
	{ href: '#', label: 'Distinct from eachother' },
];

// export const DarkNav;
