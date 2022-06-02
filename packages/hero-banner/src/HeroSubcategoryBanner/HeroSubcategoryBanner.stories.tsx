import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { HeroSubcategoryBanner } from './HeroSubcategoryBanner';
import { HeroSubcategoryBannerContainer } from './HeroSubcategoryBannerContainer';
import { HeroSubcategoryBannerContent } from './HeroSubcategoryBannerContent';
import { HeroSubcategoryBannerTitle } from './HeroSubcategoryBannerTitle';

export default {
	title: 'layout/HeroBanner/HeroSubcategoryBanner',
	component: HeroSubcategoryBanner,
	subcomponents: {
		HeroSubcategoryBannerContainer,
		HeroSubcategoryBannerContent,
		HeroSubcategoryBannerTitle,
	},
} as ComponentMeta<typeof HeroSubcategoryBanner>;

const Template: ComponentStory<typeof HeroSubcategoryBanner> = (args) => (
	<HeroSubcategoryBanner {...args}>
		<Breadcrumbs
			links={[
				{ href: '#', label: 'Section 1' },
				{ href: '#', label: 'Category page' },
				{ label: 'Subcategory page' },
			]}
		/>
		{/* 
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		@ts-ignore */}
		<HeroSubcategoryBannerTitle>{args.title}</HeroSubcategoryBannerTitle>
	</HeroSubcategoryBanner>
);

export const LightVariant = Template.bind({});
LightVariant.args = {
	title: 'Subcategory banner title - xxl/display (H1)',
	variant: 'light',
};

export const LightAlt = Template.bind({});
LightAlt.args = {
	title: 'Subcategory banner title - xxl/display (H1)',
	variant: 'lightAlt',
};

export const Dark = Template.bind({});
Dark.args = {
	title: 'Subcategory banner title - xxl/display (H1)',
	variant: 'dark',
};

export const DarkAlt = Template.bind({});
DarkAlt.args = {
	title: 'Subcategory banner title - xxl/display (H1)',
	variant: 'darkAlt',
};
