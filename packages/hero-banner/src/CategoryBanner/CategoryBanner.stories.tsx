import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { CategoryBanner } from './CategoryBanner';
import { CategoryBannerContainer } from './CategoryBannerContainer';
import { CategoryBannerContent } from './CategoryBannerContent';
import { CategoryBannerTitle } from './CategoryBannerTitle';

export default {
	title: 'layout/HeroBanner/CategoryBanner',
	component: CategoryBanner,
	subcomponents: {
		CategoryBannerContainer,
		CategoryBannerContent,
		CategoryBannerTitle,
	},
} as ComponentMeta<typeof CategoryBanner>;

const Template: ComponentStory<typeof CategoryBanner> = (args) => (
	<CategoryBanner {...args}>
		<Breadcrumbs
			links={[
				{ href: '#', label: 'Home' },
				{ href: '#', label: 'Establishments' },
				{ label: 'Applications' },
			]}
		/>
		{/* 
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		@ts-ignore */}
		<CategoryBannerTitle>{args.title}</CategoryBannerTitle>
	</CategoryBanner>
);

export const LightVariant = Template.bind({});
LightVariant.args = {
	title: 'Hero banner title',
	variant: 'light',
};

export const LightAlt = Template.bind({});
LightAlt.args = {
	title: 'Hero banner title',
	variant: 'lightAlt',
};

export const Dark = Template.bind({});
Dark.args = {
	title: 'Hero banner title',
	variant: 'dark',
};

export const DarkAlt = Template.bind({});
DarkAlt.args = {
	title: 'Hero banner title',
	variant: 'darkAlt',
};
