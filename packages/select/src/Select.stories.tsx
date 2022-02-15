import React, { useState, ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { Select } from './Select';

export default {
	title: 'forms/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

export const Basic: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Basic.args = {
	label: 'Example',
	options: ['Option A', 'Option B', 'Option C'],
};

export const Placeholder: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Placeholder.args = {
	label: 'Example',
	placeholder: 'Select an option',
	options: ['Option A', 'Option B', 'Option C'],
};

export const Required: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Required.args = {
	required: true,
	label: 'Example',
	options: ['Option A', 'Option B', 'Option C'],
};

export const Disabled: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Disabled.args = {
	disabled: true,
	label: 'Example',
	options: ['Option A', 'Option B', 'Option C'],
};

export const Invalid: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Invalid.args = {
	label: 'Example',
	message: 'This select is invalid',
	required: true,
	invalid: true,
	options: ['Option A', 'Option B', 'Option C'],
};

export const Valid: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Valid.args = {
	label: 'Example',
	message: 'This select is valid',
	required: true,
	valid: true,
	options: ['Option A', 'Option B', 'Option C'],
};

export const Hint: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Hint.args = {
	label: 'Example',
	hint: 'Lorem ipsum dolar',
	options: ['Option A', 'Option B', 'Option C'],
};

export const Block: ComponentStory<typeof Select> = (args) => (
	<Select {...args} />
);
Block.args = {
	block: true,
	label: 'Block',
	options: ['Option A', 'Option B', 'Option C'],
};

export const MaxWidths: ComponentStory<typeof Select> = (args) => (
	<Stack gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Select
				key={size}
				{...args}
				label={`Select max width ${size}`}
				maxWidth={size}
			/>
		))}
	</Stack>
);
MaxWidths.args = {
	options: ['Option A', 'Option B', 'Option C'],
};

export const Controlled = () => {
	const options = ['Option A', 'Option B', 'Option C'];
	const [value, setValue] = useState('Option B');

	const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);
	};

	return (
		<Select
			value={value}
			onChange={onChange}
			label="Controlled"
			options={options}
		/>
	);
};

export const ControlledObjectOptions = () => {
	const options = [
		{ value: 'a', label: 'Option A' },
		{ value: 'b', label: 'Option B' },
		{ value: 'c', label: 'Option C' },
	];
	const [selected, setSelected] = useState<
		{ label: string; value: string } | undefined
	>();

	const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const nextSelected = options.find(
			({ value }) => value === event.target.value
		);
		setSelected(nextSelected);
	};

	return (
		<Select
			value={selected?.value}
			onChange={onChange}
			label="Controlled object options"
			options={options}
		/>
	);
};
