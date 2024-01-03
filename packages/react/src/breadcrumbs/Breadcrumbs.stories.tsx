import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'navigation/Breadcrumbs',
	component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
	args: {
		links: [
			{ href: '#', label: 'Home' },
			{ href: '#', label: 'Services' },
			{ label: 'Establishments' },
		],
	},
};

export const LargeList: Story = {
	args: {
		links: [
			{ href: '#', label: 'Home' },
			{ href: '#', label: 'Lorem' },
			{ href: '#', label: 'Ipsum' },
			{ href: '#', label: 'Sit amet consectetur' },
			{ href: '#', label: 'Adipiscing Elit' },
			{ label: 'Aenean euismod' },
		],
	},
};
