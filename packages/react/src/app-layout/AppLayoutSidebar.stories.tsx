import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../flex';
import { AppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebar } from './AppLayoutSidebar';
import { navigationItems } from './test-utils';

const meta: Meta<typeof AppLayoutSidebar> = {
	title: 'Layout/AppLayout/AppLayoutSidebar',
	component: AppLayoutSidebar,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		activePath: '/',
		background: 'bodyAlt',
		items: navigationItems('Antfix'),
	},
	render: (props) => (
		<AppLayoutContext.Provider
			value={{
				focusMode: false,
				isMobileMenuOpen: true,
				openMobileMenu: console.log,
				closeMobileMenu: console.log,
			}}
		>
			<Flex css={{ minHeight: '100vh' }} flexDirection="column">
				<AppLayoutSidebar {...props} />
			</Flex>
		</AppLayoutContext.Provider>
	),
};

export default meta;

type Story = StoryObj<typeof AppLayoutSidebar>;

export const Basic: Story = {};

export const LevelOneActive: Story = {
	args: {
		activePath: '/establishments',
	},
};

export const LevelTwoActive: Story = {
	args: {
		activePath: '/establishments/canberra',
	},
};

export const BodyBackground: Story = {
	args: {
		background: 'body',
	},
};

export const WithoutIcons: Story = {
	args: {
		activePath: '/establishments',
		items: navigationItems('Antfix').map((group) => {
			const groupItems = Array.isArray(group) ? group : group.items;
			return groupItems.map((item) => {
				return { ...item, icon: undefined };
			});
		}),
	},
};

export const LargeList: Story = {
	args: {
		activePath: '#0-0',
		items: Array.from(Array(5)).map((_, groupIdx) => {
			return Array.from(Array(5)).map((_, itemIdx) => {
				return { href: `#${groupIdx}-${itemIdx}`, label: 'Example item' };
			});
		}),
	},
};

export const AlwaysOpen: Story = {
	args: {
		subLevelVisible: 'always',
	},
};
