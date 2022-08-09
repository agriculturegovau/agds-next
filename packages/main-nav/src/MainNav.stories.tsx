import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarIcon } from '@ag.ds-next/icon';
import { MainNav } from './MainNav';
import { MainNavButton, MainNavLink } from './MainNavItem';
import { MainNavBottomBar } from './MainNavBottomBar';

export default {
	title: 'navigation/MainNav',
	component: MainNav,
	subcomponents: { MainNavBottomBar, MainNavButton, MainNavLink },
} as ComponentMeta<typeof MainNav>;

const NAV_ITEMS = [
	{ href: '#home', label: 'Home' },
	{ href: '#content', label: 'Content page' },
	{ href: '#form', label: 'Form page' },
	{ href: '#', label: 'Simple terms' },
	{ href: '#', label: 'Distinct from each other' },
];

const defaultArgs = {
	links: NAV_ITEMS,
	activePath: '#content',
	background: 'body',
} as const;

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const Body = Template.bind({});
Body.args = {
	...defaultArgs,
	background: 'body',
};
Body.storyName = 'body background';

export const BodyAlt = Template.bind({});
BodyAlt.args = {
	...defaultArgs,
	background: 'bodyAlt',
};
BodyAlt.storyName = 'bodyAlt background';

export const HeaderRightLink = Template.bind({});
HeaderRightLink.args = {
	...defaultArgs,
	rightContent: <MainNavLink href="#login" label="Sign in" icon={AvatarIcon} />,
};

export const HeaderRightButton = Template.bind({});
HeaderRightButton.args = {
	...defaultArgs,
	rightContent: (
		<MainNavButton
			onClick={() => console.log('Button press')}
			label="Sign in"
			icon={AvatarIcon}
		/>
	),
};

export const NoLinks = Template.bind({});
NoLinks.args = {
	...defaultArgs,
	links: undefined,
	rightContent: (
		<MainNavButton
			onClick={() => console.log('Button press')}
			label="Sign in"
			icon={AvatarIcon}
		/>
	),
};

export const BottomBar: ComponentStory<typeof MainNavBottomBar> = (args) => (
	<MainNavBottomBar {...args} />
);
BottomBar.args = {
	variant: 'agriculture',
};
