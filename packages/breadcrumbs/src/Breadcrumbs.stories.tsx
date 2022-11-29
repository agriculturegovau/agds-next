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

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Services' },
	{ href: '#', label: 'Establishments' },
	{ href: '#', label: 'Applications' },
	{ label: 'ABC123' },
];

export const Basic: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Breadcrumbs {...args} />
);
Basic.args = {
	links: exampleLinks,
};

export const Modular = () => (
	<BreadcrumbsContainer aria-label="breadcrumb">
		<BreadcrumbsItem href="#one">One</BreadcrumbsItem>
		<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
		<BreadcrumbsItem>Three</BreadcrumbsItem>
	</BreadcrumbsContainer>
);
