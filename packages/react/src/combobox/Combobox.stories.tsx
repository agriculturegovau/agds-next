import { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { Avatar } from '../avatar';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { Combobox } from './Combobox';
import { COUNTRY_OPTIONS } from './test-utils';
import { splitLabel } from './utils';

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

const exporters = ['Lorem', 'Ipsum', 'Dolar', 'Amet'];
const status = ['Draft', 'Issued', 'Submitted'];

function sample<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export const certificateOptions = Array.from(Array(20).keys())
	.map(() => ({
		certNumber: `CER-${Math.random().toPrecision(8).slice(2)}`,
		exporter: sample(exporters),
		status: sample(status),
	}))
	.map((option) => ({
		...option,
		label: option.certNumber,
		value: option.certNumber,
	}));

export type CustomOption = (typeof certificateOptions)[number];

export const CustomRender: Story = {
	render: function ComboboxStory() {
		const [value, onChange] = useState<CustomOption | null>(null);
		return (
			<Combobox
				label="Search"
				value={value}
				onChange={onChange}
				options={certificateOptions}
				renderItem={(option, inputValue) => {
					return (
						<Stack as="span">
							<span>
								{splitLabel(option.label, inputValue).map((part, index) => {
									const isHighlighted =
										part.toLowerCase() === inputValue.toLowerCase();
									if (isHighlighted) {
										return (
											<Text
												key={index}
												as="mark"
												color="inherit"
												fontWeight="bold"
												css={{ background: 'none' }}
											>
												{part}
											</Text>
										);
									}
									return (
										<Text key={index} as="span" color="inherit">
											{part}
										</Text>
									);
								})}
							</span>
							<Text fontSize="xs" color="muted">
								Exporter: {option.exporter}
							</Text>
							<Text fontSize="xs" color="muted">
								Status: {option.status}
							</Text>
						</Stack>
					);
				}}
			/>
		);
	},
};

const nameOptions = [
	{ fullName: 'John Doe', jobTitle: 'Product Manager' },
	{ fullName: 'Jane Smith', jobTitle: 'Software Engineer' },
	{ fullName: 'Robert Johnson', jobTitle: 'UX Designer' },
	{ fullName: 'Emily Davis', jobTitle: 'Product Manager' },
	{ fullName: 'Michael Williams', jobTitle: 'Software Engineer' },
	{ fullName: 'Sarah Wilson', jobTitle: 'UX Designer' },
	{ fullName: 'David Brown', jobTitle: 'Product Manager' },
	{ fullName: 'Olivia Taylor', jobTitle: 'Software Engineer' },
	{ fullName: 'James Moore', jobTitle: 'UX Designer' },
	{ fullName: 'Sophia Clark', jobTitle: 'Product Manager' },
].map((option) => ({
	...option,
	label: option.fullName,
	value: option.fullName,
}));

type NameOption = (typeof nameOptions)[number];

export const CustomRenderName: Story = {
	render: function ComboboxStory() {
		const [value, onChange] = useState<NameOption | null>(null);
		return (
			<Combobox
				label="Search users"
				value={value}
				onChange={onChange}
				options={nameOptions}
				renderItem={(option, inputValue) => {
					return (
						<Flex as="span" alignItems="center" gap={0.5}>
							<Avatar name={option.label} size="sm" tone="action" />
							<Stack as="span">
								<span>
									{splitLabel(option.label, inputValue).map((part, index) => {
										const isHighlighted =
											part.toLowerCase() === inputValue.toLowerCase();
										if (isHighlighted) {
											return (
												<Text
													key={index}
													as="mark"
													color="inherit"
													fontWeight="bold"
													css={{ background: 'none' }}
												>
													{part}
												</Text>
											);
										}
										return (
											<Text key={index} as="span" color="inherit">
												{part}
											</Text>
										);
									})}
								</span>
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
