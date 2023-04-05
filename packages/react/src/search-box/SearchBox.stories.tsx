import { useState, ChangeEvent, FormEvent } from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { SearchBox } from './SearchBox';
import { SearchBoxButton } from './SearchBoxButton';
import { SearchBoxInput } from './SearchBoxInput';

const meta: Meta<typeof SearchBox> = {
	title: 'forms/SearchBox',
	component: SearchBox,
	render: (args) => (
		<SearchBox>
			<SearchBoxInput {...args} />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	),
};

export default meta;

type Story = StoryObj<typeof SearchBoxInput>;

export const Basic: Story = {};

export const LabelVisible: Story = {
	args: {
		label: 'Search this website',
		labelVisible: true,
	},
};

export const ButtonLabel: StoryFn<typeof SearchBoxButton> = (args) => (
	<SearchBox>
		<SearchBoxInput />
		<SearchBoxButton {...args} />
	</SearchBox>
);
ButtonLabel.args = {
	children: 'Custom label',
};

export const ResponsiveButtonIcon: StoryFn<typeof SearchBoxButton> = (args) => (
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
