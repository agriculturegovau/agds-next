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
					autoComplete="street-address"
					label="Street and number"
					maxWidth="xl"
					required
				/>
				<TextInput
					autoComplete="address-level2"
					label="Suburb"
					maxWidth="xl"
					required
				/>
				<TextInput
					autoComplete="country"
					label="Country"
					maxWidth="xl"
					required
				/>
				<TextInput
					autoComplete="postal-code"
					label="Postcode"
					maxWidth="sm"
					required
				/>
			</FormStack>
		</Fieldset>
	),
};

export const LegendAsPageHeading: Story = {
	args: {
		legend: <H1>What is your date of birth?</H1>,
		hint: (
			<Text color="muted" fontSize="md">
				We will only use this to respond to your requests
			</Text>
		),
	},
	render: (args) => (
		<Fieldset {...args}>
			<FormStack>
				<TextInput
					autoComplete="bday-day"
					inputMode="numeric"
					label="Day"
					maxWidth="md"
					required
				/>
				<TextInput
					autoComplete="bday-month"
					inputMode="numeric"
					label="Month"
					maxWidth="md"
					required
				/>
				<TextInput
					autoComplete="bday-year"
					inputMode="numeric"
					label="Year"
					maxWidth="md"
					required
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
				autoComplete="street-address"
				label="Street and number"
				maxWidth="xl"
				required
			/>
			<TextInput
				autoComplete="address-level2"
				label="Suburb"
				maxWidth="xl"
				required
			/>
			<TextInput
				autoComplete="country"
				label="Country"
				maxWidth="xl"
				required
			/>
			<TextInput
				autoComplete="postal-code"
				label="Postcode"
				maxWidth="sm"
				required
			/>
		</FormStack>
	</FieldsetContainer>
);
