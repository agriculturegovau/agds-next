import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	Breadcrumbs,
	BreadcrumbsDivider,
	BreadcrumbsItem,
	BreadcrumbsContainer,
} from './index';

export default {
	title: 'navigation/Breadcrumbs',
	component: Breadcrumbs,
	subcomponents: { BreadcrumbsContainer, BreadcrumbsItem, BreadcrumbsDivider },
} as ComponentMeta<typeof Breadcrumbs>;

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ label: 'Applications' },
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
		<BreadcrumbsDivider />
		<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
		<BreadcrumbsDivider />
		<BreadcrumbsItem>Three</BreadcrumbsItem>
	</BreadcrumbsContainer>
);
