import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBox } from './SearchBox';
import { SearchBoxButton } from './SearchBoxButton';
import { SearchBoxInput } from './SearchBoxInput';

export default {
	title: 'forms/SearchBox',
	component: SearchBox,
	subcomponents: { SearchBoxButton, SearchBoxInput },
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = () => (
	<SearchBox>
		<SearchBoxInput />
		<SearchBoxButton>Search</SearchBoxButton>
	</SearchBox>
);

export const OnLight = Template.bind({});
OnLight.args = {};

export const OnDark = Template.bind({});
OnDark.args = {};

export const LabelVisible: ComponentStory<typeof SearchBoxInput> = (args) => (
	<SearchBox>
		<SearchBoxInput {...args} />
		<SearchBoxButton>Search</SearchBoxButton>
	</SearchBox>
);
LabelVisible.args = {
	label: 'Search this website',
	labelVisible: true,
};

export const ButtonLabel: ComponentStory<typeof SearchBoxButton> = (args) => (
	<SearchBox>
		<SearchBoxInput />
		<SearchBoxButton {...args} />
	</SearchBox>
);
ButtonLabel.args = {
	children: 'Custom label',
};

export const ResponsiveButtonIcon: ComponentStory<typeof SearchBoxButton> = (
	args
) => (
	<SearchBox>
		<SearchBoxInput />
		<SearchBoxButton {...args}>Search</SearchBoxButton>
	</SearchBox>
);
ResponsiveButtonIcon.args = {
	iconOnly: { xs: true, sm: false },
};

export const Controlled = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(searchTerm);
	};

	return (
		<SearchBox onSubmit={onSubmit}>
			<SearchBoxInput value={searchTerm} onChange={onChange} />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	);
};
