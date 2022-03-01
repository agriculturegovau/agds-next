import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '@ag.ds-next/icon';

import { MainNav } from './MainNav';
import { MainNavButton, MainNavLink } from './MainNavLink';

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

const defaultArgs = {
	links: NAV_ITEMS,
	activePath: '#content',
	variant: 'agriculture',
} as const;

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const AgricultureVariant = Template.bind({});
AgricultureVariant.args = {
	...defaultArgs,
	variant: 'agriculture',
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

export const HeaderRightLink: ComponentStory<typeof MainNav> = (args) => {
	return (
		<MainNav
			{...args}
			rightContent={
				<MainNavLink
					href="#login"
					label="Sign in"
					icon={<Icon icon="avatar" />}
				/>
			}
		/>
	);
};
HeaderRightLink.args = {
	...defaultArgs,
};

export const HeaderRightButton: ComponentStory<typeof MainNav> = (args) => {
	return (
		<MainNav
			{...args}
			rightContent={
				<MainNavButton
					onClick={() => console.log('Button press')}
					label="Sign in"
					icon={<Icon icon="avatar" />}
				/>
			}
		/>
	);
};
HeaderRightButton.args = {
	...defaultArgs,
};
