import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Avatar } from '../avatar';
import { COUNTRY_OPTIONS, NAME_OPTIONS } from '../combobox/test-utils';
import { NotificationBadge } from '../notification-badge';
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
		loadOptions: async function loadOptionsFromStarWarsApi(inputValue: string) {
			const response = await fetch(
				`https://swapi.dev/api/people/?search=${inputValue}`
			).then((r) => r.json());
			return response.results.map(
				(result: { name: string; birth_year: string; hair_color: string }) => ({
					label: result.name,
					value: result.name,
					name: result.name,
					birthYear: result.birth_year,
					hairColor: result.hair_color,
				})
			);
		},
	},
};

type NameOption = (typeof NAME_OPTIONS)[number];

export const CustomRender: Story = {
	render: function Render() {
		const [value, setValue] = useState<NameOption | null>(null);
		return (
			<Autocomplete
				label="Search users"
				loadOptions={async function loadOptions() {
					// Simulate a slow network connection
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return NAME_OPTIONS;
				}}
				onChange={setValue}
				renderItem={(item, inputValue) => (
					<AutocompleteRenderItem
						beforeElement={
							<Avatar name={item.fullName} size="sm" tone="action" />
						}
						endElement={
							item.unreadMessageCount > 0 ? (
								<NotificationBadge
									tone="action"
									value={item.unreadMessageCount}
								/>
							) : null
						}
						inputValue={inputValue}
						itemLabel={item.label}
						secondaryText={`Role: ${item.jobTitle}`}
						tertiaryText={`Job: ${item.status}`}
					/>
				)}
				value={value}
			/>
		);
	},
};
