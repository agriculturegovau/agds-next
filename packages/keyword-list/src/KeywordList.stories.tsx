import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { KeywordList, KeywordListItem, KeywordListContainer } from './index';

export default {
	title: 'content/KeywordList',
	component: KeywordList,
	subcomponents: { KeywordListContainer, KeywordListItem },
} as ComponentMeta<typeof KeywordList>;

const exampleItems = [
	{ subTitle: 'Department of', title: 'Agriculture and Water Resources' },
	{ subTitle: 'Department of', title: 'Communications and the Arts' },
];

export const OnLight: ComponentStory<typeof KeywordList> = (args) => (
	<KeywordList {...args} />
);
OnLight.args = {
	items: exampleItems,
};

export const OnDark: ComponentStory<typeof KeywordList> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<KeywordList {...args} />
	</Box>
);
OnDark.args = {
	items: exampleItems,
};

const exampleLinks = [
	{
		href: '#',
		subTitle: 'Department of',
		title: 'Agriculture and Water Resources',
	},
	{
		href: '#',
		subTitle: 'Department of',
		title: 'Communications and the Arts',
	},
];

export const Links: ComponentStory<typeof KeywordList> = (args) => (
	<KeywordList {...args} />
);
Links.args = {
	items: exampleLinks,
};

export const Modular: ComponentStory<typeof KeywordListContainer> = () => (
	<KeywordListContainer>
		<KeywordListItem
			href="#one"
			title="Department of"
			subTitle="Agriculture and Water Resources"
		/>
		<KeywordListItem
			title="Department of"
			subTitle="Communications and the Arts"
		/>
	</KeywordListContainer>
);
