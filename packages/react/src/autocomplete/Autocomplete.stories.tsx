import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { COUNTRY_OPTIONS } from '../combobox/test-utils';
import { Autocomplete } from './Autocomplete';
import { AutocompleteRenderItem } from './AutocompleteRenderItem';

const meta: Meta<typeof Autocomplete> = {
	title: 'forms/Autocomplete',
	component: Autocomplete,
	args: {
		label: 'Find your country',
		hint: 'Start typing to see results',
		loadOptions: async function loadOptions() {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			return COUNTRY_OPTIONS;
		},
	},
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Basic: Story = {
	args: {},
};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Invalid = {
	args: {
		invalid: true,
		message: 'Country is required',
	},
};

export const Block = {
	args: {
		block: true,
	},
};

export const CustomEmptyResultsMessage: Story = {
	args: {
		emptyResultsMessage: 'No countries were found',
	},
};

export const ExternalAPI = {
	args: {
		hideOptionalLabel: true,
		label: 'Choose a Star Wars character',
		loadOptions: loadOptionsFromStarWarsApi,
	},
};

export const CustomRender: Story = {
	render: function Render() {
		const [value, onChange] = useState<StarWarsCharacterOption | null>(null);
		return (
			<Autocomplete
				label="Choose a Star Wars character"
				hint="Start typing to see results"
				hideOptionalLabel
				value={value}
				onChange={onChange}
				loadOptions={loadOptionsFromStarWarsApi}
				renderItem={(item, inputValue) => (
					<AutocompleteRenderItem
						itemLabel={item.label}
						inputValue={inputValue}
						secondaryText={`Birth year: ${item.birthYear}`}
						tertiaryText={`Job: ${item.hairColor}`}
					/>
				)}
			/>
		);
	},
};

type StarWarsCharacterOption = {
	label: string;
	value: string;
	name: string;
	birthYear: string;
	hairColor: string;
};

async function loadOptionsFromStarWarsApi(
	inputValue: string
): Promise<StarWarsCharacterOption[]> {
	const response = await fetch(
		`https://swapi.dev/api/people/?search=${inputValue}`
	).then((r) => r.json());
	console.log({ response });
	return response.results.map(
		(result: { name: string; birth_year: string; hair_color: string }) => ({
			label: result.name,
			value: result.name,
			name: result.name,
			birthYear: result.birth_year,
			hairColor: result.hair_color,
		})
	);
}
