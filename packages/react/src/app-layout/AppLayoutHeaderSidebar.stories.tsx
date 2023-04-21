import type { Meta, StoryObj } from '@storybook/react';
import { useTernaryState } from '../core';
import { AppLayout } from './AppLayout';
import { AppLayoutSidebar } from './AppLayoutSidebar';
import { navigationItems } from './test-utils';

const meta: Meta<typeof AppLayoutSidebar> = {
	title: 'Layout/AppLayout/AppLayoutSidebar',
	component: AppLayoutSidebar,
	parameters: {
		layout: 'fullscreen',
	},
	render: function RenderAppLayoutSidebar(props) {
		const [isMenuOpen, openMenu, closeMenu] = useTernaryState(true);
		return (
			<AppLayout
				isMenuOpen={isMenuOpen}
				openMenu={openMenu}
				closeMenu={closeMenu}
			>
				<AppLayoutSidebar {...props} />
			</AppLayout>
		);
	},
};

export default meta;

type Story = StoryObj<typeof AppLayoutSidebar>;

export const Basic: Story = {
	args: {
		activePath: '#dashboard',
		items: navigationItems,
	},
};

export const WithoutIcons: Story = {
	args: {
		activePath: '#dashboard',
		items: [
			[
				{
					label: 'Dashboard',
					href: '#dashboard',
				},
				{
					label: 'Establishments',
					href: '#establishments',
				},
				{
					label: 'Data and Insights',
					href: '#intelligence',
				},
				{
					label: 'Compliance',
					href: '#compliance',
				},
			],
		],
	},
};
