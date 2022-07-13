import { ComponentMeta, Story } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	HeroCategoryBanner,
	HeroCategoryBannerProps,
} from './HeroCategoryBanner';
import {
	HeroCategoryBannerSubtitle,
	HeroCategoryBannerTitle,
} from './HeroCategoryBannerTitle';

export default {
	title: 'layout/HeroBanner/HeroCategoryBanner',
	component: HeroCategoryBanner,
	subcomponents: {
		HeroCategoryBannerTitle,
		HeroCategoryBannerSubtitle,
	},
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
	},
} as ComponentMeta<typeof HeroCategoryBanner>;

const Template: Story<
	HeroCategoryBannerProps & { title: string; subtitle: string }
> = (args) => (
	<HeroCategoryBanner {...args}>
		<HeroCategoryBannerTitle>{args.title}</HeroCategoryBannerTitle>
		<HeroCategoryBannerSubtitle>{args.subtitle}</HeroCategoryBannerSubtitle>
	</HeroCategoryBanner>
);

const commonArgs = {
	title: 'Website hero banner title - xxl/display (H1)',
	subtitle: 'Short hero banner sentence - md/default (P)',
	image: (
		<img
			src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.jpeg"
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
		/>
	),
};

export const BodyOnLight = Template.bind({});
BodyOnLight.args = {
	...commonArgs,
	background: 'body',
};

export const BodyAltOnLight = Template.bind({});
BodyAltOnLight.args = {
	...commonArgs,
	background: 'bodyAlt',
};

export const BodyOnDark: Story<
	HeroCategoryBannerProps & { title: string; subtitle: string }
> = (args) => (
	<Box palette="dark" padding={1} background="body">
		<Template {...args} />
	</Box>
);
BodyOnDark.args = {
	...commonArgs,
	background: 'body',
};

export const BodyAltOnDark: Story<
	HeroCategoryBannerProps & { title: string; subtitle: string }
> = (args) => (
	<Box palette="dark" padding={1} background="body">
		<Template {...args} />
	</Box>
);
BodyAltOnDark.args = {
	...commonArgs,
	background: 'bodyAlt',
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
