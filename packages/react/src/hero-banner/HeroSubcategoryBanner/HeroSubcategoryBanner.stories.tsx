import { ComponentMeta, Story } from '@storybook/react';
import { Breadcrumbs } from '../../breadcrumbs';
import { Box } from '../../box';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerProps,
} from './HeroSubcategoryBanner';
import { HeroSubcategoryBannerTitle } from './HeroSubcategoryBannerTitle';

export default {
	title: 'layout/HeroBanner/HeroSubcategoryBanner',
	component: HeroSubcategoryBanner,
	subcomponents: {
		HeroSubcategoryBannerTitle,
	},
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
	},
} as ComponentMeta<typeof HeroSubcategoryBanner>;

type HeroSubcategoryBannerStoryProps = HeroSubcategoryBannerProps & {
	title: string;
	subtitle: string;
};

const Template: Story<HeroSubcategoryBannerStoryProps> = (args) => (
	<HeroSubcategoryBanner {...args}>
		<Breadcrumbs
			links={[
				{ href: '#', label: 'Section 1' },
				{ href: '#', label: 'Category page' },
				{ label: 'Subcategory page' },
			]}
		/>
		<HeroSubcategoryBannerTitle>{args.title}</HeroSubcategoryBannerTitle>
	</HeroSubcategoryBanner>
);

const commonArgs = {
	title: 'Subcategory banner title - xxl/display (H1)',
};

export const Basic = Template.bind({});
Basic.args = {
	...commonArgs,
};

export const OnBodyAlt: Story<HeroSubcategoryBannerStoryProps> = (args) => (
	<Box paddingY={3} background="bodyAlt">
		<Template {...args} />
	</Box>
);
OnBodyAlt.storyName = 'On bodyAlt background';
OnBodyAlt.args = {
	...commonArgs,
	background: 'body',
};
