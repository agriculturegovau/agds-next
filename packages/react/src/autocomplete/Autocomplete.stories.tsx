import { Meta, StoryObj } from '@storybook/react';
import { COUNTRY_OPTIONS } from '../combobox/test-utils';
import { Autocomplete } from './Autocomplete';

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

export const Basic: Story = {};

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

export const Invalid: Story = {
	args: {
		invalid: true,
		message: 'Country is required',
	},
};

export const Block: Story = {
	args: {
		block: true,
	},
};

export const ExternalAPI: Story = {
	args: {
		hideOptionalLabel: true,
		label: 'Pick a Star Wars character',
		loadOptions: async function loadOptions(inputValue: string) {
			const response = await fetch(
				`https://swapi.dev/api/people/?search=${inputValue}`
			).then((r) => r.json());
			return response.results.map((result: { name: string }) => ({
				label: result.name,
				value: result.name,
			}));
		},
	},
};
