import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo as AgLogo } from '@ag.ds-next/ag-branding';
import { Button } from '@ag.ds-next/button';
import { Box, Flex } from '@ag.ds-next/box';

import { Header } from './Header';
import { HeaderContainer } from './HeaderContainer';
import { HeaderBrand } from './HeaderBrand';

/**
 * FIXME: NextJS declares '*.png' as StaticImageData which has is an object
 * with `src` and other properties.
 * The image imports here are handled by storybook and resolve to strings.
 */
import logoImageLight from '../../../example-site/public/header-logo-agov.png';
import logoImageDark from '../../../example-site/public/header-logo-agov--dark.png';
const logoLight = <img src={logoImageLight as any} alt="Logo" />;
const logoDark = <img src={logoImageDark as any} alt="Logo" />;

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

function getLogo(context: any, variant = 'dark') {
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

export const HeaderDark = Template.bind({});
HeaderDark.args = {
	...defaultArgs,
	variant: 'dark',
};
export const HeaderDarkAlt = Template.bind({});
HeaderDarkAlt.args = {
	...defaultArgs,
	variant: 'darkAlt',
};
export const HeaderLight = Template.bind({});
HeaderLight.args = {
	...defaultArgs,
	variant: 'light',
};
export const HeaderLightAlt = Template.bind({});
HeaderLightAlt.args = {
	...defaultArgs,
	variant: 'lightAlt',
};

export const LongSubline = Template.bind({});
LongSubline.args = {
	...defaultArgs,
	logo: logoLight,
	variant: 'dark',
	subline: 'Service description that could be a little longer',
};

export const HeaderNoLogo = Template.bind({});
HeaderNoLogo.args = {
	...defaultArgs,
};

// TODO

export const HeaderCoBranded = Template.bind({});
HeaderCoBranded.args = {
	...defaultArgs,
	logo: logoLight,
	heading: 'TODO ...',
};
HeaderCoBranded.storyName = '🕥 Header Co-Branded';

export const HeaderHero = Template.bind({});
HeaderHero.args = {
	...defaultArgs,
	logo: logoLight,
	heading: 'TODO ...',
};
HeaderHero.storyName = '🕥 Header Hero';

// Search
const ExampleSearchBox = () => {
	return (
		<Flex width="100%">
			<Box as="input" padding={0.5} rounded width="100%" />
			<Button>Search</Button>
		</Flex>
	);
};

export const HeaderSearch: ComponentStory<typeof Header> = (args, context) => (
	<Header
		logo={getLogo(context, args.variant)}
		rightContent={<ExampleSearchBox />}
		{...args}
	/>
);
HeaderSearch.args = {
	heading: 'Export Service',
	subline: 'Supporting Australian agricultural exports',
};
HeaderSearch.storyName = '🕥 Header Search';
