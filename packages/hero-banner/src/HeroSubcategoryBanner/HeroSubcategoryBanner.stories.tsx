import { ComponentMeta, Story } from '@storybook/react';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
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

const Template: Story<
	HeroSubcategoryBannerProps & { title: string; subtitle: string }
> = (args) => (
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
