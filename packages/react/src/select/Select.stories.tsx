import { useState, ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../box';
import { Select } from './Select';

export default {
	title: 'forms/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const EXAMPLE_OPTIONS = [
	{ value: 'a', label: 'Option A' },
	{ value: 'b', label: 'Option B' },
	{ value: 'c', label: 'Option C' },
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	label: 'Example',
	placeholder: 'Please select',
	options: EXAMPLE_OPTIONS,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
	label: 'Example',
	placeholder: 'Select an option from the menu',
	options: EXAMPLE_OPTIONS,
};

export const Required = Template.bind({});
Required.args = {
	label: 'Example',
	placeholder: 'Please select',
	required: true,
	options: EXAMPLE_OPTIONS,
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	label: 'Example',
	placeholder: 'Please select',
	options: EXAMPLE_OPTIONS,
	hideOptionalLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Example',
	placeholder: 'Please select',
	disabled: true,
	options: EXAMPLE_OPTIONS,
};

export const DisabledOption = Template.bind({});
DisabledOption.args = {
	label: 'Example',
	placeholder: 'Please select',
	options: [
		{ value: 'a', label: 'Option A' },
		{ value: 'b', label: 'Option B', disabled: true },
		{ value: 'c', label: 'Option C' },
	],
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Example',
	placeholder: 'Please select',
	message: 'This select is invalid',
	required: true,
	invalid: true,
	options: EXAMPLE_OPTIONS,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Example',
	placeholder: 'Please select',
	hint: 'Lorem ipsum dolar',
	options: EXAMPLE_OPTIONS,
};

export const Block = Template.bind({});
Block.args = {
	label: 'Block',
	placeholder: 'Please select',
	block: true,
	options: EXAMPLE_OPTIONS,
};

export const MaxWidths: ComponentStory<typeof Select> = (args) => (
	<Stack gap={1}>
		<Select
			maxWidth="sm"
			label="Items per page (sm)"
			hideOptionalLabel={true}
			options={[
				{ value: '10', label: '10' },
				{ value: '25', label: '25' },
				{ value: '50', label: '50' },
				{ value: '100', label: '100' },
			]}
		/>
		{(['md', 'lg', 'xl'] as const).map((size) => (
			<Select
				key={size}
				{...args}
				label={`What option? (${size})`}
				maxWidth={size}
			/>
		))}
	</Stack>
);
MaxWidths.args = {
	placeholder: 'Please select',
	options: EXAMPLE_OPTIONS,
};

export const Controlled = () => {
	const [selected, setSelected] = useState<
		typeof EXAMPLE_OPTIONS[number] | undefined
	>();

	const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const nextSelected = EXAMPLE_OPTIONS.find(
			({ value }) => value === event.target.value
		);
		setSelected(nextSelected);
	};

	return (
		<Select
			value={selected?.value}
			onChange={onChange}
			label="Controlled"
			placeholder="Please select"
			options={EXAMPLE_OPTIONS}
		/>
	);
};

export const GroupedOptions = Template.bind({});
GroupedOptions.args = {
	label: 'Grouped options',
	placeholder: 'Please select',
	options: [
		{
			label: 'Group A',
			options: [
				{ value: 'a', label: 'Option A' },
				{ value: 'b', label: 'Option B' },
				{ value: 'c', label: 'Option C' },
			],
		},
		{
			label: 'Group B',
			options: [
				{ value: 'd', label: 'Option D' },
				{ value: 'e', label: 'Option E' },
				{ value: 'f', label: 'Option F' },
			],
		},
	],
};
