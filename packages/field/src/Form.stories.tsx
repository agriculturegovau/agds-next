import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Flex } from '@ag.ds-next/box';
import { Field } from './Field';
import { TextInput } from '@ag.ds-next/text-input';
import { Button } from '@ag.ds-next/button';
import { Select } from '@ag.ds-next/select';

export default {
	title: 'forms/Form',
} as ComponentMeta<typeof Field>;

export const Alignment = () => {
	return (
		<Flex alignItems="flex-end" gap={0.5}>
			<TextInput label="TextInput" />
			<Select
				label="Select"
				options={[
					{ value: 'a', label: 'Option A' },
					{ value: 'b', label: 'Option B' },
					{ value: 'c', label: 'Option C' },
				]}
			/>
			<Button variant="primary">Primary Button</Button>
			<Button variant="secondary">Secondary Button</Button>
		</Flex>
	);
};
