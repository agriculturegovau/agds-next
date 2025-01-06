import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../../box';
import {
	HeroCategoryBanner,
	HeroCategoryBannerProps,
} from './HeroCategoryBanner';
import {
	HeroCategoryBannerSubtitle,
	HeroCategoryBannerTitle,
} from './HeroCategoryBannerTitle';

type HeroCategoryBannerStoryProps = HeroCategoryBannerProps & {
	title: string;
	subtitle: string;
};

function Template({ title, subtitle, ...props }: HeroCategoryBannerStoryProps) {
	return (
		<HeroCategoryBanner {...props}>
			<HeroCategoryBannerTitle>{title}</HeroCategoryBannerTitle>
			<HeroCategoryBannerSubtitle>{subtitle}</HeroCategoryBannerSubtitle>
		</HeroCategoryBanner>
	);
}

const meta: Meta<HeroCategoryBannerStoryProps> = {
	title: 'layout/HeroBanner/HeroCategoryBanner',
	component: HeroCategoryBanner,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		title: 'Website hero banner title - xxl/display (H1)',
		subtitle: 'Short hero banner sentence - md/default (P)',
		image: (
			<img
				alt=""
				role="presentation"
				src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"
			/>
		),
	},
	render: Template,
};

export default meta;

type Story = StoryObj<HeroCategoryBannerStoryProps>;

export const Basic: Story = {
	args: {},
};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		background: 'body',
	},
	render: (args) => (
		<Box background="bodyAlt" paddingY={3}>
			<Template {...args} />
		</Box>
	),
};

export const WithoutImage: Story = {
	args: {
		image: undefined,
	},
};
