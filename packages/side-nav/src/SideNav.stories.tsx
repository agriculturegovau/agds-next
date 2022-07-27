import { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
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
	subcomponents: { SideNavContainer, SideNavTitle, SideNavGroup, SideNavLink },
} as ComponentMeta<typeof SideNav>;

const defaultArgs = {
	title: 'Lodging your tax return',
	titleLink: '#',
	collapseTitle: 'In this section',
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

export const Basic: ComponentStory<typeof SideNav> = (args) => (
	<SideNav {...args} />
);
Basic.args = {
	...defaultArgs,
	background: 'body',
};

export const OnBodyAlt: ComponentStory<typeof SideNav> = (args) => (
	<Box padding={2} background="bodyAlt">
		<SideNav {...args} />
	</Box>
);
OnBodyAlt.args = {
	...defaultArgs,
	background: 'bodyAlt',
};
OnBodyAlt.storyName = 'On bodyAlt background';

export const OptionalTitleLink: ComponentStory<typeof SideNav> = (args) => (
	<SideNav {...args} />
);
OptionalTitleLink.args = {
	...defaultArgs,
	titleLink: undefined,
	background: 'body',
};

export const Modular = () => (
	<SideNavContainer background="body" aria-label="side navigation">
		<SideNavTitle id="side-nav-modular-title" href="#" isCurrentPage={false}>
			SideNav Title
		</SideNavTitle>
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
