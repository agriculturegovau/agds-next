import React, { useState, ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
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

export const OnLight: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
OnLight.args = {
	label: 'Example',
	placeholder: 'Please select',
	options: EXAMPLE_OPTIONS,
};

export const OnDark: ComponentStory<typeof Select> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Select {...args} />
	</Box>
);
OnDark.args = {
	label: 'Example',
	placeholder: 'Please select',
	options: EXAMPLE_OPTIONS,
};

export const Placeholder: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Placeholder.args = {
	label: 'Example',
	placeholder: 'Select an option from the menu',
	options: EXAMPLE_OPTIONS,
};

export const Required: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Required.args = {
	label: 'Example',
	placeholder: 'Please select',
	required: true,
	options: EXAMPLE_OPTIONS,
};

export const Disabled: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Disabled.args = {
	label: 'Example',
	placeholder: 'Please select',
	disabled: true,
	options: EXAMPLE_OPTIONS,
};

export const DisabledOption: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
DisabledOption.args = {
	label: 'Example',
	placeholder: 'Please select',
	options: [
		{ value: 'a', label: 'Option A' },
		{ value: 'b', label: 'Option B', disabled: true },
		{ value: 'c', label: 'Option C' },
	],
};

export const Invalid: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Invalid.args = {
	label: 'Example',
	placeholder: 'Please select',
	message: 'This select is invalid',
	required: true,
	invalid: true,
	options: EXAMPLE_OPTIONS,
};

export const Valid: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Valid.args = {
	label: 'Example',
	placeholder: 'Please select',
	message: 'This select is valid',
	required: true,
	valid: true,
	options: EXAMPLE_OPTIONS,
	value: EXAMPLE_OPTIONS[0].value,
};

export const Hint: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Hint.args = {
	label: 'Example',
	placeholder: 'Please select',
	hint: 'Lorem ipsum dolar',
	options: EXAMPLE_OPTIONS,
};

export const Block: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Block.args = {
	label: 'Block',
	placeholder: 'Please select',
	block: true,
	options: EXAMPLE_OPTIONS,
};

export const MaxWidths: ComponentStory<typeof Select> = (args) => (
	<Stack gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Select key={size} {...args} label={size} maxWidth={size} />
		))}
	</Stack>
);
MaxWidths.args = {
	placeholder: 'Please select',
	options: EXAMPLE_OPTIONS,
};

export const Controlled = () => {
	const [selected, setSelected] = useState<
		{ label: string; value: string } | undefined
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

export const GroupedOptions: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
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

export const RequiredLabel: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
RequiredLabel.args = {
	label: 'Example',
	placeholder: 'Please select',
	options: EXAMPLE_OPTIONS,
	requiredLabel: false,
};
