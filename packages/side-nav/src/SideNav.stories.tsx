import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	SideNav,
	SideNavContent,
	SideNavTitle,
	SideNavLinkGroup,
	SideNavLink,
} from './index';

export default {
	title: 'layout/SideNav',
	component: SideNav,
} as ComponentMeta<typeof SideNav>;

const defaultArgs = {
	accordionHeader: 'In this section',
	menuHeader: 'Lodging your tax return',
	items: [
		{
			href: '#welcome',
			label: 'Welcome',
		},
		{
			href: '#one',
			label: 'Do you need to lodge a tax return?',
		},
		{
			href: '#two',
			label: 'Lodge online',
			children: [
				{
					href: '#three',
					label: 'Pre-filling your online tax return',
				},
			],
		},
		{ href: '#four', label: "What's new for individuals" },
		{ href: '#five', label: 'Why you may receive a tax bill' },
		{
			href: '#six',
			label: 'In detail',
			children: [
				{
					href: '#seven',
					label: 'Record keeping',
					children: [
						{
							href: '#eight',
							label: 'Keeping your tax records',
						},
						{
							href: '#nine',
							label: 'Incorrect amounts',
						},
					],
				},
				{
					href: '#ten',
					label: 'Tax receipt',
				},
				{
					href: '#eleven',
					label: 'Pre-fill availability',
				},
			],
		},
	],
	activePath: '#welcome',
};

const Template: ComponentStory<typeof SideNav> = (args) => {
	return <SideNav {...args} />;
};

export const SideNavLight = Template.bind({});
SideNavLight.args = {
	...defaultArgs,
	variant: 'light',
};

export const SideNavLightAlt = Template.bind({});
SideNavLightAlt.args = {
	...defaultArgs,
	variant: 'lightAlt',
};

export const SideNavDark = Template.bind({});
SideNavDark.args = {
	...defaultArgs,
	variant: 'dark',
};

export const SideNavDarkAlt = Template.bind({});
SideNavDarkAlt.args = {
	...defaultArgs,
	variant: 'darkAlt',
};

export const Modular: ComponentStory<typeof SideNav> = (args) => {
	return (
		<SideNavContent {...args}>
			<SideNavTitle href="#" text="SideNavTitle" />
			<SideNavLinkGroup>
				<SideNavLink active={true} href="#one" label="One" />
				<SideNavLink href="#two" label="Two" />
				<SideNavLink href="#three" label="Three" />
			</SideNavLinkGroup>
		</SideNavContent>
	);
};
Modular.args = {
	variant: 'light',
};
