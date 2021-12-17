import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo as AgLogo } from '@ag.ds-next/ag-branding';

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
	title: 'layout/👉  Header',
	component: Header,
	subcomponents: {
		HeaderContainer,
		HeaderBrand,
	},
} as ComponentMeta<typeof Header>;

const defaultArgs = {
	heading: 'Example heading',
	subline: 'Example subline',
};
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderDark = Template.bind({});
HeaderDark.args = {
	...defaultArgs,
	logo: <AgLogo />,
	variant: 'dark',
};
export const HeaderDarkAlt = Template.bind({});
HeaderDarkAlt.args = {
	...defaultArgs,
	logo: <AgLogo />,
	variant: 'darkAlt',
};
export const HeaderLight = Template.bind({});
HeaderLight.args = {
	...defaultArgs,
	logo: logoDark,
	variant: 'light',
};
export const HeaderLightAlt = Template.bind({});
HeaderLightAlt.args = {
	logo: logoDark,
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

export const HeaderSearch = Template.bind({});
HeaderSearch.args = {
	...defaultArgs,
	logo: logoLight,
	heading: 'TODO ...',
};
HeaderSearch.storyName = '🕥 Header Search';
