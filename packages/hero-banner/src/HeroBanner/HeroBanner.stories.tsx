import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { HeroBanner } from './HeroBanner';
import { HeroBannerContainer } from './HeroBannerContainer';
import { HeroBannerImage } from './HeroBannerImage';
import { HeroBannerMobileImage } from './HeroBannerMobileImage';
import { HeroBannerContent } from './HeroBannerContent';
import {
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from './HeroBannerTitle';

export default {
	title: 'layout/HeroBanner/HeroBanner',
	component: HeroBanner,
	subcomponents: {
		HeroBannerContainer,
		HeroBannerMobileImage,
		HeroBannerImage,
		HeroBannerContent,
		HeroBannerSubtitle,
		HeroBannerTitle,
		HeroBannerTitleContainer,
	},
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => (
	<HeroBanner {...args} />
);

const commonArgs = {
	image: (
		<img
			src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.png"
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
		/>
	),
	title: 'Hero banner title',
	subTitle: 'Hero banner paragraph text',
	children: (
		<SearchBox onSubmit={console.log}>
			<SearchBoxInput label="Search this website" />
			<SearchBoxButton iconOnly={{ xs: true, md: false }}>
				Search
			</SearchBoxButton>
		</SearchBox>
	),
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
	children: (
		<ButtonGroup>
			<Button>Primary button</Button>
			<Button variant="secondary">Secondary button</Button>
		</ButtonGroup>
	),
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
	...commonArgs,
	image: undefined,
	children: (
		<div>
			<Button>Primary button</Button>
		</div>
	),
};

export const Modular = () => (
	<HeroBannerContainer variant="dark">
		<HeroBannerMobileImage>
			<img
				src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.png"
				alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
			/>
		</HeroBannerMobileImage>
		<HeroBannerContent
			variant="dark"
			image={
				<img
					src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.png"
					alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
				/>
			}
		>
			<HeroBannerTitleContainer>
				<HeroBannerTitle>Hero banner title</HeroBannerTitle>
				<HeroBannerSubtitle>
					Short hero banner sentence - md/default (P)
				</HeroBannerSubtitle>
			</HeroBannerTitleContainer>
			<SearchBox onSubmit={console.log}>
				<SearchBoxInput label="Search this website" />
				<SearchBoxButton iconOnly={{ xs: true, md: false }}>
					Search
				</SearchBoxButton>
			</SearchBox>
		</HeroBannerContent>
	</HeroBannerContainer>
);
