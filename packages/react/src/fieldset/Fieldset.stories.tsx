import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { TextInput } from '../text-input';
import { FormStack } from '../form-stack';
import { H1 } from '../heading';
import { Text } from '../text';
import { FieldsetHint } from './FieldsetHint';
import { Fieldset, FieldsetContainer, FieldsetLegend } from './index';

const meta: Meta<typeof Fieldset> = {
	title: 'forms/Fieldset',
	component: Fieldset,
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Basic: Story = {
	args: {
		legend: 'What is your address?',
		hint: 'We will only use this to respond to your requests',
	},
	render: (args) => (
		<Fieldset {...args}>
			<FormStack>
				<TextInput
					label="Street and number"
					required
					autoComplete="street-address"
					maxWidth="xl"
				/>
				<TextInput
					label="Suburb"
					required
					autoComplete="address-level2"
					maxWidth="xl"
				/>
				<TextInput
					label="Country"
					required
					autoComplete="country"
					maxWidth="xl"
				/>
				<TextInput
					label="Postcode"
					required
					autoComplete="postal-code"
					maxWidth="sm"
				/>
			</FormStack>
		</Fieldset>
	),
};

export const LegendAsPageHeading: Story = {
	args: {
		legend: <H1>What is your date of birth?</H1>,
		hint: (
			<Text fontSize="md" color="muted">
				We will only use this to respond to your requests
			</Text>
		),
	},
	render: (args) => (
		<Fieldset {...args}>
			<FormStack>
				<TextInput
					label="Day"
					inputMode="numeric"
					maxWidth="md"
					required
					autoComplete="bday-day"
				/>
				<TextInput
					label="Month"
					inputMode="numeric"
					maxWidth="md"
					required
					autoComplete="bday-month"
				/>
				<TextInput
					label="Year"
					inputMode="numeric"
					maxWidth="md"
					required
					autoComplete="bday-year"
				/>
			</FormStack>
		</Fieldset>
	),
};

export const Modular = () => (
	<FieldsetContainer>
		<Stack gap={0.75}>
			<FieldsetLegend>What is your address?</FieldsetLegend>
			<FieldsetHint>
				We will only use this to respond to your requests
			</FieldsetHint>
		</Stack>
		<FormStack>
			<TextInput
				label="Street and number"
				required
				autoComplete="street-address"
				maxWidth="xl"
			/>
			<TextInput
				label="Suburb"
				required
				autoComplete="address-level2"
				maxWidth="xl"
			/>
			<TextInput
				label="Country"
				required
				autoComplete="country"
				maxWidth="xl"
			/>
			<TextInput
				label="Postcode"
				required
				autoComplete="postal-code"
				maxWidth="sm"
			/>
		</FormStack>
	</FieldsetContainer>
);
