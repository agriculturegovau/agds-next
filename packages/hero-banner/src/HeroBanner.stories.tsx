import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Flex } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { HeroBanner } from './HeroBanner';
import { HeroBannerContainer } from './HeroBannerContainer';
import { HeroBannerImage } from './HeroBannerImage';
import { HeroBannerMobileImage } from './HeroBannerMobileImage';
import { HeroBannerContent } from './HeroBannerContent';
import {
	HeroBannerSubTitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from './HeroBannerTitle';

export default {
	title: 'layout/HeroBanner',
	component: HeroBanner,
	subcomponents: {
		HeroBannerContainer,
		HeroBannerMobileImage,
		HeroBannerImage,
		HeroBannerContent,
		HeroBannerSubTitle,
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
			alt="Hero image"
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
	title: 'Hero banner title',
	subTitle: 'Hero banner paragraph text',
	children: (
		<Flex flexDirection={['column', 'row']} gap={1}>
			<Button>Primary button</Button>
			<Button variant="secondary">Secondary button</Button>
		</Flex>
	),
};

export const Modular = () => (
	<HeroBannerContainer variant="dark">
		<HeroBannerMobileImage>
			<img
				src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.png"
				alt="Hero image"
			/>
		</HeroBannerMobileImage>
		<HeroBannerContent
			variant="dark"
			image={
				<img
					src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.png"
					alt="Hero image"
				/>
			}
		>
			<HeroBannerTitleContainer>
				<HeroBannerTitle>Hero banner title</HeroBannerTitle>
				<HeroBannerSubTitle>Hero banner paragraph text</HeroBannerSubTitle>
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
