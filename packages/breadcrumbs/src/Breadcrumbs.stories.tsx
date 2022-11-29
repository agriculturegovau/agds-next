import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	Breadcrumbs,
	BreadcrumbsDivider,
	BreadcrumbsItem,
	BreadcrumbsContainer,
} from './index';

export default {
	title: 'navigation/Breadcrumbs',
	component: Breadcrumbs,
	subcomponents: {
		BreadcrumbsContainer,
		BreadcrumbsItem,
		BreadcrumbsDivider,
	},
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Breadcrumbs {...args} />
);
export const Basic = Template.bind({});
Basic.args = {
	links: [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Services' },
		{ label: 'Establishments' },
	],
};

export const SmallList = Template.bind({});
SmallList.args = {
	links: [{ href: '#', label: 'Home' }, { label: 'Services' }],
};

export const LargeList = Template.bind({});
LargeList.args = {
	links: [
		{ href: '#', label: 'One' },
		{ href: '#', label: 'Two' },
		{ href: '#', label: 'Three' },
		{ href: '#', label: 'Four' },
		{ href: '#', label: 'Five' },
		{ label: 'Six' },
	],
};

export const Modular = () => (
	<BreadcrumbsContainer aria-label="breadcrumb">
		<BreadcrumbsItem href="#one">One</BreadcrumbsItem>
		<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
		<BreadcrumbsItem>Three</BreadcrumbsItem>
	</BreadcrumbsContainer>
);
