import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SectionBanner } from './SectionBanner';
import { SectionBannerContainer } from './SectionBannerContainer';
import { SectionBannerImage } from './SectionBannerImage';
import { SectionBannerMobileImage } from './SectionBannerMobileImage';
import { SectionBannerContent } from './SectionBannerContent';
import {
	SectionBannerSubTitle,
	SectionBannerTitle,
	SectionBannerTitleContainer,
} from './SectionBannerTitle';

export default {
	title: 'layout/HeroBanner/SectionBanner',
	component: SectionBanner,
	subcomponents: {
		SectionBannerContainer,
		SectionBannerMobileImage,
		SectionBannerImage,
		SectionBannerContent,
		SectionBannerSubTitle,
		SectionBannerTitle,
		SectionBannerTitleContainer,
	},
} as ComponentMeta<typeof SectionBanner>;

const Template: ComponentStory<typeof SectionBanner> = (args) => (
	<SectionBanner {...args}>
		<SectionBannerTitle>{args.title}</SectionBannerTitle>
		<SectionBannerSubTitle>{args.subTitle}</SectionBannerSubTitle>
	</SectionBanner>
);

const commonArgs = {
	image: (
		<img
			src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.png"
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
		/>
	),
	title:
		'Hero banner title Hero banner title Hero banner title Hero banner title Hero banner title Hero banner title',
	subTitle: 'Hero banner paragraph text',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
	...commonArgs,
	variant: 'light',
};

export const LightAlt = Template.bind({});
LightAlt.args = {
	...commonArgs,
	variant: 'lightAlt',
};

export const Dark = Template.bind({});
Dark.args = {
	...commonArgs,
	variant: 'dark',
};

export const DarkAlt = Template.bind({});
DarkAlt.args = {
	...commonArgs,
	variant: 'darkAlt',
};

export const Buttons = Template.bind({});
Buttons.args = {
	...commonArgs,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
	...commonArgs,
	image: undefined,
};
