import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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
import agLogoDarkSvg from '../../../example-site/public/ag-logo.svg';
import agLogoLightSvg from '../../../example-site/public/ag-logo-light.svg';
const logoLight = <img src={logoImageLight as any} alt="Logo" />;
const logoDark = <img src={logoImageDark as any} alt="Logo" />;
const agLogoLight = (
	<img src={agLogoLightSvg} alt="Logo" style={{ width: '100%' }} />
);
const agLogoDark = (
	<img src={agLogoDarkSvg} alt="Logo" style={{ width: '100%' }} />
);

export default {
	title: 'layout/Header',
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
	logo: agLogoLight,
	variant: 'dark',
};
export const HeaderDarkAlt = Template.bind({});
HeaderDarkAlt.args = {
	...defaultArgs,
	logo: logoLight,
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

// Content variants

export const LongSubline = Template.bind({});
LongSubline.args = {
	...defaultArgs,
	logo: agLogoLight,
	variant: 'dark',
	subline: 'Service description that could be a little longer',
};

export const HeaderNoLogo = Template.bind({});
HeaderNoLogo.args = {
	...defaultArgs,
};

export const HeaderCoBranded = Template.bind({});
HeaderCoBranded.args = {
	...defaultArgs,
	logo: logoLight,
	heading: 'TODO ...',
};
export const HeaderHero = Template.bind({});
HeaderHero.args = {
	...defaultArgs,
	logo: logoLight,
};

export const HeaderSearch = Template.bind({});
HeaderSearch.args = {
	...defaultArgs,
	logo: logoLight,
	heading: 'TODO ...',
};
