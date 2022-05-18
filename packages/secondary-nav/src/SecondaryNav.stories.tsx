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

export const LightVariant = Template.bind({});
LightVariant.args = {
	variant: 'light',
	activePath: '#code',
	links: exampleLinks,
};

export const LightAltVariant = Template.bind({});
LightAltVariant.args = {
	variant: 'lightAlt',
	activePath: '#code',
	links: exampleLinks,
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
	variant: 'dark',
	activePath: '#code',
	links: exampleLinks,
};

export const DarkAltVariant = Template.bind({});
DarkAltVariant.args = {
	variant: 'darkAlt',
	activePath: '#code',
	links: exampleLinks,
};
