import { ComponentMeta, Story } from '@storybook/react';
import { SearchBox, SearchBoxInput, SearchBoxButton } from '../../search-box';
import { Button, ButtonGroup } from '../../button';
import { Box } from '../../box';
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

type HeroBannerStoryProps = HeroBannerProps & {
	title: string;
	subtitle: string;
};

const Template: Story<HeroBannerStoryProps> = (args) => (
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
			src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"
			role="presentation"
			alt=""
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

export const Basic = Template.bind({});
Basic.args = {
	...commonArgs,
};

export const OnBodyAlt: Story<HeroBannerStoryProps> = (args) => (
	<Box paddingY={3} background="bodyAlt">
		<Template {...args} />
	</Box>
);
OnBodyAlt.storyName = 'On bodyAlt background';
OnBodyAlt.args = {
	...commonArgs,
	background: 'body',
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
