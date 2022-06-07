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

export const OnLight: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Breadcrumbs {...args} />
);
OnLight.args = {
	links: exampleLinks,
};

export const OnDark: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Breadcrumbs {...args} />
	</Box>
);
OnDark.args = {
	links: exampleLinks,
};

export const Modular = () => (
	<BreadcrumbsContainer aria-label="breadcrumb">
		<BreadcrumbsItem
			href="https://github.com/steelthreads/agds-next"
			target="_blank"
			rel="noopener noreferrer"
		>
			External
		</BreadcrumbsItem>
		<BreadcrumbsDivider />
		<BreadcrumbsItem href="#one">One</BreadcrumbsItem>
		<BreadcrumbsDivider />
		<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
		<BreadcrumbsDivider />
		<BreadcrumbsItem>Three</BreadcrumbsItem>
	</BreadcrumbsContainer>
);
