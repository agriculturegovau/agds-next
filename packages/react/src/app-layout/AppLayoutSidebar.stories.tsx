import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '../flex';
import { AppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebar } from './AppLayoutSidebar';
import { navigationItems, slimNavigationItems } from './test-utils';

const meta: Meta<typeof AppLayoutSidebar> = {
	title: 'Layout/AppLayout/AppLayoutSidebar',
	component: AppLayoutSidebar,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		activePath: '/establishments',
		items: navigationItems,
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
			<Flex flexDirection="column" css={{ minHeight: '100vh' }}>
				<AppLayoutSidebar {...props} />
			</Flex>
		</AppLayoutContext.Provider>
	),
};

export default meta;

type Story = StoryObj<typeof AppLayoutSidebar>;

export const Basic: Story = {};

export const WithoutIcons: Story = {
	args: {
		activePath: '/establishments',
		items: navigationItems.map((group) => {
			return group.map((item) => {
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

export const CustomWidth: Story = {
	args: {
		width: '20rem',
	},
};

export const Slim: Story = {
	args: {
		items: slimNavigationItems,
		variant: 'slim',
	},
};

export const SlimCustomWidth: Story = {
	args: {
		items: slimNavigationItems,
		variant: 'slim',
		width: '10rem',
	},
};
