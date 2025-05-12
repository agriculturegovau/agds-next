import { Meta, StoryObj } from '@storybook/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { SearchBox } from './SearchBox';
import { SearchBoxButton } from './SearchBoxButton';
import { SearchBoxInput } from './SearchBoxInput';

const meta: Meta<typeof SearchBox> = {
	title: 'forms/SearchBox',
	component: SearchBox,
};

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Basic: Story = {
	args: {},
	render: (args) => (
		<SearchBox {...args}>
			<SearchBoxInput />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	),
};

export const LabelVisible: Story = {
	args: {},
	render: (args) => (
		<SearchBox {...args}>
			<SearchBoxInput label="Search this website" labelVisible />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	),
};

export const ButtonLabel: Story = {
	args: {},
	render: (args) => (
		<SearchBox {...args}>
			<SearchBoxInput />
			<SearchBoxButton>Custom label</SearchBoxButton>
		</SearchBox>
	),
};

export const ResponsiveButtonIcon: Story = {
	args: {},
	render: (args) => (
		<SearchBox {...args}>
			<SearchBoxInput />
			<SearchBoxButton iconOnly={{ xs: true, sm: false }}>
				Search
			</SearchBoxButton>
		</SearchBox>
	),
};

export const ClearButton: Story = {
	args: {},
	render: (args) => (
		<SearchBox {...args}>
			<SearchBoxInput clearButton />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	),
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
			<SearchBoxInput onChange={onChange} value={searchTerm} />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	);
};
