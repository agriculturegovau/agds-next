import { Box } from '@ag.ds-next/box';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryNav } from './SecondaryNav';

export default {
	title: 'navigation/SecondaryNav',
	component: SecondaryNav,
} as ComponentMeta<typeof SecondaryNav>;

const exampleLinks = [
	{ href: '#usage', label: 'Usage' },
	{ href: '#code', label: 'Code' },
	{ href: '#content', label: 'Content' },
	{ href: '#accessibility', label: 'Accessibility' },
];

const Template: ComponentStory<typeof SecondaryNav> = (args) => (
	<SecondaryNav {...args} />
);

export const OnLight = Template.bind({});
OnLight.args = {
	activePath: '#code',
	links: exampleLinks,
};

export const OnDark: ComponentStory<typeof SecondaryNav> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	activePath: '#code',
	links: exampleLinks,
};

export const Wrapping = Template.bind({});
Wrapping.args = {
	activePath: '#accessibility',
	links: [
		{ href: '#', label: 'Usage' },
		{ href: '#', label: 'Code' },
		{ href: '#', label: 'Content' },
		{ href: '#accessibility', label: 'Accessibility' },
		{ href: '#', label: 'Usage' },
		{ href: '#', label: 'Code' },
		{ href: '#', label: 'Content' },
		{ href: '', label: 'Accessibility' },
		{ href: '#', label: 'Usage' },
		{ href: '#', label: 'Code' },
		{ href: '#', label: 'Content' },
		{ href: '', label: 'Accessibility' },
	],
};
