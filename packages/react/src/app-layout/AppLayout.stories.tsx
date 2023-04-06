import type { Meta, StoryObj } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
import { AppLayout } from './AppLayout';
import { navigationItems } from './testUtils';

const meta: Meta<typeof AppLayout> = {
	title: 'Navigation/AppLayout',
	component: AppLayout,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		siteTitle: 'Export Service',
		siteSubtitle: 'Supporting Australian agricultural exports',
		userMenu: {
			name: 'Toto Wolff',
			organisation: 'Orange Meat Works',
			href: '/account/preferences',
		},
		activePath: '/account',
		handleSignOut: async () => console.log('sign out'),
		navigationItems: navigationItems,
	},
	render: (args) => (
		<AppLayout {...args}>
			<Prose>
				<h1>Authenticated App Shell</h1>
				<p>Some content</p>
			</Prose>
		</AppLayout>
	),
};

export default meta;

type Story = StoryObj<typeof AppLayout>;

export const Basic: Story = {
	args: {},
};

export const FocusMode: Story = {
	args: {
		isFocusMode: true,
	},
};

export const NoOrganisation: Story = {
	args: {
		userOrganisation: undefined,
	},
};
