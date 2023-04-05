import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Logo as AgLogo } from '../ag-branding';
import { SearchBox, SearchBoxInput, SearchBoxButton } from '../search-box';
import { Box } from '../box';
import { MainNav } from '../main-nav';
import { Header } from './Header';

/**
 * FIXME: NextJS declares '*.png' as StaticImageData which has is an object
 * with `src` and other properties.
 * The image imports here are handled by storybook and resolve to strings.
 */

const meta: Meta<typeof Header> = {
	title: 'layout/Header',
	component: Header,
	args: {
		heading: 'Export Service',
		subline: 'Supporting Australian agricultural exports',
		logo: <AgLogo />,
		background: 'bodyAlt',
	},
};

export default meta;

type Story = StoryObj<typeof Header>;

export const BodyBackground: Story = {
	storyName: 'Body background',
	args: {
		background: 'body',
	},
};

export const BodyAltBackground: Story = {
	storyName: 'BodyAlt background',
	args: {
		background: 'bodyAlt',
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

export const Badge: Story = {
	args: {
		badgeLabel: 'Beta',
	},
};

export const NoLogo: Story = {
	args: {
		logo: undefined,
	},
};

export const Search: Story = {
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
	storyName: 'With SearchBox',
};

const TemplateWithMainNav: StoryFn<typeof Header> = (args) => {
	return (
		<Box>
			<Header {...args} />
			<MainNav
				items={[
					{
						href: '#account',
						label: 'Home',
					},
					{
						href: '#establishments',
						label: 'Establishments',
					},
					{
						href: '#intelligence',
						label: 'Data and insights',
					},
					{
						href: '#compliance',
						label: 'Compliance',
					},
				]}
				activePath="#account"
				background="body"
			/>
		</Box>
	);
};

export const WithMainNav: Story = {
	render: TemplateWithMainNav,
	storyName: 'With MainNav',
	args: {
		background: 'bodyAlt',
	},
};

export const WithMainNavAndSearch: Story = {
	render: TemplateWithMainNav,
	storyName: 'With MainNav and SearchBox',
	args: {
		rightContent: (
			<SearchBox onSubmit={console.log}>
				<SearchBoxInput label="Search this website" />
				<SearchBoxButton iconOnly={{ xs: true, md: false }}>
					Search
				</SearchBoxButton>
			</SearchBox>
		),
		background: 'bodyAlt',
	},
};
