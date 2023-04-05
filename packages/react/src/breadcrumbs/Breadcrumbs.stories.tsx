import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsContainer } from './index';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'navigation/Breadcrumbs',
	component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {};
Basic.args = {
	links: [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Services' },
		{ label: 'Establishments' },
	],
};

export const LargeList: Story = {};
LargeList.args = {
	links: [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Lorem' },
		{ href: '#', label: 'Ipsum' },
		{ href: '#', label: 'Sit amet consectetur' },
		{ href: '#', label: 'Adipiscing Elit' },
		{ label: 'Aenean euismod' },
	],
};

export const Modular = () => (
	<BreadcrumbsContainer aria-label="breadcrumb">
		<BreadcrumbsItem href="#one">One</BreadcrumbsItem>
		<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
		<BreadcrumbsItem>Three</BreadcrumbsItem>
	</BreadcrumbsContainer>
);
