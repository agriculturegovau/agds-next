import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Avatar } from '../avatar';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { Combobox } from './Combobox';
import { defaultRenderItem } from './defaultRenderItem';
import { COUNTRY_OPTIONS, NAME_OPTIONS } from './test-utils';

const meta: Meta<typeof Combobox> = {
	title: 'forms/Combobox/Combobox',
	component: Combobox,
	render: function ComboboxStory(props) {
		const [value, onChange] = useState<Option | null>(null);
		return <Combobox {...props} value={value} onChange={onChange} />;
	},
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

type Story = StoryObj<typeof Combobox>;

export const Basic: Story = {
	args: defaultArgs,
};

export const Required: Story = {
	args: {
		...defaultArgs,
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		...defaultArgs,
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		...defaultArgs,
		disabled: true,
	},
};

export const Invalid: Story = {
	args: {
		...defaultArgs,
		invalid: true,
		message: 'Country is required',
	},
};

export const Block: Story = {
	args: {
		...defaultArgs,
		block: true,
	},
};

function sample<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const certificateOptions = Array.from(Array(20).keys())
	.map(() => ({
		certNumber: `CER-${Math.random().toPrecision(8).slice(2)}`,
		exporter: sample(['Lorem', 'Ipsum', 'Dolar', 'Amet']),
		status: sample(['Draft', 'Issued', 'Submitted']),
	}))
	.map((option) => ({
		...option,
		label: option.certNumber,
		value: option.certNumber,
	}));

export type CertificateOption = (typeof certificateOptions)[number];

export const CustomRender: Story = {
	render: function Render() {
		const [value, onChange] = useState<CertificateOption | null>(null);
		return (
			<Combobox
				label="Select certificate"
				hint="Start typing to see results"
				value={value}
				onChange={onChange}
				options={certificateOptions}
				renderItem={(option, inputValue) => (
					<Stack as="span">
						<span>{defaultRenderItem(option, inputValue)}</span>
						<Text fontSize="xs" color="muted">
							Exporter: {option.exporter}
						</Text>
						<Text fontSize="xs" color="muted">
							Status: {option.status}
						</Text>
					</Stack>
				)}
			/>
		);
	},
};

type NameOption = (typeof NAME_OPTIONS)[number];

export const CustomRenderName: Story = {
	render: function Render() {
		const [value, onChange] = useState<NameOption | null>(null);
		return (
			<Combobox
				label="Search users"
				value={value}
				onChange={onChange}
				options={NAME_OPTIONS}
				renderItem={(option, inputValue) => {
					return (
						<Flex as="span" alignItems="center" gap={0.5}>
							<Avatar name={option.label} size="sm" tone="action" />
							<Stack as="span">
								<span>{defaultRenderItem(option, inputValue)}</span>
								<Text fontSize="xs" color="muted">
									Role: {option.jobTitle}
								</Text>
							</Stack>
						</Flex>
					);
				}}
			/>
		);
	},
};
