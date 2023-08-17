import { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden } from '../a11y';
import { Box } from '../box';
import { EmailIcon } from '../icon';
import { FactoryIcon } from '../icon/icons/FactoryIcon';
import { NotificationBadge } from '../notification-badge';
import { AppLayoutSidebarNavListItem } from './AppLayoutSidebarNavListItem';
import { APP_LAYOUT_SIDEBAR_WIDTH } from './utils';

const meta: Meta<typeof AppLayoutSidebarNavListItem> = {
	title: 'Layout/AppLayout/AppLayoutSidebarNavListItem',
	component: AppLayoutSidebarNavListItem,
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => {
		return (
			<Box
				css={{ minHeight: '100vh', width: APP_LAYOUT_SIDEBAR_WIDTH }}
				background="bodyAlt"
				borderRight
				borderColor="muted"
				flexGrow={1}
			>
				<AppLayoutSidebarNavListItem {...args} />
			</Box>
		);
	},
};

export default meta;

type Story = StoryObj<typeof AppLayoutSidebarNavListItem>;

export const Link: Story = {
	args: {
		item: {
			label: 'Establishments',
			icon: FactoryIcon,
			href: '/establishments',
		},
	},
};

export const LinkWithNotifcations: Story = {
	args: {
		item: {
			label: 'Messages',
			icon: EmailIcon,
			href: '/account/messages',
			endElement: (
				<span>
					<NotificationBadge tone="action" value={6} max={99} aria-hidden />
					<VisuallyHidden>, 6 unread</VisuallyHidden>
				</span>
			),
		},
	},
};

export const Button: Story = {
	args: {
		item: {
			label: 'Establishments',
			icon: FactoryIcon,
			onClick: () => console.log('Clicked!'),
		},
	},
};

export const ButtonWithNotifcations: Story = {
	args: {
		item: {
			label: 'Messages',
			icon: EmailIcon,
			onClick: () => console.log('Clicked!'),
			endElement: (
				<span>
					<NotificationBadge tone="action" value={6} max={99} aria-hidden />
					<VisuallyHidden>, 6 unread</VisuallyHidden>
				</span>
			),
		},
	},
};
