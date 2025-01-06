import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../ag-branding';
import { AISLogo } from '../../../../.storybook/components/AISLogo';
import { AppLayout } from './AppLayout';
import { AppLayoutHeader } from './AppLayoutHeader';
import { ExampleAccountDropdown, exampleData } from './test-utils';

const accountDetails = {
	name: exampleData.userNames.regular,
	secondaryText: 'My account',
	dropdown: (
		<ExampleAccountDropdown
			businesses={exampleData.businessNames.regular}
			onBusinessChange={console.log}
			selectedBusinessName={exampleData.businessNames.regular[0]}
		/>
	),
};

const meta: Meta<typeof AppLayoutHeader> = {
	title: 'Layout/AppLayout/AppLayoutHeader',
	component: AppLayoutHeader,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		accountDetails,
		badgeLabel: 'Beta',
		background: 'bodyAlt',
		heading: 'Export Service',
		href: '/',
		logo: <Logo />,
		subLine: 'Supporting Australian agricultural exports',
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

export const BodyBackground: Story = {
	args: {
		background: 'body',
	},
};

export const FocusMode: Story = {
	render: (props) => (
		<AppLayout focusMode>
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

export const WithoutAccount: Story = {
	args: {
		accountDetails: undefined,
	},
};

export const WithoutDropdown: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.regular,
		},
	},
};

export const WithAccountLink: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.regular,
			secondaryText: exampleData.businessNames.regular[0],
			href: '#',
		},
	},
};

export const WithAccountLinkLongName: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.long,
			secondaryText: exampleData.businessNames.regular[0],
			href: '#',
		},
	},
};

export const CoBranding: Story = {
	args: {
		secondHref: '/',
		secondLogo: <AISLogo />,
	},
};

export const CoBrandingDividerPositionBetween: Story = {
	args: {
		dividerPosition: 'between',
		secondHref: '/',
		secondLogo: <AISLogo />,
	},
};

export const CoBrandingWithAccountDetails: Story = {
	args: {
		accountDetails: {
			name: exampleData.userNames.long,
			secondaryText: exampleData.businessNames.regular[0],
			href: '#',
		},
		secondHref: '/',
		secondLogo: <AISLogo />,
	},
};
