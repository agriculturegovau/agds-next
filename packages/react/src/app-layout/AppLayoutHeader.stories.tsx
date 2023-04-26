import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../ag-branding';
import { useTernaryState } from '../core';
import { AppLayout } from './AppLayout';
import { AppLayoutHeader } from './AppLayoutHeader';

const meta: Meta<typeof AppLayoutHeader> = {
	title: 'Layout/AppLayout/AppLayoutHeader',
	component: AppLayoutHeader,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof AppLayoutHeader>;

export const SidebarOpen: Story = {
	args: {
		href: '/',
		heading: 'Export Service',
		subLine: 'Supporting Australian agricultural exports',
		logo: <Logo />,
		unreadMessageCount: 6,
		accountDetails: {
			href: '#account',
			name: 'Toto Wolff',
			secondaryText: 'Orange Meat Works',
		},
	},
	render: function Render(props) {
		const [isMenuOpen, openMenu, closeMenu] = useTernaryState(true);
		return (
			<AppLayout
				isMenuOpen={isMenuOpen}
				openMenu={openMenu}
				closeMenu={closeMenu}
			>
				<AppLayoutHeader {...props} />
			</AppLayout>
		);
	},
};

export const SidebarClosed: Story = {
	args: {
		href: '/',
		heading: 'Export Service',
		subLine: 'Supporting Australian agricultural exports',
		logo: <Logo />,
		unreadMessageCount: 6,
		accountDetails: {
			href: '#account',
			name: 'Toto Wolff',
			secondaryText: 'Orange Meat Works',
		},
	},
	render: function Render(props) {
		const [isMenuOpen, openMenu, closeMenu] = useTernaryState(false);
		return (
			<AppLayout
				isMenuOpen={isMenuOpen}
				openMenu={openMenu}
				closeMenu={closeMenu}
			>
				<AppLayoutHeader {...props} />
			</AppLayout>
		);
	},
};

export const WithoutUserSecondaryText: Story = {
	args: {
		href: '/',
		heading: 'Export Service',
		subLine: 'Supporting Australian agricultural exports',
		logo: <Logo />,
		unreadMessageCount: 6,
		accountDetails: {
			href: '#account',
			name: 'Toto Wolff',
		},
	},
	render: function Render(props) {
		const [isMenuOpen, openMenu, closeMenu] = useTernaryState(false);
		return (
			<AppLayout
				isMenuOpen={isMenuOpen}
				openMenu={openMenu}
				closeMenu={closeMenu}
			>
				<AppLayoutHeader {...props} />
			</AppLayout>
		);
	},
};

export const WithoutUnreadMessageCount: Story = {
	args: {
		href: '/',
		heading: 'Export Service',
		subLine: 'Supporting Australian agricultural exports',
		logo: <Logo />,
		accountDetails: {
			href: '#account',
			name: 'Toto Wolff',
		},
	},
	render: function Render(props) {
		const [isMenuOpen, openMenu, closeMenu] = useTernaryState(false);
		return (
			<AppLayout
				isMenuOpen={isMenuOpen}
				openMenu={openMenu}
				closeMenu={closeMenu}
			>
				<AppLayoutHeader {...props} />
			</AppLayout>
		);
	},
};

export const LargeUnreadMessageCount: Story = {
	args: {
		href: '/',
		heading: 'Export Service',
		subLine: 'Supporting Australian agricultural exports',
		logo: <Logo />,
		unreadMessageCount: 100,
		accountDetails: {
			href: '#account',
			name: 'Toto Wolff',
		},
	},
	render: function Render(props) {
		const [isMenuOpen, openMenu, closeMenu] = useTernaryState(false);
		return (
			<AppLayout
				isMenuOpen={isMenuOpen}
				openMenu={openMenu}
				closeMenu={closeMenu}
			>
				<AppLayoutHeader {...props} />
			</AppLayout>
		);
	},
};
