import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
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

export const Basic: ComponentStory<typeof SubNav> = (args) => (
	<SubNav {...args} />
);
Basic.args = {
	background: 'body',
	activePath: '#code',
	links: exampleLinks,
};

export const OnBodyAlt: ComponentStory<typeof SubNav> = (args) => (
	<Box padding={1.5} background="bodyAlt">
		<SubNav {...args} />
	</Box>
);
OnBodyAlt.storyName = 'On bodyAlt background';
OnBodyAlt.args = {
	background: 'bodyAlt',
	activePath: '#code',
	links: exampleLinks,
};
