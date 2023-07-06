import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../ag-branding';
import { AppLayout } from './AppLayout';
import { AppLayoutHeader } from './AppLayoutHeader';

const meta: Meta<typeof AppLayoutHeader> = {
	title: 'Layout/AppLayout/AppLayoutHeader',
	component: AppLayoutHeader,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		href: '/',
		heading: 'Export Service',
		subLine: 'Supporting Australian agricultural exports',
		logo: <Logo />,
		badgeLabel: 'Beta',
		accountDetails: {
			href: '#account',
			name: 'Toto Wolff',
			secondaryText: 'Orange Meat Works',
		},
	},
	render: (props) => (
		<AppLayout focusMode={false}>
			<AppLayoutHeader {...props} />
		</AppLayout>
	),
};

export default meta;

type Story = StoryObj<typeof AppLayoutHeader>;

export const Basic: Story = {};

export const FocusMode: Story = {
	render: (props) => (
		<AppLayout focusMode={true}>
			<AppLayoutHeader {...props} />
		</AppLayout>
	),
};

export const WithoutBadge: Story = {
	args: {
		badgeLabel: undefined,
	},
};

export const WithoutSubline: Story = {
	args: {
		subLine: undefined,
	},
};

export const WithoutUser: Story = {
	args: {
		accountDetails: undefined,
	},
};

export const WithoutUserSecondaryText: Story = {
	args: {
		accountDetails: {
			href: '#account',
			name: 'Toto Wolff',
		},
	},
};

export const WithLongUserName: Story = {
	args: {
		accountDetails: {
			href: '#account',
			name: 'Mobutu Sese Seko Kuku Ngbendu Wa Za Banga',
			secondaryText: 'Orange Meat Works',
		},
	},
};
