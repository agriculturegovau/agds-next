import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Avatar } from '../avatar';
import { COUNTRY_OPTIONS } from '../combobox/test-utils';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { Autocomplete } from './Autocomplete';
import { defaultRenderItem } from './index';

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
		label: 'Pick a Star Wars character',
		loadOptions: loadOptionsFromStarWarsApi,
	},
};

export const CustomRender: Story = {
	render: function Render() {
		const [value, onChange] = useState<StarWarsCharacterOption | null>(null);
		return (
			<Autocomplete
				label="Pick a Star Wars character"
				hint="Start typing to see results"
				hideOptionalLabel
				value={value}
				onChange={onChange}
				loadOptions={loadOptionsFromStarWarsApi}
				renderItem={(option, inputValue) => (
					<Flex as="span" alignItems="center" gap={0.5}>
						<Avatar name={option.label} size="sm" tone="action" />
						<Stack as="span">
							<span>{defaultRenderItem(option, inputValue)}</span>
							<Text fontSize="xs" color="muted">
								Birth Year: {option.birthYear}
							</Text>
						</Stack>
					</Flex>
				)}
			/>
		);
	},
};

type StarWarsCharacterOption = {
	label: string;
	value: string;
	birthYear: string;
};

async function loadOptionsFromStarWarsApi(
	inputValue: string
): Promise<StarWarsCharacterOption[]> {
	const response = await fetch(
		`https://swapi.dev/api/people/?search=${inputValue}`
	).then((r) => r.json());
	return response.results.map(
		(result: { name: string; birth_year: string }) => ({
			label: result.name,
			value: result.name,
			birthYear: result.birth_year,
		})
	);
}
