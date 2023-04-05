import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stack } from '../box';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
	title: 'forms/SearchInput',
	component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

const ControlledTemplate: StoryFn<typeof SearchInput> = (args) => {
	const [value, setValue] = useState('');
	return <SearchInput {...args} value={value} onChange={setValue} />;
};

export const Basic: Story = {
	args: {
		label: 'Search',
	},
};

export const Required: Story = {
	args: {
		label: 'Search',
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		label: 'Search',
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Search',
		disabled: true,
	},
};

export const Invalid: Story = {
	args: {
		label: 'Search',
		required: true,
		message: 'A search term is required to see results',
		invalid: true,
	},
};

export const Hint: Story = {
	args: {
		label: 'Search',
		hint: 'Start typing to see results',
	},
};

export const Block: Story = {
	args: {
		label: 'Search',
		block: true,
	},
};

export const Controlled: Story = {
	args: {
		label: 'Search',
		block: true,
	},
	render: ControlledTemplate,
};

export const MaxWidths: Story = {
	render: (args) => (
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
	),
};
