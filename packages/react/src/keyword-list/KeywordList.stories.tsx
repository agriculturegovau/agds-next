import { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeywordList, KeywordListItem, KeywordListContainer } from './index';

export default {
	title: 'content/KeywordList',
	component: KeywordList,
	subcomponents: { KeywordListContainer, KeywordListItem },
} as ComponentMeta<typeof KeywordList>;

const exampleItems = [
	{
		subTitle: 'Department of',
		title: 'Agriculture, Fisheries and Forestry',
	},
	{ subTitle: 'Department of', title: 'Communications and the Arts' },
];

export const Basic: ComponentStory<typeof KeywordList> = (args) => (
	<KeywordList {...args} />
);
Basic.args = {
	items: exampleItems,
};

const exampleLinks = [
	{
		href: '#',
		subTitle: 'Department of',
		title: 'Agriculture, Fisheries and Forestry',
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
			subTitle="Agriculture, Fisheries and Forestry"
		/>
		<KeywordListItem
			title="Department of"
			subTitle="Communications and the Arts"
		/>
	</KeywordListContainer>
);
