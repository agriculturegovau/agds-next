import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../../breadcrumbs';
import { Box } from '../../box';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerProps,
} from './HeroSubcategoryBanner';
import { HeroSubcategoryBannerTitle } from './HeroSubcategoryBannerTitle';

type HeroSubcategoryBannerStoryProps = HeroSubcategoryBannerProps & {
	title: string;
	subtitle: string;
};

function Template({ title, ...props }: HeroSubcategoryBannerStoryProps) {
	return (
		<HeroSubcategoryBanner {...props}>
			<Breadcrumbs
				links={[
					{ href: '#', label: 'Section 1' },
					{ href: '#', label: 'Category page' },
					{ label: 'Subcategory page' },
				]}
			/>
			<HeroSubcategoryBannerTitle>{title}</HeroSubcategoryBannerTitle>
		</HeroSubcategoryBanner>
	);
}

const meta: Meta<HeroSubcategoryBannerStoryProps> = {
	title: 'layout/HeroBanner/HeroSubcategoryBanner',
	component: HeroSubcategoryBanner,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		title: 'Subcategory banner title - xxl/display (H1)',
	},
	render: Template,
};

export default meta;

type Story = StoryObj<HeroSubcategoryBannerStoryProps>;

export const Basic: Story = {
	args: {},
};

export const OnBodyAlt: Story = {
	name: 'On bodyAlt background',
	args: {
		background: 'body',
	},
	render: (args) => (
		<Box paddingY={3} background="bodyAlt">
			<Template {...args} />
		</Box>
	),
};
