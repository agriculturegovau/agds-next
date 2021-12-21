import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkList } from './LinkList';

export default {
	title: 'layout/LinkList',
	component: LinkList,
} as ComponentMeta<typeof LinkList>;

const Template: ComponentStory<typeof LinkList> = (args) => {
	return <LinkList {...args} />;
};

const exampleLinks = [
	{ link: '#', text: 'Home' },
	{ link: '#', text: 'Establishments' },
	{ link: '#', text: 'Applications' },
];

export const Basic = Template.bind({});
Basic.args = {
	links: exampleLinks,
};

export const Inline = Template.bind({});
Inline.args = {
	links: exampleLinks,
	inline: true,
};

export const BasicWithCustomLink: ComponentStory<typeof LinkList> = (args) => {
	return (
		<LinkList
			{...args}
			linkComponent={({ link, text }) => <a href={link}>{text}</a>}
		/>
	);
};
BasicWithCustomLink.args = {
	links: exampleLinks,
};
