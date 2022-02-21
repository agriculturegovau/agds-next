import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Field } from './Field';
import { TextInput } from '@ag.ds-next/text-input';
import { Button } from '@ag.ds-next/button';
import { Select } from '@ag.ds-next/select';
import { Checkbox, Radio } from '@ag.ds-next/control-input';
import { SearchBox } from '@ag.ds-next/search-box';

export default {
	title: 'forms/Form',
} as ComponentMeta<typeof Field>;

const Example = ({
	disabled,
	checked,
}: {
	disabled?: boolean;
	checked?: boolean;
}) => (
	<Flex alignItems="flex-end" gap={1}>
		<TextInput
			label="TextInput"
			value={checked ? 'Lorem ipsum' : undefined}
			disabled={disabled}
		/>
		<Select
			label="Select"
			placeholder="Select option"
			options={[
				{ value: 'a', label: 'Option A' },
				{ value: 'b', label: 'Option B' },
				{ value: 'c', label: 'Option C' },
			]}
			value={checked ? 'a' : undefined}
			disabled={disabled}
		/>
		<Checkbox checked={checked} disabled={disabled}>
			Would you like an email?
		</Checkbox>
		<Radio checked={checked} disabled={disabled}>
			Cooking
		</Radio>
		<Button variant="primary" disabled={disabled}>
			Primary Button
		</Button>
		<Button variant="secondary" disabled={disabled}>
			Secondary Button
		</Button>
		<SearchBox label="Search" />
	</Flex>
);

export const Alignment = () => {
	return (
		<Stack gap={2}>
			<Stack gap={1} padding={1.5}>
				<Example />
				<Example checked />
				<Example disabled />
				<Example checked disabled />
			</Stack>
			<Stack background="body" dark gap={1} padding={1.5}>
				<Example />
				<Example checked />
				<Example disabled />
				<Example checked disabled />
			</Stack>
		</Stack>
	);
};
