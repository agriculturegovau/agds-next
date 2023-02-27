import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { ComboboxAsyncMulti } from './ComboboxAsyncMulti';
import { COUNTRIES } from './test-utils';

export default {
	title: 'forms/Combobox/ComboboxAsyncMulti',
} as ComponentMeta<typeof ComboboxAsyncMulti>;

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRIES,
};

const Template: ComponentStory<typeof ComboboxAsyncMulti> = (args) => {
	const [value, onChange] = useState<Option[] | null>(null);
	return (
		<ComboboxAsyncMulti
			{...args}
			value={value}
			onChange={onChange}
			loadOptions={async function loadOptions(inputValue: string) {
				const response = await fetch(
					`https://swapi.dev/api/people/?search=${inputValue}`
				);
				const data: { results: { name: string }[] } = await response.json();
				return data.results.map(({ name }) => ({ value: name, label: name }));
			}}
		/>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	...defaultArgs,
};

export const Required = Template.bind({});
Required.args = {
	...defaultArgs,
	required: true,
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	...defaultArgs,
	hideOptionalLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultArgs,
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	...defaultArgs,
	invalid: true,
	message: 'Country is required',
};

export const Block = Template.bind({});
Block.args = {
	...defaultArgs,
	block: true,
};
