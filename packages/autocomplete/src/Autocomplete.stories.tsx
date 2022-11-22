import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

export default {
	title: 'forms/Autocomplete',
	component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const defaultArgs = {
	label: 'Find your state',
	hint: 'Start typing to see results',
	loadOptions: async function loadOptions() {
		// Simulate a slow network connection
		await new Promise((resolve) => setTimeout(resolve, 3000));
		return [
			{ label: 'Australian Capital Territory', value: 'act' },
			{ label: 'New South Wales', value: 'nsw' },
			{ label: 'Northern Territory', value: 'nt' },
			{ label: 'Queensland', value: 'qld' },
			{ label: 'South Australia', value: 'sa' },
			{ label: 'Tasmania', value: 'tas' },
			{ label: 'Victoria', value: 'vic' },
			{ label: 'Western Australia', value: 'wa' },
		];
	},
};

const Template: ComponentStory<typeof Autocomplete> = (args) => (
	<Autocomplete {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	...defaultArgs,
};

export const Required = Template.bind({});
Required.args = {
	...defaultArgs,
	required: true,
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
	message: 'City is required',
};

export const Block = Template.bind({});
Block.args = {
	...defaultArgs,
	block: true,
};

export const NoSecondaryLabel = Template.bind({});
NoSecondaryLabel.args = {
	...defaultArgs,
	secondaryLabel: null,
};
