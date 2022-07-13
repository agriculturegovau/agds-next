import { ComponentMeta, Story } from '@storybook/react';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Box } from '@ag.ds-next/box';
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
			src="https://steelthreads.github.io/agds-next/img/placeholder/hero-banner.jpeg"
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
	HeroBannerProps & { title: string; subtitle: string }
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
	HeroBannerProps & { title: string; subtitle: string }
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
