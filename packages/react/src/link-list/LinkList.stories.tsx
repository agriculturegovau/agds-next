import { Meta, StoryObj } from '@storybook/react';
import { LinkList } from './LinkList';

const meta: Meta<typeof LinkList> = {
	title: 'navigation/LinkList',
	component: LinkList,
	args: {
		links: [
			{ href: '#', label: 'Home' },
			{ href: '#', label: 'Establishments' },
			{ href: '#', label: 'Applications' },
			{
				href: 'https://design-system.agriculture.gov.au',
				label: 'External link',
				target: '_blank',
				rel: 'noopener',
			},
		],
	},
};

export default meta;

type Story = StoryObj<typeof LinkList>;

export const Basic: Story = {
	args: {},
};

export const Horizontal: Story = {
	args: {
		horizontal: true,
	},
};
