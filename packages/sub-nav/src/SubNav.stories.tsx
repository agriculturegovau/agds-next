import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubNav } from './SubNav';

export default {
	title: 'navigation/SubNav',
	component: SubNav,
} as ComponentMeta<typeof SubNav>;

const exampleLinks = [
	{ href: '#usage', label: 'Usage' },
	{ href: '#code', label: 'Code' },
	{ href: '#content', label: 'Content' },
	{ href: '#accessibility', label: 'Accessibility' },
];

const Template: ComponentStory<typeof SubNav> = (args) => <SubNav {...args} />;

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
