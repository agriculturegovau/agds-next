import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeroCategoryBanner } from './HeroCategoryBanner';
import { HeroCategoryBannerContainer } from './HeroCategoryBannerContainer';
import { HeroCategoryBannerImage } from './HeroCategoryBannerImage';
import { HeroCategoryBannerMobileImage } from './HeroCategoryBannerMobileImage';
import { HeroCategoryBannerContent } from './HeroCategoryBannerContent';
import {
	HeroCategoryBannerSubtitle,
	HeroCategoryBannerTitle,
	HeroCategoryBannerTitleContainer,
} from './HeroCategoryBannerTitle';

export default {
	title: 'layout/HeroBanner/HeroCategoryBanner',
	component: HeroCategoryBanner,
	subcomponents: {
		HeroCategoryBannerContainer,
		HeroCategoryBannerMobileImage,
		HeroCategoryBannerImage,
		HeroCategoryBannerContent,
		HeroCategoryBannerSubtitle,
		HeroCategoryBannerTitle,
		HeroCategoryBannerTitleContainer,
	},
} as ComponentMeta<typeof HeroCategoryBanner>;

const Template: ComponentStory<typeof HeroCategoryBanner> = (args) => (
	<HeroCategoryBanner {...args}>
		<HeroCategoryBannerTitle>{args.title}</HeroCategoryBannerTitle>
		<HeroCategoryBannerSubtitle>{args.subTitle}</HeroCategoryBannerSubtitle>
	</HeroCategoryBanner>
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
