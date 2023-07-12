import { Fragment } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Logo } from '../ag-branding';
import { MainNav } from '../main-nav';
import { SearchBox, SearchBoxInput, SearchBoxButton } from '../search-box';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
	title: 'layout/Header',
	component: Header,
	args: {
		heading: 'Export Service',
		subline: 'Supporting Australian agricultural exports',
		logo: <Logo />,
		background: 'bodyAlt',
	},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const BodyBackground: Story = {
	args: {
		background: 'body',
	},
};

export const BodyAltBackground: Story = {
	args: {
		background: 'bodyAlt',
	},
};

export const WithBadge: Story = {
	args: {
		badgeLabel: 'Beta',
	},
};

export const Small: Story = {
	args: {
		heading: 'Internal application',
		subline: undefined,
		size: 'sm',
	},
};

export const SmallNoLogo: Story = {
	args: {
		heading: 'Internal application',
		subline: undefined,
		logo: undefined,
		size: 'sm',
	},
};

export const LongSubline: Story = {
	args: {
		subline: 'Service description that could be a little longer',
	},
};

export const NoLogo: Story = {
	args: {
		logo: undefined,
	},
};

export const WithSearchBox: Story = {
	args: {
		rightContent: (
			<SearchBox onSubmit={console.log}>
				<SearchBoxInput label="Search this website" />
				<SearchBoxButton iconOnly={{ xs: true, md: false }}>
					Search
				</SearchBoxButton>
			</SearchBox>
		),
	},
};

export const WithMainNav: Story = {
	args: {},
	render: (args) => (
		<Fragment>
			<Header {...args} />
			<MainNav
				activePath="#account"
				items={[
					{ href: '#account', label: 'Home' },
					{ href: '#establishments', label: 'Establishments' },
					{ href: '#intelligence', label: 'Data and insights' },
					{ href: '#compliance', label: 'Compliance' },
				]}
				background="body"
			/>
		</Fragment>
	),
};
