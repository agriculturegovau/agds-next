import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stack } from '../stack';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
	title: 'forms/SearchInput',
	component: SearchInput,
	args: {
		label: 'Search',
	},
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

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
		value: 'Disabled value',
	},
};

export const Invalid: Story = {
	args: {
		required: true,
		message: 'A search term is required to see results',
		invalid: true,
	},
};

export const Hint: Story = {
	args: {
		hint: 'Start typing to see results',
	},
};

export const Block: Story = {
	args: {
		block: true,
	},
};

export const Controlled: Story = {
	args: {},
	render: function Render(args) {
		const [value, setValue] = useState('');
		return <SearchInput {...args} onChange={setValue} value={value} />;
	},
};

export const MaxWidths: Story = {
	args: {},
	render: function Render(args) {
		return (
			<Stack gap={1}>
				{(['md', 'lg', 'xl'] as const).map((size) => (
					<SearchInput
						key={size}
						{...args}
						label={`SearchInput max width ${size}`}
						maxWidth={size}
					/>
				))}
			</Stack>
		);
	},
};
