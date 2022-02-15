import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { SearchBox } from './SearchBox';

export default {
	title: 'forms/SearchBox',
	component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

export const Basic: ComponentStory<typeof SearchBox> = (args) => (
	<SearchBox {...args} />
);
Basic.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
};

export const Dark: ComponentStory<typeof SearchBox> = (args) => (
	<Box background="body" dark padding={2}>
		<SearchBox {...args} />
	</Box>
);
Basic.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
};

export const LabelVisible: ComponentStory<typeof SearchBox> = (args) => (
	<SearchBox {...args} />
);
LabelVisible.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	labelVisible: true,
};

export const ButtonLabel: ComponentStory<typeof SearchBox> = (args) => (
	<SearchBox {...args} />
);
ButtonLabel.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	buttonLabel: 'Check availability',
};

export const Responsive: ComponentStory<typeof SearchBox> = (args) => (
	<SearchBox {...args} />
);
Responsive.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	buttonReponsive: true,
};

export const IconOnly: ComponentStory<typeof SearchBox> = (args) => (
	<SearchBox {...args} />
);
IconOnly.args = {
	label: 'Search',
	'aria-label': 'Sitewide',
	buttonIconOnly: true,
};

export const Controlled = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>, value: string) => {
		event.preventDefault();
		console.log(value);
	};

	return (
		<SearchBox
			label="Search"
			aria-label="Sitewide"
			value={searchTerm}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
};
