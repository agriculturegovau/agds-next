import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Search } from './Search';
import React, { useState } from 'react';

export default {
	title: 'forms/Search',
	component: Search,
} as ComponentMeta<typeof Search>;

export const Basic: ComponentStory<typeof Search> = (args) => (
	<Search {...args} />
);
Basic.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
};

export const Dark: ComponentStory<typeof Search> = (args) => (
	<Box background="body" dark padding={2}>
		<Search {...args} />
	</Box>
);
Basic.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
};

export const LabelVisible: ComponentStory<typeof Search> = (args) => (
	<Search {...args} />
);
LabelVisible.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	labelVisible: true,
};

export const ButtonLabel: ComponentStory<typeof Search> = (args) => (
	<Search {...args} />
);
ButtonLabel.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	buttonLabel: 'Check availability',
};

export const Responsive: ComponentStory<typeof Search> = (args) => (
	<Search {...args} />
);
Responsive.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	butttonReponsive: true,
};

export const IconOnly: ComponentStory<typeof Search> = (args) => (
	<Search {...args} />
);
IconOnly.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	buttonIconOnly: true,
};

export const Controlled = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>, value: string) => {
		event.preventDefault();
		console.log(value);
	};

	return (
		<Search
			label="Search"
			aria-label="Sitewide"
			value={searchTerm}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
};
