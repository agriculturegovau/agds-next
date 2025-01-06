import { Meta, StoryObj } from '@storybook/react';
import { SearchBox, SearchBoxInput, SearchBoxButton } from '../../search-box';
import { Button, ButtonGroup } from '../../button';
import { Box } from '../../box';
import { HeroBanner, HeroBannerProps } from './HeroBanner';
import {
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from './HeroBannerTitle';

type HeroBannerStoryProps = HeroBannerProps & {
	title: string;
	subtitle: string;
};

function Template({
	title,
	subtitle,
	children,
	...props
}: HeroBannerStoryProps) {
	return (
		<HeroBanner {...props}>
			<HeroBannerTitleContainer>
				<HeroBannerTitle>{title}</HeroBannerTitle>
				<HeroBannerSubtitle>{subtitle}</HeroBannerSubtitle>
			</HeroBannerTitleContainer>
			{children}
		</HeroBanner>
	);
}

const meta: Meta<HeroBannerStoryProps> = {
	title: 'layout/HeroBanner/HeroBanner',
	component: HeroBanner,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		title: 'Website hero banner title - xxxl/display (H1)',
		subtitle: 'Short hero banner sentence - md/default (P)',
		image: (
			<img
				alt=""
				role="presentation"
				src="https://design-system.agriculture.gov.au/img/placeholder/hero-banner.jpeg"
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
	},
	render: Template,
};

export default meta;

type Story = StoryObj<HeroBannerStoryProps>;

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

export const WithButtons: Story = {
	args: {
		children: (
			<ButtonGroup>
				<Button>Primary button</Button>
				<Button variant="secondary">Secondary button</Button>
			</ButtonGroup>
		),
	},
};

export const WithoutImage: Story = {
	args: {
		image: undefined,
	},
};
