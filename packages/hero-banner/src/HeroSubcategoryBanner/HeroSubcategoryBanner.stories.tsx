import { ComponentMeta, Story } from '@storybook/react';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Box } from '@ag.ds-next/box';
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

const commonArgs = {
	title: 'Subcategory banner title - xxl/display (H1)',
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
	HeroSubcategoryBannerProps & { title: string; subtitle: string }
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
	HeroSubcategoryBannerProps & { title: string; subtitle: string }
> = (args) => (
	<Box palette="dark" padding={1} background="body">
		<Template {...args} />
	</Box>
);
BodyAltOnDark.args = {
	...commonArgs,
	background: 'bodyAlt',
};
