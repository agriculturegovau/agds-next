import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { VisuallyHidden } from '../a11y';
import { Box } from '../box';
import { NotificationBadge } from '../notification-badge';
import { SubNav } from './SubNav';

const meta: Meta<typeof SubNav> = {
	title: 'navigation/SubNav',
	component: SubNav,
	args: {
		activePath: '/code',
		links: [
			{ href: '/', label: 'Usage' },
			{ href: '/code', label: 'Code' },
			{ href: '/content', label: 'Content' },
			{ href: '/accessibility', label: 'Accessibility' },
		],
	},
};

export default meta;

type Story = StoryObj<typeof SubNav>;

export const Basic: Story = {
	args: {},
};

export const OnBodyAlt: Story = {
	args: {},
	render: (args) => (
		<Box padding={1.5} background="bodyAlt">
			<SubNav {...args} />
		</Box>
	),
};

export const WithEndElements: Story = {
	args: {
		links: [
			{ href: '/', label: 'Usage' },
			{
				href: '/code',
				label: 'Code',
				endElement: (
					<Fragment>
						<NotificationBadge value={5} tone="action" aria-hidden />
						<VisuallyHidden>, 5 notifications</VisuallyHidden>
					</Fragment>
				),
			},
			{ href: '/content', label: 'Content' },
			{ href: '/accessibility', label: 'Accessibility' },
		],
	},
};
