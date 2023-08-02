import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
	title: 'forms/Select',
	component: Select,
	args: {
		label: 'Example',
		placeholder: 'Please select',
		options: [
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' },
			{ value: 'c', label: 'Option C' },
		],
	},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
	args: {},
};

export const Placeholder: Story = {
	args: {
		placeholder: 'Choose an option',
	},
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

export const DisabledOption: Story = {
	args: {
		options: [
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B', disabled: true },
			{ value: 'c', label: 'Option C' },
		],
	},
};

export const Invalid: Story = {
	args: {
		invalid: true,
		required: true,
		message: 'This select is invalid',
	},
};

export const Hint: Story = {
	args: {
		label: 'Example',
		hint: 'Lorem ipsum dolar',
	},
};

export const Block: Story = {
	args: {
		block: true,
	},
};

export const MaxWidths: Story = {
	args: {
		block: true,
	},
	render: function Render(args) {
		return (
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
	},
};

export const Controlled: Story = {
	args: {
		block: true,
	},
	render: function Render(args) {
		const [value, setValue] = useState<string>();
		return (
			<Select
				{...args}
				label="Controlled"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		);
	},
};

export const GroupedOptions: Story = {
	args: {
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
	},
};
