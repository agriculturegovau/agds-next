import React, { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	SideNav,
	SideNavContainer,
	SideNavTitle,
	SideNavGroup,
	SideNavLink,
} from './index';

export default {
	title: 'navigation/SideNav',
	component: SideNav,
} as ComponentMeta<typeof SideNav>;

const defaultArgs = {
	title: 'Lodging your tax return',
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
			items: [
				{
					href: '#three',
					label: 'Pre-filling your online tax return',
				},
			],
		},
		{ href: '#four', label: "What's new for individuals" },
		{ href: '#five', label: 'Why you may receive a tax bill' },
		{
			href: '#in-detail',
			label: 'In detail',
			items: [
				{
					href: '#in-detail/record-keeping',
					label: 'Record keeping',
					items: [
						{
							href: '#in-detail/record-keeping/tax',
							label: 'Keeping your tax records',
						},
						{
							href: '#in-detail/record-keeping/incorrect-amounts',
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
	activePath: '#in-detail/record-keeping/incorrect-amounts',
} as ComponentProps<typeof SideNav>;

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

export const Modular: ComponentStory<typeof SideNavContainer> = (args) => {
	return (
		<SideNavContainer {...args}>
			<SideNavTitle href="#">SideNavTitle</SideNavTitle>
			<SideNavGroup>
				<SideNavLink href="#one" label="One" />
				<SideNavLink href="#two" label="Two" />
				<SideNavLink href="#three" label="Three" active>
					<SideNavGroup>
						<SideNavLink href="#three-1" label="Three - 1" active>
							<SideNavGroup>
								<SideNavLink href="#three-1-1" label="Three - 1:1" />
								<SideNavLink href="#three-1-2" label="Three - 1:2" active />
							</SideNavGroup>
						</SideNavLink>
						<SideNavLink href="#three-2" label="Three - 2" />
					</SideNavGroup>
				</SideNavLink>
			</SideNavGroup>
		</SideNavContainer>
	);
};
Modular.args = {
	variant: 'light',
};
