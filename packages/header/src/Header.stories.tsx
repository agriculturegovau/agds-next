import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo as AgLogo } from '@ag.ds-next/ag-branding';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Header } from './Header';
import { HeaderContainer } from './HeaderContainer';
import { HeaderBrand } from './HeaderBrand';

/**
 * FIXME: NextJS declares '*.png' as StaticImageData which has is an object
 * with `src` and other properties.
 * The image imports here are handled by storybook and resolve to strings.
 */

export default {
	title: 'Components/Header',
	component: Header,
	subcomponents: {
		HeaderContainer,
		HeaderBrand,
	},
} as ComponentMeta<typeof Header>;

const defaultArgs = {
	heading: 'Export Service',
	subline: 'Supporting Australian agricultural exports',
	logo: <AgLogo />,
	background: 'bodyAlt',
} as const;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const BodyBackground = Template.bind({});
BodyBackground.storyName = 'Body background';
BodyBackground.args = {
	...defaultArgs,
	background: 'body',
};

export const BodyAltBackground = Template.bind({});
BodyAltBackground.storyName = 'BodyAlt background';
BodyAltBackground.args = {
	...defaultArgs,
	background: 'bodyAlt',
};

export const Small = Template.bind({});
Small.args = {
	...defaultArgs,
	heading: 'Internal application',
	subline: undefined,
	size: 'sm',
};

export const SmallNoLogo = Template.bind({});
SmallNoLogo.args = {
	...defaultArgs,
	heading: 'Internal application',
	subline: undefined,
	logo: undefined,
	size: 'sm',
};

export const LongSubline = Template.bind({});
LongSubline.args = {
	...defaultArgs,
	subline: 'Service description that could be a little longer',
};

export const Badge = Template.bind({});
Badge.args = {
	...defaultArgs,
	badgeLabel: 'Beta',
};

export const NoLogo = Template.bind({});
NoLogo.args = {
	...defaultArgs,
	logo: undefined,
};

export const Search = Template.bind({});
Search.args = {
	...defaultArgs,
	rightContent: (
		<SearchBox onSubmit={console.log}>
			<SearchBoxInput label="Search this website" />
			<SearchBoxButton iconOnly={{ xs: true, md: false }}>
				Search
			</SearchBoxButton>
		</SearchBox>
	),
};

// TODO

export const CoBranded = Template.bind({});
CoBranded.args = {
	...defaultArgs,
	heading: 'TODO ...',
};
CoBranded.storyName = '🕥 Co-Branded';

export const Hero = Template.bind({});
Hero.args = {
	...defaultArgs,
	heading: 'TODO ...',
};
Hero.storyName = '🕥 Header Hero';
