import {
	ComponentStory,
	ComponentMeta,
	StoryContext,
	ReactFramework,
} from '@storybook/react';
import { Logo as AgLogo } from '@ag.ds-next/ag-branding';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';

import logoImageLight from '../../../example-site/public/header-logo-agov.png';
import logoImageDark from '../../../example-site/public/header-logo-agov--dark.png';
import { Header, HeaderProps } from './Header';
import { HeaderContainer } from './HeaderContainer';
import { HeaderBrand } from './HeaderBrand';

/**
 * FIXME: NextJS declares '*.png' as StaticImageData which has is an object
 * with `src` and other properties.
 * The image imports here are handled by storybook and resolve to strings.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logoLight = <img src={logoImageLight as any as string} alt="Logo" />;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logoDark = <img src={logoImageDark as any as string} alt="Logo" />;

export default {
	title: 'layout/Header',
	component: Header,
	subcomponents: {
		HeaderContainer,
		HeaderBrand,
	},
} as ComponentMeta<typeof Header>;

const defaultArgs = {
	heading: 'Export Service',
	subline: 'Supporting Australian agricultural exports',
};

function getLogo(
	context: StoryContext<ReactFramework, HeaderProps>,
	variant = 'dark'
) {
	if (context.globals.brand === 'agriculture') {
		return <AgLogo />;
	}
	return {
		dark: logoLight,
		darkAlt: logoLight,
		light: logoDark,
		lightAlt: logoDark,
	}[variant];
}

const Template: ComponentStory<typeof Header> = (args, context) => (
	<Header logo={getLogo(context, args.variant)} {...args} />
);

export const DarkVariant = Template.bind({});
DarkVariant.args = {
	...defaultArgs,
	variant: 'dark',
};

export const DarkAltVariant = Template.bind({});
DarkAltVariant.args = {
	...defaultArgs,
	variant: 'darkAlt',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
	...defaultArgs,
	variant: 'light',
};

export const LightAltVariant = Template.bind({});
LightAltVariant.args = {
	...defaultArgs,
	variant: 'lightAlt',
};

export const LongSubline = Template.bind({});
LongSubline.args = {
	...defaultArgs,
	variant: 'dark',
	subline: 'Service description that could be a little longer',
};

export const Badge = Template.bind({});
Badge.args = {
	...defaultArgs,
	variant: 'dark',
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
	logo: logoLight,
	heading: 'TODO ...',
};
CoBranded.storyName = '🕥 Co-Branded';

export const Hero = Template.bind({});
Hero.args = {
	...defaultArgs,
	logo: logoLight,
	heading: 'TODO ...',
};
Hero.storyName = '🕥 Header Hero';
