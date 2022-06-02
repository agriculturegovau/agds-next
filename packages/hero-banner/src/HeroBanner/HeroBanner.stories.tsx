import { ComponentMeta, Story } from '@storybook/react';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { HeroBanner, HeroBannerProps } from './HeroBanner';
import {
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from './HeroBannerTitle';

export default {
	title: 'layout/HeroBanner/HeroBanner',
	component: HeroBanner,
	subcomponents: {
		HeroBannerTitleContainer,
		HeroBannerTitle,
		HeroBannerSubtitle,
	},
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
	},
} as ComponentMeta<typeof HeroBanner>;

const Template: Story<HeroBannerProps & { title: string; subtitle: string }> = (
	args
) => (
	<HeroBanner {...args}>
		<HeroBannerTitleContainer>
			<HeroBannerTitle>{args.title}</HeroBannerTitle>
			<HeroBannerSubtitle>{args.subtitle}</HeroBannerSubtitle>
		</HeroBannerTitleContainer>
		{args.children}
	</HeroBanner>
);

const commonArgs = {
	title: 'Website hero banner title - xxxl/display (H1)',
	subtitle: 'Short hero banner sentence - md/default (P)',
	image: (
		<img
			src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.png"
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
		/>
	),
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
	children: undefined,
};
